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

const MonthlyOneTwo: React.FC = () => {

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


  return (
    <>
      {/* เป้าหมายประจำปี - สำหรับ 0 ขวบ */}
      <Accordion expanded={expandedSections.basic} onChange={() => toggleSection('basic')} sx={{ border: '2px solid #ff9800' }}>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography fontWeight="600">เป้าหมายประจำปี (0歳)</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography fontWeight="bold" sx={{ mb: 2 }} align="left">
            ねらい (เป้าหมาย)
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                multiline
                rows={2}
                label="養護"
                placeholder="การพยาบาล..."
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                multiline
                rows={2}
                label="教育"
                placeholder="การศึกษา..."
              />
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={{ mt: 2 }}>
            {/* Left side - Family/Community Cooperation */}
            <Grid item xs={12} md={8}>
              <Typography fontWeight="bold" sx={{ mb: 1 }} align="left">
                家庭・地域との連携 (การร่วมมือกับครอบครัวและชุมชน)
              </Typography>
              <TextField
                fullWidth
                multiline
                rows={5}
                label="家庭・地域との連携"
                placeholder="การร่วมมือกับครอบครัวและชุมชน..."
              />
            </Grid>
            
            {/* Right side - Events */}
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
                      label="日"
                      placeholder="วัน"
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
                      label="曜"
                      placeholder="วัน"
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
                      label="行事名"
                      placeholder="ชื่อกิจกรรม"
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
          </Grid>
        </AccordionDetails>
      </Accordion>

      {/* บันทึกพัฒนาการเด็ก - 0 ขวบ */}
      <Accordion expanded={expandedSections.development} onChange={() => toggleSection('development')} sx={{ mt: 3, border: '2px solid #9c27b0' }}>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Person color="secondary" />
            <Typography variant="h6" fontWeight="600">
              子どもの発達記録 (บันทึกพัฒนาการเด็ก - 1 歳)
            </Typography>
            <Tooltip title="เด็กแต่ละคนและข้อมูลการพัฒนา">
              <Info color="info" />
            </Tooltip>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography fontWeight="bold" align="left">
              การจัดการข้อมูลเด็ก
            </Typography>
          </Box>
      
          <Grid container spacing={2} sx={{ mt: 2 }}>
            <Grid item xs={12} md={6}>
              <Typography fontWeight="bold" sx={{ mb: 2 }} align="left">
                ねらい (เป้าหมาย)
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
              子どもとの関わり方 （保育士等の育みたい内容）
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
                ねらい (เป้าหมาย)
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
              子どもとの関わり方 （保育士等の育みたい内容）
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

          <Grid container spacing={2} sx={{ mt: 2 }}>
            <Grid item xs={12} md={4}>
              <Typography fontWeight="bold" sx={{ mb: 2 }} align="left">
               環境づくり (การจัดสภาพแวดล้อม)
              </Typography>
              <TextField
                fullWidth
                multiline
                rows={15}
                label="環境づくり"
                placeholder="การจัดสภาพแวดล้อม..."
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography fontWeight="bold" sx={{ mb: 2 }} align="left">
              予想される子どもの活動 (กิจกรรมที่คาดหวัง)
              </Typography>
              <TextField
                fullWidth
                multiline
                rows={15}
                label="予想される子どもの活動"
                placeholder="กิจกรรมที่คาดหวังของเด็ก..."
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography fontWeight="bold" sx={{ mb: 2 }} align="left">
              配慮・援助 (การดูแลและช่วยเหลือ)
              </Typography>
              <TextField
                fullWidth
                multiline
                rows={15}
                label=" 配慮・援助 "
                placeholder="การดูแลและช่วยเหลือ..."
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
              รายละเอียดเพิ่มเติม (1歳)
            </Typography>
            <Tooltip title="ข้อมูลเพิ่มเติมสำหรับการวางแผน">
              <Info color="info" />
            </Tooltip>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={2} sx={{ mt: 2 }}>
            <Grid item xs={12} md={4}>
              <Typography fontWeight="bold" sx={{ mb: 2 }} align="left">
                個　別　対　応 (การตอบสนองรายบุคคล)
              </Typography>
              <TextField
                fullWidth
                multiline
                rows={6}
                label="個　別　対　応"
                placeholder="การตอบสนองรายบุคคล..."
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography fontWeight="bold" sx={{ mb: 2 }} align="left">
              組　　運　　営(การจัดการกลุ่ม)
              </Typography>
              <TextField
                fullWidth
                multiline
                rows={6}
                label="組　　運　　営"
                placeholder="การจัดการกลุ่ม..."
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography fontWeight="bold" sx={{ mb: 2 }} align="left">
              評　価・反　省 (การประเมินและการทบทวน)
              </Typography>
              <TextField
                fullWidth
                multiline
                rows={6}
                label="評　価・反　省"
                placeholder="การประเมินและการทบทวน..."
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

export default MonthlyOneTwo;