import Grid from '@mui/material/Grid';
import DayForm from '../componentsform/DayForm';
import ContentMain from '../content/Content';
import Typography from '@mui/material/Typography';
import EraForm from '../componentsform/EraForm';
import YearForm from '../componentsform/YearForm';
import MonthForm from '../componentsform/MonthForm';

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

        {/* Form Inputs */}
        <Grid item xs={12}>
          <Grid container justifyContent="flex-end" spacing={1}>
            {/* Era Form */}
            <Grid item xs={6} sm={3} md={2}>
              <EraForm />
            </Grid>
            
            {/* Year Form */}
            <Grid item xs={6} sm={3} md={2}>
              <YearForm />
            </Grid>
            
            {/* Month and Day Forms */}
            <Grid item xs={12} sm={6} md={3}>
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
      </Grid>
    </ContentMain>
  );
}
