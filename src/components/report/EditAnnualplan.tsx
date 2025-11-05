import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Tabs,
  Tab,
  Card,
  CardContent,
  Chip,
  Alert,
  InputAdornment,
  MenuItem,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Tooltip
} from '@mui/material';
import {
  Save,
  CheckCircle,
  Description,
  Business,
  Person,
  CalendarToday,
  ArrowBack,
  ExpandMore,
  Info,
  Public,
  Schedule,
  Edit
} from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ContentMain from '../content/Content';

// Theme configuration
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
      light: '#42a5f5',
      dark: '#1565c0',
    },
    secondary: {
      main: '#9c27b0',
      light: '#ba68c8',
      dark: '#7b1fa2',
    },
    success: {
      main: '#2e7d32',
      light: '#4caf50',
      dark: '#1b5e20',
    },
    warning: {
      main: '#ed6c02',
      light: '#ff9800',
      dark: '#e65100',
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: '16px',
          backdropFilter: 'blur(10px)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '20px',
          textTransform: 'none',
          fontWeight: 600,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiInputBase-input': {
            fontSize: '14px'
          },
          '& .MuiInputLabel-root': {
            fontSize: '14px'
          }
        }
      },
    },
  },
});

// Types
interface HeaderData {
  year: string;
  classroom: string;
  age: string;
  responsiblePerson: string;
  annualGoal: string;
  developmentalProcess1: string;
  developmentalProcess2: string;
  developmentalProcess3: string;
}

interface TabData {
  nursing: string;
  education: string;
  lifeStability: string;
  developmentPerspective: string;
  nutritionEducation: string;
  status: 'empty' | 'draft' | 'completed';
  startMonth: number;
  endMonth: number;
}

interface TabInfo {
  id: number;
  name: string;
}

// Classroom options
const classroomOptions = [
  { value: 'ぺんぎん', label: 'ぺんぎん (เพนกวิน)' },
  { value: 'しまうま', label: 'しまうま (ม้าลาย)' },
  { value: 'ぞう', label: 'ぞう (ช้าง)' },
];

// Responsible person options
const responsiblePersonOptions = [
  { value: '田中先生', label: '田中先生 (ทานากะ เซนเซ)' },
  { value: '佐藤先生', label: '佐藤先生 (ซาโตะ เซนเซ)' },
  { value: '鈴木先生', label: '鈴木先生 (ซูซูกิ เซนเซ)' },
];

// Age options
const ageOptions = [
  { value: '0', label: '0歳' },
  { value: '1', label: '1歳' },
  { value: '2', label: '2歳' },
  { value: '3', label: '3歳' },
  { value: '4', label: '4歳' },
  { value: '5', label: '5歳' }
];

