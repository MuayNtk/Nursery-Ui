import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
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
import ContentMain from "../content/Content";

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

const ViewInfoStaff: React.FC = () => {
  const { pid } = useParams<{ pid: string }>();
  const [currentTab, setCurrentTab] = useState<number>(0);
  const [expandedSections, setExpandedSections] = useState({
    basic: true
  });

  // Mock data - In real app, fetch from API using pid
  const [headerData] = useState<HeaderData>({
    year: '2025',
    classroom: 'ぺんぎん',
    age: '1',
    responsiblePerson: '田中先生',
    annualGoal: 'เป้าหมายประจำปีตัวอย่าง - พัฒนาทักษะทางสังคมและการสื่อสาร',
    developmentalProcess1: 'พัฒนาการช่วงที่ 1 - การพัฒนาทางร่างกาย',
    developmentalProcess2: 'พัฒนาการช่วงที่ 2 - การพัฒนาทางอารมณ์',
    developmentalProcess3: 'พัฒนาการช่วงที่ 3 - การพัฒนาทางสังคม'
  });

  const [tabsData] = useState<Record<number, TabData>>({
    0: {
      nursing: 'การพยาบาลไตรมาสที่ 1',
      education: 'การศึกษาไตรมาสที่ 1',
      lifeStability: 'การดำรงชีวิตและความมั่นคงทางอารมณ์ไตรมาสที่ 1',
      developmentPerspective: 'มุมมองพัฒนาการไตรมาสที่ 1',
      nutritionEducation: 'การศึกษาด้านโภชนาการไตรมาสที่ 1',
      status: 'completed',
      startMonth: 1,
      endMonth: 3
    },
    1: {
      nursing: 'การพยาบาลไตรมาสที่ 2',
      education: 'การศึกษาไตรมาสที่ 2',
      lifeStability: 'การดำรงชีวิตและความมั่นคงทางอารมณ์ไตรมาสที่ 2',
      developmentPerspective: 'มุมมองพัฒนาการไตรมาสที่ 2',
      nutritionEducation: 'การศึกษาด้านโภชนาการไตรมาสที่ 2',
      status: 'completed',
      startMonth: 4,
      endMonth: 6
    },
    2: {
      nursing: 'การพยาบาลไตรมาสที่ 3',
      education: 'การศึกษาไตรมาสที่ 3',
      lifeStability: 'การดำรงชีวิตและความมั่นคงทางอารมณ์ไตรมาสที่ 3',
      developmentPerspective: 'มุมมองพัฒนาการไตรมาสที่ 3',
      nutritionEducation: 'การศึกษาด้านโภชนาการไตรมาสที่ 3',
      status: 'completed',
      startMonth: 7,
      endMonth: 9
    },
    3: {
      nursing: 'การพยาบาลไตรมาสที่ 4',
      education: 'การศึกษาไตรมาสที่ 4',
      lifeStability: 'การดำรงชีวิตและความมั่นคงทางอารมณ์ไตรมาสที่ 4',
      developmentPerspective: 'มุมมองพัฒนาการไตรมาสที่ 4',
      nutritionEducation: 'การศึกษาด้านโภชนาการไตรมาสที่ 4',
      status: 'completed',
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

  const [globalFields] = useState({
    familyCommunityCooperation: 'แผนการร่วมมือกับครอบครัวและชุมชน - ตัวอย่างข้อมูล',
    evaluationReflection: 'การประเมินและการสะท้อนกลับ - ตัวอย่างข้อมูล'
  });

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

  const toggleSection = (section: 'basic') => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <ThemeProvider theme={theme}>
      <ContentMain>
        <Box sx={{  py: 4 }}>
          <Container maxWidth="xl">
            <Alert severity="info" sx={{ mb: 3 }}>
              <Typography fontWeight="600">
                โหมดดูข้อมูล - ไม่สามารถแก้ไขได้ | 閲覧モード - 編集不可
              </Typography>
              <Typography variant="body2">
                Record ID: {pid || 'N/A'}
              </Typography>
            </Alert>

            {/* Header Section */}
            <Card sx={{ mb: 3, border: '2px solid #2196f3' }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <Public color="primary" />
                  <Typography variant="h6" fontWeight="600">
                    ข้อมูลหลัก | メイン情報 (Main Table)
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
                          InputProps={{
                            readOnly: true,
                            startAdornment: (
                              <InputAdornment position="start">
                                <CalendarToday sx={{ fontSize: 18 }} />
                              </InputAdornment>
                            ),
                          }}
                          sx={{ backgroundColor: '#f5f5f5' }}
                        />
                      </Grid>
                      
                      <Grid item xs={12} sm={6} md={3}>
                        <TextField
                          size="small"
                          fullWidth
                          select
                          label="ชื่อห้องเรียน | 教室名"
                          value={headerData.classroom}
                          InputProps={{
                            readOnly: true,
                            startAdornment: (
                              <InputAdornment position="start">
                                <Business sx={{ fontSize: 18 }} />
                              </InputAdornment>
                            ),
                          }}
                          sx={{ backgroundColor: '#f5f5f5' }}
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
                          label="อายุ | 年齢"
                          value={headerData.age}
                          InputProps={{
                            readOnly: true,
                            startAdornment: (
                              <InputAdornment position="start">
                                <Person sx={{ fontSize: 18 }} />
                              </InputAdornment>
                            ),
                          }}
                          sx={{ backgroundColor: '#f5f5f5' }}
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
                          label="ผู้รับผิดชอบ | 担当者"
                          value={headerData.responsiblePerson}
                          InputProps={{
                            readOnly: true,
                            startAdornment: (
                              <InputAdornment position="start">
                                <Person sx={{ fontSize: 18 }} />
                              </InputAdornment>
                            ),
                          }}
                          sx={{ backgroundColor: '#f5f5f5' }}
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
                          InputProps={{ readOnly: true }}
                          sx={{ backgroundColor: '#f5f5f5' }}
                        />
                      </Grid>
                    </Grid>

                    {/* Developmental Process Fields */}
                    {(headerData.age === '1' || headerData.age === '2') && (
                      <>
                        <Box sx={{ mt: 3 }}>
                          <Typography fontWeight="600" sx={{ mb: 2, color: "primary.main", textAlign: "left" }}>
                            発達過程 子どもの | พัฒนาการของเด็ก
                          </Typography>
                          <Typography sx={{ mb: 1, color: "primary.main", textAlign: "left" }}>
                            子どもの 育つ姿 | การเติบโตของเด็ก
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
                                label="発達過程 子どもの 1 | พัฒนาการของเด็ก 1"
                                value={headerData.developmentalProcess1}
                                InputProps={{ readOnly: true }}
                                sx={{ backgroundColor: '#f5f5f5' }}
                              />
                            </Grid>
                            <Grid item xs={12} md={4}>
                              <TextField
                                fullWidth
                                multiline
                                rows={4}
                                label="発達過程 子どもの 2 | พัฒนาการของเด็ก 2"
                                value={headerData.developmentalProcess2}
                                InputProps={{ readOnly: true }}
                                sx={{ backgroundColor: '#f5f5f5' }}
                              />
                            </Grid>
                            <Grid item xs={12} md={4}>
                              <TextField
                                fullWidth
                                multiline
                                rows={4}
                                label="発達過程 子どもの 3 | พัฒนาการของเด็ก 3"
                                value={headerData.developmentalProcess3}
                                InputProps={{ readOnly: true }}
                                sx={{ backgroundColor: '#f5f5f5' }}
                              />
                            </Grid>
                          </Grid>
                        </Box>
                      </>
                    )}
                  </AccordionDetails>
                </Accordion>

                {/* Back Button */}
                <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', mt: 3 }}>
                  <Button variant="outlined" href="/report/annualplan" startIcon={<ArrowBack />}>
                    戻る | กลับ
                  </Button>
                </Box>
              </CardContent>
            </Card>

            {/* Tabs Section */}
            <Card sx={{ border: '2px solid #ff9800' }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <Description color="warning" />
                  <Typography variant="h6" fontWeight="600">
                    ข้อมูลรายแท็บ | タブ別情報 (Detail Table)
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
                          sx={{ width: 100, backgroundColor: '#f5f5f5' }}
                          InputProps={{ readOnly: true }}
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
                          sx={{ width: 100, backgroundColor: '#f5f5f5' }}
                          InputProps={{ readOnly: true }}
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
                            ねらい (เป้าหมาย | 目標)
                          </Typography>
                          <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                              <TextField
                                fullWidth
                                multiline
                                rows={2}
                                label="養護 | การพยาบาล"
                                value={tabsData[tab.id]?.nursing || ''}
                                InputProps={{ readOnly: true }}
                                sx={{ backgroundColor: '#f5f5f5' }}
                              />
                            </Grid>
                            <Grid item xs={12} md={6}>
                              <TextField
                                fullWidth
                                multiline
                                rows={2}
                                label="教育 | การศึกษา"
                                value={tabsData[tab.id]?.education || ''}
                                InputProps={{ readOnly: true }}
                                sx={{ backgroundColor: '#f5f5f5' }}
                              />
                            </Grid>
                          </Grid>
                        </CardContent>
                      </Card>
                      
                      {/* 内容 Section */}
                      <Card sx={{ mb: 3, backgroundColor: '#f3e5f5ab' }}>
                        <CardContent>
                          <Typography fontWeight="bold" sx={{ mb: 2 }} align="left">
                            内容 (เนื้อหา | 内容)
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
                                InputProps={{ readOnly: true }}
                                sx={{ backgroundColor: '#f5f5f5' }}
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
                                InputProps={{ readOnly: true }}
                                sx={{ backgroundColor: '#f5f5f5' }}
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
                                InputProps={{ readOnly: true }}
                                sx={{ backgroundColor: '#f5f5f5' }}
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
                              InputProps={{ readOnly: true }}
                              sx={{ backgroundColor: '#f5f5f5' }}
                            />
                          </Grid>
                          
                          <Grid item xs={12} md={6}>
                            <TextField
                              fullWidth
                              multiline
                              rows={5}
                              label="การประเมินและการสะท้อนกลับ | 評価・反省"
                              value={globalFields.evaluationReflection}
                              InputProps={{ readOnly: true }}
                              sx={{ backgroundColor: '#f5f5f5' }}
                            />
                          </Grid>
                        </Grid>
                      </Box>

                      {/* Status Display */}
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
                            tabsData[tab.id]?.status === 'draft' ? 'บันทึกร่าง | 下書き保存' :
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
          </Container>
        </Box>
      </ContentMain>
    </ThemeProvider>
  );
};

export default ViewInfoStaff;