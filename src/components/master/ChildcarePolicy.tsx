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

type PolicyRow = {
  pid: string;
  policy: string; // 保育方針
};

const OverallplanMain: React.FC = () => {
  const navigate = useNavigate();

  const [rows, setRows] = useState<PolicyRow[]>([]);
  const [searchText, setSearchText] = useState('');

  // mock data
  useEffect(() => {
    const sample: PolicyRow[] = [
      {
        pid: 'pf-001',
        policy: '子どもの最善の利益を尊重し、安心・安全な環境で育ちを支える。',
      },
      {
        pid: 'pf-002',
        policy: '家庭・地域と連携し、一人ひとりの個性と発達段階に応じた保育を行う。',
      },
      {
        pid: 'pf-003',
        policy: '遊びを通した学びを重視し、主体性・協調性・探究心を育む。',
      },
      {
        pid: 'pf-004',
        policy: '記録と振り返りを丁寧に行い、継続的に保育の質を改善する。',
      },
    ];
    setRows(sample);
  }, []);

  const filtered = useMemo(() => {
    if (!searchText.trim()) return rows;
    const q = searchText.toLowerCase();
    return rows.filter(r => r.policy.toLowerCase().includes(q));
  }, [rows, searchText]);

  const handleView = (pid: string) => navigate(`/report/overallplan/policy/view/${pid}`);
  const handleEdit = (pid: string) => navigate(`/report/overallplan/policy/edit/${pid}`);
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
              Childcare Policy
            </Typography>
            
          </Box>

          {/* Filters (เหมือนเดิม) */}
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
                  placeholder="検索（保育方針）"
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
                  <TableCell sx={{ fontWeight: 'bold' }}>保育方針</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>管理</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filtered.map(r => (
                  <TableRow key={r.pid}>
                    <TableCell>
                      <Typography variant="body2">{r.policy}</Typography>
                    </TableCell>
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
