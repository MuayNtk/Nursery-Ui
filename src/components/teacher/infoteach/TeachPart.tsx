import { FormControlLabel, Grid, Radio, RadioGroup, TextField, Typography, TextareaAutosize, Card, Button, IconButton, Select, MenuItem, FormControl, Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import EraForm from "../../componentsform/EraForm";
import YearForm from "../../componentsform/YearForm";
import MonthForm from "../../componentsform/MonthForm";
import DayForm from "../../componentsform/DayForm";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

interface Column {
  id: 'date' | 'date2' | 'working-hours' | 'working-days' | 'qualifications' | 'job-description' | 'appointments';
  label: string;
  minWidth?: number;
  align?: 'right' | 'center';
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: 'date', label: '年月', minWidth: 50, align: 'center', },
  { id: 'date2', label: '年月', minWidth: 100, align: 'center', },
  { id: 'working-hours', label: '勤務時間', minWidth: 100, align: 'center', },
  { id: 'working-days', label: '1か月の勤務日', minWidth: 150, align: 'center', },
  { id: 'qualifications', label: '資格', minWidth: 100, align: 'center', },
  { id: 'job-description', label: '職種の内容', minWidth: 150, align: 'center', },
  { id: 'appointments', label: '任免・発令者等', minWidth: 200, align: 'center', },

];

interface Column2 {
  id: 'date' | 'date2' | 'working-hours2' | 'working-days2' | 'qualifications' | 'company-name' | 'remarks';
  label: string;
  minWidth?: number;
  align?: 'right' | 'center';
  format?: (value: number) => string;
}

const columns2: readonly Column2[] = [
  { id: 'date', label: '年月', minWidth: 50, align: 'center', },
  { id: 'working-hours2', label: '勤務時間', minWidth: 150, align: 'center', },
  { id: 'working-days2', label: '1か月の勤務日', minWidth: 150, align: 'center', },
  { id: 'qualifications', label: '資格', minWidth: 150, align: 'center', },
  { id: 'company-name', label: '職種の内容', minWidth: 150, align: 'center', },
  { id: 'remarks', label: '備考', minWidth: 150, align: 'center', },

];

