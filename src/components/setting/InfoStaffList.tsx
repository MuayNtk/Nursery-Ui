import React from 'react';
import ContentMain from "../content/Content";
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
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

interface Column {
  id: 'dep' | 'furigana' | 'fullname' | 'gender' | 'era' | 'year' | 'month' | 'day' | 'detail';
  label: string;
  minWidth?: number;
  align?: 'right' | 'center';
    format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: 'dep', label: '役職名', minWidth: 100, align: 'center' },
  { id: 'furigana', label: 'フリガナ', minWidth: 150 },
  { id: 'fullname', label: '氏名', minWidth: 120, align: 'center' },
  { id: 'gender', label: '性別', minWidth: 100, align: 'center' },
  { id: 'era', label: '元号', minWidth: 100, align: 'center' },
  { id: 'year', label: '年', minWidth: 50 },
  { id: 'month', label: '月', minWidth: 50 },
  { id: 'day', label: '日', minWidth: 50 },
  { id: 'detail', label: '', minWidth: 100 }
];

interface Data {
  dep: string;
  furigana: string;
  fullname: string;
  gender: string;
  era: string;
  year: string;
  month: string;
  day: string;
  detail: JSX.Element;
}

function createData(
  dep: string,
  furigana: string,
  fullname: string,
  gender: string,
  era: string,
  year: string,
  month: string,
  day: string,
  detail: JSX.Element
): Data {
  return { dep, furigana, fullname, gender, era, year, month, day, detail };
}

// Example data (you can replace this with your actual data)
const initialRows = [
  createData('理事長', 'ワタナベ　ケイコ', '渡部　圭子', '男', '昭和', '11', '2', '21',
    <>
      <IconButton aria-label="edit" size="small">
        <EditIcon fontSize="small" className='text-sky-600' />
      </IconButton>
      <IconButton aria-label="view" size="small">
        <RemoveRedEyeIcon fontSize="small" className='text-amber-500' />
      </IconButton>
      <IconButton aria-label="delete" size="small">
        <DeleteIcon fontSize="small" className='text-red-600' />
      </IconButton>
    </>
  ),
  createData('常務理事', 'ワタナベ　シロウ', '渡部　史朗', '男', '昭和', '43', '5', '22',
    <>
      <IconButton aria-label="edit" size="small">
        <EditIcon fontSize="small" className='text-sky-600' />
      </IconButton>
      <IconButton aria-label="view" size="small">
        <RemoveRedEyeIcon fontSize="small" className='text-amber-500' />
      </IconButton>
      <IconButton aria-label="delete" size="small">
        <DeleteIcon fontSize="small" className='text-red-600' />
      </IconButton>
    </>
  ),
  createData('理　　事', 'ナカガワ　ヤスヨシ', '中川　康嘉', '男', '昭和', '33', '11', '1',
    <>
      <IconButton aria-label="edit" size="small">
        <EditIcon fontSize="small" className='text-sky-600' />
      </IconButton>
      <IconButton aria-label="view" size="small">
        <RemoveRedEyeIcon fontSize="small" className='text-amber-500' />
      </IconButton>
      <IconButton aria-label="delete" size="small">
        <DeleteIcon fontSize="small" className='text-red-600' />
      </IconButton>
    </>
  )
];

export default function InfoStaffList() {

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
    row.fullname.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <ContentMain>
      <Grid container spacing={2} className='pt-7' justifyContent="center">
        <Typography component="div" style={{ color: 'black' }} className='pt-6'>
          氏名
        </Typography>
        <Grid item xs={8} sm={4} md={2} lg={2}>
          <TextField id="outlined-search" label="氏名" type="search" size="small" onChange={handleSearchInputChange} />
        </Grid>
        <Grid item xs={6} sm={6} md={2}>
          <Button variant="contained" href="#contained-buttons" className='scale-90'>
            <SearchIcon />
            <Typography component="div" style={{ color: 'white', paddingLeft: '10px' }}>
              Search
            </Typography>
          </Button>
        </Grid>
      </Grid>
      <Grid container direction="row" justifyContent="end" alignItems="end" style={{ paddingTop: '20px' }} className='mt-3'>
        <Button variant="contained" href="/infostaff/infostaffadd" className='scale-90' size="small">
          <AddIcon />
          <Typography component="div" style={{ color: 'white', paddingLeft: '10px' }}>
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
                {filteredRows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow hover role="checkbox" tabIndex={-1} key={row.fullname}>
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
            count={filteredRows.length}
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
