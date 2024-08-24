import { Grid, Paper, Table, TableCell, TableContainer, TableHead, TableRow, TextField, Typography, TableBody, Divider } from "@mui/material";


export default function FundingPlan() {

  return (
    <>

      {/* Start 園番号 Grid */}
      <Grid container className='pt-5' justifyContent="end">
        <Grid item xs={4.65} sm={2.5} md={2} lg={1}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 pr-3 text-end'>
            園番号 :
          </Typography>
        </Grid>
        <Grid item xs={5} sm={4} md={3} lg={2}>
          <Typography fontWeight="bold" sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-start'>
            いちざきみんなの家
          </Typography>
        </Grid>
      </Grid>
      {/* End 園番号 Grid */}

      {/* Start 資金計画書 Grid */}
      <Grid container className='pt-3' justifyContent="center">
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Divider>資金計画書</Divider>
        </Grid>
      </Grid>
      {/* End 資金計画書 Grid */}

      {/* Start (单位:円) Grid */}
      <Grid container className='pt-5' justifyContent="end">
        <Grid item xs={5} sm={4} md={3} lg={2}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
            (单位:円)
          </Typography>
        </Grid>
      </Grid>
      {/* End (单位:円) Grid */}

      {/* Start Table 1 */}
      <Grid container justifyContent="center">
        <TableContainer component={Paper} className="mt-2" sx={{ width: { xs: 'auto', sm: 'auto', md: 'auto', lg: 'auto' } }}>
          <Table sx={{ minWidth: 1100 }} aria-label="simple table" size="small" >
            <TableHead>
              <TableRow>
                <TableCell style={{ fontWeight: "bold" }} rowSpan={2} align="left">項目</TableCell>
                <TableCell style={{ fontWeight: "bold" }} colSpan={8} align="center">月別</TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{ fontWeight: "bold", width: 120 }} align="center">4月</TableCell>
                <TableCell style={{ fontWeight: "bold", width: 120 }} align="center">5月</TableCell>
                <TableCell style={{ fontWeight: "bold", width: 120 }} align="center">6月</TableCell>
                <TableCell style={{ fontWeight: "bold", width: 120 }} align="center">7月</TableCell>
                <TableCell style={{ fontWeight: "bold", width: 120 }} align="center">8月</TableCell>
                <TableCell style={{ fontWeight: "bold", width: 120 }} align="center">9月</TableCell>
                <TableCell style={{ fontWeight: "bold", width: 120 }} align="center">10月</TableCell>
                <TableCell style={{ fontWeight: "bold", width: 120 }} align="center">11月</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* Start Rows 1 */}
              <TableRow hover role="checkbox" tabIndex={-1}>
                <TableCell align="left">補助金</TableCell>
                <TableCell align="left">
                  <TextField
                    id="subsidy-april"
                    name="subsidy-april"
                    type="text"
                    variant="standard"
                    size="small"
                    sx={{ 
                      backgroundColor: '#fcf6c7', 
                      '& input': { textAlign: 'right' } 
                    }}
                  />
                </TableCell>
                <TableCell align="left" >
                  <TextField
                    id="subsidy-may"
                    name="subsidy-may"
                    type="text"
                    variant="standard"
                    size="small"
                    sx={{ 
                      backgroundColor: '#fcf6c7', 
                      '& input': { textAlign: 'right' } 
                    }}
                  />
                </TableCell>
                <TableCell align="left" >
                  <TextField
                    className='w-full'
                    id="subsidy-june"
                    name="subsidy-june"
                    label=""
                    type="text"
                    variant="standard"
                    size='small'
                    sx={{ 
                      backgroundColor: '#fcf6c7', 
                      '& input': { textAlign: 'right' } 
                    }}
                  />
                </TableCell>
                <TableCell align="left" >
                  <TextField
                    className='w-full'
                    id="subsidy-july"
                    name="subsidy-july"
                    label=""
                    type="text"
                     variant="standard"
                    size='small'
                    sx={{ 
                      backgroundColor: '#fcf6c7', 
                      '& input': { textAlign: 'right' } 
                    }}
                  />
                </TableCell>
                <TableCell align="left" >
                  <TextField
                    className='w-full'
                    id="subsidy-august"
                    name="subsidy-august"
                    label=""
                    type="text"
                     variant="standard"
                    size='small'
                    sx={{ 
                      backgroundColor: '#fcf6c7', 
                      '& input': { textAlign: 'right' } 
                    }}
                  />
                </TableCell>
                <TableCell align="left" >
                  <TextField
                    className='w-full'
                    id="subsidy-september"
                    name="subsidy-september"
                    label=""
                    type="text"
                     variant="standard"
                    size='small'
                    sx={{ 
                      backgroundColor: '#fcf6c7', 
                      '& input': { textAlign: 'right' } 
                    }}
                  />
                </TableCell>
                <TableCell align="left" >
                  <TextField
                    className='w-full'
                    id="subsidy-october"
                    name="subsidy-october"
                    label=""
                    type="text"
                     variant="standard"
                    size='small'
                    sx={{ 
                      backgroundColor: '#fcf6c7', 
                      '& input': { textAlign: 'right' } 
                    }}
                  />
                </TableCell>
                <TableCell align="left" >
                  <TextField
                    className='w-full'
                    id="subsidy-november"
                    name="subsidy-november"
                    label=""
                    type="text"
                     variant="standard"
                    size='small'
                    sx={{ 
                      backgroundColor: '#fcf6c7', 
                      '& input': { textAlign: 'right' } 
                    }}
                  />
                </TableCell>
              </TableRow>
              {/* End Rows 1 */}

              {/* Start Rows 2 */}
              <TableRow hover role="checkbox" tabIndex={-1}>
                <TableCell align="left">自己資金</TableCell>
                <TableCell align="left" >
                  <TextField
                    className='w-full'
                    id="own-resources-april"
                    name="own-resource-april"
                    label=""
                    type="text"
                     variant="standard"
                    size='small'
                    sx={{ 
                      backgroundColor: '#fcf6c7', 
                      '& input': { textAlign: 'right' } 
                    }}
                  />
                </TableCell>
                <TableCell align="left" >
                  <TextField
                    className='w-full'
                    id="own-resource-may"
                    name="own-resource-may"
                    label=""
                    type="text"
                     variant="standard"
                    size='small'
                    sx={{ 
                      backgroundColor: '#fcf6c7', 
                      '& input': { textAlign: 'right' } 
                    }}
                  />
                </TableCell>
                <TableCell align="left" >
                  <TextField
                    className='w-full'
                    id="own-resource-june"
                    name="own-resource-june"
                    label=""
                    type="text"
                     variant="standard"
                    size='small'
                    sx={{ 
                      backgroundColor: '#fcf6c7', 
                      '& input': { textAlign: 'right' } 
                    }}
                  />
                </TableCell>
                <TableCell align="left" >
                  <TextField
                    className='w-full'
                    id="own-resource-july"
                    name="own-resource-july"
                    label=""
                    type="text"
                     variant="standard"
                    size='small'
                    sx={{ 
                      backgroundColor: '#fcf6c7', 
                      '& input': { textAlign: 'right' } 
                    }}
                  />
                </TableCell>
                <TableCell align="left" >
                  <TextField
                    className='w-full'
                    id="own-resource-august"
                    name="own-resource-august"
                    label=""
                    type="text"
                     variant="standard"
                    size='small'
                    sx={{ 
                      backgroundColor: '#fcf6c7', 
                      '& input': { textAlign: 'right' } 
                    }}
                  />
                </TableCell>
                <TableCell align="left" >
                  <TextField
                    className='w-full'
                    id="own-resource-september"
                    name="own-resource-september"
                    label=""
                    type="text"
                     variant="standard"
                    size='small'
                    sx={{ 
                      backgroundColor: '#fcf6c7', 
                      '& input': { textAlign: 'right' } 
                    }}
                  />
                </TableCell>
                <TableCell align="left" >
                  <TextField
                    className='w-full'
                    id="own-resource-october"
                    name="own-resource-october"
                    label=""
                    type="text"
                     variant="standard"
                    size='small'
                    sx={{ 
                      backgroundColor: '#fcf6c7', 
                      '& input': { textAlign: 'right' } 
                    }}
                  />
                </TableCell>
                <TableCell align="left" >
                  <TextField
                    className='w-full'
                    id="own-resource-november"
                    name="own-resource-november"
                    label=""
                    type="text"
                     variant="standard"
                    size='small'
                    sx={{ 
                      backgroundColor: '#fcf6c7', 
                      '& input': { textAlign: 'right' } 
                    }}
                  />
                </TableCell>
              </TableRow>
              {/* End Rows 2 */}

              {/* Start Rows 3 */}
              <TableRow hover role="checkbox" tabIndex={-1}>
                <TableCell align="left">収入計</TableCell>
                <TableCell align="left" >
                  <TextField
                    className='w-full'
                    id="total-income-april"
                    name="total-income-april"
                    label=""
                    type="text"
                     variant="standard"
                    size='small'
                    sx={{ 
                      backgroundColor: '#fcf6c7', 
                      '& input': { textAlign: 'right' } 
                    }}
                  />
                </TableCell>
                <TableCell align="left" >
                  <TextField
                    className='w-full'
                    id="total-income-may"
                    name="total-income-may"
                    label=""
                    type="text"
                     variant="standard"
                    size='small'
                    sx={{ 
                      backgroundColor: '#fcf6c7', 
                      '& input': { textAlign: 'right' } 
                    }}
                  />
                </TableCell>
                <TableCell align="left" >
                  <TextField
                    className='w-full'
                    id="total-income-june"
                    name="total-income-june"
                    label=""
                    type="text"
                     variant="standard"
                    size='small'
                    sx={{ 
                      backgroundColor: '#fcf6c7', 
                      '& input': { textAlign: 'right' } 
                    }}
                  />
                </TableCell>
                <TableCell align="left" >
                  <TextField
                    className='w-full'
                    id="total-income-july"
                    name="total-income-july"
                    label=""
                    type="text"
                     variant="standard"
                    size='small'
                    sx={{ 
                      backgroundColor: '#fcf6c7', 
                      '& input': { textAlign: 'right' } 
                    }}
                  />
                </TableCell>
                <TableCell align="left" >
                  <TextField
                    className='w-full'
                    id="total-income-august"
                    name="total-income-august"
                    label=""
                    type="text"
                     variant="standard"
                    size='small'
                    sx={{ 
                      backgroundColor: '#fcf6c7', 
                      '& input': { textAlign: 'right' } 
                    }}
                  />
                </TableCell>
                <TableCell align="left" >
                  <TextField
                    className='w-full'
                    id="total-income-september"
                    name="total-income-september"
                    label=""
                    type="text"
                     variant="standard"
                    size='small'
                    sx={{ 
                      backgroundColor: '#fcf6c7', 
                      '& input': { textAlign: 'right' } 
                    }}
                  />
                </TableCell>
                <TableCell align="left" >
                  <TextField
                    className='w-full'
                    id="total-income-october"
                    name="total-income-october"
                    label=""
                    type="text"
                     variant="standard"
                    size='small'
                    sx={{ 
                      backgroundColor: '#fcf6c7', 
                      '& input': { textAlign: 'right' } 
                    }}
                  />
                </TableCell>
                <TableCell align="left" >
                  <TextField
                    className='w-full'
                    id="total-income-november"
                    name="total-income-november"
                    label=""
                    type="text"
                     variant="standard"
                    size='small'
                    sx={{ 
                      backgroundColor: '#fcf6c7', 
                      '& input': { textAlign: 'right' } 
                    }}
                  />
                </TableCell>
              </TableRow>
              {/* End Rows 3 */}

              {/* Start Rows 4 */}
              <TableRow hover role="checkbox" tabIndex={-1}>
                <TableCell align="left">人件費等</TableCell>
                <TableCell align="left" >
                  <TextField
                    className='w-full'
                    id="personnel-expenses-april"
                    name="personnel-expenses-april"
                    label=""
                    type="text"
                     variant="standard"
                    size='small'
                    sx={{ 
                      backgroundColor: '#fcf6c7', 
                      '& input': { textAlign: 'right' } 
                    }}
                  />
                </TableCell>
                <TableCell align="left" >
                  <TextField
                    className='w-full'
                    id="personnel-expenses-may"
                    name="personnel-expenses-may"
                    label=""
                    type="text"
                     variant="standard"
                    size='small'
                    sx={{ 
                      backgroundColor: '#fcf6c7', 
                      '& input': { textAlign: 'right' } 
                    }}
                  />
                </TableCell>
                <TableCell align="left" >
                  <TextField
                    className='w-full'
                    id="personnel-expenses-june"
                    name="personnel-expenses-june"
                    label=""
                    type="text"
                     variant="standard"
                    size='small'
                    sx={{ 
                      backgroundColor: '#fcf6c7', 
                      '& input': { textAlign: 'right' } 
                    }}
                  />
                </TableCell>
                <TableCell align="left" >
                  <TextField
                    className='w-full'
                    id="personnel-expenses-july"
                    name="personnel-expenses-july"
                    label=""
                    type="text"
                     variant="standard"
                    size='small'
                    sx={{ 
                      backgroundColor: '#fcf6c7', 
                      '& input': { textAlign: 'right' } 
                    }}
                  />
                </TableCell>
                <TableCell align="left" >
                  <TextField
                    className='w-full'
                    id="personnel-expenses-august"
                    name="personnel-expenses-august"
                    label=""
                    type="text"
                     variant="standard"
                    size='small'
                    sx={{ 
                      backgroundColor: '#fcf6c7', 
                      '& input': { textAlign: 'right' } 
                    }}
                  />
                </TableCell>
                <TableCell align="left" >
                  <TextField
                    className='w-full'
                    id="personnel-expenses-september"
                    name="personnel-expenses-september"
                    label=""
                    type="text"
                     variant="standard"
                    size='small'
                    sx={{ 
                      backgroundColor: '#fcf6c7', 
                      '& input': { textAlign: 'right' } 
                    }}
                  />
                </TableCell>
                <TableCell align="left" >
                  <TextField
                    className='w-full'
                    id="personnel-expenses-october"
                    name="personnel-expenses-october"
                    label=""
                    type="text"
                     variant="standard"
                    size='small'
                    sx={{ 
                      backgroundColor: '#fcf6c7', 
                      '& input': { textAlign: 'right' } 
                    }}
                  />
                </TableCell>
                <TableCell align="left" >
                  <TextField
                    className='w-full'
                    id="personnel-expenses-november"
                    name="personnel-expenses-november"
                    label=""
                    type="text"
                     variant="standard"
                    size='small'
                    sx={{ 
                      backgroundColor: '#fcf6c7', 
                      '& input': { textAlign: 'right' } 
                    }}
                  />
                </TableCell>
              </TableRow>
              {/* End Rows 4 */}

              {/* Start Rows 5 */}
              <TableRow hover role="checkbox" tabIndex={-1}>
                <TableCell align="left">支出計</TableCell>
                <TableCell align="left" >
                  <TextField
                    className='w-full'
                    id="total-expenditure-april"
                    name="total-expenditure-april"
                    label=""
                    type="text"
                     variant="standard"
                    size='small'
                    sx={{ 
                      backgroundColor: '#fcf6c7', 
                      '& input': { textAlign: 'right' } 
                    }}
                  />
                </TableCell>
                <TableCell align="left" >
                  <TextField
                    className='w-full'
                    id="total-expenditure-may"
                    name="total-expenditure-may"
                    label=""
                    type="text"
                     variant="standard"
                    size='small'
                    sx={{ 
                      backgroundColor: '#fcf6c7', 
                      '& input': { textAlign: 'right' } 
                    }}
                  />
                </TableCell>
                <TableCell align="left" >
                  <TextField
                    className='w-full'
                    id="total-expenditure-june"
                    name="total-expenditure-june"
                    label=""
                    type="text"
                     variant="standard"
                    size='small'
                    sx={{ 
                      backgroundColor: '#fcf6c7', 
                      '& input': { textAlign: 'right' } 
                    }}
                  />
                </TableCell>
                <TableCell align="left" >
                  <TextField
                    className='w-full'
                    id="total-expenditure-july"
                    name="total-expenditure-july"
                    label=""
                    type="text"
                     variant="standard"
                    size='small'
                    sx={{ 
                      backgroundColor: '#fcf6c7', 
                      '& input': { textAlign: 'right' } 
                    }}
                  />
                </TableCell>
                <TableCell align="left" >
                  <TextField
                    className='w-full'
                    id="total-expenditure-august"
                    name="total-expenditure-august"
                    label=""
                    type="text"
                     variant="standard"
                    size='small'
                    sx={{ 
                      backgroundColor: '#fcf6c7', 
                      '& input': { textAlign: 'right' } 
                    }}
                  />
                </TableCell>
                <TableCell align="left" >
                  <TextField
                    className='w-full'
                    id="total-expenditure-september"
                    name="total-expenditure-september"
                    label=""
                    type="text"
                     variant="standard"
                    size='small'
                    sx={{ 
                      backgroundColor: '#fcf6c7', 
                      '& input': { textAlign: 'right' } 
                    }}
                  />
                </TableCell>
                <TableCell align="left" >
                  <TextField
                    className='w-full'
                    id="total-expenditure-october"
                    name="total-expenditure-october"
                    label=""
                    type="text"
                     variant="standard"
                    size='small'
                    sx={{ 
                      backgroundColor: '#fcf6c7', 
                      '& input': { textAlign: 'right' } 
                    }}
                  />
                </TableCell>
                <TableCell align="left" >
                  <TextField
                    className='w-full'
                    id="total-expenditure-november"
                    name="total-expenditure-november"
                    label=""
                    type="text"
                     variant="standard"
                    size='small'
                    sx={{ 
                      backgroundColor: '#fcf6c7', 
                      '& input': { textAlign: 'right' } 
                    }}
                  />
                </TableCell>
              </TableRow>
              {/* End Rows 5 */}

              {/* Start Rows 6 */}
              <TableRow hover role="checkbox" tabIndex={-1}>
                <TableCell align="left">差引收支</TableCell>
                <TableCell align="left" >
                  <TextField
                    className='w-full'
                    id="net-income-april"
                    name="net-income-april"
                    label=""
                    type="text"
                     variant="standard"
                    size='small'
                    sx={{ 
                      backgroundColor: '#fcf6c7', 
                      '& input': { textAlign: 'right' } 
                    }}
                  />
                </TableCell>
                <TableCell align="left" >
                  <TextField
                    className='w-full'
                    id="net-income-may"
                    name="net-income-may"
                    label=""
                    type="text"
                     variant="standard"
                    size='small'
                    sx={{ 
                      backgroundColor: '#fcf6c7', 
                      '& input': { textAlign: 'right' } 
                    }}
                  />
                </TableCell>
                <TableCell align="left" >
                  <TextField
                    className='w-full'
                    id="net-income-june"
                    name="net-income-june"
                    label=""
                    type="text"
                     variant="standard"
                    size='small'
                    sx={{ 
                      backgroundColor: '#fcf6c7', 
                      '& input': { textAlign: 'right' } 
                    }}
                  />
                </TableCell>
                <TableCell align="left" >
                  <TextField
                    className='w-full'
                    id="net-income-july"
                    name="net-income-july"
                    label=""
                    type="text"
                     variant="standard"
                    size='small'
                    sx={{ 
                      backgroundColor: '#fcf6c7', 
                      '& input': { textAlign: 'right' } 
                    }}
                  />
                </TableCell>
                <TableCell align="left" >
                  <TextField
                    className='w-full'
                    id="net-income-august"
                    name="net-income-august"
                    label=""
                    type="text"
                     variant="standard"
                    size='small'
                    sx={{ 
                      backgroundColor: '#fcf6c7', 
                      '& input': { textAlign: 'right' } 
                    }}
                  />
                </TableCell>
                <TableCell align="left" >
                  <TextField
                    className='w-full'
                    id="net-income-september"
                    name="net-income-september"
                    label=""
                    type="text"
                     variant="standard"
                    size='small'
                    sx={{ 
                      backgroundColor: '#fcf6c7', 
                      '& input': { textAlign: 'right' } 
                    }}
                  />
                </TableCell>
                <TableCell align="left" >
                  <TextField
                    className='w-full'
                    id="net-income-october"
                    name="net-income-october"
                    label=""
                    type="text"
                     variant="standard"
                    size='small'
                    sx={{ 
                      backgroundColor: '#fcf6c7', 
                      '& input': { textAlign: 'right' } 
                    }}
                  />
                </TableCell>
                <TableCell align="left" >
                  <TextField
                    className='w-full'
                    id="net-income-november"
                    name="net-income-november"
                    label=""
                    type="text"
                     variant="standard"
                    size='small'
                    sx={{ 
                      backgroundColor: '#fcf6c7', 
                      '& input': { textAlign: 'right' } 
                    }}
                  />
                </TableCell>
              </TableRow>
              {/* End Rows 6 */}

              {/* Start Rows 7 */}
              <TableRow hover role="checkbox" tabIndex={-1}>
                <TableCell align="left">累計</TableCell>
                <TableCell align="left" >
                  <TextField
                    className='w-full'
                    id="cumulative-april"
                    name="cumulative-april"
                    label=""
                    type="text"
                     variant="standard"
                    size='small'
                    sx={{ 
                      backgroundColor: '#fcf6c7', 
                      '& input': { textAlign: 'right' } 
                    }}
                  />
                </TableCell>
                <TableCell align="left" >
                  <TextField
                    className='w-full'
                    id="cumulative-may"
                    name="cumulative-may"
                    label=""
                    type="text"
                     variant="standard"
                    size='small'
                    sx={{ 
                      backgroundColor: '#fcf6c7', 
                      '& input': { textAlign: 'right' } 
                    }}
                  />
                </TableCell>
                <TableCell align="left" >
                  <TextField
                    className='w-full'
                    id="cumulative-june"
                    name="cumulative-june"
                    label=""
                    type="text"
                     variant="standard"
                    size='small'
                    sx={{ 
                      backgroundColor: '#fcf6c7', 
                      '& input': { textAlign: 'right' } 
                    }}
                  />
                </TableCell>
                <TableCell align="left" >
                  <TextField
                    className='w-full'
                    id="cumulative-july"
                    name="cumulative-july"
                    label=""
                    type="text"
                     variant="standard"
                    size='small'
                    sx={{ 
                      backgroundColor: '#fcf6c7', 
                      '& input': { textAlign: 'right' } 
                    }}
                  />
                </TableCell>
                <TableCell align="left" >
                  <TextField
                    className='w-full'
                    id="cumulative-august"
                    name="cumulative-august"
                    label=""
                    type="text"
                     variant="standard"
                    size='small'
                    sx={{ 
                      backgroundColor: '#fcf6c7', 
                      '& input': { textAlign: 'right' } 
                    }}
                  />
                </TableCell>
                <TableCell align="left" >
                  <TextField
                    className='w-full'
                    id="cumulative-september"
                    name="cumulative-september"
                    label=""
                    type="text"
                     variant="standard"
                    size='small'
                    sx={{ 
                      backgroundColor: '#fcf6c7', 
                      '& input': { textAlign: 'right' } 
                    }}
                  />
                </TableCell>
                <TableCell align="left" >
                  <TextField
                    className='w-full'
                    id="cumulative-october"
                    name="cumulative-october"
                    label=""
                    type="text"
                     variant="standard"
                    size='small'
                    sx={{ 
                      backgroundColor: '#fcf6c7', 
                      '& input': { textAlign: 'right' } 
                    }}
                  />
                </TableCell>
                <TableCell align="left" >
                  <TextField
                    className='w-full'
                    id="cumulative-november"
                    name="cumulative-november"
                    label=""
                    type="text"
                     variant="standard"
                    size='small'
                    sx={{ 
                      backgroundColor: '#fcf6c7', 
                      '& input': { textAlign: 'right' } 
                    }}
                  />
                </TableCell>
              </TableRow>
              {/* End Rows 7 */}

            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      {/* End Table 1 */}

    </>
  );
}
