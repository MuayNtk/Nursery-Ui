import { Button, Divider, FormControl, Grid, InputAdornment, InputLabel, MenuItem, Select, SelectChangeEvent, TextField, TextareaAutosize, Typography } from "@mui/material";
import SaveIcon from '@mui/icons-material/Save';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface FormData {
  pid: string;
  selectedOption: string;
  month: string;
  notices1: string;
  notices2: string;
  notices3: string;
  children1: string;
  weekly_aims: string;
  scheduled_activities: string;
  environment_configuration: string;
  day1: string;
  weather1: string;
  main_activities1: string;
  evaluation_and_reflection1: string;
  personal_journal1: string;
  day2: string;
  weather2: string;
  main_activities2: string;
  evaluation_and_reflection2: string;
  personal_journal2: string;
  day3: string;
  weather3: string;
  main_activities3: string;
  evaluation_and_reflection3: string;
  personal_journal3: string;
  day4: string;
  weather4: string;
  main_activities4: string;
  evaluation_and_reflection4: string;
  personal_journal4: string;
  day5: string;
  weather5: string;
  main_activities5: string;
  evaluation_and_reflection5: string;
  personal_journal5: string;
  day6: string;
  weather6: string;
  main_activities6: string;
  evaluation_and_reflection6: string;
  personal_journal6: string;
}

interface WeeklyUnderTenProps {
  selectedOption: string;
}

