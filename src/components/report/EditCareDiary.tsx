import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
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
  InputAdornment,
  MenuItem,
  FormControlLabel,
  Checkbox,
  Chip,
  FormControl,
  RadioGroup,
  Radio,
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
  CalendarToday,
  ArrowBack
} from '@mui/icons-material';
import ContentMain from '../content/Content';
import { createTheme, ThemeProvider } from '@mui/material/styles';

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
  dayOfWeek: string;
  meal: string;
  excretion?: string;
  sleep?: string;
  health: string;
  otherRecords: string;
}

interface HeaderData {
  month: string;
  childName: string;
  age: string;
  responsiblePerson: string;
  principalApproval: boolean;
  supervisorApproval: boolean;
  teacherApproval: boolean;
}

// Age options for dropdown
const ageOptions = [
  { value: '0', label: '0歳 (0 ขวบ)' },
  { value: '1', label: '1歳 (1 ขวบ)' },
  { value: '2', label: '2歳 (2 ขวบ)' }
];

// Month options
const monthOptions = [
  { value: '4', label: '4月 (เมษายน)' },
  { value: '5', label: '5月 (พฤษภาคม)' },
  { value: '6', label: '6月 (มิถุนายน)' },
  { value: '7', label: '7月 (กรกฎาคม)' },
  { value: '8', label: '8月 (สิงหาคม)' },
  { value: '9', label: '9月 (กันยายน)' },
  { value: '10', label: '10月 (ตุลาคม)' },
  { value: '11', label: '11月 (พฤศจิกายน)' },
  { value: '12', label: '12月 (ธันวาคม)' },
  { value: '1', label: '1月 (มกราคม)' },
  { value: '2', label: '2月 (กุมภาพันธ์)' },
  { value: '3', label: '3月 (มีนาคม)' },
];

// Child name options
const childNameOptions = [
  { value: 'さくら', label: 'さくら (ซากุระ)' },
  { value: 'たろう', label: 'たろう (ทาโร่)' },
  { value: 'はなこ', label: 'はなこ (ฮานาโกะ)' },
  { value: 'ゆうき', label: 'ゆうき (ยูกิ)' },
  { value: 'みお', label: 'みお (มิโอะ)' },
];

// Responsible person options
const responsiblePersonOptions = [
  { value: '田中先生', label: '田中先生 (ทานากะ เซนเซ)' },
  { value: '佐藤先生', label: '佐藤先生 (ซาโตะ เซนเซ)' },
  { value: '鈴木先生', label: '鈴木先生 (ซูซูกิ เซนเซ)' },
  { value: '山田先生', label: '山田先生 (ยามาดะ เซนเซ)' },
  { value: '高橋先生', label: '高橋先生 (ทากาฮาชิ เซนเซ)' },
];

