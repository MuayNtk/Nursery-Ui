import { Button, Card, Grid, TextareaAutosize, Typography } from "@mui/material";
import { useState, useEffect } from 'react';
import SaveIcon from '@mui/icons-material/Save';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router-dom";

interface FormData {
  pid: string;
  selectedOption: string;
  daily_life: string;
  health_safety1: string;
  cooperation: string;
  event1: string;
  emotional_stability1: string;
  health_human1: string;
  emotional_comfort1: string;
  health_human2: string;
  emotional_comfort2: string;
  health_human3: string;
  individual_correspondence: string;
  group_management: string;
  evaluation_and_reflection: string;
}

interface MonthlyOneTwoProps {
  selectedOption: string;
}

const MonthlyOneTwo: React.FC<MonthlyOneTwoProps> = ({ selectedOption }) => {

  const [formData, setFormData] = useState<FormData>({
    pid: '',
    selectedOption: selectedOption,
    daily_life: '',
    health_safety1: '',
    cooperation: '',
    event1: '',
    emotional_stability1: '',
    health_human1: '',
    emotional_comfort1: '',
    health_human2: '',
    emotional_comfort2: '',
    health_human3: '',
    individual_correspondence: '',
    group_management: '',
    evaluation_and_reflection: '',
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

  const handleChange2 = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit2 = (e: React.FormEvent) => {
    e.preventDefault();
    // Save data to sessionStorage
    const currentData = JSON.parse(sessionStorage.getItem('monthlyData1_2') || '[]');
    const updatedData = [...currentData, formData];
    sessionStorage.setItem('monthlyData1_2', JSON.stringify(updatedData));
    // Remove old pid and set new pid
    const nextPid = parseInt(formData.pid, 10) + 1;
    sessionStorage.setItem('lastPid', JSON.stringify(nextPid));
    // Redirect to another page
    navigate('/report/monthlyplan');
  };

  return (
    <>
      <form onSubmit={handleSubmit2}>
        <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14, } }} className="text-start hidden">
          {selectedOption}
        </Typography>

        {/* Start 施設長 Grid  */}
        <Grid container spacing={1} justifyContent='start' className="pt-4">
          <Grid item xs={3} sm={2} md={2} lg={2}>
            <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14, } }} className="text-end">
              施設長 :
            </Typography>
          </Grid>
          <Grid item xs={3} sm={2} md={1} lg={2} >
            <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14, }, fontWeight: 'bold', }} >
              濃部　圭子
            </Typography>
          </Grid>
        </Grid >
        {/* End 施設長 Grid */}

        {/* Start 主任 Grid */}
        <Grid container spacing={1} justifyContent='start' className="pt-4  ">
          <Grid item xs={3} sm={2} md={1} lg={2} >
            <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14, }, }} className="text-end" >
              主任 :
            </Typography>
          </Grid>
          <Grid item xs={3} sm={2} md={1} lg={2} >
            <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14, }, fontWeight: 'bold', }} >
              渡部　史朗
            </Typography>
          </Grid>

        </Grid >
        {/* End 主任 Grid */}

        {/* Start 担任 Grid */}
        <Grid container spacing={1} justifyContent='start' className="pt-4  ">
          <Grid item xs={3} sm={2} md={1} lg={2}>
            <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14, }, }} className="text-end ">
              担任 :
            </Typography>
          </Grid>
          <Grid item xs={3} sm={2} md={1} lg={2} >
            <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14, }, fontWeight: 'bold', }} >
              中川　康嘉
            </Typography>
          </Grid>
        </Grid >
        {/* End 担任 Grid */}

        {/* Start Grid 指導計画は食育の内容を含むこと */}
        <Grid className="mt-5 lg:mt-7" sx={{ ml: { xs: 0, sm: 0, md: 0, lg: -2 } }}>
          <Typography
            component="div"
            sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, backgroundColor: '#CCF0FD', fontWeight: 'bold', pt: { xs: 1.5, sm: 1.5, md: 1.5, lg: 1 } }}
            className='flex justify-start h-10 pt-2 pl-5' >
            指導計画は食育の内容を含むこと
          </Typography>
        </Grid>
        {/* End Grid 指導計画は食育の内容を含むこと */}

        <Grid container spacing={2} className="pt-2">
          <Grid item xs={12} md={6} >
            <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-2' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 7 } }}>
              <Grid item xs={7.5} sm={3} md={8.5} lg={12}>
                <Typography gutterBottom sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14 } }}>
                  生活する姿子どもの
                </Typography>
                <TextareaAutosize
                  id="daily_life"
                  name="daily_life"
                  minRows={3}
                  maxRows={100}
                  onChange={handleChange2}
                  value={formData.daily_life}
                  className="w-56 sm:w-60 lg:w-96"
                  style={{ border: '1px solid gray', borderRadius: '4px' }}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-2 ' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: -3 } }}>
              <Grid item xs={7.5} sm={7} md={8.5} lg={12}>
                <Typography gutterBottom sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14 } }}>
                  健康・安全
                </Typography>
                <TextareaAutosize
                  id="health_safety1"
                  name="health_safety1"
                  minRows={3}
                  maxRows={100}
                  onChange={handleChange2}
                  value={formData.health_safety1}
                  className="w-56 sm:w-60 lg:w-96"
                  style={{ border: '1px solid gray', borderRadius: '4px' }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid container spacing={2} className="pt-2">
          <Grid item xs={12} md={6} >
            <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-2' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 7 } }}>
              <Grid item xs={7.5} sm={3} md={8.5} lg={12}>
                <Typography gutterBottom sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14 } }}>
                  連携家庭・地域との
                </Typography>
                <TextareaAutosize
                  id="cooperation"
                  name="cooperation"
                  minRows={3}
                  maxRows={100}
                  onChange={handleChange2}
                  value={formData.cooperation}
                  className="w-56 sm:w-60 lg:w-96"
                  style={{ border: '1px solid gray', borderRadius: '4px' }}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-2 ' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: -3 } }}>
              <Grid item xs={7.5} sm={7} md={8.5} lg={12}>
                <Typography gutterBottom sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14 } }}>
                  行事
                </Typography>
                <TextareaAutosize
                  id="event1"
                  name="event1"
                  minRows={3}
                  maxRows={100}
                  onChange={handleChange2}
                  value={formData.event1}
                  className="w-56 sm:w-60 lg:w-96"
                  style={{ border: '1px solid gray', borderRadius: '4px' }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/* Start Card ねらい*/}
        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-14 pl-10 flex '  >
          <Card sx={{ bgcolor: "pink", width: 100, height: 30, }} >
            <Typography component='div' className="pt-2 lg:pt-1" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, fontWeight: 'bold', marginLeft: { xs: 4, sm: 4, md: 4, lg: 3, } }}>
              ねらい
            </Typography>
          </Card>
        </Grid>
        {/* End Card ねらい*/}

        <Grid container spacing={2} className="pt-5" justifyContent='center'>

          <Grid item xs={12} md={6} >
            <Grid container spacing={1} alignItems='center' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 5 } }}>
              <Grid item xs={1} sm={4} md={3} lg={1} className="text-end">
                <Typography component="div" fontWeight="bold" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16 } }}>
                  義護
                </Typography>
              </Grid>
            </Grid>
            <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-2' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 7 } }}>
              <Grid item xs={7.5} sm={3} md={8.5} lg={12}>
                <Typography gutterBottom sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14 } }}>
                  生命の保持・情緒の安定
                </Typography>
                <TextareaAutosize
                  id="emotional_stability1"
                  name="emotional_stability1"
                  minRows={3}
                  maxRows={100}
                  onChange={handleChange2}
                  value={formData.emotional_stability1}
                  className="w-56 sm:w-60 lg:w-96"
                  style={{ border: '1px solid gray', borderRadius: '4px' }}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container spacing={1} justifyContent='start' alignItems='center' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: -3 } }}>
              <Grid item xs={1} sm={4} md={3} lg={1} className="text-end">
                <Typography component="div" fontWeight="bold" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16 } }}>
                  教育
                </Typography>
              </Grid>
            </Grid>
            <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-2 ' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: -3 } }}>
              <Grid item xs={7.5} sm={7} md={8.5} lg={12}>
                <Typography gutterBottom sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14 } }}>
                  健康・人間開係・環境・言・表現
                </Typography>
                <TextareaAutosize
                  id="health_human1"
                  name="health_human1"
                  minRows={3}
                  maxRows={100}
                  onChange={handleChange2}
                  value={formData.health_human1}
                  className="w-56 sm:w-60 lg:w-96"
                  style={{ border: '1px solid gray', borderRadius: '4px' }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/* Start Grid 子どもとの関わり方(保育士等の育みたい内容) */}
        <Grid className="mt-5 lg:mt-7" sx={{ ml: { xs: 0, sm: 0, md: 0, lg: -2 } }}>
          <Typography
            component="div"
            sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, backgroundColor: '#CCF0FD', fontWeight: 'bold', pt: { xs: 1.5, sm: 1.5, md: 1.5, lg: 1 } }}
            className='flex justify-start h-10 pt-2 pl-5' >
            子どもとの関わり方(保育士等の育みたい内容)
          </Typography>
        </Grid>
        {/* End Grid 子どもとの関わり方(保育士等の育みたい内容) */}

        <Grid container spacing={2} className="pt-5" justifyContent='center'>
          <Grid item xs={12} md={6} >
            <Grid container spacing={1} alignItems='center' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 5 } }}>
              <Grid item xs={1} sm={4} md={3} lg={1} className="text-end">
                <Typography component="div" fontWeight="bold" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16 } }}>
                  義護
                </Typography>
              </Grid>
            </Grid>
            <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-2' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 7 } }}>
              <Grid item xs={7.5} sm={3} md={8.5} lg={12}>
                <Typography gutterBottom sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14 } }}>
                  生命の保持情緒の安
                </Typography>
                <TextareaAutosize
                  id="emotional_comfort1"
                  name="emotional_comfort1"
                  minRows={3}
                  maxRows={100}
                  onChange={handleChange2}
                  value={formData.emotional_comfort1}
                  className="w-56 sm:w-60 lg:w-96"
                  style={{ border: '1px solid gray', borderRadius: '4px' }}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container spacing={1} justifyContent='start' alignItems='center' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: -3 } }}>
              <Grid item xs={1} sm={4} md={3} lg={1} className="text-end">
                <Typography component="div" fontWeight="bold" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16 } }}>
                  教育
                </Typography>
              </Grid>
            </Grid>
            <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-2 ' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: -3 } }}>
              <Grid item xs={7.5} sm={7} md={8.5} lg={12}>
                <Typography gutterBottom sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14 } }}>
                  健康・人間閱係・環境・言葉・表現
                </Typography>
                <TextareaAutosize
                  id="health_human2"
                  name="health_human2"
                  minRows={3}
                  maxRows={100}
                  onChange={handleChange2}
                  value={formData.health_human2}
                  className="w-56 sm:w-60 lg:w-96"
                  style={{ border: '1px solid gray', borderRadius: '4px' }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/* start grid  環境づくり予想される子どもの活動配慮・援助*/}
        <Grid className="mt-5 lg:mt-7" sx={{ ml: { xs: 0, sm: 0, md: 0, lg: -2 } }}>
          <Typography
            component="div"
            sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, backgroundColor: '#CCF0FD', fontWeight: 'bold', pt: { xs: 1.5, sm: 1.5, md: 1.5, lg: 1 } }}
            className='flex justify-start h-10 pt-2 pl-5' >
            環境づくり予想される子どもの活動配慮・援助
          </Typography>
        </Grid>
        {/* End grid  環境づくり予想される子どもの活動配慮・援助*/}

        <Grid container spacing={2} className="pt-5" justifyContent='start'>
          <Grid item xs={12} md={6} >
            <Grid container spacing={1} alignItems='center' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 5 } }}>
              <Grid item xs={1} sm={4} md={3} lg={1} className="text-end">
                <Typography component="div" fontWeight="bold" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16 } }}>
                  義護
                </Typography>
              </Grid>
            </Grid>
            <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-2' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 7 } }}>
              <Grid item xs={7.5} sm={3} md={8.5} lg={12}>
                <Typography gutterBottom sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14 } }}>
                  生命の保持情緒の安
                </Typography>
                <TextareaAutosize
                  id="emotional_comfort2"
                  name="emotional_comfort2"
                  minRows={3}
                  maxRows={100}
                  onChange={handleChange2}
                  value={formData.emotional_comfort2}
                  className="w-56 sm:w-60 lg:w-96"
                  style={{ border: '1px solid gray', borderRadius: '4px' }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid container spacing={2} className="pt-2">
          <Grid item xs={12} md={6}>
            <Grid container spacing={1} alignItems='center' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 5 } }}>
              <Grid item xs={1} sm={4} md={3} lg={1} className="text-end">
                <Typography component="div" fontWeight="bold" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16 } }}>
                  教育
                </Typography>
              </Grid>
            </Grid>
            <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-2' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 7 } }}>
              <Grid item xs={7.5} sm={3} md={8.5} lg={12}>
                <Typography gutterBottom sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14 } }}>
                  健康・人間閱係・環境・言葉・表現
                </Typography>
                <TextareaAutosize
                  id="health_human3"
                  name="health_human3"
                  minRows={3}
                  maxRows={100}
                  onChange={handleChange2}
                  value={formData.health_human3}
                  className="w-56 sm:w-60 lg:w-96"
                  style={{ border: '1px solid gray', borderRadius: '4px' }}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-8 ' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: -3 } }}>
              <Grid item xs={7.5} sm={7} md={8.5} lg={12}>
                <Typography gutterBottom sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14 } }}>
                  個別対応
                </Typography>
                <TextareaAutosize
                  id="individual_correspondence"
                  name="individual_correspondence"
                  minRows={3}
                  maxRows={100}
                  onChange={handleChange2}
                  value={formData.individual_correspondence}
                  className="w-56 sm:w-60 lg:w-96"
                  style={{ border: '1px solid gray', borderRadius: '4px' }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container spacing={2} className="pt-2">
          <Grid item xs={12} md={6} >
            <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-2' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 7 } }}>
              <Grid item xs={7.5} sm={3} md={8.5} lg={12}>
                <Typography gutterBottom sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14 } }}>
                  組運営
                </Typography>
                <TextareaAutosize
                  id="group_management"
                  name="group_management"
                  minRows={3}
                  maxRows={100}
                  onChange={handleChange2}
                  value={formData.group_management}
                  className="w-56 sm:w-60 lg:w-96"
                  style={{ border: '1px solid gray', borderRadius: '4px' }}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-3' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: -3 } }}>
              <Grid item xs={7.5} sm={7} md={8.5} lg={12}>
                <Typography gutterBottom sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14 } }}>
                  評価・反省
                </Typography>
                <TextareaAutosize
                  id="evaluation_and_reflection"
                  name="evaluation_and_reflection"
                  minRows={3}
                  maxRows={100}
                  onChange={handleChange2}
                  value={formData.evaluation_and_reflection}
                  className="w-56 sm:w-60 lg:w-96"
                  style={{ border: '1px solid gray', borderRadius: '4px' }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <div className="mt-auto">
          <Grid container justifyContent="center" spacing={2} className='pt-12' sx={{ bottom: 0, width: '100%', backgroundColor: 'inherit', paddingBottom: '10px' }}>
            <Grid item>
              <Button variant="contained" href="/report/monthlyplan" size='medium' className='text-center' startIcon={<ArrowBackIcon />} color="warning">
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

export default MonthlyOneTwo;