const WeeklyplanUnderTen: React.FC<WeeklyUnderTenProps> = ({ selectedOption }) => {
  const [formData, setFormData] = useState<FormData>({
    pid: '',
    selectedOption: selectedOption,
    month: '',
    notices1: '',
    notices2: '',
    notices3: '',
    children1: '',
    weekly_aims: '',
    scheduled_activities: '',
    environment_configuration: '',
    day1: '',
    weather1: '',
    main_activities1: '',
    evaluation_and_reflection1: '',
    personal_journal1: '',
    day2: '',
    weather2: '',
    main_activities2: '',
    evaluation_and_reflection2: '',
    personal_journal2: '',
    day3: '',
    weather3: '',
    main_activities3: '',
    evaluation_and_reflection3: '',
    personal_journal3: '',
    day4: '',
    weather4: '',
    main_activities4: '',
    evaluation_and_reflection4: '',
    personal_journal4: '',
    day5: '',
    weather5: '',
    main_activities5: '',
    evaluation_and_reflection5: '',
    personal_journal5: '',
    day6: '',
    weather6: '',
    main_activities6: '',
    evaluation_and_reflection6: '',
    personal_journal6: '',
  });

  const navigate = useNavigate();

  useEffect(() => {
    // Set initial pid from sessionStorage or 1 if not present
    const lastPid = JSON.parse(sessionStorage.getItem('lastPid') || '0');
    const newPid = lastPid + 1;
    setFormData((prevData) => ({
      ...prevData,
      pid: newPid.toString(), // Ensure pid is a string
      selectedOption: selectedOption
    }));
    sessionStorage.setItem('lastPid', JSON.stringify(newPid));
  }, [selectedOption]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSelectChange = (e: SelectChangeEvent<string>, id: string) => {
    const value = e.target.value;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Save data to sessionStorage
    const currentData = JSON.parse(sessionStorage.getItem('WeeklyDataUnderTen') || '[]');
    sessionStorage.setItem('WeeklyDataUnderTen', JSON.stringify([...currentData, formData]));
    // Remove old pid and set new pid
    sessionStorage.setItem('lastPid', JSON.stringify(parseInt(formData.pid, 10) + 1));
    navigate('/report/weeklyplan');
  };


  return (
    <>
      <form onSubmit={handleSubmit}>
        <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14, } }} className="text-start hidden">
          {selectedOption}
        </Typography>

        {/* Start Grid */}
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 1, md: 1 }} className='pl-3 pt-1' >
          <Grid item xs={2} sm={1.5} md={1} lg={1} sx={{ ml: { xs: -3, sm: -2, md: -9, lg: 10 }, marginLeft: { xs: -1.5, sm: 1, md: 4, lg: 12, } }}>
            <FormControl sx={{ minWidth: 90 }} size="small">
              <InputLabel id="month-select-label">月</InputLabel>
              <Select
                labelId="month-select-label"
                id="month"
                label="月"
                value={formData.month}
                onChange={(e) => handleSelectChange(e, 'month')}
                sx={{
                  backgroundColor: "white",
                }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {Array.from({ length: 12 }, (_, i) => (
                  <MenuItem key={i + 1} value={i + 1}>
                    {i + 1} 月
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={3} sm={2} md={2} lg={1.5} >
            <TextField
              className='w-full'
              id="notices1"
              name="notices1"
              type="text"
              size='small'
              value={formData.notices1}
              onChange={handleChange}
              sx={{
                backgroundColor: "white",
                fontSize: { xs: 11, sm: 11, md: 11, lg: 16, },
                marginLeft: { xs: 5, sm: 6, md: 6, lg: 2, }
              }}
              InputProps={{
                endAdornment: <InputAdornment position="end">第</InputAdornment>,
              }}
            />
          </Grid>
          <Grid item xs={3} sm={2} md={2} lg={1.5} >
            <TextField
              className='w-full'
              id="notices2"
              name="notices2"
              type="text"
              size='small'
              value={formData.notices2}
              onChange={handleChange}
              sx={{
                backgroundColor: "white",
                fontSize: { xs: 11, sm: 11, md: 11, lg: 16, },
                marginLeft: { xs: 5, sm: 6, md: 7, lg: 3, }
              }}
              InputProps={{
                endAdornment: <InputAdornment position="end">週</InputAdornment>,
              }}
            />
          </Grid>
          <Grid item xs={3} sm={2} md={2} lg={1.5} >
            <TextField
              className='w-full'
              id="notices3"
              name="notices3"
              type="text"
              size='small'
              value={formData.notices3}
              onChange={handleChange}
              sx={{
                backgroundColor: "white",
                fontSize: { xs: 11, sm: 11, md: 11, lg: 16, },
                marginLeft: { xs: 5, sm: 6, md: 8, lg: 3, }
              }}
              InputProps={{
                endAdornment: <InputAdornment position="end">組</InputAdornment>,
              }}
            />
          </Grid>
        </Grid>
        {/* End Grid */}

        {/* Start 施設長 Grid  */}
        <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-5">
          <Grid item xs={2} sm={1.5} md={1} lg={2} sx={{ ml: { xs: 5, sm: 5, md: 5, lg: 1 } }}>
            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, } }} >
              施設長 :
            </Typography>
          </Grid>
          <Grid item xs={2} sm={1.5} md={1} lg={1} sx={{ ml: { xs: -1, sm: -1, md: -1, lg: -15 } }}>
            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, fontWeight: 'bold', }} >
              濃部
            </Typography>
          </Grid>
          <Grid item xs={2} sm={1.5} md={1} lg={1} sx={{ ml: { xs: -2, sm: -1, md: -1, lg: -5 } }}>
            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, fontWeight: 'bold', }} >
              圭子
            </Typography>
          </Grid>
        </Grid >
        {/* End 施設長 Grid */}

        {/* Start 主任 Grid */}
        <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-7  ">
          <Grid item xs={2} sm={1.5} md={1} lg={2} sx={{ ml: { xs: 6.5, sm: 6.5, md: 6.5, lg: 1 } }}>
            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, }} >
              主任 :
            </Typography>
          </Grid>
          <Grid item xs={2} sm={1.5} md={1} lg={1} sx={{ ml: { xs: -2.5, sm: -2.5, md: -2.5, lg: -17 } }}>
            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, fontWeight: 'bold', }} >
              渡部
            </Typography>
          </Grid>
          <Grid item xs={2} sm={1.5} md={1} lg={1} sx={{ ml: { xs: -2, sm: -1, md: -1, lg: -5 } }}>
            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, fontWeight: 'bold', }} >
              史朗
            </Typography>
          </Grid>
        </Grid >
        {/* End 主任 Grid */}

        {/* Start 康嘉 Grid */}
        <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-7  ">
          <Grid item xs={2} sm={1.5} md={1} lg={2} sx={{ ml: { xs: 6.5, sm: 6.5, md: 6.5, lg: 1 } }}>
            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, }} >
              担任 :
            </Typography>
          </Grid>
          <Grid item xs={2} sm={1.5} md={1} lg={1} sx={{ ml: { xs: -2.5, sm: -2.5, md: -2.5, lg: -17 } }}>
            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, fontWeight: 'bold', }} >
              中川
            </Typography>
          </Grid>
          <Grid item xs={2} sm={1.5} md={1} lg={1} sx={{ ml: { xs: -2, sm: -1, md: -1, lg: -5 } }}>
            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, fontWeight: 'bold', }} >
              康嘉
            </Typography>
          </Grid>
        </Grid >
        {/* End 康嘉 Grid */}

        {/* Start 健康·安全 Grid */}
        <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-5">
          <Grid item xs={6} sm={6} md={6} lg={6} >
            <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, ml: { xs: 8, sm: 13, md: 12, lg: 11 } }} >
              子どもの姿
            </Typography>
          </Grid>
          <Grid item xs={6} sm={6} md={6} lg={6} >
            <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, ml: { xs: 1, sm: 5, md: -1, lg: -10 } }} >
              週のねらい
            </Typography>
          </Grid>
        </Grid>
        {/* End 健康·安全 Grid */}

        {/* Start hchildren1 & weekly_aims Grid */}
        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-3' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 5 } }}>
          <Grid item xs={4} sm={4} md={4} lg={4} sx={{ ml: { xs: 3, sm: 8, md: 2, lg: 4 } }}>
            <TextareaAutosize
              id="children1"
              name="children1"
              minRows={3}
              maxRows={100}
              className="w-full"
              value={formData.children1}
              onChange={handleChange}
              style={{ border: '1px solid gray', borderRadius: '4px' }}
            />
          </Grid>
          <Grid item xs={4} sm={4} md={4} lg={4} sx={{ ml: { xs: 1, sm: 1, md: 2, lg: 2 } }}>
            <TextareaAutosize
              id="weekly_aims"
              name="weekly_aims"
              minRows={3}
              maxRows={100}
              className="w-full"
              value={formData.weekly_aims}
              onChange={handleChange}
              style={{ border: '1px solid gray', borderRadius: '4px' }}
            />
          </Grid>
        </Grid>
        {/* End hchildren1 & weekly_aims Grid */}

        {/* Start Grid */}
        <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-5">
          <Grid item xs={6} sm={6} md={6} lg={6} >
            <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, ml: { xs: 8, sm: 13, md: 12, lg: 11 } }} >
              活動予定
            </Typography>
          </Grid>
          <Grid item xs={6} sm={6} md={6} lg={6} >
            <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, ml: { xs: 1, sm: 5, md: -1, lg: -10 } }} >
              環境構成と留意点
            </Typography>
          </Grid>
        </Grid>
        {/* End Grid */}

        {/* Start Grid */}
        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-3' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 5 } }}>
          <Grid item xs={4} sm={4} md={4} lg={4} sx={{ ml: { xs: 3, sm: 8, md: 2, lg: 4 } }}>
            <TextareaAutosize
              id="scheduled_activities"
              name="scheduled_activities"
              minRows={3}
              maxRows={100}
              className="w-full"
              value={formData.scheduled_activities}
              onChange={handleChange}
              style={{ border: '1px solid gray', borderRadius: '4px' }}
            />
          </Grid>
          <Grid item xs={4} sm={4} md={4} lg={4} sx={{ ml: { xs: 1, sm: 1, md: 2, lg: 2 } }}>
            <TextareaAutosize
              id="environment_configuration"
              name="environment_configuration"
              minRows={3}
              maxRows={100}
              className="w-full"
              value={formData.environment_configuration}
              onChange={handleChange}
              style={{ border: '1px solid gray', borderRadius: '4px' }}
            />
          </Grid>
        </Grid>
        {/* End Grid */}

        <br />
        <Divider className='bg-gray' />

        {/* Start Grid */}
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 1, md: 1 }} className='pl-3 pt-7' >
          <Grid item xs={2} sm={1.5} md={1} lg={1} sx={{ ml: { xs: -3, sm: -2, md: -9, lg: 10 }, marginLeft: { xs: 5, sm: 9, md: 15, lg: 9.5, } }}>
            <FormControl sx={{ minWidth: 90 }} size="small">
              <InputLabel id="day-select-label">日</InputLabel>
              <Select
                labelId="day-select-label"
                id="day1"
                label="日"
                value={formData.day1}
                onChange={(e) => handleSelectChange(e, 'day1')}
                sx={{
                  backgroundColor: "white",
                }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {Array.from({ length: 31 }, (_, i) => (
                  <MenuItem key={i + 1} value={i + 1}>
                    {i + 1} 日
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={3} sm={2} md={2} lg={1.5} >
            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, marginLeft: { xs: 5, sm: 6, md: 6, lg: 2, } }} className="pt-2">
              (月)
            </Typography>
          </Grid>
          <Grid item xs={4} sm={3} md={3} lg={1.5} >
            <TextField
              className='w-full'
              id="weather1"
              name="weather1"
              type="text"
              size='small'
              value={formData.weather1}
              onChange={handleChange}
              sx={{
                backgroundColor: "white",
                fontSize: { xs: 11, sm: 11, md: 11, lg: 16, },
                marginLeft: { xs: -2, sm: 1, md: -4, lg: -9, }
              }}
              InputProps={{
                endAdornment: <InputAdornment position="end">天候</InputAdornment>,
              }}
            />
          </Grid>
        </Grid>
        {/* End Grid */}

        {/* Start Grid */}
        <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-5">
          <Grid item xs={6} sm={6} md={6} lg={6} >
            <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, ml: { xs: 8, sm: 13, md: 12, lg: 11 } }} >
              主な活動
            </Typography>
          </Grid>
          <Grid item xs={6} sm={6} md={6} lg={6} >
            <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, ml: { xs: 1, sm: 5, md: -1, lg: -10 } }} >
              評価及び反省
            </Typography>
          </Grid>
        </Grid>
        {/* End Grid */}

        {/* Start Grid */}
        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-3' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 5 } }}>
          <Grid item xs={4} sm={4} md={4} lg={4} sx={{ ml: { xs: 3, sm: 8, md: 2, lg: 4 } }}>
            <TextareaAutosize
              id="main_activities1"
              name="main_activities1"
              minRows={3}
              maxRows={100}
              className="w-full"
              value={formData.main_activities1}
              onChange={handleChange}
              style={{ border: '1px solid gray', borderRadius: '4px' }}
            />
          </Grid>
          <Grid item xs={4} sm={4} md={4} lg={4} sx={{ ml: { xs: 1, sm: 1, md: 2, lg: 2 } }}>
            <TextareaAutosize
              id="evaluation_and_reflection1"
              name="evaluation_and_reflection1"
              minRows={3}
              maxRows={100}
              className="w-full"
              value={formData.evaluation_and_reflection1}
              onChange={handleChange}
              style={{ border: '1px solid gray', borderRadius: '4px' }}
            />
          </Grid>
        </Grid>
        {/* End Grid */}

        {/* Start Grid */}
        <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-5">
          <Grid item xs={6} sm={6} md={6} lg={6} >
            <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, ml: { xs: 8, sm: 13, md: 12, lg: 11 } }} >
              個人記錄
            </Typography>
          </Grid>
        </Grid>
        {/* End Grid */}

        {/* Start personal_journal1 Grid */}
        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-3' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 5 } }}>
          <Grid item xs={4} sm={4} md={4} lg={4} sx={{ ml: { xs: 3, sm: 8, md: 2, lg: 4 } }}>
            <TextareaAutosize
              id="personal_journal1"
              name="personal_journal1"
              minRows={3}
              maxRows={100}
              className="w-full"
              value={formData.personal_journal1}
              onChange={handleChange}
              style={{ border: '1px solid gray', borderRadius: '4px' }}
            />
          </Grid>
        </Grid>
        {/* End personal_journal1 Grid */}

        <br />
        <Divider className='bg-gray' />

        {/* Start Grid */}
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 1, md: 1 }} className='pl-3 pt-7' >
          <Grid item xs={2} sm={1.5} md={1} lg={1} sx={{ ml: { xs: -3, sm: -2, md: -9, lg: 10 }, marginLeft: { xs: 5, sm: 9, md: 15, lg: 9.5, } }}>
            <FormControl sx={{ minWidth: 90 }} size="small">
              <InputLabel id="day-select-label">日</InputLabel>
              <Select
                labelId="day-select-label"
                id="day2"
                label="日"
                value={formData.day2}
                onChange={(e) => handleSelectChange(e, 'day2')}
                sx={{
                  backgroundColor: "white",
                }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {Array.from({ length: 31 }, (_, i) => (
                  <MenuItem key={i + 1} value={i + 1}>
                    {i + 1} 日
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={3} sm={2} md={2} lg={1.5} >
            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, marginLeft: { xs: 5, sm: 6, md: 6, lg: 2, } }} className="pt-2">
              (火)
            </Typography>
          </Grid>
          <Grid item xs={4} sm={3} md={3} lg={1.5} >
            <TextField
              className='w-full'
              id="weather2"
              name="weather2"
              type="text"
              size='small'
              value={formData.weather2}
              onChange={handleChange}
              sx={{
                backgroundColor: "white",
                fontSize: { xs: 11, sm: 11, md: 11, lg: 16, },
                marginLeft: { xs: -2, sm: 1, md: -4, lg: -9, }
              }}
              InputProps={{
                endAdornment: <InputAdornment position="end">天候</InputAdornment>,
              }}
            />
          </Grid>
        </Grid>
        {/* End Grid */}

        {/* Start Grid */}
        <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-5">
          <Grid item xs={6} sm={6} md={6} lg={6} >
            <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, ml: { xs: 8, sm: 13, md: 12, lg: 11 } }} >
              主な活動
            </Typography>
          </Grid>
          <Grid item xs={6} sm={6} md={6} lg={6} >
            <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, ml: { xs: 1, sm: 5, md: -1, lg: -10 } }} >
              評価及び反省
            </Typography>
          </Grid>
        </Grid>
        {/* End Grid */}

        {/* Start Grid */}
        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-3' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 5 } }}>
          <Grid item xs={4} sm={4} md={4} lg={4} sx={{ ml: { xs: 3, sm: 8, md: 2, lg: 4 } }}>
            <TextareaAutosize
              id="main_activities2"
              name="main_activities2"
              minRows={3}
              maxRows={100}
              className="w-full"
              value={formData.main_activities2}
              onChange={handleChange}
              style={{ border: '1px solid gray', borderRadius: '4px' }}
            />
          </Grid>
          <Grid item xs={4} sm={4} md={4} lg={4} sx={{ ml: { xs: 1, sm: 1, md: 2, lg: 2 } }}>
            <TextareaAutosize
              id="evaluation_and_reflection2"
              name="evaluation_and_reflection2"
              minRows={3}
              maxRows={100}
              className="w-full"
              value={formData.evaluation_and_reflection2}
              onChange={handleChange}
              style={{ border: '1px solid gray', borderRadius: '4px' }}
            />
          </Grid>
        </Grid>
        {/* End Grid */}

        {/* Start Grid */}
        <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-5">
          <Grid item xs={6} sm={6} md={6} lg={6} >
            <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, ml: { xs: 8, sm: 13, md: 12, lg: 11 } }} >
              個人記錄
            </Typography>
          </Grid>
        </Grid>
        {/* End Grid */}

        {/* Start personal_journal2 Grid */}
        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-3' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 5 } }}>
          <Grid item xs={4} sm={4} md={4} lg={4} sx={{ ml: { xs: 3, sm: 8, md: 2, lg: 4 } }}>
            <TextareaAutosize
              id="personal_journal2"
              name="personal_journal2"
              minRows={3}
              maxRows={100}
              className="w-full"
              value={formData.personal_journal2}
              onChange={handleChange}
              style={{ border: '1px solid gray', borderRadius: '4px' }}
            />
          </Grid>
        </Grid>
        {/* End personal_journal2 Grid */}

        <br />
        <Divider className='bg-gray' />

        {/* Start Grid */}
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 1, md: 1 }} className='pl-3 pt-7' >
          <Grid item xs={2} sm={1.5} md={1} lg={1} sx={{ ml: { xs: -3, sm: -2, md: -9, lg: 10 }, marginLeft: { xs: 5, sm: 9, md: 15, lg: 9.5, } }}>
            <FormControl sx={{ minWidth: 90 }} size="small">
              <InputLabel id="day-select-label">日</InputLabel>
              <Select
                labelId="day-select-label"
                id="day3"
                label="日"
                value={formData.day3}
                onChange={(e) => handleSelectChange(e, 'day3')}
                sx={{
                  backgroundColor: "white",
                }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {Array.from({ length: 31 }, (_, i) => (
                  <MenuItem key={i + 1} value={i + 1}>
                    {i + 1} 日
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={3} sm={2} md={2} lg={1.5} >
            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, marginLeft: { xs: 5, sm: 6, md: 6, lg: 2, } }} className="pt-2">
              (水)
            </Typography>
          </Grid>
          <Grid item xs={4} sm={3} md={3} lg={1.5} >
            <TextField
              className='w-full'
              id="weather3"
              name="weather3"
              type="text"
              size='small'
              value={formData.weather3}
              onChange={handleChange}
              sx={{
                backgroundColor: "white",
                fontSize: { xs: 11, sm: 11, md: 11, lg: 16, },
                marginLeft: { xs: -2, sm: 1, md: -4, lg: -9, }
              }}
              InputProps={{
                endAdornment: <InputAdornment position="end">天候</InputAdornment>,
              }}
            />
          </Grid>
        </Grid>
        {/* End Grid */}

        {/* Start Grid */}
        <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-5">
          <Grid item xs={6} sm={6} md={6} lg={6} >
            <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, ml: { xs: 8, sm: 13, md: 12, lg: 11 } }} >
              主な活動
            </Typography>
          </Grid>
          <Grid item xs={6} sm={6} md={6} lg={6} >
            <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, ml: { xs: 1, sm: 5, md: -1, lg: -10 } }} >
              評価及び反省
            </Typography>
          </Grid>
        </Grid>
        {/* End Grid */}

        {/* Start Grid */}
        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-3' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 5 } }}>
          <Grid item xs={4} sm={4} md={4} lg={4} sx={{ ml: { xs: 3, sm: 8, md: 2, lg: 4 } }}>
            <TextareaAutosize
              id="main_activities3"
              name="main_activities3"
              minRows={3}
              maxRows={100}
              className="w-full"
              value={formData.main_activities3}
              onChange={handleChange}
              style={{ border: '1px solid gray', borderRadius: '4px' }}
            />
          </Grid>
          <Grid item xs={4} sm={4} md={4} lg={4} sx={{ ml: { xs: 1, sm: 1, md: 2, lg: 2 } }}>
            <TextareaAutosize
              id="evaluation_and_reflection3"
              name="evaluation_and_reflection3"
              minRows={3}
              maxRows={100}
              className="w-full"
              value={formData.evaluation_and_reflection3}
              onChange={handleChange}
              style={{ border: '1px solid gray', borderRadius: '4px' }}
            />
          </Grid>
        </Grid>
        {/* End Grid */}

        {/* Start personal_journal3 Grid */}
        <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-5">
          <Grid item xs={6} sm={6} md={6} lg={6} >
            <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, ml: { xs: 8, sm: 13, md: 12, lg: 11 } }} >
              個人記錄
            </Typography>
          </Grid>
        </Grid>
        {/* End personal_journal3 Grid */}

        {/* Start Grid */}
        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-3' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 5 } }}>
          <Grid item xs={4} sm={4} md={4} lg={4} sx={{ ml: { xs: 3, sm: 8, md: 2, lg: 4 } }}>
            <TextareaAutosize
              id="personal_journal3"
              name="personal_journal3"
              minRows={3}
              maxRows={100}
              className="w-full"
              value={formData.personal_journal3}
              onChange={handleChange}
              style={{ border: '1px solid gray', borderRadius: '4px' }}
            />
          </Grid>
        </Grid>
        {/* End Grid */}

        <br />
        <Divider className='bg-gray' />

        {/* Start Grid */}
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 1, md: 1 }} className='pl-3 pt-7' >
          <Grid item xs={2} sm={1.5} md={1} lg={1} sx={{ ml: { xs: -3, sm: -2, md: -9, lg: 10 }, marginLeft: { xs: 5, sm: 9, md: 15, lg: 9.5, } }}>
            <FormControl sx={{ minWidth: 90 }} size="small">
              <InputLabel id="day-select-label">日</InputLabel>
              <Select
                labelId="day-select-label"
                id="day4"
                label="日"
                value={formData.day4}
                onChange={(e) => handleSelectChange(e, 'day4')}
                sx={{
                  backgroundColor: "white",
                }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {Array.from({ length: 31 }, (_, i) => (
                  <MenuItem key={i + 1} value={i + 1}>
                    {i + 1} 日
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={3} sm={2} md={2} lg={1.5} >
            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, marginLeft: { xs: 5, sm: 6, md: 6, lg: 2, } }} className="pt-2">
              (木)
            </Typography>
          </Grid>
          <Grid item xs={4} sm={3} md={3} lg={1.5} >
            <TextField
              className='w-full'
              id="weather4"
              name="weather4"
              type="text"
              size='small'
              value={formData.weather4}
              onChange={handleChange}
              sx={{
                backgroundColor: "white",
                fontSize: { xs: 11, sm: 11, md: 11, lg: 16, },
                marginLeft: { xs: -2, sm: 1, md: -4, lg: -9, }
              }}
              InputProps={{
                endAdornment: <InputAdornment position="end">天候</InputAdornment>,
              }}
            />
          </Grid>
        </Grid>
        {/* End Grid */}

        {/* Start Grid */}
        <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-5">
          <Grid item xs={6} sm={6} md={6} lg={6} >
            <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, ml: { xs: 8, sm: 13, md: 12, lg: 11 } }} >
              主な活動
            </Typography>
          </Grid>
          <Grid item xs={6} sm={6} md={6} lg={6} >
            <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, ml: { xs: 1, sm: 5, md: -1, lg: -10 } }} >
              評価及び反省
            </Typography>
          </Grid>
        </Grid>
        {/* End Grid */}

        {/* Start Grid */}
        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-3' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 5 } }}>
          <Grid item xs={4} sm={4} md={4} lg={4} sx={{ ml: { xs: 3, sm: 8, md: 2, lg: 4 } }}>
            <TextareaAutosize
              id="main_activities4"
              name="main_activities4"
              minRows={3}
              maxRows={100}
              className="w-full"
              value={formData.main_activities4}
              onChange={handleChange}
              style={{ border: '1px solid gray', borderRadius: '4px' }}
            />
          </Grid>
          <Grid item xs={4} sm={4} md={4} lg={4} sx={{ ml: { xs: 1, sm: 1, md: 2, lg: 2 } }}>
            <TextareaAutosize
              id="evaluation_and_reflection4"
              name="evaluation_and_reflection4"
              minRows={3}
              maxRows={100}
              className="w-full"
              value={formData.evaluation_and_reflection4}
              onChange={handleChange}
              style={{ border: '1px solid gray', borderRadius: '4px' }}
            />
          </Grid>
        </Grid>
        {/* End Grid */}

        {/* Start personal_journal4 Grid */}
        <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-5">
          <Grid item xs={6} sm={6} md={6} lg={6} >
            <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, ml: { xs: 8, sm: 13, md: 12, lg: 11 } }} >
              個人記錄
            </Typography>
          </Grid>
        </Grid>
        {/* End personal_journal4 Grid */}

        {/* Start Grid */}
        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-3' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 5 } }}>
          <Grid item xs={4} sm={4} md={4} lg={4} sx={{ ml: { xs: 3, sm: 8, md: 2, lg: 4 } }}>
            <TextareaAutosize
              id="personal_journal4"
              name="personal_journal4"
              minRows={3}
              maxRows={100}
              className="w-full"
              value={formData.personal_journal4}
              onChange={handleChange}
              style={{ border: '1px solid gray', borderRadius: '4px' }}
            />
          </Grid>
        </Grid>
        {/* End Grid */}

        <br />
        <Divider className='bg-gray' />

        {/* Start Grid */}
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 1, md: 1 }} className='pl-3 pt-7' >
          <Grid item xs={2} sm={1.5} md={1} lg={1} sx={{ ml: { xs: -3, sm: -2, md: -9, lg: 10 }, marginLeft: { xs: 5, sm: 9, md: 15, lg: 9.5, } }}>
            <FormControl sx={{ minWidth: 90 }} size="small">
              <InputLabel id="day-select-label">日</InputLabel>
              <Select
                labelId="day-select-label"
                id="day5"
                label="日"
                value={formData.day5}
                onChange={(e) => handleSelectChange(e, 'day5')}
                sx={{
                  backgroundColor: "white",
                }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {Array.from({ length: 31 }, (_, i) => (
                  <MenuItem key={i + 1} value={i + 1}>
                    {i + 1} 日
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={3} sm={2} md={2} lg={1.5} >
            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, marginLeft: { xs: 5, sm: 6, md: 6, lg: 2, } }} className="pt-2">
              (金)
            </Typography>
          </Grid>
          <Grid item xs={4} sm={3} md={3} lg={1.5} >
            <TextField
              className='w-full'
              id="weather5"
              name="weather5"
              type="text"
              size='small'
              value={formData.weather5}
              onChange={handleChange}
              sx={{
                backgroundColor: "white",
                fontSize: { xs: 11, sm: 11, md: 11, lg: 16, },
                marginLeft: { xs: -2, sm: 1, md: -4, lg: -9, }
              }}
              InputProps={{
                endAdornment: <InputAdornment position="end">天候</InputAdornment>,
              }}
            />
          </Grid>
        </Grid>
        {/* End Grid */}

        {/* Start Grid */}
        <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-5">
          <Grid item xs={6} sm={6} md={6} lg={6} >
            <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, ml: { xs: 8, sm: 13, md: 12, lg: 11 } }} >
              主な活動
            </Typography>
          </Grid>
          <Grid item xs={6} sm={6} md={6} lg={6} >
            <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, ml: { xs: 1, sm: 5, md: -1, lg: -10 } }} >
              評価及び反省
            </Typography>
          </Grid>
        </Grid>
        {/* End Grid */}

        {/* Start Grid */}
        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-3' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 5 } }}>
          <Grid item xs={4} sm={4} md={4} lg={4} sx={{ ml: { xs: 3, sm: 8, md: 2, lg: 4 } }}>
            <TextareaAutosize
              id="main_activities5"
              name="main_activities5"
              minRows={3}
              maxRows={100}
              className="w-full"
              value={formData.main_activities5}
              onChange={handleChange}
              style={{ border: '1px solid gray', borderRadius: '4px' }}
            />
          </Grid>
          <Grid item xs={4} sm={4} md={4} lg={4} sx={{ ml: { xs: 1, sm: 1, md: 2, lg: 2 } }}>
            <TextareaAutosize
              id="evaluation_and_reflection5"
              name="evaluation_and_reflection5"
              minRows={3}
              maxRows={100}
              className="w-full"
              value={formData.evaluation_and_reflection5}
              onChange={handleChange}
              style={{ border: '1px solid gray', borderRadius: '4px' }}
            />
          </Grid>
        </Grid>
        {/* End Grid */}

        {/* Start personal_journal5 Grid */}
        <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-5">
          <Grid item xs={6} sm={6} md={6} lg={6} >
            <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, ml: { xs: 8, sm: 13, md: 12, lg: 11 } }} >
              個人記錄
            </Typography>
          </Grid>
        </Grid>
        {/* End personal_journal5 Grid */}

        {/* Start Grid */}
        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-3' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 5 } }}>
          <Grid item xs={4} sm={4} md={4} lg={4} sx={{ ml: { xs: 3, sm: 8, md: 2, lg: 4 } }}>
            <TextareaAutosize
              id="personal_journal5"
              name="personal_journal5"
              minRows={3}
              maxRows={100}
              className="w-full"
              value={formData.personal_journal5}
              onChange={handleChange}
              style={{ border: '1px solid gray', borderRadius: '4px' }}
            />
          </Grid>
        </Grid>
        {/* End Grid */}

        <br />
        <Divider className='bg-gray' />

        {/* Start Grid */}
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 1, md: 1 }} className='pl-3 pt-7' >
          <Grid item xs={2} sm={1.5} md={1} lg={1} sx={{ ml: { xs: -3, sm: -2, md: -9, lg: 10 }, marginLeft: { xs: 5, sm: 9, md: 15, lg: 9.5, } }}>
            <FormControl sx={{ minWidth: 90 }} size="small">
              <InputLabel id="day-select-label">日</InputLabel>
              <Select
                labelId="day-select-label"
                id="day6"
                label="日"
                value={formData.day6}
                onChange={(e) => handleSelectChange(e, 'day6')}
                sx={{
                  backgroundColor: "white",
                }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {Array.from({ length: 31 }, (_, i) => (
                  <MenuItem key={i + 1} value={i + 1}>
                    {i + 1} 日
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={3} sm={2} md={2} lg={1.5} >
            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, marginLeft: { xs: 5, sm: 6, md: 6, lg: 2, } }} className="pt-2">
              (土)
            </Typography>
          </Grid>
          <Grid item xs={4} sm={3} md={3} lg={1.5} >
            <TextField
              className='w-full'
              id="weather6"
              name="weather6"
              type="text"
              size='small'
              value={formData.weather6}
              onChange={handleChange}
              sx={{
                backgroundColor: "white",
                fontSize: { xs: 11, sm: 11, md: 11, lg: 16, },
                marginLeft: { xs: -2, sm: 1, md: -4, lg: -9, }
              }}
              InputProps={{
                endAdornment: <InputAdornment position="end">天候</InputAdornment>,
              }}
            />
          </Grid>
        </Grid>
        {/* End Grid */}

        {/* Start Grid */}
        <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-5">
          <Grid item xs={6} sm={6} md={6} lg={6} >
            <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, ml: { xs: 8, sm: 13, md: 12, lg: 11 } }} >
              主な活動
            </Typography>
          </Grid>
          <Grid item xs={6} sm={6} md={6} lg={6} >
            <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, ml: { xs: 1, sm: 5, md: -1, lg: -10 } }} >
              評価及び反省
            </Typography>
          </Grid>
        </Grid>
        {/* End Grid */}

        {/* Start Grid */}
        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-3' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 5 } }}>
          <Grid item xs={4} sm={4} md={4} lg={4} sx={{ ml: { xs: 3, sm: 8, md: 2, lg: 4 } }}>
            <TextareaAutosize
              id="main_activities6"
              name="main_activities6"
              minRows={3}
              maxRows={100}
              className="w-full"
              value={formData.main_activities6}
              onChange={handleChange}
              style={{ border: '1px solid gray', borderRadius: '4px' }}
            />
          </Grid>
          <Grid item xs={4} sm={4} md={4} lg={4} sx={{ ml: { xs: 1, sm: 1, md: 2, lg: 2 } }}>
            <TextareaAutosize
              id="evaluation_and_reflection6"
              name="evaluation_and_reflection6"
              minRows={3}
              maxRows={100}
              className="w-full"
              value={formData.evaluation_and_reflection6}
              onChange={handleChange}
              style={{ border: '1px solid gray', borderRadius: '4px' }}
            />
          </Grid>
        </Grid>
        {/* End Grid */}

        {/* Start personal_journal6 Grid */}
        <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-5">
          <Grid item xs={6} sm={6} md={6} lg={6} >
            <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, ml: { xs: 8, sm: 13, md: 12, lg: 11 } }} >
              個人記錄
            </Typography>
          </Grid>
        </Grid>
        {/* End personal_journal6 Grid */}

        {/* Start Grid */}
        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-3' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 5 } }}>
          <Grid item xs={4} sm={4} md={4} lg={4} sx={{ ml: { xs: 3, sm: 8, md: 2, lg: 4 } }}>
            <TextareaAutosize
              id="personal_journal6"
              name="personal_journal6"
              minRows={3}
              maxRows={100}
              className="w-full"
              value={formData.personal_journal6}
              onChange={handleChange}
              style={{ border: '1px solid gray', borderRadius: '4px' }}
            />
          </Grid>
        </Grid>
        {/* End Grid */}

        <div className="mt-auto">
          <Grid container justifyContent="center" spacing={2} className='pt-12' sx={{ bottom: 0, width: '100%', backgroundColor: 'inherit', paddingBottom: '10px' }}>
            <Grid item>
              <Button variant="contained" href="/report/weeklyplan" size='medium' className='text-center' startIcon={<ArrowBackIcon />} color="warning">
                <Typography component="div" style={{ color: 'white', alignItems: 'center' }}>
                  戻る
                </Typography>
              </Button>
            </Grid>
            <Grid item>
              <Button variant="contained" type="submit" size='medium' className='text-center' startIcon={<SaveIcon />} color="success">
                <Typography component="div" style={{ color: 'white', alignItems: 'center' }}>
                  修正
                </Typography>
              </Button>
            </Grid>
          </Grid>
        </div>
      </form>
    </>
  );
};

export default WeeklyplanUnderTen;