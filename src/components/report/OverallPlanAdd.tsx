import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Tooltip,
  Button,
  InputAdornment,
  FormControlLabel,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Select,
  FormControl,
  MenuItem,
  OutlinedInput,
  Chip,
  ListItemText,
  IconButton,
} from "@mui/material";
import {
  Save,
  Description,
  ExpandMore,
  Info,
  ArrowBack,
  Favorite,
  EmojiEmotions,
  School,
  Close,
} from "@mui/icons-material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ContentMain from "../content/Content";
import { SelectChangeEvent } from "@mui/material/Select";
import { useTranslation } from "react-i18next";
import {
  M_policy,
  M_development_areas,
  Yougo,
  M_competencies,
  M_ten_figures,
  useOverallPlan,
  ObjectiveAgeForm,
} from "../../contexts/OverallplanContext";
import { useParams } from "react-router-dom";
// ============================================================================
// THEME CONFIGURATION
// ============================================================================
const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
      light: "#42a5f5",
      dark: "#1565c0",
    },
    secondary: {
      main: "#9c27b0",
      light: "#ba68c8",
      dark: "#7b1fa2",
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: "16px",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "20px",
          textTransform: "none",
          fontWeight: 600,
        },
      },
    },
  },
});

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================
interface FormData {
  [key: string]: any;
  year: string;
  philosophy_detail: string;
  methods: M_policy[];
  child_vision: string;
  educator_vision: string;
  developmentAreas: M_development_areas[];
  developmentYougo: Yougo[];
  competencies: M_competencies[];
  goalSupport: string;
  providedSupport: string;
  // lifeGoals: { checked: boolean; text: string }[];
  // socialGoals: { checked: boolean; text: string }[];
  // healthGoals: { checked: boolean; text: string }[];
  // relationshipGoals: { checked: boolean; text: string }[];
  // languageGoals: { checked: boolean; text: string }[];
  // developmentGoals: { checked: boolean; text: string }[];
  // expressionGoals: { checked: boolean; text: string }[];
  // ageTable: Record<string, string>;
  // socialTable: Record<string, string>;
  // healthTable: Record<string, string>;
  // relationshipTable: Record<string, string>;
  // languageTable: Record<string, string>;
  // developmentTable: Record<string, string>;
  // expressionTable: Record<string, string>;
  abilitiesGoals: string[];
  abilitiesGoals2: string[];
  physical_mental_health: string;
  relationships_people: string;
  relationships_environment: string;
  respect_human_rights: string;
  respect_expression: string;
  guardian_support_collaboration: string;
  community_collaboration: string;
  school_connection: string;
  // relationshipEnvironment?: string;
  // humanRights?: string;
  // expressionRespect?: string;
  // parentSupport?: string;
  health_support: string;
  environment_sanitation_safety: string;
  food_education: string;
  neuvola_support: string;
  guardian_support: string;
  support_childcare: string;
}

interface RowData {
  id: number;
  month: string;
  gardenEvent: string;
  seasonalEvent: string;
  foodEducation: string;
  health: string;
  neuvola: string;
  staffTraining: string;
}

// ============================================================================
// CONSTANTS
// ============================================================================
// const ABILITY_MASTER = [
//   "知識・技能の基礎",
//   "思考力・判断力・表現力等の基礎",
//   "学びに向かう力、人間性等",
//   "健康な心と体",
//   "自立心",
//   "協同性",
//   "道徳性・規範意識の芽生え",
//   "社会生活との関わり",
//   "言葉による伝え合い",
//   "思考力の芽生え",
//   "自然との関わり生命尊重",
//   "数量・図形・文字 等への関心・感覚",
//   "豊かな感性と表現",
// ];

const AGE_GROUPS = ["0歳児", "1歳児", "2歳児", "3歳児", "4歳児", "5歳児"];

const INITIAL_ROWS: RowData[] = [
  {
    id: 1,
    month: "4月",
    gardenEvent: "",
    seasonalEvent: "",
    foodEducation: "",
    health: "",
    neuvola: "",
    staffTraining: "",
  },
  {
    id: 2,
    month: "5月",
    gardenEvent: "",
    seasonalEvent: "",
    foodEducation: "",
    health: "",
    neuvola: "",
    staffTraining: "",
  },
  {
    id: 3,
    month: "6月",
    gardenEvent: "",
    seasonalEvent: "",
    foodEducation: "",
    health: "",
    neuvola: "",
    staffTraining: "",
  },
  {
    id: 4,
    month: "7月",
    gardenEvent: "",
    seasonalEvent: "",
    foodEducation: "",
    health: "",
    neuvola: "",
    staffTraining: "",
  },
  {
    id: 5,
    month: "8月",
    gardenEvent: "",
    seasonalEvent: "",
    foodEducation: "",
    health: "",
    neuvola: "",
    staffTraining: "",
  },
  {
    id: 6,
    month: "9月",
    gardenEvent: "",
    seasonalEvent: "",
    foodEducation: "",
    health: "",
    neuvola: "",
    staffTraining: "",
  },
  {
    id: 7,
    month: "10月",
    gardenEvent: "",
    seasonalEvent: "",
    foodEducation: "",
    health: "",
    neuvola: "",
    staffTraining: "",
  },
  {
    id: 8,
    month: "11月",
    gardenEvent: "",
    seasonalEvent: "",
    foodEducation: "",
    health: "",
    neuvola: "",
    staffTraining: "",
  },
  {
    id: 9,
    month: "12月",
    gardenEvent: "",
    seasonalEvent: "",
    foodEducation: "",
    health: "",
    neuvola: "",
    staffTraining: "",
  },
  {
    id: 10,
    month: "1月",
    gardenEvent: "",
    seasonalEvent: "",
    foodEducation: "",
    health: "",
    neuvola: "",
    staffTraining: "",
  },
  {
    id: 11,
    month: "2月",
    gardenEvent: "",
    seasonalEvent: "",
    foodEducation: "",
    health: "",
    neuvola: "",
    staffTraining: "",
  },
  {
    id: 12,
    month: "3月",
    gardenEvent: "",
    seasonalEvent: "",
    foodEducation: "",
    health: "",
    neuvola: "",
    staffTraining: "",
  },
  {
    id: 13,
    month: "その他",
    gardenEvent: "",
    seasonalEvent: "",
    foodEducation: "",
    health: "",
    neuvola: "",
    staffTraining: "",
  },
];

