import React, { useState } from 'react';
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
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
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
  Add,
  Close,
  Schedule,
  CheckCircle,
  Description,
  Business,
  Person,
  CalendarToday,
  Edit,
  ArrowBack,
  ExpandMore,
  Info,
  Public
} from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ContentMain from "../content/Content";
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // ✅ เพิ่ม i18n
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

interface GlobalFieldsData {
  familyCommunityCooperation: string;
  evaluationReflection: string;
}

interface TabData {
  id: string | null;
  nursing: string;
  education: string;
  lifeStability: string;
  developmentPerspective: string;
  nutritionEducation: string;
  status: 'empty' | 'draft' | 'completed';
  headerId: string | null;
  lastSaved?: Date;
  startMonth: number;
  endMonth: number;
}

interface TabInfo {
  id: number;
  name: string;
  protected: boolean;
}

interface ProgressStep {
  id: number;
  label: string;
  status: 'pending' | 'active' | 'completed' | 'error';
}

// Classroom options (Animal names)
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

const AnnualplanAdd: React.FC = () => {
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

  const [globalFields, setGlobalFields] = useState<GlobalFieldsData>({
    familyCommunityCooperation: '',
    evaluationReflection: ''
  });
  
  const [tabsData, setTabsData] = useState<Record<number, TabData>>({
    0: {
      id: null,
      nursing: '',
      education: '',
      lifeStability: '',
      developmentPerspective: '',
      nutritionEducation: '',
      status: 'empty',
      headerId: null,
      startMonth: 1,
      endMonth: 3
    },
    1: {
      id: null,
      nursing: '',
      education: '',
      lifeStability: '',
      developmentPerspective: '',
      nutritionEducation: '',
      status: 'empty',
      headerId: null,
      startMonth: 4,
      endMonth: 6
    },
    2: {
      id: null,
      nursing: '',
      education: '',
      lifeStability: '',
      developmentPerspective: '',
      nutritionEducation: '',
      status: 'empty',
      headerId: null,
      startMonth: 7,
      endMonth: 9
    },
    3: {
      id: null,
      nursing: '',
      education: '',
      lifeStability: '',
      developmentPerspective: '',
      nutritionEducation: '',
      status: 'empty',
      headerId: null,
      startMonth: 10,
      endMonth: 12
    }
  });
  
  const [tabs, setTabs] = useState<TabInfo[]>([
    { id: 0, name: 'Ⅰ期', protected: true },
    { id: 1, name: 'Ⅱ期', protected: true },
    { id: 2, name: 'Ⅲ期', protected: true },
    { id: 3, name: 'Ⅳ期', protected: true }
  ]);
  
  // Status States
  const [isHeaderSaved, setIsHeaderSaved] = useState<boolean>(false);
  const [headerSavedId, setHeaderSavedId] = useState<string | null>(null);
  const [headerSaveStatus, setHeaderSaveStatus] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitProgress, setSubmitProgress] = useState<ProgressStep[]>([]);
  const [showProgress, setShowProgress] = useState<boolean>(false);
  
  // Modal States
  const [showAddModal, setShowAddModal] = useState<boolean>(false);
  const [newTabName, setNewTabName] = useState<string>('');
  
  // UI States
  const [expandedSections, setExpandedSections] = useState({
    basic: true
  });
  
  // Age options for dropdown
  const ageOptions = [
    { value: '0', label: '0歳' },
    { value: '1', label: '1歳' },
    { value: '2', label: '2歳' },
    { value: '3', label: '3歳' },
    { value: '4', label: '4歳' },
    { value: '5', label: '5歳' }
  ];

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

  const handleGlobalFieldsChange = (field: keyof GlobalFieldsData) => (
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

  // API Simulation Functions
  const saveHeaderData = async (_data: HeaderData): Promise<{ success: boolean; id: string; message: string }> => {
    await new Promise(resolve => setTimeout(resolve, 1500));
    return {
      success: true,
      id: `HDR_${Date.now()}`,
      message: 'Header saved successfully'
    };
  };

  const saveIndividualTab = async (tabId: number, _data: TabData): Promise<{ success: boolean; id: string; message: string }> => {
    await new Promise(resolve => setTimeout(resolve, 800));
    return {
      success: true,
      id: `TAB_${tabId}_${Date.now()}`,
      message: `Tab ${tabId} saved successfully`
    };
  };

  const saveBulkTabs = async (tabId: number, _data: TabData): Promise<{ success: boolean; id: string; message: string }> => {
    await new Promise(resolve => setTimeout(resolve, 1200));
    return {
      success: true,
      id: `BULK_TAB_${tabId}_${Date.now()}`,
      message: `Tab ${tabId} submitted successfully`
    };
  };

  // Header Save Handler
  const handleSaveHeader = async () => {
    if (!headerData.classroom || !headerData.age) {
      alert('กรุณากรอกข้อมูลห้องเรียนและอายุ | 教室と年齢を入力してください');
      return;
    }

    setHeaderSaveStatus('saving');
    try {
      const result = await saveHeaderData(headerData);
      if (result.success) {
        setHeaderSavedId(result.id);
        setIsHeaderSaved(true);
        setHeaderSaveStatus('saved');
        
        // Update all tabs with header ID
        setTabsData(prev => {
          const updated = { ...prev };
          Object.keys(updated).forEach(key => {
            updated[parseInt(key)].headerId = result.id;
          });
          return updated;
        });
      }
    } catch (error) {
      setHeaderSaveStatus('error');
      console.error('Header save failed:', error);
    }
  };

  // Manual Save Tab
  const handleSaveTab = async (tabId: number, asCompleted: boolean = false) => {
    if (!isHeaderSaved) {
      alert('กรุณาบันทึกข้อมูลส่วนหัวก่อน | まずヘッダー情報を保存してください');
      return;
    }

    try {
      const result = await saveIndividualTab(tabId, tabsData[tabId]);

      if (result.success) {
        setTabsData(prev => ({
          ...prev,
          [tabId]: {
            ...prev[tabId],
            id: result.id,
            status: asCompleted ? 'completed' : 'draft',
            lastSaved: new Date()
          }
        }));
      }
    } catch (error) {
      console.error('Manual save failed:', error);
    }
  };

  // Submit All Handler
  const handleSubmitAll = async () => {
    if (!isHeaderSaved) {
      alert('กรุณาบันทึกข้อมูลส่วนหัวก่อน | まずヘッダー情報を保存してください');
      return;
    }

    const tabsWithData = Object.entries(tabsData).filter(([_, data]) => 
      data.nursing || data.education || data.lifeStability || 
      data.developmentPerspective || data.nutritionEducation
    ).map(([id]) => parseInt(id));

    if (tabsWithData.length === 0) {
      alert('ไม่มีข้อมูลในแท็บที่จะส่ง | 送信するタブのデータがありません');
      return;
    }

    setIsSubmitting(true);
    setShowProgress(true);
    
    // Initialize progress
    const steps: ProgressStep[] = tabsWithData.map((tabId) => {
      const tabName = tabs.find(t => t.id === tabId)?.name.replace(/📊|📈|📉|📋|📝/g, '').trim() || `Tab ${tabId}`;
      return {
        id: tabId,
        label: `${tabName} を送信 | ส่ง ${tabName}`,
        status: 'pending'
      };
    });
    setSubmitProgress(steps);

    try {
      for (let i = 0; i < tabsWithData.length; i++) {
        const tabId = tabsWithData[i];
        
        // Update progress to active
        setSubmitProgress(prev => prev.map(step => 
          step.id === tabId ? { ...step, status: 'active' } : step
        ));

        const result = await saveBulkTabs(tabId, tabsData[tabId]);

        if (result.success) {
          // Update tab data
          setTabsData(prev => ({
            ...prev,
            [tabId]: {
              ...prev[tabId],
              id: result.id,
              status: 'completed',
              lastSaved: new Date()
            }
          }));

          // Update progress to completed
          setSubmitProgress(prev => prev.map(step => 
            step.id === tabId ? { ...step, status: 'completed' } : step
          ));

          await new Promise(resolve => setTimeout(resolve, 500));
        } else {
          // Update progress to error
          setSubmitProgress(prev => prev.map(step => 
            step.id === tabId ? { ...step, status: 'error' } : step
          ));
        }
      }
    } catch (error) {
      console.error('Submit all failed:', error);
      setSubmitProgress(prev => prev.map(step => 
        step.status === 'active' ? { ...step, status: 'error' } : step
      ));
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setShowProgress(false);
      }, 3000);
    }
  };

  const addNewTab = () => {
    if (!newTabName.trim()) return;

    const newTabId = Date.now();
    const newTab: TabInfo = {
      id: newTabId,
      name: newTabName.trim(),
      protected: false
    };

    setTabs(prev => [...prev, newTab]);
    setTabsData(prev => ({
      ...prev,
      [newTabId]: {
        id: null,
        nursing: '',
        education: '',
        lifeStability: '',
        developmentPerspective: '',
        nutritionEducation: '',
        status: 'empty',
        headerId: headerSavedId,
        startMonth: 1,
        endMonth: 3
      }
    }));

    setNewTabName('');
    setShowAddModal(false);
    setCurrentTab(tabs.length);
  };

  const removeTab = (tabId: number) => {
    setTabs(prev => prev.filter(tab => tab.id !== tabId));
    setTabsData(prev => {
      const updated = { ...prev };
      delete updated[tabId];
      return updated;
    });

    if (currentTab >= tabs.length - 1) {
      setCurrentTab(Math.max(0, tabs.length - 2));
    }
  };

  const toggleSection = (section: 'basic') => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };
  const { t } = useTranslation();
   const navigate = useNavigate();

  return (
  <ThemeProvider theme={theme}>
  <ContentMain>
    <Box sx={{ minHeight: '100vh', py: 4 }}>
      <Container maxWidth="xl">

        {/* Header Section */}
        <Card sx={{ mb: 3, border: '2px solid #2196f3' }}>
          <CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
              <Public color="primary" />
              <Typography variant="h6" fontWeight="600">
                {t('annualplan.header_main_title')}
              </Typography>
              <Tooltip title={t('annualplan.header_tooltip')}>
                <Info color="info" />
              </Tooltip>
            </Box>

            {/* Basic Header Fields */}
            <Accordion expanded={expandedSections.basic} onChange={() => toggleSection('basic')}>
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography fontWeight="600">{t('annualplan.basic_info')}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Grid container spacing={2} sx={{ mb: 3 }}>
                  <Grid item xs={12} sm={6} md={3}>
                    <TextField
                      size="small"
                      fullWidth
                      label={t('annualplan.field_year')}
                      value={headerData.year}
                      onChange={handleHeaderDataChange('year')}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <CalendarToday sx={{ fontSize: 18 }} />
                          </InputAdornment>
                        )
                      }}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6} md={3}>
                    <TextField
                      size="small"
                      fullWidth
                      select
                      label={t('annualplan.field_classroom')}
                      value={headerData.classroom}
                      onChange={handleHeaderDataChange('classroom')}
                      required
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Business sx={{ fontSize: 18 }} />
                          </InputAdornment>
                        )
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
                      label={t('annualplan.field_age')}
                      value={headerData.age}
                      onChange={handleHeaderDataChange('age')}
                      required
                      error={!headerData.age && headerSaveStatus === 'error'}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Person sx={{ fontSize: 18 }} />
                          </InputAdornment>
                        )
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
                      label={t('annualplan.field_responsible')}
                      value={headerData.responsiblePerson}
                      onChange={handleHeaderDataChange('responsiblePerson')}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Person sx={{ fontSize: 18 }} />
                          </InputAdornment>
                        )
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
                      label={t('annualplan.annual_goal_label')}
                      value={headerData.annualGoal}
                      onChange={handleHeaderDataChange('annualGoal')}
                      placeholder={t('annualplan.annual_goal_ph')}
                      sx={{ "& .MuiInputBase-root": { alignItems: "flex-start" } }}
                    />
                  </Grid>
                </Grid>

                {/* Developmental Process Fields */}
                {(headerData.age === '1' || headerData.age === '2') && (
                  <>
                    <Box sx={{ mt: 3 }}>
                      <Typography fontWeight="600" sx={{ mb: 2, color: "primary.main", textAlign: "left" }}>
                        {t('annualplan.dev_process_title')}
                      </Typography>
                      <Typography sx={{ mb: 1, color: "primary.main", textAlign: "left" }}>
                        {t('annualplan.child_growth_title')}
                      </Typography>

                      <Box sx={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))", gap: 2 }}>
                        {headerData.age === '1' ? (
                          <>
                            <Typography sx={{ fontSize: "12px" }}>{t('annualplan.age_m1')}</Typography>
                            <Typography sx={{ fontSize: "12px" }}>{t('annualplan.age_m1_6')}</Typography>
                            <Typography sx={{ fontSize: "12px" }}>{t('annualplan.age_m2')}</Typography>
                            <Typography sx={{ fontSize: "12px" }}>{t('annualplan.age_m2_11')}</Typography>
                          </>
                        ) : (
                          <>
                            <Typography sx={{ fontSize: "12px" }}>{t('annualplan.age2_m2')}</Typography>
                            <Typography sx={{ fontSize: "12px" }}>{t('annualplan.age2_m2_6')}</Typography>
                            <Typography sx={{ fontSize: "12px" }}>{t('annualplan.age2_m3')}</Typography>
                            <Typography sx={{ fontSize: "12px" }}>{t('annualplan.age2_m3_11')}</Typography>
                          </>
                        )}
                      </Box>
                    </Box>

                    <Box sx={{ mt: 3 }}>
                      <Grid container spacing={2}>
                        <Grid item xs={12} md={4}>
                          <TextField
                            fullWidth multiline rows={4}
                            label={t('annualplan.dev1_label')}
                            value={headerData.developmentalProcess1}
                            onChange={handleHeaderDataChange('developmentalProcess1')}
                            placeholder={t('annualplan.dev1_ph')}
                            sx={{ "& .MuiInputBase-root": { alignItems: "flex-start" } }}
                          />
                        </Grid>
                        <Grid item xs={12} md={4}>
                          <TextField
                            fullWidth multiline rows={4}
                            label={t('annualplan.dev2_label')}
                            value={headerData.developmentalProcess2}
                            onChange={handleHeaderDataChange('developmentalProcess2')}
                            placeholder={t('annualplan.dev2_ph')}
                            sx={{ "& .MuiInputBase-root": { alignItems: "flex-start" } }}
                          />
                        </Grid>
                        <Grid item xs={12} md={4}>
                          <TextField
                            fullWidth multiline rows={4}
                            label={t('annualplan.dev3_label')}
                            value={headerData.developmentalProcess3}
                            onChange={handleHeaderDataChange('developmentalProcess3')}
                            placeholder={t('annualplan.dev3_ph')}
                            sx={{ "& .MuiInputBase-root": { alignItems: "flex-start" } }}
                          />
                        </Grid>
                      </Grid>
                    </Box>
                  </>
                )}
              </AccordionDetails>
            </Accordion>

            {/* Save Header Button */}
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', mt: 3 }}>
              <Button variant="outlined" href="/report/annualplan" startIcon={<ArrowBack />}>
                {t('annualplan.btn_back')}
              </Button>
              <Button
                variant="contained"
                size="large"
                startIcon={headerSaveStatus === 'saving' ? <Schedule className="animate-spin" /> : <Save />}
                disabled={headerSaveStatus === 'saving'}
                onClick={handleSaveHeader}
                sx={{ background: 'linear-gradient(45deg, #4caf50, #45a049)', px: 4 }}
              >
                {headerSaveStatus === 'saving' ? t('annualplan.btn_saving') : t('annualplan.btn_save_main')}
              </Button>
            </Box>

            {/* Header Status */}
            {headerSaveStatus !== 'idle' && (
              <Box sx={{ mt: 3 }}>
                <Alert
                  severity={
                    headerSaveStatus === 'saved' ? 'success' :
                    headerSaveStatus === 'error' ? 'error' : 'info'
                  }
                >
                  {headerSaveStatus === 'saved' && t('annualplan.header_saved', { id: headerSavedId || '' })}
                  {headerSaveStatus === 'error' && t('annualplan.header_error')}
                  {headerSaveStatus === 'saving' && t('annualplan.header_saving')}
                </Alert>
              </Box>
            )}
          </CardContent>
        </Card>

        {/* Progress Bar */}
        {showProgress && (
          <Box sx={{ p: 3, backgroundColor: '#f5f5f5', borderRadius: 2, mb: 3 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              {t('annualplan.progress_title')}
            </Typography>
            <Box sx={{ space: 2 }}>
              {submitProgress.map((step) => (
                <Box key={step.id} sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
                  <Box
                    sx={{
                      width: 24, height: 24, borderRadius: '50%', display: 'flex',
                      alignItems: 'center', justifyContent: 'center', fontSize: '12px',
                      fontWeight: 'bold', color: 'white',
                      backgroundColor:
                        step.status === 'completed' ? '#4caf50' :
                        step.status === 'active' ? '#2196f3' :
                        step.status === 'error' ? '#f44336' : '#9e9e9e'
                    }}
                  >
                    {step.status === 'completed' ? '✓' :
                     step.status === 'error' ? '✗' :
                     step.status === 'active' ? '•' : '○'}
                  </Box>
                  <Typography
                    color={
                      step.status === 'completed' ? 'success.main' :
                      step.status === 'active' ? 'primary.main' :
                      step.status === 'error' ? 'error.main' : 'text.secondary'
                    }
                    fontWeight={step.status === 'active' ? 'bold' : 'normal'}
                  >
                    {step.label}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        )}

        {/* Tabs Section */}
        <Card sx={{ opacity: isHeaderSaved ? 1 : 0.5, pointerEvents: isHeaderSaved ? 'auto' : 'none', border: '2px solid #ff9800' }}>
          <CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
              <Description color="warning" />
              <Typography variant="h6" fontWeight="600">
                {t('annualplan.detail_title')}
              </Typography>
            </Box>

            {/* Tab Navigation */}
            <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'wrap' }}>
                <Tabs value={currentTab} onChange={handleTabChange} variant="scrollable" scrollButtons="auto" sx={{ flexGrow: 1 }}>
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
                          {!tab.protected && (
                            <IconButton
                              size="small"
                              onClick={(e) => { e.stopPropagation(); removeTab(tab.id); }}
                              sx={{ ml: 1, color: 'error.main' }}
                            >
                              <Close fontSize="small" />
                            </IconButton>
                          )}
                        </Box>
                      }
                      sx={{ textTransform: 'none', fontWeight: 600 }}
                    />
                  ))}
                </Tabs>

                <IconButton
                  onClick={() => setShowAddModal(true)}
                  disabled={!isHeaderSaved}
                  color="primary"
                  sx={{ border: '2px dashed', borderColor: 'primary.main' }}
                >
                  <Add />
                </IconButton>
              </Box>
            </Box>

            {/* Tab Content */}
            {tabs.map((tab, index) => (
              currentTab === index && (
                <Box key={tab.id}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 4, flexWrap: 'wrap' }}>
                    <Typography fontWeight="bold">
                      {tab.name.replace(/📊|📈|📉|📋|📝/g, "").trim()}
                    </Typography>

                    <TextField
                      size="small"
                      select
                      label={t('annualplan.period_start')}
                      value={tabsData[tab.id]?.startMonth || ''}
                      onChange={handleTabDataChange(tab.id, 'startMonth')}
                      sx={{ width: 100 }}
                    >
                      {[...Array(12)].map((_, i) => (
                        <MenuItem key={i + 1} value={i + 1}>
                          {(i + 1) + t('annualplan.months_suffix')}
                        </MenuItem>
                      ))}
                    </TextField>
                    <Typography> {t('annualplan.period_to')} </Typography>
                    <TextField
                      size="small"
                      select
                      label={t('annualplan.period_end')}
                      value={tabsData[tab.id]?.endMonth || ''}
                      onChange={handleTabDataChange(tab.id, 'endMonth')}
                      sx={{ width: 100 }}
                    >
                      {[...Array(12)].map((_, i) => (
                        <MenuItem key={i + 1} value={i + 1}>
                          {(i + 1) + t('annualplan.months_suffix')}
                        </MenuItem>
                      ))}
                    </TextField>

                    {tabsData[tab.id]?.lastSaved && (
                      <Typography variant="body2" color="text.secondary">
                        {t('annualplan.last_saved')}: {tabsData[tab.id].lastSaved?.toLocaleString()}
                      </Typography>
                    )}
                  </Box>

                  {/* Aims */}
                  <Card sx={{ mb: 3, backgroundColor: '#e5faf5de' }}>
                    <CardContent>
                      <Typography fontWeight="bold" sx={{ mb: 2 }} align="left">
                        {t('annualplan.aim_title')}
                      </Typography>
                      <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                          <TextField
                            fullWidth multiline rows={2}
                            label={t('annualplan.aim_nursing_label')}
                            value={tabsData[tab.id]?.nursing || ''}
                            onChange={handleTabDataChange(tab.id, 'nursing')}
                            placeholder={t('annualplan.aim_nursing_ph')}
                            disabled={!isHeaderSaved}
                          />
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <TextField
                            fullWidth multiline rows={2}
                            label={t('annualplan.aim_education_label')}
                            value={tabsData[tab.id]?.education || ''}
                            onChange={handleTabDataChange(tab.id, 'education')}
                            placeholder={t('annualplan.aim_education_ph')}
                            disabled={!isHeaderSaved}
                          />
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>

                  {/* Content */}
                  <Card sx={{ mb: 3, backgroundColor: '#f3e5f5ab' }}>
                    <CardContent>
                      <Typography fontWeight="bold" sx={{ mb: 2 }} align="left">
                        {t('annualplan.content_title')}
                      </Typography>

                      <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                          <Typography variant="subtitle1" fontWeight="700" color="primary" sx={{ mb: 1 }} align="left">
                            {t('annualplan.content_nursing_title')}
                          </Typography>
                          <TextField
                            fullWidth multiline rows={8}
                            label={t('annualplan.content_life_stability_label')}
                            value={tabsData[tab.id]?.lifeStability || ''}
                            onChange={handleTabDataChange(tab.id, 'lifeStability')}
                            placeholder={t('annualplan.content_life_stability_ph')}
                            disabled={!isHeaderSaved}
                          />
                        </Grid>

                        <Grid item xs={12} md={6}>
                          <Typography variant="subtitle1" fontWeight="600" color="primary" sx={{ mb: 1 }} align="left">
                            {t('annualplan.content_education_title')}
                          </Typography>
                          <TextField
                            fullWidth multiline rows={8}
                            label={t('annualplan.content_dev_perspective_label')}
                            value={tabsData[tab.id]?.developmentPerspective || ''}
                            onChange={handleTabDataChange(tab.id, 'developmentPerspective')}
                            placeholder={t('annualplan.content_dev_perspective_ph')}
                            disabled={!isHeaderSaved}
                          />
                        </Grid>
                      </Grid>

                      <Grid container spacing={2} sx={{ mt: 1 }}>
                        <Grid item xs={12}>
                          <Typography variant="subtitle1" fontWeight="600" color="primary" sx={{ mb: 1 }} align="left">
                            {t('annualplan.content_nutrition_title')}
                          </Typography>
                          <TextField
                            fullWidth multiline rows={3}
                            label={t('annualplan.content_nutrition_label')}
                            value={tabsData[tab.id]?.nutritionEducation || ''}
                            onChange={handleTabDataChange(tab.id, 'nutritionEducation')}
                            placeholder={t('annualplan.content_nutrition_ph')}
                            disabled={!isHeaderSaved}
                          />
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>

                  {/* Global Fields */}
                  <Box sx={{ mt: 4 }}>
                    <Grid container spacing={3}>
                      <Grid item xs={12} md={6}>
                        <TextField
                          fullWidth multiline rows={5}
                          label={t('annualplan.global_family_title')}
                          value={globalFields.familyCommunityCooperation}
                          onChange={handleGlobalFieldsChange('familyCommunityCooperation')}
                          placeholder={t('annualplan.global_family_ph')}
                          disabled={!isHeaderSaved}
                          sx={{ "& .MuiInputBase-root": { backgroundColor: !isHeaderSaved ? '#f5f5f5' : 'transparent' } }}
                        />
                      </Grid>

                      <Grid item xs={12} md={6}>
                        <TextField
                          fullWidth multiline rows={5}
                          label={t('annualplan.global_eval_title')}
                          value={globalFields.evaluationReflection}
                          onChange={handleGlobalFieldsChange('evaluationReflection')}
                          placeholder={t('annualplan.global_eval_ph')}
                          disabled={!isHeaderSaved}
                          sx={{ "& .MuiInputBase-root": { backgroundColor: !isHeaderSaved ? '#f5f5f5' : 'transparent' } }}
                        />
                      </Grid>
                    </Grid>
                  </Box>

                  {/* Tab Actions */}
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', pt: 3, borderTop: '1px solid #e0e0e0', flexWrap: 'wrap', gap: 2 }}>
                    <Chip
                      icon={getStatusIcon(tabsData[tab.id]?.status || 'empty')}
                      label={
                        tabsData[tab.id]?.status === 'completed' ? t('annualplan.chip_status_completed') :
                        tabsData[tab.id]?.status === 'draft' ? t('annualplan.chip_status_draft') : t('annualplan.chip_status_empty')
                      }
                      color={getStatusColor(tabsData[tab.id]?.status || 'empty') as any}
                    />

                    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                      <Button variant="outlined" startIcon={<Edit />} disabled={!isHeaderSaved} onClick={() => handleSaveTab(tab.id, false)}>
                        {t('annualplan.btn_save_draft')}
                      </Button>
                      <Button variant="contained" color="success" startIcon={<CheckCircle />} disabled={!isHeaderSaved} onClick={() => handleSaveTab(tab.id, true)}>
                        {t('annualplan.btn_save_complete')}
                      </Button>
                      <Button
                        variant="contained"
                        size="large"
                        startIcon={isSubmitting ? <Schedule className="animate-spin" /> : <CheckCircle />}
                        disabled={!isHeaderSaved || isSubmitting}
                        onClick={handleSubmitAll}
                        sx={{ background: 'linear-gradient(45deg, #2196f3, #9c27b0)', '&:hover': { background: 'linear-gradient(45deg, #1976d2, #7b1fa2)' } }}
                      >
                        {isSubmitting ? t('annualplan.btn_submitting') : t('annualplan.btn_submit_all')}
                      </Button>
                    </Box>
                  </Box>
                </Box>
              )
            ))}
          </CardContent>
        </Card>

        {/* Add Tab Modal */}
        <Dialog open={showAddModal} onClose={() => setShowAddModal(false)} maxWidth="sm" fullWidth>
          <DialogTitle>{t('annualplan.modal_add_tab_title')}</DialogTitle>
          <DialogContent>
            <TextField
              fullWidth
              label={t('annualplan.modal_tab_name')}
              value={newTabName}
              onChange={(e) => setNewTabName(e.target.value)}
              placeholder={t('annualplan.modal_tab_name_ph')}
              sx={{ mt: 2 }}
              onKeyPress={(e) => e.key === 'Enter' && addNewTab()}
              autoFocus
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setShowAddModal(false)}>{t('annualplan.modal_cancel')}</Button>
            <Button onClick={addNewTab} variant="contained">{t('annualplan.modal_add')}</Button>
          </DialogActions>
        </Dialog>

        <style>{`
          @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
          .animate-spin { animation: spin 1s linear infinite; }
        `}</style>
      </Container>
    </Box>
  </ContentMain>
</ThemeProvider>

  );
};

export default AnnualplanAdd;