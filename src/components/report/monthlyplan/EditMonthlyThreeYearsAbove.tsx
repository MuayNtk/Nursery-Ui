import { Button, Card, FormControl, Grid, InputLabel, MenuItem, Select, TextareaAutosize, Typography } from "@mui/material";
import { useState, useEffect } from 'react';
import SaveIcon from '@mui/icons-material/Save';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ContentMain from '../../content/Content';
import { useNavigate } from "react-router-dom";

interface EditMonthlyThreeYearsAboveProps {
    pid: string;
    selectedOption: string;
}

const EditMonthlyThreeYearsAbove: React.FC<EditMonthlyThreeYearsAboveProps> = ({ pid, selectedOption }) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        pid: '',
        selectedOption: selectedOption,
        daily_life: '',
        nursing_care: '',
        education1: '',
        health_safety1: '',
        emotional_stability1: '',
        health_human1: '',
        emotional_stability2: '',
        health_human2: '',
        emotional_stability3: '',
        health_human3: '',
        emotional_stability4: '',
        health_human4: '',
        group_management: '',
        cooperation: '',
        event: '',
    });

    useEffect(() => {
        const storedData = JSON.parse(sessionStorage.getItem('monthlyData3_4_5') || '[]');
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

    const handleSave = () => {
        console.log('Saving data:', formData);
        const storedData = JSON.parse(sessionStorage.getItem('monthlyData3_4_5') || '[]');
        const updatedData = storedData.map((item: any) =>
            item.pid === pid ? formData : item
        );
        sessionStorage.setItem('monthlyData3_4_5', JSON.stringify(updatedData));
        navigate('/report/monthlyplan');
    };

    const options = [
        '月指導計画 0 歳児',
        '月指導計画 1・2 歳児',
        '月指導計画 3・4・5 歳児'
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

                    <Grid container spacing={2} className="pt-5" justifyContent='start'>
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
                                        onChange={handleChange}
                                        value={formData.daily_life}
                                        className="w-56 sm:w-60 lg:w-96"
                                        style={{ border: '1px solid gray', borderRadius: '4px' }}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-10 pl-10 flex '  >
                        <Card sx={{ bgcolor: "pink", width: { xs: 100, sm: 280, md: 100, lg: 100 }, height: 30 }}>
                            <Typography component='div' className="pt-2 lg:pt-1" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, fontWeight: 'bold', marginLeft: { xs: 4, sm: 4, md: 4, lg: 3, } }}>
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
                                        id="nursing_care"
                                        name="nursing_care"
                                        minRows={3}
                                        maxRows={100}
                                        onChange={handleChange}
                                        value={formData.nursing_care}
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
                                        id="education1"
                                        name="education1"
                                        minRows={3}
                                        maxRows={100}
                                        onChange={handleChange}
                                        value={formData.education1}
                                        className="w-56 sm:w-60 lg:w-96"
                                        style={{ border: '1px solid gray', borderRadius: '4px' }}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid container spacing={2} className="pt-5" justifyContent='start'>
                        <Grid item xs={12} md={6} >
                            <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-2' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 7 } }}>
                                <Grid item xs={7.5} sm={3} md={8.5} lg={12}>
                                    <Typography gutterBottom sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14 } }}>
                                        健康安全
                                    </Typography>
                                    <TextareaAutosize
                                        id="health_safety1"
                                        name="health_safety1"
                                        minRows={3}
                                        maxRows={100}
                                        onChange={handleChange}
                                        value={formData.health_safety1}
                                        className="w-56 sm:w-60 lg:w-96"
                                        style={{ border: '1px solid gray', borderRadius: '4px' }}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-10 pl-10 flex '  >
                        <Card sx={{ bgcolor: "pink", width: { xs: 85, sm: 80, md: 100, lg: 130 }, height: 30 }}>
                            <Typography component='div' className="pt-2 lg:pt-1" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, fontWeight: 'bold', marginLeft: { xs: 2, sm: 4, md: 4, lg: 3, } }}>
                                環境の構成
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
                                        情緒の安定生命の保持
                                    </Typography>
                                    <TextareaAutosize
                                        id="emotional_stability1"
                                        name="emotional_stability1"
                                        minRows={3}
                                        maxRows={100}
                                        onChange={handleChange}
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
                                        健康人間係環境.言葉表現
                                    </Typography>
                                    <TextareaAutosize
                                        id="health_human1"
                                        name="health_human1"
                                        minRows={3}
                                        maxRows={100}
                                        onChange={handleChange}
                                        value={formData.health_human1}
                                        className="w-56 sm:w-60 lg:w-96"
                                        style={{ border: '1px solid gray', borderRadius: '4px' }}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-10 pl-10 flex '  >
                        <Card sx={{ bgcolor: "pink", width: { xs: 85, sm: 80, md: 100, lg: 130 }, height: 30 }}>
                            <Typography component='div' className="pt-2 lg:pt-1" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, fontWeight: 'bold', marginLeft: { xs: 2, sm: 4, md: 4, lg: 3, } }}>
                                指導の内容
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
                                        情緒の安定生命の保持
                                    </Typography>
                                    <TextareaAutosize
                                        id="emotional_stability2"
                                        name="emotional_stability2"
                                        minRows={3}
                                        maxRows={100}
                                        onChange={handleChange}
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
                                        健康人間係環境言葉・表現
                                    </Typography>
                                    <TextareaAutosize
                                        id="health_human2"
                                        name="health_human2"
                                        minRows={3}
                                        maxRows={100}
                                        onChange={handleChange}
                                        value={formData.health_human2}
                                        className="w-56 sm:w-60 lg:w-96"
                                        style={{ border: '1px solid gray', borderRadius: '4px' }}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-10 pl-10 flex '  >
                        <Card sx={{ bgcolor: "pink", width: { xs: 152, sm: 280, md: 100, lg: 206 }, height: 30 }}>
                            <Typography component='div' className="pt-2 lg:pt-1" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, fontWeight: 'bold', marginLeft: { xs: 2, sm: 4, md: 4, lg: 2, } }}>
                                予想される子どもの活動
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
                                        情緒の安定生命の保持
                                    </Typography>
                                    <TextareaAutosize
                                        id="emotional_stability3"
                                        name="emotional_stability3"
                                        minRows={3}
                                        maxRows={100}
                                        onChange={handleChange}
                                        value={formData.emotional_stability3}
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
                                        健康人間係環境・言葉・表現
                                    </Typography>
                                    <TextareaAutosize
                                        id="health_human3"
                                        name="health_human3"
                                        minRows={3}
                                        maxRows={100}
                                        onChange={handleChange}
                                        value={formData.health_human3}
                                        className="w-56 sm:w-60 lg:w-96"
                                        style={{ border: '1px solid gray', borderRadius: '4px' }}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-10 pl-10 flex '  >
                        <Card sx={{ bgcolor: "pink", width: { xs: 145, sm: 145, md: 100, lg: 200 }, height: 30 }}>
                            <Typography component='div' className="pt-2 lg:pt-1" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, fontWeight: 'bold', marginLeft: { xs: 2, sm: 4, md: 4, lg: 2, } }}>
                                保育士等の園助と配慮
                            </Typography>
                        </Card>
                    </Grid>

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
                                        情緒の安定生命の保持
                                    </Typography>
                                    <TextareaAutosize
                                        id="emotional_stability4"
                                        name="emotional_stability4"
                                        minRows={3}
                                        maxRows={100}
                                        onChange={handleChange}
                                        value={formData.emotional_stability4}
                                        className="w-56 sm:w-60 lg:w-96"
                                        style={{ border: '1px solid gray', borderRadius: '4px' }}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid container spacing={2} className="pt-5" justifyContent='center'>
                        <Grid item xs={12} md={6} >
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
                                        健康人間係環境・言葉表現
                                    </Typography>
                                    <TextareaAutosize
                                        id="health_human4"
                                        name="health_human4"
                                        minRows={3}
                                        maxRows={100}
                                        onChange={handleChange}
                                        value={formData.health_human4}
                                        className="w-56 sm:w-60 lg:w-96"
                                        style={{ border: '1px solid gray', borderRadius: '4px' }}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-8' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: -3 } }}>
                                <Grid item xs={7.5} sm={7} md={8.5} lg={12}>
                                    <Typography gutterBottom sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14 } }}>
                                        组運営·個別刘応
                                    </Typography>
                                    <TextareaAutosize
                                        id="group_management"
                                        name="group_management"
                                        minRows={3}
                                        maxRows={100}
                                        onChange={handleChange}
                                        value={formData.group_management}
                                        className="w-56 sm:w-60 lg:w-96"
                                        style={{ border: '1px solid gray', borderRadius: '4px' }}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid container spacing={2} className="pt-5" justifyContent='center'>
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
                                        onChange={handleChange}
                                        value={formData.cooperation}
                                        className="w-56 sm:w-60 lg:w-96"
                                        style={{ border: '1px solid gray', borderRadius: '4px' }}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-3' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: -3 } }}>
                                <Grid item xs={7.5} sm={7} md={8.5} lg={12}>
                                    <Typography gutterBottom sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14 } }}>
                                        行事
                                    </Typography>
                                    <TextareaAutosize
                                        id="event"
                                        name="event"
                                        minRows={3}
                                        maxRows={100}
                                        onChange={handleChange}
                                        value={formData.event}
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

export default EditMonthlyThreeYearsAbove;
