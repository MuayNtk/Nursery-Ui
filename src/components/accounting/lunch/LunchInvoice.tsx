import { Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Checkbox } from "@mui/material";


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function LunchInvoice() {

  return (
    <>

      {/* Start 請求書 Grid */}
      <Grid container className='pt-3 pl-3' justifyContent="start">
        <Grid item xs={3} sm={3} md={2} lg={1.5}>
          <Typography fontWeight="bold" sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-start'>
            請　求　書
          </Typography>
        </Grid>
      </Grid>
      {/* End 請求書 Grid */}

      {/* Start 金 額 Grid */}
      <Grid container className='pt-5' justifyContent="start">
        <Grid item xs={5} sm={4} md={2} lg={2}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
            金　 額 :
          </Typography>
        </Grid>
        <Grid item xs={4} sm={3} md={2} lg={1.3} className="pt-1 pl-1">
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className="py-1" bgcolor={"#fff3c4"}>
            ￥1,157,100
          </Typography>
        </Grid>
      </Grid>
      {/* End 金 額 Grid */}

      {/* Start 件名 Grid */}
      <Grid container className='pt-3 pl-3' justifyContent="start">
        <Grid item xs={3} sm={3} md={2} lg={1}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-start'>
            件　名
          </Typography>
        </Grid>
      </Grid>
      {/* End 件名 Grid */}

      {/* Start 福岡市保育所等給食支援費補助金(概算払) Grid */}
      <Grid container className='pt-3 pl-3' justifyContent="start">
        <Grid item xs={12} sm={12} md={6} lg={3}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-start'>
            福岡市保育所等給食支援費補助金(概算払)
          </Typography>
        </Grid>
      </Grid>
      {/* End 福岡市保育所等給食支援費補助金(概算払) Grid */}

      {/* Start 希望する支払方法に✓を記入してください。 Grid */}
      <Grid container className='pt-2' justifyContent="start">
        <Grid item xs={12} sm={12} md={8} lg={5}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2'>
            希望する支払方法に✓を記入してください。
          </Typography>
        </Grid>
      </Grid>
      {/* End 希望する支払方法に✓を記入してください。 Grid */}

      {/* Start 口座振込を希望します。 Grid */}
      <Grid container className='pt-1' justifyContent="start">
        <Grid item xs={4} sm={4.5} md={3.5} lg={2}>
          <Checkbox {...label} />
        </Grid>
        <Grid item xs={7} sm={6} md={3} lg={2} sx={{ ml: { xs: -5, sm: -7, md: -10, lg: -9 } }}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-3 text-start'>
            口座振込を希望します。
          </Typography>
        </Grid>
      </Grid>
      {/* End 口座振込を希望します。 Grid */}

      {/* Start Text header table Grid */}
      <Grid container className='pt-3' justifyContent="start">
        <Grid item xs={12} sm={12} md={12} lg={10}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2'>
            (本市に2つ以上口座を登録されている方等は、以下に振込を希望する口座をご記入ください。)
          </Typography>
        </Grid>
      </Grid>
      {/* End Text header table Grid */}

      {/* Start Table 1 */}
      <Grid container justifyContent="center">
        <TableContainer component={Paper} className="mt-2" sx={{ width: { xs: 'auto', sm: 'auto', md: 'auto', lg: 'auto' } }}>
          <Table sx={{ minWidth: 900 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell style={{ fontWeight: "bold" }} align="left">金融機関名</TableCell>
                <TableCell style={{ fontWeight: "bold" }} align="center" colSpan={13}>銀行</TableCell>
                <TableCell style={{ fontWeight: "bold" }} align="center">本店<br />支店</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell align="left">預金種別</TableCell>
                <TableCell align="center" colSpan={5}>普通・当座</TableCell>
                <TableCell align="center" colSpan={3}>口座番号</TableCell>
                <TableCell align="center"></TableCell>
                <TableCell align="center"></TableCell>
                <TableCell align="center"></TableCell>
                <TableCell align="center"></TableCell>
                <TableCell align="center"></TableCell>
                <TableCell align="center"></TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="left">口座名義(カナ)</TableCell>
                <TableCell align="center"></TableCell>
                <TableCell align="center"></TableCell>
                <TableCell align="center"></TableCell>
                <TableCell align="center"></TableCell>
                <TableCell align="center"></TableCell>
                <TableCell align="center"></TableCell>
                <TableCell align="center"></TableCell>
                <TableCell align="center"></TableCell>
                <TableCell align="center"></TableCell>
                <TableCell align="center"></TableCell>
                <TableCell align="center"></TableCell>
                <TableCell align="center"></TableCell>
                <TableCell align="center"></TableCell>
                <TableCell align="center"></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      {/* End Table 1 */}

      {/* Start Text footer table Grid */}
      <Grid container className='pt-3 pr-5' justifyContent="start">
        <Grid item xs={12} sm={12} md={12} lg={9} sx={{ ml: { xs: 0, sm: 0, md: 5, lg: 20 } }}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className=' text-justify'>
            (記入する口座は請求者名義のものに限ります。また、座名義等の記入にあたっては、必ず預金通帳を確認のうえ、記載のとおり正確
            に記入してください。)
          </Typography>
        </Grid>
      </Grid>
      {/* End Text footer table Grid */}

      {/* Start 現金受領を希望します。 Grid */}
      <Grid container className='pt-4' justifyContent="start">
        <Grid item xs={4} sm={4.5} md={3.5} lg={2}>
          <Checkbox {...label} />
        </Grid>
        <Grid item xs={7} sm={6} md={3} lg={2} sx={{ ml: { xs: -5, sm: -7, md: -10, lg: -9 } }}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-3 text-start'>
            現金受領を希望します。
          </Typography>
        </Grid>
      </Grid>
      {/* End 現金受領を希望します。 Grid */}

      {/* Start 隔地払(外国送金等)を希望します。 Grid */}
      <Grid container className='pt-1' justifyContent="start">
        <Grid item xs={4} sm={4.5} md={3.5} lg={2}>
          <Checkbox {...label} />
        </Grid>
        <Grid item xs={7} sm={7} md={5} lg={4} sx={{ ml: { xs: -5, sm: -7, md: -10, lg: -9 } }}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-3 text-start'>
            隔地払(外国送金等)を希望します。
          </Typography>
        </Grid>
      </Grid>
      {/* End 隔地払(外国送金等)を希望します。 Grid */}

      {/* Start 上記の金額を請求します。 Grid */}
      <Grid container className='pt-2' justifyContent="start">
        <Grid item xs={6} sm={5} md={3} lg={3} sx={{ ml: { xs: 0, sm: 0, md: 15, lg: 10 } }}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-3'>
            上記の金額を請求します。
          </Typography>
        </Grid>
        <Grid item xs={1.5} sm={1} md={1} lg={1} sx={{ ml: { xs: 0, sm: 10, md: 22, lg: 15 } }}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-3 text-end'>
            令和 :
          </Typography>
        </Grid>
        <Grid item xs={1.5} sm={1} md={1} lg={1} sx={{ ml: { xs: 0.5, sm: 0, md: 1, lg: 1 } }}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-3 text-start'>
            5年
          </Typography>
        </Grid>
        <Grid item xs={1.5} sm={1} md={1} lg={1} sx={{ ml: { xs: -1, sm: 0, md: -2, lg: -5 } }}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-3 text-start'>
            月
          </Typography>
        </Grid>
        <Grid item xs={1.5} sm={1} md={1} lg={1} sx={{ ml: { xs: -1, sm: 0, md: -2, lg: -5 } }}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-3 text-start'>
            日
          </Typography>
        </Grid>
      </Grid>
      {/* End 上記の金額を請求します。 Grid */}

      {/* Start 住所:宮崎県西都市白馬町3番地 Grid */}
      <Grid container className='pt-2' justifyContent="start">
        <Grid item xs={7} sm={6} md={4} lg={3} sx={{ ml: { xs: 0, sm: -1, md: 13, lg: 12 } }}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-3'>
            住所:宮崎県西都市白馬町3番地
          </Typography>
        </Grid>
      </Grid>
      {/* End 住所:宮崎県西都市白馬町3番地 Grid */}

      {/* Start 氏名:社会福祉法人つばさ福祉会理事長 渡部 圭子 Grid */}
      <Grid container className='pt-2' justifyContent="start">
        <Grid item xs={11} sm={10} md={6} lg={5} sx={{ ml: { xs: 0, sm: -2, md: 14, lg: 9 } }}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-3'>
            氏名:社会福祉法人つばさ福祉会理事長　渡部　圭子
          </Typography>
        </Grid>
      </Grid>
      {/* End 氏名:社会福祉法人つばさ福祉会理事長 渡部 圭子 Grid */}



    </>
  );
}
