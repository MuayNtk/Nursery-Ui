import { FormControl, Grid, InputLabel, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, } from '@mui/material'

function Highpressure() {
    return (
        <div>
            <Grid container className='h-14' justifyContent="start" bgcolor={"#DEDEDE"}>
                <Grid item xs={3} sm={2.5} md={1.5} lg={1} className='pt-2 ' >
                    <Typography
                        component="div"
                        sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, fontWeight: 'bold' }}
                        className='flex justify-start h-10 pt-2 pl-5 w-[100%]'>
                        電気料金:
                    </Typography>
                </Grid>
                <Grid item xs={3} sm={3} md={2} lg={1} className='pt-2 pl-2' >
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
                            <MenuItem value={1}>高压</MenuItem>
                            <MenuItem value={2}>低压</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={4} sm={3} md={4} lg={2} className='pt-2 ' >
                    <Typography
                        component="div"
                        sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, fontWeight: 'bold' }}
                        className='flex justify-start h-10 pt-2 pl-5 w-[100%]'>
                        種別(高圧/低圧)
                    </Typography>
                </Grid>

                {/* Start Table */}
            </Grid>
            <Grid container className='' justifyContent="center">
                <TableContainer component={Paper} className="mt-5" sx={{ width: { xs: 'auto', sm: 'auto', md: 'auto', lg: 10000 } }}>
                    <Table sx={{ minWidth: 2000 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell style={{ width: 80, fontWeight: 'bold' }}></TableCell>
                                <TableCell style={{ width: 50, fontWeight: 'bold' }} align="center">区分</TableCell>
                                <TableCell style={{ width: 50, fontWeight: 'bold' }} align="center">4月</TableCell>
                                <TableCell style={{ width: 50, fontWeight: 'bold' }} align="center">5月</TableCell>
                                <TableCell style={{ width: 50, fontWeight: 'bold' }} align="center">6月</TableCell>
                                <TableCell style={{ width: 50, fontWeight: 'bold' }} align="center">7月</TableCell>
                                <TableCell style={{ width: 50, fontWeight: 'bold' }} align="center">8月</TableCell>
                                <TableCell style={{ width: 50, fontWeight: 'bold' }} align="center">9月</TableCell>
                                <TableCell style={{ width: 50, fontWeight: 'bold' }} align="center">10月</TableCell>
                                <TableCell style={{ width: 50, fontWeight: 'bold' }} align="center">11月</TableCell>
                                <TableCell style={{ width: 50, fontWeight: 'bold' }} align="center">12月</TableCell>
                                <TableCell style={{ width: 50, fontWeight: 'bold' }} align="center">1月</TableCell>
                                <TableCell style={{ width: 50, fontWeight: 'bold' }} align="center">2月</TableCell>
                                <TableCell style={{ width: 50, fontWeight: 'bold' }} align="center">3月</TableCell>
                                <TableCell style={{ width: 50, fontWeight: 'bold' }} align="center">合計</TableCell>
                                <TableCell style={{ width: 50, fontWeight: 'bold' }} align="center">平均</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow hover role="checkbox" tabIndex={-1} >
                                <TableCell ></TableCell>
                                <TableCell align="left">金額(円)</TableCell>
                                <TableCell align="right"></TableCell>
                                <TableCell align="right"></TableCell>
                                <TableCell align="right"></TableCell>
                                <TableCell align="right"></TableCell>
                                <TableCell align="right"></TableCell>
                                <TableCell align="right"></TableCell>
                                <TableCell align="right"></TableCell>
                                <TableCell align="right"></TableCell>
                                <TableCell align="right"></TableCell>
                                <TableCell align="right"></TableCell>
                                <TableCell align="right"></TableCell>
                                <TableCell align="right"></TableCell>
                                <TableCell style={{ backgroundColor: "#FEFFE3" }} align="right"></TableCell>
                                <TableCell style={{ backgroundColor: "#FEFFE3" }} align="right"></TableCell>
                            </TableRow>
                            <TableRow hover role="checkbox" tabIndex={-1} >
                                <TableCell align="left">R3年度</TableCell>
                                <TableCell align="left">使用量(kwh)</TableCell>
                                <TableCell  align="right"></TableCell>
                                <TableCell  align="right"></TableCell>
                                <TableCell  align="right"></TableCell>
                                <TableCell  align="right"></TableCell>
                                <TableCell  align="right"></TableCell>
                                <TableCell  align="right"></TableCell>
                                <TableCell  align="right"></TableCell>
                                <TableCell  align="right"></TableCell>
                                <TableCell  align="right"></TableCell>
                                <TableCell  align="right"></TableCell>
                                <TableCell  align="right"></TableCell>
                                <TableCell  align="right"></TableCell>
                                <TableCell style={{ backgroundColor: "#FEFFE3" }} align="right"></TableCell>
                                <TableCell style={{ backgroundColor: "#FEFFE3" }} align="right"></TableCell>
                            </TableRow>
                            <TableRow hover role="checkbox" tabIndex={-1} >
                                <TableCell ></TableCell>
                                <TableCell align="left">单価(円/kwh)</TableCell>
                                <TableCell style={{ backgroundColor: "#FEFFE3" }} align="right"></TableCell>
                                <TableCell style={{ backgroundColor: "#FEFFE3" }} align="right"></TableCell>
                                <TableCell style={{ backgroundColor: "#FEFFE3" }} align="right"></TableCell>
                                <TableCell style={{ backgroundColor: "#FEFFE3" }} align="right"></TableCell>
                                <TableCell style={{ backgroundColor: "#FEFFE3" }} align="right"></TableCell>
                                <TableCell style={{ backgroundColor: "#FEFFE3" }} align="right"></TableCell>
                                <TableCell style={{ backgroundColor: "#FEFFE3" }} align="right"></TableCell>
                                <TableCell style={{ backgroundColor: "#FEFFE3" }} align="right"></TableCell>
                                <TableCell style={{ backgroundColor: "#FEFFE3" }} align="right"></TableCell>
                                <TableCell style={{ backgroundColor: "#FEFFE3" }} align="right"></TableCell>
                                <TableCell style={{ backgroundColor: "#FEFFE3" }} align="right"></TableCell>
                                <TableCell style={{ backgroundColor: "#FEFFE3" }} align="right"></TableCell>
                                <TableCell style={{ backgroundColor: "#FEFFE3" }} align="right"></TableCell>
                                <TableCell style={{ backgroundColor: "#FEFFE3" }} align="right"></TableCell>
                            </TableRow>
                            <TableRow hover role="checkbox" tabIndex={-1} >
                                <TableCell ></TableCell>
                                <TableCell align="left">金額(円)</TableCell>
                                <TableCell align="right"></TableCell>
                                <TableCell align="right"></TableCell>
                                <TableCell align="right"></TableCell>
                                <TableCell align="right"></TableCell>
                                <TableCell align="right"></TableCell>
                                <TableCell align="right"></TableCell>
                                <TableCell align="right"></TableCell>
                                <TableCell align="right"></TableCell>
                                <TableCell align="right"></TableCell>
                                <TableCell align="right"></TableCell>
                                <TableCell align="right"></TableCell>
                                <TableCell align="right"></TableCell>
                                <TableCell style={{ backgroundColor: "#FEFFE3" }} align="right"></TableCell>
                                <TableCell style={{ backgroundColor: "#FEFFE3" }} align="right"></TableCell>
                            </TableRow>
                            <TableRow hover role="checkbox" tabIndex={-1} >
                                <TableCell align="left">R4年度</TableCell>
                                <TableCell align="left">使用量(kwh)</TableCell>
                                <TableCell  align="right"></TableCell>
                                <TableCell  align="right"></TableCell>
                                <TableCell  align="right"></TableCell>
                                <TableCell  align="right"></TableCell>
                                <TableCell  align="right"></TableCell>
                                <TableCell  align="right"></TableCell>
                                <TableCell  align="right"></TableCell>
                                <TableCell  align="right"></TableCell>
                                <TableCell  align="right"></TableCell>
                                <TableCell  align="right"></TableCell>
                                <TableCell  align="right"></TableCell>
                                <TableCell  align="right"></TableCell>
                                <TableCell style={{ backgroundColor: "#FEFFE3" }} align="right"></TableCell>
                                <TableCell style={{ backgroundColor: "#FEFFE3" }} align="right"></TableCell>
                            </TableRow>
                            <TableRow hover role="checkbox" tabIndex={-1} >
                                <TableCell ></TableCell>
                                <TableCell align="left">单価(円/kwh)</TableCell>
                                <TableCell style={{ backgroundColor: "#FEFFE3" }} align="right"></TableCell>
                                <TableCell style={{ backgroundColor: "#FEFFE3" }} align="right"></TableCell>
                                <TableCell style={{ backgroundColor: "#FEFFE3" }} align="right"></TableCell>
                                <TableCell style={{ backgroundColor: "#FEFFE3" }} align="right"></TableCell>
                                <TableCell style={{ backgroundColor: "#FEFFE3" }} align="right"></TableCell>
                                <TableCell style={{ backgroundColor: "#FEFFE3" }} align="right"></TableCell>
                                <TableCell style={{ backgroundColor: "#FEFFE3" }} align="right"></TableCell>
                                <TableCell style={{ backgroundColor: "#FEFFE3" }} align="right"></TableCell>
                                <TableCell style={{ backgroundColor: "#FEFFE3" }} align="right"></TableCell>
                                <TableCell style={{ backgroundColor: "#FEFFE3" }} align="right"></TableCell>
                                <TableCell style={{ backgroundColor: "#FEFFE3" }} align="right"></TableCell>
                                <TableCell style={{ backgroundColor: "#FEFFE3" }} align="right"></TableCell>
                                <TableCell style={{ backgroundColor: "#FEFFE3" }} align="right"></TableCell>
                                <TableCell style={{ backgroundColor: "#FEFFE3" }} align="right"></TableCell>
                            </TableRow>
                            <TableRow hover role="checkbox" tabIndex={-1} >
                                <TableCell ></TableCell>
                                <TableCell align="left">金額(円)</TableCell>
                                <TableCell align="right"></TableCell>
                                <TableCell align="right"></TableCell>
                                <TableCell align="right"></TableCell>
                                <TableCell align="right"></TableCell>
                                <TableCell align="right"></TableCell>
                                <TableCell align="right"></TableCell>
                                <TableCell align="right"></TableCell>
                                <TableCell align="right"></TableCell>
                                <TableCell align="right"></TableCell>
                                <TableCell align="right"></TableCell>
                                <TableCell align="right"></TableCell>
                                <TableCell align="right"></TableCell>
                                <TableCell style={{ backgroundColor: "#FEFFE3" }} align="right"></TableCell>
                                <TableCell style={{ backgroundColor: "#FEFFE3" }} align="right"></TableCell>
                            </TableRow>
                            <TableRow hover role="checkbox" tabIndex={-1} >
                                <TableCell align="left">R5年度</TableCell>
                                <TableCell align="left">使用量(kwh)</TableCell>
                                <TableCell align="right"></TableCell>
                                <TableCell align="right"></TableCell>
                                <TableCell align="right"></TableCell>
                                <TableCell align="right"></TableCell>
                                <TableCell align="right"></TableCell>
                                <TableCell align="right"></TableCell>
                                <TableCell align="right"></TableCell>
                                <TableCell align="right"></TableCell>
                                <TableCell align="right"></TableCell>
                                <TableCell align="right"></TableCell>
                                <TableCell align="right"></TableCell>
                                <TableCell align="right"></TableCell>
                                <TableCell style={{ backgroundColor: "#FEFFE3" }} align="right"></TableCell>
                                <TableCell style={{ backgroundColor: "#FEFFE3" }} align="right"></TableCell>
                            </TableRow>
                            <TableRow hover role="checkbox" tabIndex={-1} >
                                <TableCell ></TableCell>
                                <TableCell align="left">单価(円/kwh)</TableCell>
                                <TableCell style={{ backgroundColor: "#FEFFE3" }} align="right"></TableCell>
                                <TableCell style={{ backgroundColor: "#FEFFE3" }} align="right"></TableCell>
                                <TableCell align="right"></TableCell>
                                <TableCell align="right"></TableCell>
                                <TableCell align="right"></TableCell>
                                <TableCell align="right"></TableCell>
                                <TableCell align="right"></TableCell>
                                <TableCell align="right"></TableCell>
                                <TableCell align="right"></TableCell>
                                <TableCell align="right"></TableCell>
                                <TableCell align="right"></TableCell>
                                <TableCell align="right"></TableCell>
                                <TableCell style={{ backgroundColor: "#FEFFE3" }} align="right"></TableCell>
                                <TableCell style={{ backgroundColor: "#FEFFE3" }} align="right"></TableCell>
                            </TableRow>


                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
            {/* End Table */}

           
        </div >
    )
}

export default Highpressure