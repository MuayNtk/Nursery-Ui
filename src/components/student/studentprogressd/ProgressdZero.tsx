import React from 'react';
import ContentMain from "../../content/Content";
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
import AssignmentIcon from '@mui/icons-material/Assignment';
import StackedBarChartIcon from '@mui/icons-material/StackedBarChart';
import { FormControl, Grid, IconButton,  MenuItem, Select,  TextField, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

interface Column {
  id: 'name' | 'classroom' | 'date' | 'timestart' | 'timeend' | 'detail';
  label: string;
  minWidth?: number;
  align?: 'right' | 'center';
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: 'name', label: '氏名', minWidth: 150 },
  { id: 'classroom', label: '歳児', minWidth: 150 },
  {
    id: 'date',
    label: 'クラス名',
    minWidth: 150,
    align: 'center',
  },
  {
    id: 'timestart',
    label: '歳児保育経過記録',
    minWidth: 150,
    align: 'center',
  },
  {
    id: 'timeend',
    label: '保育所児童保育要録',
    minWidth: 150,
    align: 'center',
  },
  {
    id: 'detail',
    label: '',
    minWidth: 150,

  },
];

interface Data {
  name: string;
  classroom: string;
  date: string;
  timestart: JSX.Element;
  timeend: JSX.Element;
  detail: JSX.Element;
}

function createData(
  name: string,
  classroom: string,
  date: string,
  timestart: JSX.Element,
  timeend: JSX.Element,
  detail: JSX.Element
): Data {
  return { name, classroom, date, timestart, timeend, detail };
}

