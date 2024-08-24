import { Button, FormControlLabel, Grid, Radio, RadioGroup, TextField, TextareaAutosize, Typography } from "@mui/material";
import DayForm from "../../componentsform/DayForm";
import EraForm from "../../componentsform/EraForm";
import MonthForm from "../../componentsform/MonthForm";
import YearForm from "../../componentsform/YearForm";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useState } from 'react';
import Numpad from "../../content/Numpad";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SaveIcon from '@mui/icons-material/Save';
import EducationTable from "../../teacher/infoteachtable/EducationTable";
import BasicallyTable from "../../teacher/infoteachtable/BasicallyTable";
import ResumeTable from "../../teacher/infoteachtable/ResumeTable";




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

        <Grid container spacing={1} className='pt-1'>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <EducationTable />
          </Grid>
        </Grid>





        {/* start grid  履歷*/}
        <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-10 ">
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



        <Grid container spacing={1} className='pt-1'>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <ResumeTable />
          </Grid>
        </Grid>

        {/* start grid  指導計画は食育の内容を含むこと*/}
        <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-10 ">
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

        <Grid container spacing={1} className='pt-1'>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <BasicallyTable />
          </Grid>
        </Grid>


      </Grid>

      <div className="mt-auto pt-5">
        <Grid container justifyContent="center" spacing={2} className='pt-5' sx={{ bottom: 0, width: '100%', backgroundColor: 'inherit', paddingBottom: '10px' }}>
          <Grid item>
            <Button variant="contained" href="/infoteach" size='medium' className='text-center' startIcon={<ArrowBackIcon />} color="warning">
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
