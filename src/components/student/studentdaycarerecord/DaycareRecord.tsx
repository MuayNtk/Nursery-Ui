import { Button, FormControlLabel, Grid, Radio, RadioGroup, TextField, Typography } from "@mui/material";
import ContentMain from "../../content/Content";
import EraForm from "../../componentsform/EraForm";
import YearForm from "../../componentsform/YearForm";
import MonthForm from "../../componentsform/MonthForm";
import DayForm from "../../componentsform/DayForm";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";


export default function DaycareRecord() {


  return (

      <ContentMain className="flex flex-col min-h-screen">

            <Grid container spacing={3}>
                  {/* Header */}
                  <Grid item xs={12}>
                        <Typography variant="h6" gutterBottom className=" text-center">
                              保育所児童保育要録	
                        </Typography>
                  </Grid>
                  {/* 所属, 役職 Fields */}
                  <Grid container spacing={2} className='pt-4'>
                        <Grid item xs={6} sm={2} md={2}>
                              <Typography style={{ fontSize: '14px' }} className='pt-2 text-end'>
                                    ふりがな
                              </Typography>
                        </Grid>
                        <Grid item xs={6} sm={2} md={3}>
                              <TextField id="futikana" name="futikana" type="text" size="small" fullWidth sx={{ backgroundColor: 'white' }} />
                        </Grid>
                  </Grid>

                  <Grid container spacing={2} className='pt-4' >
                        <Grid item xs={6} sm={2} md={2}>
                              <Typography style={{ fontSize: '14px' }} className='pt-2 text-end'>
                              氏名
                              </Typography>
                        </Grid>
                        <Grid item xs={6} sm={2} md={3}>
                              <TextField id="outlined-search" type="text" size="small" fullWidth sx={{ backgroundColor: 'white' }} />
                        </Grid>
                  </Grid>

                  {/* 性別 Radio Group */}
                  <Grid container spacing={2} className='pt-4'>
                        <Grid item xs={6} sm={2} md={2}>
                              <Typography style={{ fontSize: '16px' }} className='pt-2 text-end'>
                              性別
                              </Typography>
                        </Grid>
                        <Grid item xs={6} sm={2} md={8}>
                              <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="paidleave"
                                    name="radio-buttons-group"
                                    row
                              >
                                    <FormControlLabel value="M" control={<Radio />} label="男" />
                                    <FormControlLabel value="F" control={<Radio />} label="女" />
                              </RadioGroup>
                        </Grid>
                  </Grid>

                  {/* 生年月日 Fields */}
                  <Grid container  spacing={2} className='pt-4'>
                        <Grid item xs={6} sm={2} md={2}>
                              <Typography style={{ fontSize: '14px' }} className='pt-2 text-end'>
                              生年月日
                              </Typography>
                        </Grid>
                        <Grid item xs={12} sm={3} md={1}>
                              <EraForm />
                        </Grid>
                        <Grid item xs={12} sm={3} md={1}>
                              <YearForm />
                        </Grid>
                        <Grid item xs={12} sm={4} md={3}>
                              <Grid container spacing={12}>
                                    <Grid item xs={6} md={4}>
                                          <MonthForm />
                                    </Grid>
                                    <Grid item xs={6} md={6}>
                                          <DayForm />
                                    </Grid>
                              </Grid>
                        </Grid>
                  </Grid>

                  <Grid container spacing={2} className='pt-4' >
                        <Grid item xs={6} sm={2} md={2}>
                              <Typography style={{ fontSize: '14px' }} className='pt-2 text-end'>
                              就学先
                              </Typography>
                        </Grid>
                        <Grid item xs={6} sm={2} md={3}>
                              <TextField id="outlined-search" type="text" size="small" fullWidth sx={{ backgroundColor: 'white' }} />
                        </Grid>
                  </Grid>

                  {/* Text Area */}
                  <Grid container spacing={2} className='pt-7'>

                        <Grid item xs={6} sm={2} md={2}>
                              <Typography style={{ fontSize: '14px' }} className='pt-2 text-end'>
                                    保育所名及び所在地
                              </Typography>
                        </Grid>
                        <Grid item xs={10} sm={2} md={3}>
                              <textarea 
                                    id="message" 
                                    className="block p-2.5 w-full text-sm min-h-20 border border-gray-300"
                                    placeholder="備考">
                              </textarea>
                        </Grid>
                  </Grid>
                  {/* Text Area */}
                  <Grid container spacing={2} className='pt-4'>
                        <Grid item xs={6} sm={2} md={2}>
                              <Typography style={{ fontSize: '14px' }} className='pt-2 text-end'>
                                    所在地
                              </Typography>
                        </Grid>
                        <Grid item xs={10} sm={2} md={3}>
                              <textarea 
                              id="message" 
                              className="block p-2.5 w-full text-sm min-h-20 border border-gray-300"
                              placeholder="備考">
                              </textarea>
                        </Grid>
                  </Grid>
            </Grid>
            <Grid className=" mt-3">
                  <Typography 
                        component="div" 
                        sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, backgroundColor: '#CCF0FD', fontWeight: 'bold' }} 
                        className='flex justify-start h-10 pt-2 pl-5' >
                              当該保育所における保育期間
                  </Typography>
            </Grid>
            <Grid container spacing={3} className='pt-5'>
            {/* 生年月日 Fields */}
                  <Grid container spacing={2} className='pt-4'>
                        <Grid item xs={6} sm={2} md={1.5} className="text-end">
                              <Typography style={{ fontSize: '14px' }} className='pt-2'>
                                    生年月日
                              </Typography>
                        </Grid>
                        <Grid item xs={12} sm={3} md={1}>
                              <EraForm />
                        </Grid>
                        <Grid item xs={12} sm={3} md={1}>
                              <YearForm />
                        </Grid>
                        <Grid item>
                              <Grid container spacing={3}>
                                    <Grid item xs={6}>
                                          <MonthForm />
                                    </Grid>
                                    <Grid item xs={6}>
                                          <DayForm />
                                    </Grid>
                              </Grid>
                        </Grid>
                        <Grid item xs={12} sm={2} md={1} className="text-center">
                              <Typography style={{ fontSize: '14px' }} className='pt-2'>
                                    ～
                              </Typography>
                        </Grid>
                        <Grid item xs={12} sm={3} md={1}>
                              <EraForm />
                        </Grid>
                        <Grid item xs={12} sm={3} md={1}>
                              <YearForm />
                        </Grid>
                        <Grid item>
                              <Grid container spacing={3}>
                                    <Grid item xs={6}>
                                          <MonthForm />
                                    </Grid>
                                    <Grid item xs={6}>
                                          <DayForm />
                                    </Grid>
                              </Grid>
                        </Grid>
                  </Grid>
            </Grid>
            <Grid container spacing={3} className='pt-5'>
            {/* 生年月日 Fields */}
                  <Grid container spacing={2} className='pt-4'>
                        <Grid item xs={6} sm={2} md={1.5} className="text-end">
                              <Typography style={{ fontSize: '14px' }} className='pt-2'>
                                    生年月日
                              </Typography>
                        </Grid>
                        <Grid item xs={12} sm={3} md={1}>
                              <EraForm />
                        </Grid>
                        <Grid item xs={12} sm={3} md={1}>
                              <YearForm />
                        </Grid>
                        <Grid item>
                              <Grid container spacing={3}>
                                    <Grid item xs={6}>
                                          <MonthForm />
                                    </Grid>
                                    <Grid item xs={6}>
                                          <DayForm />
                                    </Grid>
                              </Grid>
                        </Grid>
                        <Grid item xs={12} sm={2} md={1} className="text-center">
                              <Typography style={{ fontSize: '14px' }} className='pt-2'>
                                    ～
                              </Typography>
                        </Grid>
                        <Grid item xs={12} sm={3} md={1}>
                              <EraForm />
                        </Grid>
                        <Grid item xs={12} sm={3} md={1}>
                              <YearForm />
                        </Grid>
                        <Grid item>
                              <Grid container spacing={3}>
                                    <Grid item xs={6}>
                                          <MonthForm />
                                    </Grid>
                                    <Grid item xs={6}>
                                          <DayForm />
                                    </Grid>
                              </Grid>
                        </Grid>
                  </Grid>
            </Grid>
            <Grid container spacing={3} className='pt-5'>
            {/* 生年月日 Fields */}
                  <Grid container spacing={2} className='pt-4'>
                        <Grid item xs={6} sm={2} md={1.5} className="text-end">
                              <Typography style={{ fontSize: '14px' }} className='pt-2'>
                                    生年月日
                              </Typography>
                        </Grid>
                        <Grid item xs={12} sm={3} md={1}>
                              <EraForm />
                        </Grid>
                        <Grid item xs={12} sm={3} md={1}>
                              <YearForm />
                        </Grid>
                        <Grid item>
                              <Grid container spacing={3}>
                                    <Grid item xs={6}>
                                          <MonthForm />
                                    </Grid>
                                    <Grid item xs={6}>
                                          <DayForm />
                                    </Grid>
                              </Grid>
                        </Grid>
                        <Grid item xs={12} sm={2} md={1} className="text-center">
                              <Typography style={{ fontSize: '14px' }} className='pt-2'>
                                    ～
                              </Typography>
                        </Grid>
                        <Grid item xs={12} sm={3} md={1}>
                              <EraForm />
                        </Grid>
                        <Grid item xs={12} sm={3} md={1}>
                              <YearForm />
                        </Grid>
                        <Grid item>
                              <Grid container spacing={3}>
                                    <Grid item xs={6}>
                                          <MonthForm />
                                    </Grid>
                                    <Grid item xs={6}>
                                          <DayForm />
                                    </Grid>
                              </Grid>
                        </Grid>
                  </Grid>
            </Grid>
            <Grid container spacing={3} className='pt-5'>
            {/* 生年月日 Fields */}
                  <Grid container spacing={2} className='pt-4'>
                        <Grid item xs={6} sm={2} md={1.5} className="text-end"> </Grid>
                        <Grid item xs={6} sm={2} md={1}>
                              <TextField id="outlined-search" type="text" size="small" fullWidth sx={{ backgroundColor: 'white' }} />
                        </Grid>
                        
                        <Grid item xs={12} sm={3} md={1}>
                              <YearForm />
                        </Grid>
                        <Grid item>
                              <Grid container spacing={3}>
                                    <Grid item xs={6}>
                                          <MonthForm />
                                    </Grid>
                                    <Grid item xs={6}>
                                          <DayForm />
                                    </Grid>
                              </Grid>
                        </Grid>
                        
                  </Grid>
            </Grid>
            <Grid className=" mt-3">
                  <Typography 
                        component="div" 
                        sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, backgroundColor: '#CCF0FD', fontWeight: 'bold' }} 
                        className='flex justify-start h-10 pt-2 pl-5' >
                              保育の過程と子どもの育ちに関する事項
                  </Typography>
            </Grid>
            <Grid container spacing={3} className='pt-9'>
                  <Grid container spacing={2} >

                        <Grid item xs={5} sm={2} md={2.3}>
                              <Typography style={{ fontSize: '14px' }} className='pt-2 text-end'>
                                    【最終年度の重点】
                              </Typography>
                        </Grid>
                        <Grid item xs={6} sm={2} md={3}>
                              <textarea 
                                    id="message" 
                                    className="block p-2.5 w-full text-sm min-h-16 border border-gray-300"
                                    placeholder="備考">
                              </textarea>
                        </Grid>
                  </Grid>
                  {/* Text Area */}
                  <Grid container spacing={2} className='pt-4'>
                        <Grid item xs={5} sm={2} md={2.3}>
                              <Typography style={{ fontSize: '14px' }} className='pt-2 text-end'>
                                    【特に配慮すべき事項】
                              </Typography>
                        </Grid>
                        <Grid item xs={6} sm={2} md={3}>
                              <textarea 
                              id="message" 
                              className="block p-2.5 w-full text-sm min-h-16 border border-gray-300"
                              placeholder="備考">
                              </textarea>
                        </Grid>
                  </Grid>
                  <Grid container spacing={2} className='pt-4'>
                        <Grid item xs={5} sm={2} md={2.3}>
                              <Typography style={{ fontSize: '14px' }} className='pt-2 text-end'>
                                    【個人の重点】
                              </Typography>
                        </Grid>
                        <Grid item xs={6} sm={2} md={3}>
                              <textarea 
                              id="message" 
                              className="block p-2.5 w-full text-sm min-h-16 border border-gray-300"
                              placeholder="備考">
                              </textarea>
                        </Grid>
                  </Grid>
            </Grid>
            
            
            {/* Buttons at the bottom */}
            <div className="mt-auto">
                  <Grid container justifyContent="center" spacing={2} className='pt-5' sx={{ bottom: 0, width: '100%', backgroundColor: 'inherit', paddingBottom: '10px' }}>
                        <Grid item>
                              <Button variant="contained" href="#" size='small' className='text-center'>
                                    <Typography component="div" style={{ color: 'white', alignItems: 'center' }}>
                                    戻る
                                    </Typography>
                              </Button>
                        </Grid>
                        <Grid item>
                              <Button variant="contained" href="#" size='small' className='text-center'>
                                    <Typography component="div" style={{ color: 'white', alignItems: 'center' }}>
                                    修正
                                    </Typography>
                              </Button>
                        </Grid>
                  </Grid>
            </div>
      </ContentMain>
  
  );
};
