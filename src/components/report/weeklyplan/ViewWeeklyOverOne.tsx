import React from 'react';
import { useParams } from 'react-router-dom';
import { Grid, Typography, Button, TextareaAutosize, FormControl, Select, InputLabel, MenuItem, InputAdornment, TextField, Divider } from '@mui/material';
import ContentMain from '../../content/Content';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

interface ViewWeeklyOverOneProps {
    pid: string;
    selectedOption: string;
}

const ViewWeeklyOverOne: React.FC<ViewWeeklyOverOneProps> = () => {
    const { pid, selectedOption } = useParams<{ pid: string; selectedOption: string }>();
    const storedData = JSON.parse(sessionStorage.getItem('WeeklyDataOverOne') || '[]');
    const item = storedData.find((data: any) => data.pid === pid && data.selectedOption === selectedOption);

    if (!item) {
        return <Typography variant="h6">No data found</Typography>;
    }

    const options = [
        '週 案 と 保 育 日 誌（未満児)',
        '週 案 と 保 育 日 誌（以上児)'
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
                                value={item.month}
                                readOnly
                                sx={{
                                    backgroundColor: "#F5F5F5",
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
                            value={item.notices1}
                            sx={{
                                backgroundColor: "#F5F5F5",
                                fontSize: { xs: 11, sm: 11, md: 11, lg: 16, },
                                marginLeft: { xs: 5, sm: 6, md: 6, lg: 2, }
                            }}
                            InputProps={{
                                endAdornment: <InputAdornment position="end">第</InputAdornment>,
                                readOnly: true
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
                            value={item.notices2}
                            sx={{
                                backgroundColor: "#F5F5F5",
                                fontSize: { xs: 11, sm: 11, md: 11, lg: 16, },
                                marginLeft: { xs: 5, sm: 6, md: 7, lg: 3, }
                            }}
                            InputProps={{
                                endAdornment: <InputAdornment position="end">週</InputAdornment>,
                                readOnly: true
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
                            value={item.notices3}
                            sx={{
                                backgroundColor: "#F5F5F5",
                                fontSize: { xs: 11, sm: 11, md: 11, lg: 16, },
                                marginLeft: { xs: 5, sm: 6, md: 8, lg: 3, }
                            }}
                            InputProps={{
                                endAdornment: <InputAdornment position="end">組</InputAdornment>,
                                readOnly: true
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
                            readOnly
                            value={item.children1}
                            style={{ border: '1px solid gray', borderRadius: '4px', backgroundColor: "#F5F5F5" }}
                        />
                    </Grid>
                    <Grid item xs={4} sm={4} md={4} lg={4} sx={{ ml: { xs: 1, sm: 1, md: 2, lg: 2 } }}>
                        <TextareaAutosize
                            id="weekly_aims"
                            name="weekly_aims"
                            minRows={3}
                            maxRows={100}
                            className="w-full"
                            readOnly
                            value={item.weekly_aims}
                            style={{ border: '1px solid gray', borderRadius: '4px', backgroundColor: "#F5F5F5" }}
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
                            readOnly
                            value={item.family_contact}
                            style={{ border: '1px solid gray', borderRadius: '4px', backgroundColor: "#F5F5F5" }}
                        />
                    </Grid>
                    <Grid item xs={4} sm={4} md={4} lg={4} sx={{ ml: { xs: 1, sm: 1, md: 2, lg: 2 } }}>
                        <TextareaAutosize
                            id="scheduled_activities"
                            name="scheduled_activities"
                            minRows={3}
                            maxRows={100}
                            className="w-full"
                            readOnly
                            value={item.scheduled_activities}
                            style={{ border: '1px solid gray', borderRadius: '4px', backgroundColor: "#F5F5F5" }}
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
                                readOnly
                                value={item.day1}
                                sx={{
                                    backgroundColor: "#F5F5F5",
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
                            value={item.weather1}
                            sx={{
                                backgroundColor: "#F5F5F5",
                                fontSize: { xs: 11, sm: 11, md: 11, lg: 16, },
                                marginLeft: { xs: -5, sm: -3, md: -8, lg: -15, }
                            }}
                            InputProps={{
                                endAdornment: <InputAdornment position="end">°C</InputAdornment>,
                                readOnly: true
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
                            readOnly
                            value={item.main_activities1}
                            style={{ border: '1px solid gray', borderRadius: '4px', backgroundColor: "#F5F5F5" }}
                        />
                    </Grid>
                    <Grid item xs={4} sm={4} md={4} lg={4} sx={{ ml: { xs: 1, sm: 1, md: 2, lg: 2 } }}>
                        <TextareaAutosize
                            id="evaluation_and_reflection1"
                            name="evaluation_and_reflection1"
                            minRows={3}
                            maxRows={100}
                            className="w-full"
                            readOnly
                            value={item.evaluation_and_reflection1}
                            style={{ border: '1px solid gray', borderRadius: '4px', backgroundColor: "#F5F5F5" }}
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
                                readOnly
                                value={item.day2}
                                sx={{
                                    backgroundColor: "#F5F5F5",
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
                            value={item.weather2}
                            sx={{
                                backgroundColor: "#F5F5F5",
                                fontSize: { xs: 11, sm: 11, md: 11, lg: 16, },
                                marginLeft: { xs: -5, sm: -3, md: -8, lg: -15, }
                            }}
                            InputProps={{
                                endAdornment: <InputAdornment position="end">°C</InputAdornment>,
                                readOnly: true
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
                            readOnly
                            value={item.main_activities2}
                            style={{ border: '1px solid gray', borderRadius: '4px', backgroundColor: "#F5F5F5" }}
                        />
                    </Grid>
                    <Grid item xs={4} sm={4} md={4} lg={4} sx={{ ml: { xs: 1, sm: 1, md: 2, lg: 2 } }}>
                        <TextareaAutosize
                            id="evaluation_and_reflection2"
                            name="evaluation_and_reflection2"
                            minRows={3}
                            maxRows={100}
                            className="w-full"
                            readOnly
                            value={item.evaluation_and_reflection2}
                            style={{ border: '1px solid gray', borderRadius: '4px', backgroundColor: "#F5F5F5" }}
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
                                readOnly
                                value={item.day3}
                                sx={{
                                    backgroundColor: "#F5F5F5",
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
                            value={item.weather3}
                            sx={{
                                backgroundColor: "#F5F5F5",
                                fontSize: { xs: 11, sm: 11, md: 11, lg: 16, },
                                marginLeft: { xs: -5, sm: -3, md: -8, lg: -15, }
                            }}
                            InputProps={{
                                endAdornment: <InputAdornment position="end">°C</InputAdornment>,
                                readOnly: true
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
                            readOnly
                            value={item.main_activities3}
                            style={{ border: '1px solid gray', borderRadius: '4px', backgroundColor: "#F5F5F5" }}
                        />
                    </Grid>
                    <Grid item xs={4} sm={4} md={4} lg={4} sx={{ ml: { xs: 1, sm: 1, md: 2, lg: 2 } }}>
                        <TextareaAutosize
                            id="evaluation_and_reflection3"
                            name="evaluation_and_reflection3"
                            minRows={3}
                            maxRows={100}
                            className="w-full"
                            readOnly
                            value={item.evaluation_and_reflection3}
                            style={{ border: '1px solid gray', borderRadius: '4px', backgroundColor: "#F5F5F5" }}
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
                                readOnly
                                value={item.day4}
                                sx={{
                                    backgroundColor: "#F5F5F5",
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
                            value={item.weather4}
                            sx={{
                                backgroundColor: "#F5F5F5",
                                fontSize: { xs: 11, sm: 11, md: 11, lg: 16, },
                                marginLeft: { xs: -5, sm: -3, md: -8, lg: -15, }
                            }}
                            InputProps={{
                                endAdornment: <InputAdornment position="end">°C</InputAdornment>,
                                readOnly: true
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
                            readOnly
                            value={item.main_activities4}
                            style={{ border: '1px solid gray', borderRadius: '4px', backgroundColor: "#F5F5F5" }}
                        />
                    </Grid>
                    <Grid item xs={4} sm={4} md={4} lg={4} sx={{ ml: { xs: 1, sm: 1, md: 2, lg: 2 } }}>
                        <TextareaAutosize
                            id="evaluation_and_reflection4"
                            name="evaluation_and_reflection4"
                            minRows={3}
                            maxRows={100}
                            value={item.evaluation_and_reflection4}
                            className="w-full"
                            readOnly
                            style={{ border: '1px solid gray', borderRadius: '4px', backgroundColor: "#F5F5F5" }}
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
                                readOnly
                                value={item.day5}
                                sx={{
                                    backgroundColor: "#F5F5F5",
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
                            value={item.weather5}
                            sx={{
                                backgroundColor: "#F5F5F5",
                                fontSize: { xs: 11, sm: 11, md: 11, lg: 16, },
                                marginLeft: { xs: -5, sm: -3, md: -8, lg: -15, }
                            }}
                            InputProps={{
                                endAdornment: <InputAdornment position="end">°C</InputAdornment>,
                                readOnly: true
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
                            readOnly
                            value={item.main_activities5}
                            style={{ border: '1px solid gray', borderRadius: '4px', backgroundColor: "#F5F5F5" }}
                        />
                    </Grid>
                    <Grid item xs={4} sm={4} md={4} lg={4} sx={{ ml: { xs: 1, sm: 1, md: 2, lg: 2 } }}>
                        <TextareaAutosize
                            id="evaluation_and_reflection5"
                            name="evaluation_and_reflection5"
                            minRows={3}
                            maxRows={100}
                            className="w-full"
                            readOnly
                            value={item.evaluation_and_reflection5}
                            style={{ border: '1px solid gray', borderRadius: '4px', backgroundColor: "#F5F5F5" }}
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
                                readOnly
                                value={item.day6}
                                sx={{
                                    backgroundColor: "#F5F5F5",
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
                            value={item.weather6}
                            sx={{
                                backgroundColor: "#F5F5F5",
                                fontSize: { xs: 11, sm: 11, md: 11, lg: 16, },
                                marginLeft: { xs: -5, sm: -3, md: -8, lg: -15, }
                            }}
                            InputProps={{
                                endAdornment: <InputAdornment position="end">°C</InputAdornment>,
                                readOnly: true
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
                            readOnly
                            value={item.main_activities6}
                            style={{ border: '1px solid gray', borderRadius: '4px', backgroundColor: "#F5F5F5" }}
                        />
                    </Grid>
                    <Grid item xs={4} sm={4} md={4} lg={4} sx={{ ml: { xs: 1, sm: 1, md: 2, lg: 2 } }}>
                        <TextareaAutosize
                            id="evaluation_and_reflection6"
                            name="evaluation_and_reflection6"
                            minRows={3}
                            maxRows={100}
                            className="w-full"
                            readOnly
                            value={item.evaluation_and_reflection6}
                            style={{ border: '1px solid gray', borderRadius: '4px', backgroundColor: "#F5F5F5" }}
                        />
                    </Grid>
                </Grid>
                {/* End Grid */}
            </Grid>

            <div className="mt-auto">
                <Grid container justifyContent="center" spacing={2} className='pt-12' sx={{ bottom: 0, width: '100%', backgroundColor: 'inherit', paddingBottom: '10px' }}>
                    <Grid item>
                        <Button variant="contained" href="/report/weeklyplan" size='medium' className='text-center' startIcon={<ArrowBackIcon />} color="warning">
                            <Typography component="div" style={{ color: '#F5F5F5', alignItems: 'center' }}>
                                戻る
                            </Typography>
                        </Button>
                    </Grid>
                </Grid>
            </div>
        </ContentMain>
    );

};

export default ViewWeeklyOverOne;