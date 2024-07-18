import { Grid, Typography, TextField, Button, Card, TextareaAutosize, SelectChangeEvent, MenuItem, Select, InputLabel, FormControl, Divider } from "@mui/material";
import ContentMain from "../content/Content";
import MonthForm from "../componentsform/MonthForm"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SaveIcon from '@mui/icons-material/Save';
import { useState } from "react";


export default function AnnualplanAdd() {

  const [selectedOption, setSelectedOption] = useState('');
  const handleDropdownChange = (event: SelectChangeEvent) => {
    setSelectedOption(event.target.value);
  };

  return (

    <>
      <ContentMain className="flex flex-col min-h-screen">

       
        <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-10 lg:pt-0">
          <Grid item xs={9} sm={7} md={5} lg={2.5} sx={{ ml: { xs: 0, sm: 0, md: 0, lg: 2 }, mt: { xs: -1, sm: -2, md: 5, lg: 4 } }}>
            <div>
              <FormControl sx={{ minWidth: 100 }} size="small" fullWidth>
                <InputLabel id="demo-select-small-label">年間指導計画を選択する</InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  label="年間指導計画を選択する"
                  size="small"
                  value={selectedOption}
                  onChange={handleDropdownChange}
                  className="mb-5"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="1">年間指導計画 0 歲児</MenuItem>
                  <MenuItem value="2">年間指導計画 1·2 歲児</MenuItem>
                  <MenuItem value="3">年間指導計画 3·4·5 歲児</MenuItem>
                </Select>
              </FormControl>
              <div>
                {selectedOption === '1' &&
                  <Typography
                    component="div"
                    sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, fontWeight: 'bold' }}>
                    年間指導計画 0 歲児
                  </Typography>
                }
                {selectedOption === '2' &&
                  <Typography
                    component="div"
                    sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, fontWeight: 'bold' }}>
                    年間指導計画 1·2 歲児
                  </Typography>
                }
                {selectedOption === '3' &&
                  <Typography
                    component="div"
                    sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, fontWeight: 'bold' }}>
                    年間指導計画 3·4·5 歲児
                  </Typography>
                }
              </div>
            </div>
          </Grid>
          <Grid item xs={3} sm={4} md={3} lg={2} >
            <Typography component="div" fontWeight="bold" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, mt: { xs: 6.5, sm: 5.5, md: 12.5, lg: 11.5 }, ml: { xs: -13, sm: -17, md: -20, lg: -4 } }} >
              (0年A組) 年度
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={1} className='pt-7' justifyContent="start">
          <Grid item xs={3} sm={3} md={2} lg={1.5}>
            <Typography style={{ fontSize: '14px' }} className='pt-2 text-end' >
              担任 :
            </Typography>
          </Grid>
          <Grid item xs={7} sm={7} md={3} lg={3}>
            <TextField id="outlined-search" type="text" size="small" fullWidth sx={{ backgroundColor: 'white' }} />
          </Grid>
          <Grid item xs={3} sm={3} md={2} lg={1.5}>
            <Typography style={{ fontSize: '14px' }} className='pt-2 text-end'>
            年間目標 :
            </Typography>
          </Grid>
          <Grid item xs={7} sm={7} md={3} lg={3}>
            <TextField id="outlined-search" type="text" size="small" fullWidth  sx={{ backgroundColor: 'white' }} />
          </Grid>

          <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-5 pb-5' ></Grid>
        </Grid>
       
        <Divider sx={{ borderColor: 'darkgrey', borderWidth: '2px'  }} />

        <Grid container spacing={1} className='pt-5' >
           <Grid  container rowSpacing={2} columnSpacing={{ xs: 1, sm: 1, md: 1 }} className=' pt-5' >
              <Grid item xs={2} sm={1.5} md={3} lg={1.5} className="text-end">
                <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, mt: 1 }} >
                  期 :
                </Typography>
              </Grid>
              <Grid item xs={2} sm={1.5} md={1} lg={1} >
                <MonthForm />
              </Grid>
              <Grid item xs={2} sm={1.5} md={1} lg={1} >
                <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, mt: 1, ml: { xs: 5, sm: 6.5, md: 8, lg: -1 } }} >
                  ~
                </Typography>
              </Grid>
              <Grid item xs={2} sm={1.5} md={1} lg={1} sx={{ ml: { xs: 2, sm: 3, md: 5, lg: -1 } }}>
                <MonthForm />
              </Grid>
            </Grid>
        
            <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-10' sx={{ ml: { xs: 3, sm: 3, md: 2, lg: 8 } }}>
              <Card sx={{ bgcolor: "pink", width: 120, height: 40 }}>
                <Typography component='div' className="pt-2">
                  ねらい
                </Typography>
              </Card>
            </Grid>

            <Grid container spacing={1} className='pt-7' justifyContent="start">
              <Grid item xs={3} sm={3} md={2} lg={1.5}>
                <Typography style={{ fontSize: '14px' }} className='pt-2 text-end' >
                  養護 :
                </Typography>
              </Grid>
              <Grid item xs={7} sm={7} md={3} lg={3}>
                <TextField id="homeroom-teacher-input"  name="homeroom-teacher-input" type="text" size="small" fullWidth sx={{ backgroundColor: 'white' }} />
              </Grid>
              <Grid item xs={3} sm={3} md={2} lg={1.5}>
                <Typography style={{ fontSize: '14px' }} className='pt-2 text-end'>
                  教育 :
                </Typography>
              </Grid>
              <Grid item xs={7} sm={7} md={3} lg={3}>
                <TextField id="annual-goals-input" name="annual-goals-input" type="text" size="small" fullWidth  sx={{ backgroundColor: 'white' }} />
              </Grid>
            </Grid>

            <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-10' sx={{ ml: { xs: 3, sm: 3, md: 2, lg: 8 } }}>
              <Card sx={{ bgcolor: "pink", width: 120, height: 40 }}>
                <Typography component='div' className="pt-2">
                  内容
                </Typography>
              </Card>
            </Grid>

            <Grid container spacing={2} className="pt-5" justifyContent='start'>
              <Grid item xs={12} md={6} >
                <Grid container spacing={1}  alignItems='center' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 5 } }}>
                  <Grid item xs={1} sm={4} md={3} lg={2} className="text-end">
                    <Typography component="div" fontWeight="bold" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16 } }}>
                      義護
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-2'  sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 15 } }}>
                  <Grid item xs={7.5} sm={3} md={8.5} lg={12} className="text-start">
                    <Typography  gutterBottom sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14 } }}>
                    生命の保持・情緒の安定
                    </Typography>
                    <TextareaAutosize
                      id="emotional-input"
                      name="emotional-input"
                      minRows={3}
                      maxRows={100}
                      className="w-56 sm:w-60 lg:w-96"
                      style={{ border: '1px solid gray', borderRadius: '4px' }}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
  
            <Grid container spacing={1} className='pt-5' alignItems='center' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 11 } }}>
              <Grid item xs={2} sm={4} md={3} lg={2} className="text-start">
                <Typography component="div" fontWeight="bold" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16 } }}>
                 教育
                </Typography>
              </Grid>
            </Grid>

            <Grid container spacing={2} className="pt-3" justifyContent='center'>
              <Grid item xs={12} md={6} >
                <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-2'  sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 15 } }}>
                  <Grid item xs={7.5} sm={3} md={8.5} lg={12} className="text-start">
                    <Typography  gutterBottom sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 12 } }}>
                    関する視点身体的発達に,関する視点社会的発達に,関する視点精神的発達に
                    </Typography>
                    <TextareaAutosize
                      id="perspectives-input"
                      name="perspectives-input"
                      minRows={3}
                      maxRows={100}
                      className="w-56 sm:w-60 lg:w-96"
                      style={{ border: '1px solid gray', borderRadius: '4px' }}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={6}>
                <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-2 '  sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 5} }}>
                  <Grid item xs={7.5} sm={7} md={8.5} lg={12} className="text-start">
                    <Typography  gutterBottom sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 12 } }}>
                    食育
                    </Typography>
                    <TextareaAutosize
                      id="food-education-input"
                      name="food-education-input"
                      minRows={3}
                      maxRows={100}
                      className="w-56 sm:w-60 lg:w-96"
                      style={{ border: '1px solid gray', borderRadius: '4px' }}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

      
            <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-5 pb-5' ></Grid>
         
        </Grid>

        <Divider sx={{ borderColor: 'darkgrey', borderWidth: '2px'  }} />

        {/* End Box 1 */}

        {/* Start Box 2 */}
        <Grid container spacing={1} className='pt-5' >
           <Grid  container rowSpacing={2} columnSpacing={{ xs: 1, sm: 1, md: 1 }} className=' pt-5' >
              <Grid item xs={2} sm={1.5} md={3} lg={1.5} className="text-end">
                <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, mt: 1 }} >
                  期 :
                </Typography>
              </Grid>
              <Grid item xs={2} sm={1.5} md={1} lg={1} >
                <MonthForm />
              </Grid>
              <Grid item xs={2} sm={1.5} md={1} lg={1} >
                <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, mt: 1, ml: { xs: 5, sm: 6.5, md: 8, lg: -1 } }} >
                  ~
                </Typography>
              </Grid>
              <Grid item xs={2} sm={1.5} md={1} lg={1} sx={{ ml: { xs: 2, sm: 3, md: 5, lg: -1 } }}>
                <MonthForm />
              </Grid>
            </Grid>
        
            <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-10' sx={{ ml: { xs: 3, sm: 3, md: 2, lg: 8 } }}>
              <Card sx={{ bgcolor: "pink", width: 120, height: 40 }}>
                <Typography component='div' className="pt-2">
                  ねらい
                </Typography>
              </Card>
            </Grid>

            <Grid container spacing={1} className='pt-7' justifyContent="start">
              <Grid item xs={3} sm={3} md={2} lg={1.5}>
                <Typography style={{ fontSize: '14px' }} className='pt-2 text-end' >
                  養護 :
                </Typography>
              </Grid>
              <Grid item xs={7} sm={7} md={3} lg={3}>
                <TextField id="homeroom-teacher-input"  name="homeroom-teacher-input" type="text" size="small" fullWidth sx={{ backgroundColor: 'white' }} />
              </Grid>
              <Grid item xs={3} sm={3} md={2} lg={1.5}>
                <Typography style={{ fontSize: '14px' }} className='pt-2 text-end'>
                  教育 :
                </Typography>
              </Grid>
              <Grid item xs={7} sm={7} md={3} lg={3}>
                <TextField id="annual-goals-input" name="annual-goals-input" type="text" size="small" fullWidth  sx={{ backgroundColor: 'white' }} />
              </Grid>
            </Grid>

            <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-10' sx={{ ml: { xs: 3, sm: 3, md: 2, lg: 8 } }}>
              <Card sx={{ bgcolor: "pink", width: 120, height: 40 }}>
                <Typography component='div' className="pt-2">
                  内容
                </Typography>
              </Card>
            </Grid>

            <Grid container spacing={2} className="pt-5" justifyContent='start'>
              <Grid item xs={12} md={6} >
                <Grid container spacing={1}  alignItems='center' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 5 } }}>
                  <Grid item xs={1} sm={4} md={3} lg={2} className="text-end">
                    <Typography component="div" fontWeight="bold" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16 } }}>
                      義護
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-2'  sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 15 } }}>
                  <Grid item xs={7.5} sm={3} md={8.5} lg={12} className="text-start">
                    <Typography  gutterBottom sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14 } }}>
                    生命の保持・情緒の安定
                    </Typography>
                    <TextareaAutosize
                      id="emotional-input"
                      name="emotional-input"
                      minRows={3}
                      maxRows={100}
                      className="w-56 sm:w-60 lg:w-96"
                      style={{ border: '1px solid gray', borderRadius: '4px' }}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
  
            <Grid container spacing={1} className='pt-5' alignItems='center' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 11 } }}>
              <Grid item xs={2} sm={4} md={3} lg={2} className="text-start">
                <Typography component="div" fontWeight="bold" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16 } }}>
                 教育
                </Typography>
              </Grid>
            </Grid>

            <Grid container spacing={2} className="pt-3" justifyContent='center'>
              <Grid item xs={12} md={6} >
                <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-2'  sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 15 } }}>
                  <Grid item xs={7.5} sm={3} md={8.5} lg={12} className="text-start">
                    <Typography  gutterBottom sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 12 } }}>
                    関する視点身体的発達に,関する視点社会的発達に,関する視点精神的発達に
                    </Typography>
                    <TextareaAutosize
                      id="perspectives-input"
                      name="perspectives-input"
                      minRows={3}
                      maxRows={100}
                      className="w-56 sm:w-60 lg:w-96"
                      style={{ border: '1px solid gray', borderRadius: '4px' }}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={6}>
                <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-2 '  sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 5} }}>
                  <Grid item xs={7.5} sm={7} md={8.5} lg={12} className="text-start">
                    <Typography  gutterBottom sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 12 } }}>
                    食育
                    </Typography>
                    <TextareaAutosize
                      id="food-education-input"
                      name="food-education-input"
                      minRows={3}
                      maxRows={100}
                      className="w-56 sm:w-60 lg:w-96"
                      style={{ border: '1px solid gray', borderRadius: '4px' }}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

      
            <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-5 pb-5' ></Grid>
         
        </Grid>

        <Divider sx={{ borderColor: 'darkgrey', borderWidth: '2px'  }} />
        {/* End Box 2 */}

        {/* Start Box 3*/}
        <Grid container spacing={1} className='pt-5' >
           <Grid  container rowSpacing={2} columnSpacing={{ xs: 1, sm: 1, md: 1 }} className=' pt-5' >
              <Grid item xs={2} sm={1.5} md={3} lg={1.5} className="text-end">
                <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, mt: 1 }} >
                  期 :
                </Typography>
              </Grid>
              <Grid item xs={2} sm={1.5} md={1} lg={1} >
                <MonthForm />
              </Grid>
              <Grid item xs={2} sm={1.5} md={1} lg={1} >
                <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, mt: 1, ml: { xs: 5, sm: 6.5, md: 8, lg: -1 } }} >
                  ~
                </Typography>
              </Grid>
              <Grid item xs={2} sm={1.5} md={1} lg={1} sx={{ ml: { xs: 2, sm: 3, md: 5, lg: -1 } }}>
                <MonthForm />
              </Grid>
            </Grid>
        
            <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-10' sx={{ ml: { xs: 3, sm: 3, md: 2, lg: 8 } }}>
              <Card sx={{ bgcolor: "pink", width: 120, height: 40 }}>
                <Typography component='div' className="pt-2">
                  ねらい
                </Typography>
              </Card>
            </Grid>

            <Grid container spacing={1} className='pt-7' justifyContent="start">
              <Grid item xs={3} sm={3} md={2} lg={1.5}>
                <Typography style={{ fontSize: '14px' }} className='pt-2 text-end' >
                  養護 :
                </Typography>
              </Grid>
              <Grid item xs={7} sm={7} md={3} lg={3}>
                <TextField id="homeroom-teacher-input"  name="homeroom-teacher-input" type="text" size="small" fullWidth sx={{ backgroundColor: 'white' }} />
              </Grid>
              <Grid item xs={3} sm={3} md={2} lg={1.5}>
                <Typography style={{ fontSize: '14px' }} className='pt-2 text-end'>
                  教育 :
                </Typography>
              </Grid>
              <Grid item xs={7} sm={7} md={3} lg={3}>
                <TextField id="annual-goals-input" name="annual-goals-input" type="text" size="small" fullWidth  sx={{ backgroundColor: 'white' }} />
              </Grid>
            </Grid>

            <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-10' sx={{ ml: { xs: 3, sm: 3, md: 2, lg: 8 } }}>
              <Card sx={{ bgcolor: "pink", width: 120, height: 40 }}>
                <Typography component='div' className="pt-2">
                  内容
                </Typography>
              </Card>
            </Grid>

            <Grid container spacing={2} className="pt-5" justifyContent='start'>
              <Grid item xs={12} md={6} >
                <Grid container spacing={1}  alignItems='center' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 5 } }}>
                  <Grid item xs={1} sm={4} md={3} lg={2} className="text-end">
                    <Typography component="div" fontWeight="bold" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16 } }}>
                      義護
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-2'  sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 15 } }}>
                  <Grid item xs={7.5} sm={3} md={8.5} lg={12} className="text-start">
                    <Typography  gutterBottom sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14 } }}>
                    生命の保持・情緒の安定
                    </Typography>
                    <TextareaAutosize
                      id="emotional-input"
                      name="emotional-input"
                      minRows={3}
                      maxRows={100}
                      className="w-56 sm:w-60 lg:w-96"
                      style={{ border: '1px solid gray', borderRadius: '4px' }}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
  
            <Grid container spacing={1} className='pt-5' alignItems='center' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 11 } }}>
              <Grid item xs={2} sm={4} md={3} lg={2} className="text-start">
                <Typography component="div" fontWeight="bold" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16 } }}>
                 教育
                </Typography>
              </Grid>
            </Grid>

            <Grid container spacing={2} className="pt-3" justifyContent='center'>
              <Grid item xs={12} md={6} >
                <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-2'  sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 15 } }}>
                  <Grid item xs={7.5} sm={3} md={8.5} lg={12} className="text-start">
                    <Typography  gutterBottom sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 12 } }}>
                    関する視点身体的発達に,関する視点社会的発達に,関する視点精神的発達に
                    </Typography>
                    <TextareaAutosize
                      id="perspectives-input"
                      name="perspectives-input"
                      minRows={3}
                      maxRows={100}
                      className="w-56 sm:w-60 lg:w-96"
                      style={{ border: '1px solid gray', borderRadius: '4px' }}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={6}>
                <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-2 '  sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 5} }}>
                  <Grid item xs={7.5} sm={7} md={8.5} lg={12} className="text-start">
                    <Typography  gutterBottom sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 12 } }}>
                    食育
                    </Typography>
                    <TextareaAutosize
                      id="food-education-input"
                      name="food-education-input"
                      minRows={3}
                      maxRows={100}
                      className="w-56 sm:w-60 lg:w-96"
                      style={{ border: '1px solid gray', borderRadius: '4px' }}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

      
            <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-5 pb-5' ></Grid>
         
        </Grid>

        <Divider sx={{ borderColor: 'darkgrey', borderWidth: '2px'  }} />
        {/* End Box 3 */}

        {/* Start Box 4 */}
        <Grid container spacing={1} className='pt-5' >
           <Grid  container rowSpacing={2} columnSpacing={{ xs: 1, sm: 1, md: 1 }} className=' pt-5' >
              <Grid item xs={2} sm={1.5} md={3} lg={1.5} className="text-end">
                <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, mt: 1 }} >
                  期 :
                </Typography>
              </Grid>
              <Grid item xs={2} sm={1.5} md={1} lg={1} >
                <MonthForm />
              </Grid>
              <Grid item xs={2} sm={1.5} md={1} lg={1} >
                <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, mt: 1, ml: { xs: 5, sm: 6.5, md: 8, lg: -1 } }} >
                  ~
                </Typography>
              </Grid>
              <Grid item xs={2} sm={1.5} md={1} lg={1} sx={{ ml: { xs: 2, sm: 3, md: 5, lg: -1 } }}>
                <MonthForm />
              </Grid>
            </Grid>
        
            <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-10' sx={{ ml: { xs: 3, sm: 3, md: 2, lg: 8 } }}>
              <Card sx={{ bgcolor: "pink", width: 120, height: 40 }}>
                <Typography component='div' className="pt-2">
                  ねらい
                </Typography>
              </Card>
            </Grid>

            <Grid container spacing={1} className='pt-7' justifyContent="start">
              <Grid item xs={3} sm={3} md={2} lg={1.5}>
                <Typography style={{ fontSize: '14px' }} className='pt-2 text-end' >
                  養護 :
                </Typography>
              </Grid>
              <Grid item xs={7} sm={7} md={3} lg={3}>
                <TextField id="homeroom-teacher-input"  name="homeroom-teacher-input" type="text" size="small" fullWidth sx={{ backgroundColor: 'white' }} />
              </Grid>
              <Grid item xs={3} sm={3} md={2} lg={1.5}>
                <Typography style={{ fontSize: '14px' }} className='pt-2 text-end'>
                  教育 :
                </Typography>
              </Grid>
              <Grid item xs={7} sm={7} md={3} lg={3}>
                <TextField id="annual-goals-input" name="annual-goals-input" type="text" size="small" fullWidth  sx={{ backgroundColor: 'white' }} />
              </Grid>
            </Grid>

            <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-10' sx={{ ml: { xs: 3, sm: 3, md: 2, lg: 8 } }}>
              <Card sx={{ bgcolor: "pink", width: 120, height: 40 }}>
                <Typography component='div' className="pt-2">
                  内容
                </Typography>
              </Card>
            </Grid>

            <Grid container spacing={2} className="pt-5" justifyContent='start'>
              <Grid item xs={12} md={6} >
                <Grid container spacing={1}  alignItems='center' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 5 } }}>
                  <Grid item xs={1} sm={4} md={3} lg={2} className="text-end">
                    <Typography component="div" fontWeight="bold" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16 } }}>
                      義護
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-2'  sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 15 } }}>
                  <Grid item xs={7.5} sm={3} md={8.5} lg={12} className="text-start">
                    <Typography  gutterBottom sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14 } }}>
                    生命の保持・情緒の安定
                    </Typography>
                    <TextareaAutosize
                      id="emotional-input"
                      name="emotional-input"
                      minRows={3}
                      maxRows={100}
                      className="w-56 sm:w-60 lg:w-96"
                      style={{ border: '1px solid gray', borderRadius: '4px' }}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
  
            <Grid container spacing={1} className='pt-5' alignItems='center' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 11 } }}>
              <Grid item xs={2} sm={4} md={3} lg={2} className="text-start">
                <Typography component="div" fontWeight="bold" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16 } }}>
                 教育
                </Typography>
              </Grid>
            </Grid>

            <Grid container spacing={2} className="pt-3" justifyContent='center'>
              <Grid item xs={12} md={6} >
                <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-2'  sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 15 } }}>
                  <Grid item xs={7.5} sm={3} md={8.5} lg={12} className="text-start">
                    <Typography  gutterBottom sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 12 } }}>
                    関する視点身体的発達に,関する視点社会的発達に,関する視点精神的発達に
                    </Typography>
                    <TextareaAutosize
                      id="perspectives-input"
                      name="perspectives-input"
                      minRows={3}
                      maxRows={100}
                      className="w-56 sm:w-60 lg:w-96"
                      style={{ border: '1px solid gray', borderRadius: '4px' }}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={6}>
                <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-2 '  sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 5} }}>
                  <Grid item xs={7.5} sm={7} md={8.5} lg={12} className="text-start">
                    <Typography  gutterBottom sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 12 } }}>
                    食育
                    </Typography>
                    <TextareaAutosize
                      id="food-education-input"
                      name="food-education-input"
                      minRows={3}
                      maxRows={100}
                      className="w-56 sm:w-60 lg:w-96"
                      style={{ border: '1px solid gray', borderRadius: '4px' }}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

      
            <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-5 pb-5' ></Grid>
         
        </Grid>

        <Divider sx={{ borderColor: 'darkgrey', borderWidth: '2px'  }} />
        {/* End Box 4 */}

       
        {/* <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-5">
          <Grid item xs={3} sm={4} md={3} lg={3} sx={{ ml: { xs: 7, sm: 0, md: 0, lg: 3 } }}>
            <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16, } }} >
              【家庭・地域との連携】:
            </Typography>
          </Grid>
          <Grid item xs={5} sm={4} md={4} lg={2.5} sx={{ ml: { xs: -4, sm: -8, md: -8, lg: -6 } }}>
            <TextareaAutosize
              id="collaboration-input"
              name="collaboration-input"
              minRows={2.5}
              maxRows={100}
              className="w-56 sm:w-60 lg:w-56"
              style={{ border: '1px solid gray', borderRadius: '4px' }}
            />
          </Grid>
          <Grid item xs={3} sm={4} md={3} lg={2} sx={{ ml: { xs: 7, sm: 0, md: 0, lg: -2 } }}>
            <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16, } }} >
              【評価.反省】:
            </Typography>
          </Grid>
          <Grid item xs={5} sm={4} md={4} lg={2.5} sx={{ ml: { xs: -4, sm: -8, md: -8, lg: -5 } }}>
            <TextareaAutosize
              id="evaluation-input"
              name="evaluation-input"
              minRows={3}
              maxRows={100}
              className="w-56 sm:w-60 lg:w-56"
              style={{ border: '1px solid gray', borderRadius: '4px' }}
            />
          </Grid>
        </Grid> */}
     

        <div className="mt-auto">
          <Grid container justifyContent="center" spacing={2} className='pt-12' sx={{ bottom: 0, width: '100%', backgroundColor: 'inherit', paddingBottom: '10px' }}>
            <Grid item>
                  <Button variant="contained" href="/report/overallplan" size='medium' className='text-center' startIcon={<ArrowBackIcon />}  color="warning">
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


      </ContentMain>
    </>
  );
};
