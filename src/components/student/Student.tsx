
import React from 'react';
import { Button, FormControl, Grid, IconButton, InputLabel, MenuItem, Select, SelectChangeEvent, TextField, Typography } from '@mui/material';
import ContentMain from '../content/Content';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import EditIcon from '@mui/icons-material/Edit';
import ClearIcon from '@mui/icons-material/Clear';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import AssignmentIcon from '@mui/icons-material/Assignment';
import StackedBarChartIcon from '@mui/icons-material/StackedBarChart';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

interface Column {
  id: 'name' | 'classroom' | 'date' | 'timestart' | 'timeend' | 'detail';
  label: string;
  minWidth?: number;
  align?: 'right' | 'center';
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: 'name', label: '氏名', minWidth: 150 },
  { id: 'classroom', label: '歳児', minWidth: 150 },
  {
    id: 'date',
    label: 'クラス名',
    minWidth: 150,
    align: 'center',
  },
  {
    id: 'timestart',
    label: '歳児保育経過記録',
    minWidth: 150,
    align: 'center',
  },
  {
    id: 'timeend',
    label: '保育所児童保育要録',
    minWidth: 150,
    align: 'center',
  },
  {
    id: 'detail',
    label: '',
    minWidth: 150,

  },
];

interface Data {
  name: string;
  classroom: string;
  date: string;
  timestart: JSX.Element;
  timeend: JSX.Element;
  detail: JSX.Element;
}

function createData(
  name: string,
  classroom: string,
  date: string,
  timestart: JSX.Element,
  timeend: JSX.Element,
  detail: JSX.Element
): Data {
  return { name, classroom, date, timestart, timeend, detail };
}

// Example data (you can replace this with your actual data)
const rows = [
  createData('濱千代　智宏', '1 歳児', 'くま',
      <IconButton aria-label="delete" size="small">
        <StackedBarChartIcon fontSize="small" className='text-red-600' />
      </IconButton>

    ,
      <IconButton aria-label="delete" size="small" >
        <AssignmentIcon fontSize="medium" className='text-cyan-500' />
      </IconButton>
    ,
    <>
        <IconButton aria-label="delete" size="small" >
          <EditIcon fontSize="small" className='text-sky-600' />
        </IconButton>
        <IconButton aria-label="delete" size="small" >
          <RemoveRedEyeIcon fontSize="small" className='text-amber-500' />
        </IconButton>
        <IconButton aria-label="delete" size="small" >
          <DeleteIcon fontSize="small" className='text-red-600' />
        </IconButton>
    </>
  ),
  createData('濱千代　定 ', '1 歳児', 'ぱんだ',
    <IconButton aria-label="delete" size="small">
    <StackedBarChartIcon fontSize="small" className='text-red-600' />
  </IconButton>

,
  <IconButton aria-label="delete" size="small" >
    <AssignmentIcon fontSize="medium" className='text-cyan-500' />
  </IconButton>
,
<>
    <IconButton aria-label="delete" size="small" >
      <EditIcon fontSize="small" className='text-sky-600' />
    </IconButton>
    <IconButton aria-label="delete" size="small" >
      <RemoveRedEyeIcon fontSize="small" className='text-amber-500' />
    </IconButton>
    <IconButton aria-label="delete" size="small" >
      <DeleteIcon fontSize="small" className='text-red-600' />
    </IconButton>
</>
  ), createData('立石　太平', '1 歳児', 'ぱんだ',
     <IconButton aria-label="delete" size="small">
        <StackedBarChartIcon fontSize="small" className='text-red-600' />
      </IconButton>

    ,
      <IconButton aria-label="delete" size="small" >
        <AssignmentIcon fontSize="medium" className='text-cyan-500' />
      </IconButton>
    ,
    <>
        <IconButton aria-label="delete" size="small" >
          <EditIcon fontSize="small" className='text-sky-600' />
        </IconButton>
        <IconButton aria-label="delete" size="small" >
          <RemoveRedEyeIcon fontSize="small" className='text-amber-500' />
        </IconButton>
        <IconButton aria-label="delete" size="small" >
          <DeleteIcon fontSize="small" className='text-red-600' />
        </IconButton>
    </>
  ), createData('勝俣　悠生', '1 歳児', 'ぱんだ',
    <IconButton aria-label="delete" size="small">
        <StackedBarChartIcon fontSize="small" className='text-red-600' />
      </IconButton>

    ,
      <IconButton aria-label="delete" size="small" >
        <AssignmentIcon fontSize="medium" className='text-cyan-500' />
      </IconButton>
    ,
    <>
        <IconButton aria-label="delete" size="small" >
          <EditIcon fontSize="small" className='text-sky-600' />
        </IconButton>
        <IconButton aria-label="delete" size="small" >
          <RemoveRedEyeIcon fontSize="small" className='text-amber-500' />
        </IconButton>
        <IconButton aria-label="delete" size="small" >
          <DeleteIcon fontSize="small" className='text-red-600' />
        </IconButton>
    </>
  ),
  createData('勝俣　松代', '1 歳児', 'かめ',
    <IconButton aria-label="delete" size="small">
    <StackedBarChartIcon fontSize="small" className='text-red-600' />
  </IconButton>

,
  <IconButton aria-label="delete" size="small" >
    <AssignmentIcon fontSize="medium" className='text-cyan-500' />
  </IconButton>
,
<>
    <IconButton aria-label="delete" size="small" >
      <EditIcon fontSize="small" className='text-sky-600' />
    </IconButton>
    <IconButton aria-label="delete" size="small" >
      <RemoveRedEyeIcon fontSize="small" className='text-amber-500' />
    </IconButton>
    <IconButton aria-label="delete" size="small" >
      <DeleteIcon fontSize="small" className='text-red-600' />
    </IconButton>
</>
  ),
  createData('広田　木太郎', '1 歳児', 'かめ',
    <IconButton aria-label="delete" size="small">
        <StackedBarChartIcon fontSize="small" className='text-red-600' />
      </IconButton>

    ,
      <IconButton aria-label="delete" size="small" >
        <AssignmentIcon fontSize="medium" className='text-cyan-500' />
      </IconButton>
    ,
    <>
        <IconButton aria-label="delete" size="small" >
          <EditIcon fontSize="small" className='text-sky-600' />
        </IconButton>
        <IconButton aria-label="delete" size="small" >
          <RemoveRedEyeIcon fontSize="small" className='text-amber-500' />
        </IconButton>
        <IconButton aria-label="delete" size="small" >
          <DeleteIcon fontSize="small" className='text-red-600' />
        </IconButton>
    </>
  ),
];


