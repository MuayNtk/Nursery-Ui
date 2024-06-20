import React from 'react';
import { Button, Grid, TextField, Typography } from '@mui/material';
import ContentMain from '../content/Content';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';


interface Column {
  id: 'name' | 'classroom' | 'classroom2' | 'header_classroom' | 'total_amount' | 'detail';
  label: string;
  minWidth?: number;
  align?: 'center' | 'right' | 'left';
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: 'name', label: 'No', minWidth: 100 },
  {
    id: 'classroom',
    label: '',
    minWidth: 100,
    align: 'right',
  },
  {
    id: 'header_classroom',
    label: 'クラス名',
    minWidth: 100,
    align: 'center',
  },
  {
    id: 'classroom2',
    label: '',
    minWidth: 100,
    align: 'left',
  },
  {
    id: 'total_amount',
    label: '総額',
    minWidth: 100,
    align: 'left',
  },
  {
    id: 'detail',
    label: '内容',
    minWidth: 0,
    align: 'center',
  },
];

interface Data {
  name: string;
  classroom: string;
  header_classroom: string;
  classroom2: string;
  total_amount: number;
  detail: JSX.Element;
}

function createData(
  name: string,
  classroom: string,
  header_classroom: string,
  classroom2: string,
  total_amount: number,
  detail: JSX.Element
): Data {
  return { name, classroom, header_classroom, classroom2, total_amount, detail };
}

// Example data (you can replace this with your actual data)
const rows = [
  createData('1', '0 歳児', '', 'うさぎ', 11,
    <>
      <Button variant="contained" href="#" size='small' style={{ backgroundColor: '#FFCC00' }} >
        <RemoveRedEyeIcon fontSize="small" color="inherit" />
      </Button>
    </>
  ),
  createData('2', '1 歳児', '', 'くま', 15,
    <>
      <Button variant="contained" href="#" size='small' style={{ backgroundColor: '#FFCC00' }} >
        <RemoveRedEyeIcon fontSize="small" color="inherit" />
      </Button>
    </>
  ),
  createData('3', '2 歳児', '', 'ぱんだ', 8,
    <>
      <Button variant="contained" href="#" size='small' style={{ backgroundColor: '#FFCC00' }} >
        <RemoveRedEyeIcon fontSize="small" color="inherit" />
      </Button>
    </>
  ),
  createData('4', '3 歳児 ', '', 'かめ', 5,
    <>
      <Button variant="contained" href="#" size='small' style={{ backgroundColor: '#FFCC00' }} >
        <RemoveRedEyeIcon fontSize="small" color="inherit" />
      </Button>
    </>
  ),
  createData('5', '4 歳児', '', 'りす', 9,
    <>
      <Button variant="contained" href="#" size='small' style={{ backgroundColor: '#FFCC00' }} >
        <RemoveRedEyeIcon fontSize="small" color="inherit" />
      </Button>
    </>
  ),
  createData('6', '5 歳児', '', 'とり', 10,
    <>
      <Button variant="contained" href="#" size='small' style={{ backgroundColor: '#FFCC00' }} >
        <RemoveRedEyeIcon fontSize="small" color="inherit" />
      </Button>
    </>
  ),

];

export default function ClassRoom() {

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

    <>
      <ContentMain >
        <Grid container spacing={2} className='pt-7' justifyContent="center">
          <Grid item xs={2} sm={4} md={1}>
            <Typography style={{ fontSize: '16px',  }} fontWeight="bold" className='pt-2'>
              歳児 :
            </Typography>
          </Grid>
          <Grid item xs={5} sm={4} md={3}>
            <TextField id="outlined-search" label="Input Search" type="search" size="small" />
          </Grid>
          <Grid item xs={3} sm={4} md={1}>
            <Button variant="contained" size='small' href="#contained-buttons" style={{ marginTop: '5px' }}>
              <Typography component="div" style={{ color: 'white' }}>
                Search
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
    </>
  );
};
