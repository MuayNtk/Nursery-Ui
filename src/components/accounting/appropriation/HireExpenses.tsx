import { Button, Checkbox, Divider, FormControlLabel, Grid, InputAdornment, Radio, RadioGroup, TextField, Typography } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import SearchIcon from '@mui/icons-material/Search';

export default function HireExpenses() {

  return (
    <>
      <Grid container className='h-14 pt-5' justifyContent="center" >
        <Grid item xs={12} sm={12} md={12} lg={12} className='pt-2 ' >
          <Typography
            component="div"
            sx={{ color: 'red', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, fontWeight: 'bold' }}
            className='flex justify-start'>
            個票7
          </Typography>
        </Grid>
      </Grid>


      <Grid container className=' pt-2' justifyContent="center" >
        <Grid item xs={12} sm={12} md={12} lg={12} className='pt-2 ' >
          <Typography
            component="div"
            sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, fontWeight: 'bold' }}
            className='flex justify-start'>
            11　主任保育士専任加算
          </Typography>
        </Grid>
      </Grid>
      <Grid container className='pt-4 ' justifyContent="start" sx={{ ml: { xs: 1, sm: 4, md: 4, lg: 3 } }}>
        <Grid item xs={12} sm={12} md={12} lg={7.5}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className=' text-justify'>
            (いずれも「適」で、下記事業のうち「2つ以上」を実施している場合に加算適用)
          </Typography>
        </Grid>
      </Grid>

      {/* Start Text Center Content Grid */}
      <Grid container className='pt-3' justifyContent="start" sx={{ pl: { xs: 3, sm: 5, md: 9, lg: 10 }, pr: { xs: 3, sm: 5, md: 10, lg: 15 }, }}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-justify'>
            主任保育士の配置
          </Typography>
        </Grid>
      </Grid>
      {/* End Text Center Content Grid */}
      <RadioGroup
        defaultValue=""
        aria-labelledby="demo-customized-radios"
        name="customized-radios"
      >
        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-2 pl-20' >
          <Grid item xs={4.5} sm={3.5} md={3} lg={1.7}>
            <FormControlLabel value="1　適" control={<Radio />} label="1　適" />
          </Grid>
          <Grid item xs={4.5} sm={3.5} md={3} lg={1.7}>
            <FormControlLabel value="2　否" control={<Radio />} label="2　否" />
          </Grid>
        </Grid>
      </RadioGroup>
      {/* Start Text Center Content Grid */}
      <Grid container className='pt-3' justifyContent="start" sx={{ pl: { xs: 3, sm: 5, md: 9, lg: 10 }, pr: { xs: 3, sm: 5, md: 10, lg: 15 }, }}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-justify'>
            代替保育士の配置(常勤)
          </Typography>
        </Grid>
      </Grid>
      {/* End Text Center Content Grid */}
      <RadioGroup
        defaultValue=""
        aria-labelledby="demo-customized-radios"
        name="customized-radios"
      >
        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-2 pl-20' >
          <Grid item xs={4.5} sm={3.5} md={3} lg={1.7}>
            <FormControlLabel value="1　適" control={<Radio />} label="1　適" />
          </Grid>
          <Grid item xs={4.5} sm={3.5} md={3} lg={1.7}>
            <FormControlLabel value="2　否" control={<Radio />} label="2　否" />
          </Grid>
        </Grid>
      </RadioGroup>

      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 1, md: 1 }} className='pt-5 pl-3' >
        <Grid item xs={4} sm={4} md={4} lg={2} className='pt-5 ' >
          <Typography
            component="div"
            sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 } }}
            className='flex justify-start pt-2'>
            代替保育士氏名:
          </Typography>
        </Grid>
        <Grid item xs={7} sm={4} md={3} lg={4} sx={{ marginLeft: { xs: -2, sm: -7, md: -15, lg: -8 } }}>
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

      {/* Start Text Center Content Grid */}
      <Grid container className='pt-3 pl-3' justifyContent="start" >
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-justify'>
            ※　施設長要件該当する ✔ に印をすること
          </Typography>
        </Grid>
      </Grid>
      {/* End Text Center Content Grid */}

      {/* Start Text Center Content Grid */}
      <Grid container className='pt-3 pl-3' justifyContent="start" >
        <Grid item xs={7} sm={5} md={4} lg={2.5} className="">
          <FormControlLabel control={<Checkbox  />} label="1　延長保育事業"  />
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
        <Grid item xs={6} sm={4} md={3} lg={2} sx={{ marginLeft: { xs: -5, sm: -10, md: -11, lg: -15 },mt:1 }} className="">
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
          <FormControlLabel control={<Checkbox  />} label="2　一時預かり事業(一般型)"  />
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
        <Grid item xs={6} sm={4} md={3} lg={2} sx={{ marginLeft: { xs: -5, sm: -10, md: -11, lg: -15 },mt:1 }} className="">
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
          <FormControlLabel control={<Checkbox  />} label="3　病児保育事業(子ども・子育て支援交付金に係る要件に適合するもの及びこれと同等の要件を満たして自主事業として 実施しているもの。)"  />
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
        <Grid item xs={6} sm={4} md={3} lg={2} sx={{ marginLeft: { xs: -5, sm: -10, md: -11, lg: -15 },mt:1 }} className="">
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
          <FormControlLabel control={<Checkbox  />} label="4　乳児が3人以上利用している施設(月の初日において乳児が3人以上利用している月から当該要件を満たしているもの
