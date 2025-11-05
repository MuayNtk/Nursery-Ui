import React, { useState, useEffect } from 'react';
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
  School,
  Visibility,
  FilterList,
  Clear,
} from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ContentMain from '../content/Content';
import { useNavigate } from 'react-router-dom';

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

interface AnnualPlanRecord {
  pid: string;
  year: string;
  classroom: string;
  age: string;
  responsiblePerson: string;
  status: 'draft' | 'completed' | 'approved';
  ageGroup: string;
}

// Helper function to get age group from age string
const getAgeGroup = (age: string): string => {
  if (age.includes('0')) return '0歳児';
  if (age.includes('1')) return '1歳児';
  if (age.includes('2')) return '2歳児';
  if (age.includes('3')) return '3歳児';
  if (age.includes('4')) return '4歳児';
  if (age.includes('5')) return '5歳児';
  return '0歳児';
};

const transformStoredData = (storedData: any[]): AnnualPlanRecord[] => {
  return storedData.map(item => ({
    pid: item.pid,
    year: item.year,
    classroom: item.classroom,
    age: item.age,
    responsiblePerson: item.responsiblePerson || 'คุณครู',
    status: item.status || 'approved',
    ageGroup: getAgeGroup(item.age),
  }));
};

const yearOptions = [
  { value: '', label: 'ทั้งหมด (全て)' },
  { value: '2022', label: '2022年' },
  { value: '2023', label: '2023年' },
  { value: '2024', label: '2024年' },
];

const statusOptions = [
  { value: '', label: 'ทุกสถานะ (全ステータス)' },
  { value: 'draft', label: 'ร่าง (下書き)' },
  { value: 'completed', label: 'เสร็จสิ้น (完了)' },
  { value: 'approved', label: 'อนุมัติแล้ว (承認済み)' },
];

const ageGroupOptions = [
  { value: '', label: 'ทุกกลุ่มอายุ (全年齢)' },
  { value: '0歳児', label: '0歳児' },
  { value: '1歳児', label: '1歳児' },
  { value: '2歳児', label: '2歳児' },
  { value: '3歳児', label: '3歳児' },
  { value: '4歳児', label: '4歳児' },
  { value: '5歳児', label: '5歳児' },
];

