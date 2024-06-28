import { Grid, Typography, TextField, Box, Button, TextareaAutosize, SelectChangeEvent, MenuItem, Select, InputLabel, FormControl, FormControlLabel, RadioGroup, Radio } from "@mui/material";
import ContentMain from "../content/Content";
import MonthForm from "../componentsform/MonthForm"
import DayForm from "../componentsform/DayForm"
import { useState } from "react";


export default function CareDiaryAdd() {

  const [selectedOption, setSelectedOption] = useState('');
  const handleDropdownChange = (event: SelectChangeEvent) => {
    setSelectedOption(event.target.value);
  };

  return (

    <>
       <ContentMain className="flex flex-col min-h-screen">

        {/* Start Grid */}
        <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-10 lg:pt-0">
          <Grid item xs={9} sm={7} md={5} lg={4} sx={{ ml: { xs: 0, sm: 0, md: 0, lg: 2 }, mt: { xs: -1, sm: -2, md: 5, lg: 4 } }}>
            <div>
              <FormControl sx={{ minWidth: 100 }} size="small" fullWidth>
                <InputLabel id="demo-select-small-label">週ごとのプランを選択する</InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  size="small"
                  label="週ごとのプランを選択する"
                  value={selectedOption}
                  onChange={handleDropdownChange}
                  className="mb-5"
                  sx={{
                    backgroundColor: "white",
                  }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="1">週案と保育日誌(未満児)0・1歳用</MenuItem>
                  <MenuItem value="2">週案と保育日誌(未満児)1・2歳用</MenuItem>
                </Select>
              </FormControl>
              <div>
                {selectedOption === '1' &&
                  <Typography
                    component="div"
                    sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, fontWeight: 'bold' }}>
                    週案と保育日誌(未満児)0・1歳用
                  </Typography>
                }
                {selectedOption === '2' &&
                  <Typography
                    component="div"
                    sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, fontWeight: 'bold' }}>
                    週案と保育日誌(未)1・2歲用
                  </Typography>
                }
              </div>
            </div>
          </Grid>
        </Grid>
        {/* End Grid */}

        {/* Start Grid */}
        <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-10 lg:pt-10">
          <Grid item xs={2} sm={2} md={2} lg={1} sx={{ ml: { xs: 4, sm: 5, md: -1, lg: 10 } }}>
            <MonthForm />
          </Grid>
          <Grid item xs={7} sm={6.5} md={4} lg={4} >
            <Typography component="div" sx={{ fontSize: { xs: 12, sm: 12, md: 14, lg: 16, }, ml: { xs: 5, sm: -4, md: -9, lg: -10 } }} >
              個人カリキュラム・配録
            </Typography>
          </Grid>
          <Grid item xs={5} sm={3} md={2} lg={2} >
            <Typography component="div" sx={{ fontSize: { xs: 11, sm: 12, md: 14, lg: 16, }, ml: { xs: -3, sm: 3, md: -13, lg: -10 }, mt: { xs: 1.5, sm: 2, md: 0, lg: 0 } }} >
              児童名 :
            </Typography>
          </Grid>
          <Grid item xs={2} sm={1.5} md={1} lg={1} >
            <Typography component="div" fontWeight="bold" sx={{ fontSize: { xs: 11, sm: 11, md: 14, lg: 16, }, ml: { xs: -15, sm: -5, md: -20, lg: -30 }, mt: { xs: 1.5, sm: 2, md: 0, lg: 0 } }} >
              長谷川
            </Typography>
          </Grid>
          <Grid item xs={2} sm={1.5} md={1} lg={1} >
            <Typography component="div" sx={{ fontSize: { xs: 11, sm: 12, md: 14, lg: 16, }, ml: { xs: -10, sm: -2, md: -9, lg: -15 }, mt: { xs: 1.5, sm: 2, md: 0, lg: 0 } }} >
              1歳
            </Typography>
          </Grid>
          <Grid item xs={2} sm={1.5} md={1} lg={1} >
            <Typography component="div" sx={{ fontSize: { xs: 11, sm: 12, md: 14, lg: 16, }, ml: { xs: -13, sm: -2, md: -9, lg: -25 }, mt: { xs: 1.5, sm: 2, md: 0, lg: 0 } }} >
              5月
            </Typography>
          </Grid>
        </Grid>
        {/* End Grid */}

        {/* Start Grid */}
        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-3 lg:pt-7'>
          <Grid item xs={7} sm={5} md={3} lg={3}>
            <Typography component="div" sx={{ fontSize: { xs: 11, sm: 12, md: 11, lg: 16, }, ml: { xs: -7, sm: -4, md: 2, lg: 10 } }} >
              子どもの姿
            </Typography>
          </Grid>
          <Grid item xs={4} sm={1} md={1} lg={1} sx={{ ml: { xs: 5, sm: -8, md: -3, lg: -5 } }}>
            <TextareaAutosize
              id="emotional-input"
              name="emotional-input"
              minRows={3}
              maxRows={100}
              className="w-56 sm:w-60 lg:w-96 border border-gray-300"
            />
          </Grid>
        </Grid>
        {/* End Grid */}

        {/* Start Grid */}
        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-5 lg:pt-3'>
          <Grid item xs={7} sm={5} md={3} lg={3}>
            <Typography component="div" sx={{ fontSize: { xs: 11, sm: 12, md: 11, lg: 16, }, ml: { xs: -6, sm: -4, md: 2, lg: 10 } }} >
              ねらいと配慮
            </Typography>
          </Grid>
          <Grid item xs={4} sm={1} md={1} lg={1} sx={{ ml: { xs: 5, sm: -8, md: -3, lg: -5 } }}>
            <TextareaAutosize
              id="emotional-input"
              name="emotional-input"
              minRows={3}
              maxRows={100}
              className="w-56 sm:w-60 lg:w-96 border border-gray-300"
            />
          </Grid>
        </Grid>
        {/* End Grid */}

        {/* Start Box */}
        <Box sx={{ border: '2px solid grey', width: { xs: 400, sm: 485, md: 680, lg: 1150 }, mt: 1 }}>
          {/* Start Grid */}
          <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 1, md: 1 }} className='pl-3 pt-5' >
            <Grid item xs={3} sm={1.5} md={1} lg={5} sx={{ ml: { xs: 4, sm: 13, md: 17, lg: 7 } }}>
              <DayForm />
            </Grid>
            <Grid item xs={2} sm={1.5} md={1} lg={1} sx={{ ml: { xs: 2, sm: 3, md: 5, lg: -20 } }}>
              <MonthForm />
            </Grid>
          </Grid>
          {/* End Grid */}

          {/* Start Grid */}
          <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-5 lg:pt-3'>
            <Grid item xs={4} sm={3} md={3} lg={3}>
              <Typography component="div" fontWeight="bold" sx={{ fontSize: { xs: 12, sm: 12, md: 11, lg: 16, }, ml: { xs: 0, sm: 0, md: 2, lg: 10 } }} >
                食事
              </Typography>
            </Grid>
            <Grid item xs={12} sm={5} md={1} lg={1} sx={{ ml: { xs: -5, sm: -1, md: -3, lg: -5 } }}>
              <TextareaAutosize
                id="emotional-input"
                name="emotional-input"
                minRows={3}
                maxRows={100}
                className="w-56 sm:w-60 lg:w-96 border border-gray-300"
              />
            </Grid>
          </Grid>
          {/* End Grid */}

          {/* Start Grid */}
          <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-5 lg:pt-3'>
            <Grid item xs={4} sm={3} md={3} lg={3}>
              <Typography component="div" fontWeight="bold" sx={{ fontSize: { xs: 12, sm: 12, md: 11, lg: 16, }, ml: { xs: 0, sm: 0, md: 2, lg: 10 } }} >
                排泄
              </Typography>
            </Grid>
            <Grid item xs={12} sm={5} md={1} lg={1} sx={{ ml: { xs: -5, sm: -1, md: -3, lg: -5 } }}>
              <TextareaAutosize
                id="emotional-input"
                name="emotional-input"
                minRows={3}
                maxRows={100}
                className="w-56 sm:w-60 lg:w-96 border border-gray-300"
              />
            </Grid>
          </Grid>
          {/* End Grid */}

          {/* Start Grid */}
          <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-5 lg:pt-3'>
            <Grid item xs={4} sm={3} md={3} lg={3}>
              <Typography component="div" fontWeight="bold" sx={{ fontSize: { xs: 12, sm: 12, md: 11, lg: 16, }, ml: { xs: 0, sm: 0, md: 2, lg: 10 } }} >
                睡眠
              </Typography>
            </Grid>
            <Grid item xs={12} sm={5} md={1} lg={1} sx={{ ml: { xs: -5, sm: -1, md: -3, lg: -5 } }}>
              <TextareaAutosize
                id="emotional-input"
                name="emotional-input"
                minRows={3}
                maxRows={100}
                className="w-56 sm:w-60 lg:w-96 border border-gray-300"
              />
            </Grid>
          </Grid>
          {/* End Grid */}

          {/* Start Grid */}
          <RadioGroup
            defaultValue=""
            aria-labelledby="demo-customized-radios"
            name="customized-radios"
          >
            <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-3 pl-3' >
              <Grid item xs={4} sm={3} md={3} lg={3} sx={{ ml: { xs: -1, sm: -1, md: 0, lg: 3.5 } }}>
                <Typography component='div' fontWeight="bold" sx={{ fontSize: { xs: 12, sm: 12, md: 11, lg: 16, }, mt: 1 }}>
                  健康
                </Typography>
              </Grid>
              <Grid item xs={4.5} sm={3} md={2} lg={2} sx={{ ml: { xs: -7, sm: -3, md: -5, lg: -15 } }}>
                <FormControlLabel value="良好" control={<Radio />} label="良好" />
              </Grid>
              <Grid item xs={4.5} sm={3.5} md={3} lg={3} sx={{ ml: { xs: -4, sm: -1, md: -5, lg: -15 } }}>
                <FormControlLabel value="鼻水・咳" control={<Radio />} label="鼻水・咳" />
              </Grid>
              <Grid item xs={9} sm={6} md={3.3} lg={2} sx={{ ml: { xs: 4, sm: 13, md: -3, lg: -10 } }}>
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
            </Grid>
          </RadioGroup>
          {/* End Grid */}

          {/* Start Grid */}
          <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-5 lg:pt-4'>
            <Grid item xs={4} sm={3} md={3} lg={3}>
              <Typography component="div" sx={{ fontSize: { xs: 12, sm: 12, md: 11, lg: 16, }, ml: { xs: 5.5, sm: 0, md: 2, lg: 10 } }} >
                その他の記録
              </Typography>
            </Grid>
            <Grid item xs={12} sm={5} md={1} lg={1} sx={{ ml: { xs: -5, sm: -1, md: -3, lg: -5 }, pb: 3 }}>
              <TextareaAutosize
                id="emotional-input"
                name="emotional-input"
                minRows={3}
                maxRows={100}
                className="w-56 sm:w-60 lg:w-96 border border-gray-300"
              />
            </Grid>
          </Grid>
          {/* End Grid */}

        </Box>
        {/* End Box*/}

        {/* Button */}
        <Grid container direction="row" justifyContent="end" alignItems="center" className="pt-3" sx={{ ml: { xs: 7, sm: 5, md: -2, lg: -2 } }}>
          <Button variant="contained" sx={{ width: 30 }}>+</Button>
        </Grid>
        {/* End Button */}

        {/* Start Grid */}
        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-5 lg:pt-4' sx={{ ml: { xs: 1, sm: 0, md: -2, lg: -2 } }}>
          <Grid item xs={4} sm={3} md={3} lg={3}>
            <Typography component="div" sx={{ fontSize: { xs: 12, sm: 12, md: 11, lg: 16, }, ml: { xs: 0, sm: 0, md: 2, lg: 10 } }} >
              評価・反省
            </Typography>
          </Grid>
          <Grid item xs={12} sm={5} md={1} lg={1} sx={{ ml: { xs: -5, sm: -1, md: -3, lg: -5 }, pb: 3 }}>
            <TextareaAutosize
              id="emotional-input"
              name="emotional-input"
              minRows={3}
              maxRows={100}
              className="w-56 sm:w-60 lg:w-96 border border-gray-300"
            />
          </Grid>
        </Grid>
        {/* End Grid */}

        {/* Start Grid */}
        <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-1 lg:pt-2">
          <Grid item xs={5} sm={3} md={3} lg={3} >
            <Typography component="div" sx={{ fontSize: { xs: 11, sm: 12, md: 14, lg: 16, }, ml: { xs: -3, sm: 3, md: 0, lg: 5 } }} >
              施設長
            </Typography>
          </Grid>
          <Grid item xs={2} sm={1.5} md={1} lg={1} >
            <Typography component="div" fontWeight="bold" sx={{ fontSize: { xs: 11, sm: 11, md: 14, lg: 16, }, ml: { xs: -15, sm: -5, md: -7, lg: -15 } }} >
              渡部
            </Typography>
          </Grid>
          <Grid item xs={2} sm={1.5} md={1} lg={1} >
            <Typography component="div" fontWeight="bold" sx={{ fontSize: { xs: 11, sm: 11, md: 14, lg: 16, }, ml: { xs: -18, sm: -7, md: -9, lg: -25 } }} >
              圭子
            </Typography>
          </Grid>
        </Grid>
        {/* End Grid */}

        {/* Start Grid */}
        <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-1 lg:pt-3">
          <Grid item xs={5} sm={3} md={3} lg={3} >
            <Typography component="div" sx={{ fontSize: { xs: 11, sm: 12, md: 14, lg: 16, }, ml: { xs: -3, sm: 3, md: 0, lg: 5 } }} >
              主任
            </Typography>
          </Grid>
          <Grid item xs={2} sm={1.5} md={1} lg={1} >
            <Typography component="div" fontWeight="bold" sx={{ fontSize: { xs: 11, sm: 11, md: 14, lg: 16, }, ml: { xs: -15, sm: -5, md: -7, lg: -15 } }} >
              渡部
            </Typography>
          </Grid>
          <Grid item xs={2} sm={1.5} md={1} lg={1} >
            <Typography component="div" fontWeight="bold" sx={{ fontSize: { xs: 11, sm: 11, md: 14, lg: 16, }, ml: { xs: -18, sm: -7, md: -9, lg: -25 } }} >
              史朗
            </Typography>
          </Grid>
        </Grid>
        {/* End Grid */}

        {/* Start Grid */}
        <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-1 lg:pt-3">
          <Grid item xs={5} sm={3} md={3} lg={3} >
            <Typography component="div" sx={{ fontSize: { xs: 11, sm: 12, md: 14, lg: 16, }, ml: { xs: -3, sm: 3, md: 0, lg: 5 } }} >
              担任
            </Typography>
          </Grid>
          <Grid item xs={2} sm={1.5} md={1} lg={1} >
            <Typography component="div" fontWeight="bold" sx={{ fontSize: { xs: 11, sm: 11, md: 14, lg: 16, }, ml: { xs: -15, sm: -5, md: -7, lg: -15 } }} >
              中川
            </Typography>
          </Grid>
          <Grid item xs={2} sm={1.5} md={1} lg={1} >
            <Typography component="div" fontWeight="bold" sx={{ fontSize: { xs: 11, sm: 11, md: 14, lg: 16, }, ml: { xs: -18, sm: -7, md: -9, lg: -25 } }} >
              康嘉
            </Typography>
          </Grid>
        </Grid>
        <div className="mt-auto ">
          <Grid container justifyContent="center" spacing={2} className='pt-9' sx={{ bottom: 0, width: '100%', backgroundColor: 'inherit', paddingBottom: '10px' }}>
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
