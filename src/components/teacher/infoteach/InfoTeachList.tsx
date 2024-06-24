import React from 'react';
import ContentMain from "../../content/Content";
import { Button, FormControl, Grid, IconButton, InputLabel, MenuItem, Select, SelectChangeEvent, TextField, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import EditIcon from '@mui/icons-material/Edit';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
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
  { id: 'name', label: 'No.', minWidth: 50, align: 'center', },
  { id: 'classroom', label: ' 氏名', minWidth: 100 },
  {
    id: 'date',
    label: '出願日',
    minWidth: 100,
    align: 'center',
  },
  {
    id: 'timestart',
    label: '現住所',
    minWidth: 100,
    align: 'center',
  },
  {
    id: 'timeend',
    label: '状態',
    minWidth: 100,
    align: 'center',
  },
  {
    id: 'detail',
    label: '',
    minWidth: 100,

  },
];

interface Data {
  name: string;
  classroom: string;
  date: string;
  timestart: string;
  timeend: string;
  detail: JSX.Element;
}

function createData(
  name: string,
  classroom: string,
  date: string,
  timestart: string,
  timeend: string,
  detail: JSX.Element
): Data {
  return { name, classroom, date, timestart, timeend, detail };
}

// Example data (you can replace this with your actual data)
const rows = [
  createData('1', '藤井　みさ', '2020年11月5日', ' 福岡市南区平和2-27-29-303','履歴書 (正規職員用)',
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
  createData('2', '髙本　泰世', '2020年12月10日', '福岡市南区三宅 3-13-30-402','履歴書 (正規職員用)',
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
  createData('3', '山崎　都', '2020年12月10日', '福岡市中央区白金2-10-2-902','履歴書 (賃金職員用)',
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


export default function InfoTeachList() {
  const [classroom, setcClass] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setcClass(event.target.value as string);
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

        <Typography component="div" style={{ color: 'black', }} className='pt-6 '>
          氏名
        </Typography>

        <Grid item xs={8} sm={4} md={2} lg={2}>
          <TextField id="outlined-search" label="" type="search" size="small" className='' />
        </Grid>
        <Grid item xs={4} sm={4} md={2} style={{ textAlign: 'center' }}>
          <FormControl sx={{ minWidth: 100 }} size="small" fullWidth>
            <InputLabel id="demo-select-small-label">状態</InputLabel>
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
        <Grid item xs={6} sm={6} md={2} >
          <Button variant="contained" href="#contained-buttons" className='scale-90' >
            <SearchIcon />
            <Typography component="div" style={{ color: 'white', paddingLeft: '10px' }} >
              Search
            </Typography>
          </Button>
        </Grid>
      </Grid>
      <Grid container direction="row" justifyContent="end" alignItems="end" style={{ paddingTop: '20px', }} className='mt-3'>
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
