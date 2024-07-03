import { Card, FormControl, Grid, MenuItem, Paper, Select, Table, TableCell, TableContainer, TableHead, TableRow, TextField, Typography, InputAdornment, InputLabel, TableBody } from "@mui/material";
import YearForm from "../../componentsform/YearForm";
import MonthForm from "../../componentsform/MonthForm";
import DayForm from "../../componentsform/DayForm";


export default function LunchForm() {

  return (
    <>
      <Typography
        component="div"
        sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, fontWeight: 'bold', }}
        className='flex justify-start h-11 pt-3 pl-5'
        bgcolor={"#CCF0FD"}>
        福岡市保育所等物価高騰対策支援金申請書兼請求書
      </Typography>

      {/* Start 園番号 Grid */}
      <Grid container className='pt-3' justifyContent="end">
        <Grid item xs={2} sm={1.5} md={1} lg={1}>
          <Typography fontWeight="bold" sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2'>
            園番号
          </Typography>
        </Grid>
        <Grid item xs={4} sm={3} md={3} lg={1.5}>
          <TextField id="schoolnumber" name="schoolnumber" type="text" size="small" fullWidth sx={{ backgroundColor: 'white' }} />
        </Grid>
      </Grid>
      {/* End 園番号 Grid */}

      {/* Start 令和 Grid */}
      <Grid container className='pt-2' justifyContent="end" sx={{ ml: { xs: -8, sm: 0, md: 1.5, lg: 0.5 } }}>
        <Grid item xs={2} sm={1.5} md={1} lg={1}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2'>
            令和 :
          </Typography>
        </Grid>
        <Grid item xs={3.2} sm={2.3} md={1.5} lg={1}>
          <FormControl size="small" fullWidth>
            <InputLabel id="date-label">平成</InputLabel>
            <Select
              labelId="date-label"
              id="date-select"
              label="平成"
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
        <Grid item xs={3.5} sm={2.5} md={1.5} lg={1} sx={{ ml: { xs: 0.5, sm: 0.5, md: 1, lg: 2 } }}>
          <YearForm />
        </Grid>
        <Grid item xs={4.5} sm={2.5} md={1.5} lg={1} sx={{ ml: { xs: 3, sm: 0.5, md: 1, lg: 2 }, mt: { xs: 1, sm: 0, md: 0, lg: 0 } }}>
          <MonthForm />
        </Grid>
        <Grid item xs={3.5} sm={2.5} md={2} lg={1} sx={{ ml: { xs: -2, sm: 0.5, md: 1, lg: 2 }, mt: { xs: 1, sm: 0, md: 0, lg: 0 } }}>
          <DayForm />
        </Grid>
      </Grid>
      {/* End 令和 Grid */}

      {/* Start Center Text Grid */}
      <Grid container className='pt-10' justifyContent="center">
        <Grid item xs={12} sm={11} md={10} lg={10}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-3 text-justify'>
            ・令和5年度福岡市保育所等給食支援費補助金について、補助金の交付を下記のとおり申請します。
          </Typography>
        </Grid>
        <Grid item xs={12} sm={11} md={10} lg={10}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-3 text-justify'>
            ・福岡市保育所等給食支援費補助金交付要綱第14条第4項の確認にあたり、福岡県警察に照会がなされることに同意します。
          </Typography>
        </Grid>
        <Grid item xs={12} sm={11} md={10} lg={10}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-3 text-justify'>
            ・福岡市保育所等給食支援費補助金交付要綱第5条(2)の確認にあたり、税務担当課に「福岡市保育所等給食支援費補助金交付申請書」が開示され、市税等
            の課税状況及び納付状況についての照会がなされることに同意します。
          </Typography>
        </Grid>
      </Grid>
      {/* End Center Text Grid */}

      {/* Start 1下記のいずれかに該当していること(を記載すること)。 Card */}
      <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-10' sx={{ ml: { xs: 3, sm: 3, md: 2, lg: 2 } }}>
        <Card sx={{ bgcolor: "pink", width: { xs: 300, sm: 300, md: 320, lg: 430 }, height: 40 }}>
          <Typography component='div' sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 15 }, mt: { xs: 0.5, sm: 0.5, md: 0.5, lg: 0 } }} className="pt-2 text-center">
            1 下記のいずれかに該当していること(を記載すること)。
          </Typography>
        </Card>
      </Grid>
      {/* End 1下記のいずれかに該当していること(を記載すること)。 Card */}

      {/* Start Table 1 */}
      <Grid container className='pt-3' justifyContent="center">
        <TableContainer component={Paper} className="mt-5" sx={{ width: { xs: 'auto', sm: 'auto', md: 'auto', lg: 700 } }}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>物価上昇に起因する給食費の値上げを行っていない。</TableCell>
                <TableCell>
                  <FormControl size="small" sx={{ width: 70 }} className="scale-75">
                    <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={1}>1</MenuItem>
                      <MenuItem value={2}>2</MenuItem>
                      <MenuItem value={3}>3</MenuItem>
                    </Select>
                  </FormControl>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  既に徴収した物価上昇に起因する値上げ相当分について、保護者へ返還を行っている又は今年
                  度中に行う予定である。
                </TableCell>
                <TableCell>
                  <FormControl size="small" sx={{ width: 70 }} className="scale-75">
                    <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={1}>o</MenuItem>
                      <MenuItem value={2}>／</MenuItem>
                      <MenuItem value={3}>△</MenuItem>
                    </Select>
                  </FormControl>
                </TableCell>
              </TableRow>
            </TableHead>
          </Table>
        </TableContainer>
      </Grid>
      {/* End Table 1 */}

      {/* Start 2 交付申額 Card */}
      <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-10' sx={{ ml: { xs: 3, sm: 3, md: 2, lg: 2 } }}>
        <Card sx={{ bgcolor: "pink", width: { xs: 100, sm: 100, md: 130, lg: 150 }, height: 40 }}>
          <Typography component='div' sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 15 }, mt: { xs: 0.5, sm: 0.5, md: 0.5, lg: 0 } }} className="pt-2 text-center">
            2 交付申額
          </Typography>
        </Card>
      </Grid>
      {/* End 2 交付申額 Card */}

      {/* Start 交付申請額 Grid */}
      <Grid container className='pt-5' justifyContent="start" sx={{ ml: { xs: 0, sm: 5, md: 10, lg: 20 } }}>
        <Grid item xs={4.5} sm={3.5} md={2.5} lg={1.5}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2'>
            交付申請額 :
          </Typography>
        </Grid>
        <Grid item xs={6} sm={5} md={3} lg={2} sx={{ ml: -2 }}>
          <TextField
            className='w-full'
            id="amount-requested"
            name="amount-requested"
            label=""
            type="text"
            size='small'
            sx={{
              backgroundColor: "white",
            }}
            InputProps={{
              endAdornment: <InputAdornment position="end">円</InputAdornment>,
            }}
          />
        </Grid>
      </Grid>
      {/* End 交付申請額 Grid */}

      {/* Start 3 補助金の交付方法 Card */}
      <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-10' sx={{ ml: { xs: 3, sm: 3, md: 2, lg: 2 } }}>
        <Card sx={{ bgcolor: "pink", width: { xs: 150, sm: 150, md: 170, lg: 200 }, height: 40 }}>
          <Typography component='div' sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 15 }, mt: { xs: 0.5, sm: 0.5, md: 0.5, lg: 0 } }} className="pt-2 text-center">
            3 補助金の交付方法
          </Typography>
        </Card>
      </Grid>
      {/* End 3 補助金の交付方法 Card */}

      {/* Start 交付申請額 Grid */}
      <Grid container className='pt-5' justifyContent="start" >
        <Grid item xs={4.5} sm={3.5} md={2.5} lg={1.5} sx={{ ml: { xs: 0, sm: 5, md: 10, lg: 18 } }}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2'>
            補助金の交付方法 :
          </Typography>
        </Grid>
        <Grid item xs={3.2} sm={2.3} md={1.5} lg={1.5}>
          <FormControl size="small" fullWidth>
            <InputLabel id="settlement-payment-label">精算払</InputLabel>
            <Select
              labelId="settlement-payment-label"
              id="settlement-payment-select"
              label="精算払"
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
      {/* End 交付申請額 Grid */}

      {/* Start 4 補助事業の執行に関する収支計画 Card */}
      <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-10' sx={{ ml: { xs: 3, sm: 3, md: 2, lg: 2 } }}>
        <Card sx={{ bgcolor: "pink", width: { xs: 220, sm: 220, md: 250, lg: 300 }, height: 40 }}>
          <Typography component='div' sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 15 }, mt: { xs: 0.5, sm: 0.5, md: 0.5, lg: 0 } }} className="pt-2 text-center">
            4 補助事業の執行に関する収支計画
          </Typography>
        </Card>
      </Grid>
      {/* End 4 補助事業の執行に関する収支計画 Card */}

      {/* Start ※収入・支出の部の計は一致 Grid */}
      <Grid container className='pt-5' justifyContent="start" >
        <Grid item xs={6} sm={7} md={6} lg={5} sx={{ ml: { xs: 0, sm: 0, md: 0, lg: 0 } }}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2'>
            ※収入・支出の部の計は一致
          </Typography>
        </Grid>
      </Grid>
      {/* End ※収入・支出の部の計は一致 Grid */}

      {/* Start Table 2 */}
      <Grid container className='pt-3' justifyContent="center">
        <TableContainer component={Paper} className="mt-5" sx={{ width: { xs: 'auto', sm: 'auto', md: 'auto', lg: 'auto' } }}>
          <Table sx={{ minWidth: 750 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell style={{ fontWeight: "bold" }} colSpan={2} align="left">区　　分</TableCell>
                <TableCell style={{ fontWeight: "bold" }} align="center">金　額</TableCell>
                <TableCell style={{ fontWeight: "bold" }} align="center">說　明</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell style={{ width: 50 }} rowSpan={3} align="left">收入の部</TableCell>
                <TableCell align="left">福岡市補助金収入</TableCell>
                <TableCell align="right">1,157,100円</TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="left">自　己　資　金</TableCell>
                <TableCell align="right">0</TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="right">計</TableCell>
                <TableCell align="right">1,157,100円</TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            </TableBody>
            <TableRow>
              <TableCell style={{ width: 50 }} rowSpan={2} align="left">收入の部</TableCell>
              <TableCell style={{ width: 350 }} align="left">保育所等給食支援費補助金の対象事業に要する費用(物価上昇影響額相当)</TableCell>
              <TableCell style={{ width: 200 }} align="right">1,157,100円</TableCell>
              <TableCell style={{ width: 200 }} align="right"></TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="right">計</TableCell>
              <TableCell align="right">1,157,100円</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </Table>
        </TableContainer>
      </Grid>
      {/* End Table 2 */}


    </>
  );
}
