import { Box, Grid, Typography } from '@mui/material';
import ContentMain from '../../content/Content';
import Link from '@mui/material/Link';
import BadgeTwoToneIcon from '@mui/icons-material/BadgeTwoTone';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import AssignmentIcon from '@mui/icons-material/Assignment';
import BallotIcon from '@mui/icons-material/Ballot';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';

export default function Treatment() {
  return (
    <ContentMain >
      <Grid container spacing={2} sx={{ marginTop: '10px' }}>
        <Grid container item xs={12} spacing={2} >
          <Grid item xs={6} sm={4} md={4} className='pt-5 text-left '>
            <Link href="/accounting/careertraining" sx={{ textDecoration: 'none' }}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  backgroundColor: '#f4eaff75',
                  border: '1px solid #d1b5ed75',
                  padding: '10px',
                  borderRadius: '8px'
                }}
              >
                <BadgeTwoToneIcon style={{ fontSize: 40 ,color:'#05a9dc'}} />
                <Typography component="div" sx={{ marginLeft: '10px', marginTop: '9px' ,color:'#686868'}}>
                  【いちざき】02_キャリアアップ研修受講歴一覧
                </Typography>
              </Box>
            </Link>
          </Grid>

          <Grid item xs={6} sm={4} md={4} className='pt-5 text-left'>
            <Link href="/accounting/treatmentplan" sx={{ textDecoration: 'none' }}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  backgroundColor: '#f4eaff75',
                  border: '1px solid #d1b5ed75',
                  padding: '10px',
                  borderRadius: '8px'
                }}
              >
                <MedicalServicesIcon style={{ fontSize: 40 ,color:'#05a9dc'}} />
                <Typography component="div" sx={{ marginLeft: '10px', marginTop: '9px' ,color:'#686868'}}>
                  ×【いちざき】【新規事由し・なし】処遇計画書
                </Typography>
              </Box>
            </Link>
          </Grid>

          <Grid item xs={6} sm={4} md={4} className='pt-5 text-left'>
            <Link href="/accounting/rateapplication" sx={{ textDecoration: 'none' }}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  backgroundColor: '#f4eaff75',
                  border: '1px solid #d1b5ed75',
                  padding: '10px',
                  borderRadius: '8px'
                }}
              >
                <AssignmentIcon style={{ fontSize: 40 ,color:'#05a9dc'}} />
                <Typography component="div" sx={{ marginLeft: '10px', marginTop: '9px' ,color:'#686868'}}>
                  【処遇I】R5_加算率認定申請書・キャリアパス要件届出書
                </Typography>
              </Box>
            </Link>
          </Grid>
        </Grid>

        <Grid container item xs={12} spacing={2}>
          <Grid item xs={6} sm={4} md={4} className='pt-5 text-left'>
            <Link href="/accounting/requestbenefits" sx={{ textDecoration: 'none' }}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  backgroundColor: '#f4eaff75',
                  border: '1px solid #d1b5ed75',
                  padding: '10px',
                  borderRadius: '8px'
                }}
              >
                <AssignmentTurnedInIcon style={{ fontSize: 40 ,color:'#05a9dc'}} />
                <Typography component="div" sx={{ marginLeft: '10px', marginTop: '9px' ,color:'#686868'}}>
                  【処遇I】R5_処遇改等加算申請書(保育所版)
                </Typography>
              </Box>
            </Link>
          </Grid>

          <Grid item xs={6} sm={4} md={4} className='pt-5 text-left'>
            <Link href="/accounting/eligiblepersons" sx={{ textDecoration: 'none' }}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  backgroundColor: '#f4eaff75',
                  border: '1px solid #d1b5ed75',
                  padding: '10px',
                  borderRadius: '8px'
                }}
              >
                <BallotIcon style={{ fontSize: 40 ,color:'#05a9dc'}} />
                <Typography component="div" sx={{ marginLeft: '10px', marginTop: '9px' ,color:'#686868'}}>
                  【処遇血】R5_加算算定対象人数等認定申請書(保育所)
                </Typography>
              </Box>
            </Link>
          </Grid>
        </Grid>
      </Grid>
  </ContentMain>
  );
}
