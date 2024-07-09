import { Grid, Typography, TextField, InputAdornment, FormControl, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

export default function RequestBenefitsForm() {

  return (
    <>
      <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-5 pl-3 justify-end' >
        <Typography component='div' fontWeight={500} className="pl-5 lg:pl-24 pt-6">
          團番号:
        </Typography>
        <Grid item xs={7.5} sm={7} md={3} lg={2}>
          <TextField
            className='w-full'
            id="furigana-input"
            label=""
            type="text"
            size='small'
            sx={{
              backgroundColor: "white",
            }}
          />
        </Grid>
      </Grid>
      <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-10 pl-3 justify-start' >
        <Typography
          component="div"
          sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, fontWeight: 'bold', }}
          className='flex justify-start h-11 pt-3 pl-5 w-full'
          bgcolor={"#CCF0FD"}>
          令和5年度 加算算定対象人数等認定申請書　(处遇改善等加算Ⅱ)
        </Typography>
      </Grid>
      <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-5 pl-3 justify-start' >
        <Typography component='div' fontWeight={500} className="pl-5 lg:pl-24 pt-6" sx={{ fontWeight: 'bold', }}>
          福岡市長　殿
        </Typography>
      </Grid>

      <Grid container spacing={2} className='pt-7'>
        <Grid item xs={4.5} sm={4} md={4} lg={3}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
            作成日 :
          </Typography>
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={2}>
          <TextField
            id="addition-rate"
            name="addition-rate"
            type="text" size="small"
            fullWidth
            label="令和"
            sx={{ backgroundColor: 'white' }}
            InputProps={{
              endAdornment: <InputAdornment position="end">年</InputAdornment>,
            }}
          />
        </Grid>
        <Grid item xs={6} sm={5} md={4} lg={2}>
          <TextField
            id="addition-rate"
            name="addition-rate"
            type="text" size="small"
            fullWidth
            sx={{ backgroundColor: 'white' }}
            InputProps={{
              endAdornment: <InputAdornment position="end">月</InputAdornment>,
            }}
          />
        </Grid>
        <Grid item xs={6} sm={5} md={4} lg={2} sx={{ marginLeft: { sx: 15, md: 29, lg: 1 } }}>
          <TextField
            id="addition-rate"
            name="addition-rate"
            type="text" size="small"
            fullWidth
            sx={{ backgroundColor: 'white' }}
            InputProps={{
              endAdornment: <InputAdornment position="end">日</InputAdornment>,
            }}
          />
        </Grid>
      </Grid>

      <Grid container spacing={2} className='pt-7'>
        <Grid item xs={4.5} sm={4} md={4} lg={3}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
            市町村名 :
          </Typography>
        </Grid>
        <Grid item xs={6} sm={5} md={4} lg={3}>
          <TextField id="school-number" name="school-number" type="text" size="small" fullWidth sx={{ backgroundColor: 'white' }} />
        </Grid>
      </Grid>

      <Grid container spacing={2} className='pt-7'>
        <Grid item xs={4.5} sm={4} md={4} lg={3}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
            施設・事業所名 :
          </Typography>
        </Grid>
        <Grid item xs={6} sm={5} md={4} lg={3}>
          <TextField id="school-number" name="school-number" type="text" size="small" fullWidth sx={{ backgroundColor: 'white' }} />
        </Grid>
      </Grid>

      <Grid container spacing={2} className='pt-7'>
        <Grid item xs={4.5} sm={4} md={4} lg={3}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
            施設·事業所類型 :
          </Typography>
        </Grid>
        <Grid item xs={6} sm={5} md={4} lg={3}>
          <TextField id="school-number" name="school-number" type="text" size="small" fullWidth sx={{ backgroundColor: 'white' }} />
        </Grid>
      </Grid>

      <Grid container spacing={2} className='pt-7'>
        <Grid item xs={4.5} sm={4} md={4} lg={3}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
            法人名・代表者職名 :
          </Typography>
        </Grid>
        <Grid item xs={6} sm={5} md={4} lg={3}>
          <TextField id="school-number" name="school-number" type="text" size="small" fullWidth sx={{ backgroundColor: 'white' }} />
        </Grid>
      </Grid>

      <Grid container spacing={2} className='pt-7'>
        <Grid item xs={4.5} sm={4} md={4} lg={3}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
            担当者職名 :
          </Typography>
        </Grid>
        <Grid item xs={6} sm={5} md={4} lg={3}>
          <TextField id="school-number" name="school-number" type="text" size="small" fullWidth sx={{ backgroundColor: 'white' }} />
        </Grid>
      </Grid>

      <Grid container spacing={2} className='pt-7'>
        <Grid item xs={4.5} sm={4} md={4} lg={3}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
            電話番号 :
          </Typography>
        </Grid>
        <Grid item xs={6} sm={5} md={4} lg={3}>
          <TextField id="school-number" name="school-number" type="text" size="small" fullWidth sx={{ backgroundColor: 'white' }} />
        </Grid>
      </Grid>

      <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-10 pl-3 justify-start' >
        <Typography
          component="div"
          sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, fontWeight: 'bold', }}
          className='flex justify-start h-11 pt-3 pl-5 w-full'
          bgcolor={"#CCF0FD"}>
          加算の要件について
        </Typography>
      </Grid>
      <Grid container className='pt-3' justifyContent="center">
        <TableContainer component={Paper} className="" sx={{ width: { xs: 'auto', sm: 'auto', md: 'auto', lg: 'auto' } }}>
          <Table sx={{ minWidth: 1000 }} aria-label="simple table">
            <TableHead >
              <TableRow>
                <TableCell style={{ width: 900, fontWeight: 'bold', background: '', }}>次の内容について、当てはまる項目を選択すること。</TableCell>
                <TableCell style={{ width: 20, fontWeight: 'bold', background: '', }} align="center"></TableCell>

              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow >
                <TableCell style={{ width: 20, }}>職員の職位、職責又は職務内容に応じた勤務条件等の要件及びこれに応じた賃金体系を定め、すべての職員に周知している。:</TableCell>
                <TableCell style={{ width: 20, }} align="center"><FormControl size="small" className="w-40">
                  <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>該当v</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                  </Select>
                </FormControl></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid >
      {/* End Table */}

      <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-10 pl-3 justify-start' >
        <Typography
          component="div"
          sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, fontWeight: 'bold', }}
          className='flex justify-start h-11 pt-3 pl-5 w-full'
          bgcolor={"#CCF0FD"}>
          加算適用月について
        </Typography>
      </Grid>
      <Grid container className='pt-3' justifyContent="start">
        <TableContainer component={Paper} className="" sx={{ width: { xs: 'auto', sm: 'auto', md: 'auto', lg: 'auto' } }}>
          <Table sx={{ minWidth: 500 }} aria-label="simple table">
            <TableHead >
              <TableRow>
                <TableCell style={{ width: 300, background: '', }}>加算適用開始月を記入して下さい。:</TableCell>
                <TableCell style={{ width: 20, background: '', }} align="center"><FormControl size="small" className="w-40">
                  <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>該当v</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                  </Select>
                </FormControl></TableCell>

              </TableRow>
            </TableHead>

          </Table>
        </TableContainer>
      </Grid >
      {/* End Table */}

      <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-14 pl-3 justify-start' >
        <Typography
          component="div"
          sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, fontWeight: 'bold', }}
          className='flex justify-start h-11 pt-3 pl-5 w-full'
          bgcolor={"#CCF0FD"}>
          加算額の算定に用いる職員数について
        </Typography>
      </Grid>

      <Grid container spacing={2} className='pt-7'>
        <Grid item xs={4.5} sm={4} md={4} lg={3}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
            ➀利用定員 :
          </Typography>
        </Grid>
        <Grid item xs={6} sm={5} md={4} lg={3}>
          <TextField id="school-number" name="school-number" type="text" size="small" InputProps={{
            endAdornment: <InputAdornment position="end">人</InputAdornment>,
          }} fullWidth sx={{ backgroundColor: 'white' }} />
        </Grid>
      </Grid>

      <Grid container spacing={2} className='pt-7'>
        <Grid item xs={4.5} sm={4} md={4} lg={3}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
            ➁年齢別 児童数:　4歲以上児 :
          </Typography>
        </Grid>
        <Grid item xs={6} sm={5} md={4} lg={3}>
          <TextField id="school-number" name="school-number" type="text" size="small" InputProps={{
            endAdornment: <InputAdornment position="end">人</InputAdornment>,
          }} fullWidth sx={{ backgroundColor: 'white' }} />
        </Grid>
      </Grid>

      <Grid container spacing={2} className='pt-7'>
        <Grid item xs={4.5} sm={4} md={4} lg={3}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
            3歲児 :
          </Typography>
        </Grid>
        <Grid item xs={6} sm={5} md={4} lg={3}>
          <TextField id="school-number" name="school-number" type="text" size="small" InputProps={{
            endAdornment: <InputAdornment position="end">人</InputAdornment>,
          }} fullWidth sx={{ backgroundColor: 'white' }} />
        </Grid>
      </Grid>

      <Grid container spacing={2} className='pt-7'>
        <Grid item xs={4.5} sm={4} md={4} lg={3}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
            1,2歲 :
          </Typography>
        </Grid>
        <Grid item xs={6} sm={5} md={4} lg={3}>
          <TextField id="school-number" name="school-number" type="text" size="small" InputProps={{
            endAdornment: <InputAdornment position="end">人</InputAdornment>,
          }} fullWidth sx={{ backgroundColor: 'white' }} />
        </Grid>
      </Grid>

      <Grid container spacing={2} className='pt-7'>
        <Grid item xs={4.5} sm={4} md={4} lg={3}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
            0歲児 :
          </Typography>
        </Grid>
        <Grid item xs={6} sm={5} md={4} lg={3}>
          <TextField id="school-number" name="school-number" type="text" size="small" InputProps={{
            endAdornment: <InputAdornment position="end">人</InputAdornment>,
          }} fullWidth sx={{ backgroundColor: 'white' }} />
        </Grid>
      </Grid>

      <Grid container spacing={2} className='pt-7'>
        <Grid item xs={4.5} sm={4} md={4} lg={3}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
            保育所:　3歲児配置改善加算:
          </Typography>
        </Grid>
        <Grid item xs={6} sm={5} md={4} lg={1}>
          <TextField id="school-number" name="school-number" type="text" size="small" fullWidth sx={{ backgroundColor: 'white' }} />
        </Grid>
      </Grid>

      <Grid container spacing={2} className='pt-7'>
        <Grid item xs={4.5} sm={4} md={4} lg={3}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
            0歲児 :
          </Typography>
        </Grid>
        <Grid item xs={6} sm={5} md={4} lg={1}>
          <TextField id="school-number" name="school-number" type="text" size="small" fullWidth sx={{ backgroundColor: 'white' }} />
        </Grid>
      </Grid>

      <Grid container spacing={2} className='pt-7'>
        <Grid item xs={4.5} sm={4} md={4} lg={3}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
            保育標準時間認定の児童 該当
            の有無 :
          </Typography>
        </Grid>
        <Grid item xs={6} sm={5} md={4} lg={1}>
          <TextField id="school-number" name="school-number" type="text" size="small" fullWidth sx={{ backgroundColor: 'white' }} />
        </Grid>
      </Grid>

      <Grid container spacing={2} className='pt-7'>
        <Grid item xs={4.5} sm={4} md={4} lg={3}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
            主任保育士專任加算 :
          </Typography>
        </Grid>
        <Grid item xs={6} sm={5} md={4} lg={1}>
          <TextField id="school-number" name="school-number" type="text" size="small" fullWidth sx={{ backgroundColor: 'white' }} />
        </Grid>
      </Grid>

      <Grid container spacing={2} className='pt-7'>
        <Grid item xs={4.5} sm={4} md={4} lg={3}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
            事務職員雇上加算 :
          </Typography>
        </Grid>
        <Grid item xs={6} sm={5} md={4} lg={1}>
          <TextField id="school-number" name="school-number" type="text" size="small" fullWidth sx={{ backgroundColor: 'white' }} />
        </Grid>
      </Grid>

      <Grid container spacing={2} className='pt-7'>
        <Grid item xs={4.5} sm={4} md={4} lg={3}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
            休日保育加算 :
          </Typography>
        </Grid>
        <Grid item xs={6} sm={5} md={4} lg={1}>
          <TextField id="school-number" name="school-number" type="text" size="small" fullWidth sx={{ backgroundColor: 'white' }} />
        </Grid>
      </Grid>

      <Grid container spacing={2} className='pt-7'>
        <Grid item xs={4.5} sm={4} md={4} lg={3}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
            チーム保育推進加算 :
          </Typography>
        </Grid>
        <Grid item xs={6} sm={5} md={4} lg={3}>
          <TextField id="school-number" name="school-number" type="text" size="small" fullWidth sx={{ backgroundColor: 'white' }} />
        </Grid>
      </Grid>

      <Grid container spacing={2} className='pt-7'>
        <Grid item xs={4.5} sm={4} md={4} lg={3}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
            栄養管理加算(配置) :
          </Typography>
        </Grid>
        <Grid item xs={6} sm={5} md={4} lg={3}>
          <TextField id="school-number" name="school-number" type="text" size="small" fullWidth sx={{ backgroundColor: 'white' }} />
        </Grid>
      </Grid>

      <Grid container spacing={2} className='pt-7'>
        <Grid item xs={4.5} sm={4} md={4} lg={3}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
            ➀加算対象人数の基礎となる職員数 :
          </Typography>
        </Grid>
        <Grid item xs={6} sm={5} md={4} lg={3}>
          <TextField id="school-number" name="school-number" type="text" size="small" InputProps={{
            endAdornment: <InputAdornment position="end">人</InputAdornment>,
          }} fullWidth sx={{ backgroundColor: 'white' }} />
        </Grid>
      </Grid>

      <Grid container spacing={2} className='pt-7'>
        <Grid item xs={4.5} sm={4} md={4} lg={3}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
            ➁加算対象人数:　人数A　(@x1/3) :
          </Typography>
        </Grid>
        <Grid item xs={6} sm={5} md={4} lg={3}>
          <TextField id="school-number" name="school-number" type="text" size="small" InputProps={{
            endAdornment: <InputAdornment position="end">人</InputAdornment>,
          }} fullWidth sx={{ backgroundColor: 'white' }} />
        </Grid>
      </Grid>

      <Grid container spacing={2} className='pt-7'>
        <Grid item xs={4.5} sm={4} md={4} lg={3}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
            人数B　(@x1/5) :
          </Typography>
        </Grid>
        <Grid item xs={6} sm={5} md={4} lg={3}>
          <TextField id="school-number" name="school-number" type="text" size="small" InputProps={{
            endAdornment: <InputAdornment position="end">人</InputAdornment>,
          }} fullWidth sx={{ backgroundColor: 'white' }} />
        </Grid>
      </Grid>


      <Grid container className='pt-8' justifyContent="start">
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-start'>
            ※　1について各月平均の年齢別児童数とする場合は、算出方法を示した書類を添付すること。 
          </Typography>
        </Grid>
      </Grid>
      <Grid container className='' justifyContent="start">
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-start'>
            ※　2について算出方法を示した書類を添付すること。
          </Typography>
        </Grid>
      </Grid>











    </>
  );
}
