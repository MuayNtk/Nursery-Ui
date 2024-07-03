import { Grid, InputAdornment, TextField, Typography } from '@mui/material';
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
    { id: 'name', label: '申請時の年間延べ利用子ども数(見込)※1', minWidth: 200, align: 'center', },
    { id: 'classroom', label: '年間延べ利用子ども数(実績)*2', minWidth: 150, align: 'center', },
    { id: 'date', label: '年間実利用児童数*3', minWidth: 250, align: 'center', },
    { id: 'sub', label: 'うち平日は他の施設・事業所を利用する実利用児童数※4', minWidth: 250, align: 'center', },
    { id: 'fu', label: '加算実施月数', minWidth: 150, align: 'center', },

];

interface Data {
    name: JSX.Element;
    classroom: JSX.Element;
    date: JSX.Element;
    sub: JSX.Element;
    fu: JSX.Element;

}

function createData(
    name: JSX.Element,
    classroom: JSX.Element,
    date: JSX.Element,
    sub: JSX.Element,
    fu: JSX.Element,

): Data {
    return { name, classroom, date, sub, fu };
}

// Example data (you can replace this with your actual data)
// start table 1
const rows = [
    createData(
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
            InputProps={{
                endAdornment: <InputAdornment position="end">人</InputAdornment>,
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
            InputProps={{
                endAdornment: <InputAdornment position="end">人</InputAdornment>,
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
            InputProps={{
                endAdornment: <InputAdornment position="end">人</InputAdornment>,
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
            InputProps={{
                endAdornment: <InputAdornment position="end">人</InputAdornment>,
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
            InputProps={{
                endAdornment: <InputAdornment position="end">人</InputAdornment>,
            }}
        />
    ),
];

// End table 1



function TableIndividualvote() {
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
                                                fontSize: { xs: 11, sm: 11, md: 11, lg: 16, },
                                            }}>{column.label}</Typography>
                                        </TableCell>
                                    )
                                    )}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows
                                    .map((row) => {
                                        return (
                                            <TableRow hover role="checkbox" tabIndex={-1} >
                                                {columns.map((column) => {
                                                    const value = row[column.id];
                                                    return (
                                                        <TableCell key={column.id} align={column.align} sx={{
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

export default TableIndividualvote