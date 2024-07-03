import { Card, Grid, Paper, Table, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";


export default function LunchAttachment() {

  return (
    <>

      {/* Start 福岡市保育所等給食支援費補助金 Grid */}
      <Grid container className='pt-3' justifyContent="start">
        <Grid item xs={10} sm={9} md={6} lg={4}>
          <Typography fontWeight="bold" sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2'>
            福岡市保育所等給食支援費補助金　　積算資料
          </Typography>
        </Grid>
      </Grid>
      {/* End 福岡市保育所等給食支援費補助金 Grid */}

      {/* Start 施設・事業所名:いちざきみんなの家 Grid */}
      <Grid container className='pt-3' justifyContent="start">
        <Grid item xs={12} sm={10} md={8} lg={6}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2'>
            施設・事業所名:いちざきみんなの家
          </Typography>
        </Grid>
      </Grid>
      {/* End 施設・事業所名:いちざきみんなの家 Grid */}

      {/* Start 1.令和5年度の各月初日の利用児童数(見込) Card */}
      <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-10' sx={{ ml: { xs: 3, sm: 3, md: 2, lg: 2 } }}>
        <Card sx={{ bgcolor: "pink", width: { xs: 250, sm: 250, md: 290, lg: 350 }, height: 40 }}>
          <Typography component='div' sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 15 }, mt: { xs: 0.5, sm: 0.5, md: 0.5, lg: 0 } }} className="pt-2 text-center">
            1.令和5年度の各月初日の利用児童数(見込)
          </Typography>
        </Card>
      </Grid>
      {/* End 1.令和5年度の各月初日の利用児童数(見込) Card */}

      {/* Start Table 1 */}
      <Grid container className='pt-3' justifyContent="center">
        <TableContainer component={Paper} className="mt-5" sx={{ width: { xs: 'auto', sm: 'auto', md: 'auto', lg: 1200 } }}>
          <Table sx={{ minWidth: 900 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell style={{ width: 200, fontWeight: "bold" }}></TableCell>
                <TableCell align="center" style={{ fontWeight: "bold" }}>4月</TableCell>
                <TableCell align="center" style={{ fontWeight: "bold" }}>5月</TableCell>
                <TableCell align="center" style={{ fontWeight: "bold" }}>6月</TableCell>
                <TableCell align="center" style={{ fontWeight: "bold" }}>7月</TableCell>
                <TableCell align="center" style={{ fontWeight: "bold" }}>8月</TableCell>
                <TableCell align="center" style={{ fontWeight: "bold" }}>9月</TableCell>
                <TableCell align="center" style={{ fontWeight: "bold" }}>10月</TableCell>
                <TableCell align="center" style={{ fontWeight: "bold" }}>11月</TableCell>
                <TableCell align="center" style={{ fontWeight: "bold" }}>12月</TableCell>
                <TableCell align="center" style={{ fontWeight: "bold" }}>1月</TableCell>
                <TableCell align="center" style={{ fontWeight: "bold" }}>2月</TableCell>
                <TableCell align="center" style={{ fontWeight: "bold" }}>3月</TableCell>
                <TableCell align="center" style={{ fontWeight: "bold" }}>合計</TableCell>
                <TableCell align="center" style={{ width: 50, fontWeight: "bold" }}>月平均</TableCell>
              </TableRow>
            </TableHead>
            <TableRow hover role="checkbox" tabIndex={-1}>
              <TableCell align="center">給食(主食+副食)</TableCell>
              <TableCell align="center">89</TableCell>
              <TableCell align="center">90</TableCell>
              <TableCell align="center">93</TableCell>
              <TableCell align="center">94</TableCell>
              <TableCell align="center">92</TableCell>
              <TableCell align="center">92</TableCell>
              <TableCell align="center">92</TableCell>
              <TableCell align="center">92</TableCell>
              <TableCell align="center">92</TableCell>
              <TableCell align="center">92</TableCell>
              <TableCell align="center">92</TableCell>
              <TableCell align="center">92</TableCell>
              <TableCell align="center">1,102</TableCell>
              <TableCell align="center">92</TableCell>
            </TableRow>
            <TableRow hover role="checkbox" tabIndex={-1}>
              <TableCell align="center">給食(副食のみ)</TableCell>
              <TableCell align="center">0</TableCell>
              <TableCell align="center">0</TableCell>
              <TableCell align="center">0</TableCell>
              <TableCell align="center">0</TableCell>
              <TableCell align="center">0</TableCell>
              <TableCell align="center">0</TableCell>
              <TableCell align="center">0</TableCell>
              <TableCell align="center">0</TableCell>
              <TableCell align="center">0</TableCell>
              <TableCell align="center">0</TableCell>
              <TableCell align="center">0</TableCell>
              <TableCell align="center">0</TableCell>
              <TableCell align="center">0</TableCell>
              <TableCell align="center">0</TableCell>
            </TableRow>
            <TableRow hover role="checkbox" tabIndex={-1}>
              <TableCell align="right">計</TableCell>
              <TableCell align="center">89</TableCell>
              <TableCell align="center">90</TableCell>
              <TableCell align="center">93</TableCell>
              <TableCell align="center">94</TableCell>
              <TableCell align="center">92</TableCell>
              <TableCell align="center">92</TableCell>
              <TableCell align="center">92</TableCell>
              <TableCell align="center">92</TableCell>
              <TableCell align="center">92</TableCell>
              <TableCell align="center">92</TableCell>
              <TableCell align="center">92</TableCell>
              <TableCell align="center">92</TableCell>
              <TableCell align="center">1,102</TableCell>
              <TableCell align="center">92</TableCell>
            </TableRow>
          </Table>
        </TableContainer>
      </Grid>
      {/* End Table 1 */}

      {/* Start (記入上の注意) Grid */}
      <Grid container className='pt-5' justifyContent="start">
        <Grid item xs={3} sm={4} md={3} lg={4}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2'>
            (記入上の注意)
          </Typography>
        </Grid>
      </Grid>
      {/* End (記入上の注意) Grid */}

      {/* Start ・給食には外部委託、外部搬入による給食提供を含む。 Grid */}
      <Grid container className='pt-5' justifyContent="start" sx={{ ml: { xs: -0.5, sm: -0.5, md: 0, lg: 0 } }}>
        <Grid item xs={11} sm={10} md={9} lg={7.5}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' }, }} className='pt-2'>
            ・給食には外部委託、外部搬入による給食提供を含む。
          </Typography>
        </Grid>
      </Grid>
      {/* End ・給食には外部委託、外部搬入による給食提供を含む。 Grid */}

      {/* Start ・利用児童数が未確定の月は、利用児童数の見込みを記載すること。 Grid */}
      <Grid container className='pt-3' justifyContent="start">
        <Grid item xs={12} sm={12} md={10.5} lg={8.5}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2'>
            ・利用児童数が未確定の月は、利用児童数の見込みを記載すること。
          </Typography>
        </Grid>
      </Grid>
      {/* End ・利用児童数が未確定の月は、利用児童数の見込みを記載すること。 Grid */}

      {/* Start 2.補助金の額(基本单価×令和5年度の各月初日の利用児童数の合計) Card */}
      <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-10' sx={{ ml: { xs: 3, sm: 3, md: 2, lg: 2 } }}>
        <Card sx={{ bgcolor: "pink", width: { xs: 400, sm: 350, md: 390, lg: 500 }, height: 40 }}>
          <Typography component='div' sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 15 }, mt: { xs: 0.5, sm: 0.5, md: 0.5, lg: 0 } }} className="pt-2 text-center">
            2.補助金の額(基本单価×令和5年度の各月初日の利用児童数の合計)
          </Typography>
        </Card>
      </Grid>
      {/* End 2.補助金の額(基本单価×令和5年度の各月初日の利用児童数の合計) Card */}

      {/* Start 基本单価 Grid */}
      <Grid container className='pt-5' justifyContent="start">
        <Grid item xs={5.5} sm={5} md={3.7} lg={3} >
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
            基本单価
          </Typography>
        </Grid>
        <Grid item xs={4} sm={4.5} md={5} lg={3.7} >
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-center'>
            利用児童数合計
          </Typography>
        </Grid>
        <Grid item xs={2.5} sm={2} md={3} lg={3} >
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-start'>
            補助金の額
          </Typography>
        </Grid>
      </Grid>
      {/* End 基本单価 Grid */}

      {/* Start 給食(主食+副食) Grid */}
      <Grid container className='pt-5' justifyContent="start">
        <Grid item xs={3.5} sm={3} md={2.3} lg={2.2}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2'>
            給食(主食+副食)
          </Typography>
        </Grid>
        <Grid item xs={2} sm={2} md={1.8} lg={1}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2'>
            1,050円
          </Typography>
        </Grid>
        <Grid item xs={1} sm={1} md={1} lg={1}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2'>
            X
          </Typography>
        </Grid>
        <Grid item xs={2} sm={2} md={2} lg={1.3} className="pt-1">
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className="py-1" bgcolor={"#fff3c4"}>
            1,102
          </Typography>
        </Grid>
        <Grid item xs={1} sm={1} md={1} lg={1}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2'>
            =
          </Typography>
        </Grid>
        <Grid item xs={2.3} sm={2.5} md={2.5} lg={1.3} className="pt-1">
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className="py-1" bgcolor={"#fff3c4"}>
            1,157,100
          </Typography>
        </Grid>
      </Grid>
      {/* End 給食(主食+副食) Grid */}

      {/* Start 給食(副食のみ) Grid */}
      <Grid container className='pt-5' justifyContent="start">
        <Grid item xs={3.5} sm={3} md={2.3} lg={2.2}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2'>
            給食(副食のみ)
          </Typography>
        </Grid>
        <Grid item xs={2} sm={2} md={1.8} lg={1}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2'>
            630円
          </Typography>
        </Grid>
        <Grid item xs={1} sm={1} md={1} lg={1}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2'>
            X
          </Typography>
        </Grid>
        <Grid item xs={2} sm={2} md={2} lg={1.3} className="pt-1">
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className="py-1" bgcolor={"#fff3c4"}>
            0
          </Typography>
        </Grid>
        <Grid item xs={1} sm={1} md={1} lg={1}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2'>
            =
          </Typography>
        </Grid>
        <Grid item xs={2.3} sm={2.5} md={2.5} lg={1.3} className="pt-1">
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className="py-1" bgcolor={"#fff3c4"}>
            0
          </Typography>
        </Grid>
      </Grid>
      {/* End 給食(副食のみ) Grid */}

      {/* Start 給食(副食のみ) Grid */}
      <Grid container className='pt-5' justifyContent="center">
        <Grid item xs={1} sm={1} md={1} lg={1} sx={{ ml: { xs: 30, sm: 35, md: 42, lg: 46 } }}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2'>
            計
          </Typography>
        </Grid>
        <Grid item xs={2.3} sm={2.5} md={2.5} lg={1.3} className="pt-1">
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className="py-1" bgcolor={"#fff3c4"}>
            0
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={2.5}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
            - 申請書の交付申請額と同額
          </Typography>
        </Grid>
      </Grid>
      {/* End 給食(副食のみ) Grid */}





    </>
  );
}
