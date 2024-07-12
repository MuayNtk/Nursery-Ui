import ContentMain from "../../content/Content";
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { FormControl, Grid, MenuItem, Select, TextField, TextareaAutosize, Typography, Button } from '@mui/material';


interface Column {
  id: 'activities' | 'admission' | 'october' | 'february';
  label: string;
  minWidth?: number;
  minHeight?: number;
  align?: 'right' | 'center';
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: 'activities', label: '主な活動', minWidth: 600, minHeight: 1000 },
  { id: 'admission', label: '入所', minWidth: 150, align: "center" },
  { id: 'october', label: '10月', minWidth: 150, align: "center" },
  { id: 'february', label: '2月', minWidth: 150, align: "center" },

];

interface Data {
  activities: string;
  admission: JSX.Element;
  october: JSX.Element;
  february: JSX.Element;
}

function createData(
  activities: string,
  admission: JSX.Element,
  october: JSX.Element,
  february: JSX.Element,

): Data {
  return { activities, admission, october, february };
}

// Start rows table 1
const rows = [
  createData('集中して楽しく食事をする',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
    ,
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
    ,
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
  ),

  createData('好き嫌いをしないで残さず食べる',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
    ,
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
    ,
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
  ),

  createData('箸を使いこなす',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
    ,
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
    ,
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
  ),

  createData('食事のマナーが守れる(挨拶・姿勢・後始末)',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
    ,
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
    ,
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
  ),

  createData('食物の名前や献立に興味を持ち、栄養について知ろうとする',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
    ,
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
    ,
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
  ),
];
// End rows table 1

// Start rows table 2
const rows2 = [
  createData('入る時、入っている時合図をする',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
    ,
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
    ,
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
  ),

  createData('排泄後の手洗いをきちんとする',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
    ,
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
    ,
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
  ),

  createData('便所のはきものを正しく揃える',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
    ,
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
    ,
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
  ),
];
// End rows table 2

// Start rows table 3
const rows3 = [
  createData('午睡や休息の意味がわかり進んでする',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
    ,
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
    ,
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
  ),

  createData('眠れなくても、静かに横になり休息する',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
    ,
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
    ,
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
  ),

  createData('午睡の準備や後片付けを進んでする',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
    ,
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
    ,
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
  ),
];
// End rows table 3

// Start rows table 4
const rows4 = [
  createData('衣服の着脱が上手に出来きちんと整える',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
    ,
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
    ,
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
  ),

  createData('前あきのファスナー・カギホックのかけはず しをする',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
    ,
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
    ,
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
  ),

  createData('気温・体温に合わせて調節する',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
    ,
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
    ,
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
  ),
];
// End rows table 4

// Start rows table 5
const rows5 = [
  createData('手を洗うことの意味を知って洗う',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
    ,
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
    ,
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
  ),

  createData('食後の歯みがき、うがいが習慣づいてくる',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
    ,
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
    ,
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
  ),

  createData('清深にする意味がわかる',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
    ,
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
    ,
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
  ),

  createData('朋や爪等の汚れに気づき、自分から知らせたり清潔にしようとる',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
    ,
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
    ,
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
  ),

  createData('自分や友だちの身体の異常について知らせる',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
    ,
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
    ,
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
  ),

  createData('身体の各部の役割などに関心を持つ',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
    ,
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
    ,
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
  ),

  createData('危険なことがわかり約束を守って安全な行動をする',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
    ,
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
    ,
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
  ),

  createData('水遊びの危険を知り正しくプールに入る',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
    ,
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
    ,
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
  ),

  createData('正しい運動遊具の遊び方を知り、守って遊ぶ',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
    ,
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
    ,
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
  ),

  createData('信号が解り交通ルールについて知り守る',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
    ,
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
    ,
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
  ),

  createData('避難訓練の意味が解り指示に従って確実に行動する',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
    ,
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
    ,
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
  ),
];
// End rows table 5

