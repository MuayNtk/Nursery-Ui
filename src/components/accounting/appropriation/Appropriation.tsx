import { Box, Grid, Typography } from '@mui/material';
import ContentMain from '../../content/Content';
import Link from '@mui/material/Link';
import ArticleIcon from '@mui/icons-material/Article';

export default function Appropriation() {
  return (
      <ContentMain>
        <Grid container spacing={2} sx={{ marginTop: '10px' }}>
          <Grid container item xs={12} spacing={2} >
            <Grid item xs={6} sm={4} md={4} className='pt-5 text-left '>
              <Link href="/accounting/appropriation/additional" sx={{ textDecoration: 'none' }}>
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
                  <ArticleIcon style={{ fontSize: 40 ,color:'#05a9dc'}} />
                  <Typography component="div" sx={{ marginLeft: '10px', marginTop: '9px' ,color:'#686868'}}>
                  【提出様式】R5_加算申請書（仮）保育所用
                  </Typography>
                </Box>
              </Link>
            </Grid>

            <Grid item xs={6} sm={4} md={4} className='pt-5 text-left'>
              <Link href="/accounting/appropriation/provisional" sx={{ textDecoration: 'none' }}>
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
                  <ArticleIcon style={{ fontSize: 40 ,color:'#05a9dc'}} />
                  <Typography component="div" sx={{ marginLeft: '10px', marginTop: '9px' ,color:'#686868'}}>
                  【いちざき】R5_加算適用申請書（保育所）
                  </Typography>
                </Box>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </ContentMain>
  );
}
