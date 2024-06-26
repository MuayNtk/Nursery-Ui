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

  createData('嫌いなものでも少しは食べられる',
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

  createData('箸を使って食べる',
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

  createData('完全ではないがこぼしたら自分で始末する',
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

  createData('食事の後始末ができる',
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
  createData('自分で行きたいときに行く',
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

  createData('汚さないで排泄する',
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

  createData('排泄後、紙で拭く',
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

  createData('排泄後、水を流す',
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

  createData('便所のはきものを揃えて脱ぐ ',
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

  createData('便所に入る時ノックをする',
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
  createData('言葉かけにより午睡をする',
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

  createData('機嫌よく起きる',
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

  createData('午睡の準備や後片付けを手伝おうとする',
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
  createData('衣服の前後、裏表を知って一人で着脱する',
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

  createData('一人で前ボタンのはめ外しがきちんとできる',
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

  createData('脱いだ衣服をきちんと後始末する',
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

  createData('靴の左右が大体わかる',
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

  createData('促されて衣服の調節をしようとする',
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
  createData('食前、排泄後、遊びの後の手洗いをきちんと する',
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

  createData('洗った後は必ず拭く',
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

  createData('鼻汁をかむのが上手になり、そのつど行う',
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

  createData('衣服が汚れたら自分で着替えようとする',
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

  createData('うがいや歯磨きを一人でしようとする',
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

  createData('時には身体の異常を自分から保育士等に訴える',
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

  createData('危ない場所に近づいたり危険な遊びをするこ とが少なくなる',
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

  createData('物の危なくない使い方ができる',
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

  createData('注意された場所に近づかない',
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

  createData('避難訓練など保育士等の指示に従って行動する',
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

  createData('交通のきまりを知る',
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
  createData('合図にあわせて走る、止まるが確実になる',
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

  createData('音楽に合わせて簡単な体操をする',
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

  createData('平均台を一人で前歩きができる',
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

  createData('連続して片足とびができる',
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

  createData('補助されてスキップをする',
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

  createData('補助されて前転をする',
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

  createData('了棒で足抜きまわりができる',
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

  createData('長縄の波を眺び越えることができる',
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

  createData('ボールを的に向かって投げる',
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

  createData('水面上に顔が出る深さを叶うことができる(プール)',
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

  createData('絵本を 1 ページずつめくれる',
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
  createData('自分の持ち物や身のまわりの始末をひとりでける',
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

  createData('簡単なさまりや順番、交代がわかる',
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

  createData('友だちといろいろなごっこ遊びをする',
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

  createData('手伝いをすることを喜ぶ',
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

  createData('年上の友だちに遊んでもらったり、まねて遊んだりする',
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

  createData('地域の人と触れ合うことを喜ぶ',
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
  createData('身近な動植物等を、見たり、触れたり、試したりする',
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

  createData('天気の変化に気づく',
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

  createData('物の大小、多少の比較をする',
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

  createData('身のまわりの物の色の名称がわかる (5一7)',
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

  createData('使ったおもちゃなどを元の場所に片付ける',
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

  createData('身近な用具や器具に関心を持つ',
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
  createData('自分で思ったことや感じたことを言葉にする',
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

  createData('保育士等にして欲しいこと困ったことを訴えたり「なぜ」「どうして」などの質問をする',
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

  createData('脆拶や返事をしたり、生活や遊びに必要な言茶を使う',
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

  createData('興味をもった言葉を、面白がって開いたり言ったりする',
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
  createData('絵本や童話などの簡単な内容がわかり、イメージをもって楽しんで開く',
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

  createData('構成素材 (粘土、砂等) で自由に思ったものを作ったり、 こわしたり、 試したりする',
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

  createData('絵の具やパス、クレヨンを使って好きなように描く',
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

  createData('形の組み合わせや色の選択が豊かになる',
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

  createData('みんなといっしょに楽しく歌う',
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

  createData('簡単なリズム合奏をする',
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

  createData('身近な物や動物等の動きをまねて身体で表す',
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

export default function ProgressdThreeForm() {

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