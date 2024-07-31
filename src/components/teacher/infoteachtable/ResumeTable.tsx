import { Grid, Typography, TextField, Box, Button, IconButton, Modal, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { ChangeEvent, FormEvent, useState } from "react";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

interface Data {
    start_date: string;
    end_date: string;
    years_employment: string;
    appointments: string;
    job_type: string;
    issuer: string;
    detail: JSX.Element;
}

function createData(
    start_date: string,
    end_date: string,
    years_employment: string,
    appointments: string,
    job_type: string,
    issuer: string,
    detail: JSX.Element,
): Data {
    return { start_date, end_date, years_employment, appointments, job_type, issuer, detail };
}

const initialRows: Data[] = [
    createData('濃部　圭子', '渡部　史朗', '渡部　史朗', '6.0', '24', '24',
        <>
            <IconButton aria-label="delete" size="small" >
                <EditIcon fontSize="small" className='text-sky-600' />
            </IconButton>
            <IconButton aria-label="delete" size="small" >
                <DeleteIcon fontSize="small" className='text-red-600' />
            </IconButton>
        </>
    ),
    createData('Ice cream sandwich', '渡部　史朗', '237', '9.0', '37', '24',
        <>
            <IconButton aria-label="edit" size="small" >
                <EditIcon fontSize="small" className='text-sky-600' />
            </IconButton>
            <IconButton aria-label="delete" size="small" >
                <DeleteIcon fontSize="small" className='text-red-600' />
            </IconButton>
        </>
    ),
    createData('Eclair', '渡部　史朗', '262', '16.0', '24', '24',
        <>
            <IconButton aria-label="edit" size="small" >
                <EditIcon fontSize="small" className='text-sky-600' />
            </IconButton>
            <IconButton aria-label="delete" size="small" >
                <DeleteIcon fontSize="small" className='text-red-600' />
            </IconButton>
        </>
    ),
];


const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: { xs: '90%', sm: '80%', md: '3 0%', lg: '50%' }, // Adjust width based on screen size
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: 1,
};

