import ContentMain from "../../content/Content";
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Button, FormControl, Grid, MenuItem, Select, TextField, TextareaAutosize, Typography } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

interface Column {
  id: 'name' | 'classroom' | 'date';
  label: string;
  minWidth?: number;
  align?: 'right' | 'center';
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: 'name', label: '主な活動', minWidth: 500, },
  { id: 'classroom', label: '標準月令', minWidth: 150, },
  { id: 'date', label: '形成月令', minWidth: 150, align: 'center', },

];

interface Data {
  name: string;
  classroom: string;
  date: JSX.Element;

}

function createData(
  name: string,
  classroom: string,
  date: JSX.Element,

): Data {
  return { name, classroom, date };
}

// Example data (you can replace this with your actual data)
// start table 1
const rows = [
  createData('つぶしがゆなどドロドしたものを食べる(離乳の開始期)', '5',
    <FormControl size='small' className=" " >
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }} className=''>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
      </Select>
    </FormControl>
    ,),
  createData('パンがゆ、野菜、白身魚の裏ごしを食べる', '6-7',
    <FormControl sx={{ m: 1, minWidth: 20, }} size='small' className=" " >
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
      </Select>
    </FormControl>
    ,),
  createData('軟飯や野菜の細かく切ったものを食べる', '9-11',
    <FormControl sx={{ m: 1, minWidth: 20, }} size='small' className=" " >
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
      </Select>
    </FormControl>
    ,),
  createData('幼児食の細かく切ったものを食べる', '12-15',
    <FormControl sx={{ m: 1, minWidth: 20, }} size='small' className=" " >
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
      </Select>
    </FormControl>
    ,),
  createData('自分で食べようとしたり、飲もうとして手を伸ばす', '7',
    <FormControl sx={{ m: 1, minWidth: 20, }} size='small' className=" " >
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
      </Select>
    </FormControl>
    ,),
  createData('ささえるとコップで飲める', '10',
    <FormControl sx={{ m: 1, minWidth: 20, }} size='small' className=" " >
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
      </Select>
    </FormControl>
    ,),
  createData('こぼすが、コップやスプーンをもって食べようとする', '12',
    <FormControl sx={{ m: 1, minWidth: 20, }} size='small' className=" " >
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
      </Select>
    </FormControl>
    ,),
  createData('こぽすがコップやスプーンをもって食べる', '13-15',
    <FormControl sx={{ m: 1, minWidth: 20, }} size='small' className=" " >
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
      </Select>
    </FormControl>
    ,),
  createData('促されると挨拶の動作ができる', '12-15',
    <FormControl sx={{ m: 1, minWidth: 20, }} size='small' className=" " >
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
      </Select>
    </FormControl>
    ,),
  createData('促されると食後、自分で口のまわりを拭こうとする', '13-15',
    <FormControl sx={{ m: 1, minWidth: 20, }} size='small' className=" " >
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
      </Select>
    </FormControl>
    ,),
];
// End table 1


// start table 2
const rows2 = [
  createData('おむつがぬれたら泣き、取り替えてもらうと泣きやむ', '4-6',
    <FormControl sx={{ m: 1, minWidth: 20, }} size='small' className=" " >
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
      </Select>
    </FormControl>
    ,),
  createData('パンがゆ、野菜、白身魚の裏ごしを食べる', '6-7',
    <FormControl sx={{ m: 1, minWidth: 20, }} size='small' className=" " >
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
      </Select>
    </FormControl>
    ,),
  createData('おむつをぬらすこともあるが、支えられて便器に腰かけると排便、排尿する', '11',
    <FormControl sx={{ m: 1, minWidth: 20, }} size='small' className=" " >
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
      </Select>
    </FormControl>
    ,),
  createData('「シーは？」の促しに意思表示ができる', '13-15',
    <FormControl sx={{ m: 1, minWidth: 20, }} size='small' className=" " >
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
      </Select>
    </FormControl>
    ,),

];
// End table 2

