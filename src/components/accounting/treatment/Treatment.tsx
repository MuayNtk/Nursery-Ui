import { Grid, Typography } from '@mui/material';
import ContentMain from '../../content/Content';
import Link from '@mui/material/Link';

export default function Treatment() {
  return (
    <ContentMain>
        <Grid item xs={6} sm={4} md={3}  className='pt-5 text-left' >
          <Link href=" /accounting/careertraining"  underline="hover">
            <Typography component="div" >
            【いちざき】02_キャリアアップ研修受講歴一覧
            </Typography>
          </Link>
        </Grid>
        <Grid item xs={6} sm={4} md={3}  className='pt-5 text-left'>
          <Link href="/accounting/treatmentplan"  underline="hover">
              <Typography component="div" >
              ×【いちざき】【新規事由し・なし】処遇計画書
              </Typography>
          </Link>
        </Grid>
        <Grid item xs={6} sm={4} md={3}  className='pt-5 text-left'>
          <Link href="/accounting/rateapplication"  underline="hover">
              <Typography component="div" >
              【処遇I】R5_加算率認定申請書・キャリアパス要件届出書
              </Typography>
          </Link>
        </Grid>
        <Grid item xs={6} sm={4} md={3}  className='pt-5 text-left'>
          <Link href="/accounting/requestbenefits"  underline="hover">
              <Typography component="div" >
              【処遇I】R5_処遇改等加算申請書(保育所版)
              </Typography>
          </Link>
        </Grid>
        <Grid item xs={6} sm={4} md={3}  className='pt-5 text-left'>
          <Link href="/accounting/eligiblepersons"  underline="hover">
              <Typography component="div" >
              【処遇血】R5_加算算定対象人数等認定申請書(保育所) 
              </Typography>
          </Link>
        </Grid>
   
   
    </ContentMain>
  );
}