export default function TeachPart() {

  return (

    <>
      {/* Start ふりがな Grid */}
      <Grid container spacing={2} className='pt-2' sx={{ ml: { xs: -6, sm: -6, md: 0, lg: 0 } }}>
        <Grid item xs={4} sm={3} md={2} lg={2}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
            ふりがな :
          </Typography>
        </Grid>
        <Grid item xs={6} sm={5} md={3} lg={3}>
          <TextField id="furigana" name="furigana" type="text" size="small" fullWidth sx={{ backgroundColor: 'white' }} />
        </Grid>
      </Grid>
      {/* End ふりがな Grid */}

      {/* Start 氏名 Grid */}
      <Grid container spacing={2} className='pt-2' sx={{ ml: { xs: -6, sm: -6, md: 0, lg: 0 } }}>
        <Grid item xs={4} sm={3} md={2} lg={2}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
            氏名 :
          </Typography>
        </Grid>
        <Grid item xs={6} sm={5} md={3} lg={3}>
          <TextField id="fullname" name="fullname" type="text" size="small" fullWidth sx={{ backgroundColor: 'white' }} />
        </Grid>
      </Grid>
      {/* End 氏名 Grid */}

      {/* Start 旧姓 Grid */}
      <Grid container spacing={2} className='pt-2' sx={{ ml: { xs: -6, sm: -6, md: 0, lg: 0 } }}>
        <Grid item xs={4} sm={3} md={2} lg={2}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
            旧姓 :
          </Typography>
        </Grid>
        <Grid item xs={6} sm={5} md={3} lg={3}>
          <TextField id="maidenname" name="maidenname" type="text" size="small" fullWidth sx={{ backgroundColor: 'white' }} />
        </Grid>
      </Grid>
      {/* End 旧姓 Grid */}

      {/* Start 生年月日 Grid */}
      <Grid container spacing={2} className='pt-2' sx={{ ml: { xs: -6, sm: -6, md: 0, lg: 0 } }}>
        <Grid item xs={4} sm={3} md={2} lg={2}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
            生年月日 :
          </Typography>
        </Grid>
        <Grid item xs={3.5} sm={2.5} md={2} lg={1.3} sx={{ ml: { xs: 0, sm: 0, md: 0, lg: 0 } }}>
          <EraForm />
        </Grid>
        <Grid item xs={3.5} sm={2.5} md={2} lg={1.3} sx={{ ml: { xs: -1.5, sm: -1, md: 0, lg: 0 } }}>
          <YearForm />
        </Grid>
        <Grid item xs={3.5} sm={2} md={2} lg={1} sx={{ ml: { xs: 15, sm: -1.5, md: 0, lg: 0 }, mt: { xs: -1, sm: 0, md: 0, lg: 0 } }}>
          <MonthForm />
        </Grid>
        <Grid item xs={4} sm={1} md={2} lg={1} sx={{ ml: { xs: -1.5, sm: 2, md: -2, lg: 0 }, mt: { xs: -1, sm: 0, md: 0, lg: 0 } }}>
          <DayForm />
        </Grid>
      </Grid>
      {/* End 生年月日 Grid */}

      {/* Start 性別 Grid */}
      <RadioGroup
        defaultValue=""
        aria-labelledby="demo-customized-radios"
        name="customized-radios"
      >
        <Grid container spacing={2} className='pt-2' sx={{ ml: { xs: -6, sm: -6, md: 0, lg: 0 } }}>
          <Grid item xs={4} sm={3} md={2} lg={2}>
            <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
              性別 :
            </Typography>
          </Grid>
          <Grid item xs={2.5} sm={1.5} md={1.5} lg={1} sx={{ ml: { xs: 0.5, sm: 1, md: 1, lg: 3 } }}>
            <FormControlLabel value="男" control={<Radio />} label="男" />
          </Grid>
          <Grid item xs={5} sm={2} md={1.5} lg={1} sx={{ ml: { xs: -1.5, sm: 2, md: 0, lg: 0 } }}>
            <FormControlLabel value="女" control={<Radio />} label="女" />
          </Grid>
          <Grid item xs={6} sm={2} md={1} lg={2}>
            <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' }, ml: { xs: 9, sm: 0, md: 0, lg: 0 } }} className='pt-3 text-start'>
              年齡 :
            </Typography>
          </Grid>
          <Grid item xs={5} sm={2.8} md={2.5} lg={2}>
            <TextField id="age" name="age" type="text" size="small" fullWidth sx={{ backgroundColor: 'white', ml: { xs: -7.5, sm: -4, md: -2, lg: -18 } }} />
          </Grid>
        </Grid>
      </RadioGroup>
      {/* End 性別 Grid */}

      {/* Start 現住所 Grid */}
      <Grid container spacing={2} className='pt-3' sx={{ ml: { xs: -6, sm: -6, md: 0, lg: 0 } }}>
        <Grid item xs={4} sm={3} md={2} lg={2}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
            現住所 :
          </Typography>
        </Grid>
        <Grid item xs={6} sm={5} md={3} lg={3}>
          <TextareaAutosize
            id="current-address"
            name="current-address"
            minRows={3}
            maxRows={100}
            className="w-48 sm:w-52 lg:w-80"
            style={{ border: '1px solid gray', borderRadius: '4px' }}
          />
        </Grid>
      </Grid>
      {/* End 現住所 Grid */}

      {/* Start 現住所(住所变更) Grid */}
      <Grid container spacing={2} className='pt-2' sx={{ ml: { xs: -2, sm: -6, md: -7.5, lg: 0 } }}>
        <Grid item xs={3} sm={3} md={3} lg={2}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
            現住所(住所变更) :
          </Typography>
        </Grid>
        <Grid item xs={6} sm={5} md={3} lg={3}>
          <TextareaAutosize
            id="change-address"
            name="change-address"
            minRows={3}
            maxRows={100}
            className="w-48 sm:w-52 lg:w-80"
            style={{ border: '1px solid gray', borderRadius: '4px' }}
          />
        </Grid>
      </Grid>
      {/* End 現住所(住所变更) Grid */}

      {/* Start 異動日 Grid */}
      <Grid container spacing={2} className='pt-2' sx={{ ml: { xs: -2, sm: -6, md: -7.5, lg: 0 } }}>
        <Grid item xs={3} sm={3} md={3} lg={2}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
            異動日 :
          </Typography>
        </Grid>
        <Grid item xs={8} sm={6} md={4} lg={3} className="scale-75" sx={{ ml: { xs: -3.3, sm: -3, md: -3.5, lg: -4 }, mt: -1.5 }}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker']}>
              <DatePicker label="Start date" sx={{ backgroundColor: "white" }} />
            </DemoContainer>
          </LocalizationProvider>
        </Grid>
      </Grid>
      {/* End 異動日 Grid */}

      {/* Start 備考 Grid */}
      <Grid container spacing={2} className='pt-2' sx={{ ml: { xs: -2, sm: -6, md: -7.5, lg: 0 } }}>
        <Grid item xs={3} sm={3} md={3} lg={2}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
            備考 :
          </Typography>
        </Grid>
        <Grid item xs={6} sm={5} md={3} lg={3}>
          <TextareaAutosize
            id="remarks"
            name="remarks"
            minRows={3}
            maxRows={100}
            className="w-48 sm:w-52 lg:w-80"
            style={{ border: '1px solid gray', borderRadius: '4px' }}
          />
        </Grid>
      </Grid>
      {/* End 備考 Grid */}

      {/* Start 学歴 Grid */}
      <Grid className="mt-5 lg:mt-7" sx={{ ml: { xs: 0, sm: 0, md: 0, lg: -2 } }}>
        <Typography
          component="div"
          sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, backgroundColor: '#CCF0FD', fontWeight: 'bold', pt: { xs: 1.5, sm: 1.5, md: 1.5, lg: 1 } }}
          className='flex justify-start h-10 pt-2 pl-5' >
          学歴
        </Typography>
      </Grid>
      {/* End 学歴 Grid */}

      {/* Start 学校名 Grid */}
      <Grid container spacing={2} className='pt-3' sx={{ ml: { xs: -6, sm: -2, md: 0, lg: 0 } }}>
        <Grid item xs={4} sm={3} md={2} lg={2}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
            学校名 :
          </Typography>
        </Grid>
        <Grid item xs={6} sm={5} md={3} lg={3}>
          <TextField id="schoolname" name="schoolname" type="text" size="small" fullWidth sx={{ backgroundColor: 'white' }} />
        </Grid>
      </Grid>
      {/* End 学校名 Grid */}

      {/* Start 学部・学科名 Grid */}
      <Grid container spacing={2} className='pt-3' sx={{ ml: { xs: -6, sm: -2, md: 0, lg: 0 } }}>
        <Grid item xs={4} sm={3} md={2} lg={2}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
            学部・学科名 :
          </Typography>
        </Grid>
        <Grid item xs={6} sm={5} md={3} lg={3}>
          <TextField id="departmentname" name="departmentname" type="text" size="small" fullWidth sx={{ backgroundColor: 'white' }} />
        </Grid>
      </Grid>
      {/* End 学部・学科名 Grid */}

      {/* Start 修学期間 Grid */}
      <Grid container spacing={2} className='pt-3' sx={{ ml: { xs: -6, sm: -2, md: 0, lg: 0 } }}>
        <Grid item xs={4} sm={3} md={2} lg={2}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
            修学期間 :
          </Typography>
        </Grid>
        <Grid item xs={6} sm={5} md={3} lg={3}>
          <TextField id="departmentname" name="departmentname" type="text" size="small" fullWidth sx={{ backgroundColor: 'white' }} />
        </Grid>
      </Grid>
      {/* End 修学期間 Grid */}

      {/* Start 資格・免許等 Card */}
      <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-10 pb-5' sx={{ ml: { xs: 3, sm: 3, md: 2, lg: 2 } }}>
        <Card sx={{ bgcolor: "pink", width: 120, height: 40 }}>
          <Typography component='div' sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 15 }, mt: { xs: 0.5, sm: 0.5, md: 0.5, lg: 0 } }} fontWeight="bold" className="pt-2 text-center">
            資格・免許等
          </Typography>
        </Card>
      </Grid>
      {/* End 資格・免許等 Card */}

      {/* Start 名称 Grid */}
      <Grid container spacing={2} className='pt-3' sx={{ ml: { xs: -6, sm: -10, md: -7, lg: -15 } }}>
        <Grid item xs={4} sm={4.4} md={2} lg={2}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
            名称 :
          </Typography>
        </Grid>
        <Grid item xs={6} sm={5} md={3} lg={2.5}>
          <TextField id="name" name="name" type="text" size="small" fullWidth sx={{ backgroundColor: 'white' }} />
        </Grid>
        <Grid item xs={5.6} sm={6.5} md={3} lg={2} sx={{ ml: { xs: -6, sm: -10, md: -7, lg: -10 } }}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
            取得年月日 :
          </Typography>
        </Grid>
        <Grid item xs={7.8} sm={6.5} md={4} lg={3} className="scale-75" sx={{ ml: { xs: -3.3, sm: -3, md: -3.5, lg: -4 }, mt: -1.5 }}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker']}>
              <DatePicker label="Select date" sx={{ backgroundColor: "white" }} />
            </DemoContainer>
          </LocalizationProvider>
        </Grid>
        <Grid item xs={1} sm={1} md={1} lg={1} sx={{ ml: { xs: -3, sm: -3, md: -4, lg: -6 } }}>
          <IconButton aria-label="delete" size="small">
            <RemoveCircleOutlineIcon />
          </IconButton>
        </Grid>
      </Grid>
      {/* End 名称 Grid */}

      {/* Start Grid Button + */}
      <Grid container spacing={1} justifyContent='start' alignItems='center'>
        <Grid item sx={{ mt: 1, mb: 2 }}>
          <Button variant="contained" size="small" sx={{ width: 90, mt: 0.3, backgroundColor: "#99CCFF", color: "black" }}>+ 追加</Button>
        </Grid>
      </Grid>
      {/* End Grid Button + */}

      {/* Start 現施設での勤務履歴 Grid */}
      <Grid className="mt-5 lg:mt-5">
        <Typography
          component="div"
          sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, backgroundColor: '#CCF0FD', fontWeight: 'bold', pt: { xs: 1.5, sm: 1.5, md: 1.5, lg: 1 } }}
          className='flex justify-start h-10 pt-2 pl-5' >
          現施設での勤務履歴
        </Typography>
      </Grid>
      {/* End 現施設での勤務履歴 Grid */}

      {/* start table excretion */}
      <Grid container spacing={2} className='pt-5' justifyContent="center">
        <Paper sx={{ width: '100%', Height: 2000, overflow: 'hidden' }} className='ms-4'>
          <TableContainer sx={{ maxHeight: 2000 }}>
            <Table stickyHeader aria-label="sticky table" size="small">
              <TableHead >
                <TableRow >
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      <Typography variant="subtitle2" fontWeight="bold" sx={{
                        fontSize: { xs: 11, sm: 11, md: 11, lg: 16, },
                      }}>{column.label}</Typography>
                    </TableCell>
                  )
                  )}
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow hover role="checkbox" tabIndex={-1} >
                  <TableCell className="">
                    <Grid container spacing={1} className='pt-5 scale-75' justifyContent="center">
                      <LocalizationProvider dateAdapter={AdapterDayjs} >
                        <DemoContainer components={['DatePicker']}>
                          <DatePicker label="Select Date" sx={{ backgroundColor: "white" }} className="" />
                        </DemoContainer>
                      </LocalizationProvider>
                      <LocalizationProvider dateAdapter={AdapterDayjs} >
                        <DemoContainer components={['DatePicker']}>
                          <DatePicker label="Select Date" sx={{ backgroundColor: "white" }} className="" />
                        </DemoContainer>
                      </LocalizationProvider>
                    </Grid>
                  </TableCell>
                  <TableCell className="">
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                      <FormControl size="small" fullWidth>
                        <Select
                          labelId="date-label"
                          id="date-select"
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
                  </TableCell>
                  <TableCell className="">
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                      <FormControl size="small" fullWidth>
                        <Select
                          labelId="workinghouse-label"
                          id="workinghouse-select"
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
                  </TableCell>
                  <TableCell className="">
                    <Grid item xs={12} sm={12} md={12}>
                      <FormControl size="small" fullWidth>
                        <Select
                          labelId="workingdayspermonth-label"
                          id="workingdayspermonth-select"
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
                  </TableCell>
                  <TableCell className="">
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                      <FormControl size="small" fullWidth>
                        <Select
                          labelId="qualifications"
                          id="qualifications"
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
                  </TableCell>
                  <TableCell className="">
                    <Grid item xs={12} sm={12} md={12}>
                      <TextField id="job-description" type="text" size="small" fullWidth sx={{ backgroundColor: 'white' }} />
                    </Grid>
                  </TableCell>
                  <TableCell className="">
                    <Grid item xs={12} sm={12} md={12}>
                      <TextField id="appointments" type="text" size="small" fullWidth sx={{ backgroundColor: 'white' }} />
                    </Grid>
                  </TableCell>
                  <TableCell className="">
                    <Grid item xs={1} sm={0.1} md={1} lg={1} sx={{ mt: -1.3, ml: { xs: 0, sm: 0, md: 0, lg: 1 } }}>
                      <IconButton aria-label="delete" size="small">
                        <RemoveCircleOutlineIcon />
                      </IconButton>
                    </Grid>
                  </TableCell>
                </TableRow>

              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Grid>
      {/* end table excretion */}

      {/* Start Grid Button + */}
      <Grid container spacing={1} justifyContent='start' alignItems='center'>
        <Grid item sx={{ mt: 1, mb: 2 }}>
          <Button variant="contained" size="small" sx={{ width: 90, mt: 0.3, backgroundColor: "#99CCFF", color: "black" }}>+ 追加</Button>
        </Grid>
      </Grid>
      {/* End Grid Button + */}


      {/* Start その他の勤務履歴 Grid */}
      <Grid className="mt-5 lg:mt-5">
        <Typography
          component="div"
          sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, backgroundColor: '#CCF0FD', fontWeight: 'bold', pt: { xs: 1.5, sm: 1.5, md: 1.5, lg: 1 } }}
          className='flex justify-start h-10 pt-2 pl-5' >
          その他の勤務履歴
        </Typography>
      </Grid>
      {/* End その他の勤務履歴 Grid */}

      {/* start table excretion */}
      <Grid container spacing={2} className='pt-5' justifyContent="center">
        <Paper sx={{ width: '100%', Height: 2000, overflow: 'hidden' }} className='ms-4'>
          <TableContainer sx={{ maxHeight: 2000 }}>
            <Table stickyHeader aria-label="sticky table" size="small">
              <TableHead >
                <TableRow >
                  {columns2.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      <Typography variant="subtitle2" fontWeight="bold" sx={{
                        fontSize: { xs: 11, sm: 11, md: 11, lg: 16, },
                      }}>{column.label}</Typography>
                    </TableCell>
                  )
                  )}
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow hover role="checkbox" tabIndex={-1} >
                  <TableCell className="">
                    <Grid container spacing={1} className='scale-75' justifyContent="center">
                      <LocalizationProvider dateAdapter={AdapterDayjs} >
                        <DemoContainer components={['DatePicker']}>
                          <DatePicker label="Select Date" sx={{ backgroundColor: "white" }} className="" />
                        </DemoContainer>
                      </LocalizationProvider>
                    </Grid>
                  </TableCell>
                  <TableCell className="">
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                      <TextField id="working-hours" name="working-hours" type="text" size="small" fullWidth sx={{ backgroundColor: 'white' }} />
                    </Grid>
                  </TableCell>
                  <TableCell className="">
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                      <TextField id="working-days" name="working-days" type="text" size="small" fullWidth sx={{ backgroundColor: 'white' }} />
                    </Grid>
                  </TableCell>
                  <TableCell className="">
                    <Grid item xs={12} sm={12} md={12}>
                      <TextField id="qualifications" name="qualifications" type="text" size="small" fullWidth sx={{ backgroundColor: 'white' }} />
                    </Grid>
                  </TableCell>
                  <TableCell className="">
                    <Grid item xs={12} sm={12} md={12}>
                      <TextField id="company-name" name="Company-name" type="text" size="small" fullWidth sx={{ backgroundColor: 'white' }} />
                    </Grid>
                  </TableCell>
                  <TableCell className="">
                    <Grid item xs={12} sm={12} md={12}>
                      <TextField id="remarks-input" name="remarks-input" type="text" size="small" fullWidth sx={{ backgroundColor: 'white' }} />
                    </Grid>
                  </TableCell>
                  <TableCell className="">
                    <Grid item xs={1} sm={0.1} md={1} lg={1} sx={{ mt: -1.3, ml: { xs: 0, sm: 0, md: 0, lg: 1 } }}>
                      <IconButton aria-label="delete" size="small">
                        <RemoveCircleOutlineIcon />
                      </IconButton>
                    </Grid>
                  </TableCell>
                </TableRow>

              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Grid>
      {/* end table excretion */}

      {/* Start Grid Button + */}
      <Grid container spacing={1} justifyContent='start' alignItems='center'>
        <Grid item sx={{ mt: 1, mb: 2 }}>
          <Button variant="contained" size="small" sx={{ width: 90, mt: 0.3, backgroundColor: "#99CCFF", color: "black" }}>+ 追加</Button>
        </Grid>
      </Grid>
      {/* End Grid Button + */}



    </>
  );
};
