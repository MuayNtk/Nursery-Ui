import { Button, FormControlLabel, Grid, Radio, RadioGroup, Typography } from "@mui/material";

export default function AdditionalFees() {

  return (
    <>
      <Grid container className='h-14 pt-5' justifyContent="center" >
        <Grid item xs={12} sm={12} md={12} lg={12} className='pt-2 ' >
          <Typography
            component="div"
            sx={{ color: 'red', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, fontWeight: 'bold' }}
            className='flex justify-start'>
            個票12
          </Typography>
        </Grid>
      </Grid>


      <Grid container className=' pt-1' justifyContent="center" >
        <Grid item xs={12} sm={12} md={12} lg={12} className='pt-2 ' >
          <Typography
            component="div"
            sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, fontWeight: 'bold' }}
            className='flex justify-start'>
            17第三者評価受加算(3月加算)
          </Typography>
        </Grid>
      </Grid>
      <Grid container className='pt-4 ' justifyContent="start" >
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className=' text-justify'>
            ※　第三者評価の受審は5年に一度程度を想定しており、加算適用年度から5年度間は再度の加算適用はできません。
          </Typography>
        </Grid>
      </Grid>
      <Grid container className='pt-8 ' justifyContent="start" >
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className=' text-justify'>
            加算要件該当する適・否に ✔  印をすること(1・2の要件全てが「適」の場合に加算)
          </Typography>
        </Grid>
      </Grid>

      {/* Start Text Center Content Grid */}
      <Grid container className='pt-3' justifyContent="start" sx={{ pl: { xs: 3, sm: 5, md: 9, lg: 10 }, pr: { xs: 3, sm: 5, md: 10, lg: 15 }, }}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-justify'>
            1　「福祉サービス第三者評価基準ガイドライン」等に沿って、第三者評価を適切に実施することが可能であると市町村が認める第三者機
            関による評価(行政が委託等により民間機関に行わせるものを含む。)を受審。
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
            2　第三者機関による評価の受審結果をホームページ等により広く公表。
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

      <Grid container className='pt-10 ' justifyContent="start" >
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px', color:'#E5B70D'} }} className=' text-justify'>
            ※　評価機関との間の契約書等により、当年度に第三者評価の受審や結果の公表(評価機関からの評価結果の提示が翌年度になるため、結果の公表
            が翌年度になる場合を含む。)が行われることが確認できる場合は本加算の対象とします。その場合は、事後に受審や結果の公表が行われていること
            が確認できる資料等を市に提出してください。
          </Typography>
        </Grid>
      </Grid>

      <Grid container className='h-14 pt-5' justifyContent="center" >
        <Grid item xs={12} sm={12} md={12} lg={12} className='pt-2 ' >
          <Typography
            component="div"
            sx={{ color: 'red', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, fontWeight: 'bold' }}
            className='flex justify-start'>
            個票13
          </Typography>
        </Grid>
      </Grid>


      <Grid container className=' pt-1' justifyContent="center" >
        <Grid item xs={12} sm={12} md={12} lg={12} className='pt-2 ' >
          <Typography
            component="div"
            sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, fontWeight: 'bold' }}
            className='flex justify-start'>
            19小学校接続加算(3月加算)
          </Typography>
        </Grid>
      </Grid>

      <Grid container className=' pt-6' justifyContent="center" >
        <Grid item xs={12} sm={12} md={12} lg={12} className='pt-2 ' >
          <Typography
            component="div"
            sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 } }}
            className='flex justify-start'>
            加算要件該当する適・否に ✔ 印をすること
          </Typography>
        </Grid>
      </Grid>

      <Grid container className=' pt-0' justifyContent="center" >
        <Grid item xs={12} sm={12} md={12} lg={12} className='pt-0 ' >
          <Typography
            component="div"
            sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 } }}
            className='flex justify-start'>
            (1〜3の要件全てに該当する場合に加算)
          </Typography>
        </Grid>
      </Grid>

      <Grid container className=' pt-4' justifyContent="center" >
        <Grid item xs={12} sm={12} md={12} lg={12} className='pt-2 ' >
          <Typography
            component="div"
            sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 } }}
            className='flex justify-start'>
            加算要件該当する適・否に印をすること(1・2の要件全てが「適」の場合に加算)
          </Typography>
        </Grid>
      </Grid>
      
      {/* Start Text Center Content Grid */}
      <Grid container className='pt-3' justifyContent="start" sx={{ pl: { xs: 3, sm: 5, md: 9, lg: 10 }, pr: { xs: 3, sm: 5, md: 10, lg: 15 }, }}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-justify'>
          1　小学校との連携・接続に関する業務分掌を明確にしている。
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-justify pl-3'>
            例:　小学校との連絡調整を担当する先生が配置されている
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
          2　授業・行事、研究会・研修等の小学校との子ども及び教職員の交流活動を実施している。
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-justify pl-3'>
            例:　小学校との共同行事を行っている。
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
          3　小学校との接続を見通した教育課程を編成していること。なお、継続的な協議会の開催等により具体的な編成に向けた研究に着手してい
          ると認められる場合を含む。
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-justify pl-3'>
            例:　保幼小連絡会を開催している、小学校のカリキュラムを考慮した教育を行っているなど。
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
