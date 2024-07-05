import { Grid, Paper, Table, TableCell, TableContainer, TableRow, Typography, TableBody, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import YearForm from "../../componentsform/YearForm";
import MonthForm from "../../componentsform/MonthForm";
import DayForm from "../../componentsform/DayForm";
import FacilityTrainingHistoryTableA from "./componentstable/FacilityTrainingHistoryTableA";
import FacilityTrainingHistoryTableB from "./componentstable/FacilityTrainingHistoryTableB";

export default function FacilityTrainingHistory() {

  return (
    <>

      {/* Start 処遇改善等加算I 研修受講歷一覧表(認定こども) Grid */}
      <Grid container className='pt-3' justifyContent="start">
        <Grid item xs={12} sm={12} md={8} lg={5}>
          <Typography fontWeight="bold" sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-center'>
            処遇改善等加算I 研修受講歷一覧表(認定こども)
          </Typography>
        </Grid>
      </Grid>
      {/* End 処遇改善等加算I 研修受講歷一覧表(認定こども) Grid */}

      {/* Start Table 1 */}
      <Grid container className='pt-3' justifyContent="center">
        <TableContainer component={Paper} className="mt-5" sx={{ width: { xs: 'auto', sm: 'auto', md: 'auto', lg: 'auto' } }}>
          <Table sx={{ minWidth: 700 }} aria-label="simple table" size="small">
            <TableBody>
              {/* Start Rows1 */}
              <TableRow hover role="checkbox" tabIndex={-1}>
                <TableCell align="left" style={{ width: 220 }}>生年月日</TableCell>
                <TableCell align="left" style={{ width: 130 }}>
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
                </TableCell>
                <TableCell align="left" style={{ width: 150 }}>
                  <YearForm />
                </TableCell>
                <TableCell align="left" style={{ width: 50 }}>
                  <MonthForm />
                </TableCell>
                <TableCell align="left" style={{ width: 50 }}>
                  <DayForm />
                </TableCell>
              </TableRow>
              {/* End Rows1 */}

              {/* Start Rows2 */}
              <TableRow hover role="checkbox" tabIndex={-1}>
                <TableCell align="left">市町村名</TableCell>
                <TableCell align="left" style={{ width: 130 }} colSpan={4}>福岡市</TableCell>
              </TableRow>
              {/* End Rows2 */}

              {/* Start Rows3 */}
              <TableRow hover role="checkbox" tabIndex={-1}>
                <TableCell align="left">圓番号</TableCell>
                <TableCell align="left" style={{ width: 130 }} colSpan={4}>566</TableCell>
              </TableRow>
              {/* End Rows3 */}

              {/* Start Rows4 */}
              <TableRow hover role="checkbox" tabIndex={-1}>
                <TableCell align="left">施設・事業所名</TableCell>
                <TableCell align="left" style={{ width: 130 }} colSpan={4}>いちざきみんなの家</TableCell>
              </TableRow>
              {/* End Rows4 */}

              {/* Start Rows5 */}
              <TableRow hover role="checkbox" tabIndex={-1}>
                <TableCell align="left">施設類型</TableCell>
                <TableCell align="left">
                  <FormControl size="small" fullWidth>
                    <InputLabel id="date-label">保育所</InputLabel>
                    <Select
                      labelId="date-label"
                      id="date-select"
                      label="保育所"
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
                </TableCell>
                <TableCell colSpan={3}></TableCell>
              </TableRow>
              {/* End Rows5 */}

              {/* Start Rows6 */}
              <TableRow hover role="checkbox" tabIndex={-1}>
                <TableCell align="left">設置者名</TableCell>
                <TableCell align="left" style={{ width: 130 }} colSpan={4}>理事長渡部圭子</TableCell>
              </TableRow>
              {/* End Rows6 */}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      {/* End Table 1 */}

      {/* Start 加算II Grid */}
      <Grid container className='pt-3' justifyContent="start">
        <Grid item xs={1.5} sm={1.5} md={1.5} lg={5}>
          <Typography fontWeight="bold" sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-center'>
            加算II
          </Typography>
        </Grid>
      </Grid>
      {/* End 加算II Grid */}

      {/* Start Table 2 */}
      <Grid container justifyContent="center">
        <TableContainer component={Paper} className="mt-2" sx={{ width: { xs: 'auto', sm: 'auto', md: 'auto', lg: 'auto' } }}>
          <Table sx={{ minWidth: { xs: 500, sm: 600, md: 700, lg: 750 } }} aria-label="simple table" size="small">
            <TableBody>
              {/* Start Rows1 */}
              <TableRow hover role="checkbox" tabIndex={-1}>
                <TableCell align="left" style={{ width: 300 }}>人数A(副主任保育士等)</TableCell>
                <TableCell align="left">5</TableCell>
              </TableRow>
              {/* End Rows1 */}

              {/* Start Rows2 */}
              <TableRow hover role="checkbox" tabIndex={-1}>
                <TableCell align="left" style={{ width: 300 }}>人数B(職務分野別リーダー)</TableCell>
                <TableCell align="left">3</TableCell>
              </TableRow>
              {/* End Rows2 */}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      {/* End Table 2 */}

      {/* Start 人数A Grid */}
      <Grid container className='pt-10' justifyContent="start">
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography fontWeight="bold" sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-start'>
            人数A
          </Typography>
        </Grid>
      </Grid>
      {/* End 人数A Grid */}

      {/* Start Table A */}
      <Grid container justifyContent="center">
            <FacilityTrainingHistoryTableA />
      </Grid>
      {/* End Table A */}

      {/* Start 人数B Grid */}
      <Grid container className='pt-10' justifyContent="start">
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography fontWeight="bold" sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-start'>
            人数B
          </Typography>
        </Grid>
      </Grid>
      {/* End 人数B Grid */}

      {/* Start Table B */}
      <Grid container justifyContent="center">
          <FacilityTrainingHistoryTableB />
      </Grid>
      {/* End Table B */}


    </>
  );
}
