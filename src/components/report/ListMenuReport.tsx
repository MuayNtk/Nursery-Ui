import ContentMain from '../content/Content';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ListMenuReport() {
      return (
            <ContentMain >
                  <Grid container spacing={2} className='pt-7' >
                        <Grid item xs={6} sm={6} md={3} >
                              <Button variant="contained" href="#contained-buttons" className='w-full h-12'>

                                    <Typography component="div" style={{ color: 'white', paddingLeft: '10px' , fontSize: 15,}} >
                                          児童出席簿
                                    </Typography>

                              </Button>
                        </Grid>
                        <Grid item xs={6} sm={6} md={3}>
                              <Button variant="contained" href="#contained-buttons" className='w-full h-12'>

                                    <Typography component="div" style={{ color: 'white', paddingLeft: '10px', fontSize: 15, }} >
                                          月 児童出席簿 組
                                    </Typography>
                              </Button>
                        </Grid>
                        <Grid item xs={6} sm={6} md={3}>
                              <Button variant="contained" href="#contained-buttons" className='w-full h-12'>

                                    <Typography component="div" style={{ color: 'white', paddingLeft: '10px' , fontSize: 15,}} >
                                          全体計画
                                    </Typography>

                              </Button>
                        </Grid>
                        <Grid item xs={6} sm={6} md={3}>
                              <Button variant="contained" href="#contained-buttons" className='w-full h-12' >

                                    <Typography component="div" style={{ color: 'white', paddingLeft: '10px', fontSize: 15, }} >
                                          年間指導計画
                                    </Typography>
                              </Button>
                        </Grid>
                        <Grid item xs={6} sm={6} md={3}>
                              <Button variant="contained" href="#contained-buttons" className='w-full h-12' >

                                    <Typography component="div" style={{ color: 'white', paddingLeft: '10px' , fontSize: 15,}} >
                                          月指導計画
                                    </Typography>
                              </Button>
                        </Grid>
                        <Grid item xs={6} sm={6} md={3}>
                              <Button variant="contained" href="#contained-buttons" className='w-full h-12' >

                                    <Typography component="div" style={{ color: 'white', paddingLeft: '10px' , fontSize: 12,}} >
                                          週案と保育日誌(未満児)
                                    </Typography>
                              </Button>
                        </Grid>
                        <Grid item xs={6} sm={6} md={3} >
                              <Button variant="contained" href="#contained-buttons" className='w-full h-12' >

                                    <Typography component="div" style={{ color: 'white', paddingLeft: '10px', fontSize: 15, }} >
                                          個人カリキュラム・記録
                                    </Typography>
                              </Button>
                        </Grid>

                  </Grid>
                  <p className='mt-36 font-bold text-3xl'>ReportMenu</p>
            </ContentMain>
      );
};
