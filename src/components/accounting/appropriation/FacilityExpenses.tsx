import { Checkbox, Divider, FormControlLabel, Grid, InputAdornment, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

export default function FacilityExpenses() {

  return (
    <>
      <Grid container className='h-14 pt-5' justifyContent="center" >
        <Grid item xs={12} sm={12} md={12} lg={12} className='pt-2 ' >
          <Typography
            component="div"
            sx={{ color: 'red', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, fontWeight: 'bold' }}
            className='flex justify-start'>
            個票11
          </Typography>
        </Grid>
      </Grid>


      <Grid container className=' pt-2' justifyContent="center" >
        <Grid item xs={12} sm={12} md={12} lg={12} className='pt-2 ' >
          <Typography
            component="div"
            sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, fontWeight: 'bold' }}
            className='flex justify-start'>
            16　施設機能強化推進費加算(3月加算)
          </Typography>
        </Grid>
      </Grid>
      <Grid container className='pt-4 ' justifyContent="start" sx={{ ml: { xs: 1, sm: 4, md: 4, lg: 3 } }}>
        <Grid item xs={12} sm={12} md={12} lg={7.5}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className=' text-justify'>
            【事業実施計画及び支出予定額】(火災・地震等の災害時に備えた防災教育・防災対策に係る事業內容)
          </Typography>
        </Grid>
      </Grid>

      <Grid container className=' pt-5' justifyContent="center" >
        <Grid item xs={12} sm={12} md={12} lg={12} className='pt-2 ' >
          <Typography
            component="div"
            sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, }}
            className='flex justify-start  text-justify' >
            避難訓練や防災教育などの活動、避難具の整備や災害に備えた物品の購入等が対象となります。保育、教育の提供にあたり通常要するも
            のや一般的な物品と区別がつかないもの(拡声器、救急箱等)、本来施設に備えておくべきもの(常設用消火器、AED等)は対象外と
            なります。
          </Typography>
        </Grid>
      </Grid>

      <Grid container className='pt-3' justifyContent="center">
        <TableContainer component={Paper} className="" sx={{ width: { xs: 'auto', sm: 'auto', md: 'auto', lg: 10000 } }}>
          <Table sx={{ minWidth: 1000 }} aria-label="simple table">
            <TableHead >
              <TableRow>
                <TableCell style={{ width: 20, fontWeight: 'bold', background: '#D3DCF1', }}>実施時期</TableCell>
                <TableCell style={{ width: 20, fontWeight: 'bold', background: '#D3DCF1', }} align="center">内容</TableCell>
                <TableCell style={{ width: 20, fontWeight: 'bold', background: '#D3DCF1', }} align="center">総事業費(円)</TableCell>
                <TableCell style={{ width: 20, fontWeight: 'bold', background: '#D3DCF1', }} align="center">科目※1 </TableCell>
                <TableCell style={{ width: 20, fontWeight: 'bold', background: '#D3DCF1', }} align="center">金額(円) </TableCell>
                <TableCell style={{ width: 20, fontWeight: 'bold', background: '#D3DCF1', }} align="center">積算内訳</TableCell>

              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow >
                <TableCell style={{ width: 20, }}></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
              </TableRow>
              <TableRow >
                <TableCell style={{ width: 20, }}></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
              </TableRow>
              <TableRow >
                <TableCell style={{ width: 20, }}></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
              </TableRow>
              <TableRow >
                <TableCell style={{ width: 20, }} align="left">Total</TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="left">NaN</TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="left">NaN</TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
              </TableRow>

            </TableBody>
          </Table>
        </TableContainer>
      </Grid >
      {/* End Table */}

      {/* Start Text Center Content Grid */}
      <Grid container className='pt-3 pl-3' justifyContent="start" >
        <Grid item xs={7} sm={5} md={4} lg={2.5} className="">
          <FormControlLabel control={<Checkbox />} label="1)　延長保育事業" />
        </Grid>
      </Grid>
      {/* End Text Center Content Grid */}

      <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 0 }} className='pt-1 pl-3 flex justify-start' >
        <Grid item xs={9} sm={5.8} md={4} lg={2.7} sx={{ marginLeft: { xs: -4, sm: -3, md: 0, lg: -1 } }} className='scale-75' >
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker']}>
              <DatePicker label="Select date" sx={{ backgroundColor: "white" }} />
            </DemoContainer>
          </LocalizationProvider>
        </Grid>
        <Grid item xs={2} sm={3} md={4} lg={2.7} sx={{ marginLeft: { xs: -4, sm: -5, md: -5, lg: -7 } }} className='scale-75' >
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-5 text-justify'>
            月
          </Typography>
        </Grid>
        <Grid item xs={5} sm={5.8} md={4} lg={2.7} sx={{ marginLeft: { xs: -1, sm: -1, md: -19, lg: -25 } }} className='scale-75' >
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-5 text-justify'>
            初日現在利児童数
          </Typography>
        </Grid>
        <Grid item xs={6} sm={4} md={3} lg={2} sx={{ marginLeft: { xs: -5, sm: -10, md: -11, lg: -15 }, mt: 1 }} className="">
          <TextField
            className='w-full '
            id="input"
            type="text"
            size='small'
            label=""
            sx={{
              backgroundColor: "white",
            }}
            InputProps={{
              endAdornment: <InputAdornment position="end">名</InputAdornment>,
            }}
          />
        </Grid>
      </Grid>
      <Divider className='pt-8'></Divider>

      {/* Start Text Center Content Grid */}
      <Grid container className='pt-3 pl-3' justifyContent="start" >
        <Grid item xs={9} sm={7.5} md={5.3} lg={3.3} className="">
          <FormControlLabel control={<Checkbox />} label="2)　一時預かり事業(一般型)" />
        </Grid>
      </Grid>
      {/* End Text Center Content Grid */}

      <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 0 }} className='pt-1 pl-3 flex justify-start' >
        <Grid item xs={9} sm={5.8} md={4} lg={2.7} sx={{ marginLeft: { xs: -4, sm: -3, md: 0, lg: -1 } }} className='scale-75' >
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker']}>
              <DatePicker label="Select date" sx={{ backgroundColor: "white" }} />
            </DemoContainer>
          </LocalizationProvider>
        </Grid>
        <Grid item xs={2} sm={3} md={4} lg={2.7} sx={{ marginLeft: { xs: -4, sm: -5, md: -5, lg: -7 } }} className='scale-75' >
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-5 text-justify'>
            月
          </Typography>
        </Grid>
        <Grid item xs={5} sm={5.8} md={4} lg={2.7} sx={{ marginLeft: { xs: -1, sm: -1, md: -19, lg: -25 } }} className='scale-75' >
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-5 text-justify'>
            初日現在利児童数
          </Typography>
        </Grid>
        <Grid item xs={6} sm={4} md={3} lg={2} sx={{ marginLeft: { xs: -5, sm: -10, md: -11, lg: -15 }, mt: 1 }} className="">
          <TextField
            className='w-full '
            id="input"
            type="text"
            size='small'
            label=""
            sx={{
              backgroundColor: "white",
            }}
            InputProps={{
              endAdornment: <InputAdornment position="end">名</InputAdornment>,
            }}
          />
        </Grid>
      </Grid>
      <Divider className='pt-8'></Divider>

      {/* Start Text Center Content Grid */}
      <Grid container className='pt-3 pl-3' justifyContent="start" >
        <Grid item xs={12} sm={12} md={12} lg={12} className="text-justify" sx={{ marginLeft: { xs: 0.5, sm: 1, md: 3.5, lg: 4 } }}>
          <FormControlLabel control={<Checkbox />} label="3)　病児保育事業(子ども・子育て支援交付金に係る要件に適合するもの及びこれと同等の要件を満たして自主事業として実施している
