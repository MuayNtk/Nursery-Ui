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
  LinearProgress,
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
  Lock,
  Public
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
          borderRadius: '12px',
          textTransform: 'none',
          fontWeight: 600,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiInputBase-input': {
            fontSize: '10px' // ข้อความที่พิมพ์
          },
          '& .MuiInputLabel-root': {
            fontSize: '14px' // label
          }
        }
      },
    },
  },
});

// Types - แก้ไข Database Structure ให้ถูกต้อง
interface HeaderData {
  year: string;
  classroom: string;
  age: string;
  responsiblePerson: string;
  annualGoal: string; // 年間目標
}

interface GlobalFieldsData {
  familyCommunityCooperation: string; // 家庭・地域との連携  
  evaluationReflection: string; // 評価・反省
}
interface TabData {
  id: string | null;
  // Tab-specific fields only - เก็บใน Detail Table
  nursing: string; // การพยาบาล | 養護
  education: string; // การศึกษา | 教育
  lifeStability: string; // การดำรงชีวิตและความมั่นคงทางอารมณ์ | 生命の保持・情緒の安定
  developmentPerspective: string; // มุมมองด้านพัฒนาการ | 身体的発達・社会的発達・精神的発達
  nutritionEducation: string; // การศึกษาด้านโภชนาการ | 食育
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

const AnnualplanAdd: React.FC = () => {
  // State Management
  const [currentTab, setCurrentTab] = useState<number>(0);
  const [headerData, setHeaderData] = useState<HeaderData>({
    year: new Date().getFullYear().toString(),
    classroom: '',
    age: '',
    responsiblePerson: '',
    annualGoal: ''
  });

  // Global Fields - เก็บแยกต่างหาก
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
    { id: 0, name: '📊 Ⅰ期', protected: true },
    { id: 1, name: '📈 Ⅱ期', protected: true },
    { id: 2, name: '📉 Ⅲ期', protected: true },
    { id: 3, name: '📋 Ⅳ期', protected: true }
  ]);
  
  // Status States
  const [isHeaderSaved, setIsHeaderSaved] = useState<boolean>(false);
  const [headerSavedId, setHeaderSavedId] = useState<string | null>(null);
  const [headerSaveStatus, setHeaderSaveStatus] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle');
  // Removed auto-saving functionality
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitProgress, setSubmitProgress] = useState<ProgressStep[]>([]);
  const [showProgress, setShowProgress] = useState<boolean>(false);
  
  // Modal States
  const [showAddModal, setShowAddModal] = useState<boolean>(false);
  const [newTabName, setNewTabName] = useState<string>('');
  
  // UI States
  const [expandedSections, setExpandedSections] = useState({
    basic: true,
    global: true
  });

  // Progress calculation
  const calculateProgress = () => {
    const headerComplete = headerData.classroom && headerData.age;
    const tabsComplete = Object.values(tabsData).filter(tab => 
      tab.nursing || tab.education || tab.lifeStability || tab.developmentPerspective || tab.nutritionEducation
    ).length;
    const totalTabs = Object.keys(tabsData).length;
    return ((headerComplete ? 1 : 0) + tabsComplete) / (totalTabs + 1) * 100;
  };

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
    // Removed auto-save functionality for better performance
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

  // Removed auto-save related functions

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
      alert('กรุณากรอกข้อมูลห้องเรียนและอายุ');
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
      alert('กรุณาบันทึกข้อมูลส่วนหัวก่อน');
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
      alert('กรุณาบันทึกข้อมูลส่วนหัวก่อน');
      return;
    }

    const tabsWithData = Object.entries(tabsData).filter(([_, data]) => 
      data.nursing || data.education || data.lifeStability || 
      data.developmentPerspective || data.nutritionEducation
    ).map(([id]) => parseInt(id));

    if (tabsWithData.length === 0) {
      alert('ไม่มีข้อมูลในแท็บที่จะส่ง');
      return;
    }

    setIsSubmitting(true);
    setShowProgress(true);
    
    // Initialize progress
    const steps: ProgressStep[] = tabsWithData.map((tabId) => {
      const tabName = tabs.find(t => t.id === tabId)?.name.replace(/📊|📈|📉|📋|📝/g, '').trim() || `Tab ${tabId}`;
      return {
        id: tabId,
        label: `Submit ${tabName}`,
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
      name: `📝 ${newTabName.trim()}`,
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

  const toggleSection = (section: 'basic' | 'global') => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };
  

  return (
    <ThemeProvider theme={theme}>
      <ContentMain className="flex flex-col min-h-screen">
        <Container maxWidth="xl">
          {/* Progress Bar */}
          <Card sx={{ mb: 3, background: 'linear-gradient(90deg, #e3f2fd, #f3e5f5)', border: '2px solid #bbdefb' }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                <Description color="primary" />
                <Typography variant="h6" fontWeight="600">
                  ความคืบหน้าการกรอกข้อมูล
                </Typography>
              </Box>
              <LinearProgress 
                variant="determinate" 
                value={calculateProgress()} 
                sx={{ height: 8, borderRadius: 4, mb: 1 }}
              />
              <Typography variant="body2" color="text.secondary">
                {Math.round(calculateProgress())}% เสร็จสิ้น
              </Typography>
            </CardContent>
          </Card>

          {/* Header Section - เฉพาะข้อมูลพื้นฐาน + Annual Goal */}
          <Card sx={{ mb: 3, border: '2px solid #2196f3' }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                <Public color="primary" />
                <Typography variant="h6" fontWeight="600">
                  ข้อมูลหลัก (Main Table)
                </Typography>
                <Tooltip title="ข้อมูลพื้นฐานและเป้าหมายประจำปี">
                  <Info color="info" />
                </Tooltip>
              </Box>

              {/* Basic Header Fields */}
              <Accordion expanded={expandedSections.basic} onChange={() => toggleSection('basic')}>
                <AccordionSummary expandIcon={<ExpandMore />}>
                  <Typography fontWeight="600">ข้อมูลพื้นฐาน</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Grid container spacing={2} sx={{ mb: 3 }}>
                    <Grid item xs={12} sm={6} md={3}>
                      <TextField
                        size="small"
                        fullWidth
                        label="ปี"
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
                        label="ชื่อห้องเรียน *"
                        value={headerData.classroom}
                        onChange={handleHeaderDataChange('classroom')}
                        required
                        error={!headerData.classroom && headerSaveStatus === 'error'}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <Business sx={{ fontSize: 18 }} />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Grid>
                    
                    <Grid item xs={12} sm={6} md={3}>
                      <TextField
                        size="small"
                        fullWidth
                        label="อายุ *"
                        value={headerData.age}
                        onChange={handleHeaderDataChange('age')}
                        required
                        error={!headerData.age && headerSaveStatus === 'error'}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <Person sx={{ fontSize: 18 }} />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Grid>
                    
                    <Grid item xs={12} sm={6} md={3}>
                      <TextField
                        size="small"
                        fullWidth
                        label="ผู้รับผิดชอบ"
                        value={headerData.responsiblePerson}
                        onChange={handleHeaderDataChange('responsiblePerson')}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <Person sx={{ fontSize: 18 }} />
                            </InputAdornment>
                          ),
                        }}
                      />
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
                        placeholder="เป้าหมายประจำปีที่ต้องการพัฒนาในเด็ก..."
                        sx={{
                          "& .MuiInputBase-root": {
                            alignItems: "flex-start",
                          },
                        }}
                      />
                    </Grid>
                  </Grid>
                </AccordionDetails>
              </Accordion>

              {/* Global Fields - ลบออกจาก Header */}
              {/* Global fields จะไปแสดงในแต่ละ Tab แทน */}

              {/* Save Header Button */}
              <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', mt: 3 }}>
                <Button variant="outlined" href="/report/annualplan" startIcon={<ArrowBack />}>
                  戻る
                </Button>
                <Button
                  variant="contained"
                  size="large"
                  startIcon={headerSaveStatus === 'saving' ? <Schedule className="animate-spin" /> : <Save />}
                  disabled={headerSaveStatus === 'saving'}
                  onClick={handleSaveHeader}
                  sx={{
                    background: 'linear-gradient(45deg, #4caf50, #45a049)',
                    px: 4
                  }}
                >
                  {headerSaveStatus === 'saving' ? 'กำลังบันทึก...' : 'บันทึกข้อมูลหลัก'}
                </Button>
              </Box>
              
              {/* Header Status */}
              {headerSaveStatus !== 'idle' && (
                <Box sx={{ mt: 3 }}>
                  <Alert 
                    severity={
                      headerSaveStatus === 'saved' ? 'success' :
                      headerSaveStatus === 'error' ? 'error' :
                      'info'
                    }
                  >
                    {headerSaveStatus === 'saved' && `✅ บันทึกข้อมูลหลักสำเร็จ (ID: ${headerSavedId})`}
                    {headerSaveStatus === 'error' && '❌ กรุณากรอกข้อมูลที่จำเป็น'}
                    {headerSaveStatus === 'saving' && '⏳ กำลังบันทึกข้อมูล...'}
                  </Alert>
                </Box>
              )}
            </CardContent>
          </Card>

          {/* Progress Bar */}
          {showProgress && (
            <Box sx={{ p: 3, backgroundColor: '#f5f5f5', borderRadius: 2, mb: 3 }}>
              <Typography variant="h6" sx={{ mb: 2 }}>
                ความคืบหน้าการส่งข้อมูล
              </Typography>
              <Box sx={{ space: 2 }}>
                {submitProgress.map((step) => (
                  <Box key={step.id} sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
                    <Box
                      sx={{
                        width: 24,
                        height: 24,
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '12px',
                        fontWeight: 'bold',
                        color: 'white',
                        backgroundColor:
                          step.status === 'completed' ? '#4caf50' :
                          step.status === 'active' ? '#2196f3' :
                          step.status === 'error' ? '#f44336' :
                          '#9e9e9e'
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
                        step.status === 'error' ? 'error.main' :
                        'text.secondary'
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

          {/* Tabs Section - Detail Table Data */}
          <Card 
            sx={{ 
              opacity: isHeaderSaved ? 1 : 0.5, 
              pointerEvents: isHeaderSaved ? 'auto' : 'none',
              border: '2px solid #ff9800'
            }}
          >
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                <Description color="warning" />
                <Typography variant="h6" fontWeight="600">
                  ข้อมูลรายแท็บ (Detail Table) - แยกต่อแต่ละแท็บ
                </Typography>
              </Box>

              {/* Tab Navigation */}
              <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'wrap' }}>
                  <Tabs 
                    value={currentTab} 
                    onChange={handleTabChange}
                    variant="scrollable"
                    scrollButtons="auto"
                    sx={{ flexGrow: 1 }}
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
                            {!tab.protected && (
                              <IconButton
                                size="small"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  removeTab(tab.id);
                                }}
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
                      <Typography variant="h5" fontWeight="bold">
                        {tab.name.replace(/📊|📈|📉|📋|📝/g, "").trim()}
                      </Typography>

                      <TextField
                        size="small"
                        select
                        label="เริ่ม"
                        value={tabsData[tab.id]?.startMonth || ''}
                        onChange={handleTabDataChange(tab.id, 'startMonth')}
                        sx={{ width: 100 }}
                      >
                        {[...Array(12)].map((_, i) => (
                          <MenuItem key={i + 1} value={i + 1}>
                            {i + 1}ヵ月
                          </MenuItem>
                        ))}
                      </TextField>
                      <Typography>～</Typography>
                      <TextField
                        size="small"
                        select
                        label="สิ้นสุด"
                        value={tabsData[tab.id]?.endMonth || ''}
                        onChange={handleTabDataChange(tab.id, 'endMonth')}
                        sx={{ width: 100 }}
                      >
                        {[...Array(12)].map((_, i) => (
                          <MenuItem key={i + 1} value={i + 1}>
                            {i + 1}ヵ月
                          </MenuItem>
                        ))}
                      </TextField>

                      {tabsData[tab.id]?.lastSaved && (
                        <Typography variant="body2" color="text.secondary">
                          บันทึกล่าสุด: {tabsData[tab.id].lastSaved?.toLocaleString()}
                        </Typography>
                      )}
                    </Box>

                    {/* ねらい Section */}
                    <Card sx={{ mb: 3, backgroundColor: '#e5faf5de' }}>
                      <CardContent>
                        <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}   align="left">
                          ねらい (เป้าหมาย)
                        </Typography>
                        <Grid container spacing={2}>
                          <Grid item xs={12} md={6}>
                            <TextField
                              fullWidth
                              multiline
                              rows={2}
                              label="養護"
                              value={tabsData[tab.id]?.nursing || ''}
                              onChange={handleTabDataChange(tab.id, 'nursing')}
                              placeholder="การพยาบาล..."
                              disabled={!isHeaderSaved}
                            />
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <TextField
                              fullWidth
                              multiline
                              rows={2}
                              label="教育"
                              value={tabsData[tab.id]?.education || ''}
                              onChange={handleTabDataChange(tab.id, 'education')}
                              placeholder="การศึกษา..."
                              disabled={!isHeaderSaved}
                            />
                          </Grid>
                        </Grid>
                      </CardContent>
                    </Card>
                    
                    {/* 内容 Section */}
                    <Card sx={{ mb: 3, backgroundColor: '#f3e5f5ab' }}>
                      <CardContent>
                        <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }} align="left">
                          内容 (เนื้อหา)
                        </Typography>
                        
                        <Grid container spacing={2} sx={{ alignItems: 'flex-start' }}>
                          <Grid item xs={12} md={6}>
                            <Typography variant="subtitle1" fontWeight="700" color="primary" sx={{ mb: 1 }} align="left">
                              養護
                            </Typography>
                            <TextField
                              fullWidth
                              multiline
                              rows={8}
                              label="生命の保持・情緒の安定"
                              value={tabsData[tab.id]?.lifeStability || ''}
                              onChange={handleTabDataChange(tab.id, 'lifeStability')}
                              placeholder="การดำรงชีวิตและความมั่นคงทางอารมณ์..."
                              disabled={!isHeaderSaved}
                            />
                          </Grid>

                          <Grid item xs={12} md={6}>
                            <Typography variant="subtitle1" fontWeight="600" color="primary" sx={{ mb: 1 }} align="left">
                              教育
                            </Typography>
                            <TextField
                              fullWidth
                              multiline
                              rows={8}
                              label="身体的・社会的・精神的発達"
                              value={tabsData[tab.id]?.developmentPerspective || ''}
                              onChange={handleTabDataChange(tab.id, 'developmentPerspective')}
                              placeholder="มุมมองด้านพัฒนาการทางร่างกาย/สังคม/จิตใจ..."
                              disabled={!isHeaderSaved}
                            />
                          </Grid>
                        </Grid>
                        <Grid container spacing={2} sx={{ alignItems: 'flex-start' }}>
                          <Grid item xs={12} md={12}>
                            <Typography variant="subtitle1" fontWeight="600" color="primary" sx={{ mb: 1 }} align="left">
                              食育
                            </Typography>
                            <TextField
                              fullWidth
                              multiline
                              rows={3}
                              label="食育"
                              value={tabsData[tab.id]?.nutritionEducation || ''}
                              onChange={handleTabDataChange(tab.id, 'nutritionEducation')}
                              placeholder="การศึกษาด้านโภชนาการ..."
                              disabled={!isHeaderSaved}
                            />
                          </Grid>
                        </Grid>
                      </CardContent>
                    </Card>

                    {/* Global Fields Section - ตำแหน่งท้ายฟอร์ม */}
                    <Box sx={{ mt: 4 }}>
                      <Alert severity="warning" sx={{ mb: 3 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                          <Lock color="warning" />
                          <Typography fontWeight="600">
                            ข้อมูลส่วนกลาง - ใช้ร่วมกันทุกแท็บ
                          </Typography>
                        </Box>
                        <Typography variant="body2">
                          ข้อมูลด้านล่างจะแชร์ไปทุกแท็บ กรอกครั้งเดียว แก้ไขที่แท็บไหนก็ได้
                        </Typography>
                      </Alert>
                      
                      <Grid container spacing={3}>
                        <Grid item xs={12} md={6}>
                          <TextField
                            fullWidth
                            multiline
                            rows={5}
                            label="การร่วมมือกับครอบครัวและชุมชน | 家庭・地域との連携"
                            value={globalFields.familyCommunityCooperation}
                            onChange={handleGlobalFieldsChange('familyCommunityCooperation')}
                            placeholder="แผนการร่วมมือกับครอบครัวและชุมชน..."
                            disabled={!isHeaderSaved}
                            sx={{
                              "& .MuiInputBase-root": {
                                backgroundColor: !isHeaderSaved ? '#f5f5f5' : 'transparent'
                              }
                            }}
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
                            placeholder="การประเมินและการสะท้อนกลับ..."
                            disabled={!isHeaderSaved}
                            sx={{
                              "& .MuiInputBase-root": {
                                backgroundColor: !isHeaderSaved ? '#f5f5f5' : 'transparent'
                              }
                            }}
                          />
                        </Grid>
                      </Grid>
                    </Box>

                    {/* Tab Actions */}
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
                          tabsData[tab.id]?.status === 'completed' ? 'สำเร็จแล้ว' :
                          tabsData[tab.id]?.status === 'draft' ? 'บันทึกร่าง' :
                          'ยังไม่บันทึก'
                        }
                        color={getStatusColor(tabsData[tab.id]?.status || 'empty') as any}
                      />
                      
                      <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                        <Button 
                          variant="outlined" 
                          startIcon={<Edit />}
                          disabled={!isHeaderSaved}
                          onClick={() => handleSaveTab(tab.id, false)}
                        >
                          บันทึกร่าง
                        </Button>
                        <Button 
                          variant="contained" 
                          color="success" 
                          startIcon={<CheckCircle />}
                          disabled={!isHeaderSaved}
                          onClick={() => handleSaveTab(tab.id, true)}
                        >
                          บันทึกสำเร็จ
                        </Button>
                        <Button
                          variant="contained"
                          size="large"
                          startIcon={isSubmitting ? <Schedule className="animate-spin" /> : <CheckCircle />}
                          disabled={!isHeaderSaved || isSubmitting}
                          onClick={handleSubmitAll}
                          sx={{
                            background: 'linear-gradient(45deg, #2196f3, #9c27b0)',
                            '&:hover': {
                              background: 'linear-gradient(45deg, #1976d2, #7b1fa2)',
                            }
                          }}
                        >
                          {isSubmitting ? 'กำลังส่ง...' : 'ส่งข้อมูลทั้งหมด'}
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
            <DialogTitle>เพิ่มแท็บใหม่</DialogTitle>
            <DialogContent>
              <TextField
                fullWidth
                label="ชื่อแท็บ"
                value={newTabName}
                onChange={(e) => setNewTabName(e.target.value)}
                placeholder="เช่น: ไตรมาส 5, Q5"
                sx={{ mt: 2 }}
                onKeyPress={(e) => e.key === 'Enter' && addNewTab()}
                autoFocus
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setShowAddModal(false)}>ยกเลิก</Button>
              <Button onClick={addNewTab} variant="contained">เพิ่มแท็บ</Button>
            </DialogActions>
          </Dialog>

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

export default AnnualplanAdd;