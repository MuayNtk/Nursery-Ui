import { Grid, Paper, Table, TableCell, TableContainer, TableHead, TableRow, TextField, Typography, InputAdornment, TableBody, Button, Divider } from "@mui/material";


export default function AttachmentCertification() {

  return (
    <>

      {/* Start 様式第1号 別添11(保育所、幼保連携型定ども園用) Grid */}
      <Grid container className='pt-3 pl-3' justifyContent="start">
        <Grid item xs={10} sm={9} md={6} lg={4}>
          <Typography fontWeight="bold" sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-center'>
            様式第 1 号 別添 1 - 1(保育所、幼保連携型定ども園用)
          </Typography>
        </Grid>
      </Grid>
      {/* End 様式第1号 別添11(保育所、幼保連携型定ども園用) Grid */}

      {/* Start 交付申請額積算根拠 Grid */}
      <Grid container className='pt-3' justifyContent="center">
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-center'>
            <Divider>交付申請額積算根拠</Divider>
          </Typography>
        </Grid>
      </Grid>
      {/* End 交付申請額積算根拠 Grid */}

      {/* Start 園番号 Grid */}
      <Grid container className='pt-5' justifyContent="start">
        <Grid item xs={4.65} sm={2.5} md={2} lg={1}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 pr-3 text-end'>
            園番号 :
          </Typography>
        </Grid>
        <Grid item xs={6} sm={6} md={5} lg={3}>
          <Typography fontWeight="bold" sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-start'>
            いちざきみんなの家
          </Typography>
        </Grid>
      </Grid>
      {/* End 園番号 Grid */}

      {/* Start Table 1 */}
      <Grid container className='pt-3' justifyContent="center">
        <TableContainer component={Paper} className="mt-5" sx={{ width: { xs: 'auto', sm: 'auto', md: 'auto', lg: 'auto' } }}>
          <Table sx={{ minWidth: 900 }} aria-label="simple table" size="small">
            <TableHead>
              <TableRow>
                <TableCell align="left" style={{ fontWeight: "bold" }}>氏名</TableCell>
                <TableCell align="left" style={{ fontWeight: "bold" }}>人件費</TableCell>
                <TableCell align="left" style={{ width:150 ,fontWeight: "bold" }}>人件費合計(A)</TableCell>
                <TableCell align="left" style={{ width:150 ,fontWeight: "bold" }}>補助上限額(B)</TableCell>
                <TableCell align="left" style={{ fontWeight: "bold" }}>補助金額(A)と(B)の少ない額</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow hover role="checkbox" tabIndex={-1}>
                <TableCell align="left">User 1</TableCell>
                <TableCell align="left">
                  <TextField
                    className='w-full'
                    id="labor-costs-1"
                    name="labor-costs-1"
                    label=""
                    type="text"
                    size='small'
                    sx={{
                      backgroundColor: "white",
                    }}
                    InputProps={{
                      endAdornment: <InputAdornment position="end">円</InputAdornment>,
                    }}
                  />
                </TableCell>
                <TableCell align="left">0</TableCell>
                <TableCell align="left">0</TableCell>
                <TableCell align="left">0</TableCell>
              </TableRow>
              <TableRow hover role="checkbox" tabIndex={-1}>
                <TableCell align="left">User 2</TableCell>
                <TableCell align="left">
                  <TextField
                    className='w-full'
                    id="labor-costs-2"
                    name="labor-costs-2"
                    label=""
                    type="text"
                    size='small'
                    sx={{
                      backgroundColor: "white",
                    }}
                    InputProps={{
                      endAdornment: <InputAdornment position="end">円</InputAdornment>,
                    }}
                  />
                </TableCell>
                <TableCell align="left">0</TableCell>
                <TableCell align="left">0</TableCell>
                <TableCell align="left">0</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      {/* End Table 1 */}

      {/* Start Grid Button */}
      <Grid container className='pt-3' justifyContent="start">
        <Grid item>
          <Button variant="contained" sx={{ width: 30 }}>追加</Button>
        </Grid>
      </Grid>
      {/* End Grid Button */}

      {/* Start (注)人件費等には Grid */}
      <Grid container className='pt-5' justifyContent="start" sx={{ pl: { xs: 3, sm: 5, md: 10, lg: 10 }, pr: { xs: 3, sm: 5, md: 10, lg: 15 }, }}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' }, color: '#FF9900' }} className='pt-2 text-justify'>
            (注)　人件費等には、保育支援者又はスポット支援員の人件費にかかる金額(報酬、給料、職員手当、賃金等)を記載すること。
          </Typography>
        </Grid>
      </Grid>
      {/* End (注)人件費等には Grid */}

      {/* Start (注) (2)には(1)とは別の職員を記載すること。 Grid */}
      <Grid container className='pt-3' justifyContent="start" sx={{ pl: { xs: 3, sm: 5, md: 10, lg: 10 }, pr: { xs: 3, sm: 5, md: 10, lg: 15 }, }}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' }, color: '#FF9900' }} className='pt-2 text-justify'>
            (注)　(2)には(1)とは別の職員を記載すること。
          </Typography>
        </Grid>
      </Grid>
      {/* End (注) (2)には(1)とは別の職員を記載すること。 Grid */}

      {/* Start 月数 Grid */}
      <Grid container className='pt-3' justifyContent="center">
        <Grid item xs={7} sm={6} md={5} lg={3}>
          <TextField
            className='w-full'
            id="months"
            name="months"
            label="月数"
            type="text"
            size='small'
            sx={{
              backgroundColor: "white",
            }}
          />
        </Grid>
      </Grid>
      {/* End 月数 Grid */}

      {/* Start 給与(円) Grid */}
      <Grid container className='pt-3' justifyContent="center">
        <Grid item xs={7} sm={6} md={5} lg={3}>
          <TextField
            className='w-full'
            id="giving"
            name="giving"
            label="給与(円)"
            type="text"
            size='small'
            sx={{
              backgroundColor: "white",
            }}
          />
        </Grid>
      </Grid>
      {/* End 給与(円) Grid */}

      {/* Start Grid */}
      <Grid container className='pt-5' justifyContent="center">
        <Grid item xs={2} sm={2.5} md={2.5} lg={2}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
            0　円
          </Typography>
        </Grid>
        <Grid item xs={1} sm={1} md={0.5} lg={0.5}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-center'>
            *
          </Typography>
        </Grid>
        <Grid item xs={2} sm={2} md={1.5} lg={1} className="pt-1">
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className="py-1 text-start">
            0　円
          </Typography>
        </Grid>
        <Grid item xs={1} sm={1} md={1} lg={0.5}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-start'>
            =
          </Typography>
        </Grid>
        <Grid item xs={2.3} sm={2.5} md={2.5} lg={2} className="pt-1">
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className="py-1 text-start">
            0　円
          </Typography>
        </Grid>
      </Grid>
      {/* End Grid */}

    </>
  );
}
