import { Grid, Typography, TextField, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, TextareaAutosize,  } from "@mui/material";

export default function AgeCalcReq() {
  
      return (
        <>
           <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-5 pl-3 justify-end' >
        <Typography component='div' fontWeight={500} className="pl-5 lg:pl-24 pt-6">
          團番号:
        </Typography>
        <Grid item xs={7.5} sm={7} md={3} lg={2}>
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
      <Grid container className='' justifyContent="start">
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' }, fontWeight: 'bold', }} className='pt-2 text-start'>
            平均年齢別児童数計算表(認定こども園、保育所等)
          </Typography>
        </Grid>
      </Grid>

      <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-8 pl-3 justify-start' >
        <Typography component='div' fontWeight={500} className="pl-5 lg:pl-24 pt-6">
          施設・事業所名:
        </Typography>
        <Grid item xs={7} sm={7} md={3} lg={4}>
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

      <Grid container className='pt-8' justifyContent="start">
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-start'>
            黄線セルは入力項目、黄色(オレンジ)セルは自動計算。
          </Typography>
        </Grid>
      </Grid>
      <Grid container className='' justifyContent="start">
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-start'>
            児童数は、月初日利用児童数を入力すること。
          </Typography>
        </Grid>
      </Grid>
      <Grid container className='' justifyContent="start">
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-start'>
            小規模保育所、事業所内保商所については、1,2歳児。0歳児欄に記入すること。
          </Typography>
        </Grid>
      </Grid>

      <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-14 pl-3 justify-start' >
        <Typography
          component="div"
          sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, fontWeight: 'bold', }}
          className='flex justify-start h-11 pt-3 pl-5 w-full'
          bgcolor={"#CCF0FD"}>
          (1) 令和4年度実績
        </Typography>
      </Grid>
      <Grid container className='pt-3' justifyContent="center">
        <TableContainer component={Paper} className="" sx={{ width: { xs: 'auto', sm: 'auto', md: 'auto', lg: 'auto' }, height: 500, }} >
          <Table sx={{ minWidth: 2000, }} aria-label="simple table">
            <TableHead >
              <TableRow>
                <TableCell style={{ width: 100, background: '', fontWeight: 'bold', }}>令和4年度</TableCell>
                <TableCell style={{ width: 100, background: '', fontWeight: 'bold', }}>児童故/伸び率</TableCell>
                <TableCell style={{ width: 100, background: '', fontWeight: 'bold', }} colSpan={12} align="center">実績</TableCell>
                <TableCell style={{ width: 100, background: '', fontWeight: 'bold', }} align="center">平均児童数</TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{ width: 300, background: '', fontWeight: 'bold', }}></TableCell>
                <TableCell style={{ width: 200, background: '', fontWeight: 'bold', }}></TableCell>
                <TableCell style={{ width: 100, background: '', fontWeight: 'bold', }} align="center">m4</TableCell>
                <TableCell style={{ width: 100, background: '', fontWeight: 'bold', }} align="center">m5</TableCell>
                <TableCell style={{ width: 100, background: '', fontWeight: 'bold', }} align="center">m6</TableCell>
                <TableCell style={{ width: 100, background: '', fontWeight: 'bold', }} align="center">m7</TableCell>
                <TableCell style={{ width: 100, background: '', fontWeight: 'bold', }} align="center">m8</TableCell>
                <TableCell style={{ width: 100, background: '', fontWeight: 'bold', }} align="center">m9</TableCell>
                <TableCell style={{ width: 100, background: '', fontWeight: 'bold', }} align="center">m10</TableCell>
                <TableCell style={{ width: 100, background: '', fontWeight: 'bold', }} align="center">m11</TableCell>
                <TableCell style={{ width: 100, background: '', fontWeight: 'bold', }} align="center">m12</TableCell>
                <TableCell style={{ width: 100, background: '', fontWeight: 'bold', }} align="center">m1</TableCell>
                <TableCell style={{ width: 100, background: '', fontWeight: 'bold', }} align="center">m2</TableCell>
                <TableCell style={{ width: 100, background: '', fontWeight: 'bold', }} align="center">m3</TableCell>
                <TableCell style={{ width: 100, background: '', fontWeight: 'bold', }} align="center"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow >
                <TableCell style={{ width: 300, background: '', }}>4歲以上児</TableCell>
                <TableCell style={{ width: 100, background: '', }}>児童数</TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
              </TableRow>
              <TableRow >
                <TableCell style={{ width: 300, background: '', }}></TableCell>
                <TableCell style={{ width: 100, background: '', }}>伸び率</TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"></TableCell>
              </TableRow>


              <TableRow >
                <TableCell style={{ width: 300, background: '', }}>3歲児</TableCell>
                <TableCell style={{ width: 100, background: '', }}>児童数</TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
              </TableRow>
              <TableRow >
                <TableCell style={{ width: 300, background: '', }}></TableCell>
                <TableCell style={{ width: 100, background: '', }}>伸び率</TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"></TableCell>
              </TableRow>


              <TableRow >
                <TableCell style={{ width: 300, background: '', }}>うち満3歳児
                  (認定こども園
                  のみ)0歳児</TableCell>
                <TableCell style={{ width: 100, background: '', }}>児童数</TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
              </TableRow>
              <TableRow >
                <TableCell style={{ width: 300, background: '', }}></TableCell>
                <TableCell style={{ width: 100, background: '', }}>伸び率</TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"></TableCell>
              </TableRow>


              <TableRow >
                <TableCell style={{ width: 300, background: '', }}>1,　2歳児</TableCell>
                <TableCell style={{ width: 100, background: '', }}>児童数</TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
              </TableRow>
              <TableRow >
                <TableCell style={{ width: 300, background: '', }}></TableCell>
                <TableCell style={{ width: 100, background: '', }}>伸び率</TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"></TableCell>
              </TableRow>


              <TableRow >
                <TableCell style={{ width: 300, background: '', }}>0 歲児</TableCell>
                <TableCell style={{ width: 100, background: '', }}>児童数</TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
              </TableRow>
              <TableRow >
                <TableCell style={{ width: 300, background: '', }}></TableCell>
                <TableCell style={{ width: 100, background: '', }}>伸び率</TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"></TableCell>
              </TableRow>

              <TableRow >
                <TableCell style={{ width: 300, background: '', }}>0 歲児</TableCell>
                <TableCell style={{ width: 100, background: '', }}>児童数</TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
              </TableRow>
              <TableRow >
                <TableCell style={{ width: 300, background: '', fontWeight: 'bold', }}>合計</TableCell>
                <TableCell style={{ width: 200, background: '', }}></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
              </TableRow>



            </TableBody>
          </Table>
        </TableContainer>
      </Grid >
      {/* End Table */}

      <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-14 pl-3 justify-start' >
        <Typography
          component="div"
          sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, fontWeight: 'bold', }}
          className='flex justify-start h-11 pt-3 pl-5 w-full'
          bgcolor={"#CCF0FD"}>
          (2) 前年実績による令和5年度見込み年齢別平均児童数
        </Typography>
      </Grid>
      <Grid container className='pt-3' justifyContent="center">
        <TableContainer component={Paper} className="" sx={{ width: { xs: 'auto', sm: 'auto', md: 'auto', lg: 'auto' }, height: 500, }}>
          <Table sx={{ minWidth: 2000, }} aria-label="simple table">
            <TableHead >
              <TableRow>
                <TableCell style={{ width: 100, background: '', fontWeight: 'bold', }}>令和4年度</TableCell>
                <TableCell style={{ width: 100, background: '', fontWeight: 'bold', }}>児童故/伸び率</TableCell>
                <TableCell style={{ width: 100, background: '', fontWeight: 'bold', }} colSpan={12} align="center">実績</TableCell>
                <TableCell style={{ width: 100, background: '', fontWeight: 'bold', }} align="center">平均児童数</TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{ width: 300, background: '', fontWeight: 'bold', }}></TableCell>
                <TableCell style={{ width: 200, background: '', fontWeight: 'bold', }}></TableCell>
                <TableCell style={{ width: 100, background: '', fontWeight: 'bold', }} align="center">m4</TableCell>
                <TableCell style={{ width: 100, background: '', fontWeight: 'bold', }} align="center">m5</TableCell>
                <TableCell style={{ width: 100, background: '', fontWeight: 'bold', }} align="center">m6</TableCell>
                <TableCell style={{ width: 100, background: '', fontWeight: 'bold', }} align="center">m7</TableCell>
                <TableCell style={{ width: 100, background: '', fontWeight: 'bold', }} align="center">m8</TableCell>
                <TableCell style={{ width: 100, background: '', fontWeight: 'bold', }} align="center">m9</TableCell>
                <TableCell style={{ width: 100, background: '', fontWeight: 'bold', }} align="center">m10</TableCell>
                <TableCell style={{ width: 100, background: '', fontWeight: 'bold', }} align="center">m11</TableCell>
                <TableCell style={{ width: 100, background: '', fontWeight: 'bold', }} align="center">m12</TableCell>
                <TableCell style={{ width: 100, background: '', fontWeight: 'bold', }} align="center">m1</TableCell>
                <TableCell style={{ width: 100, background: '', fontWeight: 'bold', }} align="center">m2</TableCell>
                <TableCell style={{ width: 100, background: '', fontWeight: 'bold', }} align="center">m3</TableCell>
                <TableCell style={{ width: 100, background: '', fontWeight: 'bold', }} align="center"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow >
                <TableCell style={{ width: 300, background: '', }}>4歲以上児</TableCell>
                <TableCell style={{ width: 100, background: '', }}>児童数</TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
              </TableRow>



              <TableRow >
                <TableCell style={{ width: 300, background: '', }}>3歲児</TableCell>
                <TableCell style={{ width: 100, background: '', }}>児童数</TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
              </TableRow>



              <TableRow >
                <TableCell style={{ width: 300, background: '', }}>うち満3歳児
                  (認定こども園
                  のみ)0歳児</TableCell>
                <TableCell style={{ width: 100, background: '', }}>児童数</TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
              </TableRow>



              <TableRow >
                <TableCell style={{ width: 300, background: '', }}>1,　2歳児</TableCell>
                <TableCell style={{ width: 100, background: '', }}>児童数</TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
              </TableRow>



              <TableRow >
                <TableCell style={{ width: 300, background: '', }}>0 歲児</TableCell>
                <TableCell style={{ width: 100, background: '', }}>児童数</TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
              </TableRow>
              <TableRow >
                <TableCell style={{ width: 300, background: '', fontWeight: 'bold', }}>合計</TableCell>
                <TableCell style={{ width: 200, background: '', }}></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"> </TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
              </TableRow>




            </TableBody>
          </Table>
        </TableContainer>
      </Grid >
      {/* End Table */}

      <Grid container className='pt-1' justifyContent="start">
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-start'>
            ※各月の初日人数は各施設の面積基準を下回らないこと
          </Typography>
        </Grid>
      </Grid>

      <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-14 pl-3 justify-start' >
        <Typography
          component="div"
          sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, fontWeight: 'bold', }}
          className='flex justify-start h-11 pt-3 pl-5 w-full'
          bgcolor={"#CCF0FD"}>
          (3) 前年度実績による見込みによりがたい場合の年齢別平均児童数
        </Typography>
      </Grid>
      <Grid container className='pt-3' justifyContent="center">
        <TableContainer component={Paper} className="" sx={{ width: { xs: 'auto', sm: 'auto', md: 'auto', lg: 'auto' }, height: 500, }}>
          <Table sx={{ minWidth: 2000, }} aria-label="simple table">
            <TableHead >
              <TableRow>
                <TableCell style={{ width: 100, background: '', fontWeight: 'bold', }}>令和4年度</TableCell>
                <TableCell style={{ width: 100, background: '', fontWeight: 'bold', }}>児童故/伸び率</TableCell>
                <TableCell style={{ width: 100, background: '', fontWeight: 'bold', }} colSpan={12} align="center">実績</TableCell>
                <TableCell style={{ width: 100, background: '', fontWeight: 'bold', }} align="center">平均児童数</TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{ width: 300, background: '', fontWeight: 'bold', }}></TableCell>
                <TableCell style={{ width: 200, background: '', fontWeight: 'bold', }}></TableCell>
                <TableCell style={{ width: 100, background: '', fontWeight: 'bold', }} align="center">m4</TableCell>
                <TableCell style={{ width: 100, background: '', fontWeight: 'bold', }} align="center">m5</TableCell>
                <TableCell style={{ width: 100, background: '', fontWeight: 'bold', }} align="center">m6</TableCell>
                <TableCell style={{ width: 100, background: '', fontWeight: 'bold', }} align="center">m7</TableCell>
                <TableCell style={{ width: 100, background: '', fontWeight: 'bold', }} align="center">m8</TableCell>
                <TableCell style={{ width: 100, background: '', fontWeight: 'bold', }} align="center">m9</TableCell>
                <TableCell style={{ width: 100, background: '', fontWeight: 'bold', }} align="center">m10</TableCell>
                <TableCell style={{ width: 100, background: '', fontWeight: 'bold', }} align="center">m11</TableCell>
                <TableCell style={{ width: 100, background: '', fontWeight: 'bold', }} align="center">m12</TableCell>
                <TableCell style={{ width: 100, background: '', fontWeight: 'bold', }} align="center">m1</TableCell>
                <TableCell style={{ width: 100, background: '', fontWeight: 'bold', }} align="center">m2</TableCell>
                <TableCell style={{ width: 100, background: '', fontWeight: 'bold', }} align="center">m3</TableCell>
                <TableCell style={{ width: 100, background: '', fontWeight: 'bold', }} align="center"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow >
                <TableCell style={{ width: 300, background: '', }}>4歲以上児</TableCell>
                <TableCell style={{ width: 100, background: '', }}>児童数</TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
              </TableRow>



              <TableRow >
                <TableCell style={{ width: 300, background: '', }}>3歲児</TableCell>
                <TableCell style={{ width: 100, background: '', }}>児童数</TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
              </TableRow>



              <TableRow >
                <TableCell style={{ width: 300, background: '', }}>うち満3歳児
                  (認定こども園
                  のみ)0歳児</TableCell>
                <TableCell style={{ width: 100, background: '', }}>児童数</TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
              </TableRow>



              <TableRow >
                <TableCell style={{ width: 300, background: '', }}>1,　2歳児</TableCell>
                <TableCell style={{ width: 100, background: '', }}>児童数</TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
              </TableRow>



              <TableRow >
                <TableCell style={{ width: 300, background: '', }}>0 歲児</TableCell>
                <TableCell style={{ width: 100, background: '', }}>児童数</TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
              </TableRow>
              <TableRow >
                <TableCell style={{ width: 300, background: '', fontWeight: 'bold', }}>合計</TableCell>
                <TableCell style={{ width: 200, background: '', }}></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 100, background: '', }} align="center"><TextField
                  className='w-20'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
              </TableRow>




            </TableBody>
          </Table>
        </TableContainer>
      </Grid >
      {/* End Table */}

      <Grid container className='pt-1' justifyContent="start">
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-start'>
            ※各月の初日人数は各施設の面積基準を下回らないこと
          </Typography>
        </Grid>
      </Grid>

      <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-5 pl-11">
        <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, paddingRight: { xs: 5.5, sm: 4, md: 5.5, lg: 1, } }} >
          前年度実績による見込みによりがたい場合、そ
          の理由(3)の算出結果を使用する場合は入
          力必須:
        </Typography>
      </Grid >
      <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-1 pl-11">
        <Grid item xs={2} sm={1.5} md={1.5} lg={1.5} className="" >
        <TextareaAutosize
            id="content"
            name="content"
            minRows={6}
            maxRows={100}
            className="w-56 sm:w-52 lg:w-96"
            style={{ border: '1px solid gray', borderRadius: '4px' }}
          />
        </Grid>
      </Grid >
        </>
      );
    }
    