// Start rows table 6
const rows6 = [
  createData('将楽に合わせてリズミカルに体操する',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
    ,
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
    ,
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
  ),

  createData('いろいろな運動遊具を工夫して使い、 遊びを発展させることができる',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
    ,
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
    ,
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
  ),

  createData('跳び箱を馬跳びで、とび越えることができる',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
    ,
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
    ,
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
  ),

  createData('鉄棒で逆上がりができる',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
    ,
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
    ,
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
  ),

  createData('投げられたボールを受け止めることができる',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
    ,
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
    ,
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
  ),

  createData('ポール(中)を連続してつくことができる(10回以上)',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
    ,
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
    ,
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
  ),

  createData('縄跳びができる',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
    ,
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
    ,
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
  ),

  createData('補助されて泳ぐことができる',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
    ,
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
    ,
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
  ),

  createData('指先の微細運動が楽しめる(蝶結び・あやとり・指編み・折り紙等)',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
    ,
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
    ,
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
  ),
];
// End rows table 6

// Start rows table 7
const rows7 = [
  createData('自信を持ち意欲的に行動する',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
    ,
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
    ,
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
  ),

  createData('人に迷惑をかけないように、善悪を判断して行動する',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
    ,
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
    ,
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
  ),

  createData('簡単なレールを作り出し友だちと一緒に遊びを発展させる',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
    ,
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
    ,
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
  ),

  createData('自分の意見を主張するが、相手の意見も受け入れる',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
    ,
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
    ,
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
  ),

  createData('目標に向かって友だちと協力してやり遂げる',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
    ,
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
    ,
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
  ),

  createData('お年寄りや身近な人の働きと自分とのつながりを知り感謝の気持ちをもつ',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
    ,
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
    ,
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
  ),
];
// End rows table 7

// Start rows table 8
const rows8 = [
  createData('動植物の飼育栽培の方法がわかり、すすんでその世話をする',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
    ,
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
    ,
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
  ),

  createData('自然の事象に親しみ関心を持ち、それらを利用して遊ぶ',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
    ,
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
    ,
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
  ),

  createData('四季の区別ができ、その特徴がわかる',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
    ,
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
    ,
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
  ),

  createData('区量、図形を理解し、遊びや生活の中で使う',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
    ,
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
    ,
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
  ),

  createData('生活や遊びの中で時間的な大まかなくぎりのあることがわかる(昨日、今日、明日等)',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
    ,
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
    ,
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
  ),

  createData('家庭、保育所、地域の行事に喜んで参加する',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
    ,
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
    ,
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
  ),
];
// End rows table 8

// Start rows table 9
const rows9 = [
  createData('共同の物を大切にしてゆずり合う',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
    ,
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
    ,
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
  ),

  createData('自分のしたいと思うこと、して欲しいことをはっきり言う',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
    ,
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
    ,
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
  ),

  createData('友だちを気づつったり、いたわったりすることができる',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
    ,
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
    ,
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
  ),

  createData('保育士等のすることや興味をもったことを積極的に手伝う',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
    ,
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
    ,
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
  ),

  createData('年下の子どもに親しみを持ったりお年寄りや身近な人々の話を開いたり話し掛けたりする',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
    ,
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
    ,
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
  ),

  createData('他人に迷或をかけたら謝る',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
    ,
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
    ,
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
  ),
];
// End rows table 9

// Start rows table 10
const rows10 = [
  createData('経験したこと、想像したことをいろいろな素材や用具を工夫して描いたり作ったりする',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
    ,
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
    ,
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
  ),

  createData('友だちとイメージを共有し合いながらつくることを楽しむ',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
    ,
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
    ,
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
  ),

  createData('曲の感じをつかんでうたったり、いろいろなうたを楽しむ',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
    ,
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
    ,
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
  ),

  createData('友だちのうたや合奏を静かに聴いて楽しむ',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
    ,
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
    ,
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
  ),

  createData('曲の強弱・速さ・感じなかをつかんで打楽器やメロディ楽器を使って合奏する',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
    ,
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
    ,
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
  ),

  createData('音楽を聴きその曲想に合わせて歩いたりスキップしたりリズミカルな動きを作ったりする',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
    ,
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
    ,
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
  ),
];
// End rows table 10