const Annualplan: React.FC = () => {
  const [records, setRecords] = useState<AnnualPlanRecord[]>([]);
  const [filteredRecords, setFilteredRecords] = useState<AnnualPlanRecord[]>([]);
  const [searchText, setSearchText] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [selectedAgeGroup, setSelectedAgeGroup] = useState('');
  const navigate = useNavigate();

  // Initialize sample data
  useEffect(() => {
    const sampleData = [
      { 
        pid: '111', 
        year: '2024', 
        age: '0歳児',
        classroom: 'ห้องแพนกวิน',
        responsiblePerson: '田中先生',
        status: 'approved'
      },
      { 
        pid: '112', 
        year: '2023', 
        age: '0歳児',
        classroom: 'ห้องแพนกวิน',
        responsiblePerson: '田中先生',
        status: 'approved'
      },
      { 
        pid: '222', 
        year: '2024', 
        age: '1歳児',
        classroom: 'ห้องม้า',
        responsiblePerson: '山田先生',
        status: 'draft'
      },
      { 
        pid: '223', 
        year: '2024', 
        age: '2歳児',
        classroom: 'ห้องช้าง',
        responsiblePerson: '佐藤先生',
        status: 'completed'
      },
      { 
        pid: '333', 
        year: '2024', 
        age: '3歳児',
        classroom: 'ห้องแพนกวิน',
        responsiblePerson: '鈴木先生',
        status: 'draft'
      },
      { 
        pid: '334', 
        year: '2024', 
        age: '4歳児',
        classroom: 'ห้องม้า',
        responsiblePerson: '高橋先生',
        status: 'completed'
      },
      { 
        pid: '335', 
        year: '2024', 
        age: '5歳児',
        classroom: 'ห้องช้าง',
        responsiblePerson: '伊藤先生',
        status: 'draft'
      },
    ];
    
    const transformedData = transformStoredData(sampleData);
    setRecords(transformedData);
  }, []);

  // Apply filters whenever filter criteria or records change
  useEffect(() => {
    const filtered = records.filter(record => {
      const matchesSearch = searchText === '' || 
        record.age.toLowerCase().includes(searchText.toLowerCase()) ||
        record.classroom.includes(searchText) ||
        record.responsiblePerson.includes(searchText) ||
        record.year.includes(searchText);
      
      const matchesYear = selectedYear === '' || record.year === selectedYear;
      const matchesStatus = selectedStatus === '' || record.status === selectedStatus;
      const matchesAgeGroup = selectedAgeGroup === '' || record.ageGroup === selectedAgeGroup;
      
      return matchesSearch && matchesYear && matchesStatus && matchesAgeGroup;
    });
    
    setFilteredRecords(filtered);
  }, [searchText, selectedYear, selectedStatus, selectedAgeGroup, records]);

  // Sort all records by year (descending) and then by age group
  const sortedRecords = [...filteredRecords].sort((a, b) => {
    const yearDiff = parseInt(b.year) - parseInt(a.year);
    if (yearDiff !== 0) return yearDiff;
    
    const ageOrder = ['0歳児', '1歳児', '2歳児', '3歳児', '4歳児', '5歳児'];
    return ageOrder.indexOf(a.ageGroup) - ageOrder.indexOf(b.ageGroup);
  });

  const getStatusChip = (status: string) => {
    const statusConfig = {
      draft: { label: 'ร่าง (下書き)', color: 'warning' },
      completed: { label: 'เสร็จสิ้น (完了)', color: 'info' },
      approved: { label: 'อนุมัติแล้ว (承認済み)', color: 'success' },
    };
    
    const config = statusConfig[status as keyof typeof statusConfig] || 
                   { label: 'ไม่ระบุ (未指定)', color: 'default' };
    
    return <Chip label={config.label} color={config.color as any} size="small" />;
  };

  const handleEdit = (pid: string) => {
    navigate(`/report/annualplan/edit/${pid}`);
  };

  const handleView = (pid: string) => {
    navigate(`/report/annualplan/view/${pid}`);
  };

  const handleDelete = (pid: string) => {
    if (window.confirm('คุณต้องการลบแผนการสอนนี้หรือไม่? (この指導計画を削除しますか？)')) {
      const updatedRecords = records.filter(record => record.pid !== pid);
      setRecords(updatedRecords);
    }
  };

  const handleResetFilters = () => {
    setSearchText('');
    setSelectedYear('');
    setSelectedStatus('');
    setSelectedAgeGroup('');
  };

  return (
    <ThemeProvider theme={theme}>
      <ContentMain>
      <Box sx={{ p: 3, minHeight: '100vh' }}>
        {/* Header */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" fontWeight="bold" sx={{ mb: 1, color: '#1976d2' }}>
            年間指導計画管理 (Annual Teaching Plans)
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            รายการแผนการสอนประจำปี (Annual Teaching Plan Records)
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
                placeholder="ค้นหาแผนการสอนหรือปี... (指導計画・年で検索...)"
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
            <Grid item xs={12} md={2}>
              <TextField
                fullWidth
                size="small"
                select
                label="ปี (年)"
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
              >
                {yearOptions.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} md={2}>
              <FormControl fullWidth size="small">
                <InputLabel>กลุ่มอายุ (年齢)</InputLabel>
                <Select
                  value={selectedAgeGroup}
                  label="กลุ่มอายุ (年齢)"
                  onChange={(e) => setSelectedAgeGroup(e.target.value)}
                >
                  {ageGroupOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
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
                onClick={() => navigate('/report/annualplan/add')}
                sx={{ height: '40px' }}
              >
                新規追加
              </Button>

            </Grid>
          </Grid>
        </Box>

        {/* Table */}
        <TableContainer component={Paper} sx={{ borderRadius: '16px' }}>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: '#f3e5f5' }}>
                <TableCell sx={{ fontWeight: 'bold' }}>ปี</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>กลุ่มอายุ (年齢グループ)</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>ห้องเรียน (クラス)</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>ผู้รับผิดชอบ (担当)</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>สถานะ (ステータス)</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>จัดการ (管理)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sortedRecords.map((record) => (
                <TableRow key={record.pid}>
                  <TableCell>
                    <Typography variant="caption" color="text.secondary">
                      {record.year}年
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Avatar sx={{ bgcolor: '#1976d2', width: 32, height: 32 }}>
                        <School fontSize="small" />
                      </Avatar>
                      <Typography variant="body2" fontWeight="bold">
                        {record.ageGroup}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2" fontWeight="600">
                      {record.classroom}
                    </Typography>
                  </TableCell>
                  <TableCell>{record.responsiblePerson}</TableCell>
                  <TableCell>{getStatusChip(record.status)}</TableCell>
                  <TableCell>
                    <IconButton
                      size="small"
                      onClick={() => handleView(record.pid)}
                      color="info"
                    >
                      <Visibility fontSize="small" />
                    </IconButton>
                    <IconButton
                      size="small"
                      onClick={() => handleEdit(record.pid)}
                      color="primary"
                    >
                      <Edit fontSize="small" />
                    </IconButton>
                    <IconButton
                      size="small"
                      onClick={() => handleDelete(record.pid)}
                      color="error"
                    >
                      <Delete fontSize="small" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      </ContentMain>
    </ThemeProvider>
  );
};

export default Annualplan;