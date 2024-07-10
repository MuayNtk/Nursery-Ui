import { Button, Checkbox, Divider, FormControl, FormControlLabel, Grid, InputAdornment, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextareaAutosize, TextField, Typography } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

export default function ElderlyBenefits() {

  return (
    <>
      <Grid container className='h-14 pt-5' justifyContent="center" >
        <Grid item xs={12} sm={12} md={12} lg={12} className='pt-2 ' >
          <Typography
            component="div"
            sx={{ color: 'red', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, fontWeight: 'bold' }}
            className='flex justify-start'>
            個票10
          </Typography>
        </Grid>
      </Grid>


      <Grid container className=' pt-2' justifyContent="center" >
        <Grid item xs={12} sm={12} md={12} lg={12} className='pt-2 ' >
          <Typography
            component="div"
            sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, fontWeight: 'bold' }}
            className='flex justify-start'>
            15　高齢者等活躍促進加算(3月加算)
          </Typography>
        </Grid>
      </Grid>
      <Grid container className='pt-5 ' justifyContent="start" sx={{ ml: { xs: 1, sm: 4, md: 4, lg: 3 } }}>
        <Grid item xs={12} sm={12} md={12} lg={8}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className=' text-justify'>
            事業の実施状況
          </Typography>
        </Grid>
      </Grid>

      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 1, md: 1 }} className='pt-5 pl-3' >
        <Grid item xs={12} sm={12} md={12} lg={12} className='pt-5 ' >
          <Typography
            component="div"
            sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 } }}
            className='flex justify-start pt-2'>
            施設長要件該当する ✔ に印をすること
          </Typography>
        </Grid>
      </Grid>
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 1, md: 1 }} className='pl-3' >
        <Grid item xs={12} sm={12} md={12} lg={12} className='pt-5 ' >
          <Typography
            component="div"
            sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 } }}
            className='flex justify-start pt-2'>
            ※　いずれかの事壁を実施すること
          </Typography>
        </Grid>
      </Grid>
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 1, md: 1 }} className='pl-3' >
        <Grid item xs={12} sm={12} md={12} lg={12} className='pt-5 ' >
          <Typography
            component="div"
            sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 } }}
            className='flex justify-start pt-2'>
            ※　選択した事業に該当する児童数を記入すること
          </Typography>
        </Grid>
      </Grid>
      {/* Start Text Center Content Grid */}
      <Grid container className='pt-3 pl-3' justifyContent="start" >
        <Grid item xs={7} sm={5} md={4} lg={2.5} className="">
          <FormControlLabel control={<Checkbox />} label="1　延長保育事業" />
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
          <FormControlLabel control={<Checkbox />} label="2　一時預かり事業(一般型)" />
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
          <FormControlLabel control={<Checkbox />} label="3　病児保育事業(子ども・子育て支援交付金に係る要件に適合するもの及びこれと同等の要件を満たして自主事業として実施している
