import { Button, Card, FormControlLabel, Grid, IconButton, Paper, Radio, RadioGroup, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, TextareaAutosize, Typography } from "@mui/material";
import DayForm from "../../componentsform/DayForm";
import EraForm from "../../componentsform/EraForm";
import MonthForm from "../../componentsform/MonthForm";
import YearForm from "../../componentsform/YearForm";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { useState } from 'react';
import Numpad from "../../content/Numpad";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SaveIcon from '@mui/icons-material/Save';

interface Column {
  id: 'name' | 'classroom' | 'date' | 'sub' | 'fu' | 'uu';
  label: string;
  minWidth?: number;
  align?: 'right' | 'center';
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: 'name', label: '年 月 日', minWidth: 50, align: 'center', },
  { id: 'classroom', label: '勤務年数', minWidth: 50, align: 'center', },
  { id: 'date', label: '任免その他', minWidth: 50, align: 'center', },
  { id: 'sub', label: '職種', minWidth: 100, align: 'center', },
  { id: 'fu', label: '発令者s', minWidth: 100, align: 'center', },
  { id: 'uu', label: '', minWidth: 50, align: 'center', },

];


export default function TeachFull() {
  const [numpadOpen, setNumpadOpen] = useState(false);
  const [currentInputId, setCurrentInputId] = useState('');

  const handleInputClick = (id: string) => {
    setCurrentInputId(id);
    setNumpadOpen(true);
  };

  const handleNumpadInput = (value: string) => {
    const input = document.getElementById(currentInputId) as HTMLInputElement;
    if (input) {
      input.value = value;
    }
    setNumpadOpen(false);
  };

  return (
    <>
      <Grid container spacing={2}>

        <Grid container spacing={2} className='pt-10'>
          <Grid item xs={3} sm={2} md={2.4}>
            <Typography style={{ fontSize: '16px' }} className='pt-2 text-end'>
              所属
            </Typography>
          </Grid>
          <Grid item xs={5} sm={4} md={3}>
            <TextField id="outlined-search" type="text" size="small" fullWidth sx={{ backgroundColor: 'white' }} />
          </Grid>
        </Grid>

        <Grid container spacing={2} className='pt-4' >
          <Grid item xs={3} sm={2} md={2.4}>
            <Typography style={{ fontSize: '16px' }} className='pt-2 text-end'>
              氏名
            </Typography>
          </Grid>
          <Grid item xs={5} sm={4} md={3}>
            <TextField id="outlined-search" type="text" size="small" fullWidth sx={{ backgroundColor: 'white' }} />
          </Grid>
        </Grid>

        <Grid container spacing={2} className='pt-4'>
          <Grid item xs={3} sm={2} md={2.4}>
            <Typography style={{ fontSize: '16px' }} className='pt-2 text-end'>
              旧姓
            </Typography>
          </Grid>
          <Grid item xs={5} sm={4} md={3}>
            <TextField id="outlined-search" type="text" size="small" fullWidth sx={{ backgroundColor: 'white' }} />
          </Grid>
        </Grid>

        <Grid container spacing={2} className='pt-4' >
          <Grid item xs={3} sm={4} md={2.4}>
            <Typography style={{ fontSize: '16px' }} className='pt-2 text-end'>
              生年月日
            </Typography>
          </Grid>
          <Grid item >
            <Grid container spacing={1}>
              <Grid item xs={3} sm={3} md={2}>
                <EraForm />
              </Grid>
              <Grid item xs={3} sm={3} md={2}>
                <YearForm />
              </Grid>
              <Grid item xs={3} sm={3} md={2}>
                <MonthForm />
              </Grid>
              <Grid item xs={3} sm={3} md={2}>
                <DayForm />
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid container spacing={2} className='pt-4'>
          <Grid item xs={3} sm={3} md={2.4}>
            <Typography style={{ fontSize: '16px' }} className='pt-2 text-end'>
              性別
            </Typography>
          </Grid>
          <Grid item xs={3} sm={3} md={2.4}>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="paidleave"
              name="radio-buttons-group"
              row
            >
              <FormControlLabel value="Man" control={<Radio />} label="男" />
              <FormControlLabel value="Female" control={<Radio />} label="女" />
            </RadioGroup>
          </Grid>
          <Grid item xs={1.7} sm={3} md={1}>
            <Typography style={{ fontSize: '16px' }} className='pt-2 text-end'>
              年齢
            </Typography>
          </Grid>
          <Grid item xs={3} sm={3} md={1.5}>
            <TextField 
              id="age" 
              type="text" 
              size="small" 
              fullWidth sx={{ backgroundColor: 'white' }} 
              onClick={() => handleInputClick('age')}
              InputLabelProps={{ shrink: true }} 
              InputProps={{
                  readOnly: true 
                }}
            />
             <Numpad open={numpadOpen} onClose={() => setNumpadOpen(false)} onInput={handleNumpadInput} />
          </Grid>
        </Grid>

        <Grid container spacing={2} className='pt-4'>
          <Grid item xs={3} sm={2} md={2.4}>
            <Typography style={{ fontSize: '16px' }} className='pt-2 text-end'>
              年齢
            </Typography>
          </Grid>
          <Grid item xs={5} sm={2} md={3}>
            <TextareaAutosize id="livingchildren" name="livingchildren" minRows={3.5} maxRows={100}
              className="lg:w-96 md:w-60 "
              style={{ border: '1px solid gray', borderRadius: '4px' }} />
          </Grid>
        </Grid>
        <Grid container spacing={2} className='pt-4'>
          <Grid item xs={3} sm={2} md={2.4}>
            <Typography style={{ fontSize: '16px' }} className='pt-2 text-end'>
              現住所 (住所変更)
            </Typography>
          </Grid>
          <Grid item xs={5} sm={2} md={3}>
            <TextareaAutosize id="livingchildren" name="livingchildren" minRows={3.5} maxRows={100}
              className="lg:w-96 md:w-60 "
              style={{ border: '1px solid gray', borderRadius: '4px' }} />
          </Grid>
        </Grid>

        <Grid container spacing={1} className='pt-1'>
          <Grid item xs={3} sm={2} md={2.4}>
            <Typography style={{ fontSize: '16px' }} className='pt-5 text-end'>
              異動日
            </Typography>
          </Grid>
          <Grid item xs={7} sm={4} md={4} className='scale-75' sx={{ marginLeft: { xs: 0, sm: -0.5, md: 0, lg: -5 } }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['DatePicker']}>
                <DatePicker sx={{ backgroundColor: "white" }} />
              </DemoContainer>
            </LocalizationProvider>
          </Grid>
        </Grid>

        <Grid container spacing={2} className='pt-3'>
          <Grid item xs={3} sm={2} md={2.4}>
            <Typography style={{ fontSize: '16px' }} className='pt-2 text-end'>
              備考
            </Typography>
          </Grid>
          <Grid item xs={5} sm={2} md={3}>
            <TextareaAutosize id="livingchildren" name="livingchildren" minRows={3.5} maxRows={100}
              className="lg:w-96 md:w-60 "
              style={{ border: '1px solid gray', borderRadius: '4px' }} />
          </Grid>
        </Grid>


        {/* start grid  履歷*/}
      <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-5 ">
        <Grid item xs={12} sm={12} md={12} lg={12} className="" >
          <Typography
            component="div"
            sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, fontWeight: 'bold', }}
            className='flex justify-start h-11 pt-3 pl-5'
            bgcolor={"#CCF0FD"}
          >
            学歴
          </Typography>
        </Grid>
      </Grid>
      {/* End grid  履歷*/}

        <Grid container spacing={2} className='pt-4'>
          <Grid item xs={3} sm={2} md={2.4}>
            <Typography style={{ fontSize: '16px' }} className='pt-2 text-end'>
              所属
            </Typography>
          </Grid>
          <Grid item xs={5} sm={4} md={3}>
            <TextField id="outlined-search" type="text" size="small" fullWidth sx={{ backgroundColor: 'white' }} />
          </Grid>
        </Grid>

        <Grid container spacing={2} className='pt-4' >
          <Grid item xs={3} sm={2} md={2.4}>
            <Typography style={{ fontSize: '16px' }} className='pt-2 text-end'>
              氏名
            </Typography>
          </Grid>
          <Grid item xs={5} sm={4} md={3}>
            <TextField id="outlined-search" type="text" size="small" fullWidth sx={{ backgroundColor: 'white' }} />
          </Grid>
        </Grid>

        <Grid container spacing={1} className='pt-1'>
          <Grid item xs={3} sm={2} md={2.4} >
            <Typography style={{ fontSize: '16px' }} className='pt-5 text-end'>
              修学期間
            </Typography>
          </Grid>
          <Grid item xs={7} sm={4} md={4} sx={{ marginLeft: { xs: 0, sm: -0.5, md: 0, lg: -5 } }} className='scale-75'>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['DatePicker']}>
                <DatePicker sx={{ backgroundColor: "white" }} />
              </DemoContainer>
            </LocalizationProvider>
          </Grid>
        </Grid>

        <Grid container spacing={2} className='pt-2' >
          <Grid item xs={4} sm={3} md={2.4}>
            <Typography style={{ fontSize: '16px' }} className='pt-2 text-end'>
              卒業・中退等
            </Typography>
          </Grid>
          <Grid item xs={5} sm={4} md={3}>
            <TextField id="outlined-search" type="text" size="small" fullWidth sx={{ backgroundColor: 'white' }} />
          </Grid>
        </Grid>

        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-10 pl-20' >
          <Card sx={{ bgcolor: "pink", width: 120, height: 40 }}>
            <Typography component='div' className="pt-2 text-center">
              資格・免許等
            </Typography>
          </Card>
        </Grid>




        <Grid container spacing={2} className='pt-4'>
          <Grid item xs={3} sm={2} md={2.4}>
            <Typography style={{ fontSize: '16px' }} className='pt-2 text-end'>
              所属
            </Typography>
          </Grid>
          <Grid item xs={8} sm={4} md={3}>
            <TextField id="outlined-search" type="text" size="small" fullWidth sx={{ backgroundColor: 'white' }} />
          </Grid>
        </Grid>

        <Grid container spacing={2} className='pt-1'>
          <Grid item xs={3} sm={3} md={2.4} >
            <Typography style={{ fontSize: '16px' }} className='pt-5 text-end'>
              修学期間
            </Typography>
          </Grid>
          <Grid item xs={7} sm={4} md={4} sx={{ marginLeft: { xs: -3, sm: -0.5, md: 0, lg: -5 }  }} className='scale-75'>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['DatePicker']}>
                <DatePicker sx={{ backgroundColor: "white" }} className=""/>
              </DemoContainer>
            </LocalizationProvider>
          </Grid>
        </Grid>

        {/* Start Grid Button + */}
        <Grid container spacing={1} justifyContent='center' alignItems='center' className="pt-3">
          <Grid item sx={{ ml: { xs: 0, sm: 1, md: 1, lg: 1 }, mt: 1, mb: 2 }}>
            <Button variant="contained" size="small" sx={{ width: 90, mt: 0.3, backgroundColor: "#99CCFF", color: "black" }}>+ 追加</Button>
          </Grid>
        </Grid>
        {/* End Grid Button + */}

     
        {/* start grid  履歷*/}
      <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-5 ">
        <Grid item xs={12} sm={12} md={12} lg={12} className="" >
          <Typography
            component="div"
            sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, fontWeight: 'bold', }}
            className='flex justify-start h-11 pt-3 pl-5'
            bgcolor={"#CCF0FD"}
          >
            貰罰
          </Typography>
        </Grid>
      </Grid>
      {/* End grid  履歷*/}

        <Grid container spacing={1} className='pt-1'>
          <Grid item xs={3} sm={2} md={2.4} >
            <Typography style={{ fontSize: '16px' }} className='pt-5 text-end'>
              年月:
            </Typography>
          </Grid>
          <Grid item xs={7} sm={4} md={4} sx={{ marginLeft: { xs: 0, sm: -0.5, md: 0, lg: -5 } }} className='scale-75'>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['DatePicker']}>
                <DatePicker sx={{ backgroundColor: "white" }} />
              </DemoContainer>
            </LocalizationProvider>
          </Grid>
        </Grid>

        <Grid container spacing={2} className='pt-2' >
          <Grid item xs={4} sm={3} md={2.4}>
            <Typography style={{ fontSize: '16px' }} className='pt-2 text-end'>
              賞罰事項:
            </Typography>
          </Grid>
          <Grid item xs={5} sm={2} md={3}>
            <TextareaAutosize id="livingchildren" name="livingchildren" minRows={3.5} maxRows={100}
              className="lg:w-96 md:w-60 "
              style={{ border: '1px solid gray', borderRadius: '4px' }} />
          </Grid>
        </Grid>

        <Grid container spacing={2} className='pt-2' >
          <Grid item xs={4} sm={2} md={2.4}>
            <Typography style={{ fontSize: '16px' }} className='pt-2 text-end'>
              授与者:
            </Typography>
          </Grid>
          <Grid item xs={5} sm={4} md={3}>
            <TextField id="outlined-search" type="text" size="small" fullWidth sx={{ backgroundColor: 'white' }} />
          </Grid>
        </Grid>

        
       

         {/* start grid  履歷*/}
      <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-5 ">
        <Grid item xs={12} sm={12} md={12} lg={12} className="" >
          <Typography
            component="div"
            sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, fontWeight: 'bold', }}
            className='flex justify-start h-11 pt-3 pl-5'
            bgcolor={"#CCF0FD"}
          >
            履歷
          </Typography>
        </Grid>
      </Grid>
      {/* End grid  履歷*/}

        {/* start table excretion */}
        <Grid container spacing={2} className='pt-2' justifyContent="center">
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
                            <DatePicker label="Start date" sx={{ backgroundColor: "white" }} className="" />
                          </DemoContainer>
                        </LocalizationProvider>
                        <LocalizationProvider dateAdapter={AdapterDayjs} >
                          <DemoContainer components={['DatePicker']}>
                            <DatePicker label="End date" sx={{ backgroundColor: "white" }} className="" />
                          </DemoContainer>
                        </LocalizationProvider>
                      </Grid>
                    </TableCell>
                    <TableCell className="">
                      <Grid item xs={12} sm={12} md={12}>
                        <TextareaAutosize id="livingchildren" name="livingchildren" minRows={2} maxRows={100}
                          className="lg:w-28 md:w-28 "
                          style={{ border: '1px solid gray', borderRadius: '4px' }} />
                      </Grid>
                    </TableCell>
                    <TableCell className="">
                      <Grid item xs={12} sm={12} md={12}>
                        <TextareaAutosize id="livingchildren" name="livingchildren" minRows={2} maxRows={100}
                          className="lg:w-40 md:w-60 "
                          style={{ border: '1px solid gray', borderRadius: '4px' }} />
                      </Grid>
                    </TableCell>
                    <TableCell className="">
                      <Grid item xs={12} sm={12} md={12}>
                        <TextField id="outlined-search" type="text" size="small" fullWidth sx={{ backgroundColor: 'white' }} />
                      </Grid>
                    </TableCell>
                    <TableCell className="">
                      <Grid item xs={12} sm={12} md={12}>
                        <TextField id="outlined-search" type="text" size="small" fullWidth sx={{ backgroundColor: 'white' }} />
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
         <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-3">
          <Grid item sx={{ ml: { xs: 0, sm: 1, md: 1, lg: 1 }, mt: 1, mb: 2 }}>
            <Button variant="contained" size="small" sx={{ width: 90, mt: 0.3, backgroundColor: "#99CCFF", color: "black" }}>+ 追加</Button>
          </Grid>
        </Grid>
        {/* End Grid Button + */}


      
         {/* start grid  指導計画は食育の内容を含むこと*/}
      <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-5 ">
        <Grid item xs={12} sm={12} md={12} lg={12} className="" >
          <Typography
            component="div"
            sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, fontWeight: 'bold', }}
            className='flex justify-start h-11 pt-3 pl-5'
            bgcolor={"#CCF0FD"}
          >
            基本給(特殊業務手当・処遇改善含まず)
          </Typography>
        </Grid>
      </Grid>
      {/* End grid  指導計画は食育の内容を含むこと*/}

        {/* Start 小児科 Grid */}
        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-4 pl-3' >
          <Typography component='div' fontWeight={500} className="pl-5 md:pr-3 lg:pl-24 pt-6">
          年月: 
          </Typography>
          <Grid item xs={8} sm={8} md={3}>
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
          <Typography component='div' fontWeight={500} className="pl-5 pr-[28px] md:pr-[40px] lg:pr-0 lg:pl-[25px] pt-6">
          本俸額: 
          </Typography>
          <Grid item xs={8} sm={8} md={3}>
            <TextField
              className='w-full '
              id="furigana-input"
              label=""
              type="text"
              size='small'
              sx={{
                backgroundColor: "white",
                marginLeft: { xs: -4, sm: -5, md:1, lg:1, }
              }}
            />
          </Grid>

        </Grid>
        {/* End Grid */}
         {/* Start Grid Button + */}
         <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-3">
          <Grid item sx={{ ml: { xs: 0, sm: 1, md: 1, lg: 1 }, mt: 1, mb: 2 }}>
            <Button variant="contained" size="small" sx={{ width: 90, mt: 0.3, backgroundColor: "#99CCFF", color: "black" }}>+ 追加</Button>
          </Grid>
        </Grid>
       

      
      </Grid>

      <div className="mt-auto">
        <Grid container justifyContent="center" spacing={2} className='pt-5' sx={{ bottom: 0, width: '100%', backgroundColor: 'inherit', paddingBottom: '10px' }}>
          <Grid item>
            <Button variant="contained" href="/infoteach" size='medium' className='text-center' startIcon={<ArrowBackIcon />}  color="warning">
              <Typography component="div" style={{ color: 'white', alignItems: 'center' }}>
                戻る
              </Typography>
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" href="#" size='medium' className='text-center' startIcon={<SaveIcon />} color="success">
              <Typography component="div" style={{ color: 'white', alignItems: 'center' }}>
                修正
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
