import React, { useEffect, useState, useCallback } from "react";
import {
  FormControl,
  Grid,
  Typography,
  Box,
  OutlinedInput,
  InputAdornment,
  TextField,
  TableContainer,
  Table,
  TableRow,
  TableHead,
  Paper,
  TableCell,
  TableBody,
  Checkbox
} from "@mui/material";

interface JoinActivityProps {
  onActivityDataChange: (data: { id: number; name: string; limit1: string; limit2: string }[], era: string, year: string, month: number, day: number) => void;
}

const rows = [
  { id: 1, name: '世代間交流等事業', limit1: '250千円以内', limit2: '100千円以内' },
  { id: 2, name: '異年齢児交流等事業', limit1: '250千円以内', limit2: '100千円以内' },
  { id: 3, name: '育児講座・育児と仕事両立支援', limit1: '250千円以内', limit2: '100千円以内' },
  { id: 4, name: '地域の特性に応じた保育需要への対応', limit1: '250千円以内', limit2: '100千円以内' },
];

const JoinActivity: React.FC<JoinActivityProps> = ({ onActivityDataChange }) => {
  const [selectedRows, setSelectedRows] = useState<{ id: number; name: string; limit1: string; limit2: string }[]>([]);
  const [selectAll, setSelectAll] = useState(false);
  const [formState, setFormState] = useState({
    era: '',
    year: '',
    month: 0,
    day: 0,
    inputValue: ''
  });

  const handleCheckboxChange = useCallback((id: number) => {
    setSelectedRows(prevSelected => {
      const row = rows.find(row => row.id === id);
      if (!row) return prevSelected;
      if (prevSelected.find(selected => selected.id === id)) {
        return prevSelected.filter(selected => selected.id !== id);
      } else {
        return [...prevSelected, row];
      }
    });
  }, []);

  const handleSelectAllChange = useCallback(() => {
    if (selectAll) {
      setSelectedRows([]);
    } else {
      setSelectedRows(rows);
    }
    setSelectAll(!selectAll);
  }, [selectAll]);

  const handleDateChange = useCallback((field: 'era' | 'year' | 'month' | 'day') => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const value = field === 'month' || field === 'day' ? Number(event.target.value) : event.target.value;
    setFormState(prevState => ({
      ...prevState,
      [field]: value
    }));
  }, []);

  useEffect(() => {
    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth() + 1;
    const currentDay = today.getDate();

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
      era,
      year,
      month: currentMonth,
      day: currentDay,
    }));

    setSelectAll(selectedRows.length === rows.length);
    onActivityDataChange(selectedRows, era, year, currentMonth, currentDay);

  }, [selectedRows]);

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
            id="era-textfield"
            label=""
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
              value={formState.month.toString()}
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
              value={formState.day.toString()}
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
          <Table aria-label="simple table" size="small">
            <TableHead>
              <TableRow>
                <TableCell>
                  <Checkbox
                    checked={selectAll}
                    onChange={handleSelectAllChange}
                    indeterminate={selectedRows.length > 0 && selectedRows.length < rows.length}
                    size="small"
                  />
                </TableCell>
                <TableCell>事業名</TableCell>
                <TableCell>費用上限1</TableCell>
                <TableCell>費用上限2</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>
                    <Checkbox
                      checked={selectedRows.some(selected => selected.id === row.id)}
                      onChange={() => handleCheckboxChange(row.id)}
                      size="small"
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

export default JoinActivity;
