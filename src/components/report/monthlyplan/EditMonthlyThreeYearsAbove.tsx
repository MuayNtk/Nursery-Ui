import React, { useState, useEffect } from 'react';
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
  ThemeProvider,
  createTheme,
  Card,
  CardContent
} from '@mui/material';
import {
  CheckCircle,
  Person,
  ExpandMore,
  Info,
  ArrowBack,
  Save,
} from '@mui/icons-material';
import ContentMain from '../../content/Content';
import { useNavigate } from "react-router-dom";


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
interface EditMonthlyThreeYearsAboveProps {
    pid: string;
    selectedOption: string;
}
// Theme configuration


const EditMonthlyThreeYearsAbove: React.FC<EditMonthlyThreeYearsAboveProps> = ({ pid, selectedOption }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    pid: '',
    selectedOption: selectedOption,
    daily_life: '',
    nursing_care: '',
    education1: '',
    health_safety1: '',
    emotional_stability1: '',
    health_human1: '',
    emotional_stability2: '',
    health_human2: '',
    emotional_stability3: '',
    health_human3: '',
    emotional_stability4: '',
    health_human4: '',
    group_management: '',
    cooperation: '',
    event: '',
  });

  const [expandedSections, setExpandedSections] = useState({
    basic: true,
    content: true,
    additional: true
  });

  useEffect(() => {
    const storedData = JSON.parse(sessionStorage.getItem('monthlyData3_4_5') || '[]');
    const item = storedData.find((item: any) => item.pid === pid && item.selectedOption === selectedOption);
    if (item) {
      setFormData(item);
    }
  }, [pid, selectedOption]);

  const toggleSection = (section: 'basic' | 'content' | 'additional') => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    console.log('Changing field:', name, 'to', value);
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSave = () => {
    console.log('Saving data:', formData);
    const storedData = JSON.parse(sessionStorage.getItem('monthlyData3_4_5') || '[]');
    const updatedData = storedData.map((item: any) =>
      item.pid === pid ? formData : item
    );
    sessionStorage.setItem('monthlyData3_4_5', JSON.stringify(updatedData));
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
            {/* Select Dropdown */}
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
            {/* Staff Information */}
            <Grid className="text-start" sx={{ mb: 3 }}>
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

                {/* Food Education Header */}
                <Box sx={{ bgcolor: '#CCF0FD', p: 2, mb: 3, borderRadius: 1 }}>
                <Typography sx={{ fontSize: 16, fontWeight: 'bold' }}>
                    指導計画は食育の内容を含むこと
                </Typography>
                </Box>

                {/* เป้าหมายประจำปี - สำหรับ 3-4-5 ขวบ */}
                <Accordion expanded={expandedSections.basic} onChange={() => toggleSection('basic')} sx={{ border: '2px solid #ff9800' }}>
                <AccordionSummary expandIcon={<ExpandMore />}>
                    <Typography fontWeight="600">เป้าหมายประจำเดือน (3-4-5歳)</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography fontWeight="bold" sx={{ mb: 2 }} align="left">
                    子どもの生活する姿
                    </Typography>
                    <Grid container spacing={2}>
                    <Grid item xs={12} md={12}>  
                        <TextField
                        fullWidth
                        multiline
                        rows={3}
                        name="daily_life"
                        value={formData.daily_life}
                        onChange={handleChange}
                        label="生活する姿"
                        placeholder="生活する姿子どもの..."
                        />
                    </Grid>
                    </Grid>

                    <Typography fontWeight="bold" sx={{ mt: 3, mb: 2 }} align="left">
                    ねらい
                    </Typography>
                    <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>  
                        <Typography fontWeight="bold" sx={{ mb: 1 }} align="left">
                        養護
                        </Typography>
                        <TextField
                        fullWidth
                        multiline
                        rows={3}
                        name="nursing_care"
                        value={formData.nursing_care}
                        onChange={handleChange}
                        label="養護"
                        placeholder="養護..."
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>  
                        <Typography fontWeight="bold" sx={{ mb: 1 }} align="left">
                        教育
                        </Typography>
                        <TextField
                        fullWidth
                        multiline
                        rows={3}
                        name="education1"
                        value={formData.education1}
                        onChange={handleChange}
                        label="教育"
                        placeholder="教育..."
                        />
                    </Grid>
                    </Grid>

                    <Grid item xs={12} md={12} sx={{ mt: 2 }}>
                    <Typography fontWeight="bold" sx={{ mb: 1 }} align="left">
                        健康・安全
                    </Typography>
                    <TextField
                        fullWidth
                        multiline
                        rows={4}
                        name="health_safety1"
                        value={formData.health_safety1}
                        onChange={handleChange}
                        label="健康・安全"
                        placeholder="健康・安全..."
                    />
                    </Grid>
                </AccordionDetails>
                </Accordion>

                {/* บันทึกพัฒนาการเด็ก */}
                <Accordion expanded={expandedSections.content} onChange={() => toggleSection('content')} sx={{ mt: 3, border: '2px solid #9c27b0' }}>
                    <AccordionSummary expandIcon={<ExpandMore />}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Person color="secondary" />
                        <Typography variant="h6" fontWeight="600">
                            内容
                        </Typography>
                        </Box>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                        <Typography fontWeight="bold" align="left">
                           養　護 (การพยาบาล)　,　教　育 (การศึกษา)
                        </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                        <Typography fontWeight="bold" align="left">
                            生命の保持 情緒の安定 　,　健 康 ・ 人 間 関 係 ・ 環 境 ・ 言 葉 ・ 表 現 (การศึกษา)
                        </Typography>
                        </Box>
                
                        {/* 環境の構成 */}
                        <Grid container spacing={2} sx={{ mt: 1 }}>
                        <Grid item xs={12} md={6}>
                            <Typography fontWeight="bold" sx={{ mb: 1 }}>
                            指導の内容 (เนื้อหาของการสอน)
                            </Typography>
                            <TextField
                            fullWidth
                            multiline
                            rows={8}
                            name="emotional_stability1"
                            value={formData.emotional_stability1}
                            onChange={handleChange}
                            label="情緒の安定生命の保持"
                            placeholder="情緒の安定生命の保持..."
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography fontWeight="bold" sx={{ mb: 1 }}>
                            環境の構成 (การจัดสภาพแวดล้อม)
                            </Typography>
                            <TextField
                            fullWidth
                            multiline
                            rows={8}
                            name="health_human1"
                            value={formData.health_human1}
                            onChange={handleChange}
                            label="健康・人間関係・環境・言葉・表現"
                            placeholder="健康人間係環境・言葉表現..."
                            />
                        </Grid>
                        </Grid>

                        {/* 指導の内容 */}
                        <Grid container spacing={2} sx={{ mt: 1 }}>
                        <Grid item xs={12} md={6}>
                            <Typography fontWeight="bold" sx={{ mb: 1 }}>
                            予想される子どもの活動 (กิจกรรมที่คาดหวังของเด็ก)
                            </Typography>
                            <TextField
                            fullWidth
                            multiline
                            rows={8}
                            name="emotional_stability2"
                            value={formData.emotional_stability2}
                            onChange={handleChange}
                            label="情緒の安定生命の保持"
                            placeholder="情緒の安定生命の保持..."
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography fontWeight="bold" sx={{ mb: 1 }}>
                            保育士等の援助と配慮 (การช่วยเหลือและการพิจารณาของพนักงานดูแลเด็ก)
                            </Typography>
                            <TextField
                            fullWidth
                            multiline
                            rows={8}
                            name="health_human2"
                            value={formData.health_human2}
                            onChange={handleChange}
                            label="健康・人間関係・環境・言葉・表現"
                            placeholder="健康人間係環境言葉・表現..."
                            />
                        </Grid>
                        </Grid>
                    </AccordionDetails>
                </Accordion>

                {/* ข้อมูลเพิ่มเติม */}
                <Accordion expanded={expandedSections.additional} onChange={() => toggleSection('additional')} sx={{ mt: 3, border: '2px solid #4caf50' }}>
                    <AccordionSummary expandIcon={<ExpandMore />}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <CheckCircle color="success" />
                        <Typography variant="h6" fontWeight="600">
                            รายละเอียดเพิ่มเติม (3-4-5歳)
                        </Typography>
                        <Tooltip title="ข้อมูลเพิ่มเติมสำหรับการวางแผน">
                            <Info color="info" />
                        </Tooltip>
                        </Box>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Grid container spacing={2} sx={{ mt: 2 }}>
                        <Grid item xs={12} md={6}>
                            <Typography fontWeight="bold" sx={{ mb: 1 }} align="left">
                            組運営・個別対応
                            </Typography>
                            <TextField
                            fullWidth
                            multiline
                            rows={6}
                            name="group_management"
                            value={formData.group_management}
                            onChange={handleChange}
                            label="組運営・個別対応"
                            placeholder="組運営・個別対応..."
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography fontWeight="bold" sx={{ mb: 1 }} align="left">
                            家庭・地域との連携
                            </Typography>
                            <TextField
                            fullWidth
                            multiline
                            rows={6}
                            name="cooperation"
                            value={formData.cooperation}
                            onChange={handleChange}
                            label="家庭・地域との連携"
                            placeholder="連携家庭・地域との..."
                            />
                        </Grid>
                        </Grid>

                        <Grid container spacing={2} sx={{ mt: 2 }}>
                            {/* Left side - Family/Community Cooperation */}
                            <Grid item xs={12} md={4}>
                                <Typography fontWeight="bold" sx={{ mb: 1 }} align="left">
                                行事 (กิจกรรม)
                                </Typography>
                                {[1, 2, 3, 4].map((index) => (
                                <Grid container spacing={0.5} sx={{ mt: -1 }} key={index}>
                                    <Grid item xs={4} md={1.5}>
                                    <TextField
                                        fullWidth
                                        size="small"
                                        margin="dense"
                                        placeholder="日"
                                        sx={{
                                        '& .MuiInputBase-root': {
                                            height: 30,
                                            fontSize: '0.75rem',
                                        },
                                        '& .MuiInputLabel-root': {
                                            fontSize: '0.7rem',
                                            transform: 'translate(14px, 8px) scale(1)',
                                            '&.Mui-focused, &.MuiFormLabel-filled': {
                                            transform: 'translate(14px, -6px) scale(0.75)',
                                            }
                                        },
                                        '& .MuiInputBase-input': {
                                            padding: '4px 8px',
                                            fontSize: '0.75rem',
                                            textAlign: 'center',
                                        }
                                        }}
                                    />
                                    </Grid>
                                    <Grid item xs={4} md={1.5}>
                                    <TextField
                                        fullWidth
                                        size="small"
                                        margin="dense"
                                        placeholder="曜日"
                                        sx={{
                                        '& .MuiInputBase-root': {
                                            height: 30,
                                            fontSize: '0.75rem',
                                        },
                                        '& .MuiInputLabel-root': {
                                            fontSize: '0.7rem',
                                            transform: 'translate(14px, 8px) scale(1)',
                                            '&.Mui-focused, &.MuiFormLabel-filled': {
                                            transform: 'translate(14px, -6px) scale(0.75)',
                                            }
                                        },
                                        '& .MuiInputBase-input': {
                                            padding: '4px 8px',
                                            fontSize: '0.75rem',
                                            textAlign: 'center',
                                        }
                                        }}
                                    />
                                    </Grid>
                                    <Grid item xs={4} md={8}>
                                    <TextField
                                        fullWidth
                                        size="small"
                                        margin="dense"
                                        placeholder="行事名"
                                        sx={{
                                        '& .MuiInputBase-root': {
                                            height: 30,
                                            fontSize: '0.75rem',
                                        },
                                        '& .MuiInputLabel-root': {
                                            fontSize: '0.7rem',
                                            transform: 'translate(14px, 8px) scale(1)',
                                            '&.Mui-focused, &.MuiFormLabel-filled': {
                                            transform: 'translate(14px, -6px) scale(0.75)',
                                            }
                                        },
                                        '& .MuiInputBase-input': {
                                            padding: '4px 8px',
                                            fontSize: '0.75rem',
                                        }
                                        }}
                                    />
                                    </Grid>
                                </Grid>
                                ))}
                            </Grid>
                            
                            
                            {/* Right side - Events */}
                            <Grid item xs={12} md={8}>
                                <Typography fontWeight="bold" sx={{ mb: 1 }} align="left">
                                評　価・反　省(การประเมินและการสะท้อนกลับ)
                                </Typography>
                                <TextField
                                fullWidth
                                multiline
                                rows={5}
                                label="評　価・反　省"
                                placeholder="การประเมินและการสะท้อนกลับ..."
                                />
                            </Grid>
                        </Grid>
                    </AccordionDetails>
                </Accordion>
            </Grid>
            {/* Buttons */}
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'space-between', mt: 4 }}>
                <Button 
                    variant="outlined" 
                    onClick={() => navigate('/report/monthlyplan')}
                    startIcon={<ArrowBack />}
                    color="warning"
                    
                >
                    戻る
                </Button>
                <Button 
                    variant="contained" 
                    onClick={handleSave}
                    color="success" 
                    startIcon={<Save />}
                    sx={{
                    background: 'linear-gradient(45deg, #2196f3, #9c27b0)',
                    '&:hover': {
                        background: 'linear-gradient(45deg, #1976d2, #7b1fa2)',
                    }
                    }}
                >
                    修正
                </Button>
            </Box>
        </Box>
        </ContentMain>
    </ThemeProvider>
  );
};

export default EditMonthlyThreeYearsAbove;