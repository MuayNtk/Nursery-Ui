import { Grid, Paper, Table, TableCell, TableContainer, TableHead, TableRow, TextField, Typography, TableBody, Button, Divider, Checkbox, TextareaAutosize } from "@mui/material";


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function ImplementationPlan1() {

  return (
    <>

      {/* Start 様式第1号 別添12(保育所、幼保連携認定こども園のみ) Grid */}
      <Grid container className='pt-3' justifyContent="start">
        <Grid item xs={12} sm={11} md={8} lg={5}>
          <Typography fontWeight="bold" sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-center'>
            様式第 1 号 別添 1 - 2 (保育所、幼保連携認定こども園のみ)
          </Typography>
        </Grid>
      </Grid>
      {/* End 様式第1号 別添12(保育所、幼保連携認定こども園のみ) Grid */}

      {/* Start 園番号 Grid */}
      <Grid container className='pt-5' justifyContent="end">
        <Grid item xs={4.65} sm={2.5} md={2} lg={1}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 pr-3 text-end'>
            園番号 :
          </Typography>
        </Grid>
        <Grid item xs={5} sm={4} md={3} lg={2}>
          <Typography fontWeight="bold" sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-start'>
            いちざきみんなの家
          </Typography>
        </Grid>
      </Grid>
      {/* End 園番号 Grid */}

      <Divider className='pt-7'></Divider>

      {/* Start 氏名 Grid */}
      <Grid container className='pt-3' justifyContent="start">
        <Grid item xs={2.3} sm={2} md={1.7} lg={1}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
            氏名 :
          </Typography>
        </Grid>
        <Grid item xs={7} sm={6} md={5} lg={3} className="pl-3">
          <TextField
            className='w-full'
            id="first-name"
            name="first-name"
            label="氏名"
            type="text"
            size='small'
            sx={{
              backgroundColor: "white",
            }}
          />
        </Grid>
      </Grid>
      {/* End 氏名 Grid */}

      {/* Start 従事する業務、従事回数の目安を記載ください。 Grid */}
      <Grid container className='pt-3' justifyContent="start">
        <Grid item xs={12} sm={10.5} md={7.5} lg={4.6}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-center'>
            従事する業務、従事回数の目安を記載ください。
          </Typography>
        </Grid>
      </Grid>
      {/* End 従事する業務、従事回数の目安を記載ください。 Grid */}

      {/* Start Table 1 */}
      <Grid container className='pt-3' justifyContent="center">
        <TableContainer component={Paper} className="mt-5" sx={{ width: { xs: 'auto', sm: 'auto', md: 'auto', lg: 'auto' } }}>
          <Table sx={{ minWidth: 800 }} aria-label="simple table" size="small">
            <TableHead>
              <TableRow>
                <TableCell align="center" style={{ width: 100, fontWeight: "bold" }}>該当</TableCell>
                <TableCell align="left" style={{ width: 500, fontWeight: "bold" }}>従事する業務</TableCell>
                <TableCell align="center" style={{ width: 200, fontWeight: "bold" }}>従事回数の目安(A)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow hover role="checkbox" tabIndex={-1}>
                <TableCell align="center">
                  <Checkbox {...label} />
                </TableCell>
                <TableCell align="left">園外活動における見守り等</TableCell>
                <TableCell align="left">
                  <TextField
                    className='w-full'
                    id="off-site-activities"
                    name="off-site-activities"
                    label=""
                    type="text"
                    size='small'
                    sx={{
                      backgroundColor: "white",
                    }}
                  />
                </TableCell>
              </TableRow>
              <TableRow hover role="checkbox" tabIndex={-1}>
                <TableCell align="center">
                  <Checkbox {...label} />
                </TableCell>
                <TableCell align="left">保育施設,遊ぶ場所,遊具等の消毒又は清掃</TableCell>
                <TableCell align="left">
                  <TextField
                    className='w-full'
                    id="disinfection-or-cleaning"
                    name="disinfection-or-cleaning"
                    label=""
                    type="text"
                    size='small'
                    sx={{
                      backgroundColor: "white",
                    }}
                  />
                </TableCell>
              </TableRow>
              <TableRow hover role="checkbox" tabIndex={-1}>
                <TableCell align="center">
                  <Checkbox {...label} />
                </TableCell>
                <TableCell align="left">給食の配膳又は片付け</TableCell>
                <TableCell align="left">
                  <TextField
                    className='w-full'
                    id="serving-and-cleaning"
                    name="serving-and-cleaning"
                    label=""
                    type="text"
                    size='small'
                    sx={{
                      backgroundColor: "white",
                    }}
                  />
                </TableCell>
              </TableRow>
              <TableRow hover role="checkbox" tabIndex={-1}>
                <TableCell align="center">
                  <Checkbox {...label} />
                </TableCell>
                <TableCell align="left">寝具の用意又は片付け</TableCell>
                <TableCell align="left">
                  <TextField
                    className='w-full'
                    id="tidying-up-bedding"
                    name="tidying-up-bedding"
                    label=""
                    type="text"
                    size='small'
                    sx={{
                      backgroundColor: "white",
                    }}
                  />
                </TableCell>
              </TableRow>
              <TableRow hover role="checkbox" tabIndex={-1}>
                <TableCell align="center">
                  <Checkbox {...label} />
                </TableCell>
                <TableCell align="left">
                  外国人の児童の保護者等との意思疎通に係る通訳又は翻訳
                </TableCell>
                <TableCell align="left">
                  <TextField
                    className='w-full'
                    id="interpretation-or-translatio-"
                    name="interpretation-or-translatio-"
                    label=""
                    type="text"
                    size='small'
                    sx={{
                      backgroundColor: "white",
                    }}
                  />
                </TableCell>
              </TableRow>
              <TableRow hover role="checkbox" tabIndex={-1}>
                <TableCell align="center">
                  <Checkbox {...label} />
                </TableCell>
                <TableCell align="left">
                  その他,保育士の負担軽減に資する業務(休憩・事務時間の確保等)
                  <TextareaAutosize
                    id="other-task-textarea"
                    name="other-task-textarea"
                    minRows={3}
                    maxRows={100}
                    className="w-full"
                    style={{ border: '1px solid gray', borderRadius: '4px' }}
                  />
                </TableCell>
                <TableCell align="left">
                  <TextField
                    className='w-full'
                    id="other-task"
                    name="other-task"
                    label=""
                    type="text"
                    size='small'
                    sx={{
                      backgroundColor: "white",
                    }}
                  />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      {/* End Table 1 */}

      {/* Start (注)人件費等には Grid */}
      <Grid container className='pt-5' justifyContent="center">
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' }, color: '#FF9900' }} className='pt-2 text-center'>
            (注)　1 その他、保育士の負担軽減に資する業務を選んだ場合, (　　　　　) 内に従事する業務を記載すること
          </Typography>
        </Grid>
      </Grid>
      {/* End (注)人件費等には Grid */}

      {/* Start Grid Button */}
      <Grid container className='pt-3' justifyContent="start">
        <Grid item>
          <Button variant="contained" sx={{ width: 30 }}>追加</Button>
        </Grid>
      </Grid>
      {/* End Grid Button */}



    </>
  );
}
