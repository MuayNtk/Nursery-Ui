import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Tooltip,
  Button,
  Grid,
  TextField,
  MenuItem,
  InputAdornment,
} from '@mui/material';
import {
  CheckCircle,
  Public,
  ArrowBack,
  Info,
  CalendarToday,
  Business,
  Person,
} from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ContentMain from "../../content/Content";
import MonthlyZero from './MonthlyZero';
import MonthlyOneTwo from './MonthlyOneTwo';  // สำหรับ 1-2 ขวบ
import MonthlyThreeYearsAbove from './MonthlyThreeYearsAbove'; // สำหรับ 3-4-5 ขวบ

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

// Types
interface HeaderData {
  month: string;
  classroom: string;
  age: string;
  responsiblePerson: string;
}

// Age options for dropdown
const ageOptions = [
  { value: '0', label: '0 ขวบ' },
  { value: '1', label: '1 ขวบ' },
  { value: '2', label: '2 ขวบ' },
  { value: '3', label: '3 ขวบ' },
  { value: '4', label: '4 ขวบ' },
  { value: '5', label: '5 ขวบ' },
];

// Month options (Japanese fiscal year starts from April)
const monthOptions = [
  { value: '4', label: 'เมษายน (4月)' },
  { value: '5', label: 'พฤษภาคม (5月)' },
  { value: '6', label: 'มิถุนายน (6月)' },
  { value: '7', label: 'กรกฎาคม (7月)' },
  { value: '8', label: 'สิงหาคม (8月)' },
  { value: '9', label: 'กันยายน (9月)' },
  { value: '10', label: 'ตุลาคม (10月)' },
  { value: '11', label: 'พฤศจิกายน (11月)' },
  { value: '12', label: 'ธันวาคม (12月)' },
  { value: '1', label: 'มกราคม (1月)' },
  { value: '2', label: 'กุมภาพันธ์ (2月)' },
  { value: '3', label: 'มีนาคม (3月)' },
];

// Classroom options (Animal names)
const classroomOptions = [
  { value: 'ぺんぎん', label: 'ぺんぎん (เพนกวิน)' },
  { value: 'しまうま', label: 'しまうま (ม้าลาย)' },
  { value: 'ぞう', label: 'ぞう (ช้าง)' },
];

// Responsible person options
const responsiblePersonOptions = [
  { value: '田中先生', label: '田中先生 (ทานากะ เซนเซ)' },
  { value: '佐藤先生', label: '佐藤先生 (ซาโตะ เซนเซ)' },
  { value: '鈴木先生', label: '鈴木先生 (ซูซูกิ เซนเซ)' },
];

const MonthlyplanAdd: React.FC = () => {
  // State Management
  const [headerData, setHeaderData] = useState<HeaderData>({
    month: '4', // Default เป็นเดือน 4 (เมษายน)
    classroom: '',
    age: '0', // Default เป็น 0 ขวบ
    responsiblePerson: ''
  });

  const handleHeaderDataChange = (field: keyof HeaderData) => (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setHeaderData(prev => ({
      ...prev,
      [field]: event.target.value
    }));
  };

  const handleAgeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newAge = event.target.value;
    console.log('Age changed to:', newAge);
    setHeaderData(prev => ({
      ...prev,
      age: newAge
    }));
    // ที่นี่สามารถเพิ่ม logic เพื่อ reset form หรือทำอะไรอื่นตามที่ต้องการ
  };

  // Function to render appropriate form based on age
  const renderAgeSpecificForm = () => {
    switch (headerData.age) {
      case '0':
        return <MonthlyZero />;
      case '1':
      case '2':
        return <MonthlyOneTwo />;
        // return <div>ฟอร์มสำหรับ 1-2 ขวบ (ยังไม่ได้สร้าง)</div>;
      case '3':
      case '4':
      case '5':
        return <MonthlyThreeYearsAbove />;
        // return <div>ฟอร์มสำหรับ 3-4-5 ขวบ (ยังไม่ได้สร้าง)</div>;
      default:
        return <MonthlyZero />;
    }
  };

  const getFormTitle = () => {
    switch (headerData.age) {
      case '0':
        return 'แผนรายเดือน (0歳)';
      case '1':
        return 'แผนรายเดือน (1歳)';
      case '2':
        return 'แผนรายเดือน (2歳)';
      case '3':
        return 'แผนรายเดือน (3歳)';
      case '4':
        return 'แผนรายเดือน (4歳)';
      case '5':
        return 'แผนรายเดือน (5歳)';
      default:
        return 'แผนรายเดือน';
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <ContentMain className="flex flex-col min-h-screen">
        <Container maxWidth="xl">
          {/* Header Section */}
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
                <Public color="primary" />
                <Typography variant="h6" fontWeight="600">
                  {getFormTitle()} - ข้อมูลหลัก (8-2)
                </Typography>
                <Tooltip title="ข้อมูลพื้นฐานและเป้าหมายประจำปี">
                  <Info color="info" />
                </Tooltip>
              </Box>

              {/* Header Form */}
              <Grid container spacing={2} sx={{ mb: 3 }}>
                <Grid item xs={12} sm={6} md={3}>
                  <TextField
                    size="small"
                    fullWidth
                    select
                    label="เดือน *"
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
                    label="ชื่อห้องเรียน *"
                    value={headerData.classroom}
                    onChange={handleHeaderDataChange('classroom')}
                    required
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Business sx={{ fontSize: 18 }} />
                        </InputAdornment>
                      ),
                    }}
                  >
                    {classroomOptions.map((option) => (
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
                    label="อายุ *"
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
                
                <Grid item xs={12} sm={6} md={3}>
                  <TextField
                    size="small"
                    fullWidth
                    select
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
                  >
                    {responsiblePersonOptions.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
              </Grid>

              {/* Age-specific Form */}
              {renderAgeSpecificForm()}
            </CardContent>
        </Container>
      </ContentMain>
    </ThemeProvider>
  );
};

export default MonthlyplanAdd;