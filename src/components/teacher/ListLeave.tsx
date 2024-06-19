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
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
interface Column {
  id: 'name' | 'classroom' | 'date' | 'timestart' | 'timeend' | 'detail';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: 'name', label: '氏名', minWidth: 170 },
  { id: 'classroom', label: 'クラス名', minWidth: 100 },
  {
    id: 'date',
    label: '日付',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'timestart',
    label: '開始時間',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'timeend',
    label: '終了時間',
    minWidth: 170,
    align: 'right',
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
  date: number;
  timestart: number;
  timeend: number;
  detail: JSX.Element;
}

function createData(
  name: string,
  classroom: string,
  date: number,
  timestart: number,
  timeend: number,
  detail: JSX.Element
): Data {
  return { name, classroom, date, timestart, timeend, detail };
}

// Example data (you can replace this with your actual data)
const rows = [
  createData('John Doe', 'Math', 20230619, 830, 1030,
    <>
      <IconButton aria-label="delete" size="small" color="primary">
        <EditIcon fontSize="small" color="primary"/>
      </IconButton>
      <IconButton aria-label="delete" size="small" color="error">
        <DeleteForeverIcon fontSize="small" color="error" />
      </IconButton>
    </>
  ),
  createData('Jane Smith', 'Science', 20230619, 900, 1100,
    <>
      <IconButton aria-label="delete" size="small" color="primary">
        <EditIcon fontSize="small" color="primary"/>
      </IconButton>
      <IconButton aria-label="delete" size="small" color="error">
        <DeleteForeverIcon fontSize="small" color="error" />
      </IconButton>
    </>
  ),
  createData('Alice Johnson', 'History', 20230619, 945, 1145,
    <>
      <IconButton aria-label="delete" size="small" color="primary">
        <EditIcon fontSize="small" color="primary"/>
      </IconButton>
      <IconButton aria-label="delete" size="small" color="error">
        <DeleteForeverIcon fontSize="small" color="error" />
      </IconButton>
    </>
  ),
  createData('Bob Brown', 'Art', 20230619, 1015, 1215,
    <>
      <IconButton aria-label="delete" size="small" color="primary">
        <EditIcon fontSize="small" color="primary"/>
      </IconButton>
      <IconButton aria-label="delete" size="small" color="error">
        <DeleteForeverIcon fontSize="small" color="error" />
      </IconButton>
    </>
  ),
];

export default function ListLeave() {
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
        <Grid item xs={4} sm={4} md={2}>
          <TextField id="outlined-search" label="氏名" type="search" size="small" />
        </Grid>
        <Grid item xs={4} sm={4} md={2} style={{ textAlign: 'center' }}>
          <FormControl sx={{ minWidth: 125 }} size="small" fullWidth>
            <InputLabel id="demo-select-small-label">クラス名</InputLabel>
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
              <MenuItem value={10}>うさぎ</MenuItem>
              <MenuItem value={20}>くま</MenuItem>
              <MenuItem value={30}>ぱんだ</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={4} sm={4} md={2}>
          <Button variant="contained" href="#contained-buttons" >
            <Typography component="div" style={{ color: 'white' }}>
              検索する
            </Typography>
          </Button>
        </Grid>
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
}
