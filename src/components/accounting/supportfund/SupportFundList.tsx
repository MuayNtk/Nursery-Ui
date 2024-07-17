import React from 'react';
import { Button, Grid, IconButton, TextField, Typography } from '@mui/material';
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
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

interface Column {
  id: 'schoolnumber' | 'businesstype' | 'businessname' | 'namerepresentative' | 'phonenumber' | 'detail';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: 'schoolnumber', label: '園番号', minWidth: 150 },
  { id: 'businesstype', label: '施設・事業所類型', minWidth: 100 },
  {
    id: 'businessname',
    label: '施設・事業所名',
    minWidth: 150,
    align: 'right',
  },
  {
    id: 'namerepresentative',
    label: '代表者職・氏名',
    minWidth: 150,
    align: 'right',
  },
  {
    id: 'phonenumber',
    label: '連絡先電話番号',
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
  businesstype: string;
  businessname: string;
  namerepresentative: string;
  phonenumber: string;
  detail: JSX.Element;
}

function createData(
  id: string,  // Include id in the createData function
  schoolnumber: string,
  businesstype: string,
  businessname: string,
  namerepresentative: string,
  phonenumber: string,
  detail: JSX.Element
): Data {
  return { id, schoolnumber, businesstype, businessname, namerepresentative, phonenumber, detail };
}

// Example data (you can replace this with your actual data)
const initialRows = [
  createData('1', '566', '地域型保育事業所', 'いちざきみんなの家', '渡部圭子', '092-406-8215',
    <>
      <IconButton aria-label="edit" size="small" color="primary">
        <EditIcon fontSize="small" color="primary" />
      </IconButton>
      <IconButton aria-label="warning" size="small" color="warning">
        <RemoveRedEyeIcon fontSize="small" color="warning" />
      </IconButton>
      <IconButton aria-label="delete" size="small" color="error">
        <DeleteForeverIcon fontSize="small" color="error" />
      </IconButton>
    </>
  ),
  createData('2', '999', '私立保育所', 'いちざきみんなの家', '渡部圭子', '092-406-8215',
    <>
      <IconButton aria-label="delete" size="small" color="primary">
        <EditIcon fontSize="small" color="primary" />
      </IconButton>
      <IconButton aria-label="warning" size="small" color="warning">
        <RemoveRedEyeIcon fontSize="small" color="warning" />
      </IconButton>
      <IconButton aria-label="delete" size="small" color="error">
        <DeleteForeverIcon fontSize="small" color="error" />
      </IconButton>
    </>
  ),
  createData('3', '000', 'その他施設', 'いちざきみんなの家', '渡部圭子', '092-406-8215',
    <>
      <IconButton aria-label="delete" size="small" color="primary">
        <EditIcon fontSize="small" color="primary" />
      </IconButton>
      <IconButton aria-label="warning" size="small" color="warning">
        <RemoveRedEyeIcon fontSize="small" color="warning" />
      </IconButton>
      <IconButton aria-label="delete" size="small" color="error">
        <DeleteForeverIcon fontSize="small" color="error" />
      </IconButton>
    </>
  ),
  createData('4', ' 787', '認可外保育施設', 'いちざきみんなの家', '渡部圭子', '092-406-8215',
    <>
      <IconButton aria-label="delete" size="small" color="primary">
        <EditIcon fontSize="small" color="primary" />
      </IconButton>
      <IconButton aria-label="warning" size="small" color="warning">
        <RemoveRedEyeIcon fontSize="small" color="warning" />
      </IconButton>
      <IconButton aria-label="delete" size="small" color="error">
        <DeleteForeverIcon fontSize="small" color="error" />
      </IconButton>
    </>
  ),
];

export default function SupportFundList() {

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
    row.schoolnumber.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <ContentMain>
      <Grid container spacing={2} className='pt-7' justifyContent="center">
        <Grid item xs={3} sm={4} md={2} lg={2}>
          <TextField
            id="outlined-search"
            label="園番号"
            type="search"
            size="small"
            onChange={handleSearchInputChange}
            sx={{ bgcolor: 'white' }}
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
          <Button variant="contained" href="/accounting/supportfund/add" size='small' startIcon={<AddIcon />}>
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
