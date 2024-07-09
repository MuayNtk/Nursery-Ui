import { Grid, Typography, TextField, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, FormControl, Select, MenuItem, FormControlLabel, Checkbox, InputAdornment, TextareaAutosize } from "@mui/material";

export default function WageAdjustmentsThree() {
  
      return (
        <>
      {/* Start 別紙様式 7 別添 1 Grid */}
      <Grid container className='pt-3' justifyContent="start">
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography fontWeight="bold" sx={{ fontSize: { xs: '14px', sm: '16px', md: '18px', lg: '20px' } }} className='pt-2 text-start'>
            令和5年度処遇改善等加算II加算対象職員名簿
          </Typography>
        </Grid>
      </Grid>
      {/* End 別紙様式 7 別添 1 Grid */}

      {/* Start furigana Grid */}
      <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-5 pl-3 justify-start' >
        <Typography component='div' fontWeight={500} className="pl-5 lg:pl-24 pt-6">
          施設.事業所名:
        </Typography>
        <Grid item xs={7.5} sm={7} md={3} lg={4}>
          <TextField
            className='w-full'
            id="furigana-input"
            label=""
            type="text"
            size='small'
            sx={{
              backgroundColor: "white",
            }}
          />
        </Grid>
      </Grid>

      <Grid container className='pt-6' justifyContent="center">
        <TableContainer component={Paper} className="" sx={{ width: { xs: 'auto', sm: 'auto', md: 'auto', lg: 'auto' } }}>
          <Table sx={{ minWidth: 2000 }} aria-label="simple table">
            <TableHead >
              <TableRow>
                <TableCell style={{ width: 100, fontWeight: 'bold', background: '', }} align="center"></TableCell>
                <TableCell style={{ width: 200, fontWeight: 'bold', background: '', }} align="center"></TableCell>
                <TableCell style={{ width: 200, fontWeight: 'bold', background: '', }} align="center"></TableCell>
                <TableCell style={{ width: 400, fontWeight: 'bold', background: '', }} align="center"></TableCell>
                <TableCell style={{ width: 400, fontWeight: 'bold', background: '', }} align="center" colSpan={2}>常勤換算值 ※3</TableCell>
                <TableCell style={{ width: 400, fontWeight: 'bold', background: '', }} align="center"></TableCell>
                <TableCell style={{ width: 400, fontWeight: 'bold', background: '', }} align="center"></TableCell>
                <TableCell style={{ width: 400, fontWeight: 'bold', background: '', }} align="center"></TableCell>
                <TableCell style={{ width: 200, fontWeight: 'bold', background: '', }} align="center"></TableCell>
                <TableCell style={{ width: 400, fontWeight: 'bold', background: '', }} align="center"></TableCell>
                <TableCell style={{ width: 200, fontWeight: 'bold', background: '', }} align="center"></TableCell>
              </TableRow>
            </TableHead>
            <TableHead >
              <TableRow>
                <TableCell style={{ width: 100, fontWeight: 'bold', background: '', }} align="center">No.</TableCell>
                <TableCell style={{ width: 200, fontWeight: 'bold', background: '', }} align="center">職員名</TableCell>
                <TableCell style={{ width: 200, fontWeight: 'bold', background: '', }} align="center">職種 ※1</TableCell>
                <TableCell style={{ width: 200, fontWeight: 'bold', background: '', }} align="center">職種</TableCell>
                <TableCell style={{ width: 200, fontWeight: 'bold', background: '', }} align="center">常勤</TableCell>
                <TableCell style={{ width: 200, fontWeight: 'bold', background: '', }} align="center">非常勤</TableCell>
                <TableCell style={{ width: 200, fontWeight: 'bold', background: '', }} align="center">法人役員 との兼務</TableCell>
                <TableCell style={{ width: 200, fontWeight: 'bold', background: '', }} align="center">加算皿による賃金改善見込 額※4</TableCell>
                <TableCell style={{ width: 200, fontWeight: 'bold', background: '', }} align="center">基本給及び決て毎月支手当</TableCell>
                <TableCell style={{ width: 200, fontWeight: 'bold', background: '', }} align="center">その他</TableCell>
                <TableCell style={{ width: 200, fontWeight: 'bold', background: '', }} align="center">賃金改善に伴い増加する法定福利費等の事業主負担分 ※5</TableCell>
                <TableCell style={{ width: 200, fontWeight: 'bold', background: '', }} align="center">備考 ※6</TableCell>

              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell style={{ width: 100, background: '', }} align="center">1</TableCell>
                <TableCell style={{ width: 200, background: '', }} align="center">00 00</TableCell>
                <TableCell style={{ width: 200, background: '', }} align="center"><FormControl size="small" className="w-20">
                  <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>職種</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                  </Select>
                </FormControl></TableCell>
                <TableCell style={{ width: 200, background: '', }} align="center"><FormControl size="small" className="w-20">
                  <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>職種</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                  </Select>
                </FormControl></TableCell>
                <TableCell style={{ width: 200, background: '', }} align="center"><TextField
                  className='w-32'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 200, background: '', }} align="center"><TextField
                  className='w-32'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 200, background: '', }} align="center"> <FormControlLabel control={<Checkbox />} label="" /></TableCell>
                <TableCell style={{ width: 200, background: '', }} align="center"><TextField id="school-number" name="school-number" type="text" size="small" InputProps={{
                  endAdornment: <InputAdornment position="end">円</InputAdornment>,
                }} fullWidth sx={{ backgroundColor: 'white' }} /></TableCell>
                <TableCell style={{ width: 200, background: '', }} align="center"><TextField id="school-number" name="school-number" type="text" size="small" InputProps={{
                  endAdornment: <InputAdornment position="end">円</InputAdornment>,
                }} fullWidth sx={{ backgroundColor: 'white' }} /></TableCell>
                <TableCell style={{ width: 200, background: '', }} align="center"><TextField id="school-number" name="school-number" type="text" size="small" InputProps={{
                  endAdornment: <InputAdornment position="end">円</InputAdornment>,
                }} fullWidth sx={{ backgroundColor: 'white' }} /></TableCell>
                <TableCell style={{ width: 200, background: '', }} align="center"><TextField
                  className='w-32'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 200, background: '', }} align="center"><TextareaAutosize
                  id="content"
                  name="content"
                  minRows={3}
                  maxRows={100}
                  className="w-40"
                  style={{ border: '1px solid gray', borderRadius: '4px' }}
                /></TableCell>
              </TableRow>

              <TableRow>
                <TableCell style={{ width: 100, background: '', }} align="center">1</TableCell>
                <TableCell style={{ width: 200, background: '', }} align="center">00 00</TableCell>
                <TableCell style={{ width: 200, background: '', }} align="center"><FormControl size="small" className="w-20">
                  <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>職種</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                  </Select>
                </FormControl></TableCell>
                <TableCell style={{ width: 200, background: '', }} align="center"><FormControl size="small" className="w-20">
                  <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>職種</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                  </Select>
                </FormControl></TableCell>
                <TableCell style={{ width: 200, background: '', }} align="center"><TextField
                  className='w-32'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 200, background: '', }} align="center"><TextField
                  className='w-32'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 200, background: '', }} align="center"> <FormControlLabel control={<Checkbox />} label="" /></TableCell>
                <TableCell style={{ width: 200, background: '', }} align="center"><TextField id="school-number" name="school-number" type="text" size="small" InputProps={{
                  endAdornment: <InputAdornment position="end">円</InputAdornment>,
                }} fullWidth sx={{ backgroundColor: 'white' }} /></TableCell>
                <TableCell style={{ width: 200, background: '', }} align="center"><TextField id="school-number" name="school-number" type="text" size="small" InputProps={{
                  endAdornment: <InputAdornment position="end">円</InputAdornment>,
                }} fullWidth sx={{ backgroundColor: 'white' }} /></TableCell>
                <TableCell style={{ width: 200, background: '', }} align="center"><TextField id="school-number" name="school-number" type="text" size="small" InputProps={{
                  endAdornment: <InputAdornment position="end">円</InputAdornment>,
                }} fullWidth sx={{ backgroundColor: 'white' }} /></TableCell>
                <TableCell style={{ width: 200, background: '', }} align="center"><TextField
                  className='w-32'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 200, background: '', }} align="center"><TextareaAutosize
                  id="content"
                  name="content"
                  minRows={3}
                  maxRows={100}
                  className="w-40"
                  style={{ border: '1px solid gray', borderRadius: '4px' }}
                /></TableCell>

              </TableRow>

              <TableRow>
                <TableCell style={{ width: 100, background: '', }} align="center">1</TableCell>
                <TableCell style={{ width: 200, background: '', }} align="center">00 00</TableCell>
                <TableCell style={{ width: 200, background: '', }} align="center"><FormControl size="small" className="w-20">
                  <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>職種</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                  </Select>
                </FormControl></TableCell>
                <TableCell style={{ width: 200, background: '', }} align="center"><FormControl size="small" className="w-20">
                  <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>職種</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                  </Select>
                </FormControl></TableCell>
                <TableCell style={{ width: 200, background: '', }} align="center"><TextField
                  className='w-32'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 200, background: '', }} align="center"><TextField
                  className='w-32'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 200, background: '', }} align="center"> <FormControlLabel control={<Checkbox />} label="" /></TableCell>
                <TableCell style={{ width: 200, background: '', }} align="center"><TextField id="school-number" name="school-number" type="text" size="small" InputProps={{
                  endAdornment: <InputAdornment position="end">円</InputAdornment>,
                }} fullWidth sx={{ backgroundColor: 'white' }} /></TableCell>
                <TableCell style={{ width: 200, background: '', }} align="center"><TextField id="school-number" name="school-number" type="text" size="small" InputProps={{
                  endAdornment: <InputAdornment position="end">円</InputAdornment>,
                }} fullWidth sx={{ backgroundColor: 'white' }} /></TableCell>
                <TableCell style={{ width: 200, background: '', }} align="center"><TextField id="school-number" name="school-number" type="text" size="small" InputProps={{
                  endAdornment: <InputAdornment position="end">円</InputAdornment>,
                }} fullWidth sx={{ backgroundColor: 'white' }} /></TableCell>
                <TableCell style={{ width: 200, background: '', }} align="center"><TextField
                  className='w-32'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 200, background: '', }} align="center"><TextareaAutosize
                  id="content"
                  name="content"
                  minRows={3}
                  maxRows={100}
                  className="w-40"
                  style={{ border: '1px solid gray', borderRadius: '4px' }}
                /></TableCell>

              </TableRow>

              <TableRow>
                <TableCell style={{ width: 100, background: '', }} align="center"></TableCell>
                <TableCell style={{ width: 200, background: '', }} align="center"></TableCell>
                <TableCell style={{ width: 200, background: '', }} align="center"></TableCell>
                <TableCell style={{ width: 200, fontWeight: 'bold', background: '', }} align="center">総額</TableCell>
                <TableCell style={{ width: 200, background: '', }} align="center"></TableCell>
                <TableCell style={{ width: 200, background: '', }} align="center"></TableCell>
                <TableCell style={{ width: 200, background: '', }} align="center"> </TableCell>
                <TableCell style={{ width: 200, background: '', }} align="center"><TextField id="school-number" name="school-number" type="text" size="small" InputProps={{
                  endAdornment: <InputAdornment position="end">円</InputAdornment>,
                }} fullWidth sx={{ backgroundColor: 'white' }} /></TableCell>
                <TableCell style={{ width: 200, background: '', }} align="center"><TextField id="school-number" name="school-number" type="text" size="small" InputProps={{
                  endAdornment: <InputAdornment position="end">円</InputAdornment>,
                }} fullWidth sx={{ backgroundColor: 'white' }} /></TableCell>
                <TableCell style={{ width: 200, background: '', }} align="center"><TextField id="school-number" name="school-number" type="text" size="small" InputProps={{
                  endAdornment: <InputAdornment position="end">円</InputAdornment>,
                }} fullWidth sx={{ backgroundColor: 'white' }} /></TableCell>
                <TableCell style={{ width: 200, background: '', }} align="center" colSpan={2}><TextField id="school-number" name="school-number" type="text" size="small" InputProps={{
                  endAdornment: <InputAdornment position="end">円</InputAdornment>,
                }} fullWidth sx={{ backgroundColor: 'white' }} /></TableCell>
                <TableCell style={{ width: 200, background: '', }} align="center"></TableCell>

              </TableRow>



              <TableRow>
                <TableCell style={{ width: 200, fontWeight: 'bold', background: '', }} align="center" colSpan={6}>加算による賃金改善のうち、基本給及び決まって毎月支払ぅ手当によるものの割合*7</TableCell>
                <TableCell style={{ width: 200, fontWeight: 'bold', background: '', }} align="center" ></TableCell>
                <TableCell style={{ width: 200, fontWeight: 'bold', background: '', }} align="center" ></TableCell>
                <TableCell style={{ width: 200, fontWeight: 'bold', background: '', }} align="center" ></TableCell>
                <TableCell style={{ width: 200, fontWeight: 'bold', background: '', }} align="center" ></TableCell>
                <TableCell style={{ width: 200, background: '', }} align="center"><TextField id="school-number" name="school-number" type="text" size="small" InputProps={{
                  endAdornment: <InputAdornment position="end">%</InputAdornment>,
                }} fullWidth sx={{ backgroundColor: 'white' }} /></TableCell>
                <TableCell style={{ width: 200, background: '', }} align="center"><TextField id="school-number" name="school-number" type="text" size="small" InputProps={{
                  endAdornment: <InputAdornment position="end">OK</InputAdornment>,
                }} fullWidth sx={{ backgroundColor: 'white' }} /></TableCell>

              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid >
      {/* End Table */}

      {/* Start 別紙様式 7 別添 1 Grid */}
      <Grid container className='pt-3' justifyContent="start">
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography fontWeight="bold" sx={{color: '#EEC636', fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15' } }} className='pt-2 text-justify'>
          【記入における留意事項】
          </Typography>
        </Grid>
      </Grid>
      {/* End 別紙様式 7 別添 1 Grid */}
      
      {/* Start 別紙様式 7 別添 1 Grid */}
      <Grid container className='' justifyContent="start">
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography  sx={{color: 'black', fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15' } }} className='pt-2 text-justify'>
          ※1施設・事業所に現に勤務している職員全員(職種を問わず、非常勤を含む。)を記入すること。
          </Typography>
        </Grid>
      </Grid>
      {/* End 別紙様式 7 別添 1 Grid */}

        {/* Start 別紙様式 7 別添 1 Grid */}
        <Grid container className='' justifyContent="start">
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography  sx={{color: 'black', fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15' } }} className='pt-2 text-justify'>
          ※2「常勤」とは、原則として施設で定めた勤務時間(所定労働時間)の全てを勤務する者、又は1日6時間以上かつ20日以上勤務している者をいい、「非常勤」とは
常勤以外の者をいう。
          </Typography>
        </Grid>
      </Grid>
      {/* End 別紙様式 7 別添 1 Grid */}

        {/* Start 別紙様式 7 別添 1 Grid */}
        <Grid container className='' justifyContent="start">
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography  sx={{color: 'black', fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15' } }} className='pt-2 text-justify'>
          ※3常勤換算値について、常勤の者については10とし、非常勤の者については、以下の算式によって得た値とする。〔算式〕常勤以外の職員の1か月の勤務時間
数の合計+各施設・事業所の就業規則等で定めた常勤職員の1か月の勤務時間数 : 常勤換算値
          </Typography>
        </Grid>
      </Grid>
      {/* End 別紙様式 7 別添 1 Grid */}

        {/* Start 別紙様式 7 別添 1 Grid */}
        <Grid container className='' justifyContent="start">
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography  sx={{color: 'black', fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15' } }} className='pt-2 text-justify'>
          ※4賃金改善に伴い増加する法定福利費等の事業主負担分を除く。
          </Typography>
        </Grid>
      </Grid>
      {/* End 別紙様式 7 別添 1 Grid */}

        {/* Start 別紙様式 7 別添 1 Grid */}
        <Grid container className='' justifyContent="start">
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography  sx={{color: 'black', fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15' } }} className='pt-2 text-justify'>
          ※5賃金改善に伴い増加する法定福利費等の事業主負担分については以下の算式により算定することを標準とする。〔算式〕加算前年度における法定福利費等の事業
主負担分の総額+加算前年度における賃金の総額×賃金改善額
          </Typography>
        </Grid>
      </Grid>
      {/* End 別紙様式 7 別添 1 Grid */}

        {/* Start 別紙様式 7 別添 1 Grid */}
        <Grid container className='' justifyContent="start">
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography  sx={{color: 'black', fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15' } }} className='pt-2 text-justify'>
          ※6備考欄には、賃金改善実施期間中の採用や退職がある場合にはその旨、また、賃金改善額が他の職員と比較して高額(低額、賃金改善を実施しない場合も含む)で
ある場合についてはその理由を記入すること。
          </Typography>
        </Grid>
      </Grid>
      {/* End 別紙様式 7 別添 1 Grid */}

        {/* Start 別紙様式 7 別添 1 Grid */}
        <Grid container className='' justifyContent="start">
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography  sx={{color: 'black', fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15' } }} className='pt-2 text-justify'>
          ※7「加算血による賃金改善見込額」に占める「基本給及び決まって毎月支払ぅ手当による金額」の割合が3分の2以上であることが必要。法定福利費等の事業主負
担額を除
          </Typography>
        </Grid>
      </Grid>
      {/* End 別紙様式 7 別添 1 Grid */}
      </>
      );
    }
    
    