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
        <Grid container spacing={4} className='pt-7'>
          <Grid item xs={3}>
            <Button variant="contained" href="#contained-buttons" className='w-full'>
              <PersonAddAltIcon />
              <Typography component="div" style={{ color: 'white', paddingLeft: '10px' }} >
                保育士登録
              </Typography>

            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" href="#contained-buttons" className='w-full'>
              <PersonAddAltIcon />
              <Typography component="div" style={{ color: 'white', paddingLeft: '10px' }} >
                園児登録
              </Typography>
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" href="#contained-buttons" className='w-full'>
              <PeopleIcon />
              <Typography component="div" style={{ color: 'white', paddingLeft: '10px' }} >
                クラス登録
              </Typography>

            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" href="#contained-buttons" className='w-full' disabled>
              <WatchLaterIcon />
              <Typography component="div" style={{ color: 'white', paddingLeft: '10px' }} >
                登降園記録
              </Typography>
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" href="#contained-buttons" className='w-full' disabled>
              <FileCopyIcon />
              <Typography component="div" style={{ color: 'white', paddingLeft: '10px' }} >
                日誌登録
              </Typography>
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" href="#contained-buttons" className='w-full' disabled>
              <WarningIcon />
              <Typography component="div" style={{ color: 'white', paddingLeft: '10px' }} >
                事故登録
              </Typography>
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" href="#contained-buttons" className='w-full' disabled>
              <EmailIcon />
              <Typography component="div" style={{ color: 'white', paddingLeft: '10px' }} >
                メッセージ配信
              </Typography>
            </Button>
          </Grid>
        </Grid>

      </ContentMain>
    </>
  );
};
