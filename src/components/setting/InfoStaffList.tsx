import React, { useState, useEffect } from 'react';
import ContentMain from "../content/Content";
import { Button, Grid, IconButton, Typography, TextField } from '@mui/material';
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
  id: 'dep' | 'furigana' | 'fullname' | 'gender' | 'era' | 'year' | 'month' | 'day' | 'detail';
  label: string;
  minWidth?: number;
  align?: 'right' | 'center';
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

const InfoStaffList: React.FC = () => {
  const [data, setData] = useState<Data[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredRows, setFilteredRows] = useState<Data[]>([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const navigate = useNavigate();

  // Add sample data to sessionStorage if it doesn't already exist
  useEffect(() => {
    const initializeSampleData = () => {
      const existingData = JSON.parse(sessionStorage.getItem('staffData') || '[]');
      if (existingData.length === 0) {
        const sampleData = [
          { dep: 'Manager', furigana: 'ふりがな', fullname: '田中 太郎', gender: '男', era: '昭和', year: '10', month: '1', day: '1', detail: '' },
          { dep: 'Staff', furigana: 'フリガナ', fullname: '山田 花子', gender: '女', era: '平成', year: '10', month: '12', day: '20', detail: '' },
          { dep: 'Staff', furigana: 'ふじさん', fullname: 'さくら 佐藤 ', gender: '女', era: '平成', year: '10', month: '11', day: '25', detail: '' },
        ];
        sessionStorage.setItem('staffData', JSON.stringify(sampleData));
      }
    };
    initializeSampleData();
  }, []);

  useEffect(() => {
    // Fetch data from sessionStorage
    const fetchData = () => {
      const storedData = JSON.parse(sessionStorage.getItem('staffData') || '[]');
      const transformedData = storedData.map((item: any) => ({
        dep: item.dep,
        furigana: item.furigana,
        fullname: item.fullname,
        gender: item.gender,
        era: item.era,
        year: item.year,
        month: item.month,
        day: item.day,
        detail: (
          <>
            <IconButton
              aria-label="edit"
              size="small"
              onClick={() => navigate(`/infostaff/edit/${item.fullname}`)}
            >
              <EditIcon fontSize="small" className='text-sky-600' />
            </IconButton>
            <IconButton
              aria-label="view"
              size="small"
              onClick={() => navigate(`/infostaff/view/${item.fullname}`)}
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
                  setData(prevData => prevData.filter(data => data.fullname !== item.fullname));
                  const updatedData = storedData.filter((data: any) => data.fullname !== item.fullname);
                  sessionStorage.setItem('staffData', JSON.stringify(updatedData));
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
    // Filtering rows based on search term
    if (searchTerm === '') {
      setFilteredRows(data);
    } else {
      setFilteredRows(data.filter(row =>
        row.fullname.toLowerCase().includes(searchTerm.toLowerCase())
      ));
    }
  }, [searchTerm, data]);

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
        <Typography component="div" style={{ color: 'black' }} className='pt-6'>
          氏名
        </Typography>
        <Grid item xs={8} sm={4} md={2} lg={2}>
          <TextField id="outlined-search" label="氏名" type="search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} sx={{ bgcolor: 'white' }} size="small" />
        </Grid>
        <Grid item xs={6} sm={6} md={2}>
          <Button variant="contained" className='scale-90'>
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
                  .map((row, index) => (
                    <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {value}
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
  );
}

export default InfoStaffList;
