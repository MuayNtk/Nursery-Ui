import React, { useState, useEffect, useCallback, useMemo } from 'react';
import {
  Box,
  Typography,
  TextField,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Tooltip,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  createTheme,
  ThemeProvider,
  Snackbar,
  Alert,
  CircularProgress
} from '@mui/material';
import {
  CheckCircle,
  Person,
  ExpandMore,
  Info,
  ArrowBack
} from '@mui/icons-material';
import ContentMain from '../../content/Content';

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

// Interfaces
interface Event {
  day: string;
  dayOfWeek: string;
  eventName: string;
}

interface FormData {
  pid: string;
  selectedOption: string;
  goal_care: string;
  goal_education: string;
  family_cooperation: string;
  events: Event[];
  child_goal_1: string;
  child_interaction_1: string;
  child_goal_2: string;
  child_interaction_2: string;
  environment_creation: string;
  expected_activities: string;
  care_support: string;
  individual_response: string;
  group_management: string;
  evaluation_reflection: string;
}

interface SnackbarState {
  open: boolean;
  message: string;
  severity: 'success' | 'error' | 'info' | 'warning';
}

interface EditMonthlyOneTwoProps {
  pid: string;
  selectedOption: string;
}

const defaultEvents: Event[] = [
  { day: '', dayOfWeek: '', eventName: '' },
  { day: '', dayOfWeek: '', eventName: '' },
  { day: '', dayOfWeek: '', eventName: '' },
  { day: '', dayOfWeek: '', eventName: '' }
];

const createInitialFormData = (pid: string, selectedOption: string): FormData => ({
  pid,
  selectedOption,
  goal_care: '',
  goal_education: '',
  family_cooperation: '',
  events: defaultEvents,
  child_goal_1: '',
  child_interaction_1: '',
  child_goal_2: '',
  child_interaction_2: '',
  environment_creation: '',
  expected_activities: '',
  care_support: '',
  individual_response: '',
  group_management: '',
  evaluation_reflection: ''
});

