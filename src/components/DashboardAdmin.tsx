import ContentMain from './content/Content';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import Typography from '@mui/material/Typography';
import PeopleIcon from '@mui/icons-material/People';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import WarningIcon from '@mui/icons-material/Warning';
import EmailIcon from '@mui/icons-material/Email';




export default function DashboardAdmin() {


  return (

    <>
      <ContentMain >
        <Grid container spacing={3} className='pt-7' >
          <Grid item xs={6} sm={6} md={3} >
            <Button variant="contained" href="/teacher/todolist" className='w-full h-10'>
              <PersonAddAltIcon />
              <Typography component="div" sx={{ color: 'white', paddingLeft: '10px', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, },}} >
                保育士登録
              </Typography>
            </Button>
          </Grid>
          <Grid item xs={6} sm={6} md={3}>
            <Button variant="contained" href="/student" className='w-full h-10'>
              <PersonAddAltIcon />
              <Typography component="div" sx={{ color: 'white', paddingLeft: '10px' , fontSize: { xs: 11, sm: 11, md: 11, lg: 16, },}} >
                園児登録
              </Typography>
            </Button>
          </Grid>
          <Grid item xs={6} sm={6} md={3}>
            <Button variant="contained" href="/class" className='w-full h-10'>
              <PeopleIcon />
              <Typography component="div" sx={{ color: 'white', paddingLeft: '10px', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, }} >
                クラス登録
              </Typography>

            </Button>
          </Grid>
          <Grid item xs={6} sm={6} md={3}>
            <Button variant="contained" href="#contained-buttons" className='w-full h-10' disabled>
              <WatchLaterIcon />
              <Typography component="div" sx={{ color: 'white', paddingLeft: '10px', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, }} >
                登降園記録
              </Typography>
            </Button>
          </Grid>
          <Grid item xs={6} sm={6} md={3}>
            <Button variant="contained" href="#contained-buttons" className='w-full h-10' disabled>
              <FileCopyIcon />
              <Typography component="div" sx={{ color: 'white', paddingLeft: '10px', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, }} >
                日誌登録
              </Typography>
            </Button>
          </Grid>
          <Grid item xs={6} sm={6} md={3}>
            <Button variant="contained" href="#contained-buttons" className='w-full h-10' disabled>
              <WarningIcon />
              <Typography component="div" sx={{ color: 'white', paddingLeft: '10px' , fontSize: { xs: 11, sm: 11, md: 11, lg: 16, },}} >
                事故登録
              </Typography>
            </Button>
          </Grid>
          <Grid item xs={6} sm={6} md={3} >
            <Button variant="contained" href="#contained-buttons" className='w-full h-10' disabled>
              <EmailIcon />
              <Typography  component="div" sx={{ color: 'white', paddingLeft: '10px' , fontSize: { xs: 11, sm: 11, md: 11, lg: 16, },}} >
                メッセージ配信
              </Typography>
            </Button>
          </Grid>
        </Grid>

        
      </ContentMain>
    </>
  );
};
