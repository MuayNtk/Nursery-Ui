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
  { id: 'activities', label: '主な活動', minWidth: 450 },
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
  createData('濱千代智宏',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>○</MenuItem>
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
        <MenuItem value={1}>○</MenuItem>
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
        <MenuItem value={1}>○</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
  ),

  createData('コップを一人で持って飲む',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>○</MenuItem>
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
        <MenuItem value={1}>○</MenuItem>
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
        <MenuItem value={1}>○</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
  ),

  createData('スプーンを使って一人で食べる',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>○</MenuItem>
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
        <MenuItem value={1}>○</MenuItem>
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
        <MenuItem value={1}>○</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
  ),

  createData('こぼしながらも、最後まで一人で食べる',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>○</MenuItem>
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
        <MenuItem value={1}>○</MenuItem>
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
        <MenuItem value={1}>○</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
  ),

  createData('好き嫌いがはっきりしているが、促されて食べる',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>○</MenuItem>
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
        <MenuItem value={1}>○</MenuItem>
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
        <MenuItem value={1}>○</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
  ),

  createData('菓子などの包み紙を取って食べられる',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>○</MenuItem>
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
        <MenuItem value={1}>○</MenuItem>
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
        <MenuItem value={1}>○</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
  ),

  createData('自分の食物と他人の食物との区別がつく',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>○</MenuItem>
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
        <MenuItem value={1}>○</MenuItem>
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
        <MenuItem value={1}>○</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
  ),

  createData('食物の揃うのを待ち挨拶をして食べる',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>○</MenuItem>
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
        <MenuItem value={1}>○</MenuItem>
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
        <MenuItem value={1}>○</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
  ),

  createData('保育士等の援助により食前の手洗いをする',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>○</MenuItem>
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
        <MenuItem value={1}>○</MenuItem>
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
        <MenuItem value={1}>○</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
  ),

  createData('促されて食後自分で手や顔を拭く',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>○</MenuItem>
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
        <MenuItem value={1}>○</MenuItem>
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
        <MenuItem value={1}>○</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
  ),

  createData('食べ物の名前に興味を持つ',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>○</MenuItem>
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
        <MenuItem value={1}>○</MenuItem>
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
        <MenuItem value={1}>○</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
  ),
];
// End rows table 1

// Start rows table 2
const rows2 = [
  createData('もらしたことを知らせる',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>○</MenuItem>
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
        <MenuItem value={1}>○</MenuItem>
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
        <MenuItem value={1}>○</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
  ),

  createData('排泄を予め知らせる(18ヶ月)',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>○</MenuItem>
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
        <MenuItem value={1}>○</MenuItem>
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
        <MenuItem value={1}>○</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
  ),

  createData('おむつがとれる(19ヶ月)',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>○</MenuItem>
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
        <MenuItem value={1}>○</MenuItem>
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
        <MenuItem value={1}>○</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
  ),

  createData('便器(オマル)で排泄する',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>○</MenuItem>
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
        <MenuItem value={1}>○</MenuItem>
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
        <MenuItem value={1}>○</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
  ),

  createData('パンツをおろしてもらい、ひとりでする',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>○</MenuItem>
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
        <MenuItem value={1}>○</MenuItem>
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
        <MenuItem value={1}>○</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
  ),

  createData('排泄後、保育士等に知らせて拭いてもらう',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>○</MenuItem>
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
        <MenuItem value={1}>○</MenuItem>
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
        <MenuItem value={1}>○</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
  ),
];
// End rows table 2

// Start rows table 3
const rows3 = [
  createData('午睡の時間が一定してくる',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>○</MenuItem>
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
        <MenuItem value={1}>○</MenuItem>
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
        <MenuItem value={1}>○</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
  ),

  createData('保育士等がそばにいると安心して眠れる',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>○</MenuItem>
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
        <MenuItem value={1}>○</MenuItem>
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
        <MenuItem value={1}>○</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
  ),

  createData('機嫌よく目覚める',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>○</MenuItem>
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
        <MenuItem value={1}>○</MenuItem>
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
        <MenuItem value={1}>○</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
  ),

  createData('自分の布団がわかる',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>○</MenuItem>
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
        <MenuItem value={1}>○</MenuItem>
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
        <MenuItem value={1}>○</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
  ),
];
// End rows table 3