// start table 3
const rows3 = [
  createData('機嫌よく眠る', '6-10',
    <FormControl sx={{ m: 1, minWidth: 20, }} size='small' className=" " >
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
      </Select>
    </FormControl>
    ,),
  createData('機嫌よく目覚める', '10',
    <FormControl sx={{ m: 1, minWidth: 20, }} size='small' className=" " >
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
      </Select>
    </FormControl>
    ,),
  createData('午前・午後の２回睡になる  ', '10',
    <FormControl sx={{ m: 1, minWidth: 20, }} size='small' className=" " >
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
      </Select>
    </FormControl>
    ,),
  createData('１回睡になり、時間も一定してくる', '12-15',
    <FormControl sx={{ m: 1, minWidth: 20, }} size='small' className=" " >
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
      </Select>
    </FormControl>
    ,),
  createData('手足を動かし、着脱の誘いかけに応じる ', '11-15',
    <FormControl sx={{ m: 1, minWidth: 20, }} size='small' className=" " >
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
      </Select>
    </FormControl>
    ,),

];
// End table 3

// start table 4
const rows4 = [
  createData('寝ていて自由に首の向きをかえる', '2',
    <FormControl sx={{ m: 1, minWidth: 20, }} size='small' className=" " >
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
      </Select>
    </FormControl>
    ,),
  createData('首がすわる', '3',
    <FormControl sx={{ m: 1, minWidth: 20, }} size='small' className=" " >
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
      </Select>
    </FormControl>
    ,),
  createData('腹ばいにすると両手をつっぱる  ', '5',
    <FormControl sx={{ m: 1, minWidth: 20, }} size='small' className=" " >
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
      </Select>
    </FormControl>
    ,),
  createData('寝返りをする', '6',
    <FormControl sx={{ m: 1, minWidth: 20, }} size='small' className=" " >
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
      </Select>
    </FormControl>
    ,),
  createData('膝の上でピョンピョンはねる ', '7',
    <FormControl sx={{ m: 1, minWidth: 20, }} size='small' className=" " >
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
      </Select>
    </FormControl>
    ,),
  createData('一人ですわる ', '7-8',
    <FormControl sx={{ m: 1, minWidth: 20, }} size='small' className=" " >
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
      </Select>
    </FormControl>
    ,),
  createData('這う', '7-10',
    <FormControl sx={{ m: 1, minWidth: 20, }} size='small' className=" " >
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
      </Select>
    </FormControl>
    ,),
  createData('自分でつかまり立ちをする', '9',
    <FormControl sx={{ m: 1, minWidth: 20, }} size='small' className=" " >
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
      </Select>
    </FormControl>
    ,),
  createData('掴まらないで床からの立ち上がりができる', '11',
    <FormControl sx={{ m: 1, minWidth: 20, }} size='small' className=" " >
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
      </Select>
    </FormControl>
    ,),
  createData('一人で２，３歩あるく（初歩）', '12-15',
    <FormControl sx={{ m: 1, minWidth: 20, }} size='small' className=" " >
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
      </Select>
    </FormControl>
    ,),
  createData('腕でバランスを取ってヨチヨチ歩きができる', '13-15',
    <FormControl sx={{ m: 1, minWidth: 20, }} size='small' className=" " >
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
      </Select>
    </FormControl>
    ,),

];
// End table 4

// start table 5
const rows5 = [
  createData('動くものをじっとみつめる', '2',
    <FormControl sx={{ m: 1, minWidth: 20, }} size='small' className=" " >
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
      </Select>
    </FormControl>
    ,),
  createData('音のする方をみる', '3',
    <FormControl sx={{ m: 1, minWidth: 20, }} size='small' className=" " >
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
      </Select>
    </FormControl>
    ,),
  createData('手に触れたものを、握る', '2-3',
    <FormControl sx={{ m: 1, minWidth: 20, }} size='small' className=" " >
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
      </Select>
    </FormControl>
    ,),
  createData('手に触れたものを、口に運ぶ', '3-4',
    <FormControl sx={{ m: 1, minWidth: 20, }} size='small' className=" " >
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
      </Select>
    </FormControl>
    ,),
  createData('物を振ったり、打ちつけたりして遊ぶ', '4-5',
    <FormControl sx={{ m: 1, minWidth: 20, }} size='small' className=" " >
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
      </Select>
    </FormControl>
    ,),
];
// End table 5

