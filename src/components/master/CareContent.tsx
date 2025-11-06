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

type CareContentRow = {
  pid: string;
  goal_id: number;
  age_group_id: number;
  area_id: number;
  sub_area_id: number;
  goal_text_th: string;
};

const CareContent: React.FC = () => {
  const navigate = useNavigate();

  const [rows, setRows] = useState<CareContentRow[]>([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const sample: CareContentRow[] = [
      {
        pid: 'c1',
        goal_id: 1,
        age_group_id: 1,
        area_id: 1,
        sub_area_id: 1,
        goal_text_th: '・健康や安全に配慮し、一人ひとりの生活リズムを大切にしつつ、生理的欲求を十分に満たす。',
      },
      {
        pid: 'c2',
        goal_id: 2,
        age_group_id: 1,
        area_id: 1,
        sub_area_id: 2,
        goal_text_th: '・保育士との応答的な触れ合いや関わりの中で、安心して過ごせるように愛着関係を育んでいく。',
      },
      {
        pid: 'c3',
        goal_id: 3,
        age_group_id: 1,
        area_id: 2,
        sub_area_id: 1,
        goal_text_th:
          '・人や物に興味を示し、探索活動が活発になる。\n' +
          '・保育士に身の回りを清潔にしてもらうことを心地よいと感じる。',
      },
      {
        pid: 'c5',
        goal_id: 5,
        age_group_id: 1,
        area_id: 2,
        sub_area_id: 2,
        goal_text_th:
          '・保育士との応答的なかかわりのもと、愛着関係が芽生え、要求をする。\n' +
          '・周囲の人に興味や関心を示し、関わろうとする。',
      },
      {
        pid: 'c6',
        goal_id: 6,
        age_group_id: 1,
        area_id: 2,
        sub_area_id: 3,
        goal_text_th:
          '・保育士の語りかけに泣き声や喃語、片言により声を出して応えようとする。\n' +
          '・身振りや指さしなどで、思いを表そうとする。',
      },
      {
        pid: 'c7',
        goal_id: 7,
        age_group_id: 1,
        area_id: 2,
        sub_area_id: 4,
        goal_text_th: '・身近なものに興味や関心を示し、見たり、触れたりする。',
      },
      {
        pid: 'c8',
        goal_id: 8,
        age_group_id: 1,
        area_id: 2,
        sub_area_id: 5,
        goal_text_th: '・生活の中で出会う様々なものを心で受け止め、感じたことを全身で表す。',
      },
    ];
    setRows(sample);
  }, []);

  const filtered = useMemo(() => {
    if (!searchText.trim()) return rows;
    const q = searchText.toLowerCase();
    return rows.filter(r =>
      [r.goal_id, r.age_group_id, r.area_id, r.sub_area_id, r.goal_text_th]
        .map(String)
        .some(v => v.toLowerCase().includes(q))
    );
  }, [rows, searchText]);

  const handleView = (pid: string) => navigate(`/master/care-content/view/${pid}`);
  const handleEdit = (pid: string) => navigate(`/master/care-content/edit/${pid}`);
  const handleDelete = (pid: string) => {
    if (window.confirm('削除しますか？')) setRows(prev => prev.filter(r => r.pid !== pid));
  };

  return (
    <ThemeProvider theme={theme}>
      <ContentMain>
        <Box sx={{ p: 3, minHeight: '100vh' }}>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h4" fontWeight="bold" sx={{ mb: 1, color: '#1976d2' }}>
              Care Content
            </Typography>
            
          </Box>

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
                    startAdornment: <InputAdornment position="start"><Search /></InputAdornment>,
                  }}
                />
              </Grid>
            </Grid>
          </Box>

          <TableContainer component={Paper} sx={{ borderRadius: '16px', overflowX: 'auto' }}>
            <Table sx={{ '& td': { verticalAlign: 'top' } }}>
              <TableHead>
                <TableRow sx={{ backgroundColor: '#f3e5f5' }}>
                  <TableCell sx={{ fontWeight: 'bold' }}>goal_id</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>age_group_id</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>area_id</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>sub_area_id</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>goal_text_th</TableCell>
                  <TableCell sx={{ fontWeight: 'bold', whiteSpace: 'nowrap' }}>管理</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {filtered.map(r => (
                  <TableRow key={r.pid}>
                    <TableCell>{r.goal_id}</TableCell>
                    <TableCell>{r.age_group_id}</TableCell>
                    <TableCell>{r.area_id}</TableCell>
                    <TableCell>{r.sub_area_id}</TableCell>
                    <TableCell sx={{ whiteSpace: 'pre-line', lineHeight: 1.6 }}>
                      {r.goal_text_th}
                    </TableCell>

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

export default CareContent;