とする。)"  />
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
        <Grid item xs={6} sm={4} md={3} lg={2} sx={{ marginLeft: { xs: -5, sm: -10, md: -11, lg: -15 },mt:1 }} className="">
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
          <FormControlLabel control={<Checkbox  />} label="5　障がい児(軽度障がい児を含む。)※1が1人以上利用している施設(月の初日において障がい児が1人以上利用している月から当該要件を満たしているものと
する。)"  />
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
        <Grid item xs={6} sm={4} md={3} lg={2} sx={{ marginLeft: { xs: -5, sm: -10, md: -11, lg: -15 },mt:1 }} className="">
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

      <Grid container className=' pt-2' justifyContent="center" >
        <Grid item xs={12} sm={12} md={12} lg={12} className='pt-2 ' >
          <Typography
            component="div"
            sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, fontWeight: 'bold' }}
            className='flex justify-start'>
            13　事務職員雇上費加算
          </Typography>
        </Grid>
      </Grid>
      <Grid container className='pt-4 ' justifyContent="start" sx={{ ml: { xs: 1, sm: 4, md: 4, lg: 3 } }}>
        <Grid item xs={12} sm={12} md={12} lg={7.5}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className=' text-justify'>
          (いずれかが「適」で、上記事業のうち「1つ以上」を実施している場合に加算適用)
          </Typography>
        </Grid>
      </Grid>
        {/* Start Text Center Content Grid */}
        <Grid container className='pt-3' justifyContent="start" sx={{ pl: { xs: 3, sm: 5, md: 9, lg: 10 }, pr: { xs: 3, sm: 5, md: 10, lg: 15 }, }}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-justify'>
          事務職員の配置
          </Typography>
        </Grid>
      </Grid>
      {/* End Text Center Content Grid */}
      <RadioGroup
        defaultValue=""
        aria-labelledby="demo-customized-radios"
        name="customized-radios"
      >
        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-2 pl-20' >
          <Grid item xs={4.5} sm={3.5} md={3} lg={1.7}>
            <FormControlLabel value="1　適" control={<Radio />} label="1　適" />
          </Grid>
          <Grid item xs={4.5} sm={3.5} md={3} lg={1.7}>
            <FormControlLabel value="2　否" control={<Radio />} label="2　否" />
          </Grid>
        </Grid>
      </RadioGroup>
      {/* Start Text Center Content Grid */}
      <Grid container className='pt-3' justifyContent="start" sx={{ pl: { xs: 3, sm: 5, md: 9, lg: 10 }, pr: { xs: 3, sm: 5, md: 10, lg: 15 }, }}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-justify'>
          施設長等が兼務している(業務委託を含む。)
          </Typography>
        </Grid>
      </Grid>
      {/* End Text Center Content Grid */}
      <RadioGroup
        defaultValue=""
        aria-labelledby="demo-customized-radios"
        name="customized-radios"
      >
        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-2 pl-20' >
          <Grid item xs={4.5} sm={3.5} md={3} lg={1.7}>
            <FormControlLabel value="1　適" control={<Radio />} label="1　適" />
          </Grid>
          <Grid item xs={4.5} sm={3.5} md={3} lg={1.7}>
            <FormControlLabel value="2　否" control={<Radio />} label="2　否" />
          </Grid>
        </Grid>
      </RadioGroup>

      <Grid container className='h-14 pt-5' justifyContent="center" >
        <Grid item xs={12} sm={12} md={12} lg={12} className='pt-2 ' >
          <Typography
            component="div"
            sx={{ color: 'red', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, fontWeight: 'bold' }}
            className='flex justify-start'>
            個票8
          </Typography>
        </Grid>
      </Grid>


      <Grid container className=' pt-2' justifyContent="center" >
        <Grid item xs={12} sm={12} md={12} lg={12} className='pt-2 ' >
          <Typography
            component="div"
            sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, fontWeight: 'bold' }}
            className='flex justify-start'>
            12　療育支援加算
          </Typography>
        </Grid>
      </Grid>
      <Grid container className='pt-4 ' justifyContent="start" sx={{ ml: { xs: 1, sm: 4, md: 4, lg: 3 } }}>
        <Grid item xs={12} sm={12} md={12} lg={7.5}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className=' text-justify'>
            (いずれも「適」で、下記事業のうち「2つ以上」を実施している場合に加算適用)
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
      <Grid container className='pt-4 ' justifyContent="start" sx={{ ml: { xs: 1, sm: 4, md: 4, lg: 3 } }}>
        <Grid item xs={12} sm={12} md={12} lg={7.5}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px', fontWeight: 'bold'  } }} className=' text-justify'>
          (いずれも「適」の場合に加算適用)
          </Typography>
        </Grid>
      </Grid>
       {/* Start Text Center Content Grid */}
       <Grid container className='pt-3' justifyContent="start" sx={{ pl: { xs: 3, sm: 5, md: 9, lg: 10 }, pr: { xs: 3, sm: 5, md: 10, lg: 15 }, }}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-justify'>
          11主任保育士専任加算(個票7)の対象施設
          </Typography>
        </Grid>
      </Grid>
      {/* End Text Center Content Grid */}
      <RadioGroup
        defaultValue=""
        aria-labelledby="demo-customized-radios"
        name="customized-radios"
      >
        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-2 pl-20' >
          <Grid item xs={4.5} sm={3.5} md={3} lg={1.7}>
            <FormControlLabel value="1　適" control={<Radio />} label="1　適" />
          </Grid>
          <Grid item xs={4.5} sm={3.5} md={3} lg={1.7}>
            <FormControlLabel value="2　否" control={<Radio />} label="2　否" />
          </Grid>
        </Grid>
      </RadioGroup>
      {/* Start Text Center Content Grid */}
      <Grid container className='pt-3' justifyContent="start" sx={{ pl: { xs: 3, sm: 5, md: 9, lg: 10 }, pr: { xs: 3, sm: 5, md: 10, lg: 15 }, }}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-justify'>
          主任保育士補助者の配置
          </Typography>
        </Grid>
      </Grid>
      {/* End Text Center Content Grid */}
      <RadioGroup
        defaultValue=""
        aria-labelledby="demo-customized-radios"
        name="customized-radios"
      >
        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-2 pl-20' >
          <Grid item xs={4.5} sm={3.5} md={3} lg={1.7}>
            <FormControlLabel value="1　適" control={<Radio />} label="1　適" />
          </Grid>
          <Grid item xs={4.5} sm={3.5} md={3} lg={1.7}>
            <FormControlLabel value="2　否" control={<Radio />} label="2　否" />
          </Grid>
        </Grid>
      </RadioGroup>
      <Grid container className='pt-4 ' justifyContent="start" sx={{ ml: { xs: 1, sm: 4, md: 4, lg: 3 } }}>
        <Grid item xs={12} sm={12} md={12} lg={7.5}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px', fontWeight: 'bold'  } }} className=' text-justify'>
          受入障がい児※数
          </Typography>
        </Grid>
      </Grid>

      {/* Start Text Center Content Grid */}
      <Grid container className='pt-3 pl-3' justifyContent="start" >
        <Grid item xs={12} sm={12} md={6} lg={4} className="">
          <FormControlLabel control={<Checkbox  />} label="A:　特別児童扶養手当支給対象児童"  />
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
        <Grid item xs={6} sm={4} md={3} lg={2} sx={{ marginLeft: { xs: -5, sm: -10, md: -11, lg: -15 },mt:1 }} className="">
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
      <Divider className='pt-8'></Divider>{/* Start Text Center Content Grid */}
      <Grid container className='pt-3 pl-3' justifyContent="start" >
        <Grid item xs={9.5} sm={10} md={5} lg={3.3} className="">
          <FormControlLabel control={<Checkbox  />} label="B:　それ以外の対象子ども"  />
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
        <Grid item xs={6} sm={4} md={3} lg={2} sx={{ marginLeft: { xs: -5, sm: -10, md: -11, lg: -15 },mt:1 }} className="">
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
      <Grid container className='pt-3' justifyContent="start">
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-justify'>
          ※　さぽ〜と保育(福岡市特別支援保育事業)に係る支援区分1~支援区分4の決定を受けた児童を指します。
          </Typography>
        </Grid>
      </Grid>

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