// Example data (you can replace this with your actual data)
const rows = [
  createData('濱千代　智宏', '1 歳児', 'くま',
    <IconButton aria-label="delete" size="small">
      <StackedBarChartIcon fontSize="small" className='text-red-600' />
    </IconButton>

    ,
    <IconButton aria-label="delete" size="small" >
      <AssignmentIcon fontSize="medium" className='text-cyan-500' />
    </IconButton>
    ,
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
  createData('濱千代　定 ', '1 歳児', 'ぱんだ',
    <IconButton aria-label="delete" size="small">
      <StackedBarChartIcon fontSize="small" className='text-red-600' />
    </IconButton>

    ,
    <IconButton aria-label="delete" size="small" >
      <AssignmentIcon fontSize="medium" className='text-cyan-500' />
    </IconButton>
    ,
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
  ), createData('立石　太平', '1 歳児', 'ぱんだ',
    <IconButton aria-label="delete" size="small">
      <StackedBarChartIcon fontSize="small" className='text-red-600' />
    </IconButton>

    ,
    <IconButton aria-label="delete" size="small" >
      <AssignmentIcon fontSize="medium" className='text-cyan-500' />
    </IconButton>
    ,
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
  ), createData('勝俣　悠生', '1 歳児', 'ぱんだ',
    <IconButton aria-label="delete" size="small">
      <StackedBarChartIcon fontSize="small" className='text-red-600' />
    </IconButton>

    ,
    <IconButton aria-label="delete" size="small" >
      <AssignmentIcon fontSize="medium" className='text-cyan-500' />
    </IconButton>
    ,
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
  createData('勝俣　松代', '1 歳児', 'かめ',
    <IconButton aria-label="delete" size="small">
      <StackedBarChartIcon fontSize="small" className='text-red-600' />
    </IconButton>

    ,
    <IconButton aria-label="delete" size="small" >
      <AssignmentIcon fontSize="medium" className='text-cyan-500' />
    </IconButton>
    ,
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
  createData('広田　木太郎', '1 歳児', 'かめ',
    <IconButton aria-label="delete" size="small">
      <StackedBarChartIcon fontSize="small" className='text-red-600' />
    </IconButton>

    ,
    <IconButton aria-label="delete" size="small" >
      <AssignmentIcon fontSize="medium" className='text-cyan-500' />
    </IconButton>
    ,
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

export default function ProgressdZeroForm() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (

    <>

      <ContentMain >


        {/* Start Facility Director  */}
        <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-7  ">
          <Grid item xs={2} sm={1.5} md={1} lg={1} >
            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, }} >
              施設長 :
            </Typography>
          </Grid>
          <Grid item xs={2} sm={1.5} md={1} lg={1} >
            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, fontWeight: 'bold', }} >
              濃部
            </Typography>
          </Grid>
          <Grid item xs={2} sm={1.5} md={1} lg={1} >
            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, fontWeight: 'bold', }} >
              多子多子
            </Typography>
          </Grid>
        </Grid >
        {/* End Facility Director  */}

        {/* Start director  */}
        <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-7 ">
          <Grid item xs={2} sm={1.5} md={1} lg={1} >
            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, }} >
              主任 :
            </Typography>
          </Grid>
          <Grid item xs={2} sm={1.5} md={1} lg={1} >
            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, fontWeight: 'bold', }} >
              渡部
            </Typography>
          </Grid>
          <Grid item xs={2} sm={1.5} md={1} lg={1} >
            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, fontWeight: 'bold', }} >
              史朗
            </Typography>
          </Grid>
        </Grid >
        {/* End director  */}

        {/* Start Responsible */}
        <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-7 ">
          <Grid item xs={2} sm={1.5} md={1} lg={1} >
            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, }} >
              担任 :
            </Typography>
          </Grid>
          <Grid item xs={2} sm={1.5} md={1} lg={1} >
            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, fontWeight: 'bold', }} >
              中川
            </Typography>
          </Grid>
          <Grid item xs={2} sm={1.5} md={1} lg={1} >
            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, fontWeight: 'bold', }} >
              康嘉
            </Typography>
          </Grid>
        </Grid >

        {/* End Responsible  */}

        {/* Start Child's name */}
        <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-7 ">
          <Grid item xs={2} sm={1.5} md={1} lg={1} >
            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, }} >
              児童名 :
            </Typography>
          </Grid>
          <Grid item xs={2} sm={1.5} md={1} lg={1} >
            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, fontWeight: 'bold', }} >
              長谷川
            </Typography>
          </Grid>
        </Grid >
        {/* End Child's name  */}

        {/* Start date of birth: */}
        <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-7 ">
          <Grid item xs={2} sm={1.5} md={1} lg={1} >
            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, }} >
              生年月日:
            </Typography>
          </Grid>
          <Grid item xs={2} sm={1.5} md={1.5} lg={1} className="">
            <FormControl sx={{ m: 1, minWidth: 120, marginLeft: { xs: 1, sm: 1, md: 2, lg: 1, } }} size='small' className="w-full " >
              <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>平成</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={5} sm={6} md={3} lg={1.5} className=" ">
            <TextField className='w-full ' id="Facility-input" label="年" type="text" size='small' sx={{ backgroundColor: "white", marginLeft: { xs: 9.5, sm: 11, md: 8, lg: 6, } }} />
          </Grid>
          <Grid item xs={4} sm={4} md={1} lg={1.5} className="">
            <FormControl sx={{ m: 1, minWidth: 120, marginLeft: { xs: 6, sm: 8, md: 9, lg: 7, } }} size='small' className="w-full " >
              <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, marginLeft: { xs: 8, sm: 10, md: 19, lg: 8, } }} >
            月
          </Typography>
          <Grid item xs={4} sm={4} md={1} lg={1} className="flex ">
            <FormControl sx={{ m: 1, minWidth: 120, marginLeft: { xs: 1, sm: 1, md: 1, lg: 2, } }} size='small' className="w-full " >
              <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>10</MenuItem>
                <MenuItem value={2}>20</MenuItem>
                <MenuItem value={3}>30</MenuItem>
                <MenuItem value={4}>40</MenuItem>
              </Select>
            </FormControl>
            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, marginRight: { xs: 15, sm: 2, md: 10, lg: 7, } }} className="pt-3">
              日
            </Typography>
          </Grid></Grid>
          {/* end date of birth: */}

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
                  {rows
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => {
                      return (
                        <TableRow hover role="checkbox" tabIndex={-1} key={row.classroom}>
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
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
        </Grid>

      </ContentMain >
    </>
  );
};
