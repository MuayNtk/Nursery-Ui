import React, { useEffect, useMemo, useState } from "react";
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
} from "@mui/material";
import {
  Edit,
  Delete,
  Search,
  Visibility,
  FilterList,
} from "@mui/icons-material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ContentMain from "../content/Content";
import { useNavigate } from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: { main: "#1976d2", light: "#42a5f5", dark: "#1565c0" },
    secondary: { main: "#9c27b0", light: "#ba68c8", dark: "#7b1fa2" },
  },
  components: {
    MuiPaper: { styleOverrides: { root: { borderRadius: "16px" } } },
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: "20px", textTransform: "none", fontWeight: 600 },
      },
    },
  },
});

type InitiativeRow = {
  pid: string;
  healthSupport: string; // 健康支援
  environmentSafety: string; // 環境・衛生・安全管理
  foodEducation: string; // 食育の推進
  neuvolaSupport: string; // ネウボラ地域包括支援
  guardianSupport: string; // 保護者支援
  supportCare: string; // サポート保育
};

const SpecificInitiatives: React.FC = () => {
  const navigate = useNavigate();
  const [rows, setRows] = useState<InitiativeRow[]>([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const sample: InitiativeRow[] = [
      {
        pid: "si-001",
        healthSupport: "定期的な健康チェックと心身の成長支援を行う。",
        environmentSafety: "清潔で安全な環境整備と危険予測に基づいた管理。",
        foodEducation: "季節や文化を感じる食体験を通した食育の実施。",
        neuvolaSupport: "地域機関連携による妊娠・育児期の包括支援。",
        guardianSupport: "相談・面談・育児情報共有による保護者支援。",
        supportCare: "個別状況に応じた柔軟な保育対応を行う。",
      },
    ];
    setRows(sample);
  }, []);

  const filtered = useMemo(() => {
    if (!searchText.trim()) return rows;
    const q = searchText.toLowerCase();
    return rows.filter((r) =>
      Object.values(r).some((v) => String(v).toLowerCase().includes(q))
    );
  }, [rows, searchText]);

  const handleView = (pid: string) =>
    navigate(`/report/specific-initiatives/view/${pid}`);
  const handleEdit = (pid: string) =>
    navigate(`/report/specific-initiatives/edit/${pid}`);
  const handleDelete = (pid: string) => {
    if (window.confirm("このレコードを削除しますか？")) {
      setRows((prev) => prev.filter((r) => r.pid !== pid));
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <ContentMain>
        <Box sx={{ p: 3, minHeight: "100vh" }}>
          {/* Header */}
          <Box sx={{ mb: 4 }}>
            <Typography
              variant="h4"
              fontWeight="bold"
              sx={{ mb: 1, color: "#1976d2" }}
            >
              Specific Initiatives
            </Typography>
          </Box>

          {/* Filter */}
          <Box sx={{ mb: 3 }}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <FilterList sx={{ mr: 1, color: "#1976d2" }} />
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                フィルター
              </Typography>
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
          <TableContainer component={Paper} sx={{ borderRadius: "20px" }}>
            <Table>
              <TableHead>
                <TableRow sx={{ backgroundColor: "#f3e5f5" }}>
                  <TableCell sx={{ fontWeight: "bold" }}>健康支援</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>
                    環境・衛生・安全管理
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>食育の推進</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>
                    ネウボラ地域包括支援
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>保護者支援</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>
                    サポート保育
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>管理</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {filtered.map((r) => (
                  <TableRow key={r.pid}>
                    <TableCell>{r.healthSupport}</TableCell>
                    <TableCell>{r.environmentSafety}</TableCell>
                    <TableCell>{r.foodEducation}</TableCell>
                    <TableCell>{r.neuvolaSupport}</TableCell>
                    <TableCell>{r.guardianSupport}</TableCell>
                    <TableCell>{r.supportCare}</TableCell>

                    <TableCell
                      sx={{
                        whiteSpace: "nowrap", // กันตัดบรรทัด
                        width: 140, // (เลือก) กันเบียดจนตัดบรรทัด
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 1, // ระยะห่างระหว่างไอคอน
                          flexWrap: "nowrap", // ห้ามขึ้นบรรทัดใหม่
                          justifyContent: "flex-start", // หรือ 'center' / 'flex-end'
                        }}
                      >
                        <IconButton
                          size="small"
                          onClick={() => handleView(r.pid)}
                          color="info"
                        >
                          <Visibility fontSize="small" />
                        </IconButton>
                        <IconButton
                          size="small"
                          onClick={() => handleEdit(r.pid)}
                          color="primary"
                        >
                          <Edit fontSize="small" />
                        </IconButton>
                        <IconButton
                          size="small"
                          onClick={() => handleDelete(r.pid)}
                          color="error"
                        >
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

export default SpecificInitiatives;
