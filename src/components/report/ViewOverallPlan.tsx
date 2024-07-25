import React from 'react';
import { useParams } from 'react-router-dom';
import { TextField, Grid, Typography, TextareaAutosize, Button, Select, MenuItem, Card } from '@mui/material';
import ContentMain from '../content/Content';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const ViewOverallPlan: React.FC = () => {
    const { pid } = useParams<{ pid: string }>();
    const storedData = JSON.parse(sessionStorage.getItem('overallplanData') || '[]');
    const item = storedData.find((data: any) => data.pid === pid);

    if (!item) {
        return <Typography variant="h6">No data found</Typography>;
    }

    return (
        <ContentMain className="flex flex-col min-h-screen">
            <Grid item xs={12} className="pt-3">
                <div className="flex justify-start w-9 h-9">
                    <Select
                        name="age"
                        value={item.age}
                        sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14 }, bgcolor: '#F5F5F5' }}
                    >
                        <MenuItem value="0 歳">0 歳</MenuItem>
                        <MenuItem value="1 歳">1 歳</MenuItem>
                        <MenuItem value="2 歳">2 歳</MenuItem>
                        <MenuItem value="3 歳">3 歳</MenuItem>
                        <MenuItem value="4 歳">4 歳</MenuItem>
                        <MenuItem value="5 歳">5 歳</MenuItem>
                    </Select>
                </div>
            </Grid>

            <div className='pt-3'>
                <Typography
                    component="div"
                    sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, fontWeight: 'bold' }}
                    className='flex justify-start h-10 pt-2 pl-5'
                    bgcolor={"#CCF0FD"}
                >
                    {`${item.age}`}
                </Typography>
            </div>

            {/* Start 全体的な計画 and 家庭・地域との連携  */}
            <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-5 pl-10">
                <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14, }, }} className=''>
                    保育の目標
                </Typography>
                {/* grid 1-1 */}
                <Grid item xs={8} sm={8} md={3} lg={3} >
                    <TextareaAutosize
                        className="w-full"
                        id="goalsOfChildcare"
                        name="goalsOfChildcare"
                        minRows={3.5} maxRows={100}
                        readOnly
                        value={item.goalsOfChildcare}
                        style={{ border: '1px solid gray', borderRadius: '4px', backgroundColor: '#F5F5F5' }}
                    />
                </Grid>
                <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14, }, }} className='lg:pl-16'>
                    家庭・地域との連携
                </Typography>
                {/* grid 1-2 */}
                <Grid item xs={7} sm={3} md={3} lg={3} sx={{ marginLeft: { xs: 1, sm: 1, md: 2, lg: 1, } }}>
                    <TextareaAutosize
                        className="w-full"
                        id="familiesAndCommunities"
                        name="familiesAndCommunities"
                        minRows={3.5} maxRows={100}
                        readOnly
                        value={item.familiesAndCommunities}
                        style={{ border: '1px solid gray', borderRadius: '4px', backgroundColor: '#F5F5F5' }}
                    />
                </Grid>
            </Grid>
            {/* End 全体的な計画 and 家庭・地域との連携 */}

            {/* Start Card */}
            <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-10 pl-4' >
                <Card sx={{ bgcolor: "pink", width: 100, height: 30, }}>
                    <Typography component='div' className="pt-1" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, fontWeight: 'bold' }}>
                        既往症
                    </Typography>
                </Card>
            </Grid>
            {/* End Card */}

            <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-4 pl-24">
                <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14, }, marginLeft: { xs: 1, sm: 1, md: 2, lg: 1, } }} >
                    養護
                </Typography>
                <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14, }, marginLeft: { xs: 12, sm: 18, md: 25, lg: 45, } }} >
                    教育
                </Typography>
            </Grid>

            {/* start grid  養護*/}
            <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-3 pl-20">
                <Grid item xs={5} sm={5} md={4} lg={4} className="" sx={{ marginLeft: { xs: 1, sm: 1, md: 2, lg: 1, } }}>
                    <TextareaAutosize
                        id="maintenance"
                        name="maintenance"
                        minRows={3.5}
                        maxRows={100}
                        readOnly
                        className="w-full"
                        value={item.maintenance}
                        style={{ border: '1px solid gray', borderRadius: '4px', backgroundColor: "#F5F5F5" }}
                    />
                </Grid>
                <Grid item xs={5} sm={5} md={4} lg={4} className="" sx={{ marginLeft: { xs: 1, sm: 1, md: 2, lg: 5, } }}>
                    <TextareaAutosize
                        id="educate"
                        name="educate"
                        minRows={3.5}
                        maxRows={100}
                        readOnly
                        className="w-full"
                        value={item.educate}
                        style={{ border: '1px solid gray', borderRadius: '4px', backgroundColor: "#F5F5F5" }}
                    />
                </Grid>
            </Grid>
            {/* End grid  養護*/}

            {/* Start Card */}
            <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-10 pl-4' >
                <Card sx={{ bgcolor: "pink", width: 100, height: 30, }}>
                    <Typography component='div' className="pt-1" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14, }, fontWeight: 'bold' }}>
                        内容
                    </Typography>
                </Card>
            </Grid>
            {/* End Card */}

            <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-8 pl-14">
                <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14, }, }} >
                    教育
                </Typography>
            </Grid>

            <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-8 pl-16">
                <Typography component="div" sx={{ fontSize: { xs: 8, sm: 11, md: 11, lg: 14, }, }} >
                    身体的発達に関する視点「社会的発達に関する視点 精神的発達に関する視点
                </Typography>
            </Grid>

            <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-10 pl-24">
                <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14, }, }} >
                    健康
                </Typography>
                <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14, }, marginLeft: { xs: 1, sm: 15, md: 33, lg: 48, } }} >
                    人間関係
                </Typography>
            </Grid>

            {/* start grid  健康*/}
            <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-3 pl-20">
                <Grid item xs={4} sm={4} md={5} lg={4} className="" sx={{ marginLeft: { xs: 1, sm: 1, md: 2, lg: 1, } }}>
                    <TextareaAutosize
                        id="healthy"
                        name="healthy"
                        minRows={3.5}
                        maxRows={100}
                        readOnly
                        className="w-full"
                        value={item.healthy}
                        style={{ border: '1px solid gray', borderRadius: '4px', backgroundColor: "#F5F5F5" }}
                    />
                </Grid>
                <Grid item xs={4} sm={4} md={5} lg={4} className="" sx={{ marginLeft: { xs: 1, sm: 1, md: 2, lg: 7, } }}>
                    <TextareaAutosize
                        id="relationships"
                        name="relationships"
                        minRows={3.5}
                        maxRows={100}
                        readOnly
                        className="w-full"
                        value={item.relationships}
                        style={{ border: '1px solid gray', borderRadius: '4px', backgroundColor: "#F5F5F5" }}
                    />
                </Grid>
            </Grid>

            <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-7 pl-24">
                <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14, }, }} >
                    環境
                </Typography>
                <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14, }, marginLeft: { xs: 1, sm: 15, md: 33, lg: 48, } }} >
                    言葉
                </Typography>
            </Grid>

            {/* start grid  健康*/}
            <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-3 pl-20">
                <Grid item xs={4} sm={4} md={5} lg={4} className="" sx={{ marginLeft: { xs: 1, sm: 1, md: 2, lg: 1, } }}>
                    <TextareaAutosize
                        id="healthy2"
                        name="healthy2"
                        minRows={3.5} maxRows={100}
                        className="w-full"
                        readOnly
                        value={item.healthy2}
                        style={{ border: '1px solid gray', borderRadius: '4px', backgroundColor: "#F5F5F5" }}
                    />
                </Grid>
                <Grid item xs={4} sm={4} md={5} lg={4} className="" sx={{ marginLeft: { xs: 1, sm: 1, md: 2, lg: 7, } }}>
                    <TextareaAutosize
                        id="relationships2"
                        name="relationships2"
                        minRows={3.5} maxRows={100}
                        className="w-full"
                        readOnly
                        value={item.relationships2}
                        style={{ border: '1px solid gray', borderRadius: '4px', backgroundColor: "#F5F5F5" }}
                    />
                </Grid>
            </Grid>
            {/* End grid  健康*/}

            <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-7 pl-24">
                <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14, }, }} >
                    表現
                </Typography>
                <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14, }, marginLeft: { xs: 1, sm: 15, md: 33, lg: 48, } }} >
                    食育
                </Typography>
            </Grid>

            {/* start grid  健康*/}
            <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-3 pl-20">
                <Grid item xs={4} sm={4} md={5} lg={4} className="" sx={{ marginLeft: { xs: 1, sm: 1, md: 2, lg: 1, } }}>
                    <TextareaAutosize
                        id="healthy3"
                        name="healthy3"
                        minRows={3.5} maxRows={100}
                        className="w-full"
                        readOnly
                        value={item.healthy3}
                        style={{ border: '1px solid gray', borderRadius: '4px', backgroundColor: "#F5F5F5" }}
                    />
                </Grid>
                <Grid item xs={4} sm={4} md={5} lg={4} className="" sx={{ marginLeft: { xs: 1, sm: 1, md: 2, lg: 7, } }}>
                    <TextareaAutosize
                        id="relationships3"
                        name="relationships3"
                        minRows={3.5} maxRows={100}
                        className="w-full"
                        readOnly
                        value={item.relationships3}
                        style={{ border: '1px solid gray', borderRadius: '4px', backgroundColor: "#F5F5F5" }}
                    />
                </Grid>
            </Grid>
            {/* End grid  健康*/}

            <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-8 ">
                <Grid item xs={4} sm={3} md={3} lg={3} className="" sx={{ marginLeft: { xs: 1.5, sm: 4, md: 2, lg: -4.5, } }}>
                    <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14, }, }} >
                        安全 健康及び
                    </Typography>
                </Grid>
                <Grid item xs={4} sm={3} md={3} lg={3} className="" sx={{ marginLeft: { xs: -3, sm: -1, md: 2, lg: -2, } }}>
                    <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14, }, marginLeft: { xs: 1, sm: 1, md: 2, lg: 1, } }} >
                        子育て支援
                    </Typography>
                </Grid>
                <Grid item xs={4} sm={3} md={3} lg={3} className="" sx={{ marginLeft: { xs: -1, sm: 1, md: 2, lg: 1.5, } }}>
                    <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14, }, marginLeft: { xs: 1, sm: 1, md: 2, lg: 1, } }} >
                        速携小学校との
                    </Typography>
                </Grid>
            </Grid>

            {/* start grid 安全 健康及び/子育て支援/速携小学校との */}
            <Grid container spacing={3} justifyContent='start' alignItems='center' className="pt-3 pl-10">
                <Grid item xs={4} sm={3} md={3} lg={3} className="" sx={{ marginLeft: { xs: -1, sm: 1, md: 2, lg: 1, } }}>
                    <TextField
                        className='w-full'
                        id="safetyandhealth"
                        name="safetyandhealth"
                        type="text"
                        size='small'
                        value={item.safetyandhealth}
                        style={{ backgroundColor: "#F5F5F5", }}
                        InputProps={{ readOnly: true }}
                    />
                </Grid>
                <Grid item xs={4} sm={3} md={3} lg={3} className="" sx={{ marginLeft: { xs: -1, sm: 1, md: 2, lg: 1, } }}>
                    <TextField
                        className='w-full'
                        id="childcaresupport"
                        name="childcaresupport"
                        type="text"
                        size='small'
                        value={item.childcaresupport}
                        style={{ backgroundColor: "#F5F5F5", }}
                        InputProps={{ readOnly: true }}
                    />
                </Grid>
                <Grid item xs={4} sm={3} md={3} lg={3} className="" sx={{ marginLeft: { xs: -1, sm: 1, md: 2, lg: 1, } }}>
                    <TextField
                        className='w-full'
                        id="hayakawaelementaryschool"
                        name="hayakawaelementaryschool"
                        type="text"
                        size='small'
                        value={item.hayakawaelementaryschool}
                        style={{ backgroundColor: "#F5F5F5", }}
                        InputProps={{ readOnly: true }}
                    />
                </Grid>
            </Grid>
            {/* End grid 安全 健康及び/子育て支援/速携小学校との */}

            <Grid container justifyContent="center" spacing={2} className='pt-5' sx={{ bottom: 0, width: '100%', backgroundColor: 'inherit', paddingBottom: '10px' }}>
                <Grid item>
                    <Button variant="contained" href="/report/overallplan" size='medium' className='text-center' startIcon={<ArrowBackIcon />} color="warning">
                        <Typography component="div" style={{ color: 'white', alignItems: 'center' }}>
                            戻る
                        </Typography>
                    </Button>
                </Grid>
            </Grid>

        </ContentMain>
    );
};

export default ViewOverallPlan;
