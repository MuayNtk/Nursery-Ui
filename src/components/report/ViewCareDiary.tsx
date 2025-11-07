import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
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
  Button,
  InputAdornment,
  MenuItem,
  FormControlLabel,
  Checkbox,
  Chip,
} from '@mui/material';
import {
  CheckCircle,
  Person,
  ExpandMore,
  Info,
  CalendarToday,
  ArrowBack,
  Visibility
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

// Mock data for demonstration
const mockData = {
  headerData: {
    month: '5',
    childName: 'さくら',
    age: '1',
    responsiblePerson: '田中先生',
    principalApproval: true,
    supervisorApproval: true,
    teacherApproval: true
  },
  childDescription: '元気で活発な子どもです。お友達との関わりも積極的で、新しいことに興味を示します。',
  objectives: '自立心を育て、基本的な生活習慣を身につけることを目標とします。また、他の子どもたちとの協調性も大切にします。',
  evaluation: '今月は食事の際の手づかみ食べが上手になり、自分で食べようとする意欲が見られました。また、お友達との遊びでも順番を待つことができるようになりました。',
  childRecords: [
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
    },
    {
      id: '3',
      dayOfWeek: '3日（水）',
      meal: '完食',
      excretion: 'おむつ交換2回',
      sleep: '午前午後各1.5時間',
      health: '元気',
      otherRecords: '絵本を見て笑う'
    }
  ],
  status: 'approved'
};

// Age options for display
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

