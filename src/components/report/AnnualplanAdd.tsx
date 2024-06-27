import { Grid, Typography, TextField, Box, Button, Card, TextareaAutosize, SelectChangeEvent, MenuItem, Select, InputLabel, FormControl } from "@mui/material";
import ContentMain from "../content/Content";
import MonthForm from "../componentsform/MonthForm"
// import SaveIcon from '@mui/icons-material/Save';
import { useState } from "react";


export default function AnnualplanAdd() {

  const [selectedOption, setSelectedOption] = useState('');
  const handleDropdownChange = (event: SelectChangeEvent) => {
    setSelectedOption(event.target.value);
  };

  return (

    <>
      <ContentMain className="flex flex-col min-h-screen">

        {/* Start Grid */}
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

        {/* Start Grid */}
        <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-7">
          <Grid item xs={4} sm={3} md={2.5} lg={3} >
            <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16, } }} >
              担任 :
            </Typography>
          </Grid>
          <Grid item xs={5} sm={4} md={3} lg={3} sx={{ ml: { xs: -5, sm: -4, md: -5, lg: -12 } }}>
            <TextField
              className='w-full'
              id="homeroom-teacher-input"
              name="homeroom-teacher-input"
              label=""
              type="text"
              size='small'
              sx={{
                backgroundColor: "white",
              }}
            />
          </Grid>
        </Grid>
        {/* End Grid */}

        {/* Start Grid */}
        <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-5">
          <Grid item xs={3.3} sm={2.5} md={2.5} lg={3} >
            <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16, } }} >
              年間目標 :
            </Typography>
          </Grid>
          <Grid item xs={5} sm={4} md={3} lg={3} sx={{ ml: { xs: -2.5, sm: -1.8, md: -5, lg: -12 } }}>
            <TextField
              className='w-full'
              id="annual-goals-input"
              name="annual-goals-input"
              label=""
              type="text"
              size='small'
              sx={{
                backgroundColor: "white",
              }}
            />
          </Grid>
        </Grid>
        {/* End Grid */}

        {/* Start Box 1 */}
        <Box sx={{ border: '2px solid grey', width: { xs: 400, sm: 485, md: 680, lg: 1150 }, mt: 5 }}>
          {/* Start Grid */}
          <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 1, md: 1 }} className='pl-3 pt-5' >
            <Grid item xs={2} sm={1.5} md={3} lg={3} >
              <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, mt: 1 }} >
                期 :
              </Typography>
            </Grid>
            <Grid item xs={2} sm={1.5} md={1} lg={1} sx={{ ml: { xs: -3, sm: -2, md: -9, lg: -14 } }}>
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
          {/* End Grid */}

          {/* Start Card */}
          <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-10' sx={{ ml: { xs: 3, sm: 3, md: 2, lg: 8 } }}>
            <Card sx={{ bgcolor: "pink", width: 120, height: 40 }}>
              <Typography component='div' className="pt-2">
                ねらい
              </Typography>
            </Card>
          </Grid>
          {/* End Card */}

          {/* Start Grid */}
          <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-4">
            <Grid item xs={3} sm={4} md={3} lg={3} sx={{ ml: { xs: 7, sm: 0, md: 0, lg: 10 } }}>
              <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16, } }} >
                養護 :
              </Typography>
            </Grid>
            <Grid item xs={5} sm={4} md={4} lg={2.5} sx={{ ml: { xs: -4, sm: -8, md: -8, lg: -12 } }}>
              <TextField
                className='w-full'
                id="nursing-care-input"
                name="nursing-care-input"
                label=""
                type="text"
                size='small'
                sx={{
                  backgroundColor: "white",
                }}
              />
            </Grid>
          </Grid>
          {/* End Grid */}

          {/* Start Grid */}
          <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-4">
            <Grid item xs={3} sm={4} md={3} lg={3} sx={{ ml: { xs: 7, sm: 0, md: 0, lg: 10 } }}>
              <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16, } }} >
                教育 :
              </Typography>
            </Grid>
            <Grid item xs={5} sm={4} md={4} lg={2.5} sx={{ ml: { xs: -4, sm: -8, md: -8, lg: -12 } }}>
              <TextField
                className='w-full'
                id="education-input"
                name="education-input"
                label=""
                type="text"
                size='small'
                sx={{
                  backgroundColor: "white",
                }}
              />
            </Grid>
          </Grid>
          {/* End Grid */}

          {/* Start Card */}
          <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-7' sx={{ ml: { xs: 3, sm: 3, md: 2, lg: 8 } }}>
            <Card sx={{ bgcolor: "pink", width: 120, height: 40 }}>
              <Typography component='div' className="pt-2">
                内容
              </Typography>
            </Card>
          </Grid>
          {/* End Card */}

          {/* Start Grid */}
          <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-4">
            <Grid item xs={3} sm={4} md={3} lg={3} >
              <Typography component="div" fontWeight="bold" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16, } }} >
                養護
              </Typography>
            </Grid>
          </Grid>
          {/* End Grid */}

          {/* Start Grid */}
          <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-2 ">
            <Grid item xs={8} sm={8.3} md={7} lg={7} >
              <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16, } }} >
                生命の保持・情緒の安定
              </Typography>
            </Grid>
          </Grid>
          {/* End Grid */}

          {/* Start Grid */}
          <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-2' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px" } }}>
            <Grid item xs={4} sm={3} md={8.5} lg={1.5} sx={{ ml: { xs: 3, sm: 8, md: 2, lg: 22 } }}>
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
          {/* End Grid */}

          {/* Start Grid */}
          <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-3">
            <Grid item xs={3} sm={4} md={3} lg={3} >
              <Typography component="div" fontWeight="bold" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16, } }} >
                教育
              </Typography>
            </Grid>
          </Grid>
          {/* End Grid */}

          {/* Start Grid */}
          <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-2">
            <Grid item xs={7} sm={6} md={5} lg={10.8} sx={{ ml: { xs: 8, sm: 13, md: 17, lg: 0 } }}>
              <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16, } }} >
                関する視点身体的発達に,関する視点社会的発達に,関する視点精神的発達に
              </Typography>
            </Grid>
          </Grid>
          {/* End Grid */}

          {/* Start Grid */}
          <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-2' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px" } }}>
            <Grid item xs={4} sm={3} md={8.5} lg={1.5} sx={{ ml: { xs: 3, sm: 8, md: 2, lg: 22 } }}>
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
          {/* End Grid */}

          {/* Start Grid */}
          <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-3">
            <Grid item xs={1} sm={2.5} md={5.5} lg={5.5} sx={{ ml: { xs: 8, sm: 9, md: 0, lg: 0 } }}>
              <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16, } }} >
                食育
              </Typography>
            </Grid>
          </Grid>
          {/* End Grid */}

          {/* Start Grid */}
          <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-2 pb-5' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px" } }}>
            <Grid item xs={4} sm={3} md={8.5} lg={1.5} sx={{ ml: { xs: 3, sm: 8, md: 2, lg: 22 } }}>
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
          {/* End Grid */}
        </Box>
        {/* End Box 1*/}

        {/* Start Box 2*/}
        <Box sx={{ border: '2px solid grey', width: { xs: 400, sm: 485, md: 680, lg: 1150 }, mt: 1 }}>
          {/* Start Grid */}
          <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 1, md: 1 }} className='pl-3 pt-5' >
            <Grid item xs={2} sm={1.5} md={3} lg={3} >
              <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, mt: 1 }} >
                期 :
              </Typography>
            </Grid>
            <Grid item xs={2} sm={1.5} md={1} lg={1} sx={{ ml: { xs: -3, sm: -2, md: -9, lg: -14 } }}>
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
          {/* End Grid */}

          {/* Start Card */}
          <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-7' sx={{ ml: { xs: 3, sm: 3, md: 2, lg: 8 } }}>
            <Card sx={{ bgcolor: "pink", width: 120, height: 40 }}>
              <Typography component='div' className="pt-2">
                ねらい
              </Typography>
            </Card>
          </Grid>
          {/* End Card */}

          {/* Start Grid */}
          <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-3">
            <Grid item xs={3} sm={4} md={3} lg={3} sx={{ ml: { xs: 7, sm: 0, md: 0, lg: 10 } }}>
              <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16, } }} >
                養護 :
              </Typography>
            </Grid>
            <Grid item xs={5} sm={4} md={4} lg={2.5} sx={{ ml: { xs: -4, sm: -8, md: -8, lg: -12 } }}>
              <TextField
                className='w-full'
                id="nursing-care-input-2"
                name="nursing-care-input-2"
                label=""
                type="text"
                size='small'
                sx={{
                  backgroundColor: "white",
                }}
              />
            </Grid>
          </Grid>
          {/* End Grid */}

          {/* Start Grid */}
          <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-4">
            <Grid item xs={3} sm={4} md={3} lg={3} sx={{ ml: { xs: 7, sm: 0, md: 0, lg: 10 } }}>
              <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16, } }} >
                教育 :
              </Typography>
            </Grid>
            <Grid item xs={5} sm={4} md={4} lg={2.5} sx={{ ml: { xs: -4, sm: -8, md: -8, lg: -12 } }}>
              <TextField
                className='w-full'
                id="education-input-2"
                name="education-input-2"
                label=""
                type="text"
                size='small'
                sx={{
                  backgroundColor: "white",
                }}
              />
            </Grid>
          </Grid>
          {/* End Grid */}

          {/* Start Card */}
          <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-6' sx={{ ml: { xs: 3, sm: 3, md: 2, lg: 8 } }}>
            <Card sx={{ bgcolor: "pink", width: 120, height: 40 }}>
              <Typography component='div' className="pt-2">
                内容
              </Typography>
            </Card>
          </Grid>
          {/* End Card */}

          {/* Start Grid */}
          <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-3">
            <Grid item xs={3} sm={4} md={3} lg={3} >
              <Typography component="div" fontWeight="bold" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16, } }} >
                養護
              </Typography>
            </Grid>
          </Grid>
          {/* End Grid */}

          {/* Start Grid */}
          <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-3 ">
            <Grid item xs={8} sm={8.3} md={7} lg={7} >
              <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16, } }} >
                生命の保持・情緒の安定
              </Typography>
            </Grid>
          </Grid>
          {/* End Grid */}

          {/* Start Grid */}
          <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-2' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px" } }}>
            <Grid item xs={4} sm={3} md={8.5} lg={1.5} sx={{ ml: { xs: 3, sm: 8, md: 2, lg: 22 } }}>
              <TextareaAutosize
                id="emotional-input-2"
                name="emotional-input-2"
                minRows={3}
                maxRows={100}
                className="w-56 sm:w-60 lg:w-96"
                style={{ border: '1px solid gray', borderRadius: '4px' }}
              />
            </Grid>
          </Grid>
          {/* End Grid */}

          {/* Start Grid */}
          <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-3">
            <Grid item xs={3} sm={4} md={3} lg={3} >
              <Typography component="div" fontWeight="bold" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16, } }} >
                教育
              </Typography>
            </Grid>
          </Grid>
          {/* End Grid */}

          {/* Start Grid */}
          <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-2">
            <Grid item xs={7} sm={6} md={5} lg={10.8} sx={{ ml: { xs: 8, sm: 13, md: 17, lg: 0 } }}>
              <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16, } }} >
                関する視点身体的発達に,関する視点社会的発達に,関する視点精神的発達に
              </Typography>
            </Grid>
          </Grid>
          {/* End Grid */}

          {/* Start Grid */}
          <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-2' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px" } }}>
            <Grid item xs={4} sm={3} md={8.5} lg={1.5} sx={{ ml: { xs: 3, sm: 8, md: 2, lg: 22 } }}>
              <TextareaAutosize
                id="perspectives-input-2"
                name="perspectives-input-2"
                minRows={3}
                maxRows={100}
                className="w-56 sm:w-60 lg:w-96"
                style={{ border: '1px solid gray', borderRadius: '4px' }}
              />
            </Grid>
          </Grid>
          {/* End Grid */}

          {/* Start Grid */}
          <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-3">
            <Grid item xs={1} sm={2.5} md={5.5} lg={5.5} sx={{ ml: { xs: 8, sm: 9, md: 0, lg: 0 } }}>
              <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16, } }} >
                食育
              </Typography>
            </Grid>
          </Grid>
          {/* End Grid */}

          {/* Start Grid */}
          <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-2 pb-5' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px" } }}>
            <Grid item xs={4} sm={3} md={8.5} lg={1.5} sx={{ ml: { xs: 3, sm: 8, md: 2, lg: 22 } }}>
              <TextareaAutosize
                id="food-education-input-2"
                name="food-education-input-2"
                minRows={3}
                maxRows={100}
                className="w-56 sm:w-60 lg:w-96"
                style={{ border: '1px solid gray', borderRadius: '4px' }}
              />
            </Grid>
          </Grid>
          {/* End Grid */}
        </Box>
        {/* End Box 2 */}

        {/* Start Box 3*/}
        <Box sx={{ border: '2px solid grey', width: { xs: 400, sm: 485, md: 680, lg: 1150 }, mt: 1 }}>
          {/* Start Grid */}
          <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 1, md: 1 }} className='pl-3 pt-5' >
            <Grid item xs={2} sm={1.5} md={3} lg={3} >
              <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, mt: 1 }} >
                期 :
              </Typography>
            </Grid>
            <Grid item xs={2} sm={1.5} md={1} lg={1} sx={{ ml: { xs: -3, sm: -2, md: -9, lg: -14 } }}>
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
          {/* End Grid */}

          {/* Start Card */}
          <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-8' sx={{ ml: { xs: 3, sm: 3, md: 2, lg: 8 } }}>
            <Card sx={{ bgcolor: "pink", width: 120, height: 40 }}>
              <Typography component='div' className="pt-2">
                ねらい
              </Typography>
            </Card>
          </Grid>
          {/* End Card */}

          {/* Start Grid */}
          <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-3">
            <Grid item xs={3} sm={4} md={3} lg={3} sx={{ ml: { xs: 7, sm: 0, md: 0, lg: 10 } }}>
              <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16, } }} >
                養護 :
              </Typography>
            </Grid>
            <Grid item xs={5} sm={4} md={4} lg={2.5} sx={{ ml: { xs: -4, sm: -8, md: -8, lg: -12 } }}>
              <TextField
                className='w-full'
                id="nursing-care-input-3"
                name="nursing-care-input-3"
                label=""
                type="text"
                size='small'
                sx={{
                  backgroundColor: "white",
                }}
              />
            </Grid>
          </Grid>
          {/* End Grid */}

          {/* Start Grid */}
          <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-4">
            <Grid item xs={3} sm={4} md={3} lg={3} sx={{ ml: { xs: 7, sm: 0, md: 0, lg: 10 } }}>
              <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16, } }} >
                教育 :
              </Typography>
            </Grid>
            <Grid item xs={5} sm={4} md={4} lg={2.5} sx={{ ml: { xs: -4, sm: -8, md: -8, lg: -12 } }}>
              <TextField
                className='w-full'
                id="education-input-3"
                name="education-input-3"
                label=""
                type="text"
                size='small'
                sx={{
                  backgroundColor: "white",
                }}
              />
            </Grid>
          </Grid>
          {/* End Grid */}

          {/* Start Card */}
          <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-7' sx={{ ml: { xs: 3, sm: 3, md: 2, lg: 8 } }}>
            <Card sx={{ bgcolor: "pink", width: 120, height: 40 }}>
              <Typography component='div' className="pt-2">
                内容
              </Typography>
            </Card>
          </Grid>
          {/* End Card */}

          {/* Start Grid */}
          <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-3">
            <Grid item xs={3} sm={4} md={3} lg={3} >
              <Typography component="div" fontWeight="bold" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16, } }} >
                養護
              </Typography>
            </Grid>
          </Grid>
          {/* End Grid */}

          {/* Start Grid */}
          <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-3 ">
            <Grid item xs={8} sm={8.3} md={7} lg={7} >
              <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16, } }} >
                生命の保持・情緒の安定
              </Typography>
            </Grid>
          </Grid>
          {/* End Grid */}

          {/* Start Grid */}
          <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-2' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px" } }}>
            <Grid item xs={4} sm={3} md={8.5} lg={1.5} sx={{ ml: { xs: 3, sm: 8, md: 2, lg: 22 } }}>
              <TextareaAutosize
                id="emotional-input-3"
                name="emotional-input-3"
                minRows={3}
                maxRows={100}
                className="w-56 sm:w-60 lg:w-96"
                style={{ border: '1px solid gray', borderRadius: '4px' }}
              />
            </Grid>
          </Grid>
          {/* End Grid */}

          {/* Start Grid */}
          <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-3">
            <Grid item xs={3} sm={4} md={3} lg={3} >
              <Typography component="div" fontWeight="bold" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16, } }} >
                教育
              </Typography>
            </Grid>
          </Grid>
          {/* End Grid */}

          {/* Start Grid */}
          <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-4">
            <Grid item xs={7} sm={6} md={5} lg={10.8} sx={{ ml: { xs: 8, sm: 13, md: 17, lg: 0 } }}>
              <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16, } }} >
                関する視点身体的発達に,関する視点社会的発達に,関する視点精神的発達に
              </Typography>
            </Grid>
          </Grid>
          {/* End Grid */}

          {/* Start Grid */}
          <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-2' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px" } }}>
            <Grid item xs={4} sm={3} md={8.5} lg={1.5} sx={{ ml: { xs: 3, sm: 8, md: 2, lg: 22 } }}>
              <TextareaAutosize
                id="perspectives-input-3"
                name="perspectives-input-3"
                minRows={3}
                maxRows={100}
                className="w-56 sm:w-60 lg:w-96"
                style={{ border: '1px solid gray', borderRadius: '4px' }}
              />
            </Grid>
          </Grid>
          {/* End Grid */}

          {/* Start Grid */}
          <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-3">
            <Grid item xs={1} sm={2.5} md={5.5} lg={5.5} sx={{ ml: { xs: 8, sm: 9, md: 0, lg: 0 } }}>
              <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16, } }} >
                食育
              </Typography>
            </Grid>
          </Grid>
          {/* End Grid */}

          {/* Start Grid */}
          <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-2 pb-5' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px" } }}>
            <Grid item xs={4} sm={3} md={8.5} lg={1.5} sx={{ ml: { xs: 3, sm: 8, md: 2, lg: 22 } }}>
              <TextareaAutosize
                id="food-education-input-3"
                name="food-education-input-3"
                minRows={3}
                maxRows={100}
                className="w-56 sm:w-60 lg:w-96"
                style={{ border: '1px solid gray', borderRadius: '4px' }}
              />
            </Grid>
          </Grid>
          {/* End Grid */}
        </Box>
        {/* End Box 3 */}

        {/* Start Box 4 */}
        <Box sx={{ border: '2px solid grey', width: { xs: 400, sm: 485, md: 680, lg: 1150 }, mt: 1 }}>
          {/* Start Grid */}
          <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 1, md: 1 }} className='pl-3 pt-5' >
            <Grid item xs={2} sm={1.5} md={3} lg={3} >
              <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, mt: 1 }} >
                期 :
              </Typography>
            </Grid>
            <Grid item xs={2} sm={1.5} md={1} lg={1} sx={{ ml: { xs: -3, sm: -2, md: -9, lg: -14 } }}>
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
          {/* End Grid */}

          {/* Start Card */}
          <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-7' sx={{ ml: { xs: 3, sm: 3, md: 2, lg: 8 } }}>
            <Card sx={{ bgcolor: "pink", width: 120, height: 40 }}>
              <Typography component='div' className="pt-2">
                ねらい
              </Typography>
            </Card>
          </Grid>
          {/* End Card */}

          {/* Start Grid */}
          <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-4">
            <Grid item xs={3} sm={4} md={3} lg={3} sx={{ ml: { xs: 7, sm: 0, md: 0, lg: 10 } }}>
              <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16, } }} >
                養護 :
              </Typography>
            </Grid>
            <Grid item xs={5} sm={4} md={4} lg={2.5} sx={{ ml: { xs: -4, sm: -8, md: -8, lg: -12 } }}>
              <TextField
                className='w-full'
                id="nursing-care-input-4"
                name="nursing-care-input-4"
                label=""
                type="text"
                size='small'
                sx={{
                  backgroundColor: "white",
                }}
              />
            </Grid>
          </Grid>
          {/* End Grid */}

          {/* Start Grid */}
          <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-4">
            <Grid item xs={3} sm={4} md={3} lg={3} sx={{ ml: { xs: 7, sm: 0, md: 0, lg: 10 } }}>
              <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16, } }} >
                教育 :
              </Typography>
            </Grid>
            <Grid item xs={5} sm={4} md={4} lg={2.5} sx={{ ml: { xs: -4, sm: -8, md: -8, lg: -12 } }}>
              <TextField
                className='w-full'
                id="education-input-4"
                name="education-input-4"
                label=""
                type="text"
                size='small'
                sx={{
                  backgroundColor: "white",
                }}
              />
            </Grid>
          </Grid>
          {/* End Grid */}

          {/* Start Card */}
          <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-7' sx={{ ml: { xs: 3, sm: 3, md: 2, lg: 8 } }}>
            <Card sx={{ bgcolor: "pink", width: 120, height: 40 }}>
              <Typography component='div' className="pt-2">
                内容
              </Typography>
            </Card>
          </Grid>
          {/* End Card */}

          {/* Start Grid */}
          <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-3">
            <Grid item xs={3} sm={4} md={3} lg={3} >
              <Typography component="div" fontWeight="bold" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16, } }} >
                養護
              </Typography>
            </Grid>
          </Grid>
          {/* End Grid */}

          {/* Start Grid */}
          <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-3 ">
            <Grid item xs={8} sm={8.3} md={7} lg={7} >
              <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16, } }} >
                生命の保持・情緒の安定
              </Typography>
            </Grid>
          </Grid>
          {/* End Grid */}

          {/* Start Grid */}
          <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-2' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px" } }}>
            <Grid item xs={4} sm={3} md={8.5} lg={1.5} sx={{ ml: { xs: 3, sm: 8, md: 2, lg: 22 } }}>
              <TextareaAutosize
                id="emotional-input-4"
                name="emotional-input-4"
                minRows={3}
                maxRows={100}
                className="w-56 sm:w-60 lg:w-96"
                style={{ border: '1px solid gray', borderRadius: '4px' }}
              />
            </Grid>
          </Grid>
          {/* End Grid */}

          {/* Start Grid */}
          <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-2">
            <Grid item xs={3} sm={4} md={3} lg={3} >
              <Typography component="div" fontWeight="bold" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16, } }} >
                教育
              </Typography>
            </Grid>
          </Grid>
          {/* End Grid */}

          {/* Start Grid */}
          <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-4">
            <Grid item xs={7} sm={6} md={5} lg={10.8} sx={{ ml: { xs: 8, sm: 13, md: 17, lg: 0 } }}>
              <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16, } }} >
                関する視点身体的発達に,関する視点社会的発達に,関する視点精神的発達に
              </Typography>
            </Grid>
          </Grid>
          {/* End Grid */}

          {/* Start Grid */}
          <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-2' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px" } }}>
            <Grid item xs={4} sm={3} md={8.5} lg={1.5} sx={{ ml: { xs: 3, sm: 8, md: 2, lg: 22 } }}>
              <TextareaAutosize
                id="food-education-input-4"
                name="food-education-input-4"
                minRows={3}
                maxRows={100}
                className="w-56 sm:w-60 lg:w-96"
                style={{ border: '1px solid gray', borderRadius: '4px' }}
              />
            </Grid>
          </Grid>
          {/* End Grid */}

          {/* Start Grid */}
          <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-4">
            <Grid item xs={1} sm={2.5} md={5.5} lg={5.5} sx={{ ml: { xs: 8, sm: 9, md: 0, lg: 0 } }}>
              <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16, } }} >
                食育
              </Typography>
            </Grid>
          </Grid>
          {/* End Grid */}

          {/* Start Grid */}
          <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-2 pb-5' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px" } }}>
            <Grid item xs={4} sm={3} md={8.5} lg={1.5} sx={{ ml: { xs: 3, sm: 8, md: 2, lg: 22 } }}>
              <TextareaAutosize
                id="food-education-input-4"
                name="food-education-input-4"
                minRows={3}
                maxRows={100}
                className="w-56 sm:w-60 lg:w-96"
                style={{ border: '1px solid gray', borderRadius: '4px' }}
              />
            </Grid>
          </Grid>
          {/* End Grid */}
        </Box>
        {/* End Box 4 */}

        {/* Start Grid */}
        <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-5">
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
        </Grid>
        {/* End Grid */}

        <div className="mt-auto">
          <Grid container justifyContent="center" spacing={2} className='pt-5' sx={{ bottom: 0, width: '100%', backgroundColor: 'inherit', paddingBottom: '10px' }}>
                <Grid item>
                      <Button variant="contained" href="/report/overallplan" size='small' className='text-center'>
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
    </>
  );
};
