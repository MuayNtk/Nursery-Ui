import React, { useState } from 'react';
import {
  Button,
  Grid,
  IconButton,
  TextField,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Chip,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from '@mui/material';
import ContentMain from '../content/Content';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AddIcon from '@mui/icons-material/Add';
import CheckIcon from '@mui/icons-material/Check';

interface Column {
  id: 'name' | 'date' | 'timestart' | 'timeend' | 'detail';
  label: string;
  minWidth?: number;
  align?: 'right' | 'center';
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: 'name', label: '氏名', minWidth: 150 },
  { id: 'date', label: '日付', minWidth: 150, align: 'right' },
  { id: 'timestart', label: '開始時間', minWidth: 150, align: 'right' },
  { id: 'timeend', label: '終了時間', minWidth: 150, align: 'right' },
  { id: 'detail', label: '', minWidth: 100, align: 'center' },
];

interface Data {
  id: string;
  name: string;
  date: string;
  timestart: string;
  timeend: string;
  detail: JSX.Element;
}

function createData(
  id: string,
  name: string,
  date: string,
  timestart: string,
  timeend: string,
  detail: JSX.Element
): Data {
  return { id, name, date, timestart, timeend, detail };
}

const role = localStorage.getItem('role');
const username = localStorage.getItem('username');

// Example data (you can replace this with your actual data)
const initialRows = [
  createData('1', '佐藤 春', '令和 20230619', '12.00', '17.00',<></>),
  createData('2', '田中 美月', '令和 20230619', '10.00', '17.00',<></>),
  createData('3', '松村 夢', '令和 20230619', '9.00', '12.00',<></>),
  createData('4', '山田 レイ', '令和 20230619', '12.00', '17.00',<></>),
];

export default function ListLeave() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchInput, setSearchInput] = useState('');
  const [open, setOpen] = useState(false);
  const [currentId, setCurrentId] = useState<string | null>(null);
  const [currentRowData, setCurrentRowData] = useState<Data | null>(null);
  const [confirmedRows, setConfirmedRows] = useState<string[]>([]);
  const [notApprovedRows, setNotApprovedRows] = useState<string[]>([]);

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  const handleCheckClick = (id: string) => {
    const row = initialRows.find(row => row.id === id);
    if (row) {
      setCurrentRowData(row);
      setCurrentId(id);
      setOpen(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
    setCurrentId(null);
    setCurrentRowData(null);
  };

  const handleConfirm = () => {
    if (currentId) {
      setConfirmedRows([...confirmedRows, currentId]);
    }
    handleClose();
  };

  const handleCancel = () => {
    if (currentId) {
      setNotApprovedRows([...notApprovedRows, currentId]);
    }
    handleClose();
  };

  const filteredRows = initialRows.filter(row =>
    role === 'admin' || row.name === username
  ).filter(row =>
    row.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <ContentMain>
      <Grid container spacing={2} className='pt-7' justifyContent="center">
        <Grid item xs={3} sm={4} md={2} lg={2}>
          <TextField
            id="outlined-search"
            label="氏名"
            type="search"
            sx={{ bgcolor: 'white' }}
            size="small"
            onChange={handleSearchInputChange}
          />
        </Grid>
        <Grid item xs={6} sm={4} md={3} lg={1.5}>
          <Button
            variant="contained"
            href="#contained-buttons"
            sx={{ marginLeft: { xs: 6, sm: 1, md: 1, lg: 1 } }}
          >
            <Typography component="div" style={{ color: 'white' }}>
              検索する
            </Typography>
          </Button>
        </Grid>
      </Grid>
      <Grid container className='pt-7' justifyContent="right">
        <Grid>
          <Button
            variant="contained"
            href="/teacher/leaveadd"
            size='small'
            startIcon={<AddIcon />}
          >
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
                          if (column.id === 'detail') {
                            return (
                              <TableCell key={column.id} align={column.align}>
                                {role === 'admin' && !confirmedRows.includes(row.id) && !notApprovedRows.includes(row.id) && (
                                  <>
                                    <IconButton aria-label="check" size="small" color="primary" onClick={() => handleCheckClick(row.id)}>
                                      <CheckIcon fontSize="small" color="primary" />
                                    </IconButton>
                                  </>
                                )}
                                {role === 'admin' && confirmedRows.includes(row.id) && (
                                  
                                  <Chip color="success" size="small" label="Approved" />
                                )}
                                {role === 'admin' && notApprovedRows.includes(row.id) && (
                                  <Chip color="error" size="small" label="Not Approved"/>

                                )}
                                {role === 'teacher' && (
                                  <>
                                    <IconButton aria-label="edit" size="small" color="primary">
                                      <EditIcon fontSize="small" color="primary" />
                                    </IconButton>
                                    <IconButton aria-label="delete" size="small" color="error">
                                      <DeleteForeverIcon fontSize="small" color="error" />
                                    </IconButton>
                                  </>
                                )}
                              </TableCell>
                            );
                          }
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
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Confirmation</DialogTitle>
        <DialogContent>
          {currentRowData && (
            <>
              <Typography variant="h6">Details</Typography>
              <Typography>氏　名: {currentRowData.name}</Typography>
              <Typography>適　用 : 特別休暇</Typography>
              <Typography>期　間: {currentRowData.date}</Typography>
              <Typography>Start Time: {currentRowData.timestart}</Typography>
              <Typography>End Time: {currentRowData.timeend}</Typography>
              <FormGroup>
                <FormControlLabel control={<Checkbox/>} label="承認" />
              </FormGroup>
            </>
          )}
          <DialogContentText>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleConfirm} color="primary">
            Confirm
          </Button>
          <Button onClick={handleCancel} color="error">
            Not Approve
          </Button>
        </DialogActions>
      </Dialog>
    </ContentMain>
  );
}
