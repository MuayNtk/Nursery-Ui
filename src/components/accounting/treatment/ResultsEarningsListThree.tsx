import { Grid, Typography, TextField, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, InputAdornment } from "@mui/material";

export default function ResultsEarningsListThree() {
  
      return (
        <>
         {/* Start 別紙様式 7 別添 1 Grid */}
      <Grid container className='pt-3' justifyContent="start">
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography fontWeight="bold" sx={{ fontSize: { xs: '14px', sm: '16px', md: '18px', lg: '20px' } }} className='pt-2 text-start'>
            同一事業者内における拠出見込額・受入見込額一覧表
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
      <Grid container className='pt-3' justifyContent="center">
        <TableContainer component={Paper} className="" sx={{ width: { xs: 'auto', sm: 'auto', md: 'auto', lg: 'auto' } }}>
          <Table sx={{ minWidth: 1100 }} aria-label="simple table">
            <TableHead >
              <TableRow>
                <TableCell style={{ width: 100, fontWeight: 'bold', background: '', }} align="center">番号</TableCell>
                <TableCell style={{ width: 200, fontWeight: 'bold', background: '', }} align="center">都道府県名</TableCell>
                <TableCell style={{ width: 200, fontWeight: 'bold', background: '', }} align="center">市町村名</TableCell>
                <TableCell style={{ width: 200, fontWeight: 'bold', background: '', }} align="center">施設・事業所名</TableCell>
                <TableCell style={{ width: 200, fontWeight: 'bold', background: '', }} align="center">他事業所への拠出額</TableCell>
                <TableCell style={{ width: 200, fontWeight: 'bold', background: '', }} align="center">他事業所からの受入額</TableCell>

              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow >
                <TableCell style={{ width: 100,  background: '', }} align="center">No.1</TableCell>
                <TableCell style={{ width: 20,  background: '', }} align="center">〇〇県</TableCell>
                <TableCell style={{ width: 20,  background: '', }} align="center">〇〇市</TableCell>
                <TableCell style={{ width: 20,  background: '', }} align="center">〇〇保育所</TableCell>
                <TableCell style={{ width: 20,  background: '', }} align="center"><TextField id="school-number" name="school-number" type="text" size="small" InputProps={{
                  endAdornment: <InputAdornment position="end">円</InputAdornment>,
                }} fullWidth sx={{ backgroundColor: 'white' }} /></TableCell>
                <TableCell style={{ width: 20,  background: '', }} align="center"><TextField id="school-number" name="school-number" type="text" size="small" InputProps={{
                  endAdornment: <InputAdornment position="end">円</InputAdornment>,
                }} fullWidth sx={{ backgroundColor: 'white' }} /></TableCell>
              </TableRow>
              <TableRow >
                <TableCell style={{ width: 100,  background: '', }} align="center">No.2</TableCell>
                <TableCell style={{ width: 20,  background: '', }} align="center">〇〇県</TableCell>
                <TableCell style={{ width: 20,  background: '', }} align="center">〇〇市</TableCell>
                <TableCell style={{ width: 20,  background: '', }} align="center">〇〇保育所</TableCell>
                <TableCell style={{ width: 20,  background: '', }} align="center"><TextField id="school-number" name="school-number" type="text" size="small" InputProps={{
                  endAdornment: <InputAdornment position="end">円</InputAdornment>,
                }} fullWidth sx={{ backgroundColor: 'white' }} /></TableCell>
                <TableCell style={{ width: 20,  background: '', }} align="center"><TextField id="school-number" name="school-number" type="text" size="small" InputProps={{
                  endAdornment: <InputAdornment position="end">円</InputAdornment>,
                }} fullWidth sx={{ backgroundColor: 'white' }} /></TableCell>
              </TableRow>
              <TableRow >
                <TableCell style={{ width: 100,  background: '', }} align="center">No.3</TableCell>
                <TableCell style={{ width: 20,  background: '', }} align="center">福岡県</TableCell>
                <TableCell style={{ width: 20,  background: '', }} align="center">福岡市</TableCell>
                <TableCell style={{ width: 20,  background: '', }} align="center">いちざきみんなの家</TableCell>
                <TableCell style={{ width: 20,  background: '', }} align="center"><TextField id="school-number" name="school-number" type="text" size="small" InputProps={{
                  endAdornment: <InputAdornment position="end">円</InputAdornment>,
                }} fullWidth sx={{ backgroundColor: 'white' }} /></TableCell>
                <TableCell style={{ width: 20,  background: '', }} align="center"><TextField id="school-number" name="school-number" type="text" size="small" InputProps={{
                  endAdornment: <InputAdornment position="end">円</InputAdornment>,
                }} fullWidth sx={{ backgroundColor: 'white' }} /></TableCell>
              </TableRow>
              <TableRow >
                <TableCell style={{ width: 100,  background: '', }} align="center"></TableCell>
                <TableCell style={{ width: 20,  background: '', }} align="center"></TableCell>
                <TableCell style={{ width: 20, fontWeight: 'bold', background: '', }} align="center">福岡市</TableCell>
                <TableCell style={{ width: 20,  background: '', }} align="center"></TableCell>
                <TableCell style={{ width: 20,  background: '', }} align="center"><TextField id="school-number" name="school-number" type="text" size="small" InputProps={{
                  endAdornment: <InputAdornment position="end">円</InputAdornment>,
                }} fullWidth sx={{ backgroundColor: 'white' }} /></TableCell>
                <TableCell style={{ width: 20,  background: '', }} align="center"><TextField id="school-number" name="school-number" type="text" size="small" InputProps={{
                  endAdornment: <InputAdornment position="end">円</InputAdornment>,
                }} fullWidth sx={{ backgroundColor: 'white' }} /></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid >
      {/* End Table */}

      <Grid container className='pt-10' justifyContent="start">
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-justify'>
          ※ 同一事業者が運営する全ての施設・事業所(特定教育・保育施設及び特定地域型保育事業所、特例保育を提供する施設)について記入すること。
          </Typography>
        </Grid>
      </Grid>

        </>
      );
    }
    