const EditMonthlyOneTwo: React.FC<EditMonthlyOneTwoProps> = ({ pid, selectedOption }) => {
  const [expandedSections, setExpandedSections] = useState({
    basic: true,
    development: true,
    additional: true
  });

  const [formData, setFormData] = useState<FormData>(() => 
    createInitialFormData(pid, selectedOption)
  );

  const [snackbar, setSnackbar] = useState<SnackbarState>({
    open: false,
    message: '',
    severity: 'success'
  });

  const [loading, setLoading] = useState(false);

  // Load data from sessionStorage
  useEffect(() => {
    try {
      const storedData = sessionStorage.getItem('monthlyData1_2');
      if (!storedData) return;

      const parsed: FormData[] = JSON.parse(storedData);
      const item = parsed.find(
        (item) => item.pid === pid && item.selectedOption === selectedOption
      );
      
      if (item) {
        setFormData({
          ...createInitialFormData(pid, selectedOption),
          ...item,
          events: Array.isArray(item.events) && item.events.length > 0 
            ? item.events 
            : defaultEvents
        });
      }
    } catch (error) {
      console.error('Failed to load data from sessionStorage:', error);
      setSnackbar({
        open: true,
        message: 'データの読み込みに失敗しました',
        severity: 'error'
      });
    }
  }, [pid, selectedOption]);

  // Keyboard shortcut: Ctrl+S to save
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 's') {
        e.preventDefault();
        handleSave();
      }
    };
    
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [formData]);

  const toggleSection = useCallback((section: 'basic' | 'development' | 'additional') => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  }, []);

  const handleChange = useCallback((field: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  }, []);

  const handleEventChange = useCallback((index: number, field: keyof Event, value: string) => {
    setFormData(prev => ({
      ...prev,
      events: prev.events.map((event, i) => 
        i === index ? { ...event, [field]: value } : event
      )
    }));
  }, []);

  const validateForm = useCallback((): boolean => {
    if (!formData.goal_care?.trim() || !formData.goal_education?.trim()) {
      setSnackbar({
        open: true,
        message: 'ねらい（養護・教育）を入力してください',
        severity: 'warning'
      });
      return false;
    }
    return true;
  }, [formData.goal_care, formData.goal_education]);

  const handleSave = useCallback(() => {
    if (!validateForm()) return;

    setLoading(true);
    
    try {
      const storedData = sessionStorage.getItem('monthlyData1_2');
      const parsed: FormData[] = storedData ? JSON.parse(storedData) : [];
      
      const existingIndex = parsed.findIndex(
        (item) => item.pid === pid && item.selectedOption === selectedOption
      );
      
      if (existingIndex >= 0) {
        parsed[existingIndex] = formData;
      } else {
        parsed.push(formData);
      }
      
      sessionStorage.setItem('monthlyData1_2', JSON.stringify(parsed));
      
      setSnackbar({
        open: true,
        message: 'データを保存しました（Ctrl+Sでも保存可能）',
        severity: 'success'
      });
    } catch (error) {
      console.error('Failed to save data:', error);
      setSnackbar({
        open: true,
        message: 'データの保存に失敗しました',
        severity: 'error'
      });
    } finally {
      setLoading(false);
    }
  }, [formData, pid, selectedOption, validateForm]);

  const handleCloseSnackbar = useCallback(() => {
    setSnackbar(prev => ({ ...prev, open: false }));
  }, []);

  const options = useMemo(() => [
    '月指導計画 0 歳児',
    '月指導計画 1・2 歳児',
    '月指導計画 3・4・5 歳児'
  ], []);

  const staffInfo = useMemo(() => [
    { label: '施設長', name: '濃部　圭子' },
    { label: '主任', name: '渡部　史朗' },
    { label: '担任', name: '中川　康嘉' }
  ], []);

  return (
    <ThemeProvider theme={theme}>
      <ContentMain className="flex flex-col min-h-screen">
        <Box sx={{ p: 3 }}>
          {/* Header Section */}
          <Grid container spacing={2} sx={{ mb: 3 }}>
            <Grid item xs={12} md={4}>
              <FormControl fullWidth size="small">
                <InputLabel>年間指導計画を選択する</InputLabel>
                <Select
                  value={selectedOption}
                  label="年間指導計画を選択する"
                  disabled
                >
                  {options.map(option => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>

          {/* Staff Information */}
          <Grid container spacing={1} sx={{ mb: 3 }}>
            {staffInfo.map(({ label, name }) => (
              <Grid item xs={12} md={4} key={label}>
                <Typography variant="body2" sx={{ display: 'flex', gap: 1 }}>
                  <strong>{label}:</strong> {name}
                </Typography>
              </Grid>
            ))}
          </Grid>

          {/* เป้าหมายประจำปี */}
          <Accordion 
            expanded={expandedSections.basic} 
            onChange={() => toggleSection('basic')} 
            sx={{ border: '2px solid #ff9800', mb: 2 }}
          >
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography fontWeight="600">เป้าหมายประจำปี (1・2歳)</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography fontWeight="bold" sx={{ mb: 2 }} align="left">
                ねらい (เป้าหมาย)
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    multiline
                    rows={2}
                    label="養護 *"
                    placeholder="การพยาบาล..."
                    value={formData.goal_care}
                    onChange={(e) => handleChange('goal_care', e.target.value)}
                    required
                    error={!formData.goal_care?.trim()}
                    aria-label="เป้าหมายการพยาบาล"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    multiline
                    rows={2}
                    label="教育 *"
                    placeholder="การศึกษา..."
                    value={formData.goal_education}
                    onChange={(e) => handleChange('goal_education', e.target.value)}
                    required
                    error={!formData.goal_education?.trim()}
                    aria-label="เป้าหมายการศึกษา"
                  />
                </Grid>
              </Grid>
              
              <Grid container spacing={2} sx={{ mt: 2 }}>
                <Grid item xs={12} md={8}>
                  <Typography fontWeight="bold" sx={{ mb: 1 }} align="left">
                    家庭・地域との連携 (การร่วมมือกับครอบครัวและชุมชน)
                  </Typography>
                  <TextField
                    fullWidth
                    multiline
                    rows={5}
                    label="家庭・地域との連携"
                    placeholder="การร่วมมือกับครอบครัวและชุมชน..."
                    value={formData.family_cooperation}
                    onChange={(e) => handleChange('family_cooperation', e.target.value)}
                    aria-label="การร่วมมือกับครอบครัว"
                  />
                </Grid>
                
                <Grid item xs={12} md={4}>
                  <Typography fontWeight="bold" sx={{ mb: 1 }} align="left">
                    行事 (กิจกรรม)
                  </Typography>
                  {formData.events.map((event, index) => (
                    <Grid container spacing={0.5} sx={{ mb: 1 }} key={index}>
                      <Grid item xs={2}>
                        <TextField
                          fullWidth
                          size="small"
                          label="日"
                          value={event.day}
                          onChange={(e) => handleEventChange(index, 'day', e.target.value)}
                          sx={{
                            '& .MuiInputBase-root': { height: 30, fontSize: '0.75rem' },
                            '& .MuiInputLabel-root': { fontSize: '0.7rem' },
                            '& .MuiInputBase-input': { padding: '4px 8px', textAlign: 'center' }
                          }}
                          aria-label={`วันที่กิจกรรม ${index + 1}`}
                        />
                      </Grid>
                      <Grid item xs={2}>
                        <TextField
                          fullWidth
                          size="small"
                          label="曜"
                          value={event.dayOfWeek}
                          onChange={(e) => handleEventChange(index, 'dayOfWeek', e.target.value)}
                          sx={{
                            '& .MuiInputBase-root': { height: 30, fontSize: '0.75rem' },
                            '& .MuiInputLabel-root': { fontSize: '0.7rem' },
                            '& .MuiInputBase-input': { padding: '4px 8px', textAlign: 'center' }
                          }}
                          aria-label={`วันในสัปดาห์ ${index + 1}`}
                        />
                      </Grid>
                      <Grid item xs={8}>
                        <TextField
                          fullWidth
                          size="small"
                          label="行事名"
                          value={event.eventName}
                          onChange={(e) => handleEventChange(index, 'eventName', e.target.value)}
                          sx={{
                            '& .MuiInputBase-root': { height: 30, fontSize: '0.75rem' },
                            '& .MuiInputLabel-root': { fontSize: '0.7rem' },
                            '& .MuiInputBase-input': { padding: '4px 8px' }
                          }}
                          aria-label={`ชื่อกิจกรรม ${index + 1}`}
                        />
                      </Grid>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>

          {/* บันทึกพัฒนาการเด็ก */}
          <Accordion 
            expanded={expandedSections.development} 
            onChange={() => toggleSection('development')} 
            sx={{ border: '2px solid #9c27b0', mb: 2 }}
          >
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Person color="secondary" />
                <Typography variant="h6" fontWeight="600">
                  子どもの発達記録 (บันทึกพัฒนาการเด็ก - 1・2歳)
                </Typography>
                <Tooltip title="เด็กแต่ละคนและข้อมูลการพัฒนา">
                  <Info color="info" />
                </Tooltip>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <Typography fontWeight="bold" sx={{ mb: 2 }} align="left">
                การจัดการข้อมูลเด็ก
              </Typography>
          
              <Grid container spacing={2} sx={{ mt: 2 }}>
                <Grid item xs={12} md={6}>
                  <Typography fontWeight="bold" sx={{ mb: 2 }} align="left">
                    ねらい (เป้าหมาย)
                  </Typography>
                  <TextField
                    fullWidth
                    multiline
                    rows={8}
                    label="ねらい"
                    placeholder="เป้าหมาย..."
                    value={formData.child_goal_1}
                    onChange={(e) => handleChange('child_goal_1', e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography fontWeight="bold" sx={{ mb: 2 }} align="left">
                    子どもとの関わり方 (保育士等の育みたい内容)
                  </Typography>
                  <TextField
                    fullWidth
                    multiline
                    rows={8}
                    label="子どもとの関わり方"
                    placeholder="วิธีการมีส่วนร่วมกับเด็ก..."
                    value={formData.child_interaction_1}
                    onChange={(e) => handleChange('child_interaction_1', e.target.value)}
                  />
                </Grid>
              </Grid>

              <Grid container spacing={2} sx={{ mt: 2 }}>
                <Grid item xs={12} md={6}>
                  <Typography fontWeight="bold" sx={{ mb: 2 }} align="left">
                    ねらい (เป้าหมาย)
                  </Typography>
                  <TextField
                    fullWidth
                    multiline
                    rows={12}
                    label="ねらい"
                    placeholder="เป้าหมาย..."
                    value={formData.child_goal_2}
                    onChange={(e) => handleChange('child_goal_2', e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography fontWeight="bold" sx={{ mb: 2 }} align="left">
                    子どもとの関わり方 (保育士等の育みたい内容)
                  </Typography>
                  <TextField
                    fullWidth
                    multiline
                    rows={12}
                    label="子どもとの関わり方"
                    placeholder="วิธีการมีส่วนร่วมกับเด็ก..."
                    value={formData.child_interaction_2}
                    onChange={(e) => handleChange('child_interaction_2', e.target.value)}
                  />
                </Grid>
              </Grid>

              <Grid container spacing={2} sx={{ mt: 2 }}>
                <Grid item xs={12} md={4}>
                  <Typography fontWeight="bold" sx={{ mb: 2 }} align="left">
                    環境づくり (การจัดสภาพแวดล้อม)
                  </Typography>
                  <TextField
                    fullWidth
                    multiline
                    rows={15}
                    label="環境づくり"
                    placeholder="การจัดสภาพแวดล้อม..."
                    value={formData.environment_creation}
                    onChange={(e) => handleChange('environment_creation', e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <Typography fontWeight="bold" sx={{ mb: 2 }} align="left">
                    予想される子どもの活動 (กิจกรรมที่คาดหวัง)
                  </Typography>
                  <TextField
                    fullWidth
                    multiline
                    rows={15}
                    label="予想される子どもの活動"
                    placeholder="กิจกรรมที่คาดหวังของเด็ก..."
                    value={formData.expected_activities}
                    onChange={(e) => handleChange('expected_activities', e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <Typography fontWeight="bold" sx={{ mb: 2 }} align="left">
                    配慮・援助 (การดูแลและช่วยเหลือ)
                  </Typography>
                  <TextField
                    fullWidth
                    multiline
                    rows={15}
                    label="配慮・援助"
                    placeholder="การดูแลและช่วยเหลือ..."
                    value={formData.care_support}
                    onChange={(e) => handleChange('care_support', e.target.value)}
                  />
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>

          {/* รายละเอียดเพิ่มเติม */}
          <Accordion 
            expanded={expandedSections.additional} 
            onChange={() => toggleSection('additional')} 
            sx={{ border: '2px solid #4caf50', mb: 2 }}
          >
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <CheckCircle color="success" />
                <Typography variant="h6" fontWeight="600">
                  รายละเอียดเพิ่มเติม (1・2歳)
                </Typography>
                <Tooltip title="ข้อมูลเพิ่มเติมสำหรับการวางแผน">
                  <Info color="info" />
                </Tooltip>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container spacing={2} sx={{ mt: 2 }}>
                <Grid item xs={12} md={4}>
                  <Typography fontWeight="bold" sx={{ mb: 2 }} align="left">
                    個別対応 (การตอบสนองรายบุคคล)
                  </Typography>
                  <TextField
                    fullWidth
                    multiline
                    rows={6}
                    label="個別対応"
                    placeholder="การตอบสนองรายบุคคล..."
                    value={formData.individual_response}
                    onChange={(e) => handleChange('individual_response', e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <Typography fontWeight="bold" sx={{ mb: 2 }} align="left">
                    組運営 (การจัดการกลุ่ม)
                  </Typography>
                  <TextField
                    fullWidth
                    multiline
                    rows={6}
                    label="組運営"
                    placeholder="การจัดการกลุ่ม..."
                    value={formData.group_management}
                    onChange={(e) => handleChange('group_management', e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <Typography fontWeight="bold" sx={{ mb: 2 }} align="left">
                    評価・反省 (การประเมินและการทบทวน)
                  </Typography>
                  <TextField
                    fullWidth
                    multiline
                    rows={6}
                    label="評価・反省"
                    placeholder="การประเมินและการทบทวน..."
                    value={formData.evaluation_reflection}
                    onChange={(e) => handleChange('evaluation_reflection', e.target.value)}
                  />
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>

          {/* Action Buttons */}
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'space-between' }}>
            <Button variant="outlined" href="/report/annualplan" startIcon={<ArrowBack />}>
              戻る
            </Button>
            <Button 
              variant="contained" 
              color="success" 
              startIcon={loading ? <CircularProgress size={20} color="inherit" /> : <CheckCircle />}
              onClick={handleSave}
              disabled={loading}
              sx={{
                background: loading ? undefined : 'linear-gradient(45deg, #2196f3, #9c27b0)',
                '&:hover': {
                  background: loading ? undefined : 'linear-gradient(45deg, #1976d2, #7b1fa2)',
                }
              }}
            >
              {loading ? '保存中...' : '修正'}
            </Button>
          </Box>
        </Box>

        {/* Snackbar for notifications */}
        <Snackbar 
          open={snackbar.open} 
          autoHideDuration={4000} 
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        >
          <Alert 
            onClose={handleCloseSnackbar} 
            severity={snackbar.severity}
            variant="filled"
            sx={{ width: '100%' }}
          >
            {snackbar.message}
          </Alert>
        </Snackbar>
      </ContentMain>
    </ThemeProvider>
  );
};

export default EditMonthlyOneTwo;