// start table 6
const rows6 = [
  createData('玩具を一方の手から、他方に持ちかえる', '6',
    <FormControl sx={{ m: 1, minWidth: 20, }} size='small' className=" " >
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
      </Select>
    </FormControl>
    ,),
  createData('容器のふたを開けたり閉めたりする', '8',
    <FormControl sx={{ m: 1, minWidth: 20, }} size='small' className=" " >
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
      </Select>
    </FormControl>
    ,),
  createData('積み木を積もうとする', '9',
    <FormControl sx={{ m: 1, minWidth: 20, }} size='small' className=" " >
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
      </Select>
    </FormControl>
    ,),
  createData('両手に持ったものを打ち合わせて遊ぶ', '9-10',
    <FormControl sx={{ m: 1, minWidth: 20, }} size='small' className=" " >
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
      </Select>
    </FormControl>
    ,),
  createData('干しぶどうくらいの大きさの物をつまむ', '9-10',
    <FormControl sx={{ m: 1, minWidth: 20, }} size='small' className=" " >
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
      </Select>
    </FormControl>
    ,),
  createData('ラッパを吹いたり音の出るものを楽しむ', '9-10',
    <FormControl sx={{ m: 1, minWidth: 20, }} size='small' className=" " >
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
      </Select>
    </FormControl>
    ,),
  createData('音楽を聞いて、手足、首などを動かす', '10',
    <FormControl sx={{ m: 1, minWidth: 20, }} size='small' className=" " >
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
      </Select>
    </FormControl>
    ,),
  createData('物を容器に入れたり落としたりして遊ぶ', '10-11',
    <FormControl sx={{ m: 1, minWidth: 20, }} size='small' className=" " >
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
      </Select>
    </FormControl>
    ,),
  createData('紙やぶりを喜ぶ', '11-15',
    <FormControl sx={{ m: 1, minWidth: 20, }} size='small' className=" " >
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
      </Select>
    </FormControl>
    ,),
  createData('砂遊びに興味を持つ', '11-15',
    <FormControl sx={{ m: 1, minWidth: 20, }} size='small' className=" " >
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
      </Select>
    </FormControl>
    ,),
  createData('水遊びを喜ぶ', '11-15',
    <FormControl sx={{ m: 1, minWidth: 20, }} size='small' className=" " >
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
      </Select>
    </FormControl>
    ,),
  createData('斜め直線状のなぐりがきをする', '12-15',
    <FormControl sx={{ m: 1, minWidth: 20, }} size='small' className=" " >
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
      </Select>
    </FormControl>
    ,),
  createData('低い台や階段等を登って遊ぶ', '12-15',
    <FormControl sx={{ m: 1, minWidth: 20, }} size='small' className=" " >
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
      </Select>
    </FormControl>
    ,),
  createData('箱車やダンボール等を押したり引っぱったしてあそぶ', '13-15',
    <FormControl sx={{ m: 1, minWidth: 20, }} size='small' className=" " >
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
      </Select>
    </FormControl>
    ,),
  createData('ボールを転がしたり、追って遊ぶ', '13-15',
    <FormControl sx={{ m: 1, minWidth: 20, }} size='small' className=" " >
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
      </Select>
    </FormControl>
    ,),
];
// End table 6

// start table 7
const rows7 = [
  createData('笑ったり、話しかけたりすると笑いかえす', '3-4',
    <FormControl sx={{ m: 1, minWidth: 20, }} size='small' className=" " >
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
      </Select>
    </FormControl>
    ,),
  createData('喜び、怒り、恐れなどの情緒が現れてくる', '5',
    <FormControl sx={{ m: 1, minWidth: 20, }} size='small' className=" " >
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
      </Select>
    </FormControl>
    ,),
  createData('母親と他人の区別ができる', '5',
    <FormControl sx={{ m: 1, minWidth: 20, }} size='small' className=" " >
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
      </Select>
    </FormControl>
    ,),
  createData('いない、いないバアーを喜ぶ', '7',
    <FormControl sx={{ m: 1, minWidth: 20, }} size='small' className=" " >
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
      </Select>
    </FormControl>
    ,),
  createData('持っているものを取られると不快を示す', '8',
    <FormControl sx={{ m: 1, minWidth: 20, }} size='small' className=" " >
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
      </Select>
    </FormControl>
    ,),
  createData('身近な人から話しかけてもらうことを喜ぶ', '11',
    <FormControl sx={{ m: 1, minWidth: 20, }} size='small' className=" " >
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
      </Select>
    </FormControl>
    ,),
  createData('友だちと一緒にいることを好む', '12',
    <FormControl sx={{ m: 1, minWidth: 20, }} size='small' className=" " >
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
      </Select>
    </FormControl>
    ,),
  createData('人まねが盛んになる', '10',
    <FormControl sx={{ m: 1, minWidth: 20, }} size='small' className=" " >
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
      </Select>
    </FormControl>
    ,),
  createData('ほめられると同じ動作を繰り返す', '12',
    <FormControl sx={{ m: 1, minWidth: 20, }} size='small' className=" " >
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
      </Select>
    </FormControl>
    ,),
];
// End table 7

