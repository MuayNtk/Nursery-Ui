import { Button,  FormControlLabel, Grid,  Radio, RadioGroup, Typography, } from '@mui/material'

export default function RentAddition() {
  
      return (
        <>
           <Grid container className='h-14 pt-5' justifyContent="center" >
        <Grid item xs={12} sm={12} md={12} lg={12} className='pt-2 ' >
          <Typography
            component="div"
            sx={{ color: 'red', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, fontWeight: 'bold' }}
            className='flex justify-start'>
            個票3
          </Typography>
        </Grid>
      </Grid>
     

      <Grid container className=' pt-2' justifyContent="center" >
        <Grid item xs={12} sm={12} md={12} lg={12} className='pt-2 ' >
          <Typography
            component="div"
            sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, fontWeight: 'bold' }}
            className='flex justify-start'>
            5賃借料加算(1〜4のすべてが「適」となる場合に加算適用)
          </Typography>
        </Grid>
      </Grid>
      <Grid container className='pt-5' justifyContent="start" sx={{}}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className=' text-justify'>
          ※　加算要件該当する適・否にレ印をすること(1〜4の要件全てが「適」に該当する場合に加算)
          </Typography>
        </Grid>
      </Grid>

       {/* Start Text Center Content Grid */}
       <Grid container className='pt-1' justifyContent="start" sx={{ pl: { xs: 3, sm: 5, md: 10, lg: 3 }, pr: { xs: 3, sm: 5, md: 10, lg: 15 }, }}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-justify'>
          1)　保育所の用に供する建物が賃貸物件である。(事業所の一部が自己所有の場合は、賃貸による建物の延べ面積が事業所全体
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
        <Grid item xs={3.5} sm={3.5} md={3} lg={1.7}>
          <FormControlLabel value="2　否" control={<Radio />} label="2　否" />
        </Grid>
      </Grid>
      </RadioGroup>

      {/* Start Text Center Content Grid */}
      <Grid container className='pt-1' justifyContent="start" sx={{ pl: { xs: 3, sm: 5, md: 10, lg: 3 }, pr: { xs: 3, sm: 5, md: 10, lg: 15 }, }}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-justify'>
          2)　小規模保育事業の用に供する建物に対する賃借料が発生している。
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
        <Grid item xs={3.5} sm={3.5} md={3} lg={1.7}>
          <FormControlLabel value="2　否" control={<Radio />} label="2　否" />
        </Grid>
      </Grid>
      </RadioGroup>

      {/* Start Text Center Content Grid */}
      <Grid container className='pt-1' justifyContent="start" sx={{ pl: { xs: 3, sm: 5, md: 10, lg: 3 }, pr: { xs: 3, sm: 5, md: 10, lg: 15 }, }}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-justify'>
          3)　賃借料の国庫補助を受けた施設については、当該補助に係る残額が生じていない。
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
        <Grid item xs={3.5} sm={3.5} md={3} lg={1.7}>
          <FormControlLabel value="2　否" control={<Radio />} label="2　否" />
        </Grid>
      </Grid>
      </RadioGroup>

      {/* Start Text Center Content Grid */}
      <Grid container className='pt-1' justifyContent="start" sx={{ pl: { xs: 3, sm: 5, md: 10, lg: 3 }, pr: { xs: 3, sm: 5, md: 10, lg: 15 }, }}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-justify'>
          4)　減価償却費加算の対象となっていない。
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
        <Grid item xs={3.5} sm={3.5} md={3} lg={1.7}>
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
    