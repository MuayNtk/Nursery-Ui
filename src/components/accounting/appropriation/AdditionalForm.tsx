import { Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, TextareaAutosize, Typography, } from '@mui/material'




export default function AdditionalForm() {

  return (
    <>
      <Grid container className='h-14 pt-3' justifyContent="center" >
        <Grid item xs={12} sm={12} md={12} lg={12} className='pt-2 ' >
          <Typography
            component="div"
            sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, fontWeight: 'bold' }}
            className='flex justify-center'>
            【保育所用】
          </Typography>
        </Grid>
      </Grid>

      <Grid container className='' justifyContent="start" >
        <Grid item xs={12} sm={12} md={12} lg={12} className='pt-2 ' >
          <Typography
            component="div"
            sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 } }}
            className='flex justify-start'>
            【保育所用】
          </Typography>
        </Grid>
      </Grid>

      <Grid container className='' justifyContent="start" >
        <Grid item xs={12} sm={12} md={12} lg={12} className=' ' >
          <Typography
            component="div"
            sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 } }}
            className='flex justify-start'>
            〒810-8620 福岡市中央区天神1-8-1福岡市こども未来局運営支援課
          </Typography>
        </Grid>
      </Grid>

      <Grid container className='' justifyContent="start" >
        <Grid item xs={12} sm={12} md={12} lg={12} className=' ' >
          <Typography
            component="div"
            sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 } }}
            className='flex justify-start'>
            施設給付係村山.鐘ヶ江・藤野
          </Typography>
        </Grid>
      </Grid>

      {/* Start Table */}
      <Grid container className='pt-9' justifyContent="start" >
        <Grid item xs={12} sm={12} md={12} lg={12} className=' ' >
          <Typography
            component="div"
            sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 } }}
            className='flex justify-start'>
            令和5年度委費加算書(仮)※R5.41時点の加算内容
          </Typography>
        </Grid>
      </Grid>
      <Grid container className='' justifyContent="center">
        <TableContainer component={Paper} className="" sx={{ width: { xs: 'auto', sm: 'auto', md: 'auto', lg: 10000 } }}>
          <Table sx={{ minWidth: 1500 }} aria-label="simple table">
            <TableHead >
              <TableRow>
                <TableCell style={{ width: 100, fontWeight: 'bold', background: '#D3DCF1', }}></TableCell>
                <TableCell style={{ width: 100, fontWeight: 'bold', background: '#D3DCF1', }} align="center">※入力してください</TableCell>
                <TableCell style={{ width: 100, fontWeight: 'bold', background: '#D3DCF1', }} align="center"></TableCell>
                <TableCell style={{ width: 100, fontWeight: 'bold', background: '#D3DCF1', }} align="center"></TableCell>
                <TableCell style={{ width: 100, fontWeight: 'bold', background: '#D3DCF1', }} align="center">処遇改善等加算I(%)</TableCell>
                <TableCell style={{ width: 100, fontWeight: 'bold', background: '#D3DCF1', }} align="center"></TableCell>
                <TableCell style={{ width: 100, fontWeight: 'bold', background: '#D3DCF1', }} align="center"></TableCell>
                <TableCell style={{ width: 100, fontWeight: 'bold', background: '#D3DCF1', }} align="center">処遇改善等加算II</TableCell>
                <TableCell style={{ width: 100, fontWeight: 'bold', background: '#D3DCF1', }} align="center"></TableCell>
                <TableCell style={{ width: 100, fontWeight: 'bold', background: '#D3DCF1', }} align="center"></TableCell>
                <TableCell style={{ width: 100, fontWeight: 'bold', background: '#D3DCF1', }} align="center"></TableCell>
                <TableCell style={{ width: 100, fontWeight: 'bold', background: '#D3DCF1', }} align="center">処遇改善等加算III</TableCell>
                <TableCell style={{ width: 100, fontWeight: 'bold', background: '#D3DCF1', }} align="center"></TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{ width: 20, fontWeight: 'bold', background: '#D3DCF1', }}>園番号</TableCell>
                <TableCell style={{ width: 20, fontWeight: 'bold', background: '#D3DCF1', }} align="center">施設名</TableCell>
                <TableCell style={{ width: 20, fontWeight: 'bold', background: '#D3DCF1', }} align="center">加算率(%)</TableCell>
                <TableCell style={{ width: 20, fontWeight: 'bold', background: '#D3DCF1', }} align="center">基礎分</TableCell>
                <TableCell style={{ width: 20, fontWeight: 'bold', background: '#D3DCF1', }} align="center">推 賃金改善要件分</TableCell>
                <TableCell style={{ width: 20, fontWeight: 'bold', background: '#D3DCF1', }} align="center">平均経験年数</TableCell>
                <TableCell style={{ width: 20, fontWeight: 'bold', background: '#D3DCF1', }} align="center">キャリアパス</TableCell>
                <TableCell style={{ width: 20, fontWeight: 'bold', background: '#D3DCF1', }} align="center">A</TableCell>
                <TableCell style={{ width: 20, fontWeight: 'bold', background: '#D3DCF1', }} align="center">B</TableCell>
                <TableCell style={{ width: 20, fontWeight: 'bold', background: '#D3DCF1', }} align="center">4歳以上</TableCell>
                <TableCell style={{ width: 20, fontWeight: 'bold', background: '#D3DCF1', }} align="center">3歳</TableCell>
                <TableCell style={{ width: 20, fontWeight: 'bold', background: '#D3DCF1', }} align="center">1歳 ・2歳</TableCell>
                <TableCell style={{ width: 20, fontWeight: 'bold', background: '#D3DCF1', }} align="center">乳児</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow >
                <TableCell style={{ width: 20, }}>1</TableCell>
                <TableCell style={{ width: 20, }} align="center">school1</TableCell>
                <TableCell style={{ width: 20, }} align="center">10</TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center">10</TableCell>
                <TableCell style={{ width: 20, }} align="center">10</TableCell>
                <TableCell style={{ width: 20, }} align="center">career1</TableCell>
                <TableCell style={{ width: 20, }} align="center">10</TableCell>
                <TableCell style={{ width: 20, }} align="center">10</TableCell>
                <TableCell style={{ width: 20, }} align="center">10</TableCell>
                <TableCell style={{ width: 20, }} align="center">10</TableCell>
                <TableCell style={{ width: 20, }} align="center">10</TableCell>
                <TableCell style={{ width: 20, }} align="center">10</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid >
      {/* End Table */}

      {/* Start Table */}

      <Grid container className='pt-20' justifyContent="center">
        <TableContainer component={Paper} className="" sx={{ width: { xs: 'auto', sm: 'auto', md: 'auto', lg: 10000 } }}>
          <Table sx={{ minWidth: 700 }} aria-label="simple table">
            <TableHead >
              <TableRow>
                <TableCell style={{ width: 20, fontWeight: 'bold', background: '#D3DCF1', }}></TableCell>
                <TableCell style={{ width: 50, fontWeight: 'bold', background: '#D3DCF1', }} align="center"></TableCell>
                <TableCell style={{ width: 20, fontWeight: 'bold', background: '#D3DCF1', }} align="center"></TableCell>
                <TableCell style={{ width: 20, fontWeight: 'bold', background: '#D3DCF1', }} align="center"></TableCell>
                <TableCell style={{ width: 100, fontWeight: 'bold', background: '#D3DCF1', }} align="center">その他加算</TableCell>
                <TableCell style={{ width: 20, fontWeight: 'bold', background: '#D3DCF1', }} align="center"></TableCell>
                <TableCell style={{ width: 20, fontWeight: 'bold', background: '#D3DCF1', }} align="center"></TableCell>
                <TableCell style={{ width: 20, fontWeight: 'bold', background: '#D3DCF1', }} align="center"></TableCell>
              </TableRow>
            </TableHead>
            <TableHead>
              <TableRow>
                <TableCell style={{ fontWeight: "bold", background: '#D3DCF1', }} rowSpan={2} align="center">3歲</TableCell>
                <TableCell style={{ fontWeight: "bold", background: '#D3DCF1', }} colSpan={2} align="center">生年月日</TableCell>
                <TableCell style={{ fontWeight: "bold", background: '#D3DCF1', }} colSpan={5} align="left"></TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{ fontWeight: "bold", background: '#D3DCF1', }} align="center">該当有無</TableCell>
                <TableCell style={{ fontWeight: "bold", background: '#D3DCF1', }} align="center">加配人数</TableCell>
                <TableCell style={{ fontWeight: "bold", background: '#D3DCF1', }} align="center">主任専任</TableCell>
                <TableCell style={{ fontWeight: "bold", background: '#D3DCF1', }} align="center">療育支援</TableCell>
                <TableCell style={{ fontWeight: "bold", background: '#D3DCF1', }} align="center">事務職員</TableCell>
                <TableCell style={{ fontWeight: "bold", background: '#D3DCF1', }} align="center">栄養管理</TableCell>
                <TableCell style={{ fontWeight: "bold", background: '#D3DCF1', }} align="center">施設長</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow >
                <TableCell style={{ width: 20, }}>10</TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center">10</TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center">nutrition1</TableCell>
                <TableCell style={{ width: 20, }} align="center">nursing1</TableCell>

              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid >
      {/* End Table */}

      <Grid container className='pt-20' justifyContent="start" >
        <Grid item xs={12} sm={12} md={12} lg={12} className=' ' >
          <Typography
            component="div"
            sx={{ color: 'red', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 } }}
            className='flex justify-end'>
            ※1処週Iの「平均経験年数」が12年以上であること
          </Typography>
        </Grid>
      </Grid>

      <Grid container className='pt-5' justifyContent="start" >
        <Grid item xs={6} sm={6} md={6} lg={6} className=' ' >
          <Typography
            component="div"
            sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 } }}
            className='flex justify-start'>
            【備考欄】
          </Typography>
        </Grid>
        <Grid item xs={6} sm={6} md={6} lg={6} className=' ' >
          <Typography
            component="div"
            sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 } }}
            className='flex justify-start'>
            【ご担当者】
          </Typography>
        </Grid>
      </Grid>

      <Grid container className='pt-5' justifyContent="start" >
        <Grid item xs={6} sm={6} md={3} lg={5} className=' ' sx={{ ml: { xs: -6, sm: -5, md: -1, lg: -1 } }} >
          <TextareaAutosize
            id="emotional-input"
            name="emotional-input"
            minRows={6}
            maxRows={1000}
            className="lg:w-full  w-20"
            style={{ border: '1px solid gray', borderRadius: '4px' }}
          />
        </Grid>
        <Grid item xs={3} sm={3} md={4} lg={5} className=' ' >
          <Typography
            component="div"
            sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, marginLeft: { xs: -4, sm: -2, md: 20, lg: 13, } }}
            className='flex justify-start pt-2'>
            所属または職名(園長、事務等):
          </Typography>
        </Grid>
        <Grid item xs={3} sm={3} md={3} lg={2} className=' ' >
          <TextField
            className='w-full '
            id="-input"
            label=""
            type="text"
            size='small'
            sx={{
              backgroundColor: "white",
              fontSize: { xs: 11, sm: 11, md: 11, lg: 16, },
              marginLeft: { xs: 1, sm: 1, md: 4, lg: -25, }
            }}
          />
        </Grid>
      </Grid>

      <Grid container className='pt-5' justifyContent="start" >
        <Grid item xs={6} sm={6} md={6} lg={6} className=' ' >

        </Grid>
        <Grid item xs={3} sm={3} md={3} lg={2} sx={{ mt: { xs: -13, sm: -13, md: -10, lg: -15 } }} >
          <Typography
            component="div"
            sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 } }}
            className='flex justify-start pt-2'>
            お名前:
          </Typography>
        </Grid>
        <Grid item xs={3} sm={3} md={3} lg={4} className=' ' sx={{ mt: { xs: -13, sm: -13, md: -11, lg: -15 } }} >
          <TextField
            className='w-full '
            id="-input"
            label=""
            type="text"
            size='small'
            sx={{
              backgroundColor: "white",
              fontSize: { xs: 11, sm: 11, md: 11, lg: 16, },
              marginLeft: { xs: -6, sm: -8, md: -22, lg: -26, }
            }}
          />
        </Grid>
      </Grid>

      <Grid container className='pt-5' justifyContent="start" >
        <Grid item xs={6} sm={6} md={6} lg={6} className=' ' >
        </Grid>
        <Grid item xs={3} sm={3} md={3} lg={2} className=' ' sx={{ mt: { xs: -7, sm: -6, md: -3, lg: -11 } }}>
          <Typography
            component="div"
            sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 } }}
            className='flex justify-start pt-2'>
            電話番号:
          </Typography>
        </Grid>
        <Grid item xs={3} sm={3} md={3} lg={4} className=' ' sx={{ mt: { xs: -7, sm: -7, md: -4, lg: -11 } }} >
          <TextField
            className='w-full '
            id="-input"
            label=""
            type="text"
            size='small'
            sx={{
              backgroundColor: "white",
              fontSize: { xs: 11, sm: 11, md: 11, lg: 16, },
              marginLeft: { xs: -6, sm: -8, md: -21, lg: -25, }
            }}
          />
        </Grid>
      </Grid>
    </>
  );
}
