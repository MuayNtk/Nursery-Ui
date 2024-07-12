import React from 'react';
import { Button, FormControl, Grid, IconButton, InputLabel, MenuItem, Select, SelectChangeEvent, TextField, Typography } from '@mui/material';
import ContentMain from '../content/Content';
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

interface Column {
  id: 'name' | 'classroom' | 'date' | 'timestart' | 'timeend' | 'detail';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: 'name', label: '氏名', minWidth: 150 },
  { id: 'classroom', label: 'クラス名', minWidth: 100 },
  {
    id: 'date',
    label: '日付',
    minWidth: 150,
    align: 'right',
  },
  {
    id: 'timestart',
    label: '開始時間',
    minWidth: 150,
    align: 'right',
  },
  {
    id: 'timeend',
    label: '終了時間',
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
  name: string;
  classroom: string;
  date: number;
  timestart: number;
  timeend: number;
  detail: JSX.Element;
}

function createData(
  id: string,  // Include id in the createData function
  name: string,
  classroom: string,
  date: number,
  timestart: number,
  timeend: number,
  detail: JSX.Element
): Data {
  return { id, name, classroom, date, timestart, timeend, detail };
}

// Example data (you can replace this with your actual data)
const initialRows = [
  createData('1', 'John Doe', 'Math', 20230619, 830, 1030,
    <>
      <IconButton aria-label="delete" size="small" color="primary">
        <EditIcon fontSize="small" color="primary" />
      </IconButton>
      <IconButton aria-label="delete" size="small" color="error">
        <DeleteForeverIcon fontSize="small" color="error" />
      </IconButton>
    </>
  ),
  createData('2', 'Jane Smith', 'Science', 20230619, 900, 1100,
    <>
      <IconButton aria-label="delete" size="small" color="primary">
        <EditIcon fontSize="small" color="primary" />
      </IconButton>
      <IconButton aria-label="delete" size="small" color="error">
        <DeleteForeverIcon fontSize="small" color="error" />
      </IconButton>
    </>
  ),
  createData('3', 'Alice Johnson', 'History', 20230619, 945, 1145,
    <>
      <IconButton aria-label="delete" size="small" color="primary">
        <EditIcon fontSize="small" color="primary" />
      </IconButton>
      <IconButton aria-label="delete" size="small" color="error">
        <DeleteForeverIcon fontSize="small" color="error" />
      </IconButton>
    </>
  ),
  createData('4', 'Bob Brown', 'Art', 20230619, 1015, 1215,
    <>
      <IconButton aria-label="delete" size="small" color="primary">
        <EditIcon fontSize="small" color="primary" />
      </IconButton>
      <IconButton aria-label="delete" size="small" color="error">
        <DeleteForeverIcon fontSize="small" color="error" />
      </IconButton>
    </>
  ),
];

export default function ListLeave() {
  const [classroom, setClass] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setClass(event.target.value as string);
  };

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
    row.name.toLowerCase().includes(searchInput.toLowerCase()) &&
    (classroom === '' || row.classroom === classroom)
  );

  return (
    <ContentMain>
      <Grid container spacing={2} className='pt-7' justifyContent="center">
        <Grid item xs={3} sm={4} md={2} lg={2}>
          <TextField id="outlined-search" label="氏名" type="search" sx={{bgcolor: 'white'}} size="small" onChange={handleSearchInputChange} />
        </Grid>
        <Grid item xs={3} sm={4} md={2} lg={2} style={{ textAlign: 'center' }}>
          <FormControl sx={{ minWidth: 125 }} size="small" fullWidth>
            <InputLabel id="demo-select-small-label">クラス名</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={classroom}
              label="クラス名"
              onChange={handleChange}
              sx={{bgcolor: 'white'}}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="Math">Math (うさぎ)</MenuItem>
              <MenuItem value="Science">Science (くま)</MenuItem>
              <MenuItem value="History">History (ぱんだ)</MenuItem>
            </Select>
          </FormControl>
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
          <Button variant="contained" href="/teacher/leaveadd" size='small' startIcon={<AddIcon />}>
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
                      <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
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
