import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Grid, Typography, Button, FormControl, Select, MenuItem, InputLabel, TextareaAutosize, TableCell, TableRow, TableHead, TableBody, Paper, TableContainer, Table, Card } from '@mui/material';
import ContentMain from '../../content/Content';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

interface Data {
    FacilityDirector: string;
    Chief: string;
    daily: string;
    education: string;
}

function createData(
    FacilityDirector: string,
    Chief: string,
    daily: string,
    education: string,
): Data {
    return { FacilityDirector, Chief, daily, education };
}

const initialRows: Data[] = [
    createData('濃部　圭子', '渡部　史朗', '6.0', '24',
    ),
    createData('Ice cream sandwich', '237', '9.0', '37',
    ),
    createData('Eclair', '262', '16.0', '24',
    ),
];

const ViewMontylyZero: React.FC = () => {
    const [rows] = useState<Data[]>(initialRows);
    const { pid, age } = useParams<{ pid: string; age: string }>();
    const storedData = JSON.parse(sessionStorage.getItem('monthlyData') || '[]');
    const item = storedData.find((data: any) => data.pid === pid && data.age === age);

    if (!item) {
        return <Typography variant="h6">No data found</Typography>;
    }

    return (
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
                                value={item.age}
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
            </Grid>
            {/* End Grid */}

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

            <Grid className="mt-5 lg:mt-7" sx={{ ml: { xs: 0, sm: 0, md: 0, lg: -2 } }}>
                <Typography
                    component="div"
                    sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, backgroundColor: '#CCF0FD', fontWeight: 'bold', pt: { xs: 1.5, sm: 1.5, md: 1.5, lg: 1 } }}
                    className='flex justify-start h-10 pt-2 pl-5' >
                    指導計画は食育の内容を含むこと。
                </Typography>
            </Grid>

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
                                id="perspectives_on_ physical1"
                                name="perspectives_on_physical1"
                                minRows={3}
                                maxRows={100}
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
                                className="w-56 sm:w-60 lg:w-96"
                                style={{ border: '1px solid gray', borderRadius: '4px' }}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            <Grid className="mt-5 lg:mt-7" sx={{ ml: { xs: 0, sm: 0, md: 0, lg: -2 } }}>
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
                                className="w-56 sm:w-60 lg:w-96"
                                style={{ border: '1px solid gray', borderRadius: '4px' }}
                            />
                        </Grid>
                    </Grid>
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
                                        </TableRow>
                                    ))
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>

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
                                className="w-56 sm:w-60 lg:w-96"
                                style={{ border: '1px solid gray', borderRadius: '4px' }}
                            />
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
                </Grid>
            </div>
        </ContentMain>
    );

};

export default ViewMontylyZero;