import React from 'react';
import { Button, FormControl, Grid, IconButton, InputLabel, MenuItem, Select, SelectChangeEvent, TextField, Typography } from '@mui/material';
import ContentMain from '../../content/Content';
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
import AddIcon from '@mui/icons-material/Add';

interface Column {
  id: 'schoolnumber' |'schoolname' | 'date' | 'totalprojects' | 'totalamount' | 'detail';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: 'schoolnumber', label: '保育所番号', minWidth: 150 },
  { id: 'schoolname', label: '保育所（園）名', minWidth: 100 },
  {
    id: 'date',
    label: '日付',
    minWidth: 150,
    align: 'right',
  },
  {
    id: 'totalprojects',
    label: '実施事業番号及び合計事業数',
    minWidth: 150,
    align: 'right',
  },
  {
    id: 'totalamount',
    label: ' 各事業の執行予定額の合計',
    minWidth: 150,
    align: 'right',
  },
  {
    id: 'detail',
    label: '',
    minWidth: 100,
  },
];

interface Data {
  id: string;  // Ensure each data row has a unique identifier
  schoolnumber: string;
  schoolname: string;
  date: number;
  totalprojects: number;
  totalamount: number;
  detail: JSX.Element;
}

function createData(
  id: string,  // Include id in the createData function
  schoolnumber: string,
  schoolname: string,
  date: number,
  totalprojects: number,
  totalamount: number,
  detail: JSX.Element
): Data {
  return { id, schoolnumber, schoolname, date, totalprojects, totalamount, detail };
}

// Example data (you can replace this with your actual data)
const rows = [
  createData('1', '566', '渡部　圭子', 20230619, 3, 600000	,
    <>
      <IconButton aria-label="delete" size="small" color="primary">
        <EditIcon fontSize="small" color="primary" />
      </IconButton>
      <IconButton aria-label="delete" size="small" color="error">
        <DeleteForeverIcon fontSize="small" color="error" />
      </IconButton>
    </>
  ),
  createData('2', '999', '渡部　圭子', 20230619, 4, 700000	,
    <>
      <IconButton aria-label="delete" size="small" color="primary">
        <EditIcon fontSize="small" color="primary" />
      </IconButton>
      <IconButton aria-label="delete" size="small" color="error">
        <DeleteForeverIcon fontSize="small" color="error" />
      </IconButton>
    </>
  ),
  createData('3', '000', '渡部　圭子', 20230619, 4, 800000	,
    <>
      <IconButton aria-label="delete" size="small" color="primary">
        <EditIcon fontSize="small" color="primary" />
      </IconButton>
      <IconButton aria-label="delete" size="small" color="error">
        <DeleteForeverIcon fontSize="small" color="error" />
      </IconButton>
    </>
  ),
  createData('4', ' 787', '渡部　圭子', 20230619, 2, 500000	,
    <>
      <IconButton aria-label="delete" size="small" color="primary">
        <EditIcon fontSize="small" color="primary" />
      </IconButton>
      <IconButton aria-label="delete" size="small" color="error">
        <DeleteForeverIcon fontSize="small" color="error" />
      </IconButton>
    </>
  ),
];

export default function ActivityList() {
  const [classroom, setClass] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setClass(event.target.value as string);
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
        <Grid item xs={3} sm={4} md={2} lg={2}>
          <TextField id="outlined-search" label="氏名" type="search" size="small" />
        </Grid>
        <Grid item xs={3} sm={4} md={2} lg={2} style={{ textAlign: 'center' }}>
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
        <Grid item xs={6} sm={4} md={3} lg={1.5}>
          <Button variant="contained" href="#contained-buttons" sx={{ marginLeft: { xs: 6, sm: 1, md: 1, lg: 1, } }}>
            <Typography component="div" style={{ color: 'white' }}>
              検索する
            </Typography>
          </Button>
        </Grid>
      </Grid>
      <Grid container className='pt-7' justifyContent="right">
        <Grid>
          <Button variant="contained" href="/accounting/activity/add" size='small' startIcon={<AddIcon />}>
            <Typography style={{ color: 'white' }}>
              ADD
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
                      <TableRow key={row.id}>
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
