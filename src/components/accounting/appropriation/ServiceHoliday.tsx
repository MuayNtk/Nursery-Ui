import {  FormControlLabel, Grid,  Paper, Radio, RadioGroup, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography, } from '@mui/material'

export default function ServiceHoliday() {

  return (
    <>
      <Grid container className='h-14 pt-5' justifyContent="center" >
        <Grid item xs={12} sm={12} md={12} lg={12} className='pt-2 ' >
          <Typography
            component="div"
            sx={{ color: 'red', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, fontWeight: 'bold' }}
            className='flex justify-start'>
            個票1
          </Typography>
        </Grid>
      </Grid>

      <Grid container className='h-14 pt-1' justifyContent="center" >
        <Grid item xs={12} sm={12} md={12} lg={12} className='pt-2 ' >
          <Typography
            component="div"
            sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, fontWeight: 'bold' }}
            className='flex justify-start'>
            2 休日保育加算
          </Typography>
        </Grid>
      </Grid>

      <Grid container className='pt-1' justifyContent="start" sx={{ pl: { xs: 3, sm: 5, md: 10, lg: 10 }, pr: { xs: 3, sm: 5, md: 5, lg: 15 }, }}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className=' text-justify'>
            加算要件該当する適・否に-印をすること(1〜4の要件全てが「適」該当する場合に加算)
          </Typography>
        </Grid>
      </Grid>

      <Grid container className=' pt-2' justifyContent="center" >
        <Grid item xs={12} sm={12} md={12} lg={12} className='pt-2 ' >
          <Typography
            component="div"
            sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, fontWeight: 'bold' }}
            className='flex justify-start'>
            休日等を含めて年間を通じて開所している。
          </Typography>
        </Grid>
      </Grid>

      <Grid container className=' pt-5' justifyContent="center" >
        <Grid item xs={12} sm={12} md={12} lg={12} className=' ' >
          <Typography
            component="div"
            sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 } }}
            className='flex justify-start'>
            1.
          </Typography>
        </Grid>
      </Grid>

      <Grid container className='pt-1' justifyContent="start" sx={{}}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className=' text-justify'>
            ※  開所する施設は、複数の特定教育・保育施設、地域型保育事業所(居宅訪問 型保育事業所は除く。)又は企業主導型保育施設との共同により年間を通じて開 所する施設(以下「共同実施施設」という。)を含む。
          </Typography>
        </Grid>
      </Grid>
      <RadioGroup
          defaultValue=""
          aria-labelledby="demo-customized-radios"
          name="customized-radios"
        >
      <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-2 pl-4' >
        <Typography component='div' fontWeight={500} className="pt-6">
          妊娠中の状況
        </Typography>
        <Grid item xs={4.5} sm={3.5} md={3} lg={1.7}>
          <FormControlLabel value="胃常なし" control={<Radio />} label="胃常なし" />
        </Grid>
        <Grid item xs={3.5} sm={3.5} md={3} lg={1.7}>
          <FormControlLabel value="あり" control={<Radio />} label="あり" />
        </Grid>
      </Grid>
      </RadioGroup>

      <Grid container className=' pt-5' justifyContent="center" >
        <Grid item xs={12} sm={12} md={12} lg={12} className=' ' >
          <Typography
            component="div"
            sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 } }}
            className='flex justify-start'>
            2.
          </Typography>
        </Grid>
      </Grid>
      <Grid container className='pt-1' justifyContent="start" sx={{}}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className=' text-justify'>
            ※  関係法令に基づき、対象子どもの年齢及び人数に応じて、本事業を担当する保育士を配置している。
          </Typography>
        </Grid>
      </Grid>

      {/* Start Table */}

      <Grid container className='pt-2' justifyContent="center">
        <TableContainer component={Paper} className="" sx={{ width: { xs: 'auto', sm: 'auto', md: 'auto', lg: 10000 } }}>
          <Table sx={{ minWidth: 800 }} aria-label="simple table">
            <TableHead >
              <TableRow>
                <TableCell style={{ width: 10, fontWeight: 'bold', background: '#D3DCF1', }}></TableCell>
                <TableCell style={{ width: 150, fontWeight: 'bold', background: '#D3DCF1', }} align="center">利用子ども数(見込)</TableCell>
                <TableCell style={{ width: 100, fontWeight: 'bold', background: '#D3DCF1', }} align="center">保育士の配置状況(見込)</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              <TableRow >
                <TableCell style={{ width: 20, }}>1.2歳児</TableCell>
                <TableCell style={{ width: 20, }} align="center"><TextField
                  className='w-40  '
                  id="-input"
                  label="名"
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                    fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }
                  }}
                /></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
              </TableRow>
              <TableRow >
                <TableCell style={{ width: 20, }}>3歲児</TableCell>
                <TableCell style={{ width: 20, }} align="center"><TextField
                  className='w-40  '
                  id="-input"
                  label="名"
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                    fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }
                  }}
                /></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
              </TableRow>
              <TableRow >
                <TableCell style={{ width: 20, }}>4歲以上児</TableCell>
                <TableCell style={{ width: 20, }} align="center"><TextField
                  className='w-40  '
                  id="-input"
                  label="名"
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                    fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }
                  }}
                /></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
              </TableRow>
              <TableRow >
                <TableCell style={{ width: 20, }}>計</TableCell>
                <TableCell style={{ width: 20, }} align="center"><TextField
                  className='w-40  '
                  id="-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                    fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }
                  }}
                /></TableCell>
                <TableCell style={{ width: 20, }} align="center"><TextField
                  className='w-40  '
                  id="-input"
                  label="名"
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                    fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }
                  }}
                /></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid >
      {/* End Table */}

      <Grid container className=' pt-5' justifyContent="center" >
        <Grid item xs={12} sm={12} md={12} lg={12} className=' ' >
          <Typography
            component="div"
            sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 } }}
            className='flex justify-start'>
            3.
          </Typography>
        </Grid>
      </Grid>

      <Grid container className='pt-1' justifyContent="start" sx={{}}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className=' text-justify'>
            ※適宜、間食又は給食等を提供している。
          </Typography>
        </Grid>
      </Grid>
      <RadioGroup
          defaultValue=""
          aria-labelledby="demo-customized-radios"
          name="customized-radios"
        >
      <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-2 pl-4' >
        <Grid item xs={4.5} sm={3.5} md={3} lg={1.7}>
          <FormControlLabel value="適" control={<Radio />} label="適" />
        </Grid>
        <Grid item xs={3.5} sm={3.5} md={3} lg={1.7}>
          <FormControlLabel value="否" control={<Radio />} label="否" />
        </Grid>
      </Grid>
