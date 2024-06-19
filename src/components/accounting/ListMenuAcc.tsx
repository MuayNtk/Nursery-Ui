import ContentMain from '../content/Content';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function ListMenuAcc() {
      return (
            <>
                  <ContentMain >
                        <Grid container spacing={2} className='pt-7' >
                              <Grid item xs={6} sm={6} md={3} >
                                    <Button variant="contained" href="#contained-buttons" className='w-full h-12'>

                                          <Typography component="div" style={{ color: 'white', paddingLeft: '10px', fontSize: 13,}} >
                                                地域活動適用申請
                                          </Typography>

                                    </Button>
                              </Grid>
                              <Grid item xs={6} sm={6} md={3}>
                                    <Button variant="contained" href="#contained-buttons" className='w-full h-12'>

                                          <Typography component="div" style={{ color: 'white', paddingLeft: '10px', fontSize: 13, }} >
                                                保育体制強化事業
                                          </Typography>
                                    </Button>
                              </Grid>
                              <Grid item xs={6} sm={6} md={3}>
                                    <Button variant="contained" href="#contained-buttons" className='w-full h-12'>

                                          <Typography component="div" style={{ color: 'white', paddingLeft: '10px' , fontSize: 13,}} >
                                                処遇改善
                                          </Typography>

                                    </Button>
                              </Grid>
                              <Grid item xs={6} sm={6} md={3}>
                                    <Button variant="contained" href="#contained-buttons" className='w-full h-12' >

                                          <Typography component="div" style={{ color: 'white', paddingLeft: '10px' , fontSize: 13,}} >
                                                加算（調整）実績報告
                                          </Typography>
                                    </Button>
                              </Grid>
                              <Grid item xs={6} sm={6} md={3}>
                                    <Button variant="contained" href="#contained-buttons" className='w-full h-12' >

                                          <Typography component="div" style={{ color: 'white', paddingLeft: '10px' , fontSize: 13,}} >
                                                加算適用（仮）申請
                                          </Typography>
                                    </Button>
                              </Grid>
                              <Grid item xs={6} sm={6} md={3}>
                                    <Button variant="contained" href="#contained-buttons" className='w-full h-12' >

                                          <Typography component="div" style={{ color: 'white', paddingLeft: '10px' , fontSize: 13,}} >
                                                委託費
                                          </Typography>
                                    </Button>
                              </Grid>
                              <Grid item xs={6} sm={6} md={3} >
                                    <Button variant="contained" href="#contained-buttons" className='w-full h-12' >

                                          <Typography component="div" style={{ color: 'white', paddingLeft: '10px', fontSize: 13, }} >
                                                物価高騰対策支援金
                                          </Typography>
                                    </Button>
                              </Grid>
                              <Grid item xs={6} sm={6} md={3} >
                                    <Button variant="contained" href="#contained-buttons" className='w-full h-12' >

                                          <Typography component="div" style={{ color: 'white', paddingLeft: '10px', fontSize: 13, }} >
                                                給食支援費補助金
                                          </Typography>
                                    </Button>
                              </Grid>
                        </Grid>
                        <p className='mt-36 font-bold text-3xl'>Accounting</p>
                  </ContentMain>
            </>
      );
};
