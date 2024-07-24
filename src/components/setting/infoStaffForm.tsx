import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import ContentMain from '../content/Content';
import Typography from '@mui/material/Typography';
import { Button, FormControl, FormControlLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SaveIcon from '@mui/icons-material/Save';
import { SelectChangeEvent } from '@mui/material';

interface FormData {
  dep: string;
  furigana: string;
  fullname: string;
  gender: string;
  era: string;
  year: string;
  month: string;
  day: string;
}

const InfoStaffForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    dep: '',
    furigana: '',
    fullname: '',
    gender: '',
    era: '',
    year: '',
    month: '',
    day: '',
  });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      gender: value
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
    const currentData = JSON.parse(sessionStorage.getItem('staffData') || '[]');
    sessionStorage.setItem('staffData', JSON.stringify([...currentData, formData]));
    navigate('/infostaff');
  };

  return (
    <ContentMain className="flex flex-col min-h-screen">
      <Grid container spacing={3}>
        {/* Header */}
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom className="pt-14 text-center">
            役員名簿
          </Typography>
        </Grid>

        {/* 所属, 役職 Fields */}
        <Grid container spacing={2} className='pt-7' justifyContent="center">
          <Grid item xs={6} sm={2} md={1}>
            <Typography style={{ fontSize: '14px' }} className='pt-2'>
              フリガナ
            </Typography>
          </Grid>
          <Grid item xs={6} sm={2} md={3}>
            <TextField
              id="furigana"
              type="text"
              size="small"
              fullWidth
              sx={{ backgroundColor: 'white' }}
              value={formData.furigana}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6} sm={2} md={1}>
            <Typography style={{ fontSize: '14px' }} className='pt-2'>
              氏名
            </Typography>
          </Grid>
          <Grid item xs={6} sm={2} md={3}>
            <TextField
              id="fullname"
              type="text"
              size="small"
              fullWidth
              sx={{ backgroundColor: 'white' }}
              value={formData.fullname}
              onChange={handleChange}
            />
          </Grid>
        </Grid>

        {/* 氏名 Field */}
        <Grid container spacing={2} className='pt-7' justifyContent="center">
          <Grid item xs={6} sm={2} md={1}>
            <Typography style={{ fontSize: '14px' }} className='pt-2'>
              役職名
            </Typography>
          </Grid>
          <Grid item xs={6} sm={2} md={3}>
            <TextField
              id="dep"
              type="text"
              size="small"
              fullWidth
              sx={{ backgroundColor: 'white' }}
              value={formData.dep}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6} sm={2} md={1}></Grid>
          <Grid item xs={6} sm={2} md={3}></Grid>
        </Grid>

        {/* 性別 Radio Group */}
        <Grid container spacing={2} className='pt-7'>
          <Grid item xs={6} sm={2} md={1}></Grid>
          <Grid item xs={6} sm={2} md={1}></Grid>
          <Grid item xs={6} sm={2} md={1}>
            <Typography style={{ fontSize: '16px' }} className='pt-2'>
              性別
            </Typography>
          </Grid>
          <Grid item xs={6} sm={2} md={8}>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
              row
              value={formData.gender}
              onChange={handleRadioChange}
            >
              <FormControlLabel value="男" control={<Radio />} label="男" />
              <FormControlLabel value="女" control={<Radio />} label="女" />
            </RadioGroup>
          </Grid>
        </Grid>

        {/* 生年月日 Fields */}
        <Grid container justifyContent="center" spacing={2} className='pt-7'>
          <Grid item xs={6} sm={2} md={1}>
            <Typography style={{ fontSize: '14px' }} className='pt-2'>
              生年月日
            </Typography>
          </Grid>
          <Grid item xs={12} sm={3} md={2}>
            <TextField
              id="era"
              type="text"
              size="small"
              label="令和"
              fullWidth
              sx={{ backgroundColor: 'white' }}
              value={formData.era}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={3} md={2}>
            <TextField
              id="year"
              type="text"
              size="small"
              label="令和"
              fullWidth
              sx={{ backgroundColor: 'white' }}
              value={formData.year}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={3} md={3}>
            <Grid container spacing={1}>
              <Grid item xs={6}>
                <FormControl sx={{ minWidth: 90 }} size="small">
                  <InputLabel id="month-select-label">月</InputLabel>
                  <Select
                    labelId="month-select-label"
                    id="month-select"
                    value={formData.month}
                    label="月"
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
              <Grid item xs={6}>
                <FormControl sx={{ minWidth: 90 }} size="small">
                  <InputLabel id="day-select-label">日</InputLabel>
                  <Select
                    labelId="day-select-label"
                    id="day-select"
                    value={formData.day}
                    label="日"
                    onChange={(e) => handleSelectChange(e, 'day')}
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
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Buttons at the bottom */}
      <div className="mt-auto">
        <Grid container justifyContent="center" spacing={2} className='pt-5' sx={{ bottom: 0, width: '100%', backgroundColor: 'inherit', paddingBottom: '10px' }}>
          <Grid item>
            <Button variant="contained" href="/infostaff" size='medium' className='text-center' startIcon={<ArrowBackIcon />} color="warning">
              <Typography component="div" style={{ color: 'white', alignItems: 'center' }}>
                戻る
              </Typography>
            </Button>
          </Grid>
          <Grid item>
            <Button type="submit" variant="contained" size='medium' className='text-center' startIcon={<SaveIcon />} color="success" onClick={handleSubmit}>
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

export default InfoStaffForm;
