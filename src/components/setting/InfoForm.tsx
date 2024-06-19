import Typography from '@mui/material/Typography';
import ContentMain from '../content/Content';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function InfoForm() {
      return (
            <ContentMain>
                  <Typography variant="h4" gutterBottom>
                        InfoForm
                  </Typography>
                  <Grid container spacing={2} className='pt-7'>
                        <Grid item xs={12} sm={4} md={3}>
                              <TextField
                                    className='w-full'
                                    id="City-input"
                                    label="市町村名"
                                    type="text"
                                    style={{
                                          backgroundColor: "white",
                                    }}
                              />
                        </Grid>
                        <Grid item xs={12} sm={4} md={3}>
                              <TextField
                                    className='w-full'
                                    id="Schoolnumber-input"
                                    label="園番号"
                                    type="text"
                                    style={{
                                          backgroundColor: "white",
                                    }}
                              />
                        </Grid>
                        <Grid item xs={12} sm={4} md={6}>
                              <TextField
                                    className='w-full'
                                    id="Facility-input"
                                    label="施設・事業所名"
                                    type="text"
                                    style={{
                                          backgroundColor: "white",
                                    }}
                              />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12}>
                              <Typography variant="h6" gutterBottom className='pt-3 text-start'>
                                    法人名
                              </Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12}>
                              <TextField
                                    className='w-full'
                                    id="Facility-input"
                                    label="法人名"
                                    type="text"
                                    style={{
                                          backgroundColor: "white",
                                    }}
                              />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12}>
                              <Typography variant="h6" gutterBottom className='pt-3 text-start'>
                                    法人住所
                              </Typography>
                        </Grid>
                        <Grid item xs={12} sm={4} md={3}>
                              <TextField
                                    className='w-full'
                                    id="City-input"
                                    label="〒"
                                    type="text"
                                    style={{
                                          backgroundColor: "white",
                                    }}
                              />
                        </Grid>
                        <Grid item xs={12} sm={4} md={3}>
                              <TextField
                                    className='w-full'
                                    id="Schoolnumber-input"
                                    label=""
                                    type="text"
                                    style={{
                                          backgroundColor: "white",
                                    }}
                              />
                        </Grid>
                        <Grid item xs={12} sm={4} md={6}>
                              <TextField
                                    className='w-full'
                                    id="Facility-input"
                                    label=""
                                    type="text"
                                    style={{
                                          backgroundColor: "white",
                                    }}
                              />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12}>
                              <Typography variant="h6" gutterBottom className='pt-3 text-start'>
                                    保育園住所
                              </Typography>
                        </Grid>
                        <Grid item xs={12} sm={4} md={3}>
                              <TextField
                                    className='w-full'
                                    id="City-input"
                                    label="〒"
                                    type="text"
                                    style={{
                                          backgroundColor: "white",
                                    }}
                              />
                        </Grid>
                        <Grid item xs={12} sm={4} md={3}>
                              <TextField
                                    className='w-full'
                                    id="Schoolnumber-input"
                                    label=""
                                    type="text"
                                    style={{
                                          backgroundColor: "white",
                                    }}
                              />
                        </Grid>
                        <Grid item xs={12} sm={4} md={6}>
                              <TextField
                                    className='w-full'
                                    id="Facility-input"
                                    label=""
                                    type="text"
                                    style={{
                                          backgroundColor: "white",
                                    }}
                              />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12}>
                              <Typography variant="h6" gutterBottom className='pt-3 text-start'>
                                    連絡先
                              </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                              <TextField
                                    className='w-full'
                                    id="City-input"
                                    label="電話番号"
                                    type="text"
                                    style={{
                                          backgroundColor: "white",
                                    }}
                              />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                              <TextField
                                    className='w-full'
                                    id="Schoolnumber-input"
                                    label="メールアドレス"
                                    type="text"
                                    style={{
                                          backgroundColor: "white",
                                    }}
                              />
                        </Grid>
                        <Grid container  direction="row" justifyContent="space-around" alignItems="center" style={{ paddingTop: '20px' }}>
                              <Button variant="contained" href="#" className='w-32 text-center'>
                                    <Typography component="div" style={{ color: 'white', alignItems: 'center' }} >
                                          修正
                                    </Typography>
                              </Button>
                        </Grid>
                  </Grid>
            </ContentMain>
      );
};
