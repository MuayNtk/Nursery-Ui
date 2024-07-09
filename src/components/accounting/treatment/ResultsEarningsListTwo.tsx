import { Grid, Paper, Table, TableCell, TableContainer, TableRow, Typography, TableBody, Divider, TableHead, TextField } from "@mui/material";


export default function ResultsEarningsListTwo() {

  return (
    <>
      <Typography
        component="div"
        sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, fontWeight: 'bold', }}
        className='flex justify-start h-11 pt-3 pl-5'
        bgcolor={"#CCF0FD"}>
        別紙様式 7 別添 2
      </Typography>

      {/* Start 施設・事業所名 Grid */}
      <Grid container spacing={2} className='pt-3' justifyContent="start">
        <Grid item xs={4.5} sm={4} md={4} lg={3}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
            施設・事業所名 :
          </Typography>
        </Grid>
        <Grid item xs={6} sm={7} md={6} lg={7}>
          <TextField id="school-number" name="school-number" type="text" size="small" fullWidth sx={{ backgroundColor: 'white' }} />
        </Grid>
      </Grid>
      {/* End 施設・事業所名 Grid */}

      <Divider className="pt-7" />

      {/* Start Table 2 */}
      <Grid container className='pt-3' justifyContent="center">
        <TableContainer component={Paper} className="mt-2" sx={{ width: { xs: 'auto', sm: 'auto', md: 'auto', lg: 'auto' } }}>
          <Table sx={{ minWidth: 1160 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell style={{ width: 60, fontWeight: "bold" }} align="left">番号</TableCell>
                <TableCell style={{ width: 100, fontWeight: "bold" }} align="left">都道府県名</TableCell>
                <TableCell style={{ width: 90, fontWeight: "bold" }} align="left">市町村名</TableCell>
                <TableCell style={{ width: 100, fontWeight: "bold" }} align="left">施設・事業所名*1</TableCell>
                <TableCell style={{ width: 100, fontWeight: "bold" }} align="left">他事業所への拠出額(円)</TableCell>
                <TableCell style={{ width: 100, fontWeight: "bold" }} align="left">うち基準年度からの増減額(円)</TableCell>
                <TableCell style={{ width: 100, fontWeight: "bold" }} align="left">他事業所からの受入額(円)</TableCell>
                <TableCell style={{ width: 100, fontWeight: "bold" }} align="left">うち基準年度からの増減額(円)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* Start Rows 1 */}
              <TableRow hover role="checkbox" tabIndex={-1}>
                <TableCell align="left">1</TableCell>
                <TableCell align="left">Sting</TableCell>
                <TableCell align="left">Sting</TableCell>
                <TableCell align="left">Sting</TableCell>
                <TableCell align="left">
                  <TextField
                    className='w-full'
                    id="management-10"
                    name="management-10"
                    type="text"
                    size='small'
                    sx={{
                      backgroundColor: "white",
                    }}
                  />
                </TableCell>
                <TableCell align="left">
                  <TextField
                    className='w-full'
                    id="management-10"
                    name="management-10"
                    type="text"
                    size='small'
                    sx={{
                      backgroundColor: "white",
                    }}
                  />
                </TableCell>
                <TableCell align="left">
                  <TextField
                    className='w-full'
                    id="management-10"
                    name="management-10"
                    type="text"
                    size='small'
                    sx={{
                      backgroundColor: "white",
                    }}
                  />
                </TableCell>
                <TableCell align="left">
                  <TextField
                    className='w-full'
                    id="management-10"
                    name="management-10"
                    type="text"
                    size='small'
                    sx={{
                      backgroundColor: "white",
                    }}
                  />
                </TableCell>
              </TableRow>
              {/* End Rows 1 */}

              {/* Start Rows 2 */}
              <TableRow hover role="checkbox" tabIndex={-1}>
                <TableCell align="left">2</TableCell>
                <TableCell align="left">Sting</TableCell>
                <TableCell align="left">Sting</TableCell>
                <TableCell align="left">Sting</TableCell>
                <TableCell align="left">
                  <TextField
                    className='w-full'
                    id="management-10"
                    name="management-10"
                    type="text"
                    size='small'
                    sx={{
                      backgroundColor: "white",
                    }}
                  />
                </TableCell>
                <TableCell align="left">
                  <TextField
                    className='w-full'
                    id="management-10"
                    name="management-10"
                    type="text"
                    size='small'
                    sx={{
                      backgroundColor: "white",
                    }}
                  />
                </TableCell>
                <TableCell align="left">
                  <TextField
                    className='w-full'
                    id="management-10"
                    name="management-10"
                    type="text"
                    size='small'
                    sx={{
                      backgroundColor: "white",
                    }}
                  />
                </TableCell>
                <TableCell align="left">
                  <TextField
                    className='w-full'
                    id="management-10"
                    name="management-10"
                    type="text"
                    size='small'
                    sx={{
                      backgroundColor: "white",
                    }}
                  />
                </TableCell>
              </TableRow>
              {/* End Rows 2 */}

              {/* Start Rows 3 */}
              <TableRow hover role="checkbox" tabIndex={-1}>
                <TableCell align="left">3</TableCell>
                <TableCell align="left">Sting</TableCell>
                <TableCell align="left">Sting</TableCell>
                <TableCell align="left">Sting</TableCell>
                <TableCell align="left">
                  <TextField
                    className='w-full'
                    id="management-10"
                    name="management-10"
                    type="text"
                    size='small'
                    sx={{
                      backgroundColor: "white",
                    }}
                  />
                </TableCell>
                <TableCell align="left">
                  <TextField
                    className='w-full'
                    id="management-10"
                    name="management-10"
                    type="text"
                    size='small'
                    sx={{
                      backgroundColor: "white",
                    }}
                  />
                </TableCell>
                <TableCell align="left">
                  <TextField
                    className='w-full'
                    id="management-10"
                    name="management-10"
                    type="text"
                    size='small'
                    sx={{
                      backgroundColor: "white",
                    }}
                  />
                </TableCell>
                <TableCell align="left">
                  <TextField
                    className='w-full'
                    id="management-10"
                    name="management-10"
                    type="text"
                    size='small'
                    sx={{
                      backgroundColor: "white",
                    }}
                  />
                </TableCell>
              </TableRow>
              {/* End Rows 3 */}

              {/* Start Rows 4 */}
              <TableRow hover role="checkbox" tabIndex={-1}>
                <TableCell align="left">4</TableCell>
                <TableCell align="left">Sting</TableCell>
                <TableCell align="left">Sting</TableCell>
                <TableCell align="left">Sting</TableCell>
                <TableCell align="left">
                  <TextField
                    className='w-full'
                    id="management-10"
                    name="management-10"
                    type="text"
                    size='small'
                    sx={{
                      backgroundColor: "white",
                    }}
                  />
                </TableCell>
                <TableCell align="left">
                  <TextField
                    className='w-full'
                    id="management-10"
                    name="management-10"
                    type="text"
                    size='small'
                    sx={{
                      backgroundColor: "white",
                    }}
                  />
                </TableCell>
                <TableCell align="left">
                  <TextField
                    className='w-full'
                    id="management-10"
                    name="management-10"
                    type="text"
                    size='small'
                    sx={{
                      backgroundColor: "white",
                    }}
                  />
                </TableCell>
                <TableCell align="left">
                  <TextField
                    className='w-full'
                    id="management-10"
                    name="management-10"
                    type="text"
                    size='small'
                    sx={{
                      backgroundColor: "white",
                    }}
                  />
                </TableCell>
              </TableRow>
              {/* End Rows 4 */}

              {/* Start Rows 5 */}
              <TableRow hover role="checkbox" tabIndex={-1}>
                <TableCell align="left">5</TableCell>
                <TableCell align="left">Sting</TableCell>
                <TableCell align="left">Sting</TableCell>
                <TableCell align="left">Sting</TableCell>
                <TableCell align="left">
                  <TextField
                    className='w-full'
                    id="management-10"
                    name="management-10"
                    type="text"
                    size='small'
                    sx={{
                      backgroundColor: "white",
                    }}
                  />
                </TableCell>
                <TableCell align="left">
                  <TextField
                    className='w-full'
                    id="management-10"
                    name="management-10"
                    type="text"
                    size='small'
                    sx={{
                      backgroundColor: "white",
                    }}
                  />
                </TableCell>
                <TableCell align="left">
                  <TextField
                    className='w-full'
                    id="management-10"
                    name="management-10"
                    type="text"
                    size='small'
                    sx={{
                      backgroundColor: "white",
                    }}
                  />
                </TableCell>
                <TableCell align="left">
                  <TextField
                    className='w-full'
                    id="management-10"
                    name="management-10"
                    type="text"
                    size='small'
                    sx={{
                      backgroundColor: "white",
                    }}
                  />
                </TableCell>
              </TableRow>
              {/* End Rows 5 */}

              {/* Start Rows 6 */}
              <TableRow hover role="checkbox" tabIndex={-1}>
                <TableCell align="left">6</TableCell>
                <TableCell align="left">Sting</TableCell>
                <TableCell align="left">Sting</TableCell>
                <TableCell align="left">Sting</TableCell>
                <TableCell align="left">
                  <TextField
                    className='w-full'
                    id="management-10"
                    name="management-10"
                    type="text"
                    size='small'
                    sx={{
                      backgroundColor: "white",
                    }}
                  />
                </TableCell>
                <TableCell align="left">
                  <TextField
                    className='w-full'
                    id="management-10"
                    name="management-10"
                    type="text"
                    size='small'
                    sx={{
                      backgroundColor: "white",
                    }}
                  />
                </TableCell>
                <TableCell align="left">
                  <TextField
                    className='w-full'
                    id="management-10"
                    name="management-10"
                    type="text"
                    size='small'
                    sx={{
                      backgroundColor: "white",
                    }}
                  />
                </TableCell>
                <TableCell align="left">
                  <TextField
                    className='w-full'
                    id="management-10"
                    name="management-10"
                    type="text"
                    size='small'
                    sx={{
                      backgroundColor: "white",
                    }}
                  />
                </TableCell>
              </TableRow>
              {/* End Rows 6 */}

              {/* Start Rows 7 */}
              <TableRow hover role="checkbox" tabIndex={-1}>
                <TableCell align="left">7</TableCell>
                <TableCell align="left">Sting</TableCell>
                <TableCell align="left">Sting</TableCell>
                <TableCell align="left">Sting</TableCell>
                <TableCell align="left">
                  <TextField
                    className='w-full'
                    id="management-10"
                    name="management-10"
                    type="text"
                    size='small'
                    sx={{
                      backgroundColor: "white",
                    }}
                  />
                </TableCell>
                <TableCell align="left">
                  <TextField
                    className='w-full'
                    id="management-10"
                    name="management-10"
                    type="text"
                    size='small'
                    sx={{
                      backgroundColor: "white",
                    }}
                  />
                </TableCell>
                <TableCell align="left">
                  <TextField
                    className='w-full'
                    id="management-10"
                    name="management-10"
                    type="text"
                    size='small'
                    sx={{
                      backgroundColor: "white",
                    }}
                  />
                </TableCell>
                <TableCell align="left">
                  <TextField
                    className='w-full'
                    id="management-10"
                    name="management-10"
                    type="text"
                    size='small'
                    sx={{
                      backgroundColor: "white",
                    }}
                  />
                </TableCell>
              </TableRow>
              {/* End Rows 7 */}

              {/* Start Rows 8 */}
              <TableRow hover role="checkbox" tabIndex={-1}>
                <TableCell align="left">8</TableCell>
                <TableCell align="left">Sting</TableCell>
                <TableCell align="left">Sting</TableCell>
                <TableCell align="left">Sting</TableCell>
                <TableCell align="left">
                  <TextField
                    className='w-full'
                    id="management-10"
                    name="management-10"
                    type="text"
                    size='small'
                    sx={{
                      backgroundColor: "white",
                    }}
                  />
                </TableCell>
                <TableCell align="left">
                  <TextField
                    className='w-full'
                    id="management-10"
                    name="management-10"
                    type="text"
                    size='small'
                    sx={{
                      backgroundColor: "white",
                    }}
                  />
                </TableCell>
                <TableCell align="left">
                  <TextField
                    className='w-full'
                    id="management-10"
                    name="management-10"
                    type="text"
                    size='small'
                    sx={{
                      backgroundColor: "white",
                    }}
                  />
                </TableCell>
                <TableCell align="left">
                  <TextField
                    className='w-full'
                    id="management-10"
                    name="management-10"
                    type="text"
                    size='small'
                    sx={{
                      backgroundColor: "white",
                    }}
                  />
                </TableCell>
              </TableRow>
              {/* End Rows 8 */}

              {/* Start Rows 9 */}
              <TableRow hover role="checkbox" tabIndex={-1}>
                <TableCell align="left">9</TableCell>
                <TableCell align="left">Sting</TableCell>
                <TableCell align="left">Sting</TableCell>
                <TableCell align="left">Sting</TableCell>
                <TableCell align="left">
                  <TextField
                    className='w-full'
                    id="management-10"
                    name="management-10"
                    type="text"
                    size='small'
                    sx={{
                      backgroundColor: "white",
                    }}
                  />
                </TableCell>
                <TableCell align="left">
                  <TextField
                    className='w-full'
                    id="management-10"
                    name="management-10"
                    type="text"
                    size='small'
                    sx={{
                      backgroundColor: "white",
                    }}
                  />
                </TableCell>
                <TableCell align="left">
                  <TextField
                    className='w-full'
                    id="management-10"
                    name="management-10"
                    type="text"
                    size='small'
                    sx={{
                      backgroundColor: "white",
                    }}
                  />
                </TableCell>
                <TableCell align="left">
                  <TextField
                    className='w-full'
                    id="management-10"
                    name="management-10"
                    type="text"
                    size='small'
                    sx={{
                      backgroundColor: "white",
                    }}
                  />
                </TableCell>
              </TableRow>
              {/* End Rows 9 */}

              {/* Start Rows 10 */}
              <TableRow hover role="checkbox" tabIndex={-1}>
                <TableCell align="left">10</TableCell>
                <TableCell align="left">Sting</TableCell>
                <TableCell align="left">Sting</TableCell>
                <TableCell align="left">Sting</TableCell>
                <TableCell align="left">
                  <TextField
                    className='w-full'
                    id="management-10"
                    name="management-10"
                    type="text"
                    size='small'
                    sx={{
                      backgroundColor: "white",
                    }}
                  />
                </TableCell>
                <TableCell align="left">
                  <TextField
                    className='w-full'
                    id="management-10"
                    name="management-10"
                    type="text"
                    size='small'
                    sx={{
                      backgroundColor: "white",
                    }}
                  />
                </TableCell>
                <TableCell align="left">
                  <TextField
                    className='w-full'
                    id="management-10"
                    name="management-10"
                    type="text"
                    size='small'
                    sx={{
                      backgroundColor: "white",
                    }}
                  />
                </TableCell>
                <TableCell align="left">
                  <TextField
                    className='w-full'
                    id="management-10"
                    name="management-10"
                    type="text"
                    size='small'
                    sx={{
                      backgroundColor: "white",
                    }}
                  />
                </TableCell>
              </TableRow>
              {/* End Rows 10 */}

              {/* Start Rows 11 */}
              <TableRow hover role="checkbox" tabIndex={-1}>
                <TableCell align="left">11</TableCell>
                <TableCell align="left">Sting</TableCell>
                <TableCell align="left">Sting</TableCell>
                <TableCell align="left">Sting</TableCell>
                <TableCell align="left">
                  <TextField
                    className='w-full'
                    id="management-10"
                    name="management-10"
                    type="text"
                    size='small'
                    sx={{
                      backgroundColor: "white",
                    }}
                  />
                </TableCell>
                <TableCell align="left">
                  <TextField
                    className='w-full'
                    id="management-10"
                    name="management-10"
                    type="text"
                    size='small'
                    sx={{
                      backgroundColor: "white",
                    }}
                  />
                </TableCell>
                <TableCell align="left">
                  <TextField
                    className='w-full'
                    id="management-10"
                    name="management-10"
                    type="text"
                    size='small'
                    sx={{
                      backgroundColor: "white",
                    }}
                  />
                </TableCell>
                <TableCell align="left">
                  <TextField
                    className='w-full'
                    id="management-10"
                    name="management-10"
                    type="text"
                    size='small'
                    sx={{
                      backgroundColor: "white",
                    }}
                  />
                </TableCell>
              </TableRow>
              {/* End Rows 11 */}

              {/* Start Rows 12 */}
              <TableRow hover role="checkbox" tabIndex={-1}>
                <TableCell align="left">12</TableCell>
                <TableCell align="left">Sting</TableCell>
                <TableCell align="left">Sting</TableCell>
                <TableCell align="left">Sting</TableCell>
                <TableCell align="left">
                  <TextField
                    className='w-full'
                    id="management-10"
                    name="management-10"
                    type="text"
                    size='small'
                    sx={{
                      backgroundColor: "white",
                    }}
                  />
                </TableCell>
                <TableCell align="left">
                  <TextField
                    className='w-full'
                    id="management-10"
                    name="management-10"
                    type="text"
                    size='small'
                    sx={{
                      backgroundColor: "white",
                    }}
                  />
                </TableCell>
                <TableCell align="left">
                  <TextField
                    className='w-full'
                    id="management-10"
                    name="management-10"
                    type="text"
                    size='small'
                    sx={{
                      backgroundColor: "white",
                    }}
                  />
                </TableCell>
                <TableCell align="left">
                  <TextField
                    className='w-full'
                    id="management-10"
                    name="management-10"
                    type="text"
                    size='small'
                    sx={{
                      backgroundColor: "white",
                    }}
                  />
                </TableCell>
              </TableRow>
              {/* End Rows 12 */}

              {/* Start Rows 13 */}
              <TableRow hover role="checkbox" tabIndex={-1}>
                <TableCell align="left">13</TableCell>
                <TableCell align="left">Sting</TableCell>
                <TableCell align="left">Sting</TableCell>
                <TableCell align="left">Sting</TableCell>
                <TableCell align="left">
                  <TextField
                    className='w-full'
                    id="management-10"
                    name="management-10"
                    type="text"
                    size='small'
                    sx={{
                      backgroundColor: "white",
                    }}
                  />
                </TableCell>
                <TableCell align="left">
                  <TextField
                    className='w-full'
                    id="management-10"
                    name="management-10"
                    type="text"
                    size='small'
                    sx={{
                      backgroundColor: "white",
                    }}
                  />
                </TableCell>
                <TableCell align="left">
                  <TextField
                    className='w-full'
                    id="management-10"
                    name="management-10"
                    type="text"
                    size='small'
                    sx={{
                      backgroundColor: "white",
                    }}
                  />
                </TableCell>
                <TableCell align="left">
                  <TextField
                    className='w-full'
                    id="management-10"
                    name="management-10"
                    type="text"
                    size='small'
                    sx={{
                      backgroundColor: "white",
                    }}
                  />
                </TableCell>
              </TableRow>
              {/* End Rows 13 */}

              {/* Start Rows 14 */}
              <TableRow hover role="checkbox" tabIndex={-1}>
                <TableCell align="left">14</TableCell>
                <TableCell align="left">Sting</TableCell>
                <TableCell align="left">Sting</TableCell>
                <TableCell align="left">Sting</TableCell>
                <TableCell align="left">
                  <TextField
                    className='w-full'
                    id="management-10"
                    name="management-10"
                    type="text"
                    size='small'
                    sx={{
                      backgroundColor: "white",
                    }}
                  />
                </TableCell>
                <TableCell align="left">
                  <TextField
                    className='w-full'
                    id="management-10"
                    name="management-10"
                    type="text"
                    size='small'
                    sx={{
                      backgroundColor: "white",
                    }}
                  />
                </TableCell>
                <TableCell align="left">
                  <TextField
                    className='w-full'
                    id="management-10"
                    name="management-10"
                    type="text"
                    size='small'
                    sx={{
                      backgroundColor: "white",
                    }}
                  />
                </TableCell>
                <TableCell align="left">
                  <TextField
                    className='w-full'
                    id="management-10"
                    name="management-10"
                    type="text"
                    size='small'
                    sx={{
                      backgroundColor: "white",
                    }}
                  />
                </TableCell>
              </TableRow>
              {/* End Rows 14 */}

              {/* Start Rows 15 */}
              <TableRow hover role="checkbox" tabIndex={-1}>
                <TableCell align="left">15</TableCell>
                <TableCell align="left">Sting</TableCell>
                <TableCell align="left">Sting</TableCell>
                <TableCell align="left">Sting</TableCell>
                <TableCell align="left">
                  <TextField
                    className='w-full'
                    id="management-10"
                    name="management-10"
                    type="text"
                    size='small'
                    sx={{
                      backgroundColor: "white",
                    }}
                  />
                </TableCell>
                <TableCell align="left">
                  <TextField
                    className='w-full'
                    id="management-10"
                    name="management-10"
                    type="text"
                    size='small'
                    sx={{
                      backgroundColor: "white",
                    }}
                  />
                </TableCell>
                <TableCell align="left">
                  <TextField
                    className='w-full'
                    id="management-10"
                    name="management-10"
                    type="text"
                    size='small'
                    sx={{
                      backgroundColor: "white",
                    }}
                  />
                </TableCell>
                <TableCell align="left">
                  <TextField
                    className='w-full'
                    id="management-10"
                    name="management-10"
                    type="text"
                    size='small'
                    sx={{
                      backgroundColor: "white",
                    }}
                  />
                </TableCell>
              </TableRow>
              {/* End Rows 15 */}

              {/* Start Rows 16 */}
              <TableRow hover role="checkbox" tabIndex={-1}>
                <TableCell align="left" colSpan={4}>合計</TableCell>
                <TableCell align="left">
                  <TextField
                    className='w-full'
                    id="management-10"
                    name="management-10"
                    type="text"
                    size='small'
                    sx={{
                      backgroundColor: "white",
                    }}
                  />
                </TableCell>
                <TableCell align="left">
                  <TextField
                    className='w-full'
                    id="management-10"
                    name="management-10"
                    type="text"
                    size='small'
                    sx={{
                      backgroundColor: "white",
                    }}
                  />
                </TableCell>
                <TableCell align="left">
                  <TextField
                    className='w-full'
                    id="management-10"
                    name="management-10"
                    type="text"
                    size='small'
                    sx={{
                      backgroundColor: "white",
                    }}
                  />
                </TableCell>
                <TableCell align="left">
                  <TextField
                    className='w-full'
                    id="management-10"
                    name="management-10"
                    type="text"
                    size='small'
                    sx={{
                      backgroundColor: "white",
                    }}
                  />
                </TableCell>
              </TableRow>
              {/* End Rows 16 */}

              {/* Start Rows 17 */}
              <TableRow hover role="checkbox" tabIndex={-1}>
                <TableCell align="left" colSpan={4}>基準年度からの増減分における受入(拠出)見込額と基準年度の受入(拠出)実績額の差額から法定福利費等の事業主負担分を控除した額</TableCell>
                <TableCell align="left">
                  <TextField
                    className='w-full'
                    id="management-10"
                    name="management-10"
                    type="text"
                    size='small'
                    sx={{
                      backgroundColor: "white",
                    }}
                  />
                </TableCell>
                <TableCell></TableCell>
                <TableCell align="left">
                  <TextField
                    className='w-full'
                    id="management-10"
                    name="management-10"
                    type="text"
                    size='small'
                    sx={{
                      backgroundColor: "white",
                    }}
                  />
                </TableCell>
                <TableCell></TableCell>
              </TableRow>
              {/* End Rows 17 */}

            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      {/* End Table 2 */}

      {/* Start ※1同一事業者が運営する全ての施設・事業所(特定教育・保育施設及び特定地域型保育事業所)について記入すること。 Grid */}
      <Grid container className='pt-5' justifyContent="start">
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-1 text-start'>
            ※1同一事業者が運営する全ての施設・事業所(特定教育・保育施設及び特定地域型保育事業所)について記入すること。
          </Typography>
        </Grid>
      </Grid>
      {/* End ※1同一事業者が運営する全ての施設・事業所(特定教育・保育施設及び特定地域型保育事業所)について記入すること。 Grid */}


    </>
  );
}
