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
  align?: 'right' | 'center';
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: 'activities', label: '主な活動', minWidth: 600 },
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

// Example data (you can replace this with your actual data)
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
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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

  createData('好き嫌いをしないで何でも食べる',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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

  createData('正しい姿勢で食べる',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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

  createData('こぼしたら自分で始末する',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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

  createData('食後の休息がとれるようになる',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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

// Example data (you can replace this with your actual data)
const rows2 = [
  createData('自分で行きたいときに行く',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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

  createData('排港後の手洗いをきちんとする',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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

  createData('使所のはきものを正しく揃える',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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

  createData('便器を汚さないで使う',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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

  createData('使所に入る時ノックをする',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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

// Example data (you can replace this with your actual data)
const rows3 = [
  createData('静かに午腰をする',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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

  createData('早く目覚めたり、眠れなかったときは静かに横になって休息する',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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

  createData('午種の準備や後片付けの手伝いをする',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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

// Example data (you can replace this with your actual data)
const rows4 = [
  createData('衣服の着脱を順庁よく行う',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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

  createData('帽子の前後を知ってかぶる',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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

  createData('聴の左右をまちがわずにはく',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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

  createData('脱いだ衣服はていねいにたたみ、片付ける',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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

  createData('乱れた衣服を直そうとする',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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

  createData('衣服の調節をしようとする',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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

// Example data (you can replace this with your actual data)
const rows5 = [
  createData('手の裏表や指の間を注意して洗 い、きれいに拭く',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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

  createData('汚れた衣服を進んで着准える',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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

  createData('うがいの意味を知り、進んでうが いをする',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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

  createData('歯の大切さを知り、歯磨きを丁事 にする',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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

  createData('鼻水が出たら自分でかむ',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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

  createData('自分から身体の異常を訴える',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
  createData('危険な物や場所がわかり、遊員・用員などを気をつけて使う',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
  ), createData('水遊びの危険を知り指示に従って 遊ぶ',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
  ), createData('交通ルールを守る',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
  createData('避難訓練では指示に従って機敏に 行動する',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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

// Example data (you can replace this with your actual data)
const rows6 = [
  createData('障害物を避けて走る',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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

  createData('平均台の上で方向転換ができる',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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

  createData('リズムに合わせて、スキップやギ ャロップができる',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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

  createData('前転だ正しくできる',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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

  createData('前まわりをする(鉄持)',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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

  createData('尻上がりで足をかけ後まわりをする(鉄棒)',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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

  createData('走って跳び箱にのぼり手をひろげて両足を揃えておりる',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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

  createData('細跳びを使って南足眺びをする',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
  createData('ケンパーができる',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
  createData('ポールをついて取ることができる',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
  createData('水を怖がらずに顔をつけることがる(プール)',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
  createData('困結びができる',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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

// Example data (you can replace this with your actual data)
const rows7 = [
  createData('共同の物を大切にしてゆずり合う',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
  createData('他人に迷戒をかけたら謝る',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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

// Example data (you can replace this with your actual data)
const rows8 = [
  createData('動征物を飼育観祭することを喜び、その成長に関心を持つ',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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

  createData('身近にある用具や器員等を正しく使う(のリ・ハサミ・セロテーブ・楽器)',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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

  createData('季節の移り変わりに気づく',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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

  createData('鏡の使い方がわかる(清潔、身だしなみ)',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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

  createData('前後、左右、上下、遠近等位置関係がわかる',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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

  createData('生活時間に関心を持ち、守ろうとする',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
  createData('5までの対応ができる',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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

// Example data (you can replace this with your actual data)
const rows9 = [
  createData('簡単な伝言、質問、応答をする',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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

  createData('区だちとの会話を楽しむ',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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

  createData('合図や指示の言葉がわかり指示通りの行動をする',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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

  createData('絵本や童話などを読み聞かせてもらい、その内容がわかりイメージを広げて楽しな',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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

  createData('絵本や紙芝居を楽しんでみたり、聞いたりし、 繰り返しのある言葉の模倣を楽しむ',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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

  createData('さまざまな終験の中で、生活に必要な標識や記号に関心を持つ',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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

// Example data (you can replace this with your actual data)
const rows10 = [
  createData('見たり聞いたり想像したことを高んで描く',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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

  createData('自分のイメージや目的にあった材料を選び、いろいろ工夫する',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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

  createData('いろいろな素材や、用具を使って作ったもので遊ぶ',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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

  createData('自然な声でうたう',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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

  createData('曲に合わせて自由に身体表現をする',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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

  createData('レコードや友だちの演奏を静かに随く',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }}className="scale-75">
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


export default function ProgressdFourForm() {


  return (

    <>
      <ContentMain >
        {/* Start Facility Director  */}
        <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-7  ">
          <Grid item xs={2} sm={1.5} md={1} lg={1} >
            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, }} >
              施設長 :
            </Typography>
          </Grid>
          <Grid item xs={2} sm={1.5} md={1} lg={1} >
            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, fontWeight: 'bold', }} >
              濃部
            </Typography>
          </Grid>
          <Grid item xs={2} sm={1.5} md={1} lg={1} >
            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, fontWeight: 'bold', }} >
              圭子
            </Typography>
          </Grid>
        </Grid >
        {/* End Facility Director  */}

        {/* Start director  */}
        <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-7 ">
          <Grid item xs={2} sm={1.5} md={1} lg={1} >
            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, }} >
              主任 :
            </Typography>
          </Grid>
          <Grid item xs={2} sm={1.5} md={1} lg={1} >
            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, fontWeight: 'bold', }} >
              渡部
            </Typography>
          </Grid>
          <Grid item xs={2} sm={1.5} md={1} lg={1} >
            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, fontWeight: 'bold', }} >
              史朗
            </Typography>
          </Grid>
        </Grid >
        {/* End director  */}

        {/* Start Responsible */}
        <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-7 ">
          <Grid item xs={2} sm={1.5} md={1} lg={1} >
            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, }} >
              担任 :
            </Typography>
          </Grid>
          <Grid item xs={2} sm={1.5} md={1} lg={1} >
            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, fontWeight: 'bold', }} >
              中川
            </Typography>
          </Grid>
          <Grid item xs={2} sm={1.5} md={1} lg={1} >
            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, fontWeight: 'bold', }} >
              康嘉
            </Typography>
          </Grid>
        </Grid >

        {/* End Responsible  */}

        {/* Start Child's name */}
        <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-7 ">
          <Grid item xs={2} sm={1.5} md={1} lg={1} >
            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, }} >
              児童名 :
            </Typography>
          </Grid>
          <Grid item xs={2} sm={1.5} md={1} lg={1} >
            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, fontWeight: 'bold', }} >
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
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
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
                <MenuItem value={1}>10</MenuItem>
                <MenuItem value={2}>20</MenuItem>
                <MenuItem value={3}>30</MenuItem>
                <MenuItem value={4}>40</MenuItem>
              </Select>
            </FormControl>
            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, marginRight: { xs: 15, sm: 2, md: 10, lg: 7, } }} className="pt-3">
              日
            </Typography>
          </Grid>
        </Grid>
        {/* end date of birth: */}

        {/* Start Grid Table */}
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
        {/* End Grid Table */}

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
          <Grid item xs={12} sm={12} md={12} lg={11.6}>
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
        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-5' sx={{ marginLeft: { xs: "45px", sm: "45px", md: "75px" } }} >
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
        {/* End Grid */}

        <Grid container direction="row" justifyContent="center" alignItems="center" className="pt-5 pb-5">
          <Button variant="contained" href="#" size='small' className='w-32 text-center'>
            <Typography variant="body1" style={{ color: 'white', alignItems: 'center' }} >
              Submit
            </Typography>
          </Button>
        </Grid>

      </ContentMain >
    </>
  );
};
