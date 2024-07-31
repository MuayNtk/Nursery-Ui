import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Grid, Typography, Button, FormControl, Select, MenuItem, InputLabel, TextareaAutosize, TableCell, TableRow, TableHead, TableBody, Paper, TableContainer, Table } from '@mui/material';
import ContentMain from '../content/Content';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

interface Data {
    day: string;
    month: string;
    meal: string;
    excretion: string;
    sleep: string;
    health: string;
    other: string;
}

function createData(
    day: string,
    month: string,
    meal: string,
    excretion: string,
    sleep: string,
    health: string,
    other: string,
): Data {
    return { day, month, meal, excretion, sleep, health, other };
}

const initialRows: Data[] = [
    createData('濃部　圭子', '渡部　史朗', '渡部　史朗', '6.0', '24', '24', '24',
    ),
    createData('Ice cream sandwich', '渡部　史朗', '237', '9.0', '37', '24', '24',
    ),
    createData('Eclair', '渡部　史朗', '262', '16.0', '24', '24', '24',
    ),
];


const ViewCareDiary: React.FC = () => {
    const [rows] = useState<Data[]>(initialRows);
    const { pid } = useParams<{ pid: string }>();
    const storedData = JSON.parse(sessionStorage.getItem('carediaryData') || '[]');
    const item = storedData.find((data: any) => data.pid === pid);

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
                                    backgroundColor: "#F5F5F5",
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

            {/* Start Grid */}
            <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-10 lg:pt-10">
                <Grid item xs={2} sm={2} md={2} lg={1} sx={{ ml: { xs: 4, sm: 5, md: -1, lg: 10 } }}>
                    <FormControl sx={{ minWidth: 90 }} size="small">
                        <InputLabel id="month-select-label">月</InputLabel>
                        <Select
                            labelId="month-select-label"
                            id="month"
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
                <Grid item xs={7} sm={6.5} md={4} lg={4} >
                    <Typography component="div" sx={{ fontSize: { xs: 12, sm: 12, md: 14, lg: 16, }, ml: { xs: 5, sm: -4, md: -9, lg: -10 } }} >
                        個人カリキュラム・配録
                    </Typography>
                </Grid>
                <Grid item xs={5} sm={3} md={2} lg={2} >
                    <Typography component="div" sx={{ fontSize: { xs: 11, sm: 12, md: 14, lg: 16, }, ml: { xs: -3, sm: 3, md: -13, lg: -10 }, mt: { xs: 1.5, sm: 2, md: 0, lg: 0 } }} >
                        児童名 :
                    </Typography>
                </Grid>
                <Grid item xs={2} sm={1.5} md={1} lg={1} >
                    <Typography component="div" fontWeight="bold" sx={{ fontSize: { xs: 11, sm: 11, md: 14, lg: 16, }, ml: { xs: -15, sm: -5, md: -20, lg: -30 }, mt: { xs: 1.5, sm: 2, md: 0, lg: 0 } }} >
                        長谷川
                    </Typography>
                </Grid>
                <Grid item xs={2} sm={1.5} md={1} lg={1} >
                    <Typography component="div" sx={{ fontSize: { xs: 11, sm: 12, md: 14, lg: 16, }, ml: { xs: -10, sm: -2, md: -9, lg: -15 }, mt: { xs: 1.5, sm: 2, md: 0, lg: 0 } }} >
                        1歳
                    </Typography>
                </Grid>
                <Grid item xs={2} sm={1.5} md={1} lg={1} >
                    <Typography component="div" sx={{ fontSize: { xs: 11, sm: 12, md: 14, lg: 16, }, ml: { xs: -13, sm: -2, md: -9, lg: -25 }, mt: { xs: 1.5, sm: 2, md: 0, lg: 0 } }} >
                        5月
                    </Typography>
                </Grid>
            </Grid>
            {/* End Grid */}

            {/* Start Grid */}
            <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-3 lg:pt-7'>
                <Grid item xs={7} sm={5} md={3} lg={3}>
                    <Typography component="div" sx={{ fontSize: { xs: 11, sm: 12, md: 11, lg: 16, }, ml: { xs: -7, sm: -4, md: 2, lg: 10 } }} >
                        子どもの姿
                    </Typography>
                </Grid>
                <Grid item xs={4} sm={1} md={1} lg={1} sx={{ ml: { xs: 5, sm: -8, md: -3, lg: -5 } }}>
                    <TextareaAutosize
                        id="children"
                        name="children"
                        minRows={3}
                        maxRows={100}
                        value={item.children}
                        style={{
                            backgroundColor: "#F5F5F5",
                        }}
                        className="w-56 sm:w-60 lg:w-96 border border-gray-300"
                    />
                </Grid>
            </Grid>
            {/* End Grid */}

            {/* Start Grid */}
            <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-5 lg:pt-3'>
                <Grid item xs={7} sm={5} md={3} lg={3}>
                    <Typography component="div" sx={{ fontSize: { xs: 11, sm: 12, md: 11, lg: 16, }, ml: { xs: -6, sm: -4, md: 2, lg: 10 } }} >
                        ねらいと配慮
                    </Typography>
                </Grid>
                <Grid item xs={4} sm={1} md={1} lg={1} sx={{ ml: { xs: 5, sm: -8, md: -3, lg: -5 } }}>
                    <TextareaAutosize
                        id="considerations"
                        name="considerations"
                        minRows={3}
                        maxRows={100}
                        value={item.considerations}
                        style={{
                            backgroundColor: "#F5F5F5",
                        }}
                        className="w-56 sm:w-60 lg:w-96 border border-gray-300"
                    />
                </Grid>
            </Grid>
            {/* End Grid */}

            <Grid container className="pt-4" justifyContent="start">
                <Grid item xs={12} sm={12} md={11} lg={11}>
                    <TableContainer
                        component={Paper}
                        sx={{ border: '1px solid #ccc', position: 'relative', margin: { xs: '0 8px', sm: '0 16px', md: '0 24px' } }}>
                        <Table sx={{ minWidth: { xs: '250%', sm: '170%', md: '150%', lg: '100%' } }} size="small" aria-label="a dense table">
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={{ border: '1px solid #ccc', width: '5%' }} align="center">日</TableCell>
                                    <TableCell sx={{ border: '1px solid #ccc', width: '5%' }} align="center">月</TableCell>
                                    <TableCell sx={{ border: '1px solid #ccc', width: '5%' }} align="right">食事</TableCell>
                                    <TableCell sx={{ border: '1px solid #ccc', width: '5%' }} align="right">排泄</TableCell>
                                    <TableCell sx={{ border: '1px solid #ccc', width: '5%' }} align="right">睡眠</TableCell>
                                    <TableCell sx={{ border: '1px solid #ccc', width: '5%' }} align="right">健康</TableCell>
                                    <TableCell sx={{ border: '1px solid #ccc', width: '5%' }} align="right">その他の記録</TableCell>
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
                                            <TableCell align="center" component="th" scope="row" sx={{ border: '1px solid #ccc' }}>
                                                {row.day}
                                            </TableCell>
                                            <TableCell align="center" component="th" scope="row" sx={{ border: '1px solid #ccc' }}>
                                                {row.month}
                                            </TableCell>
                                            <TableCell align="right" component="th" scope="row" sx={{ border: '1px solid #ccc' }}>
                                                {row.meal}
                                            </TableCell>
                                            <TableCell align="right" component="th" scope="row" sx={{ border: '1px solid #ccc' }}>
                                                {row.excretion}
                                            </TableCell>
                                            <TableCell align="right" sx={{ border: '1px solid #ccc' }}>
                                                {row.sleep}
                                            </TableCell>
                                            <TableCell align="right" sx={{ border: '1px solid #ccc' }}>
                                                {row.health}
                                            </TableCell>
                                            <TableCell align="right" sx={{ border: '1px solid #ccc' }}>
                                                {row.other}
                                            </TableCell>
                                        </TableRow>
                                    ))
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>

            {/* Start Grid */}
            <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-10' sx={{ ml: { xs: 1, sm: 0, md: -2, lg: -2 } }}>
                <Grid item xs={4} sm={3} md={3} lg={3}>
                    <Typography component="div" sx={{ fontSize: { xs: 12, sm: 12, md: 11, lg: 16, }, ml: { xs: 0, sm: 0, md: 2, lg: 10 } }} >
                        評価・反省
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={5} md={1} lg={1} sx={{ ml: { xs: -5, sm: -1, md: -3, lg: -5 }, pb: 3 }}>
                    <TextareaAutosize
                        id="evaluation_and_reflection"
                        name="evaluation_and_reflection"
                        minRows={3}
                        maxRows={100}
                        value={item.evaluation_and_reflection}
                        style={{
                            backgroundColor: '#F5F5F5'
                        }}
                        className="w-56 sm:w-60 lg:w-96 border border-gray-300"
                    />
                </Grid>
            </Grid>
            {/* End Grid */}

            {/* Start Grid */}
            <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-1 lg:pt-2">
                <Grid item xs={5} sm={3} md={3} lg={3} >
                    <Typography component="div" sx={{ fontSize: { xs: 11, sm: 12, md: 14, lg: 16, }, ml: { xs: -3, sm: 3, md: 0, lg: 5 } }} >
                        施設長
                    </Typography>
                </Grid>
                <Grid item xs={2} sm={1.5} md={1} lg={1} >
                    <Typography component="div" fontWeight="bold" sx={{ fontSize: { xs: 11, sm: 11, md: 14, lg: 16, }, ml: { xs: -15, sm: -5, md: -7, lg: -15 } }} >
                        渡部
                    </Typography>
                </Grid>
                <Grid item xs={2} sm={1.5} md={1} lg={1} >
                    <Typography component="div" fontWeight="bold" sx={{ fontSize: { xs: 11, sm: 11, md: 14, lg: 16, }, ml: { xs: -18, sm: -7, md: -9, lg: -25 } }} >
                        圭子
                    </Typography>
                </Grid>
            </Grid>
            {/* End Grid */}

            {/* Start Grid */}
            <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-1 lg:pt-3">
                <Grid item xs={5} sm={3} md={3} lg={3} >
                    <Typography component="div" sx={{ fontSize: { xs: 11, sm: 12, md: 14, lg: 16, }, ml: { xs: -3, sm: 3, md: 0, lg: 5 } }} >
                        主任
                    </Typography>
                </Grid>
                <Grid item xs={2} sm={1.5} md={1} lg={1} >
                    <Typography component="div" fontWeight="bold" sx={{ fontSize: { xs: 11, sm: 11, md: 14, lg: 16, }, ml: { xs: -15, sm: -5, md: -7, lg: -15 } }} >
                        渡部
                    </Typography>
                </Grid>
                <Grid item xs={2} sm={1.5} md={1} lg={1} >
                    <Typography component="div" fontWeight="bold" sx={{ fontSize: { xs: 11, sm: 11, md: 14, lg: 16, }, ml: { xs: -18, sm: -7, md: -9, lg: -25 } }} >
                        史朗
                    </Typography>
                </Grid>
            </Grid>
            {/* End Grid */}

            {/* Start Grid */}
            <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-1 lg:pt-3">
                <Grid item xs={5} sm={3} md={3} lg={3} >
                    <Typography component="div" sx={{ fontSize: { xs: 11, sm: 12, md: 14, lg: 16, }, ml: { xs: -3, sm: 3, md: 0, lg: 5 } }} >
                        担任
                    </Typography>
                </Grid>
                <Grid item xs={2} sm={1.5} md={1} lg={1} >
                    <Typography component="div" fontWeight="bold" sx={{ fontSize: { xs: 11, sm: 11, md: 14, lg: 16, }, ml: { xs: -15, sm: -5, md: -7, lg: -15 } }} >
                        中川
                    </Typography>
                </Grid>
                <Grid item xs={2} sm={1.5} md={1} lg={1} >
                    <Typography component="div" fontWeight="bold" sx={{ fontSize: { xs: 11, sm: 11, md: 14, lg: 16, }, ml: { xs: -18, sm: -7, md: -9, lg: -25 } }} >
                        康嘉
                    </Typography>
                </Grid>
            </Grid>
            <div className="mt-auto">
                <Grid container justifyContent="center" spacing={2} className='pt-12' sx={{ bottom: 0, width: '100%', backgroundColor: 'inherit', paddingBottom: '10px' }}>
                    <Grid item>
                        <Button variant="contained" href="/report/carediary" size='medium' className='text-center' startIcon={<ArrowBackIcon />} color="warning">
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

export default ViewCareDiary;