function ResumeTable() {
    const [rows, setRows] = useState<Data[]>(initialRows);
    const [open, setOpen] = useState(false);
    const [newEntry, setNewEntry] = useState<Omit<Data, 'detail'>>({

        start_date: '',
        end_date: '',
        years_employment: '',
        appointments: '',
        job_type: '',
        issuer: '',

    });
    const [indexToEdit, setIndexToEdit] = useState<number | null>(null);

    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
        setIndexToEdit(null); // Reset indexToEdit when closing modal
    }


    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setNewEntry((prev) => ({ ...prev, [name]: name === 'protein' ? parseFloat(value) : value }));
    };

    const handleEdit = (index: number) => {
        const rowData = rows[index];
        setNewEntry({

            start_date: rowData.start_date,
            end_date: rowData.end_date,
            years_employment: rowData.years_employment,
            appointments: rowData.appointments,
            job_type: rowData.job_type,
            issuer: rowData.issuer,


        });
        setIndexToEdit(index); // Set indexToEdit to the index of the row being edited
        setOpen(true);
    };

    const handleDelete = (index: number) => {
        const updatedRows = rows.filter((_, rowIndex) => rowIndex !== index);
        setRows(updatedRows);
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const newData: Data = {
            start_date: newEntry.start_date,
            end_date: newEntry.end_date,
            years_employment: newEntry.years_employment,
            appointments: newEntry.appointments,
            job_type: newEntry.job_type,
            issuer: newEntry.issuer,
            detail: (
                <>
                    <IconButton aria-label="edit" size="small">
                        <EditIcon fontSize="small" className="text-sky-600" />
                    </IconButton>
                    <IconButton aria-label="delete" size="small">
                        <DeleteIcon fontSize="small" className="text-red-600" />
                    </IconButton>
                </>
            ),
        };

        if (indexToEdit !== null) {
            // Editing existing row
            const updatedRows = rows.map((row, index) =>
                index === indexToEdit ? { ...newData } : row
            );
            setRows(updatedRows);
        } else {
            // Adding new row
            setRows(prevRows => [...prevRows, newData]);
        }

        // Reset newEntry and close modal
        setNewEntry({
            start_date: '',
            end_date: '',
            years_employment: '',
            appointments: '',
            job_type: '',
            issuer: '',
        });
        handleClose();
    };




    return (
        <div>
            <Grid container spacing={2} className="pt-5 text-right" >
                <Grid item xs={12} sm={12} md={12} lg={11.2} >
                    <Button
                        variant="contained"
                        onClick={handleOpen}

                    >
                        Add
                    </Button>
                </Grid>
            </Grid>
            <Grid container className="pt-4" justifyContent="start">
                <Grid item xs={12} sm={12} md={11} lg={11}>
                    <TableContainer
                        component={Paper}
                        sx={{ border: '1px solid #ccc', position: 'relative', margin: { xs: '0 8px', sm: '0 16px', md: '0 24px' } }}>
                        <Table sx={{ minWidth: { xs: '250%', sm: '170%', md: '150%', lg: '100%' } }} size="small" aria-label="a dense table">
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={{ border: '1px solid #ccc', width: '5%' }} align="center">開始日</TableCell>
                                    <TableCell sx={{ border: '1px solid #ccc', width: '5%' }} align="center">終了日</TableCell>
                                    <TableCell sx={{ border: '1px solid #ccc', width: '5%' }} align="center">勤務年数</TableCell>
                                    <TableCell sx={{ border: '1px solid #ccc', width: '5%' }} align="center">任免その他</TableCell>
                                    <TableCell sx={{ border: '1px solid #ccc', width: '5%' }} align="center">職種</TableCell>
                                    <TableCell sx={{ border: '1px solid #ccc', width: '5%' }} align="center">発令者</TableCell>
                                    <TableCell sx={{ border: '1px solid #ccc', width: '5%' }} align="center"></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.length === 0 ? (
                                    <TableRow>
                                        <TableCell colSpan={5} align="center">
                                            No data
                                        </TableCell>
                                    </TableRow>
                                ) : (
                                    rows.map((row, index) => (
                                        <TableRow
                                            key={index}
                                            sx={{
                                                '&:last-child td, &:last-child th': { border: '1px solid #ccc' },
                                                border: '1px solid #ccc',
                                            }}
                                        >
                                            <TableCell align="right" component="th" scope="row" sx={{ border: '1px solid #ccc' }}>
                                                {row.start_date}
                                            </TableCell>
                                            <TableCell align="right" component="th" scope="row" sx={{ border: '1px solid #ccc' }}>
                                                {row.end_date}
                                            </TableCell>
                                            <TableCell align="center" component="th" scope="row" sx={{ border: '1px solid #ccc' }}>
                                                {row.years_employment}
                                            </TableCell>
                                            <TableCell align="right" component="th" scope="row" sx={{ border: '1px solid #ccc' }}>
                                                {row.appointments}
                                            </TableCell>
                                            <TableCell align="right" sx={{ border: '1px solid #ccc' }}>
                                                {row.job_type}
                                            </TableCell>
                                            <TableCell align="center" sx={{ border: '1px solid #ccc' }}>
                                                {row.issuer}
                                            </TableCell>

                                            <TableCell align="right" sx={{ border: '1px solid #ccc' }}>
                                                <IconButton
                                                    aria-label="edit"
                                                    size="small"
                                                    onClick={() => handleEdit(index)}
                                                >
                                                    <EditIcon fontSize="small" className="text-sky-600" />
                                                </IconButton>
                                                <IconButton
                                                    aria-label="delete"
                                                    size="small"
                                                    onClick={() => handleDelete(index)}
                                                >
                                                    <DeleteIcon fontSize="small" className="text-red-600" />
                                                </IconButton>
                                            </TableCell>
                                        </TableRow>
                                    ))
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>


            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={modalStyle} component="form" onSubmit={handleSubmit}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Add New Entry
                    </Typography>
                    <Grid container spacing={2} className='pt-6' sx={{ marginLeft: { xs: -3, sm: -0.5, md: 0, lg: 2 } }} >
                        <Grid item xs={4} sm={2} md={2.4} lg={2} sx={{ fontSize: '16px', marginLeft: { xs: 0, sm: -0.5, md: -1, lg: -3.5 } }}>
                            <Typography className='pt-5 text-end'>
                                年 月 日:
                            </Typography>
                        </Grid>
                        <Grid item xs={7} sm={5} md={4} lg={4.5} sx={{ marginLeft: { xs: -2, sm: -4, md: -2.8, lg: -3 } }} className='scale-75'>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoContainer components={['DatePicker']}>
                                    <DatePicker sx={{ backgroundColor: "white", border: '1px solid gray', borderRadius: '4px', }} />
                                </DemoContainer>
                            </LocalizationProvider>
                        </Grid>
                        <Grid item xs={4} sm={2} md={2.4} lg={2} sx={{ fontSize: '16px', marginLeft: { xs: 0, sm: 9, md: -20, lg: -13 } }}>
                            <Typography className='pt-5 text-end'>
                                ~
                            </Typography>
                        </Grid>
                        <Grid item xs={7} sm={5} md={4} lg={4.5} sx={{ marginLeft: { xs: -2, sm: -2.3, md: -2.8, lg: -2 } }} className='scale-75'>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoContainer components={['DatePicker']}>
                                    <DatePicker sx={{ backgroundColor: "white", border: '1px solid gray', borderRadius: '4px', }} />
                                </DemoContainer>
                            </LocalizationProvider>
                        </Grid>
                    </Grid>

                    <Grid container spacing={2} className='pt-3' sx={{ marginLeft: { xs: -4, sm: -0.5, md: 0, lg: -1.3 } }} >
                        <Grid item xs={4} sm={2} md={2.4} lg={2}>
                            <Typography style={{ fontSize: '16px' }} className='pt-3 text-end'>
                                勤務年数:
                            </Typography>
                        </Grid>
                        <Grid item xs={7} sm={3} md={3} lg={4}>
                            <textarea
                                id="years_employment"
                                name="years_employment"
                                value={newEntry.years_employment}
                                onChange={handleChange}
                                rows={2}  // Set the number of rows here
                                className="w-40 sm:w-32 lg:w-52"
                                style={{ border: '1px solid gray', borderRadius: '4px', resize: 'none', padding: '3px' }}
                            />
                        </Grid>
                        <Grid item xs={4} sm={2} md={2.4} lg={2} sx={{ marginLeft: { xs: 0, sm: -0.5, md: -1, lg: -1 } }}>
                            <Typography style={{ fontSize: '16px' }} className='pt-3 text-end'>
                                任免その他:
                            </Typography>
                        </Grid>
                        <Grid item xs={7} sm={3} md={3} lg={4}>
                            <textarea
                                id="appointments"
                                name="appointments"
                                value={newEntry.appointments}
                                onChange={handleChange}
                                rows={2}  // Set the number of rows here
                                className="w-40 sm:w-32 lg:w-52"
                                style={{ border: '1px solid gray', borderRadius: '4px', resize: 'none', padding: '3px' }}
                            />
                        </Grid>
                    </Grid>

                    <Grid container spacing={2} className='pt-6' sx={{ marginLeft: { xs: -4, sm: -0.5, md: 0, lg: -1.3 } }} >
                        <Grid item xs={4} sm={2} md={2.4} lg={2}>
                            <Typography style={{ fontSize: '16px' }} className='pt-2 text-end'>
                                職種:
                            </Typography>
                        </Grid>
                        <Grid item xs={7} sm={3} md={3} lg={4}>
                            <TextField id="job_type" name="job_type" value={newEntry.job_type} onChange={handleChange} type="text" size="small" fullWidth sx={{ backgroundColor: "white" }} />
                        </Grid>
                        <Grid item xs={4} sm={2} md={2.4} lg={2} sx={{ marginLeft: { xs: 0, sm: -0.5, md: -1, lg: -1 } }}>
                            <Typography style={{ fontSize: '16px' }} className='pt-2 text-end'>
                                発令者:
                            </Typography>
                        </Grid>
                        <Grid item xs={7} sm={3} md={3} lg={4}>
                            <TextField id="issuer" name="issuer" value={newEntry.issuer} onChange={handleChange} type="text" size="small" fullWidth sx={{ backgroundColor: "white" }} />
                        </Grid>
                    </Grid>





                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
                        <Button onClick={handleClose} sx={{ mr: 2 }}>Cancel</Button>
                        <Button type="submit" variant="contained">Save</Button>
                    </Box>
                </Box>
            </Modal></div>
    )
}

export default ResumeTable