import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { TextField, Button, Typography, Grid, FormControl, InputLabel, Select, MenuItem, FormControlLabel, RadioGroup, Radio, SelectChangeEvent } from '@mui/material';
import ContentMain from '../content/Content';
import SaveIcon from '@mui/icons-material/Save';

const EditStaffForm: React.FC = () => {
    const { pid } = useParams<{ pid: string }>();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        pid: '',
        dep: '',
        furigana: '',
        fullname: '',
        gender: '',
        era: '',
        year: '',
        month: '',
        day: '',
    });
    
    useEffect(() => {
        const storedData = JSON.parse(sessionStorage.getItem('staffData') || '[]');
        const item = storedData.find((item: any) => item.pid === pid);
        if (item) {
            setFormData(item);
        } else {
            // Optionally, you could handle the case where the item is not found
            // For example, setting formData to default values or showing a message
        }
    }, [pid]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        console.log('Changing field:', id, 'to', value);
        setFormData((prevData) => ({
            ...prevData,
            [id]: value
        }));
    };

    const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            gender: value
        }));
    };

    const handleSelectChange = (e: SelectChangeEvent<string>, id: string) => {
        const value = e.target.value;
        console.log('Selecting value:', id, 'to', value);
        setFormData((prevData) => ({
            ...prevData,
            [id]: value
        }));
    };

    const handleSave = () => {
        console.log('Saving data:', formData);
        const storedData = JSON.parse(sessionStorage.getItem('staffData') || '[]');
        const updatedData = storedData.map((item: any) =>
            item.pid === pid ? formData : item
        );
        sessionStorage.setItem('staffData', JSON.stringify(updatedData));
        navigate('/infostaff');
    };

    return (
        <ContentMain className="flex flex-col min-h-screen">
            <Grid container spacing={3}>
                {/* Header */}
                <Grid item xs={12}>
                    <Typography variant="h6" gutterBottom className="pt-14 text-center">
                        役員名簿
                    </Typography>
                </Grid>

                {/* 所属, 役職 Fields */}
                <Grid container spacing={2} className='pt-7' justifyContent="center">
                    <Grid item xs={6} sm={2} md={1}>
                        <Typography style={{ fontSize: '14px' }} className='pt-2'>
                            フリガナ
                        </Typography>
                    </Grid>
                    <Grid item xs={6} sm={2} md={3}>
                        <TextField
                            id="furigana"
                            type="text"
                            size="small"
                            fullWidth
                            sx={{ backgroundColor: 'white' }}
                            value={formData.furigana}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={6} sm={2} md={1}>
                        <Typography style={{ fontSize: '14px' }} className='pt-2'>
                            氏名
                        </Typography>
                    </Grid>
                    <Grid item xs={6} sm={2} md={3}>
                        <TextField
                            id="fullname"
                            type="text"
                            size="small"
                            fullWidth
                            sx={{ backgroundColor: 'white' }}
                            value={formData.fullname}
                            onChange={handleChange}
                        />
                    </Grid>
                </Grid>

                {/* 氏名 Field */}
                <Grid container spacing={2} className='pt-7' justifyContent="center">
                    <Grid item xs={6} sm={2} md={1}>
                        <Typography style={{ fontSize: '14px' }} className='pt-2'>
                            役職名
                        </Typography>
                    </Grid>
                    <Grid item xs={6} sm={2} md={3}>
                        <TextField
                            id="dep"
                            type="text"
                            size="small"
                            fullWidth
                            sx={{ backgroundColor: 'white' }}
                            value={formData.dep}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={6} sm={2} md={1}></Grid>
                    <Grid item xs={6} sm={2} md={3}></Grid>
                </Grid>

                {/* 性別 Radio Group */}
                <Grid container spacing={2} className='pt-7'>
                    <Grid item xs={6} sm={2} md={1}></Grid>
                    <Grid item xs={6} sm={2} md={1}></Grid>
                    <Grid item xs={6} sm={2} md={1}>
                        <Typography style={{ fontSize: '16px' }} className='pt-2'>
                            性別
                        </Typography>
                    </Grid>
                    <Grid item xs={6} sm={2} md={8}>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            name="radio-buttons-group"
                            row
                            value={formData.gender}
                            onChange={handleRadioChange}
                        >
                            <FormControlLabel value="男" control={<Radio />} label="男" />
                            <FormControlLabel value="女" control={<Radio />} label="女" />
                        </RadioGroup>
                    </Grid>
                </Grid>

                {/* 生年月日 Fields */}
                <Grid container justifyContent="center" spacing={2} className='pt-7'>
                    <Grid item xs={6} sm={2} md={1}>
                        <Typography style={{ fontSize: '14px' }} className='pt-2'>
                            生年月日
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={3} md={2}>
                        <TextField
                            id="era"
                            type="text"
                            size="small"
                            label="令和"
                            fullWidth
                            sx={{ backgroundColor: 'white' }}
                            value={formData.era}
                            onChange={handleChange}
                            InputLabelProps={{
                                shrink: true, // Keep label in place
                              }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={3} md={2}>
                        <TextField
                            id="year"
                            type="text"
                            size="small"
                            label="令和"
                            fullWidth
                            sx={{ backgroundColor: 'white' }}
                            value={formData.year}
                            onChange={handleChange}
                            InputLabelProps={{
                                shrink: true, // Keep label in place
                              }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={3} md={3}>
                        <Grid container spacing={1}>
                            <Grid item xs={6}>
                                <FormControl sx={{ minWidth: 90 }} size="small">
                                    <InputLabel id="month-select-label" shrink={true}>月</InputLabel>
                                    <Select
                                        labelId="month-select-label"
                                        id="month-select"
                                        value={formData.month}
                                        label="月"
                                        onChange={(e) => handleSelectChange(e, 'month')}
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
                            <Grid item xs={6}>
                                <FormControl sx={{ minWidth: 90 }} size="small">
                                    <InputLabel id="day-select-label" shrink={true}>日</InputLabel>
                                    <Select
                                        labelId="day-select-label"
                                        id="day-select"
                                        value={formData.day}
                                        label="日"
                                        onChange={(e) => handleSelectChange(e, 'day')}
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
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            {/* Buttons at the bottom */}
            <Grid container justifyContent="center" spacing={2} className='pt-5' sx={{ bottom: 0, width: '100%', backgroundColor: 'inherit', paddingBottom: '10px' }}>
                <Grid item>
                    <Button type="submit" variant="contained" size='medium' className='text-center' startIcon={<SaveIcon />} color="success" onClick={handleSave}>
                        <Typography component="div" style={{ color: 'white', alignItems: 'center' }}>
                            修正
                        </Typography>
                    </Button>
                </Grid>
            </Grid>
        </ContentMain>
    );
};

export default EditStaffForm;
