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
  Button
} from '@mui/material';
import {
  CheckCircle,
  Person,
  ExpandMore,
  Info,
  ArrowBack,
} from '@mui/icons-material';

const MonthlyThreeYearsAbove: React.FC = () => {

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


  return (
    <>
      {/* เป้าหมายประจำปี - สำหรับ 3-4-5 ขวบ */}
      <Accordion expanded={expandedSections.basic} onChange={() => toggleSection('basic')} sx={{ border: '2px solid #ff9800' }}>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography fontWeight="600">เป้าหมายประจำเดือน (3-4-5歳)</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography fontWeight="bold" sx={{ mb: 2 }} align="left">
            子どもの 生活する姿(ภาพลักษณ์ของเด็กที่ใช้ชีวิต)
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={12}>  
              <TextField
                fullWidth
                multiline
                rows={3}
                label="養護"
                placeholder="การพยาบาล..."
              />
            </Grid>
          </Grid>
          <Typography fontWeight="bold" sx={{ mb: 2 }} align="left">
            ねらい (เป้าหมาย)
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>  
              <Typography fontWeight="bold" sx={{ mb: 2 }} align="left">
               養護 (การพยาบาล)
              </Typography>
              <TextField
                fullWidth
                multiline
                rows={2}
                label="養護"
                placeholder="การพยาบาล..."
              />
            </Grid>
            <Grid item xs={12} md={6}>  
              <Typography fontWeight="bold" sx={{ mb: 2 }} align="left">
               教育 (การศึกษา)
              </Typography>
              <TextField
                fullWidth
                multiline
                rows={2}
                label="養護"
                placeholder="การพยาบาล..."
              />
            </Grid>
          </Grid>
          <Grid item xs={12} md={12}>
            <Typography fontWeight="bold" sx={{ mb: 1 }} align="left">
              健 康 ・ 安 全 (สุขภาพและความปลอดภัย)
            </Typography>
            <TextField
              fullWidth
              multiline
              rows={4}
              label="健 康 ・ 安 全"
              placeholder="สุขภาพและความปลอดภัย..."
            />
          </Grid>
        </AccordionDetails>
      </Accordion>

      {/* บันทึกพัฒนาการเด็ก - 0 ขวบ */}
      <Accordion expanded={expandedSections.content} onChange={() => toggleSection('content')} sx={{ mt: 3, border: '2px solid #9c27b0' }}>
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
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography fontWeight="bold" align="left">
              養　護 (การพยาบาล)　,　教　育 (การศึกษา)
            </Typography>
          </Box>
           <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography fontWeight="bold" align="left">
              生命の保持 情緒の安定 　,　健 康 ・ 人 間 関 係 ・ 環 境 ・ 言 葉 ・ 表 現  (การศึกษา)
            </Typography>
          </Box>
      
          <Grid container spacing={2} sx={{ mt: 2 }}>
            <Grid item xs={12} md={6}>
              <Typography fontWeight="bold" sx={{ mb: 2 }} align="left">
                指導の内容 (เนื้อหาของการสอน)
              </Typography>
              <TextField
                fullWidth
                multiline
                rows={8}
                label="ねらい"
                placeholder="เป้าหมาย..."
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography fontWeight="bold" sx={{ mb: 2 }} align="left">
              環境の構成 (การจัดสภาพแวดล้อม)
              </Typography>
              <TextField
                fullWidth
                multiline
                rows={8}
                label="子どもとの関わり方"
                placeholder="การศึกษา..."
              />
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={{ mt: 2 }}>
            <Grid item xs={12} md={6}>
              <Typography fontWeight="bold" sx={{ mb: 2 }} align="left">
               予想される子どもの活動
              </Typography>
              <TextField
                fullWidth
                multiline
                rows={12}
                label="ねらい"
                placeholder="เป้าหมาย..."
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography fontWeight="bold" sx={{ mb: 2 }} align="left">
              保育士等の援助と配慮
              </Typography>
              <TextField
                fullWidth
                multiline
                rows={12}
                label="子どもとの関わり方"
                placeholder="การศึกษา..."
              />
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>

      {/* ข้อมูลเพิ่มเติมสำหรับ 0 ขวบ */}
      <Accordion expanded={expandedSections.additional} onChange={() => toggleSection('additional')} sx={{ mt: 3, border: '2px solid #4caf50' }}>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <CheckCircle color="success" />
            <Typography variant="h6" fontWeight="600">
              รายละเอียดเพิ่มเติม (3歳)
            </Typography>
            <Tooltip title="ข้อมูลเพิ่มเติมสำหรับการวางแผน">
              <Info color="info" />
            </Tooltip>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={2} sx={{ mt: 2 }}>
            <Grid item xs={12} md={6}>
              <Typography fontWeight="bold" sx={{ mb: 2 }} align="left">
                組運営・個別対応 (การจัดการกลุ่มและการตอบสนองรายบุคคล)
              </Typography>
              <TextField
                fullWidth
                multiline
                rows={6}
                
                placeholder="การจัดการกลุ่มและการตอบสนองรายบุคคล..."
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography fontWeight="bold" sx={{ mb: 2 }} align="left">
              家 庭 ・地域と の 連 携 (ความร่วมมือกับครอบครัวและชุมชน)
              </Typography>
              <TextField
                fullWidth
                multiline
                rows={6}
                label="家 庭 ・地域と の 連 携"
                placeholder="ความร่วมมือกับครอบครัวและชุมชน..."
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

      <Box sx={{ display: 'flex', gap: 2, justifyContent: 'space-between' }}>
        <Button variant="outlined" href="/report/monthlyplan" startIcon={<ArrowBack />}>
          戻る
        </Button>
        <Button 
          variant="contained" 
          color="success" 
          startIcon={<CheckCircle />}
          sx={{
            background: 'linear-gradient(45deg, #2196f3, #9c27b0)',
            '&:hover': {
              background: 'linear-gradient(45deg, #1976d2, #7b1fa2)',
            }
          }}
        >
          บันทึก
        </Button>
      </Box>
    </>
  );
};

export default MonthlyThreeYearsAbove;