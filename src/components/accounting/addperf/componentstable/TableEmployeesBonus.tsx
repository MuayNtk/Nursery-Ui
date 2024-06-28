import { FormControl, Grid,  MenuItem, Select, TextField, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

interface Column {
    id: 'name' | 'classroom' | 'date' | 'sub' | 'fu' | 'uu';
    label: string;
    minWidth?: number;
    align?: 'right' | 'center';
    format?: (value: number) => string;
}

const columns: readonly Column[] = [
    { id: 'name', label: '氏名', minWidth: 150, align: 'center', },
    { id: 'classroom', label: '年齢', minWidth: 150, align: 'center', },
    { id: 'date', label: '雇用契約期間', minWidth: 150, align: 'center', },
    { id: 'sub', label: '年間総雇用時間数', minWidth: 150, align: 'center', },
    { id: 'fu', label: '備考x1', minWidth: 150, align: 'right', },
    { id: 'uu', label: '', minWidth: 150, align: 'center', },

];

interface Data {
    name: JSX.Element;
    classroom: JSX.Element;
    date: JSX.Element;
    sub: JSX.Element;
    fu: JSX.Element;
    uu: JSX.Element;

}

function createData(
    name: JSX.Element,
    classroom: JSX.Element,
    date: JSX.Element,
    sub: JSX.Element,
    fu: JSX.Element,
    uu: JSX.Element,

): Data {
    return { name, classroom, date, sub, fu, uu };
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
        ,
        <FormControl size="small" fullWidth>
            <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white", }}>
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
            </Select>
        </FormControl>
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
        />,
    ),
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
        ,
        <FormControl size="small" fullWidth>
            <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white", }}>
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
            </Select>
        </FormControl>
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
        />,
    ),
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
        ,
        <FormControl size="small" fullWidth>
            <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white", }}>
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
            </Select>
        </FormControl>
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
        />,
    ),
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
        ,
        <FormControl size="small" fullWidth>
            <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white", }}>
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
            </Select>
        </FormControl>
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
        />,
    ),
    createData(
        <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, }} className='flex justify-center h-10 pt-2 pl-5' >
            計
        </Typography>
        ,
        <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, }} className='flex justify-center h-10 pt-2 pl-5' >
            -
        </Typography>
        ,
        <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, }} className='flex justify-center h-10 pt-2 pl-5' >
            -
        </Typography>
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
        ,
        <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, }} className='flex justify-center h-10 pt-2 pl-5' >
            -
        </Typography>
        ,
        <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, }} className='flex justify-center h-10 pt-2 pl-5' >
            -
        </Typography>
    ),
];

// End table 1

function TableEmployeesBonus() {
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

export default TableEmployeesBonus