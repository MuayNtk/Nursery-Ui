import ContentMain from "../../content/Content";
import React from 'react';
import { Button, Grid, IconButton, TextField, Typography } from '@mui/material';
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
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import MonthForm from "../../componentsform/MonthForm";


interface Column {
  id: 'year' | 'age' | 'name' | 'detail';
  label: string;
  minWidth?: number;
  align?: 'right' | 'center' | 'left';
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: 'year', label: '全', minWidth: 50, align: 'center', },
  { id: 'age', label: '歳児', minWidth: 70, align: 'center', },
  { id: 'name', label: ' ', minWidth: 100, align: 'left', },
  { id: 'detail', label: '', minWidth: 50, align: 'right', },
];

interface Data {
  year: string;
  age: string;
  name: string;
  detail: JSX.Element;
}

function createData(
  year: string,
  age: string,
  name: string,
  detail: JSX.Element
): Data {
  return { year, age, name, detail };
}

// Example data (you can replace this with your actual data)
const initialRows = [
  createData('2024', '０ 歳児', '(全体的な計画)',
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
  createData('2024', '3 歳児', '(全体的な計画)',
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
  createData('2024', '4 歳児', '(全体的な計画)',
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
  createData('2023', '5 歳児', '(全体的な計画)',
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
  createData('2023', '2 歳児', '(全体的な計画)',
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
  createData('2023', '2 歳児', '(全体的な計画)',
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

export default function Monthlyplan() {


  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const [searchInput, setSearchInput] = React.useState('');
  const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  // Filtered rows based on search input and selected classroom
  const filteredRows = initialRows.filter(row =>
    row.year.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (

    <>
      <ContentMain>

        <Grid container spacing={2} className='pt-7' justifyContent="center">
          <Grid item xs={3} sm={4} md={2} lg={2}>
            <TextField
              id="outlined-search"
              label="全"
              type="search"
              size="small"
              onChange={handleSearchInputChange}
              sx={{ bgcolor: 'white' }}
            />
          </Grid>
          <Grid item xs={3} sm={4} md={2} lg={2}>
            <TextField id="outlined-search" label="年" type="search" size="small" sx={{ backgroundColor: 'white' }} />
          </Grid>
          <Grid item xs={3} sm={4} md={2} lg={2}>
            <MonthForm />
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2}>
            <Button variant="contained" href="#contained-buttons" sx={{ marginLeft: { xs: 6, sm: 1, md: 1, lg: 1, } }}>
              <Typography component="div" style={{ color: 'white' }}>
                検索する
              </Typography>
            </Button>
          </Grid>
        </Grid>
        <Grid container className='pt-7' justifyContent="right">
          <Grid>
            <Button variant="contained" href="/report/monthlyplan/add" size='small' startIcon={<AddIcon />}>
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
                  {filteredRows
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row, index) => {
                      return (
                        <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                          {columns.map((column) => {
                            const value = row[column.id];
                            return (
                              <TableCell key={column.id} align={column.align}>
                                {column.id === 'detail' ? (
                                  <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                    {value}
                                  </div>
                                ) : (
                                  value
                                )}
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
};
