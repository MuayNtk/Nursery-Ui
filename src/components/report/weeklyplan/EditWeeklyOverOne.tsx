import { Button, Divider, FormControl, Grid, InputAdornment, InputLabel, MenuItem, Select, SelectChangeEvent, TextareaAutosize, TextField, Typography } from "@mui/material";
import { useState, useEffect } from 'react';
import ContentMain from '../../content/Content';
import SaveIcon from '@mui/icons-material/Save';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router-dom";

interface EditWeeklyOverOneProps {
    pid: string;
    selectedOption: string;
}

const EditWeeklyOverOne: React.FC<EditWeeklyOverOneProps> = ({ pid, selectedOption }) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        pid: '',
        selectedOption: selectedOption,
        month: '',
        notices1: '',
        notices2: '',
        notices3: '',
        children1: '',
        weekly_aims: '',
        family_contact: '',
        scheduled_activities: '',
        day1: '',
        weather1: '',
        main_activities1: '',
        evaluation_and_reflection1: '',
        day2: '',
        weather2: '',
        main_activities2: '',
        evaluation_and_reflection2: '',
        day3: '',
        weather3: '',
        main_activities3: '',
        evaluation_and_reflection3: '',
        day4: '',
        weather4: '',
        main_activities4: '',
        evaluation_and_reflection4: '',
        day5: '',
        weather5: '',
        main_activities5: '',
        evaluation_and_reflection5: '',
        day6: '',
        weather6: '',
        main_activities6: '',
        evaluation_and_reflection6: '',
    });

    useEffect(() => {
        const storedData = JSON.parse(sessionStorage.getItem('WeeklyDataOverOne') || '[]');
        const item = storedData.find((item: any) => item.pid === pid && item.selectedOption === selectedOption);
        if (item) {
            setFormData(item);
        } else {
            // Optionally, you could handle the case where the item is not found
            // For example, setting formData to default values or showing a message
        }
    }, [pid, selectedOption]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        console.log('Changing field:', id, 'to', value);
        setFormData((prevData) => ({
            ...prevData,
            [id]: value
        }));
    };

    const handleSelectChange = (e: SelectChangeEvent<string>, id: string) => {
        const value = e.target.value;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value
        }));
    };

    const handleSave = () => {
        console.log('Saving data:', formData);
        const storedData = JSON.parse(sessionStorage.getItem('WeeklyDataOverOne') || '[]');
        const updatedData = storedData.map((item: any) =>
            item.pid === pid ? formData : item
        );
        sessionStorage.setItem('WeeklyDataOverOne', JSON.stringify(updatedData));
        navigate('/report/weeklyplan');
    };

    const options = [
        '週 案 と 保 育 日 誌（未満児)',
        '週 案 と 保 育 日 誌（以上児)'
    ];

    return (
        <ContentMain className="flex flex-col min-h-screen">
            <form onSubmit={handleSave}>
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

                <Grid className="pt-10 lg:pt-5 text-start">
                    {/* Start Grid */}
                    <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 1, md: 1 }} className='pl-3 pt-1' >
                        <Grid item xs={2} sm={1.5} md={1} lg={1} sx={{ ml: { xs: -3, sm: -2, md: -9, lg: 10 }, marginLeft: { xs: -1.5, sm: 1, md: 4, lg: 12, } }}>
                            <FormControl sx={{ minWidth: 90 }} size="small">
                                <InputLabel id="month-select-label">月</InputLabel>
                                <Select
                                    labelId="month-select-label"
                                    id="month"
                                    label="月"
                                    value={formData.month}
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
                        <Grid item xs={3} sm={2} md={2} lg={1.5} >
                            <TextField
                                className='w-full'
                                id="notices1"
                                name="notices1"
                                type="text"
                                size='small'
                                value={formData.notices1}
                                onChange={handleChange}
                                sx={{
                                    backgroundColor: "white",
                                    fontSize: { xs: 11, sm: 11, md: 11, lg: 16, },
                                    marginLeft: { xs: 5, sm: 6, md: 6, lg: 2, }
                                }}
                                InputProps={{
                                    endAdornment: <InputAdornment position="end">第</InputAdornment>,
                                }}
                            />
                        </Grid>
                        <Grid item xs={3} sm={2} md={2} lg={1.5} >
                            <TextField
                                className='w-full'
                                id="notices2"
                                name="notices2"
                                type="text"
                                size='small'
                                value={formData.notices2}
                                onChange={handleChange}
                                sx={{
                                    backgroundColor: "white",
                                    fontSize: { xs: 11, sm: 11, md: 11, lg: 16, },
                                    marginLeft: { xs: 5, sm: 6, md: 7, lg: 3, }
                                }}
                                InputProps={{
                                    endAdornment: <InputAdornment position="end">週</InputAdornment>,
                                }}
                            />
                        </Grid>
                        <Grid item xs={3} sm={2} md={2} lg={1.5} >
                            <TextField
                                className='w-full'
                                id="notices3"
                                name="notices3"
                                type="text"
                                size='small'
                                value={formData.notices3}
                                onChange={handleChange}
                                sx={{
                                    backgroundColor: "white",
                                    fontSize: { xs: 11, sm: 11, md: 11, lg: 16, },
                                    marginLeft: { xs: 5, sm: 6, md: 8, lg: 3, }
                                }}
                                InputProps={{
                                    endAdornment: <InputAdornment position="end">組</InputAdornment>,
                                }}
                            />
                        </Grid>
                    </Grid>
                    {/* End Grid */}

                    {/* Start 施設長 Grid  */}
                    <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-5">
                        <Grid item xs={2} sm={1.5} md={1} lg={2} sx={{ ml: { xs: 5, sm: 5, md: 5, lg: 1 } }}>
                            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, } }} >
                                施設長 :
                            </Typography>
                        </Grid>
                        <Grid item xs={2} sm={1.5} md={1} lg={1} sx={{ ml: { xs: -1, sm: -1, md: -1, lg: -15 } }}>
                            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, fontWeight: 'bold', }} >
                                濃部
                            </Typography>
                        </Grid>
                        <Grid item xs={2} sm={1.5} md={1} lg={1} sx={{ ml: { xs: -2, sm: -1, md: -1, lg: -5 } }}>
                            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, fontWeight: 'bold', }} >
                                圭子
                            </Typography>
                        </Grid>
                    </Grid >
                    {/* End 施設長 Grid */}

                    {/* Start 主任 Grid */}
                    <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-7  ">
                        <Grid item xs={2} sm={1.5} md={1} lg={2} sx={{ ml: { xs: 6.5, sm: 6.5, md: 6.5, lg: 1 } }}>
                            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, }} >
                                主任 :
                            </Typography>
                        </Grid>
                        <Grid item xs={2} sm={1.5} md={1} lg={1} sx={{ ml: { xs: -2.5, sm: -2.5, md: -2.5, lg: -17 } }}>
                            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, fontWeight: 'bold', }} >
                                渡部
                            </Typography>
                        </Grid>
                        <Grid item xs={2} sm={1.5} md={1} lg={1} sx={{ ml: { xs: -2, sm: -1, md: -1, lg: -5 } }}>
                            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, fontWeight: 'bold', }} >
                                史朗
                            </Typography>
                        </Grid>
                    </Grid >
                    {/* End 主任 Grid */}

                    {/* Start 康嘉 Grid */}
                    <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-7  ">
                        <Grid item xs={2} sm={1.5} md={1} lg={2} sx={{ ml: { xs: 6.5, sm: 6.5, md: 6.5, lg: 1 } }}>
                            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, }} >
                                担任 :
                            </Typography>
                        </Grid>
                        <Grid item xs={2} sm={1.5} md={1} lg={1} sx={{ ml: { xs: -2.5, sm: -2.5, md: -2.5, lg: -17 } }}>
                            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, fontWeight: 'bold', }} >
                                中川
                            </Typography>
                        </Grid>
                        <Grid item xs={2} sm={1.5} md={1} lg={1} sx={{ ml: { xs: -2, sm: -1, md: -1, lg: -5 } }}>
                            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, fontWeight: 'bold', }} >
                                康嘉
                            </Typography>
                        </Grid>
                    </Grid >
                    {/* End 康嘉 Grid */}

                    {/* Start Grid */}
                    <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-5">
                        <Grid item xs={6} sm={6} md={6} lg={6} >
                            <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, ml: { xs: 8, sm: 13, md: 12, lg: 11 } }} >
                                子どもの姿
                            </Typography>
                        </Grid>
                        <Grid item xs={6} sm={6} md={6} lg={6} >
                            <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, ml: { xs: 1, sm: 5, md: -1, lg: -10 } }} >
                                週のねらいと配慮
                            </Typography>
                        </Grid>
                    </Grid>
                    {/* End Grid */}

                    {/* Start Grid */}
                    <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-3' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 5 } }}>
                        <Grid item xs={4} sm={4} md={4} lg={4} sx={{ ml: { xs: 3, sm: 8, md: 2, lg: 4 } }}>
                            <TextareaAutosize
                                id="children1"
                                name="children1"
                                minRows={3}
                                maxRows={100}
                                className="w-full"
                                value={formData.children1}
                                onChange={handleChange}
                                style={{ border: '1px solid gray', borderRadius: '4px' }}
                            />
                        </Grid>
                        <Grid item xs={4} sm={4} md={4} lg={4} sx={{ ml: { xs: 1, sm: 1, md: 2, lg: 2 } }}>
                            <TextareaAutosize
                                id="weekly_aims"
                                name="weekly_aims"
                                minRows={3}
                                maxRows={100}
                                className="w-full"
                                value={formData.weekly_aims}
                                onChange={handleChange}
                                style={{ border: '1px solid gray', borderRadius: '4px' }}
                            />
                        </Grid>
                    </Grid>
                    {/* End Grid */}

                    {/* Start Grid */}
                    <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-5">
                        <Grid item xs={6} sm={6} md={6} lg={6} >
                            <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, ml: { xs: 8, sm: 13, md: 12, lg: 11 } }} >
                                家庭連絡
                            </Typography>
                        </Grid>
                        <Grid item xs={6} sm={6} md={6} lg={6} >
                            <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, ml: { xs: 1, sm: 5, md: -1, lg: -10 } }} >
                                活動予定
                            </Typography>
                        </Grid>
                    </Grid>
                    {/* End Grid */}

                    {/* Start Grid */}
                    <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-3' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 5 } }}>
                        <Grid item xs={4} sm={4} md={4} lg={4} sx={{ ml: { xs: 3, sm: 8, md: 2, lg: 4 } }}>
                            <TextareaAutosize
                                id="family_contact"
                                name="family_contact"
                                minRows={3}
                                maxRows={100}
                                className="w-full"
                                value={formData.family_contact}
                                onChange={handleChange}
                                style={{ border: '1px solid gray', borderRadius: '4px' }}
                            />
                        </Grid>
                        <Grid item xs={4} sm={4} md={4} lg={4} sx={{ ml: { xs: 1, sm: 1, md: 2, lg: 2 } }}>
                            <TextareaAutosize
                                id="scheduled_activities"
                                name="scheduled_activities"
                                minRows={3}
                                maxRows={100}
                                className="w-full"
                                value={formData.scheduled_activities}
                                onChange={handleChange}
                                style={{ border: '1px solid gray', borderRadius: '4px' }}
                            />
                        </Grid>
                    </Grid>
                    {/* End Grid */}

                    <br />
                    <Divider className='bg-gray' />

                    {/* Start Grid */}
                    <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 1, md: 1 }} className='pl-3 pt-7' >
                        <Grid item xs={2} sm={1.5} md={1} lg={1} sx={{ ml: { xs: -3, sm: -2, md: -9, lg: 10 }, marginLeft: { xs: 3, sm: 7, md: 10, lg: 9, } }}>
                            <FormControl sx={{ minWidth: 90 }} size="small">
                                <InputLabel id="day-select-label">日</InputLabel>
                                <Select
                                    labelId="day-select-label"
                                    id="day1"
                                    label="日"
                                    value={formData.day1}
                                    onChange={(e) => handleSelectChange(e, 'day1')}
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
                        <Grid item xs={3} sm={2} md={2} lg={1.5} >
                            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, marginLeft: { xs: 5, sm: 6, md: 6, lg: 2, } }} className="pt-2">
                                (月)
                            </Typography>
                        </Grid>
                        <Grid item xs={3} sm={2} md={2} lg={1.5} >
                            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, marginLeft: { xs: 2, sm: 2, md: 1, lg: -5, } }} className="pt-2">
                                天候
                            </Typography>
                        </Grid>
                        <Grid item xs={3} sm={3} md={3} lg={1.5} >
                            <TextField
                                className='w-full'
                                id="weather1"
                                name="weather1"
                                type="text"
                                size='small'
                                value={formData.weather1}
                                onChange={handleChange}
                                sx={{
                                    backgroundColor: "white",
                                    fontSize: { xs: 11, sm: 11, md: 11, lg: 16, },
                                    marginLeft: { xs: -5, sm: -3, md: -8, lg: -15, }
                                }}
                                InputProps={{
                                    endAdornment: <InputAdornment position="end">°C</InputAdornment>,
                                }}
                            />
                        </Grid>
                    </Grid>
                    {/* End Grid */}


                    {/* Start Grid */}
                    <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-5">
                        <Grid item xs={6} sm={6} md={6} lg={6} >
                            <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, ml: { xs: 8, sm: 13, md: 12, lg: 11 } }} >
                                主な活動
                            </Typography>
                        </Grid>
                        <Grid item xs={6} sm={6} md={6} lg={6} >
                            <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, ml: { xs: 1, sm: 5, md: -1, lg: -10 } }} >
                                評価及び反省
                            </Typography>
                        </Grid>
                    </Grid>
                    {/* End Grid */}

                    {/* Start Grid */}
                    <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-3' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 5 } }}>
                        <Grid item xs={4} sm={4} md={4} lg={4} sx={{ ml: { xs: 3, sm: 8, md: 2, lg: 4 } }}>
                            <TextareaAutosize
                                id="main_activities1"
                                name="main_activities1"
                                minRows={3}
                                maxRows={100}
                                className="w-full"
                                value={formData.main_activities1}
                                onChange={handleChange}
                                style={{ border: '1px solid gray', borderRadius: '4px' }}
                            />
                        </Grid>
                        <Grid item xs={4} sm={4} md={4} lg={4} sx={{ ml: { xs: 1, sm: 1, md: 2, lg: 2 } }}>
                            <TextareaAutosize
                                id="evaluation_and_reflection1"
                                name="evaluation_and_reflection1"
                                minRows={3}
                                maxRows={100}
                                className="w-full"
                                value={formData.evaluation_and_reflection1}
                                onChange={handleChange}
                                style={{ border: '1px solid gray', borderRadius: '4px' }}
                            />
                        </Grid>
                    </Grid>
                    {/* End Grid */}

                    <br />
                    <Divider className='bg-gray' />

                    {/* Start Grid */}
                    <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 1, md: 1 }} className='pl-3 pt-7' >
                        <Grid item xs={2} sm={1.5} md={1} lg={1} sx={{ ml: { xs: -3, sm: -2, md: -9, lg: 10 }, marginLeft: { xs: 3, sm: 7, md: 10, lg: 9, } }}>
                            <FormControl sx={{ minWidth: 90 }} size="small">
                                <InputLabel id="day-select-label">日</InputLabel>
                                <Select
                                    labelId="day-select-label"
                                    id="day2"
                                    label="日"
                                    value={formData.day2}
                                    onChange={(e) => handleSelectChange(e, 'day2')}
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
                        <Grid item xs={3} sm={2} md={2} lg={1.5} >
                            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, marginLeft: { xs: 5, sm: 6, md: 6, lg: 2, } }} className="pt-2">
                                (火)
                            </Typography>
                        </Grid>
                        <Grid item xs={3} sm={2} md={2} lg={1.5} >
                            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, marginLeft: { xs: 2, sm: 2, md: 1, lg: -5, } }} className="pt-2">
                                天候
                            </Typography>
                        </Grid>
                        <Grid item xs={3} sm={3} md={3} lg={1.5} >
                            <TextField
                                className='w-full'
                                id="weather2"
                                name="weather2"
                                type="text"
                                size='small'
                                value={formData.weather2}
                                onChange={handleChange}
                                sx={{
                                    backgroundColor: "white",
                                    fontSize: { xs: 11, sm: 11, md: 11, lg: 16, },
                                    marginLeft: { xs: -5, sm: -3, md: -8, lg: -15, }
                                }}
                                InputProps={{
                                    endAdornment: <InputAdornment position="end">°C</InputAdornment>,
                                }}
                            />
                        </Grid>
                    </Grid>
                    {/* End Grid */}

                    {/* Start Grid */}
                    <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-5">
                        <Grid item xs={6} sm={6} md={6} lg={6} >
                            <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, ml: { xs: 8, sm: 13, md: 12, lg: 11 } }} >
                                主な活動
                            </Typography>
                        </Grid>
                        <Grid item xs={6} sm={6} md={6} lg={6} >
                            <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, ml: { xs: 1, sm: 5, md: -1, lg: -10 } }} >
                                評価及び反省
                            </Typography>
                        </Grid>
                    </Grid>
                    {/* End Grid */}

                    {/* Start Grid */}
                    <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-3' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 5 } }}>
                        <Grid item xs={4} sm={4} md={4} lg={4} sx={{ ml: { xs: 3, sm: 8, md: 2, lg: 4 } }}>
                            <TextareaAutosize
                                id="main_activities2"
                                name="main_activities2"
                                minRows={3}
                                maxRows={100}
                                className="w-full"
                                value={formData.main_activities2}
                                onChange={handleChange}
                                style={{ border: '1px solid gray', borderRadius: '4px' }}
                            />
                        </Grid>
                        <Grid item xs={4} sm={4} md={4} lg={4} sx={{ ml: { xs: 1, sm: 1, md: 2, lg: 2 } }}>
                            <TextareaAutosize
                                id="evaluation_and_reflection2"
                                name="evaluation_and_reflection2"
                                minRows={3}
                                maxRows={100}
                                className="w-full"
                                value={formData.evaluation_and_reflection2}
                                onChange={handleChange}
                                style={{ border: '1px solid gray', borderRadius: '4px' }}
                            />
                        </Grid>
                    </Grid>
                    {/* End Grid */}

                    <br />
                    <Divider className='bg-gray' />

                    {/* Start Grid */}
                    <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 1, md: 1 }} className='pl-3 pt-7' >
                        <Grid item xs={2} sm={1.5} md={1} lg={1} sx={{ ml: { xs: -3, sm: -2, md: -9, lg: 10 }, marginLeft: { xs: 3, sm: 7, md: 10, lg: 9, } }}>
                            <FormControl sx={{ minWidth: 90 }} size="small">
                                <InputLabel id="day-select-label">日</InputLabel>
                                <Select
                                    labelId="day-select-label"
                                    id="day3"
                                    label="日"
                                    value={formData.day3}
                                    onChange={(e) => handleSelectChange(e, 'day3')}
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
                        <Grid item xs={3} sm={2} md={2} lg={1.5} >
                            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, marginLeft: { xs: 5, sm: 6, md: 6, lg: 2, } }} className="pt-2">
                                (水)
                            </Typography>
                        </Grid>
                        <Grid item xs={3} sm={2} md={2} lg={1.5} >
                            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, marginLeft: { xs: 2, sm: 2, md: 1, lg: -5, } }} className="pt-2">
                                天候
                            </Typography>
                        </Grid>
                        <Grid item xs={3} sm={3} md={3} lg={1.5} >
                            <TextField
                                className='w-full'
                                id="weather3"
                                name="weather3"
                                type="text"
                                size='small'
                                value={formData.weather3}
                                onChange={handleChange}
                                sx={{
                                    backgroundColor: "white",
                                    fontSize: { xs: 11, sm: 11, md: 11, lg: 16, },
                                    marginLeft: { xs: -5, sm: -3, md: -8, lg: -15, }
                                }}
                                InputProps={{
                                    endAdornment: <InputAdornment position="end">°C</InputAdornment>,
                                }}
                            />
                        </Grid>
                    </Grid>
                    {/* End Grid */}

                    {/* Start Grid */}
                    <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-5">
                        <Grid item xs={6} sm={6} md={6} lg={6} >
                            <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, ml: { xs: 8, sm: 13, md: 12, lg: 11 } }} >
                                主な活動
                            </Typography>
                        </Grid>
                        <Grid item xs={6} sm={6} md={6} lg={6} >
                            <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, ml: { xs: 1, sm: 5, md: -1, lg: -10 } }} >
                                評価及び反省
                            </Typography>
                        </Grid>
                    </Grid>
                    {/* End Grid */}

                    {/* Start Grid */}
                    <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-3' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 5 } }}>
                        <Grid item xs={4} sm={4} md={4} lg={4} sx={{ ml: { xs: 3, sm: 8, md: 2, lg: 4 } }}>
                            <TextareaAutosize
                                id="main_activities3"
                                name="main_activities3"
                                minRows={3}
                                maxRows={100}
                                className="w-full"
                                value={formData.main_activities3}
                                onChange={handleChange}
                                style={{ border: '1px solid gray', borderRadius: '4px' }}
                            />
                        </Grid>
                        <Grid item xs={4} sm={4} md={4} lg={4} sx={{ ml: { xs: 1, sm: 1, md: 2, lg: 2 } }}>
                            <TextareaAutosize
                                id="evaluation_and_reflection3"
                                name="evaluation_and_reflection3"
                                minRows={3}
                                maxRows={100}
                                className="w-full"
                                value={formData.evaluation_and_reflection3}
                                onChange={handleChange}
                                style={{ border: '1px solid gray', borderRadius: '4px' }}
                            />
                        </Grid>
                    </Grid>
                    {/* End Grid */}

                    <br />
                    <Divider className='bg-gray' />

                    {/* Start Grid */}
                    <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 1, md: 1 }} className='pl-3 pt-7' >
                        <Grid item xs={2} sm={1.5} md={1} lg={1} sx={{ ml: { xs: -3, sm: -2, md: -9, lg: 10 }, marginLeft: { xs: 3, sm: 7, md: 10, lg: 9, } }}>
                            <FormControl sx={{ minWidth: 90 }} size="small">
                                <InputLabel id="day-select-label">日</InputLabel>
                                <Select
                                    labelId="day-select-label"
                                    id="day4"
                                    label="日"
                                    value={formData.day4}
                                    onChange={(e) => handleSelectChange(e, 'day4')}
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
                        <Grid item xs={3} sm={2} md={2} lg={1.5} >
                            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, marginLeft: { xs: 5, sm: 6, md: 6, lg: 2, } }} className="pt-2">
                                (木)
                            </Typography>
                        </Grid>
                        <Grid item xs={3} sm={2} md={2} lg={1.5} >
                            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, marginLeft: { xs: 2, sm: 2, md: 1, lg: -5, } }} className="pt-2">
                                天候
                            </Typography>
                        </Grid>
                        <Grid item xs={3} sm={3} md={3} lg={1.5} >
                            <TextField
                                className='w-full'
                                id="weather4"
                                name="weather4"
                                type="text"
                                size='small'
                                value={formData.weather4}
                                onChange={handleChange}
                                sx={{
                                    backgroundColor: "white",
                                    fontSize: { xs: 11, sm: 11, md: 11, lg: 16, },
                                    marginLeft: { xs: -5, sm: -3, md: -8, lg: -15, }
                                }}
                                InputProps={{
                                    endAdornment: <InputAdornment position="end">°C</InputAdornment>,
                                }}
                            />
                        </Grid>
                    </Grid>
                    {/* End Grid */}

                    {/* Start Grid */}
                    <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-5">
                        <Grid item xs={6} sm={6} md={6} lg={6} >
                            <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, ml: { xs: 8, sm: 13, md: 12, lg: 11 } }} >
                                主な活動
                            </Typography>
                        </Grid>
                        <Grid item xs={6} sm={6} md={6} lg={6} >
                            <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, ml: { xs: 1, sm: 5, md: -1, lg: -10 } }} >
                                評価及び反省
                            </Typography>
                        </Grid>
                    </Grid>
                    {/* End Grid */}

                    {/* Start Grid */}
                    <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-3' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 5 } }}>
                        <Grid item xs={4} sm={4} md={4} lg={4} sx={{ ml: { xs: 3, sm: 8, md: 2, lg: 4 } }}>
                            <TextareaAutosize
                                id="main_activities4"
                                name="main_activities4"
                                minRows={3}
                                maxRows={100}
                                className="w-full"
                                value={formData.main_activities4}
                                onChange={handleChange}
                                style={{ border: '1px solid gray', borderRadius: '4px' }}
                            />
                        </Grid>
                        <Grid item xs={4} sm={4} md={4} lg={4} sx={{ ml: { xs: 1, sm: 1, md: 2, lg: 2 } }}>
                            <TextareaAutosize
                                id="evaluation_and_reflection4"
                                name="evaluation_and_reflection4"
                                minRows={3}
                                maxRows={100}
                                value={formData.evaluation_and_reflection4}
                                onChange={handleChange}
                                className="w-full"
                                style={{ border: '1px solid gray', borderRadius: '4px' }}
                            />
                        </Grid>
                    </Grid>
                    {/* End Grid */}

                    <br />
                    <Divider className='bg-gray' />

                    {/* Start Grid */}
                    <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 1, md: 1 }} className='pl-3 pt-7' >
                        <Grid item xs={2} sm={1.5} md={1} lg={1} sx={{ ml: { xs: -3, sm: -2, md: -9, lg: 10 }, marginLeft: { xs: 3, sm: 7, md: 10, lg: 9, } }}>
                            <FormControl sx={{ minWidth: 90 }} size="small">
                                <InputLabel id="day-select-label">日</InputLabel>
                                <Select
                                    labelId="day-select-label"
                                    id="day5"
                                    label="日"
                                    value={formData.day5}
                                    onChange={(e) => handleSelectChange(e, 'day5')}
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
                        <Grid item xs={3} sm={2} md={2} lg={1.5} >
                            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, marginLeft: { xs: 5, sm: 6, md: 6, lg: 2, } }} className="pt-2">
                                (金)
                            </Typography>
                        </Grid>
                        <Grid item xs={3} sm={2} md={2} lg={1.5} >
                            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, marginLeft: { xs: 2, sm: 2, md: 1, lg: -5, } }} className="pt-2">
                                天候
                            </Typography>
                        </Grid>
                        <Grid item xs={3} sm={3} md={3} lg={1.5} >
                            <TextField
                                className='w-full'
                                id="weather5"
                                name="weather5"
                                type="text"
                                size='small'
                                value={formData.weather5}
                                onChange={handleChange}
                                sx={{
                                    backgroundColor: "white",
                                    fontSize: { xs: 11, sm: 11, md: 11, lg: 16, },
                                    marginLeft: { xs: -5, sm: -3, md: -8, lg: -15, }
                                }}
                                InputProps={{
                                    endAdornment: <InputAdornment position="end">°C</InputAdornment>,
                                }}
                            />
                        </Grid>
                    </Grid>
                    {/* End Grid */}

                    {/* Start Grid */}
                    <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-5">
                        <Grid item xs={6} sm={6} md={6} lg={6} >
                            <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, ml: { xs: 8, sm: 13, md: 12, lg: 11 } }} >
                                主な活動
                            </Typography>
                        </Grid>
                        <Grid item xs={6} sm={6} md={6} lg={6} >
                            <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, ml: { xs: 1, sm: 5, md: -1, lg: -10 } }} >
                                評価及び反省
                            </Typography>
                        </Grid>
                    </Grid>
                    {/* End Grid */}

                    {/* Start Grid */}
                    <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-3' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 5 } }}>
                        <Grid item xs={4} sm={4} md={4} lg={4} sx={{ ml: { xs: 3, sm: 8, md: 2, lg: 4 } }}>
                            <TextareaAutosize
                                id="main_activities5"
                                name="main_activities5"
                                minRows={3}
                                maxRows={100}
                                className="w-full"
                                value={formData.main_activities5}
                                onChange={handleChange}
                                style={{ border: '1px solid gray', borderRadius: '4px' }}
                            />
                        </Grid>
                        <Grid item xs={4} sm={4} md={4} lg={4} sx={{ ml: { xs: 1, sm: 1, md: 2, lg: 2 } }}>
                            <TextareaAutosize
                                id="evaluation_and_reflection5"
                                name="evaluation_and_reflection5"
                                minRows={3}
                                maxRows={100}
                                className="w-full"
                                value={formData.evaluation_and_reflection5}
                                onChange={handleChange}
                                style={{ border: '1px solid gray', borderRadius: '4px' }}
                            />
                        </Grid>
                    </Grid>
                    {/* End Grid */}

                    <br />
                    <Divider className='bg-gray' />

                    {/* Start Grid */}
                    <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 1, md: 1 }} className='pl-3 pt-7' >
                        <Grid item xs={2} sm={1.5} md={1} lg={1} sx={{ ml: { xs: -3, sm: -2, md: -9, lg: 10 }, marginLeft: { xs: 3, sm: 7, md: 10, lg: 9, } }}>
                            <FormControl sx={{ minWidth: 90 }} size="small">
                                <InputLabel id="day-select-label">日</InputLabel>
                                <Select
                                    labelId="day-select-label"
                                    id="day6"
                                    label="日"
                                    value={formData.day6}
                                    onChange={(e) => handleSelectChange(e, 'day6')}
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
                        <Grid item xs={3} sm={2} md={2} lg={1.5} >
                            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, marginLeft: { xs: 5, sm: 6, md: 6, lg: 2, } }} className="pt-2">
                                (土)
                            </Typography>
                        </Grid>
                        <Grid item xs={3} sm={2} md={2} lg={1.5} >
                            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, marginLeft: { xs: 2, sm: 2, md: 1, lg: -5, } }} className="pt-2">
                                天候
                            </Typography>
                        </Grid>
                        <Grid item xs={3} sm={3} md={3} lg={1.5} >
                            <TextField
                                className='w-full'
                                id="weather6"
                                name="weather6"
                                type="text"
                                size='small'
                                value={formData.weather6}
                                onChange={handleChange}
                                sx={{
                                    backgroundColor: "white",
                                    fontSize: { xs: 11, sm: 11, md: 11, lg: 16, },
                                    marginLeft: { xs: -5, sm: -3, md: -8, lg: -15, }
                                }}
                                InputProps={{
                                    endAdornment: <InputAdornment position="end">°C</InputAdornment>,
                                }}
                            />
                        </Grid>
                    </Grid>
                    {/* End Grid */}

                    {/* Start Grid */}
                    <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-5">
                        <Grid item xs={6} sm={6} md={6} lg={6} >
                            <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, ml: { xs: 8, sm: 13, md: 12, lg: 11 } }} >
                                主な活動
                            </Typography>
                        </Grid>
                        <Grid item xs={6} sm={6} md={6} lg={6} >
                            <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, ml: { xs: 1, sm: 5, md: -1, lg: -10 } }} >
                                評価及び反省
                            </Typography>
                        </Grid>
                    </Grid>
                    {/* End Grid */}

                    {/* Start Grid */}
                    <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-3' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 5 } }}>
                        <Grid item xs={4} sm={4} md={4} lg={4} sx={{ ml: { xs: 3, sm: 8, md: 2, lg: 4 } }}>
                            <TextareaAutosize
                                id="main_activities6"
                                name="main_activities6"
                                minRows={3}
                                maxRows={100}
                                className="w-full"
                                value={formData.main_activities6}
                                onChange={handleChange}
                                style={{ border: '1px solid gray', borderRadius: '4px' }}
                            />
                        </Grid>
                        <Grid item xs={4} sm={4} md={4} lg={4} sx={{ ml: { xs: 1, sm: 1, md: 2, lg: 2 } }}>
                            <TextareaAutosize
                                id="evaluation_and_reflection6"
                                name="evaluation_and_reflection6"
                                minRows={3}
                                maxRows={100}
                                className="w-full"
                                value={formData.evaluation_and_reflection6}
                                onChange={handleChange}
                                style={{ border: '1px solid gray', borderRadius: '4px' }}
                            />
                        </Grid>
                    </Grid>
                    {/* End Grid */}
                </Grid>
                <div className="mt-auto">
                    <Grid container justifyContent="center" spacing={2} className='pt-12' sx={{ bottom: 0, width: '100%', backgroundColor: 'inherit', paddingBottom: '10px' }}>
                        <Grid item>
                            <Button variant="contained" href="/report/weeklyplan" size='medium' className='text-center' startIcon={<ArrowBackIcon />} color="warning">
                                <Typography component="div" style={{ color: 'white', alignItems: 'center' }}>
                                    戻る
                                </Typography>
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button variant="contained" type="submit" size='medium' className='text-center' startIcon={<SaveIcon />} color="success">
                                <Typography component="div" style={{ color: 'white', alignItems: 'center' }}>
                                    修正
                                </Typography>
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            </form>
        </ContentMain>
    );

};

export default EditWeeklyOverOne;