import React, { useEffect, useMemo, useState } from 'react';
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
  InputAdornment,
  TextField,
} from '@mui/material';
import { Edit, Delete, Search, Visibility, FilterList } from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ContentMain from '../content/Content';
import { useNavigate } from 'react-router-dom';

const theme = createTheme({
  palette: {
    primary: { main: '#1976d2', light: '#42a5f5', dark: '#1565c0' },
    secondary: { main: '#9c27b0', light: '#ba68c8', dark: '#7b1fa2' },
  },
  components: {
    MuiPaper: { styleOverrides: { root: { borderRadius: '16px' } } },
    MuiButton: { styleOverrides: { root: { borderRadius: '20px', textTransform: 'none', fontWeight: 600 } } },
  },
});

type ScheduleRow = {
  pid: string;
  month: string;
  schoolEvent: string;
  seasonalEvent: string;
  foodEdu: string;
  health: string;
  neuvola: string;
  staffTraining: string;
};

const AnnualSchedule: React.FC = () => {
  const navigate = useNavigate();
  const [rows, setRows] = useState<ScheduleRow[]>([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const sample: ScheduleRow[] = [
      { pid: 'm01', month: '4月', schoolEvent: '入園式', seasonalEvent: '春の自然散策', foodEdu: '旬の野菜試食', health: '健康診断', neuvola: '家庭相談', staffTraining: '安全管理研修' },
      { pid: 'm02', month: '5月', schoolEvent: 'こどもの日集会', seasonalEvent: '苗植え', foodEdu: '食文化紹介', health: '歯科検診', neuvola: '育児支援', staffTraining: '食育研修' },
      { pid: 'm03', month: '6月', schoolEvent: '運動遊び', seasonalEvent: '虫探し', foodEdu: 'お弁当の日', health: '手洗い指導', neuvola: '発達相談', staffTraining: '観察研修' },
      { pid: 'm04', month: '7月', schoolEvent: '夏祭り', seasonalEvent: '水遊び', foodEdu: '季節の果物', health: '熱中症予防', neuvola: '家庭連携', staffTraining: '行事計画' },
      { pid: 'm05', month: '8月', schoolEvent: '自由保育', seasonalEvent: '七夕制作', foodEdu: '和食の日', health: '生活リズム指導', neuvola: '相談日', staffTraining: 'ケース検討' },
      { pid: 'm06', month: '9月', schoolEvent: '敬老の日交流', seasonalEvent: '収穫体験', foodEdu: '収穫クッキング', health: '体力測定', neuvola: '地域連携', staffTraining: '連携会議' },
      { pid: 'm07', month: '10月', schoolEvent: '運動会', seasonalEvent: '秋の散歩', foodEdu: '食べ物記録週間', health: '感染症予防', neuvola: '見守り相談', staffTraining: '防災研修' },
      { pid: 'm08', month: '11月', schoolEvent: '作品展', seasonalEvent: '落ち葉遊び', foodEdu: '旬の献立', health: '姿勢指導', neuvola: '保育支援', staffTraining: 'ドキュメンテーション研修' },
      { pid: 'm09', month: '12月', schoolEvent: 'クリスマス会', seasonalEvent: '冬の自然観察', foodEdu: 'あったか料理', health: '防寒指導', neuvola: '家庭支援', staffTraining: '振り返り研修' },
      { pid: 'm10', month: '1月', schoolEvent: '新年の集い', seasonalEvent: '書き初め', foodEdu: '正月の食文化', health: '生活改善', neuvola: '子育て相談', staffTraining: '新年度準備' },
      { pid: 'm11', month: '2月', schoolEvent: '節分', seasonalEvent: '雪遊び', foodEdu: '豆まきメニュー', health: '感染症対策', neuvola: '連携支援', staffTraining: '専門研修' },
      { pid: 'm12', month: '3月', schoolEvent: '卒園式', seasonalEvent: '春待ち制作', foodEdu: '思い出レシピ', health: '心身の振り返り', neuvola: '移行支援', staffTraining: '年度総まとめ' },
    ];
    setRows(sample);
  }, []);

  const filtered = useMemo(() => {
    if (!searchText.trim()) return rows;
    const q = searchText.toLowerCase();
    return rows.filter(r => Object.values(r).some(v => String(v).toLowerCase().includes(q)));
  }, [rows, searchText]);

  const handleView = (pid: string) => navigate(`/report/annual-schedule/view/${pid}`);
  const handleEdit = (pid: string) => navigate(`/report/annual-schedule/edit/${pid}`);
  const handleDelete = (pid: string) => {
    if (window.confirm('このレコードを削除しますか？')) {
      setRows(prev => prev.filter(r => r.pid !== pid));
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <ContentMain>
        <Box sx={{ p: 3, minHeight: '100vh' }}>

          {/* Header */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h4" fontWeight="bold" sx={{ mb: 1, color: '#1976d2' }}>
              Annual Schedule
            </Typography>
            
          </Box>

          {/* Filter */}
          <Box sx={{ mb: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <FilterList sx={{ mr: 1, color: '#1976d2' }} />
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>フィルター</Typography>
            </Box>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth size="small"
                  placeholder="検索キーワード"
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
            </Grid>
          </Box>

          {/* Table */}
          <TableContainer component={Paper} sx={{ borderRadius: '16px' }}>
            <Table>
              <TableHead>
                <TableRow sx={{ backgroundColor: '#f3e5f5' }}>
                  <TableCell sx={{ fontWeight: 'bold' }}>月</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>園行事</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>季節の行事</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>食育</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>保健</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>ネウボラ</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>職員研修</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>管理</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filtered.map(r => (
                  <TableRow key={r.pid}>
                    <TableCell>{r.month}</TableCell>
                    <TableCell>{r.schoolEvent}</TableCell>
                    <TableCell>{r.seasonalEvent}</TableCell>
                    <TableCell>{r.foodEdu}</TableCell>
                    <TableCell>{r.health}</TableCell>
                    <TableCell>{r.neuvola}</TableCell>
                    <TableCell>{r.staffTraining}</TableCell>

                    {/* ปุ่มเรียงหน้ากระดาน */}
                    <TableCell sx={{ whiteSpace: 'nowrap' }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <IconButton size="small" onClick={() => handleView(r.pid)} color="info">
                          <Visibility fontSize="small" />
                        </IconButton>
                        <IconButton size="small" onClick={() => handleEdit(r.pid)} color="primary">
                          <Edit fontSize="small" />
                        </IconButton>
                        <IconButton size="small" onClick={() => handleDelete(r.pid)} color="error">
                          <Delete fontSize="small" />
                        </IconButton>
                      </Box>
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

export default AnnualSchedule;
