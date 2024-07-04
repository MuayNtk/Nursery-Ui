import { FormControl, Grid, MenuItem, Paper, Select, Table, TableCell, TableContainer, TableHead, TableRow, TextField, Typography, InputAdornment, InputLabel, TableBody, Divider } from "@mui/material";
import YearForm from "../../componentsform/YearForm";
import MonthForm from "../../componentsform/MonthForm";
import DayForm from "../../componentsform/DayForm";


export default function EnhancementForm() {

  return (
    <>

      {/* Start 様式第1号 Grid */}
      <Grid container className='pt-3 pl-3' justifyContent="center">
        <Grid item xs={3} sm={3} md={2} lg={2}>
          <Typography fontWeight="bold" sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-center'>
            様式第1号
          </Typography>
        </Grid>
      </Grid>
      {/* End 様式第1号 Grid */}

      {/* Start 園番号 Grid */}
      <Grid container className='pt-3' justifyContent="start">
        <Grid item xs={2} sm={1.5} md={1} lg={1}>
          <Typography fontWeight="bold" sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 pl-3'>
            園番号
          </Typography>
        </Grid>
        <Grid item xs={4} sm={3} md={3} lg={1.5}>
          <TextField id="school-number" name="school-number" type="text" size="small" fullWidth sx={{ backgroundColor: 'white' }} />
        </Grid>
      </Grid>
      {/* End 園番号 Grid */}

      {/* Start 保育体制強化事業補助金交付申請書 Grid */}
      <Grid container className='pt-3 pl-3' justifyContent="center">
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-center'>
            <Divider>保育体制強化事業補助金交付申請書</Divider>
          </Typography>
        </Grid>
      </Grid>
      {/* End 保育体制強化事業補助金交付申請書 Grid */}

      {/* Start 令和 Grid */}
      <Grid container className='pt-7' justifyContent="start" sx={{ ml: { xs: 3, sm: 0, md: 1.5, lg: 0.5 } }}>
        <Grid item xs={2} sm={1.5} md={1} lg={1.5}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' }, mr: 2 }} className='pt-2 text-end'>
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
        <Grid item xs={4.5} sm={2.5} md={1.5} lg={1} sx={{ ml: { xs: 5, sm: 0.5, md: 1, lg: 2 }, mt: { xs: 1, sm: 0, md: 0, lg: 0 } }}>
          <MonthForm />
        </Grid>
        <Grid item xs={3.5} sm={2} md={1} lg={1} sx={{ ml: { xs: -2, sm: 0.5, md: 1, lg: 2 }, mt: { xs: 1, sm: 0, md: 0, lg: 0 } }}>
          <DayForm />
        </Grid>
        <Grid item xs={9} sm={2} md={1} lg={1} sx={{ ml: { xs: -20, sm: 0.5, md: 10, lg: 15 } }}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-3 text-end'>
            あて先 :
          </Typography>
        </Grid>
        <Grid item xs={3} sm={3} md={1} lg={1} sx={{ ml: { xs: 0.5, sm: 1, md: 1, lg: 1 } }}>
          <Typography fontWeight="bold" sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-3 text-start'>
            福岡市長
          </Typography>
        </Grid>
      </Grid>
      {/* End 令和 Grid */}

      {/* Start 法人名 Grid */}
      <Grid container className='pt-5' justifyContent="start">
        <Grid item xs={4.65} sm={2.5} md={2} lg={1.5}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 pr-3 text-end'>
            法人名 :
          </Typography>
        </Grid>
        <Grid item xs={6} sm={6} md={5} lg={3}>
          <Typography fontWeight="bold" sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-start'>
            社会福祉法人つばさ福祉会
          </Typography>
        </Grid>
      </Grid>
      {/* End 法人名 Grid */}

      {/* Start 法人所在地 Grid */}
      <Grid container className='pt-5' justifyContent="start">
        <Grid item xs={4.65} sm={2.5} md={2} lg={1.5}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 pr-3 text-end'>
            法人所在地 :
          </Typography>
        </Grid>
        <Grid item xs={6} sm={6} md={5} lg={5}>
          <Typography fontWeight="bold" sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-start'>
            〒881-0032 崎県都市白馬町3地
          </Typography>
        </Grid>
      </Grid>
      {/* End 法人所在地 Grid */}

      {/* Start 代表者職・名 Grid */}
      <Grid container className='pt-5' justifyContent="start">
        <Grid item xs={4.65} sm={3} md={2} lg={1.5}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 pr-3 text-end'>
            代表者職・名 :
          </Typography>
        </Grid>
        <Grid item xs={4} sm={3} md={2} lg={5}>
          <Typography fontWeight="bold" sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-start'>
            理事長部子
          </Typography>
        </Grid>
      </Grid>
      {/* End 代表者職・名 Grid */}

      {/* Start 施設名 Grid */}
      <Grid container className='pt-5' justifyContent="start">
        <Grid item xs={4.65} sm={2.5} md={2} lg={1.5}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 pr-3 text-end'>
            施設名 :
          </Typography>
        </Grid>
        <Grid item xs={3} sm={3} md={2} lg={5}>
          <Typography fontWeight="bold" sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-start'>
            理事長部子
          </Typography>
        </Grid>
      </Grid>
      {/* End 施設名 Grid */}

      {/* Start Text Center Content Grid */}
      <Grid container className='pt-3' justifyContent="start" sx={{ pl: { xs: 3, sm: 5, md: 10, lg: 10 }, pr: { xs: 3, sm: 5, md: 10, lg: 15 }, }}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-justify'>
            令和5年度保育体制強化事業について、補助金の交付を下記のとおり申請します。
            福岡市保育体制強化事業補助金の交付要件である「本市の市税を滞納していないこと」の確認に当たり、税務担当課に
            「保育体制強化事業補助金交付申請書」が開示され、市税等の課税状況及び納付状況についての照会がなされることに同
            意します。
          </Typography>
        </Grid>
      </Grid>
      {/* End Text Center Content Grid */}

      {/* Start Text Center Content Grid */}
      <Grid container className='pt-5' justifyContent="start" sx={{ pl: { xs: 3, sm: 5, md: 10, lg: 10 }, pr: { xs: 3, sm: 5, md: 10, lg: 15 }, }}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-justify'>
            福岡市保育体制強化事業補助金の交付要件である「福岡市暴力団排除条例(平成22年福岡市条例第30号)第2条第2号
            に規定する暴力団員、法人でその役員のうちに同号に該当する者のあるものは同条例第6条に規定する暴力団若しくは
            暴力団員と密接な関係を有する者でないこと」の確認に当たり、福岡県警察に照会がなされることに同意します。
          </Typography>
        </Grid>
      </Grid>
      {/* End Text Center Content Grid */}

      {/* Start 記 Grid */}
      <Grid container className='pt-5' justifyContent="center">
        <Grid item xs={3} sm={3} md={2} lg={2}>
          <Typography fontWeight="bold" sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-center'>
            記
          </Typography>
        </Grid>
      </Grid>
      {/* End 記 Grid */}

      {/* Start 交付申請額 Grid */}
      <Grid container className='pt-5' justifyContent="start" sx={{ ml: { xs: 0, sm: 2, md: 5, lg: 6 } }}>
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

      {/* Start ※収入・支出の部の計は一致 Grid */}
      <Grid container className='pt-5' justifyContent="start" sx={{ pl: { xs: 3, sm: 5, md: 10, lg: 10 }, pr: { xs: 3, sm: 5, md: 10, lg: 15 }, }}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' }, color: '#FF9900' }} className='pt-2 text-justify'>
            ※収入・支出の部の計は一致
          </Typography>
        </Grid>
      </Grid>
      {/* End ※収入・支出の部の計は一致 Grid */}

      {/* Start Table 1 */}
      <Grid container className='pt-3' justifyContent="center">
        <TableContainer component={Paper} className="mt-5" sx={{ width: { xs: 'auto', sm: 'auto', md: 'auto', lg: 'auto' } }}>
          <Table sx={{ minWidth: 800 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left" style={{ width: 350, fontWeight: "bold" }}>区分</TableCell>
                <TableCell align="left" style={{ fontWeight: "bold" }}>金額</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow hover role="checkbox" tabIndex={-1}>
                <TableCell align="left">収入の部</TableCell>
                <TableCell align="left"></TableCell>
              </TableRow>
              <TableRow hover role="checkbox" tabIndex={-1}>
                <TableCell align="left">福岡市補助金収入</TableCell>
                <TableCell align="left">
                  <TextField
                    className='w-full'
                    id="subsidy-income"
                    name="subsidy-income"
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
                </TableCell>
              </TableRow>
              <TableRow hover role="checkbox" tabIndex={-1}>
                <TableCell align="left">自己資金</TableCell>
                <TableCell align="left">
                  <TextField
                    className='w-full'
                    id="own-resources"
                    name="own-resources"
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
                </TableCell>
              </TableRow>
              <TableRow hover role="checkbox" tabIndex={-1}>
                <TableCell align="left">計</TableCell>
                <TableCell align="left">0</TableCell>
              </TableRow>
              <TableRow hover role="checkbox" tabIndex={-1}>
                <TableCell align="left">支出の部</TableCell>
                <TableCell align="left"></TableCell>
              </TableRow>
              <TableRow hover role="checkbox" tabIndex={-1}>
                <TableCell align="left">人件費等</TableCell>
                <TableCell align="left">
                  <TextField
                    className='w-full'
                    id="personnel-expenses"
                    name="personnel-expenses"
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
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      {/* End Table 1 */}

      {/* Start ※雇用契約書、派遣契約書の写しを添付すること。 Grid */}
      <Grid container className='pt-5' justifyContent="start" sx={{ pl: { xs: 3, sm: 5, md: 10, lg: 10 }, pr: { xs: 3, sm: 5, md: 10, lg: 15 }, }}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' }, color: '#FF9900' }} className='pt-2 text-justify'>
            ※雇用契約書、派遣契約書の写しを添付すること。
          </Typography>
        </Grid>
      </Grid>
      {/* End ※雇用契約書、派遣契約書の写しを添付すること。 Grid */}

      {/* Start ※別添1-1、1-2及び雇用契約書等の写しを添付すること Grid */}
      <Grid container className='pt-5' justifyContent="start" sx={{ pl: { xs: 3, sm: 5, md: 10, lg: 10 }, pr: { xs: 3, sm: 5, md: 10, lg: 15 }, }}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' }, color: '#FF9900' }} className='pt-2 text-justify'>
            ※別添1-1、1-2及び雇用契約書等の写しを添付すること
          </Typography>
        </Grid>
      </Grid>
      {/* End ※別添1-1、1-2及び雇用契約書等の写しを添付すること Grid */}


    </>
  );
}
