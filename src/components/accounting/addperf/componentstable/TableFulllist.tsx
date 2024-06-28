import {  Grid, TextField, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

interface Column {
  id: 'name' | 'classroom' | 'date' | 'sub' | 'fu';
  label: string;
  minWidth?: number;
  align?: 'right' | 'center';
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: 'name', label: '', minWidth: 130, align: 'center', },
  { id: 'classroom', label: '申請の有無', minWidth: 150, align: 'center', },
  { id: 'date', label: '加算・調整項目', minWidth: 250, },
  { id: 'sub', label: '適用年月又は適用年度', minWidth: 180, align: 'center', },
  { id: 'fu', label: '備考', minWidth: 180, align: 'center', },

];

interface Data {
  name: string;
  classroom: string;
  date: string;
  sub: JSX.Element;
  fu: JSX.Element;

}

function createData(
  name: string,
  classroom: string,
  date: string,
  sub: JSX.Element,
  fu: JSX.Element,

): Data {
  return { name, classroom, date, sub, fu };
}

// Example data (you can replace this with your actual data)
// start table 1
const rows = [
  createData('1', '◯', '休日保育加算',
    <TextField
      className='w-full'
      id="Notices-input"
      label=""
      type="text"
      size='small'
      sx={{
        backgroundColor: "white",
        fontSize: { xs: 11, sm: 11, md: 11, lg: 16, },
      }}
    />
    ,
    <TextField
      className='w-full'
      id="Notices-input"
      label=""
      type="text"
      size='small'
      sx={{
        backgroundColor: "white",
        fontSize: { xs: 11, sm: 11, md: 11, lg: 16, },
      }}
    />
  ),
  createData('1', '◯', 'チーム保育推進加算',
    <TextField
      className='w-full'
      id="Notices-input"
      label=""
      type="text"
      size='small'
      sx={{
        backgroundColor: "white",
        fontSize: { xs: 11, sm: 11, md: 11, lg: 16, },
      }}
    />
    ,
    <TextField
      className='w-full'
      id="Notices-input"
      label=""
      type="text"
      size='small'
      sx={{
        backgroundColor: "white",
        fontSize: { xs: 11, sm: 11, md: 11, lg: 16, },
      }}
    />
  ),
];
// End table 1

// start table 2
const rows2 = [
  createData('1', '◯', '高齡者等活躍促進加算',
    <TextField
      className='w-full flex justify-center'
      id="Notices-input"
      label=""
      type="text"
      size='small'
      sx={{
        backgroundColor: "white",
        fontSize: { xs: 11, sm: 11, md: 11, lg: 16, },
      }}
    />
    ,
    <TextField
      className='w-full'
      id="Notices-input"
      label=""
      type="text"
      size='small'
      sx={{
        backgroundColor: "white",
        fontSize: { xs: 11, sm: 11, md: 11, lg: 16, },
      }}
    />
  ),
  createData('1', '◯', '施設機能強化推進費加算',
    <TextField
      className='w-full'
      id="Notices-input"
      label=""
      type="text"
      size='small'
      sx={{
        backgroundColor: "white",
        fontSize: { xs: 11, sm: 11, md: 11, lg: 16, },
      }}
    />
    ,
    <TextField
      className='w-full'
      id="Notices-input"
      label=""
      type="text"
      size='small'
      sx={{
        backgroundColor: "white",
        fontSize: { xs: 11, sm: 11, md: 11, lg: 16, },
      }}
    />
  ),
];
// End table 2

function TableFulllist() {
    return (
       <div>
         {/* start table excretion */}
         <Grid container spacing={2} className='' justifyContent="center">
          <Paper sx={{ width: '90%', Height: 2000, overflow: 'hidden' }} className='ms-4'>
            <TableContainer sx={{ maxHeight: 2000 }}>
              <Table stickyHeader aria-label="sticky table" size="small">
                <TableHead >
                  <TableRow >
                    {columns.map((column) => (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{ minWidth: column.minWidth }}
                      >
                        <Typography variant="subtitle2" fontWeight="bold" sx={{
                backgroundColor: "white",
                fontSize: { xs: 11, sm: 11, md: 11, lg: 16, },
            }}>{column.label}</Typography>
                      </TableCell>
                    )
                    )}
                  </TableRow>
                </TableHead>
                <Grid item xs={12} sm={12} md={12} lg={12} className='' >
                  <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, fontWeight: 'bold' }} className='flex justify-start h-10 pt-2 pl-5' >
                    基本加算部分
                  </Typography>
                </Grid>
                <TableBody>
                  {rows
                    .map((row) => {
                      return (
                        <TableRow hover role="checkbox" tabIndex={-1} key={row.classroom} >
                          {columns.map((column) => {
                            const value = row[column.id];
                            return (
                              <TableCell key={column.id} align={column.align } sx={{
                                backgroundColor: "white",
                                fontSize: { xs: 11, sm: 11, md: 11, lg: 16, },
                            }}>
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
                <Grid item xs={12} sm={12} md={12} lg={12} className='' >
                  <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, fontWeight: 'bold' }} className='flex justify-start h-10 pt-2 pl-5' >
                    特定加算部分
                  </Typography>
                </Grid>
                <TableBody >
                  {rows2
                    .map((row) => {
                      return (
                        <TableRow hover role="checkbox" tabIndex={-1} key={row.classroom}>
                          {columns.map((column) => {
                            const value = row[column.id];
                            return (
                              <TableCell key={column.id} align={column.align}sx={{
                                backgroundColor: "white",
                                fontSize: { xs: 11, sm: 11, md: 11, lg: 16, },
                            }}>
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
          </Paper>
        </Grid>
        {/* end table excretion */}
       </div>
  )
}

export default TableFulllist