// Start rows table 4
const rows4 = [
  createData('一人で、パンツの上げ下げをする',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>○</MenuItem>
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
        <MenuItem value={1}>○</MenuItem>
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
        <MenuItem value={1}>○</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
  ),

  createData('手伝ってもらって衣服を脱いだり、パンツをはく',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>○</MenuItem>
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
        <MenuItem value={1}>○</MenuItem>
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
        <MenuItem value={1}>○</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
  ),

  createData('スナップを自分ではずす',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>○</MenuItem>
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
        <MenuItem value={1}>○</MenuItem>
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
        <MenuItem value={1}>○</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
  ),

  createData('嫌がらずに帽子をかぶる',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>○</MenuItem>
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
        <MenuItem value={1}>○</MenuItem>
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
        <MenuItem value={1}>○</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
  ),

  createData('一人で靴を脱ぐ(2歳6ヶ月)',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>○</MenuItem>
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
        <MenuItem value={1}>○</MenuItem>
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
        <MenuItem value={1}>○</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
  ),

  createData('一人で靴を履こうとする(2歳6ヶ月)',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>○</MenuItem>
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
        <MenuItem value={1}>○</MenuItem>
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
        <MenuItem value={1}>○</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
  ),
];
// End rows table 4

// Start rows table 5
const rows5 = [
  createData('促されて自分で手を洗ったり拭こうとする',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>○</MenuItem>
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
        <MenuItem value={1}>○</MenuItem>
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
        <MenuItem value={1}>○</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
  ),

  createData('顔、手足のきれい、汚いがわかり、洗ってもらうことを嫌がらない',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>○</MenuItem>
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
        <MenuItem value={1}>○</MenuItem>
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
        <MenuItem value={1}>○</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
  ),

  createData('鼻汁の出ていることを知らせ拭いてもらう',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>○</MenuItem>
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
        <MenuItem value={1}>○</MenuItem>
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
        <MenuItem value={1}>○</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
  ),

  createData('尋ねると、身体の異常を指さし等で知らせることができる',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>○</MenuItem>
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
        <MenuItem value={1}>○</MenuItem>
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
        <MenuItem value={1}>○</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
  ),

  createData('制止・禁止の言葉がわかる',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>○</MenuItem>
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
        <MenuItem value={1}>○</MenuItem>
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
        <MenuItem value={1}>○</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
  ),

  createData('物を持って、前を見て歩くことができる',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>○</MenuItem>
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
        <MenuItem value={1}>○</MenuItem>
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
        <MenuItem value={1}>○</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
  ),
];
// End rows table 5

// Start rows table 6
const rows6 = [
  createData('その場で両足跳びができる',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>○</MenuItem>
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
        <MenuItem value={1}>○</MenuItem>
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
        <MenuItem value={1}>○</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
  ),

  createData('高い所(50m)に昇ったり降りたりできる',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>○</MenuItem>
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
        <MenuItem value={1}>○</MenuItem>
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
        <MenuItem value={1}>○</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
  ),

  createData('手すりを持って階段の昇り降りができる',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>○</MenuItem>
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
        <MenuItem value={1}>○</MenuItem>
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
        <MenuItem value={1}>○</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
  ),

  createData('20分くらい続けて歩ける。',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>○</MenuItem>
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
        <MenuItem value={1}>○</MenuItem>
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
        <MenuItem value={1}>○</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
  ),

  createData('補助されて平均台の上を横歩きできる',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>○</MenuItem>
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
        <MenuItem value={1}>○</MenuItem>
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
        <MenuItem value={1}>○</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
  ),

  createData('両手でボールを持って上手投げで投げられる',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>○</MenuItem>
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
        <MenuItem value={1}>○</MenuItem>
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
        <MenuItem value={1}>○</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
  ),

  createData('転がってくるボールを受け止められる',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>○</MenuItem>
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
        <MenuItem value={1}>○</MenuItem>
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
        <MenuItem value={1}>○</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
  ),

  createData('走ることができる',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>○</MenuItem>
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
        <MenuItem value={1}>○</MenuItem>
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
        <MenuItem value={1}>○</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
  ),
];
// End rows table 6

// Start rows table 7
const rows7 = [
  createData('保育士等に相手になってもらって、いろいろ物でつもり遊びをする',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>○</MenuItem>
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
        <MenuItem value={1}>○</MenuItem>
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
        <MenuItem value={1}>○</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
  ),

  createData('自分の物と、他人の物との区別をする',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>○</MenuItem>
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
        <MenuItem value={1}>○</MenuItem>
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
        <MenuItem value={1}>○</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
  ),

  createData('いつも一緒にいる子どもに会うと喜ぶ',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>○</MenuItem>
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
        <MenuItem value={1}>○</MenuItem>
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
        <MenuItem value={1}>○</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
  ),

  createData('保育士等に見守られながら、一人遊びをする',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>○</MenuItem>
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
        <MenuItem value={1}>○</MenuItem>
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
        <MenuItem value={1}>○</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
  ),

  createData('保育士等と一緒に片づけができる',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>○</MenuItem>
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
        <MenuItem value={1}>○</MenuItem>
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
        <MenuItem value={1}>○</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
  ),
];
// End rows table 7

