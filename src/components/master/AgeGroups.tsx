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

type AgeGroupRow = {
  pid: string;
  id: number;
  name: string;
};

const AgeGroups: React.FC = () => {
  const navigate = useNavigate();
  const [rows, setRows] = useState<AgeGroupRow[]>([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const sample: AgeGroupRow[] = [
      { pid: 'g1', id: 1, name: '0歳児' },
      { pid: 'g2', id: 2, name: '1歳児' },
      { pid: 'g3', id: 3, name: '2歳児' },
      { pid: 'g4', id: 4, name: '3歳児' },
      { pid: 'g5', id: 5, name: '4歳児' },
      { pid: 'g6', id: 6, name: '5歳児' },
    ];
    setRows(sample);
  }, []);

  const filtered = useMemo(() => {
    if (!searchText.trim()) return rows;
    const q = searchText.toLowerCase();
    return rows.filter(r =>
      String(r.id).includes(q) || r.name.toLowerCase().includes(q)
    );
  }, [rows, searchText]);

  const handleView = (pid: string) => navigate(`/master/age-groups/view/${pid}`);
  const handleEdit = (pid: string) => navigate(`/master/age-groups/edit/${pid}`);
  const handleDelete = (pid: string) => {
    if (window.confirm('削除しますか？')) {
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
              Age Groups
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
                  placeholder="検索（ID または 年齢区分）"
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
                  <TableCell sx={{ fontWeight: 'bold' }}>age_group_id</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>age_group_name</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>管理</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {filtered.map(r => (
                  <TableRow key={r.pid}>
                    <TableCell>{r.id}</TableCell>
                    <TableCell>{r.name}</TableCell>
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

export default AgeGroups;
