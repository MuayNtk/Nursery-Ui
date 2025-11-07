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

type InfoRow = {
  pid: string;
  id: number;
  text: string;
  ref: string;
};

const InfoArea: React.FC = () => {
  const navigate = useNavigate();
  const [rows, setRows] = useState<InfoRow[]>([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const sample: InfoRow[] = [
      {
        pid: 'info-1',
        id: 1,
        text:
          '①身近な環境に親しみ、触れ合う中で様々なものに興味や関心を持\n' +
          '　つ。\n',
        ref: '',
      },
    ];
    setRows(sample);
  }, []);

  const filtered = useMemo(() => {
    if (!searchText.trim()) return rows;
    const q = searchText.toLowerCase();
    return rows.filter(r =>
      String(r.id).includes(q) ||
      r.text.toLowerCase().includes(q) ||
      r.ref.toLowerCase().includes(q)
    );
  }, [rows, searchText]);

  const handleView = (pid: string) => navigate(`/master/info-area/view/${pid}`);
  const handleEdit = (pid: string) => navigate(`/master/info-area/edit/${pid}`);
  const handleDelete = (pid: string) => {
    if (window.confirm('削除しますか？')) setRows(prev => prev.filter(r => r.pid !== pid));
  };

  return (
    <ThemeProvider theme={theme}>
      <ContentMain>
        <Box sx={{ p: 3, minHeight: '100vh' }}>
          {/* Header */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h4" fontWeight="bold" sx={{ mb: 1, color: '#1976d2' }}>
              Info Area
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
                  fullWidth
                  size="small"
                  placeholder="検索（id / text / ref）"
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
<TableContainer component={Paper} sx={{ borderRadius: '16px', overflowX: 'auto' }}>
  <Table
    sx={{
      '& th, & td': { 
        paddingY: 1.5,           // ช่องห่างด้านบนล่าง
        paddingX: 2,             // ช่องห่างซ้ายขวา
      },
      '& td': {
        verticalAlign: 'top',
      },
      '& tr': {
        height: '64px',          // ความสูงแถวสวยๆ
      },
    }}
  >
    <TableHead>
      <TableRow sx={{ backgroundColor: '#f3e5f5' }}>
        <TableCell sx={{ fontWeight: 'bold', whiteSpace: 'nowrap', minWidth: 60 }}>id</TableCell>
        <TableCell sx={{ fontWeight: 'bold', minWidth: 300 }}>text</TableCell>
        <TableCell sx={{ fontWeight: 'bold', whiteSpace: 'nowrap', minWidth: 140 }}>ref</TableCell>
        <TableCell sx={{ fontWeight: 'bold', whiteSpace: 'nowrap', minWidth: 120 }}>管理</TableCell>
      </TableRow>
    </TableHead>

    <TableBody>
      {filtered.map(r => (
        <TableRow key={r.pid}>
          <TableCell>{r.id}</TableCell>

          {/* จัด text อ่านง่าย + ลมหายใจมากขึ้น */}
          <TableCell sx={{ whiteSpace: 'pre-line', lineHeight: 1.8 }}>
            {r.text}
          </TableCell>

          <TableCell>{r.ref}</TableCell>

          {/* ปุ่มจัดให้เป็นแถวสวยขึ้น */}
          <TableCell sx={{ whiteSpace: 'nowrap' }}>
            <Box sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,       // เพิ่มช่องว่างระหว่างไอคอน
            }}>
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

export default InfoArea;
