import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  TextField,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Tooltip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  createTheme,
  ThemeProvider,
  Card,
  CardContent
} from '@mui/material';
import {
  CheckCircle,
  Person,
  ExpandMore,
  Info,
  Add,
  Edit,
  Delete,
  Save,
  Cancel,
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
interface ChildDevelopmentRecord {
  id: string;
  name: string;
  monthAge: string;
  livingStyle: string;
  interaction: string;
}

interface EditMonthlyZeroProps {
  pid: string;
  selectedOption: string;
}

interface EventData {
  day: string;
  weekday: string;
  eventName: string;
}

const EditMonthlyZero: React.FC<EditMonthlyZeroProps> = ({ pid, selectedOption }) => {
  const navigate = useNavigate();

  // State for form data
  const [formData, setFormData] = useState({
    pid: pid,
    selectedOption: selectedOption,
    // เป้าหมายประจำปี
    nursingGoal: '',
    educationGoal: '',
    familyCooperation: '',
    events: [
      { day: '', weekday: '', eventName: '' },
      { day: '', weekday: '', eventName: '' },
      { day: '', weekday: '', eventName: '' },
      { day: '', weekday: '', eventName: '' }
    ] as EventData[],
    // รายละเอียดเพิ่มเติม
    environmentNursing: '',
    lifeAndPlayEducation: '',
    healthSafety: '',
    organizationManagement: '',
    evaluationReflection: ''
  });

  // State for child records
  const [childRecords, setChildRecords] = useState<ChildDevelopmentRecord[]>([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [editingRecord, setEditingRecord] = useState<ChildDevelopmentRecord | null>(null);
  const [newRecord, setNewRecord] = useState<ChildDevelopmentRecord>({
    id: '',
    name: '',
    monthAge: '',
    livingStyle: '',
    interaction: ''
  });

  // State for accordion expansion
  const [expandedSections, setExpandedSections] = useState({
    basic: true,
    development: true,
    additional: true
  });

  // Load data from sessionStorage
  useEffect(() => {
    const storedData = JSON.parse(sessionStorage.getItem('monthlyData0') || '[]');
    const item = storedData.find((item: any) => item.pid === pid && item.selectedOption === selectedOption);
    if (item) {
      setFormData({
        pid: item.pid || pid,
        selectedOption: item.selectedOption || selectedOption,
        nursingGoal: item.nursingGoal || '',
        educationGoal: item.educationGoal || '',
        familyCooperation: item.familyCooperation || '',
        events: item.events || [
          { day: '', weekday: '', eventName: '' },
          { day: '', weekday: '', eventName: '' },
          { day: '', weekday: '', eventName: '' },
          { day: '', weekday: '', eventName: '' }
        ],
        environmentNursing: item.environmentNursing || '',
        lifeAndPlayEducation: item.lifeAndPlayEducation || '',
        healthSafety: item.healthSafety || '',
        organizationManagement: item.organizationManagement || '',
        evaluationReflection: item.evaluationReflection || ''
      });
      if (item.childRecords) {
        setChildRecords(item.childRecords);
      }
    }
  }, [pid, selectedOption]);

  const toggleSection = (section: 'basic' | 'development' | 'additional') => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  // Handle form field changes
  const handleFieldChange = (field: string) => (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [field]: event.target.value
    }));
  };

  // Handle event field changes
  const handleEventChange = (index: number, field: 'day' | 'weekday' | 'eventName') => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      events: prev.events.map((evt, i) => 
        i === index ? { ...evt, [field]: event.target.value } : evt
      )
    }));
  };

  // Child record management
  const handleAddRecord = () => {
    setNewRecord({
      id: '',
      name: '',
      monthAge: '',
      livingStyle: '',
      interaction: ''
    });
    setEditingRecord(null);
    setOpenDialog(true);
  };

  const handleEditRecord = (record: ChildDevelopmentRecord) => {
    setNewRecord({ ...record });
    setEditingRecord(record);
    setOpenDialog(true);
  };

  const handleDeleteRecord = (id: string) => {
    setChildRecords(prev => prev.filter(record => record.id !== id));
  };

  const handleSaveRecord = () => {
    if (!newRecord.name.trim()) {
      alert('名前を入力してください');
      return;
    }

    if (editingRecord) {
      setChildRecords(prev => 
        prev.map(record => 
          record.id === editingRecord.id ? { ...newRecord } : record
        )
      );
    } else {
      const newId = Date.now().toString();
      setChildRecords(prev => [...prev, { ...newRecord, id: newId }]);
    }

    setOpenDialog(false);
    setNewRecord({
      id: '',
      name: '',
      monthAge: '',
      livingStyle: '',
      interaction: ''
    });
  };

  const handleRecordChange = (field: keyof ChildDevelopmentRecord) => (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setNewRecord(prev => ({
      ...prev,
      [field]: event.target.value
    }));
  };

  // Save all data
  const handleSave = () => {
    const dataToSave = {
      ...formData,
      childRecords: childRecords
    };
    
    const storedData = JSON.parse(sessionStorage.getItem('monthlyData0') || '[]');
    const existingIndex = storedData.findIndex(
      (item: any) => item.pid === pid && item.selectedOption === selectedOption
    );
    
    if (existingIndex !== -1) {
      storedData[existingIndex] = dataToSave;
    } else {
      storedData.push(dataToSave);
    }
    
    sessionStorage.setItem('monthlyData0', JSON.stringify(storedData));
    navigate('/report/monthlyplan');
  };

  const options = [
    '月指導計画 0 歳児',
    '月指導計画 1・2 歳児',
    '月指導計画 3・4・5 歳児'
  ];

  return (
    <ThemeProvider theme={theme}>
        <ContentMain className="flex flex-col min-h-screen">
            <Box sx={{ p: 3 }}>
            {/* Header with dropdown */}
            <Grid container spacing={2} sx={{ mb: 3 }}>
              <Grid item xs={12} sm={6} md={4}>
                <FormControl fullWidth size='small'>
                  <InputLabel id="selected-option-label">年間指導計画を選択する</InputLabel>
                    <Select
                    labelId="selected-option-label"
                    value={selectedOption}
                    sx={{ backgroundColor: '#F5F5F5' }}
                    readOnly
                    label="年間指導計画を選択する"
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
            <Grid className="text-start">
                {/* Staff Information */}
                <Card elevation={2} sx={{ mb: 3 }}>
                    <CardContent>
                        <Typography variant="h6" fontWeight="bold" color="secondary" sx={{ mb: 2 }}>
                            担当職員情報
                        </Typography>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={4}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                    <Typography sx={{ fontSize: 14, minWidth: 60 }}>
                                        施設長:
                                    </Typography>
                                    <Typography sx={{ fontSize: 14, fontWeight: 'bold' }}>
                                        濃部　圭子
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                    <Typography sx={{ fontSize: 14, minWidth: 40 }}>
                                        主任:
                                    </Typography>
                                    <Typography sx={{ fontSize: 14, fontWeight: 'bold' }}>
                                        渡部　史朗
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                    <Typography sx={{ fontSize: 14, minWidth: 40 }}>
                                        担任:
                                    </Typography>
                                    <Typography sx={{ fontSize: 14, fontWeight: 'bold' }}>
                                        中川　康嘉
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>

                {/* เป้าหมายประจำปี */}
                <Accordion 
                    expanded={expandedSections.basic} 
                    onChange={() => toggleSection('basic')} 
                    sx={{ border: '2px solid #ff9800', mb: 2 }}
                >
                    <AccordionSummary expandIcon={<ExpandMore />}>
                    <Typography fontWeight="600">เป้าหมายประจำปี (0歳)</Typography>
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
                            label="養護"
                            placeholder="การพยาบาล..."
                            value={formData.nursingGoal}
                            onChange={handleFieldChange('nursingGoal')}
                        />
                        </Grid>
                        <Grid item xs={12} md={6}>
                        <TextField
                            fullWidth
                            multiline
                            rows={2}
                            label="教育"
                            placeholder="การศึกษา..."
                            value={formData.educationGoal}
                            onChange={handleFieldChange('educationGoal')}
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
                            value={formData.familyCooperation}
                            onChange={handleFieldChange('familyCooperation')}
                        />
                        </Grid>
                        
                        <Grid item xs={12} md={4}>
                        <Typography fontWeight="bold" sx={{ mb: 1 }} align="left">
                            行事 (กิจกรรม)
                        </Typography>
                        {formData.events?.map((event, index) => (
                            <Grid container spacing={0.5} sx={{ mt: index === 0 ? 0 : -1 }} key={index}>
                            <Grid item xs={4} md={1.5}>
                                <TextField
                                fullWidth
                                size="small"
                                margin="dense"
                                label="日"
                                placeholder="วัน"
                                value={event.day}
                                onChange={handleEventChange(index, 'day')}
                                sx={{
                                    '& .MuiInputBase-root': { height: 30, fontSize: '0.75rem' },
                                    '& .MuiInputLabel-root': { 
                                    fontSize: '0.7rem',
                                    transform: 'translate(14px, 8px) scale(1)',
                                    '&.Mui-focused, &.MuiFormLabel-filled': {
                                        transform: 'translate(14px, -6px) scale(0.75)',
                                    }
                                    },
                                    '& .MuiInputBase-input': { padding: '4px 8px', fontSize: '0.75rem', textAlign: 'center' }
                                }}
                                />
                            </Grid>
                            <Grid item xs={4} md={1.5}>
                                <TextField
                                fullWidth
                                size="small"
                                margin="dense"
                                label="曜"
                                placeholder="วัน"
                                value={event.weekday}
                                onChange={handleEventChange(index, 'weekday')}
                                sx={{
                                    '& .MuiInputBase-root': { height: 30, fontSize: '0.75rem' },
                                    '& .MuiInputLabel-root': { 
                                    fontSize: '0.7rem',
                                    transform: 'translate(14px, 8px) scale(1)',
                                    '&.Mui-focused, &.MuiFormLabel-filled': {
                                        transform: 'translate(14px, -6px) scale(0.75)',
                                    }
                                    },
                                    '& .MuiInputBase-input': { padding: '4px 8px', fontSize: '0.75rem', textAlign: 'center' }
                                }}
                                />
                            </Grid>
                            <Grid item xs={4} md={8}>
                                <TextField
                                fullWidth
                                size="small"
                                margin="dense"
                                label="行事名"
                                placeholder="ชื่อกิจกรรม"
                                value={event.eventName}
                                onChange={handleEventChange(index, 'eventName')}
                                sx={{
                                    '& .MuiInputBase-root': { height: 30, fontSize: '0.75rem' },
                                    '& .MuiInputLabel-root': { 
                                    fontSize: '0.7rem',
                                    transform: 'translate(14px, 8px) scale(1)',
                                    '&.Mui-focused, &.MuiFormLabel-filled': {
                                        transform: 'translate(14px, -6px) scale(0.75)',
                                    }
                                    },
                                    '& .MuiInputBase-input': { padding: '4px 8px', fontSize: '0.75rem' }
                                }}
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
                        子どもの発達記録 (บันทึกพัฒนาการเด็ก - 0歳)
                        </Typography>
                        <Tooltip title="เด็กแต่ละคนและข้อมูลการพัฒนา">
                        <Info color="info" />
                        </Tooltip>
                    </Box>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                        <Typography fontWeight="bold" align="left">
                        การจัดการข้อมูลเด็ก
                        </Typography>
                        <Button
                        variant="contained"
                        startIcon={<Add />}
                        onClick={handleAddRecord}
                        sx={{ 
                            borderRadius: '20px',
                            background: 'linear-gradient(45deg, #9c27b0, #e1bee7)',
                            '&:hover': {
                            background: 'linear-gradient(45deg, #7b1fa2, #ce93d8)',
                            }
                        }}
                        >
                        ADD
                        </Button>
                    </Box>

                    <TableContainer component={Paper} sx={{ mt: 2, borderRadius: '12px', border: '1px solid #e0e0e0' }}>
                        <Table size="small">
                        <TableHead>
                            <TableRow sx={{ backgroundColor: '#f3e5f5' }}>
                            <TableCell sx={{ fontWeight: 'bold', minWidth: 120 }}>名前</TableCell>
                            <TableCell sx={{ fontWeight: 'bold', minWidth: 100 }}>月齢</TableCell>
                            <TableCell sx={{ fontWeight: 'bold', minWidth: 200 }}>子どもの生活する姿</TableCell>
                            <TableCell sx={{ fontWeight: 'bold', minWidth: 200 }}>子どもとの関わり方</TableCell>
                            <TableCell sx={{ fontWeight: 'bold', minWidth: 100 }}>操作</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {childRecords.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={5} align="center" sx={{ py: 4, color: '#666' }}>
                                データがありません。ADDボタンでデータを追加してください。
                                </TableCell>
                            </TableRow>
                            ) : (
                            childRecords.map((record) => (
                                <TableRow key={record.id} hover>
                                <TableCell>{record.name}</TableCell>
                                <TableCell>{record.monthAge}</TableCell>
                                <TableCell sx={{ maxWidth: 200, wordBreak: 'break-word' }}>
                                    {record.livingStyle}
                                </TableCell>
                                <TableCell sx={{ maxWidth: 200, wordBreak: 'break-word' }}>
                                    {record.interaction}
                                </TableCell>
                                <TableCell>
                                    <Box sx={{ display: 'flex', gap: 1 }}>
                                    <IconButton
                                        size="small"
                                        onClick={() => handleEditRecord(record)}
                                        color="primary"
                                    >
                                        <Edit fontSize="small" />
                                    </IconButton>
                                    <IconButton
                                        size="small"
                                        onClick={() => handleDeleteRecord(record.id)}
                                        color="error"
                                    >
                                        <Delete fontSize="small" />
                                    </IconButton>
                                    </Box>
                                </TableCell>
                                </TableRow>
                            ))
                            )}
                        </TableBody>
                        </Table>
                    </TableContainer>
                    </AccordionDetails>
                </Accordion>

                {/* รายละเอียดเพิ่มเติม */}
                <Accordion 
                    expanded={expandedSections.additional} 
                    onChange={() => toggleSection('additional')} 
                    sx={{ border: '2px solid #4caf50' }}
                >
                    <AccordionSummary expandIcon={<ExpandMore />}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <CheckCircle color="success" />
                        <Typography variant="h6" fontWeight="600">
                        รายละเอียดเพิ่มเติม (0歳)
                        </Typography>
                        <Tooltip title="ข้อมูลเพิ่มเติมสำหรับการวางแผน">
                        <Info color="info" />
                        </Tooltip>
                    </Box>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Grid container spacing={2} sx={{ mt: 2 }}>
                        <Grid item xs={12} md={6}>
                        <Typography fontWeight="bold" sx={{ mb: 2 }} align="left">
                            環　境　づ　く　り (การจัดสภาพแวดล้อม)
                        </Typography>
                        <TextField
                            fullWidth
                            multiline
                            rows={15}
                            label="養護"
                            placeholder="การพยาบาล..."
                            value={formData.environmentNursing}
                            onChange={handleFieldChange('environmentNursing')}
                        />
                        </Grid>
                        <Grid item xs={12} md={6}>
                        <Typography fontWeight="bold" sx={{ mb: 2 }} align="left">
                            生　活　と　遊　び (การใช้ชีวิตและการเล่น)
                        </Typography>
                        <TextField
                            fullWidth
                            multiline
                            rows={15}
                            label="教育"
                            placeholder="การศึกษา..."
                            value={formData.lifeAndPlayEducation}
                            onChange={handleFieldChange('lifeAndPlayEducation')}
                        />
                        </Grid>
                    </Grid>

                    <Grid container spacing={2} sx={{ mt: 2 }}>
                        <Grid item xs={12} md={4}>
                        <Typography fontWeight="bold" sx={{ mb: 2 }} align="left">
                            健康・安全 (การดูแลสุขภาพและความปลอดภัย)
                        </Typography>
                        <TextField
                            fullWidth
                            multiline
                            rows={6}
                            label="養護"
                            placeholder="การพยาบาล..."
                            value={formData.healthSafety}
                            onChange={handleFieldChange('healthSafety')}
                        />
                        </Grid>
                        <Grid item xs={12} md={4}>
                        <Typography fontWeight="bold" sx={{ mb: 2 }} align="left">
                            組　運　営 (การจัดการองค์กร)
                        </Typography>
                        <TextField
                            fullWidth
                            multiline
                            rows={6}
                            label="教育"
                            placeholder="การศึกษา..."
                            value={formData.organizationManagement}
                            onChange={handleFieldChange('organizationManagement')}
                        />
                        </Grid>
                        <Grid item xs={12} md={4}>
                        <Typography fontWeight="bold" sx={{ mb: 2 }} align="left">
                            評価・反省 (การประเมินและการสะท้อน)
                        </Typography>
                        <TextField
                            fullWidth
                            multiline
                            rows={6}
                            label="教育"
                            placeholder="การศึกษา..."
                            value={formData.evaluationReflection}
                            onChange={handleFieldChange('evaluationReflection')}
                        />
                        </Grid>
                    </Grid>
                    </AccordionDetails>
                </Accordion>
            </Grid>
            {/* Add/Edit Dialog */}
            <Dialog 
                open={openDialog} 
                onClose={() => setOpenDialog(false)}
                maxWidth="md"
                fullWidth
                PaperProps={{
                sx: { borderRadius: '16px' }
                }}
            >
                <DialogTitle sx={{ backgroundColor: '#f5f5f5', fontWeight: 'bold' }}>
                {editingRecord ? 'データ編集' : 'データ追加'}
                </DialogTitle>
                <DialogContent sx={{ mt: 2 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="名前 *"
                        value={newRecord.name}
                        onChange={handleRecordChange('name')}
                        required
                        margin="dense"
                    />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="月齢 (例: ３ヶ月)"
                        value={newRecord.monthAge}
                        onChange={handleRecordChange('monthAge')}
                        placeholder="３ヶ月"
                        margin="dense"
                    />
                    </Grid>
                    <Grid item xs={12}>
                    <TextField
                        fullWidth
                        multiline
                        rows={3}
                        label="子どもの生活する姿"
                        value={newRecord.livingStyle}
                        onChange={handleRecordChange('livingStyle')}
                        margin="dense"
                    />
                    </Grid>
                    <Grid item xs={12}>
                    <TextField
                        fullWidth
                        multiline
                        rows={3}
                        label="子どもとの関わり方"
                        value={newRecord.interaction}
                        onChange={handleRecordChange('interaction')}
                        margin="dense"
                    />
                    </Grid>
                </Grid>
                </DialogContent>
                <DialogActions sx={{ p: 3, gap: 1 }}>
                <Button 
                    onClick={() => setOpenDialog(false)}
                    variant="outlined"
                    startIcon={<Cancel />}
                >
                    キャンセル
                </Button>
                <Button 
                    onClick={handleSaveRecord}
                    variant="contained"
                    startIcon={<Save />}
                    sx={{
                    background: 'linear-gradient(45deg, #2196f3, #9c27b0)',
                    '&:hover': {
                        background: 'linear-gradient(45deg, #1976d2, #7b1fa2)',
                    }
                    }}
                >
                    保存
                </Button>
                </DialogActions>
            </Dialog>

            {/* Action Buttons */}
                <Box sx={{ display: 'flex', gap: 2, justifyContent: 'space-between' }}>
                    <Button variant="outlined" href="/report/monthlyplan" startIcon={<ArrowBack />}>
                    戻る
                    </Button>
                    <Button 
                    variant="contained" 
                    color="success" 
                    startIcon={<CheckCircle />}
                    sx={{
                        background: 'linear-gradient(45deg, #2196f3, #9c27b0)',
                        '&:hover': {
                        background: 'linear-gradient(45deg, #1976d2, #7b1fa2)',
                        }
                    }}
                    >
                    บันทึก
                    </Button>
                </Box>
            </Box>
        </ContentMain>
    </ThemeProvider>
  );
};

export default EditMonthlyZero;