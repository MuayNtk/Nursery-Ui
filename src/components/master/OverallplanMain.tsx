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
import {
  Edit,
  Delete,
  Search,
  Visibility,
  FilterList,
} from '@mui/icons-material';
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
    MuiButton: {
      styleOverrides: { root: { borderRadius: '20px', textTransform: 'none', fontWeight: 600 } },
    },
  },
});

type OverallPlanRow = {
  philosophy: string;      // 保育理念
  year: string;            // 毎年
  idealChild: string;      // 目指す子ども像
  idealCaregiver: string;  // 望まれる保育者像
  pid: string;             // สำหรับจัดการแถว
};

const OverallplanMain: React.FC = () => {
  const navigate = useNavigate();

  const [rows, setRows] = useState<OverallPlanRow[]>([]);
  const [searchText, setSearchText] = useState('');

  // ใส่ sample data ให้พร้อมใช้งาน (แก้ไขตามจริงได้)
  useEffect(() => {
    const sample: OverallPlanRow[] = [
      {
        pid: 'op-2024-01',
        year: '2024',
        philosophy: '子どもの最善の利益を第一に、家庭と地域と連携して育つ。',
        idealChild: '自分で考え行動できる、思いやりと探究心をもつ子ども。',
        idealCaregiver: '子ども理解に基づき、対話と観察で支える専門性の高い保育者。',
      },
      {
        pid: 'op-2023-01',
        year: '2023',
        philosophy: '安心・安全な環境の中で、一人ひとりを尊重し育つ。',
        idealChild: '健康で主体的、友だちを大切にする子ども。',
        idealCaregiver: 'チームで連携し、成長を丁寧に記録・振り返る保育者。',
      },
    ];
    setRows(sample);
  }, []);

  const filtered = useMemo(() => {
    if (!searchText.trim()) return rows;
    const q = searchText.toLowerCase();
    return rows.filter(r =>
      r.year.toLowerCase().includes(q) ||
      r.philosophy.toLowerCase().includes(q) ||
      r.idealChild.toLowerCase().includes(q) ||
      r.idealCaregiver.toLowerCase().includes(q)
    );
  }, [rows, searchText]);

  const handleView = (pid: string) => {
    navigate(`/report/overallplan/view/${pid}`);
  };

  const handleEdit = (pid: string) => {
    navigate(`/report/overallplan/edit/${pid}`);
  };

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
              OverallPlanMain
            </Typography>
            
          </Box>

          {/* Filters (หน้าตาเดียวกับ Annualplan) */}
          <Box sx={{ mb: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <FilterList sx={{ mr: 1, color: '#1976d2' }} />
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                フィルター
              </Typography>
            </Box>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  size="small"
                  placeholder="検索（保育理念 / 毎年 / 子ども像 / 保育者像）"
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
                  <TableCell sx={{ fontWeight: 'bold' }}>保育理念</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>毎年</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>目指す子ども像</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>望まれる保育者像</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>管理</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filtered.map((r) => (
                  <TableRow key={r.pid}>
                    <TableCell>
                      <Typography variant="body2">{r.philosophy}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="caption" color="text.secondary">
                        {r.year}年
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="body2" fontWeight={600}>
                        {r.idealChild}
                      </Typography>
                    </TableCell>
                    <TableCell>{r.idealCaregiver}</TableCell>
                    <TableCell>
                      <IconButton size="small" onClick={() => handleView(r.pid)} color="info">
                        <Visibility fontSize="small" />
                      </IconButton>
                      <IconButton size="small" onClick={() => handleEdit(r.pid)} color="primary">
                        <Edit fontSize="small" />
                      </IconButton>
                      <IconButton size="small" onClick={() => handleDelete(r.pid)} color="error">
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

export default OverallplanMain;
