import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Button,
  Chip,
  InputAdornment,
  TextField,
  MenuItem,
  Card,
  CardContent,
  Collapse,
  Avatar,
  FormControl,
  InputLabel,
  Select,
} from '@mui/material';
import {
  Edit,
  Delete,
  Add,
  Search,
  Person,
  CheckCircle,
  Visibility,
  ExpandMore,
  ExpandLess,
  FilterList,
  Clear, // Added Clear icon for reset button
} from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ContentMain from '../content/Content';

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
  },
});

interface CareDiaryRecord {
  id: string;
  month: string;
  monthName: string;
  classroom: string;
  age: string;
  responsiblePerson: string;
  childName: string;
  createdDate: string;
  lastModified: string;
  status: 'draft' | 'completed' | 'approved';
  recordCount: number;
  principalApproval: boolean;
  supervisorApproval: boolean;
  teacherApproval: boolean;
}

// Mock data
const mockData: CareDiaryRecord[] = [
  {
    id: '1-4',
    month: '4',
    monthName: 'เมษายน (4月)',
    classroom: 'ぺんぎん',
    age: '0',
    responsiblePerson: '田中先生',
    childName: 'ยามาดะ ทาโร่',
    createdDate: '2024-04-01',
    lastModified: '2024-04-15',
    status: 'approved',
    recordCount: 15,
    principalApproval: true,
    supervisorApproval: true,
    teacherApproval: true,
  },
  {
    id: '1-5',
    month: '5',
    monthName: 'พฤษภาคม (5月)',
    classroom: 'ぺんぎん',
    age: '0',
    responsiblePerson: '田中先生',
    childName: 'ยามาดะ ทาโร่',
    createdDate: '2024-05-01',
    lastModified: '2024-05-20',
    status: 'approved',
    recordCount: 18,
    principalApproval: true,
    supervisorApproval: true,
    teacherApproval: true,
  },
  {
    id: '2-6',
    month: '6',
    monthName: 'มิถุนายน (6月)',
    classroom: 'しまうま',
    age: '1',
    responsiblePerson: '佐藤先生',
    childName: 'ซูซูกิ ฮานาโกะ',
    createdDate: '2024-06-01',
    lastModified: '2024-06-15',
    status: 'completed',
    recordCount: 14,
    principalApproval: true,
    supervisorApproval: true,
    teacherApproval: true,
  },
];

const monthOptions = [
  { value: '', label: 'ทั้งหมด (全て)' },
  { value: '4', label: 'เมษายน (4月)' },
  { value: '5', label: 'พฤษภาคม (5月)' },
  { value: '6', label: 'มิถุนายน (6月)' },
];

const statusOptions = [
  { value: '', label: 'ทุกสถานะ (全ステータス)' },
  { value: 'draft', label: 'ร่าง (下書き)' },
  { value: 'completed', label: 'เสร็จสิ้น (完了)' },
  { value: 'approved', label: 'อนุมัติแล้ว (承認済み)' },
];