// start table 8
const rows8 = [
  createData('話しかけると話をするように、声を出して応じる', '3',
    <FormControl sx={{ m: 1, minWidth: 20, }} size='small' className=" " >
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
      </Select>
    </FormControl>
    ,),
  createData('人に向かって声を出す', '6-7',
    <FormControl sx={{ m: 1, minWidth: 20, }} size='small' className=" " >
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
      </Select>
    </FormControl>
    ,),
  createData('いろいろな発音をする（マ、バ、パ）', '6-8',
    <FormControl sx={{ m: 1, minWidth: 20, }} size='small' className=" " >
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
      </Select>
    </FormControl>
    ,),
  createData('いろいろな発音をする（タ、ダ、ナ)', '8-10',
    <FormControl sx={{ m: 1, minWidth: 20, }} size='small' className=" " >
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
      </Select>
    </FormControl>
    ,),
  createData('同じ音をリズミカルに反復する（マママ、ダダダ）', '8-9',
    <FormControl sx={{ m: 1, minWidth: 20, }} size='small' className=" " >
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
      </Select>
    </FormControl>
    ,),
  createData('ほめられたり叱られたりする言葉がわかる', '7-9',
    <FormControl sx={{ m: 1, minWidth: 20, }} size='small' className=" " >
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
      </Select>
    </FormControl>
    ,),
  createData('片言を言う（マンマ、ブーブーなど）', '10',
    <FormControl sx={{ m: 1, minWidth: 20, }} size='small' className=" " >
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
      </Select>
    </FormControl>
    ,),
  createData('自分の要求するもの欲しいものを、指さして要求する', '10',
    <FormControl sx={{ m: 1, minWidth: 20, }} size='small' className=" " >
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
      </Select>
    </FormControl>
    ,),
  createData('具体物の指さしができる', '15',
    <FormControl sx={{ m: 1, minWidth: 20, }} size='small' className=" " >
      <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>o</MenuItem>
        <MenuItem value={2}>／</MenuItem>
      </Select>
    </FormControl>
    ,),
];
// End table 8



