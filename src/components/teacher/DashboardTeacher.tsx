import ContentMain from '../../components/content/Content';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Calendar from '../../components/teacher/calendar/Calendar';


export default function DashboardTeacher() {
  return (
    <>
      <ContentMain>
        <Grid container spacing={2} className='pt-7'>
          <Grid item xs={6} sm={4} md={2}>
            <Button variant="contained" href="#" style={{ backgroundColor: '#708090' }} className='w-full'>
              <Typography component="div" style={{ color: 'white', }} >
                全体計画
              </Typography>

            </Button>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <Button variant="contained" href="#" style={{ backgroundColor: '#708090' }} className='w-full'>
              <Typography component="div" style={{ color: 'white', }} >
                年間指導計画
              </Typography>
            </Button>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <Button variant="contained" href="#" style={{ backgroundColor: '#708090' }} className='w-full'>
              <Typography component="div" style={{ color: 'white', }} >
                月指導計画
              </Typography>

            </Button>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <Button variant="contained" href="#" style={{ backgroundColor: '#708090' }} className='w-full'>
              <Typography component="div" style={{ color: 'white', }} >
                週案と保育日誌
              </Typography>
            </Button>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <Button variant="contained" href="#" style={{ backgroundColor: '#708090' }} className='w-full'>
              <Typography component="div" style={{ color: 'white', }} >
                個別計画
              </Typography>
            </Button>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <Button variant="contained" href="#" style={{ backgroundColor: '#708090' }} className='w-full'>
              <Typography component="div" style={{ color: 'white', }} >
                食育計画
              </Typography>
            </Button>
          </Grid>

          <Grid container  direction="row" justifyContent="space-around" alignItems="center" style={{ paddingTop: '20px' }}>
            <Grid item xs={6} sm={4} md={2}>
              <Button variant="contained" href="#" style={{ backgroundColor: '#6495ED', }} className='w-full'>
                <Typography component="div" style={{ color: 'white', }} >
                  クラス名
                </Typography>
              </Button>
            </Grid>
            <Grid item xs={6} sm={4} md={2}>
              <Button variant="contained" href="#" style={{ backgroundColor: 'red' }} className='w-full'>
                <Typography component="div" style={{ color: 'white', }} >
                  事故報告
                </Typography>
              </Button>
            </Grid>

            <Grid className='pt-5 pl-5'>
              <Calendar />
            </Grid>




          </Grid>
        </Grid>
      </ContentMain>
    </>
  );
};
