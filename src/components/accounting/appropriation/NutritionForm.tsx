import { Button, FormControl, Grid, InputAdornment, MenuItem, Select, TextField, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

export default function NutritionForm() {

  return (
    <>
      <Grid container className='h-14 pt-5' justifyContent="center" >
        <Grid item xs={12} sm={12} md={12} lg={12} className='pt-2 ' >
          <Typography
            component="div"
            sx={{ color: 'red', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, fontWeight: 'bold' }}
            className='flex justify-start'>
            個票9
          </Typography>
        </Grid>
      </Grid>


      <Grid container className=' pt-2' justifyContent="center" >
        <Grid item xs={12} sm={12} md={12} lg={12} className='pt-2 ' >
          <Typography
            component="div"
            sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, fontWeight: 'bold' }}
            className='flex justify-start'>
            14　栄養管理加算
          </Typography>
        </Grid>
      </Grid>

      <Grid container className='pt-4 ' justifyContent="start" sx={{ ml: { xs: 1, sm: 4, md: 4, lg: 3 } }}>
        <Grid item xs={12} sm={12} md={12} lg={7}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className=' text-justify'>
            (いずれも「適」で、下記事業のうち「2つ以上」を実施している場合に加算適用)
          </Typography>
        </Grid>
      </Grid>
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 1, md: 1 }} className='pt-10 pl-5' >
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
        <Grid item xs={12} sm={12} md={12} lg={7}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className=' text-justify'>
            A:　【配置】栄養士を直接雇用(派遣を含む。)している場合
          </Typography>
        </Grid>
      </Grid>
      <Grid container className='pt-1 ' justifyContent="start" sx={{ ml: { xs: 1, sm: 4, md: 4, lg: 3 } }}>
        <Grid item xs={12} sm={12} md={12} lg={7}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px', color: 'red' } }} className=' text-justify'>
            ※　(B:【兼務】に該当する場合を除く。)
          </Typography>
        </Grid>
      </Grid>
      <Grid container className='pt-1 ' justifyContent="start" sx={{ ml: { xs: 1, sm: 4, md: 4, lg: 3 } }}>
        <Grid item xs={12} sm={12} md={12} lg={7}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px', color: 'red' } }} className=' text-justify'>
            ※　法人本部で雇用する(同一法人内の他施設に勤務する場合を含む。)栄養士が、各施設に赴き、指導する場合も「配置」となります。
          </Typography>
        </Grid>
      </Grid>
      <Grid container className='pt-4 ' justifyContent="start" sx={{ ml: { xs: 1, sm: 4, md: 4, lg: 3 } }}>
        <Grid item xs={12} sm={12} md={12} lg={7}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className=' text-justify'>
            B:　【兼務】栄養士を直接雇用(派遣を含む。)している場合
          </Typography>
        </Grid>
      </Grid>
      <Grid container className='pt-1 ' justifyContent="start" sx={{ ml: { xs: 1, sm: 4, md: 4, lg: 3 } }}>
        <Grid item xs={12} sm={12} md={12} lg={7}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className=' text-justify'>
            ※　(基本分单価や他の加算により配置する調理員等が兼務している場合)
          </Typography>
        </Grid>
      </Grid>
      <Grid container className='pt-4 ' justifyContent="start" sx={{ ml: { xs: 1, sm: 4, md: 4, lg: 3 } }}>
        <Grid item xs={12} sm={12} md={12} lg={7}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className=' text-justify'>
            C:　【嘱託】上記以外の場合(嘱託、外部委等)
          </Typography>
        </Grid>
      </Grid>

      <Grid container className=' pt-5 pl-10' justifyContent="center" >
        <Grid item xs={12} sm={12} md={12} lg={12} className='pt-2 ' >
          <Typography
            component="div"
            sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, fontWeight: 'bold' }}
            className='flex justify-start'>
            【対象栄養士について記入してくださ】
          </Typography>
        </Grid>
      </Grid>
      <Grid container className=' pt-5' justifyContent="start" >
        <Grid item xs={12} sm={12} md={12} lg={5} className='pt-2 ' sx={{ marginLeft: { xs: 1, sm: 1, md: 1, lg: 12 } }}>
          <Typography
            component="div"
            sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, fontWeight: 'bold' }}
            className='flex justify-start'>
            対象栄養士氏名:
          </Typography>
          <TextField
            className='w-full'
            label=""
            id="input"
            type="text"
            size='small'
            sx={{
              backgroundColor: "white",
              marginLeft: { xs: 1, sm: 1, md: -3, lg: -1 }
            }}
          />
        </Grid>
      </Grid>

      <Grid container className=' pt-5' justifyContent="start" >
        <Grid item xs={12} sm={12} md={12} lg={5} className='pt-2 ' sx={{ marginLeft: { xs: 1, sm: 1, md: 1, lg: 12 } }}>
          <Typography
            component="div"
            sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, fontWeight: 'bold' }}
            className='flex justify-start'>
            栄養士配置区分:
          </Typography>
          <FormControl size="small" fullWidth>
            <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={1}>直接雇用(人材派遣を含む) (A)</MenuItem>
              <MenuItem value={2}>直接雇用(人材派遣を含む) (B)</MenuItem>
              <MenuItem value={3}>嘱託(外部委託) (C)</MenuItem>
              <MenuItem value={4}>法人本部で雇用(同一法人内の他施設勤務を含む) (A)</MenuItem>
              <MenuItem value={4}>その他(具体的に記入↓)</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      <Grid container className=' pt-5' justifyContent="start" >
        <Grid item xs={12} sm={12} md={12} lg={5} className='pt-2 ' sx={{ marginLeft: { xs: 1, sm: 1, md: 1, lg: 12 } }}>
          <Typography
            component="div"
            sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, fontWeight: 'bold' }}
            className='flex justify-start'>
            当該栄養士による指導期間(予定):
          </Typography>
          <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 0 }} className='pt-3 pl-3' >
            <Grid item xs={12} sm={6} md={6} lg={6} sx={{ marginLeft: { xs: 0, sm: -0.5, md: 0, lg: -5 } }} className='scale-75' >
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DatePicker']}>
                  <DatePicker label="Start date" sx={{ backgroundColor: "white" }} />
                </DemoContainer>
              </LocalizationProvider>
            </Grid>
           
            <Grid item xs={12} sm={6} md={6} lg={6} sx={{ marginLeft: { xs: 0, sm: -7.5, md: 0, lg: -6 }, marginTop: { xs: -4, sm: 0, md: 0 } }} className='scale-75' >
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DatePicker']}>
                  <DatePicker label="End date" sx={{ backgroundColor: "white" }} />
                </DemoContainer>
              </LocalizationProvider>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid container className=' pt-5' justifyContent="start" >
        <Grid item xs={12} sm={12} md={12} lg={5} className='pt-2 ' sx={{ marginLeft: { xs: 1, sm: 1, md: 1, lg: 12 } }}>
          <Typography
            component="div"
            sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, fontWeight: 'bold' }}
            className='flex justify-start'>
            業務内容:
          </Typography>
          <FormControl size="small" fullWidth>
            <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={1}>献立作成(施設・事業所職員への指導・助言を含む。)</MenuItem>
              <MenuItem value={2}>アレルギー・アトピー等への対応 (施設・事業所職員への指導・助言を含む。)</MenuItem>
              <MenuItem value={3}>食育活動の実施等 (活動内容を具体的に記入↓)</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      <Grid container className='pt-16' justifyContent="start">
        <Grid item xs={6} sm={3} md={3} lg={3} className=' '>
          <Button variant="contained" href="" size='small' sx={{ backgroundColor: "blue-" }}>
            <Typography style={{ color: 'white' }} className=''>
              Add Form
            </Typography>
          </Button>
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