const EditCareDiary: React.FC = () => {
  const { pid } = useParams<{ pid: string }>();
  const navigate = useNavigate();
  
  const [childRecords, setChildRecords] = useState<ChildDevelopmentRecord[]>([
    {
      id: '1',
      dayOfWeek: '1日（月）',
      meal: '完食、手づかみ食べ',
      excretion: 'おむつ交換2回',
      sleep: '午前午後各1時間',
      health: '元気',
      otherRecords: '積木で遊ぶ'
    },
    {
      id: '2',
      dayOfWeek: '2日（火）',
      meal: '8割摂取',
      excretion: 'おむつ交換3回',
      sleep: '午後2時間',
      health: '元気',
      otherRecords: 'お散歩で花を見る'
    }
  ]);
  
  const [openDialog, setOpenDialog] = useState(false);
  const [editingRecord, setEditingRecord] = useState<ChildDevelopmentRecord | null>(null);
  const [newRecord, setNewRecord] = useState<ChildDevelopmentRecord>({
    id: '',
    dayOfWeek: '',
    meal: '',
    excretion: '',
    sleep: '',
    health: '',
    otherRecords: ''
  });
  
  const [headerData, setHeaderData] = useState<HeaderData>({
    month: '5',
    childName: 'さくら',
    age: '1',
    responsiblePerson: '田中先生',
    principalApproval: false,
    supervisorApproval: false,
    teacherApproval: true
  });

  const [childDescription, setChildDescription] = useState('元気で活発な子どもです。お友達との関わりも積極的で、新しいことに興味を示します。');
  const [objectives, setObjectives] = useState('自立心を育て、基本的な生活習慣を身につけることを目標とします。また、他の子どもたちとの協調性も大切にします。');
  const [evaluation, setEvaluation] = useState('今月は食事の際の手づかみ食べが上手になり、自分で食べようとする意欲が見られました。');

  const [expandedSections, setExpandedSections] = useState({
    basic: true,
    development: true,
    additional: true
  });

  // Check if current age requires simplified fields (age 1 or 2)
  const isSimplifiedAge = headerData.age === '1' || headerData.age === '2';

  const toggleSection = (section: 'basic' | 'development' | 'additional') => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleHeaderDataChange = (field: keyof HeaderData) => (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setHeaderData(prev => ({
      ...prev,
      [field]: event.target.value
    }));
  };

  const handleCheckboxChange = (field: 'principalApproval' | 'supervisorApproval' | 'teacherApproval') => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setHeaderData(prev => ({
      ...prev,
      [field]: event.target.checked
    }));
  };

  const handleAgeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newAge = event.target.value;
    setHeaderData(prev => ({
      ...prev,
      age: newAge
    }));
    // Clear existing records when age changes to maintain data consistency
    setChildRecords([]);
  };

  const handleAddRecord = () => {
    const baseRecord = {
      id: '',
      dayOfWeek: '',
      meal: '',
      health: '',
      otherRecords: ''
    };

    const fullRecord = isSimplifiedAge 
      ? baseRecord 
      : { ...baseRecord, excretion: '', sleep: '' };

    setNewRecord(fullRecord);
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
    if (!newRecord.dayOfWeek.trim()) {
      alert('日・曜を入力してください (กรุณากรอกวัน/วันในสัปดาห์)');
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
    const baseRecord = {
      id: '',
      dayOfWeek: '',
      meal: '',
      health: '',
      otherRecords: ''
    };

    const fullRecord = isSimplifiedAge 
      ? baseRecord 
      : { ...baseRecord, excretion: '', sleep: '' };

    setNewRecord(fullRecord);
  };

  const handleRecordChange = (field: keyof ChildDevelopmentRecord) => (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setNewRecord(prev => ({
      ...prev,
      [field]: event.target.value
    }));
  };

  const handleSave = () => {
    const saveData = {
      headerData,
      childDescription,
      objectives,
      evaluation,
      childRecords,
      status: 'completed',
      recordCount: childRecords.length,
      lastModified: new Date().toISOString()
    };

    console.log('データ保存 (บันทึกข้อมูล):', saveData);
    alert('修正完了 (แก้ไขเสร็จสิ้น)');
    navigate('/report/carediary');
  };

  return (
    <ThemeProvider theme={theme}>
      <ContentMain className="flex flex-col min-h-screen">
        {/* Header */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" fontWeight="bold" sx={{ mb: 1, color: '#1976d2' }}>
            個人カリキュラム・記録編集 (แก้ไขบันทึกหลักสูตรส่วนบุคคล)
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Typography variant="subtitle1" color="textSecondary">
              子どもの発達記録編集 (แก้ไขบันทึกพัฒนาการเด็ก)
            </Typography>
            <Chip icon={<Edit />} label="編集モード (โหมดแก้ไข)" color="warning" variant="outlined" />
          </Box>
        </Box>

        {/* Basic Information Section */}
        <Accordion expanded={expandedSections.basic} onChange={() => toggleSection('basic')} sx={{ border: '2px solid #ff9800' }}>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography fontWeight="600">基本情報 (ข้อมูลพื้นฐาน)</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={2} sx={{ mb: 3 }}>
              <Grid item xs={12} sm={6} md={2}>
                <TextField
                  size="small"
                  fullWidth
                  select
                  label="月 (เดือน) *"
                  value={headerData.month}
                  onChange={handleHeaderDataChange('month')}
                  required
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <CalendarToday sx={{ fontSize: 18 }} />
                      </InputAdornment>
                    ),
                  }}
                >
                  {monthOptions.map((option) => (
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
                  label="子どもの名前 (ชื่อเด็ก) *"
                  value={headerData.childName}
                  onChange={handleHeaderDataChange('childName')}
                  required
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Person sx={{ fontSize: 18 }} />
                      </InputAdornment>
                    ),
                  }}
                >
                  {childNameOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              
              <Grid item xs={12} sm={6} md={2}>
                <TextField
                  size="small"
                  fullWidth
                  select
                  label="年齢 (อายุ) *"
                  value={headerData.age}
                  onChange={handleAgeChange}
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

              <Grid item xs={12} sm={6} md={1}>
                <TextField
                  size="small"
                  fullWidth
                  label="歳"
                  defaultValue="1"
                />
              </Grid>
              
              <Grid item xs={12} sm={6} md={1}>
                <TextField
                  size="small"
                  fullWidth
                  label="ヶ月"
                  defaultValue="3"
                />
              </Grid>
              
              <Grid item xs={12} sm={6} md={3}>
                <TextField
                  size="small"
                  fullWidth
                  select
                  label="担当者 (ผู้รับผิดชอบ)"
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
            
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Typography fontWeight="bold" sx={{ mb: 2 }} align="left">
                  子どもの姿 (ภาพรวมของเด็ก)
                </Typography>
                <TextField
                  fullWidth
                  multiline
                  rows={2}
                  placeholder="子どもの姿を記入してください... (กรุณาอธิบายภาพรวมของเด็ก)"
                  value={childDescription}
                  onChange={(e) => setChildDescription(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography fontWeight="bold" sx={{ mb: 2 }} align="left">
                  ねらいと配慮 (วัตถุประสงค์และการพิจารณา)
                </Typography>
                <TextField
                  fullWidth
                  multiline
                  rows={2}
                  placeholder="ねらいと配慮を記入してください... (กรุณาอธิบายวัตถุประสงค์และการพิจารณา)"
                  value={objectives}
                  onChange={(e) => setObjectives(e.target.value)}
                />
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>

        {/* Development Records Section */}
        <Accordion expanded={expandedSections.development} onChange={() => toggleSection('development')} sx={{ mt: 3, border: '2px solid #9c27b0' }}>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Person color="secondary" />
              <Typography variant="h6" fontWeight="600">
                子どもの発達記録 (บันทึกพัฒนาการเด็ก) - {headerData.age}歳
              </Typography>
              <Tooltip title="各子どもと発達データ (เด็กแต่ละคนและข้อมูลการพัฒนา)">
                <Info color="info" />
              </Tooltip>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <Box>
                <Typography fontWeight="bold" align="left">
                  子どもデータ管理 (การจัดการข้อมูลเด็ก)
                </Typography>
                <Typography variant="caption" color="textSecondary">
                  記録済み: {childRecords.length} 日 (บันทึกแล้ว: {childRecords.length} วัน)
                  {isSimplifiedAge && (
                    <span style={{ color: '#9c27b0' }}> - {headerData.age}歳専用フォーム (รูปแบบเฉพาะอายุ {headerData.age} ขวบ)</span>
                  )}
                </Typography>
              </Box>
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
                追加 (ADD)
              </Button>
            </Box>

            <TableContainer component={Paper} sx={{ mt: 2, borderRadius: '12px', border: '1px solid #e0e0e0' }}>
              <Table size="small">
                <TableHead>
                  <TableRow sx={{ backgroundColor: '#f3e5f5' }}>
                    <TableCell sx={{ fontWeight: 'bold', minWidth: 80 }}>日・曜 (วัน)</TableCell>
                    <TableCell sx={{ fontWeight: 'bold', minWidth: 120 }}>食事 (อาหาร)</TableCell>
                    {!isSimplifiedAge && (
                      <>
                        <TableCell sx={{ fontWeight: 'bold', minWidth: 120 }}>排泄 (การขับถ่าย)</TableCell>
                        <TableCell sx={{ fontWeight: 'bold', minWidth: 120 }}>睡眠 (การนอน)</TableCell>
                      </>
                    )}
                    <TableCell sx={{ fontWeight: 'bold', minWidth: 120 }}>健康 (สุขภาพ)</TableCell>
                    <TableCell sx={{ fontWeight: 'bold', minWidth: 150 }}>その他の記録 (บันทึกอื่นๆ)</TableCell>
                    <TableCell sx={{ fontWeight: 'bold', minWidth: 100 }}>操作 (จัดการ)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {childRecords.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={isSimplifiedAge ? 5 : 7} align="center" sx={{ py: 4, color: '#666' }}>
                        データがありません。追加ボタンでデータを追加してください。
                        <br />
                        (ไม่มีข้อมูล กรุณาใช้ปุ่ม ADD เพื่อเพิ่มข้อมูล)
                      </TableCell>
                    </TableRow>
                  ) : (
                    childRecords.map((record) => (
                      <TableRow key={record.id} hover>
                        <TableCell>{record.dayOfWeek}</TableCell>
                        <TableCell sx={{ maxWidth: 120, wordBreak: 'break-word' }}>
                          {record.meal}
                        </TableCell>
                        {!isSimplifiedAge && (
                          <>
                            <TableCell sx={{ maxWidth: 120, wordBreak: 'break-word' }}>
                              {record.excretion || '-'}
                            </TableCell>
                            <TableCell sx={{ maxWidth: 120, wordBreak: 'break-word' }}>
                              {record.sleep || '-'}
                            </TableCell>
                          </>
                        )}
                        <TableCell sx={{ maxWidth: 120, wordBreak: 'break-word' }}>
                          {record.health}
                        </TableCell>
                        <TableCell sx={{ maxWidth: 150, wordBreak: 'break-word' }}>
                          {record.otherRecords}
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

        {/* Additional Details Section */}
        <Accordion expanded={expandedSections.additional} onChange={() => toggleSection('additional')} sx={{ mt: 3, border: '2px solid #4caf50' }}>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <CheckCircle color="success" />
              <Typography variant="h6" fontWeight="600">
                追加詳細 (รายละเอียดเพิ่มเติม) - {headerData.age}歳
              </Typography>
              <Tooltip title="計画のための追加情報 (ข้อมูลเพิ่มเติมสำหรับการวางแผน)">
                <Info color="info" />
              </Tooltip>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={2} sx={{ mt: 2 }}>
              <Grid item xs={12} md={12}>
                <Typography fontWeight="bold" sx={{ mb: 2 }} align="left">
                  評価・反省 (การประเมินและการสะท้อน)
                </Typography>
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  placeholder="評価・反省を記入してください... (กรุณาอธิบายการประเมินและการสะท้อน)"
                  value={evaluation}
                  onChange={(e) => setEvaluation(e.target.value)}
                />
              </Grid>
            </Grid>

            {/* Approval Checkboxes Section */}
            <Box sx={{ mt: 4, p: 3, border: '1px solid #e0e0e0', borderRadius: '12px', backgroundColor: '#f9f9f9' }}>
              <Typography fontWeight="bold" sx={{ mb: 2 }} align="left">
                承認・確認 (การอนุมัติและการยืนยัน)
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={headerData.principalApproval}
                        onChange={handleCheckboxChange('principalApproval')}
                        color="primary"
                      />
                    }
                    label={
                      <Box>
                        <Typography fontWeight="bold">園長印</Typography>
                        <Typography variant="caption" color="textSecondary">
                          (ตราประทับผู้อำนวยการ)
                        </Typography>
                      </Box>
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={headerData.supervisorApproval}
                        onChange={handleCheckboxChange('supervisorApproval')}
                        color="primary"
                      />
                    }
                    label={
                      <Box>
                        <Typography fontWeight="bold">主任印</Typography>
                        <Typography variant="caption" color="textSecondary">
                          (ตราประทับหัวหน้า)
                        </Typography>
                      </Box>
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={headerData.teacherApproval}
                        onChange={handleCheckboxChange('teacherApproval')}
                        color="primary"
                      />
                    }
                    label={
                      <Box>
                        <Typography fontWeight="bold">担任印</Typography>
                        <Typography variant="caption" color="textSecondary">
                          (ตราประทับครูประจำชั้น)
                        </Typography>
                      </Box>
                    }
                  />
                </Grid>
              </Grid>
            </Box>
          </AccordionDetails>
        </Accordion>

        {/* Action Buttons */}
        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'space-between', mt: 3 }}>
          <Button variant="outlined" href="/report/carediary" startIcon={<ArrowBack />}>
            戻る (กลับ)
          </Button>
          
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button 
              variant="contained" 
              color="success" 
              startIcon={<Save />}
              onClick={handleSave}
              sx={{
                background: 'linear-gradient(45deg, #4caf50, #81c784)',
                '&:hover': {
                  background: 'linear-gradient(45deg, #388e3c, #66bb6a)',
                }
              }}
            >
              修正 (บันทึก)
            </Button>
          </Box>
        </Box>

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
            {editingRecord ? 'データ編集 (แก้ไขข้อมูล)' : 'データ追加 (เพิ่มข้อมูล)'} - {headerData.age}歳
          </DialogTitle>
          <DialogContent sx={{ mt: 2 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={isSimplifiedAge ? 12 : 6}>
                <TextField
                  fullWidth
                  label="日・曜 (วัน/วันในสัปดาห์) *"
                  value={newRecord.dayOfWeek}
                  onChange={handleRecordChange('dayOfWeek')}
                  required
                  margin="dense"
                  placeholder="例: 1日（月）/ ตัวอย่าง: 1日（月）"
                />
              </Grid>
              <Grid item xs={12} sm={isSimplifiedAge ? 12 : 6}>
                <TextField
                  fullWidth
                  label="食事 (อาหาร)"
                  value={newRecord.meal}
                  onChange={handleRecordChange('meal')}
                  margin="dense"
                  placeholder="食事の内容を記入... (อธิบายเรื่องอาหาร)"
                />
              </Grid>
              {!isSimplifiedAge && (
                <>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="排泄 (การขับถ่าย)"
                      value={newRecord.excretion || ''}
                      onChange={handleRecordChange('excretion')}
                      margin="dense"
                      placeholder="排泄の状況を記入... (อธิบายสถานการณ์การขับถ่าย)"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="睡眠 (การนอน)"
                      value={newRecord.sleep || ''}
                      onChange={handleRecordChange('sleep')}
                      margin="dense"
                      placeholder="睡眠の状況を記入... (อธิบายสถานการณ์การนอน)"
                    />
                  </Grid>
                </>
              )}
              <Grid item xs={12} sm={isSimplifiedAge ? 12 : 6}>
                <Typography variant="body2" fontWeight="bold" sx={{ mb: 1 }}>
                  健康 (สุขภาพ)
                </Typography>
                <FormControl component="fieldset">
                  <RadioGroup
                    value={newRecord.health}
                    onChange={handleRecordChange('health')}
                    row
                  >
                    <FormControlLabel value="良好" control={<Radio />} label="良好" />
                    <FormControlLabel value="鼻水・咳" control={<Radio />} label="鼻水・咳" />
                    <FormControlLabel value="その他" control={<Radio />} label="その他" />
                  </RadioGroup>
                </FormControl>
                {newRecord.health === 'その他' && (
                  <TextField
                    fullWidth
                    size="small"
                    placeholder="詳細を入力..."
                    margin="dense"
                  />
                )}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  multiline
                  rows={3}
                  label="その他の記録 (บันทึกอื่นๆ)"
                  value={newRecord.otherRecords}
                  onChange={handleRecordChange('otherRecords')}
                  margin="dense"
                  placeholder="その他の記録内容を記入... (อธิบายบันทึกอื่นๆ)"
                />
              </Grid>
            </Grid>
            {isSimplifiedAge && (
              <Box sx={{ mt: 2, p: 2, backgroundColor: '#e8f5e8', borderRadius: '8px' }}>
                <Typography variant="caption" color="#2e7d32">
                  {headerData.age}歳用の簡略化フォーム: 日・曜、食事、健康、その他の記録のみ入力
                  <br />
                  (รูปแบบเฉพาะอายุ {headerData.age} ขวบ: กรอกเฉพาะ วัน, อาหาร, สุขภาพ, บันทึกอื่นๆ)
                </Typography>
              </Box>
            )}
          </DialogContent>
          <DialogActions sx={{ p: 3, gap: 1 }}>
            <Button 
              onClick={() => setOpenDialog(false)}
              variant="outlined"
              startIcon={<Cancel />}
            >
              キャンセル (ยกเลิก)
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
              保存 (บันทึก)
            </Button>
          </DialogActions>
        </Dialog>
      </ContentMain>
    </ThemeProvider>
  );
};

export default EditCareDiary;