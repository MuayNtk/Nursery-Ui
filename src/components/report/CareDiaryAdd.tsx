import React, { useState } from 'react';
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
  Business,
  ArrowBack
} from '@mui/icons-material';
import ContentMain from "../content/Content";
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
  dayOfWeek: string;    // 日・曜
  meal: string;         // 食事
  excretion?: string;   // 排泄 (optional for age 1-2)
  sleep?: string;       // 睡眠 (optional for age 1-2)
  health: string;       // 健康
  otherRecords: string; // その他の記録
}

interface HeaderData {
  month: string;
  childName: string;     // เปลี่ยนจาก classroom เป็น childName
  age: string;
  responsiblePerson: string;
  principalApproval: boolean;  // 園長印
  supervisorApproval: boolean; // 主任印
  teacherApproval: boolean;    // 担任印
}

// Age options for dropdown
const ageOptions = [
  { value: '0', label: '0歳 (0 ขวบ)' },
  { value: '1', label: '1歳 (1 ขวบ)' },
  { value: '2', label: '2歳 (2 ขวบ)' }
];

// Month options (Japanese fiscal year starts from April)
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

// Child name options (Japanese names)
const childNameOptions = [
  { value: 'さくら', label: 'さくら (ซากุระ)' },
  { value: 'たろう', label: 'たろう (ทาโร่)' },
  { value: 'はなこ', label: 'はなこ (ฮานาโกะ)' },
  { value: 'ゆうき', label: 'ゆうき (ยูกิ)' },
  { value: 'みお', label: 'みお (มิโอะ)' },
  { value: 'そうた', label: 'そうた (โซตะ)' },
  { value: 'あやか', label: 'あやか (อายากะ)' },
  { value: 'ひろし', label: 'ひろし (ฮิโรชิ)' },
];

// Responsible person options
const responsiblePersonOptions = [
  { value: '田中先生', label: '田中先生 (ทานากะ เซนเซ)' },
  { value: '佐藤先生', label: '佐藤先生 (ซาโตะ เซนเซ)' },
  { value: '鈴木先生', label: '鈴木先生 (ซูซูกิ เซンเซ)' },
  { value: '山田先生', label: '山田先生 (ยามาดะ เซนเซ)' },
  { value: '高橋先生', label: '高橋先生 (ทากาฮาชิ เซนเซ)' },
];