export default function ProgressdZeroForm() {

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
              多子多子
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
                <MenuItem value={1}>平成</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={5} sm={6} md={3} lg={1.5} className=" ">
            <TextField className='w-full ' id="Facility-input" label="年" type="text" size='small' sx={{ backgroundColor: "white", marginLeft: { xs: 9.5, sm: 11, md: 8, lg: 6, } }} />
          </Grid>
          <Grid item xs={4} sm={4} md={1} lg={1.5} className="">
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
          </Grid></Grid>
        {/* end date of birth: */}

        {/* start table meal */}
        <Grid item xs={12} sm={12} md={12} lg={12} className='pt-5' >
          <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, backgroundColor: '#CCF0FD', fontWeight: 'bold' }} className='flex justify-start h-10 pt-2 pl-5' >
            食事
          </Typography>
        </Grid>
        <Grid container spacing={2} className='pt-4' justifyContent="center">
          <Paper sx={{ width: '100%', overflow: 'hidden' }} className='ms-4'>
            <TableContainer sx={{ maxHeight: 1000 }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead >
                  <TableRow >
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
                        <TableRow hover role="checkbox" tabIndex={-1} key={row.classroom}>
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
        {/* end table meal */}

        {/* start table excretion */}
        <Grid item xs={12} sm={12} md={12} lg={12} className='pt-10' >
          <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, backgroundColor: '#CCF0FD', fontWeight: 'bold' }} className='flex justify-start h-10 pt-2 pl-5' >
            排泄
          </Typography>
        </Grid>
        <Grid container spacing={2} className='pt-4' justifyContent="center">
          <Paper sx={{ width: '100%', Height: 2000, overflow: 'hidden' }} className='ms-4'>
            <TableContainer sx={{ maxHeight: 2000 }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead >
                  <TableRow >
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
                        <TableRow hover role="checkbox" tabIndex={-1} key={row.classroom}>
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
        {/* end table excretion */}

        {/* start table Sleeping and Dressing */}
        <Grid item xs={12} sm={12} md={12} lg={12} className='pt-10' >
          <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, backgroundColor: '#CCF0FD', fontWeight: 'bold' }} className='flex justify-start h-10 pt-2 pl-5' >
            睡眠・着脱
          </Typography>
        </Grid>
        <Grid container spacing={2} className='pt-4' justifyContent="center">
          <Paper sx={{ width: '100%', Height: 2000, overflow: 'hidden' }} className='ms-4'>
            <TableContainer sx={{ maxHeight: 2000 }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead >
                  <TableRow >
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
                        <TableRow hover role="checkbox" tabIndex={-1} key={row.classroom}>
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
        {/* end table Sleeping and Dressing */}

        {/* start table sports */}
        <Grid item xs={12} sm={12} md={12} lg={12} className='pt-10' >
          <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, backgroundColor: '#CCF0FD', fontWeight: 'bold' }} className='flex justify-start h-10 pt-2 pl-5' >
            運動
          </Typography>
        </Grid>
        <Grid container spacing={2} className='pt-4' justifyContent="center">
          <Paper sx={{ width: '100%', Height: 2000, overflow: 'hidden' }} className='ms-4'>
            <TableContainer sx={{ maxHeight: 2000 }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead >
                  <TableRow >
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
                        <TableRow hover role="checkbox" tabIndex={-1} key={row.classroom}>
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
        {/* end table sports */}

        {/* start table Sensory function */}
        <Grid item xs={12} sm={12} md={12} lg={12} className='pt-10' >
          <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, backgroundColor: '#CCF0FD', fontWeight: 'bold' }} className='flex justify-start h-10 pt-2 pl-5' >
            感覚機能
          </Typography>
        </Grid>
        <Grid container spacing={2} className='pt-4' justifyContent="center">
          <Paper sx={{ width: '100%', Height: 2000, overflow: 'hidden' }} className='ms-4'>
            <TableContainer sx={{ maxHeight: 2000 }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead >
                  <TableRow >
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
                        <TableRow hover role="checkbox" tabIndex={-1} key={row.classroom}>
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
        {/* end table Sensory function */}

        {/* start table Sensory function and exploration */}
        <Grid item xs={12} sm={12} md={12} lg={12} className='pt-10' >
          <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, backgroundColor: '#CCF0FD', fontWeight: 'bold' }} className='flex justify-start h-10 pt-2 pl-5' >
            感覚機能・探索操作
          </Typography>
        </Grid>
        <Grid container spacing={2} className='pt-4' justifyContent="center">
          <Paper sx={{ width: '100%', overflow: 'hidden' }} className='ms-4'>
            <TableContainer sx={{ maxHeight: 2000 }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead >
                  <TableRow >
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
                        <TableRow hover role="checkbox" tabIndex={-1} key={row.classroom}>
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
        {/* end table Sensory function and exploration */}

        {/* start table Relationships */}
        <Grid item xs={12} sm={12} md={12} lg={12} className='pt-10' >
          <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, backgroundColor: '#CCF0FD', fontWeight: 'bold' }} className='flex justify-start h-10 pt-2 pl-5' >
            人間関係
          </Typography>
        </Grid>
        <Grid container spacing={2} className='pt-4' justifyContent="center">
          <Paper sx={{ width: '100%', overflow: 'hidden' }} className='ms-4'>
            <TableContainer sx={{ maxHeight: 2000 }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead >
                  <TableRow >
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
                        <TableRow hover role="checkbox" tabIndex={-1} key={row.classroom}>
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
        {/* end table Relationships */}

        {/* start table words */}
        <Grid item xs={12} sm={12} md={12} lg={12} className='pt-10' >
          <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, backgroundColor: '#CCF0FD', fontWeight: 'bold' }} className='flex justify-start h-10 pt-2 pl-5' >
            言葉
          </Typography>
        </Grid>
        <Grid container spacing={2} className='pt-4' justifyContent="center">
          <Paper sx={{ width: '100%', overflow: 'hidden' }} className='ms-4'>
            <TableContainer sx={{ maxHeight: 2000 }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead >
                  <TableRow >
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
                        <TableRow hover role="checkbox" tabIndex={-1} key={row.classroom}>
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
        {/* end table words */}

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
            新規.継続 :
          </Typography>
          <Grid item xs={7} sm={5.8} md={4} sx={{ marginLeft: { xs: -3, sm: -3, md: -4 } }} className='scale-75' >
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
