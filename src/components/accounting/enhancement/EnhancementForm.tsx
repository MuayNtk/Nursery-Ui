import { FormControl, Grid, Paper, Table, TableCell, TableContainer, TableHead, TableRow, TextField, Typography, InputAdornment,  TableBody, Divider, OutlinedInput,  Select, SelectChangeEvent, MenuItem } from "@mui/material";
import { useEffect, useState } from "react";


export default function EnhancementForm() {
  const [era, setEra] = useState('');
  const [year, setYear] = useState('');
  const [month, setMonth] = useState(0);
  const [day, setDay] = useState(0);
  const [selectedOption, setSelectedOption] = useState('1');
  const handleDropdownChange = (event: SelectChangeEvent) => {
    setSelectedOption(event.target.value);
  };

  useEffect(() => {
    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth() + 1; // JavaScript months are 0-11
    const currentDay = today.getDate();

    setMonth(currentMonth);
    setDay(currentDay);

    if (currentYear >= 2019) {
      setEra('令和'); // 令和
      setYear((currentYear - 2018).toString()); // 令和 is from 2019
    } else if (currentYear >= 1989) {
      setEra('平成'); // 平成
      setYear((currentYear - 1988).toString()); // 平成 is from 1989
    } else if (currentYear >= 1926) {
      setEra('昭和'); // 昭和
      setYear((currentYear - 1925).toString()); // 昭和 is from 1926
    } else {
      setEra(''); // Default or pre-昭和
      setYear(currentYear.toString());
    }
  }, []);

  const handleEraChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEra(event.target.value);
  };

  return (
    <>

      <Grid container className='pt-3 pl-3' justifyContent="center">
        <Grid item xs={3} sm={3} md={2} lg={2}>
          <Typography fontWeight="bold" sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-center'>
            様式第1号
          </Typography>
        </Grid>
      </Grid>

      <Grid container className='pt-3' justifyContent="flex-end" spacing={1}>
        <Grid item xs={2} sm={1.5} md={1} lg={1}>
          <Typography  sx={{  fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '14px' }, paddingLeft: 1, paddingTop: 1}}>
            園番号
          </Typography>
        </Grid>
        <Grid item xs={4} sm={3} md={2} lg={1}>
          <TextField 
            id="school-number" 
            name="school-number" 
            type="text" 
            size="small"  
            sx={{ backgroundColor: 'white' }} 
            fullWidth
          />
        </Grid>
      </Grid>

      <Grid container className='pt-3 pl-3' justifyContent="center">
        <Grid item xs={12}>
          <Divider textAlign="center">
            保育体制強化事業補助金交付申請書
          </Divider>
        </Grid>
      </Grid>

     
      <Grid container item xs={12} justifyContent="flex-end" spacing={1} className="pt-2">
          <Grid item xs={12} sm={3} md={2} lg={1}>
            <TextField
              id="era-textfield"
              label=""
              value={era}
              onChange={handleEraChange}
              size='small'
              sx={{ backgroundColor: "white" }}
            />
          </Grid>
          <Grid item xs={12} sm={3} md={3} lg={1}>
            <FormControl variant="outlined" size="small">
              <OutlinedInput
                id="outlined-adornment-year"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                endAdornment={<InputAdornment position="end">年</InputAdornment>}
                aria-describedby="outlined-year-helper-text"
                sx={{ backgroundColor: "white" }}
                inputProps={{
                  'aria-label': 'year',
                }}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={3} md={3} lg={1}>
            <FormControl variant="outlined" size="small">
              <OutlinedInput
                id="outlined-adornment-month"
                value={month.toString()} // Convert number to string
                onChange={(e) => setMonth(Number(e.target.value))}
                endAdornment={<InputAdornment position="end">月</InputAdornment>}
                aria-describedby="outlined-month-helper-text"
                sx={{ backgroundColor: "white" }}
                inputProps={{
                  'aria-label': 'month',
                }}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={3} md={3} lg={1}>
            <FormControl variant="outlined" size="small">
              <OutlinedInput
                id="outlined-adornment-day"
                value={day.toString()} // Convert number to string
                onChange={(e) => setDay(Number(e.target.value))}
                endAdornment={<InputAdornment position="end">日</InputAdornment>}
                aria-describedby="outlined-day-helper-text"
                sx={{ backgroundColor: "white" }}
                inputProps={{
                  'aria-label': 'day',
                }}
              />
            </FormControl>
          </Grid>
      </Grid>
  
      <Grid container item xs={12}  className='pt-7' justifyContent="strat">
        <Grid item xs={2} sm={1.5} md={1} lg={5}>
          <Typography  sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '14px' } }} className='pt-1 text-end'>
            交付申請額
          </Typography>
        </Grid>
        <Grid item xs={4} sm={3} md={2} lg={2.5}>
          <TextField
            id=""
            name=""
            type="text"
            variant="standard"
            size="small"
            sx={{ backgroundColor: '#fcf6c7' ,marginLeft: 2}}
            InputProps={{
              endAdornment: <InputAdornment position="end">円</InputAdornment>,
            }}
          />
        </Grid>
      </Grid>
      <Grid container className='pt-7 ' justifyContent="strat">
        <Grid item xs={2} sm={1.5} md={2} lg={5}>
          <Typography  sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '14px' } }} className='pt-3  text-end'>
            補助金の交付方法
          </Typography>
        </Grid>
        <Grid item xs={4} sm={3} md={2} lg={2}>
        <FormControl  size="small" >
            <Select
                  labelId="subsidy"
                  id="subsidy"
                  value={selectedOption}
                  onChange={handleDropdownChange}
                  className="mb-5 ms-4"
                  sx={{ minWidth: 200 }}
            >
              <MenuItem value="1">概算払</MenuItem>
              <MenuItem value="2">精算払</MenuItem>
            </Select>
        </FormControl>
        </Grid>
      </Grid>
   
      <Grid container className='pt-5' justifyContent="start" sx={{ pl: { xs: 3, sm: 5, md: 10, lg: 10 }, pr: { xs: 3, sm: 5, md: 10, lg: 15 }, }}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-justify'>
            補助事業の執行に関する収支計画
          </Typography>
        </Grid>
      </Grid>
     
      <Grid container className='pt-3' justifyContent="center">
        <Grid container  justifyContent="start" sx={{ pl: { xs: 3, sm: 5, md: 10, lg: 10 }, pr: { xs: 3, sm: 5, md: 10, lg: 15 }, }}>
          <Grid item xs={12} sm={12} md={12} lg={5}>
            <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' }, color: '#FF9900' }} className='pt-2 text-end'>
              ※収入・支出の部の計は一致
            </Typography>
          </Grid>
        </Grid>
        <TableContainer component={Paper} className="mt-2" sx={{ width: { xs: 'auto', sm: 'auto', md: 'auto', lg: 'auto' } }}>
          <Table sx={{ minWidth: 600 }} aria-label="simple table" size="small">
            <TableHead>
              <TableRow>
                <TableCell align="left" style={{ width: 300, fontWeight: "bold" }}>区分</TableCell>
                <TableCell align="left" style={{ fontWeight: "bold" }}>金額</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow hover role="checkbox" tabIndex={-1}>
                <TableCell align="left">収入の部</TableCell>
                <TableCell align="left">
                  <TextField
                    id="revenue-section"
                    name="revenue-section"
                    type="text"
                    variant="standard"
                    size="small"
                    sx={{ backgroundColor: '#fcf6c7' ,marginLeft: 2}}
                    InputProps={{
                      endAdornment: <InputAdornment position="end">円</InputAdornment>,
                    }}
                  />

                </TableCell>
              </TableRow>
              <TableRow hover role="checkbox" tabIndex={-1}>
                <TableCell align="left">福岡市補助金収入</TableCell>
                <TableCell align="left">
                  <TextField
                    id="subsidy-income"
                    name="subsidy-income"
                    type="text"
                    variant="standard"
                    size="small"
                    sx={{ backgroundColor: '#fcf6c7' ,marginLeft: 2}}
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
                    id="own-resources"
                    name="own-resources"
                    type="text"
                    variant="standard"
                    size="small"
                    sx={{ backgroundColor: '#fcf6c7' ,marginLeft: 2}}
                    InputProps={{
                      endAdornment: <InputAdornment position="end">円</InputAdornment>,
                    }}
                  />
                </TableCell>
              </TableRow>
              <TableRow hover role="checkbox" tabIndex={-1}>
                <TableCell align="left">計</TableCell>
                <TableCell align="left">
                  <TextField
                    id="total"
                    name="total"
                    type="text"
                    variant="standard"
                    size="small"
                    sx={{ backgroundColor: '#fcf6c7' ,marginLeft: 2}}
                    InputProps={{
                      endAdornment: <InputAdornment position="end">円</InputAdornment>,
                    }}
                  />
                </TableCell>
              </TableRow>
              <TableRow hover role="checkbox" tabIndex={-1}>
                <TableCell align="left">支出の部</TableCell>
                <TableCell align="left">
                  <TextField
                    id="total"
                    name="total"
                    type="text"
                    variant="standard"
                    size="small"
                    sx={{ backgroundColor: '#fcf6c7' ,marginLeft: 2}}
                    InputProps={{
                      endAdornment: <InputAdornment position="end">円</InputAdornment>,
                    }}
                  />
                </TableCell>
              </TableRow>
              <TableRow hover role="checkbox" tabIndex={-1}>
                <TableCell align="left">人件費等</TableCell>
                <TableCell align="left">
                   <TextField
                    id="personnel-expenses"
                    name="personnel-expenses"
                    type="text"
                    variant="standard"
                    size="small"
                    sx={{ backgroundColor: '#fcf6c7' ,marginLeft: 2}}
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
    
      <Grid container className='pt-5' justifyContent="start" sx={{ pl: { xs: 3, sm: 5, md: 10, lg: 10 }, pr: { xs: 3, sm: 5, md: 10, lg: 15 }, }}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' }, color: '#FF9900' }} className='pt-2 text-justify'>
            ※雇用契約書、派遣契約書の写しを添付すること。
          </Typography>
        </Grid>
      </Grid>
    
      <Grid container className='pt-5' justifyContent="start" sx={{ pl: { xs: 3, sm: 5, md: 10, lg: 10 }, pr: { xs: 3, sm: 5, md: 10, lg: 15 }, }}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' }, color: '#FF9900' }} className='pt-2 text-justify'>
            ※別添1-1、1-2及び雇用契約書等の写しを添付すること
          </Typography>
        </Grid>
      </Grid>
     


    </>
  );
}
