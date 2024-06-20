import ContentMain from '../content/Content';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function ListMenuReport() {
      return (
            <ContentMain >
                  <Grid container spacing={3} className='pt-7' >
                        <Grid item xs={6} sm={6} md={3} >
                              <Button variant="contained" href="#contained-buttons" className='w-full'>

                                    <Typography variant="h1"
                                          sx={{
                                                fontSize: {
                                                      xs: 11,
                                                      sm: 11,
                                                      md: 11,
                                                      lg: 18,
                                                },
                                          }}
                                    >
                                          児童出席簿
                                    </Typography>

                              </Button>
                        </Grid>
                        <Grid item xs={6} sm={6} md={3}>
                              <Button variant="contained" href="#contained-buttons" className='w-full '>

                                    <Typography variant="h1"
                                          sx={{
                                                fontSize: {
                                                      xs: 11,
                                                      sm: 11,
                                                      md: 11,
                                                      lg: 18,
                                                },
                                          }}
                                    >
                                          月 児童出席簿 組
                                    </Typography>
                              </Button>
                        </Grid>
                        <Grid item xs={6} sm={6} md={3}>
                              <Button variant="contained" href="#contained-buttons" className='w-full '>

                                    <Typography variant="h1"
                                          sx={{
                                                fontSize: {
                                                      xs: 11,
                                                      sm: 11,
                                                      md: 11,
                                                      lg: 18,
                                                },
                                          }}
                                    >
                                          全体計画
                                    </Typography>

                              </Button>
                        </Grid>
                        <Grid item xs={6} sm={6} md={3}>
                              <Button variant="contained" href="#contained-buttons" className='w-full' >

                                    <Typography variant="h1"
                                          sx={{
                                                fontSize: {
                                                      xs: 11,
                                                      sm: 11,
                                                      md: 11,
                                                      lg: 18,
                                                },
                                          }}
                                    >
                                          年間指導計画
                                    </Typography>
                              </Button>
                        </Grid>
                        <Grid item xs={6} sm={6} md={3}>
                              <Button variant="contained" href="#contained-buttons" className='w-full' >

                                    <Typography variant="h1"
                                          sx={{
                                                fontSize: {
                                                      xs: 11,
                                                      sm: 11,
                                                      md: 11,
                                                      lg: 18,
                                                },
                                          }}
                                    >
                                          月指導計画
                                    </Typography>
                              </Button>
                        </Grid>
                        <Grid item xs={6} sm={6} md={3}>
                              <Button variant="contained" href="#contained-buttons" className='w-full ' >

                                    <Typography variant="h1"
                                          sx={{
                                                fontSize: {
                                                      xs: 11,
                                                      sm: 11,
                                                      md: 11,
                                                      lg: 18,
                                                },
                                          }}
                                    >
                                          週案と保育日誌(未満児)
                                    </Typography>
                              </Button>
                        </Grid>
                        <Grid item xs={6} sm={6} md={3} >
                              <Button variant="contained" href="#contained-buttons" className='w-full ' >

                                    <Typography variant="h1"
                                          sx={{
                                                fontSize: {
                                                      xs: 11,
                                                      sm: 11,
                                                      md: 11,
                                                      lg: 18,
                                                },
                                          }}
                                    >
                                          個人カリキュラム・記録
                                    </Typography>
                              </Button>
                        </Grid>

                  </Grid>
            </ContentMain>
      );
};
