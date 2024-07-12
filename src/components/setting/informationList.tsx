import React, { useState } from 'react';
import ContentMain from "../content/Content";
import { Button, FormControl, Grid, IconButton, InputLabel, MenuItem, Select, Typography, SelectChangeEvent } from '@mui/material';
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
  id: 'city' | 'number' | 'businessname' | 'detail';
  label: string;
  minWidth?: number;
  align?: 'right' | 'center';
}

const columns: readonly Column[] = [
  { id: 'city', label: '市町村名', minWidth: 100, align: 'center' },
  { id: 'number', label: '園番号', minWidth: 100, align: 'center' },
  { id: 'businessname', label: '施設・事業所名', minWidth: 150 },
  { id: 'detail', label: '', minWidth: 100 }
];

interface Data {
  city: string;
  number: string;
  businessname: string;
  detail: JSX.Element;
}

function createData(
  city: string,
  number: string,
  businessname: string,
  detail: JSX.Element
): Data {
  return { city, number, businessname, detail };
}

// Example data (you can replace this with your actual data)
const rows = [
  createData('福岡市', '566', 'いちざきみんなの家',
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
  createData('福岡市', '999', 'いちざきみんなの家',
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
];

const InformationList: React.FC = () => {
  const [numbercity, setNumberCity] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredRows, setFilteredRows] = useState<Data[]>(rows);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangeSelect = (event: SelectChangeEvent<string>) => {
    setNumberCity(event.target.value as string);
    setSearchTerm('');
  };


  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  // Filtering rows based on selected numbercity or search term
  React.useEffect(() => {
    if (numbercity === '' && searchTerm === '') {
      setFilteredRows(rows);
    } else if (numbercity !== '') {
      setFilteredRows(rows.filter(row => row.number === numbercity));
    } else {
      setFilteredRows(rows.filter(row =>
        row.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
        row.businessname.toLowerCase().includes(searchTerm.toLowerCase())
      ));
    }
  }, [numbercity, searchTerm]);

  return (
    <ContentMain>
      <Grid container spacing={2} className='pt-7' justifyContent="center">
        <Grid item xs={4} sm={4} md={2} style={{ textAlign: 'center' }}>
          <FormControl sx={{ minWidth: 100 }} size="small" fullWidth>
            <InputLabel id="demo-select-small-label">園番号</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={numbercity}
              label="園番号"
              onChange={handleChangeSelect}
              sx={{bgcolor: 'white'}}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={'566'}>566</MenuItem>
              <MenuItem value={'999'}>999</MenuItem>
            </Select>
          </FormControl>
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
        <Button variant="contained" href="/setting/info/add" className='scale-90' size="small">
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
                  .map((row) => (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.number}>
                      {columns.map((column) => (
                        <TableCell key={column.id} align={column.align}>
                          {column.id === 'detail' ? row[column.id] :
                            typeof row[column.id] === 'string' || typeof row[column.id] === 'number' ? row[column.id] : ''}
                        </TableCell>
                      ))}
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
  );
};

export default InformationList;
