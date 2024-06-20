import {
      FormControl,
      Grid,
      InputLabel,
      MenuItem,
      Select,
      SelectChangeEvent,
      TextField,
      Typography,
    } from '@mui/material';
    import React from 'react';
    
    export default function DateForm() {
      const [year, setYear] = React.useState('');
      const [month, setMonth] = React.useState('');
    
      const handleYearChange = (event: SelectChangeEvent) => {
        setYear(event.target.value as string);
      };
    
      const handleMonthChange = (event: SelectChangeEvent) => {
        setMonth(event.target.value as string);
      };
    
      return (
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom className="pt-3 text-center">
              休　暇　届
            </Typography>
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <TextField
              id="reiwa"
              label="令和"
              type="text"
              style={{
                backgroundColor: 'white',
              }}
              size="small"
              fullWidth
            />
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <TextField
              id="year"
              label="年"
              type="text"
              style={{
                backgroundColor: 'white',
              }}
              size="small"
              fullWidth
            />
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <FormControl sx={{ minWidth: 70 }} size="small" fullWidth>
              <InputLabel id="year-select-label">年</InputLabel>
              <Select
                labelId="year-select-label"
                id="year-select"
                value={year}
                onChange={handleYearChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <FormControl sx={{ minWidth: 70 }} size="small" fullWidth>
              <InputLabel id="month-select-label">月</InputLabel>
              <Select
                labelId="month-select-label"
                id="month-select"
                value={month}
                onChange={handleMonthChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={3} md={2} container alignItems="center">
            <Typography variant="subtitle1" className="ms-2">
              日
            </Typography>
          </Grid>
        </Grid>
      );
    }
    