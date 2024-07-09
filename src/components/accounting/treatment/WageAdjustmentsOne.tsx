import { Grid, Paper, Table, TableCell, TableContainer, TableRow, Typography, TableBody, FormControl, InputLabel, Select, MenuItem, Divider, TableHead, Checkbox, TextField, TableFooter } from "@mui/material";


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function WageAdjustmentsOne() {

  return (
    <>

      {/* Start Table 1 */}
      <Grid container className='pt-3' justifyContent="left">
        <TableContainer component={Paper} className="mt-5" sx={{ width: { xs: 'auto', sm: 'auto', md: 'auto', lg: 'auto' } }}>
          <Table sx={{ minWidth: 600 }} aria-label="simple table" size="small">
            <TableBody>

              {/* Start Rows1 */}
              <TableRow>
                <TableCell align="left" style={{ width: 230 }}>① 処遇Iの基準年度</TableCell>
                <TableCell align="left">令和4年度</TableCell>
              </TableRow>
              {/* End Rows1 */}

              {/* Start Rows2 */}
              <TableRow>
                <TableCell align="left">② 園番号</TableCell>
                <TableCell align="left">566</TableCell>
              </TableRow>
              {/* End Rows2 */}

              {/* Start Rows3 */}
              <TableRow>
                <TableCell align="left">③ 施設名</TableCell>
                <TableCell align="left">いちざきみんなの家</TableCell>
              </TableRow>
              {/* End Rows3 */}

            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      {/* End Table 1 */}

      <Divider className="pt-7" />

      {/* Start 令和5年度賃金改善明細(職員別表) Grid */}
      <Grid container className='pt-3' justifyContent="start">
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography fontWeight="bold" sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-start'>
            令和 5 年度賃金改善明細(職員別表)
          </Typography>
        </Grid>
      </Grid>
      {/* End 令和5年度賃金改善明細(職員別表) Grid */}

      {/* Start Table 2 */}
      <TableContainer component={Paper} className="mt-2" sx={{ width: { xs: 'auto', sm: 'auto', md: 'auto', lg: 'auto' }, height: 700 }}>
        <Table sx={{ minWidth: 4000 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={{ width: 90, fontWeight: "bold" }} rowSpan={4} align="left">No.</TableCell>
              <TableCell style={{ width: 130, fontWeight: "bold" }} rowSpan={4} align="left">職員名</TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{ fontWeight: "bold" }} colSpan={3} align="center">改善実施有無</TableCell>
              <TableCell style={{ width: 130, fontWeight: "bold" }} rowSpan={4} align="center">職種</TableCell>
              <TableCell style={{ width: 130, fontWeight: "bold" }} rowSpan={4} align="center">常勤 非常勤*2</TableCell>
              <TableCell style={{ width: 130, fontWeight: "bold" }} rowSpan={4} align="center">経験年数*1</TableCell>
              <TableCell style={{ fontWeight: "bold" }} colSpan={2} align="center">常勤換算值※3</TableCell>
              <TableCell style={{ width: 130, fontWeight: "bold" }} rowSpan={4} align="center">法人役員との兼務</TableCell>
              <TableCell style={{ fontWeight: "bold" }} colSpan={10} align="center">起点賃金水準</TableCell>
              <TableCell style={{ fontWeight: "bold" }} colSpan={5} align="center">加算当年度内の賃金改善実施期間における支払賃金※6</TableCell>
              <TableCell style={{ width: 130, fontWeight: "bold" }} rowSpan={4} align="center">⑫のうち加算前年度の加算残額に係る支払賃金6 ⑬</TableCell>
              <TableCell style={{ width: 130, fontWeight: "bold" }} rowSpan={4} align="center">⑫のうち加算IIの新規事由による賃金改善額※7 ⑭</TableCell>
              <TableCell style={{ width: 130, fontWeight: "bold" }} rowSpan={4} align="center">⑫のうち加算IIIによる賃金改善額※8 ⑮</TableCell>
              <TableCell style={{ width: 130, fontWeight: "bold" }} rowSpan={4} align="center">賃金改善見込額 ⑯ ( ⑫ - ⑭ - ⑮ - ⑧ )</TableCell>
              <TableCell style={{ width: 130, fontWeight: "bold" }} rowSpan={4} align="center">備考</TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{ width: 100, fontWeight: "bold" }} rowSpan={3} align="center">処遇 I (賃金改善要件分)</TableCell>
              <TableCell style={{ fontWeight: "bold" }} rowSpan={3} align="center">処遇 II</TableCell>
              <TableCell style={{ fontWeight: "bold" }} rowSpan={3} align="center">処遇 III</TableCell>
              <TableCell style={{ width: 130, fontWeight: "bold" }} rowSpan={3} align="center">兼務</TableCell>
              <TableCell style={{ width: 130, fontWeight: "bold" }} rowSpan={3} align="center">非常勤</TableCell>
              <TableCell style={{ fontWeight: "bold" }} colSpan={5} align="center">基準年度における賃金水準を適用した場合の賃金*4</TableCell>
              <TableCell style={{ fontWeight: "bold" }} colSpan={3} align="center">人件費の改定状況部分※5</TableCell>
              <TableCell style={{ width: 130, fontWeight: "bold" }} rowSpan={3} align="center">令和4年度の加算 III 等による賃金改善額※ 6 ⑦</TableCell>
              <TableCell style={{ width: 130, fontWeight: "bold" }} rowSpan={3} align="center">計 ⑧ (④ + ⑥ - ⑦)</TableCell>
              <TableCell style={{ width: 130, fontWeight: "bold" }} rowSpan={3} align="center">基本給 ⑨</TableCell>
              <TableCell style={{ width: 130, fontWeight: "bold" }} rowSpan={3} align="center">各種手当 ⑩</TableCell>
              <TableCell style={{ width: 130, fontWeight: "bold" }} rowSpan={3} align="center">⑩のうち役職手当等(処遇II)</TableCell>
              <TableCell style={{ width: 130, fontWeight: "bold" }} rowSpan={3} align="center">賞与(一時金) ⑪</TableCell>
              <TableCell style={{ width: 130, fontWeight: "bold" }} rowSpan={3} align="center">計 ⑫ ( ⑨ + ⑩ + ⑪)</TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{ fontWeight: "bold" }} align="center">基本給①</TableCell>
              <TableCell style={{ fontWeight: "bold" }} align="center">各種手当②</TableCell>
              <TableCell style={{ fontWeight: "bold" }} align="center">②のうち役職手当等(処遇 II)</TableCell>
              <TableCell style={{ fontWeight: "bold" }} align="center">賞与(一時金)③</TableCell>
              <TableCell style={{ fontWeight: "bold" }} align="center">小計 ④( ① + ② + ③ )</TableCell>
              <TableCell style={{ fontWeight: "bold" }} align="center">改定率(%) ⑤</TableCell>
              <TableCell style={{ fontWeight: "bold" }} align="center">目安額( ④ - ② ) × ⑤</TableCell>
              <TableCell style={{ fontWeight: "bold" }} align="center">実費額 ⑥</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>

            {/* Start Rows 1 */}
            <TableRow hover role="checkbox" tabIndex={-1}>
              <TableCell align="left">1</TableCell>
              <TableCell align="left">Sting</TableCell>
              <TableCell align="center">
                <Checkbox {...label} />
              </TableCell>
              <TableCell align="center">
                <Checkbox {...label} />
              </TableCell>
              <TableCell align="center">
                <Checkbox {...label} />
              </TableCell>
              <TableCell align="left" style={{ width: 150, }}>
                <FormControl size="small" fullWidth>
                  <InputLabel id="training-field-label">研修分野</InputLabel>
                  <Select
                    labelId="training-field-label"
                    id="date-select"
                    label="研修分野"
                    sx={{ backgroundColor: "white" }}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                  </Select>
                </FormControl>
              </TableCell>
              <TableCell align="left" style={{ width: 150, }}>
                <FormControl size="small" fullWidth>
                  <InputLabel id="training-field-label">研修分野</InputLabel>
                  <Select
                    labelId="training-field-label"
                    id="date-select"
                    label="研修分野"
                    sx={{ backgroundColor: "white" }}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                  </Select>
                </FormControl>
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
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
            </TableRow>
            {/* End Rows 1 */}

            {/* Start Rows 2 */}
            <TableRow hover role="checkbox" tabIndex={-1}>
              <TableCell align="left">2</TableCell>
              <TableCell align="left">Sting</TableCell>
              <TableCell align="center">
                <Checkbox {...label} />
              </TableCell>
              <TableCell align="center">
                <Checkbox {...label} />
              </TableCell>
              <TableCell align="center">
                <Checkbox {...label} />
              </TableCell>
              <TableCell align="left" style={{ width: 150, }}>
                <FormControl size="small" fullWidth>
                  <InputLabel id="training-field-label">研修分野</InputLabel>
                  <Select
                    labelId="training-field-label"
                    id="date-select"
                    label="研修分野"
                    sx={{ backgroundColor: "white" }}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                  </Select>
                </FormControl>
              </TableCell>
              <TableCell align="left" style={{ width: 150, }}>
                <FormControl size="small" fullWidth>
                  <InputLabel id="training-field-label">研修分野</InputLabel>
                  <Select
                    labelId="training-field-label"
                    id="date-select"
                    label="研修分野"
                    sx={{ backgroundColor: "white" }}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                  </Select>
                </FormControl>
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
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
            </TableRow>
            {/* End Rows 2 */}

            {/* Start Rows 3 */}
            <TableRow hover role="checkbox" tabIndex={-1}>
              <TableCell align="left">3</TableCell>
              <TableCell align="left">Sting</TableCell>
              <TableCell align="center">
                <Checkbox {...label} />
              </TableCell>
              <TableCell align="center">
                <Checkbox {...label} />
              </TableCell>
              <TableCell align="center">
                <Checkbox {...label} />
              </TableCell>
              <TableCell align="left" style={{ width: 150, }}>
                <FormControl size="small" fullWidth>
                  <InputLabel id="training-field-label">研修分野</InputLabel>
                  <Select
                    labelId="training-field-label"
                    id="date-select"
                    label="研修分野"
                    sx={{ backgroundColor: "white" }}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                  </Select>
                </FormControl>
              </TableCell>
              <TableCell align="left" style={{ width: 150, }}>
                <FormControl size="small" fullWidth>
                  <InputLabel id="training-field-label">研修分野</InputLabel>
                  <Select
                    labelId="training-field-label"
                    id="date-select"
                    label="研修分野"
                    sx={{ backgroundColor: "white" }}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                  </Select>
                </FormControl>
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
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
            </TableRow>
            {/* End Rows 3 */}

            {/* Start Rows 4 */}
            <TableRow hover role="checkbox" tabIndex={-1}>
              <TableCell align="left">4</TableCell>
              <TableCell align="left">Sting</TableCell>
              <TableCell align="center">
                <Checkbox {...label} />
              </TableCell>
              <TableCell align="center">
                <Checkbox {...label} />
              </TableCell>
              <TableCell align="center">
                <Checkbox {...label} />
              </TableCell>
              <TableCell align="left" style={{ width: 150, }}>
                <FormControl size="small" fullWidth>
                  <InputLabel id="training-field-label">研修分野</InputLabel>
                  <Select
                    labelId="training-field-label"
                    id="date-select"
                    label="研修分野"
                    sx={{ backgroundColor: "white" }}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                  </Select>
                </FormControl>
              </TableCell>
              <TableCell align="left" style={{ width: 150, }}>
                <FormControl size="small" fullWidth>
                  <InputLabel id="training-field-label">研修分野</InputLabel>
                  <Select
                    labelId="training-field-label"
                    id="date-select"
                    label="研修分野"
                    sx={{ backgroundColor: "white" }}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                  </Select>
                </FormControl>
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
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
            </TableRow>
            {/* End Rows 4 */}

            {/* Start Rows 5 */}
            <TableRow hover role="checkbox" tabIndex={-1}>
              <TableCell align="left">5</TableCell>
              <TableCell align="left">Sting</TableCell>
              <TableCell align="center">
                <Checkbox {...label} />
              </TableCell>
              <TableCell align="center">
                <Checkbox {...label} />
              </TableCell>
              <TableCell align="center">
                <Checkbox {...label} />
              </TableCell>
              <TableCell align="left" style={{ width: 150, }}>
                <FormControl size="small" fullWidth>
                  <InputLabel id="training-field-label">研修分野</InputLabel>
                  <Select
                    labelId="training-field-label"
                    id="date-select"
                    label="研修分野"
                    sx={{ backgroundColor: "white" }}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                  </Select>
                </FormControl>
              </TableCell>
              <TableCell align="left" style={{ width: 150, }}>
                <FormControl size="small" fullWidth>
                  <InputLabel id="training-field-label">研修分野</InputLabel>
                  <Select
                    labelId="training-field-label"
                    id="date-select"
                    label="研修分野"
                    sx={{ backgroundColor: "white" }}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                  </Select>
                </FormControl>
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
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
            </TableRow>
            {/* End Rows 5 */}

            {/* Start Rows 6 */}
            <TableRow hover role="checkbox" tabIndex={-1}>
              <TableCell align="left">6</TableCell>
              <TableCell align="left">Sting</TableCell>
              <TableCell align="center">
                <Checkbox {...label} />
              </TableCell>
              <TableCell align="center">
                <Checkbox {...label} />
              </TableCell>
              <TableCell align="center">
                <Checkbox {...label} />
              </TableCell>
              <TableCell align="left" style={{ width: 150, }}>
                <FormControl size="small" fullWidth>
                  <InputLabel id="training-field-label">研修分野</InputLabel>
                  <Select
                    labelId="training-field-label"
                    id="date-select"
                    label="研修分野"
                    sx={{ backgroundColor: "white" }}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                  </Select>
                </FormControl>
              </TableCell>
              <TableCell align="left" style={{ width: 150, }}>
                <FormControl size="small" fullWidth>
                  <InputLabel id="training-field-label">研修分野</InputLabel>
                  <Select
                    labelId="training-field-label"
                    id="date-select"
                    label="研修分野"
                    sx={{ backgroundColor: "white" }}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                  </Select>
                </FormControl>
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
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
            </TableRow>
            {/* End Rows 6 */}

            {/* Start Rows 7 */}
            <TableRow hover role="checkbox" tabIndex={-1}>
              <TableCell align="left">7</TableCell>
              <TableCell align="left">Sting</TableCell>
              <TableCell align="center">
                <Checkbox {...label} />
              </TableCell>
              <TableCell align="center">
                <Checkbox {...label} />
              </TableCell>
              <TableCell align="center">
                <Checkbox {...label} />
              </TableCell>
              <TableCell align="left" style={{ width: 150, }}>
                <FormControl size="small" fullWidth>
                  <InputLabel id="training-field-label">研修分野</InputLabel>
                  <Select
                    labelId="training-field-label"
                    id="date-select"
                    label="研修分野"
                    sx={{ backgroundColor: "white" }}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                  </Select>
                </FormControl>
              </TableCell>
              <TableCell align="left" style={{ width: 150, }}>
                <FormControl size="small" fullWidth>
                  <InputLabel id="training-field-label">研修分野</InputLabel>
                  <Select
                    labelId="training-field-label"
                    id="date-select"
                    label="研修分野"
                    sx={{ backgroundColor: "white" }}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                  </Select>
                </FormControl>
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
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
            </TableRow>
            {/* End Rows 7 */}

            {/* Start Rows 8 */}
            <TableRow hover role="checkbox" tabIndex={-1}>
              <TableCell align="left">8</TableCell>
              <TableCell align="left">Sting</TableCell>
              <TableCell align="center">
                <Checkbox {...label} />
              </TableCell>
              <TableCell align="center">
                <Checkbox {...label} />
              </TableCell>
              <TableCell align="center">
                <Checkbox {...label} />
              </TableCell>
              <TableCell align="left" style={{ width: 150, }}>
                <FormControl size="small" fullWidth>
                  <InputLabel id="training-field-label">研修分野</InputLabel>
                  <Select
                    labelId="training-field-label"
                    id="date-select"
                    label="研修分野"
                    sx={{ backgroundColor: "white" }}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                  </Select>
                </FormControl>
              </TableCell>
              <TableCell align="left" style={{ width: 150, }}>
                <FormControl size="small" fullWidth>
                  <InputLabel id="training-field-label">研修分野</InputLabel>
                  <Select
                    labelId="training-field-label"
                    id="date-select"
                    label="研修分野"
                    sx={{ backgroundColor: "white" }}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                  </Select>
                </FormControl>
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
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
            </TableRow>
            {/* End Rows 8 */}

            {/* Start Rows 9 */}
            <TableRow hover role="checkbox" tabIndex={-1}>
              <TableCell align="left">9</TableCell>
              <TableCell align="left">Sting</TableCell>
              <TableCell align="center">
                <Checkbox {...label} />
              </TableCell>
              <TableCell align="center">
                <Checkbox {...label} />
              </TableCell>
              <TableCell align="center">
                <Checkbox {...label} />
              </TableCell>
              <TableCell align="left" style={{ width: 150, }}>
                <FormControl size="small" fullWidth>
                  <InputLabel id="training-field-label">研修分野</InputLabel>
                  <Select
                    labelId="training-field-label"
                    id="date-select"
                    label="研修分野"
                    sx={{ backgroundColor: "white" }}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                  </Select>
                </FormControl>
              </TableCell>
              <TableCell align="left" style={{ width: 150, }}>
                <FormControl size="small" fullWidth>
                  <InputLabel id="training-field-label">研修分野</InputLabel>
                  <Select
                    labelId="training-field-label"
                    id="date-select"
                    label="研修分野"
                    sx={{ backgroundColor: "white" }}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                  </Select>
                </FormControl>
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
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
            </TableRow>
            {/* End Rows 9 */}

            {/* Start Rows 10 */}
            <TableRow hover role="checkbox" tabIndex={-1}>
              <TableCell align="left">10</TableCell>
              <TableCell align="left">Sting</TableCell>
              <TableCell align="center">
                <Checkbox {...label} />
              </TableCell>
              <TableCell align="center">
                <Checkbox {...label} />
              </TableCell>
              <TableCell align="center">
                <Checkbox {...label} />
              </TableCell>
              <TableCell align="left" style={{ width: 150, }}>
                <FormControl size="small" fullWidth>
                  <InputLabel id="training-field-label">研修分野</InputLabel>
                  <Select
                    labelId="training-field-label"
                    id="date-select"
                    label="研修分野"
                    sx={{ backgroundColor: "white" }}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                  </Select>
                </FormControl>
              </TableCell>
              <TableCell align="left" style={{ width: 150, }}>
                <FormControl size="small" fullWidth>
                  <InputLabel id="training-field-label">研修分野</InputLabel>
                  <Select
                    labelId="training-field-label"
                    id="date-select"
                    label="研修分野"
                    sx={{ backgroundColor: "white" }}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                  </Select>
                </FormControl>
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
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
              <TableCell align="center">String</TableCell>
            </TableRow>
            {/* End Rows 10 */}
          </TableBody>
          {/* Start Table Footer */}
          <TableFooter>
            <TableRow>
              <TableCell colSpan={12} style={{ fontWeight: 'bold' ,position: 'sticky', bottom: 0, background: 'white', zIndex: 1 }}>
                小計
              </TableCell>
            </TableRow>
          </TableFooter>
          {/* End Table Footer */}
        </Table>
      </TableContainer>
      {/* End Table 2 */}

      <Divider className="pt-7" />

      {/* Start 【記入における留意事項】 Grid */}
      <Grid container className='pt-3' justifyContent="start">
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography fontWeight="bold" sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-start'>
            【記入における留意事項】
          </Typography>
        </Grid>
      </Grid>
      {/* End 【記入における留意事項】 Grid */}

      {/* Start 施設・事業所に現に勤務している職員全員(職種を問わず、非常勤を含む。)を記載すること。 Grid */}
      <Grid container className='pt-5' justifyContent="start">
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-1 text-start'>
            施設・事業所に現に勤務している職員全員(職種を問わず、非常勤を含む。)を記載すること。
          </Typography>
        </Grid>
      </Grid>
      {/* End 施設・事業所に現に勤務している職員全員(職種を問わず、非常勤を含む。)を記載すること。 Grid */}

      {/* Start 備考欄には、年度途中の採用や退職がある場合にはその旨、また、賃金改善額が他の職員と比較して高額 Grid */}
      <Grid container justifyContent="start">
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-1 text-start'>
            備考欄には、年度途中の採用や退職がある場合にはその旨、また、賃金改善額が他の職員と比較して高額(低額、賃金改善を実施しない場合も含む)である場合につ
            いてはその理由を記載すること。
          </Typography>
        </Grid>
      </Grid>
      {/* End 備考欄には、年度途中の採用や退職がある場合にはその旨、また、賃金改善額が他の職員と比較して高額 Grid */}

      {/* Start ※1経験年数については、「施設型給付費等に係る処遇改善等加算及び処遇改善等加算について」 Grid */}
      <Grid container justifyContent="start">
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-1 text-start'>
            ※1経験年数については、「施設型給付費等に係る処遇改善等加算及び処遇改善等加算について」(冷和2年7月30日 府子本第761号、2文科初第643号、子発0730
            第2号以下「処遇改善等加算通知」という)第4の1によるものとする。
          </Typography>
        </Grid>
      </Grid>
      {/* End ※1経験年数については、「施設型給付費等に係る処遇改善等加算及び処遇改善等加算について」 Grid */}

      {/* Start ※2「常勤」とは、原則として施設で定めた勤務時間(所定労働時間) Grid */}
      <Grid container justifyContent="start">
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-1 text-start'>
            ※2「常勤」とは、原則として施設で定めた勤務時間(所定労働時間)の全てを勤務する者、又は1日6時間以上かつ20日以上勤務している者をいい、「非常勤」とは
            常勤以外の者をいう。
          </Typography>
        </Grid>
      </Grid>
      {/* End ※2「常勤」とは、原則として施設で定めた勤務時間(所定労働時間) Grid */}

      {/* Start ※3常勤換算値について、常勤の者については1.0とし、非常勤の者については下記の算式によって得た値とする。 Grid */}
      <Grid container justifyContent="start">
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-1 text-start'>
            ※3常勤換算値について、常勤の者については1.0とし、非常勤の者については下記の算式によって得た値とする。算式 常勤以外の職員の1か月の勤務時間数の合計
            各施設・事業所の就業規則等で定めた常勤職員の1か月の勤務時間数=常勤換算値
          </Typography>
        </Grid>
      </Grid>
      {/* End ※3常勤換算値について、常勤の者については1.0とし、非常勤の者については下記の算式によって得た値とする。 Grid */}

      {/* Start ※4法定福利費等の事業主負担額を除く。基準年度については、処遇改善等加算通知第4の2(1)キは(2)オによるものとする。 Grid */}
      <Grid container justifyContent="start">
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-1 text-start'>
            ※4法定福利費等の事業主負担額を除く。基準年度については、処遇改善等加算通知第4の2(1)キは(2)オによるものとする。
          </Typography>
        </Grid>
      </Grid>
      {/* End ※4法定福利費等の事業主負担額を除く。基準年度については、処遇改善等加算通知第4の2(1)キは(2)オによるものとする。 Grid */}

      {/* Start ※5人件費の改定状況部分については、施設の職員構成等を踏まえ、施設の判断で適切に配分を行った額を記入すること。法定福利費等の事業主負担額を除く。 Grid */}
      <Grid container justifyContent="start">
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-1 text-start'>
            ※5人件費の改定状況部分については、施設の職員構成等を踏まえ、施設の判断で適切に配分を行った額を記入すること。法定福利費等の事業主負担額を除く。
          </Typography>
        </Grid>
      </Grid>
      {/* End ※5人件費の改定状況部分については、施設の職員構成等を踏まえ、施設の判断で適切に配分を行った額を記入すること。法定福利費等の事業主負担額を除く。 Grid */}

      {/* Start  ※7別紙様式7別添1(4)又は(5)における「処遇改善等加算による賃金改善額」 Grid */}
      <Grid container justifyContent="start">
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-1 text-start'>
            ※7別紙様式7別添1(4)又は(5)における「処遇改善等加算による賃金改善額」の「うち基準翌年度から加算当年度における賃金改善分」を対象職員ごとに
            算出して記入すること。法定福利費等の事業主負担額を除く。
          </Typography>
        </Grid>
      </Grid>
      {/* End  ※7別紙様式7別添1(4)又は(5)における「処遇改善等加算による賃金改善額」 Grid */}

      {/* Start  ※8別紙様式9別添1における「加算血による賃金改善見込額」を対象職員ごとに記入すること。法定福利費等の事業主負担額を除く。 Grid */}
      <Grid container justifyContent="start">
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-1 text-start'>
            ※8別紙様式9別添1における「加算血による賃金改善見込額」を対象職員ごとに記入すること。法定福利費等の事業主負担額を除く。
          </Typography>
        </Grid>
      </Grid>
      {/* End  ※8別紙様式9別添1における「加算血による賃金改善見込額」を対象職員ごとに記入すること。法定福利費等の事業主負担額を除く。 Grid */}


    </>
  );
}
