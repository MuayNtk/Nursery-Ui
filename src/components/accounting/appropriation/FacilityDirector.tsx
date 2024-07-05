import { Button, Divider, FormControlLabel, Grid, Radio, RadioGroup, Typography } from "@mui/material";

export default function FacilityDirector() {

  return (
    <>
      <Grid container className='h-14 pt-5' justifyContent="center" >
        <Grid item xs={12} sm={12} md={12} lg={12} className='pt-2 ' >
          <Typography
            component="div"
            sx={{ color: 'red', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, fontWeight: 'bold' }}
            className='flex justify-start'>
            個票5
          </Typography>
        </Grid>
      </Grid>


      <Grid container className=' pt-2' justifyContent="center" >
        <Grid item xs={12} sm={12} md={12} lg={12} className='pt-2 ' >
          <Typography
            component="div"
            sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, fontWeight: 'bold' }}
            className='flex justify-start'>
            9施設長を設置していない場合
          </Typography>
        </Grid>
      </Grid>
      <Grid container className='pt-8' justifyContent="start" sx={{}}>
        <Grid item xs={12} sm={12} md={9} lg={12}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className=' text-justify'>
            ※　下記要件の「すべて」を満たきない場合、減納開整されます。麻設長受件該当する」に ✔ 用をすること
          </Typography>
        </Grid>
      </Grid>

      {/* Start Text Center Content Grid */}
      <Grid container className='pt-1' justifyContent="start" sx={{ pl: { xs: 3, sm: 5, md: 10, lg: 4 }, pr: { xs: 3, sm: 5, md: 10, lg: 15 }, }}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-justify'>
            1)　従事経驗等
          </Typography>
        </Grid>
      </Grid>
      {/* End Text Center Content Grid */}
      <RadioGroup
        defaultValue=""
        aria-labelledby="demo-customized-radios"
        name="customized-radios"
      >
        <Grid container className='pt-2' justifyContent='start'>
          <Grid item xs={12} sm={12} md={8} lg={5}>
            <FormControlLabel value="1.児童福祉事業等の従事経驗2年未滿1" control={<Radio />} label="1.児童福祉事業等の従事経驗2年未滿1" />
          </Grid>
        </Grid>
        <Grid container className='pt-1' justifyContent='start' sx={{ml:{xs: 1, sm: 9.5, md:8.5, lg: 0.2}}}>
          <Grid item xs={12} sm={12} md={10} lg={10.4} >
            <FormControlLabel value="2.上記と同等以上の能力を有すると認められる者(公的機関等の実施する所長研修等を受講した者等)ではない" control={<Radio />} label="2.上記と同等以上の能力を有すると認められる者(公的機関等の実施する所長研修等を受講した者等)ではない" />
          </Grid>
        </Grid>
      </RadioGroup>

      {/* Start Text Center Content Grid */}
      <Grid container className='pt-1' justifyContent="start" sx={{ pl: { xs: 3, sm: 5, md: 10, lg: 3 }, pr: { xs: 3, sm: 5, md: 10, lg: 15 }, }}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-justify'>
            2)　専従
          </Typography>
        </Grid>
      </Grid>
      {/* End Text Center Content Grid */}
      <RadioGroup
        defaultValue=""
        aria-labelledby="demo-customized-radios"
        name="customized-radios"
      >
        <Grid container className='pt-2' justifyContent='start' sx={{ml:{xs: -12, sm: -11, md:-25.5, lg: 0}}}>
          <Grid item xs={12} sm={12} md={12} lg={3}>
            <FormControlLabel value="1　非專 * 2" control={<Radio />} label="1　非專 * 2" />
          </Grid>
        </Grid>
      </RadioGroup>

      {/* Start Text Center Content Grid */}
      <Grid container className='pt-1' justifyContent="start" sx={{ pl: { xs: 3, sm: 5, md: 10, lg: 3 }, pr: { xs: 3, sm: 5, md: 10, lg: 15 }, }}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-justify'>
            3)　委託費からの給与支出。
          </Typography>
        </Grid>
      </Grid>
      {/* End Text Center Content Grid */}
      <RadioGroup
        defaultValue=""
        aria-labelledby="demo-customized-radios"
        name="customized-radios"
      >
        <Grid container className='pt-2' justifyContent='start' sx={{ml:{xs: -14, sm: -14, md:-28, lg: 0}}}>
          <Grid item xs={12} sm={12} md={12} lg={2.6}>
            <FormControlLabel value="1　無" control={<Radio />} label="1　無" />
          </Grid>
        </Grid>
      </RadioGroup>
      <Divider className='pt-8'></Divider>

      <Grid container className='pt-8' justifyContent="start" sx={{}}>
        <Grid item xs={12} sm={12} md={12} lg={3.3}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='text-justify'>
            ※　1 児童福祉事業等に従事した者の例示
          </Typography>
        </Grid>
      </Grid>
      <Grid container className='pt-4 ' justifyContent="start" sx={{ml:{xs: 4, sm: 7.5, md:4, lg: 3}}}>
        <Grid item xs={12} sm={12} md={12} lg={10.8}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className=' text-justify'>
            児童福祉施設、幼稚園・小学校等における教諭、市町村長等の公的機関において児童福祉に関する事務を取り扱う部局、委員.
          </Typography>
        </Grid>
      </Grid>

     
      <Grid container className='pt-4 ' justifyContent="start" sx={{ml:{xs: 4, sm: 7.5, md:4, lg: 3}}}>
        <Grid item xs={12} sm={12} md={12} lg={10}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className=' text-justify'>
          児童委員の他、教育・保育施設又は地域型保育事業に移行した施設・事業所における移行前の認可外保育施設等。
          </Typography>
        </Grid>
      </Grid>

      <Grid container className='pt-4 ' justifyContent="start" sx={{}}>
        <Grid item xs={12} sm={12} md={12} lg={7.5}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className=' text-justify'>
          ※　2 以上の施設若しくは他の事業と兼務し、所長として職務を行っていない者は非専従とみなす。
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