// Start rows table 8
const rows8 = [
  createData('スコップやバケツなどの道具を使って、水や砂などで遊ぼうとる。',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>○</MenuItem>
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
        <MenuItem value={1}>○</MenuItem>
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
        <MenuItem value={1}>○</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
  ),

  createData('草花や小動物、昆虫を見て興味を示す',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>○</MenuItem>
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
        <MenuItem value={1}>○</MenuItem>
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
        <MenuItem value={1}>○</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
  ),

  createData('日常用具に興味を持ち何でもさわってみる',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>○</MenuItem>
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
        <MenuItem value={1}>○</MenuItem>
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
        <MenuItem value={1}>○</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
  ),

  createData('積木等を積み上げて遊ぶ',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>○</MenuItem>
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
        <MenuItem value={1}>○</MenuItem>
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
        <MenuItem value={1}>○</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
  ),

  createData('散歩に行くことを喜ぶ',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>○</MenuItem>
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
        <MenuItem value={1}>○</MenuItem>
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
        <MenuItem value={1}>○</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
  ),
];
// End rows table 8

// Start rows table 9
const rows9 = [
  createData('片言を話す',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>○</MenuItem>
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
        <MenuItem value={1}>○</MenuItem>
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
        <MenuItem value={1}>○</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
  ),

  createData('保育士等の言葉が理解できる',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>○</MenuItem>
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
        <MenuItem value={1}>○</MenuItem>
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
        <MenuItem value={1}>○</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
  ),

  createData('名前を呼ばれたら、言葉で返事ができる',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>○</MenuItem>
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
        <MenuItem value={1}>○</MenuItem>
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
        <MenuItem value={1}>○</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
  ),

  createData('生活に必要な簡単な言葉が言える(おはよう・さようなら)',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>○</MenuItem>
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
        <MenuItem value={1}>○</MenuItem>
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
        <MenuItem value={1}>○</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
  ),

  createData('友だちや保育士等の名前が言える',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>○</MenuItem>
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
        <MenuItem value={1}>○</MenuItem>
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
        <MenuItem value={1}>○</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
  ),

  createData('身体の部位を指さして言える(目・・耳・手·足·腹)',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>○</MenuItem>
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
        <MenuItem value={1}>○</MenuItem>
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
        <MenuItem value={1}>○</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
  ),
];
// End rows table 9

// Start rows table 10
const rows10 = [
  createData('リズムにのって、からだを動かす',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>○</MenuItem>
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
        <MenuItem value={1}>○</MenuItem>
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
        <MenuItem value={1}>○</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
  ),

  createData('簡単な歌の一部が歌える',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>○</MenuItem>
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
        <MenuItem value={1}>○</MenuItem>
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
        <MenuItem value={1}>○</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
  ),

  createData('簡単な楽器で遊ぶ',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>○</MenuItem>
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
        <MenuItem value={1}>○</MenuItem>
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
        <MenuItem value={1}>○</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
  ),

  createData('保育士等と一緒に模倣遊びをする',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>○</MenuItem>
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
        <MenuItem value={1}>○</MenuItem>
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
        <MenuItem value={1}>○</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
  ),

  createData('円錯のなぐりがきができる',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>○</MenuItem>
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
        <MenuItem value={1}>○</MenuItem>
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
        <MenuItem value={1}>○</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
  ),

  createData('紙をちぎったり、はがしたりする',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>○</MenuItem>
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
        <MenuItem value={1}>○</MenuItem>
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
        <MenuItem value={1}>○</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
  ),

  createData('粘土をちぎったり丸めたりする',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>○</MenuItem>
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
        <MenuItem value={1}>○</MenuItem>
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
        <MenuItem value={1}>○</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
  ),

  createData('積木や組木を組み立てたり、くずしたりする',
    <FormControl size="small" sx={{ width: 70, marginLeft: { xs: 0, sm: 0, md: 0 } }} className="scale-75">
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>○</MenuItem>
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
        <MenuItem value={1}>○</MenuItem>
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
        <MenuItem value={1}>○</MenuItem>
        <MenuItem value={2}>／</MenuItem>
        <MenuItem value={3}>△</MenuItem>
      </Select>
    </FormControl>
  ),

];
// End rows table 10

export default function ProgressdOneForm() {

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
              清潔.安全
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
        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-5' sx={{ marginLeft: { xs: "45px", sm: "45px", md: "75px" } }} >
          <Typography component='div' className="pt-9">
            新規.継続 :
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