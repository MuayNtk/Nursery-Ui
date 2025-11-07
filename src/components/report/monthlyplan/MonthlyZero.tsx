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
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button
} from '@mui/material';
import {
  CheckCircle,
  Person,
  ExpandMore,
  Info,
  Add,
  Edit,
  Delete,
  Save,
  Cancel,
  ArrowBack
} from '@mui/icons-material';

interface ChildDevelopmentRecord {
  id: string;
  name: string;
  monthAge: string;
  livingStyle: string;
  interaction: string;
}

const MonthlyZero: React.FC = () => {
  const [childRecords, setChildRecords] = useState<ChildDevelopmentRecord[]>([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [editingRecord, setEditingRecord] = useState<ChildDevelopmentRecord | null>(null);
  const [newRecord, setNewRecord] = useState<ChildDevelopmentRecord>({
    id: '',
    name: '',
    monthAge: '',
    livingStyle: '',
    interaction: ''
  });

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

  const handleAddRecord = () => {
    setNewRecord({
      id: '',
      name: '',
      monthAge: '',
      livingStyle: '',
      interaction: ''
    });
    setEditingRecord(null);
    setOpenDialog(true);
  };

  const handleEditRecord = (record: ChildDevelopmentRecord) => {
    setNewRecord({ ...record });
    setEditingRecord(record);
    setOpenDialog(true);
  };

  const handleDeleteRecord = (id: string) => {
    setChildRecords(prev => prev.filter(record => record.id !== id));
  };

  const handleSaveRecord = () => {
    if (!newRecord.name.trim()) {
      alert('名前を入力してください');
      return;
    }

    if (editingRecord) {
      setChildRecords(prev => 
        prev.map(record => 
          record.id === editingRecord.id ? { ...newRecord } : record
        )
      );
    } else {
      const newId = Date.now().toString();
      setChildRecords(prev => [...prev, { ...newRecord, id: newId }]);
    }

    setOpenDialog(false);
    setNewRecord({
      id: '',
      name: '',
      monthAge: '',
      livingStyle: '',
      interaction: ''
    });
  };

  const handleRecordChange = (field: keyof ChildDevelopmentRecord) => (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setNewRecord(prev => ({
      ...prev,
      [field]: event.target.value
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
              子どもの発達記録 (บันทึกพัฒนาการเด็ก - 0歳)
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
            <Button
              variant="contained"
              startIcon={<Add />}
              onClick={handleAddRecord}
              sx={{ 
                borderRadius: '20px',
                background: 'linear-gradient(45deg, #9c27b0, #e1bee7)',
                '&:hover': {
                  background: 'linear-gradient(45deg, #7b1fa2, #ce93d8)',
                }
              }}
            >
              ADD
            </Button>
          </Box>

          <TableContainer component={Paper} sx={{ mt: 2, borderRadius: '12px', border: '1px solid #e0e0e0' }}>
            <Table size="small">
              <TableHead>
                <TableRow sx={{ backgroundColor: '#f3e5f5' }}>
                  <TableCell sx={{ fontWeight: 'bold', minWidth: 120 }}>名前</TableCell>
                  <TableCell sx={{ fontWeight: 'bold', minWidth: 100 }}>月齢</TableCell>
                  <TableCell sx={{ fontWeight: 'bold', minWidth: 200 }}>子どもの生活する姿</TableCell>
                  <TableCell sx={{ fontWeight: 'bold', minWidth: 200 }}>子どもとの関わり方</TableCell>
                  <TableCell sx={{ fontWeight: 'bold', minWidth: 100 }}>操作</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {childRecords.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={9} align="center" sx={{ py: 4, color: '#666' }}>
                      データがありません。ADDボタンでデータを追加してください。
                    </TableCell>
                  </TableRow>
                ) : (
                  childRecords.map((record) => (
                    <TableRow key={record.id} hover>
                      <TableCell>{record.name}</TableCell>
                      <TableCell>{record.monthAge}</TableCell>
                      <TableCell sx={{ maxWidth: 200, wordBreak: 'break-word' }}>
                        {record.livingStyle}
                      </TableCell>
                      <TableCell sx={{ maxWidth: 200, wordBreak: 'break-word' }}>
                        {record.interaction}
                      </TableCell>
                      <TableCell>
                        <Box sx={{ display: 'flex', gap: 1 }}>
                          <IconButton
                            size="small"
                            onClick={() => handleEditRecord(record)}
                            color="primary"
                          >
                            <Edit fontSize="small" />
                          </IconButton>
                          <IconButton
                            size="small"
                            onClick={() => handleDeleteRecord(record.id)}
                            color="error"
                          >
                            <Delete fontSize="small" />
                          </IconButton>
                        </Box>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </AccordionDetails>
      </Accordion>

      {/* ข้อมูลเพิ่มเติมสำหรับ 0 ขวบ */}
      <Accordion expanded={expandedSections.additional} onChange={() => toggleSection('additional')} sx={{ mt: 3, border: '2px solid #4caf50' }}>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <CheckCircle color="success" />
            <Typography variant="h6" fontWeight="600">
              รายละเอียดเพิ่มเติม (0歳)
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
                環　境　づ　く　り (การจัดสภาพแวดล้อม)
              </Typography>
              <TextField
                fullWidth
                multiline
                rows={15}
                label="養護"
                placeholder="การพยาบาล..."
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography fontWeight="bold" sx={{ mb: 2 }} align="left">
              生　活　と　遊　び (การใช้ชีวิตและการเล่น)
              </Typography>
              <TextField
                fullWidth
                multiline
                rows={15}
                label="教育"
                placeholder="การศึกษา..."
              />
            </Grid>
          </Grid>

          <Grid container spacing={2} sx={{ mt: 2 }}>
            <Grid item xs={12} md={4}>
              <Typography fontWeight="bold" sx={{ mb: 2 }} align="left">
                健康・安全 (การดูแลสุขภาพและความปลอดภัย)
              </Typography>
              <TextField
                fullWidth
                multiline
                rows={6}
                label="養護"
                placeholder="การพยาบาล..."
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography fontWeight="bold" sx={{ mb: 2 }} align="left">
              組　運　営 (การจัดการองค์กร)
              </Typography>
              <TextField
                fullWidth
                multiline
                rows={6}
                label="教育"
                placeholder="การศึกษา..."
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography fontWeight="bold" sx={{ mb: 2 }} align="left">
              評価・反省 (การประเมินและการสะท้อน)
              </Typography>
              <TextField
                fullWidth
                multiline
                rows={6}
                label="教育"
                placeholder="การศึกษา..."
              />
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>

      {/* Add/Edit Dialog */}
      <Dialog 
        open={openDialog} 
        onClose={() => setOpenDialog(false)}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: { borderRadius: '16px' }
        }}
      >
        <DialogTitle sx={{ backgroundColor: '#f5f5f5', fontWeight: 'bold' }}>
          {editingRecord ? 'データ編集' : 'データ追加'}
        </DialogTitle>
        <DialogContent sx={{ mt: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="名前 *"
                value={newRecord.name}
                onChange={handleRecordChange('name')}
                required
                margin="dense"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="月齢 (例: ３ヶ月)"
                value={newRecord.monthAge}
                onChange={handleRecordChange('monthAge')}
                placeholder="３ヶ月"
                margin="dense"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                rows={3}
                label="子どもの生活する姿"
                value={newRecord.livingStyle}
                onChange={handleRecordChange('livingStyle')}
                margin="dense"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                rows={3}
                label="子どもとの関わり方"
                value={newRecord.interaction}
                onChange={handleRecordChange('interaction')}
                margin="dense"
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions sx={{ p: 3, gap: 1 }}>
          <Button 
            onClick={() => setOpenDialog(false)}
            variant="outlined"
            startIcon={<Cancel />}
          >
            キャンセル
          </Button>
          <Button 
            onClick={handleSaveRecord}
            variant="contained"
            startIcon={<Save />}
            sx={{
              background: 'linear-gradient(45deg, #2196f3, #9c27b0)',
              '&:hover': {
                background: 'linear-gradient(45deg, #1976d2, #7b1fa2)',
              }
            }}
          >
            保存
          </Button>
        </DialogActions>
      </Dialog>

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

export default MonthlyZero;