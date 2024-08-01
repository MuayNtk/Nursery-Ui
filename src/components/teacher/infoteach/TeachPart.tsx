import { FormControlLabel, Grid, Radio, RadioGroup, TextField, Typography, TextareaAutosize, Button, } from "@mui/material";
import EraForm from "../../componentsform/EraForm";
import YearForm from "../../componentsform/YearForm";
import MonthForm from "../../componentsform/MonthForm";
import DayForm from "../../componentsform/DayForm";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SaveIcon from '@mui/icons-material/Save';
import EducationTable from "../../teacher/infoteachtable/EducationTable";
import Workhistory from "../../teacher/infoteachtable/Workhistory";
import Currentfacility from "../../teacher/infoteachtable/Currentfacility";



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

      <Grid container spacing={1} className='pt-1'>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <EducationTable />
        </Grid>
      </Grid>

      {/* Start 現施設での勤務履歴 Grid */}
      <Grid className="pt-10">
        <Typography
          component="div"
          sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, backgroundColor: '#CCF0FD', fontWeight: 'bold', pt: { xs: 1.5, sm: 1.5, md: 1.5, lg: 1 } }}
          className='flex justify-start h-10 pt-2 pl-5' >
          現施設での勤務履歴
        </Typography>
      </Grid>
      {/* End 現施設での勤務履歴 Grid */}


      <Grid container spacing={1} className='pt-1'>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Currentfacility />
        </Grid>
      </Grid>


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

      <Grid container spacing={1} className='pt-1'>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Workhistory />
        </Grid>
      </Grid>

      <div className="mt-auto">
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
};
