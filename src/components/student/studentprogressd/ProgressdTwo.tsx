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
  createData('よくかんで食べる',
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

  createData('嫌いなものでも、少しずつ食べようとする',
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

  createData('こぼすこともあるが、一人で食べる',
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

  createData('こぼしたら自分で始末しようとする',
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

  createData('箸を正しく持って食べようとする',
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

  createData('食前・食後の挨拶をする',
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

  createData('自分の食器を片づける',
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

  createData('食後のうがいをする',
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
  createData('「オシッコ」を知らせひとりで排泄する',
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

  createData('全部脱がないで排泄する',
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

  createData('排泄のあと始末をしようとする（ペーパーの正しい使い方がわかる',
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

  createData('排泄の後、手を洗う',
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

  createData('促されて、便所のはきものにはきかえる',
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
  createData('ひとりで寝ようとする',
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

  createData('一定時間眠る',
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

  createData('機嫌よく目覚める',
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

  createData('眠る前、目覚めた時にあいさつなどをする',
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
  createData('完全でないが、一人で衣服の着脱をする',
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

  createData('完全でないが、一人で前ボタンのはめはずしをする',
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

  createData('パンツ・ズボンが一人ではける',
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

  createData('一人でソックスをはく',
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

  createData('一人で、きちんと靴をはく',
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

  createData('手伝ってもらって脱いだ衣服の始末をする',
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
  createData('顔や手足が汚れたら洗ったり拭いたりする',
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

  createData('促されて、うがいや歯磨きをする',
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

  createData('衣服が汚れていることに気づき、着替えようとする',
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

  createData('鼻のかみ方を知る',
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

  createData('時には身体の異常を自分から保育者に訴える',
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

  createData('不潔なものを口に入れない',
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
  createData('危ない場所がわかり近寄らないようになる',
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
  ),createData('怖がらずに、避難訓練に参加する',
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
  ),createData('立ったあと机の下に椅子を入れる',
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
  createData('両足でピョンピョンとぶ',
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

  createData('鉄棒にぶら下がり身体を揺らす',
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

  createData('ストップの合図で止まる',
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

  createData('前の人について歩くことができる',
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

  createData('平均台の上を一人で横歩きができる',
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

  createData('マットで横転ができる',
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

  createData('５０㎝位の高さからとびおりる',
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

  createData('ボールをけることができる',
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
  createData('ボールを片手で投げる',
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
  createData('ボールを受けとめられる',
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
  createData('片足で２～３秒立つことができる',
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
  createData('三輪車にのってこげる',
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
  createData('簡単なきまりがわかる',
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

  createData('保育士等の援助によって、自分の物の置き場所 がわかる',
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

  createData('保育士等の仲立ちによって。共同の遊具などを 使って遊ぶ',
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

  createData('保育士等と一緒に簡単なごっこ遊びをする',
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

  createData('まねをして遊具を片付けたり、掃除をしたり する',
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
  createData('仲良しの友だちと遊ぶ',
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
  createData('どろんこ遊びを喜ぶ',
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

  createData('草花や小動物に関心を持つ',
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

  createData('ハサミやのりが使える',
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

  createData('色や形のちがいがわかる',
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

  createData('物の大小、多い少ないがわかる',
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

  createData('色の名前がわかる（３色位）',
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
  createData('行事が少しずつわかり参加することを喜ぶ',
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
  createData('自分で思ったことを言葉で言う',
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

  createData('身の回りの簡単な事象を言葉でいう',
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

  createData('自分の名前がきちんと言える',
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

  createData('保育士等や友だちの名前を言う',
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
];

// Example data (you can replace this with your actual data)
const rows10 = [
  createData('粘土、砂、水、積木などで好きなものを作っ て遊ぶ',
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

  createData('描いたり作ったりした物に名前をつけたり話ができる',
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

  createData('閉じた丸がかける',
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

  createData('いろいろな色をつかって描く',
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

  createData('粘土や紙をちぎる、丸める、伸ばすなどして 物の変化を楽しむ',
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

  createData('歌にあわせて手遊びしたり、リズムに合わせ て身体を動かしたりする',
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

  createData('簡単な歌をうたったり、拍子打ちをする',
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

  createData('動物や乗物などの動きを真似る',
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




export default function ProgressdTwoForm() {


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
