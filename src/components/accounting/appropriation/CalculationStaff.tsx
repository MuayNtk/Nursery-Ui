import { Button, FormControl, Grid, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField,  Typography, } from '@mui/material'
export default function CalculationStaff() {

  return (
    <>
      <Grid container className='h-14 pt-3' justifyContent="end" >
        <Grid item xs={6} sm={6} md={6} lg={3} className='pt-2 ' >
          <TextField
            className='w-full '
            id="-input"
            label="園番号"
            type="text"
            size='small'
            sx={{
              backgroundColor: "white",
              fontSize: { xs: 11, sm: 11, md: 11, lg: 16, },
              marginLeft: { xs: -2, sm: -1, md: -3, lg: -4, }
            }}
          />
        </Grid>
      </Grid>

      <Grid container className='h-14 pt-3' justifyContent="center" >
        <Grid item xs={12} sm={12} md={12} lg={12} className='pt-2 ' >
          <Typography
            component="div"
            sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, fontWeight: 'bold' }}
            className='flex justify-center'>
            【処遇改善等加算I加算対象職員数計算表(保育所)】
          </Typography>
        </Grid>
      </Grid>
      <Grid container className='h-14 pt-3 pl-4' justifyContent="center" >
        <Grid item xs={6} sm={6} md={6} lg={3} className='pt-2 ' >
          <TextField
            className='w-full '
            id="-input"
            label="施設.事業所名"
            type="text"
            size='small'
            sx={{
              backgroundColor: "white",
              fontSize: { xs: 11, sm: 11, md: 11, lg: 16, },
              marginLeft: { xs: -2, sm: -1, md: -3, lg: -4, }
            }}
          />
        </Grid>
      </Grid>


      <Grid container className='h-14 pt-10 pl-16' justifyContent="strat" >
        <Grid item xs={12} sm={12} md={12} lg={12} className='pt-2 ' >
          <Typography
            component="div"
            sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, fontWeight: 'bold' }}
            className='flex justify-start'>
            0.基礎情報
          </Typography>
        </Grid>
      </Grid>
      <Grid container className='pt-4' justifyContent="center">
        <TableContainer component={Paper} className="" sx={{ width: { xs: 'auto', sm: 'auto', md: 'auto', lg: 1000 } }}>
          <Table sx={{ minWidth: 500 }} aria-label="simple table">
            <TableHead >
              <TableRow>
                <TableCell style={{ width: 150, fontWeight: 'bold', background: '#D3DCF1', }}></TableCell>
                <TableCell style={{ width: 100, fontWeight: 'bold', background: '#D3DCF1', }} align="center">選択</TableCell>
                <TableCell style={{ width: 100, fontWeight: 'bold', background: '#D3DCF1', }} align="center">分園</TableCell>
                <TableCell style={{ width: 100, fontWeight: 'bold', background: '#D3DCF1', }} align="center">分園</TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{ width: 50, fontWeight: 'bold', }}>分園の有無(選択してください)</TableCell>
                <TableCell style={{ width: 100, fontWeight: 'bold', }} align="center">選択</TableCell>
                <TableCell style={{ width: 100, fontWeight: 'bold', }} align="center"> <FormControl size="small" sx={{ minWidth: 70 }}>
                  <Select
                    id="era-select"
                    name="era"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>なし</MenuItem>
                    <MenuItem value={20}>あり</MenuItem>
                  </Select>
                </FormControl></TableCell>
                <TableCell style={{ width: 100, fontWeight: 'bold', }} align="center">入力不要</TableCell>
              </TableRow>


            </TableHead>
            <TableBody>
              <TableRow >
                <TableCell style={{ width: 20, }}>利用定員数</TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center">
                  <TextField
                    className='w-24  '
                    id="-input"
                    label=""
                    type="text"
                    size='small'
                    sx={{
                      backgroundColor: "white",
                      fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }
                    }}
                  /></TableCell>
                <TableCell style={{ width: 20, }} align="center"><TextField
                  className='w-24 '
                  id="-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                    fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }
                  }}
                /></TableCell>
              </TableRow>
              <TableRow >
                <TableCell style={{ width: 20, }}>年齡別児童数</TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center">
                  <TextField
                    className='w-24  '
                    id="-input"
                    label=""
                    type="text"
                    size='small'
                    sx={{
                      backgroundColor: "white",
                      fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }
                    }}
                  /></TableCell>
                <TableCell style={{ width: 20, }} align="center"><TextField
                  className='w-24 '
                  id="-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                    fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }
                  }}
                /></TableCell>
              </TableRow>
              <TableRow >
                <TableCell style={{ width: 20, }}>4歲児以上児</TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center">
                  <TextField
                    className='w-24  '
                    id="-input"
                    label=""
                    type="text"
                    size='small'
                    sx={{
                      backgroundColor: "white",
                      fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }
                    }}
                  /></TableCell>
                <TableCell style={{ width: 20, }} align="center"><TextField
                  className='w-24 '
                  id="-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                    fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }
                  }}
                /></TableCell>
              </TableRow>
              <TableRow >
                <TableCell style={{ width: 20, }}>3歲児</TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center">
                  <TextField
                    className='w-24  '
                    id="-input"
                    label=""
                    type="text"
                    size='small'
                    sx={{
                      backgroundColor: "white",
                      fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }
                    }}
                  /></TableCell>
                <TableCell style={{ width: 20, }} align="center"><TextField
                  className='w-24 '
                  id="-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                    fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }
                  }}
                /></TableCell>
              </TableRow>
              <TableRow >
                <TableCell style={{ width: 20, }}>1、2歲</TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center">
                  <TextField
                    className='w-24  '
                    id="-input"
                    label=""
                    type="text"
                    size='small'
                    sx={{
                      backgroundColor: "white",
                      fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }
                    }}
                  /></TableCell>
                <TableCell style={{ width: 20, }} align="center"><TextField
                  className='w-24 '
                  id="-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                    fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }
                  }}
                /></TableCell>
              </TableRow>
              <TableRow >
                <TableCell style={{ width: 20, }}>0歲児</TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center">
                  <TextField
                    className='w-24  '
                    id="-input"
                    label=""
                    type="text"
                    size='small'
                    sx={{
                      backgroundColor: "white",
                      fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }
                    }}
                  /></TableCell>
              </TableRow>

            </TableBody>
          </Table>
        </TableContainer>
      </Grid >
      {/* End Table */}

      <Grid container className='h-14 pt-10 pl-16' justifyContent="strat" >
        <Grid item xs={12} sm={12} md={12} lg={12} className='pt-2 ' >
          <Typography
            component="div"
            sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, fontWeight: 'bold' }}
            className='flex justify-start'>
            1.加算対象人数の基礎となる職員数(人)
          </Typography>
        </Grid>
      </Grid>
      <Grid container className='pt-4' justifyContent="center">
        <TableContainer component={Paper} className="" sx={{ width: { xs: 'auto', sm: 'auto', md: 'auto', lg: 1000 } }}>
          <Table sx={{ minWidth: 1000 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell style={{ fontWeight: "bold", background: '#D3DCF1', }} rowSpan={1} align="center"></TableCell>
                <TableCell style={{ fontWeight: "bold", background: '#D3DCF1', }} colSpan={2} align="center">本園分</TableCell>
                <TableCell style={{ fontWeight: "bold", background: '#D3DCF1', }} colSpan={2} align="center">本園分</TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{ fontWeight: "bold", background: '#D3DCF1', }} align="center"></TableCell>
                <TableCell style={{ fontWeight: "bold", background: '#D3DCF1', }} align="center">選択項目</TableCell>
                <TableCell style={{ fontWeight: "bold", background: '#D3DCF1', }} align="center">職員数(自動計算)</TableCell>
                <TableCell style={{ fontWeight: "bold", background: '#D3DCF1', }} align="center">選択項目</TableCell>
                <TableCell style={{ fontWeight: "bold", background: '#D3DCF1', }} align="center">職員数(自動計算)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow >
                <TableCell style={{ width: 100, }}>年齢別配置基準による職員数</TableCell>
                <TableCell style={{ width: 20, }} align="center"><FormControl size="small" sx={{ minWidth: 70 }}>
                  <Select
                    id="era-select"
                    name="era"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>なし</MenuItem>
                    <MenuItem value={20}>あり</MenuItem>
                  </Select>
                </FormControl></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"><FormControl size="small" sx={{ minWidth: 70 }}>
                  <Select
                    id="era-select"
                    name="era"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>なし</MenuItem>
                    <MenuItem value={20}>あり</MenuItem>
                  </Select>
                </FormControl></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
              </TableRow>

              <TableRow >
                <TableCell style={{ width: 100, }}>4歲以上児</TableCell>
                <TableCell style={{ width: 20, }} align="center"><FormControl size="small" sx={{ minWidth: 70 }}>
                  <Select
                    id="era-select"
                    name="era"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>なし</MenuItem>
                    <MenuItem value={20}>あり</MenuItem>
                  </Select>
                </FormControl></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"><FormControl size="small" sx={{ minWidth: 70 }}>
                  <Select
                    id="era-select"
                    name="era"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>なし</MenuItem>
                    <MenuItem value={20}>あり</MenuItem>
                  </Select>
                </FormControl></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
              </TableRow>

              <TableRow >
                <TableCell style={{ width: 100, }}>3歲児</TableCell>
                <TableCell style={{ width: 20, }} align="center"><FormControl size="small" sx={{ minWidth: 70 }}>
                  <Select
                    id="era-select"
                    name="era"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>なし</MenuItem>
                    <MenuItem value={20}>あり</MenuItem>
                  </Select>
                </FormControl></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"><FormControl size="small" sx={{ minWidth: 70 }}>
                  <Select
                    id="era-select"
                    name="era"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>なし</MenuItem>
                    <MenuItem value={20}>あり</MenuItem>
                  </Select>
                </FormControl></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
              </TableRow>

              <TableRow >
                <TableCell style={{ width: 100, }}>3歲児配置改善加算</TableCell>
                <TableCell style={{ width: 20, }} align="center"><FormControl size="small" sx={{ minWidth: 70 }}>
                  <Select
                    id="era-select"
                    name="era"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>なし</MenuItem>
                    <MenuItem value={20}>あり</MenuItem>
                  </Select>
                </FormControl></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"><FormControl size="small" sx={{ minWidth: 70 }}>
                  <Select
                    id="era-select"
                    name="era"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>なし</MenuItem>
                    <MenuItem value={20}>あり</MenuItem>
                  </Select>
                </FormControl></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
              </TableRow>

              <TableRow >
                <TableCell style={{ width: 100, }}>1、2歲児</TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
              </TableRow>

              <TableRow >
                <TableCell style={{ width: 100, }}>0歲児</TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
              </TableRow>

              <TableRow >
                <TableCell style={{ width: 100, }}>小計(小点第一四捨五入)</TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
              </TableRow>

              <TableRow >
                <TableCell style={{ width: 100, }}>保育標準時間認定の児童</TableCell>
                <TableCell style={{ width: 20, }} align="center"><FormControl size="small" sx={{ minWidth: 70 }}>
                  <Select
                    id="era-select"
                    name="era"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>なし</MenuItem>
                    <MenuItem value={20}>あり</MenuItem>
                  </Select>
                </FormControl></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"><FormControl size="small" sx={{ minWidth: 70 }}>
                  <Select
                    id="era-select"
                    name="era"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>なし</MenuItem>
                    <MenuItem value={20}>あり</MenuItem>
                  </Select>
                </FormControl></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
              </TableRow>

              <TableRow >
                <TableCell style={{ width: 100, }}>主任保育士専任加算</TableCell>
                <TableCell style={{ width: 20, }} align="center"><FormControl size="small" sx={{ minWidth: 70 }}>
                  <Select
                    id="era-select"
                    name="era"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>なし</MenuItem>
                    <MenuItem value={20}>あり</MenuItem>
                  </Select>
                </FormControl></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"><FormControl size="small" sx={{ minWidth: 70 }}>
                  <Select
                    id="era-select"
                    name="era"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>なし</MenuItem>
                    <MenuItem value={20}>あり</MenuItem>
                  </Select>
                </FormControl></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
              </TableRow>

              <TableRow >
                <TableCell style={{ width: 100, }}>事務職員雇上加算</TableCell>
                <TableCell style={{ width: 20, }} align="center"><FormControl size="small" sx={{ minWidth: 70 }}>
                  <Select
                    id="era-select"
                    name="era"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>なし</MenuItem>
                    <MenuItem value={20}>あり</MenuItem>
                  </Select>
                </FormControl></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"><FormControl size="small" sx={{ minWidth: 70 }}>
                  <Select
                    id="era-select"
                    name="era"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>なし</MenuItem>
                    <MenuItem value={20}>あり</MenuItem>
                  </Select>
                </FormControl></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
              </TableRow>

              <TableRow >
                <TableCell style={{ width: 100, }}>休日保育加算</TableCell>
                <TableCell style={{ width: 20, }} align="center"><FormControl size="small" sx={{ minWidth: 70 }}>
                  <Select
                    id="era-select"
                    name="era"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>なし</MenuItem>
                    <MenuItem value={20}>あり</MenuItem>
                  </Select>
                </FormControl></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"><FormControl size="small" sx={{ minWidth: 70 }}>
                  <Select
                    id="era-select"
                    name="era"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>なし</MenuItem>
                    <MenuItem value={20}>あり</MenuItem>
                  </Select>
                </FormControl></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
              </TableRow>

              <TableRow >
                <TableCell style={{ width: 100, }}>チーム保育推進加算</TableCell>
                <TableCell style={{ width: 20, }} align="center"><FormControl size="small" sx={{ minWidth: 70 }}>
                  <Select
                    id="era-select"
                    name="era"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>なし</MenuItem>
                    <MenuItem value={20}>あり</MenuItem>
                  </Select>
                </FormControl></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"><FormControl size="small" sx={{ minWidth: 70 }}>
                  <Select
                    id="era-select"
                    name="era"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>なし</MenuItem>
                    <MenuItem value={20}>あり</MenuItem>
                  </Select>
                </FormControl></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
              </TableRow>

              <TableRow >
                <TableCell style={{ width: 100, }}>栄養管理加算(配置)</TableCell>
                <TableCell style={{ width: 20, }} align="center"><FormControl size="small" sx={{ minWidth: 70 }}>
                  <Select
                    id="era-select"
                    name="era"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>なし</MenuItem>
                    <MenuItem value={20}>あり</MenuItem>
                  </Select>
                </FormControl></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"><FormControl size="small" sx={{ minWidth: 70 }}>
                  <Select
                    id="era-select"
                    name="era"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>なし</MenuItem>
                    <MenuItem value={20}>あり</MenuItem>
                  </Select>
                </FormControl></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
              </TableRow>

              <TableRow >
                <TableCell style={{ width: 100, }}>利用定員数に基づく職員数</TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
              </TableRow>

              <TableRow >
                <TableCell style={{ width: 100, }}>合計</TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
              </TableRow>

              <TableRow >
                <TableCell style={{ width: 100, }}>職員数(1人未端捨入)</TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
              </TableRow>

              <TableRow >
                <TableCell style={{ width: 100, fontWeight: 'bold' }}>2.加算対象職員数(人)</TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
              </TableRow>

              <TableRow >
                <TableCell style={{ width: 100,  }}>人数A</TableCell>
                <TableCell style={{ width: 20, }} align="center">(職員数の1/3)</TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center">4.67</TableCell>
                <TableCell style={{ width: 20, }} align="center">5</TableCell>
              </TableRow>

              <TableRow >
                <TableCell style={{ width: 100,  }}>人数B</TableCell>
                <TableCell style={{ width: 20, }} align="center">(職員数の1/5)</TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center">2.80</TableCell>
                <TableCell style={{ width: 20, }} align="center">3</TableCell>
              </TableRow>

              <TableRow >
                <TableCell style={{ width: 100, fontWeight: 'bold'  }}>(参考)加算見込額(円)</TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
              </TableRow>

              <TableRow >
                <TableCell style={{ width: 100,  }}></TableCell>
                <TableCell style={{ width: 20, }} align="center">48,900円x人A</TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center">244,500</TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
              </TableRow>

              <TableRow >
                <TableCell style={{ width: 100,  }}></TableCell>
                <TableCell style={{ width: 20, }} align="center">6,110円x人B</TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center">18,330</TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
              </TableRow>

              <TableRow >
                <TableCell style={{ width: 100,  }}>合計</TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center">262,830</TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
              </TableRow>

              <TableRow >
                <TableCell style={{ width: 100,  }}>年間見込額</TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center">3,153,000</TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
              </TableRow>

            </TableBody>
          </Table>
        </TableContainer>
      </Grid >
      {/* End Table */}

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