const CareDiaryAdd: React.FC = () => {
  const [childRecords, setChildRecords] = useState<ChildDevelopmentRecord[]>([]);
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
    month: '4', // Default เป็นเดือน 4 (เมษายน)
    childName: '', // เปลี่ยนจาก classroom เป็น childName
    age: '0', // Default เป็น 0 ขวบ
    responsiblePerson: '',
    principalApproval: false,
    supervisorApproval: false,
    teacherApproval: false
  });

  // สถานะการบันทึก
  const [childDescription, setChildDescription] = useState('');
  const [objectives, setObjectives] = useState('');
  const [evaluation, setEvaluation] = useState('');

  // Check if current age requires simplified fields (age 1 or 2)
  const isSimplifiedAge = headerData.age === '1' || headerData.age === '2';

  // คำนวณสถานะปัจจุบัน
  const calculateStatus = () => {
    const hasBasicInfo = headerData.month && headerData.childName && headerData.responsiblePerson;
    const hasDescription = childDescription.trim().length > 0;
    const hasObjectives = objectives.trim().length > 0;
    const hasRecords = childRecords.length > 0;
    const hasMinimumRecords = childRecords.length >= 10; // ขั้นต่ำ 10 วัน
    const hasRecommendedRecords = childRecords.length >= 20; // แนะนำ 20 วัน
    const hasEvaluation = evaluation.trim().length > 0;

    return {
      hasBasicInfo,
      hasDescription,
      hasObjectives,
      hasRecords,
      hasMinimumRecords,
      hasRecommendedRecords,
      hasEvaluation,
      canSaveAsDraft: hasBasicInfo,
      canSaveAsComplete: hasBasicInfo && hasDescription && hasObjectives && hasMinimumRecords && hasEvaluation
    };
  };

  const status = calculateStatus();

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
    console.log('Age changed to:', newAge);
    setHeaderData(prev => ({
      ...prev,
      age: newAge
    }));

    // Clear existing records when age changes to maintain data consistency
    setChildRecords([]);
  };

  const [expandedSections, setExpandedSections] = useState({
    basic: true,
    development: true,
    additional: true
  });

  const toggleSection = (section: 'basic' | 'development' | 'additional') => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleAddRecord = () => {
    const baseRecord = {
      id: '',
      dayOfWeek: '',
      meal: '',
      health: '',
      otherRecords: ''
    };

    // Add optional fields for age 0 only
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

  // ฟังก์ชันจัดการการบันทึก
  const handleSave = (mode: 'draft' | 'complete') => {
    const currentStatus = calculateStatus();
    
    if (mode === 'draft' && !currentStatus.canSaveAsDraft) {
      alert('基本情報を完全に入力してください (กรุณากรอกข้อมูลพื้นฐานให้ครบถ้วน)');
      return;
    }
    
    if (mode === 'complete' && !currentStatus.canSaveAsComplete) {
      alert('条件に従って情報を完全に入力してください (กรุณากรอกข้อมูลให้ครบตามเงื่อนไข)');
      return;
    }

    // สร้างข้อมูลที่จะบันทึก
    const saveData = {
      headerData,
      childDescription,
      objectives,
      evaluation,
      childRecords,
      status: mode === 'draft' ? 'draft' : 'completed',
      recordCount: childRecords.length,
      lastModified: new Date().toISOString(),
      createdDate: new Date().toISOString() // ในการแก้ไขควรใช้วันที่เดิม
    };

    console.log('データ保存 (บันทึกข้อมูล):', saveData);
    
    // ที่นี่เรียก API เพื่อบันทึกข้อมูล
    // await saveCareDiary(saveData);
    
    if (mode === 'draft') {
      alert('下書き保存完了 (บันทึกร่างเสร็จสิ้น)');
    } else {
      alert('保存完了、管理者承認のため送信 (บันทึกเสร็จสิ้น พร้อมส่งให้ผู้บริหารอนุมัติ)');
    }
    
    // กลับไปหน้า list
    // window.location.href = '/report/carediary';
  };

  return (
    <ThemeProvider theme={theme}>
      <ContentMain className="flex flex-col min-h-screen">
        {/* เป้าหมายประจำปี - สำหรับ 0 ขวบ */}
        <Accordion expanded={expandedSections.basic} onChange={() => toggleSection('basic')} sx={{ border: '2px solid #ff9800' }}>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography fontWeight="600">個人カリキュラム・記録 10-1 (บันทึกหลักสูตรส่วนบุคคล)</Typography>
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
                label="歳 *"
                required
              >
              </TextField>
            </Grid>
             <Grid item xs={12} sm={6} md={1}>
              <TextField
                size="small"
                fullWidth
                label="ヶ月 *"
                required
              >
              </TextField>
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

      {/* บันทึกพัฒนาการเด็ก - แสดงตามอายุ */}
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
                {status.hasMinimumRecords ? 
                  <span style={{ color: '#4caf50' }}> (最小要件達成 / ครบขั้นต่ำแล้ว)</span> : 
                  <span style={{ color: '#ff9800' }}> (最小10日必要 / ขั้นต่ำ 10 วัน)</span>
                }
                {status.hasRecommendedRecords && 
                  <span style={{ color: '#2196f3' }}> ✓ 推奨 (แนะนำ)</span>
                }
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
                            {record.excretion}
                          </TableCell>
                          <TableCell sx={{ maxWidth: 120, wordBreak: 'break-word' }}>
                            {record.sleep}
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

      {/* ข้อมูลเพิ่มเติมสำหรับทุกช่วงอายุ */}
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

      <Box sx={{ display: 'flex', gap: 2, justifyContent: 'space-between', mt: 3 }}>
        <Button variant="outlined" href="/report/carediary" startIcon={<ArrowBack />}>
          戻る (กลับ)
        </Button>
        
        <Box sx={{ display: 'flex', gap: 2 }}>
          {/* ปุ่มบันทึกร่าง */}
          <Button 
            variant="outlined"
            color="warning"
            startIcon={<Save />}
            disabled={!status.canSaveAsDraft}
            onClick={() => handleSave('draft')}
            sx={{
              borderRadius: '20px',
              borderWidth: 2,
              '&:hover': {
                borderWidth: 2,
              }
            }}
          >
            下書き保存 (บันทึกร่าง)
          </Button>
          
          {/* ปุ่มบันทึกเสร็จสิ้น */}
          <Button 
            variant="contained" 
            color="success" 
            startIcon={<CheckCircle />}
            disabled={!status.canSaveAsComplete}
            onClick={() => handleSave('complete')}
            sx={{
              background: status.canSaveAsComplete 
                ? 'linear-gradient(45deg, #2196f3, #9c27b0)' 
                : '#ccc',
              '&:hover': {
                background: status.canSaveAsComplete 
                  ? 'linear-gradient(45deg, #1976d2, #7b1fa2)' 
                  : '#ccc',
              }
            }}
          >
            完了保存 (บันทึกเสร็จสิ้น)
          </Button>
        </Box>
      </Box>

      {/* แสดงสถานะและเงื่อนไข */}
      {!status.canSaveAsComplete && (
        <Box sx={{ mt: 2, p: 2, backgroundColor: '#fff3e0', borderRadius: '8px', border: '1px solid #ff9800' }}>
          <Typography variant="body2" fontWeight="bold" color="#e65100" sx={{ mb: 1 }}>
            完了保存の条件 (เงื่อนไขสำหรับบันทึกเสร็จสิ้น):
          </Typography>
          <Box component="ul" sx={{ m: 0, pl: 2 }}>
            <li style={{ color: status.hasBasicInfo ? '#4caf50' : '#f44336' }}>
              基本情報: 月、子どもの名前、担当者 (ข้อมูลพื้นฐาน: เดือน, ชื่อเด็ก, ผู้รับผิดชอบ)
            </li>
            <li style={{ color: status.hasDescription ? '#4caf50' : '#f44336' }}>
              「子どもの姿」を記入 (กรอก "ภาพรวมของเด็ก")
            </li>
            <li style={{ color: status.hasObjectives ? '#4caf50' : '#f44336' }}>
              「ねらいと配慮」を記入 (กรอก "วัตถุประสงค์และการพิจารณา")
            </li>
            <li style={{ color: status.hasMinimumRecords ? '#4caf50' : '#f44336' }}>
              発達記録最低10日 (บันทึกพัฒนาการอย่างน้อย 10 วัน) (現在: {childRecords.length} 日)
            </li>
            <li style={{ color: status.hasEvaluation ? '#4caf50' : '#f44336' }}>
              「評価・反省」を記入 (กรอก "การประเมินและสะท้อน")
            </li>
          </Box>
        </Box>
      )}

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
              <TextField
                fullWidth
                label="健康 (สุขภาพ)"
                value={newRecord.health}
                onChange={handleRecordChange('health')}
                margin="dense"
                placeholder="健康状態を記入... (อธิบายสภาพสุขภาพ)"
              />
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
                📝 {headerData.age}歳用の簡略化フォーム: 日・曜、食事、健康、その他の記録のみ入力
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

export default CareDiaryAdd;