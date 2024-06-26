import Grid from '@mui/material/Grid';
import DayForm from '../componentsform/DayForm';
import ContentMain from '../content/Content';
import Typography from '@mui/material/Typography';
import EraForm from '../componentsform/EraForm';
import YearForm from '../componentsform/YearForm';
import MonthForm from '../componentsform/MonthForm';
import { Button, Checkbox, FormControlLabel, FormGroup, Radio, RadioGroup, TextField } from '@mui/material';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import InputAdornment from '@mui/material/InputAdornment';

export default function LeaveAdd() {
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
        <Grid item xs={12}>
          <Grid container justifyContent="flex-end" spacing={1}>
            <Grid item xs={12} sm={3} md={2}>
              <EraForm />
            </Grid>
            <Grid item xs={12} sm={3} md={2}>
              <YearForm />
            </Grid>
            <Grid item xs={12} sm={3} md={3}>
              <Grid container spacing={1}>
                <Grid item xs={6}>
                  <MonthForm />
                </Grid>
                <Grid item xs={6}>
                  <DayForm />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        
        {/* 所属, 役職 Fields */}
        <Grid container spacing={2} className='pt-7' justifyContent="center">
          <Grid item xs={6} sm={2} md={1}>
            <Typography style={{ fontSize: '16px' }} className='pt-2'>
              所　属 :
            </Typography>
          </Grid>
          <Grid item xs={6} sm={2} md={3}>
            <TextField id="outlined-search" type="text" size="small" fullWidth sx={{ backgroundColor: 'white' }} />
          </Grid>
          <Grid item xs={6} sm={2} md={1}>
            <Typography style={{ fontSize: '16px' }} className='pt-2'>
              役　職 :
            </Typography>
          </Grid>
          <Grid item xs={6} sm={2} md={3}>
            <TextField id="outlined-search" type="text" size="small" fullWidth  sx={{ backgroundColor: 'white' }} />
          </Grid>
        </Grid>
        
        {/* 氏名 Field */}
        <Grid container spacing={2} className='pt-7' justifyContent="center">
          <Grid item xs={6} sm={2} md={1}>
            <Typography style={{ fontSize: '16px' }} className='pt-2'>
              氏　名 :
            </Typography>
          </Grid>
          <Grid item xs={6} sm={2} md={3}>
            <TextField id="outlined-search" type="text" size="small" fullWidth sx={{ backgroundColor: 'white' }}/>
          </Grid>
          <Grid item xs={6} sm={2} md={1}></Grid>
          <Grid item xs={6} sm={2} md={3}></Grid>
        </Grid>
        
        {/* 適用 Radio Group */}
        <Grid container spacing={2} className='pt-7'>
        <Grid item xs={6} sm={2} md={1}></Grid>
        <Grid item xs={6} sm={2} md={1}></Grid>
          <Grid item xs={6} sm={2} md={1} >
            <Typography style={{ fontSize: '16px' }} className='pt-2'>
              適　用 :
            </Typography>
          </Grid> 
          <Grid item xs={6} sm={2} md={8}>
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
        <Grid container spacing={2} className='pt-7' justifyContent="center">
          
          <Grid item xs={6} sm={2} md={1}>
            <Typography style={{ fontSize: '16px' }} className='pt-5'>
              期　間 :
            </Typography>
          </Grid>
          <Grid item xs={6} sm={2} md={3}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['DatePicker']}>
                <DatePicker label="開始日" sx={{ backgroundColor: 'white' }}/>
              </DemoContainer>
            </LocalizationProvider>
          </Grid>
          <Grid item xs={6} sm={2} md={1}>
            <Typography style={{ fontSize: '16px' }} className='pt-5'>
                ～
            </Typography>
          </Grid>
          <Grid item xs={6} sm={2} md={3}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['DatePicker']}>
                <DatePicker label="終了日" sx={{ backgroundColor: 'white' }}/>
              </DemoContainer>
            </LocalizationProvider>
          </Grid>
        </Grid>
        
        {/* 日間 Field */}
        <Grid container spacing={2} className='pt-7' >
        <Grid item xs={3} sm={2} md={1}></Grid>
        <Grid item xs={3} sm={2} md={3}></Grid>
          <Grid item xs={6} sm={5} md={2}>
            <TextField 
              id="outlined-search" 
              type="text" 
              size="small"  
              variant="outlined" 
              fullWidth
              sx={{ backgroundColor: 'white' }}
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
        
        <Grid container spacing={2} className='pt-5' justifyContent="center">
          <Grid item>
            <Button variant="contained" href="#" size='small' className='text-center'>
              <Typography component="div" style={{ color: 'white', alignItems: 'center' }} >
                戻る
              </Typography>
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" href="#" size='small' className='text-center'>
              <Typography component="div" style={{ color: 'white', alignItems: 'center' }} >
                修正
              </Typography>
            </Button>
          </Grid>
              
              
        </Grid>
      </Grid>
    </ContentMain>
  );
}
