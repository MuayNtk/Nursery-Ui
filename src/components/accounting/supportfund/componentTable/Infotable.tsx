import { FormControl, Grid, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';



function infotable() {
    return (
        <div>
            {/* start table excretion */}
            <Grid container spacing={2} className='' justifyContent="center">
                <Paper sx={{ width: '80%', Height: 2000, overflow: 'hidden' }} className='ms-4'>
                    <TableContainer sx={{ maxHeight: 2000 }}>
                        <Table stickyHeader aria-label="sticky table" size="small">
                      
                            <TableBody>
                                <TableRow hover role="checkbox" tabIndex={-1} >
                                    <TableCell>
                                        <Grid container spacing={2} className='' justifyContent="center">
                                            <Grid item xs={12} sm={12} md={12} lg={12} className='' >
                                                <Typography component="div" sx={{ color: 'black', fontWeight: 'bold', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, } }} className='' >
                                                    施設.事業所類型
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </TableCell>
                                    
                                    <TableCell>
                                        <Grid item xs={12} sm={12} md={12} lg={6}>
                                            <FormControl size="small" fullWidth >
                                                <InputLabel id="era-select-label"></InputLabel>
                                                <Select
                                                    id="era-select"
                                                    labelId="era-select-label"
                                                    sx={{ backgroundColor: "white" }}
                                                >
                                                    <MenuItem value="">
                                                        <em>None</em>
                                                    </MenuItem>
                                                    <MenuItem value={1}>私立保育所</MenuItem>
                                                    <MenuItem value={2}>2</MenuItem>
                                                    <MenuItem value={3}>3</MenuItem>
                                                    <MenuItem value={4}>4</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Grid>


                                    </TableCell>
                                </TableRow>
                                <TableRow hover role="checkbox" tabIndex={-1} >
                                    <TableCell>
                                    <Grid container spacing={2} className='' justifyContent="center">
                                            <Grid item xs={12} sm={12} md={12} lg={12} className='' >
                                                <Typography component="div" sx={{ color: 'black', fontWeight: 'bold', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, } }} className='' >
                                                    施設.事業所類型
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </TableCell>
                                    <TableCell>
                                    <Grid container spacing={2} className='' justifyContent="center">
                                            <Grid item xs={12} sm={12} md={12} lg={12} className='' >
                                                <Typography component="div" sx={{ color: 'black', fontWeight: 'bold', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, } }} className='' >
                                                いちざきみんなの家
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </TableCell>
                                </TableRow>
                                <TableRow hover role="checkbox" tabIndex={-1} >
                                    <TableCell>
                                    <Grid container spacing={2} className='' justifyContent="center">
                                            <Grid item xs={12} sm={12} md={12} lg={12} className='' >
                                                <Typography component="div" sx={{ color: 'black', fontWeight: 'bold', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, } }} className='' >
                                                法人住所
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </TableCell>
                                    <TableCell>
                                    <Grid container spacing={2} className='' justifyContent="center">
                                            <Grid item xs={12} sm={12} md={12} lg={12} className='' >
                                                <Typography component="div" sx={{ color: 'black', fontWeight: 'bold', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, } }} className='' >
                                                〒 881-0032
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                        <Grid container spacing={2} className='' justifyContent="center">
                                            <Grid item xs={12} sm={12} md={12} lg={12} className='' >
                                                <Typography component="div" sx={{ color: 'black', fontWeight: 'bold', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, } }} className='' >
                                                宮﨑県西都市白馬町3番地
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </TableCell>
                                </TableRow>
                                <TableRow hover role="checkbox" tabIndex={-1} >
                                    <TableCell>
                                    <Grid container spacing={2} className='' justifyContent="center">
                                            <Grid item xs={12} sm={12} md={12} lg={12} className='' >
                                                <Typography component="div" sx={{ color: 'black', fontWeight: 'bold', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, } }} className='' >
                                                法人名
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </TableCell>
                                    <TableCell>
                                    <Grid container spacing={2} className='' justifyContent="center">
                                            <Grid item xs={12} sm={12} md={12} lg={12} className='' >
                                                <Typography component="div" sx={{ color: 'black', fontWeight: 'bold', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, } }} className='' >
                                                社会福祉法人つばさ福祉会理事長
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </TableCell>

                                </TableRow>
                                <TableRow hover role="checkbox" tabIndex={-1} >
                                    <TableCell>
                                    <Grid container spacing={2} className='' justifyContent="center">
                                            <Grid item xs={12} sm={12} md={12} lg={12} className='' >
                                                <Typography component="div" sx={{ color: 'black', fontWeight: 'bold', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, } }} className='' >
                                                代表者職.氏名
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </TableCell>
                                    <TableCell>
                                    <Grid container spacing={2} className='' justifyContent="center">
                                            <Grid item xs={12} sm={12} md={12} lg={12} className='' >
                                                <Typography component="div" sx={{ color: 'black', fontWeight: 'bold', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, } }} className='' >
                                                渡部圭子
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </TableCell>

                                </TableRow>
                                <TableRow hover role="checkbox" tabIndex={-1} >
                                    <TableCell>
                                    <Grid container spacing={2} className='' justifyContent="center">
                                            <Grid item xs={12} sm={12} md={12} lg={12} className='' >
                                                <Typography component="div" sx={{ color: 'black', fontWeight: 'bold', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, } }} className='' >
                                                申請に関する担当者氏名
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </TableCell>
                                    <TableCell>
                                    <Grid container spacing={2} className='' justifyContent="center">
                                            <Grid item xs={12} sm={12} md={12} lg={12} className='' >
                                                <Typography component="div" sx={{ color: 'black', fontWeight: 'bold', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, } }} className='' >
                                                いちざきみんなの家 事務員 三宅
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </TableCell>

                                </TableRow>
                                <TableRow hover role="checkbox" tabIndex={-1} >
                                    <TableCell>
                                    <Grid container spacing={2} className='' justifyContent="center">
                                            <Grid item xs={12} sm={12} md={12} lg={12} className='' >
                                                <Typography component="div" sx={{ color: 'black', fontWeight: 'bold', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, } }} className='' >
                                                連絡先電話番号
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </TableCell>
                                    <TableCell>
                                    <Grid container spacing={2} className='' justifyContent="center">
                                            <Grid item xs={12} sm={12} md={12} lg={12} className='' >
                                                <Typography component="div" sx={{ color: 'black', fontWeight: 'bold', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, } }} className='' >
                                                092-406-8215
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </TableCell>

                                </TableRow>
                                <TableRow hover role="checkbox" tabIndex={-1} >
                                    <TableCell>
                                    <Grid container spacing={2} className='' justifyContent="center">
                                            <Grid item xs={12} sm={12} md={12} lg={12} className='' >
                                                <Typography component="div" sx={{ color: 'black', fontWeight: 'bold', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, } }} className='' >
                                                連絡先E-mail
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </TableCell>
                                    <TableCell>
                                    <Grid container spacing={2} className='' justifyContent="center">
                                            <Grid item xs={12} sm={12} md={12} lg={12} className='' >
                                                <Typography component="div" sx={{ color: 'black', fontWeight: 'bold', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, } }} className='' >
                                                info-ichizaki@tsubasa-f.or.jp
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </TableCell>

                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
            </Grid>
            {/* end table excretion */}
        </div>
    )
}

export default infotable