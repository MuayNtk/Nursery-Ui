import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Card, Grid, MenuItem, Select, TextField, TextareaAutosize, Typography } from "@mui/material";
import ContentMain from "../content/Content";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SaveIcon from '@mui/icons-material/Save';
import { SelectChangeEvent } from '@mui/material';

interface FormData {
  pid: string;
  age: string;
  goalsOfChildcare: string;
  familiesAndCommunities: string;
  maintenance: string;
  educate: string;
  healthy: string;
  relationships: string;
  healthy2: string;
  relationships2: string;
  healthy3: string;
  relationships3: string;
  safetyandhealth: string;
  childcaresupport: string;
  hayakawaelementaryschool: string;
}

const OverallPlanAdd: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    pid: '',
    age: '',
    goalsOfChildcare: '',
    familiesAndCommunities: '',
    maintenance: '',
    educate: '',
    healthy: '',
    relationships: '',
    healthy2: '',
    relationships2: '',
    healthy3: '',
    relationships3: '',
    safetyandhealth: '',
    childcaresupport: '',
    hayakawaelementaryschool: '',
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Save data to sessionStorage
    const currentData = JSON.parse(sessionStorage.getItem('overallplanData') || '[]');
    sessionStorage.setItem('overallplanData', JSON.stringify([...currentData, formData]));
    // Remove old pid and set new pid
    sessionStorage.setItem('lastPid', JSON.stringify(parseInt(formData.pid, 10) + 1));
    navigate('/report/overallplan');
  };

  return (
    <ContentMain className="flex flex-col min-h-screen">
      <form onSubmit={handleSubmit}>
        <Grid item xs={12} className="pt-3">
          <div className="flex justify-start w-9 h-9">
            <Select
              id='age'
              name="age"
              value={formData.age}
              onChange={handleSelectChange}
              sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14 } }}
            >
              <MenuItem value="0 歳">0 歳</MenuItem>
              <MenuItem value="1 歳">1 歳</MenuItem>
              <MenuItem value="2 歳">2 歳</MenuItem>
              <MenuItem value="3 歳">3 歳</MenuItem>
              <MenuItem value="4 歳">4 歳</MenuItem>
              <MenuItem value="5 歳">5 歳</MenuItem>
            </Select>
          </div>
          <div className="pt-3">
            {formData.age === '' && (
              <Typography
                component="div"
                sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, fontWeight: 'bold' }}
                className='flex justify-start h-11 pt-3 pl-5'
                bgcolor={"#CCF0FD"}
              >
                選んでください歳
              </Typography>
            )}
            {formData.age && (
              <Typography
                component="div"
                sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, fontWeight: 'bold' }}
                className='flex justify-start h-10 pt-2 pl-5'
                bgcolor={"#CCF0FD"}
              >
                {`${formData.age}`}
              </Typography>
            )}
          </div>
        </Grid>
        {/* End grid  dropdown */}

        {/* start grid  全体的な計画*/}
        <Grid item xs={12} sm={12} md={12} lg={12} className='pt-5' >
          <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, fontWeight: 'bold' }} className='flex justify-start h-10 pt-2 pl-5' >
            全体的な計画
          </Typography>
        </Grid>
        {/* End grid  全体的な計画*/}

        {/* Start 全体的な計画 and 家庭・地域との連携  */}
        <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-5 pl-10">
          <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14, }, }} className=''>
            保育の目標
          </Typography>
          {/* grid 1-1 */}
          <Grid item xs={8} sm={8} md={3} lg={3} >
            <TextareaAutosize
              className="w-full"
              id="goalsOfChildcare"
              name="goalsOfChildcare"
              minRows={3.5} maxRows={100}
              onChange={handleChange}
              style={{ border: '1px solid gray', borderRadius: '4px' }}
            />
          </Grid>
          <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14, }, }} className='lg:pl-16'>
            家庭・地域との連携
          </Typography>
          {/* grid 1-2 */}
          <Grid item xs={7} sm={3} md={3} lg={3} sx={{ marginLeft: { xs: 1, sm: 1, md: 2, lg: 1, } }}>
            <TextareaAutosize
              className="w-full"
              id="familiesAndCommunities"
              name="familiesAndCommunities"
              minRows={3.5}
              maxRows={100}
              onChange={handleChange}
              style={{ border: '1px solid gray', borderRadius: '4px' }}
            />
          </Grid>
        </Grid>
        {/* End 全体的な計画 and 家庭・地域との連携 */}

        {/* Start Card */}
        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-10 pl-4' >
          <Card sx={{ bgcolor: "pink", width: 100, height: 30, }}>
            <Typography component='div' className="pt-1" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, fontWeight: 'bold' }}>
              既往症
            </Typography>
          </Card>
        </Grid>
        {/* End Card */}

        <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-4 pl-24">
          <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14, }, marginLeft: { xs: 1, sm: 1, md: 2, lg: 1, } }} >
            養護
          </Typography>
          <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14, }, marginLeft: { xs: 12, sm: 18, md: 25, lg: 45, } }} >
            教育
          </Typography>
        </Grid>

        {/* start grid  養護*/}
        <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-3 pl-20">
          <Grid item xs={5} sm={5} md={4} lg={4} className="" sx={{ marginLeft: { xs: 1, sm: 1, md: 2, lg: 1, } }}>
            <TextareaAutosize
              id="maintenance" name="maintenance"
              minRows={3.5}
              maxRows={100}
              className="w-full"
              onChange={handleChange}
              style={{ border: '1px solid gray', borderRadius: '4px' }}
            />
          </Grid>
          <Grid item xs={5} sm={5} md={4} lg={4} className="" sx={{ marginLeft: { xs: 1, sm: 1, md: 2, lg: 5, } }}>
            <TextareaAutosize
              id="educate"
              name="educate"
              minRows={3.5}
              maxRows={100}
              className="w-full"
              onChange={handleChange}
              style={{ border: '1px solid gray', borderRadius: '4px' }}
            />
          </Grid>
        </Grid>
        {/* End grid  養護*/}

        {/* Start Card */}
        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-10 pl-4' >
          <Card sx={{ bgcolor: "pink", width: 100, height: 30, }}>
            <Typography component='div' className="pt-1" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14, }, fontWeight: 'bold' }}>
              内容
            </Typography>
          </Card>
        </Grid>
        {/* End Card */}

        <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-8 pl-14">
          <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14, }, }} >
            教育
          </Typography>
        </Grid>

        <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-8 pl-16">
          <Typography component="div" sx={{ fontSize: { xs: 8, sm: 11, md: 11, lg: 14, }, }} >
            身体的発達に関する視点「社会的発達に関する視点 精神的発達に関する視点
          </Typography>
        </Grid>

        <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-10 pl-24">
          <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14, }, }} >
            健康
          </Typography>
          <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14, }, marginLeft: { xs: 1, sm: 15, md: 33, lg: 48, } }} >
            人間関係
          </Typography>
        </Grid>

        {/* start grid  健康*/}
        <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-3 pl-20">
          <Grid item xs={4} sm={4} md={5} lg={4} className="" sx={{ marginLeft: { xs: 1, sm: 1, md: 2, lg: 1, } }}>
            <TextareaAutosize
              id="healthy"
              name="healthy"
              minRows={3.5}
              maxRows={100}
              className="w-full"
              onChange={handleChange}
              style={{ border: '1px solid gray', borderRadius: '4px' }}
            />
          </Grid>
          <Grid item xs={4} sm={4} md={5} lg={4} className="" sx={{ marginLeft: { xs: 1, sm: 1, md: 2, lg: 7, } }}>
            <TextareaAutosize
              id="relationships"
              name="relationships"
              minRows={3.5}
              maxRows={100}
              className="w-full"
              onChange={handleChange}
              style={{ border: '1px solid gray', borderRadius: '4px' }}
            />
          </Grid>
        </Grid>

        <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-7 pl-24">
          <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14, }, }} >
            環境
          </Typography>
          <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14, }, marginLeft: { xs: 1, sm: 15, md: 33, lg: 48, } }} >
            言葉
          </Typography>
        </Grid>

        {/* start grid  健康*/}
        <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-3 pl-20">
          <Grid item xs={4} sm={4} md={5} lg={4} className="" sx={{ marginLeft: { xs: 1, sm: 1, md: 2, lg: 1, } }}>
            <TextareaAutosize
              id="healthy2"
              name="healthy2"
              minRows={3.5} maxRows={100}
              className="w-full"
              onChange={handleChange}
              style={{ border: '1px solid gray', borderRadius: '4px' }}
            />
          </Grid>
          <Grid item xs={4} sm={4} md={5} lg={4} className="" sx={{ marginLeft: { xs: 1, sm: 1, md: 2, lg: 7, } }}>
            <TextareaAutosize
              id="relationships2"
              name="relationships2"
              minRows={3.5} maxRows={100}
              className="w-full"
              onChange={handleChange}
              style={{ border: '1px solid gray', borderRadius: '4px' }}
            />
          </Grid>
        </Grid>
        {/* End grid  健康*/}

        <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-7 pl-24">
          <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14, }, }} >
            表現
          </Typography>
          <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14, }, marginLeft: { xs: 1, sm: 15, md: 33, lg: 48, } }} >
            食育
          </Typography>
        </Grid>

        {/* start grid  健康*/}
        <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-3 pl-20">
          <Grid item xs={4} sm={4} md={5} lg={4} className="" sx={{ marginLeft: { xs: 1, sm: 1, md: 2, lg: 1, } }}>
            <TextareaAutosize
              id="healthy3"
              name="healthy3"
              minRows={3.5} maxRows={100}
              className="w-full"
              onChange={handleChange}
              style={{ border: '1px solid gray', borderRadius: '4px' }}
            />
          </Grid>
          <Grid item xs={4} sm={4} md={5} lg={4} className="" sx={{ marginLeft: { xs: 1, sm: 1, md: 2, lg: 7, } }}>
            <TextareaAutosize
              id="relationships3"
              name="relationships3"
              minRows={3.5} maxRows={100}
              className="w-full"
              onChange={handleChange}
              style={{ border: '1px solid gray', borderRadius: '4px' }}
            />
          </Grid>
        </Grid>
        {/* End grid  健康*/}

        <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-8 ">
          <Grid item xs={4} sm={3} md={3} lg={3} className="" sx={{ marginLeft: { xs: 1.5, sm: 4, md: 2, lg: -4.5, } }}>
            <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14, }, }} >
              安全 健康及び
            </Typography>
          </Grid>
          <Grid item xs={4} sm={3} md={3} lg={3} className="" sx={{ marginLeft: { xs: -3, sm: -1, md: 2, lg: -2, } }}>
            <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14, }, marginLeft: { xs: 1, sm: 1, md: 2, lg: 1, } }} >
              子育て支援
            </Typography>
          </Grid>
          <Grid item xs={4} sm={3} md={3} lg={3} className="" sx={{ marginLeft: { xs: -1, sm: 1, md: 2, lg: 1.5, } }}>
            <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14, }, marginLeft: { xs: 1, sm: 1, md: 2, lg: 1, } }} >
              速携小学校との
            </Typography>
          </Grid>
        </Grid>

        {/* start grid 安全 健康及び/子育て支援/速携小学校との */}
        <Grid container spacing={3} justifyContent='start' alignItems='center' className="pt-3 pl-10">
          <Grid item xs={4} sm={3} md={3} lg={3} className="" sx={{ marginLeft: { xs: -1, sm: 1, md: 2, lg: 1, } }}>
            <TextField
              className='w-full'
              id="safetyandhealth"
              name="safetyandhealth"
              type="text" size='small'
              style={{ backgroundColor: "white", }}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={4} sm={3} md={3} lg={3} className="" sx={{ marginLeft: { xs: -1, sm: 1, md: 2, lg: 1, } }}>
            <TextField
              className='w-full'
              id="childcaresupport"
              name="childcaresupport"
              type="text" size='small'
              style={{ backgroundColor: "white", }}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={4} sm={3} md={3} lg={3} className="" sx={{ marginLeft: { xs: -1, sm: 1, md: 2, lg: 1, } }}>
            <TextField
              className='w-full'
              id="hayakawaelementaryschool"
              name="hayakawaelementaryschool"
              type="text" size='small'
              style={{ backgroundColor: "white", }}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
        {/* End grid 安全 健康及び/子育て支援/速携小学校との */}

        {/* Buttons at the bottom */}
        <div className="mt-auto">
          <Grid container justifyContent="center" spacing={2} className='pt-5' sx={{ bottom: 0, width: '100%', backgroundColor: 'inherit', paddingBottom: '10px' }}>
            <Grid item>
              <Button variant="contained" href="/report/overallplan" size='medium' className='text-center' startIcon={<ArrowBackIcon />} color="warning">
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
      </form>
    </ContentMain >
  );
};

export default OverallPlanAdd;
