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

type DevelopmentRow = {
  pid: string;
  area_id: number;
  area_name: string;
  area_type: string;
  sub_desk_id: number;
  overplanmain: number;
};

const DevelopmentArea: React.FC = () => {
  const navigate = useNavigate();

  const [rows, setRows] = useState<DevelopmentRow[]>([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const sample: DevelopmentRow[] = [
      { pid: 'd1', area_id: 1, area_name: '養護', area_type: 'care', sub_desk_id: 1, overplanmain: 1 },
      { pid: 'd2', area_id: 2, area_name: '教育', area_type: 'education', sub_desk_id: 2, overplanmain: 1 },
      { pid: 'd3', area_id: 3, area_name: '教育', area_type: 'care', sub_desk_id: 1, overplanmain: 2 },
      { pid: 'd4', area_id: 4, area_name: '教育', area_type: 'education', sub_desk_id: 2, overplanmain: 2 },
    ];
    setRows(sample);
  }, []);

  const filtered = useMemo(() => {
    if (!searchText.trim()) return rows;
    const q = searchText.toLowerCase();
    return rows.filter(r =>
      String(r.area_id).includes(q) ||
      r.area_name.toLowerCase().includes(q) ||
      r.area_type.toLowerCase().includes(q) ||
      String(r.sub_desk_id).includes(q) ||
      String(r.overplanmain).includes(q)
    );
  }, [rows, searchText]);

  const handleView = (pid: string) => navigate(`/master/development-area/view/${pid}`);
  const handleEdit = (pid: string) => navigate(`/master/development-area/edit/${pid}`);
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
              Development Area
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
                  <TableCell sx={{ fontWeight: 'bold' }}>area_id</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>area_name</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>area_type</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>sub_desk_id</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>overplanmain </TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>管理</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {filtered.map(r => (
                  <TableRow key={r.pid}>
                    <TableCell>{r.area_id}</TableCell>
                    <TableCell>{r.area_name}</TableCell>
                    <TableCell>{r.area_type}</TableCell>
                    <TableCell>{r.sub_desk_id}</TableCell>
                    <TableCell>{r.overplanmain}</TableCell>

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

export default DevelopmentArea;
