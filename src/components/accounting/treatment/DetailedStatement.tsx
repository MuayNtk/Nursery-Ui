import { Grid, Paper, Table, TableCell, TableContainer, TableRow, Typography, TableBody, Divider, TableHead, TextField, InputAdornment } from "@mui/material";



export default function DetailedStatement() {

  return (
    <>


      {/* Start 別紙様式 7 別添 1 Grid */}
      <Grid container className='pt-3' justifyContent="start">
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography fontWeight="bold" sx={{ fontSize: { xs: '14px', sm: '16px', md: '18px', lg: '20px' } }} className='pt-2 text-start'>
            別紙様式 7 別添 1
          </Typography>
        </Grid>
      </Grid>
      {/* End 別紙様式 7 別添 1 Grid */}

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

      {/* Start (4) 副主任保育士等に係る賃金改善について(内訳) Grid */}
      <Grid container className='pt-3' justifyContent="start">
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography fontWeight="bold" sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-start'>
            (4) 副主任保育士等に係る賃金改善について(内訳)
          </Typography>
        </Grid>
      </Grid>
      {/* End (4) 副主任保育士等に係る賃金改善について(内訳) Grid */}

      {/* Start 記載例に従って、下記の表に記載すること(職名・職種・改善する給与項目、算出方法が同じ場合には、まとめて記載すること)。 Grid */}
      <Grid container justifyContent="start" className="pt-10">
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='text-justify'>
            記載例に従って、下記の表に記載すること(職名・職種・改善する給与項目、算出方法が同じ場合には、まとめて記載すること)。
          </Typography>
        </Grid>
      </Grid>
      {/* End 記載例に従って、下記の表に記載すること(職名・職種・改善する給与項目、算出方法が同じ場合には、まとめて記載すること)。 Grid */}

      {/* Start Table 1 */}
      <Grid container justifyContent="center">
        <TableContainer component={Paper} className="mt-2" sx={{ width: { xs: 'auto', sm: 'auto', md: 'auto', lg: 'auto' } }}>
          <Table sx={{ minWidth: 1150 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell style={{ width: 10, fontWeight: "bold" }} align="left">番号</TableCell>
                <TableCell style={{ width: 100, fontWeight: "bold" }} align="left">職名</TableCell>
                <TableCell style={{ width: 100, fontWeight: "bold" }} align="left">職種</TableCell>
                <TableCell style={{ width: 90, fontWeight: "bold" }} align="left">改善した給与項目</TableCell>
                <TableCell style={{ fontWeight: "bold" }} align="left">処遇改善等加算 I による賃金改善額</TableCell>
                <TableCell style={{ fontWeight: "bold" }} align="left">うち基準翌年度から加算当年度における賃金改善分</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>

              {/* Start Rows 1 */}
              <TableRow hover role="checkbox" tabIndex={-1}>
                <TableCell align="left">No.1</TableCell>
                <TableCell align="left">副主任保育士</TableCell>
                <TableCell align="left">保育士</TableCell>
                <TableCell align="left">基本給</TableCell>
                <TableCell>
                  <Grid container alignItems="center" spacing={1}>
                    <Grid item>
                      <TextField
                        id="yen1"
                        name="yen1"
                        type="text"
                        size="small"
                        sx={{ backgroundColor: 'white', width: 100 }}
                        InputProps={{
                          endAdornment: <InputAdornment position="end">円</InputAdornment>,
                        }}
                      />
                    </Grid>
                    <Grid item>
                      <Typography>x</Typography>
                    </Grid>
                    <Grid item>
                      <TextField
                        id="month"
                        name="month"
                        type="text"
                        size="small"
                        sx={{ backgroundColor: 'white', width: 100 }}
                        InputProps={{
                          endAdornment: <InputAdornment position="end">月</InputAdornment>,
                        }}
                      />
                    </Grid>
                    <Grid item>
                      <Typography>x</Typography>
                    </Grid>
                    <Grid item>
                      <TextField
                        id="person"
                        name="person"
                        type="text"
                        size="small"
                        sx={{ backgroundColor: 'white', width: 100 }}
                        InputProps={{
                          endAdornment: <InputAdornment position="end">人</InputAdornment>,
                        }}
                      />
                    </Grid>
                  </Grid>
                  <Grid container alignItems="flex-end" spacing={1} sx={{ mt: 1 }}>
                    <Grid item>
                      <Typography>=</Typography>
                    </Grid>
                    <Grid item>
                      <TextField
                        id="yen2"
                        name="yen2"
                        type="text"
                        size="small"
                        sx={{ backgroundColor: 'white', width: 150 }}
                        InputProps={{
                          endAdornment: <InputAdornment position="end">円</InputAdornment>,
                        }}
                      />
                    </Grid>
                  </Grid>
                </TableCell>

                <TableCell>
                  <Grid container alignItems="center" spacing={1}>
                    <Grid item>
                      <TextField
                        id="yen1"
                        name="yen1"
                        type="text"
                        size="small"
                        sx={{ backgroundColor: 'white', width: 100 }}
                        InputProps={{
                          endAdornment: <InputAdornment position="end">円</InputAdornment>,
                        }}
                      />
                    </Grid>
                    <Grid item>
                      <Typography>x</Typography>
                    </Grid>
                    <Grid item>
                      <TextField
                        id="month"
                        name="month"
                        type="text"
                        size="small"
                        sx={{ backgroundColor: 'white', width: 100 }}
                        InputProps={{
                          endAdornment: <InputAdornment position="end">月</InputAdornment>,
                        }}
                      />
                    </Grid>
                    <Grid item>
                      <Typography>x</Typography>
                    </Grid>
                    <Grid item>
                      <TextField
                        id="person"
                        name="person"
                        type="text"
                        size="small"
                        sx={{ backgroundColor: 'white', width: 100 }}
                        InputProps={{
                          endAdornment: <InputAdornment position="end">人</InputAdornment>,
                        }}
                      />
                    </Grid>
                  </Grid>
                  <Grid container alignItems="flex-end" spacing={1} sx={{ mt: 1 }}>
                    <Grid item>
                      <Typography>=</Typography>
                    </Grid>
                    <Grid item>
                      <TextField
                        id="yen2"
                        name="yen2"
                        type="text"
                        size="small"
                        sx={{ backgroundColor: 'white', width: 150 }}
                        InputProps={{
                          endAdornment: <InputAdornment position="end">円</InputAdornment>,
                        }}
                      />
                    </Grid>
                  </Grid>
                </TableCell>

              </TableRow>
              {/* End Rows 1 */}

              {/* Start Rows 2 */}
              <TableRow hover role="checkbox" tabIndex={-1}>
                <TableCell align="left">No.2</TableCell>
                <TableCell align="left">副主任保育士</TableCell>
                <TableCell align="left">保育士</TableCell>
                <TableCell align="left">手当</TableCell>
                <TableCell>
                  <Grid container alignItems="center" spacing={1}>
                    <Grid item>
                      <TextField
                        id="yen1"
                        name="yen1"
                        type="text"
                        size="small"
                        sx={{ backgroundColor: 'white', width: 100 }}
                        InputProps={{
                          endAdornment: <InputAdornment position="end">円</InputAdornment>,
                        }}
                      />
                    </Grid>
                    <Grid item>
                      <Typography>x</Typography>
                    </Grid>
                    <Grid item>
                      <TextField
                        id="month"
                        name="month"
                        type="text"
                        size="small"
                        sx={{ backgroundColor: 'white', width: 100 }}
                        InputProps={{
                          endAdornment: <InputAdornment position="end">月</InputAdornment>,
                        }}
                      />
                    </Grid>
                    <Grid item>
                      <Typography>x</Typography>
                    </Grid>
                    <Grid item>
                      <TextField
                        id="person"
                        name="person"
                        type="text"
                        size="small"
                        sx={{ backgroundColor: 'white', width: 100 }}
                        InputProps={{
                          endAdornment: <InputAdornment position="end">人</InputAdornment>,
                        }}
                      />
                    </Grid>
                  </Grid>
                  <Grid container alignItems="flex-end" spacing={1} sx={{ mt: 1 }}>
                    <Grid item>
                      <Typography>=</Typography>
                    </Grid>
                    <Grid item>
                      <TextField
                        id="yen2"
                        name="yen2"
                        type="text"
                        size="small"
                        sx={{ backgroundColor: 'white', width: 150 }}
                        InputProps={{
                          endAdornment: <InputAdornment position="end">円</InputAdornment>,
                        }}
                      />
                    </Grid>
                  </Grid>
                </TableCell>

                <TableCell>
                  <Grid container alignItems="center" spacing={1}>
                    <Grid item>
                      <TextField
                        id="yen1"
                        name="yen1"
                        type="text"
                        size="small"
                        sx={{ backgroundColor: 'white', width: 100 }}
                        InputProps={{
                          endAdornment: <InputAdornment position="end">円</InputAdornment>,
                        }}
                      />
                    </Grid>
                    <Grid item>
                      <Typography>x</Typography>
                    </Grid>
                    <Grid item>
                      <TextField
                        id="month"
                        name="month"
                        type="text"
                        size="small"
                        sx={{ backgroundColor: 'white', width: 100 }}
                        InputProps={{
                          endAdornment: <InputAdornment position="end">月</InputAdornment>,
                        }}
                      />
                    </Grid>
                    <Grid item>
                      <Typography>x</Typography>
                    </Grid>
                    <Grid item>
                      <TextField
                        id="person"
                        name="person"
                        type="text"
                        size="small"
                        sx={{ backgroundColor: 'white', width: 100 }}
                        InputProps={{
                          endAdornment: <InputAdornment position="end">人</InputAdornment>,
                        }}
                      />
                    </Grid>
                  </Grid>
                  <Grid container alignItems="flex-end" spacing={1} sx={{ mt: 1 }}>
                    <Grid item>
                      <Typography>=</Typography>
                    </Grid>
                    <Grid item>
                      <TextField
                        id="yen2"
                        name="yen2"
                        type="text"
                        size="small"
                        sx={{ backgroundColor: 'white', width: 150 }}
                        InputProps={{
                          endAdornment: <InputAdornment position="end">円</InputAdornment>,
                        }}
                      />
                    </Grid>
                  </Grid>
                </TableCell>

              </TableRow>
              {/* End Rows 2 */}

              {/* Start Rows 3 */}
              <TableRow hover role="checkbox" tabIndex={-1}>
                <TableCell align="left">No.3</TableCell>
                <TableCell align="left">指導教諭</TableCell>
                <TableCell align="left">幼稚園教諭</TableCell>
                <TableCell align="left">基本給</TableCell>
                <TableCell>
                  <Grid container alignItems="center" spacing={1}>
                    <Grid item>
                      <TextField
                        id="yen1"
                        name="yen1"
                        type="text"
                        size="small"
                        sx={{ backgroundColor: 'white', width: 100 }}
                        InputProps={{
                          endAdornment: <InputAdornment position="end">円</InputAdornment>,
                        }}
                      />
                    </Grid>
                    <Grid item>
                      <Typography>x</Typography>
                    </Grid>
                    <Grid item>
                      <TextField
                        id="month"
                        name="month"
                        type="text"
                        size="small"
                        sx={{ backgroundColor: 'white', width: 100 }}
                        InputProps={{
                          endAdornment: <InputAdornment position="end">月</InputAdornment>,
                        }}
                      />
                    </Grid>
                    <Grid item>
                      <Typography>x</Typography>
                    </Grid>
                    <Grid item>
                      <TextField
                        id="person"
                        name="person"
                        type="text"
                        size="small"
                        sx={{ backgroundColor: 'white', width: 100 }}
                        InputProps={{
                          endAdornment: <InputAdornment position="end">人</InputAdornment>,
                        }}
                      />
                    </Grid>
                  </Grid>
                  <Grid container alignItems="flex-end" spacing={1} sx={{ mt: 1 }}>
                    <Grid item>
                      <Typography>=</Typography>
                    </Grid>
                    <Grid item>
                      <TextField
                        id="yen2"
                        name="yen2"
                        type="text"
                        size="small"
                        sx={{ backgroundColor: 'white', width: 150 }}
                        InputProps={{
                          endAdornment: <InputAdornment position="end">円</InputAdornment>,
                        }}
                      />
                    </Grid>
                  </Grid>
                </TableCell>

                <TableCell>
                  <Grid container alignItems="center" spacing={1}>
                    <Grid item>
                      <TextField
                        id="yen1"
                        name="yen1"
                        type="text"
                        size="small"
                        sx={{ backgroundColor: 'white', width: 100 }}
                        InputProps={{
                          endAdornment: <InputAdornment position="end">円</InputAdornment>,
                        }}
                      />
                    </Grid>
                    <Grid item>
                      <Typography>x</Typography>
                    </Grid>
                    <Grid item>
                      <TextField
                        id="month"
                        name="month"
                        type="text"
                        size="small"
                        sx={{ backgroundColor: 'white', width: 100 }}
                        InputProps={{
                          endAdornment: <InputAdornment position="end">月</InputAdornment>,
                        }}
                      />
                    </Grid>
                    <Grid item>
                      <Typography>x</Typography>
                    </Grid>
                    <Grid item>
                      <TextField
                        id="person"
                        name="person"
                        type="text"
                        size="small"
                        sx={{ backgroundColor: 'white', width: 100 }}
                        InputProps={{
                          endAdornment: <InputAdornment position="end">人</InputAdornment>,
                        }}
                      />
                    </Grid>
                  </Grid>
                  <Grid container alignItems="flex-end" spacing={1} sx={{ mt: 1 }}>
                    <Grid item>
                      <Typography>=</Typography>
                    </Grid>
                    <Grid item>
                      <TextField
                        id="yen2"
                        name="yen2"
                        type="text"
                        size="small"
                        sx={{ backgroundColor: 'white', width: 150 }}
                        InputProps={{
                          endAdornment: <InputAdornment position="end">円</InputAdornment>,
                        }}
                      />
                    </Grid>
                  </Grid>
                </TableCell>

              </TableRow>
              {/* End Rows 3 */}

              {/* Start Rows 4 */}
              <TableRow hover role="checkbox" tabIndex={-1}>
                <TableCell align="left" colSpan={4}>① 賃金改善見込額 計</TableCell>
                <TableCell>
                  <TextField
                    id="yen2"
                    name="yen2"
                    type="text"
                    size="small"
                    sx={{ backgroundColor: 'white', width: "full" }}
                    InputProps={{
                      endAdornment: <InputAdornment position="end">円</InputAdornment>,
                    }}
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    id="yen2"
                    name="yen2"
                    type="text"
                    size="small"
                    sx={{ backgroundColor: 'white', width: "full" }}
                    InputProps={{
                      endAdornment: <InputAdornment position="end">円</InputAdornment>,
                    }}
                  />
                </TableCell>
              </TableRow>
              {/* End Rows 4 */}

              {/* Start Rows 5 */}
              <TableRow hover role="checkbox" tabIndex={-1}>
                <TableCell align="left" colSpan={4}>② 上記に対応する法定福利費等の事業主負担分の総額</TableCell>
                <TableCell>
                  <TextField
                    id="yen2"
                    name="yen2"
                    type="text"
                    size="small"
                    sx={{ backgroundColor: 'white', width: "full" }}
                    InputProps={{
                      endAdornment: <InputAdornment position="end">円</InputAdornment>,
                    }}
                  />
                </TableCell>
                <TableCell></TableCell>
              </TableRow>
              {/* End Rows 5 */}

              {/* Start Rows 6 */}
              <TableRow hover role="checkbox" tabIndex={-1}>
                <TableCell align="left" colSpan={4}>③① + ②</TableCell>
                <TableCell>
                  <TextField
                    id="yen2"
                    name="yen2"
                    type="text"
                    size="small"
                    sx={{ backgroundColor: 'white', width: "full" }}
                    InputProps={{
                      endAdornment: <InputAdornment position="end">円</InputAdornment>,
                    }}
                  />
                </TableCell>
                <TableCell></TableCell>
              </TableRow>
              {/* End Rows 6 */}

            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      {/* End Table 1 */}

      <Divider className="pt-7" />

      {/* Start (5) 職務分野別リーダー等に係る賃金改善について(内訳) Grid */}
      <Grid container className='pt-3' justifyContent="start">
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography fontWeight="bold" sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-start'>
            (5) 職務分野別リーダー等に係る賃金改善について(内訳)
          </Typography>
        </Grid>
      </Grid>
      {/* End (5) 職務分野別リーダー等に係る賃金改善について(内訳) Grid */}

      {/* Start 記載例に従って、下記の表に記載すること(職名・職種・改善する給与項目、算出方法が同じ場合には、まとめて記載すること)。 Grid */}
      <Grid container justifyContent="start" className="pt-10">
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='text-justify'>
            記載例に従って、下記の表に記載すること(職名・職種・改善する給与項目、算出方法が同じ場合には、まとめて記載すること)。
          </Typography>
        </Grid>
      </Grid>
      {/* End 記載例に従って、下記の表に記載すること(職名・職種・改善する給与項目、算出方法が同じ場合には、まとめて記載すること)。 Grid */}

      {/* Start Table 2 */}
      <Grid container justifyContent="center">
        <TableContainer component={Paper} className="mt-2" sx={{ width: { xs: 'auto', sm: 'auto', md: 'auto', lg: 'auto' } }}>
          <Table sx={{ minWidth: 1150 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell style={{ width: 10, fontWeight: "bold" }} align="left">番号</TableCell>
                <TableCell style={{ width: 100, fontWeight: "bold" }} align="left">職名</TableCell>
                <TableCell style={{ width: 100, fontWeight: "bold" }} align="left">職種</TableCell>
                <TableCell style={{ width: 90, fontWeight: "bold" }} align="left">改善した給与項目</TableCell>
                <TableCell style={{ fontWeight: "bold" }} align="left">処遇改善等加算 I による賃金改善額</TableCell>
                <TableCell style={{ fontWeight: "bold" }} align="left">うち基準翌年度から加算当年度における賃金改善分</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>

              {/* Start Rows 1 */}
              <TableRow hover role="checkbox" tabIndex={-1}>
                <TableCell align="left">No.1</TableCell>
                <TableCell align="left">副主任保育士</TableCell>
                <TableCell align="left">保育士</TableCell>
                <TableCell align="left">基本給</TableCell>
                <TableCell>
                  <Grid container alignItems="center" spacing={1}>
                    <Grid item>
                      <TextField
                        id="yen1"
                        name="yen1"
                        type="text"
                        size="small"
                        sx={{ backgroundColor: 'white', width: 100 }}
                        InputProps={{
                          endAdornment: <InputAdornment position="end">円</InputAdornment>,
                        }}
                      />
                    </Grid>
                    <Grid item>
                      <Typography>x</Typography>
                    </Grid>
                    <Grid item>
                      <TextField
                        id="month"
                        name="month"
                        type="text"
                        size="small"
                        sx={{ backgroundColor: 'white', width: 100 }}
                        InputProps={{
                          endAdornment: <InputAdornment position="end">月</InputAdornment>,
                        }}
                      />
                    </Grid>
                    <Grid item>
                      <Typography>x</Typography>
                    </Grid>
                    <Grid item>
                      <TextField
                        id="person"
                        name="person"
                        type="text"
                        size="small"
                        sx={{ backgroundColor: 'white', width: 100 }}
                        InputProps={{
                          endAdornment: <InputAdornment position="end">人</InputAdornment>,
                        }}
                      />
                    </Grid>
                  </Grid>
                  <Grid container alignItems="flex-end" spacing={1} sx={{ mt: 1 }}>
                    <Grid item>
                      <Typography>=</Typography>
                    </Grid>
                    <Grid item>
                      <TextField
                        id="yen2"
                        name="yen2"
                        type="text"
                        size="small"
                        sx={{ backgroundColor: 'white', width: 150 }}
                        InputProps={{
                          endAdornment: <InputAdornment position="end">円</InputAdornment>,
                        }}
                      />
                    </Grid>
                  </Grid>
                </TableCell>

                <TableCell>
                  <Grid container alignItems="center" spacing={1}>
                    <Grid item>
                      <TextField
                        id="yen1"
                        name="yen1"
                        type="text"
                        size="small"
                        sx={{ backgroundColor: 'white', width: 100 }}
                        InputProps={{
                          endAdornment: <InputAdornment position="end">円</InputAdornment>,
                        }}
                      />
                    </Grid>
                    <Grid item>
                      <Typography>x</Typography>
                    </Grid>
                    <Grid item>
                      <TextField
                        id="month"
                        name="month"
                        type="text"
                        size="small"
                        sx={{ backgroundColor: 'white', width: 100 }}
                        InputProps={{
                          endAdornment: <InputAdornment position="end">月</InputAdornment>,
                        }}
                      />
                    </Grid>
                    <Grid item>
                      <Typography>x</Typography>
                    </Grid>
                    <Grid item>
                      <TextField
                        id="person"
                        name="person"
                        type="text"
                        size="small"
                        sx={{ backgroundColor: 'white', width: 100 }}
                        InputProps={{
                          endAdornment: <InputAdornment position="end">人</InputAdornment>,
                        }}
                      />
                    </Grid>
                  </Grid>
                  <Grid container alignItems="flex-end" spacing={1} sx={{ mt: 1 }}>
                    <Grid item>
                      <Typography>=</Typography>
                    </Grid>
                    <Grid item>
                      <TextField
                        id="yen2"
                        name="yen2"
                        type="text"
                        size="small"
                        sx={{ backgroundColor: 'white', width: 150 }}
                        InputProps={{
                          endAdornment: <InputAdornment position="end">円</InputAdornment>,
                        }}
                      />
                    </Grid>
                  </Grid>
                </TableCell>

              </TableRow>
              {/* End Rows 1 */}

              {/* Start Rows 2 */}
              <TableRow hover role="checkbox" tabIndex={-1}>
                <TableCell align="left">No.2</TableCell>
                <TableCell align="left">副主任保育士</TableCell>
                <TableCell align="left">保育士</TableCell>
                <TableCell align="left">手当</TableCell>
                <TableCell>
                  <Grid container alignItems="center" spacing={1}>
                    <Grid item>
                      <TextField
                        id="yen1"
                        name="yen1"
                        type="text"
                        size="small"
                        sx={{ backgroundColor: 'white', width: 100 }}
                        InputProps={{
                          endAdornment: <InputAdornment position="end">円</InputAdornment>,
                        }}
                      />
                    </Grid>
                    <Grid item>
                      <Typography>x</Typography>
                    </Grid>
                    <Grid item>
                      <TextField
                        id="month"
                        name="month"
                        type="text"
                        size="small"
                        sx={{ backgroundColor: 'white', width: 100 }}
                        InputProps={{
                          endAdornment: <InputAdornment position="end">月</InputAdornment>,
                        }}
                      />
                    </Grid>
                    <Grid item>
                      <Typography>x</Typography>
                    </Grid>
                    <Grid item>
                      <TextField
                        id="person"
                        name="person"
                        type="text"
                        size="small"
                        sx={{ backgroundColor: 'white', width: 100 }}
                        InputProps={{
                          endAdornment: <InputAdornment position="end">人</InputAdornment>,
                        }}
                      />
                    </Grid>
                  </Grid>
                  <Grid container alignItems="flex-end" spacing={1} sx={{ mt: 1 }}>
                    <Grid item>
                      <Typography>=</Typography>
                    </Grid>
                    <Grid item>
                      <TextField
                        id="yen2"
                        name="yen2"
                        type="text"
                        size="small"
                        sx={{ backgroundColor: 'white', width: 150 }}
                        InputProps={{
                          endAdornment: <InputAdornment position="end">円</InputAdornment>,
                        }}
                      />
                    </Grid>
                  </Grid>
                </TableCell>

                <TableCell>
                  <Grid container alignItems="center" spacing={1}>
                    <Grid item>
                      <TextField
                        id="yen1"
                        name="yen1"
                        type="text"
                        size="small"
                        sx={{ backgroundColor: 'white', width: 100 }}
                        InputProps={{
                          endAdornment: <InputAdornment position="end">円</InputAdornment>,
                        }}
                      />
                    </Grid>
                    <Grid item>
                      <Typography>x</Typography>
                    </Grid>
                    <Grid item>
                      <TextField
                        id="month"
                        name="month"
                        type="text"
                        size="small"
                        sx={{ backgroundColor: 'white', width: 100 }}
                        InputProps={{
                          endAdornment: <InputAdornment position="end">月</InputAdornment>,
                        }}
                      />
                    </Grid>
                    <Grid item>
                      <Typography>x</Typography>
                    </Grid>
                    <Grid item>
                      <TextField
                        id="person"
                        name="person"
                        type="text"
                        size="small"
                        sx={{ backgroundColor: 'white', width: 100 }}
                        InputProps={{
                          endAdornment: <InputAdornment position="end">人</InputAdornment>,
                        }}
                      />
                    </Grid>
                  </Grid>
                  <Grid container alignItems="flex-end" spacing={1} sx={{ mt: 1 }}>
                    <Grid item>
                      <Typography>=</Typography>
                    </Grid>
                    <Grid item>
                      <TextField
                        id="yen2"
                        name="yen2"
                        type="text"
                        size="small"
                        sx={{ backgroundColor: 'white', width: 150 }}
                        InputProps={{
                          endAdornment: <InputAdornment position="end">円</InputAdornment>,
                        }}
                      />
                    </Grid>
                  </Grid>
                </TableCell>

              </TableRow>
              {/* End Rows 2 */}

              {/* Start Rows 3 */}
              <TableRow hover role="checkbox" tabIndex={-1}>
                <TableCell align="left">No.3</TableCell>
                <TableCell align="left">指導教諭</TableCell>
                <TableCell align="left">幼稚園教諭</TableCell>
                <TableCell align="left">基本給</TableCell>
                <TableCell>
                  <Grid container alignItems="center" spacing={1}>
                    <Grid item>
                      <TextField
                        id="yen1"
                        name="yen1"
                        type="text"
                        size="small"
                        sx={{ backgroundColor: 'white', width: 100 }}
                        InputProps={{
                          endAdornment: <InputAdornment position="end">円</InputAdornment>,
                        }}
                      />
                    </Grid>
                    <Grid item>
                      <Typography>x</Typography>
                    </Grid>
                    <Grid item>
                      <TextField
                        id="month"
                        name="month"
                        type="text"
                        size="small"
                        sx={{ backgroundColor: 'white', width: 100 }}
                        InputProps={{
                          endAdornment: <InputAdornment position="end">月</InputAdornment>,
                        }}
                      />
                    </Grid>
                    <Grid item>
                      <Typography>x</Typography>
                    </Grid>
                    <Grid item>
                      <TextField
                        id="person"
                        name="person"
                        type="text"
                        size="small"
                        sx={{ backgroundColor: 'white', width: 100 }}
                        InputProps={{
                          endAdornment: <InputAdornment position="end">人</InputAdornment>,
                        }}
                      />
                    </Grid>
                  </Grid>
                  <Grid container alignItems="flex-end" spacing={1} sx={{ mt: 1 }}>
                    <Grid item>
                      <Typography>=</Typography>
                    </Grid>
                    <Grid item>
                      <TextField
                        id="yen2"
                        name="yen2"
                        type="text"
                        size="small"
                        sx={{ backgroundColor: 'white', width: 150 }}
                        InputProps={{
                          endAdornment: <InputAdornment position="end">円</InputAdornment>,
                        }}
                      />
                    </Grid>
                  </Grid>
                </TableCell>

                <TableCell>
                  <Grid container alignItems="center" spacing={1}>
                    <Grid item>
                      <TextField
                        id="yen1"
                        name="yen1"
                        type="text"
                        size="small"
                        sx={{ backgroundColor: 'white', width: 100 }}
                        InputProps={{
                          endAdornment: <InputAdornment position="end">円</InputAdornment>,
                        }}
                      />
                    </Grid>
                    <Grid item>
                      <Typography>x</Typography>
                    </Grid>
                    <Grid item>
                      <TextField
                        id="month"
                        name="month"
                        type="text"
                        size="small"
                        sx={{ backgroundColor: 'white', width: 100 }}
                        InputProps={{
                          endAdornment: <InputAdornment position="end">月</InputAdornment>,
                        }}
                      />
                    </Grid>
                    <Grid item>
                      <Typography>x</Typography>
                    </Grid>
                    <Grid item>
                      <TextField
                        id="person"
                        name="person"
                        type="text"
                        size="small"
                        sx={{ backgroundColor: 'white', width: 100 }}
                        InputProps={{
                          endAdornment: <InputAdornment position="end">人</InputAdornment>,
                        }}
                      />
                    </Grid>
                  </Grid>
                  <Grid container alignItems="flex-end" spacing={1} sx={{ mt: 1 }}>
                    <Grid item>
                      <Typography>=</Typography>
                    </Grid>
                    <Grid item>
                      <TextField
                        id="yen2"
                        name="yen2"
                        type="text"
                        size="small"
                        sx={{ backgroundColor: 'white', width: 150 }}
                        InputProps={{
                          endAdornment: <InputAdornment position="end">円</InputAdornment>,
                        }}
                      />
                    </Grid>
                  </Grid>
                </TableCell>

              </TableRow>
              {/* End Rows 3 */}

              {/* Start Rows 4 */}
              <TableRow hover role="checkbox" tabIndex={-1}>
                <TableCell align="left" colSpan={4}>① 賃金改善見込額 計</TableCell>
                <TableCell>
                  <TextField
                    id="yen2"
                    name="yen2"
                    type="text"
                    size="small"
                    sx={{ backgroundColor: 'white', width: "full" }}
                    InputProps={{
                      endAdornment: <InputAdornment position="end">円</InputAdornment>,
                    }}
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    id="yen2"
                    name="yen2"
                    type="text"
                    size="small"
                    sx={{ backgroundColor: 'white', width: "full" }}
                    InputProps={{
                      endAdornment: <InputAdornment position="end">円</InputAdornment>,
                    }}
                  />
                </TableCell>
              </TableRow>
              {/* End Rows 4 */}

              {/* Start Rows 5 */}
              <TableRow hover role="checkbox" tabIndex={-1}>
                <TableCell align="left" colSpan={4}>② 上記に対応する法定福利費等の事業主負担分の総額</TableCell>
                <TableCell>
                  <TextField
                    id="yen2"
                    name="yen2"
                    type="text"
                    size="small"
                    sx={{ backgroundColor: 'white', width: "full" }}
                    InputProps={{
                      endAdornment: <InputAdornment position="end">円</InputAdornment>,
                    }}
                  />
                </TableCell>
                <TableCell></TableCell>
              </TableRow>
              {/* End Rows 5 */}

              {/* Start Rows 6 */}
              <TableRow hover role="checkbox" tabIndex={-1}>
                <TableCell align="left" colSpan={4}>③① + ②</TableCell>
                <TableCell>
                  <TextField
                    id="yen2"
                    name="yen2"
                    type="text"
                    size="small"
                    sx={{ backgroundColor: 'white', width: "full" }}
                    InputProps={{
                      endAdornment: <InputAdornment position="end">円</InputAdornment>,
                    }}
                  />
                </TableCell>
                <TableCell></TableCell>
              </TableRow>
              {/* End Rows 6 */}

            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      {/* End Table 2 */}



    </>
  );
}
