import React from 'react';
import { Typography, FormControl, MenuItem, InputLabel, Select, Grid, SelectChangeEvent, Button } from "@mui/material";
import ContentMain from "../content/Content";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import DownloadIcon from '@mui/icons-material/Download';


export default function AttendanceMonth() {

  const [classroom, setcClass] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setcClass(event.target.value as string);
  };

  return (
    <>
      <ContentMain >
        <Grid container spacing={2} className='pt-7' justifyContent="center">

          <Typography className='pt-9 pl-3'>
            部屋
          </Typography>

          <Grid item xs={10.3} sm={10.3} md={2.8} style={{ paddingTop: 25 }} className='scale-90'>
            <FormControl sx={{ minWidth: 260 }} size="medium" fullWidth>
              <InputLabel id="demo-select-small-label">部屋の名前 </InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={classroom}
                label="クラス名"
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>1</MenuItem>
                <MenuItem value={20}>2</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Typography className='pt-9 pl-3 lg:pl-10'>
            部屋
          </Typography>

          <Grid item xs={10.3} sm={10.3} md={3} className='scale-90' >
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['DatePicker']}>
                <DatePicker label="Select date" />
              </DemoContainer>
            </LocalizationProvider>
          </Grid>

          <Grid item xs={6} sm={6} md={2} style={{ paddingTop: 33 }}>
            <Button variant="contained" href="#" size='small' className='w-full text-center'>
              <DownloadIcon fontSize='small' />
              <Typography component="div" style={{ color: 'white', alignItems: 'center', paddingLeft: '5px' }} >
                Download
              </Typography>
            </Button>
          </Grid>

        </Grid>
      </ContentMain>
    </>
  );
};
