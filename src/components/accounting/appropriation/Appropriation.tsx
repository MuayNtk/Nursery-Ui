import { Grid, Typography } from '@mui/material';
import ContentMain from '../../content/Content';
import Link from '@mui/material/Link';

export default function Appropriation() {
  return (
    <ContentMain>
        <Grid item xs={6} sm={4} md={3}  className='pt-5 text-left' >
          <Link href="/accounting/appropriation/additional"  underline="hover">
            <Typography component="div" >
            【提出様式】R5_加算申請書（仮）保育所用
            </Typography>
          </Link>
        </Grid>
        <Grid item xs={6} sm={4} md={3}  className='pt-5 text-left'>
          <Link href="/accounting/appropriation/provisiona"  underline="hover">
              <Typography component="div" >
              【いちざき】R5_加算適用申請書（保育所）
              </Typography>
          </Link>
        </Grid>
   
    </ContentMain>
  );
}
