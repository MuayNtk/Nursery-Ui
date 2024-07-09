import { Divider, Grid, InputAdornment, TextField, Typography } from "@mui/material";


export default function WageAdjustmentsThree() {

  return (
    <>

      {/* Start 令和5年度賃金改善計画書(处遇改善等加算I) Grid */}
      <Grid container className='pt-3' justifyContent="start">
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography fontWeight="bold" sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-start'>
            令和 5 年度賃金改善計画書 (处遇改善等加算I)
          </Typography>
        </Grid>
      </Grid>
      {/* End 令和5年度賃金改善計画書(处遇改善等加算I) Grid */}

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

      {/* Start (1) 賃金改善について Grid */}
      <Grid container className='pt-3' justifyContent="start">
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography fontWeight="bold" sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-start'>
            (1) 賃金改善について
          </Typography>
        </Grid>
      </Grid>
      {/* End (1) 賃金改善について Grid */}

      {/* Start 加算見込額 (※) (千円未満の端数は切り捨て) Grid */}
      <Grid container spacing={2} className='pt-3'>
        <Grid item xs={4.5} sm={4} md={4} lg={3}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
            加算見込額 (※) (千円未満の端数は切り捨て) :
          </Typography>
        </Grid>
        <Grid item xs={4.5} sm={3.5} md={2.5} lg={1.5}>
          <TextField
            id="addition-rate"
            name="addition-rate"
            type="text" size="small"
            fullWidth
            sx={{ backgroundColor: 'white' }}
          />
        </Grid>
      </Grid>
      {/* End 加算見込額 (※) (千円未満の端数は切り捨て) Grid */}

      {/* Start Grid */}
      <Grid container spacing={2}>
        <Grid item xs={4.5} sm={4} md={4} lg={3}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>

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
      {/* End Grid */}

      {/* Start 賃金改善期間 Grid */}
      <Grid container spacing={2} className='pt-3'>
        <Grid item xs={4.5} sm={4} md={4} lg={3}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
            賃金改善期間 :
          </Typography>
        </Grid>
        <Grid item xs={6} sm={5} md={4} lg={3}>
          <TextField id="city-name" name="city-name" type="text" size="small" fullWidth sx={{ backgroundColor: '#F5F5F5' }} InputProps={{ readOnly: true, }} />
        </Grid>
      </Grid>
      {/* End 賃金改善期間 Grid */}

      {/* Start ※施設・事業所間で加算額の一部の配分を調整する場合の「加算見込額」 Grid */}
      <Grid container className='pt-5' justifyContent="start">
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-start'>
            ※ 施設・事業所間で加算額の一部の配分を調整する場合の「加算見込額」については、調整による加算額の増減を反映した((3)の額を減じ、(3)の額を加えた後の)金額を記入すること。
          </Typography>
        </Grid>
      </Grid>
      {/* End ※施設・事業所間で加算額の一部の配分を調整する場合の「加算見込額」 Grid */}

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

      {/* Start ① 賃金改善等見込額( ② + ⑨ )(千未満の端数は切り捨て) Grid */}
      <Grid container spacing={2} className="pt-3">
        <Grid item xs={4.5} sm={4} md={4} lg={3}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
            ① 賃金改善等見込額( ② + ⑨ )(千円未満の端数は切り捨て) :
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
      {/* End ① 賃金改善等見込額( ② + ⑨ )(千未満の端数は切り捨て) Grid */}

      {/* Start ② 賃金改善見込総額( ③ - ④ - ⑤ - ⑥) Grid */}
      <Grid container spacing={2}>
        <Grid item xs={4.5} sm={4} md={4} lg={3}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
            ② 賃金改善見込総額( ③ - ④ - ⑤ - ⑥) :
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
      {/* End ② 賃金改善見込総額( ③ - ④ - ⑤ - ⑥) Grid */}

      {/* Start ③ 支払賃金 Grid */}
      <Grid container spacing={2} className="pt-3">
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

      {/* Start ④③ のうち、加算前年度の加算残額に係る支払賃金 Grid */}
      <Grid container spacing={2} className="pt-3">
        <Grid item xs={4.5} sm={4} md={4} lg={3}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
            ④③ のうち、加算前年度の加算残額に係る支払賃金 :
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
      {/* End ④③ のうち、加算前年度の加算残額に係る支払賃金 Grid */}

      {/* Start ⑤③ のうち、加算Iの新規事由による賃金改善額 Grid */}
      <Grid container spacing={2} >
        <Grid item xs={4.5} sm={4} md={4} lg={3}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
            ⑤③ のうち、加算Iの新規事由による賃金改善額 :
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
      {/* End ⑤③ のうち、加算Iの新規事由による賃金改善額 Grid */}

      {/* Start ⑥ 起点賃金水準( ⑦ + ⑧ ) ※  Grid */}
      <Grid container spacing={2} className="pt-3">
        <Grid item xs={4.5} sm={4} md={4} lg={3}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
            ⑥ 起点賃金水準( ⑦ + ⑧ ) ※ :
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
      {/* End ⑥ 起点賃金水準( ⑦ + ⑧ ) ※  Grid */}

      {/* Start ⑦ 加算前年度の賃金水準(当該年度に係る加算残額を含む) Grid */}
      <Grid container spacing={2} className="pt-3">
        <Grid item xs={4.5} sm={4} md={4} lg={3}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
            ⑦ 加算前年度の賃金水準(当該年度に係る加算残額を含む) :
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
      {/* End ⑦ 加算前年度の賃金水準(当該年度に係る加算残額を含む) Grid */}

      {/* Start ⑧ 加算当年度の公定価格における人件費の改定分 Grid */}
      <Grid container spacing={2} className="pt-3">
        <Grid item xs={4.5} sm={4} md={4} lg={3}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
            ⑧ 加算当年度の公定価格における人件費の改定分 :
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
      {/* End ⑧ 加算当年度の公定価格における人件費の改定分 Grid */}

      {/* Start ⑨ 事業主負担增加見込額 Grid */}
      <Grid container spacing={2} className="pt-3">
        <Grid item xs={4.5} sm={4} md={4} lg={3}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
            ⑨ 事業主負担增加見込額 :
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
      {/* End ⑨ 事業主負担增加見込額 Grid */}

      {/* Start ※ 令和4年度の加算血等による賃金改善額を除く。 Grid */}
      <Grid container className='pt-5' justifyContent="start">
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-start'>
            ※ 令和4年度の加算血等による賃金改善額を除く。
          </Typography>
        </Grid>
      </Grid>
      {/* End ※ 令和4年度の加算血等による賃金改善額を除く。 Grid */}

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

      {/* Start ① 拠出見込額 Grid */}
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
      {/* End ① 拠出見込額 Grid */}

      {/* Start ② 受入見込額 Grid */}
      <Grid container spacing={2} className="pt-3">
        <Grid item xs={4.5} sm={4} md={4} lg={3}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
            ② 受入見込額 :
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
      {/* End ② 受入見込額 Grid */}

      {/* Start ※ 別紙様式9別添2の「同一事業者内における拠出見込額・受入見込額一覧表」を添付すること。 Grid */}
      <Grid container className='pt-5' justifyContent="start">
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-start'>
            ※ 別紙様式9別添2の「同一事業者内における拠出見込額・受入見込額一覧表」を添付すること。
          </Typography>
        </Grid>
      </Grid>
      {/* End ※ 別紙様式9別添2の「同一事業者内における拠出見込額・受入見込額一覧表」を添付すること。 Grid */}


      <Divider className="pt-7" />

      {/* Start ※ 確認欄 (千円未満の端数は切り捨て) Grid */}
      <Grid container className='pt-3' justifyContent="start">
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography fontWeight="bold" sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-start'>
            ※ 確認欄 (千円未満の端数は切り捨て)
          </Typography>
        </Grid>
      </Grid>
      {/* End ※ 確認欄 (千円未満の端数は切り捨て) Grid */}

      {/* Start ※確認欄 (以下のB及びCの額がAの額以上であること) Grid */}
      <Grid container className='pt-4' justifyContent="start">
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-justify'>
            ※確認欄 (以下のB及びCの額がAの額以上であること)
          </Typography>
        </Grid>
      </Grid>
      {/* End ※確認欄 (以下のB及びCの額がAの額以上であること) Grid */}

      {/* Start A 加算見込額 【 (1)  ① 】 Grid */}
      <Grid container spacing={2} className="pt-3">
        <Grid item xs={4.5} sm={4} md={4} lg={3}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
            A 加算見込額 【 (1)  ① 】 :
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
      {/* End A 加算見込額 【 (1)  ① 】 Grid */}

      {/* Start B 賃金改善等見込総額 【 (2)  ①】 Grid */}
      <Grid container spacing={2} className="pt-3">
        <Grid item xs={4.5} sm={4} md={4} lg={3}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
            B 賃金改善等見込総額 【 (2)  ①】 :
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
      {/* End B 賃金改善等見込総額 【 (2)  ①】 Grid */}

      {/* Start C 加算 III による賃金改善額の総額 Grid */}
      <Grid container spacing={2} className="pt-3">
        <Grid item xs={4.5} sm={4} md={4} lg={3}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
            C 加算 III による賃金改善額の総額【別
            紙様式9別添1の「加算血による賃金
            改善額」と「賃金改善に伴い増加する:
            法定福利費等の事業主負担分」の総額
            欄の合計】 :
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
      {/* End C 加算 III による賃金改善額の総額 Grid */}

    </>
  );
}
