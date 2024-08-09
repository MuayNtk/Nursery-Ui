import React, { useState, useEffect } from 'react';
import ContentMain from '../../content/Content';
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
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
// import { useNavigate } from 'react-router-dom';

interface Column {
  id: 'schoolnumber' | 'date' | 'totalprojects' | 'totalamount' | 'detail';
  label: string;
  minWidth?: number;
  align?: 'right' | 'center' | 'left';
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: 'schoolnumber', label: '保育所番号', minWidth: 150, align: 'center' },
  { id: 'date', label: '日付', minWidth: 150, align: 'center' },
  { id: 'totalprojects', label: '実施事業番号及び合計事業数', minWidth: 150, align: 'center' },
  { id: 'totalamount', label: '各事業の執行予定額の合計', minWidth: 150, align: 'center' },
  { id: 'detail', label: '', minWidth: 100, align: 'center' },
];

interface Data {
  id: number;
  schoolnumber: string;
  date: number;
  totalprojects: number;
  totalamount: number;
  detail: JSX.Element;
}

const ActivityList: React.FC = () => {
  const [data, setData] = useState<Data[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredRows, setFilteredRows] = useState<Data[]>([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  // const navigate = useNavigate();

  const formatDate = (date: number): string => {
    const year = Math.floor(date / 10000);
    const month = Math.floor((date % 10000) / 100);
    const day = date % 100;

    const reiwaStartYear = 2019;
    let reiwaYear;

    if (year < reiwaStartYear) {
      return `令${year}年${month}月${day}日`;
    } else {
      reiwaYear = year - reiwaStartYear + 1;
      return `令${reiwaYear}年${month}月${day}日`;
    }
  };

  useEffect(() => {
    const initializeSampleData = () => {
      const existingData = JSON.parse(sessionStorage.getItem('activityData') || '[]');
      if (existingData.length === 0) {
        const sampleData = [
          { id: 111, schoolnumber: '123', date: 20220801, totalprojects: 2, totalamount: 400000 },
          { id: 222, schoolnumber: '456', date: 20230802, totalprojects: 4, totalamount: 850000 },
          { id: 333, schoolnumber: '789', date: 20240803, totalprojects: 3, totalamount: 600000 },
        ];
        sessionStorage.setItem('activityData', JSON.stringify(sampleData));
      }
    };
    initializeSampleData();
  }, []);

  useEffect(() => {
    const fetchData = () => {
      const storedData = JSON.parse(sessionStorage.getItem('activityData') || '[]');
      const transformedData = storedData.map((item: any) => ({
        id: item.id,
        schoolnumber: item.schoolnumber,
        date: item.date,
        totalprojects: item.totalprojects,
        totalamount: item.totalamount,
        selectedActivities: item.selectedActivities || [],
        detail: (
          <>
            <IconButton
              aria-label="edit"
              size="small"
              // onClick={() => navigate(`/accounting/activity/edit/${item.pid}`)}
            >
              <EditIcon fontSize="small" className='text-sky-600' />
            </IconButton>
            <IconButton
              aria-label="view"
              size="small"
              // onClick={() => navigate(`/accounting/activity/view/${item.id}`)}
            >
              <RemoveRedEyeIcon fontSize="small" className='text-amber-500' />
            </IconButton>
            <IconButton
              aria-label="delete"
              size="small"
              onClick={() => {
                const confirmDelete = window.confirm('Are you sure you want to delete this item?');
                if (confirmDelete) {
                  setData(prevData => prevData.filter(data => data.id !== item.id));
                  const updatedData = storedData.filter((data: any) => data.id !== item.id);
                  sessionStorage.setItem('activityData', JSON.stringify(updatedData));
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
        row.schoolnumber.toLowerCase().includes(searchTerm.toLowerCase())
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
        <Grid item xs={3} sm={4} md={2} lg={2}>
          <TextField
            id="outlined-search"
            label="保育所番号"
            type="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            sx={{ bgcolor: 'white' }}
            size="small"
          />
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
                {filteredRows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => (
                    <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                      {columns.map((column) => {
                        const value = column.id === 'date' ? formatDate(row[column.id]) : row[column.id];
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

export default ActivityList;
