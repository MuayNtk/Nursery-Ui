import React, { useState } from "react";
import { FormControl, Grid, MenuItem, Paper, Select, SelectChangeEvent, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";


interface Officer {
  position: string;
  furigana: string;
  lastName: string;
  firstName: string;
  year: number;
  month: number;
  day: number;
}

const data: Officer[] = [
  {
    position: "理事長",
    furigana: "ワタナベ 　ケイコ",
    lastName: "渡部　",
    firstName: "圭子",
    year: 11,
    month: 2,
    day: 21
  },
  {
    position: "常務理事",
    furigana: "ワタナベ 　シロウ",
    lastName: "渡部　",
    firstName: "史朗",
    year: 43,
    month: 5,
    day: 22
  },
  {
    position: "理事",
    furigana: "ナカガワ 　ヤスヨシ",
    lastName: "中川　",
    firstName: "康嘉",
    year: 33,
    month: 10,
    day: 1
  },
  {
    position: "理事",
    furigana: "マツウラ 　エミ",
    lastName: "松浦　",
    firstName: "恵美",
    year: 46,
    month: 4,
    day: 20
  },
  {
    position: "理事",
    furigana: "サカキバラ 　ヒサコ",
    lastName: "榊原　",
    firstName: "久子",
    year: 45,
    month: 8,
    day: 1
  },
  {
    position: "理事",
    furigana: "カワサキ 　ケイ",
    lastName: "川崎　",
    firstName: "桂",
    year: 43,
    month: 4,
    day: 9
  },
  {
    position: "監事",
    furigana: "ハセガワ 　ユタカ",
    lastName: "長谷川　",
    firstName: "裕",
    year: 46,
    month: 7,
    day: 9
  },
  {
    position: "監事",
    furigana: "シオミツ 　カツヤ",
    lastName: "塩満　",
    firstName: "克也",
    year: 35,
    month: 7,
    day: 31
  }
];
export default function OfficerList() {
  const [genderValues, setGenderValues] = useState<string[]>(Array(data.length).fill(''));
  const [eraValues, setEraValues] = useState<string[]>(Array(data.length).fill(''));

  const handleGenderChange = (index: number) => (event: SelectChangeEvent<string>) => {
    const newGenderValues = [...genderValues];
    newGenderValues[index] = event.target.value;
    setGenderValues(newGenderValues);
  };

  const handleEraChange = (index: number) => (event: SelectChangeEvent<string>) => {
    const newEraValues = [...eraValues];
    newEraValues[index] = event.target.value;
    setEraValues(newEraValues);
  };

  return (
    <>
      {/* Start 【法人名:社会福祉法人つぱさ福祉会理事長】 Grid */}
      <Grid container className='pt-3' justifyContent="start">
        <Grid item xs={12} sm={11} md={7} lg={5.5}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2'>
            【法人名:社会福祉法人つぱさ福祉会理事長】
          </Typography>
        </Grid>
      </Grid>
      {/* End 【法人名:社会福祉法人つぱさ福祉会理事長】 Grid */}

      {/* Start Table 1 */}
      <Grid container className='pt-3' justifyContent="center">
        <TableContainer component={Paper} className="mt-3" sx={{ width: { xs: 'auto', sm: 'auto', md: 'auto', lg: 'auto' } }}>
          <Table sx={{ minWidth: 1100 }} aria-label="simple table" size="small">
            <TableHead>
              <TableRow>
                <TableCell style={{ fontWeight: "bold" }} rowSpan={2} align="center">役職名</TableCell>
                <TableCell style={{ fontWeight: "bold" }} colSpan={1} align="center">フリガナ</TableCell>
                <TableCell style={{ fontWeight: "bold" }} rowSpan={2} align="center">性別</TableCell>
                <TableCell style={{ fontWeight: "bold" }} colSpan={4} align="center">生年月日</TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{ fontWeight: "bold" }} align="center">氏 名。</TableCell>
                <TableCell style={{ fontWeight: "bold" }} align="center">元号</TableCell>
                <TableCell style={{ fontWeight: "bold" }} align="center">年</TableCell>
                <TableCell style={{ fontWeight: "bold" }} align="center">月</TableCell>
                <TableCell style={{ fontWeight: "bold" }} align="center">日</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row, index) => (
                <React.Fragment key={index}>
                  <TableRow>
                    <TableCell rowSpan={2} align="center">{row.position}</TableCell>
                    <TableCell align="center">{row.furigana}</TableCell>
                    <TableCell rowSpan={2} align="center">
                      <FormControl size="small" sx={{ minWidth: 70 }}>
                        <Select
                          id="gender-select"
                          name="gender"
                          value={genderValues[index]}
                          onChange={handleGenderChange(index)}
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          <MenuItem value="10">女</MenuItem>
                          <MenuItem value="20">男</MenuItem>
                        </Select>
                      </FormControl>
                    </TableCell>
                    <TableCell rowSpan={2} align="center">
                      <FormControl size="small" sx={{ minWidth: 70 }}>
                        <Select
                          id="era-select"
                          name="era"
                          value={eraValues[index]}
                          onChange={handleEraChange(index)}
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          <MenuItem value="10">大正</MenuItem>
                          <MenuItem value="20">昭和</MenuItem>
                          <MenuItem value="30">平成</MenuItem>
                          <MenuItem value="40">令和</MenuItem>
                        </Select>
                      </FormControl>
                    </TableCell>
                    <TableCell rowSpan={2} align="center">{row.year}</TableCell>
                    <TableCell rowSpan={2} align="center">{row.month}</TableCell>
                    <TableCell rowSpan={2} align="center">{row.day}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="center">{`${row.lastName} ${row.firstName}`}</TableCell>
                  </TableRow>
                </React.Fragment>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      {/* End Table 1 */}
    </>
  );
}