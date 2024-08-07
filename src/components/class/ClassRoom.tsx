import { useState, ChangeEvent } from 'react';
import { IconButton, Button, Grid, TextField, Typography } from '@mui/material';
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
import React from 'react';

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
    align: 'center',
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

const initialRows = [
  createData('1', '0 歳児', '', 'うさぎ', 11,
    <>
      <IconButton aria-label="delete" size="small" color="primary">
        <RemoveRedEyeIcon fontSize="medium" style={{ color: '#FFCC00' }} />
      </IconButton>
    </>
  ),
  createData('2', '1 歳児', '', 'くま', 15,
    <>
      <IconButton aria-label="delete" size="small" color="primary">
        <RemoveRedEyeIcon fontSize="medium" style={{ color: '#FFCC00' }} />
      </IconButton>
    </>
  ),
  createData('3', '2 歳児', '', 'ぱんだ', 8,
    <>
      <IconButton aria-label="delete" size="small" color="primary">
        <RemoveRedEyeIcon fontSize="medium" style={{ color: '#FFCC00' }} />
      </IconButton>
    </>
  ),
  createData('4', '3 歳児 ', '', 'かめ', 5,
    <>
      <IconButton aria-label="delete" size="small" color="primary">
        <RemoveRedEyeIcon fontSize="medium" style={{ color: '#FFCC00' }} />
      </IconButton>
    </>
  ),
  createData('5', '4 歳児', '', 'りす', 9,
    <>
      <IconButton aria-label="delete" size="small" color="primary">
        <RemoveRedEyeIcon fontSize="medium" style={{ color: '#FFCC00' }} />
      </IconButton>
    </>
  ),
  createData('6', '5 歳児', '', 'とり', 10,
    <>
      <IconButton aria-label="delete" size="small" color="primary">
        <RemoveRedEyeIcon fontSize="medium" style={{ color: '#FFCC00' }} />
      </IconButton>
    </>
  ),
];

export default function ClassRoom() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const [searchInput, setSearchInput] = React.useState('');
  const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  // Filtered rows based on search input and selected classroom
  const filteredRows = initialRows.filter(row =>
    row.classroom.toLowerCase().includes(searchInput.toLowerCase()) 
  );

  return (
    <>
      <ContentMain>
        <Grid container spacing={2} className='pt-7' justifyContent="center">
          <Typography style={{ fontSize: '16px' }} fontWeight="bold" className='pt-6 pl-6'>
            歳児 :
          </Typography>
          <Grid item xs={5} sm={4} md={3}>
            <TextField
              id="outlined-search"
              label="Input Search"
              type="search"
              size="small"
              onChange={handleSearchInputChange}
              sx={{bgcolor: 'white'}}
            />
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
                  {filteredRows
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => (
                      <TableRow hover role="checkbox" tabIndex={-1} key={row.name}>
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.format && typeof value === 'number' ? column.format(value) : value}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[10, 25, 100]}
              component="div"
              count={filteredRows.length}
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
}