もの。)" />
        </Grid>
      </Grid>
      {/* End Text Center Content Grid */}

      <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 0 }} className='pt-1 pl-3 flex justify-start' >
        <Grid item xs={9} sm={5.8} md={4} lg={2.7} sx={{ marginLeft: { xs: -4, sm: -3, md: 0, lg: -1 } }} className='scale-75' >
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker']}>
              <DatePicker label="Select date" sx={{ backgroundColor: "white" }} />
            </DemoContainer>
          </LocalizationProvider>
        </Grid>
        <Grid item xs={2} sm={3} md={4} lg={2.7} sx={{ marginLeft: { xs: -4, sm: -5, md: -5, lg: -7 } }} className='scale-75' >
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-5 text-justify'>
            月
          </Typography>
        </Grid>
        <Grid item xs={5} sm={5.8} md={4} lg={2.7} sx={{ marginLeft: { xs: -1, sm: -1, md: -19, lg: -25 } }} className='scale-75' >
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-5 text-justify'>
            初日現在利児童数
          </Typography>
        </Grid>
        <Grid item xs={6} sm={4} md={3} lg={2} sx={{ marginLeft: { xs: -5, sm: -10, md: -11, lg: -15 }, mt: 1 }} className="">
          <TextField
            className='w-full '
            id="input"
            type="text"
            size='small'
            label=""
            sx={{
              backgroundColor: "white",
            }}
            InputProps={{
              endAdornment: <InputAdornment position="end">名</InputAdornment>,
            }}
          />
        </Grid>
      </Grid>
      <Divider className='pt-8'></Divider>

      {/* Start Text Center Content Grid */}
      <Grid container className='pt-3 pl-3' justifyContent="start" >
        <Grid item xs={12} sm={12} md={12} lg={12} className="text-justify" sx={{ marginLeft: { xs: 0.5, sm: 1, md: 3.5, lg: 4 } }}>
          <FormControlLabel control={<Checkbox />} label="4)　乳児が3人以上利用している施設(4月から11月までの各月初日を平均して乳児が3人以上利用していること。)"  />
        </Grid>
      </Grid>
      {/* End Text Center Content Grid */}

      <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 0 }} className='pt-1 pl-3 flex justify-start' >
        <Grid item xs={9} sm={5.8} md={4} lg={2.7} sx={{ marginLeft: { xs: -4, sm: -3, md: 0, lg: -1 } }} className='scale-75' >
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker']}>
              <DatePicker label="Select date" sx={{ backgroundColor: "white" }} />
            </DemoContainer>
          </LocalizationProvider>
        </Grid>
        <Grid item xs={2} sm={3} md={4} lg={2.7} sx={{ marginLeft: { xs: -4, sm: -5, md: -5, lg: -7 } }} className='scale-75' >
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-5 text-justify'>
            月
          </Typography>
        </Grid>
        <Grid item xs={5} sm={5.8} md={4} lg={2.7} sx={{ marginLeft: { xs: -1, sm: -1, md: -19, lg: -25 } }} className='scale-75' >
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-5 text-justify'>
            初日現在利児童数
          </Typography>
        </Grid>
        <Grid item xs={6} sm={4} md={3} lg={2} sx={{ marginLeft: { xs: -5, sm: -10, md: -11, lg: -15 }, mt: 1 }} className="">
          <TextField
            className='w-full '
            id="input"
            type="text"
            size='small'
            label=""
            sx={{
              backgroundColor: "white",
            }}
            InputProps={{
              endAdornment: <InputAdornment position="end">名</InputAdornment>,
            }}
          />
        </Grid>
      </Grid>
      <Divider className='pt-8'></Divider>

      {/* Start Text Center Content Grid */}
      <Grid container className='pt-3 pl-3' justifyContent="start" >
        <Grid item xs={12} sm={12} md={12} lg={12} className="text-justify" sx={{ marginLeft: { xs: 0.5, sm: 1, md: 3.5, lg: 4 } }}>
          <FormControlLabel control={<Checkbox />} label="5)　障がい児(軽度障がい児を含む。)※が1人以上利用している施設(4月から11月までの間に1人以上の障がい児の利用があるこ
