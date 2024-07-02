import { Button, FormControl, Grid, MenuItem, Select, SelectChangeEvent,  Typography } from '@mui/material';
import ContentMain from '../../content/Content';
import { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

export default function Charge() {
      const [selectedOption, setSelectedOption] = useState('');
      const handleDropdownChange = (event: SelectChangeEvent) => {
        setSelectedOption(event.target.value);
      };

  return (
    <>
      <ContentMain>
            <Grid container spacing={2} className='pt-7' justifyContent="center">
                  <Grid item xs={12} sm={4} md={3} >
                        <FormControl  size="small"  >
                              <Select
                                    labelId="demo-select-small-label"
                                    id="demo-select-small"
                                    value={selectedOption}
                                    onChange={handleDropdownChange}
                                    className="mb-5 "
                                    sx={{ minWidth: 250 }}
                              >
                                    <MenuItem value="">
                                    <em>None</em>
                                    </MenuItem>
                                    <MenuItem value="1">給付費(託費)請求(報告)書</MenuItem>
                                    <MenuItem value="2">令和5年度保育施設等利用児童数確認票</MenuItem>
                                    <MenuItem value="2">令和5年度第3子遇副食費免除確票</MenuItem>
                              </Select>
                        </FormControl>
                  </Grid>
                  <Grid item xs={1.7} sm={6} md={3} lg={3} sx={{ ml: { xs: -6, sm: -10, md: -7, lg: -10 } }}>
                        <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
                             Year :
                        </Typography>
                  </Grid>
                  <Grid item xs={7} sm={6.5} md={4} lg={3} className="scale-75" sx={{ ml: { xs: -3.3, sm: -3, md: -3.5, lg: -4 }, mt: -1.7 }}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                              <DemoContainer components={['DatePicker']}>
                                    <DatePicker sx={{ backgroundColor: "white" }} />
                              </DemoContainer>
                        </LocalizationProvider>
                  </Grid>
            </Grid>
            <Grid item xs={6} sm={4} md={3}  className='pt-5'>
                  <Button variant="contained" href="#contained-buttons" sx={{ marginLeft: { xs: 6, sm: 1, md: 1, lg: 1, } }}>
                        <Typography component="div" style={{ color: 'white' }}>
                        ダウンロードする
                        </Typography>
                  </Button>
            </Grid>
      </ContentMain>
    </>
  );
}
