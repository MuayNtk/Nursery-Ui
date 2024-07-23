import React, { useState, useEffect } from 'react';
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
import { useNavigate } from 'react-router-dom';

interface Column {
  id: 'city' | 'schoolNumber' | 'facilityName' | 'detail';
  label: string;
  minWidth?: number;
  align?: 'right' | 'center';
}

const columns: readonly Column[] = [
  { id: 'city', label: '市町村名', minWidth: 100, align: 'center' },
  { id: 'schoolNumber', label: '園番号', minWidth: 100, align: 'center' },
  { id: 'facilityName', label: '施設・事業所名', minWidth: 150 },
  { id: 'detail', label: '', minWidth: 100 }
];

interface Data {
  city: string;
  schoolNumber: string;
  facilityName: string;
  detail: JSX.Element;
}

const InformationList: React.FC = () => {
  const [data, setData] = useState<Data[]>([]);
  const [numbercity, setNumberCity] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredRows, setFilteredRows] = useState<Data[]>([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch data from sessionStorage
    const fetchData = () => {
      const storedData = JSON.parse(sessionStorage.getItem('data') || '[]');
      const transformedData = storedData.map((item: any) => ({
        city: item.city,
        schoolNumber: item.schoolNumber,
        facilityName: item.facilityName,
        detail: (
          <>
            <IconButton 
              aria-label="edit" 
              size="small" 
              onClick={() => navigate(`/edit/${item.schoolNumber}`)} 
            >
              <EditIcon fontSize="small" className='text-sky-600' />
            </IconButton>
            <IconButton 
              aria-label="view" 
              size="small" 
              onClick={() => navigate(`/view/${item.schoolNumber}`)} 
            >
              <RemoveRedEyeIcon fontSize="small" className='text-amber-500' />
            </IconButton>
            <IconButton 
              aria-label="delete" 
              size="small" 
              onClick={() => {
                const confirmDelete = window.confirm('Are you sure you want to delete this item?');
                if (confirmDelete) {
                  // Handle delete action
                  setData(prevData => prevData.filter(data => data.schoolNumber !== item.schoolNumber));
                  const updatedData = storedData.filter((data: any) => data.schoolNumber !== item.schoolNumber);
                  sessionStorage.setItem('data', JSON.stringify(updatedData));
                }
              }} 
            >
              <DeleteIcon fontSize="small" className='text-red-600' />
            </IconButton>
          </>
        )
      }));
      setData(transformedData);
    };
    fetchData();
  }, []);

  useEffect(() => {
    // Filtering rows based on selected numbercity or search term
    if (numbercity === '' && searchTerm === '') {
      setFilteredRows(data);
    } else if (numbercity !== '') {
      setFilteredRows(data.filter(row => row.schoolNumber === numbercity));
    } else {
      setFilteredRows(data.filter(row =>
        row.schoolNumber.toLowerCase().includes(searchTerm.toLowerCase())
      ));
    }
  }, [numbercity, searchTerm, data]);

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
              sx={{ bgcolor: 'white' }}
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
          <Button 
            variant="contained" 
            onClick={() => setSearchTerm('')} 
            className='scale-90' 
            size="small"
          >
            <SearchIcon />
            <Typography component="div" style={{ color: 'white', paddingLeft: '10px' }}>
              Search
            </Typography>
          </Button>
        </Grid>
      </Grid>
      <Grid container direction="row" justifyContent="end" alignItems="end" style={{ paddingTop: '20px' }} className='mt-3'>
        <Button 
          variant="contained" 
          href="/setting/info/add" 
          className='scale-90' 
          size="small"
        >
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
                  .map((row, index) => (
                    <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                      {columns.map((column) => (
                        <TableCell key={column.id} align={column.align}>
                          {column.id === 'detail' ? (
                            row.detail
                          ) : (
                            row[column.id as keyof Data]
                          )}
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