const CareDiary: React.FC = () => {
  const [records, setRecords] = useState<CareDiaryRecord[]>(mockData);
  const [filteredRecords, setFilteredRecords] = useState<CareDiaryRecord[]>(mockData);
  const [searchText, setSearchText] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [selectedChild, setSelectedChild] = useState('');
  const [expandedChild, setExpandedChild] = useState<string>('');

  const uniqueChildren = Array.from(new Set(records.map(r => r.childName)));

  const getGroupedRecords = () => {
    const grouped: { [key: string]: CareDiaryRecord[] } = {};
    filteredRecords.forEach(record => {
      const key = `${record.childName}-${record.classroom}`;
      if (!grouped[key]) {
        grouped[key] = [];
      }
      grouped[key].push(record);
    });
    
    Object.keys(grouped).forEach(key => {
      grouped[key].sort((a, b) => parseInt(a.month) - parseInt(b.month));
    });
    
    return grouped;
  };

  const getChildSummary = () => {
    const grouped = getGroupedRecords();
    return Object.entries(grouped).map(([key, records]) => {
      const latestRecord = records[records.length - 1];
      const totalMonths = records.length;
      const currentMonth = latestRecord.month;
      const totalRecords = records.reduce((sum, r) => sum + r.recordCount, 0);
      const approvedCount = records.filter(r => r.status === 'approved').length;
      
      return {
        key,
        childName: latestRecord.childName,
        classroom: latestRecord.classroom,
        age: latestRecord.age,
        responsiblePerson: latestRecord.responsiblePerson,
        currentMonth: parseInt(currentMonth),
        currentMonthName: latestRecord.monthName,
        totalMonths,
        totalRecords,
        approvedCount,
        records,
        latestStatus: latestRecord.status,
        latestModified: latestRecord.lastModified,
      };
    });
  };

  const applyFilters = () => {
    let filtered = records.filter(record => {
      const matchesSearch = searchText === '' || 
        record.childName.toLowerCase().includes(searchText.toLowerCase()) ||
        record.responsiblePerson.includes(searchText);
      
      const matchesMonth = selectedMonth === '' || record.month === selectedMonth;
      const matchesStatus = selectedStatus === '' || record.status === selectedStatus;
      const matchesChild = selectedChild === '' || record.childName === selectedChild;
      
      return matchesSearch && matchesMonth && matchesStatus && matchesChild;
    });
    
    setFilteredRecords(filtered);
  };

  // Reset filters function
  const handleResetFilters = () => {
    setSearchText('');
    setSelectedMonth('');
    setSelectedStatus('');
    setSelectedChild('');
  };

  React.useEffect(() => {
    applyFilters();
  }, [searchText, selectedMonth, selectedStatus, selectedChild, records]);

  const getStatusChip = (status: string) => {
    switch (status) {
      case 'draft':
        return <Chip label="ร่าง (下書き)" color="warning" size="small" />;
      case 'completed':
        return <Chip label="เสร็จสิ้น (完了)" color="info" size="small" />;
      case 'approved':
        return <Chip label="อนุมัติแล้ว (承認済み)" color="success" size="small" />;
      default:
        return <Chip label="ไม่ระบุ (未指定)" color="default" size="small" />;
    }
  };

  const handleEdit = (id: string) => {
    window.location.href = `http://localhost:5173/report/carediary/edit/${id}`;
  };

  const handleView = (id: string) => {
    window.location.href = `http://localhost:5173/report/carediary/view/${id}`;
  };

  const handleDelete = (id: string) => {
    if (window.confirm('คุณต้องการลบบันทึกนี้หรือไม่? (この記録を削除しますか？)')) {
      setRecords(prev => prev.filter(record => record.id !== id));
    }
  };

  // Function to navigate to add page (general)
  const handleAddNew = () => {
    window.location.href = 'http://localhost:5173/report/carediary/add';
  };

  // แบบที่ 1: ใช้ localStorage
  const handleAddNewForChild = (childName: string) => {
    localStorage.setItem('selectedChildName', childName);
    window.location.href = 'http://localhost:5173/report/carediary/add';
  };

  const handleToggleExpand = (childKey: string) => {
    setExpandedChild(expandedChild === childKey ? '' : childKey);
  };

  const childSummary = getChildSummary();

  return (
    <ThemeProvider theme={theme}>
      <ContentMain className="flex flex-col min-h-screen">
        <Box sx={{ p: 3, minHeight: '100vh' }}>
          {/* Header */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h4" fontWeight="bold" sx={{ mb: 1, color: '#1976d2' }}>
              個人カリキュラム・記録管理 (10)
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              รายการบันทึกพัฒนาการเด็ก (Child Development Records)
            </Typography>
          </Box>

          {/* Filters */}
          
            <Box sx={{ mb: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <FilterList sx={{ mr: 1, color: '#1976d2' }} />
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  ค้นหาและกรองข้อมูล (検索・フィルター)
                </Typography>
              </Box>
              <Grid container spacing={2}>
                <Grid item xs={12} md={3}>
                  <TextField
                    fullWidth
                    size="small"
                    placeholder="ค้นหาชื่อเด็กหรือครู... (子供名前・先生名で検索...)"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Search />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={2.5}>
                  <FormControl fullWidth size="small">
                    <InputLabel>เด็ก (子供)</InputLabel>
                    <Select
                      value={selectedChild}
                      label="เด็ก (子供)"
                      onChange={(e) => setSelectedChild(e.target.value)}
                    >
                      <MenuItem value="">ทั้งหมด (全て)</MenuItem>
                      {uniqueChildren.map((child) => (
                        <MenuItem key={child} value={child}>
                          {child}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={1.5}>
                  <TextField
                    fullWidth
                    size="small"
                    select
                    label="เดือน (月)"
                    value={selectedMonth}
                    onChange={(e) => setSelectedMonth(e.target.value)}
                  >
                    {monthOptions.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={12} md={2}>
                  <TextField
                    fullWidth
                    size="small"
                    select
                    label="สถานะ (ステータス)"
                    value={selectedStatus}
                    onChange={(e) => setSelectedStatus(e.target.value)}
                  >
                    {statusOptions.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={12} md={1.5}>
                  <Button
                    fullWidth
                    variant="outlined"
                    startIcon={<Clear />}
                    onClick={handleResetFilters}
                    sx={{ height: '40px' }}
                  >
                    リセット
                  </Button>
                </Grid>
                <Grid item xs={12} md={1.5}>
                  <Button
                    fullWidth
                    variant="contained"
                    startIcon={<Add />}
                    onClick={handleAddNew}
                    sx={{ height: '40px' }}
                  >
                    新規追加
                  </Button>
                </Grid>
              </Grid>
            </Box>
      

          <TableContainer component={Paper} sx={{ borderRadius: '16px' }}>
            <Table>
              <TableHead>
                <TableRow sx={{ backgroundColor: '#f3e5f5' }}>
                  <TableCell sx={{ fontWeight: 'bold' }}></TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>ชื่อเด็ก (子供の名前)</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>อายุ (年齢)</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>ผู้รับผิดชอบ (担当者)</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>เดือนปัจจุบัน (現在の月)</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>จัดการ (管理)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {childSummary.map((child) => (
                  <React.Fragment key={child.key}>
                    <TableRow onClick={() => handleToggleExpand(child.key)}>
                      <TableCell>
                        <IconButton size="small">
                          {expandedChild === child.key ? <ExpandLess /> : <ExpandMore />}
                        </IconButton>
                      </TableCell>
                      <TableCell>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <Avatar sx={{ bgcolor: '#1976d2', width: 32, height: 32 }}>
                            <Person fontSize="small" />
                          </Avatar>
                          <Box>
                            <Typography variant="body2" fontWeight="bold">
                              {child.childName}
                            </Typography>
                            <Typography variant="caption" color="textSecondary">
                              {child.classroom}
                            </Typography>
                          </Box>
                        </Box>
                      </TableCell>
                      <TableCell>{child.age} ขวบ (歳)</TableCell>
                      <TableCell>{child.responsiblePerson}</TableCell>
                      <TableCell>
                        <Chip 
                          label={`เดือนที่ ${child.currentMonth} (${child.currentMonth}月目)`}
                          size="small" 
                          color="primary" 
                          variant="outlined"
                        />
                      </TableCell>
                      <TableCell>
                        <IconButton
                          size="small"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleAddNewForChild(child.childName);
                          }}
                          color="success"
                          title={`เพิ่มบันทึกใหม่สำหรับ ${child.childName} (${child.childName}の新しい記録を追加)`}
                        >
                          <Add fontSize="small" />
                        </IconButton>
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell colSpan={6}>
                        <Collapse in={expandedChild === child.key}>
                          <Box sx={{ margin: 1 }}>
                            <Table size="small">
                              <TableHead>
                                <TableRow>
                                  <TableCell>เดือน (月)</TableCell>
                                  <TableCell>จำนวนบันทึก (記録数)</TableCell>
                                  <TableCell>สถานะ (ステータス)</TableCell>
                                  <TableCell>การอนุมัติ (承認)</TableCell>
                                  <TableCell>จัดการ (管理)</TableCell>
                                </TableRow>
                              </TableHead>
                              <TableBody>
                                {child.records.map((record) => (
                                  <TableRow key={record.id}>
                                    <TableCell>{record.monthName}</TableCell>
                                    <TableCell>{record.recordCount}</TableCell>
                                    <TableCell>{getStatusChip(record.status)}</TableCell>
                                    <TableCell>
                                      <Box sx={{ display: 'flex', gap: 0.5 }}>
                                        {record.principalApproval && (
                                          <CheckCircle color="success" fontSize="small" />
                                        )}
                                        {record.supervisorApproval && (
                                          <CheckCircle color="primary" fontSize="small" />
                                        )}
                                        {record.teacherApproval && (
                                          <CheckCircle color="secondary" fontSize="small" />
                                        )}
                                      </Box>
                                    </TableCell>
                                    <TableCell>
                                      <IconButton
                                        size="small"
                                        onClick={() => handleView(record.id)}
                                        color="info"
                                      >
                                        <Visibility fontSize="small" />
                                      </IconButton>
                                      <IconButton
                                        size="small"
                                        onClick={() => handleEdit(record.id)}
                                        color="primary"
                                      >
                                        <Edit fontSize="small" />
                                      </IconButton>
                                      <IconButton
                                        size="small"
                                        onClick={() => handleDelete(record.id)}
                                        color="error"
                                      >
                                        <Delete fontSize="small" />
                                      </IconButton>
                                    </TableCell>
                                  </TableRow>
                                ))}
                              </TableBody>
                            </Table>
                          </Box>
                        </Collapse>
                      </TableCell>
                    </TableRow>
                  </React.Fragment>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </ContentMain>
    </ThemeProvider>
  );
};

export default CareDiary;