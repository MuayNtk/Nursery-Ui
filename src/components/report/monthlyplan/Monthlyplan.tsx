import ContentMain from "../../content/Content";
import React, { useEffect, useState } from 'react';
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
import { useNavigate } from 'react-router-dom';

interface Column {
  id: 'pid' | 'year' | 'selectedOption' | 'name' | 'detail';
  label: string;
  minWidth?: number;
  align?: 'right' | 'center' | 'left';
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: 'year', label: '全', minWidth: 50, align: 'center' },
  { id: 'selectedOption', label: '歳児', minWidth: 70, align: 'center' },
  { id: 'name', label: ' ', minWidth: 100, align: 'left' },
  { id: 'detail', label: '', minWidth: 50, align: 'right' },
];

interface Data {
  pid: string;
  year: string;
  selectedOption: string;
  name: string;
  detail: JSX.Element;
}

const Monthlyplan: React.FC = () => {
  const [data, setData] = useState<Data[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredRows, setFilteredRows] = useState<Data[]>([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const navigate = useNavigate();

  // Initialize sample data for all three types
  useEffect(() => {
    const initializeSampleData = () => {
      const existingData0 = JSON.parse(sessionStorage.getItem('monthlyData0') || '[]');
      const existingData1_2 = JSON.parse(sessionStorage.getItem('monthlyData1_2') || '[]');
      const existingData3_4_5 = JSON.parse(sessionStorage.getItem('monthlyData3_4_5') || '[]');

      if (existingData0.length === 0) {
        const sampleData0 = [
          { pid: '111', year: '2024', selectedOption: '月指導計画 0 歳児', name: '(全体的な計画)' },
        ];
        sessionStorage.setItem('monthlyData0', JSON.stringify(sampleData0));
      }

      if (existingData1_2.length === 0) {
        const sampleData1_2 = [
          { pid: '222', year: '2023', selectedOption: '月指導計画 1・2 歳児', name: '(全体的な計画)' },
        ];
        sessionStorage.setItem('monthlyData1_2', JSON.stringify(sampleData1_2));
      }

      if (existingData3_4_5.length === 0) {
        const sampleData3_4_5 = [
          { pid: '333', year: '2022', selectedOption: '月指導計画 3・4・5 歳児', name: '(全体的な計画)' },
        ];
        sessionStorage.setItem('monthlyData3_4_5', JSON.stringify(sampleData3_4_5));
      }
    };
    initializeSampleData();
  }, []);

  useEffect(() => {
    const fetchData = () => {
      const storedData0 = JSON.parse(sessionStorage.getItem('monthlyData0') || '[]');
      const storedData1_2 = JSON.parse(sessionStorage.getItem('monthlyData1_2') || '[]');
      const storedData3_4_5 = JSON.parse(sessionStorage.getItem('monthlyData3_4_5') || '[]');
  
      const allData = [...storedData0, ...storedData1_2, ...storedData3_4_5];
      console.log('All Data:', allData); // ตรวจสอบข้อมูลทั้งหมด
  
      const transformedData = allData.map((item: any) => ({
        pid: item.pid,
        year: item.year,
        selectedOption: item.selectedOption,
        name: item.name,
        detail: (
          <>
            <IconButton
              aria-label="edit"
              size="small"
              onClick={() => navigate(`/report/monthlyplan/edit/${item.selectedOption}/${item.pid}`)}
            >
              <EditIcon fontSize="small" className='text-sky-600' />
            </IconButton>
            <IconButton
              aria-label="view"
              size="small"
              onClick={() => navigate(`/report/monthlyplan/view/${item.selectedOption}/${item.pid}`)}
            >
              <RemoveRedEyeIcon fontSize="small" className='text-amber-500' />
            </IconButton>
            <IconButton
              aria-label="delete"
              size="small"
              onClick={() => {
                const confirmDelete = window.confirm('Are you sure you want to delete this item?');
                if (confirmDelete) {
                  setData(prevData => prevData.filter(data => data.pid !== item.pid));
                  const updatedData = allData.filter((data: any) => data.pid !== item.pid);
                  sessionStorage.setItem('monthlyData0', JSON.stringify(updatedData.filter(d => d.selectedOption === '月指導計画 ０ 歳児')));
                  sessionStorage.setItem('monthlyData1_2', JSON.stringify(updatedData.filter(d => d.selectedOption === '月指導計画 １・２ 歳児')));
                  sessionStorage.setItem('monthlyData3_4_5', JSON.stringify(updatedData.filter(d => d.selectedOption === '月指導計画 ３・４・５歳児')));
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
    if (searchTerm === '') {
      setFilteredRows(data);
    } else {
      setFilteredRows(data.filter(row =>
        row.year.toLowerCase().includes(searchTerm.toLowerCase())
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
    <>
      <ContentMain>
        <Grid container spacing={2} className='pt-7' justifyContent="center">
          <Grid item xs={3} sm={4} md={2} lg={2}>
            <TextField
              id="outlined-search"
              label="全"
              type="search"
              size="small"
              value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
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
            <Button variant="contained" href="#contained-buttons" sx={{ marginLeft: { xs: 6, sm: 1, md: 1, lg: 1 } }}>
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

export default Monthlyplan;
