import { Grid, Typography, TextField, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, FormControl, MenuItem, Select } from "@mui/material";

export default function StaffCalc() {

  return (
    <>
      {/* Start furigana Grid */}
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
          0.基礎情報
        </Typography>
      </Grid>
      <Grid container className='pt-3' justifyContent="center">
        <TableContainer component={Paper} className="" sx={{ width: { xs: 'auto', sm: 'auto', md: 'auto', lg: 'auto' } }}>
          <Table sx={{ minWidth: 1000 }} aria-label="simple table">
            <TableHead >
              <TableRow>
                <TableCell style={{ width: 200, fontWeight: 'bold', background: '', }}></TableCell>
                <TableCell style={{ width: 20, fontWeight: 'bold', background: '', }} align="center">選択</TableCell>
                <TableCell style={{ width: 200, fontWeight: 'bold', background: '', }} align="center">本園</TableCell>
                <TableCell style={{ width: 200, fontWeight: 'bold', background: '', }} align="center">分園</TableCell>

              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow >
                <TableCell style={{ width: 20, }}>分園の有無(選択してく
                  ださい)</TableCell>
                <TableCell style={{ width: 20, }} align="center">
                  <FormControl size="small" className="w-40">
                    <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={1}>1</MenuItem>
                      <MenuItem value={2}>2</MenuItem>
                      <MenuItem value={3}>3</MenuItem>
                      <MenuItem value={4}>4</MenuItem>
                    </Select>
                  </FormControl></TableCell>
                <TableCell style={{ width: 20, }} align="center">本園分を記入</TableCell>
                <TableCell style={{ width: 20, }} align="center">分園分を記入</TableCell>
              </TableRow>
              <TableRow >
                <TableCell style={{ width: 20, }}>利用定員数</TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"><TextField
                  className='w-40'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 20, }} align="center"><TextField
                  className='w-40'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
              </TableRow>
              <TableRow >
                <TableCell style={{ width: 20, }}>年齢別児童数(定員の内
                  訳ではなく入所人数を記
                  入)</TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"><TextField
                  className='w-40'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 20, }} align="center"><TextField
                  className='w-40'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
              </TableRow>
              <TableRow >
                <TableCell style={{ width: 20, }}>4歲児以上児</TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"><TextField
                  className='w-40'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 20, }} align="center"><TextField
                  className='w-40'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
              </TableRow>
              <TableRow >
                <TableCell style={{ width: 20, }}>3歲児</TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"><TextField
                  className='w-40'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 20, }} align="center"><TextField
                  className='w-40'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
              </TableRow>
              <TableRow >
                <TableCell style={{ width: 20, }}>1,2歲児</TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"><TextField
                  className='w-40'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 20, }} align="center"><TextField
                  className='w-40'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
              </TableRow>
              <TableRow >
                <TableCell style={{ width: 20, }}>0歲児</TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"><TextField
                  className='w-40'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 20, }} align="center"><TextField
                  className='w-40'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
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
          1.加算対象人数の基礎となる職員数(人)
        </Typography>
      </Grid>
      <Grid container className='pt-3' justifyContent="center">
        <TableContainer component={Paper} className="" sx={{ width: { xs: 'auto', sm: 'auto', md: 'auto', lg: 'auto' } }}>
          <Table sx={{ minWidth: 1000 }} aria-label="simple table">
            <TableHead >
              <TableRow>
                <TableCell style={{ width: 400, fontWeight: 'bold', background: '', }}></TableCell>
                <TableCell style={{ width: 50, fontWeight: 'bold', background: '', }} align="center">選択項目</TableCell>
                <TableCell style={{ width: 50, fontWeight: 'bold', background: '', }} align="center"></TableCell>
                <TableCell style={{ width: 50, fontWeight: 'bold', background: '', }} align="center">職員数(自動計算)</TableCell>
                <TableCell style={{ width: 50, fontWeight: 'bold', background: '', }} align="center">選択項目</TableCell>
                <TableCell style={{ width: 50, fontWeight: 'bold', background: '', }} align="center"></TableCell>
                <TableCell style={{ width: 200, fontWeight: 'bold', background: '', }} align="center">職員数(自動計算)</TableCell>

              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow >
                <TableCell style={{ width: 20, }}>a年齢別配置基準による職員数</TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
              </TableRow>

              <TableRow >
                <TableCell style={{ width: 20, }}>4歳以上児</TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"><TextField
                  className='w-32'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 20, }} align="center"><TextField
                  className='w-32'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"><TextField
                  className='w-32'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 20, }} align="center"><TextField
                  className='w-32'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
              </TableRow>

              <TableRow >
                <TableCell style={{ width: 20, }}>3歲児</TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"><TextField
                  className='w-32'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 20, }} align="center"><TextField
                  className='w-32'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"><TextField
                  className='w-32'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 20, }} align="center"><TextField
                  className='w-32'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
              </TableRow>

              <TableRow >
                <TableCell style={{ width: 20, }}>3歲児配置改善加算</TableCell>
                <TableCell style={{ width: 20, }} align="center"><FormControl size="small" className="w-20">
                  <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                  </Select>
                </FormControl></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"><FormControl size="small" className="w-20">
                  <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                  </Select>
                </FormControl></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
              </TableRow>

              <TableRow >
                <TableCell style={{ width: 20, }}>1,2歲児</TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"><TextField
                  className='w-32'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 20, }} align="center"><TextField
                  className='w-32'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"><TextField
                  className='w-32'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 20, }} align="center"><TextField
                  className='w-32'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
              </TableRow>

              <TableRow >
                <TableCell style={{ width: 20, }}>0歲児</TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"><TextField
                  className='w-32'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 20, }} align="center"><TextField
                  className='w-32'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"><TextField
                  className='w-32'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 20, }} align="center"><TextField
                  className='w-32'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
              </TableRow>

              <TableRow >
                <TableCell style={{ width: 20, }}>小計(数第一位四捨五入)</TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"><TextField
                  className='w-32'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"><TextField
                  className='w-32'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
              </TableRow>

              <TableRow >
                <TableCell style={{ width: 20, }}>b保育標準時間認定の児童</TableCell>
                <TableCell style={{ width: 20, }} align="center"><FormControl size="small" className="w-20">
                  <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                  </Select>
                </FormControl>
                </TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"><TextField
                  className='w-32'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 20, }} align="center"><FormControl size="small" className="w-20">
                  <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                  </Select>
                </FormControl></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"><TextField
                  className='w-32'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
              </TableRow>

              <TableRow >
                <TableCell style={{ width: 20, }}>c主任保育士専任加算</TableCell>
                <TableCell style={{ width: 20, }} align="center"><FormControl size="small" className="w-20">
                  <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                  </Select>
                </FormControl>
                </TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"><TextField
                  className='w-32'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 20, }} align="center"><FormControl size="small" className="w-20">
                  <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                  </Select>
                </FormControl></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"><TextField
                  className='w-32'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
              </TableRow>

              <TableRow >
                <TableCell style={{ width: 20, }}>d事務瑞員雇上加算</TableCell>
                <TableCell style={{ width: 20, }} align="center"><FormControl size="small" className="w-20">
                  <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                  </Select>
                </FormControl>
                </TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"><TextField
                  className='w-32'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 20, }} align="center"><FormControl size="small" className="w-20">
                  <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                  </Select>
                </FormControl></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"><TextField
                  className='w-32'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
              </TableRow>

              <TableRow >
                <TableCell style={{ width: 20, }}>e休日保育加算</TableCell>
                <TableCell style={{ width: 20, }} align="center"><FormControl size="small" className="w-20">
                  <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                  </Select>
                </FormControl>
                </TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"><TextField
                  className='w-32'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 20, }} align="center"><FormControl size="small" className="w-20">
                  <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                  </Select>
                </FormControl></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"><TextField
                  className='w-32'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
              </TableRow>

              <TableRow >
                <TableCell style={{ width: 20, }}>fチーム保育推進加算</TableCell>
                <TableCell style={{ width: 20, }} align="center"><FormControl size="small" className="w-20">
                  <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                  </Select>
                </FormControl>
                </TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"><TextField
                  className='w-32'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 20, }} align="center"><FormControl size="small" className="w-20">
                  <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                  </Select>
                </FormControl></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"><TextField
                  className='w-32'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
              </TableRow>

              <TableRow >
                <TableCell style={{ width: 20, }}>g栄養管理加算(配置)</TableCell>
                <TableCell style={{ width: 20, }} align="center"><FormControl size="small" className="w-20">
                  <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                  </Select>
                </FormControl>
                </TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"><TextField
                  className='w-32'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 20, }} align="center"><FormControl size="small" className="w-20">
                  <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                  </Select>
                </FormControl></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"><TextField
                  className='w-32'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
              </TableRow>

              <TableRow >
                <TableCell style={{ width: 20, }}>利用定員数に基づく職員数</TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"><TextField
                  className='w-32'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"><TextField
                  className='w-32'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
              </TableRow>

              <TableRow >
                <TableCell style={{ width: 20, }}>合計</TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"><TextField
                  className='w-32'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"><TextField
                  className='w-32'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
              </TableRow>

              <TableRow >
                <TableCell style={{ width: 20, }}>職員数(1人未滿端数四捨五入)</TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"><TextField
                  className='w-32'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"></TableCell>
                <TableCell style={{ width: 20, }} align="center"><TextField
                  className='w-32'
                  id="fullname-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  }}
                /></TableCell>
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
          02.加算対象職員数(人)
        </Typography>
      </Grid>
      <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-5 pl-3 justify-start' >
        <Typography component='div' fontWeight={500} className="pl-5 lg:pl-24 pt-6">
          人数A　(職員数の1/3):
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
      <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-5 pl-3 justify-start' >
        <Typography component='div' fontWeight={500} className="pl-5 lg:pl-24 pt-6">
        人数B　(職員数の1/5):
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
          (参考)　加算見込額　(円)
        </Typography>
      </Grid>
      <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-5 pl-3 justify-start' >
        <Typography component='div' fontWeight={500} className="pl-5 lg:pl-[95px] pt-6">
        48,900円　x　人数A:
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
      <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-5 pl-3 justify-start' >
        <Typography component='div' fontWeight={500} className="pl-5 lg:pl-[120px] pt-6">
        6,110円　x　人B:
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
      <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-5 pl-3 justify-start' >
        <Typography component='div' fontWeight={500} className="pl-5 lg:pl-52 pt-6">
        合計:
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
      <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-5 pl-3 justify-start' >
        <Typography component='div' fontWeight={500} className="pl-5 lg:pl-40 pt-6">
        年間見込額:
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






    </>
  );
}
