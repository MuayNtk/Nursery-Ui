import { Grid, Paper, Table, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";


export default function LunchFundingPlan() {

  return (
    <>

      {/* Start 資金計画書 Grid */}
      <Grid container className='pt-3' justifyContent="start">
        <Grid item xs={3} sm={3} md={2} lg={2}>
          <Typography fontWeight="bold" sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2'>
            資金計画書
          </Typography>
        </Grid>
      </Grid>
      {/* End 資金計画書 Grid */}

      {/* Start 施設・事業所名:いちざきみんなの家 Grid */}
      <Grid container className='pt-3' justifyContent="start">
        <Grid item xs={12} sm={11} md={7} lg={5.5}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2'>
            施設・事業所名:いちざきみんなの家
          </Typography>
        </Grid>
      </Grid>
      {/* End 施設・事業所名:いちざきみんなの家 Grid */}

      {/* Start Table 1 */}
      <Grid container className='pt-3' justifyContent="center">
        <TableContainer component={Paper} className="mt-5" sx={{ width: { xs: 'auto', sm: 'auto', md: 'auto', lg: 'auto' } }}>
          <Table sx={{ minWidth: 1300 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell style={{ fontWeight: "bold" }}></TableCell>
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
              </TableRow>
            </TableHead>
            <TableRow hover role="checkbox" tabIndex={-1}>
              <TableCell align="left">補助金</TableCell>
              <TableCell align="center">96,425</TableCell>
              <TableCell align="center">96,425</TableCell>
              <TableCell align="center">96,425</TableCell>
              <TableCell align="center">96,425</TableCell>
              <TableCell align="center">96,425</TableCell>
              <TableCell align="center">96,425</TableCell>
              <TableCell align="center">96,425</TableCell>
              <TableCell align="center">96,425</TableCell>
              <TableCell align="center">96,425</TableCell>
              <TableCell align="center">96,425</TableCell>
              <TableCell align="center">96,425</TableCell>
              <TableCell align="center">96,425</TableCell>
              <TableCell align="center">1,157,100</TableCell>
            </TableRow>
            <TableRow hover role="checkbox" tabIndex={-1}>
              <TableCell align="left">自己資金</TableCell>
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
              <TableCell style={{ width: "auto" }} align="left">保育所等給食支援費補助金の対象事業に要す</TableCell>
              <TableCell align="center">96,425</TableCell>
              <TableCell align="center">96,425</TableCell>
              <TableCell align="center">96,425</TableCell>
              <TableCell align="center">96,425</TableCell>
              <TableCell align="center">96,425</TableCell>
              <TableCell align="center">96,425</TableCell>
              <TableCell align="center">96,425</TableCell>
              <TableCell align="center">96,425</TableCell>
              <TableCell align="center">96,425</TableCell>
              <TableCell align="center">96,425</TableCell>
              <TableCell align="center">96,425</TableCell>
              <TableCell align="center">96,425</TableCell>
              <TableCell align="center">1,157,100</TableCell>
            </TableRow>
            <TableRow hover role="checkbox" tabIndex={-1}>
              <TableCell align="left">る費用</TableCell>
              <TableCell align="center">96,425</TableCell>
              <TableCell align="center">96,425</TableCell>
              <TableCell align="center">96,425</TableCell>
              <TableCell align="center">96,425</TableCell>
              <TableCell align="center">96,425</TableCell>
              <TableCell align="center">96,425</TableCell>
              <TableCell align="center">96,425</TableCell>
              <TableCell align="center">96,425</TableCell>
              <TableCell align="center">96,425</TableCell>
              <TableCell align="center">96,425</TableCell>
              <TableCell align="center">96,425</TableCell>
              <TableCell align="center">96,425</TableCell>
              <TableCell align="center">1,157,100</TableCell>
            </TableRow>
            <TableRow hover role="checkbox" tabIndex={-1}>
              <TableCell align="left">支出計</TableCell>
              <TableCell align="center">96,425</TableCell>
              <TableCell align="center">96,425</TableCell>
              <TableCell align="center">96,425</TableCell>
              <TableCell align="center">96,425</TableCell>
              <TableCell align="center">96,425</TableCell>
              <TableCell align="center">96,425</TableCell>
              <TableCell align="center">96,425</TableCell>
              <TableCell align="center">96,425</TableCell>
              <TableCell align="center">96,425</TableCell>
              <TableCell align="center">96,425</TableCell>
              <TableCell align="center">96,425</TableCell>
              <TableCell align="center">96,425</TableCell>
              <TableCell align="center">1,157,100</TableCell>
            </TableRow>
            <TableRow hover role="checkbox" tabIndex={-1}>
              <TableCell align="left">差引收支</TableCell>
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
              <TableCell align="left">累計</TableCell>
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
          </Table>
        </TableContainer>
      </Grid>
      {/* End Table 1 */}

    </>
  );
}
