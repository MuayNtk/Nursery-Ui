import { Grid, Paper, Table, TableCell, TableContainer, TableRow, Typography, TableBody, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import YearForm from "../../componentsform/YearForm";
import MonthForm from "../../componentsform/MonthForm";
import DayForm from "../../componentsform/DayForm";
import StaffTrainingHistoryTable1 from "./componentstable/StaffTrainingHistoryTable1";
import StaffTrainingHistoryTable2 from "./componentstable/StaffTrainingHistoryTable2";
import StaffTrainingHistoryTable3 from "./componentstable/StaffTrainingHistoryTable3";
import StaffTrainingHistoryTable4 from "./componentstable/StaffTrainingHistoryTable4";
import StaffTrainingHistoryTable5 from "./componentstable/StaffTrainingHistoryTable5";
import StaffTrainingHistoryTable6 from "./componentstable/StaffTrainingHistoryTable6";


export default function StaffTrainingHistory() {

  return (
    <>

      {/* Start 処遇改善等加算II 研修受講歷一覧表(認定こども) Grid */}
      <Grid container className='pt-3' justifyContent="start">
        <Grid item xs={12} sm={12} md={8} lg={5}>
          <Typography fontWeight="bold" sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-center'>
            処遇改善等加算II 研修受講歷一覧表(認定こども)
          </Typography>
        </Grid>
      </Grid>
      {/* End 処遇改善等加算II 研修受講歷一覧表(認定こども) Grid */}

      {/* Start Table 1 */}
      <Grid container className='pt-3' justifyContent="center">
        <TableContainer component={Paper} className="mt-5" sx={{ width: { xs: 'auto', sm: 'auto', md: 'auto', lg: 'auto' } }}>
          <Table sx={{ minWidth: 690 }} aria-label="simple table" size="small">
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
                      <MenuItem value={1}>昭和</MenuItem>
                      <MenuItem value={2}>平成</MenuItem>
                      <MenuItem value={3}>令和</MenuItem>
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
                    <InputLabel id="nursery-school-label">保育所</InputLabel>
                    <Select
                      labelId="nursery-school-label"
                      id="nursery-school-select"
                      label="保育所"
                      sx={{ backgroundColor: "white" }}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={1}>幼保連携型認定こども園</MenuItem>
                      <MenuItem value={2}>幼稚園型認定こども園</MenuItem>
                      <MenuItem value={3}>保育所型認定こども園</MenuItem>
                      <MenuItem value={4}>地方裁量型認定こども園</MenuItem>
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

              {/* Start Rows7 */}
              <TableRow hover role="checkbox" tabIndex={-1}>
                <TableCell align="left">合計受講時間</TableCell>
                <TableCell align="left" style={{ width: 130 }} colSpan={4}>0</TableCell>
              </TableRow>
              {/* End Rows7 */}

              {/* Start Rows8 */}
              <TableRow hover role="checkbox" tabIndex={-1}>
                <TableCell align="left">(うちマネジメント分野)</TableCell>
                <TableCell align="left" style={{ width: 130 }} colSpan={4}>0</TableCell>
              </TableRow>
              {/* End Rows8 */}

            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      {/* End Table 1 */}

      {/* Start (1) 保育士等キャリアアップ研修(令和元年度以降に受講した「保育実践」分野を除く。) Grid */}
      <Grid container className='pt-7' justifyContent="start">
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography fontWeight="bold" sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-start'>
            (1) 保育士等キャリアアップ研修(令和元年度以降に受講した「保育実践」分野を除く。)
          </Typography>
        </Grid>
      </Grid>
      {/* End (1) 保育士等キャリアアップ研修(令和元年度以降に受講した「保育実践」分野を除く。) Grid */}

      {/* Start Table 1 */}
      <Grid container justifyContent="center">
        <StaffTrainingHistoryTable1 />
      </Grid>
      {/* End Table 1 */}

      {/* Start (2) 県または市町村(教育委員会を含む)が実施する研修(上記(1)を除く) Grid */}
      <Grid container className='pt-7' justifyContent="start">
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography fontWeight="bold" sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-start'>
            (2) 県または市町村(教育委員会を含む)が実施する研修(上記(1)を除く)
          </Typography>
        </Grid>
      </Grid>
      {/* End (2) 県または市町村(教育委員会を含む)が実施する研修(上記(1)を除く) Grid */}

      {/* Start Table 2 */}
      <Grid container justifyContent="center">
        <StaffTrainingHistoryTable2 />
      </Grid>
      {/* End Table 2 */}

      {/* Start (3) 県が研修の実施主体として認定をした団体が実施する研修 Grid */}
      <Grid container className='pt-7' justifyContent="start">
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography fontWeight="bold" sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-start'>
            (3) 県が研修の実施主体として認定をした団体が実施する研修
          </Typography>
        </Grid>
      </Grid>
      {/* End (3) 県が研修の実施主体として認定をした団体が実施する研修 Grid */}

      {/* Start Table 3 */}
      <Grid container justifyContent="center">
        <StaffTrainingHistoryTable3 />
      </Grid>
      {/* End Table 3 */}

      {/* Start (4)大学等(大学、指定教育養成機関、大学共同利用機関など)が実施する研修 */}
      <Grid container className='pt-7' justifyContent="start">
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography fontWeight="bold" sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-start'>
            (4) 大学等(大学、指定教育養成機関、大学共同利用機関など)が実施する研修
          </Typography>
        </Grid>
      </Grid>
      {/* End (4)大学等(大学、指定教育養成機関、大学共同利用機関など)が実施する研修 */}

      {/* Start Table 4 */}
      <Grid container justifyContent="center">
        <StaffTrainingHistoryTable4 />
      </Grid>
      {/* End Table 4 */}

      {/* Start (5) 免許状更新講習(幼稚園教諭免許状に係るもの)及び免許法認定講習(いわゆる上進講習) */}
      <Grid container className='pt-7' justifyContent="start">
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography fontWeight="bold" sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-start'>
            (5) 免許状更新講習(幼稚園教諭免許状に係るもの)及び免許法認定講習(いわゆる上進講習)
          </Typography>
        </Grid>
      </Grid>
      {/* End (5) 免許状更新講習(幼稚園教諭免許状に係るもの)及び免許法認定講習(いわゆる上進講習) */}

      {/* Start Table 5 */}
      <Grid container justifyContent="center">
        <StaffTrainingHistoryTable5 />
      </Grid>
      {/* End Table 5 */}

      {/* Start (6) 内研修 ※中核・専門リーダー: 15 時間以内 若手りーダー: 4 時間以内 */}
      <Grid container className='pt-7' justifyContent="start">
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography fontWeight="bold" sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-start'>
            (6) 内研修 ※中核・専門リーダー: 15 時間以内 若手りーダー: 4 時間以内
          </Typography>
        </Grid>
      </Grid>
      {/* End (6) 内研修 ※中核・専門リーダー: 15 時間以内 若手りーダー: 4 時間以内 */}

      {/* Start Table 6 */}
      <Grid container justifyContent="center">
        <StaffTrainingHistoryTable6 />
      </Grid>
      {/* End Table 6 */}


    </>
  );
}
