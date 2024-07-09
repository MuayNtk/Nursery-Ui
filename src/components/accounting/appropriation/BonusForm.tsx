import {  Grid, InputAdornment, Paper,  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, TextareaAutosize, Typography, } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
export default function BonusForm() {

  return (
    <>
      <Grid container className='h-14 pt-5' justifyContent="center" >
        <Grid item xs={12} sm={12} md={12} lg={12} className='pt-2 ' >
          <Typography
            component="div"
            sx={{ color: 'red', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, fontWeight: 'bold' }}
            className='flex justify-start'>
            個票4
          </Typography>
        </Grid>
      </Grid>


      <Grid container className=' pt-2' justifyContent="center" >
        <Grid item xs={12} sm={12} md={12} lg={12} className='pt-2 ' >
          <Typography
            component="div"
            sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, fontWeight: 'bold' }}
            className='flex justify-start'>
            6チーム保育推進加算
          </Typography>
        </Grid>
      </Grid>

      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 1, md: 1 }} className='pt-5 pl-3' >
        <Grid item xs={3} sm={3} md={2} lg={2} className='pt-5 ' >
          <Typography
            component="div"
            sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 } }}
            className='flex justify-start pt-2'>
            加配保育士数
          </Typography>
        </Grid>
        <Grid item xs={6} sm={4} md={3} lg={3} sx={{ marginLeft: { xs: 1, sm: -1, md: -3, lg: -8 } }}>
          <TextField
            className='w-full'
            id="input"
            type="text"
            size='small'
            label="電話番号"
            sx={{
              backgroundColor: "white",
            }}
            InputProps={{
              endAdornment: <InputAdornment position="end"><SearchIcon /></InputAdornment>,
            }}
          />
        </Grid>
      </Grid>

      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 1, md: 1 }} className='pt-5 pl-3' >
        <Grid item xs={3} sm={3} md={2} lg={2} className='pt-5 ' >
          <Typography
            component="div"
            sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 } }}
            className='flex justify-start pt-2'>
            利用定員数:
          </Typography>
        </Grid>
        <Grid item xs={4} sm={4} md={2} lg={2} sx={{ marginLeft: { xs: 1, sm: -1, md: -3, lg: -8 } }}>
          <TextField
            className='w-full'
            id="input"
            type="text"
            size='small'
            sx={{
              backgroundColor: "white",
            }}
          />
        </Grid>
      </Grid>
      {/* Start Table */}

      <Grid container className='pt-5' justifyContent="center">
        <TableContainer component={Paper} className="" sx={{ width: { xs: 'auto', sm: 'auto', md: 'auto', lg: 10000 } }}>
          <Table sx={{ minWidth: 800 }} aria-label="simple table">
            <TableHead >
              <TableRow>
                <TableCell style={{ width: 10, fontWeight: 'bold', background: '#D3DCF1', }}></TableCell>
                <TableCell style={{ width: 150, fontWeight: 'bold', background: '#D3DCF1', }} align="center"></TableCell>
                <TableCell style={{ width: 100, fontWeight: 'bold', background: '#D3DCF1', }} align="center">必要保育士数 (1)</TableCell>
                <TableCell style={{ width: 100, fontWeight: 'bold', background: '#D3DCF1', }} align="center">実際の配置人数 (2)</TableCell>
                <TableCell style={{ width: 100, fontWeight: 'bold', background: '#D3DCF1', }} align="center">差引 (1-2)</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              <TableRow >
                <TableCell style={{ width: 20, }}>1</TableCell>
                <TableCell style={{ width: 20, }} align="left">保育士数※2</TableCell>
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
            </TableBody>
          </Table>
        </TableContainer>
      </Grid >
      {/* End Table */}

      <Grid container className='pt-8' justifyContent="start" sx={{}}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className=' text-justify'>
            ※　利用定員が121人以上の場合のみ、加配保育士数を2名まで配置可能となります。
          </Typography>
        </Grid>
      </Grid>

      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 1, md: 1 }} className='pt-5 ' >
        <Grid item xs={3} sm={3} md={2} lg={2} className='pt-5 ' >
          <Typography
            component="div"
            sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 } }}
            className='flex justify-start pt-2'>
            利用定員数:
          </Typography>
        </Grid>
        <Grid item xs={4} sm={4} md={2} lg={2} sx={{ marginLeft: { xs: 1, sm: -1, md: -3, lg: -12 } }}>
          <TextField
            className='w-full'
            label=""
            id="input"
            type="text"
            size='small'
            sx={{
              backgroundColor: "white",
            }}
            InputProps={{
              endAdornment: <InputAdornment position="end">年</InputAdornment>,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={8}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className=' text-justify pt-2 pl-5'>
            ※　利用定員が121人以上の場合のみ、加配保育士数を2名まで配置可能となります。
          </Typography>
        </Grid>
      </Grid>

      <Grid container className='pt-8' justifyContent="start" sx={{}}>
        <Grid item xs={12} sm={12} md={3} lg={4}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className=' text-justify'>
            チーム保育体制の取組内容:
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} sx={{ marginLeft: { xs: 1, sm: -13, md: 1, lg: -20 } }}>
          <TextareaAutosize
            id="emotional-input"
            name="emotional-input"
            minRows={6}
            maxRows={1000}
            className="lg:w-full  "
            style={{ border: '1px solid gray', borderRadius: '4px', }}
          />
        </Grid>
      </Grid>

      <Grid container className=' pt-2' justifyContent="center" >
        <Grid item xs={12} sm={12} md={12} lg={12} className='pt-2 ' >
          <Typography
            component="div"
            sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, fontWeight: 'bold' }}
            className='flex justify-start'>
            加算見込額
          </Typography>
        </Grid>
      </Grid>

      <Grid container className=' pt-2' justifyContent="start" >
        <Grid item xs={12} sm={12} md={2} lg={2} className='pt-2 ' sx={{ marginLeft: { xs: 1, sm: 1, md: 1, lg: 1 } }}>
          <Typography
            component="div"
            sx={{ color: '#45CBFF', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, fontWeight: 'bold' }}
            className='flex justify-start'>
            月平均利用児童数
          </Typography>
          <TextField
            className='w-32 '
            label=""
            id="input"
            type="text"
            size='small'
            sx={{
              backgroundColor: "white",
              marginLeft: { xs: 1, sm: 1, md: -3, lg: -7 }
            }}
            InputProps={{
              endAdornment: <InputAdornment position="end">年</InputAdornment>,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={2} lg={1} className='pt-9 ' sx={{ marginLeft: { xs: 1, sm: 1, md: 1, lg: -15 } }} >
          <Typography
            component="div"
            sx={{ color: '#black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, fontWeight: 'bold', marginLeft: { xs: 1, sm: 1, md: 1, lg: 12 } }}
            className='flex justify-center'>
            *
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={2} lg={2} className='pt-2 ' sx={{ marginLeft: { xs: 1, sm: 1, md: -8, lg: 4 } }}>
          <Typography
            component="div"
            sx={{ color: '#45CBFF', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, fontWeight: 'bold' }}
            className='flex justify-start'>
            加算单価
          </Typography>
          <TextField
            className='w-32'
            label=""
            id="input"
            type="text"
            size='small'
            sx={{
              backgroundColor: "white",
              marginLeft: { xs: 1, sm: -1, md: -3, lg: -7 }
            }}
            InputProps={{
              endAdornment: <InputAdornment position="end">年</InputAdornment>,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={2} lg={1} className='pt-8 ' sx={{ marginLeft: { xs: 1, sm: 1, md: 1, lg: -15 } }} >
          <Typography
            component="div"
            sx={{ color: '#black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, fontWeight: 'bold', marginLeft: { xs: 1, sm: 1, md: 1, lg: 12 } }}
            className='flex justify-center'>
            +
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={2} lg={2} className='pt-2 ' sx={{ marginLeft: { xs: 1, sm: 1, md: -8, lg: 5 } }}>
          <Typography
            component="div"
            sx={{ color: '#45CBFF', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, fontWeight: 'bold' }}
            className='flex justify-start'>
            処遇改善等加算の%
          </Typography>
          <TextField
            className='w-32'
            label=""
            id="input"
            type="text"
            size='small'
            sx={{
              backgroundColor: "white",
              marginLeft: { xs: 1, sm: -1, md: -3, lg: -7 }
            }}
            InputProps={{
              endAdornment: <InputAdornment position="end">年</InputAdornment>,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={2} lg={1} className='pt-8 ' sx={{ marginLeft: { xs: 1, sm: 1, md: 1, lg: -15 } }} >
          <Typography
            component="div"
            sx={{ color: '#black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, fontWeight: 'bold', marginLeft: { xs: 1, sm: 1, md: 1, lg: 12 } }}
            className='flex justify-center'>
            *
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={2} lg={2} className='pt-2 ' sx={{ marginLeft: { xs: 1, sm: 1, md: 1, lg: 5 } }}>
          <Typography
            component="div"
            sx={{ color: '#45CBFF', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, fontWeight: 'bold' }}
            className='flex justify-start'>
            加算单価
          </Typography>
          <TextField
            className='w-32'
            label=""
            id="input"
            type="text"
            size='small'
            sx={{
              backgroundColor: "white",
              marginLeft: { xs: 1, sm: -1, md: -3, lg: -7 }
            }}
            InputProps={{
              endAdornment: <InputAdornment position="end">年</InputAdornment>,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={2} lg={1} className='pt-8 ' sx={{ marginLeft: { xs: 1, sm: 1, md: 1, lg: -15 } }} >
          <Typography
            component="div"
            sx={{ color: '#black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, fontWeight: 'bold', marginLeft: { xs: 1, sm: 1, md: 1, lg: 12 } }}
            className='flex justify-center'>
            *
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={2} lg={2} className='pt-2 ' sx={{ marginLeft: { xs: 1, sm: 1, md: -8, lg: 5 } }}>
          <Typography
            component="div"
            sx={{ color: '#45CBFF', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, fontWeight: 'bold' }}
            className='flex justify-start'>
            加配人数
          </Typography>
          <TextField
            className='w-32'
            label=""
            id="input"
            type="text"
            size='small'
            sx={{
              backgroundColor: "white",
              marginLeft: { xs: 1, sm: -1, md: -3, lg: -7 }
            }}
            InputProps={{
              endAdornment: <InputAdornment position="end">年</InputAdornment>,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={2} lg={1} className='pt-8 ' sx={{ marginLeft: { xs: 1, sm: 1, md: 1, lg: -15 } }} >
          <Typography
            component="div"
            sx={{ color: '#black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, fontWeight: 'bold', marginLeft: { xs: 1, sm: 1, md: 1, lg: 12 } }}
            className='flex justify-center'>
            *
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={2} lg={2} className='pt-2 ' sx={{ marginLeft: { xs: 1, sm: 1, md: -8, lg: 1 } }}>
          <Typography
            component="div"
            sx={{ color: '#45CBFF', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, fontWeight: 'bold' }}
            className='flex justify-start'>
            月数
          </Typography>
          <TextField
            className='w-32'
            label=""
            id="input"
            type="text"
            size='small'
            sx={{
              backgroundColor: "white",
              marginLeft: { xs: 1, sm: -1, md: -3, lg: -7 }
            }}
            InputProps={{
              endAdornment: <InputAdornment position="end">年</InputAdornment>,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={2} lg={2} className='pt-8 ' sx={{ marginLeft: { xs: 1, sm: 1, md: 1, lg: -10 } }} >
          <Typography
            component="div"
            sx={{ color: '#black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, fontWeight: 'bold', marginLeft: { xs: 1, sm: 1, md: 1, lg: -5 } }}
            className='flex justify-center'>
            =　円
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={12} md={2} lg={8}>
        <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className=' text-justify pt-5 pl-5'>
          ※　加質見込額の使途　※　両方選択可
        </Typography>
      </Grid>

      <Grid container className='pt-8' justifyContent="start" sx={{}}>
        <Grid item xs={12} sm={12} md={3} lg={4}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className=' text-justify'>
          (具体的な使途内容)
          </Typography>
        </Grid>
      </Grid>

      <Grid container className='pt-3' justifyContent="start" sx={{}}>
        <Grid item xs={12} sm={12} md={6} lg={6} sx={{ marginLeft: { xs: 1, sm: 1, md: 1, lg: 1 } }}>
          <TextareaAutosize
            id="emotional-input"
            name="emotional-input"
            minRows={6}
            maxRows={1000}
            className="lg:w-full  "
            style={{ border: '1px solid gray', borderRadius: '4px', }}
          />
        </Grid>
      </Grid>
      <Grid container className='pt-1' justifyContent="start" sx={{}}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className=' text-justify'>
            ※1　「保育士数」欄の「必要保育士数の」は、3歳児配置改善加算の適用がある場合には、3歳児の配置を20:1から15:1に置き換えて算定すること。
          </Typography>
        </Grid>
      </Grid>
      <Grid container className='pt-1' justifyContent="start" sx={{}}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className=' text-justify'>
            ※2　「保育士数」欄について、短時間勤務保育士を充てる場合には常勤換算数を用いること。
          </Typography>
        </Grid>
      </Grid>





    </>
  );
}
