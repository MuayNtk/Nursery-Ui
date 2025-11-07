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

type PillarRow = {
  pid: string;
  health: string;          // 心と体の健康
  relationsPeople: string; // 身近な人との関わり
  relationsEnv: string;    // 身近な環境との関わり
  rights: string;          // 人権の尊重
  expression: string;      // 表出と表現の尊重
  guardians: string;       // 保護者支援と連携
  community: string;       // 地域との連携
  elementary: string;      // 小学校との接続
};

const EducationandChildcare: React.FC = () => {
  const navigate = useNavigate();

  const [rows, setRows] = useState<PillarRow[]>([]);
  const [searchText, setSearchText] = useState('');

  // mock data
  useEffect(() => {
    const sample: PillarRow[] = [
      {
        pid: 'ec-001',
        health: '規則正しい生活リズムと遊びで心身の健やかな発達を促す。',
        relationsPeople: '家族・友だち・保育者との信頼関係を育む。',
        relationsEnv: '自然や身近な素材に触れ、環境へ関心をもつ。',
        rights: '一人ひとりの違いを尊重し、安全で公正な場を保障する。',
        expression: '言葉・音・造形・身体表現で気持ちを安心して表す。',
        guardians: '成長記録の共有と相談体制で保護者を支援する。',
        community: '地域行事や見学を通じて多様な出会いをつくる。',
        elementary: '生活習慣・学びに向かう姿勢を小学校へ滑らかに接続。',
      },
      {
        pid: 'ec-002',
        health: 'バランスの良い食事と休息、運動の機会を確保する。',
        relationsPeople: '思いやりと協力を学ぶ活動を取り入れる。',
        relationsEnv: '園内外の環境を安全に配慮しつつ探究を支える。',
        rights: '自己決定の機会を大切にし、声に耳を傾ける。',
        expression: '自由な制作やごっこ遊びで創造性を伸ばす。',
        guardians: '連絡帳・面談・行事で家庭と園の連携を強化。',
        community: '図書館・公園・高齢者施設などと交流する。',
        elementary: '就学前カンファレンスや引継ぎ資料を整備。',
      },
      {
        pid: 'ec-003',
        health: '衛生習慣と情緒の安定を重視した保育を行う。',
        relationsPeople: '友だちとのトラブル解決を支援し社会性を育む。',
        relationsEnv: '季節の移ろいを感じる活動を年間で計画。',
        rights: '偏見のない環境づくりとプライバシー配慮。',
        expression: '音楽・運動会など発表の場で自己効力感を培う。',
        guardians: '個別支援計画を作成し必要に応じて専門機関と連携。',
        community: '防災訓練や交通安全教室を地域と共同開催。',
        elementary: '就学先の担任と訪問・観察を相互に実施。',
      },
    ];
    setRows(sample);
  }, []);

  const filtered = useMemo(() => {
    if (!searchText.trim()) return rows;
    const q = searchText.toLowerCase();
    return rows.filter(r =>
      Object.values(r).some(v => String(v).toLowerCase().includes(q))
    );
  }, [rows, searchText]);

  const handleView = (pid: string) => navigate(`/report/education-childcare/view/${pid}`);
  const handleEdit = (pid: string) => navigate(`/report/education-childcare/edit/${pid}`);
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
              Priority pillars of education and childcare
            </Typography>
           
          </Box>

          {/* Filters */}
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
                  placeholder="検索（キーワードで全カラムを検索）"
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
                  <TableCell sx={{ fontWeight: 'bold' }}>心と体の健康</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>身近な人との関わり</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>身近な環境との関わり</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>人権の尊重</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>表出と表現の尊重</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>保護者支援と連携</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>地域との連携</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>小学校との接続</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>管理</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filtered.map((r) => (
                  <TableRow key={r.pid}>
                    <TableCell><Typography variant="body2">{r.health}</Typography></TableCell>
                    <TableCell><Typography variant="body2">{r.relationsPeople}</Typography></TableCell>
                    <TableCell><Typography variant="body2">{r.relationsEnv}</Typography></TableCell>
                    <TableCell><Typography variant="body2">{r.rights}</Typography></TableCell>
                    <TableCell><Typography variant="body2">{r.expression}</Typography></TableCell>
                    <TableCell><Typography variant="body2">{r.guardians}</Typography></TableCell>
                    <TableCell><Typography variant="body2">{r.community}</Typography></TableCell>
                    <TableCell><Typography variant="body2">{r.elementary}</Typography></TableCell>
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

export default EducationandChildcare;
