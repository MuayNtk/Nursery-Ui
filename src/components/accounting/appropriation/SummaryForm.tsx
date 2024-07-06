import { Button, Card, Grid, InputAdornment, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography, } from '@mui/material'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import ErrorIcon from '@mui/icons-material/Error';
export default function SummaryForm() {

  return (
    <>
      <Grid container className='h-14 pt-3' justifyContent="end" >
        <Grid item xs={6} sm={6} md={6} lg={3} className='pt-2 ' >
          <TextField
            className='w-full '
            id="-input"
            label="園番号"
            type="text"
            size='small'
            sx={{
              backgroundColor: "white",
              fontSize: { xs: 11, sm: 11, md: 11, lg: 16, },
              marginLeft: { xs: -2, sm: -1, md: -3, lg: -4, }
            }}
          />
        </Grid>
      </Grid>

      <Grid container className='h-14 pt-5' justifyContent="center" >
        <Grid item xs={12} sm={12} md={12} lg={12} className='pt-2 ' >
          <Typography
            component="div"
            sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, fontWeight: 'bold' }}
            className='flex justify-center'>
            総括表  令和５年度　施設型給付費等にかかる加算（調整）適用申請書 【保育所】
          </Typography>
        </Grid>
      </Grid>

      <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 0 }} className='pt-3 pl-3 flex justify-end' >
        <Typography component='div' fontWeight={300} className=" pt-9">
          火付:
        </Typography>
        <Grid item xs={9} sm={5.8} md={4} lg={2.7} sx={{ marginLeft: { xs: -4, sm: -3, md: 0, lg: -1 } }} className='scale-75' >
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker']}>
              <DatePicker label="Select date" sx={{ backgroundColor: "white" }} />
            </DemoContainer>
          </LocalizationProvider>
        </Grid>
      </Grid>


      <Grid container className='h-14 pt-1 pl-4' justifyContent="center" >
        <Grid item xs={6} sm={6} md={6} lg={3} className='pt-2 ' >
          <TextField
            className='w-full '
            id="-input"
            label="園番号市町村名"
            type="text"
            size='small'
            sx={{
              backgroundColor: "white",
              fontSize: { xs: 11, sm: 11, md: 11, lg: 16, },
              marginLeft: { xs: -2, sm: -1, md: -3, lg: -4, }
            }}
          />
        </Grid>
      </Grid>

      <Grid container className='h-14 pt-1 pl-4' justifyContent="center" >
        <Grid item xs={6} sm={6} md={6} lg={3} className='pt-2 ' >
          <TextField
            className='w-full '
            id="-input"
            label="施設所在地"
            type="text"
            size='small'
            sx={{
              backgroundColor: "white",
              fontSize: { xs: 11, sm: 11, md: 11, lg: 16, },
              marginLeft: { xs: -2, sm: -1, md: -3, lg: -4, }
            }}
          />
        </Grid>
      </Grid>

      <Grid container className='h-14 pt-1 pl-4' justifyContent="center" >
        <Grid item xs={6} sm={6} md={6} lg={3} className='pt-2 ' >
          <TextField
            className='w-full '
            id="-input"
            label="施設,事業所名"
            type="text"
            size='small'
            sx={{
              backgroundColor: "white",
              fontSize: { xs: 11, sm: 11, md: 11, lg: 16, },
              marginLeft: { xs: -2, sm: -1, md: -3, lg: -4, }
            }}
          />
        </Grid>
      </Grid>

      <Grid container className='h-14 pt-1 pl-4' justifyContent="center" >
        <Grid item xs={6} sm={6} md={6} lg={3} className='pt-2 ' >
          <TextField
            className='w-full '
            id="-input"
            label="法人名·代表者職名"
            type="text"
            size='small'
            sx={{
              backgroundColor: "white",
              fontSize: { xs: 11, sm: 11, md: 11, lg: 16, },
              marginLeft: { xs: -2, sm: -1, md: -3, lg: -4, }
            }}
          />
        </Grid>
      </Grid>

      <Grid container className='h-14 pt-1 pl-4' justifyContent="center" >
        <Grid item xs={6} sm={6} md={6} lg={3} className='pt-2 ' >
          <TextField
            className='w-full '
            id="-input"
            label="担当者職名"
            type="text"
            size='small'
            sx={{
              backgroundColor: "white",
              fontSize: { xs: 11, sm: 11, md: 11, lg: 16, },
              marginLeft: { xs: -2, sm: -1, md: -3, lg: -4, }
            }}
          />
        </Grid>
      </Grid>

      <Grid container className='h-14 pt-1 pl-4' justifyContent="center" >
        <Grid item xs={6} sm={6} md={6} lg={3} className='pt-2 ' >
          <TextField
            className='w-full '
            id="-input"
            label="電話番号"
            type="text"
            size='small'
            sx={{
              backgroundColor: "white",
              fontSize: { xs: 11, sm: 11, md: 11, lg: 16, },
              marginLeft: { xs: -2, sm: -1, md: -3, lg: -4, }
            }}
          />
        </Grid>
      </Grid>

      <Grid container className='h-14 pt-6' justifyContent="center" >
        <Grid item xs={12} sm={12} md={12} lg={12} className='pt-2 ' >
          <Typography
            component="div"
            sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, fontWeight: 'bold' }}
            className='flex justify-center'>
            標記の件につきまして,下記のとおり申請します。
          </Typography>
        </Grid>
      </Grid>

      <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 0 }} className='pt-3 pl-3 flex justify-start' >
        <Typography
          component="div"
          sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 } }}
          className='flex justify-start pt-10'>
          火付:
        </Typography>

        <Grid item xs={9} sm={5.8} md={4} lg={2.7} sx={{ marginLeft: { xs: -5, sm: -0.5, md: 0, lg: -1 } }} className='scale-75' >
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker']}>
              <DatePicker label="Select date" sx={{ backgroundColor: "white" }} />
            </DemoContainer>
          </LocalizationProvider>
        </Grid>
      </Grid>

      {/* Start Grid Save Button */}
      <Grid container className='pt-1 ' justifyContent="start">
        <Grid item xs={12} sm={12} md={4} lg={3} className=' '>
          <Button variant="contained" href="" size='small' sx={{ backgroundColor: "blue", marginLeft: { xs: -15, sm: -19, md: 9, lg: 3, } }}>
            <Typography style={{ color: 'white' }} className=''>
              Download Data
            </Typography>
          </Button>
        </Grid>
      </Grid>
      {/* End Grid Save Button */}

      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 1, md: 1 }} className='pt-5 pl-3' >
        <Grid item xs={2} sm={2} md={2} lg={2} className='pt-5 ' >
          <Typography
            component="div"
            sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 } }}
            className='flex justify-start pt-2'>
            利用定員:
          </Typography>
        </Grid>
        <Grid item xs={6} sm={4} md={3} lg={2} sx={{ marginLeft: { xs: 1, sm: -1, md: -6, lg: -12 } }}>
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
              endAdornment: <InputAdornment position="end">年度</InputAdornment>,
            }}
          />
        </Grid>
        <Grid item xs={6} sm={4} md={3} lg={2} sx={{ marginLeft: { xs: 8, sm: 1, md: 1, lg: 1 } }}>
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
              endAdornment: <InputAdornment position="end">年度</InputAdornment>,
            }}
          />
        </Grid>
        <Grid item xs={6} sm={4} md={3} lg={2} sx={{ marginLeft: { xs: 8, sm: 8, md: 1, lg: 1 } }}>
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
              endAdornment: <InputAdornment position="end">年度</InputAdornment>,
            }}
          />
        </Grid>
      </Grid>
      {/* Start Card */}
      <Grid container rowSpacing={2} className='pt-10 justify-end ' >
        <Card sx={{ bgcolor: "#B7EBFF", width: 300, height: 40 }}>
          <Typography component='div' className="pt-2">
            <ErrorIcon className='mr-5 text-sky-700' /> 年度途中で変更がある場合のみ
          </Typography>
        </Card>
      </Grid>
      {/* End Card */}

      {/* Start Table */}

      <Grid container className='pt-2' justifyContent="center">
        <TableContainer component={Paper} className="" sx={{ width: { xs: 'auto', sm: 'auto', md: 'auto', lg: 10000 } }}>
          <Table sx={{ minWidth: 800 }} aria-label="simple table">
            <TableHead >
              <TableRow>
                <TableCell style={{ width: 10, fontWeight: 'bold', background: '#D3DCF1', }}></TableCell>
                <TableCell style={{ width: 150, fontWeight: 'bold', background: '#D3DCF1', }} align="center">加算(調整)項目</TableCell>
                <TableCell style={{ width: 100, fontWeight: 'bold', background: '#D3DCF1', }} align="center">申請の有無</TableCell>
                <TableCell style={{ width: 100, fontWeight: 'bold', background: '#D3DCF1', }} align="center">適用年月(3月加算は適用年度)</TableCell>
                <TableCell style={{ width: 100, fontWeight: 'bold', background: '#D3DCF1', }} align="center">添付書類(※は、下記【注意事項】參照)</TableCell>
                <TableCell style={{ width: 20, fontWeight: 'bold', background: '#D3DCF1', }} align="center">変更後</TableCell>
                <TableCell style={{ width: 20, fontWeight: 'bold', background: '#D3DCF1', }} align="center">変更年月</TableCell>
                <TableCell style={{ width: 100, fontWeight: 'bold', background: '#D3DCF1', }} align="center">変更理由</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              <TableRow >
                <TableCell style={{ width: 20, }}>1</TableCell>
                <TableCell style={{ width: 20, }} align="left">3歲児配置改善加算</TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"><TextField
                  className='w-full  '
                  id="-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                    fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }
                  }}
                /></TableCell>
              </TableRow>

              <TableRow >
                <TableCell style={{ width: 20, }}>2</TableCell>
                <TableCell style={{ width: 20, }} align="left">休日保育加算</TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"><TextField
                  className='w-full  '
                  id="-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                    fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }
                  }}
                /></TableCell>
              </TableRow>

              <TableRow >
                <TableCell style={{ width: 20, }}>3</TableCell>
                <TableCell style={{ width: 20, }} align="left">夜間保育加算</TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"><TextField
                  className='w-full  '
                  id="-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                    fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }
                  }}
                /></TableCell>
              </TableRow>

              <TableRow >
                <TableCell style={{ width: 20, }}>4</TableCell>
                <TableCell style={{ width: 20, }} align="left">減価償却費加算</TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"><TextField
                  className='w-full  '
                  id="-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                    fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }
                  }}
                /></TableCell>
              </TableRow>

              <TableRow >
                <TableCell style={{ width: 20, }}>5</TableCell>
                <TableCell style={{ width: 20, }} align="left">賃借料加算</TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"><TextField
                  className='w-full  '
                  id="-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                    fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }
                  }}
                /></TableCell>
              </TableRow>

              <TableRow >
                <TableCell style={{ width: 20, }}>6</TableCell>
                <TableCell style={{ width: 20, }} align="left">チーム保育推進加算</TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"><TextField
                  className='w-full  '
                  id="-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                    fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }
                  }}
                /></TableCell>
              </TableRow>

              <TableRow >
                <TableCell style={{ width: 20, }}>7</TableCell>
                <TableCell style={{ width: 20, }} align="left">副食費徵収免除加算</TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"><TextField
                  className='w-full  '
                  id="-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                    fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }
                  }}
                /></TableCell>
              </TableRow>

              <TableRow >
                <TableCell style={{ width: 20, }}>8</TableCell>
                <TableCell style={{ width: 20, }} align="left">分園有の場合</TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"><TextField
                  className='w-full  '
                  id="-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                    fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }
                  }}
                /></TableCell>
              </TableRow>

              <TableRow >
                <TableCell style={{ width: 20, }}>9</TableCell>
                <TableCell style={{ width: 20, }} align="left">施設長を配置していない場合</TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"><TextField
                  className='w-full  '
                  id="-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                    fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }
                  }}
                /></TableCell>
              </TableRow>

              <TableRow >
                <TableCell style={{ width: 20, }}>10</TableCell>
                <TableCell style={{ width: 20, }} align="left">土曜日に閉所する場合</TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"><TextField
                  className='w-full  '
                  id="-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                    fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }
                  }}
                /></TableCell>
              </TableRow>

              <TableRow >
                <TableCell style={{ width: 20, }}>11</TableCell>
                <TableCell style={{ width: 20, }} align="left">主任保育士専任加算</TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"><TextField
                  className='w-full  '
                  id="-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                    fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }
                  }}
                /></TableCell>
              </TableRow>

              <TableRow >
                <TableCell style={{ width: 20, }}>12</TableCell>
                <TableCell style={{ width: 20, }} align="left">療育支援加算</TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"><TextField
                  className='w-full  '
                  id="-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                    fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }
                  }}
                /></TableCell>
              </TableRow>

              <TableRow >
                <TableCell style={{ width: 20, }}>13</TableCell>
                <TableCell style={{ width: 20, }} align="left">事務職員雇上費加算</TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"><TextField
                  className='w-full  '
                  id="-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                    fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }
                  }}
                /></TableCell>
              </TableRow>

              <TableRow >
                <TableCell style={{ width: 20, }}>14</TableCell>
                <TableCell style={{ width: 20, }} align="left">栄養管理加算</TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"><TextField
                  className='w-full  '
                  id="-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                    fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }
                  }}
                /></TableCell>
              </TableRow>

              <TableRow >
                <TableCell style={{ width: 20, }}>15</TableCell>
                <TableCell style={{ width: 20, }} align="left">高齡者等活躍促進加算(3月加算)</TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"><TextField
                  className='w-full  '
                  id="-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                    fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }
                  }}
                /></TableCell>
              </TableRow>

              <TableRow >
                <TableCell style={{ width: 20, }}>16</TableCell>
                <TableCell style={{ width: 20, }} align="left">施設機能強化推進費加算(3月加算)</TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"><TextField
                  className='w-full  '
                  id="-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                    fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }
                  }}
                /></TableCell>
              </TableRow>

              <TableRow >
                <TableCell style={{ width: 20, }}>17</TableCell>
                <TableCell style={{ width: 20, }} align="left">第三者評価受審加算(3月加算)</TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"><TextField
                  className='w-full  '
                  id="-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                    fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }
                  }}
                /></TableCell>
              </TableRow>

              <TableRow >
                <TableCell style={{ width: 20, }}>18</TableCell>
                <TableCell style={{ width: 20, }} align="left">冷暖房費加算</TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"><TextField
                  className='w-full  '
                  id="-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                    fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }
                  }}
                /></TableCell>
              </TableRow>

              <TableRow >
                <TableCell style={{ width: 20, }}>19</TableCell>
                <TableCell style={{ width: 20, }} align="left">小学校接続加算(3月加算)</TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"><TextField
                  className='w-full  '
                  id="-input"
                  label=""
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

      <Grid container className='h-14 pt-6' justifyContent="start" >
        <Grid item xs={12} sm={12} md={12} lg={12} className='pt-2 ' >
          <Typography
            component="div"
            sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, fontWeight: 'bold' }}
            className='flex justify-start'>
            【記入方法及び注意事項】
          </Typography>
        </Grid>
      </Grid>

      {/* Start Text Center Content Grid */}
      <Grid container className='pt-5' justifyContent="start" sx={{ pl: { xs: 3, sm: 5, md: 10, lg: 10 }, pr: { xs: 3, sm: 5, md: 10, lg: 15 }, }}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-justify'>
            1 申請する加算(調整)項目の「申請の有無」欄をプルダウンで選択してください。
          </Typography>
        </Grid>
      </Grid>
      {/* End Text Center Content Grid */}
      {/* Start Text Center Content Grid */}
      <Grid container className='pt-1' justifyContent="start" sx={{ pl: { xs: 3, sm: 5, md: 10, lg: 10 }, pr: { xs: 3, sm: 5, md: 10, lg: 15 }, }}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-justify'>
          2 申請する加算(調整)項目の「適用年月」欄に適用を開始する年月をプルダウンで選択してください。
          </Typography>
        </Grid>
      </Grid>
      {/* End Text Center Content Grid */}
      {/* Start Text Center Content Grid */}
      <Grid container className='pt-1' justifyContent="start" sx={{ pl: { xs: 3, sm: 5, md: 10, lg: 10 }, pr: { xs: 3, sm: 5, md: 10, lg: 15 }, }}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-justify'>
          3 申請書提出時に、添付書類に不足がないことを確認し、「添付書類」欄の』にくを記入してください。
          </Typography>
        </Grid>
      </Grid>
      {/* End Text Center Content Grid */}
      {/* Start Text Center Content Grid */}
      <Grid container className='pt-1' justifyContent="start" sx={{ pl: { xs: 3, sm: 5, md: 10, lg: 10 }, pr: { xs: 3, sm: 5, md: 10, lg: 15 }, }}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-justify'>
          4 添付書類の「職員名簿」及び「資格証の写し」は、指導監査課へ既に提出されたものを確認するのでもれや変 更等がなけ れば提出不要です。
          </Typography>
        </Grid>
      </Grid>
      {/* End Text Center Content Grid */}
      {/* Start Text Center Content Grid */}
      <Grid container className='pt-1' justifyContent="start" sx={{ pl: { xs: 3, sm: 5, md: 10, lg: 10 }, pr: { xs: 3, sm: 5, md: 10, lg: 15 }, }}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-justify'>
          5「減価償却費加算」及び「賃借料加算」の契約書の写しは、前年度からの継続申請(変更なし)の場合は、提
          出不要です。
          </Typography>
        </Grid>
      </Grid>
      {/* End Text Center Content Grid */}
      {/* Start Text Center Content Grid */}
      <Grid container className='pt-1' justifyContent="start" sx={{ pl: { xs: 3, sm: 5, md: 10, lg: 10 }, pr: { xs: 3, sm: 5, md: 10, lg: 15 }, }}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-justify'>
          6 「栄養管理加算」に該当する栄養士が、指導監査課へ提出した職員名簿に記載されている場合は、提出不要で す。
          </Typography>
        </Grid>
      </Grid>
      {/* End Text Center Content Grid */}

      {/* Start Grid Save Button */}
      <Grid container className='pt-16' justifyContent="end">
        <Grid item xs={6} sm={3} md={3} lg={1} className=' '>
          <Button variant="contained" href="" size='small' sx={{ backgroundColor: "blue" }}>
            <Typography style={{ color: 'white' }} className=''>
              Submit
            </Typography>
          </Button>
        </Grid>
        <Grid item xs={6} sm={3} md={3} lg={1} className=' '>
          <Button variant="contained" href="" size='small' sx={{ backgroundColor: "red" }}>
            <Typography style={{ color: 'white' }}>
              Cancel
            </Typography>
          </Button>
        </Grid>
      </Grid>
      {/* End Grid Save Button */}




    </>
  );
}