const ViewCareDiary: React.FC = () => {
  const { pid } = useParams<{ pid: string }>();
  
  // In a real application, you would fetch data based on pid
  // For now, using mock data
  const data = mockData;
  
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

  // Check if current age requires simplified fields (age 1 or 2)
  const isSimplifiedAge = data.headerData.age === '1' || data.headerData.age === '2';

  // Get display labels
  const getMonthLabel = (value: string) => {
    const option = monthOptions.find(opt => opt.value === value);
    return option ? option.label : value;
  };

  const getChildNameLabel = (value: string) => {
    const option = childNameOptions.find(opt => opt.value === value);
    return option ? option.label : value;
  };

  const getAgeLabel = (value: string) => {
    const option = ageOptions.find(opt => opt.value === value);
    return option ? option.label : value;
  };

  const getResponsiblePersonLabel = (value: string) => {
    const option = responsiblePersonOptions.find(opt => opt.value === value);
    return option ? option.label : value;
  };

  const getStatusChip = (status: string) => {
    switch (status) {
      case 'draft':
        return <Chip label="ร่าง (下書き)" color="warning" size="medium" />;
      case 'completed':
        return <Chip label="เสร็จสิ้น (完了)" color="info" size="medium" />;
      case 'approved':
        return <Chip label="อนุมัติแล้ว (承認済み)" color="success" size="medium" />;
      default:
        return <Chip label="ไม่ระบุ" color="default" size="medium" />;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <ContentMain className="flex flex-col min-h-screen">
        {/* Header */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" fontWeight="bold" sx={{ mb: 1, color: '#1976d2' }}>
            個人カリキュラム・記録 (รายละเอียดบันทึกหลักสูตรส่วนบุคคล)
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Typography variant="subtitle1" color="textSecondary">
              子どもの発達記録詳細 (รายละเอียดบันทึกพัฒนาการเด็ก)
            </Typography>
            {getStatusChip(data.status)}
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
                  label="月 (เดือน)"
                  value={getMonthLabel(data.headerData.month)}
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
                  label="子どもの名前 (ชื่อเด็ก)"
                  value={getChildNameLabel(data.headerData.childName)}
                  InputProps={{
                    readOnly: true,
                    startAdornment: (
                      <InputAdornment position="start">
                        <Person sx={{ fontSize: 18 }} />
                      </InputAdornment>
                    ),
                  }}
                  sx={{ backgroundColor: '#f5f5f5' }}
                />
              </Grid>
              
              <Grid item xs={12} sm={6} md={2}>
                <TextField
                  size="small"
                  fullWidth
                  label="年齢 (อายุ)"
                  value={getAgeLabel(data.headerData.age)}
                  InputProps={{
                    readOnly: true,
                    startAdornment: (
                      <InputAdornment position="start">
                        <Person sx={{ fontSize: 18 }} />
                      </InputAdornment>
                    ),
                  }}
                  sx={{ backgroundColor: '#f5f5f5' }}
                />
              </Grid>

              <Grid item xs={12} sm={6} md={1}>
                <TextField
                  size="small"
                  fullWidth
                  label="歳"
                  value="1"
                  InputProps={{ readOnly: true }}
                  sx={{ backgroundColor: '#f5f5f5' }}
                />
              </Grid>
              
              <Grid item xs={12} sm={6} md={1}>
                <TextField
                  size="small"
                  fullWidth
                  label="ヶ月"
                  value="3"
                  InputProps={{ readOnly: true }}
                  sx={{ backgroundColor: '#f5f5f5' }}
                />
              </Grid>
              
              <Grid item xs={12} sm={6} md={3}>
                <TextField
                  size="small"
                  fullWidth
                  label="担当者 (ผู้รับผิดชอบ)"
                  value={getResponsiblePersonLabel(data.headerData.responsiblePerson)}
                  InputProps={{
                    readOnly: true,
                    startAdornment: (
                      <InputAdornment position="start">
                        <Person sx={{ fontSize: 18 }} />
                      </InputAdornment>
                    ),
                  }}
                  sx={{ backgroundColor: '#f5f5f5' }}
                />
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
                  value={data.childDescription}
                  InputProps={{ readOnly: true }}
                  sx={{ backgroundColor: '#f5f5f5' }}
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
                  value={data.objectives}
                  InputProps={{ readOnly: true }}
                  sx={{ backgroundColor: '#f5f5f5' }}
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
                子どもの発達記録 (บันทึกพัฒนาการเด็ก) - {data.headerData.age}歳
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
                  記録済み: {data.childRecords.length} 日 (บันทึกแล้ว: {data.childRecords.length} วัน)
                  <span style={{ color: '#4caf50' }}> ✓ 記録完了 (บันทึกครบถ้วน)</span>
                  {isSimplifiedAge && (
                    <span style={{ color: '#9c27b0' }}> - {data.headerData.age}歳専用フォーム (รูปแบบเฉพาะอายุ {data.headerData.age} ขวบ)</span>
                  )}
                </Typography>
              </Box>
              <Chip 
                icon={<Visibility />}
                label="閲覧モード (โหมดดู)" 
                color="info" 
                variant="outlined"
              />
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
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.childRecords.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={isSimplifiedAge ? 4 : 6} align="center" sx={{ py: 4, color: '#666' }}>
                        記録データがありません
                        <br />
                        (ไม่มีข้อมูลบันทึก)
                      </TableCell>
                    </TableRow>
                  ) : (
                    data.childRecords.map((record) => (
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
                追加詳細 (รายละเอียดเพิ่มเติม) - {data.headerData.age}歳
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
                  value={data.evaluation}
                  InputProps={{ readOnly: true }}
                  sx={{ backgroundColor: '#f5f5f5' }}
                />
              </Grid>
            </Grid>

            {/* Approval Status Section */}
            <Box sx={{ mt: 4, p: 3, border: '1px solid #e0e0e0', borderRadius: '12px', backgroundColor: '#f9f9f9' }}>
              <Typography fontWeight="bold" sx={{ mb: 2 }} align="left">
                承認・確認状況 (สถานะการอนุมัติและการยืนยัน)
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={data.headerData.principalApproval}
                        disabled
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
                        checked={data.headerData.supervisorApproval}
                        disabled
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
                        checked={data.headerData.teacherApproval}
                        disabled
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
              variant="outlined"
              color="primary"
              href={`/report/carediary/edit/${pid}`}
              sx={{
                borderRadius: '20px',
                borderWidth: 2,
                '&:hover': {
                  borderWidth: 2,
                }
              }}
            >
              編集 (แก้ไข)
            </Button>
          </Box>
        </Box>

        {/* Status Information */}
        <Box sx={{ mt: 2, p: 2, backgroundColor: '#e8f5e8', borderRadius: '8px', border: '1px solid #4caf50' }}>
          <Typography variant="body2" fontWeight="bold" color="#2e7d32" sx={{ mb: 1 }}>
            記録状況 (สถานะบันทึก): {getStatusChip(data.status)}
          </Typography>
          <Typography variant="caption" color="#2e7d32">
            この記録は完了し、承認されています。編集が必要な場合は編集ボタンをクリックしてください。
            <br />
            (บันทึกนี้เสร็จสิ้นและได้รับการอนุมัติแล้ว หากต้องการแก้ไขกรุณาคลิกปุ่มแก้ไข)
          </Typography>
        </Box>
      </ContentMain>
    </ThemeProvider>
  );
};

export default ViewCareDiary;