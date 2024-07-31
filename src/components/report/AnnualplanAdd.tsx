import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid, Typography, TextField, Button, Card, TextareaAutosize, MenuItem, Select, InputLabel, FormControl, Divider } from "@mui/material";
import ContentMain from "../content/Content";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SaveIcon from '@mui/icons-material/Save';
import { SelectChangeEvent } from '@mui/material';

interface FormData {
  pid: string;
  age: string;
  homeroom_teacher: string;
  annua_goals: string;
  nursing_care1: string;
  education1: string;
  emotional_stability1 : string;
  perspectives_on_physical1 : string;
  food_education1: string;
  nursing_care2: string;
  education2: string;
  emotional_stability2 : string;
  perspectives_on_physical2 : string;
  food_education2: string;
  nursing_care3: string;
  education3: string;
  emotional_stability3: string; 
  perspectives_on_physical3: string; 
  food_education3: string;
  nursing_care4: string;
  education4: string;
  emotional_stability4: string; 
  perspectives_on_physical4: string; 
  food_education4: string;
  month1: string;
  month2: string;
  month3: string;
  month4: string;
  month5: string;
  month6: string;
  month7: string;
  month8: string;
}

const AnnualplanAdd: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    pid: '',
    age: '',
    homeroom_teacher: '',
    annua_goals: '',
    nursing_care1: '',
    education1: '',
    emotional_stability1 : '',
    perspectives_on_physical1 : '',
    food_education1: '',
    nursing_care2: '',
    education2: '',
    emotional_stability2 : '',
    perspectives_on_physical2 : '',
    food_education2: '',
    nursing_care3: '',
    education3: '',
    emotional_stability3: '', 
    perspectives_on_physical3: '', 
    food_education3: '',
    nursing_care4: '',
    education4: '',
    emotional_stability4: '', 
    perspectives_on_physical4: '', 
    food_education4: '',
    month1: '',
    month2: '',
    month3: '',
    month4: '',
    month5: '',
    month6: '',
    month7: '',
    month8: '',
  });

  const navigate = useNavigate();

  useEffect(() => {
    // Set initial pid from sessionStorage or 1 if not present
    const lastPid = JSON.parse(sessionStorage.getItem('lastPid') || '0');
    const newPid = lastPid + 1;
    setFormData((prevData) => ({
      ...prevData,
      pid: newPid.toString() // Ensure pid is a string
    }));
    sessionStorage.setItem('lastPid', JSON.stringify(newPid));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSelectChange = (e: SelectChangeEvent<string>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSelectChange2 = (e: SelectChangeEvent<string>, id: string) => {
    const value = e.target.value;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Save data to sessionStorage
    const currentData = JSON.parse(sessionStorage.getItem('annualplanData') || '[]');
    sessionStorage.setItem('annualplanData', JSON.stringify([...currentData, formData]));
    // Remove old pid and set new pid
    sessionStorage.setItem('lastPid', JSON.stringify(parseInt(formData.pid, 10) + 1));
    navigate('/report/annualplan');
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
                  id="age"
                  name='age'
                  label="年間指導計画を選択する"
                  size="small"
                  value={formData.age}
                  onChange={handleSelectChange}
                  className="mb-5"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="年間指導計画 0 歲児">年間指導計画 0 歲児</MenuItem>
                  <MenuItem value="年間指導計画 1·2 歲児">年間指導計画 1·2 歲児</MenuItem>
                  <MenuItem value="年間指導計画 3·4·5 歲児">年間指導計画 3·4·5 歲児</MenuItem>
                </Select>
              </FormControl>
              <div>
                {formData.age && (
                  <Typography
                    component="div"
                    sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, fontWeight: 'bold' }}
                    className='flex justify-start h-10 pt-2 pl-5'
                  >
                    {`${formData.age}`}
                  </Typography>
                )}
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
            <TextField
              id="homeroom_teacher"
              name='homeroom_teacher'
              type="text"
              size="small"
              fullWidth
              onChange={handleChange}
              sx={{ backgroundColor: 'white' }}
            />
          </Grid>
          <Grid item xs={3} sm={3} md={2} lg={1.5}>
            <Typography style={{ fontSize: '14px' }} className='pt-2 text-end'>
              年間目標 :
            </Typography>
          </Grid>
          <Grid item xs={7} sm={7} md={3} lg={3}>
            <TextField
              id="annua_goals"
              name='annua_goals'
              type="text" size="small"
              fullWidth
              onChange={handleChange}
              sx={{ backgroundColor: 'white' }}
            />
          </Grid>

          <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-5 pb-5' ></Grid>
        </Grid>

        <Divider sx={{ borderColor: 'darkgrey', borderWidth: '2px' }} />

        <Grid container spacing={1} className='pt-5' >
          <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 1, md: 1 }} className=' pt-5' >
            <Grid item xs={2} sm={1.5} md={3} lg={1.5} className="text-end">
              <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, mt: 1 }} >
                期 :
              </Typography>
            </Grid>
            <Grid item xs={2} sm={1.5} md={1} lg={1} >
              <FormControl sx={{ minWidth: 90 }} size="small">
                <InputLabel id="month-select-label">月</InputLabel>
                <Select
                  labelId="month-select-label"
                  id="month1"
                  value={formData.month1}
                  label="月"
                  onChange={(e) => handleSelectChange2(e, 'month1')}
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
            <Grid item xs={2} sm={1.5} md={1} lg={1} >
              <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, mt: 1, ml: { xs: 5, sm: 6.5, md: 8, lg: -1 } }} >
                ~
              </Typography>
            </Grid>
            <Grid item xs={2} sm={1.5} md={1} lg={1} sx={{ ml: { xs: 2, sm: 3, md: 5, lg: -1 } }}>
              <FormControl sx={{ minWidth: 90 }} size="small">
                <InputLabel id="month-select-label">月</InputLabel>
                <Select
                  labelId="month-select-label"
                  id="month2"
                  value={formData.month2}
                  label="月"
                  onChange={(e) => handleSelectChange2(e, 'month2')}
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
              <TextField
                id="nursing_care1"
                name="nursing_care1"
                type="text"
                size="small"
                fullWidth
                value={formData.nursing_care1}
                onChange={handleChange}
                sx={{ backgroundColor: 'white' }}
              />
            </Grid>
            <Grid item xs={3} sm={3} md={2} lg={1.5}>
              <Typography style={{ fontSize: '14px' }} className='pt-2 text-end'>
                教育 :
              </Typography>
            </Grid>
            <Grid item xs={7} sm={7} md={3} lg={3}>
              <TextField
                id="education1"
                name="education1"
                type="text"
                size="small"
                fullWidth
                value={formData.education1}
                onChange={handleChange}
                sx={{ backgroundColor: 'white' }}
              />
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
              <Grid container spacing={1} alignItems='center' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 5 } }}>
                <Grid item xs={1} sm={4} md={3} lg={2} className="text-end">
                  <Typography component="div" fontWeight="bold" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16 } }}>
                    義護
                  </Typography>
                </Grid>
              </Grid>
              <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-2' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 15 } }}>
                <Grid item xs={7.5} sm={3} md={8.5} lg={12} className="text-start">
                  <Typography gutterBottom sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14 } }}>
                    生命の保持・情緒の安定
                  </Typography>
                  <TextareaAutosize
                    id="emotional_stability1"
                    name="emotional_stability1"
                    minRows={3}
                    maxRows={100}
                    value={formData.emotional_stability1}
                    className="w-56 sm:w-60 lg:w-96"
                    onChange={handleChange}
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
              <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-2' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 15 } }}>
                <Grid item xs={7.5} sm={3} md={8.5} lg={12} className="text-start">
                  <Typography gutterBottom sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 12 } }}>
                    関する視点身体的発達に,関する視点社会的発達に,関する視点精神的発達に
                  </Typography>
                  <TextareaAutosize
                    id="perspectives_on_physical1"
                    name="perspectives_on_physical1"
                    minRows={3}
                    maxRows={100}
                    value={formData.perspectives_on_physical1}
                    className="w-56 sm:w-60 lg:w-96"
                    onChange={handleChange}
                    style={{ border: '1px solid gray', borderRadius: '4px' }}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={6}>
              <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-2 ' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 5 } }}>
                <Grid item xs={7.5} sm={7} md={8.5} lg={12} className="text-start">
                  <Typography gutterBottom sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 12 } }}>
                    食育
                  </Typography>
                  <TextareaAutosize
                    id="food_education1"
                    name="food_education1"
                    minRows={3}
                    maxRows={100}
                    value={formData.food_education1}
                    className="w-56 sm:w-60 lg:w-96"
                    onChange={handleChange}
                    style={{ border: '1px solid gray', borderRadius: '4px' }}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          
          <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-5 pb-5' ></Grid>

        </Grid>

        <Divider sx={{ borderColor: 'darkgrey', borderWidth: '2px' }} />

        {/* End Box 1 */}

        {/* Start Box 2 */}
        <Grid container spacing={1} className='pt-5' >
          <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 1, md: 1 }} className=' pt-5' >
            <Grid item xs={2} sm={1.5} md={3} lg={1.5} className="text-end">
              <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, mt: 1 }} >
                期 :
              </Typography>
            </Grid>
            <Grid item xs={2} sm={1.5} md={1} lg={1} >
              <FormControl sx={{ minWidth: 90 }} size="small">
                <InputLabel id="month-select-label">月</InputLabel>
                <Select
                  labelId="month-select-label"
                  id="month3"
                  value={formData.month3}
                  label="月"
                  onChange={(e) => handleSelectChange2(e, 'month3')}
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
            <Grid item xs={2} sm={1.5} md={1} lg={1} >
              <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, mt: 1, ml: { xs: 5, sm: 6.5, md: 8, lg: -1 } }} >
                ~
              </Typography>
            </Grid>
            <Grid item xs={2} sm={1.5} md={1} lg={1} sx={{ ml: { xs: 2, sm: 3, md: 5, lg: -1 } }}>
              <FormControl sx={{ minWidth: 90 }} size="small">
                <InputLabel id="month-select-label">月</InputLabel>
                <Select
                  labelId="month-select-label"
                  id="month4"
                  value={formData.month4}
                  label="月"
                  onChange={(e) => handleSelectChange2(e, 'month4')}
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
              <TextField
                id="nursing_care2"
                name="nursing_care2"
                type="text"
                size="small"
                fullWidth
                value={formData.nursing_care2}
                onChange={handleChange}
                sx={{ backgroundColor: 'white' }}
              />
            </Grid>
            <Grid item xs={3} sm={3} md={2} lg={1.5}>
              <Typography style={{ fontSize: '14px' }} className='pt-2 text-end'>
                教育 :
              </Typography>
            </Grid>
            <Grid item xs={7} sm={7} md={3} lg={3}>
              <TextField
                id="education2"
                name="education2"
                type="text"
                size="small"
                fullWidth
                value={formData.education2}
                onChange={handleChange}
                sx={{ backgroundColor: 'white' }}
              />
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
              <Grid container spacing={1} alignItems='center' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 5 } }}>
                <Grid item xs={1} sm={4} md={3} lg={2} className="text-end">
                  <Typography component="div" fontWeight="bold" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16 } }}>
                    義護
                  </Typography>
                </Grid>
              </Grid>
              <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-2' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 15 } }}>
                <Grid item xs={7.5} sm={3} md={8.5} lg={12} className="text-start">
                  <Typography gutterBottom sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14 } }}>
                    生命の保持・情緒の安定
                  </Typography>
                  <TextareaAutosize
                    id="emotional_stability2"
                    name="emotional_stability2"
                    minRows={3}
                    maxRows={100}
                    value={formData.emotional_stability2}
                    className="w-56 sm:w-60 lg:w-96"
                    onChange={handleChange}
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
              <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-2' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 15 } }}>
                <Grid item xs={7.5} sm={3} md={8.5} lg={12} className="text-start">
                  <Typography gutterBottom sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 12 } }}>
                    関する視点身体的発達に,関する視点社会的発達に,関する視点精神的発達に
                  </Typography>
                  <TextareaAutosize
                    id="perspectives_on_physical2"
                    name="perspectives_on_physical2"
                    minRows={3}
                    maxRows={100}
                    value={formData.perspectives_on_physical2}
                    className="w-56 sm:w-60 lg:w-96"
                    onChange={handleChange}
                    style={{ border: '1px solid gray', borderRadius: '4px' }}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={6}>
              <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-2 ' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 5 } }}>
                <Grid item xs={7.5} sm={7} md={8.5} lg={12} className="text-start">
                  <Typography gutterBottom sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 12 } }}>
                    食育
                  </Typography>
                  <TextareaAutosize
                    id="food_education2"
                    name="food_education2"
                    minRows={3}
                    maxRows={100}
                    value={formData.food_education2}
                    className="w-56 sm:w-60 lg:w-96"
                    onChange={handleChange}
                    style={{ border: '1px solid gray', borderRadius: '4px' }}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-5 pb-5' ></Grid>

        </Grid>

        <Divider sx={{ borderColor: 'darkgrey', borderWidth: '2px' }} />
        {/* End Box 2 */}

        {/* Start Box 3*/}
        <Grid container spacing={1} className='pt-5' >
          <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 1, md: 1 }} className=' pt-5' >
            <Grid item xs={2} sm={1.5} md={3} lg={1.5} className="text-end">
              <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, mt: 1 }} >
                期 :
              </Typography>
            </Grid>
            <Grid item xs={2} sm={1.5} md={1} lg={1} >
              <FormControl sx={{ minWidth: 90 }} size="small">
                <InputLabel id="month-select-label">月</InputLabel>
                <Select
                  labelId="month-select-label"
                  id="month5"
                  value={formData.month5}
                  label="月"
                  onChange={(e) => handleSelectChange2(e, 'month5')}
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
            <Grid item xs={2} sm={1.5} md={1} lg={1} >
              <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, mt: 1, ml: { xs: 5, sm: 6.5, md: 8, lg: -1 } }} >
                ~
              </Typography>
            </Grid>
            <Grid item xs={2} sm={1.5} md={1} lg={1} sx={{ ml: { xs: 2, sm: 3, md: 5, lg: -1 } }}>
              <FormControl sx={{ minWidth: 90 }} size="small">
                <InputLabel id="month-select-label">月</InputLabel>
                <Select
                  labelId="month-select-label"
                  id="month6"
                  value={formData.month6}
                  label="月"
                  onChange={(e) => handleSelectChange2(e, 'month6')}
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
              <TextField
                id="nursing_care3"
                name="nursing_care3"
                type="text"
                size="small"
                fullWidth
                value={formData.nursing_care3}
                onChange={handleChange}
                sx={{ backgroundColor: 'white' }}
              />
            </Grid>
            <Grid item xs={3} sm={3} md={2} lg={1.5}>
              <Typography style={{ fontSize: '14px' }} className='pt-2 text-end'>
                教育 :
              </Typography>
            </Grid>
            <Grid item xs={7} sm={7} md={3} lg={3}>
              <TextField
                id="education3"
                name="education3"
                type="text"
                size="small"
                fullWidth
                value={formData.education3}
                onChange={handleChange}
                sx={{ backgroundColor: 'white' }}
              />
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
              <Grid container spacing={1} alignItems='center' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 5 } }}>
                <Grid item xs={1} sm={4} md={3} lg={2} className="text-end">
                  <Typography component="div" fontWeight="bold" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16 } }}>
                    義護
                  </Typography>
                </Grid>
              </Grid>
              <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-2' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 15 } }}>
                <Grid item xs={7.5} sm={3} md={8.5} lg={12} className="text-start">
                  <Typography gutterBottom sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14 } }}>
                    生命の保持・情緒の安定
                  </Typography>
                  <TextareaAutosize
                    id="emotional_stability3"
                    name="emotional_stability3"
                    minRows={3}
                    maxRows={100}
                    value={formData.emotional_stability3}
                    className="w-56 sm:w-60 lg:w-96"
                    onChange={handleChange}
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
              <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-2' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 15 } }}>
                <Grid item xs={7.5} sm={3} md={8.5} lg={12} className="text-start">
                  <Typography gutterBottom sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 12 } }}>
                    関する視点身体的発達に,関する視点社会的発達に,関する視点精神的発達に
                  </Typography>
                  <TextareaAutosize
                    id="perspectives_on_physical3"
                    name="perspectives_on_physical3"
                    minRows={3}
                    maxRows={100}
                    value={formData.perspectives_on_physical3}
                    className="w-56 sm:w-60 lg:w-96"
                    onChange={handleChange}
                    style={{ border: '1px solid gray', borderRadius: '4px' }}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={6}>
              <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-2 ' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 5 } }}>
                <Grid item xs={7.5} sm={7} md={8.5} lg={12} className="text-start">
                  <Typography gutterBottom sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 12 } }}>
                    食育
                  </Typography>
                  <TextareaAutosize
                    id="food_education3"
                    name="food_education3"
                    minRows={3}
                    maxRows={100}
                    value={formData.food_education3}
                    className="w-56 sm:w-60 lg:w-96"
                    onChange={handleChange}
                    style={{ border: '1px solid gray', borderRadius: '4px' }}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-5 pb-5' ></Grid>

        </Grid>

        <Divider sx={{ borderColor: 'darkgrey', borderWidth: '2px' }} />
        {/* End Box 3 */}

        {/* Start Box 4 */}
        <Grid container spacing={1} className='pt-5' >
          <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 1, md: 1 }} className=' pt-5' >
            <Grid item xs={2} sm={1.5} md={3} lg={1.5} className="text-end">
              <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, mt: 1 }} >
                期 :
              </Typography>
            </Grid>
            <Grid item xs={2} sm={1.5} md={1} lg={1} >
              <FormControl sx={{ minWidth: 90 }} size="small">
                <InputLabel id="month-select-label">月</InputLabel>
                <Select
                  labelId="month-select-label"
                  id="month7"
                  value={formData.month7}
                  label="月"
                  onChange={(e) => handleSelectChange2(e, 'month7')}
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
            <Grid item xs={2} sm={1.5} md={1} lg={1} >
              <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, mt: 1, ml: { xs: 5, sm: 6.5, md: 8, lg: -1 } }} >
                ~
              </Typography>
            </Grid>
            <Grid item xs={2} sm={1.5} md={1} lg={1} sx={{ ml: { xs: 2, sm: 3, md: 5, lg: -1 } }}>
              <FormControl sx={{ minWidth: 90 }} size="small">
                <InputLabel id="month-select-label">月</InputLabel>
                <Select
                  labelId="month-select-label"
                  id="month8"
                  value={formData.month8}
                  label="月"
                  onChange={(e) => handleSelectChange2(e, 'month8')}
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
              <TextField
                id="nursing_care4"
                name="nursing_care4"
                type="text"
                size="small"
                fullWidth
                value={formData.nursing_care4}
                onChange={handleChange}
                sx={{ backgroundColor: 'white' }}
              />
            </Grid>
            <Grid item xs={3} sm={3} md={2} lg={1.5}>
              <Typography style={{ fontSize: '14px' }} className='pt-2 text-end'>
                教育 :
              </Typography>
            </Grid>
            <Grid item xs={7} sm={7} md={3} lg={3}>
              <TextField
                id="education4"
                name="education4"
                type="text"
                size="small"
                fullWidth
                value={formData.education4}
                onChange={handleChange}
                sx={{ backgroundColor: 'white' }}
              />
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
              <Grid container spacing={1} alignItems='center' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 5 } }}>
                <Grid item xs={1} sm={4} md={3} lg={2} className="text-end">
                  <Typography component="div" fontWeight="bold" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16 } }}>
                    義護
                  </Typography>
                </Grid>
              </Grid>
              <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-2' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 15 } }}>
                <Grid item xs={7.5} sm={3} md={8.5} lg={12} className="text-start">
                  <Typography gutterBottom sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14 } }}>
                    生命の保持・情緒の安定
                  </Typography>
                  <TextareaAutosize
                    id="emotional_stability4"
                    name="emotional_stability4"
                    minRows={3}
                    maxRows={100}
                    value={formData.emotional_stability4}
                    className="w-56 sm:w-60 lg:w-96"
                    onChange={handleChange}
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
              <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-2' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 15 } }}>
                <Grid item xs={7.5} sm={3} md={8.5} lg={12} className="text-start">
                  <Typography gutterBottom sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 12 } }}>
                    関する視点身体的発達に,関する視点社会的発達に,関する視点精神的発達に
                  </Typography>
                  <TextareaAutosize
                    id="perspectives_on_physical4"
                    name="perspectives_on_physical4"
                    minRows={3}
                    maxRows={100}
                    value={formData.perspectives_on_physical4}
                    className="w-56 sm:w-60 lg:w-96"
                    onChange={handleChange}
                    style={{ border: '1px solid gray', borderRadius: '4px' }}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={6}>
              <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-2 ' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 5 } }}>
                <Grid item xs={7.5} sm={7} md={8.5} lg={12} className="text-start">
                  <Typography gutterBottom sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 12 } }}>
                    食育
                  </Typography>
                  <TextareaAutosize
                    id="food_education4"
                    name="food_education4"
                    minRows={3}
                    maxRows={100}
                    value={formData.food_education4}
                    className="w-56 sm:w-60 lg:w-96"
                    onChange={handleChange}
                    style={{ border: '1px solid gray', borderRadius: '4px' }}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-5 pb-5' ></Grid>

        </Grid>

        <Divider sx={{ borderColor: 'darkgrey', borderWidth: '2px' }} />
        {/* End Box 4 */}

        <div className="mt-auto">
          <Grid container justifyContent="center" spacing={2} className='pt-12' sx={{ bottom: 0, width: '100%', backgroundColor: 'inherit', paddingBottom: '10px' }}>
            <Grid item>
              <Button variant="contained" href="/report/annualplan" size='medium' className='text-center' startIcon={<ArrowBackIcon />} color="warning">
                <Typography component="div" style={{ color: 'white', alignItems: 'center' }}>
                  戻る
                </Typography>
              </Button>
            </Grid>
            <Grid item>
              <Button variant="contained" href="#" size='medium' className='text-center' startIcon={<SaveIcon />} color="success" onClick={handleSubmit}>
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

export default AnnualplanAdd;
