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
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Card,
  CardContent,
  Button,
  createTheme,
  ThemeProvider,
} from '@mui/material';
import {
  CheckCircle,
  Person,
  ExpandMore,
  Info,
  Visibility,
  ArrowBack,
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

// Sample data for view mode
const sampleData = {
    goals: {
        nursing: '健康で安全な生活環境を整え、一人ひとりの子どもの発達段階に応じた適切な援助を行う。基本的な生活習慣の形成を支援し、情緒の安定を図る。',
        education: '感覚や運動機能の発達を促し、身近な環境に興味・関心を持てるような経験を提供する。言葉の発達を促し、人との関わりの基礎を築く。'
    },
    familyCommunity: '保護者との日々のコミュニケーションを大切にし、家庭での様子や成長を共有する。地域の子育て支援センターとの連携を図り、保護者同士の交流の場を提供する。定期的な懇談会や参観日を通じて、保育の方針や子どもの成長を共有する。',
    events: [
        { day: '15', dayOfWeek: '土', eventName: '親子ふれあい会' },
        { day: '20', dayOfWeek: '木', eventName: '健康診断' },
        { day: '25', dayOfWeek: '火', eventName: '避難訓練' },
        { day: '30', dayOfWeek: '日', eventName: '誕生会' }
    ],
    environment: '安全で清潔な環境を整備し、月齢に応じた玩具や教材を準備する。室温や湿度を適切に管理し、感染症予防に努める。子どもが落ち着いて過ごせるよう、静かで温かい雰囲気づくりを心がける。個別の睡眠スペースを確保し、安心して休息できる環境を提供する。',
    lifeAndPlay: '一人ひとりの生活リズムを大切にし、授乳、離乳食、睡眠などの基本的な生活習慣の確立を支援する。月齢に応じた遊びを提供し、感覚遊びや運動遊びを通じて発達を促す。保育者との愛着関係を深め、情緒の安定を図る。',
    healthSafety: '毎日の健康チェックを実施し、体調の変化に注意を払う。清潔な環境を保持し、感染症予防対策を徹底する。アレルギー対応や個別の健康管理を適切に行う。',
    management: '職員間の連携を密にし、情報共有を徹底する。保護者との連絡を密に取り、信頼関係を築く。研修参加により専門性の向上を図る。',
    evaluation: '月末に振り返りを行い、目標達成度を評価する。保護者からの意見や要望を収集し、保育の改善に活かす。次月の計画立案に向けた課題を明確にする。'
};

const ViewMonthlyThreeYearsAbove: React.FC = () => {
  const { pid, selectedOption } = useParams<{ pid: string; selectedOption: string }>();
  const storedData = JSON.parse(sessionStorage.getItem('monthlyData1_2') || '[]');
  const item = storedData.find((data: any) => data.pid === pid && data.selectedOption === selectedOption);
  
  const [expandedSections, setExpandedSections] = useState({
    basic: true,
    content: true,
    additional: true
  });

  const toggleSection = (section: 'basic' | 'content' | 'additional') => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const options = [
    '月指導計画 0 歳児',
    '月指導計画 1・2 歳児',
    '月指導計画 3・4・5 歳児'
  ];

  return (
    
    <ThemeProvider theme={theme}>
        <ContentMain className="flex flex-col min-h-screen">
                {/* Header Section */}
        <Card elevation={3} sx={{ mb: 3 }}>
            <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                    <Visibility color="primary" />
                    <Typography variant="h5" fontWeight="bold" color="primary">
                        月指導計画 表示モード
                    </Typography>
                </Box>
                
                <Grid item xs={12} sm={8} md={6} lg={4} className='text-start'>
                    <FormControl size='small' fullWidth>
                        <InputLabel id="selected-option-label">年間指導計画を選択する</InputLabel>
                        <Select
                            labelId="selected-option-label"
                            value={selectedOption || options[0]}
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
            </CardContent>
        </Card>
        <Grid className="pt-5 text-start px-3">
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

        {/* เป้าหมายประจำปี - สำหรับ 3-4-5 ขวบ */}
        <Accordion 
            expanded={expandedSections.basic} 
            onChange={() => toggleSection('basic')} 
            sx={{ border: '2px solid #ff9800', mt: 2 }}
        >
            <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography fontWeight="600">เป้าหมายประจำเดือน (3-4-5歳)</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography fontWeight="bold" sx={{ mb: 2 }} align="left">
                子どもの 生活する姿(ภาพลักษณ์ของเด็กที่ใช้ชีวิต)
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12}>  
                <TextField
                    fullWidth
                    multiline
                    rows={3}
                    label="養護"
                    value={sampleData.goals.nursing}
                    InputProps={{
                        readOnly: true,
                    }}
                    sx={{
                        '& .MuiInputBase-input': {
                            backgroundColor: '#f9f9f9'
                        }
                    }}
                />
                </Grid>
            </Grid>
            
            <Typography fontWeight="bold" sx={{ mb: 2, mt: 3 }} align="left">
                ねらい (เป้าหมาย)
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>  
                <Typography fontWeight="bold" sx={{ mb: 1 }} align="left">
                    養護 (การพยาบาล)
                </Typography>
                <TextField
                    fullWidth
                    multiline
                    rows={2}
                    label="養護"
                    placeholder="การพยาบาล..."
                    value={item?.basicInfo?.care || ''}
                />
                </Grid>
                <Grid item xs={12} md={6}>  
                <Typography fontWeight="bold" sx={{ mb: 1 }} align="left">
                    教育 (การศึกษา)
                </Typography>
                <TextField
                    fullWidth
                    multiline
                    rows={2}
                    label="教育"
                    placeholder="การศึกษา..."
                    value={item?.basicInfo?.education || ''}
                />
                </Grid>
            </Grid>
            
            <Grid container spacing={2} sx={{ mt: 2 }}>
                <Grid item xs={12}>
                <Typography fontWeight="bold" sx={{ mb: 1 }} align="left">
                    健 康 ・ 安 全 (สุขภาพและความปลอดภัย)
                </Typography>
                <TextField
                    fullWidth
                    multiline
                    rows={4}
                    label="健 康 ・ 安 全"
                    placeholder="สุขภาพและความปลอดภัย..."
                    value={item?.basicInfo?.healthSafety || ''}
                />
                </Grid>
            </Grid>
            </AccordionDetails>
        </Accordion>

        {/* บันทึกพัฒนาการเด็ก */}
        <Accordion 
            expanded={expandedSections.content} 
            onChange={() => toggleSection('content')} 
            sx={{ mt: 3, border: '2px solid #9c27b0' }}
        >
            <AccordionSummary expandIcon={<ExpandMore />}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Person color="secondary" />
                <Typography variant="h6" fontWeight="600">
                内容 (รายละเอียด)
                </Typography>
                <Tooltip title="เด็กแต่ละคนและข้อมูลการพัฒนา">
                <Info color="info" />
                </Tooltip>
            </Box>
            </AccordionSummary>
            <AccordionDetails>
            <Box sx={{ mb: 2 }}>
                <Typography fontWeight="bold" align="left">
                養　護 (การพยาบาล)　,　教　育 (การศึกษา)
                </Typography>
            </Box>
            <Box sx={{ mb: 2 }}>
                <Typography fontWeight="bold" align="left">
                生命の保持 情緒の安定 　,　健 康 ・ 人 間 関 係 ・ 環 境 ・ 言 葉 ・ 表 現
                </Typography>
            </Box>
        
            <Grid container spacing={2} sx={{ mt: 2 }}>
                <Grid item xs={12} md={6}>
                <Typography fontWeight="bold" sx={{ mb: 1 }} align="left">
                    指導の内容 (เนื้อหาของการสอน)
                </Typography>
                <TextField
                    fullWidth
                    multiline
                    rows={8}
                    label="指導の内容"
                    placeholder="เนื้อหาของการสอน..."
                    value={item?.content?.teachingContent || ''}
                />
                </Grid>
                <Grid item xs={12} md={6}>
                <Typography fontWeight="bold" sx={{ mb: 1 }} align="left">
                    環境の構成 (การจัดสภาพแวดล้อม)
                </Typography>
                <TextField
                    fullWidth
                    multiline
                    rows={8}
                    label="環境の構成"
                    placeholder="การจัดสภาพแวดล้อม..."
                    value={item?.content?.environment || ''}
                />
                </Grid>
            </Grid>
            
            <Grid container spacing={2} sx={{ mt: 2 }}>
                <Grid item xs={12} md={6}>
                <Typography fontWeight="bold" sx={{ mb: 1 }} align="left">
                    予想される子どもの活動
                </Typography>
                <TextField
                    fullWidth
                    multiline
                    rows={11}
                    label="予想される子どもの活動"
                    placeholder="กิจกรรมที่คาดหวังจากเด็ก..."
                    value={item?.content?.expectedActivities || ''}
                />
                </Grid>
                <Grid item xs={12} md={6}>
                <Typography fontWeight="bold" sx={{ mb: 1 }} align="left">
                    保育士等の援助と配慮
                </Typography>
                <TextField
                    fullWidth
                    multiline
                    rows={11}
                    label="保育士等の援助と配慮"
                    placeholder="ความช่วยเหลือและการเอาใจใส่..."
                    value={item?.content?.support || ''}
                />
                </Grid>
            </Grid>
            </AccordionDetails>
        </Accordion>

        {/* ข้อมูลเพิ่มเติม */}
        <Accordion 
            expanded={expandedSections.additional} 
            onChange={() => toggleSection('additional')} 
            sx={{ mt: 3, border: '2px solid #4caf50' }}
        >
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
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                <Typography fontWeight="bold" sx={{ mb: 1 }} align="left">
                    組運営・個別対応 (การจัดการกลุ่มและการตอบสนองรายบุคคล)
                </Typography>
                <TextField
                    fullWidth
                    multiline
                    rows={6}
                    label="組運営・個別対応"
                    placeholder="การจัดการกลุ่มและการตอบสนองรายบุคคล..."
                    value={item?.additional?.groupManagement || ''}
                />
                </Grid>
                <Grid item xs={12} md={6}>
                <Typography fontWeight="bold" sx={{ mb: 1 }} align="left">
                    家 庭 ・地域と の 連 携 (ความร่วมมือกับครอบครัวและชุมชน)
                </Typography>
                <TextField
                    fullWidth
                    multiline
                    rows={6}
                    label="家 庭 ・地域と の 連 携"
                    placeholder="ความร่วมมือกับครอบครัวและชุมชน..."
                    value={item?.additional?.familyCommunity || ''}
                />
                </Grid>
            </Grid>
            
            <Grid container spacing={2} sx={{ mt: 2 }}>
                <Grid item xs={12} md={4}>
                    <Typography fontWeight="bold"  align="left">
                        行事 (กิจกรรม)
                    </Typography>
                    {sampleData.events.map((event, index) => (
                        <Grid container spacing={0.5} key={index}>
                            <Grid item xs={3}>
                                <TextField
                                    fullWidth
                                    size="small"
                                    margin="dense"
                                    label="日"
                                    value={event.day}
                                    InputProps={{
                                        readOnly: true,
                                    }}
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
                                            backgroundColor: '#f9f9f9'
                                        }
                                    }}
                                />
                            </Grid>
                            <Grid item xs={3}>
                                <TextField
                                    fullWidth
                                    size="small"
                                    margin="dense"
                                    label="曜"
                                    value={event.dayOfWeek}
                                    InputProps={{
                                        readOnly: true,
                                    }}
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
                                            backgroundColor: '#f9f9f9'
                                        }
                                    }}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    fullWidth
                                    size="small"
                                    margin="dense"
                                    label="行事名"
                                    value={event.eventName}
                                    InputProps={{
                                        readOnly: true,
                                    }}
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
                                            backgroundColor: '#f9f9f9'
                                        }
                                    }}
                                />
                            </Grid>
                        </Grid>
                    ))}
                </Grid>
            
                <Grid item xs={12} md={8}>
                <Typography fontWeight="bold" sx={{ mb: 1 }} align="left">
                    評　価・反　省 (การประเมินและการสะท้อนกลับ)
                </Typography>
                <TextField
                    fullWidth
                    multiline
                    rows={5}
                    label="評　価・反　省"
                    placeholder="การประเมินและการสะท้อนกลับ..."
                    value={item?.additional?.evaluation || ''}
                />
                </Grid>
            </Grid>
            </AccordionDetails>
        </Accordion>

        </Grid>

            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'space-between', mt: 4, mb: 2 }}>
                <Button variant="outlined" href="/report/monthlyplan" startIcon={<ArrowBack />} size="large">
                    戻る
                </Button>
            </Box>
        </ContentMain>
    </ThemeProvider>
  );
};

export default ViewMonthlyThreeYearsAbove;