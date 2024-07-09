import { Grid, Paper, Table, TableCell, TableContainer, TableRow, Typography, TableBody, Divider, TableHead, TextField, InputAdornment } from "@mui/material";


export default function ImprovementStaff() {

  return (
    <>

      {/* Start 令和5年度 処遇改善等加算 II 加算対象職員名簿 Grid */}
      <Grid container className='pt-3' justifyContent="start">
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography fontWeight="bold" sx={{ fontSize: { xs: '14px', sm: '16px', md: '18px', lg: '20px' } }} className='pt-2 text-start'>
            令和5年度 処遇改善等加算 II 加算対象職員名簿
          </Typography>
        </Grid>
      </Grid>
      {/* End 令和5年度 処遇改善等加算 II 加算対象職員名簿 Grid */}

      {/* Start 施設・事業所名 Grid */}
      <Grid container spacing={2} className='pt-3' justifyContent="start">
        <Grid item xs={4.5} sm={4} md={4} lg={3}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
            施設・事業所名 :
          </Typography>
        </Grid>
        <Grid item xs={6} sm={7} md={6.5} lg={6}>
          <TextField id="school-number" name="school-number" type="text" size="small" fullWidth sx={{ backgroundColor: 'white' }} />
        </Grid>
      </Grid>
      {/* End 施設・事業所名 Grid */}

      {/* Start 作成日 Grid */}
      <Grid container spacing={2} className='pt-3' justifyContent="start">
        <Grid item xs={4.5} sm={2} md={3} lg={3}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
            作成日 :
          </Typography>
        </Grid>
        <Grid item xs={6} sm={3} md={2.5} lg={2}>
          <TextField
            id="school-number"
            name="school-number"
            label="令和"
            variant="outlined"
            type="text" size="small"
            fullWidth
            sx={{ backgroundColor: '#F5F5F5' }}
            InputProps={{
              readOnly: true,
              endAdornment: <InputAdornment position="end">年</InputAdornment>,
            }}
          />
        </Grid>
        <Grid item xs={6} sm={3} md={2.5} lg={2}>
          <TextField
            id="school-number"
            name="school-number"
            type="text" size="small"
            fullWidth
            sx={{ backgroundColor: 'white' }}
            InputProps={{
              endAdornment: <InputAdornment position="end">月</InputAdornment>,
            }}
          />
        </Grid>
        <Grid item xs={6} sm={3} md={2.5} lg={2}>
          <TextField
            id="school-number"
            name="school-number"
            type="text" size="small"
            fullWidth
            sx={{ backgroundColor: 'white' }}
            InputProps={{
              endAdornment: <InputAdornment position="end">日</InputAdornment>,
            }}
          />
        </Grid>
      </Grid>
      {/* End 作成日 Grid */}

      <Divider className="pt-7" />

      {/* Start Table 1 */}
      <Grid container justifyContent="center" className="pt-5">
        <TableContainer component={Paper} className="mt-2" sx={{ width: { xs: 'auto', sm: 'auto', md: 'auto', lg: 'auto' } }}>
          <Table sx={{ minWidth: 900 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell style={{ fontWeight: "bold" }} align="left">番号</TableCell>
                <TableCell style={{ fontWeight: "bold" }} align="left">職名</TableCell>
                <TableCell style={{ fontWeight: "bold" }} align="left">職種</TableCell>
                <TableCell style={{ fontWeight: "bold" }} align="left">氏名</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>

              {/* Start Rows 1 */}
              <TableRow hover role="checkbox" tabIndex={-1}>
                <TableCell align="left">No.1</TableCell>
                <TableCell align="left">副主任保育士</TableCell>
                <TableCell align="left">保育士</TableCell>
                <TableCell align="left">○○ ○○</TableCell>
              </TableRow>
              {/* End Rows 1 */}

              {/* Start Rows 2 */}
              <TableRow hover role="checkbox" tabIndex={-1}>
                <TableCell align="left">No.2</TableCell>
                <TableCell align="left">副主任保育士</TableCell>
                <TableCell align="left">保育士</TableCell>
                <TableCell align="left">□□ □□</TableCell>
              </TableRow>
              {/* End Rows 2 */}

              {/* Start Rows 3 */}
              <TableRow hover role="checkbox" tabIndex={-1}>
                <TableCell align="left">No.3</TableCell>
                <TableCell align="left">指導教諭</TableCell>
                <TableCell align="left">幼稚園教諭</TableCell>
                <TableCell align="left">△△ △△</TableCell>
              </TableRow>
              {/* End Rows 3 */}

            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      {/* End Table 1 */}

    </>
  );
}
