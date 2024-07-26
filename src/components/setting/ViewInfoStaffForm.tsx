import React from 'react';
import { useParams } from 'react-router-dom';
import { TextField, Grid, Typography, Button, FormControl, Select, MenuItem, InputLabel, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import ContentMain from '../content/Content';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const ViewInfoStaff: React.FC = () => {
    const { pid } = useParams<{ pid: string }>();
    const storedData = JSON.parse(sessionStorage.getItem('staffData') || '[]');
    const item = storedData.find((data: any) => data.pid === pid);

    if (!item) {
        return <Typography variant="h6">No data found</Typography>;
    }

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
                            sx={{ backgroundColor: '#F5F5F5' }}
                            value={item.furigana}
                            InputProps={{ readOnly: true }}
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
                            sx={{ backgroundColor: '#F5F5F5' }}
                            value={item.fullname}
                            InputProps={{ readOnly: true }}
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
                            sx={{ backgroundColor: '#F5F5F5' }}
                            value={item.dep}
                            InputProps={{ readOnly: true }}
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
                            value={item.gender}
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
                            sx={{ backgroundColor: '#F5F5F5' }}
                            value={item.era}
                            InputProps={{ readOnly: true }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={3} md={2}>
                        <TextField
                            id="year"
                            type="text"
                            size="small"
                            label="令和"
                            fullWidth
                            sx={{ backgroundColor: '#F5F5F5' }}
                            value={item.year}
                            InputProps={{ readOnly: true }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={3} md={3}>
                        <Grid container spacing={1}>
                            <Grid item xs={6}>
                                <FormControl sx={{ minWidth: 90 }} size="small">
                                    <InputLabel id="month-select-label">月</InputLabel>
                                    <Select
                                        labelId="month-select-label"
                                        id="month-select"
                                        value={item.month}
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
                            <Grid item xs={6}>
                                <FormControl sx={{ minWidth: 90 }} size="small">
                                    <InputLabel id="day-select-label">日</InputLabel>
                                    <Select
                                        labelId="day-select-label"
                                        id="day-select"
                                        value={item.day}
                                        label="日"
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
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container justifyContent="center" spacing={2} className='pt-5' sx={{ bottom: 0, width: '100%', backgroundColor: 'inherit', paddingBottom: '10px' }}>
                <Grid item>
                    <Button variant="contained" href="/infostaff" size='medium' className='text-center' startIcon={<ArrowBackIcon />} color="warning">
                        <Typography component="div" style={{ color: '#F5F5F5', alignItems: 'center' }}>
                            戻る
                        </Typography>
                    </Button>
                </Grid>
            </Grid>
        </ContentMain>
    );
};

export default ViewInfoStaff;
