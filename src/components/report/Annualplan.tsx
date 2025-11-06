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
import { useTranslation } from 'react-i18next'; // ✅ เพิ่ม i18n

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

const Annualplan: React.FC = () => {
  const { t } = useTranslation(); // ✅ ใช้ t
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
    const label =
      status === 'draft' ? t('annualplan.status_draft') :
      status === 'completed' ? t('annualplan.status_completed') :
      t('annualplan.status_approved');
    const color =
      status === 'draft' ? 'warning' :
      status === 'completed' ? 'info' :
      'success';
    return <Chip label={label} color={color as any} size="small" />;
  };

  const handleEdit = (pid: string) => {
    navigate(`/report/annualplan/edit/${pid}`);
  };

  const handleView = (pid: string) => {
    navigate(`/report/annualplan/view/${pid}`);
  };

  const handleDelete = (pid: string) => {
    if (window.confirm(t('annualplan.delete_confirm'))) {
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
            {t('annualplan.title')}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {t('annualplan.subtitle')}
          </Typography>
        </Box>

        {/* Filters */}
        <Box sx={{ mb: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <FilterList sx={{ mr: 1, color: '#1976d2' }} />
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              {t('annualplan.filter_title')}
            </Typography>
          </Box>
          <Grid container spacing={2}>
            <Grid item xs={12} md={3}>
              <TextField
                fullWidth
                size="small"
                placeholder={t('annualplan.search_placeholder')}
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
                label={t('annualplan.year_label')}
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
              >
                <MenuItem value="">{t('annualplan.reset_button')}</MenuItem>
                <MenuItem value="2022">2022</MenuItem>
                <MenuItem value="2023">2023</MenuItem>
                <MenuItem value="2024">2024</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} md={2}>
              <FormControl fullWidth size="small">
                <InputLabel>{t('annualplan.age_label')}</InputLabel>
                <Select
                  value={selectedAgeGroup}
                  label={t('annualplan.age_label')}
                  onChange={(e) => setSelectedAgeGroup(e.target.value)}
                >
                  <MenuItem value="">{/* คงสตริงเดิม */}全て</MenuItem>
                  <MenuItem value="0歳児">0歳児</MenuItem>
                  <MenuItem value="1歳児">1歳児</MenuItem>
                  <MenuItem value="2歳児">2歳児</MenuItem>
                  <MenuItem value="3歳児">3歳児</MenuItem>
                  <MenuItem value="4歳児">4歳児</MenuItem>
                  <MenuItem value="5歳児">5歳児</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={2}>
              <TextField
                fullWidth
                size="small"
                select
                label={t('annualplan.status_label')}
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
              >
                <MenuItem value="">{t('annualplan.reset_button')}</MenuItem>
                <MenuItem value="draft">{t('annualplan.status_draft')}</MenuItem>
                <MenuItem value="completed">{t('annualplan.status_completed')}</MenuItem>
                <MenuItem value="approved">{t('annualplan.status_approved')}</MenuItem>
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
                {t('annualplan.reset_button')}
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
                {t('annualplan.add_button')}
              </Button>

            </Grid>
          </Grid>
        </Box>

        {/* Table */}
        <TableContainer component={Paper} sx={{ borderRadius: '16px' }}>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: '#f3e5f5' }}>
                <TableCell sx={{ fontWeight: 'bold' }}>{t('annualplan.col_year')}</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>{t('annualplan.col_age_group')}</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>{t('annualplan.col_classroom')}</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>{t('annualplan.col_responsible')}</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>{t('annualplan.col_status')}</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>{t('annualplan.col_manage')}</TableCell>
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