// ============================================================================
// INITIAL FORM DATA
// ============================================================================
const INITIAL_FORM_DATA: FormData = {
  year: "",
  philosophy_detail: "",
  child_vision: "",
  educator_vision: "",
  methods: [],
  competencies: [],
  developmentAreas: [],
  developmentYougo: [],
  goalSupport: "",
  providedSupport: "",
  // lifeGoals: [
  //   {
  //     checked: false,
  //     text: "เด็กทุกคนจะได้รับการใช้ชีวิตอย่างสะดวกสบาย / 一人一人の子どもが、快適に生活できるようにする",
  //   },
  //   {
  //     checked: false,
  //     text: "เด็กทุกคนจะได้รับการดูแลอย่างมีสุขภาพและความปลอดภัย / 一人一人の子どもが、健康で安全に過ごせるようにする",
  //   },
  //   {
  //     checked: false,
  //     text: "เด็กทุกคนจะได้รับการพัฒนาทักษะชีวิตพื้นฐานและความเป็นอิสระ / 一人一人の子どもの生理的欲求が、十分に満たされるようにする",
  //   },
  //   {
  //     checked: false,
  //     text: "เด็กทุกคนจะได้รับการดูแลสุขภาพที่เหมาะสมและป้องกันโรคภัย / 一人一人の子どもの健康増進が、積極的に図られるようにする",
  //   },
  // ],
  // socialGoals: [
  //   {
  //     checked: false,
  //     text: "เด็กทุกคนจะได้รับความรักและความอบอุ่น / 一人一人の子どもが、安心感を持って過ごせるようにする",
  //   },
  //   {
  //     checked: false,
  //     text: "เด็กทุกคนจะพัฒนาความมั่นใจและความภาคภูมิใจในตนเอง / 一人一人の子どもが、自分の気持ちを安心して表すことができるようにする",
  //   },
  //   {
  //     checked: false,
  //     text: "เด็กทุกคนจะได้รับการส่งเสริมให้มีส่วนร่วมและสนุกกับกิจกรรม / 一人一人の子どもが、周囲から主体として受け止められ、主体として育ち、自分を肯定する気持ちが育まれていくようにする",
  //   },
  //   {
  //     checked: false,
  //     text: "เด็กทุกคนจะพัฒนาจิตใจที่แข็งแรงและมั่นคง / 一人一人の子どもの心の動きが受容されるようにする",
  //   },
  // ],
  // healthGoals: [
  //   {
  //     checked: false,
  //     text: "เด็กจะมีชีวิตที่สดใสและร่าเริง พร้อมเคลื่อนไหวร่างกายด้วยความสนุกสนาน / 明るく伸び伸びと生活し、自分から体を動かすことを楽しむ",
  //   },
  //   {
  //     checked: false,
  //     text: "เด็กจะใช้ร่างกายเต็มที่และพยายามทำท่าทางต่างๆ / 自分の体を十分に動かし、様々な動きをしようとする",
  //   },
  //   {
  //     checked: false,
  //     text: "เด็กจะตระหนักถึงนิสัยที่จำเป็นสำหรับชีวิตที่มีสุขภาพและปลอดภัย / 健康、安全な生活に必要な習慣に気付き、自分でしてみようとする気持ちが育つ",
  //   },
  // ],
  // relationshipGoals: [
  //   {
  //     checked: false,
  //     text: "เด็กจะสนุกกับชีวิตในศูนย์และรู้สึกอบอุ่นเมื่ออยู่กับคนใกล้ชิด / 保育園での生活を楽しみ、身近な人と関わる心地よさを感じる",
  //   },
  //   {
  //     checked: false,
  //     text: "เด็กจะมีความสนใจในเด็กคนอื่นและพยายามสร้างความสัมพันธ์ / 周囲の子ども等への興味や関心が高まり、関わりをもとうとする",
  //   },
  //   {
  //     checked: false,
  //     text: "เด็กจะคุ้นเคยกับวิธีการใช้ชีวิตในศูนย์และตระหนักถึงความสำคัญของกฎเกณฑ์ / 保育園の生活の仕方に慣れ、きまりの大切さに気付く",
  //   },
  // ],
  // languageGoals: [
  //   {
  //     checked: false,
  //     text: "รู้สึกถึงความสนุกสนานในการเล่นกับคำและการแสดงออกด้วยภาษา / 言葉遊びや言葉で表現する楽しさを感じる。",
  //   },
  //   {
  //     checked: false,
  //     text: "ฟังคำพูดและการสนทนาของผู้อื่น และพยายามสื่อสารสิ่งที่ตนเองคิด / 人の言葉や話などを聞き、自分でも思ったことを伝えようとする。",
  //   },
  //   {
  //     checked: false,
  //     text: "คุ้นเคยกับหนังสือภาพและนิทานต่างๆ พร้อมทั้งสื่อสารความรู้สึกกับคนใกล้ชิดผ่านการพูดคุยโต้ตอบกัน / 絵本や物語等に親しむとともに、言葉のやり取りを通じて身近な人と気持ちを通わせる。",
  //   },
  // ],
  // developmentGoals: [
  //   {
  //     checked: false,
  //     text: "เด็กจะมีความผูกพันและสัมผัสกับสิ่งแวดล้อมใกล้ตัว และสนใจในสิ่งต่างๆ / 身近な環境に親しみ、触れ合う中で様々なものに興味や関心を持つ",
  //   },
  //   {
  //     checked: false,
  //     text: "เด็กจะสนุกกับการค้นพบและพยายามคิดผ่านการมีส่วนร่วมกับสิ่งต่างๆ / 様々なものに関わる中で、発見を楽しんだり、考えたりしようとする",
  //   },
  //   {
  //     checked: false,
  //     text: "เด็กจะพัฒนาการรับรู้ที่หลากหลายผ่านประสบการณ์การมอง ฟัง และสัมผัส / 見る、聞く、触るなどの経験を通して、感覚の働きを豊かにする",
  //   },
  // ],
  // expressionGoals: [
  //   {
  //     checked: false,
  //     text: "เด็กจะได้รับประสบการณ์ที่หลากหลายทางประสาทสัมผัสและได้ลิ้มรสความรู้สึกต่างๆ / 身体の諸感覚の経験を豊かにし、様々な感覚を味わう",
  //   },
  //   {
  //     checked: false,
  //     text: "เด็กจะแสดงออกถึงสิ่งที่รู้สึกและคิดด้วยวิธีของตนเอง / 感じたことや考えたことなどを自分なりに表現しようとする",
  //   },
  //   {
  //     checked: false,
  //     text: "เด็กจะพัฒนาจินตนาการและความไวต่อความงามผ่านประสบการณ์ในชีวิตและการเล่น / 生活や遊びの様々な体験を通して、イメージや感性が豊かになる",
  //   },
  // ],
  // ageTable: {
  //   "0歳児": "",
  //   "1歳児": "",
  //   "2歳児": "",
  //   "3歳児": "",
  //   "4-3歳児": "",
  //   "4歳児": "",
  //   "5歳児": "",
  // },
  // socialTable: {
  //   "0歳児": "",
  //   "1歳児": "",
  //   "2歳児": "",
  //   "3歳児": "",
  //   "4-3歳児": "",
  //   "4歳児": "",
  //   "5歳児": "",
  // },
  // healthTable: {
  //   "0歳児": "",
  //   "1歳児": "",
  //   "2歳児": "",
  //   "3歳児": "",
  //   "4-3歳児": "",
  //   "4歳児": "",
  //   "5歳児": "",
  // },
  // relationshipTable: {
  //   "0歳児": "",
  //   "1歳児": "",
  //   "2歳児": "",
  //   "3歳児": "",
  //   "4-3歳児": "",
  //   "4歳児": "",
  //   "5歳児": "",
  // },
  // languageTable: {
  //   "0歳児": "",
  //   "1歳児": "",
  //   "2歳児": "",
  //   "3歳児": "",
  //   "4-3歳児": "",
  //   "4歳児": "",
  //   "5歳児": "",
  // },
  // developmentTable: {
  //   "0歳児": "",
  //   "1歳児": "",
  //   "2歳児": "",
  //   "3歳児": "",
  //   "4-3歳児": "",
  //   "4歳児": "",
  //   "5歳児": "",
  // },
  // expressionTable: {
  //   "0歳児": "",
  //   "1歳児": "",
  //   "2歳児": "",
  //   "3歳児": "",
  //   "4-3歳児": "",
  //   "4歳児": "",
  //   "5歳児": "",
  // },
  abilitiesGoals: [],
  abilitiesGoals2: [],
  physical_mental_health: "",
  relationships_people: "",
  relationships_environment: "",
  respect_human_rights: "",
  respect_expression: "",
  guardian_support_collaboration: "",
  community_collaboration: "",
  school_connection: "",
  health_support: "",
  environment_sanitation_safety: "",
  food_education: "",
  neuvola_support: "",
  guardian_support: "",
  support_childcare: "",
};

// ============================================================================
// REUSABLE COMPONENTS
// ============================================================================

/**
 * Component for rendering a section with goals checklist
 */
interface GoalSectionProps {
  title: string;
  icon: React.ReactNode;
  color: string;
  goals: { checked: boolean; text: string }[];
  onGoalCheck: (index: number) => void;
}

