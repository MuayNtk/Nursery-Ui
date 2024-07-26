import React from 'react';
import { useParams } from 'react-router-dom';
import { TextField, Grid, Typography, Button, FormControl, Select, MenuItem, InputLabel, Divider, Card, TextareaAutosize } from '@mui/material';
import ContentMain from '../content/Content';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


const ViewInfoStaff: React.FC = () => {
    const { pid } = useParams<{ pid: string }>();
    const storedData = JSON.parse(sessionStorage.getItem('annualplanData') || '[]');
    const item = storedData.find((data: any) => data.pid === pid);

    if (!item) {
        return <Typography variant="h6">No data found</Typography>;
    }

    return (
        <ContentMain className="flex flex-col min-h-screen">
            <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-10 lg:pt-0">
                <Grid item xs={9} sm={7} md={5} lg={2.5} sx={{ ml: { xs: 0, sm: 0, md: 0, lg: 2 }, mt: { xs: -1, sm: -2, md: 5, lg: 4 } }}>
                    <div>
                        <FormControl sx={{ minWidth: 100 }} size="small" fullWidth>
                            <InputLabel id="demo-select-small-label">年間指導計画を選択する</InputLabel>
                            <Select
                                labelId="demo-select-small-label"
                                id="age"
                                name='age'
                                label="年間指導計画を選択する"
                                size="small"
                                value={item.age}
                                className="mb-5"
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value="年間指導計画 0 歲児">年間指導計画 0 歲児</MenuItem>
                                <MenuItem value="年間指導計画 1·2 歲児">年間指導計画 1·2 歲児</MenuItem>
                                <MenuItem value="年間指導計画 3·4·5 歲児">年間指導計画 3·4·5 歲児</MenuItem>
                            </Select>
                        </FormControl>
                        <div>
                            {item.age && (
                                <Typography
                                    component="div"
                                    sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, fontWeight: 'bold' }}
                                    className='flex justify-start h-10 pt-2 pl-5'
                                >
                                    {`${item.age}`}
                                </Typography>
                            )}
                        </div>
                    </div>
                </Grid>
                <Grid item xs={3} sm={4} md={3} lg={2} >
                    <Typography component="div" fontWeight="bold" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, mt: { xs: 6.5, sm: 5.5, md: 12.5, lg: 11.5 }, ml: { xs: -13, sm: -17, md: -20, lg: -4 } }} >
                        (0年A組) 年度
                    </Typography>
                </Grid>
            </Grid>

            <Grid container spacing={1} className='pt-7' justifyContent="start">
                <Grid item xs={3} sm={3} md={2} lg={1.5}>
                    <Typography style={{ fontSize: '14px' }} className='pt-2 text-end' >
                        担任 :
                    </Typography>
                </Grid>
                <Grid item xs={7} sm={7} md={3} lg={3}>
                    <TextField
                        id="homeroom_teacher"
                        name='homeroom_teacher'
                        type="text"
                        size="small"
                        fullWidth
                        value={item.homeroom_teacher}
                        sx={{ backgroundColor: '#F5F5F5' }}
                    />
                </Grid>
                <Grid item xs={3} sm={3} md={2} lg={1.5}>
                    <Typography style={{ fontSize: '14px' }} className='pt-2 text-end'>
                        年間目標 :
                    </Typography>
                </Grid>
                <Grid item xs={7} sm={7} md={3} lg={3}>
                    <TextField
                        id="annua_goals"
                        name='annua_goals'
                        type="text" size="small"
                        fullWidth
                        value={item.annua_goals}
                        sx={{ backgroundColor: '#F5F5F5' }}
                    />
                </Grid>

                <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-5 pb-5' ></Grid>
            </Grid>

            <Divider sx={{ borderColor: 'darkgrey', borderWidth: '2px' }} />

            <Grid container spacing={1} className='pt-5' >
                <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 1, md: 1 }} className=' pt-5' >
                    <Grid item xs={2} sm={1.5} md={3} lg={1.5} className="text-end">
                        <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, mt: 1 }} >
                            期 :
                        </Typography>
                    </Grid>
                    <Grid item xs={2} sm={1.5} md={1} lg={1} >
                        <FormControl sx={{ minWidth: 90 }} size="small">
                            <InputLabel id="month-select-label">月</InputLabel>
                            <Select
                                labelId="month-select-label"
                                id="month1"
                                name='month1'
                                value={item.month1}
                                label="月"
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
                    <Grid item xs={2} sm={1.5} md={1} lg={1} >
                        <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, mt: 1, ml: { xs: 5, sm: 6.5, md: 8, lg: -1 } }} >
                            ~
                        </Typography>
                    </Grid>
                    <Grid item xs={2} sm={1.5} md={1} lg={1} sx={{ ml: { xs: 2, sm: 3, md: 5, lg: -1 } }}>
                        <FormControl sx={{ minWidth: 90 }} size="small">
                            <InputLabel id="month-select-label">月</InputLabel>
                            <Select
                                labelId="month-select-label"
                                id="month2"
                                name='month2'
                                value={item.month2}
                                label="月"
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
                </Grid>

                <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-10' sx={{ ml: { xs: 3, sm: 3, md: 2, lg: 8 } }}>
                    <Card sx={{ bgcolor: "pink", width: 120, height: 40 }}>
                        <Typography component='div' className="pt-2">
                            ねらい
                        </Typography>
                    </Card>
                </Grid>

                <Grid container spacing={1} className='pt-7' justifyContent="start">
                    <Grid item xs={3} sm={3} md={2} lg={1.5}>
                        <Typography style={{ fontSize: '14px' }} className='pt-2 text-end' >
                            養護 :
                        </Typography>
                    </Grid>
                    <Grid item xs={7} sm={7} md={3} lg={3}>
                        <TextField
                            id="nursing_care1"
                            name="nursing_care1"
                            type="text"
                            size="small"
                            fullWidth
                            value={item.nursing_care1}
                            sx={{ backgroundColor: '#F5F5F5' }}
                        />
                    </Grid>
                    <Grid item xs={3} sm={3} md={2} lg={1.5}>
                        <Typography style={{ fontSize: '14px' }} className='pt-2 text-end'>
                            教育 :
                        </Typography>
                    </Grid>
                    <Grid item xs={7} sm={7} md={3} lg={3}>
                        <TextField
                            id="education1"
                            name="education1"
                            type="text"
                            size="small"
                            fullWidth
                            value={item.education1}
                            sx={{ backgroundColor: '#F5F5F5' }}
                        />
                    </Grid>
                </Grid>

                <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-10' sx={{ ml: { xs: 3, sm: 3, md: 2, lg: 8 } }}>
                    <Card sx={{ bgcolor: "pink", width: 120, height: 40 }}>
                        <Typography component='div' className="pt-2">
                            内容
                        </Typography>
                    </Card>
                </Grid>

                <Grid container spacing={2} className="pt-5" justifyContent='start'>
                    <Grid item xs={12} md={6} >
                        <Grid container spacing={1} alignItems='center' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 5 } }}>
                            <Grid item xs={1} sm={4} md={3} lg={2} className="text-end">
                                <Typography component="div" fontWeight="bold" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16 } }}>
                                    義護
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-2' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 15 } }}>
                            <Grid item xs={7.5} sm={3} md={8.5} lg={12} className="text-start">
                                <Typography gutterBottom sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14 } }}>
                                    生命の保持・情緒の安定
                                </Typography>
                                <TextareaAutosize
                                    id="emotional_stability1"
                                    name="emotional_stability1"
                                    minRows={3}
                                    maxRows={100}
                                    className="w-56 sm:w-60 lg:w-96"
                                    value={item.emotional_stability1}
                                    style={{ border: '1px solid gray', borderRadius: '4px', backgroundColor: '#F5F5F5' }}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid container spacing={1} className='pt-5' alignItems='center' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 11 } }}>
                    <Grid item xs={2} sm={4} md={3} lg={2} className="text-start">
                        <Typography component="div" fontWeight="bold" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16 } }}>
                            教育
                        </Typography>
                    </Grid>
                </Grid>

                <Grid container spacing={2} className="pt-3" justifyContent='center'>
                    <Grid item xs={12} md={6} >
                        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-2' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 15 } }}>
                            <Grid item xs={7.5} sm={3} md={8.5} lg={12} className="text-start">
                                <Typography gutterBottom sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 12 } }}>
                                    関する視点身体的発達に,関する視点社会的発達に,関する視点精神的発達に
                                </Typography>
                                <TextareaAutosize
                                    id="perspectives_on_physical1"
                                    name="perspectives_on_physical1"
                                    minRows={3}
                                    maxRows={100}
                                    className="w-56 sm:w-60 lg:w-96"
                                    value={item.perspectives_on_physical1}
                                    style={{ border: '1px solid gray', borderRadius: '4px', backgroundColor: '#F5F5F5' }}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-2 ' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 5 } }}>
                            <Grid item xs={7.5} sm={7} md={8.5} lg={12} className="text-start">
                                <Typography gutterBottom sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 12 } }}>
                                    食育
                                </Typography>
                                <TextareaAutosize
                                    id="food_education1"
                                    name="food_education1"
                                    minRows={3}
                                    maxRows={100}
                                    className="w-56 sm:w-60 lg:w-96"
                                    value={item.food_education1}
                                    style={{ border: '1px solid gray', borderRadius: '4px', backgroundColor: '#F5F5F5' }}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>


                <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-5 pb-5' ></Grid>

            </Grid>

            <Divider sx={{ borderColor: 'darkgrey', borderWidth: '2px' }} />

            {/* End Box 1 */}

            {/* Start Box 2 */}
            <Grid container spacing={1} className='pt-5' >
                <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 1, md: 1 }} className=' pt-5' >
                    <Grid item xs={2} sm={1.5} md={3} lg={1.5} className="text-end">
                        <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, mt: 1 }} >
                            期 :
                        </Typography>
                    </Grid>
                    <Grid item xs={2} sm={1.5} md={1} lg={1} >
                        <FormControl sx={{ minWidth: 90 }} size="small">
                            <InputLabel id="month-select-label">月</InputLabel>
                            <Select
                                labelId="month-select-label"
                                id="month3"
                                value={item.month3}
                                label="月"
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
                    <Grid item xs={2} sm={1.5} md={1} lg={1} >
                        <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, mt: 1, ml: { xs: 5, sm: 6.5, md: 8, lg: -1 } }} >
                            ~
                        </Typography>
                    </Grid>
                    <Grid item xs={2} sm={1.5} md={1} lg={1} sx={{ ml: { xs: 2, sm: 3, md: 5, lg: -1 } }}>
                        <FormControl sx={{ minWidth: 90 }} size="small">
                            <InputLabel id="month-select-label">月</InputLabel>
                            <Select
                                labelId="month-select-label"
                                id="month4"
                                value={item.month4}
                                label="月"
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
                </Grid>

                <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-10' sx={{ ml: { xs: 3, sm: 3, md: 2, lg: 8 } }}>
                    <Card sx={{ bgcolor: "pink", width: 120, height: 40 }}>
                        <Typography component='div' className="pt-2">
                            ねらい
                        </Typography>
                    </Card>
                </Grid>

                <Grid container spacing={1} className='pt-7' justifyContent="start">
                    <Grid item xs={3} sm={3} md={2} lg={1.5}>
                        <Typography style={{ fontSize: '14px' }} className='pt-2 text-end' >
                            養護 :
                        </Typography>
                    </Grid>
                    <Grid item xs={7} sm={7} md={3} lg={3}>
                        <TextField
                            id="nursing_care2"
                            name="nursing_care2"
                            type="text"
                            size="small"
                            fullWidth
                            value={item.nursing_care2}
                            sx={{ backgroundColor: '#F5F5F5' }}
                        />
                    </Grid>
                    <Grid item xs={3} sm={3} md={2} lg={1.5}>
                        <Typography style={{ fontSize: '14px' }} className='pt-2 text-end'>
                            教育 :
                        </Typography>
                    </Grid>
                    <Grid item xs={7} sm={7} md={3} lg={3}>
                        <TextField
                            id="education2"
                            name="education2"
                            type="text"
                            size="small"
                            fullWidth
                            value={item.education2}
                            sx={{ backgroundColor: '#F5F5F5' }}
                        />
                    </Grid>
                </Grid>

                <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-10' sx={{ ml: { xs: 3, sm: 3, md: 2, lg: 8 } }}>
                    <Card sx={{ bgcolor: "pink", width: 120, height: 40 }}>
                        <Typography component='div' className="pt-2">
                            内容
                        </Typography>
                    </Card>
                </Grid>

                <Grid container spacing={2} className="pt-5" justifyContent='start'>
                    <Grid item xs={12} md={6} >
                        <Grid container spacing={1} alignItems='center' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 5 } }}>
                            <Grid item xs={1} sm={4} md={3} lg={2} className="text-end">
                                <Typography component="div" fontWeight="bold" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16 } }}>
                                    義護
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-2' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 15 } }}>
                            <Grid item xs={7.5} sm={3} md={8.5} lg={12} className="text-start">
                                <Typography gutterBottom sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14 } }}>
                                    生命の保持・情緒の安定
                                </Typography>
                                <TextareaAutosize
                                    id="emotional_stability2"
                                    name="emotional_stability2"
                                    minRows={3}
                                    maxRows={100}
                                    className="w-56 sm:w-60 lg:w-96"
                                    value={item.emotional_stability2}
                                    style={{ border: '1px solid gray', borderRadius: '4px', backgroundColor: '#F5F5F5' }}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid container spacing={1} className='pt-5' alignItems='center' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 11 } }}>
                    <Grid item xs={2} sm={4} md={3} lg={2} className="text-start">
                        <Typography component="div" fontWeight="bold" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16 } }}>
                            教育
                        </Typography>
                    </Grid>
                </Grid>

                <Grid container spacing={2} className="pt-3" justifyContent='center'>
                    <Grid item xs={12} md={6} >
                        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-2' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 15 } }}>
                            <Grid item xs={7.5} sm={3} md={8.5} lg={12} className="text-start">
                                <Typography gutterBottom sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 12 } }}>
                                    関する視点身体的発達に,関する視点社会的発達に,関する視点精神的発達に
                                </Typography>
                                <TextareaAutosize
                                    id="perspectives_on_physical2"
                                    name="perspectives_on_physical2"
                                    minRows={3}
                                    maxRows={100}
                                    className="w-56 sm:w-60 lg:w-96"
                                    value={item.perspectives_on_physical2}
                                    style={{ border: '1px solid gray', borderRadius: '4px', backgroundColor: '#F5F5F5' }}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-2 ' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 5 } }}>
                            <Grid item xs={7.5} sm={7} md={8.5} lg={12} className="text-start">
                                <Typography gutterBottom sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 12 } }}>
                                    食育
                                </Typography>
                                <TextareaAutosize
                                    id="food_education2"
                                    name="food_education2"
                                    minRows={3}
                                    maxRows={100}
                                    className="w-56 sm:w-60 lg:w-96"
                                    value={item.food_education2}
                                    style={{ border: '1px solid gray', borderRadius: '4px', backgroundColor: '#F5F5F5' }}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>


                <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-5 pb-5' ></Grid>

            </Grid>

            <Divider sx={{ borderColor: 'darkgrey', borderWidth: '2px' }} />
            {/* End Box 2 */}

            {/* Start Box 3*/}
            <Grid container spacing={1} className='pt-5' >
                <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 1, md: 1 }} className=' pt-5' >
                    <Grid item xs={2} sm={1.5} md={3} lg={1.5} className="text-end">
                        <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, mt: 1 }} >
                            期 :
                        </Typography>
                    </Grid>
                    <Grid item xs={2} sm={1.5} md={1} lg={1} >
                        <FormControl sx={{ minWidth: 90 }} size="small">
                            <InputLabel id="month-select-label">月</InputLabel>
                            <Select
                                labelId="month-select-label"
                                id="month5"
                                value={item.month5}
                                label="月"
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
                    <Grid item xs={2} sm={1.5} md={1} lg={1} >
                        <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, mt: 1, ml: { xs: 5, sm: 6.5, md: 8, lg: -1 } }} >
                            ~
                        </Typography>
                    </Grid>
                    <Grid item xs={2} sm={1.5} md={1} lg={1} sx={{ ml: { xs: 2, sm: 3, md: 5, lg: -1 } }}>
                        <FormControl sx={{ minWidth: 90 }} size="small">
                            <InputLabel id="month-select-label">月</InputLabel>
                            <Select
                                labelId="month-select-label"
                                id="month6"
                                value={item.month6}
                                label="月"
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
                </Grid>

                <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-10' sx={{ ml: { xs: 3, sm: 3, md: 2, lg: 8 } }}>
                    <Card sx={{ bgcolor: "pink", width: 120, height: 40 }}>
                        <Typography component='div' className="pt-2">
                            ねらい
                        </Typography>
                    </Card>
                </Grid>

                <Grid container spacing={1} className='pt-7' justifyContent="start">
                    <Grid item xs={3} sm={3} md={2} lg={1.5}>
                        <Typography style={{ fontSize: '14px' }} className='pt-2 text-end' >
                            養護 :
                        </Typography>
                    </Grid>
                    <Grid item xs={7} sm={7} md={3} lg={3}>
                        <TextField
                            id="nursing_care3"
                            name="nursing_care3"
                            type="text"
                            size="small"
                            fullWidth
                            value={item.nursing_care3}
                            sx={{ backgroundColor: '#F5F5F5' }}
                        />
                    </Grid>
                    <Grid item xs={3} sm={3} md={2} lg={1.5}>
                        <Typography style={{ fontSize: '14px' }} className='pt-2 text-end'>
                            教育 :
                        </Typography>
                    </Grid>
                    <Grid item xs={7} sm={7} md={3} lg={3}>
                        <TextField
                            id="education3"
                            name="education3"
                            type="text"
                            size="small"
                            fullWidth
                            value={item.education3}
                            sx={{ backgroundColor: '#F5F5F5' }}
                        />
                    </Grid>
                </Grid>

                <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-10' sx={{ ml: { xs: 3, sm: 3, md: 2, lg: 8 } }}>
                    <Card sx={{ bgcolor: "pink", width: 120, height: 40 }}>
                        <Typography component='div' className="pt-2">
                            内容
                        </Typography>
                    </Card>
                </Grid>

                <Grid container spacing={2} className="pt-5" justifyContent='start'>
                    <Grid item xs={12} md={6} >
                        <Grid container spacing={1} alignItems='center' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 5 } }}>
                            <Grid item xs={1} sm={4} md={3} lg={2} className="text-end">
                                <Typography component="div" fontWeight="bold" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16 } }}>
                                    義護
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-2' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 15 } }}>
                            <Grid item xs={7.5} sm={3} md={8.5} lg={12} className="text-start">
                                <Typography gutterBottom sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14 } }}>
                                    生命の保持・情緒の安定
                                </Typography>
                                <TextareaAutosize
                                    id="emotional_stability3"
                                    name="emotional_stability3"
                                    minRows={3}
                                    maxRows={100}
                                    className="w-56 sm:w-60 lg:w-96"
                                    value={item.emotional_stability3}
                                    style={{ border: '1px solid gray', borderRadius: '4px', backgroundColor: '#F5F5F5' }}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid container spacing={1} className='pt-5' alignItems='center' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 11 } }}>
                    <Grid item xs={2} sm={4} md={3} lg={2} className="text-start">
                        <Typography component="div" fontWeight="bold" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16 } }}>
                            教育
                        </Typography>
                    </Grid>
                </Grid>

                <Grid container spacing={2} className="pt-3" justifyContent='center'>
                    <Grid item xs={12} md={6} >
                        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-2' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 15 } }}>
                            <Grid item xs={7.5} sm={3} md={8.5} lg={12} className="text-start">
                                <Typography gutterBottom sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 12 } }}>
                                    関する視点身体的発達に,関する視点社会的発達に,関する視点精神的発達に
                                </Typography>
                                <TextareaAutosize
                                    id="perspectives_on_physical3"
                                    name="perspectives_on_physical3"
                                    minRows={3}
                                    maxRows={100}
                                    className="w-56 sm:w-60 lg:w-96"
                                    value={item.perspectives_on_physical3}
                                    style={{ border: '1px solid gray', borderRadius: '4px', backgroundColor: '#F5F5F5' }}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-2 ' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 5 } }}>
                            <Grid item xs={7.5} sm={7} md={8.5} lg={12} className="text-start">
                                <Typography gutterBottom sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 12 } }}>
                                    食育
                                </Typography>
                                <TextareaAutosize
                                    id="food_education3"
                                    name="food_education3"
                                    minRows={3}
                                    maxRows={100}
                                    className="w-56 sm:w-60 lg:w-96"
                                    value={item.food_education3}
                                    style={{ border: '1px solid gray', borderRadius: '4px', backgroundColor: '#F5F5F5' }}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>


                <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-5 pb-5' ></Grid>

            </Grid>

            <Divider sx={{ borderColor: 'darkgrey', borderWidth: '2px' }} />
            {/* End Box 3 */}

            {/* Start Box 4 */}
            <Grid container spacing={1} className='pt-5' >
                <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 1, md: 1 }} className=' pt-5' >
                    <Grid item xs={2} sm={1.5} md={3} lg={1.5} className="text-end">
                        <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, mt: 1 }} >
                            期 :
                        </Typography>
                    </Grid>
                    <Grid item xs={2} sm={1.5} md={1} lg={1} >
                        <FormControl sx={{ minWidth: 90 }} size="small">
                            <InputLabel id="month-select-label">月</InputLabel>
                            <Select
                                labelId="month-select-label"
                                id="month7"
                                value={item.month7}
                                label="月"
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
                    <Grid item xs={2} sm={1.5} md={1} lg={1} >
                        <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, mt: 1, ml: { xs: 5, sm: 6.5, md: 8, lg: -1 } }} >
                            ~
                        </Typography>
                    </Grid>
                    <Grid item xs={2} sm={1.5} md={1} lg={1} sx={{ ml: { xs: 2, sm: 3, md: 5, lg: -1 } }}>
                        <FormControl sx={{ minWidth: 90 }} size="small">
                            <InputLabel id="month-select-label">月</InputLabel>
                            <Select
                                labelId="month-select-label"
                                id="month8"
                                value={item.month8}
                                label="月"
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
                </Grid>

                <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-10' sx={{ ml: { xs: 3, sm: 3, md: 2, lg: 8 } }}>
                    <Card sx={{ bgcolor: "pink", width: 120, height: 40 }}>
                        <Typography component='div' className="pt-2">
                            ねらい
                        </Typography>
                    </Card>
                </Grid>

                <Grid container spacing={1} className='pt-7' justifyContent="start">
                    <Grid item xs={3} sm={3} md={2} lg={1.5}>
                        <Typography style={{ fontSize: '14px' }} className='pt-2 text-end' >
                            養護 :
                        </Typography>
                    </Grid>
                    <Grid item xs={7} sm={7} md={3} lg={3}>
                        <TextField
                            id="nursing_care4"
                            name="nursing_care4"
                            type="text"
                            size="small"
                            fullWidth
                            value={item.nursing_care4}
                            sx={{ backgroundColor: '#F5F5F5' }}
                        />
                    </Grid>
                    <Grid item xs={3} sm={3} md={2} lg={1.5}>
                        <Typography style={{ fontSize: '14px' }} className='pt-2 text-end'>
                            教育 :
                        </Typography>
                    </Grid>
                    <Grid item xs={7} sm={7} md={3} lg={3}>
                        <TextField
                            id="education4"
                            name="education4"
                            type="text"
                            size="small"
                            fullWidth
                            value={item.education4}
                            sx={{ backgroundColor: '#F5F5F5' }}
                        />
                    </Grid>
                </Grid>

                <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-10' sx={{ ml: { xs: 3, sm: 3, md: 2, lg: 8 } }}>
                    <Card sx={{ bgcolor: "pink", width: 120, height: 40 }}>
                        <Typography component='div' className="pt-2">
                            内容
                        </Typography>
                    </Card>
                </Grid>

                <Grid container spacing={2} className="pt-5" justifyContent='start'>
                    <Grid item xs={12} md={6} >
                        <Grid container spacing={1} alignItems='center' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 5 } }}>
                            <Grid item xs={1} sm={4} md={3} lg={2} className="text-end">
                                <Typography component="div" fontWeight="bold" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16 } }}>
                                    義護
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-2' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 15 } }}>
                            <Grid item xs={7.5} sm={3} md={8.5} lg={12} className="text-start">
                                <Typography gutterBottom sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14 } }}>
                                    生命の保持・情緒の安定
                                </Typography>
                                <TextareaAutosize
                                    id="emotional_stability4"
                                    name="emotional_stability4"
                                    minRows={3}
                                    maxRows={100}
                                    className="w-56 sm:w-60 lg:w-96"
                                    value={item.emotional_stability4}
                                    style={{ border: '1px solid gray', borderRadius: '4px', backgroundColor: '#F5F5F5' }}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid container spacing={1} className='pt-5' alignItems='center' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 11 } }}>
                    <Grid item xs={2} sm={4} md={3} lg={2} className="text-start">
                        <Typography component="div" fontWeight="bold" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16 } }}>
                            教育
                        </Typography>
                    </Grid>
                </Grid>

                <Grid container spacing={2} className="pt-3" justifyContent='center'>
                    <Grid item xs={12} md={6} >
                        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-2' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 15 } }}>
                            <Grid item xs={7.5} sm={3} md={8.5} lg={12} className="text-start">
                                <Typography gutterBottom sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 12 } }}>
                                    関する視点身体的発達に,関する視点社会的発達に,関する視点精神的発達に
                                </Typography>
                                <TextareaAutosize
                                    id="perspectives_on_physical4"
                                    name="perspectives_on_physical4"
                                    minRows={3}
                                    maxRows={100}
                                    className="w-56 sm:w-60 lg:w-96"
                                    value={item.perspectives_on_physical4}
                                    style={{ border: '1px solid gray', borderRadius: '4px', backgroundColor: '#F5F5F5' }}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-2 ' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 5 } }}>
                            <Grid item xs={7.5} sm={7} md={8.5} lg={12} className="text-start">
                                <Typography gutterBottom sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 12 } }}>
                                    食育
                                </Typography>
                                <TextareaAutosize
                                    id="food_education4"
                                    name="food_education4"
                                    minRows={3}
                                    maxRows={100}
                                    className="w-56 sm:w-60 lg:w-96"
                                    value={item.food_education4}
                                    style={{ border: '1px solid gray', borderRadius: '4px', backgroundColor: '#F5F5F5' }}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-5 pb-5' ></Grid>

            </Grid>

            <Divider sx={{ borderColor: 'darkgrey', borderWidth: '2px' }} />
            {/* End Box 4 */}

            <div className="mt-auto">
                <Grid container justifyContent="center" spacing={2} className='pt-12' sx={{ bottom: 0, width: '100%', backgroundColor: 'inherit', paddingBottom: '10px' }}>
                    <Grid item>
                        <Button variant="contained" href="/report/annualplan" size='medium' className='text-center' startIcon={<ArrowBackIcon />} color="warning">
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

export default ViewInfoStaff;