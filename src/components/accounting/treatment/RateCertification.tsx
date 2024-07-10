import { Checkbox, Divider, FormControl, Grid, InputAdornment, InputLabel, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material";


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function RateCertification() {

  return (
    <>

      {/* Start 令和 5 年度処遇改善等加算Iに係る加算率認定申請書 Grid */}
      <Grid container className='pt-3' justifyContent="start">
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography fontWeight="bold" sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-start'>
            令和 5 年度処遇改善等加算Iに係る加算率認定申請書
          </Typography>
        </Grid>
      </Grid>
      {/* End 令和 5 年度処遇改善等加算Iに係る加算率認定申請書 Grid */}

      <Divider className="pt-7" />

      {/* Start 園番号 Grid */}
      <Grid container spacing={2} className='pt-7' justifyContent='start'>
        <Grid item xs={4.5} sm={4} md={4} lg={3}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
            園番号 :
          </Typography>
        </Grid>
        <Grid item xs={6} sm={7} md={6.5} lg={6}>
          <TextField id="school-number" name="school-number" type="text" size="small" fullWidth sx={{ backgroundColor: 'white' }} />
        </Grid>
      </Grid>
      {/* End 園番号 Grid */}

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
            sx={{ backgroundColor: 'white' }}
            InputProps={{
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
          <TextField
            id="city-name"
            name="city-name"
            type="text" size="small"
            fullWidth
            sx={{ backgroundColor: '#F5F5F5' }}
            InputProps={{
              readOnly: true
            }}
          />
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

      {/* Start 【処遇改善等加算の適用総表】 Grid */}
      <Grid container className='pt-3' justifyContent="start">
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography fontWeight="bold" sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-start'>
            【処遇改善等加算の適用総表】
          </Typography>
        </Grid>
      </Grid>
      {/* End 【処遇改善等加算の適用総表】 Grid */}

      {/* Start Grid ① 【基礎分算定資料】のCの年数から適用される基礎分の値 */}
      <Grid container spacing={2} className='pt-3' justifyContent="start">
        <Grid item xs={5} sm={5} md={4.5} lg={3.5}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
            ① 【基礎分算定資料】のCの年数から適用される基礎分の値 :
          </Typography>
        </Grid>
        <Grid item xs={6} sm={3} md={2.5} lg={2}>
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
      {/* End Grid ① 【基礎分算定資料】のCの年数から適用される基礎分の値 */}

      {/* Start Grid ② 賃金改善要件分の値(が「否」の場合は、キャリアパス要件分の値を減じること。) */}
      <Grid container spacing={2} justifyContent="start">
        <Grid item xs={5} sm={5} md={4.5} lg={3.5}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
            ② 賃金改善要件分の値(が「否」の場合は、キャリアパス要件分の値を減じること。) :
          </Typography>
        </Grid>
        <Grid item xs={6} sm={3} md={2.5} lg={1}>
          <FormControl size="small" fullWidth>
            <Select
              labelId="nursery-school-label"
              id="nursery-school-select"
              sx={{ backgroundColor: "white" }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={1}>適</MenuItem>
              <MenuItem value={2}>否</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={7} sm={3} md={2.5} lg={2}>
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
      {/* End Grid ② 賃金改善要件分の値(が「否」の場合は、キャリアパス要件分の値を減じること。) */}

      {/* Start Grid ③ キャリアパス要件 */}
      <Grid container spacing={2} className="pt-3 md:pt-0" justifyContent="start">
        <Grid item xs={5} sm={5} md={4.5} lg={3.5}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
            ③ キャリアパス要件 :
          </Typography>
        </Grid>
        <Grid item xs={6} sm={3} md={2.5} lg={1}>
          <FormControl size="small" fullWidth>
            <Select
              labelId="nursery-school-label"
              id="nursery-school-select"
              sx={{ backgroundColor: "white" }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={1}>適</MenuItem>
              <MenuItem value={2}>否</MenuItem>
              <MenuItem value={3}>処遇II</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      {/* End Grid ③ キャリアパス要件 */}

      {/* Start Grid 施設・事業所に適用される加率( ① + ② ) */}
      <Grid container spacing={2} className='pt-3' justifyContent="start">
        <Grid item xs={5} sm={5} md={4.5} lg={3.5}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
            施設・事業所に適用される加率( ① + ② ) :
          </Typography>
        </Grid>
        <Grid item xs={6} sm={3} md={2.5} lg={2}>
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
      {/* End Grid 施設・事業所に適用される加率( ① + ② ) */}

      <Divider className="pt-7" />

      {/* Start ■ 【該当する場合のみ】他施設・他事業所から、新規事由に係る加算見込額の一部を受け入れる場合 Grid */}
      <Grid container className='pt-3' justifyContent="start">
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography fontWeight="bold" sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-start'>
            ■【該当する場合のみ】他施設・他事業所から、新規事由に係る加算見込額の一部を受け入れる場合
          </Typography>
        </Grid>
      </Grid>
      {/* End ■ 【該当する場合のみ】他施設・他事業所から、新規事由に係る加算見込額の一部を受け入れる場合 Grid */}

      {/* Start 都道府県名 Grid */}
      <Grid container spacing={2} className='pt-3' justifyContent="start">
        <Grid item xs={4.5} sm={4} md={4} lg={3}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
            都道府県名 :
          </Typography>
        </Grid>
        <Grid item xs={6} sm={7} md={6.5} lg={6}>
          <TextField
            id="city-name"
            name="city-name"
            type="text" size="small"
            fullWidth
            sx={{ backgroundColor: 'white' }}
          />
        </Grid>
      </Grid>
      {/* End 都道府県名 Grid */}

      {/* Start 市町村名 Grid */}
      <Grid container spacing={2} className='pt-3' justifyContent="start">
        <Grid item xs={4.5} sm={4} md={4} lg={3}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
            市町村名 :
          </Typography>
        </Grid>
        <Grid item xs={6} sm={7} md={6.5} lg={6}>
          <TextField
            id="city-name"
            name="city-name"
            type="text" size="small"
            fullWidth
            sx={{ backgroundColor: 'white' }}
          />
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
          <TextField
            id="city-name"
            name="city-name"
            type="text" size="small"
            fullWidth
            sx={{ backgroundColor: 'white' }}
          />
        </Grid>
      </Grid>
      {/* End 施設・事業所名 Grid */}

      {/* Start ※ 複数の施設・事業所から受け入れる場合は、「施設・事業所名」に「・※保育園ほか・ヶ所」と記入してください。 Grid */}
      <Grid container className='pt-3' justifyContent="start">
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-start'>
            ※ 複数の施設・事業所から受け入れる場合は、「施設・事業所名」に「・※保育園ほか・ヶ所」と記入してください。
          </Typography>
        </Grid>
      </Grid>
      {/* End ※ 複数の施設・事業所から受け入れる場合は、「施設・事業所名」に「・※保育園ほか・ヶ所」と記入してください。 Grid */}

      {/* Start ※ 令和5年度新設園から受け入れる場合は、新規事由に該当します。 Grid */}
      <Grid container className='pt-2' justifyContent="start">
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='text-start'>
            ※ 令和5年度新設園から受け入れる場合は、新規事由に該当します。
          </Typography>
        </Grid>
      </Grid>
      {/* End ※ 令和5年度新設園から受け入れる場合は、新規事由に該当します。 Grid */}

      <Divider className="pt-7" />

      {/* Start【其礎分算定咨料】 Grid */}
      <Grid container className='pt-3' justifyContent="start">
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography fontWeight="bold" sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-start'>
            【其礎分算定咨料】
          </Typography>
        </Grid>
      </Grid>
      {/* End【其礎分算定咨料】 Grid */}

      {/* Start 利用定員 Grid */}
      <Grid container spacing={1} className='pt-3' justifyContent="start">
        <Grid item xs={4.5} sm={2} md={1.5} lg={1.2}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
            利用定員 :
          </Typography>
        </Grid>
        <Grid item xs={6} sm={3} md={2} lg={1.5}>
          <TextField
            id="year-created-date"
            name="year-created-date"
            type="text" size="small"
            fullWidth
            sx={{ backgroundColor: 'white' }}
            InputProps={{
              endAdornment: <InputAdornment position="end">年</InputAdornment>,
            }}
          />
        </Grid>
        <Grid item xs={4.5} sm={2} md={1.3} lg={1.2} sx={{ ml: { xs: 0, sm: 0, md: 0, lg: -3 } }}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
            地域区分 :
          </Typography>
        </Grid>
        <Grid item xs={6} sm={3} md={2} lg={1.5}>
          <TextField
            id="year-created-date"
            name="year-created-date"
            type="text" size="small"
            fullWidth
            sx={{ backgroundColor: 'white' }}
            InputProps={{
              endAdornment: <InputAdornment position="end">地域</InputAdornment>,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={5} md={3.5} lg={2}>
          <FormControl size="small">
            <InputLabel id="training-field-label">昭和</InputLabel>
            <Select
              labelId="nursery-school-label"
              label="昭和"
              id="nursery-school-select"
              sx={{ backgroundColor: "white", width: 75 }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={1}>令和</MenuItem>
              <MenuItem value={2}>平成</MenuItem>
              <MenuItem value={3}>昭和</MenuItem>
            </Select>
          </FormControl>
          <TextField
            id="year-number"
            name="year-number"
            type="text"
            size="small"
            sx={{ width: { xs: 150, sm: 80, md: 90, lg: 100 }, backgroundColor: 'white' }}
            InputProps={{
              endAdornment: <InputAdornment position="end">年</InputAdornment>,
            }}
          />
        </Grid>
        <Grid item xs={6} sm={3} md={4} lg={2}>
          <TextField
            id="year-created-date"
            name="year-created-date"
            type="text" size="small"
            fullWidth
            sx={{ backgroundColor: 'white' }}
            InputProps={{
              endAdornment: <InputAdornment position="end">月</InputAdornment>,
            }}
          />
        </Grid>
        <Grid item xs={6} sm={3} md={4} lg={2}>
          <TextField
            id="year-created-date"
            name="year-created-date"
            type="text" size="small"
            fullWidth
            sx={{ backgroundColor: 'white' }}
            InputProps={{
              endAdornment: <InputAdornment position="end">日</InputAdornment>,
            }}
          />
        </Grid>
      </Grid>
      {/* End 利用定員 Grid */}


      {/* Start 処遇改善等加算(基礎分)算定対象職員の一覧 Grid */}
      <Grid container className='pt-3' justifyContent="start">
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-start'>
            処遇改善等加算(基礎分)算定対象職員の一覧
          </Typography>
        </Grid>
      </Grid>
      {/* End 処遇改善等加算(基礎分)算定対象職員の一覧 Grid */}

      {/* Start Table 1 */}
      <TableContainer component={Paper} className="mt-2" sx={{ width: { xs: 'auto', sm: 'auto', md: 'auto', lg: 'auto' } }}>
        <Table sx={{ minWidth: 1700 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={{ width: 90, fontWeight: "bold" }} align="left">番号</TableCell>
              <TableCell style={{ width: 100, fontWeight: "bold" }} align="left">受講年度</TableCell>
              <TableCell style={{ width: 100, fontWeight: "bold" }} align="center">職種</TableCell>
              <TableCell style={{ fontWeight: "bold" }} align="left">ア現に勤務する施設・事業所の勤務開始年月日</TableCell>
              <TableCell style={{ fontWeight: "bold" }} align="left">イその他の施設・事業所の通算勤統年数</TableCell>
              <TableCell style={{ fontWeight: "bold" }} align="left">ウ合計(ア+イ)</TableCell>
              <TableCell style={{ fontWeight: "bold" }} align="left">備考</TableCell>
              <TableCell style={{ fontWeight: "bold" }} align="left">新規採用職員等</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>

            {/* Start Rows 1 */}
            <TableRow hover role="checkbox" tabIndex={-1}>
              <TableCell align="left">1</TableCell>
              <TableCell align="left">石井誠</TableCell>
              <TableCell align="left">
                <FormControl size="small">
                  <Select
                    labelId="nursery-school-label"
                    id="nursery-school-select"
                    sx={{ backgroundColor: "white", width: 90 }}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>施設長</MenuItem>
                    <MenuItem value={2}>副園長</MenuItem>
                    <MenuItem value={3}>教頭</MenuItem>
                    <MenuItem value={4}>主幹教諭</MenuItem>
                    <MenuItem value={5}>主任保育士</MenuItem>
                    <MenuItem value={6}>教諭</MenuItem>
                    <MenuItem value={7}>保育士</MenuItem>
                    <MenuItem value={8}>看護師</MenuItem>
                    <MenuItem value={9}>准看護師</MenuItem>
                    <MenuItem value={10}>調理士</MenuItem>
                    <MenuItem value={11}>調理士(栄養士)</MenuItem>
                    <MenuItem value={12}>栄養士</MenuItem>
                    <MenuItem value={13}>事務員</MenuItem>
                    <MenuItem value={14}>用務員</MenuItem>
                    <MenuItem value={15}>パート保育士</MenuItem>
                    <MenuItem value={16}>パート調理士</MenuItem>
                    <MenuItem value={17}>その他</MenuItem>
                  </Select>
                </FormControl>
              </TableCell>
              <TableCell align="left">
                <FormControl size="small">
                  <Select
                    labelId="nursery-school-label"
                    id="nursery-school-select"
                    sx={{ backgroundColor: "white", width: 70 }}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>令和</MenuItem>
                    <MenuItem value={2}>平成</MenuItem>
                    <MenuItem value={3}>昭和</MenuItem>
                  </Select>
                </FormControl>
                <TextField
                  id="year-number"
                  name="year-number"
                  type="text"
                  size="small"
                  sx={{ width: 100 }}
                  InputProps={{
                    endAdornment: <InputAdornment position="end">年</InputAdornment>,
                  }}
                />
                <TextField
                  id="year-number"
                  name="year-number"
                  type="text"
                  size="small"
                  sx={{ width: 100, marginLeft: '8px' }}
                  InputProps={{
                    endAdornment: <InputAdornment position="end">月</InputAdornment>,
                  }}
                />
                <TextField
                  id="year-number"
                  name="year-number"
                  type="text"
                  size="small"
                  sx={{ width: 100, marginLeft: '8px' }}
                  InputProps={{
                    endAdornment: <InputAdornment position="end">日</InputAdornment>,
                  }}
                />
              </TableCell>
              <TableCell align="left">
                <TextField
                  id="year-number"
                  name="year-number"
                  type="text"
                  size="small"
                  sx={{ width: 150, marginLeft: '8px' }}
                  InputProps={{
                    endAdornment: <InputAdornment position="end">年</InputAdornment>,
                  }}
                />
                <TextField
                  id="year-number"
                  name="year-number"
                  type="text"
                  size="small"
                  sx={{ width: 150, marginLeft: '8px' }}
                  InputProps={{
                    endAdornment: <InputAdornment position="end">月</InputAdornment>,
                  }}
                />
              </TableCell>
              <TableCell align="left">
                <TextField
                  id="year-number"
                  name="year-number"
                  type="text"
                  size="small"
                  sx={{ width: 150, marginLeft: '8px' }}
                  InputProps={{
                    endAdornment: <InputAdornment position="end">年</InputAdornment>,
                  }}
                />
                <TextField
                  id="year-number"
                  name="year-number"
                  type="text"
                  size="small"
                  sx={{ width: 150, marginLeft: '8px' }}
                  InputProps={{
                    endAdornment: <InputAdornment position="end">月</InputAdornment>,
                  }}
                />
              </TableCell>
              <TableCell align="left"></TableCell>
              <TableCell align="center">
                <Checkbox {...label} defaultChecked />
              </TableCell>
            </TableRow>
            {/* End Rows 1 */}

            {/* Start Rows 2 */}
            <TableRow hover role="checkbox" tabIndex={-1}>
              <TableCell align="left">2</TableCell>
              <TableCell align="left">熊田里佳</TableCell>
              <TableCell align="left">
                <FormControl size="small">
                  <Select
                    labelId="nursery-school-label"
                    id="nursery-school-select"
                    sx={{ backgroundColor: "white", width: 90 }}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>施設長</MenuItem>
                    <MenuItem value={2}>副園長</MenuItem>
                    <MenuItem value={3}>教頭</MenuItem>
                    <MenuItem value={4}>主幹教諭</MenuItem>
                    <MenuItem value={5}>主任保育士</MenuItem>
                    <MenuItem value={6}>教諭</MenuItem>
                    <MenuItem value={7}>保育士</MenuItem>
                    <MenuItem value={8}>看護師</MenuItem>
                    <MenuItem value={9}>准看護師</MenuItem>
                    <MenuItem value={10}>調理士</MenuItem>
                    <MenuItem value={11}>調理士(栄養士)</MenuItem>
                    <MenuItem value={12}>栄養士</MenuItem>
                    <MenuItem value={13}>事務員</MenuItem>
                    <MenuItem value={14}>用務員</MenuItem>
                    <MenuItem value={15}>パート保育士</MenuItem>
                    <MenuItem value={16}>パート調理士</MenuItem>
                    <MenuItem value={17}>その他</MenuItem>
                  </Select>
                </FormControl>
              </TableCell>
              <TableCell align="left">
                <FormControl size="small">
                  <Select
                    labelId="nursery-school-label"
                    id="nursery-school-select"
                    sx={{ backgroundColor: "white", width: 70 }}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>令和</MenuItem>
                    <MenuItem value={2}>平成</MenuItem>
                    <MenuItem value={3}>昭和</MenuItem>
                  </Select>
                </FormControl>
                <TextField
                  id="year-number"
                  name="year-number"
                  type="text"
                  size="small"
                  sx={{ width: 100 }}
                  InputProps={{
                    endAdornment: <InputAdornment position="end">年</InputAdornment>,
                  }}
                />
                <TextField
                  id="year-number"
                  name="year-number"
                  type="text"
                  size="small"
                  sx={{ width: 100, marginLeft: '8px' }}
                  InputProps={{
                    endAdornment: <InputAdornment position="end">月</InputAdornment>,
                  }}
                />
                <TextField
                  id="year-number"
                  name="year-number"
                  type="text"
                  size="small"
                  sx={{ width: 100, marginLeft: '8px' }}
                  InputProps={{
                    endAdornment: <InputAdornment position="end">日</InputAdornment>,
                  }}
                />
              </TableCell>
              <TableCell align="left">
                <TextField
                  id="year-number"
                  name="year-number"
                  type="text"
                  size="small"
                  sx={{ width: 150, marginLeft: '8px' }}
                  InputProps={{
                    endAdornment: <InputAdornment position="end">年</InputAdornment>,
                  }}
                />
                <TextField
                  id="year-number"
                  name="year-number"
                  type="text"
                  size="small"
                  sx={{ width: 150, marginLeft: '8px' }}
                  InputProps={{
                    endAdornment: <InputAdornment position="end">月</InputAdornment>,
                  }}
                />
              </TableCell>
              <TableCell align="left">
                <TextField
                  id="year-number"
                  name="year-number"
                  type="text"
                  size="small"
                  sx={{ width: 150, marginLeft: '8px' }}
                  InputProps={{
                    endAdornment: <InputAdornment position="end">年</InputAdornment>,
                  }}
                />
                <TextField
                  id="year-number"
                  name="year-number"
                  type="text"
                  size="small"
                  sx={{ width: 150, marginLeft: '8px' }}
                  InputProps={{
                    endAdornment: <InputAdornment position="end">月</InputAdornment>,
                  }}
                />
              </TableCell>
              <TableCell align="left"></TableCell>
              <TableCell align="center">
                <Checkbox {...label} defaultChecked />
              </TableCell>
            </TableRow>
            {/* End Rows 2 */}

            {/* Start Rows 3 */}
            <TableRow hover role="checkbox" tabIndex={-1}>
              <TableCell align="left">3</TableCell>
              <TableCell align="left">永田みさ</TableCell>
              <TableCell align="left">
                <FormControl size="small">
                  <Select
                    labelId="nursery-school-label"
                    id="nursery-school-select"
                    sx={{ backgroundColor: "white", width: 90 }}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>施設長</MenuItem>
                    <MenuItem value={2}>副園長</MenuItem>
                    <MenuItem value={3}>教頭</MenuItem>
                    <MenuItem value={4}>主幹教諭</MenuItem>
                    <MenuItem value={5}>主任保育士</MenuItem>
                    <MenuItem value={6}>教諭</MenuItem>
                    <MenuItem value={7}>保育士</MenuItem>
                    <MenuItem value={8}>看護師</MenuItem>
                    <MenuItem value={9}>准看護師</MenuItem>
                    <MenuItem value={10}>調理士</MenuItem>
                    <MenuItem value={11}>調理士(栄養士)</MenuItem>
                    <MenuItem value={12}>栄養士</MenuItem>
                    <MenuItem value={13}>事務員</MenuItem>
                    <MenuItem value={14}>用務員</MenuItem>
                    <MenuItem value={15}>パート保育士</MenuItem>
                    <MenuItem value={16}>パート調理士</MenuItem>
                    <MenuItem value={17}>その他</MenuItem>
                  </Select>
                </FormControl>
              </TableCell>
              <TableCell align="left">
                <FormControl size="small">
                  <Select
                    labelId="nursery-school-label"
                    id="nursery-school-select"
                    sx={{ backgroundColor: "white", width: 70 }}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>令和</MenuItem>
                    <MenuItem value={2}>平成</MenuItem>
                    <MenuItem value={3}>昭和</MenuItem>
                  </Select>
                </FormControl>
                <TextField
                  id="year-number"
                  name="year-number"
                  type="text"
                  size="small"
                  sx={{ width: 100 }}
                  InputProps={{
                    endAdornment: <InputAdornment position="end">年</InputAdornment>,
                  }}
                />
                <TextField
                  id="year-number"
                  name="year-number"
                  type="text"
                  size="small"
                  sx={{ width: 100, marginLeft: '8px' }}
                  InputProps={{
                    endAdornment: <InputAdornment position="end">月</InputAdornment>,
                  }}
                />
                <TextField
                  id="year-number"
                  name="year-number"
                  type="text"
                  size="small"
                  sx={{ width: 100, marginLeft: '8px' }}
                  InputProps={{
                    endAdornment: <InputAdornment position="end">日</InputAdornment>,
                  }}
                />
              </TableCell>
              <TableCell align="left">
                <TextField
                  id="year-number"
                  name="year-number"
                  type="text"
                  size="small"
                  sx={{ width: 150, marginLeft: '8px' }}
                  InputProps={{
                    endAdornment: <InputAdornment position="end">年</InputAdornment>,
                  }}
                />
                <TextField
                  id="year-number"
                  name="year-number"
                  type="text"
                  size="small"
                  sx={{ width: 150, marginLeft: '8px' }}
                  InputProps={{
                    endAdornment: <InputAdornment position="end">月</InputAdornment>,
                  }}
                />
              </TableCell>
              <TableCell align="left">
                <TextField
                  id="year-number"
                  name="year-number"
                  type="text"
                  size="small"
                  sx={{ width: 150, marginLeft: '8px' }}
                  InputProps={{
                    endAdornment: <InputAdornment position="end">年</InputAdornment>,
                  }}
                />
                <TextField
                  id="year-number"
                  name="year-number"
                  type="text"
                  size="small"
                  sx={{ width: 150, marginLeft: '8px' }}
                  InputProps={{
                    endAdornment: <InputAdornment position="end">月</InputAdornment>,
                  }}
                />
              </TableCell>
              <TableCell align="left">旧姓:藤井</TableCell>
              <TableCell align="center">
                <Checkbox {...label} defaultChecked />
              </TableCell>
            </TableRow>
            {/* End Rows 3 */}

            {/* Start Rows 4 */}
            <TableRow hover role="checkbox" tabIndex={-1}>
              <TableCell align="left">4</TableCell>
              <TableCell align="left">齋藤麻代</TableCell>
              <TableCell align="left">
                <FormControl size="small">
                  <Select
                    labelId="nursery-school-label"
                    id="nursery-school-select"
                    sx={{ backgroundColor: "white", width: 90 }}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>施設長</MenuItem>
                    <MenuItem value={2}>副園長</MenuItem>
                    <MenuItem value={3}>教頭</MenuItem>
                    <MenuItem value={4}>主幹教諭</MenuItem>
                    <MenuItem value={5}>主任保育士</MenuItem>
                    <MenuItem value={6}>教諭</MenuItem>
                    <MenuItem value={7}>保育士</MenuItem>
                    <MenuItem value={8}>看護師</MenuItem>
                    <MenuItem value={9}>准看護師</MenuItem>
                    <MenuItem value={10}>調理士</MenuItem>
                    <MenuItem value={11}>調理士(栄養士)</MenuItem>
                    <MenuItem value={12}>栄養士</MenuItem>
                    <MenuItem value={13}>事務員</MenuItem>
                    <MenuItem value={14}>用務員</MenuItem>
                    <MenuItem value={15}>パート保育士</MenuItem>
                    <MenuItem value={16}>パート調理士</MenuItem>
                    <MenuItem value={17}>その他</MenuItem>
                  </Select>
                </FormControl>
              </TableCell>
              <TableCell align="left">
                <FormControl size="small">
                  <Select
                    labelId="nursery-school-label"
                    id="nursery-school-select"
                    sx={{ backgroundColor: "white", width: 70 }}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>令和</MenuItem>
                    <MenuItem value={2}>平成</MenuItem>
                    <MenuItem value={3}>昭和</MenuItem>
                  </Select>
                </FormControl>
                <TextField
                  id="year-number"
                  name="year-number"
                  type="text"
                  size="small"
                  sx={{ width: 100 }}
                  InputProps={{
                    endAdornment: <InputAdornment position="end">年</InputAdornment>,
                  }}
                />
                <TextField
                  id="year-number"
                  name="year-number"
                  type="text"
                  size="small"
                  sx={{ width: 100, marginLeft: '8px' }}
                  InputProps={{
                    endAdornment: <InputAdornment position="end">月</InputAdornment>,
                  }}
                />
                <TextField
                  id="year-number"
                  name="year-number"
                  type="text"
                  size="small"
                  sx={{ width: 100, marginLeft: '8px' }}
                  InputProps={{
                    endAdornment: <InputAdornment position="end">日</InputAdornment>,
                  }}
                />
              </TableCell>
              <TableCell align="left">
                <TextField
                  id="year-number"
                  name="year-number"
                  type="text"
                  size="small"
                  sx={{ width: 150, marginLeft: '8px' }}
                  InputProps={{
                    endAdornment: <InputAdornment position="end">年</InputAdornment>,
                  }}
                />
                <TextField
                  id="year-number"
                  name="year-number"
                  type="text"
                  size="small"
                  sx={{ width: 150, marginLeft: '8px' }}
                  InputProps={{
                    endAdornment: <InputAdornment position="end">月</InputAdornment>,
                  }}
                />
              </TableCell>
              <TableCell align="left">
                <TextField
                  id="year-number"
                  name="year-number"
                  type="text"
                  size="small"
                  sx={{ width: 150, marginLeft: '8px' }}
                  InputProps={{
                    endAdornment: <InputAdornment position="end">年</InputAdornment>,
                  }}
                />
                <TextField
                  id="year-number"
                  name="year-number"
                  type="text"
                  size="small"
                  sx={{ width: 150, marginLeft: '8px' }}
                  InputProps={{
                    endAdornment: <InputAdornment position="end">月</InputAdornment>,
                  }}
                />
              </TableCell>
              <TableCell align="left">旧姓:藤井</TableCell>
              <TableCell align="center">
                <Checkbox {...label} defaultChecked />
              </TableCell>
            </TableRow>
            {/* End Rows 4 */}

            {/* Start Rows 5 */}
            <TableRow hover role="checkbox" tabIndex={-1}>
              <TableCell align="left">5</TableCell>
              <TableCell align="left">山下真央</TableCell>
              <TableCell align="left">
                <FormControl size="small">
                  <Select
                    labelId="nursery-school-label"
                    id="nursery-school-select"
                    sx={{ backgroundColor: "white", width: 90 }}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>施設長</MenuItem>
                    <MenuItem value={2}>副園長</MenuItem>
                    <MenuItem value={3}>教頭</MenuItem>
                    <MenuItem value={4}>主幹教諭</MenuItem>
                    <MenuItem value={5}>主任保育士</MenuItem>
                    <MenuItem value={6}>教諭</MenuItem>
                    <MenuItem value={7}>保育士</MenuItem>
                    <MenuItem value={8}>看護師</MenuItem>
                    <MenuItem value={9}>准看護師</MenuItem>
                    <MenuItem value={10}>調理士</MenuItem>
                    <MenuItem value={11}>調理士(栄養士)</MenuItem>
                    <MenuItem value={12}>栄養士</MenuItem>
                    <MenuItem value={13}>事務員</MenuItem>
                    <MenuItem value={14}>用務員</MenuItem>
                    <MenuItem value={15}>パート保育士</MenuItem>
                    <MenuItem value={16}>パート調理士</MenuItem>
                    <MenuItem value={17}>その他</MenuItem>
                  </Select>
                </FormControl>
              </TableCell>
              <TableCell align="left">
                <FormControl size="small">
                  <Select
                    labelId="nursery-school-label"
                    id="nursery-school-select"
                    sx={{ backgroundColor: "white", width: 70 }}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>令和</MenuItem>
                    <MenuItem value={2}>平成</MenuItem>
                    <MenuItem value={3}>昭和</MenuItem>
                  </Select>
                </FormControl>
                <TextField
                  id="year-number"
                  name="year-number"
                  type="text"
                  size="small"
                  sx={{ width: 100 }}
                  InputProps={{
                    endAdornment: <InputAdornment position="end">年</InputAdornment>,
                  }}
                />
                <TextField
                  id="year-number"
                  name="year-number"
                  type="text"
                  size="small"
                  sx={{ width: 100, marginLeft: '8px' }}
                  InputProps={{
                    endAdornment: <InputAdornment position="end">月</InputAdornment>,
                  }}
                />
                <TextField
                  id="year-number"
                  name="year-number"
                  type="text"
                  size="small"
                  sx={{ width: 100, marginLeft: '8px' }}
                  InputProps={{
                    endAdornment: <InputAdornment position="end">日</InputAdornment>,
                  }}
                />
              </TableCell>
              <TableCell align="left">
                <TextField
                  id="year-number"
                  name="year-number"
                  type="text"
                  size="small"
                  sx={{ width: 150, marginLeft: '8px' }}
                  InputProps={{
                    endAdornment: <InputAdornment position="end">年</InputAdornment>,
                  }}
                />
                <TextField
                  id="year-number"
                  name="year-number"
                  type="text"
                  size="small"
                  sx={{ width: 150, marginLeft: '8px' }}
                  InputProps={{
                    endAdornment: <InputAdornment position="end">月</InputAdornment>,
                  }}
                />
              </TableCell>
              <TableCell align="left">
                <TextField
                  id="year-number"
                  name="year-number"
                  type="text"
                  size="small"
                  sx={{ width: 150, marginLeft: '8px' }}
                  InputProps={{
                    endAdornment: <InputAdornment position="end">年</InputAdornment>,
                  }}
                />
                <TextField
                  id="year-number"
                  name="year-number"
                  type="text"
                  size="small"
                  sx={{ width: 150, marginLeft: '8px' }}
                  InputProps={{
                    endAdornment: <InputAdornment position="end">月</InputAdornment>,
                  }}
                />
              </TableCell>
              <TableCell align="left"></TableCell>
              <TableCell align="center">
                <Checkbox {...label} defaultChecked />
              </TableCell>
            </TableRow>
            {/* End Rows 5 */}

            {/* Start Footer Table 1 */}
            <TableRow hover role="checkbox" tabIndex={-1}>
              <TableCell align="center" colSpan={2}>合　　計</TableCell>
              <TableCell align="left" colSpan={3}>Ａ 5 人</TableCell>
              <TableCell align="left" colSpan={3}>
                <TextField
                  id="year-number"
                  name="year-number"
                  type="text"
                  size="small"
                  disabled
                  sx={{ width: 150, marginLeft: '8px', backgroundColor: '#D3D3D3' }}
                  InputProps={{
                    endAdornment: <InputAdornment position="end">年</InputAdornment>,
                  }}
                />
                <TextField
                  id="year-number"
                  name="year-number"
                  type="text"
                  size="small"
                  disabled
                  sx={{ width: 150, marginLeft: '8px', backgroundColor: '#D3D3D3' }}
                  InputProps={{
                    endAdornment: <InputAdornment position="end">月</InputAdornment>,
                  }}
                />
              </TableCell>
            </TableRow>
            {/* End Footer Table 1 */}

            {/* Start Footer Table 2 */}
            <TableRow hover role="checkbox" tabIndex={-1}>
              <TableCell align="center" colSpan={3}>職員１人当り 平均勤続年数</TableCell>
              <TableCell align="center" colSpan={5}>（算式）　Ｂ÷Ａ＝Ｃ 　　　　（6か月以上の端数は切り上げ）</TableCell>
            </TableRow>
            {/* End Footer Table 2 */}

          </TableBody>
        </Table>
      </TableContainer>
      {/* End Table 1 */}

      {/* Start 注）Grid */}
      <Grid container className='pt-3' justifyContent="start">
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-start'>
            注）
          </Typography>
        </Grid>
      </Grid>
      {/* End 注）Grid */}

      {/* Start 1 職員1人当たり平均勤続年数のC欄の算定に当たっては、6か月以上の端数は1年とし、6か月未満の端数は切り捨てるものとすること。 Grid */}
      <Grid container justifyContent="start">
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-start'>
            1 職員1人当たり平均勤続年数のC欄の算定に当たっては、6か月以上の端数は1年とし、6か月未満の端数は切り捨てるものとすること。
          </Typography>
        </Grid>
      </Grid>
      {/* End 1 職員1人当たり平均勤続年数のC欄の算定に当たっては、6か月以上の端数は1年とし、6か月未満の端数は切り捨てるものとすること。 Grid */}

      {/* Start 2 個々の職員の勤続年数の算定に当たっては、各年度4月1日現在により算定すること。 Grid */}
      <Grid container className='pt-2' justifyContent="start">
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='text-start'>
            2 個々の職員の勤続年数の算定に当たっては、各年度4月1日現在により算定すること。
          </Typography>
        </Grid>
      </Grid>
      {/* End2 個々の職員の勤続年数の算定に当たっては、各年度4月1日現在により算定すること。 Grid */}

      {/* Start 3 1日6時間未満又は月20日末満勤務の職員は含めないものとする。 Grid */}
      <Grid container className='pt-2' justifyContent="start">
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='text-start'>
            3 1日6時間未満又は月20日末満勤務の職員は含めないものとする。
          </Typography>
        </Grid>
      </Grid>
      {/* End3 1日6時間未満又は月20日末満勤務の職員は含めないものとする。 Grid */}

      {/* Start 4「新規採用職員等」の欄は、今和3年度認定申請書と比較して、変更(新規採用、勤務年数の変更など)が生じている職員について、チェック(「レ」)すること。 Grid */}
      <Grid container className='pt-2' justifyContent="start">
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='text-start'>
            4「新規採用職員等」の欄は、今和3年度認定申請書と比較して、変更(新規採用、勤務年数の変更など)が生じている職員について、チェック(「レ」)すること。
          </Typography>
        </Grid>
      </Grid>
      {/* End 4「新規採用職員等」の欄は、今和3年度認定申請書と比較して、変更(新規採用、勤務年数の変更など)が生じている職員について、チェック(「レ」)すること。 Grid */}


    </>
  );
}






