const GoalSection: React.FC<GoalSectionProps> = ({
  title,
  icon,
  color,
  goals,
  onGoalCheck,
}) => (
  <Box>
    <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
      {icon}
      <Typography variant="h6" fontWeight="600">
        {title}
      </Typography>
    </Box>
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      {goals.map((goal, index) => (
        <Paper
          key={index}
          elevation={1}
          sx={{
            p: 2,
            border: "2px solid",
            borderColor: goal.checked ? color : "grey.300",
            bgcolor: goal.checked ? `${color}20` : "white",
            transition: "all 0.2s",
            textAlign: "left",
            "&:hover": {
              borderColor: color,
              bgcolor: `${color}20`,
            },
          }}
        >
          <FormControlLabel
            control={
              <Checkbox
                checked={goal.checked}
                onChange={() => onGoalCheck(index)}
                sx={{ color, "&.Mui-checked": { color } }}
              />
            }
            label={
              <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
                <Box
                  sx={{
                    minWidth: 28,
                    height: 28,
                    borderRadius: "50%",
                    bgcolor: color,
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "bold",
                    fontSize: "0.875rem",
                  }}
                >
                  {index + 1}
                </Box>
                <Typography variant="body2" sx={{ mt: 0.5 }}>
                  {goal.text}
                </Typography>
              </Box>
            }
          />
        </Paper>
      ))}
    </Box>
  </Box>
);

/**
 * Component for rendering age-based table
 */
interface AgeTableProps {
  ageGroups: string[];
  tableData: Record<string, string>;
  color: string;
  onTableChange: (age: string, value: string) => void;
}

