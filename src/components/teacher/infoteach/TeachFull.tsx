import { FormControlLabel, Grid, Radio, RadioGroup, TextField, Typography } from "@mui/material";
import DayForm from "../../componentsform/DayForm";
import EraForm from "../../componentsform/EraForm";
import MonthForm from "../../componentsform/MonthForm";
import YearForm from "../../componentsform/YearForm";

export default function TeachFull() {
  return (
    <>
      <Grid container spacing={3}>
        
        <Grid container spacing={2} className='pt-7' justifyContent="start">
          <Grid item xs={6} sm={2} md={1}>
            <Typography style={{ fontSize: '16px' }} className='pt-2'>
              所属
            </Typography>
          </Grid>
          <Grid item xs={6} sm={2} md={3}>
            <TextField id="outlined-search" type="text" size="small" fullWidth sx={{ backgroundColor: 'white' }} />
          </Grid>
        </Grid>

        <Grid container spacing={2} className='pt-4' justifyContent="start">
          <Grid item xs={6} sm={2} md={1}>
            <Typography style={{ fontSize: '16px' }} className='pt-2'>
              氏名 
            </Typography>
          </Grid>
          <Grid item xs={6} sm={2} md={3}>
            <TextField id="outlined-search" type="text" size="small" fullWidth sx={{ backgroundColor: 'white' }}/>
          </Grid>
        </Grid>

        <Grid container spacing={2} className='pt-4' justifyContent="start">
          <Grid item xs={6} sm={2} md={1}>
            <Typography style={{ fontSize: '16px' }} className='pt-2'>
              旧姓
            </Typography>
          </Grid>
          <Grid item xs={6} sm={2} md={3}>
            <TextField id="outlined-search" type="text" size="small" fullWidth sx={{ backgroundColor: 'white' }}/>
          </Grid>
        </Grid>

        <Grid container spacing={2} className='pt-4' justifyContent="start">
          <Grid item xs={6} sm={2} md={1}>
            <Typography style={{ fontSize: '16px' }} className='pt-2'>
              生年月日
            </Typography>
          </Grid>
          <Grid item xs={12} sm={2} md={5}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={3} md={3}>
                <EraForm />
              </Grid>
              <Grid item xs={12} sm={3} md={3}>
                <YearForm />
              </Grid>
              <Grid item xs={12} sm={3} md={3}>
                <MonthForm />
              </Grid>
              <Grid item xs={12} sm={3} md={3}>
                <DayForm />
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid container spacing={2} className='pt-7'>
          <Grid item xs={6} sm={2} md={1}></Grid>
          <Grid item xs={6} sm={2} md={1}></Grid>
          <Grid item xs={6} sm={2} md={1}>
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

      </Grid>
    </>
  );
}
