import { Button, Divider, FormControlLabel, Grid,  Radio, RadioGroup, Typography, } from '@mui/material'

export default function DepreciationExpenses() {

  return (
    <>
      <Grid container className='h-14 pt-5' justifyContent="center" >
        <Grid item xs={12} sm={12} md={12} lg={12} className='pt-2 ' >
          <Typography
            component="div"
            sx={{ color: 'red', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, fontWeight: 'bold' }}
            className='flex justify-start'>
            個票2
          </Typography>
        </Grid>
      </Grid>
     

      <Grid container className=' pt-2' justifyContent="center" >
        <Grid item xs={12} sm={12} md={12} lg={12} className='pt-2 ' >
          <Typography
            component="div"
            sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, fontWeight: 'bold' }}
            className='flex justify-start'>
            4減価償却費加(加算要件と加算要件の両方を満たした場合に加算適用)
          </Typography>
        </Grid>
      </Grid>
      <Grid container className='pt-5' justifyContent="start" sx={{}}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className=' text-justify'>
          ※　加算要件該当する適・否にレ印をすること(1〜3の「全て」が「適」となる必要あり)
          </Typography>
        </Grid>
      </Grid>

       {/* Start Text Center Content Grid */}
       <Grid container className='pt-1' justifyContent="start" sx={{ pl: { xs: 3, sm: 5, md: 10, lg: 3 }, pr: { xs: 3, sm: 5, md: 10, lg: 15 }, }}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-justify'>
          1)　保育所の用に供する建物が自己所有である。(事業所の一部が賃貸物件の場合は、自己所有の建物の延べ面積が事業所全体の延べ面積の50%以上であること。)
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
      <Grid container className='pt-1' justifyContent="start" sx={{ pl: { xs: 3, sm: 5, md: 10, lg: 3 }, pr: { xs: 3, sm: 5, md: 10, lg: 15 }, }}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-justify'>
          2)　建物を整備・改修又は取得する際に、建設資金又は購入資金が発生している。
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
      <Grid container className='pt-1' justifyContent="start" sx={{ pl: { xs: 3, sm: 5, md: 10, lg: 3 }, pr: { xs: 3, sm: 5, md: 10, lg: 15 }, }}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-justify'>
          3)　賃借料加算の対象となっていない。
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

      <Divider className='pt-8'></Divider>

      <Grid container className='pt-14' justifyContent="start" sx={{}}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className=' text-justify'>
          ※　加算要件該当する適・否にレ印をすること(1・2の「いずれか」が「適」となる必要あり)
          </Typography>
        </Grid>
      </Grid>

       {/* Start Text Center Content Grid */}
       <Grid container className='pt-1' justifyContent="start" sx={{ pl: { xs: 3, sm: 5, md: 10, lg: 3 }, pr: { xs: 3, sm: 5, md: 10, lg: 15 }, }}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-justify'>
          1)　建物の整備・改修に当たって、施設整備費又は改修費等の国庫補助金の交付を受けて建設・改修した建物について、整備後 一定年数が経過したものであり、次の①〜の「すべて」を満たす。
          </Typography>
        </Grid>
      </Grid>
      {/* End Text Center Content Grid */}

      {/* Start Text Center Content Grid */}
      <Grid container className='pt-1' justifyContent="start" sx={{ pl: { xs: 3, sm: 5, md: 10, lg: 13 }, pr: { xs: 3, sm: 5, md: 10, lg: 15 }, }}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-justify'>
          1.　老朽化等を理由として改修等が必要であったと市町村が認める場合
          </Typography>
        </Grid>
      </Grid>
      {/* End Text Center Content Grid */}

      {/* Start Text Center Content Grid */}
      <Grid container className='pt-1' justifyContent="start" sx={{ pl: { xs: 3, sm: 5, md: 10, lg: 13 }, pr: { xs: 3, sm: 5, md: 10, lg: 15 }, }}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-justify'>
          2.　当該改修等に当たって、国庫補助の交付を受けていない
          </Typography>
        </Grid>
      </Grid>
      {/* End Text Center Content Grid */}

      {/* Start Text Center Content Grid */}
      <Grid container className='pt-1' justifyContent="start" sx={{ pl: { xs: 3, sm: 5, md: 10, lg: 13 }, pr: { xs: 3, sm: 5, md: 10, lg: 15 }, }}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-justify'>
          3.　1事業所当たりの改修等に要した費用を2,000で除して得た値が、建物全体の延面積に2を乗じて得た値を上回る場合 で、 かつ、改修等に要した費用が1,000万円以上である
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
      <Grid container className='pt-1' justifyContent="start" sx={{ pl: { xs: 3, sm: 5, md: 10, lg: 3 }, pr: { xs: 3, sm: 5, md: 10, lg: 15 }, }}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-justify'>
          2)　建物の整備・改修に当たって、改修費等の国庫補助金の交付を受けていない。
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