と。)"  />
        </Grid>
      </Grid>
      {/* End Text Center Content Grid */}

      <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 0 }} className='pt-1 pl-3 flex justify-start' >
        <Grid item xs={9} sm={5.8} md={4} lg={2.7} sx={{ marginLeft: { xs: -4, sm: -3, md: 0, lg: -1 } }} className='scale-75' >
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker']}>
              <DatePicker label="Select date" sx={{ backgroundColor: "white" }} />
            </DemoContainer>
          </LocalizationProvider>
        </Grid>
        <Grid item xs={2} sm={3} md={4} lg={2.7} sx={{ marginLeft: { xs: -4, sm: -5, md: -5, lg: -7 } }} className='scale-75' >
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-5 text-justify'>
            月
          </Typography>
        </Grid>
        <Grid item xs={5} sm={5.8} md={4} lg={2.7} sx={{ marginLeft: { xs: -1, sm: -1, md: -19, lg: -25 } }} className='scale-75' >
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-5 text-justify'>
            初日現在利児童数
          </Typography>
        </Grid>
        <Grid item xs={6} sm={4} md={3} lg={2} sx={{ marginLeft: { xs: -5, sm: -10, md: -11, lg: -15 }, mt: 1 }} className="">
          <TextField
            className='w-full '
            id="input"
            type="text"
            size='small'
            label=""
            sx={{
              backgroundColor: "white",
            }}
            InputProps={{
              endAdornment: <InputAdornment position="end">名</InputAdornment>,
            }}
          />
        </Grid>
      </Grid>
      <Divider className='pt-8 '></Divider>
      <Grid container className='pt-3 pl-4' justifyContent="start">
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-justify'>
          ※1　支出予定(済)額の科目欄には、記載の科目以外に該当するものがあれば、適宜記入してください。
          </Typography>
        </Grid>
      </Grid>
      <Grid container className='pt-3 pl-4' justifyContent="start">
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-justify'>
          ※2　さぽ〜と保育(福岡市特別支援保育事業)に係る支援区分1〜支援区分4の決定を受けた児童を指します。
          </Typography>
        </Grid>
      </Grid>





    </>
  );
}