</RadioGroup>
      <Grid container className=' pt-5' justifyContent="center" >
        <Grid item xs={12} sm={12} md={12} lg={12} className=' ' >
          <Typography
            component="div"
            sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 } }}
            className='flex justify-start'>
            4.
          </Typography>
        </Grid>
      </Grid>

      <Grid container className='pt-1' justifyContent="start" sx={{}}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className=' text-justify'>
            ※対象となる子どもは、原則、休日等に常態的に保育を必要とする保育認定子どもである。
          </Typography>
        </Grid>
      </Grid>
      <RadioGroup
          defaultValue=""
          aria-labelledby="demo-customized-radios"
          name="customized-radios"
        >
      <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-2 pl-4' >
        <Grid item xs={4.5} sm={3.5} md={3} lg={1.7}>
          <FormControlLabel value="適" control={<Radio />} label="適" />
        </Grid>
        <Grid item xs={3.5} sm={3.5} md={3} lg={1.7}>
          <FormControlLabel value="否" control={<Radio />} label="否" />
        </Grid>
      </Grid>
      </RadioGroup>
      {/* Start Table */}

      <Grid container className='pt-2' justifyContent="center">
        <TableContainer component={Paper} className="" sx={{ width: { xs: 'auto', sm: 'auto', md: 'auto', lg: 10000 } }}>
          <Table sx={{ minWidth: 3000 }} aria-label="simple table">
            <TableHead >
              <TableRow>
                <TableCell style={{ width: 100, fontWeight: 'bold', background: '#D3DCF1', }}></TableCell>
                <TableCell style={{ width: 200, fontWeight: 'bold', background: '#D3DCF1', }} align="center"></TableCell>
                <TableCell style={{ width: 100, fontWeight: 'bold', background: '#D3DCF1', }} align="center">4月</TableCell>
                <TableCell style={{ width: 100, fontWeight: 'bold', background: '#D3DCF1', }} align="center">5月</TableCell>
                <TableCell style={{ width: 100, fontWeight: 'bold', background: '#D3DCF1', }} align="center">6月</TableCell>
                <TableCell style={{ width: 100, fontWeight: 'bold', background: '#D3DCF1', }} align="center">7月</TableCell>
                <TableCell style={{ width: 100, fontWeight: 'bold', background: '#D3DCF1', }} align="center">8月</TableCell>
                <TableCell style={{ width: 100, fontWeight: 'bold', background: '#D3DCF1', }} align="center">9月</TableCell>
                <TableCell style={{ width: 100, fontWeight: 'bold', background: '#D3DCF1', }} align="center">10月</TableCell>
                <TableCell style={{ width: 100, fontWeight: 'bold', background: '#D3DCF1', }} align="center">11月</TableCell>
                <TableCell style={{ width: 100, fontWeight: 'bold', background: '#D3DCF1', }} align="center">12月</TableCell>
                <TableCell style={{ width: 100, fontWeight: 'bold', background: '#D3DCF1', }} align="center">1月</TableCell>
                <TableCell style={{ width: 100, fontWeight: 'bold', background: '#D3DCF1', }} align="center">2月</TableCell>
                <TableCell style={{ width: 100, fontWeight: 'bold', background: '#D3DCF1', }} align="center">3月</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              <TableRow >
                <TableCell style={{ width: 20, }}>1</TableCell>
                <TableCell style={{ width: 20, }} align="left">前年度延べ利用子ども数※1、2(実 績)</TableCell>
                <TableCell style={{ width: 20, }} align="center"><TextField
                  className='w-full  '
                  id="-input"
                  label="名"
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                    fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }
                  }}
                /></TableCell><TableCell style={{ width: 20, }} align="center"><TextField
                  className='w-full  '
                  id="-input"
                  label="名"
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                    fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }
                  }}
                /></TableCell><TableCell style={{ width: 20, }} align="center"><TextField
                  className='w-full  '
                  id="-input"
                  label="名"
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                    fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }
                  }}
                /></TableCell><TableCell style={{ width: 20, }} align="center"><TextField
                  className='w-full  '
                  id="-input"
                  label="名"
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                    fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }
                  }}
                /></TableCell><TableCell style={{ width: 20, }} align="center"><TextField
                  className='w-full  '
                  id="-input"
                  label="名"
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                    fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }
                  }}
                /></TableCell><TableCell style={{ width: 20, }} align="center"><TextField
                  className='w-full  '
                  id="-input"
                  label="名"
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                    fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }
                  }}
                /></TableCell><TableCell style={{ width: 20, }} align="center"><TextField
                  className='w-full  '
                  id="-input"
                  label="名"
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                    fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }
                  }}
                /></TableCell><TableCell style={{ width: 20, }} align="center"><TextField
                  className='w-full  '
                  id="-input"
                  label="名"
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                    fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }
                  }}
                /></TableCell><TableCell style={{ width: 20, }} align="center"><TextField
                  className='w-full  '
                  id="-input"
                  label="名"
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                    fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }
                  }}
                /></TableCell><TableCell style={{ width: 20, }} align="center"><TextField
                  className='w-full  '
                  id="-input"
                  label="名"
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                    fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }
                  }}
                /></TableCell><TableCell style={{ width: 20, }} align="center"><TextField
                  className='w-full  '
                  id="-input"
                  label="名"
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                    fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }
                  }}
                /></TableCell><TableCell style={{ width: 20, }} align="center"><TextField
                  className='w-full  '
                  id="-input"
                  label="名"
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                    fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }
                  }}
                /></TableCell>
              </TableRow>
              <TableRow >
                <TableCell style={{ width: 20, }}>1</TableCell>
                <TableCell style={{ width: 20, }} align="left">当該年度延べ利用子ども数※1、2、3(見込)</TableCell>
                <TableCell style={{ width: 20, }} align="center"><TextField
                  className='w-full  '
                  id="-input"
                  label="名"
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                    fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }
                  }}
                /></TableCell><TableCell style={{ width: 20, }} align="center"><TextField
                  className='w-full  '
                  id="-input"
                  label="名"
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                    fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }
                  }}
                /></TableCell><TableCell style={{ width: 20, }} align="center"><TextField
                  className='w-full  '
                  id="-input"
                  label="名"
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                    fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }
                  }}
                /></TableCell><TableCell style={{ width: 20, }} align="center"><TextField
                  className='w-full  '
                  id="-input"
                  label="名"
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                    fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }
                  }}
                /></TableCell><TableCell style={{ width: 20, }} align="center"><TextField
                  className='w-full  '
                  id="-input"
                  label="名"
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                    fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }
                  }}
                /></TableCell><TableCell style={{ width: 20, }} align="center"><TextField
                  className='w-full  '
                  id="-input"
                  label="名"
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                    fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }
                  }}
                /></TableCell><TableCell style={{ width: 20, }} align="center"><TextField
                  className='w-full  '
                  id="-input"
                  label="名"
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                    fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }
                  }}
                /></TableCell><TableCell style={{ width: 20, }} align="center"><TextField
                  className='w-full  '
                  id="-input"
                  label="名"
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                    fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }
                  }}
                /></TableCell><TableCell style={{ width: 20, }} align="center"><TextField
                  className='w-full  '
                  id="-input"
                  label="名"
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                    fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }
                  }}
                /></TableCell><TableCell style={{ width: 20, }} align="center"><TextField
                  className='w-full  '
                  id="-input"
                  label="名"
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                    fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }
                  }}
                /></TableCell><TableCell style={{ width: 20, }} align="center"><TextField
                  className='w-full  '
                  id="-input"
                  label="名"
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                    fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }
                  }}
                /></TableCell><TableCell style={{ width: 20, }} align="center"><TextField
                  className='w-full  '
                  id="-input"
                  label="名"
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                    fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }
                  }}
                /></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid >
      {/* End Table */}

       {/* Start Text Center Content Grid */}
       <Grid container className='pt-5' justifyContent="start" sx={{ pl: { xs: 3, sm: 5, md: 10, lg: 10 }, pr: { xs: 3, sm: 5, md: 10, lg: 15 }, }}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-justify'>
          ※ 1延べ利用子ども数は、1人の子どもが月4日利用した場合は4名と計算すること。
          </Typography>
        </Grid>
      </Grid>
      {/* End Text Center Content Grid */}
       {/* Start Text Center Content Grid */}
       <Grid container className='pt-1' justifyContent="start" sx={{ pl: { xs: 3, sm: 5, md: 10, lg: 10 }, pr: { xs: 3, sm: 5, md: 10, lg: 15 }, }}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-justify'>
          ※2 休日延べ利用子ども数には、休日等に当該休日保育対象施設を利用する、休日保育対象施設以外の特定教育・保育施設又は特 定地域型 保育事業を利用する子どもを含むこと。
          </Typography>
        </Grid>
      </Grid>
      {/* End Text Center Content Grid */}
       {/* Start Text Center Content Grid */}
       <Grid container className='pt-1' justifyContent="start" sx={{ pl: { xs: 3, sm: 5, md: 10, lg: 10 }, pr: { xs: 3, sm: 5, md: 10, lg: 15 }, }}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-justify'>
          ※3複数の施設により実施する場合は、実施する各施設の休日延べ利用子ども数の見込み数を徴収して認定を行うこと。名
          </Typography>
        </Grid>
      </Grid>
      {/* End Text Center Content Grid */}






    </>
  );
}
