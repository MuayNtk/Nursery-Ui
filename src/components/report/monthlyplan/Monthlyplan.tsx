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
  School,
  CheckCircle,
  Visibility,
  ExpandMore,
  ExpandLess,
  FilterList,
  Clear,
} from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ContentMain from '../../content/Content';
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

interface MonthlyPlanRecord {
  pid: string;
  year: string;
  selectedOption: string;
  name: string;
  createdDate: string;
  lastModified: string;
  status: 'draft' | 'completed' | 'approved';
  ageGroup: string;
  planType: string;
}

// Transform existing data structure to new format
const transformStoredData = (storedData: any[], ageGroup: string, planType: string) => {
  return storedData.map(item => ({
    pid: item.pid,
    year: item.year,
    selectedOption: item.selectedOption,
    name: item.name,
    createdDate: '2024-01-01', // Default values since not in original data
    lastModified: '2024-01-15',
    status: 'approved' as const,
    ageGroup: ageGroup,
    planType: planType,
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
  { value: '1・2歳児', label: '1・2歳児' },
  { value: '3・4・5歳児', label: '3・4・5歳児' },
];

const Monthlyplan: React.FC = () => {
  const [records, setRecords] = useState<MonthlyPlanRecord[]>([]);
  const [filteredRecords, setFilteredRecords] = useState<MonthlyPlanRecord[]>([]);
  const [searchText, setSearchText] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [selectedAgeGroup, setSelectedAgeGroup] = useState('');
  const [expandedGroup, setExpandedGroup] = useState<string>('');
  const navigate = useNavigate();

  // Initialize and load data
  useEffect(() => {
    const initializeSampleData = () => {
      const existingData0 = JSON.parse(sessionStorage.getItem('monthlyData0') || '[]');
      const existingData1_2 = JSON.parse(sessionStorage.getItem('monthlyData1_2') || '[]');
      const existingData3_4_5 = JSON.parse(sessionStorage.getItem('monthlyData3_4_5') || '[]');

      if (existingData0.length === 0) {
        const sampleData0 = [
          { pid: '111', year: '2024', selectedOption: '月指導計画 0 歳児', name: '(全体的な計画)' },
        ];
        sessionStorage.setItem('monthlyData0', JSON.stringify(sampleData0));
      }

      if (existingData1_2.length === 0) {
        const sampleData1_2 = [
          { pid: '222', year: '2023', selectedOption: '月指導計画 1・2 歳児', name: '(全体的な計画)' },
        ];
        sessionStorage.setItem('monthlyData1_2', JSON.stringify(sampleData1_2));
      }

      if (existingData3_4_5.length === 0) {
        const sampleData3_4_5 = [
          { pid: '333', year: '2022', selectedOption: '月指導計画 3・4・5 歳児', name: '(全体的な計画)' },
        ];
        sessionStorage.setItem('monthlyData3_4_5', JSON.stringify(sampleData3_4_5));
      }
    };

    const fetchData = () => {
      const storedData0 = JSON.parse(sessionStorage.getItem('monthlyData0') || '[]');
      const storedData1_2 = JSON.parse(sessionStorage.getItem('monthlyData1_2') || '[]');
      const storedData3_4_5 = JSON.parse(sessionStorage.getItem('monthlyData3_4_5') || '[]');

      const transformedData0 = transformStoredData(storedData0, '0歳児', '月指導計画');
      const transformedData1_2 = transformStoredData(storedData1_2, '1・2歳児', '月指導計画');
      const transformedData3_4_5 = transformStoredData(storedData3_4_5, '3・4・5歳児', '月指導計画');

      const allData = [...transformedData0, ...transformedData1_2, ...transformedData3_4_5];
      setRecords(allData);
    };

    initializeSampleData();
    fetchData();
  }, []);

  const getGroupedRecords = () => {
    const grouped: { [key: string]: MonthlyPlanRecord[] } = {};
    filteredRecords.forEach(record => {
      const key = record.ageGroup;
      if (!grouped[key]) {
        grouped[key] = [];
      }
      grouped[key].push(record);
    });
    
    Object.keys(grouped).forEach(key => {
      grouped[key].sort((a, b) => parseInt(b.year) - parseInt(a.year));
    });
    
    return grouped;
  };

  const getGroupSummary = () => {
    const grouped = getGroupedRecords();
    return Object.entries(grouped).map(([key, records]) => {
      const latestRecord = records[0]; // Most recent year
      const totalPlans = records.length;
      const approvedCount = records.filter(r => r.status === 'approved').length;
      
      return {
        key,
        ageGroup: key,
        planType: latestRecord.planType,
        totalPlans,
        approvedCount,
        records,
        latestYear: latestRecord.year,
        latestStatus: latestRecord.status,
        latestModified: latestRecord.lastModified,
      };
    });
  };

  const applyFilters = () => {
    let filtered = records.filter(record => {
      const matchesSearch = searchText === '' || 
        record.selectedOption.toLowerCase().includes(searchText.toLowerCase()) ||
        record.name.includes(searchText) ||
        record.year.includes(searchText);
      
      const matchesYear = selectedYear === '' || record.year === selectedYear;
      const matchesStatus = selectedStatus === '' || record.status === selectedStatus;
      const matchesAgeGroup = selectedAgeGroup === '' || record.ageGroup === selectedAgeGroup;
      
      return matchesSearch && matchesYear && matchesStatus && matchesAgeGroup;
    });
    
    setFilteredRecords(filtered);
  };

  const handleResetFilters = () => {
    setSearchText('');
    setSelectedYear('');
    setSelectedStatus('');
    setSelectedAgeGroup('');
  };

  useEffect(() => {
    applyFilters();
  }, [searchText, selectedYear, selectedStatus, selectedAgeGroup, records]);

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

  const handleEdit = (selectedOption: string, pid: string) => {
    navigate(`/report/monthlyplan/edit/${selectedOption}/${pid}`);
  };

  const handleView = (selectedOption: string, pid: string) => {
    navigate(`/report/monthlyplan/view/${selectedOption}/${pid}`);
  };

  const handleDelete = (pid: string) => {
    if (window.confirm('คุณต้องการลบแผนการสอนนี้หรือไม่? (この指導計画を削除しますか？)')) {
      const updatedRecords = records.filter(record => record.pid !== pid);
      setRecords(updatedRecords);
      
      // Update sessionStorage
      const recordToDelete = records.find(r => r.pid === pid);
      if (recordToDelete) {
        const storageKey = recordToDelete.ageGroup === '0歳児' ? 'monthlyData0' : 
                          recordToDelete.ageGroup === '1・2歳児' ? 'monthlyData1_2' : 'monthlyData3_4_5';
        const currentData = JSON.parse(sessionStorage.getItem(storageKey) || '[]');
        const updatedData = currentData.filter((item: any) => item.pid !== pid);
        sessionStorage.setItem(storageKey, JSON.stringify(updatedData));
      }
    }
  };

  const handleAddNew = () => {
    navigate('/report/monthlyplan/add');
  };

  const handleToggleExpand = (groupKey: string) => {
    setExpandedGroup(expandedGroup === groupKey ? '' : groupKey);
  };

  const groupSummary = getGroupSummary();

  return (
    <ThemeProvider theme={theme}>
      <ContentMain className="flex flex-col min-h-screen">
        <Box sx={{ p: 3, minHeight: '100vh' }}>
          {/* Header */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h4" fontWeight="bold" sx={{ mb: 1, color: '#1976d2' }}>
              月指導計画管理 (Monthly Teaching Plans)
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              รายการแผนการสอนรายเดือน (Monthly Teaching Plan Records)
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
                  <TableCell sx={{ fontWeight: 'bold' }}>กลุ่มอายุ (年齢グループ)</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>ประเภทแผน (計画タイプ)</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>ปีล่าสุด (最新年)</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>จำนวนแผน (計画数)</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>จัดการ (管理)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {groupSummary.map((group) => (
                  <React.Fragment key={group.key}>
                    <TableRow onClick={() => handleToggleExpand(group.key)}>
                      <TableCell>
                        <IconButton size="small">
                          {expandedGroup === group.key ? <ExpandLess /> : <ExpandMore />}
                        </IconButton>
                      </TableCell>
                      <TableCell>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <Avatar sx={{ bgcolor: '#1976d2', width: 32, height: 32 }}>
                            <School fontSize="small" />
                          </Avatar>
                          <Box>
                            <Typography variant="body2" fontWeight="bold">
                              {group.ageGroup}
                            </Typography>
                            <Typography variant="caption" color="textSecondary">
                              {group.planType}
                            </Typography>
                          </Box>
                        </Box>
                      </TableCell>
                      <TableCell>{group.planType}</TableCell>
                      <TableCell>
                        <Chip 
                          label={`${group.latestYear}年`}
                          size="small" 
                          color="primary" 
                          variant="outlined"
                        />
                      </TableCell>
                      <TableCell>{group.totalPlans} แผน</TableCell>
                      <TableCell>
                        <IconButton
                          size="small"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleAddNew();
                          }}
                          color="success"
                          title={`เพิ่มแผนใหม่สำหรับ ${group.ageGroup}`}
                        >
                          <Add fontSize="small" />
                        </IconButton>
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell colSpan={6}>
                        <Collapse in={expandedGroup === group.key}>
                          <Box sx={{ margin: 1 }}>
                            <Table size="small">
                              <TableHead>
                                <TableRow>
                                  <TableCell>ปี (年)</TableCell>
                                  <TableCell>ชื่อแผน (計画名)</TableCell>
                                  <TableCell>สถานะ (ステータス)</TableCell>
                                  <TableCell>การอนุมัติ (承認)</TableCell>
                                  <TableCell>จัดการ (管理)</TableCell>
                                </TableRow>
                              </TableHead>
                              <TableBody>
                                {group.records.map((record) => (
                                  <TableRow key={record.pid}>
                                    <TableCell>{record.year}</TableCell>
                                    <TableCell>{record.name}</TableCell>
                                    <TableCell>{getStatusChip(record.status)}</TableCell>
                                    <TableCell>
                                      <Box sx={{ display: 'flex', gap: 0.5 }}>
                                        <CheckCircle color="success" fontSize="small" />
                                      </Box>
                                    </TableCell>
                                    <TableCell>
                                      <IconButton
                                        size="small"
                                        onClick={() => handleView(record.selectedOption, record.pid)}
                                        color="info"
                                      >
                                        <Visibility fontSize="small" />
                                      </IconButton>
                                      <IconButton
                                        size="small"
                                        onClick={() => handleEdit(record.selectedOption, record.pid)}
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

export default Monthlyplan;