const AgeTable: React.FC<AgeTableProps> = ({
  ageGroups,
  tableData,
  color,
  onTableChange,
}) => (
  <TableContainer component={Paper} sx={{ overflowX: "auto", mt: 3 }}>
    <Table>
      <TableHead>
        <TableRow sx={{ bgcolor: `${color}` }}>
          {ageGroups.map((age) => (
            <TableCell
              key={age}
              align="center"
              sx={{
                fontWeight: "bold",
                minWidth: 150,
                border: `2px solid ${color}`,
              }}
            >
              {age}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          {ageGroups.map((age) => (
            <TableCell
              key={age}
              sx={{ p: 1, border: "1px solid #e0e0e0", verticalAlign: "top" }}
            >
              <textarea
                value={tableData[age]}
                onChange={(e) => onTableChange(age, e.target.value)}
                placeholder="記入"
                style={{
                  width: "100%", // เต็มความกว้าง
                  height: "150px", // fix height
                  resize: "none", // ไม่ให้ user ขยาย
                  overflowY: "auto", // scroll ข้อความยาว
                  padding: "8px",
                  fontSize: "0.875rem",
                  fontFamily: "Roboto, sans-serif",
                  borderRadius: "4px",
                  border: "1px solid #c4c4c4",
                }}
              />
            </TableCell>
          ))}
        </TableRow>
      </TableBody>
    </Table>
  </TableContainer>
);

/**
 * Component for multi-select abilities dropdown
 */
interface AbilitiesSelectProps {
  fieldName: "abilitiesGoals" | "abilitiesGoals2";
  value: string[];
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onChange: (event: SelectChangeEvent<string[]>) => void;
  onDelete: (value: string) => void;
  onClearAll: () => void;
  onSelectAll: () => void;
  abilityMaster: string[];
}

const AbilitiesSelect: React.FC<AbilitiesSelectProps> = ({
  fieldName,
  value,
  isOpen,
  onOpen,
  onClose,
  onChange,
  onDelete,
  onClearAll,
  onSelectAll,
  abilityMaster,
}) => (
  <FormControl fullWidth sx={{ mt: 2 }}>
    <Select
      multiple
      name={fieldName}
      value={value}
      onChange={onChange}
      open={isOpen}
      onOpen={onOpen}
      onClose={onClose}
      input={<OutlinedInput placeholder="เลือกทักษะที่ต้องการพัฒนา" />}
      renderValue={(selected) => (
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
          {selected.map((val) => (
            <Chip
              key={val}
              label={val}
              onDelete={() => onDelete(val)}
              onMouseDown={(event) => {
                event.stopPropagation();
              }}
            />
          ))}
        </Box>
      )}
    >
      <Box
        sx={{
          position: "sticky",
          top: 0,
          bgcolor: "background.paper",
          zIndex: 1,
          p: 1,
          pb: 1.5,
          borderBottom: "1px solid #e0e0e0",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 1,
          }}
        >
          <Box sx={{ display: "flex", gap: 1, flex: 1 }}>
            <Button
              fullWidth
              size="small"
              variant="outlined"
              onClick={(e) => {
                e.stopPropagation();
                onSelectAll();
              }}
              disabled={value.length === abilityMaster.length}
            >
              เลือกทั้งหมด
            </Button>
            <Button
              fullWidth
              size="small"
              variant="outlined"
              color="error"
              onClick={(e) => {
                e.stopPropagation();
                onClearAll();
              }}
              disabled={value.length === 0}
            >
              ล้างทั้งหมด
            </Button>
          </Box>
          <IconButton
            size="small"
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            sx={{
              bgcolor: "grey.200",
              "&:hover": { bgcolor: "grey.300" },
            }}
          >
            <Close fontSize="small" />
          </IconButton>
        </Box>
      </Box>
      {abilityMaster.map((name) => (
        <MenuItem key={name} value={name}>
          <Checkbox checked={value.indexOf(name) > -1} />
          <ListItemText primary={name} />
        </MenuItem>
      ))}
    </Select>
  </FormControl>
);

// ============================================================================
// MAIN COMPONENT
// ============================================================================
const OverallPlanAdd: React.FC = () => {
  // State Management
  const { t } = useTranslation();
  const {
    fetchM_philosophy,
    fetchM_policy,
    fetchM_development_areas,
    fetchM_development_Yougo,
    fetchM_competencies,
    fetchM_ten_figures,
    createOverallPlan,
    editOverallPlanMain,
    fetchOverallPlanById,
  } = useOverallPlan();
  const { id } = useParams<{ id: string }>();
  const isEdit = !!id;
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM_DATA);
  const [rows, setRows] = useState<RowData[]>(INITIAL_ROWS);
  const [expandedSections, setExpandedSections] = useState({
    basic: true,
    methods: true,
    goals: true,
    lifeGoals: true,
    socialGoals: true,
    healthGoals: true,
    relationshipGoals: true,
    languageGoals: true,
    developmentGoals: true,
    expressionGoals: true,
  });
  const [selectOpen, setSelectOpen] = useState({
    abilitiesGoals: false,
    abilitiesGoals2: false,
  });

  // ========================================================================
  // EVENT HANDLERS
  // ========================================================================

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleMethodChange = (id: number, value: string) => {
    setFormData((prev) => ({
      ...prev,
      methods: prev.methods.map((m) =>
        m.id === id ? { ...m, policy_detail: value } : m
      ),
    }));
  };

  const handleGoalCheck = (
    key: string,
    index: number,
    text: string,
    NO: number
  ) => {
    setFormData((prev) => {
      const currentGoals: { checked: boolean; text: string; NO: number }[] =
        prev[key] ?? [];

      // ถ้ายังไม่มี goal ตัวนี้ ให้สร้างใหม่
      if (!currentGoals[index]) {
        currentGoals[index] = { text, checked: true, NO };
      } else {
        currentGoals[index].checked = !currentGoals[index].checked;
        // อัพเดต NO ถ้าต้องการ (ปกติอาจไม่เปลี่ยน)
        currentGoals[index].NO = NO;
      }

      return { ...prev, [key]: currentGoals };
    });
  };

  const handleTableChange = (
    key: string, // dynamic key เช่น ageTable_1
    age: string,
    value: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      [key]: {
        ...prev[key], // ค่าก่อนหน้าของ table
        [age]: value,
      },
    }));
  };

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleMultiSelectChange = (event: SelectChangeEvent<string[]>) => {
    const {
      target: { value, name },
    } = event;
    setFormData((prev) => ({
      ...prev,
      [name]: typeof value === "string" ? value.split(",") : value,
    }));
  };

  const handleDeleteChip = (
    fieldName: "abilitiesGoals" | "abilitiesGoals2",
    valueToDelete: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      [fieldName]: prev[fieldName].filter((item) => item !== valueToDelete),
    }));
  };

  const handleClearAll = (fieldName: "abilitiesGoals" | "abilitiesGoals2") => {
    setFormData((prev) => ({
      ...prev,
      [fieldName]: [],
    }));
  };

  const handleSelectAll = (fieldName: "abilitiesGoals" | "abilitiesGoals2") => {
    setFormData((prev) => ({
      ...prev,
      [fieldName]: [...(abilitiesData[fieldName] || [])], // เอาข้อมูลจาก abilitiesData
    }));
  };

  const updateRow = (id: number, field: string, value: string) => {
    setRows(
      rows.map((row) => (row.id === id ? { ...row, [field]: value } : row))
    );
  };

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    try {
      const AGE_KEYS = ["0歳児", "1歳児", "2歳児", "3歳児", "4歳児", "5歳児"];

      const createObjectivesPayload = (
        formData: Record<string, any>
      ): ObjectiveAgeForm[] => {
        return Object.entries(formData)
          .map(([key, goalsOrTable]) => {
            // สนใจเฉพาะ key ที่เป็นตัวเลข (title_id)
            if (isNaN(Number(key))) return null;

            // รวมข้อความที่ติ๊ก checked = true
            const checkedTexts = (goalsOrTable as any[])
              .filter((goal: any) => goal.checked)
              .map((goal: any) => goal.text.trim())
              .join(" ");

            // ดึงตารางอายุ
            const ageTableKey = `ageTable_${key}`;
            const ageData = formData[ageTableKey] || {};

            const ageFields: Record<string, string> = {};
            AGE_KEYS.forEach((ageKey, idx) => {
              ageFields[`age${idx}`] = ageData[ageKey] || "";
            });

            return {
              title_id: Number(key),
              yougo_snapshot: checkedTexts,
              ...ageFields,
            };
          })
          .filter((item): item is ObjectiveAgeForm => Boolean(item));
      };
      const figuresPayload = [
        ...(abilitiesData.abilitiesGoals || [])
          .filter((a) => formData.abilitiesGoals?.includes(a.title_snapshot))
          .map((a) => ({
            ref_id: a.ref_id,
            type: "育みたい 資質・能力",
            title_snapshot: a.title_snapshot,
          })),
        ...(abilitiesData.abilitiesGoals2 || [])
          .filter((a) => formData.abilitiesGoals2?.includes(a.title_snapshot))
          .map((a) => ({
            ref_id: a.ref_id,
            type: "10の姿",
            title_snapshot: a.title_snapshot,
          })),
      ];

      // 🔹 สร้าง payload หลัก
      const payload = {
        year: formData.year,
        child_vision: formData.child_vision,
        educator_vision: formData.educator_vision,
        philosophy_snapshot: formData.philosophy_detail,
        policies: formData.methods.map((m: any) => ({
          policy_master_id: m.id,
          policy_text_snap: m.policy_detail,
        })),
        objectives: createObjectivesPayload(formData), // ✅ รวมทั้ง goal + age
        figures: figuresPayload,
        pillars: [
          {
            physical_mental_health: formData.physical_mental_health,
            relationships_people: formData.relationships_people,
            relationships_environment: formData.relationships_environment,
            respect_human_rights: formData.respect_human_rights,
            respect_expression: formData.respect_expression,
            guardian_support_collaboration:
              formData.guardian_support_collaboration,
            community_collaboration: formData.community_collaboration,
            school_connection: formData.school_connection,
          },
        ],
        practices: [
          {
            health_support: formData.health_support,
            environment_sanitation_safety:
              formData.environment_sanitation_safety,
            food_education: formData.food_education,
            neuvola_support: formData.neuvola_support,
            guardian_support: formData.guardian_support,
            support_childcare: formData.support_childcare,
          },
        ],
        schedule: rows.map((row) => ({
          month: row.month,
          event_school: row.gardenEvent,
          event_seasonal: row.seasonalEvent,
          food_education: row.foodEducation,
          health: row.health,
          neuvola: row.neuvola,
          staff_training: row.staffTraining,
        })),
      };

      delete (payload as any).methods;

      console.log("✅ Final Payload:", payload);

      // 🔹 ส่งไป backend
      if (id) {
        await editOverallPlanMain(Number(id), payload); // ✅ ไม่ error
      } else {
        await createOverallPlan(payload);
      }
      alert("保存されました / บันทึกแล้ว");
    } catch (error) {
      console.error(error);
      alert("Error creating Overall Plan");
    }
  };

  useEffect(() => {
    const loadData = async () => {
      try {
        // โหลด master data ทั้งหมด
        const [
          philosophies,
          policies,
          developmentAreas,
          developmentYougo,
          competencies,
          planData,
        ] = await Promise.all([
          fetchM_philosophy(),
          fetchM_policy(),
          fetchM_development_areas(),
          fetchM_development_Yougo(),
          fetchM_competencies(),
          isEdit && id
            ? fetchOverallPlanById(Number(id))
            : Promise.resolve(null),
        ]);

        // สร้าง formData เบื้องต้นจาก master data
        let newFormData = {
          ...INITIAL_FORM_DATA,
          philosophy_detail: philosophies?.[0]?.philosophy_detail || "",
          methods: policies.map((p) => ({
            id: p.id,
            policy_detail: p.policy_detail,
          })),
          developmentAreas: developmentAreas.map((area) => ({
            ...area,
            yougo: developmentYougo.filter(
              (y) => y.development_area_id === area.id
            ),
          })),
          competencies: competencies.map((c) => ({
            id: c.id,
            competencies_detail: c.competencies_detail,
          })),
        };

        // ถ้าเป็น edit mode ให้ merge planData
        if (planData) {
          const pillar = planData.pillars?.[0] || {};
          const practice = planData.practices?.[0] || {};

          // preload objectives
          // preload objectives + ageTable
          // ---- สร้าง objectivesFormData โดยใช้ developmentYougo (master) ----
          const objectivesFormData: Record<string, any> = {};

          if (Array.isArray(planData.objectives)) {
            planData.objectives.forEach((o: any) => {
              const key = `${o.title_id}`;

              // หา yougo ทั้งหมดที่เป็น master ของ title นี้ (จาก developmentYougo)
              const yougosForTitle = developmentYougo.filter(
                (y: any) => y.title_id === o.title_id
              );

              // สร้าง goals array โดยเอา text จาก master และ checked จาก backend
              objectivesFormData[key] = yougosForTitle.map((u: any) => {
                const backendGoal = Array.isArray(o.goals)
                  ? o.goals.find((g: any) => g.no_desc === u.no_desc)
                  : undefined;
                return {
                  checked: !!backendGoal?.checked,
                  NO: u.no_desc,
                  text: u.yougo_desc,
                };
              });

              // สร้าง age table ที่ key ต้องเป็น AGE_GROUPS ("0歳児", "1歳児", ...)
              const ageTableKey = `ageTable_${o.title_id}`;
              const ageTable: Record<string, string> = {};
              AGE_GROUPS.forEach((ageLabel, idx) => {
                // backend ส่งมาเป็น age0, age1,... => map ตามดัชนี
                ageTable[ageLabel] = o[`age${idx}`] ?? "";
              });
              objectivesFormData[ageTableKey] = ageTable;
            });
          }
          newFormData = {
            ...newFormData,
            year: planData.year,
            philosophy_detail:
              planData.philosophy_snapshot || newFormData.philosophy_detail,
            child_vision: planData.child_vision || "",
            educator_vision: planData.educator_vision || "",
            methods: planData.policies.map((p: any) => ({
              id: p.policy_master_id,
              policy_detail: p.policy_text_snap,
            })),
            abilitiesGoals: planData.figures
              .filter((f: any) => f.type === "育みたい 資質・能力")
              .map((f: any) => f.title_snapshot),
            abilitiesGoals2: planData.figures
              .filter((f: any) => f.type === "10の姿")
              .map((f: any) => f.title_snapshot),
            physical_mental_health: pillar.physical_mental_health || "",
            relationships_people: pillar.relationships_people || "",
            relationships_environment: pillar.relationships_environment || "",
            respect_human_rights: pillar.respect_human_rights || "",
            respect_expression: pillar.respect_expression || "",
            guardian_support_collaboration:
              pillar.guardian_support_collaboration || "",
            community_collaboration: pillar.community_collaboration || "",
            school_connection: pillar.school_connection || "",
            health_support: practice.health_support || "",
            environment_sanitation_safety:
              practice.environment_sanitation_safety || "",
            food_education: practice.food_education || "",
            neuvola_support: practice.neuvola_support || "",
            guardian_support: practice.guardian_support || "",
            support_childcare: practice.support_childcare || "",
            ...objectivesFormData, // ใส่ goals + ageTable
          };

          // แปลง schedule → rows
          setRows(
            (planData.schedule || []).map((s: any, index: number) => ({
              id: index + 1,
              month: s.month ?? `Month ${index + 1}`,
              gardenEvent: s.event_school || "",
              seasonalEvent: s.event_seasonal || "",
              foodEducation: s.food_education || "",
              health: s.health || "",
              neuvola: s.neuvola || "",
              staffTraining: s.staff_training || "",
            }))
          );
        }

        setFormData(newFormData);
      } catch (err) {
        console.error("Failed to load data:", err);
      }
    };

    loadData();
  }, [id, isEdit]);

  const [abilitiesData, setAbilitiesData] = useState<{
    abilitiesGoals?: { ref_id: number; title_snapshot: string }[];
    abilitiesGoals2?: { ref_id: number; title_snapshot: string }[];
  }>({});

  useEffect(() => {
    const loadAbilities = async () => {
      try {
        const abilityConfigMap: Record<
          number,
          {
            api: () => Promise<any[]>;
            fieldName: "abilitiesGoals" | "abilitiesGoals2";
          }
        > = {
          1: { api: fetchM_competencies, fieldName: "abilitiesGoals" },
          2: { api: fetchM_ten_figures, fieldName: "abilitiesGoals2" },
        };

        for (const area of formData.developmentAreas) {
          const config = abilityConfigMap[area.id];
          if (!config) continue;

          const data = await config.api();

          const items =
            config.fieldName === "abilitiesGoals"
              ? (data as M_competencies[]).map((d) => ({
                  ref_id: d.id, // เอา id จาก API
                  title_snapshot: d.competencies_detail,
                }))
              : (data as M_ten_figures[]).map((d) => ({
                  ref_id: d.id, // เอา id จาก API
                  title_snapshot: d.ten_detail,
                }));

          setAbilitiesData((prev) => ({
            ...prev,
            [config.fieldName]: items,
          }));
        }
      } catch (err) {
        console.error(err);
      }
    };

    if (formData.developmentAreas.length > 0) loadAbilities();
  }, [formData.developmentAreas]);

  const [expanded, setExpanded] = useState<{ [key: string]: boolean }>({});

  const toggleAccordion = (key: string) => {
    setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));
  };
  const titleIds = Array.from(
    new Set(
      formData.developmentAreas.flatMap((area) =>
        area.yougo.map((y) => y.title_id)
      )
    )
  );
  const titleIconMap: Record<number, JSX.Element> = {
    1: <Favorite />, // title_id = 1
    2: <EmojiEmotions />, // title_id = 2
    3: <EmojiEmotions />, // title_id = 3
    4: <Favorite />, // title_id = 4
    5: <School />, // title_id = 5
    6: <School />, // title_id = 6
    7: <EmojiEmotions />,
    // ... เพิ่มตาม title_id จริง
  };

  const titleColorMap: Record<number, string> = {};
  titleIds.forEach((id, idx) => {
    const hue = Math.floor((idx * 360) / titleIds.length);
    titleColorMap[id] = `hsl(${hue}, 50%, 60%)`;
  });

  // ========================================================================
  // RENDER
  // ========================================================================

  return (
    <ThemeProvider theme={theme}>
      <ContentMain className="flex flex-col min-h-screen">
        {/* ================================================================
            HEADER SECTION
        ================================================================ */}
        <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mb: 2,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <School sx={{ fontSize: 40, color: "primary.main" }} />
              <Typography variant="h4" fontWeight="700" color="primary">
                {t("overallplanadd.childcareplan")}
              </Typography>
            </Box>
            <Button
              variant="contained"
              color="primary"
              startIcon={<Save />}
              onClick={handleSubmit}
              sx={{ px: 4, py: 1.5 }}
            >
              {t("overallplanadd.save")}
            </Button>
          </Box>

          <TextField
            fullWidth
            size="small"
            label={t("overallplanadd.year_period")}
            value={formData.year}
            onChange={(e) => handleInputChange("year", e.target.value)}
            placeholder={t("overallplanadd.year_placeholder")}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Description />
                </InputAdornment>
              ),
            }}
          />
        </Paper>

        {/* ================================================================
            BASIC INFORMATION SECTION
        ================================================================ */}
        <Accordion
          expanded={expandedSections.basic}
          onChange={() => toggleSection("basic")}
          sx={{ mb: 2, border: "2px solid #ff9800" }}
        >
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Info color="warning" />
              <Typography variant="h6" fontWeight="600">
                {t("overallplanadd.basic")}
              </Typography>
              <Tooltip title={t("overallplanadd.situation_placeholder")}>
                <Info color="info" fontSize="small" />
              </Tooltip>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <TextField
              fullWidth
              multiline
              rows={5}
              value={formData.philosophy_detail}
              onChange={(e) =>
                handleInputChange("philosophy_detail", e.target.value)
              }
              placeholder={t("overallplanadd.situation_placeholder2")}
            />
          </AccordionDetails>
        </Accordion>

        {/* ================================================================
            METHODS SECTION
        ================================================================ */}
        <Accordion
          expanded={expandedSections.methods}
          onChange={() => toggleSection("methods")}
          sx={{ mb: 2, border: "2px solid #2196f3" }}
        >
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Info color="primary" />
              <Typography variant="h6" fontWeight="600">
                {t("overallplanadd.methods")}
              </Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={2}>
              {formData.methods.map((method, index) => (
                <Grid item xs={12} md={6} key={method.id}>
                  <TextField
                    fullWidth
                    label={`Method ${index + 1}`}
                    value={method.policy_detail}
                    onChange={(e) =>
                      handleMethodChange(method.id, e.target.value)
                    }
                  />
                </Grid>
              ))}
            </Grid>
          </AccordionDetails>
          <AccordionDetails>
            <Grid container spacing={3}>
              <Grid item xs={12} md={12}>
                <Typography fontWeight="bold" sx={{ mb: 2, textAlign: "left" }}>
                  {t("overallplanadd.target_child")}
                </Typography>
                <TextField
                  value={formData.child_vision}
                  onChange={(e) =>
                    handleInputChange("child_vision", e.target.value)
                  }
                  fullWidth
                  placeholder={t("overallplanadd.target_child_placeholder")}
                  sx={{
                    "& .MuiInputBase-input": {
                      fontSize: 14,
                    },
                  }}
                />
              </Grid>

              <Grid item xs={12} md={12}>
                <Typography fontWeight="bold" sx={{ mb: 2, textAlign: "left" }}>
                  {t("overallplanadd.target_teacher")}
                </Typography>
                <TextField
                  fullWidth
                  value={formData.educator_vision}
                  onChange={(e) =>
                    handleInputChange("educator_vision", e.target.value)
                  }
                  placeholder={t("overallplanadd.target_teacher_placeholder")}
                  sx={{
                    "& .MuiInputBase-input": {
                      fontSize: 14,
                    },
                  }}
                />
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
        {formData.developmentAreas.map((area: M_development_areas) => {
          const abilityConfigMap: Record<
            number,
            {
              title: string;
              fieldName: "abilitiesGoals" | "abilitiesGoals2";
              openKey: "abilitiesGoals" | "abilitiesGoals2";
            }
          > = {
            1: {
              title: "育みたい 資質・能力",
              fieldName: "abilitiesGoals",
              openKey: "abilitiesGoals",
            },
            2: {
              title: "10の姿",
              fieldName: "abilitiesGoals2",
              openKey: "abilitiesGoals2",
            },
          };

          const abilityConfig = abilityConfigMap[area.id];

          return (
            <Accordion
              key={area.id}
              expanded={expanded[area.code] ?? true}
              onChange={() => toggleAccordion(area.code)}
              sx={{
                mb: 2,
                border: `2px solid ${
                  area.code === "CARE" ? "#e91e63" : "#ec407a"
                }`,
                borderRadius: 2,
              }}
            >
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Favorite sx={{ color: "#e91e63" }} />
                  <Typography variant="h6">
                    {area.name_ja} {area.name_en}
                  </Typography>
                </Box>
              </AccordionSummary>

              {/* ส่วนที่เป็น Goal + AgeTable */}
              <AccordionDetails
                sx={{ display: "flex", flexDirection: "column", gap: 2 }}
              >
                {Array.from(
                  new Map(area.yougo.map((y) => [y.title_id, y])).values()
                ).map((y) => {
                  const yougosForTitle = area.yougo.filter(
                    (u) => u.title_id === y.title_id
                  );
                  const sharedColor = titleColorMap[y.title_id];
                  const iconElement = titleIconMap[y.title_id]
                    ? React.cloneElement(titleIconMap[y.title_id], {
                        sx: { color: sharedColor },
                      })
                    : null;

                  const key = `${y.title_id}`;

                  // preload default goals ถ้ายังไม่มีใน state
                  if (!formData[key]) {
                    const defaultGoals = yougosForTitle.map((u) => ({
                      checked: false,
                      NO: u.no_desc,
                      text: u.yougo_desc,
                    }));
                    setFormData((prev) => ({ ...prev, [key]: defaultGoals }));
                  }

                  const ageTableKey = `ageTable_${y.title_id}`; // dynamic key

                  // preload table ถ้ายังไม่มีค่า
                  if (!formData[ageTableKey]) {
                    const defaultTable: Record<string, string> = {};
                    AGE_GROUPS.forEach((age) => {
                      defaultTable[age] = ""; // ค่าเริ่มต้น
                    });
                    setFormData((prev) => ({
                      ...prev,
                      [ageTableKey]: defaultTable,
                    }));
                  }

                  return (
                    <React.Fragment key={y.title_id}>
                      <GoalSection
                        title={y.title}
                        goals={formData[key] ?? []}
                        icon={iconElement}
                        color={sharedColor}
                        onGoalCheck={(index) =>
                          handleGoalCheck(
                            key,
                            index,
                            yougosForTitle[index].yougo_desc,
                            yougosForTitle[index].no_desc
                          )
                        }
                      />

                      <AgeTable
                        ageGroups={AGE_GROUPS}
                        tableData={formData[ageTableKey] ?? {}}
                        color={sharedColor}
                        onTableChange={(age, value) =>
                          handleTableChange(ageTableKey, age, value)
                        }
                      />
                    </React.Fragment>
                  );
                })}

                {/* ✅ แสดง abilities แค่ครั้งเดียวต่อ area */}
                {abilityConfig && (
                  <Box sx={{ mt: 3 }}>
                    <Typography variant="h6" fontWeight="600" sx={{ mb: 2 }}>
                      {abilityConfig.title}
                    </Typography>

                    <AbilitiesSelect
                      fieldName={abilityConfig.fieldName}
                      value={formData[abilityConfig.fieldName]}
                      isOpen={selectOpen[abilityConfig.openKey]}
                      onOpen={() =>
                        setSelectOpen((prev) => ({
                          ...prev,
                          [abilityConfig.openKey]: true,
                        }))
                      }
                      onClose={() =>
                        setSelectOpen((prev) => ({
                          ...prev,
                          [abilityConfig.openKey]: false,
                        }))
                      }
                      onChange={handleMultiSelectChange}
                      onDelete={(value) =>
                        handleDeleteChip(abilityConfig.fieldName, value)
                      }
                      onClearAll={() => handleClearAll(abilityConfig.fieldName)}
                      onSelectAll={() =>
                        handleSelectAll(abilityConfig.fieldName)
                      }
                      abilityMaster={(
                        abilitiesData[abilityConfig.fieldName] || []
                      ).map((a) => a.title_snapshot)}
                    />
                  </Box>
                )}
              </AccordionDetails>
            </Accordion>
          );
        })}

        <Accordion
          expanded={expandedSections.goals}
          onChange={() => toggleSection("goals")}
          sx={{ mb: 2, border: "2px solid #4caf50" }}
        >
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <EmojiEmotions color="success" />
              <Typography variant="h6" fontWeight="600">
                {t("overallplanadd.focus_section")}
              </Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={3}>
              <Grid item xs={12} md={12}>
                <Typography fontWeight="bold" sx={{ mb: 2, textAlign: "left" }}>
                  {t("overallplanadd.health_mind_body")}
                </Typography>
                <TextField
                  fullWidth
                  multiline
                  value={formData.physical_mental_health}
                  onChange={(e) =>
                    handleInputChange("physical_mental_health", e.target.value)
                  }
                  rows={2}
                  placeholder={t("overallplanadd.health_mind_body_placeholder")}
                  sx={{
                    "& .MuiInputBase-input": {
                      fontSize: 14,
                    },
                  }}
                />
              </Grid>

              <Grid item xs={12} md={12}>
                <Typography fontWeight="bold" sx={{ mb: 2, textAlign: "left" }}>
                  {t("overallplanadd.relations_close_people")}
                </Typography>
                <TextField
                  fullWidth
                  multiline
                  value={formData.relationships_people}
                  onChange={(e) =>
                    handleInputChange("relationships_people", e.target.value)
                  }
                  rows={2}
                  placeholder={t(
                    "overallplanadd.relations_close_people_placeholder"
                  )}
                  sx={{
                    "& .MuiInputBase-input": {
                      fontSize: 14,
                    },
                  }}
                />
              </Grid>

              <Grid item xs={12} md={12}>
                <Typography fontWeight="bold" sx={{ mb: 2, textAlign: "left" }}>
                  {t("overallplanadd.relations_environment_nearby")}
                </Typography>
                <TextField
                  fullWidth
                  multiline
                  rows={2}
                  value={formData.relationships_environment}
                  onChange={(e) =>
                    handleInputChange(
                      "relationships_environment",
                      e.target.value
                    )
                  }
                  placeholder={t(
                    "overallplanadd.relations_environment_nearby_placeholder"
                  )}
                  sx={{
                    "& .MuiInputBase-input": {
                      fontSize: 14,
                    },
                  }}
                />
              </Grid>

              <Grid item xs={12} md={12}>
                <Typography fontWeight="bold" sx={{ mb: 2, textAlign: "left" }}>
                  {t("overallplanadd.human_rights_respect")}
                </Typography>
                <TextField
                  fullWidth
                  multiline
                  rows={2}
                  value={formData.respect_human_rights}
                  onChange={(e) =>
                    handleInputChange("respect_human_rights", e.target.value)
                  }
                  placeholder={t(
                    "overallplanadd.human_rights_respect_placeholder"
                  )}
                  sx={{
                    "& .MuiInputBase-input": {
                      fontSize: 14,
                    },
                  }}
                />
              </Grid>

              <Grid item xs={12} md={12}>
                <Typography fontWeight="bold" sx={{ mb: 2, textAlign: "left" }}>
                  {t("overallplanadd.expression_respect")}
                </Typography>
                <TextField
                  fullWidth
                  multiline
                  rows={2}
                  value={formData.respect_expression}
                  onChange={(e) =>
                    handleInputChange("respect_expression", e.target.value)
                  }
                  placeholder={t(
                    "overallplanadd.expression_respect_placeholder"
                  )}
                  sx={{
                    "& .MuiInputBase-input": {
                      fontSize: 14,
                    },
                  }}
                />
              </Grid>

              <Grid item xs={12} md={12}>
                <Typography fontWeight="bold" sx={{ mb: 2, textAlign: "left" }}>
                  {t("overallplanadd.parent_support_cooperation")}
                </Typography>
                <TextField
                  fullWidth
                  multiline
                  rows={2}
                  value={formData.guardian_support_collaboration}
                  onChange={(e) =>
                    handleInputChange(
                      "guardian_support_collaboration",
                      e.target.value
                    )
                  }
                  placeholder={t("overallplanadd.parent_support_placeholder")}
                  sx={{
                    "& .MuiInputBase-input": {
                      fontSize: 14,
                    },
                  }}
                />
              </Grid>

              <Grid item xs={12} md={12}>
                <Typography fontWeight="bold" sx={{ mb: 2, textAlign: "left" }}>
                  {t("overallplanadd.community_cooperation")}
                </Typography>
                <TextField
                  fullWidth
                  multiline
                  value={formData.community_collaboration}
                  onChange={(e) =>
                    handleInputChange("community_collaboration", e.target.value)
                  }
                  rows={2}
                  placeholder={t(
                    "overallplanadd.community_cooperation_placeholder"
                  )}
                  sx={{
                    "& .MuiInputBase-input": {
                      fontSize: 14,
                    },
                  }}
                />
              </Grid>

              <Grid item xs={12} md={12}>
                <Typography fontWeight="bold" sx={{ mb: 2, textAlign: "left" }}>
                  {t("overallplanadd.primary_connection")}
                </Typography>
                <TextField
                  fullWidth
                  multiline
                  value={formData.school_connection}
                  onChange={(e) =>
                    handleInputChange("school_connection", e.target.value)
                  }
                  rows={2}
                  placeholder={t(
                    "overallplanadd.primary_connection_placeholder"
                  )}
                  sx={{
                    "& .MuiInputBase-input": {
                      fontSize: 14,
                    },
                  }}
                />
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expandedSections.goals}
          onChange={() => toggleSection("goals")}
          sx={{ mb: 2, border: "2px solid #4caf50" }}
        >
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <EmojiEmotions color="success" />
              <Typography variant="h6" fontWeight="600">
                {t("overallplanadd.concrete_actions")}
              </Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={3}>
              <Grid item xs={12} md={12}>
                <Typography fontWeight="bold" sx={{ mb: 2, textAlign: "left" }}>
                  {t("overallplanadd.health_support")}
                </Typography>
                <TextField
                  fullWidth
                  multiline
                  value={formData.health_support}
                  onChange={(e) =>
                    handleInputChange("health_support", e.target.value)
                  }
                  rows={6}
                  placeholder={t("overallplanadd.health_mind_body_placeholder")}
                  sx={{
                    "& .MuiInputBase-input": {
                      fontSize: 14,
                    },
                  }}
                />
              </Grid>

              <Grid item xs={12} md={12}>
                <Typography fontWeight="bold" sx={{ mb: 2, textAlign: "left" }}>
                  {t("overallplanadd.env_hygiene_safety_mgmt")}
                </Typography>
                <TextField
                  fullWidth
                  multiline
                  value={formData.environment_sanitation_safety}
                  onChange={(e) =>
                    handleInputChange(
                      "environment_sanitation_safety",
                      e.target.value
                    )
                  }
                  rows={6}
                  placeholder={t(
                    "overallplanadd.relations_close_people_placeholder"
                  )}
                  sx={{
                    "& .MuiInputBase-input": {
                      fontSize: 14,
                    },
                  }}
                />
              </Grid>

              <Grid item xs={12} md={12}>
                <Typography fontWeight="bold" sx={{ mb: 2, textAlign: "left" }}>
                  {t("overallplanadd.food_education_promotion")}
                </Typography>
                <TextField
                  fullWidth
                  multiline
                  value={formData.food_education}
                  onChange={(e) =>
                    handleInputChange("food_education", e.target.value)
                  }
                  rows={6}
                  placeholder={t(
                    "overallplanadd.relations_environment_nearby_placeholder"
                  )}
                  sx={{
                    "& .MuiInputBase-input": {
                      fontSize: 14,
                    },
                  }}
                />
              </Grid>

              <Grid item xs={12} md={12}>
                <Typography fontWeight="bold" sx={{ mb: 2, textAlign: "left" }}>
                  {t("overallplanadd.neuvola_integrated_support")}
                </Typography>
                <TextField
                  fullWidth
                  multiline
                  value={formData.neuvola_support}
                  onChange={(e) =>
                    handleInputChange("neuvola_support", e.target.value)
                  }
                  rows={6}
                  placeholder={t(
                    "overallplanadd.human_rights_respect_placeholder"
                  )}
                  sx={{
                    "& .MuiInputBase-input": {
                      fontSize: 14,
                    },
                  }}
                />
              </Grid>

              <Grid item xs={12} md={12}>
                <Typography fontWeight="bold" sx={{ mb: 2, textAlign: "left" }}>
                  {t("overallplanadd.parent_support_cooperation_alt")}
                </Typography>
                <TextField
                  fullWidth
                  multiline
                  value={formData.guardian_support}
                  onChange={(e) =>
                    handleInputChange("guardian_support", e.target.value)
                  }
                  rows={6}
                  placeholder={t(
                    "overallplanadd.expression_respect_placeholder"
                  )}
                  sx={{
                    "& .MuiInputBase-input": {
                      fontSize: 14,
                    },
                  }}
                />
              </Grid>

              <Grid item xs={12} md={12}>
                <Typography fontWeight="bold" sx={{ mb: 2, textAlign: "left" }}>
                  {t("overallplanadd.supportive_childcare")}
                </Typography>
                <TextField
                  fullWidth
                  multiline
                  value={formData.support_childcare}
                  onChange={(e) =>
                    handleInputChange("support_childcare", e.target.value)
                  }
                  rows={6}
                  placeholder={t("overallplanadd.parent_support_placeholder")}
                  sx={{
                    "& .MuiInputBase-input": {
                      fontSize: 14,
                    },
                  }}
                />
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
        {/* 
        <Accordion
          expanded={expandedSections.goals}
          onChange={() => toggleSection("goals")}
          sx={{ mb: 2, border: "2px solid #4caf50" }}
        >
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <EmojiEmotions color="success" />
              <Typography variant="h6" fontWeight="600">
                {t("overallplanadd.concrete_actions")}
              </Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={3}>
              <Grid item xs={12} md={12}>
                <Typography fontWeight="bold" sx={{ mb: 2, textAlign: "left" }}>
                  {t("overallplanadd.health_support")}
                </Typography>
                <TextField
                  fullWidth
                  multiline
                  rows={6}
                  placeholder={t("overallplanadd.health_mind_body_placeholder")}
                  sx={{
                    "& .MuiInputBase-input": {
                      fontSize: 14,
                    },
                  }}
                />
              </Grid>

              <Grid item xs={12} md={12}>
                <Typography fontWeight="bold" sx={{ mb: 2, textAlign: "left" }}>
                  {t("overallplanadd.env_hygiene_safety_mgmt")}
                </Typography>
                <TextField
                  fullWidth
                  multiline
                  rows={6}
                  placeholder={t(
                    "overallplanadd.relations_close_people_placeholder"
                  )}
                  sx={{
                    "& .MuiInputBase-input": {
                      fontSize: 14,
                    },
                  }}
                />
              </Grid>

              <Grid item xs={12} md={12}>
                <Typography fontWeight="bold" sx={{ mb: 2, textAlign: "left" }}>
                  {t("overallplanadd.food_education_promotion")}
                </Typography>
                <TextField
                  fullWidth
                  multiline
                  rows={6}
                  placeholder={t(
                    "overallplanadd.relations_environment_nearby_placeholder"
                  )}
                  sx={{
                    "& .MuiInputBase-input": {
                      fontSize: 14,
                    },
                  }}
                />
              </Grid>

              <Grid item xs={12} md={12}>
                <Typography fontWeight="bold" sx={{ mb: 2, textAlign: "left" }}>
                  {t("overallplanadd.neuvola_integrated_support")}
                </Typography>
                <TextField
                  fullWidth
                  multiline
                  rows={6}
                  placeholder={t(
                    "overallplanadd.human_rights_respect_placeholder"
                  )}
                  sx={{
                    "& .MuiInputBase-input": {
                      fontSize: 14,
                    },
                  }}
                />
              </Grid>

              <Grid item xs={12} md={12}>
                <Typography fontWeight="bold" sx={{ mb: 2, textAlign: "left" }}>
                  {t("overallplanadd.parent_support_cooperation_alt")}
                </Typography>
                <TextField
                  fullWidth
                  multiline
                  rows={6}
                  placeholder={t(
                    "overallplanadd.expression_respect_placeholder"
                  )}
                  sx={{
                    "& .MuiInputBase-input": {
                      fontSize: 14,
                    },
                  }}
                />
              </Grid>

              <Grid item xs={12} md={12}>
                <Typography fontWeight="bold" sx={{ mb: 2, textAlign: "left" }}>
                  {t("overallplanadd.supportive_childcare")}
                </Typography>
                <TextField
                  fullWidth
                  multiline
                  rows={6}
                  placeholder={t("overallplanadd.parent_support_placeholder")}
                  sx={{
                    "& .MuiInputBase-input": {
                      fontSize: 14,
                    },
                  }}
                />
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion> */}

        {/* ================================================================
            ANNUAL SCHEDULE
        ================================================================ */}
        <Accordion
          expanded={expandedSections.goals}
          onChange={() => toggleSection("goals")}
          sx={{ mb: 2, border: "2px solid #4caf50" }}
        >
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <EmojiEmotions color="success" />
              <Typography variant="h6" fontWeight="600">
                {t("overallplanadd.annual_plan")}
              </Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <TableContainer component={Paper} sx={{ maxHeight: 600 }}>
              <Table stickyHeader>
                <TableHead>
                  <TableRow>
                    <TableCell
                      sx={{
                        fontWeight: "bold",
                        bgcolor: "#e8f5e9",
                        minWidth: 100,
                      }}
                    >
                      {t("overallplanadd.annual_col_month")}
                    </TableCell>
                    <TableCell
                      sx={{
                        fontWeight: "bold",
                        bgcolor: "#e8f5e9",
                        minWidth: 200,
                      }}
                    >
                      {t("overallplanadd.annual_col_school_events")}
                    </TableCell>
                    <TableCell
                      sx={{
                        fontWeight: "bold",
                        bgcolor: "#e8f5e9",
                        minWidth: 190,
                      }}
                    >
                      {t("overallplanadd.annual_col_seasonal_events")}
                    </TableCell>
                    <TableCell
                      sx={{
                        fontWeight: "bold",
                        bgcolor: "#e8f5e9",
                        minWidth: 190,
                      }}
                    >
                      {t("overallplanadd.annual_col_food_education")}
                    </TableCell>
                    <TableCell
                      sx={{
                        fontWeight: "bold",
                        bgcolor: "#e8f5e9",
                        minWidth: 170,
                      }}
                    >
                      {t("overallplanadd.annual_col_health")}
                    </TableCell>
                    <TableCell
                      sx={{
                        fontWeight: "bold",
                        bgcolor: "#e8f5e9",
                        minWidth: 170,
                      }}
                    >
                      {t("overallplanadd.annual_col_neuvola")}
                    </TableCell>
                    <TableCell
                      sx={{
                        fontWeight: "bold",
                        bgcolor: "#e8f5e9",
                        minWidth: 200,
                      }}
                    >
                      {t("overallplanadd.annual_col_staff_training")}
                    </TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.id} hover>
                      <TableCell>
                        <TextField
                          fullWidth
                          size="small"
                          value={row.month}
                          onChange={(e) =>
                            updateRow(row.id, "month", e.target.value)
                          }
                          placeholder={t(
                            "overallplanadd.annual_month_placeholder"
                          )}
                          variant="outlined"
                        />
                      </TableCell>

                      <TableCell>
                        <TextField
                          fullWidth
                          size="small"
                          multiline
                          value={row.gardenEvent}
                          onChange={(e) =>
                            updateRow(row.id, "gardenEvent", e.target.value)
                          }
                          placeholder={t(
                            "overallplanadd.annual_input_placeholder"
                          )}
                          variant="outlined"
                        />
                      </TableCell>

                      <TableCell>
                        <TextField
                          fullWidth
                          size="small"
                          multiline
                          value={row.seasonalEvent}
                          onChange={(e) =>
                            updateRow(row.id, "seasonalEvent", e.target.value)
                          }
                          placeholder={t(
                            "overallplanadd.annual_input_placeholder"
                          )}
                          variant="outlined"
                        />
                      </TableCell>

                      <TableCell>
                        <TextField
                          fullWidth
                          size="small"
                          multiline
                          value={row.foodEducation}
                          onChange={(e) =>
                            updateRow(row.id, "foodEducation", e.target.value)
                          }
                          placeholder={t(
                            "overallplanadd.annual_input_placeholder"
                          )}
                          variant="outlined"
                        />
                      </TableCell>

                      <TableCell>
                        <TextField
                          fullWidth
                          size="small"
                          multiline
                          value={row.health}
                          onChange={(e) =>
                            updateRow(row.id, "health", e.target.value)
                          }
                          placeholder={t(
                            "overallplanadd.annual_input_placeholder"
                          )}
                          variant="outlined"
                        />
                      </TableCell>

                      <TableCell>
                        <TextField
                          fullWidth
                          size="small"
                          multiline
                          value={row.neuvola}
                          onChange={(e) =>
                            updateRow(row.id, "neuvola", e.target.value)
                          }
                          placeholder={t(
                            "overallplanadd.annual_input_placeholder"
                          )}
                          variant="outlined"
                        />
                      </TableCell>

                      <TableCell>
                        <TextField
                          fullWidth
                          size="small"
                          multiline
                          value={row.staffTraining}
                          onChange={(e) =>
                            updateRow(row.id, "staffTraining", e.target.value)
                          }
                          placeholder={t(
                            "overallplanadd.annual_input_placeholder"
                          )}
                          variant="outlined"
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </AccordionDetails>
        </Accordion>

        {/* ================================================================
            FOOTER ACTIONS
        ================================================================ */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: 2,
            mt: 3,
            mb: 3,
          }}
        >
          <Button
            variant="outlined"
            color="warning"
            startIcon={<ArrowBack />}
            sx={{ px: 4, py: 1.5 }}
          >
            {t("overallplanadd.cancel")}
          </Button>
          <Button
            variant="contained"
            color="success"
            startIcon={<Save />}
            onClick={handleSubmit}
            sx={{
              px: 4,
              py: 1.5,
              background: "linear-gradient(45deg, #4caf50, #8bc34a)",
              "&:hover": {
                background: "linear-gradient(45deg, #388e3c, #689f38)",
              },
            }}
          >
            {t("overallplanadd.save")}
          </Button>
        </Box>
      </ContentMain>
    </ThemeProvider>
  );
};

export default OverallPlanAdd;
