import ContentMain from '../content/Content';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function ListMenuAcc() {
      return (
            <>
                  <ContentMain >
                        <Grid container spacing={3} className='pt-7' >
                              <Grid item xs={6} sm={6} md={3} >
                                    <Button variant="contained" href="#contained-buttons" className='w-full'>

                                    <Typography variant="h1"
                                                sx={{
                                                      fontSize: {
                                                            xs: 11,
                                                            sm: 11,
                                                            md: 13,
                                                            lg: 18,
                                                      },
                                                }}
                                          >
                                                地域活動適用申請
                                          </Typography>
                                    </Button>
                              </Grid>
                              <Grid item xs={6} sm={6} md={3}>
                                    <Button variant="contained" href="#contained-buttons" className='w-full'>

                                    <Typography variant="h1"
                                                sx={{
                                                      fontSize: {
                                                            xs: 11,
                                                            sm: 11,
                                                            md: 13,
                                                            lg: 18,
                                                      },
                                                }}
                                          >
                                                保育体制強化事業
                                          </Typography>
                                    </Button>
                              </Grid>
                              <Grid item xs={6} sm={6} md={3}>
                                    <Button variant="contained" href="#contained-buttons" className='w-full'>

                                    <Typography variant="h1"
                                                sx={{
                                                      fontSize: {
                                                            xs: 11,
                                                            sm: 11,
                                                            md: 13,
                                                            lg: 18,
                                                      },
                                                }}
                                          >
                                                処遇改善
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
                                                            md: 12,
                                                            lg: 18,
                                                      },
                                                }}
                                          >
                                                加算（調整）実績報告
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
                                                            md: 13,
                                                            lg: 18,
                                                      },
                                                }}
                                          >
                                                加算適用（仮）申請
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
                                                            md: 13,
                                                            lg: 18,
                                                      },
                                                }}
                                          >
                                                委託費
                                          </Typography>
                                    </Button>
                              </Grid>
                              <Grid item xs={6} sm={6} md={3} >
                                    <Button variant="contained" href="#contained-buttons" className='w-full' >

                                    <Typography variant="h1"
                                                sx={{
                                                      fontSize: {
                                                            xs: 11,
                                                            sm: 11,
                                                            md: 13,
                                                            lg: 18,
                                                      },
                                                }}
                                          >
                                                物価高騰対策支援金
                                          </Typography>
                                    </Button>
                              </Grid>
                              <Grid item xs={6} sm={6} md={3} >
                                    <Button variant="contained" href="#contained-buttons" className='w-full' >

                                          <Typography variant="h1"
                                                sx={{
                                                      fontSize: {
                                                            xs: 11,
                                                            sm: 11,
                                                            md: 13,
                                                            lg: 18,
                                                      },
                                                }}
                                          >
                                                給食支援費補助金
                                          </Typography>
                                    </Button>
                              </Grid>
                        </Grid>
                  </ContentMain>
            </>
      );
};