const EditAnnualplan: React.FC = () => {
  const { pid } = useParams<{ pid: string }>();
  const navigate = useNavigate();

  // State Management
  const [currentTab, setCurrentTab] = useState<number>(0);
  const [headerData, setHeaderData] = useState<HeaderData>({
    year: new Date().getFullYear().toString(),
    classroom: '',
    age: '',
    responsiblePerson: '',
    annualGoal: '',
    developmentalProcess1: '',
    developmentalProcess2: '',
    developmentalProcess3: ''
  });

  const [globalFields, setGlobalFields] = useState({
    familyCommunityCooperation: '',
    evaluationReflection: ''
  });

  const [tabsData, setTabsData] = useState<Record<number, TabData>>({
    0: {
      nursing: '',
      education: '',
      lifeStability: '',
      developmentPerspective: '',
      nutritionEducation: '',
      status: 'empty',
      startMonth: 1,
      endMonth: 3
    },
    1: {
      nursing: '',
      education: '',
      lifeStability: '',
      developmentPerspective: '',
      nutritionEducation: '',
      status: 'empty',
      startMonth: 4,
      endMonth: 6
    },
    2: {
      nursing: '',
      education: '',
      lifeStability: '',
      developmentPerspective: '',
      nutritionEducation: '',
      status: 'empty',
      startMonth: 7,
      endMonth: 9
    },
    3: {
      nursing: '',
      education: '',
      lifeStability: '',
      developmentPerspective: '',
      nutritionEducation: '',
      status: 'empty',
      startMonth: 10,
      endMonth: 12
    }
  });

  const [tabs] = useState<TabInfo[]>([
    { id: 0, name: 'Ⅰ期' },
    { id: 1, name: 'Ⅱ期' },
    { id: 2, name: 'Ⅲ期' },
    { id: 3, name: 'Ⅳ期' }
  ]);

  const [expandedSections, setExpandedSections] = useState({
    basic: true
  });

  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  // Load data from sessionStorage when component mounts
  useEffect(() => {
    const storedData = JSON.parse(sessionStorage.getItem('annualplanData') || '[]');
    const item = storedData.find((data: any) => data.pid === pid);

    if (item) {
      // Map old structure to new structure
      setHeaderData({
        year: item.year || new Date().getFullYear().toString(),
        classroom: item.classroom || '',
        age: item.age || '',
        responsiblePerson: item.homeroom_teacher || '',
        annualGoal: item.annua_goals || '',
        developmentalProcess1: item.developmentalProcess1 || '',
        developmentalProcess2: item.developmentalProcess2 || '',
        developmentalProcess3: item.developmentalProcess3 || ''
      });

      setGlobalFields({
        familyCommunityCooperation: item.familyCommunityCooperation || '',
        evaluationReflection: item.evaluationReflection || ''
      });

      // Map periods to tabs
      setTabsData({
        0: {
          nursing: item.nursing_care1 || '',
          education: item.education1 || '',
          lifeStability: item.emotional_stability1 || '',
          developmentPerspective: item.perspectives_on_physical1 || '',
          nutritionEducation: item.food_education1 || '',
          status: 'completed',
          startMonth: parseInt(item.month1) || 1,
          endMonth: parseInt(item.month2) || 3
        },
        1: {
          nursing: item.nursing_care2 || '',
          education: item.education2 || '',
          lifeStability: item.emotional_stability2 || '',
          developmentPerspective: item.perspectives_on_physical2 || '',
          nutritionEducation: item.food_education2 || '',
          status: 'completed',
          startMonth: parseInt(item.month3) || 4,
          endMonth: parseInt(item.month4) || 6
        },
        2: {
          nursing: item.nursing_care3 || '',
          education: item.education3 || '',
          lifeStability: item.emotional_stability3 || '',
          developmentPerspective: item.perspectives_on_physical3 || '',
          nutritionEducation: item.food_education3 || '',
          status: 'completed',
          startMonth: parseInt(item.month5) || 7,
          endMonth: parseInt(item.month6) || 9
        },
        3: {
          nursing: item.nursing_care4 || '',
          education: item.education4 || '',
          lifeStability: item.emotional_stability4 || '',
          developmentPerspective: item.perspectives_on_physical4 || '',
          nutritionEducation: item.food_education4 || '',
          status: 'completed',
          startMonth: parseInt(item.month7) || 10,
          endMonth: parseInt(item.month8) || 12
        }
      });
    }
  }, [pid]);

  // Utility Functions
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'success';
      case 'draft': return 'warning';
      default: return 'default';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle />;
      case 'draft': return <Edit />;
      default: return <Schedule />;
    }
  };

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setCurrentTab(newValue);
  };

  const handleHeaderDataChange = (field: keyof HeaderData) => (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setHeaderData(prev => ({
      ...prev,
      [field]: event.target.value
    }));
  };

  const handleGlobalFieldsChange = (field: keyof typeof globalFields) => (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setGlobalFields(prev => ({
      ...prev,
      [field]: event.target.value
    }));
  };

  const handleTabDataChange = (tabId: number, field: keyof TabData) => (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const value = event.target.value;
    setTabsData(prev => ({
      ...prev,
      [tabId]: {
        ...prev[tabId],
        [field]: field === 'startMonth' || field === 'endMonth' ? parseInt(value) || 0 : value
      }
    }));
  };

  const toggleSection = (section: 'basic') => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  // Save Handler
  const handleSave = async () => {
    if (!headerData.classroom || !headerData.age) {
      alert('กรุณากรอกข้อมูลห้องเรียนและอายุ | 教室と年齢を入力してください');
      return;
    }

    setIsSaving(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Map new structure back to old structure for storage
      const updatedItem = {
        pid: pid,
        year: headerData.year,
        classroom: headerData.classroom,
        age: headerData.age,
        homeroom_teacher: headerData.responsiblePerson,
        annua_goals: headerData.annualGoal,
        developmentalProcess1: headerData.developmentalProcess1,
        developmentalProcess2: headerData.developmentalProcess2,
        developmentalProcess3: headerData.developmentalProcess3,
        
        familyCommunityCooperation: globalFields.familyCommunityCooperation,
        evaluationReflection: globalFields.evaluationReflection,

        // Period 1
        nursing_care1: tabsData[0].nursing,
        education1: tabsData[0].education,
        emotional_stability1: tabsData[0].lifeStability,
        perspectives_on_physical1: tabsData[0].developmentPerspective,
        food_education1: tabsData[0].nutritionEducation,
        month1: tabsData[0].startMonth.toString(),
        month2: tabsData[0].endMonth.toString(),

        // Period 2
        nursing_care2: tabsData[1].nursing,
        education2: tabsData[1].education,
        emotional_stability2: tabsData[1].lifeStability,
        perspectives_on_physical2: tabsData[1].developmentPerspective,
        food_education2: tabsData[1].nutritionEducation,
        month3: tabsData[1].startMonth.toString(),
        month4: tabsData[1].endMonth.toString(),

        // Period 3
        nursing_care3: tabsData[2].nursing,
        education3: tabsData[2].education,
        emotional_stability3: tabsData[2].lifeStability,
        perspectives_on_physical3: tabsData[2].developmentPerspective,
        food_education3: tabsData[2].nutritionEducation,
        month5: tabsData[2].startMonth.toString(),
        month6: tabsData[2].endMonth.toString(),

        // Period 4
        nursing_care4: tabsData[3].nursing,
        education4: tabsData[3].education,
        emotional_stability4: tabsData[3].lifeStability,
        perspectives_on_physical4: tabsData[3].developmentPerspective,
        food_education4: tabsData[3].nutritionEducation,
        month7: tabsData[3].startMonth.toString(),
        month8: tabsData[3].endMonth.toString(),
      };

      const storedData = JSON.parse(sessionStorage.getItem('annualplanData') || '[]');
      const updatedData = storedData.map((item: any) =>
        item.pid === pid ? updatedItem : item
      );
      sessionStorage.setItem('annualplanData', JSON.stringify(updatedData));

      setSaveSuccess(true);
      setTimeout(() => {
        navigate('/report/annualplan');
      }, 1500);
    } catch (error) {
      console.error('Save failed:', error);
      alert('การบันทึกล้มเหลว | 保存に失敗しました');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <ContentMain className="flex flex-col min-h-screen">
        <Container maxWidth="xl">
          <Alert severity="warning" sx={{ mb: 3 }}>
            <Typography fontWeight="600">
              โหมดแก้ไข - กรุณาตรวจสอบข้อมูลก่อนบันทึก | 編集モード - 保存前にデータを確認してください
            </Typography>
            <Typography variant="body2">
              Record ID: {pid || 'N/A'}
            </Typography>
          </Alert>

          {saveSuccess && (
            <Alert severity="success" sx={{ mb: 3 }}>
              บันทึกสำเร็จ! กำลังเปลี่ยนหน้า... | 保存成功！ページを移動中...
            </Alert>
          )}

          {/* Header Section */}
          <Card sx={{ mb: 3, border: '2px solid #2196f3' }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                <Public color="primary" />
                <Typography variant="h6" fontWeight="600">
                  ข้อมูลหลัก (Main Table) | メインテーブル
                </Typography>
                <Tooltip title="ข้อมูลพื้นฐานและเป้าหมายประจำปี | 基本情報と年間目標">
                  <Info color="info" />
                </Tooltip>
              </Box>

              {/* Basic Header Fields */}
              <Accordion expanded={expandedSections.basic} onChange={() => toggleSection('basic')}>
                <AccordionSummary expandIcon={<ExpandMore />}>
                  <Typography fontWeight="600">ข้อมูลพื้นฐาน | 基本情報</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Grid container spacing={2} sx={{ mb: 3 }}>
                    <Grid item xs={12} sm={6} md={3}>
                      <TextField
                        size="small"
                        fullWidth
                        label="ปี | 年"
                        value={headerData.year}
                        onChange={handleHeaderDataChange('year')}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <CalendarToday sx={{ fontSize: 18 }} />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Grid>
                    
                    <Grid item xs={12} sm={6} md={3}>
                      <TextField
                        size="small"
                        fullWidth
                        select
                        label="ชื่อห้องเรียน * | クラス名 *"
                        value={headerData.classroom}
                        onChange={handleHeaderDataChange('classroom')}
                        required
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <Business sx={{ fontSize: 18 }} />
                            </InputAdornment>
                          ),
                        }}
                      >
                        {classroomOptions.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </TextField>
                    </Grid>
                    
                    <Grid item xs={12} sm={6} md={3}>
                      <TextField
                        size="small"
                        fullWidth
                        select
                        label="อายุ * | 年齢 *"
                        value={headerData.age}
                        onChange={handleHeaderDataChange('age')}
                        required
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <Person sx={{ fontSize: 18 }} />
                            </InputAdornment>
                          ),
                        }}
                      >
                        {ageOptions.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </TextField>
                    </Grid>
                    
                    <Grid item xs={12} sm={6} md={3}>
                      <TextField
                        size="small"
                        fullWidth
                        select
                        label="ผู้รับผิดชอบ | 担任"
                        value={headerData.responsiblePerson}
                        onChange={handleHeaderDataChange('responsiblePerson')}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <Person sx={{ fontSize: 18 }} />
                            </InputAdornment>
                          ),
                        }}
                      >
                        {responsiblePersonOptions.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </TextField>
                    </Grid>
                  </Grid>

                  {/* Annual Goal */}
                  <Grid container>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        multiline
                        rows={4}
                        label="เป้าหมายประจำปี | 年間目標（育みたい子どもの姿）"
                        value={headerData.annualGoal}
                        onChange={handleHeaderDataChange('annualGoal')}
                        placeholder="เป้าหมายประจำปีที่ต้องการพัฒนาในเด็ก... | 子どもに育みたい年間目標..."
                      />
                    </Grid>
                  </Grid>

                  {/* Developmental Process Fields */}
                  {(headerData.age === '1' || headerData.age === '2') && (
                    <>
                      <Box sx={{ mt: 3 }}>
                        <Typography fontWeight="600" sx={{ mb: 2, color: "primary.main", textAlign: "left" }}>
                          発達過程 子どもの姿 | พัฒนาการของเด็ก
                        </Typography>

                        <Box
                          sx={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
                            gap: 2,
                          }}
                        >
                          {headerData.age === '1' ? (
                            <>
                              <Typography sx={{ fontSize: "12px" }}>1 歳</Typography>
                              <Typography sx={{ fontSize: "12px" }}>1 歳 6 か月</Typography>
                              <Typography sx={{ fontSize: "12px" }}>2 歳</Typography>
                              <Typography sx={{ fontSize: "12px" }}>2 歳 11 か月</Typography>
                            </>
                          ) : (
                            <>
                              <Typography sx={{ fontSize: "12px" }}>2 歳</Typography>
                              <Typography sx={{ fontSize: "12px" }}>2 歳 6 か月</Typography>
                              <Typography sx={{ fontSize: "12px" }}>3 歳</Typography>
                              <Typography sx={{ fontSize: "12px" }}>3 歳 11 か月</Typography>
                            </>
                          )}
                        </Box>
                      </Box>

                      <Box sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                          <Grid item xs={12} md={4}>
                            <TextField
                              fullWidth
                              multiline
                              rows={4}
                              label="発達過程 子どもの姿 1 | พัฒนาการ 1"
                              value={headerData.developmentalProcess1}
                              onChange={handleHeaderDataChange('developmentalProcess1')}
                              placeholder="พัฒนาการของเด็ก ช่องที่ 1... | 発達過程 1..."
                            />
                          </Grid>
                          <Grid item xs={12} md={4}>
                            <TextField
                              fullWidth
                              multiline
                              rows={4}
                              label="発達過程 子どもの姿 2 | พัฒนาการ 2"
                              value={headerData.developmentalProcess2}
                              onChange={handleHeaderDataChange('developmentalProcess2')}
                              placeholder="พัฒนาการของเด็ก ช่องที่ 2... | 発達過程 2..."
                            />
                          </Grid>
                          <Grid item xs={12} md={4}>
                            <TextField
                              fullWidth
                              multiline
                              rows={4}
                              label="発達過程 子どもの姿 3 | พัฒนาการ 3"
                              value={headerData.developmentalProcess3}
                              onChange={handleHeaderDataChange('developmentalProcess3')}
                              placeholder="พัฒนาการของเด็ก ช่องที่ 3... | 発達過程 3..."
                            />
                          </Grid>
                        </Grid>
                      </Box>
                    </>
                  )}
                </AccordionDetails>
              </Accordion>
            </CardContent>
          </Card>

          {/* Tabs Section */}
          <Card sx={{ border: '2px solid #ff9800' }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                <Description color="warning" />
                <Typography variant="h6" fontWeight="600">
                  ข้อมูลรายแท็บ (Detail Table) | 詳細テーブル
                </Typography>
              </Box>

              {/* Tab Navigation */}
              <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }}>
                <Tabs 
                  value={currentTab} 
                  onChange={handleTabChange}
                  variant="scrollable"
                  scrollButtons="auto"
                >
                  {tabs.map((tab) => (
                    <Tab
                      key={tab.id}
                      label={
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          {tab.name}
                          <Chip
                            size="small"
                            icon={getStatusIcon(tabsData[tab.id]?.status || 'empty')}
                            color={getStatusColor(tabsData[tab.id]?.status || 'empty') as any}
                          />
                        </Box>
                      }
                      sx={{ textTransform: 'none', fontWeight: 600 }}
                    />
                  ))}
                </Tabs>
              </Box>

              {/* Tab Content */}
              {tabs.map((tab, index) => (
                currentTab === index && (
                  <Box key={tab.id}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 4, flexWrap: 'wrap' }}>
                      <Typography fontWeight="bold">
                        {tab.name}
                      </Typography>

                      <TextField
                        size="small"
                        select
                        label="เริ่ม | 開始"
                        value={tabsData[tab.id]?.startMonth || ''}
                        onChange={handleTabDataChange(tab.id, 'startMonth')}
                        sx={{ width: 100 }}
                      >
                        {[...Array(12)].map((_, i) => (
                          <MenuItem key={i + 1} value={i + 1}>
                            {i + 1}月
                          </MenuItem>
                        ))}
                      </TextField>
                      <Typography>～</Typography>
                      <TextField
                        size="small"
                        select
                        label="สิ้นสุด | 終了"
                        value={tabsData[tab.id]?.endMonth || ''}
                        onChange={handleTabDataChange(tab.id, 'endMonth')}
                        sx={{ width: 100 }}
                      >
                        {[...Array(12)].map((_, i) => (
                          <MenuItem key={i + 1} value={i + 1}>
                            {i + 1}月
                          </MenuItem>
                        ))}
                      </TextField>
                    </Box>

                    {/* ねらい Section */}
                    <Card sx={{ mb: 3, backgroundColor: '#e5faf5de' }}>
                      <CardContent>
                        <Typography fontWeight="bold" sx={{ mb: 2 }} align="left">
                          ねらい (เป้าหมาย) | ねらい
                        </Typography>
                        <Grid container spacing={2}>
                          <Grid item xs={12} md={6}>
                            <TextField
                              fullWidth
                              multiline
                              rows={2}
                              label="養護 | การพยาบาล"
                              value={tabsData[tab.id]?.nursing || ''}
                              onChange={handleTabDataChange(tab.id, 'nursing')}
                              placeholder="การพยาบาล... | 養護..."
                            />
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <TextField
                              fullWidth
                              multiline
                              rows={2}
                              label="教育 | การศึกษา"
                              value={tabsData[tab.id]?.education || ''}
                              onChange={handleTabDataChange(tab.id, 'education')}
                              placeholder="การศึกษา... | 教育..."
                            />
                          </Grid>
                        </Grid>
                      </CardContent>
                    </Card>
                    
                    {/* 内容 Section */}
                    <Card sx={{ mb: 3, backgroundColor: '#f3e5f5ab' }}>
                      <CardContent>
                        <Typography fontWeight="bold" sx={{ mb: 2 }} align="left">
                          内容 (เนื้อหา) | 内容
                        </Typography>
                        
                        <Grid container spacing={2}>
                          <Grid item xs={12} md={6}>
                            <Typography variant="subtitle1" fontWeight="700" color="primary" sx={{ mb: 1 }} align="left">
                              養護 | การพยาบาล
                            </Typography>
                            <TextField
                              fullWidth
                              multiline
                              rows={8}
                              label="生命の保持・情緒の安定 | การดำรงชีวิตและความมั่นคงทางอารมณ์"
                              value={tabsData[tab.id]?.lifeStability || ''}
                              onChange={handleTabDataChange(tab.id, 'lifeStability')}
                              placeholder="การดำรงชีวิตและความมั่นคงทางอารมณ์... | 生命の保持・情緒の安定..."
                            />
                          </Grid>

                          <Grid item xs={12} md={6}>
                            <Typography variant="subtitle1" fontWeight="600" color="primary" sx={{ mb: 1 }} align="left">
                              教育 | การศึกษา
                            </Typography>
                            <TextField
                              fullWidth
                              multiline
                              rows={8}
                              label="身体的・社会的・精神的発達 | พัฒนาการทางร่างกาย/สังคม/จิตใจ"
                              value={tabsData[tab.id]?.developmentPerspective || ''}
                              onChange={handleTabDataChange(tab.id, 'developmentPerspective')}
                              placeholder="มุมมองด้านพัฒนาการทางร่างกาย/สังคม/จิตใจ... | 身体的・社会的・精神的発達..."
                            />
                          </Grid>
                        </Grid>
                        
                        <Grid container spacing={2} sx={{ mt: 1 }}>
                          <Grid item xs={12}>
                            <Typography variant="subtitle1" fontWeight="600" color="primary" sx={{ mb: 1 }} align="left">
                              食育 | การศึกษาด้านโภชนาการ
                            </Typography>
                            <TextField
                              fullWidth
                              multiline
                              rows={3}
                              label="食育 | การศึกษาด้านโภชนาการ"
                              value={tabsData[tab.id]?.nutritionEducation || ''}
                              onChange={handleTabDataChange(tab.id, 'nutritionEducation')}
                              placeholder="การศึกษาด้านโภชนาการ... | 食育..."
                            />
                          </Grid>
                        </Grid>
                      </CardContent>
                    </Card>

                    {/* Global Fields Section */}
                    <Box sx={{ mt: 4 }}>
                      <Grid container spacing={3}>
                        <Grid item xs={12} md={6}>
                          <TextField
                            fullWidth
                            multiline
                            rows={5}
                            label="การร่วมมือกับครอบครัวและชุมชน | 家庭・地域との連携"
                            value={globalFields.familyCommunityCooperation}
                            onChange={handleGlobalFieldsChange('familyCommunityCooperation')}
                            placeholder="แผนการร่วมมือกับครอบครัวและชุมชน... | 家庭・地域との連携計画..."
                          />
                        </Grid>
                        
                        <Grid item xs={12} md={6}>
                          <TextField
                            fullWidth
                            multiline
                            rows={5}
                            label="การประเมินและการสะท้อนกลับ | 評価・反省"
                            value={globalFields.evaluationReflection}
                            onChange={handleGlobalFieldsChange('evaluationReflection')}
                            placeholder="การประเมินและการสะท้อนกลับ... | 評価・反省..."
                          />
                        </Grid>
                      </Grid>
                    </Box>

                    {/* Tab Status */}
                    <Box sx={{ 
                      display: 'flex', 
                      justifyContent: 'space-between', 
                      alignItems: 'center',
                      pt: 3,
                      borderTop: '1px solid #e0e0e0',
                      flexWrap: 'wrap',
                      gap: 2
                    }}>
                      <Chip
                        icon={getStatusIcon(tabsData[tab.id]?.status || 'empty')}
                        label={
                          tabsData[tab.id]?.status === 'completed' ? 'สำเร็จแล้ว | 完了' :
                          tabsData[tab.id]?.status === 'draft' ? 'บันทึกร่าง | 下書き' :
                          'ยังไม่บันทึก | 未保存'
                        }
                        color={getStatusColor(tabsData[tab.id]?.status || 'empty') as any}
                      />
                    </Box>
                  </Box>
                )
              ))}
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'space-between', mt: 4, mb: 4 }}>
            <Button 
              variant="outlined" 
              href="/report/annualplan" 
              startIcon={<ArrowBack />}
              disabled={isSaving}
            >
              ยกเลิก | キャンセル
            </Button>
            <Button
              variant="contained"
              size="large"
              startIcon={isSaving ? <Schedule className="animate-spin" /> : <Save />}
              disabled={isSaving}
              onClick={handleSave}
              sx={{
                background: 'linear-gradient(45deg, #4caf50, #45a049)',
                px: 4,
                '&:hover': {
                  background: 'linear-gradient(45deg, #45a049, #3d8b40)',
                }
              }}
            >
              {isSaving ? 'กำลังบันทึก... | 保存中...' : 'บันทึกการแก้ไข | 保存'}
            </Button>
          </Box>

          <style>{`
            @keyframes spin {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }
            
            .animate-spin {
              animation: spin 1s linear infinite;
            }
          `}</style>
        </Container>
      </ContentMain>
    </ThemeProvider>
  );
};

export default EditAnnualplan;