もの。)"  />
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
          <FormControlLabel control={<Checkbox />} label="4　)乳児が3人以上利用している施設(4月から11月までの各月初日を平均して乳児が3人以上利用していること。)" />
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
          <FormControlLabel control={<Checkbox />} label="5　障がい児(軽度障がい児を含む。)※が1人以上利用している施設(4月から11月までの間に1人以上の障がい児の利用があるこ
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
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 1, md: 1 }} className='pl-3 pt-3' >
        <Grid item xs={12} sm={12} md={12} lg={12} className='pt-5 ' >
          <Typography
            component="div"
            sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 } }}
            className='flex justify-start pt-2 text-justify'>
            加算対象職員が、補助金・助成金(「保育体制強化事業補助金(保育支援員の補助金)」「定就職困難者雇用
            開発助成金」など)の交付対象となっているか。
          </Typography>
        </Grid>
      </Grid>
      {/* Start Text Center Content Grid */}
      <Grid container className='pt-3 pl-3' justifyContent="start" >
        <Grid item xs={12} sm={10} md={4} lg={4} className="">
          <FormControlLabel control={<Checkbox />} label="1)　交付対象となっている(予定含む。)" />
          <Typography
            component="div"
            sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 } }}
            className='flex justify-start pl-14'>
            ➡︎　加算対象となりません。
          </Typography>
        </Grid>
      </Grid>
      {/* End Text Center Content Grid */}
      <Divider className='pt-8'></Divider>
      {/* Start Text Center Content Grid */}
      <Grid container className='pt-3 pl-3' justifyContent="start" >
        <Grid item xs={10.3} sm={8.5} md={4} lg={3.5} className="">
          <FormControlLabel control={<Checkbox />} label="2)　交付対象でない(予定含む。)" />
          <Typography
            component="div"
            sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 } }}
            className='flex justify-start pl-14'>
            ➡︎　加算対象となりません。
          </Typography>
        </Grid>
      </Grid>
      {/* End Text Center Content Grid */}
      <Divider className='pt-8'></Divider>
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 1, md: 1 }} className='pl-3 pt-3' >
        <Grid item xs={12} sm={12} md={12} lg={12} className='pt-5 ' >
          <Typography
            component="div"
            sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 } }}
            className='flex justify-start pt-2 text-justify'>
            ※　さば〜と保育(福岡市特別支援保育事業)に係る支援区分1~支援区分4の決定を受けた児童を指します。
          </Typography>
        </Grid>
      </Grid>
      <Grid container className='pt-5 ' justifyContent="start" sx={{ ml: { xs: 1, sm: 4, md: 4, lg: 3 } }}>
        <Grid item xs={12} sm={12} md={12} lg={8}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px', fontWeight: 'bold' } }} className=' text-justify'>
            【高齡者等活躍促進加算職員】
          </Typography>
        </Grid>
      </Grid>
      <Grid container className='pt-3' justifyContent="center">
        <TableContainer component={Paper} className="" sx={{ width: { xs: 'auto', sm: 'auto', md: 'auto', lg: 10000 } }}>
          <Table sx={{ minWidth: 1000 }} aria-label="simple table">
            <TableHead >
              <TableRow>
                <TableCell style={{ width: 20, fontWeight: 'bold', background: '#D3DCF1', }}>氏名</TableCell>
                <TableCell style={{ width: 20, fontWeight: 'bold', background: '#D3DCF1', }} align="center">年齡</TableCell>
                <TableCell style={{ width: 20, fontWeight: 'bold', background: '#D3DCF1', }} align="center">雇用契約期間</TableCell>
                <TableCell style={{ width: 20, fontWeight: 'bold', background: '#D3DCF1', }} align="center">年間雇用時間(予定)数*1</TableCell>
                <TableCell style={{ width: 20, fontWeight: 'bold', background: '#D3DCF1', }} align="center">事業内容</TableCell>
                <TableCell style={{ width: 20, fontWeight: 'bold', background: '#D3DCF1', }} align="center">区分2</TableCell>

              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow >
                <TableCell style={{ width: 20, }}> <TextField
                  className='w-full'
                  id="input"
                  type="text"
                  size='small'
                  label=""
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 20, }} align="center"> <TextField
                  className='w-full'
                  id="input"
                  type="text"
                  size='small'
                  label=""
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 20, }} align="center">
                  <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 1, md: 1 }} className='' >
                    <Grid item xs={4} sm={4} md={5} lg={5} className='pt-5 ' >
                      <TextField
                        className='w-full'
                        id="input"
                        type="text"
                        size='small'
                        label=""
                        sx={{
                          backgroundColor: "white",
                        }}
                      />
                    </Grid>
                    <Grid item xs={2} sm={2} md={2} lg={2} className='' >
                      <Typography
                        component="div"
                        sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 } }}
                        className='flex justify-center pt-2'>
                        ~
                      </Typography>
                    </Grid>
                    <Grid item xs={4} sm={4} md={5} lg={5} className='' >
                      <TextField
                        className='w-full'
                        id="input"
                        type="text"
                        size='small'
                        label=""
                        sx={{
                          backgroundColor: "white",
                        }}
                      />
                    </Grid>
                  </Grid>
                </TableCell>
                <TableCell style={{ width: 20, }} align="center"> <TextField
                  className='w-full'
                  id="input"
                  type="text"
                  size='small'
                  label=""
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 20, }} align="center"> <TextField
                  className='w-full'
                  id="input"
                  type="text"
                  size='small'
                  label=""
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 20, }} align="center"> <TextField
                  className='w-full'
                  id="input"
                  type="text"
                  size='small'
                  label=""
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
              </TableRow>
            </TableBody>
            <TableHead >
              <TableRow>
                <TableCell style={{ width: 20, fontWeight: 'bold', background: '#D3DCF1', }}>計　480　時間</TableCell>
                <TableCell style={{ width: 20, fontWeight: 'bold', background: '#D3DCF1', }} align="center"></TableCell>
                <TableCell style={{ width: 20, fontWeight: 'bold', background: '#D3DCF1', }} align="center"></TableCell>
                <TableCell style={{ width: 20, fontWeight: 'bold', background: '#D3DCF1', }} align="center"> </TableCell>
                <TableCell style={{ width: 20, fontWeight: 'bold', background: '#D3DCF1', }} align="center"> </TableCell>
                <TableCell style={{ width: 20, fontWeight: 'bold', background: '#D3DCF1', }} align="center"></TableCell>

              </TableRow>
            </TableHead>
          </Table>
        </TableContainer>
      </Grid >
      {/* End Table */}
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 1, md: 1 }} className='pl-3 pt-3' >
        <Grid item xs={12} sm={12} md={12} lg={12} className='pt-5 ' >
          <Typography
            component="div"
            sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 } }}
            className='flex justify-start pt-2 text-justify'>
            業務內容　※3
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
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 1, md: 1 }} className='pl-3 pt-3' >
        <Grid item xs={12} sm={12} md={12} lg={12} className='pt-5 ' >
          <Typography
            component="div"
            sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 } }}
            className='flex justify-start pt-2 text-justify'>
            ※1　申請時は毎年度4月から11月までの実績及び12月から3月までの雇用計画を、報告時には毎年度4月から3月までの実績を記入す
            ること。
          </Typography>
        </Grid>
      </Grid>
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 1, md: 1 }} className='pl-3 pt-3' >
        <Grid item xs={12} sm={12} md={12} lg={12} className='pt-5 ' >
          <Typography
            component="div"
            sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 } }}
            className='flex justify-start pt-2 text-justify'>
            ※2　身体障がい者、知的障がい者、精神障がい者、母子家庭の母、父子家庭の父、寡婦の別を記入すること。(なお、身体障がい者、知
            的障がい者、精神障がい者の場合は障がいの程度を備考欄に記入のこと。)
          </Typography>
        </Grid>
      </Grid>
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 1, md: 1 }} className='pl-3 pt-3' >
        <Grid item xs={12} sm={12} md={12} lg={12} className='pt-5 ' >
          <Typography
            component="div"
            sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 } }}
            className='flex justify-start pt-2 text-justify'>
            ※3　業務内容については、詳細に記入すること。
          </Typography>
        </Grid>
      </Grid>
      {/* Start Grid Save Button */}
      <Grid container className='pt-10' justifyContent="end">
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

      <Divider className='pt-8'></Divider>
      <Grid container className=' pt-5' justifyContent="center" >
        <Grid item xs={12} sm={12} md={12} lg={12} className='pt-2 ' >
          <Typography
            component="div"
            sx={{ color: 'red', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, fontWeight: 'bold' }}
            className='flex justify-start'>
            個票10添付資料
          </Typography>
        </Grid>
      </Grid>


      <Grid container className=' pt-4' justifyContent="center" >
        <Grid item xs={12} sm={12} md={12} lg={12} className='pt-2 ' >
          <Typography
            component="div"
            sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, fontWeight: 'bold' }}
            className='flex justify-start'>
            高齡者等活躍促進加算調書
          </Typography>
        </Grid>
      </Grid>
      <Grid container className=' pt-5' justifyContent="start" >
        <Grid item xs={6} sm={4} md={4} lg={4} className='pt-2 ' sx={{ marginLeft: { xs: 1, sm: 1, md: 1, lg: 1 } }}>
          <Typography
            component="div"
            sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 } }}
            className='flex justify-start pt-2'>
            栄養士配置区分:
          </Typography>
        </Grid>
        <Grid item xs={6} sm={4} md={4} lg={4} className='pt-2 ' sx={{ marginLeft: { xs: -10, sm: 1, md: -15, lg: -29 } }}>
          <FormControl size="small" fullWidth>
            <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={1}>いちざきみんなの家 </MenuItem>
              <MenuItem value={2}>上田みんなの家</MenuItem>
              <MenuItem value={3}>鈴木みんなの家</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      <Grid container className=' pt-5' justifyContent="start" >
        <Grid item xs={1} sm={1} md={1} lg={1} className='pt-2 ' sx={{ marginLeft: { xs: 1, sm: 1, md: 1, lg: 1 } }}>
          <Typography
            component="div"
            sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 } }}
            className='flex justify-start pt-2'>
            氏名
          </Typography>
        </Grid>
        <Grid item xs={4} sm={2} md={2} lg={2} className='pt-2 ' sx={{ marginLeft: { xs: 0, sm: 1, md: -3, lg: -6 } }}>
        <TextField
            className='w-full '
            id="input"
            type="text"
            size='small'
            label=""
            sx={{
              backgroundColor: "white",
            }}
          />
        </Grid>
        <Grid item xs={1} sm={1} md={1} lg={1} className='pt-2 ' sx={{ marginLeft: { xs: 1, sm: 1, md: 3, lg: 2 } }}>
          <Typography
            component="div"
            sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 } }}
            className='flex justify-start pt-2'>
            年齡
          </Typography>
        </Grid>
        <Grid item xs={3} sm={2} md={2} lg={2} className='pt-2 ' sx={{ marginLeft: { xs: 0, sm: 1, md: -1, lg: -5 } }}>
        <TextField
            className='w-full '
            id="input"
            type="text"
            size='small'
            label=""
            sx={{
              backgroundColor: "white",
            }}
          />
        </Grid>
        <Grid item xs={1} sm={1} md={1} lg={1} className='pt-2 ' sx={{ marginLeft: { xs: 1, sm: 1, md: 2, lg: 2 } }}>
          <Typography
            component="div"
            sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 } }}
            className='flex justify-start pt-2'>
            歳
          </Typography>
        </Grid>
        <Grid item xs={4} sm={1} md={1} lg={1} className='pt-2 ' sx={{ marginLeft: { xs: 1, sm: 1, md: -2, lg: -4 } }}>
          <Typography
            component="div"
            sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 } }}
            className='flex justify-start pt-2'>
            雇用枠
          </Typography>
        </Grid>
        <Grid item xs={4} sm={2} md={2} lg={2} className='pt-2 ' sx={{ marginLeft: { xs: -9, sm: 1, md: -1, lg: -3 } }}>
        <TextField
            className='w-full '
            id="input"
            type="text"
            size='small'
            label=""
            sx={{
              backgroundColor: "white",
            }}
          />
        </Grid>
      </Grid>
      <Grid container className=' pt-5' justifyContent="start" >
        <Grid item xs={1} sm={1} md={1} lg={1} className='pt-2 ' sx={{ marginLeft: { xs: 1, sm: 1, md: 1, lg: 1 } }}>
          <Typography
            component="div"
            sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 } }}
            className='flex justify-start pt-2'>
            氏名
          </Typography>
        </Grid>
        <Grid item xs={4} sm={2} md={2} lg={2} className='pt-2 ' sx={{ marginLeft: { xs: 0, sm: 1, md: -3, lg: -6 } }}>
        <TextField
            className='w-full '
            id="input"
            type="text"
            size='small'
            label=""
            sx={{
              backgroundColor: "white",
            }}
          />
        </Grid>
        <Grid item xs={1} sm={1} md={1} lg={1} className='pt-2 ' sx={{ marginLeft: { xs: 1, sm: 1, md: 3, lg: 2 } }}>
          <Typography
            component="div"
            sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 } }}
            className='flex justify-start pt-2'>
            年齡
          </Typography>
        </Grid>
        <Grid item xs={3} sm={2} md={2} lg={2} className='pt-2 ' sx={{ marginLeft: { xs: 0, sm: 1, md: -1, lg: -5 } }}>
        <TextField
            className='w-full '
            id="input"
            type="text"
            size='small'
            label=""
            sx={{
              backgroundColor: "white",
            }}
          />
        </Grid>
        <Grid item xs={1} sm={1} md={1} lg={1} className='pt-2 ' sx={{ marginLeft: { xs: 1, sm: 1, md: 2, lg: 2 } }}>
          <Typography
            component="div"
            sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 } }}
            className='flex justify-start pt-2'>
            歳
          </Typography>
        </Grid>
        <Grid item xs={4} sm={1} md={1} lg={1} className='pt-2 ' sx={{ marginLeft: { xs: 1, sm: 1, md: -2, lg: -4 } }}>
          <Typography
            component="div"
            sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 } }}
            className='flex justify-start pt-2'>
            雇用枠
          </Typography>
        </Grid>
        <Grid item xs={4} sm={2} md={2} lg={2} className='pt-2 ' sx={{ marginLeft: { xs: -9, sm: 1, md: -1, lg: -3 } }}>
        <TextField
            className='w-full '
            id="input"
            type="text"
            size='small'
            label=""
            sx={{
              backgroundColor: "white",
            }}
          />
        </Grid>
      </Grid>
      <Grid container className=' pt-5' justifyContent="start" >
        <Grid item xs={1} sm={1} md={1} lg={1} className='pt-2 ' sx={{ marginLeft: { xs: 1, sm: 1, md: 1, lg: 1 } }}>
          <Typography
            component="div"
            sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 } }}
            className='flex justify-start pt-2'>
            氏名
          </Typography>
        </Grid>
        <Grid item xs={4} sm={2} md={2} lg={2} className='pt-2 ' sx={{ marginLeft: { xs: 0, sm: 1, md: -3, lg: -6 } }}>
        <TextField
            className='w-full '
            id="input"
            type="text"
            size='small'
            label=""
            sx={{
              backgroundColor: "white",
            }}
          />
        </Grid>
        <Grid item xs={1} sm={1} md={1} lg={1} className='pt-2 ' sx={{ marginLeft: { xs: 1, sm: 1, md: 3, lg: 2 } }}>
          <Typography
            component="div"
            sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 } }}
            className='flex justify-start pt-2'>
            年齡
          </Typography>
        </Grid>
        <Grid item xs={3} sm={2} md={2} lg={2} className='pt-2 ' sx={{ marginLeft: { xs: 0, sm: 1, md: -1, lg: -5 } }}>
        <TextField
            className='w-full '
            id="input"
            type="text"
            size='small'
            label=""
            sx={{
              backgroundColor: "white",
            }}
          />
        </Grid>
        <Grid item xs={1} sm={1} md={1} lg={1} className='pt-2 ' sx={{ marginLeft: { xs: 1, sm: 1, md: 2, lg: 2 } }}>
          <Typography
            component="div"
            sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 } }}
            className='flex justify-start pt-2'>
            歳
          </Typography>
        </Grid>
        <Grid item xs={4} sm={1} md={1} lg={1} className='pt-2 ' sx={{ marginLeft: { xs: 1, sm: 1, md: -2, lg: -4 } }}>
          <Typography
            component="div"
            sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 } }}
            className='flex justify-start pt-2'>
            雇用枠
          </Typography>
        </Grid>
        <Grid item xs={4} sm={2} md={2} lg={2} className='pt-2 ' sx={{ marginLeft: { xs: -9, sm: 1, md: -1, lg: -3 } }}>
        <TextField
            className='w-full '
            id="input"
            type="text"
            size='small'
            label=""
            sx={{
              backgroundColor: "white",
            }}
          />
        </Grid>
      </Grid>
      <Grid container className=' pt-5' justifyContent="start" >
        <Grid item xs={1} sm={1} md={1} lg={1} className='pt-2 ' sx={{ marginLeft: { xs: 1, sm: 1, md: 1, lg: 1 } }}>
          <Typography
            component="div"
            sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 } }}
            className='flex justify-start pt-2'>
            氏名
          </Typography>
        </Grid>
        <Grid item xs={4} sm={2} md={2} lg={2} className='pt-2 ' sx={{ marginLeft: { xs: 0, sm: 1, md: -3, lg: -6 } }}>
        <TextField
            className='w-full '
            id="input"
            type="text"
            size='small'
            label=""
            sx={{
              backgroundColor: "white",
            }}
          />
        </Grid>
        <Grid item xs={1} sm={1} md={1} lg={1} className='pt-2 ' sx={{ marginLeft: { xs: 1, sm: 1, md: 3, lg: 2 } }}>
          <Typography
            component="div"
            sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 } }}
            className='flex justify-start pt-2'>
            年齡
          </Typography>
        </Grid>
        <Grid item xs={3} sm={2} md={2} lg={2} className='pt-2 ' sx={{ marginLeft: { xs: 0, sm: 1, md: -1, lg: -5 } }}>
        <TextField
            className='w-full '
            id="input"
            type="text"
            size='small'
            label=""
            sx={{
              backgroundColor: "white",
            }}
          />
        </Grid>
        <Grid item xs={1} sm={1} md={1} lg={1} className='pt-2 ' sx={{ marginLeft: { xs: 1, sm: 1, md: 2, lg: 2 } }}>
          <Typography
            component="div"
            sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 } }}
            className='flex justify-start pt-2'>
            歳
          </Typography>
        </Grid>
        <Grid item xs={4} sm={1} md={1} lg={1} className='pt-2 ' sx={{ marginLeft: { xs: 1, sm: 1, md: -2, lg: -4 } }}>
          <Typography
            component="div"
            sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 } }}
            className='flex justify-start pt-2'>
            雇用枠
          </Typography>
        </Grid>
        <Grid item xs={4} sm={2} md={2} lg={2} className='pt-2 ' sx={{ marginLeft: { xs: -9, sm: 1, md: -1, lg: -3 } }}>
        <TextField
            className='w-full '
            id="input"
            type="text"
            size='small'
            label=""
            sx={{
              backgroundColor: "white",
            }}
          />
        </Grid>
      </Grid>
      <Grid container className='pt-8' justifyContent="start" sx={{}}>
        <Grid item xs={12} sm={12} md={3} lg={4}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className=' text-justify'>
          業務內容
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
      </Grid> <Grid container className='pt-8' justifyContent="start" sx={{}}>
        <Grid item xs={12} sm={12} md={3} lg={4}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className=' text-justify'>
          加算の効果必要性等s
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

      <Grid container className='pt-6' justifyContent="center">
        <TableContainer component={Paper} className="" sx={{ width: { xs: 'auto', sm: 'auto', md: 'auto', lg: 10000 } }}>
          <Table sx={{ minWidth: 1000 }} aria-label="simple table">
            <TableHead >
              <TableRow>
                <TableCell style={{ width: 20, fontWeight: 'bold', background: '#D3DCF1', }}></TableCell>
                <TableCell style={{ width: 20, fontWeight: 'bold', background: '#D3DCF1', }} align="center">1)雇用時間(予定)数</TableCell>
                <TableCell style={{ width: 20, fontWeight: 'bold', background: '#D3DCF1', }} align="center">2)雇用時間(予定)数</TableCell>
                <TableCell style={{ width: 20, fontWeight: 'bold', background: '#D3DCF1', }} align="center">3)雇用時間(予定)数</TableCell>
                <TableCell style={{ width: 20, fontWeight: 'bold', background: '#D3DCF1', }} align="center">4)雇用時間(予定)数</TableCell>
                <TableCell style={{ width: 20, fontWeight: 'bold', background: '#D3DCF1', }} align="center">計</TableCell>

              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow >
                <TableCell style={{ width: 20, }}>氏名 </TableCell>
                <TableCell style={{ width: 20, }} align="center"> <TextField
                  className='w-full'
                  id="input"
                  type="text"
                  size='small'
                  label=""
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 20, }} align="center"> <TextField
                  className='w-full'
                  id="input"
                  type="text"
                  size='small'
                  label=""
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 20, }} align="center"> <TextField
                  className='w-full'
                  id="input"
                  type="text"
                  size='small'
                  label=""
                  sx={{
                    backgroundColor: "white",
                  }}
                /> </TableCell>
                <TableCell style={{ width: 20, }} align="center">  <TextField
                  className='w-full'
                  id="input"
                  type="text"
                  size='small'
                  label=""
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 20, }} align="center">  <TextField
                  className='w-full'
                  id="input"
                  type="text"
                  size='small'
                  label=""
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
              </TableRow>
              <TableRow >
                <TableCell style={{ width: 20, }}>4月</TableCell>
                <TableCell style={{ width: 20, }} align="center"> <TextField
                  className='w-full'
                  id="input"
                  type="text"
                  size='small'
                  label=""
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 20, }} align="center"> <TextField
                  className='w-full'
                  id="input"
                  type="text"
                  size='small'
                  label=""
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 20, }} align="center"> <TextField
                  className='w-full'
                  id="input"
                  type="text"
                  size='small'
                  label=""
                  sx={{
                    backgroundColor: "white",
                  }}
                /> </TableCell>
                <TableCell style={{ width: 20, }} align="center">  <TextField
                  className='w-full'
                  id="input"
                  type="text"
                  size='small'
                  label=""
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 20, }} align="center">  <TextField
                  className='w-full'
                  id="input"
                  type="text"
                  size='small'
                  label=""
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
              </TableRow>
              <TableRow >
                <TableCell style={{ width: 20, }}>5月 </TableCell>
                <TableCell style={{ width: 20, }} align="center"> <TextField
                  className='w-full'
                  id="input"
                  type="text"
                  size='small'
                  label=""
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 20, }} align="center"> <TextField
                  className='w-full'
                  id="input"
                  type="text"
                  size='small'
                  label=""
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 20, }} align="center"> <TextField
                  className='w-full'
                  id="input"
                  type="text"
                  size='small'
                  label=""
                  sx={{
                    backgroundColor: "white",
                  }}
                /> </TableCell>
                <TableCell style={{ width: 20, }} align="center">  <TextField
                  className='w-full'
                  id="input"
                  type="text"
                  size='small'
                  label=""
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 20, }} align="center">  <TextField
                  className='w-full'
                  id="input"
                  type="text"
                  size='small'
                  label=""
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
              </TableRow>
              <TableRow >
                <TableCell style={{ width: 20, }}>6月</TableCell>
                <TableCell style={{ width: 20, }} align="center"> <TextField
                  className='w-full'
                  id="input"
                  type="text"
                  size='small'
                  label=""
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 20, }} align="center"> <TextField
                  className='w-full'
                  id="input"
                  type="text"
                  size='small'
                  label=""
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 20, }} align="center"> <TextField
                  className='w-full'
                  id="input"
                  type="text"
                  size='small'
                  label=""
                  sx={{
                    backgroundColor: "white",
                  }}
                /> </TableCell>
                <TableCell style={{ width: 20, }} align="center">  <TextField
                  className='w-full'
                  id="input"
                  type="text"
                  size='small'
                  label=""
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 20, }} align="center">  <TextField
                  className='w-full'
                  id="input"
                  type="text"
                  size='small'
                  label=""
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
              </TableRow>
              <TableRow >
                <TableCell style={{ width: 20, }}>7月</TableCell>
                <TableCell style={{ width: 20, }} align="center"> <TextField
                  className='w-full'
                  id="input"
                  type="text"
                  size='small'
                  label=""
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 20, }} align="center"> <TextField
                  className='w-full'
                  id="input"
                  type="text"
                  size='small'
                  label=""
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 20, }} align="center"> <TextField
                  className='w-full'
                  id="input"
                  type="text"
                  size='small'
                  label=""
                  sx={{
                    backgroundColor: "white",
                  }}
                /> </TableCell>
                <TableCell style={{ width: 20, }} align="center">  <TextField
                  className='w-full'
                  id="input"
                  type="text"
                  size='small'
                  label=""
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 20, }} align="center">  <TextField
                  className='w-full'
                  id="input"
                  type="text"
                  size='small'
                  label=""
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
              </TableRow>
              <TableRow >
                <TableCell style={{ width: 20, }}>8月 </TableCell>
                <TableCell style={{ width: 20, }} align="center"> <TextField
                  className='w-full'
                  id="input"
                  type="text"
                  size='small'
                  label=""
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 20, }} align="center"> <TextField
                  className='w-full'
                  id="input"
                  type="text"
                  size='small'
                  label=""
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 20, }} align="center"> <TextField
                  className='w-full'
                  id="input"
                  type="text"
                  size='small'
                  label=""
                  sx={{
                    backgroundColor: "white",
                  }}
                /> </TableCell>
                <TableCell style={{ width: 20, }} align="center">  <TextField
                  className='w-full'
                  id="input"
                  type="text"
                  size='small'
                  label=""
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 20, }} align="center">  <TextField
                  className='w-full'
                  id="input"
                  type="text"
                  size='small'
                  label=""
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
              </TableRow>
              <TableRow >
                <TableCell style={{ width: 20, }}>9月 </TableCell>
                <TableCell style={{ width: 20, }} align="center"> <TextField
                  className='w-full'
                  id="input"
                  type="text"
                  size='small'
                  label=""
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 20, }} align="center"> <TextField
                  className='w-full'
                  id="input"
                  type="text"
                  size='small'
                  label=""
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 20, }} align="center"> <TextField
                  className='w-full'
                  id="input"
                  type="text"
                  size='small'
                  label=""
                  sx={{
                    backgroundColor: "white",
                  }}
                /> </TableCell>
                <TableCell style={{ width: 20, }} align="center">  <TextField
                  className='w-full'
                  id="input"
                  type="text"
                  size='small'
                  label=""
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 20, }} align="center">  <TextField
                  className='w-full'
                  id="input"
                  type="text"
                  size='small'
                  label=""
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
              </TableRow>
              <TableRow >
                <TableCell style={{ width: 20, }}>10月 </TableCell>
                <TableCell style={{ width: 20, }} align="center"> <TextField
                  className='w-full'
                  id="input"
                  type="text"
                  size='small'
                  label=""
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 20, }} align="center"> <TextField
                  className='w-full'
                  id="input"
                  type="text"
                  size='small'
                  label=""
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 20, }} align="center"> <TextField
                  className='w-full'
                  id="input"
                  type="text"
                  size='small'
                  label=""
                  sx={{
                    backgroundColor: "white",
                  }}
                /> </TableCell>
                <TableCell style={{ width: 20, }} align="center">  <TextField
                  className='w-full'
                  id="input"
                  type="text"
                  size='small'
                  label=""
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 20, }} align="center">  <TextField
                  className='w-full'
                  id="input"
                  type="text"
                  size='small'
                  label=""
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
              </TableRow>
              <TableRow >
                <TableCell style={{ width: 20, }}>11月</TableCell>
                <TableCell style={{ width: 20, }} align="center"> <TextField
                  className='w-full'
                  id="input"
                  type="text"
                  size='small'
                  label=""
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 20, }} align="center"> <TextField
                  className='w-full'
                  id="input"
                  type="text"
                  size='small'
                  label=""
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 20, }} align="center"> <TextField
                  className='w-full'
                  id="input"
                  type="text"
                  size='small'
                  label=""
                  sx={{
                    backgroundColor: "white",
                  }}
                /> </TableCell>
                <TableCell style={{ width: 20, }} align="center">  <TextField
                  className='w-full'
                  id="input"
                  type="text"
                  size='small'
                  label=""
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 20, }} align="center">  <TextField
                  className='w-full'
                  id="input"
                  type="text"
                  size='small'
                  label=""
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
              </TableRow>
              <TableRow >
                <TableCell style={{ width: 20, }}>12月 </TableCell>
                <TableCell style={{ width: 20, }} align="center"> <TextField
                  className='w-full'
                  id="input"
                  type="text"
                  size='small'
                  label=""
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 20, }} align="center"> <TextField
                  className='w-full'
                  id="input"
                  type="text"
                  size='small'
                  label=""
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 20, }} align="center"> <TextField
                  className='w-full'
                  id="input"
                  type="text"
                  size='small'
                  label=""
                  sx={{
                    backgroundColor: "white",
                  }}
                /> </TableCell>
                <TableCell style={{ width: 20, }} align="center">  <TextField
                  className='w-full'
                  id="input"
                  type="text"
                  size='small'
                  label=""
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 20, }} align="center">  <TextField
                  className='w-full'
                  id="input"
                  type="text"
                  size='small'
                  label=""
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
              </TableRow>
              <TableRow >
                <TableCell style={{ width: 20, }}>1月 </TableCell>
                <TableCell style={{ width: 20, }} align="center"> <TextField
                  className='w-full'
                  id="input"
                  type="text"
                  size='small'
                  label=""
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 20, }} align="center"> <TextField
                  className='w-full'
                  id="input"
                  type="text"
                  size='small'
                  label=""
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 20, }} align="center"> <TextField
                  className='w-full'
                  id="input"
                  type="text"
                  size='small'
                  label=""
                  sx={{
                    backgroundColor: "white",
                  }}
                /> </TableCell>
                <TableCell style={{ width: 20, }} align="center">  <TextField
                  className='w-full'
                  id="input"
                  type="text"
                  size='small'
                  label=""
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 20, }} align="center">  <TextField
                  className='w-full'
                  id="input"
                  type="text"
                  size='small'
                  label=""
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
              </TableRow>
              <TableRow >
                <TableCell style={{ width: 20, }}>2月 </TableCell>
                <TableCell style={{ width: 20, }} align="center"> <TextField
                  className='w-full'
                  id="input"
                  type="text"
                  size='small'
                  label=""
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 20, }} align="center"> <TextField
                  className='w-full'
                  id="input"
                  type="text"
                  size='small'
                  label=""
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 20, }} align="center"> <TextField
                  className='w-full'
                  id="input"
                  type="text"
                  size='small'
                  label=""
                  sx={{
                    backgroundColor: "white",
                  }}
                /> </TableCell>
                <TableCell style={{ width: 20, }} align="center">  <TextField
                  className='w-full'
                  id="input"
                  type="text"
                  size='small'
                  label=""
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 20, }} align="center">  <TextField
                  className='w-full'
                  id="input"
                  type="text"
                  size='small'
                  label=""
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
              </TableRow>
              <TableRow >
                <TableCell style={{ width: 20, }}>3月 </TableCell>
                <TableCell style={{ width: 20, }} align="center"> <TextField
                  className='w-full'
                  id="input"
                  type="text"
                  size='small'
                  label=""
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 20, }} align="center"> <TextField
                  className='w-full'
                  id="input"
                  type="text"
                  size='small'
                  label=""
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 20, }} align="center"> <TextField
                  className='w-full'
                  id="input"
                  type="text"
                  size='small'
                  label=""
                  sx={{
                    backgroundColor: "white",
                  }}
                /> </TableCell>
                <TableCell style={{ width: 20, }} align="center">  <TextField
                  className='w-full'
                  id="input"
                  type="text"
                  size='small'
                  label=""
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 20, }} align="center">  <TextField
                  className='w-full'
                  id="input"
                  type="text"
                  size='small'
                  label=""
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
              </TableRow>
              <TableRow >
                <TableCell style={{ width: 20, }}>合計</TableCell>
                <TableCell style={{ width: 20, }} align="center"> <TextField
                  className='w-full'
                  id="input"
                  type="text"
                  size='small'
                  label=""
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 20, }} align="center"> <TextField
                  className='w-full'
                  id="input"
                  type="text"
                  size='small'
                  label=""
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 20, }} align="center"> <TextField
                  className='w-full'
                  id="input"
                  type="text"
                  size='small'
                  label=""
                  sx={{
                    backgroundColor: "white",
                  }}
                /> </TableCell>
                <TableCell style={{ width: 20, }} align="center">  <TextField
                  className='w-full'
                  id="input"
                  type="text"
                  size='small'
                  label=""
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 20, }} align="center">  <TextField
                  className='w-full'
                  id="input"
                  type="text"
                  size='small'
                  label=""
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
      <Grid container className='pt-8' justifyContent="start" sx={{}}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography sx={{ color:'#D0A919' ,fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className=' text-justify'>
          注14月から11月については、各月の実際の雇用時間の累計を記入すること。
          </Typography>
        </Grid>
      </Grid>
      <Grid container className='' justifyContent="start" sx={{}}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography sx={{color:'#D0A919' ,fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className=' text-justify'>
          注212月から3月については、実績等を考慮した雇用予定時間を記入すること。
          </Typography>
        </Grid>
      </Grid>

       {/* Start Grid Save Button */}
       <Grid container className='pt-10' justifyContent="end">
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
