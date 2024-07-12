import Grid from '@mui/material/Grid';
import DayForm from '../componentsform/DayForm';
import ContentMain from '../content/Content';
import Typography from '@mui/material/Typography';
import EraForm from '../componentsform/EraForm';
import YearForm from '../componentsform/YearForm';
import MonthForm from '../componentsform/MonthForm';
import { Button, FormControlLabel, Radio, RadioGroup, TextField } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SaveIcon from '@mui/icons-material/Save';

export default function InfoStaffForm() {
  return (
    <ContentMain className="flex flex-col min-h-screen">
      <Grid container spacing={3}>
        {/* Header */}
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom className=" pt-14 text-center">
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
            <TextField id="outlined-search" type="text" size="small" fullWidth sx={{ backgroundColor: 'white' }} />
          </Grid>
          <Grid item xs={6} sm={2} md={1}>
            <Typography style={{ fontSize: '14px' }} className='pt-2'>
              氏名
            </Typography>
          </Grid>
          <Grid item xs={6} sm={2} md={3}>
            <TextField id="outlined-search" type="text" size="small" fullWidth sx={{ backgroundColor: 'white' }} />
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
            <TextField id="outlined-search" type="text" size="small" fullWidth sx={{ backgroundColor: 'white' }} />
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
              defaultValue="paidleave"
              name="radio-buttons-group"
              row
            >
              <FormControlLabel value="M" control={<Radio />} label="男" />
              <FormControlLabel value="F" control={<Radio />} label="女" />
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

      {/* Buttons at the bottom */}
      <div className="mt-auto">
        <Grid container justifyContent="center" spacing={2} className='pt-5' sx={{ bottom: 0, width: '100%', backgroundColor: 'inherit', paddingBottom: '10px' }}>
          <Grid item>
            <Button variant="contained" href="/infostaff" size='medium' className='text-center' startIcon={<ArrowBackIcon />}  color="warning">
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
