import { Grid, Typography, TextField, Box, Button, IconButton, Modal, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { ChangeEvent, FormEvent, useState } from "react";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

interface Data {
    years: string;
    basesalary: string;
    detail: JSX.Element;
}

function createData(
    years: string,
    basesalary: string,
    detail: JSX.Element,
): Data {
    return { years, basesalary, detail };
}

const initialRows: Data[] = [
    createData('濃部　圭子', '渡部　史朗',
        <>
            <IconButton aria-label="delete" size="small" >
                <EditIcon fontSize="small" className='text-sky-600' />
            </IconButton>
            <IconButton aria-label="delete" size="small" >
                <DeleteIcon fontSize="small" className='text-red-600' />
            </IconButton>
        </>
    ),
    createData('Ice cream sandwich', '渡部　史朗',
        <>
            <IconButton aria-label="edit" size="small" >
                <EditIcon fontSize="small" className='text-sky-600' />
            </IconButton>
            <IconButton aria-label="delete" size="small" >
                <DeleteIcon fontSize="small" className='text-red-600' />
            </IconButton>
        </>
    ),
    createData('Eclair', '渡部　史朗',
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
    width: { xs: '90%', sm: '40%', md: '3 0%', lg: '45%' }, // Adjust width based on screen size
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: 1,
};

function BasicallyTable() {
    const [rows, setRows] = useState<Data[]>(initialRows);
    const [open, setOpen] = useState(false);
    const [newEntry, setNewEntry] = useState<Omit<Data, 'detail'>>({

        years: '',
        basesalary: '',

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

            years: rowData.years,
            basesalary: rowData.basesalary,

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
           years: newEntry.years,
            basesalary: newEntry.basesalary,
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
            years: '',
            basesalary: '',
        });
        handleClose();
    };
    return (
        <div>
            <Grid container spacing={2} className="pt-5 text-right" >
                <Grid item xs={12} sm={12} md={12} lg={11.2} sx={{ marginLeft: { xs: 0, sm: -2, md: 0, lg: -18 } }}>
                    <Button
                        variant="contained"
                        onClick={handleOpen} >
                        Add
                    </Button>
                </Grid>
            </Grid>
            <Grid container className="pt-4" justifyContent="center">
                <Grid item xs={12} sm={12} md={11} lg={7}>
                    <TableContainer
                        component={Paper}
                        sx={{ border: '1px solid #ccc', position: 'relative', margin: { xs: '0 8px', sm: '0 16px', md: '0 24px' } }}>
                        <Table sx={{ minWidth: { xs: '250%', sm: '150%', md: '100%', lg: '100%' } }} size="small" aria-label="a dense table">
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={{ border: '1px solid #ccc', width: '20%' }} align="center">年月</TableCell>
                                    <TableCell sx={{ border: '1px solid #ccc', width: '20%' }} align="center">本俸額</TableCell>
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
                                                {row.years}
                                            </TableCell>
                                            <TableCell align="right" component="th" scope="row" sx={{ border: '1px solid #ccc' }}>
                                                {row.basesalary}
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
                    <Grid container spacing={2} className='pt-6' sx={{ marginLeft: { xs: -3, sm: -0.5, md: 0, lg: -1.1 } }} >
                        <Grid item xs={3} sm={2} md={2.4} lg={2}>
                            <Typography style={{ fontSize: '16px' }} className='pt-2 text-end'>
                                年月:
                            </Typography>
                        </Grid>
                        <Grid item xs={9} sm={4.5} md={3} lg={6}>
                            <TextField id="years" name="years" value={newEntry.years} onChange={handleChange} type="text" size="small" fullWidth sx={{ backgroundColor: 'white' }} />
                        </Grid>
                    </Grid>

                    <Grid container spacing={1} className='' sx={{ marginLeft: { xs: -2, sm: -6.5, md: 1, lg: -20 }, marginTop: { xs: 0, sm: 1.3, md: 0, lg: -1.5 } }}>
                        <Grid item xs={3} sm={3} md={2.4} lg={5} sx={{ marginTop: { xs: 0, sm: -0.5, md: 0, lg: 1.9 } }}>
                            <Typography style={{ fontSize: '16px' }} className='pt-2 text-end'>
                                本俸額:
                            </Typography>
                        </Grid>
                        <Grid item xs={9} sm={4.5} md={3} lg={6} sx={{ marginTop: { xs: 0, sm: -1, md: 0, lg: 1.9 }, marginLeft: { xs: 0, sm: 1, md: 0, lg: 1 } }}>
                            <TextField id="basesalary" name="basesalary" value={newEntry.basesalary} onChange={handleChange} type="text" size="small" fullWidth sx={{ backgroundColor: 'white' }} />
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

export default BasicallyTable