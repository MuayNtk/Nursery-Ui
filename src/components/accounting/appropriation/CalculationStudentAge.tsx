import { Button, FormControl, Grid, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, TextareaAutosize, Typography, } from '@mui/material'
export default function CalculationStudentAge() {

  return (
    <>
      <Grid container className='h-14 pt-3' justifyContent="end" >
        <Grid item xs={6} sm={6} md={6} lg={3} className='pt-2 ' >
          <TextField
            className='w-full '
            id="-input"
            label="園番号"
            type="text"
            size='small'
            sx={{
              backgroundColor: "white",
              fontSize: { xs: 11, sm: 11, md: 11, lg: 16, },
              marginLeft: { xs: -2, sm: -1, md: -3, lg: -4, }
            }}
          />
        </Grid>
      </Grid>

      <Grid container className='h-14 pt-3' justifyContent="center" >
        <Grid item xs={12} sm={12} md={12} lg={12} className='pt-2 ' >
          <Typography
            component="div"
            sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, fontWeight: 'bold' }}
            className='flex justify-center'>
            【平均年齢別児童数計算表(認定こども園、保育所等)】
          </Typography>
        </Grid>
      </Grid>
      <Grid container className='h-14 pt-3 pl-4' justifyContent="center" >
        <Grid item xs={6} sm={6} md={6} lg={3} className='pt-2 ' >
          <TextField
            className='w-full '
            id="-input"
            label="施設.事業所名"
            type="text"
            size='small'
            sx={{
              backgroundColor: "white",
              fontSize: { xs: 11, sm: 11, md: 11, lg: 16, },
              marginLeft: { xs: -2, sm: -1, md: -3, lg: -4, }
            }}
          />
        </Grid>
      </Grid>
      <Grid container className='h-14 pt-5' justifyContent="center" >
        <Grid item xs={12} sm={12} md={12} lg={12} className='pt-2 ' >
          <Typography
            component="div"
            sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 } }}
            className='flex justify-start'>
            黄緑セルは入力項目、黄色(オレンジ)セルは自動計算.
          </Typography>
        </Grid>
      </Grid><Grid container className='h-14 ' justifyContent="center" >
        <Grid item xs={12} sm={12} md={12} lg={12} className='pt-2 ' >
          <Typography
            component="div"
            sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 } }}
            className='flex justify-start'>
            児童数は、月初日利用児童数を入力すること。
          </Typography>
        </Grid>
      </Grid>

      <Grid container className='pt-3' justifyContent="center">
        <TableContainer component={Paper} className="" sx={{ width: { xs: 'auto', sm: 'auto', md: 'auto', lg: 1500 } }}>
          <Table sx={{ minWidth: 1500 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell style={{ fontWeight: "bold", background: '#D3DCF1', }} rowSpan={2} align="center">令和4年度</TableCell>
                <TableCell style={{ fontWeight: "bold", background: '#D3DCF1', }} colSpan={14} align="center">本園分</TableCell>
                <TableCell style={{ fontWeight: "bold", background: '#D3DCF1', }} rowSpan={2} align="center">本園分</TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{ fontWeight: "bold", background: '#D3DCF1', }} align="center"></TableCell>
                <TableCell style={{ fontWeight: "bold", background: '#D3DCF1', }} align="center">4月</TableCell>
                <TableCell style={{ fontWeight: "bold", background: '#D3DCF1', }} align="center">5月</TableCell>
                <TableCell style={{ fontWeight: "bold", background: '#D3DCF1', }} align="center">6月</TableCell>
                <TableCell style={{ fontWeight: "bold", background: '#D3DCF1', }} align="center">7月</TableCell>
                <TableCell style={{ fontWeight: "bold", background: '#D3DCF1', }} align="center">8月</TableCell>
                <TableCell style={{ fontWeight: "bold", background: '#D3DCF1', }} align="center">9月</TableCell>
                <TableCell style={{ fontWeight: "bold", background: '#D3DCF1', }} align="center">10月</TableCell>
                <TableCell style={{ fontWeight: "bold", background: '#D3DCF1', }} align="center">11月</TableCell>
                <TableCell style={{ fontWeight: "bold", background: '#D3DCF1', }} align="center">12月</TableCell>
                <TableCell style={{ fontWeight: "bold", background: '#D3DCF1', }} align="center">1月</TableCell>
                <TableCell style={{ fontWeight: "bold", background: '#D3DCF1', }} align="center">2月</TableCell>
                <TableCell style={{ fontWeight: "bold", background: '#D3DCF1', }} align="center">3月</TableCell>
                <TableCell style={{ fontWeight: "bold", background: '#D3DCF1', }} align="center"></TableCell>

              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell style={{ width: 100, }} align="center"></TableCell>
                <TableCell style={{ width: 90, }} align="center"></TableCell>
                <TableCell style={{ width: 90, }} align="center"></TableCell>
                <TableCell style={{ width: 90, }} align="center"></TableCell>
                <TableCell style={{ width: 90, }} align="center"></TableCell>
                <TableCell style={{ width: 90, }} align="center"></TableCell>
                <TableCell style={{ width: 90, }} align="center"></TableCell>
                <TableCell style={{ width: 90, }} align="center"></TableCell>
                <TableCell style={{ width: 90, }} align="center"></TableCell>
                <TableCell style={{ width: 90, }} align="center"></TableCell>
                <TableCell style={{ width: 80, }} align="center"></TableCell>
                <TableCell style={{ width: 80, }} align="center"></TableCell>
                <TableCell style={{ width: 90, }} align="center"></TableCell>
                <TableCell style={{ width: 90, }} align="center"></TableCell>


              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid >
      {/* End Table */}

      <Grid container className='h-14 pt-10' justifyContent="center" >
        <Grid item xs={12} sm={12} md={12} lg={12} className='pt-2 ' >
          <Typography
            component="div"
            sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 } }}
            className='flex justify-start'>
            (2)前年実績による令和5年度見込み年齢別平均児童数
          </Typography>
        </Grid>
      </Grid>

      <Grid container className='pt-5' justifyContent="center">
        <TableContainer component={Paper} className="" sx={{ width: { xs: 'auto', sm: 'auto', md: 'auto', lg: 1500 } }}>
          <Table sx={{ minWidth: 1500 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell style={{ fontWeight: "bold", background: '#D3DCF1', }} rowSpan={2} align="center">令和4年度</TableCell>
                <TableCell style={{ fontWeight: "bold", background: '#D3DCF1', }} colSpan={14} align="center">本園分</TableCell>
                <TableCell style={{ fontWeight: "bold", background: '#D3DCF1', }} rowSpan={2} align="center">本園分</TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{ fontWeight: "bold", background: '#D3DCF1', }} align="center"></TableCell>
                <TableCell style={{ fontWeight: "bold", background: '#D3DCF1', }} align="center">4月</TableCell>
                <TableCell style={{ fontWeight: "bold", background: '#D3DCF1', }} align="center">5月</TableCell>
                <TableCell style={{ fontWeight: "bold", background: '#D3DCF1', }} align="center">6月</TableCell>
                <TableCell style={{ fontWeight: "bold", background: '#D3DCF1', }} align="center">7月</TableCell>
                <TableCell style={{ fontWeight: "bold", background: '#D3DCF1', }} align="center">8月</TableCell>
                <TableCell style={{ fontWeight: "bold", background: '#D3DCF1', }} align="center">9月</TableCell>
                <TableCell style={{ fontWeight: "bold", background: '#D3DCF1', }} align="center">10月</TableCell>
                <TableCell style={{ fontWeight: "bold", background: '#D3DCF1', }} align="center">11月</TableCell>
                <TableCell style={{ fontWeight: "bold", background: '#D3DCF1', }} align="center">12月</TableCell>
                <TableCell style={{ fontWeight: "bold", background: '#D3DCF1', }} align="center">1月</TableCell>
                <TableCell style={{ fontWeight: "bold", background: '#D3DCF1', }} align="center">2月</TableCell>
                <TableCell style={{ fontWeight: "bold", background: '#D3DCF1', }} align="center">3月</TableCell>
                <TableCell style={{ fontWeight: "bold", background: '#D3DCF1', }} align="center"></TableCell>

              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell style={{ width: 100, }} align="center"></TableCell>
                <TableCell style={{ width: 90, }} align="center"></TableCell>
                <TableCell style={{ width: 90, }} align="center"></TableCell>
                <TableCell style={{ width: 90, }} align="center"></TableCell>
                <TableCell style={{ width: 90, }} align="center"></TableCell>
                <TableCell style={{ width: 90, }} align="center"></TableCell>
                <TableCell style={{ width: 90, }} align="center"></TableCell>
                <TableCell style={{ width: 90, }} align="center"></TableCell>
                <TableCell style={{ width: 90, }} align="center"></TableCell>
                <TableCell style={{ width: 90, }} align="center"></TableCell>
                <TableCell style={{ width: 80, }} align="center"></TableCell>
                <TableCell style={{ width: 80, }} align="center"></TableCell>
                <TableCell style={{ width: 90, }} align="center"></TableCell>
                <TableCell style={{ width: 90, }} align="center"></TableCell>


              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid >
      {/* End Table */}
      <Grid container className=' ' justifyContent="start" >
        <Grid item xs={12} sm={9.5} md={6} lg={5} className='pt-2 ' >
          <Typography
            component="div"
            sx={{ backgroundColor: 'yellow', color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 } }}
            className='flex justify-start'>
            4月、5月、6月は実績見込み(4月実績×(1)で算出された伸び率)
          </Typography>
        </Grid>
      </Grid>
      <Grid container className='pt-1' justifyContent="center" >
        <Grid item xs={12} sm={12} md={12} lg={12} className=' ' >
          <Typography
            component="div"
            sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 } }}
            className='flex justify-start'>
            ※各月の初日人数は各施設の面積基準を下回らないこと
          </Typography>
        </Grid>
      </Grid>

      <Grid container className='h-14 pt-14' justifyContent="center" >
        <Grid item xs={12} sm={12} md={12} lg={12} className='pt-2 ' >
          <Typography
            component="div"
            sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 } }}
            className='flex justify-start'>
            (3)前年度実績による見込みによりがたい場合の年齢別平均児童数
          </Typography>
        </Grid>
      </Grid>

      <Grid container className='pt-10' justifyContent="center">
        <TableContainer component={Paper} className="" sx={{ width: { xs: 'auto', sm: 'auto', md: 'auto', lg: 1500 } }}>
          <Table sx={{ minWidth: 1500 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell style={{ fontWeight: "bold", background: '#D3DCF1', }} rowSpan={2} align="center">令和4年度</TableCell>
                <TableCell style={{ fontWeight: "bold", background: '#D3DCF1', }} colSpan={14} align="center">本園分</TableCell>
                <TableCell style={{ fontWeight: "bold", background: '#D3DCF1', }} rowSpan={2} align="center">本園分</TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{ fontWeight: "bold", background: '#D3DCF1', }} align="center"></TableCell>
                <TableCell style={{ fontWeight: "bold", background: '#D3DCF1', }} align="center">4月</TableCell>
                <TableCell style={{ fontWeight: "bold", background: '#D3DCF1', }} align="center">5月</TableCell>
                <TableCell style={{ fontWeight: "bold", background: '#D3DCF1', }} align="center">6月</TableCell>
                <TableCell style={{ fontWeight: "bold", background: '#D3DCF1', }} align="center">7月</TableCell>
                <TableCell style={{ fontWeight: "bold", background: '#D3DCF1', }} align="center">8月</TableCell>
                <TableCell style={{ fontWeight: "bold", background: '#D3DCF1', }} align="center">9月</TableCell>
                <TableCell style={{ fontWeight: "bold", background: '#D3DCF1', }} align="center">10月</TableCell>
                <TableCell style={{ fontWeight: "bold", background: '#D3DCF1', }} align="center">11月</TableCell>
                <TableCell style={{ fontWeight: "bold", background: '#D3DCF1', }} align="center">12月</TableCell>
                <TableCell style={{ fontWeight: "bold", background: '#D3DCF1', }} align="center">1月</TableCell>
                <TableCell style={{ fontWeight: "bold", background: '#D3DCF1', }} align="center">2月</TableCell>
                <TableCell style={{ fontWeight: "bold", background: '#D3DCF1', }} align="center">3月</TableCell>
                <TableCell style={{ fontWeight: "bold", background: '#D3DCF1', }} align="center"></TableCell>

              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell style={{ width: 100, }} align="center"></TableCell>
                <TableCell style={{ width: 90, }} align="center"></TableCell>
                <TableCell style={{ width: 90, }} align="center"></TableCell>
                <TableCell style={{ width: 90, }} align="center"></TableCell>
                <TableCell style={{ width: 90, }} align="center"></TableCell>
                <TableCell style={{ width: 90, }} align="center"></TableCell>
                <TableCell style={{ width: 90, }} align="center"></TableCell>
                <TableCell style={{ width: 90, }} align="center"></TableCell>
                <TableCell style={{ width: 90, }} align="center"></TableCell>
                <TableCell style={{ width: 90, }} align="center"></TableCell>
                <TableCell style={{ width: 80, }} align="center"></TableCell>
                <TableCell style={{ width: 80, }} align="center"></TableCell>
                <TableCell style={{ width: 90, }} align="center"></TableCell>
                <TableCell style={{ width: 90, }} align="center"></TableCell>


              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid >
      {/* End Table */}
      <Grid container className=' ' justifyContent="start" >
        <Grid item xs={12} sm={9.5} md={6} lg={5} className='pt-2 ' >
          <Typography
            component="div"
            sx={{ backgroundColor: 'yellow', color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 } }}
            className='flex justify-start'>
            4月、5月、6月は実績その後、その後、7月から3月までは見込み
          </Typography>
        </Grid>
      </Grid>
      <Grid container className='pt-1 ' justifyContent="center" >
        <Grid item xs={12} sm={12} md={12} lg={12} className=' ' >
          <Typography
            component="div"
            sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 } }}
            className='flex justify-start'>
            ※各月の初日人数は各施設の面積基準を下回らないこと
          </Typography>
        </Grid>
      </Grid>
      <Grid container className='pt-14' justifyContent="center"  sx={{ ml: { xs:0, sm: -1, md: 1, lg: 7 } }} >
        <Grid item xs={12} sm={12} md={12} lg={12} className=' ' >
          <Typography
            component="div"
            sx={{ color: 'red', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 } }}
            className='flex justify-start'>
            前年度実績による見込みによりがたい場合、その理由(3)の算出結果を使用する場合は入力必須
          </Typography>
        </Grid>
      </Grid>
      <Grid container className='pt-3' justifyContent="start" >
          <Grid item xs={6} sm={6} md={6} lg={6} className=' ' sx={{ ml: { xs: 3, sm: 1, md: 3, lg: 7 } }} >
            <TextareaAutosize
              id="emotional-input"
              name="emotional-input"
              minRows={6}
              maxRows={1000}
              className="lg:w-full  w-72"
              style={{ border: '1px solid gray', borderRadius: '4px', }}
            />
          </Grid>
        </Grid>








    </>
  );
}
