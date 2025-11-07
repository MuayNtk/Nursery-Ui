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

type Row = {
  pid: string;
  sub_desk_id: number;
  name: string;
  info1?: string; info2?: string; info3?: string; info4?: string; info5?: string;
  info6?: string; info7?: string; info8?: string; info9?: string; info10?: string;
};

const AboutsupDesk: React.FC = () => {
  const navigate = useNavigate();
  const [rows, setRows] = useState<Row[]>([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const sample: Row[] = [
      {
        pid: 'sd-1',
        sub_desk_id: 1,
        name: '育みたい\n資質・能力',
        info1: '知識・技能の基礎',
        info2: '思考力・判断力・\n表現力等の基礎',
        info3: '学びに向かう力、\n人間性等',
      },
      {
        pid: 'sd-2',
        sub_desk_id: 2,
        name: '10の姿',
        info1: '健康な心と体',
        info2: '自立心',
        info3: '協同性',
        info4: '道徳性・規範意識の芽生え',
        info5: '社会生活との\n関わり',
        info6: '言葉による\n伝え合い',
        info7: '思考力の芽生え',
        info8: '自然との関わり\n生命尊重',
        info9: '数量・図形・文字\n等への関心・感覚',
        info10:'豊かな感性と\n表現',
      },
    ];
    setRows(sample);
  }, []);

  const filtered = useMemo(() => {
    if (!searchText.trim()) return rows;
    const q = searchText.toLowerCase();
    return rows.filter(r =>
      Object.values(r).some(v => String(v ?? '').toLowerCase().includes(q))
    );
  }, [rows, searchText]);

  const handleView = (pid: string) => navigate(`/master/about-subdesk/view/${pid}`);
  const handleEdit = (pid: string) => navigate(`/master/about-subdesk/edit/${pid}`);
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
              About sub desk
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
                  placeholder="検索キーワード（全カラム）"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  InputProps={{ startAdornment: (
                    <InputAdornment position="start"><Search /></InputAdornment>
                  )}}
                />
              </Grid>
            </Grid>
          </Box>

          {/* Table (แนวนอนเยอะ → อนุญาตเลื่อน) */}
          <TableContainer component={Paper} sx={{ borderRadius: '16px', overflowX: 'auto' }}>
            <Table sx={{ '& td': { whiteSpace: 'pre-line' } }}>
              <TableHead>
                <TableRow sx={{ backgroundColor: '#f3e5f5' }}>
                  <TableCell sx={{ fontWeight: 'bold' }}>sub_desk_id</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>name</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>info1</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>info2</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>info3</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>info4</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>info5</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>info6</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>info7</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>info8</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>info9</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>info10</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>管理</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {filtered.map(r => (
                  <TableRow key={r.pid}>
                    <TableCell>{r.sub_desk_id}</TableCell>
                    <TableCell>{r.name}</TableCell>
                    <TableCell>{r.info1}</TableCell>
                    <TableCell>{r.info2}</TableCell>
                    <TableCell>{r.info3}</TableCell>
                    <TableCell>{r.info4}</TableCell>
                    <TableCell>{r.info5}</TableCell>
                    <TableCell>{r.info6}</TableCell>
                    <TableCell>{r.info7}</TableCell>
                    <TableCell>{r.info8}</TableCell>
                    <TableCell>{r.info9}</TableCell>
                    <TableCell>{r.info10}</TableCell>
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

export default AboutsupDesk;
