import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid, Typography, Button, TextareaAutosize, TableCell, TableRow, TableHead, TableBody, Paper, TableContainer, Table, Card, FormControl, Select, InputLabel, MenuItem, TextField, IconButton, Modal, Box } from '@mui/material';
import ContentMain from '../../content/Content';
import SaveIcon from '@mui/icons-material/Save';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

interface EditMonthlyZeroProps {
    pid: string;
    selectedOption: string;
}

interface Data {
    FacilityDirector: string;
    Chief: string;
    daily: string;
    education: string;
    detail: JSX.Element;
}

function createData(
    FacilityDirector: string,
    Chief: string,
    daily: string,
    education: string,
    detail: JSX.Element
): Data {
    return { FacilityDirector, Chief, daily, education, detail };
}

const initialRows: Data[] = [
    createData('濃部　圭子', '渡部　史朗', '6.0', '24',
        <>
            <IconButton aria-label="delete" size="small" >
                <EditIcon fontSize="small" className='text-sky-600' />
            </IconButton>
            <IconButton aria-label="delete" size="small" >
                <DeleteIcon fontSize="small" className='text-red-600' />
            </IconButton>
        </>
    ),
    createData('Ice cream sandwich', '237', '9.0', '37',
        <>
            <IconButton aria-label="edit" size="small" >
                <EditIcon fontSize="small" className='text-sky-600' />
            </IconButton>
            <IconButton aria-label="delete" size="small" >
                <DeleteIcon fontSize="small" className='text-red-600' />
            </IconButton>
        </>
    ),
    createData('Eclair', '262', '16.0', '24',
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
    width: { xs: '90%', sm: '80%', md: '3 0%', lg: '30%' }, // Adjust width based on screen size
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: 1,
};

const EditMonthlyZero: React.FC<EditMonthlyZeroProps> = ({ pid, selectedOption }) => {
    const [rows, setRows] = useState<Data[]>(initialRows);
    const [open, setOpen] = useState(false);
    const [newEntry, setNewEntry] = useState<Omit<Data, 'detail'>>({
        FacilityDirector: '',
        Chief: '',
        daily: '',
        education: '',
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
            FacilityDirector: rowData.FacilityDirector,
            Chief: rowData.Chief,
            daily: rowData.daily,
            education: rowData.education,
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
            FacilityDirector: newEntry.FacilityDirector,
            Chief: newEntry.Chief,
            daily: newEntry.daily,
            education: newEntry.education,
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
            FacilityDirector: '',
            Chief: '',
            daily: '',
            education: '',
        });
        handleClose();
    };

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        pid: '',
        selectedOption: '',
        emotional_stability1: '',
        perspectives_on_physical1: '',
        emotional_stability2: '',
        perspectives_on_physical2: '',
        health_safety1: '',
        cooperation: '',
        event1: '',
        individual_response: '',
        evaluation_and_reflection1: '',
        nursingcare: '',
        education: '',
        cooperation2: '',
        event2: '',
        environment: '',
        life_and_play: '',
        health_safety2: '',
        sounkan: '',
        evaluation_and_reflection2: '',
    });

    useEffect(() => {
        const storedData = JSON.parse(sessionStorage.getItem('monthlyData0') || '[]');
        const item = storedData.find((item: any) => item.pid === pid && item.selectedOption === selectedOption);
        if (item) {
            setFormData(item);
        } else {
            // Optionally, you could handle the case where the item is not found
            // For example, setting formData to default values or showing a message
        }
    }, [pid, selectedOption]);

    const handleChange2 = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        console.log('Changing field:', id, 'to', value);
        setFormData((prevData) => ({
            ...prevData,
            [id]: value
        }));
    };

    const handleSave = () => {
        console.log('Saving data:', formData);
        const storedData = JSON.parse(sessionStorage.getItem('monthlyData0') || '[]');
        const updatedData = storedData.map((item: any) =>
            item.pid === pid ? formData : item
        );
        sessionStorage.setItem('monthlyData0', JSON.stringify(updatedData));
        navigate('/report/monthlyplan');
    };

    const options = [
        '月指導計画 0 歳児',
        '月指導計画 1・2 歳児',
        '月指導計画 3・4・5 歳児'
    ];

    return (
        <ContentMain className="flex flex-col min-h-screen">
            <Grid item xs={9} sm={7} md={5} lg={2.5} className='text-start pt-5 pl-3'>
                <FormControl size='small'>
                    <InputLabel id="selected-option-label">年間指導計画を選択する</InputLabel>
                    <Select
                        labelId="selected-option-label"
                        value={selectedOption}
                        sx={{ minWidth: 250, backgroundColor: '#F5F5F5' }}
                        readOnly
                        label="年間指導計画を選択する"
                    >
                        {options.map(option => (
                            <MenuItem key={option} value={option}>
                                {option}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Grid>

            <Grid className="pt-10 lg:pt-0 text-start">
                <Grid container spacing={1} justifyContent='start' className="pt-4">
                    <Grid item xs={3} sm={2} md={2} lg={2}>
                        <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14, } }} className="text-end">
                            施設長 :
                        </Typography>
                    </Grid>
                    <Grid item xs={3} sm={2} md={1} lg={2} >
                        <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14, }, fontWeight: 'bold', }} >
                            濃部　圭子
                        </Typography>
                    </Grid>
                </Grid >

                <Grid container spacing={1} justifyContent='start' className="pt-4  ">
                    <Grid item xs={3} sm={2} md={1} lg={2} >
                        <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14, }, }} className="text-end" >
                            主任 :
                        </Typography>
                    </Grid>
                    <Grid item xs={3} sm={2} md={1} lg={2} >
                        <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14, }, fontWeight: 'bold', }} >
                            渡部　史朗
                        </Typography>
                    </Grid>
                </Grid >

                <Grid container spacing={1} justifyContent='start' className="pt-4  ">
                    <Grid item xs={3} sm={2} md={1} lg={2}>
                        <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14, }, }} className="text-end ">
                            担任 :
                        </Typography>
                    </Grid>
                    <Grid item xs={3} sm={2} md={1} lg={2} >
                        <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14, }, fontWeight: 'bold', }} >
                            中川　康嘉
                        </Typography>
                    </Grid>
                </Grid >

                {/* Start Grid 指導計画は食育の内容を含むこと。*/}
                <Grid className="mt-5 lg:mt-7">
                    <Typography
                        component="div"
                        sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, backgroundColor: '#CCF0FD', fontWeight: 'bold', pt: { xs: 1.5, sm: 1.5, md: 1.5, lg: 1 } }}
                        className='flex justify-start h-10 pt-2 pl-5' >
                        指導計画は食育の内容を含むこと。
                    </Typography>
                </Grid>
                {/* End Grid 指導計画は食育の内容を含むこと。*/}

                <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-14 pl-10 flex '  >
                    <Card sx={{ bgcolor: "pink", width: 100, height: 35, }} >
                        <Typography component='div' className="pt-2 lg:pt-1" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, fontWeight: 'bold', marginLeft: { xs: 4, sm: 4, md: 4, lg: 3, } }}>
                            ねらい
                        </Typography>
                    </Card>
                </Grid>

                <Grid container spacing={2} className="pt-5" justifyContent='center'>
                    <Grid item xs={12} md={6} >
                        <Grid container spacing={1} alignItems='center' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 5 } }}>
                            <Grid item xs={1} sm={4} md={3} lg={1} className="text-end">
                                <Typography component="div" fontWeight="bold" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16 } }}>
                                    義護
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-2' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 7 } }}>
                            <Grid item xs={7.5} sm={3} md={8.5} lg={12}>
                                <Typography gutterBottom sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14 } }}>
                                    生命の保持・情緒の安定
                                </Typography>
                                <TextareaAutosize
                                    id="emotional_stability1"
                                    name="emotional_stability1"
                                    minRows={3}
                                    maxRows={100}
                                    onChange={handleChange2}
                                    value={formData.emotional_stability1}
                                    className="w-56 sm:w-60 lg:w-96"
                                    style={{ border: '1px solid gray', borderRadius: '4px' }}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Grid container spacing={1} justifyContent='start' alignItems='center' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: -3 } }}>
                            <Grid item xs={1} sm={4} md={3} lg={1} className="text-end">
                                <Typography component="div" fontWeight="bold" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16 } }}>
                                    教育
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-2 ' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: -3 } }}>
                            <Grid item xs={7.5} sm={7} md={8.5} lg={12}>
                                <Typography gutterBottom sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14 } }}>
                                    関する視点 身体的発達に , 関する視点 社会的発達に , 関する視点 精神的発達に
                                </Typography>
                                <TextareaAutosize
                                    id="perspectives_on_physical1"
                                    name="perspectives_on_physical1"
                                    minRows={3}
                                    maxRows={100}
                                    onChange={handleChange2}
                                    value={formData.perspectives_on_physical1}
                                    className="w-56 sm:w-60 lg:w-96"
                                    style={{ border: '1px solid gray', borderRadius: '4px' }}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>


                <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-10 pl-10 flex '  >
                    <Card sx={{ bgcolor: "pink", width: { xs: 300, sm: 280, md: 100, lg: 380 }, height: 40 }}>
                        <Typography component='div' className="pt-3 lg:pt-2" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, fontWeight: 'bold', marginLeft: { xs: 4, sm: 4, md: 4, lg: 3, } }}>
                            子どもとの関わり方(保育士等の育みたい内容)
                        </Typography>
                    </Card>
                </Grid>

                <Grid container spacing={2} className="pt-5">
                    <Grid item xs={12} md={6} >
                        <Grid container spacing={1} justifyContent='start' alignItems='center' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 5 } }}>
                            <Grid item xs={1} sm={4} md={3} lg={1} className="text-end">
                                <Typography component="div" fontWeight="bold" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16 } }}>
                                    義護
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-2' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 7 } }}>
                            <Grid item xs={7.5} sm={3} md={8.5} lg={12}>
                                <Typography gutterBottom sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14 } }}>
                                    生命の保持・情緒の安定
                                </Typography>
                                <TextareaAutosize
                                    id="emotional_stability2"
                                    name="emotional_stability2"
                                    minRows={3}
                                    maxRows={100}
                                    onChange={handleChange2}
                                    value={formData.emotional_stability2}
                                    className="w-56 sm:w-60 lg:w-96"
                                    style={{ border: '1px solid gray', borderRadius: '4px' }}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Grid container spacing={1} justifyContent='start' alignItems='center' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: -3 } }}>
                            <Grid item xs={1} sm={4} md={3} lg={1} className="text-end">
                                <Typography component="div" fontWeight="bold" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16 } }}>
                                    教育
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-2 ' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: -3 } }}>
                            <Grid item xs={7.5} sm={7} md={8.5} lg={12}>
                                <Typography gutterBottom sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14 } }}>
                                    関する視点 身体的発達に , 関する視点 社会的発達に , 関する視点 精神的発達に
                                </Typography>
                                <TextareaAutosize
                                    id="perspectives_on_physical2"
                                    name="perspectives_on_physical2"
                                    minRows={3}
                                    maxRows={100}
                                    onChange={handleChange2}
                                    value={formData.perspectives_on_physical2}
                                    className="w-56 sm:w-60 lg:w-96"
                                    style={{ border: '1px solid gray', borderRadius: '4px' }}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-10 pl-10 flex '  >
                    <Card sx={{ bgcolor: "pink", width: { xs: 300, sm: 280, md: 100, lg: 380 }, height: 40 }}>
                        <Typography component='div' className="pt-3 lg:pt-2" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, fontWeight: 'bold', marginLeft: { xs: 4, sm: 4, md: 4, lg: 3, } }}>
                            環境づくり予される子どもの活動配慮・援助
                        </Typography>
                    </Card>
                </Grid>

                <Grid container spacing={2} className="pt-2">
                    <Grid item xs={12} md={6} >
                        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-2' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 7 } }}>
                            <Grid item xs={7.5} sm={3} md={8.5} lg={12}>
                                <Typography gutterBottom sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14 } }}>
                                    健康 · 安全
                                </Typography>
                                <TextareaAutosize
                                    id="health_safety1"
                                    name="health_safety1"
                                    minRows={3}
                                    maxRows={100}
                                    onChange={handleChange2}
                                    value={formData.health_safety1}
                                    className="w-56 sm:w-60 lg:w-96"
                                    style={{ border: '1px solid gray', borderRadius: '4px' }}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-2 ' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: -3 } }}>
                            <Grid item xs={7.5} sm={7} md={8.5} lg={12}>
                                <Typography gutterBottom sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14 } }}>
                                    との連携家庭・地域
                                </Typography>
                                <TextareaAutosize
                                    id="cooperation"
                                    name="cooperation"
                                    minRows={3}
                                    maxRows={100}
                                    onChange={handleChange2}
                                    value={formData.cooperation}
                                    className="w-56 sm:w-60 lg:w-96"
                                    style={{ border: '1px solid gray', borderRadius: '4px' }}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid container spacing={2} className="pt-2">
                    <Grid item xs={12} md={6} >
                        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-2' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 7 } }}>
                            <Grid item xs={7.5} sm={3} md={8.5} lg={12}>
                                <Typography gutterBottom sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14 } }}>
                                    行事
                                </Typography>
                                <TextareaAutosize
                                    id="event1"
                                    name="event1"
                                    minRows={3}
                                    maxRows={100}
                                    onChange={handleChange2}
                                    value={formData.event1}
                                    className="w-56 sm:w-60 lg:w-96"
                                    style={{ border: '1px solid gray', borderRadius: '4px' }}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-2 ' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: -3 } }}>
                            <Grid item xs={7.5} sm={7} md={8.5} lg={12}>
                                <Typography gutterBottom sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14 } }}>
                                    個別対応運
                                </Typography>
                                <TextareaAutosize
                                    id="individual_response"
                                    name="individual_response"
                                    minRows={3}
                                    maxRows={100}
                                    onChange={handleChange2}
                                    value={formData.individual_response}
                                    className="w-56 sm:w-60 lg:w-96"
                                    style={{ border: '1px solid gray', borderRadius: '4px' }}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid container spacing={2} className="pt-2">
                    <Grid item xs={12} md={6} >
                        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-2' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 7 } }}>
                            <Grid item xs={7.5} sm={3} md={8.5} lg={12}>
                                <Typography gutterBottom sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14 } }}>
                                    評価・反省
                                </Typography>
                                <TextareaAutosize
                                    id="evaluation_and_reflection1"
                                    name="evaluation_and_reflection1"
                                    minRows={3}
                                    maxRows={100}
                                    onChange={handleChange2}
                                    value={formData.evaluation_and_reflection1}
                                    className="w-56 sm:w-60 lg:w-96"
                                    style={{ border: '1px solid gray', borderRadius: '4px' }}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid className="mt-5 lg:mt-7">
                    <Typography
                        component="div"
                        sx={{ color: 'black', fontSize: { xs: 10, sm: 10, md: 11, lg: 16 }, backgroundColor: '#CCF0FD', fontWeight: 'bold', pt: { xs: 1.5, sm: 1.5, md: 1.5, lg: 1 } }}
                        className='flex justify-start h-12 lg:h-10 pt-2 pl-5 pr-5' >
                        身休的発達に関する視点、社会的発達に関する視点、精神的発達に関する視点、指導計画は食育の内容を含むこと
                    </Typography>
                </Grid>


                <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-10 pl-10 flex '  >
                    <Card sx={{ bgcolor: "pink", width: { xs: 100, sm: 280, md: 100, lg: 100 }, height: 40 }}>
                        <Typography component='div' className="pt-3 lg:pt-2" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, fontWeight: 'bold', marginLeft: { xs: 4, sm: 4, md: 4, lg: 3, } }}>
                            ねらい
                        </Typography>
                    </Card>
                </Grid>

                <Grid container spacing={2} className="pt-2">
                    <Grid item xs={12} md={6} >
                        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-2' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 7 } }}>
                            <Grid item xs={7.5} sm={3} md={8.5} lg={12}>
                                <Typography gutterBottom sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14 } }}>
                                    養護
                                </Typography>
                                <TextareaAutosize
                                    id="nursingcare"
                                    name="nursingcare"
                                    minRows={3}
                                    maxRows={100}
                                    onChange={handleChange2}
                                    value={formData.nursingcare}
                                    className="w-56 sm:w-60 lg:w-96"
                                    style={{ border: '1px solid gray', borderRadius: '4px' }}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-2 ' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: -3 } }}>
                            <Grid item xs={7.5} sm={7} md={8.5} lg={12}>
                                <Typography gutterBottom sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14 } }}>
                                    教育
                                </Typography>
                                <TextareaAutosize
                                    id="education"
                                    name="education"
                                    minRows={3}
                                    maxRows={100}
                                    onChange={handleChange2}
                                    value={formData.education}
                                    className="w-56 sm:w-60 lg:w-96"
                                    style={{ border: '1px solid gray', borderRadius: '4px' }}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid container spacing={2} className="pt-2">
                    <Grid item xs={12} md={6} >
                        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-2' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 7 } }}>
                            <Grid item xs={7.5} sm={3} md={8.5} lg={12}>
                                <Typography gutterBottom sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14 } }}>
                                    家庭・地域との連携
                                </Typography>
                                <TextareaAutosize
                                    id="cooperation2"
                                    name="cooperation2"
                                    minRows={3}
                                    maxRows={100}
                                    onChange={handleChange2}
                                    value={formData.cooperation2}
                                    className="w-56 sm:w-60 lg:w-96"
                                    style={{ border: '1px solid gray', borderRadius: '4px' }}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-2 ' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: -3 } }}>
                            <Grid item xs={7.5} sm={7} md={8.5} lg={12}>
                                <Typography gutterBottom sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14 } }}>
                                    行事
                                </Typography>
                                <TextareaAutosize
                                    id="event2"
                                    name="event2"
                                    minRows={3}
                                    maxRows={100}
                                    onChange={handleChange2}
                                    value={formData.event2}
                                    className="w-56 sm:w-60 lg:w-96"
                                    style={{ border: '1px solid gray', borderRadius: '4px' }}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid container spacing={2} className="pt-10 text-right" >
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
                    <Grid item xs={12} sm={12} md={8.5} lg={11}>
                        <TableContainer
                            component={Paper}
                            sx={{ border: '1px solid #ccc', position: 'relative', margin: { xs: '0 8px', sm: '0 16px', md: '0 24px' } }}
                        >
                            <Table sx={{ minWidth: { xs: '250%', sm: '170%', md: 200 } }} size="small" aria-label="a dense table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell sx={{ border: '1px solid #ccc', width: '13%' }}>施設長</TableCell>
                                        <TableCell sx={{ border: '1px solid #ccc', width: '13%' }} align="right">主任</TableCell>
                                        <TableCell sx={{ border: '1px solid #ccc', width: '30%' }} align="right">子どもの生活する姿</TableCell>
                                        <TableCell sx={{ border: '1px solid #ccc', width: '30%' }} align="right">養護・教育</TableCell>
                                        <TableCell sx={{ border: '1px solid #ccc', width: '10%' }} align="right"></TableCell>
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
                                                <TableCell component="th" scope="row" sx={{ border: '1px solid #ccc' }}>
                                                    {row.FacilityDirector}
                                                </TableCell>
                                                <TableCell align="right" sx={{ border: '1px solid #ccc' }}>
                                                    {row.Chief}
                                                </TableCell>
                                                <TableCell align="right" sx={{ border: '1px solid #ccc' }}>
                                                    {row.daily}
                                                </TableCell>
                                                <TableCell align="right" sx={{ border: '1px solid #ccc' }}>
                                                    {row.education}
                                                </TableCell>
                                                <TableCell align="center" sx={{ border: '1px solid #ccc' }}>
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
                        <TextField
                            id="FacilityDirector"
                            name="FacilityDirector"
                            label="施設長"
                            value={newEntry.FacilityDirector}
                            onChange={handleChange}
                            fullWidth
                            size="small"
                            margin="normal"
                            required
                        />
                        <TextField
                            id="Chief"
                            name="Chief"
                            label="主任"
                            value={newEntry.Chief}
                            onChange={handleChange}
                            fullWidth
                            size="small"
                            margin="normal"
                            required
                        />
                        <Typography gutterBottom sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14 } }} className="pt-4">
                            子どもの生活する姿
                        </Typography>
                        <textarea
                            id="daily"
                            name="daily"
                            value={newEntry.daily}
                            onChange={handleChange}
                            rows={3}  // Set the number of rows here
                            className="w-72 sm:w-72 lg:w-80"
                            style={{ border: '1px solid gray', borderRadius: '4px', resize: 'none', padding: '3px' }}
                        />
                        <Typography gutterBottom sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14 } }} className="pt-4">
                            子どもとの関わり方保育士等の育みたい内容<br /> (養護・教育)
                        </Typography>
                        <textarea
                            id="education"
                            name="education"
                            value={newEntry.education}
                            onChange={handleChange}
                            rows={3}  // Set the number of rows here
                            className="w-72 sm:w-72 lg:w-80"
                            style={{ border: '1px solid gray', borderRadius: '4px', resize: 'none', padding: '3px' }}
                        />
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
                            <Button onClick={handleClose} sx={{ mr: 2 }}>Cancel</Button>
                            <Button type="submit" variant="contained">Save</Button>
                        </Box>
                    </Box>
                </Modal>

                <Grid container spacing={2} className="pt-7">
                    <Grid item xs={12} md={6} >
                        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-2' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 7 } }}>
                            <Grid item xs={7.5} sm={3} md={8.5} lg={12}>
                                <Typography gutterBottom sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14 } }}>
                                    環境づくり
                                </Typography>
                                <TextareaAutosize
                                    id="environment"
                                    name="environment"
                                    minRows={3}
                                    maxRows={100}
                                    onChange={handleChange2}
                                    value={formData.environment}
                                    className="w-56 sm:w-60 lg:w-96"
                                    style={{ border: '1px solid gray', borderRadius: '4px' }}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-2 ' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: -3 } }}>
                            <Grid item xs={7.5} sm={7} md={8.5} lg={12}>
                                <Typography gutterBottom sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14 } }}>
                                    生活と遊び
                                </Typography>
                                <TextareaAutosize
                                    id="life_and_play"
                                    name="life_and_play"
                                    minRows={3}
                                    maxRows={100}
                                    onChange={handleChange2}
                                    value={formData.life_and_play}
                                    className="w-56 sm:w-60 lg:w-96"
                                    style={{ border: '1px solid gray', borderRadius: '4px' }}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid container spacing={2} className="pt-7">
                    <Grid item xs={12} md={6} >
                        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-2' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 7 } }}>
                            <Grid item xs={7.5} sm={3} md={8.5} lg={12}>
                                <Typography gutterBottom sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14 } }}>
                                    健康 · 安全
                                </Typography>
                                <TextareaAutosize
                                    id="health_safety2"
                                    name="health_safety2"
                                    minRows={3}
                                    maxRows={100}
                                    onChange={handleChange2}
                                    value={formData.health_safety2}
                                    className="w-56 sm:w-60 lg:w-96"
                                    style={{ border: '1px solid gray', borderRadius: '4px' }}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-2 ' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: -3 } }}>
                            <Grid item xs={7.5} sm={7} md={8.5} lg={12}>
                                <Typography gutterBottom sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14 } }}>
                                    相運館
                                </Typography>
                                <TextareaAutosize
                                    id="sounkan"
                                    name="sounkan"
                                    minRows={3}
                                    maxRows={100}
                                    onChange={handleChange2}
                                    value={formData.sounkan}
                                    className="w-56 sm:w-60 lg:w-96"
                                    style={{ border: '1px solid gray', borderRadius: '4px' }}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid container spacing={2} className="pt-2">
                    <Grid item xs={12} md={6} >
                        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-2' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 7 } }}>
                            <Grid item xs={7.5} sm={3} md={8.5} lg={12}>
                                <Typography gutterBottom sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14 } }}>
                                    評価 · 反省
                                </Typography>
                                <TextareaAutosize
                                    id="evaluation_and_reflection2"
                                    name="evaluation_and_reflection2"
                                    minRows={3}
                                    maxRows={100}
                                    onChange={handleChange2}
                                    value={formData.evaluation_and_reflection2}
                                    className="w-56 sm:w-60 lg:w-96"
                                    style={{ border: '1px solid gray', borderRadius: '4px' }}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            <div className="mt-auto">
                <Grid container justifyContent="center" spacing={2} className='pt-12' sx={{ bottom: 0, width: '100%', backgroundColor: 'inherit', paddingBottom: '10px' }}>
                    <Grid item>
                        <Button variant="contained" href="/report/monthlyplan" size='medium' className='text-center' startIcon={<ArrowBackIcon />} color="warning">
                            <Typography component="div" style={{ color: 'white', alignItems: 'center' }}>
                                戻る
                            </Typography>
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button variant="contained" type="submit" size='medium' className='text-center' startIcon={<SaveIcon />} color="success" onClick={handleSave}>
                            <Typography component="div" style={{ color: 'white', alignItems: 'center' }}>
                                修正
                            </Typography>
                        </Button>
                    </Grid>
                </Grid>
            </div>

        </ContentMain>
    );
};

export default EditMonthlyZero;
