import Grid from '@mui/material/Grid';
import ContentMain from '../content/Content';
import Typography from '@mui/material/Typography';
import { Button, Checkbox, FormControl, FormControlLabel, FormGroup, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField } from '@mui/material';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import InputAdornment from '@mui/material/InputAdornment';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SaveIcon from '@mui/icons-material/Save'
import { SetStateAction, useState } from 'react';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

export default function LeaveAdd() {
  const [era, setEra] = useState('');
  const handleEraChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setEra(event.target.value);
  };
  

  return (
    <ContentMain>
      <Grid container spacing={3}>
        {/* Header */}
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom className="pt-3 text-center">
            休　暇　届
          </Typography>
        </Grid>
        
        {/* Era, Year, Month, Day Form */}
        <Grid container item xs={12} justifyContent="flex-end" spacing={1}>
          <Grid item xs={12} sm={3} md={2} lg={1} >
            <FormControl size="small" fullWidth >
              <InputLabel id="era-select-label">平成</InputLabel>
              <Select
                id="era-select"
                labelId="era-select-label"
                label="平成"
                value={era}
                onChange={handleEraChange}
                sx={{ backgroundColor: "white" }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>昭和</MenuItem>
                <MenuItem value={2}>平成</MenuItem>
                <MenuItem value={3}>令和</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={3} md={3} lg={3} className='scale-75' sx={{ ml: { xs: 9.5, sm: -1.5, md: -3, lg:-3 },mt: { xs: -3, sm: -2, md: -2, lg:-2 } }}>
            <LocalizationProvider dateAdapter={AdapterDayjs} >
              <DemoContainer components={['DatePicker']}>
                <DatePicker label="開始日" sx={{ backgroundColor: 'white' }}/>
              </DemoContainer>
            </LocalizationProvider>
          </Grid>
        </Grid>

        
        {/* 所属, 役職 Fields */}
        <Grid container spacing={2} className='pt-7' justifyContent="left">
          <Grid item xs={3} sm={3} md={2} lg={3}>
            <Typography style={{ fontSize: '14px' }} className='pt-2 text-end'>
              所　属 :
            </Typography>
          </Grid>
          <Grid item xs={7} sm={7} md={3} lg={2.5}>
            <TextField id="outlined-search" type="text" size="small" fullWidth sx={{ backgroundColor: 'white' }} />
          </Grid>
          <Grid item xs={3} sm={3} md={2} lg={1}>
            <Typography style={{ fontSize: '14px' }} className='pt-2 text-end'>
              役　職 :
            </Typography>
          </Grid>
          <Grid item xs={7} sm={7} md={3} lg={2.5}>
            <TextField id="outlined-search" type="text" size="small" fullWidth  sx={{ backgroundColor: 'white' }} />
          </Grid>
        </Grid>
        
        {/* 氏名 Field */}
        <Grid container spacing={2} className='pt-7' justifyContent="left">
          <Grid item xs={3} sm={3} md={2} lg={3}>
            <Typography style={{ fontSize: '14px' }} className='pt-2 text-end'>
              氏　名 :
            </Typography>
          </Grid>
          <Grid item xs={7} sm={7} md={3} lg={2.5}>
            <TextField id="outlined-search" type="text" size="small" fullWidth sx={{ backgroundColor: 'white' }}/>
          </Grid>
          <Grid item xs={3} sm={3} md={2} lg={1}></Grid>
          <Grid item xs={7} sm={7} md={3} lg={2}></Grid>
        </Grid>
        
        {/* 適用 Radio Group */}
        <Grid container spacing={2} className='pt-7'justifyContent="left">
        <Grid item xs={6} sm={1} md={1}></Grid>
        <Grid item xs={6} sm={1} md={1}></Grid>
          <Grid item xs={4} sm={3} md={2} lg={1}>
            <Typography style={{ fontSize: '14px' }} className='pt-2  text-end'>
              適　用 :
            </Typography>
          </Grid> 
          <Grid item xs={6} sm={4} md={8} lg={8}>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="paidleave"
              name="radio-buttons-group"
              row
            >
              <FormControlLabel value="paidleave" control={<Radio />} label="有給休暇" />
              <FormControlLabel value="specialleave" control={<Radio />} label="特別休暇" />
              <FormControlLabel value="substituteleave" control={<Radio />} label="振替休暇" />
              <FormControlLabel value="condolenceleave" control={<Radio />} label="慶弔休暇" />
            </RadioGroup>
          </Grid>
        </Grid>

        {/* Date Pickers */}
        <Grid container spacing={2} className='pt-2' justifyContent="left">
          
          <Grid item xs={3} sm={3} md={2} lg={3}>
            <Typography style={{ fontSize: '14px' }} className='pt-5 text-end'>
              期　間 :
            </Typography>
          </Grid>
          <Grid item xs={7} sm={7} md={3} lg={2.5} className='scale-75'>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['DatePicker']}>
                <DatePicker label="開始日" sx={{ backgroundColor: 'white' }}/>
              </DemoContainer>
            </LocalizationProvider>
          </Grid>
          <Grid item xs={3} sm={3} md={1} lg={1.2}  sx={{  ml:{lg:-6}}}>
            <Typography style={{ fontSize: '14px' }} className='pt-5 text-center'>
                ～
            </Typography>
          </Grid>
          <Grid item xs={7} sm={7} md={3} lg={2.5} className='scale-75'sx={{  ml:{lg:-5}}}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['DatePicker']}>
                <DatePicker label="終了日" sx={{ backgroundColor: 'white' }}/>
              </DemoContainer>
            </LocalizationProvider>
          </Grid>
        </Grid>

        <Grid container spacing={2} className='pt-1' justifyContent="left">
          <Grid item xs={3} sm={3} md={2} lg={3}></Grid>
          <Grid item xs={7} sm={7} md={3} lg={2.5} className='scale-75'>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['TimePicker']}>
                <TimePicker label="Basic time picker" sx={{ backgroundColor: 'white' }} />
              </DemoContainer>
            </LocalizationProvider>
          </Grid>
          <Grid item xs={3} sm={3} md={1} lg={1.2}  sx={{  ml:{lg:-6}}}>
            <Typography style={{ fontSize: '14px' }} className='pt-5 text-center'>
                ～
            </Typography>
          </Grid>
          <Grid item xs={7} sm={7} md={3} lg={2.5} className='scale-75'sx={{  ml:{lg:-5}}}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['TimePicker']}>
                <TimePicker label="Basic time picker"  sx={{ backgroundColor: 'white' }}/>
              </DemoContainer>
            </LocalizationProvider>
          </Grid>
        </Grid>
        
        {/* 日間 Field */}
        <Grid container spacing={2} className='pt-2 ' justifyContent="left">
          <Grid item xs={3.8} sm={3} md={2} lg={3.3}></Grid>
          <Grid item xs={3} sm={3} md={3} lg={1.5}>
            <TextField 
              id="outlined-search" 
              type="text" 
              size="small"  
              variant="outlined" 
              fullWidth
              sx={{ backgroundColor: 'white'}}
              InputProps={{
                  endAdornment: <InputAdornment position="end">日間</InputAdornment>,
              }} />
          </Grid>
        </Grid>

        {/* Text Area */}
        <Grid container spacing={2} className='pt-7' justifyContent="center">
          <Grid item xs={10} sm={10} md={8}>
            <textarea 
                id="message" 
                className="block p-2.5 w-full text-sm min-h-28 border border-gray-300"
                placeholder="備考">
            </textarea>
          </Grid>
        </Grid>

        {/* Checkbox */}
        <Grid container spacing={2} className='pt-7' justifyContent="center">
          <Grid item xs={10} sm={10} md={8}>
            <FormGroup>
              <FormControlLabel control={<Checkbox defaultChecked />} label="承認" />
            </FormGroup>
          </Grid>
        </Grid>
    
      </Grid>

      <div className="mt-auto">
          <Grid container justifyContent="center" spacing={2} className='pt-5' sx={{ bottom: 0, width: '100%', backgroundColor: 'inherit', paddingBottom: '10px' }}>
                <Grid item>
                      <Button variant="contained" href="/teacher/listleave" size='medium' className='text-center' startIcon={<ArrowBackIcon />}  color="warning">
                      <Typography component="div" style={{ color: 'white', alignItems: 'center' }}>
                      戻る
                      </Typography>
                      </Button>
                </Grid>
                <Grid item>
                      <Button variant="contained" href="#" size='medium' className='text-center' startIcon={<SaveIcon />} color="success">
                      <Typography component="div" style={{ color: 'white', alignItems: 'center' }}>
                      修正
                      </Typography>
                      </Button>
                </Grid>
          </Grid>
      </div>
    </ContentMain>
  );
}
