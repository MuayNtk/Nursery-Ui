import React from 'react';
import { useParams } from 'react-router-dom';
import { Grid, Typography, Button, TextareaAutosize, Card, FormControl, Select, InputLabel, MenuItem } from '@mui/material';
import ContentMain from '../../content/Content';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

interface ViewMonthlyOneTwoProps {
    pid: string;
    selectedOption: string;
}

const ViewMonthlyOneTwo: React.FC<ViewMonthlyOneTwoProps> = () => {
    const { pid, selectedOption } = useParams<{ pid: string; selectedOption: string }>();
    const storedData = JSON.parse(sessionStorage.getItem('monthlyData1_2') || '[]');
    const item = storedData.find((data: any) => data.pid === pid && data.selectedOption === selectedOption);

    if (!item) {
        return <Typography variant="h6">No data found</Typography>;
    }

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
                {/* Start 施設長 Grid  */}
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
                {/* End 施設長 Grid */}

                {/* Start 主任 Grid */}
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
                {/* End 主任 Grid */}

                {/* Start 担任 Grid */}
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
                {/* End 担任 Grid */}

                {/* start grid  指導計画は食育の内容を含むこと*/}
                <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-5 ">
                    <Grid item xs={12} sm={12} md={12} lg={12} className="" >
                        <Typography
                            component="div"
                            sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, fontWeight: 'bold', }}
                            className='flex justify-start h-11 pt-3 pl-5'
                            bgcolor={"#CCF0FD"}
                        >
                            指導計画は食育の内容を含むこと
                        </Typography>
                    </Grid>
                </Grid>
                {/* End grid  指導計画は食育の内容を含むこと*/}

                <Grid container spacing={2} className="pt-2">
                    <Grid item xs={12} md={6} >
                        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-2' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 7 } }}>
                            <Grid item xs={7.5} sm={3} md={8.5} lg={12}>
                                <Typography gutterBottom sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14 } }}>
                                    生活する姿子どもの
                                </Typography>
                                <TextareaAutosize
                                    id="daily_life"
                                    name="daily_life"
                                    minRows={3}
                                    maxRows={100}
                                    readOnly
                                    value={item.daily_life}
                                    className="w-56 sm:w-60 lg:w-96"
                                    style={{ border: '1px solid gray', borderRadius: '4px', backgroundColor: '#F5F5F5' }}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-2 ' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: -3 } }}>
                            <Grid item xs={7.5} sm={7} md={8.5} lg={12}>
                                <Typography gutterBottom sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14 } }}>
                                    健康・安全
                                </Typography>
                                <TextareaAutosize
                                    id="health_safety1"
                                    name="health_safety1"
                                    minRows={3}
                                    maxRows={100}
                                    readOnly
                                    value={item.health_safety1}
                                    className="w-56 sm:w-60 lg:w-96"
                                    style={{ border: '1px solid gray', borderRadius: '4px', backgroundColor: '#F5F5F5' }}
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
                                    連携家庭・地域との
                                </Typography>
                                <TextareaAutosize
                                    id="cooperation"
                                    name="cooperation"
                                    minRows={3}
                                    maxRows={100}
                                    readOnly
                                    value={item.cooperation}
                                    className="w-56 sm:w-60 lg:w-96"
                                    style={{ border: '1px solid gray', borderRadius: '4px', backgroundColor: '#F5F5F5' }}
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
                                    id="event1"
                                    name="event1"
                                    minRows={3}
                                    maxRows={100}
                                    readOnly
                                    value={item.event1}
                                    className="w-56 sm:w-60 lg:w-96"
                                    style={{ border: '1px solid gray', borderRadius: '4px', backgroundColor: '#F5F5F5' }}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                {/* Start Card ねらい*/}
                <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-14 pl-10 flex '  >
                    <Card sx={{ bgcolor: "pink", width: 100, height: 30, }} >
                        <Typography component='div' className="pt-2 lg:pt-1" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, fontWeight: 'bold', marginLeft: { xs: 4, sm: 4, md: 4, lg: 3, } }}>
                            ねらい
                        </Typography>
                    </Card>
                </Grid>
                {/* End Card ねらい*/}

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
                                    readOnly
                                    value={item.emotional_stability1}
                                    className="w-56 sm:w-60 lg:w-96"
                                    style={{ border: '1px solid gray', borderRadius: '4px', backgroundColor: '#F5F5F5' }}
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
                                    健康・人間開係・環境・言・表現
                                </Typography>
                                <TextareaAutosize
                                    id="health_human1"
                                    name="health_human1"
                                    minRows={3}
                                    maxRows={100}
                                    readOnly
                                    value={item.health_human1}
                                    className="w-56 sm:w-60 lg:w-96"
                                    style={{ border: '1px solid gray', borderRadius: '4px', backgroundColor: '#F5F5F5' }}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                {/* start grid  子どもとの関わり方(保育士等の育みたい内容)*/}
                <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-5 ">
                    <Grid item xs={12} sm={12} md={12} lg={12} className="" >
                        <Typography
                            component="div"
                            sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, fontWeight: 'bold', }}
                            className='flex justify-start h-11 pt-3 pl-5'
                            bgcolor={"#CCF0FD"}>
                            子どもとの関わり方(保育士等の育みたい内容)
                        </Typography>
                    </Grid>
                </Grid>
                {/* End grid  子どもとの関わり方(保育士等の育みたい内容)*/}

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
                                    生命の保持情緒の安
                                </Typography>
                                <TextareaAutosize
                                    id="emotional_comfort1"
                                    name="emotional_comfort1"
                                    minRows={3}
                                    maxRows={100}
                                    readOnly
                                    value={item.emotional_comfort1}
                                    className="w-56 sm:w-60 lg:w-96"
                                    style={{ border: '1px solid gray', borderRadius: '4px', backgroundColor: '#F5F5F5' }}
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
                                    健康・人間閱係・環境・言葉・表現
                                </Typography>
                                <TextareaAutosize
                                    id="health_human2"
                                    name="health_human2"
                                    minRows={3}
                                    maxRows={100}
                                    readOnly
                                    value={item.health_human2}
                                    className="w-56 sm:w-60 lg:w-96"
                                    style={{ border: '1px solid gray', borderRadius: '4px', backgroundColor: '#F5F5F5' }}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                {/* start grid  環境づくり予想される子どもの活動配慮・援助*/}
                <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-5 ">
                    <Grid item xs={12} sm={12} md={12} lg={12} className="" >
                        <Typography
                            component="div"
                            sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, fontWeight: 'bold', }}
                            className='flex justify-start h-11 pt-3 pl-5'
                            bgcolor={"#CCF0FD"}>
                            環境づくり予想される子どもの活動配慮・援助
                        </Typography>
                    </Grid>
                </Grid>
                {/* End grid  環境づくり予想される子どもの活動配慮・援助*/}

                <Grid container spacing={2} className="pt-5" justifyContent='start'>

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
                                    生命の保持情緒の安
                                </Typography>
                                <TextareaAutosize
                                    id="emotional_comfort2"
                                    name="emotional_comfort2"
                                    minRows={3}
                                    maxRows={100}
                                    readOnly
                                    value={item.emotional_comfort2}
                                    className="w-56 sm:w-60 lg:w-96"
                                    style={{ border: '1px solid gray', borderRadius: '4px', backgroundColor: '#F5F5F5' }}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid container spacing={2} className="pt-2">
                    <Grid item xs={12} md={6}>
                        <Grid container spacing={1} alignItems='center' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 5 } }}>
                            <Grid item xs={1} sm={4} md={3} lg={1} className="text-end">
                                <Typography component="div" fontWeight="bold" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16 } }}>
                                    教育
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-2' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 7 } }}>
                            <Grid item xs={7.5} sm={3} md={8.5} lg={12}>
                                <Typography gutterBottom sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14 } }}>
                                    健康・人間閱係・環境・言葉・表現
                                </Typography>
                                <TextareaAutosize
                                    id="health_human3"
                                    name="health_human3"
                                    minRows={3}
                                    maxRows={100}
                                    readOnly
                                    value={item.health_human3}
                                    className="w-56 sm:w-60 lg:w-96"
                                    style={{ border: '1px solid gray', borderRadius: '4px', backgroundColor: '#F5F5F5' }}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-8' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: -3 } }}>
                            <Grid item xs={7.5} sm={7} md={8.5} lg={12}>
                                <Typography gutterBottom sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14 } }}>
                                    個別対応
                                </Typography>
                                <TextareaAutosize
                                    id="individual_correspondence"
                                    name="individual_correspondence"
                                    minRows={3}
                                    maxRows={100}
                                    readOnly
                                    value={item.individual_correspondence}
                                    className="w-56 sm:w-60 lg:w-96"
                                    style={{ border: '1px solid gray', borderRadius: '4px', backgroundColor: '#F5F5F5' }}
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
                                    組運営
                                </Typography>
                                <TextareaAutosize
                                    id="group_management"
                                    name="group_management"
                                    minRows={3}
                                    maxRows={100}
                                    readOnly
                                    value={item.group_management}
                                    className="w-56 sm:w-60 lg:w-96"
                                    style={{ border: '1px solid gray', borderRadius: '4px', backgroundColor: '#F5F5F5' }}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-3' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: -3 } }}>
                            <Grid item xs={7.5} sm={7} md={8.5} lg={12}>
                                <Typography gutterBottom sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14 } }}>
                                    評価・反省
                                </Typography>
                                <TextareaAutosize
                                    id="evaluation_and_reflection"
                                    name="evaluation_and_reflection"
                                    minRows={3}
                                    maxRows={100}
                                    readOnly
                                    value={item.evaluation_and_reflection}
                                    className="w-56 sm:w-60 lg:w-96"
                                    style={{ border: '1px solid gray', borderRadius: '4px', backgroundColor: '#F5F5F5' }}
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
                </Grid>
            </div>
            
        </ContentMain>
    );
};

export default ViewMonthlyOneTwo;