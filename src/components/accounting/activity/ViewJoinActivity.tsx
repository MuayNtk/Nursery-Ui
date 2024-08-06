import React, { useState, useEffect } from 'react';
import { Grid, Typography, TextField, FormControl, OutlinedInput, InputAdornment, TableContainer, Table, TableRow, TableHead, Paper, TableCell, TableBody, Checkbox, Box } from '@mui/material';

interface ViewJoinActivityProps {
    data: {
        era?: string;
        year?: string;
        month?: number;
        day?: number;
        selectedRows: { id: number; name: string; limit1: string; limit2: string }[];
    };
    onCheckboxChange: (id: number) => void;
    onSelectAllChange: () => void;
    onActivityDataChange: (data: { id: number; name: string; limit1: string; limit2: string }[], era: string, year: string, month: number, day: number) => void;
}

const ViewJoinActivity: React.FC<ViewJoinActivityProps> = ({ data, onCheckboxChange, onSelectAllChange, onActivityDataChange }) => {
    const rows = [
        { id: 1, name: '世代間交流等事業', limit1: '250千円以内', limit2: '100千円以内' },
        { id: 2, name: '異年齢児交流等事業', limit1: '250千円以内', limit2: '100千円以内' },
        { id: 3, name: '育児講座・育児と仕事両立支援', limit1: '250千円以内', limit2: '100千円以内' },
        { id: 4, name: '地域の特性に応じた保育需要への対応', limit1: '250千円以内', limit2: '100千円以内' },
    ];

    const [formState, setFormState] = useState({
        era: data.era || '',
        year: data.year || '',
        month: data.month || new Date().getMonth() + 1,
        day: data.day || new Date().getDate()
    });

    useEffect(() => {
        const currentYear = new Date().getFullYear();
        let era = '';
        let year = '';

        if (currentYear >= 2019) {
            era = '令和';
            year = (currentYear - 2018).toString();
        } else if (currentYear >= 1989) {
            era = '平成';
            year = (currentYear - 1988).toString();
        } else if (currentYear >= 1926) {
            era = '昭和';
            year = (currentYear - 1925).toString();
        } else {
            era = '';
            year = currentYear.toString();
        }

        setFormState(prevState => ({
            ...prevState,
            era: data.era || era,
            year: data.year || year,
            month: data.month || new Date().getMonth() + 1,
            day: data.day || new Date().getDate()
        }));

        onActivityDataChange(data.selectedRows, data.era || era, data.year || year, data.month || new Date().getMonth() + 1, data.day || new Date().getDate());

    }, [data, onActivityDataChange]);

    const handleDateChange = (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormState({
            ...formState,
            [field]: event.target.value
        });
    };

    return (
        <>
            <Grid container spacing={2} className='pt-5'>
                <Grid item xs={2} sm={2.5} md={3} lg={3}>
                    <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
                        あて先 :
                    </Typography>
                </Grid>
                <Grid item xs={2} sm={2} md={1.3} lg={1.5}>
                    <Typography fontWeight="bold" sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-start'>
                        福岡市
                    </Typography>
                </Grid>
                <Grid item xs={6} sm={1} md={3} lg={1} sx={{ ml: { xs: 0, sm: 0, md: 0, lg: -9 } }}>
                    <Typography fontWeight="bold" sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-start'>
                        長
                    </Typography>
                </Grid>
            </Grid>

            <Grid container spacing={2} className='pt-5'>
                <Grid item xs={2} sm={2.5} md={3} lg={3}>
                    <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
                        日時 :
                    </Typography>
                </Grid>
                <Grid item xs={2.4} sm={3} md={2} lg={1}>
                    <TextField
                        id="era_textfield"
                        value={formState.era}
                        onChange={handleDateChange('era')}
                        size='small'
                        sx={{ backgroundColor: "white" }}
                    />
                </Grid>
                <Grid item xs={2.5} sm={3} md={3} lg={1}>
                    <FormControl variant="outlined" size="small">
                        <OutlinedInput
                            id="year"
                            value={formState.year}
                            onChange={handleDateChange('year')}
                            endAdornment={<InputAdornment position="end">年</InputAdornment>}
                            aria-describedby="outlined-year-helper-text"
                            sx={{ backgroundColor: "white" }}
                            inputProps={{
                                'aria-label': 'year',
                            }}
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={2.5} sm={3} md={3} lg={1}>
                    <FormControl variant="outlined" size="small">
                        <OutlinedInput
                            id="month"
                            value={formState.month}
                            onChange={handleDateChange('month')}
                            endAdornment={<InputAdornment position="end">月</InputAdornment>}
                            aria-describedby="outlined-month-helper-text"
                            sx={{ backgroundColor: "white" }}
                            inputProps={{
                                'aria-label': 'month',
                            }}
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={2.5} sm={3} md={3} lg={1}>
                    <FormControl variant="outlined" size="small">
                        <OutlinedInput
                            id="day"
                            value={formState.day}
                            onChange={handleDateChange('day')}
                            endAdornment={<InputAdornment position="end">日</InputAdornment>}
                            aria-describedby="outlined-day-helper-text"
                            sx={{ backgroundColor: "white" }}
                            inputProps={{
                                'aria-label': 'day',
                            }}
                        />
                    </FormControl>
                </Grid>
            </Grid>

            <Grid container spacing={2} className='pt-4'>
                <Grid item xs={3.2} sm={3} md={3} lg={3} sx={{ ml: { xs: -0.5, sm: -2.5, md: 0, lg: 0 } }}>
                    <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
                        保育所(園)名 :
                    </Typography>
                </Grid>
                <Grid item xs={2} sm={1.5} md={1} lg={1.5}>
                    <Typography fontWeight="bold" sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-start'>
                        渡部
                    </Typography>
                </Grid>
                <Grid item xs={2} sm={2} md={2} lg={1} sx={{ ml: { xs: -1.5, sm: -1, md: -1, lg: -12 } }}>
                    <Typography fontWeight="bold" sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-start'>
                        封子
                    </Typography>
                </Grid>
            </Grid>

            <Grid container spacing={2} className='pt-4'>
                <Grid item xs={3.2} sm={3} md={3} lg={3} sx={{ ml: { xs: -0.5, sm: -2.5, md: 0, lg: 0 } }}>
                    <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
                        法人名代表者氏名 :
                    </Typography>
                </Grid>
                <Grid item xs={2} sm={1.5} md={1} lg={1.5}>
                    <Typography fontWeight="bold" sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-start'>
                        中川
                    </Typography>
                </Grid>
                <Grid item xs={2} sm={2} md={2} lg={1} sx={{ ml: { xs: -1.5, sm: -1, md: -1, lg: -12 } }}>
                    <Typography fontWeight="bold" sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-start'>
                        康嘉
                    </Typography>
                </Grid>
            </Grid>

            <Box sx={{ height: 400, width: '100%', pt: 5 }}>
                <TableContainer component={Paper}>
                    <Table size='small'>
                        <TableHead>
                            <TableRow>
                                <TableCell>
                                    <Checkbox
                                        onChange={onSelectAllChange}
                                        checked={rows.length > 0 && rows.every(row => data.selectedRows.some(selectedRow => selectedRow.id === row.id))}
                                    />
                                </TableCell>
                                <TableCell>事業名</TableCell>
                                <TableCell>上限額</TableCell>
                                <TableCell>補助上限額</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map(row => (
                                <TableRow key={row.id}>
                                    <TableCell>
                                        <Checkbox
                                            checked={data.selectedRows.some(selectedRow => selectedRow.id === row.id)}
                                            onChange={() => onCheckboxChange(row.id)}
                                        />
                                    </TableCell>
                                    <TableCell>{row.name}</TableCell>
                                    <TableCell>{row.limit1}</TableCell>
                                    <TableCell>{row.limit2}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </>
    );
};

export default ViewJoinActivity;
