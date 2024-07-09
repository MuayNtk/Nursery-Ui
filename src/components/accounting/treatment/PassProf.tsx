import { Divider, FormControl, Grid, InputAdornment, InputLabel, MenuItem, Select, TextareaAutosize, TextField, Typography } from "@mui/material";


export default function PassProf() {

  return (
    <>

      {/* Start 園番号 Grid */}
      <Grid container spacing={2} className='pt-7' justifyContent='end'>
        <Grid item xs={4.5} sm={4} md={4} lg={3}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
            園番号 :
          </Typography>
        </Grid>
        <Grid item xs={3} sm={2} md={2} lg={1.5}>
          <TextField id="school-number" name="school-number" type="text" size="small" fullWidth sx={{ backgroundColor: 'white' }} />
        </Grid>
      </Grid>
      {/* End 園番号 Grid */}

      {/* Start 令和 5 年度キャリアパス要件届出書 Grid */}
      <Grid container className='pt-3' justifyContent="start">
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography fontWeight="bold" sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-start'>
            令和 5 年度キャリアパス要件届出書
          </Typography>
        </Grid>
      </Grid>
      {/* End 令和 5 年度キャリアパス要件届出書 Grid */}

      <Divider className="pt-7" />

      {/* Start 福岡市長 殿 Grid */}
      <Grid container className='pt-3' justifyContent="start">
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography fontWeight="bold" sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-start'>
            福岡市長 殿
          </Typography>
        </Grid>
      </Grid>
      {/* End 福岡市長 殿 Grid */}

      {/* Start 作成日 Grid */}
      <Grid container spacing={2} className='pt-3' justifyContent="start">
        <Grid item xs={4.5} sm={2} md={3} lg={3}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
            作成日 :
          </Typography>
        </Grid>
        <Grid item xs={6} sm={3} md={2.5} lg={2}>
          <TextField
            id="year-created-date"
            name="year-created-date"
            label="令和"
            variant="outlined"
            type="text" size="small"
            fullWidth
            sx={{ backgroundColor: '#F5F5F5' }}
            InputProps={{
              readOnly: true,
              endAdornment: <InputAdornment position="end">年</InputAdornment>,
            }}
          />
        </Grid>
        <Grid item xs={6} sm={3} md={2.5} lg={2}>
          <TextField
            id="month-created-date"
            name="month-created-date"
            type="text" size="small"
            fullWidth
            sx={{ backgroundColor: 'white' }}
            InputProps={{
              endAdornment: <InputAdornment position="end">月</InputAdornment>,
            }}
          />
        </Grid>
        <Grid item xs={6} sm={3} md={2.5} lg={2}>
          <TextField
            id="day-created-date"
            name="day-created-date"
            type="text" size="small"
            fullWidth
            sx={{ backgroundColor: 'white' }}
            InputProps={{
              endAdornment: <InputAdornment position="end">日</InputAdornment>,
            }}
          />
        </Grid>
      </Grid>
      {/* End 作成日 Grid */}

      {/* Start 市町村名 Grid */}
      <Grid container spacing={2} className='pt-3' justifyContent="start">
        <Grid item xs={4.5} sm={4} md={4} lg={3}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
            市町村名 :
          </Typography>
        </Grid>
        <Grid item xs={6} sm={7} md={6.5} lg={6}>
          <TextField id="city-name" name="city-name" type="text" size="small" fullWidth sx={{ backgroundColor: 'white' }} />
        </Grid>
      </Grid>
      {/* End 市町村名 Grid */}

      {/* Start 施設・事業所名 Grid */}
      <Grid container spacing={2} className='pt-3' justifyContent="start">
        <Grid item xs={4.5} sm={4} md={4} lg={3}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
            施設・事業所名 :
          </Typography>
        </Grid>
        <Grid item xs={6} sm={7} md={6.5} lg={6}>
          <TextField id="business-name" name="business-name" type="text" size="small" fullWidth sx={{ backgroundColor: 'white' }} />
        </Grid>
      </Grid>
      {/* End 施設・事業所名 Grid */}

      {/* Start 施設・事業所類型 Grid */}
      <Grid container spacing={2} className='pt-3' justifyContent="start">
        <Grid item xs={4.5} sm={4} md={4} lg={3}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
            施設・事業所類型 :
          </Typography>
        </Grid>
        <Grid item xs={6} sm={7} md={6.5} lg={6}>
          <TextField id="business-type" name="business-type" type="text" size="small" fullWidth sx={{ backgroundColor: 'white' }} />
        </Grid>
      </Grid>
      {/* End 施設・事業所類型 Grid */}

      {/* Start 法人名・代表者職名 Grid */}
      <Grid container spacing={2} className='pt-3' justifyContent="start">
        <Grid item xs={4.5} sm={4} md={4} lg={3}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
            法人名・代表者職名 :
          </Typography>
        </Grid>
        <Grid item xs={6} sm={7} md={6.5} lg={6}>
          <TextField id="representative-title" name="representative-title" type="text" size="small" fullWidth sx={{ backgroundColor: 'white' }} />
        </Grid>
      </Grid>
      {/* End 法人名・代表者職名 Grid */}

      {/* Start 担当者職名 Grid */}
      <Grid container spacing={2} className='pt-3' justifyContent="start">
        <Grid item xs={4.5} sm={4} md={4} lg={3}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
            担当者職名 :
          </Typography>
        </Grid>
        <Grid item xs={6} sm={7} md={6.5} lg={6}>
          <TextField id="person-in-charge" name="person-in-charge" type="text" size="small" fullWidth sx={{ backgroundColor: 'white' }} />
        </Grid>
      </Grid>
      {/* End 担当者職名 Grid */}

      {/* Start 電話番号 Grid */}
      <Grid container spacing={2} className='pt-3' justifyContent="start">
        <Grid item xs={4.5} sm={4} md={4} lg={3}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
            電話番号 :
          </Typography>
        </Grid>
        <Grid item xs={6} sm={7} md={6.5} lg={6}>
          <TextField id="telephone-number" name="telephone-number" type="text" size="small" fullWidth sx={{ backgroundColor: 'white' }} />
        </Grid>
      </Grid>
      {/* End 電話番号 Grid */}

      <Divider className="pt-7" />

      {/* Start 〇キャリアパスに関する要件について Grid */}
      <Grid container className='pt-3' justifyContent="start">
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography fontWeight="bold" sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-start'>
            〇キャリアパスに関する要件について
          </Typography>
        </Grid>
      </Grid>
      {/* End 〇キャリアパスに関する要件について Grid */}

      {/* Start 次の内容について、「該当」「非該当」を選択すること。 Grid */}
      <Grid container className='pt-3' justifyContent="start">
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-start'>
            次の内容について、「該当」「非該当」を選択すること。
          </Typography>
        </Grid>
      </Grid>
      {/* End 次の内容について、「該当」「非該当」を選択すること。 Grid */}

      {/* Start ① 次のaからcまでの全ての要件を満たす Grid */}
      <Grid container justifyContent="start">
        <Grid item xs={8.5} sm={8} md={5} lg={3.5}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
            ① 次のaからcまでの全ての要件を満たす :
          </Typography>
        </Grid>
        <Grid item xs={3} sm={3} md={1.7} lg={1} className="pl-3">
          <FormControl size="small" fullWidth>
            <InputLabel id="following-requirements-a-to-c-label">該当</InputLabel>
            <Select
              labelId="following-requirements-a-to-c-label"
              id="following-requirements-a-to-c-select"
              label="該当"
              sx={{ backgroundColor: "white" }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      {/* End ① 次のaからcまでの全ての要件を満たす Grid */}

      {/* Start a 職員の職位、職責又は職務内容等に応じた勤務条件等の要件を定めている。 Grid */}
      <Grid container className='pt-1' justifyContent="end">
        <Grid item xs={12} sm={12} md={10.3} lg={8}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='text-justify'>
            a 職員の職位、職責又は職務内容等に応じた勤務条件等の要件を定めている。
          </Typography>
        </Grid>
      </Grid>
      {/* End a 職員の職位、職責又は職務内容等に応じた勤務条件等の要件を定めている。 Grid */}

      {/* Start b 職位、職責又は職務内容等に応じた賃金体系を定めている。 Grid */}
      <Grid container className='pt-1' justifyContent="end">
        <Grid item xs={12} sm={12} md={10.3} lg={8}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='text-justify'>
            b 職位、職責又は職務内容等に応じた賃金体系を定めている。
          </Typography>
        </Grid>
      </Grid>
      {/* End b 職位、職責又は職務内容等に応じた賃金体系を定めている。 Grid */}

      {/* Start c a及びbについて就業規則等の明確な根拠規定を書面で整備し、全ての職員に周知している Grid */}
      <Grid container className='pt-1' justifyContent="end">
        <Grid item xs={12} sm={12} md={10.3} lg={8}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='text-justify'>
            c a及びbについて就業規則等の明確な根拠規定を書面で整備し、全ての職員に周知している
          </Typography>
        </Grid>
      </Grid>
      {/* End c a及びbについて就業規則等の明確な根拠規定を書面で整備し、全ての職員に周知している Grid */}

      {/* Start ② 次のd及びeの要件を満たす。 Grid */}
      <Grid container justifyContent="start" className="pt-3">
        <Grid item xs={8.5} sm={8} md={5} lg={3.5}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
            ② 次のd及びeの要件を満たす。 :
          </Typography>
        </Grid>
        <Grid item xs={3} sm={3} md={1.7} lg={1} className="pl-3">
          <FormControl size="small" fullWidth>
            <InputLabel id="following-requirements-d-to-e-label">該当</InputLabel>
            <Select
              labelId="following-requirements-d-to-e-label"
              id="following-requirements-d-to-e-select"
              label="該当"
              sx={{ backgroundColor: "white" }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      {/* End ② 次のd及びeの要件を満たす。 Grid */}

      {/* Start d 職員との意見交換を踏まえた資質向上のための目標。 Grid */}
      <Grid container className='pt-1' justifyContent="end">
        <Grid item xs={11} sm={11} md={10.3} lg={8}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='text-justify'>
            d 職員との意見交換を踏まえた資質向上のための目標。
          </Typography>
        </Grid>
      </Grid>
      {/* End d 職員との意見交換を踏まえた資質向上のための目標。 Grid */}

      {/* Start Grid Textarea */}
      <Grid container className='pt-1' justifyContent="end">
        <Grid item xs={12} sm={12} md={11.5} lg={8.9}>
          <TextareaAutosize
            id="content"
            name="content"
            minRows={3}
            maxRows={100}
            className="w-[80%]"
            style={{ border: '1px solid gray', borderRadius: '4px' }}
          />
        </Grid>
      </Grid>
      {/* End Grid Textarea */}

      {/* Start e dの実現のための具体的な取り組みの内容 Grid */}
      <Grid container className='pt-1' justifyContent="end">
        <Grid item xs={11} sm={11} md={10.3} lg={8}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='text-justify'>
            e dの実現のための具体的な取り組みの内容ア資質向上のための計画に沿って、研修機会の提供又は技術指導等を実施するとともに、職員の能力評価を行う。(資質向上のための計画を添付すること。)
          </Typography>
        </Grid>
      </Grid>
      {/* End e dの実現のための具体的な取り組みの内容 Grid */}

      {/* Start イ 資格取得のための支援の実施 ※当該支援の内容について下記に記載すること。 Grid */}
      <Grid container className='pt-7' justifyContent="end">
        <Grid item xs={11} sm={11} md={10.3} lg={8}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='text-justify'>
            イ 資格取得のための支援の実施 ※当該支援の内容について下記に記載すること。
          </Typography>
        </Grid>
      </Grid>
      {/* End イ 資格取得のための支援の実施 ※当該支援の内容について下記に記載すること。 Grid */}

      {/* Start Grid Textarea */}
      <Grid container className='pt-1' justifyContent="end">
        <Grid item xs={12} sm={12} md={11.5} lg={8.9}>
          <TextareaAutosize
            id="content"
            name="content"
            minRows={3}
            maxRows={100}
            className="w-[80%]"
            style={{ border: '1px solid gray', borderRadius: '4px' }}
          />
        </Grid>
      </Grid>
      {/* End Grid Textarea */}

    </>
  );
}