export default function ProgressdFiveForm() {

  return (
    <>
      <ContentMain className="flex flex-col min-h-screen">
       {/* Start Facility Director  */}
       <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-7  ">
          <Grid item xs={2} sm={1.5} md={1} lg={1} >
            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, }} >
              施設長 :
            </Typography>
          </Grid>
          <Grid item xs={5} sm={4} md={4} lg={1} >
            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, ml:{ xs: -10, sm: -11, md: -22, lg: -8, }, fontWeight: 'bold', }} >
              濃部
            </Typography>
          </Grid>
          <Grid item xs={5} sm={4} md={4} lg={1} >
            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, },ml:{ xs: -30, sm: -30, md: -60, lg: -9, }, fontWeight: 'bold', }} >
              多子多子
            </Typography>
          </Grid>
        </Grid >
        {/* End Facility Director  */}

        {/* Start director  */}
        <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-5 ">
          <Grid item xs={2} sm={1.5} md={1} lg={1} >
            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, ml:{ xs: 1, sm: 1, md: 1, lg: 2, }, }} >
              主任 :
            </Typography>
          </Grid>
          <Grid item xs={5} sm={4} md={4} lg={1} >
            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, ml:{ xs: -10, sm: -11, md: -22, lg: -8, }, fontWeight: 'bold', }} >
              渡部
            </Typography>
          </Grid>
          <Grid item xs={5} sm={4} md={4} lg={1} >
            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, },ml:{ xs: -33, sm: -33, md: -62, lg: -13, }, fontWeight: 'bold', }} >
              史朗
            </Typography>
          </Grid>
        </Grid >
        {/* End director  */}

        {/* Start Responsible */}
        <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-5 ">
          <Grid item xs={2} sm={1.5} md={1} lg={1} >
            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, ml:{ xs: 1, sm: 1, md: 1, lg: 2, }, }} >
              担任 :
            </Typography>
          </Grid>
          <Grid item xs={5} sm={4} md={4} lg={1} >
            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, ml:{ xs: -10, sm: -11, md: -22, lg: -8, },fontWeight: 'bold', }} >
              中川
            </Typography>
          </Grid>
          <Grid item xs={5} sm={4} md={4} lg={1} >
            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, },ml:{ xs: -33, sm: -33, md: -62, lg: -13, }, fontWeight: 'bold', }} >
              康嘉
            </Typography>
          </Grid>
        </Grid >

        {/* End Responsible  */}

        {/* Start Child's name */}
        <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-5 ">
          <Grid item xs={2} sm={1.5} md={1} lg={1} >
            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, }} >
              児童名 :
            </Typography>
          </Grid>
          <Grid item xs={5} sm={4} md={4} lg={1} >
            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, ml:{ xs: -10, sm: -10, md: -20, lg: -6, }, fontWeight: 'bold', }} >
              長谷川
            </Typography>
          </Grid>
        </Grid >
        {/* End Child's name  */}

        {/* Start date of birth: */}
        <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-7 ">
          <Grid item xs={2} sm={1.5} md={1} lg={1} >
            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, }} >
              生年月日:
            </Typography>
          </Grid>
          <Grid item xs={2} sm={1.5} md={1.5} lg={1} className="">
            <FormControl sx={{ m: 1, minWidth: 120, marginLeft: { xs: 1, sm: 1, md: 2, lg: 1, } }} size='small' className="w-full " >
              <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>昭和</MenuItem>
                <MenuItem value={2}>平成</MenuItem>
                <MenuItem value={3}>令和</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={5} sm={6} md={3} lg={1.5}>
            <TextField className='w-full ' id="Facility-input" label="年" type="text" size='small' sx={{ backgroundColor: "white", marginLeft: { xs: 9.5, sm: 11, md: 8, lg: 6, } }} />
          </Grid>
          <Grid item xs={4} sm={4} md={1} lg={1.5}>
            <FormControl sx={{ m: 1, minWidth: 120, marginLeft: { xs: 6, sm: 8, md: 9, lg: 7, } }} size='small' className="w-full " >
              <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={6}>6</MenuItem>
                <MenuItem value={7}>7</MenuItem>
                <MenuItem value={8}>8</MenuItem>
                <MenuItem value={9}>9</MenuItem>
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={11}>11</MenuItem>
                <MenuItem value={12}>12</MenuItem>

              </Select>
            </FormControl>
          </Grid>
          <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, marginLeft: { xs: 8, sm: 10, md: 19, lg: 8, } }} >
            月
          </Typography>
          <Grid item xs={4} sm={4} md={1} lg={1} className="flex ">
            <FormControl sx={{ m: 1, minWidth: 120, marginLeft: { xs: 1, sm: 1, md: 1, lg: 2, } }} size='small' className="w-full " >
              <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={6}>6</MenuItem>
                <MenuItem value={7}>7</MenuItem>
                <MenuItem value={8}>8</MenuItem>
                <MenuItem value={9}>9</MenuItem>
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={11}>11</MenuItem>
                <MenuItem value={12}>12</MenuItem>
                <MenuItem value={13}>13</MenuItem>
                <MenuItem value={14}>14</MenuItem>
                <MenuItem value={15}>15</MenuItem>
                <MenuItem value={16}>16</MenuItem>
                <MenuItem value={17}>17</MenuItem>
                <MenuItem value={18}>18</MenuItem>
                <MenuItem value={19}>19</MenuItem>
                <MenuItem value={20}>20</MenuItem>
                <MenuItem value={21}>21</MenuItem>
                <MenuItem value={22}>22</MenuItem>
                <MenuItem value={23}>23</MenuItem>
                <MenuItem value={24}>24</MenuItem>
                <MenuItem value={25}>25</MenuItem>
                <MenuItem value={26}>26</MenuItem>
                <MenuItem value={27}>27</MenuItem>
                <MenuItem value={28}>28</MenuItem>
                <MenuItem value={29}>29</MenuItem>
                <MenuItem value={30}>30</MenuItem>
                <MenuItem value={31}>31</MenuItem>
              </Select>
            </FormControl>
            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, marginRight: { xs: 15, sm: 2, md: 10, lg: 7, } }} className="pt-3">
              日
            </Typography>
          </Grid>
        </Grid>
        {/* end date of birth: */}

        {/* Start Grid Table 1 */}
        <Grid container spacing={2} className='pt-10' justifyContent="center">
          <Grid item xs={12} sm={12} md={12} lg={12} className='' >
            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, backgroundColor: '#CCF0FD' }} className='flex justify-start h-10 pt-2 pl-5' >
              食事
            </Typography>
          </Grid>
          <Paper sx={{ width: '100%', overflow: 'hidden' }} className='ms-4'>
            <TableContainer sx={{ maxHeight: 1000 }}>
              <Table stickyHeader aria-label="sticky table" size="small">
                <TableHead>
                  <TableRow>
                    {columns.map((column) => (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{ minWidth: column.minWidth }}
                      >
                        <Typography variant="subtitle2" fontWeight="bold">{column.label}</Typography>
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>

                <TableBody>
                  {rows
                    .map((row) => {
                      return (
                        <TableRow hover role="checkbox" tabIndex={-1} key={row.activities}>
                          {columns.map((column) => {
                            const value = row[column.id];
                            return (
                              <TableCell key={column.id} align={column.align}>
                                {column.format && typeof value === 'number'
                                  ? column.format(value)
                                  : value}
                              </TableCell>
                            );
                          })}
                        </TableRow>
                      );
                    })}
                </TableBody>

              </Table>
            </TableContainer>
          </Paper>
        </Grid>
        {/* End Grid Table 1 */}

        {/* Start Grid Table 2 */}
        <Grid container spacing={2} className='pt-10' justifyContent="center">
          <Grid item xs={12} sm={12} md={12} lg={12} className='' >
            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, backgroundColor: '#CCF0FD' }} className='flex justify-start h-10 pt-2 pl-5' >
              排泄
            </Typography>
          </Grid>
          <Paper sx={{ width: '100%', overflow: 'hidden' }} className='ms-4'>
            <TableContainer sx={{ maxHeight: 1000 }}>
              <Table stickyHeader aria-label="sticky table" size="small">
                <TableHead>
                  <TableRow>
                    {columns.map((column) => (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{ minWidth: column.minWidth }}
                      >
                        <Typography variant="subtitle2" fontWeight="bold">{column.label}</Typography>
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>

                <TableBody>
                  {rows2
                    .map((row) => {
                      return (
                        <TableRow hover role="checkbox" tabIndex={-1} key={row.activities}>
                          {columns.map((column) => {
                            const value = row[column.id];
                            return (
                              <TableCell key={column.id} align={column.align}>
                                {column.format && typeof value === 'number'
                                  ? column.format(value)
                                  : value}
                              </TableCell>
                            );
                          })}
                        </TableRow>
                      );
                    })}
                </TableBody>

              </Table>
            </TableContainer>
          </Paper>
        </Grid>
        {/* End Grid Table 2 */}

        {/* Start Grid Table 3 */}
        <Grid container spacing={2} className='pt-10' justifyContent="center">
          <Grid item xs={12} sm={12} md={12} lg={12} className='' >
            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, backgroundColor: '#CCF0FD' }} className='flex justify-start h-10 pt-2 pl-5' >
              睡眠
            </Typography>
          </Grid>
          <Paper sx={{ width: '100%', overflow: 'hidden' }} className='ms-4'>
            <TableContainer sx={{ maxHeight: 1000 }}>
              <Table stickyHeader aria-label="sticky table" size="small">
                <TableHead>
                  <TableRow>
                    {columns.map((column) => (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{ minWidth: column.minWidth }}
                      >
                        <Typography variant="subtitle2" fontWeight="bold">{column.label}</Typography>
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>

                <TableBody>
                  {rows3
                    .map((row) => {
                      return (
                        <TableRow hover role="checkbox" tabIndex={-1} key={row.activities}>
                          {columns.map((column) => {
                            const value = row[column.id];
                            return (
                              <TableCell key={column.id} align={column.align}>
                                {column.format && typeof value === 'number'
                                  ? column.format(value)
                                  : value}
                              </TableCell>
                            );
                          })}
                        </TableRow>
                      );
                    })}
                </TableBody>

              </Table>
            </TableContainer>
          </Paper>
        </Grid>
        {/* End Grid Table 3 */}

        {/* Start Grid Table 4 */}
        <Grid container spacing={2} className='pt-10' justifyContent="center">
          <Grid item xs={12} sm={12} md={12} lg={12} className='' >
            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, backgroundColor: '#CCF0FD' }} className='flex justify-start h-10 pt-2 pl-5' >
              着脱
            </Typography>
          </Grid>
          <Paper sx={{ width: '100%', overflow: 'hidden' }} className='ms-4'>
            <TableContainer sx={{ maxHeight: 1000 }}>
              <Table stickyHeader aria-label="sticky table" size="small">
                <TableHead>
                  <TableRow>
                    {columns.map((column) => (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{ minWidth: column.minWidth }}
                      >
                        <Typography variant="subtitle2" fontWeight="bold">{column.label}</Typography>
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>

                <TableBody>
                  {rows4
                    .map((row) => {
                      return (
                        <TableRow hover role="checkbox" tabIndex={-1} key={row.activities}>
                          {columns.map((column) => {
                            const value = row[column.id];
                            return (
                              <TableCell key={column.id} align={column.align}>
                                {column.format && typeof value === 'number'
                                  ? column.format(value)
                                  : value}
                              </TableCell>
                            );
                          })}
                        </TableRow>
                      );
                    })}
                </TableBody>

              </Table>
            </TableContainer>
          </Paper>
        </Grid>
        {/* End Grid Table 4 */}

        {/* Start Grid Table 5 */}
        <Grid container spacing={2} className='pt-10' justifyContent="center">
          <Grid item xs={12} sm={12} md={12} lg={12} className='' >
            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, backgroundColor: '#CCF0FD' }} className='flex justify-start h-10 pt-2 pl-5' >
              清潔・安全
            </Typography>
          </Grid>
          <Paper sx={{ width: '100%', overflow: 'hidden' }} className='ms-4'>
            <TableContainer sx={{ maxHeight: 1000 }}>
              <Table stickyHeader aria-label="sticky table" size="small">
                <TableHead>
                  <TableRow>
                    {columns.map((column) => (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{ minWidth: column.minWidth }}
                      >
                        <Typography variant="subtitle2" fontWeight="bold">{column.label}</Typography>
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>

                <TableBody>
                  {rows5
                    .map((row) => {
                      return (
                        <TableRow hover role="checkbox" tabIndex={-1} key={row.activities}>
                          {columns.map((column) => {
                            const value = row[column.id];
                            return (
                              <TableCell key={column.id} align={column.align}>
                                {column.format && typeof value === 'number'
                                  ? column.format(value)
                                  : value}
                              </TableCell>
                            );
                          })}
                        </TableRow>
                      );
                    })}
                </TableBody>

              </Table>
            </TableContainer>
          </Paper>
        </Grid>
        {/* End Grid Table 5 */}

        {/* Start Grid Table 6 */}
        <Grid container spacing={2} className='pt-10' justifyContent="center">
          <Grid item xs={12} sm={12} md={12} lg={12} className='' >
            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, backgroundColor: '#CCF0FD' }} className='flex justify-start h-10 pt-2 pl-5' >
              運動
            </Typography>
          </Grid>
          <Paper sx={{ width: '100%', overflow: 'hidden' }} className='ms-4'>
            <TableContainer sx={{ maxHeight: 1000 }}>
              <Table stickyHeader aria-label="sticky table" size="small">
                <TableHead>
                  <TableRow>
                    {columns.map((column) => (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{ minWidth: column.minWidth }}
                      >
                        <Typography variant="subtitle2" fontWeight="bold">{column.label}</Typography>
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>

                <TableBody>
                  {rows6
                    .map((row) => {
                      return (
                        <TableRow hover role="checkbox" tabIndex={-1} key={row.activities}>
                          {columns.map((column) => {
                            const value = row[column.id];
                            return (
                              <TableCell key={column.id} align={column.align}>
                                {column.format && typeof value === 'number'
                                  ? column.format(value)
                                  : value}
                              </TableCell>
                            );
                          })}
                        </TableRow>
                      );
                    })}
                </TableBody>

              </Table>
            </TableContainer>
          </Paper>
        </Grid>
        {/* End Grid Table 6 */}

        {/* Start Grid Table 7 */}
        <Grid container spacing={2} className='pt-10' justifyContent="center">
          <Grid item xs={12} sm={12} md={12} lg={12} className='' >
            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, backgroundColor: '#CCF0FD' }} className='flex justify-start h-10 pt-2 pl-5' >
              人間関係
            </Typography>
          </Grid>
          <Paper sx={{ width: '100%', overflow: 'hidden' }} className='ms-4'>
            <TableContainer sx={{ maxHeight: 1000 }}>
              <Table stickyHeader aria-label="sticky table" size="small">
                <TableHead>
                  <TableRow>
                    {columns.map((column) => (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{ minWidth: column.minWidth }}
                      >
                        <Typography variant="subtitle2" fontWeight="bold">{column.label}</Typography>
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>

                <TableBody>
                  {rows7
                    .map((row) => {
                      return (
                        <TableRow hover role="checkbox" tabIndex={-1} key={row.activities}>
                          {columns.map((column) => {
                            const value = row[column.id];
                            return (
                              <TableCell key={column.id} align={column.align}>
                                {column.format && typeof value === 'number'
                                  ? column.format(value)
                                  : value}
                              </TableCell>
                            );
                          })}
                        </TableRow>
                      );
                    })}
                </TableBody>

              </Table>
            </TableContainer>
          </Paper>
        </Grid>
        {/* End Grid Table 7 */}

        {/* Start Grid Table 8 */}
        <Grid container spacing={2} className='pt-10' justifyContent="center">
          <Grid item xs={12} sm={12} md={12} lg={12} className='' >
            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, backgroundColor: '#CCF0FD' }} className='flex justify-start h-10 pt-2 pl-5' >
              環境
            </Typography>
          </Grid>
          <Paper sx={{ width: '100%', overflow: 'hidden' }} className='ms-4'>
            <TableContainer sx={{ maxHeight: 1000 }}>
              <Table stickyHeader aria-label="sticky table" size="small">
                <TableHead>
                  <TableRow>
                    {columns.map((column) => (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{ minWidth: column.minWidth }}
                      >
                        <Typography variant="subtitle2" fontWeight="bold">{column.label}</Typography>
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>

                <TableBody>
                  {rows8
                    .map((row) => {
                      return (
                        <TableRow hover role="checkbox" tabIndex={-1} key={row.activities}>
                          {columns.map((column) => {
                            const value = row[column.id];
                            return (
                              <TableCell key={column.id} align={column.align}>
                                {column.format && typeof value === 'number'
                                  ? column.format(value)
                                  : value}
                              </TableCell>
                            );
                          })}
                        </TableRow>
                      );
                    })}
                </TableBody>

              </Table>
            </TableContainer>
          </Paper>
        </Grid>
        {/* End Grid Table 8 */}

        {/* Start Grid Table 9 */}
        <Grid container spacing={2} className='pt-10' justifyContent="center">
          <Grid item xs={12} sm={12} md={12} lg={12} className='' >
            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, backgroundColor: '#CCF0FD' }} className='flex justify-start h-10 pt-2 pl-5' >
              言葉
            </Typography>
          </Grid>
          <Paper sx={{ width: '100%', overflow: 'hidden' }} className='ms-4'>
            <TableContainer sx={{ maxHeight: 1000 }}>
              <Table stickyHeader aria-label="sticky table" size="small">
                <TableHead>
                  <TableRow>
                    {columns.map((column) => (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{ minWidth: column.minWidth }}
                      >
                        <Typography variant="subtitle2" fontWeight="bold">{column.label}</Typography>
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>

                <TableBody>
                  {rows9
                    .map((row) => {
                      return (
                        <TableRow hover role="checkbox" tabIndex={-1} key={row.activities}>
                          {columns.map((column) => {
                            const value = row[column.id];
                            return (
                              <TableCell key={column.id} align={column.align}>
                                {column.format && typeof value === 'number'
                                  ? column.format(value)
                                  : value}
                              </TableCell>
                            );
                          })}
                        </TableRow>
                      );
                    })}
                </TableBody>

              </Table>
            </TableContainer>
          </Paper>
        </Grid>
        {/* End Grid Table 9 */}

        {/* Start Grid Table 10 */}
        <Grid container spacing={2} className='pt-10' justifyContent="center">
          <Grid item xs={12} sm={12} md={12} lg={12} className='' >
            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, backgroundColor: '#CCF0FD' }} className='flex justify-start h-10 pt-2 pl-5' >
              表現
            </Typography>
          </Grid>
          <Paper sx={{ width: '100%', overflow: 'hidden' }} className='ms-4'>
            <TableContainer sx={{ maxHeight: 1000 }}>
              <Table stickyHeader aria-label="sticky table" size="small">
                <TableHead>
                  <TableRow>
                    {columns.map((column) => (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{ minWidth: column.minWidth }}
                      >
                        <Typography variant="subtitle2" fontWeight="bold">{column.label}</Typography>
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>

                <TableBody>
                  {rows10
                    .map((row) => {
                      return (
                        <TableRow hover role="checkbox" tabIndex={-1} key={row.activities}>
                          {columns.map((column) => {
                            const value = row[column.id];
                            return (
                              <TableCell key={column.id} align={column.align}>
                                {column.format && typeof value === 'number'
                                  ? column.format(value)
                                  : value}
                              </TableCell>
                            );
                          })}
                        </TableRow>
                      );
                    })}
                </TableBody>

              </Table>
            </TableContainer>
          </Paper>
        </Grid>
        {/* End Grid Table 10 */}

        {/* Start Grid */}
        <Grid container spacing={2} className='pt-10' justifyContent="center">
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, backgroundColor: '#CCF0FD' }} className='flex justify-start h-10 pt-2 pl-5' >
              発達経過記錄·特記事項
            </Typography>
          </Grid>
          <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-6' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px" } }}>
            <Typography component='div' className="pt-6">
              年度当初時所見 :
            </Typography>
            <Grid item xs={3.5} sm={3} md={1.5}>
              <TextareaAutosize
                minRows={1.5}
                maxRows={100}
              />
            </Grid>
          </Grid>
        </Grid>
        {/* End Grid */}

        {/* Start Grid */}
        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-5' sx={{ marginLeft: { xs: "35px", sm: "35px", md: "65px", lg: "65px" } }} >
          <Typography component='div' className="pt-9">
            新規・継続 :
          </Typography>
          <Grid item xs={7.5} sm={5.5} md={4} lg={2.4} sx={{ marginLeft: { xs: -3, sm: -3, md: -3 } }} className='scale-75' >
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['DatePicker']}>
                <DatePicker label="" sx={{ backgroundColor: "white" }} />
              </DemoContainer>
            </LocalizationProvider>
          </Grid>
        </Grid>
        {/* End Grid */}

        {/* Start Grid */}
        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-5' sx={{ marginLeft: { xs: "50px", sm: "50px", md: "80px" } }}>
          <Typography component='div' className="pt-6">
            総合所見 :
          </Typography>
          <Grid item xs={3.5} sm={3} md={1.5}>
            <TextareaAutosize
              minRows={1.5}
              maxRows={1.5}
            />
          </Grid>
        </Grid>
        <div className="mt-auto">
          <Grid container justifyContent="center" spacing={2} className='pt-5' sx={{ bottom: 0, width: '100%', backgroundColor: 'inherit', paddingBottom: '10px' }}>
                <Grid item>
                      <Button variant="contained" href="#" size='small' className='text-center'>
                        <Typography component="div" style={{ color: 'white', alignItems: 'center' }}>
                        戻る
                        </Typography>
                      </Button>
                </Grid>
                <Grid item>
                      <Button variant="contained" href="#" size='small' className='text-center'>
                        <Typography component="div" style={{ color: 'white', alignItems: 'center' }}>
                        修正
                        </Typography>
                      </Button>
                </Grid>
          </Grid>
        </div>

      </ContentMain >
    </>
  );
};