export default function Student() {
  const [classroom, setcClass] = React.useState('');

  const [classroom1, setcClass1] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setcClass(event.target.value as string);
  };
  const handleChange2 = (event: SelectChangeEvent) => {
    setcClass1(event.target.value as string);
  };

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <ContentMain>
      <Grid container spacing={2} className='pt-7' justifyContent="center">
      
      <Typography component="div" style={{ color: 'black',}} className='pt-6 '>
          氏名
        </Typography>

        <Grid item xs={8} sm={12} md={2} lg={2}>
          <TextField id="outlined-search" label="" type="search" size="small" className=''/>
        </Grid>
        <Grid item xs={4} sm={4} md={2} style={{ textAlign: 'center' }}>
          <FormControl sx={{ minWidth: 100 }} size="small" fullWidth>
            <InputLabel id="demo-select-small-label">歳児</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={classroom}
              label="クラス名"
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>1</MenuItem>
              <MenuItem value={20}>2</MenuItem>
              <MenuItem value={30}>3</MenuItem>
              <MenuItem value={30}>4</MenuItem>
              <MenuItem value={30}>5</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={4} sm={4} md={2} style={{ textAlign: 'center' }}>
          <FormControl sx={{ minWidth: 100 }} size="small" fullWidth>
            <InputLabel id="demo-select-small-label2">クラス名</InputLabel>
            <Select
              labelId="demo-select-small-label2"
              id="demo-select-small"
              value={classroom1}
              label="クラス名"
              onChange={handleChange2}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>a</MenuItem>
              <MenuItem value={20}>b</MenuItem>
              <MenuItem value={30}>c</MenuItem>
              <MenuItem value={30}>d</MenuItem>
              <MenuItem value={30}>e</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={4} sm={4} md={2} >
          <Button variant="contained" href="#contained-buttons"  className='scale-90' >
          <SearchIcon />
              <Typography component="div" style={{ color: 'white', paddingLeft: '10px'}} >
              Search
              </Typography>
          </Button>
        </Grid>
      </Grid>
      <Grid container direction="row" justifyContent="end" alignItems="end" style={{ paddingTop: '20px',}} className='mt-3'>
      <Button variant="contained" href="#contained-buttons" className='scale-90' size="small" >
          <AddIcon />
              <Typography component="div" style={{ color: 'white', paddingLeft: '10px' }}  >
              Add
              </Typography>
          </Button>
      </Grid>
      <Grid container spacing={2} className='pt-10' justifyContent="center">
        <Paper sx={{ width: '95%', overflow: 'hidden' }} className='ms-4'>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
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
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </Grid>
    </ContentMain>
  );
};
