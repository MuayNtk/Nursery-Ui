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
  Button,
  Tooltip,
  Collapse,
} from '@mui/material';
import { Edit, Delete, Search, Visibility, FilterList, ExpandMore, ExpandLess } from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ContentMain from '../content/Content';
import { useNavigate } from 'react-router-dom';

const theme = createTheme({
  palette: {
    primary: { main: '#1976d2', light: '#42a5f5', dark: '#1565c0' },
    secondary: { main: '#9c27b0', light: '#ba68c8', dark: '#7b1fa2' },
  },
  components: {
    MuiPaper: { styleOverrides: { root: { borderRadius: 16 } } },
    MuiButton: { styleOverrides: { root: { borderRadius: 20, textTransform: 'none', fontWeight: 600 } } },
  },
});

type SubAreaRow = {
  pid: string;
  sub_area_id: number;
  area_id: number;
  pure_id?: string;              // 例: "11", "21"
  sub_area_name: string;
  sub_info: string;              // 長文
};

const clampStyles = {
  overflow: 'hidden',
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical' as const,
  WebkitLineClamp: 3,           // ← ย่อ 3 บรรทัด
  whiteSpace: 'pre-line',       // เคารพ \n
  lineHeight: 1.6,
};

const SubArea: React.FC = () => {
  const navigate = useNavigate();
  const [rows, setRows] = useState<SubAreaRow[]>([]);
  const [searchText, setSearchText] = useState('');
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const sample: SubAreaRow[] = [
      {
        pid: 'sa-1',
        sub_area_id: 1,
        area_id: 1,
        pure_id: '11', // sub_area_id+area_id
        sub_area_name: '生命の保持',
        sub_info:
          '①一人一人の子どもが、快適に生活できるようにする。\n' +
          '②一人一人の子どもが、健康で安全に過ごせるようにする。\n' +
          '③一人一人の子どもの生理的欲求が、十分に満たされるようにする。\n' +
          '④一人一人の子どもの健康増進が、積極的に図られるようにする。',
      },
      {
        pid: 'sa-2',
        sub_area_id: 2,
        area_id: 1,
        pure_id: '21',
        sub_area_name: '情緒の安定',
        sub_info:
          '①一人一人の子どもが、安心感を持って過ごせるようにする。\n' +
          '②一人一人の子どもが、自分の気持ちを安心して表すことができるようにする。\n' +
          '③一人一人の子どもが、周囲から主体として受け止められ主体として育ち、自分を肯定する気持ちが育まれていくようにする。\n' +
          '④一人一人の子どもの心身の疲れが癒されるようにする。',
      },
      {
        pid: 'sa-3',
        sub_area_id: 3,
        area_id: 2,
        sub_area_name: '健康',
        sub_info:
          '①明るく伸び伸びと生活し、自分から体を動かすことを楽しむ。\n' +
          '②自分の体を十分に動かし、様々な動きをしようとする。\n' +
          '③健康、安全な生活に必要な習慣に気付き、自分でしてみようとする気持ちが育つ。',
      },
      {
        pid: 'sa-4',
        sub_area_id: 4,
        area_id: 2,
        sub_area_name: '人間関係',
        sub_info:
          '①保育園での生活を楽しみ、身近な人と関わる心地よさを感じる。\n' +
          '②周囲の子ども等への興味や関心が高まり、関わりをもとうとする。\n' +
          '③保育園の生活の仕方に慣れ、きまりの大切さに気付く。',
      },
      {
        pid: 'sa-5',
        sub_area_id: 5,
        area_id: 2,
        sub_area_name: '言葉',
        sub_info:
          '①言葉遊びや言葉で表現する楽しさを感じる。\n' +
          '②人の言葉や話などを聞き、自分でも思ったことを伝えようとする。\n' +
          '③絵本や物語等に親しむとともに、言葉のやり取りを通じて身近な人と気持ちを通わせる。',
      },
      {
        pid: 'sa-6',
        sub_area_id: 6,
        area_id: 2,
        sub_area_name: '環境',
        sub_info:
          '①身近な環境に親しみ、触れ合う中で様々なものに興味や関心を持つ。\n' +
          '②様々なものに関わる中で、発見を楽しんだり、考えたりしようとする。\n' +
          '③見る、聞く、触るなどの経験を通して、感覚の働きを豊かにする。',
      },
      {
        pid: 'sa-7',
        sub_area_id: 7,
        area_id: 2,
        sub_area_name: '表現',
        sub_info:
          '①身体の諸感覚の経験を豊かにし、様々な感覚を味わう。\n' +
          '②感じたことや考えたことなどを自分なりに表現しようとする。\n' +
          '③生活や遊びの様々な体験を通して、イメージや感性が豊かになる。',
      },
    ];
    setRows(sample);
  }, []);

  const filtered = useMemo(() => {
    if (!searchText.trim()) return rows;
    const q = searchText.toLowerCase();
    return rows.filter(r =>
      [r.sub_area_id, r.area_id, r.pure_id ?? '', r.sub_area_name, r.sub_info]
        .map(String)
        .some(v => v.toLowerCase().includes(q))
    );
  }, [rows, searchText]);

  const handleView = (pid: string) => navigate(`/master/sub-areas/view/${pid}`);
  const handleEdit = (pid: string) => navigate(`/master/sub-areas/edit/${pid}`);
  const handleDelete = (pid: string) => {
    if (window.confirm('削除しますか？')) setRows(prev => prev.filter(r => r.pid !== pid));
  };

  const toggle = (pid: string) => setExpanded(prev => ({ ...prev, [pid]: !prev[pid] }));

  return (
    <ThemeProvider theme={theme}>
      <ContentMain>
        <Box sx={{ p: 3, minHeight: '100vh' }}>
          {/* Header */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h4" fontWeight="bold" sx={{ mb: 1, color: 'primary.main' }}>
              SUB_AREAS
            </Typography>
            
          </Box>

          {/* Filter */}
          <Box sx={{ mb: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <FilterList sx={{ mr: 1, color: 'primary.main' }} />
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                フィルター
              </Typography>
            </Box>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  size="small"
                  placeholder="検索（全カラム）"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  InputProps={{ startAdornment: (
                    <InputAdornment position="start"><Search /></InputAdornment>
                  )}}
                />
              </Grid>
            </Grid>
          </Box>

          {/* Table */}
          <TableContainer component={Paper} sx={{ borderRadius: 2, overflowX: 'auto' }}>
            <Table sx={{ '& td': { verticalAlign: 'top' } }}>
              <TableHead>
                <TableRow sx={{ backgroundColor: '#f3e5f5' }}>
                  <TableCell sx={{ fontWeight: 'bold', whiteSpace: 'nowrap' }}>sub_area_id</TableCell>
                  <TableCell sx={{ fontWeight: 'bold', whiteSpace: 'nowrap' }}>area_id</TableCell>
                  <TableCell sx={{ fontWeight: 'bold', whiteSpace: 'nowrap' }}>pure_id</TableCell>
                  <TableCell sx={{ fontWeight: 'bold', whiteSpace: 'nowrap' }}>sub_area_name</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>sub_info</TableCell>
                  <TableCell sx={{ fontWeight: 'bold', whiteSpace: 'nowrap' }}>管理</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {filtered.map(r => {
                  const isOpen = !!expanded[r.pid];
                  return (
                    <TableRow key={r.pid}>
                      <TableCell>{r.sub_area_id}</TableCell>
                      <TableCell>{r.area_id}</TableCell>
                      <TableCell>{r.pure_id ?? '—'}</TableCell>
                      <TableCell>
                        <Typography variant="body2" fontWeight={600}>{r.sub_area_name}</Typography>
                      </TableCell>

                      {/* 長文セル：3行クランプ + 展開 */}
                      <TableCell sx={{ minWidth: 420 }}>
                        <Tooltip title="クリックで全文表示/折りたたみ" placement="top" arrow>
                          <Box onClick={() => toggle(r.pid)} sx={{ cursor: 'pointer' }}>
                            {!isOpen ? (
                              <Box sx={clampStyles}>{r.sub_info}</Box>
                            ) : (
                              <Collapse in={isOpen} timeout="auto" unmountOnExit={false}>
                                <Typography sx={{ whiteSpace: 'pre-line', lineHeight: 1.6 }}>
                                  {r.sub_info}
                                </Typography>
                              </Collapse>
                            )}
                          </Box>
                        </Tooltip>
                        <Box sx={{ mt: 0.5 }}>
                          <Button
                            size="small"
                            onClick={() => toggle(r.pid)}
                            startIcon={isOpen ? <ExpandLess /> : <ExpandMore />}
                          >
                            {isOpen ? '閉じる' : 'もっと見る'}
                          </Button>
                        </Box>
                      </TableCell>

                      {/* 管理ボタン 横並び */}
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
                  );
                })}
              </TableBody>

            </Table>
          </TableContainer>
        </Box>
      </ContentMain>
    </ThemeProvider>
  );
};

export default SubArea;
