import { Divider, Grid, InputAdornment, TextField, Typography } from "@mui/material";


export default function WageImprovementOne() {

  return (
    <>

      {/* Start 令和5年度賃金改善計画書(処遇改善等加算) Grid */}
      <Grid container className='pt-3' justifyContent="start">
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography fontWeight="bold" sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-start'>
            令和 5 年度賃金改善計画書 (処遇改善等加算)
          </Typography>
        </Grid>
      </Grid>
      {/* End 令和5年度賃金改善計画書(処遇改善等加算) Grid */}

      <Divider className="pt-7" />

      {/* Start 園番号 Grid */}
      <Grid container spacing={2} className='pt-7'>
        <Grid item xs={4.5} sm={4} md={4} lg={3}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
            園番号 :
          </Typography>
        </Grid>
        <Grid item xs={6} sm={5} md={4} lg={3}>
          <TextField id="school-number" name="school-number" type="text" size="small" fullWidth sx={{ backgroundColor: 'white' }} />
        </Grid>
      </Grid>
      {/* End 園番号 Grid */}

      {/* Start 市町村名 Grid */}
      <Grid container spacing={2} className='pt-4'>
        <Grid item xs={4.5} sm={4} md={4} lg={3}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
            市町村名 :
          </Typography>
        </Grid>
        <Grid item xs={6} sm={5} md={4} lg={3}>
          <TextField id="city-name" name="city-name" type="text" size="small" fullWidth sx={{ backgroundColor: '#F5F5F5' }} InputProps={{ readOnly: true, }} />
        </Grid>
      </Grid>
      {/* End 市町村名 Grid */}

      {/* Start 施設・事業所名 Grid */}
      <Grid container spacing={2} className='pt-4'>
        <Grid item xs={4.5} sm={4} md={4} lg={3}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
            施設・事業所名 :
          </Typography>
        </Grid>
        <Grid item xs={6} sm={5} md={4} lg={3}>
          <TextField id="business-name" name="business-name" type="text" size="small" fullWidth sx={{ backgroundColor: 'white' }} />
        </Grid>
      </Grid>
      {/* End 施設・事業所名 Grid */}

      {/* Start 施設・事業所類型 Grid */}
      <Grid container spacing={2} className='pt-4'>
        <Grid item xs={4.5} sm={4} md={4} lg={3}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
            施設・事業所類型 :
          </Typography>
        </Grid>
        <Grid item xs={6} sm={5} md={4} lg={3}>
          <TextField id="business-type" name="business-type" type="text" size="small" fullWidth sx={{ backgroundColor: 'white' }} />
        </Grid>
      </Grid>
      {/* End 施設・事業所類型 Grid */}

      {/* Start 法人名・代表者職名 Grid */}
      <Grid container spacing={2} className='pt-4'>
        <Grid item xs={4.5} sm={4} md={4} lg={3}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
            法人名・代表者職名 :
          </Typography>
        </Grid>
        <Grid item xs={6} sm={5} md={4} lg={3}>
          <TextField id="representative-title" name="representative-title" type="text" size="small" fullWidth sx={{ backgroundColor: 'white' }} />
        </Grid>
      </Grid>
      {/* End 法人名・代表者職名 Grid */}

      {/* Start 担当者職名 Grid */}
      <Grid container spacing={2} className='pt-4'>
        <Grid item xs={4.5} sm={4} md={4} lg={3}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
            担当者職名 :
          </Typography>
        </Grid>
        <Grid item xs={6} sm={5} md={4} lg={3}>
          <TextField id="person-in-charge" name="person-in-charge" type="text" size="small" fullWidth sx={{ backgroundColor: 'white' }} />
        </Grid>
      </Grid>
      {/* End 担当者職名 Grid */}

      {/* Start 電話番号 Grid */}
      <Grid container spacing={2} className='pt-4'>
        <Grid item xs={4.5} sm={4} md={4} lg={3}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
            電話番号 :
          </Typography>
        </Grid>
        <Grid item xs={6} sm={5} md={4} lg={3}>
          <TextField id="telephone-number" name="telephone-number" type="text" size="small" fullWidth sx={{ backgroundColor: 'white' }} />
        </Grid>
      </Grid>
      {/* End 電話番号 Grid */}

      {/* Start 基準年度 Grid */}
      <Grid container spacing={2} className='pt-4'>
        <Grid item xs={4.5} sm={4} md={4} lg={3}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
            基準年度 :
          </Typography>
        </Grid>
        <Grid item xs={6} sm={5} md={4} lg={3}>
          <TextField id="base-year" name="base-year" type="text" size="small" fullWidth sx={{ backgroundColor: 'white' }} />
        </Grid>
      </Grid>
      {/* End 基準年度 Grid */}

      {/* Start 下記について、すべての職員に対し、周知をした上で、提出していることを証明いたします。 Grid */}
      <Grid container className='pt-5' justifyContent="start">
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-start'>
            下記について、すべての職員に対し、周知をした上で、提出していることを証明いたします。
          </Typography>
        </Grid>
      </Grid>
      {/* End 下記について、すべての職員に対し、周知をした上で、提出していることを証明いたします。 Grid */}

      <Divider className="pt-7" />

      {/* Start (1) 加算見込額 Grid */}
      <Grid container className='pt-3' justifyContent="start">
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography fontWeight="bold" sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-start'>
            (1) 加算見込額
          </Typography>
        </Grid>
      </Grid>
      {/* End (1) 加算見込額 Grid */}

      {/* Start ① 加算I新規事由 Grid */}
      <Grid container spacing={2} className='pt-4'>
        <Grid item xs={4.5} sm={4} md={4} lg={3}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
            ① 加算I新規事由 :
          </Typography>
        </Grid>
        <Grid item xs={6} sm={5} md={4} lg={3}>
          <TextField id="addition-new-reason" name="addition-new-reason" type="text" size="small" fullWidth sx={{ backgroundColor: '#F5F5F5' }} InputProps={{ readOnly: true, }} />
        </Grid>
      </Grid>
      {/* End ① 加算I新規事由 Grid */}

      {/* Start ② 加算率 Grid */}
      <Grid container spacing={2} className='pt-3'>
        <Grid item xs={4.5} sm={4} md={4} lg={3}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
            ② 加算率 :
          </Typography>
        </Grid>
        <Grid item xs={5} sm={4} md={3} lg={2}>
          <TextField
            id="addition-rate"
            name="addition-rate"
            type="text" size="small"
            fullWidth
            sx={{ backgroundColor: 'white' }}
            InputProps={{
              endAdornment: <InputAdornment position="end">%</InputAdornment>,
            }}
          />
        </Grid>
      </Grid>
      {/* End ② 加算率 Grid */}

      {/* Start ③ 加算1新規事由に係る加算率(※1) Grid */}
      <Grid container spacing={2} className='pt-3'>
        <Grid item xs={4.5} sm={4} md={4} lg={3}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
            ③ 加算1新規事由に係る加算率 (※1) :
          </Typography>
        </Grid>
        <Grid item xs={5} sm={4} md={3} lg={2}>
          <TextField
            id="school-number"
            name="school-number"
            type="text" size="small"
            fullWidth
            sx={{ backgroundColor: 'white' }}
            InputProps={{
              endAdornment: <InputAdornment position="end">%</InputAdornment>,
            }}
          />
        </Grid>
      </Grid>
      {/* End ③ 加算1新規事由に係る加算率(※1) Grid */}

      {/* Start ④ 加算見込額(千円未満の端数は切り捨て)(※2) Grid */}
      <Grid container spacing={2} className='pt-3'>
        <Grid item xs={4.5} sm={4} md={4} lg={3}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
            ④ 加算見込額(千円未満の端数は切り捨て) (※2) :
          </Typography>
        </Grid>
        <Grid item xs={5} sm={4} md={3} lg={2}>
          <TextField
            id="school-number"
            name="school-number"
            type="text" size="small"
            fullWidth
            sx={{ backgroundColor: 'white' }}
            InputProps={{
              endAdornment: <InputAdornment position="end">円</InputAdornment>,
            }}
          />
        </Grid>
      </Grid>
      {/* End ④ 加算見込額(千円未満の端数は切り捨て)(※2) Grid */}

      {/* Start ⑤ 特定加算見込額(千円未満の端数は切り捨て)(※2) Grid */}
      <Grid container spacing={2}>
        <Grid item xs={4.5} sm={4} md={4} lg={3}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
            ⑤ 特定加算見込額(千円未満の端数は切り 捨て)(※2) :
          </Typography>
        </Grid>
        <Grid item xs={5} sm={4} md={3} lg={2}>
          <TextField
            id="school-number"
            name="school-number"
            type="text" size="small"
            fullWidth
            sx={{ backgroundColor: 'white' }}
            InputProps={{
              endAdornment: <InputAdornment position="end">円</InputAdornment>,
            }}
          />
        </Grid>
      </Grid>
      {/* End ⑤ 特定加算見込額(千円未満の端数は切り捨て)(※2) Grid */}

      {/* Start ⑥ 賃金改善実施期間 Grid */}
      <Grid container spacing={2} className='pt-1'>
        <Grid item xs={4.5} sm={4} md={4} lg={3}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
            ⑥ 賃金改善実施期間 :
          </Typography>
        </Grid>
        <Grid item xs={6} sm={5} md={4} lg={3}>
          <TextField id="city-name" name="city-name" type="text" size="small" fullWidth sx={{ backgroundColor: '#F5F5F5' }} InputProps={{ readOnly: true, }} />
        </Grid>
      </Grid>
      {/* End ⑥ 賃金改善実施期間 Grid */}

      {/* Start ※1「施設型給付費等に係る処遇改善等加算について」(令和5年6月7日 こ成保39、5文科初第591号)第4の2(1)ケ参照のこと。 Grid */}
      <Grid container className='pt-5' justifyContent="start">
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-start'>
            ※ 1「施設型給付費等に係る処遇改善等加算について」(令和5年6月7日 こ成保39、5文科初第591号)第4の2(1)ケ参照のこと。
          </Typography>
        </Grid>
      </Grid>
      {/* End ※1「施設型給付費等に係る処遇改善等加算について」(令和5年6月7日 こ成保39、5文科初第591号)第4の2(1)ケ参照のこと。 Grid */}

      {/* Start ※2施設・事業所間で加算額の一部の配分を調整する場合の Grid */}
      <Grid container className='pt-2' justifyContent="start">
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-justify'>
            ※ 2 施設・事業所間で加算額の一部の配分を調整する場合の「加算見込額」及び「特定加算見込額」については、調整による加算額の減を反映した(加算見込額
            にあっては(3)の額を減じ、(3)の額を加えた後の、特定加算見込額にあっては(3)の額を減じ、(3)の額を加えた後の)金額を記入すること。
          </Typography>
        </Grid>
      </Grid>
      {/* End ※2施設・事業所間で加算額の一部の配分を調整する場合の Grid */}

      <Divider className="pt-7" />

      {/* Start (2) 賃金改善等見込総額 Grid */}
      <Grid container className='pt-3' justifyContent="start">
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography fontWeight="bold" sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-start'>
            (2) 賃金改善等見込総額
          </Typography>
        </Grid>
      </Grid>
      {/* End (2) 賃金改善等見込総額 Grid */}

      {/* Start ①賃金改善等見込額(②+⑪)(千円未満の端数は切り捨て) Grid */}
      <Grid container spacing={2} className="pt-3">
        <Grid item xs={4.5} sm={4} md={4} lg={3}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
            ① 賃金改善等見込額 (② + ⑪) (千円未満の端数は切り捨て) :
          </Typography>
        </Grid>
        <Grid item xs={5} sm={4} md={3} lg={2}>
          <TextField
            id="school-number"
            name="school-number"
            type="text" size="small"
            fullWidth
            sx={{ backgroundColor: 'white' }}
            InputProps={{
              endAdornment: <InputAdornment position="end">円</InputAdornment>,
            }}
          />
        </Grid>
      </Grid>
      {/* End ①賃金改善等見込額(②+⑪)(千円未満の端数は切り捨て) Grid */}

      {/* Start ② 賃金改善見込総額(③ - ④  - ⑤ - ⑥ - ⑦) Grid */}
      <Grid container spacing={2}>
        <Grid item xs={4.5} sm={4} md={4} lg={3}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
            ② 賃金改善見込総額( ③ - ④  - ⑤ - ⑥ - ⑦ ) :
          </Typography>
        </Grid>
        <Grid item xs={5} sm={4} md={3} lg={2}>
          <TextField
            id="school-number"
            name="school-number"
            type="text" size="small"
            fullWidth
            sx={{ backgroundColor: 'white' }}
            InputProps={{
              endAdornment: <InputAdornment position="end">円</InputAdornment>,
            }}
          />
        </Grid>
      </Grid>
      {/* End ② 賃金改善見込総額(③ - ④  - ⑤ - ⑥ - ⑦) Grid */}

      {/* Start ③ 支払賃金 Grid */}
      <Grid container spacing={2} >
        <Grid item xs={4.5} sm={4} md={4} lg={3}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
            ③ 支払賃金 :
          </Typography>
        </Grid>
        <Grid item xs={5} sm={4} md={3} lg={2}>
          <TextField
            id="school-number"
            name="school-number"
            type="text" size="small"
            fullWidth
            sx={{ backgroundColor: 'white' }}
            InputProps={{
              endAdornment: <InputAdornment position="end">円</InputAdornment>,
            }}
          />
        </Grid>
      </Grid>
      {/* End ③ 支払賃金 Grid */}

      {/* Start ④③のうち、加算前年度の加算残額に係る支払賃金 Grid */}
      <Grid container spacing={2} className="pt-3">
        <Grid item xs={4.5} sm={4} md={4} lg={3}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
            ④③のうち、加算前年度の加算残額に係る支払賃金 :
          </Typography>
        </Grid>
        <Grid item xs={5} sm={4} md={3} lg={2}>
          <TextField
            id="school-number"
            name="school-number"
            type="text" size="small"
            fullWidth
            sx={{ backgroundColor: 'white' }}
            InputProps={{
              endAdornment: <InputAdornment position="end">円</InputAdornment>,
            }}
          />
        </Grid>
      </Grid>
      {/* End ④③のうち、加算前年度の加算残額に係る支払賃金 Grid */}

      {/* Start ⑤③のうち、加算の新規事由による賃金改善額 Grid */}
      <Grid container spacing={2} >
        <Grid item xs={4.5} sm={4} md={4} lg={3}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
            ⑤③のうち、加算IIの新規事由による賃金改善額 :
          </Typography>
        </Grid>
        <Grid item xs={5} sm={4} md={3} lg={2}>
          <TextField
            id="school-number"
            name="school-number"
            type="text" size="small"
            fullWidth
            sx={{ backgroundColor: 'white' }}
            InputProps={{
              endAdornment: <InputAdornment position="end">円</InputAdornment>,
            }}
          />
        </Grid>
      </Grid>
      {/* End ⑤③のうち、加算の新規事由による賃金改善額 Grid */}

      {/* Start ⑥③のうち、加算血による賃金改善額 Grid */}
      <Grid container spacing={2}>
        <Grid item xs={4.5} sm={4} md={4} lg={3}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
            ⑥③のうち、加算IIIによる賃金改善額 :
          </Typography>
        </Grid>
        <Grid item xs={5} sm={4} md={3} lg={2}>
          <TextField
            id="school-number"
            name="school-number"
            type="text" size="small"
            fullWidth
            sx={{ backgroundColor: 'white' }}
            InputProps={{
              endAdornment: <InputAdornment position="end">円</InputAdornment>,
            }}
          />
        </Grid>
      </Grid>
      {/* End ⑥③のうち、加算血による賃金改善額 Grid */}

      {/* Start ⑦起点賃金水準(⑧ + ⑨ - ⑩) Grid */}
      <Grid container spacing={2} className="pt-3">
        <Grid item xs={4.5} sm={4} md={4} lg={3}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
            ⑦ 起点賃金水準(⑧ + ⑨ - ⑩) :
          </Typography>
        </Grid>
        <Grid item xs={5} sm={4} md={3} lg={2}>
          <TextField
            id="school-number"
            name="school-number"
            type="text" size="small"
            fullWidth
            sx={{ backgroundColor: 'white' }}
            InputProps={{
              endAdornment: <InputAdornment position="end">円</InputAdornment>,
            }}
          />
        </Grid>
      </Grid>
      {/* End ⑦起点賃金水準(⑧ + ⑨ - ⑩) Grid */}

      {/* Start ⑧基準年度の賃金水準(当該年度に係る加算残額を含む) Grid */}
      <Grid container spacing={2} className="pt-3">
        <Grid item xs={4.5} sm={4} md={4} lg={3}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
            ⑧ 基準年度の賃金水準(当該年度に係る加算残額を含む) :
          </Typography>
        </Grid>
        <Grid item xs={5} sm={4} md={3} lg={2}>
          <TextField
            id="school-number"
            name="school-number"
            type="text" size="small"
            fullWidth
            sx={{ backgroundColor: 'white' }}
            InputProps={{
              endAdornment: <InputAdornment position="end">円</InputAdornment>,
            }}
          />
        </Grid>
      </Grid>
      {/* End ⑧基準年度の賃金水準(当該年度に係る加算残額を含む) Grid */}

      {/* Start ⑨基準翌年度から加算当年度までの公定価格における人件費の改定分 Grid */}
      <Grid container spacing={2}>
        <Grid item xs={4.5} sm={4} md={4} lg={3}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
            ⑨ 基準翌年度から加算当年度までの公定価格における人件費の改定分 :
          </Typography>
        </Grid>
        <Grid item xs={5} sm={4} md={3} lg={2}>
          <TextField
            id="school-number"
            name="school-number"
            type="text" size="small"
            fullWidth
            sx={{ backgroundColor: 'white' }}
            InputProps={{
              endAdornment: <InputAdornment position="end">円</InputAdornment>,
            }}
          />
        </Grid>
      </Grid>
      {/* End ⑨基準翌年度から加算当年度までの公定価格における人件費の改定分 Grid */}

      {/* Start ⑩令和4年度の加算血等による賃金改善額 Grid */}
      <Grid container spacing={2}>
        <Grid item xs={4.5} sm={4} md={4} lg={3}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
            ⑩ 令和4年度の加算血等による賃金改善額 :
          </Typography>
        </Grid>
        <Grid item xs={5} sm={4} md={3} lg={2}>
          <TextField
            id="school-number"
            name="school-number"
            type="text" size="small"
            fullWidth
            sx={{ backgroundColor: 'white' }}
            InputProps={{
              endAdornment: <InputAdornment position="end">円</InputAdornment>,
            }}
          />
        </Grid>
      </Grid>
      {/* End ⑩令和4年度の加算血等による賃金改善額 Grid */}

      {/* Start ⑪事業主負担增加見込額 Grid */}
      <Grid container spacing={2}>
        <Grid item xs={4.5} sm={4} md={4} lg={3}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
            ⑪ 事業主負担增加見込額 :
          </Typography>
        </Grid>
        <Grid item xs={5} sm={4} md={3} lg={2}>
          <TextField
            id="school-number"
            name="school-number"
            type="text" size="small"
            fullWidth
            sx={{ backgroundColor: 'white' }}
            InputProps={{
              endAdornment: <InputAdornment position="end">円</InputAdornment>,
            }}
          />
        </Grid>
      </Grid>
      {/* End ⑪事業主負担增加見込額 Grid */}

      {/* Start 令和4年度における法定福利費等の事業主負担分の総額 Grid */}
      <Grid container spacing={2} className="pt-3">
        <Grid item xs={4.5} sm={4} md={4} lg={3}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
            令和4年度における法定福利費等の事業主負担分の総額 :
          </Typography>
        </Grid>
        <Grid item xs={5} sm={4} md={3} lg={2}>
          <TextField
            id="school-number"
            name="school-number"
            type="text" size="small"
            fullWidth
            sx={{ backgroundColor: 'white' }}
            InputProps={{
              endAdornment: <InputAdornment position="end">円</InputAdornment>,
            }}
          />
        </Grid>
      </Grid>
      {/* End 令和4年度における法定福利費等の事業主負担分の総額 Grid */}

      {/* Start 令和4年度における賃金の総額 Grid */}
      <Grid container spacing={2}>
        <Grid item xs={4.5} sm={4} md={4} lg={3}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
            令和4年度における賃金の総額 :
          </Typography>
        </Grid>
        <Grid item xs={5} sm={4} md={3} lg={2}>
          <TextField
            id="school-number"
            name="school-number"
            type="text" size="small"
            fullWidth
            sx={{ backgroundColor: 'white' }}
            InputProps={{
              endAdornment: <InputAdornment position="end">円</InputAdornment>,
            }}
          />
        </Grid>
      </Grid>
      {/* End 令和4年度における賃金の総額 Grid */}

      <Divider className="pt-7" />

      {/* Start (3) 他施設・事業所への配分等について Grid */}
      <Grid container className='pt-3' justifyContent="start">
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography fontWeight="bold" sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-start'>
            (3) 他施設・事業所への配分等について
          </Typography>
        </Grid>
      </Grid>
      {/* End (3) 他施設・事業所への配分等について Grid */}

      {/* Start ①拠出見込額 Grid */}
      <Grid container spacing={2} className="pt-3">
        <Grid item xs={4.5} sm={4} md={4} lg={3}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
            ① 拠出見込額 :
          </Typography>
        </Grid>
        <Grid item xs={5} sm={4} md={3} lg={2}>
          <TextField
            id="school-number"
            name="school-number"
            type="text" size="small"
            fullWidth
            sx={{ backgroundColor: 'white' }}
            InputProps={{
              endAdornment: <InputAdornment position="end">円</InputAdornment>,
            }}
          />
        </Grid>
      </Grid>
      {/* End ①拠出見込額 Grid */}

      {/* Start ②うち基準年度からの増減分 Grid */}
      <Grid container spacing={2} className="pt-3">
        <Grid item xs={4.5} sm={4} md={4} lg={3}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
            ② うち基準年度からの増減分 :
          </Typography>
        </Grid>
        <Grid item xs={5} sm={4} md={3} lg={2}>
          <TextField
            id="school-number"
            name="school-number"
            type="text" size="small"
            fullWidth
            sx={{ backgroundColor: 'white' }}
            InputProps={{
              endAdornment: <InputAdornment position="end">円</InputAdornment>,
            }}
          />
        </Grid>
      </Grid>
      {/* End ②うち基準年度からの増減分 Grid */}

      {/* Start ➂受入見込額 Grid */}
      <Grid container spacing={2} className="pt-3">
        <Grid item xs={4.5} sm={4} md={4} lg={3}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
            ➂ 受入見込額 :
          </Typography>
        </Grid>
        <Grid item xs={5} sm={4} md={3} lg={2}>
          <TextField
            id="school-number"
            name="school-number"
            type="text" size="small"
            fullWidth
            sx={{ backgroundColor: 'white' }}
            InputProps={{
              endAdornment: <InputAdornment position="end">円</InputAdornment>,
            }}
          />
        </Grid>
      </Grid>
      {/* End ➂受入見込額 Grid */}

      {/* Start ④うち基準年度からの増減分 Grid */}
      <Grid container spacing={2} className="pt-3">
        <Grid item xs={4.5} sm={4} md={4} lg={3}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
            ④ うち基準年度からの増減分 :
          </Typography>
        </Grid>
        <Grid item xs={5} sm={4} md={3} lg={2}>
          <TextField
            id="school-number"
            name="school-number"
            type="text" size="small"
            fullWidth
            sx={{ backgroundColor: 'white' }}
            InputProps={{
              endAdornment: <InputAdornment position="end">円</InputAdornment>,
            }}
          />
        </Grid>
      </Grid>
      {/* End ④うち基準年度からの増減分 Grid */}

      {/* Start ※別紙様式5別添2の「同一事業者内における拠出見込額・受入見込額一覧表」を添付すること。 Grid */}
      <Grid container className='pt-4' justifyContent="start">
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-justify'>
            ※別紙様式5別添2の「同一事業者内における拠出見込額・受入見込額一覧表」を添付すること。
          </Typography>
        </Grid>
      </Grid>
      {/* End ※別紙様式5別添2の「同一事業者内における拠出見込額・受入見込額一覧表」を添付すること。 Grid */}

      <Divider className="pt-7" />

      {/* Start ※ 確認欄(干円未満の端数は切り捨て) Grid */}
      <Grid container className='pt-3' justifyContent="start">
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography fontWeight="bold" sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-start'>
            ※ 確認欄 (干円未満の端数は切り捨て)
          </Typography>
        </Grid>
      </Grid>
      {/* End ※ 確認欄(干円未満の端数は切り捨て) Grid */}

      {/* Start <加算 I 新規事由がある場合>  (以下のBの額がAの額以上であること) Grid */}
      <Grid container className='pt-4' justifyContent="start">
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-justify'>
            [ 加算 I 新規事由がある場合 ] (以下のBの額がAの額以上であること)
          </Typography>
        </Grid>
      </Grid>
      {/* End <加算 I 新規事由がある場合>  (以下のBの額がAの額以上であること) Grid */}

      {/* Start A 特定加算見込額【(1) ⑤】 Grid */}
      <Grid container spacing={2} className="pt-3">
        <Grid item xs={4.5} sm={4} md={4} lg={3}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
            A 特定加算見込額【(1) ⑤】 :
          </Typography>
        </Grid>
        <Grid item xs={5} sm={4} md={3} lg={2}>
          <TextField
            id="school-number"
            name="school-number"
            type="text" size="small"
            fullWidth
            sx={{ backgroundColor: '#F5F5F5' }}
            InputProps={{
              readOnly: true,
              endAdornment: <InputAdornment position="end">円</InputAdornment>,
            }}
          />
        </Grid>
      </Grid>
      {/* End A 特定加算見込額【(1) ⑤】 Grid */}

      {/* Start B 賃金改善等見込額【(2) ①】 Grid */}
      <Grid container spacing={2} className="pt-3">
        <Grid item xs={4.5} sm={4} md={4} lg={3}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
            B 賃金改善等見込額【(2) ①】 :
          </Typography>
        </Grid>
        <Grid item xs={5} sm={4} md={3} lg={2}>
          <TextField
            id="school-number"
            name="school-number"
            type="text" size="small"
            fullWidth
            sx={{ backgroundColor: '#F5F5F5' }}
            InputProps={{
              readOnly: true,
              endAdornment: <InputAdornment position="end">円</InputAdornment>,
            }}
          />
        </Grid>
      </Grid>
      {/* End B 賃金改善等見込額【(2) ①】 Grid */}

      {/* Start [ 加算 I 新規事由がない場合 ] (以下のBの額がAの額以上であること) Grid */}
      <Grid container className='pt-3' justifyContent="start">
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-justify'>
            [ 加算 I 新規事由がない場合 ] (以下のBの額がAの額以上であること)
          </Typography>
        </Grid>
      </Grid>
      {/* End [ 加算 I 新規事由がない場合 ] (以下のBの額がAの額以上であること) Grid */}

      {/* Start A 加算前年度の賃金水準(起点賃金水準)【(2 )⑦ - (3) ② + (3) ④ (※)】 Grid */}
      <Grid container spacing={2} className="pt-3">
        <Grid item xs={4.5} sm={4} md={4} lg={3}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
            A 加算前年度の賃金水準(起点賃金水準)【(2 )⑦ - (3) ② + (3) ④ (※)】 :
          </Typography>
        </Grid>
        <Grid item xs={5} sm={4} md={3} lg={2}>
          <TextField
            id="school-number"
            name="school-number"
            type="text" size="small"
            fullWidth
            sx={{ backgroundColor: 'white' }}
            InputProps={{
              endAdornment: <InputAdornment position="end">円</InputAdornment>,
            }}
          />
        </Grid>
      </Grid>
      {/* End A 加算前年度の賃金水準(起点賃金水準)【(2) ⑦ - (3) ② + (3) ④ (※)】 Grid */}

      {/* Start B 賃金見込総額【(2) ③ - (2) ④ - (2) ⑤ - (2) ⑥ 】 Grid */}
      <Grid container spacing={2} className="pt-3">
        <Grid item xs={4.5} sm={4} md={4} lg={3}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
            B 賃金見込総額【(2) ③ - (2) ④ - (2) ⑤ - (2) ⑥ 】 :
          </Typography>
        </Grid>
        <Grid item xs={5} sm={4} md={3} lg={2}>
          <TextField
            id="school-number"
            name="school-number"
            type="text" size="small"
            fullWidth
            sx={{ backgroundColor: 'white' }}
            InputProps={{
              endAdornment: <InputAdornment position="end">円</InputAdornment>,
            }}
          />
        </Grid>
      </Grid>
      {/* End B 賃金見込総額【(2) ③ - (2) ④ - (2) ⑤ - (2) ⑥ 】 Grid */}

      {/* Start ※(3)〇及び(3)から法定福利費等の事業主負担分を除いたうえで算出すること。 Grid */}
      <Grid container className='pt-3' justifyContent="start">
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-justify'>
            ※(3)〇及び(3)から法定福利費等の事業主負担分を除いたうえで算出すること。
          </Typography>
        </Grid>
      </Grid>
      {/* End ※(3)〇及び(3)から法定福利費等の事業主負担分を除いたうえで算出すること。 Grid */}


    </>
  );
}
