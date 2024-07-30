import { Grid, Typography, TextField, Box, Button, TextareaAutosize, SelectChangeEvent, MenuItem, Select, InputLabel, FormControl, FormControlLabel, RadioGroup, Radio, IconButton, Modal, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import ContentMain from "../content/Content";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import React from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SaveIcon from '@mui/icons-material/Save';
import { useNavigate, useParams } from "react-router-dom";

interface FormData {
    pid: string;
    age: string;
    month2: string;
    children: string;
    considerations: string;
    evaluation_and_reflection: string;
}

interface Data {
    day: string;
    month: string;
    meal: string;
    excretion: string;
    sleep: string;
    health: string;
    other: string;
    detail: JSX.Element;
}

function createData(
    day: string,
    month: string,
    meal: string,
    excretion: string,
    sleep: string,
    health: string,
    other: string,
    detail: JSX.Element,
): Data {
    return { day, month, meal, excretion, sleep, health, other, detail };
}

const initialRows: Data[] = [
    createData('濃部　圭子', '渡部　史朗', '渡部　史朗', '6.0', '24', '24', '24',
        <>
            <IconButton aria-label="delete" size="small" >
                <EditIcon fontSize="small" className='text-sky-600' />
            </IconButton>
            <IconButton aria-label="delete" size="small" >
                <DeleteIcon fontSize="small" className='text-red-600' />
            </IconButton>
        </>
    ),
    createData('Ice cream sandwich', '渡部　史朗', '237', '9.0', '37', '24', '24',
        <>
            <IconButton aria-label="edit" size="small" >
                <EditIcon fontSize="small" className='text-sky-600' />
            </IconButton>
            <IconButton aria-label="delete" size="small" >
                <DeleteIcon fontSize="small" className='text-red-600' />
            </IconButton>
        </>
    ),
    createData('Eclair', '渡部　史朗', '262', '16.0', '24', '24', '24',
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
    width: { xs: '90%', sm: '80%', md: '3 0%', lg: '45%' }, // Adjust width based on screen size
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: 1,
};


export default function EditCareDiary() {
    const { pid } = useParams<{ pid: string }>();
    const [rows, setRows] = useState<Data[]>(initialRows);
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const [newEntry, setNewEntry] = useState<Omit<Data, 'detail'>>({

        day: '',
        month: '',
        meal: '',
        excretion: '',
        sleep: '',
        health: '',
        other: '',

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

            day: rowData.day,
            month: rowData.month,
            meal: rowData.meal,
            excretion: rowData.excretion,
            sleep: rowData.sleep,
            health: rowData.health,
            other: rowData.other,


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
            day: newEntry.day,
            month: newEntry.month,
            meal: newEntry.meal,
            excretion: newEntry.excretion,
            sleep: newEntry.sleep,
            health: newEntry.health,
            other: newEntry.other,
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
            day: '',
            month: '',
            meal: '',
            excretion: '',
            sleep: '',
            health: '',
            other: '',
        });
        handleClose();
    };

    const [day, setDay] = React.useState('');

    const handleDayChange = (event: SelectChangeEvent) => {
        setDay(event.target.value as string);
    };

    const [month, setMonth] = React.useState('');

    const handleMonthChange = (event: SelectChangeEvent) => {
        setMonth(event.target.value as string);
    };

    const [formData, setFormData] = useState<FormData>({
        pid: '',
        age: '',
        children: '',
        month2: '',
        considerations: '',
        evaluation_and_reflection: '',
    });

    useEffect(() => {
        const storedData = JSON.parse(sessionStorage.getItem('carediaryData') || '[]');
        const item = storedData.find((item: any) => item.pid === pid);
        if (item) {
            setFormData(item);
        } else {
            // Optionally, you could handle the case where the item is not found
            // For example, setting formData to default values or showing a message
        }
    }, [pid]);

    const handleChange2 = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value
        }));
    };

    const handleSelectChange2 = (e: SelectChangeEvent<string>, id: string) => {
        const value = e.target.value;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value
        }));
    };

    const handleSave = () => {
        console.log('Saving data:', formData);
        const storedData = JSON.parse(sessionStorage.getItem('carediaryData') || '[]');
        const updatedData = storedData.map((item: any) =>
            item.pid === pid ? formData : item
        );
        sessionStorage.setItem('carediaryData', JSON.stringify(updatedData));
        navigate('/report/carediary');
    };

    return (
        <>
            <ContentMain className="flex flex-col min-h-screen">
                {/* Start Grid */}
                <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-10 lg:pt-0">
                    <Grid item xs={9} sm={7} md={5} lg={4} sx={{ ml: { xs: 0, sm: 0, md: 0, lg: 2 }, mt: { xs: -1, sm: -2, md: 5, lg: 4 } }}>
                        <div>
                            <FormControl sx={{ minWidth: 100 }} size="small" fullWidth>
                                <InputLabel id="demo-select-small-label">週ごとのプランを選択する</InputLabel>
                                <Select
                                    labelId="demo-select-small-label"
                                    id="age"
                                    name="age"
                                    size="small"
                                    label="週ごとのプランを選択する"
                                    value={formData.age}
                                    onChange={(e) => handleSelectChange2(e, 'age')}
                                    className="mb-5"
                                    sx={{
                                        backgroundColor: "white",
                                    }}
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value="週案と保育日誌 (未満児) 0・1 歳用">週案と保育日誌 (未満児) 0・1 歳用</MenuItem>
                                    <MenuItem value="週案と保育日誌 (未満児) 1・2 歳用">週案と保育日誌 (未満児) 1・2 歳用</MenuItem>
                                </Select>
                            </FormControl>
                            <div>
                                {formData.age && (
                                    <Typography
                                        component="div"
                                        sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, fontWeight: 'bold' }}
                                        className='flex justify-start h-10 pt-2 pl-5'
                                    >
                                        {`${formData.age}`}
                                    </Typography>
                                )}
                            </div>
                        </div>
                    </Grid>
                </Grid>
                {/* End Grid */}

                {/* Start Grid */}
                <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-10 lg:pt-10">
                    <Grid item xs={2} sm={2} md={2} lg={1} sx={{ ml: { xs: 4, sm: 5, md: -1, lg: 10 } }}>
                        <FormControl sx={{ minWidth: 90 }} size="small">
                            <InputLabel id="month-select-label">月</InputLabel>
                            <Select
                                labelId="month-select-label"
                                id="month2"
                                value={formData.month2}
                                label="月"
                                onChange={(e) => handleSelectChange2(e, 'month2')}
                                sx={{
                                    backgroundColor: "white",
                                }}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                {Array.from({ length: 12 }, (_, i) => (
                                    <MenuItem key={i + 1} value={i + 1}>
                                        {i + 1} 月
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={7} sm={6.5} md={4} lg={4} >
                        <Typography component="div" sx={{ fontSize: { xs: 12, sm: 12, md: 14, lg: 16, }, ml: { xs: 5, sm: -4, md: -9, lg: -10 } }} >
                            個人カリキュラム・配録
                        </Typography>
                    </Grid>
                    <Grid item xs={5} sm={3} md={2} lg={2} >
                        <Typography component="div" sx={{ fontSize: { xs: 11, sm: 12, md: 14, lg: 16, }, ml: { xs: -3, sm: 3, md: -13, lg: -10 }, mt: { xs: 1.5, sm: 2, md: 0, lg: 0 } }} >
                            児童名 :
                        </Typography>
                    </Grid>
                    <Grid item xs={2} sm={1.5} md={1} lg={1} >
                        <Typography component="div" fontWeight="bold" sx={{ fontSize: { xs: 11, sm: 11, md: 14, lg: 16, }, ml: { xs: -15, sm: -5, md: -20, lg: -30 }, mt: { xs: 1.5, sm: 2, md: 0, lg: 0 } }} >
                            長谷川
                        </Typography>
                    </Grid>
                    <Grid item xs={2} sm={1.5} md={1} lg={1} >
                        <Typography component="div" sx={{ fontSize: { xs: 11, sm: 12, md: 14, lg: 16, }, ml: { xs: -10, sm: -2, md: -9, lg: -15 }, mt: { xs: 1.5, sm: 2, md: 0, lg: 0 } }} >
                            1歳
                        </Typography>
                    </Grid>
                    <Grid item xs={2} sm={1.5} md={1} lg={1} >
                        <Typography component="div" sx={{ fontSize: { xs: 11, sm: 12, md: 14, lg: 16, }, ml: { xs: -13, sm: -2, md: -9, lg: -25 }, mt: { xs: 1.5, sm: 2, md: 0, lg: 0 } }} >
                            5月
                        </Typography>
                    </Grid>
                </Grid>
                {/* End Grid */}

                {/* Start Grid */}
                <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-3 lg:pt-7'>
                    <Grid item xs={7} sm={5} md={3} lg={3}>
                        <Typography component="div" sx={{ fontSize: { xs: 11, sm: 12, md: 11, lg: 16, }, ml: { xs: -7, sm: -4, md: 2, lg: 10 } }} >
                            子どもの姿
                        </Typography>
                    </Grid>
                    <Grid item xs={4} sm={1} md={1} lg={1} sx={{ ml: { xs: 5, sm: -8, md: -3, lg: -5 } }}>
                        <TextareaAutosize
                            id="children"
                            name="children"
                            minRows={3}
                            maxRows={100}
                            onChange={handleChange2}
                            value={formData.children}
                            className="w-56 sm:w-60 lg:w-96 border border-gray-300"
                        />
                    </Grid>
                </Grid>
                {/* End Grid */}

                {/* Start Grid */}
                <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-5 lg:pt-3'>
                    <Grid item xs={7} sm={5} md={3} lg={3}>
                        <Typography component="div" sx={{ fontSize: { xs: 11, sm: 12, md: 11, lg: 16, }, ml: { xs: -6, sm: -4, md: 2, lg: 10 } }} >
                            ねらいと配慮
                        </Typography>
                    </Grid>
                    <Grid item xs={4} sm={1} md={1} lg={1} sx={{ ml: { xs: 5, sm: -8, md: -3, lg: -5 } }}>
                        <TextareaAutosize
                            id="considerations"
                            name="considerations"
                            minRows={3}
                            maxRows={100}
                            onChange={handleChange2}
                            value={formData.considerations}
                            className="w-56 sm:w-60 lg:w-96 border border-gray-300"
                        />
                    </Grid>
                </Grid>
                {/* End Grid */}
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
                                        <TableCell sx={{ border: '1px solid #ccc', width: '5%' }} align="center">日</TableCell>
                                        <TableCell sx={{ border: '1px solid #ccc', width: '5%' }} align="center">月</TableCell>
                                        <TableCell sx={{ border: '1px solid #ccc', width: '5%' }} align="right">食事</TableCell>
                                        <TableCell sx={{ border: '1px solid #ccc', width: '5%' }} align="right">排泄</TableCell>
                                        <TableCell sx={{ border: '1px solid #ccc', width: '5%' }} align="right">睡眠</TableCell>
                                        <TableCell sx={{ border: '1px solid #ccc', width: '5%' }} align="right">健康</TableCell>
                                        <TableCell sx={{ border: '1px solid #ccc', width: '5%' }} align="right">その他の記録</TableCell>
                                        <TableCell sx={{ border: '1px solid #ccc', width: '5%' }} align="right"></TableCell>
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
                                                <TableCell align="center" component="th" scope="row" sx={{ border: '1px solid #ccc' }}>
                                                    {row.day}
                                                </TableCell>
                                                <TableCell align="center" component="th" scope="row" sx={{ border: '1px solid #ccc' }}>
                                                    {row.month}
                                                </TableCell>
                                                <TableCell align="right" component="th" scope="row" sx={{ border: '1px solid #ccc' }}>
                                                    {row.meal}
                                                </TableCell>
                                                <TableCell align="right" component="th" scope="row" sx={{ border: '1px solid #ccc' }}>
                                                    {row.excretion}
                                                </TableCell>
                                                <TableCell align="right" sx={{ border: '1px solid #ccc' }}>
                                                    {row.sleep}
                                                </TableCell>
                                                <TableCell align="right" sx={{ border: '1px solid #ccc' }}>
                                                    {row.health}
                                                </TableCell>
                                                <TableCell align="right" sx={{ border: '1px solid #ccc' }}>
                                                    {row.other}
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
                        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 1, md: 1 }} className='pl-3 pt-5' >
                            <Grid item xs={3} sm={1.5} md={1} lg={5} sx={{ ml: { xs: -1, sm: -1, md: -1, lg: -1 } }}>
                                <FormControl sx={{ minWidth: 90 }} size="small">
                                    <InputLabel id="day-select-label">日</InputLabel>
                                    <Select
                                        labelId="day-select-label"
                                        id="day-select"
                                        value={day}
                                        label="日"
                                        onChange={handleDayChange}
                                        sx={{
                                            backgroundColor: "white",
                                        }}
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        {Array.from({ length: 31 }, (_, i) => (
                                            <MenuItem key={i + 1} value={i + 1}>
                                                {i + 1} 日
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={2} sm={1.5} md={1} lg={1} sx={{ ml: { xs: 5, sm: 6, md: 7, lg: -18 } }}>
                                <FormControl sx={{ minWidth: 90 }} size="small">
                                    <InputLabel id="month-select-label">月</InputLabel>
                                    <Select
                                        labelId="month-select-label"
                                        id="month-select"
                                        value={month}
                                        label="月"
                                        onChange={handleMonthChange}
                                        sx={{
                                            backgroundColor: "white",
                                        }}
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        {Array.from({ length: 12 }, (_, i) => (
                                            <MenuItem key={i + 1} value={i + 1}>
                                                {i + 1} 月
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>

                        <Grid container spacing={1} className="" justifyContent='center'>
                            <Grid item xs={12} sm={3} md={6} >
                                <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-2' sx={{ marginLeft: { xs: "-15px", sm: -21, md: "-18px", lg: -1.9 } }}>
                                    <Grid item xs={7.5} sm={4} md={8.5} lg={12} className="text-start">
                                        <Typography gutterBottom sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14 } }} className="pt-4">
                                            食事
                                        </Typography>
                                        <textarea
                                            id="meal"
                                            name="meal"
                                            value={newEntry.meal}
                                            onChange={handleChange}
                                            rows={2}  // Set the number of rows here
                                            className="w-72 sm:w-64 lg:w-64"
                                            style={{ border: '1px solid gray', borderRadius: '4px', resize: 'none', padding: '3px' }}
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sm={3} md={6}>
                                <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-2 ' sx={{ marginLeft: { xs: "-15px", sm: "-18px", md: -15, lg: -5 } }}>
                                    <Grid item xs={7.5} sm={4} md={8.5} lg={12} className="text-start">
                                        <Typography gutterBottom sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14 } }} className="pt-4">
                                            排泄
                                        </Typography>
                                        <textarea
                                            id="excretion"
                                            name="excretion"
                                            value={newEntry.excretion}
                                            onChange={handleChange}
                                            rows={2}  // Set the number of rows here
                                            className="w-72 sm:w-64 lg:w-64"
                                            style={{ border: '1px solid gray', borderRadius: '4px', resize: 'none', padding: '3px' }}
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Typography gutterBottom sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14 } }} className="pt-4">
                            睡眠
                        </Typography>
                        <textarea
                            id="sleep"
                            name="sleep"
                            value={newEntry.sleep}
                            onChange={handleChange}
                            rows={2}  // Set the number of rows here
                            className="w-72 sm:w-72 lg:w-64"
                            style={{ border: '1px solid gray', borderRadius: '4px', resize: 'none', padding: '3px' }}
                        />
                        <Typography gutterBottom sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14 } }} className="pt-4">
                            健康
                        </Typography>
                        <Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className=' pl-3' >
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="paidleave"
                                name="radio-buttons-group"
                                row
                            >
                                <Grid item xs={12} sm={12} md={12} lg={12} sx={{ ml: { xs: 1, sm: 1, md: 1, lg: 1 } }} className="pt-2">
                                    <FormControlLabel value="良好" control={<Radio />} label="良好" />
                                    <FormControlLabel value="鼻水・咳" control={<Radio />} label="鼻水・咳" />
                                </Grid>
                            </RadioGroup>
                            <Grid item xs={9} sm={3} md={4} lg={5} sx={{ ml: { xs: -1.5, sm: 2, md: 1, lg: -1.5 } }}>
                                <TextField
                                    className='w-full'
                                    id="furigana-input"
                                    label=""
                                    type="text"
                                    size='small'
                                    sx={{
                                        backgroundColor: "white",
                                        border: '1px solid gray', borderRadius: '4px',
                                    }}
                                />
                            </Grid>
                        </Grid>

                        <Typography gutterBottom sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14 } }} className="pt-4">
                            その他の記録
                        </Typography>
                        <textarea
                            id="other"
                            name="other"
                            value={newEntry.other}
                            onChange={handleChange}
                            rows={2.5}  // Set the number of rows here
                            className="w-72 sm:w-72 lg:w-80"
                            style={{ border: '1px solid gray', borderRadius: '4px', resize: 'none', padding: '3px' }}
                        />
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
                            <Button onClick={handleClose} sx={{ mr: 2 }}>Cancel</Button>
                            <Button type="submit" variant="contained">Save</Button>
                        </Box>
                    </Box>
                </Modal>

                {/* Start Grid */}
                <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-10' sx={{ ml: { xs: 1, sm: 0, md: -2, lg: -2 } }}>
                    <Grid item xs={4} sm={3} md={3} lg={3}>
                        <Typography component="div" sx={{ fontSize: { xs: 12, sm: 12, md: 11, lg: 16, }, ml: { xs: 0, sm: 0, md: 2, lg: 10 } }} >
                            評価・反省
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={5} md={1} lg={1} sx={{ ml: { xs: -5, sm: -1, md: -3, lg: -5 }, pb: 3 }}>
                        <TextareaAutosize
                            id="evaluation_and_reflection"
                            name="evaluation_and_reflection"
                            minRows={3}
                            maxRows={100}
                            onChange={handleChange2}
                            value={formData.evaluation_and_reflection}
                            className="w-56 sm:w-60 lg:w-96 border border-gray-300"
                        />
                    </Grid>
                </Grid>
                {/* End Grid */}

                {/* Start Grid */}
                <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-1 lg:pt-2">
                    <Grid item xs={5} sm={3} md={3} lg={3} >
                        <Typography component="div" sx={{ fontSize: { xs: 11, sm: 12, md: 14, lg: 16, }, ml: { xs: -3, sm: 3, md: 0, lg: 5 } }} >
                            施設長
                        </Typography>
                    </Grid>
                    <Grid item xs={2} sm={1.5} md={1} lg={1} >
                        <Typography component="div" fontWeight="bold" sx={{ fontSize: { xs: 11, sm: 11, md: 14, lg: 16, }, ml: { xs: -15, sm: -5, md: -7, lg: -15 } }} >
                            渡部
                        </Typography>
                    </Grid>
                    <Grid item xs={2} sm={1.5} md={1} lg={1} >
                        <Typography component="div" fontWeight="bold" sx={{ fontSize: { xs: 11, sm: 11, md: 14, lg: 16, }, ml: { xs: -18, sm: -7, md: -9, lg: -25 } }} >
                            圭子
                        </Typography>
                    </Grid>
                </Grid>
                {/* End Grid */}

                {/* Start Grid */}
                <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-1 lg:pt-3">
                    <Grid item xs={5} sm={3} md={3} lg={3} >
                        <Typography component="div" sx={{ fontSize: { xs: 11, sm: 12, md: 14, lg: 16, }, ml: { xs: -3, sm: 3, md: 0, lg: 5 } }} >
                            主任
                        </Typography>
                    </Grid>
                    <Grid item xs={2} sm={1.5} md={1} lg={1} >
                        <Typography component="div" fontWeight="bold" sx={{ fontSize: { xs: 11, sm: 11, md: 14, lg: 16, }, ml: { xs: -15, sm: -5, md: -7, lg: -15 } }} >
                            渡部
                        </Typography>
                    </Grid>
                    <Grid item xs={2} sm={1.5} md={1} lg={1} >
                        <Typography component="div" fontWeight="bold" sx={{ fontSize: { xs: 11, sm: 11, md: 14, lg: 16, }, ml: { xs: -18, sm: -7, md: -9, lg: -25 } }} >
                            史朗
                        </Typography>
                    </Grid>
                </Grid>
                {/* End Grid */}

                {/* Start Grid */}
                <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-1 lg:pt-3">
                    <Grid item xs={5} sm={3} md={3} lg={3} >
                        <Typography component="div" sx={{ fontSize: { xs: 11, sm: 12, md: 14, lg: 16, }, ml: { xs: -3, sm: 3, md: 0, lg: 5 } }} >
                            担任
                        </Typography>
                    </Grid>
                    <Grid item xs={2} sm={1.5} md={1} lg={1} >
                        <Typography component="div" fontWeight="bold" sx={{ fontSize: { xs: 11, sm: 11, md: 14, lg: 16, }, ml: { xs: -15, sm: -5, md: -7, lg: -15 } }} >
                            中川
                        </Typography>
                    </Grid>
                    <Grid item xs={2} sm={1.5} md={1} lg={1} >
                        <Typography component="div" fontWeight="bold" sx={{ fontSize: { xs: 11, sm: 11, md: 14, lg: 16, }, ml: { xs: -18, sm: -7, md: -9, lg: -25 } }} >
                            康嘉
                        </Typography>
                    </Grid>
                </Grid>
                <div className="mt-auto">
                    <Grid container justifyContent="center" spacing={2} className='pt-12' sx={{ bottom: 0, width: '100%', backgroundColor: 'inherit', paddingBottom: '10px' }}>
                        <Grid item>
                            <Button variant="contained" href="/report/carediary" size='medium' className='text-center' startIcon={<ArrowBackIcon />} color="warning">
                                <Typography component="div" style={{ color: 'white', alignItems: 'center' }}>
                                    戻る
                                </Typography>
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button variant="contained" href="#" size='medium' className='text-center' startIcon={<SaveIcon />} color="success" onClick={handleSave} >
                                <Typography component="div" style={{ color: 'white', alignItems: 'center' }}>
                                    修正
                                </Typography>
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            </ContentMain>
        </>
    );
};
