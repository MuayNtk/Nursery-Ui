import { Button, Card, Grid, MenuItem, Select, TextField, TextareaAutosize, Typography } from "@mui/material";
import ContentMain from "../content/Content";
// import SaveIcon from '@mui/icons-material/Save';
import { SetStateAction, useState } from "react";


export default function OverallPlanAdd() {
  const [selectedOption, setSelectedOption] = useState('');

  const handleDropdownChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setSelectedOption(event.target.value);
  };

  return (

    <>
      <ContentMain className="flex flex-col min-h-screen">
        {/* start grid  全体的な計画*/}
        <Grid item xs={12} sm={12} md={12} lg={12} className='pt-5' >
          <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, fontWeight: 'bold' }} className='flex justify-start h-10 pt-2 pl-5' >
            全体的な計画
          </Typography>
        </Grid>
        {/* End grid  全体的な計画*/}

        {/* Start 全体的な計画 and 家庭・地域との連携  */}
        <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-5 pl-10">
          <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, }} className=''>
            保育の目標
          </Typography>
          {/* grid 1-1 */}
          <Grid item xs={8} sm={8} md={3} lg={3} >
              <TextareaAutosize
              className="w-full"
                  id="goalsofchildcare"
                  name="goalsofchildcare"
                  minRows={3.5} maxRows={100} 
                  style={{ border: '1px solid gray', borderRadius: '4px' }}
                />
          </Grid>
          <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, }} className='lg:pl-16'>
            家庭・地域との連携
          </Typography>
          {/* grid 1-2 */}
          <Grid item xs={7} sm={3} md={3} lg={3} sx={{ marginLeft: { xs: 1, sm: 1, md: 2, lg: 1, } }}>
            <TextareaAutosize className="w-full" id="familiesandcommunities" name="familiesandcommunities" minRows={3.5} maxRows={100} 
                  style={{ border: '1px solid gray', borderRadius: '4px' }} />
          </Grid>
        </Grid>
        {/* End 全体的な計画 and 家庭・地域との連携 */}


        {/* start grid  dropdown */}
        <Grid item xs={12} sm={12} md={12} lg={11.6} className="pt-3">
          <div className="flex justify-start w-9 h-9" >
            <Select value={selectedOption} onChange={handleDropdownChange} sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16 } }}>
              <MenuItem value="1">1歳</MenuItem>
              <MenuItem value="2">2歳</MenuItem>
              <MenuItem value="3">3歳</MenuItem>
              <MenuItem value="4">4歳</MenuItem>
              <MenuItem value="5">5歳</MenuItem>
            </Select>
          </div>

          <div className="pt-3">
            {selectedOption === '' && (
              <Typography
                component="div"
                sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, fontWeight: 'bold',}}
                className='flex justify-start h-11 pt-3 pl-5'
                bgcolor={"#CCF0FD"}>
                選んでください歳
              </Typography>
            )}
            {selectedOption === '1' && (
              <Typography
                component="div"
                sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, fontWeight: 'bold' }}
                className='flex justify-start h-10 pt-2 pl-5'
                bgcolor={"#CCF0FD"}>
                1歳
              </Typography>
            )}
            {selectedOption === '2' && (
              <Typography
                component="div"
                sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, fontWeight: 'bold' }}
                className='flex justify-start h-10 pt-2 pl-5'
                bgcolor={"#CCF0FD"}>
                2歳
              </Typography>
            )}
            {selectedOption === '3' && (
              <Typography
                component="div"
                sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, fontWeight: 'bold' }}
                className='flex justify-start h-10 pt-2 pl-5'
                bgcolor={"#CCF0FD"}>
                3歳
              </Typography>
            )}
            {selectedOption === '4' && (
              <Typography
                component="div"
                sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, fontWeight: 'bold' }}
                className='flex justify-start h-10 pt-2 pl-5'
                bgcolor={"#CCF0FD"}>
                4歳
              </Typography>
            )}
            {selectedOption === '5' && (
              <Typography
                component="div"
                sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, fontWeight: 'bold' }}
                className='flex justify-start h-10 pt-2 pl-5'
                bgcolor={"#CCF0FD"}>
                5歳
              </Typography>
            )}
          </div>
        </Grid>
        {/* End grid  dropdown */}

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
          <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, marginLeft: { xs: 1, sm: 1, md: 2, lg: 1, } }} >
            養護
          </Typography>
          <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, },  marginLeft: { xs: 12, sm: 18, md: 25, lg: 45, }}} >
            教育
          </Typography>
        </Grid>

       
        {/* start grid  養護*/}
        <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-3 pl-20">
          <Grid item xs={5} sm={5} md={4} lg={4} className="" sx={{ marginLeft: { xs: 1, sm: 1, md: 2, lg: 1, } }}>
            <TextareaAutosize id="maintenance" name="maintenance" minRows={3.5} maxRows={100} 
            className="w-full " 
            style={{ border: '1px solid gray', borderRadius: '4px' }} />
          </Grid>
          <Grid item xs={5} sm={5} md={4} lg={4} className="" sx={{ marginLeft: { xs: 1, sm: 1, md: 2, lg: 5, } }}>
            <TextareaAutosize id="educate" name="educate" minRows={3.5} maxRows={100} 
            className="w-full  " 
            style={{ border: '1px solid gray', borderRadius: '4px' }} />
          </Grid>
        </Grid>
        {/* End grid  養護*/}


       
      

        {/* Start Card */}
        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-10 pl-4' >
          <Card sx={{ bgcolor: "pink", width: 100, height: 30, }}>
            <Typography component='div' className="pt-1" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, fontWeight: 'bold' }}>
              内容
            </Typography>
          </Card>
        </Grid>
        {/* End Card */}


        <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-8 pl-14">
          <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, }} >
            教育
          </Typography>
        </Grid>

        <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-8 pl-16">
          <Typography component="div" sx={{ color: 'black', fontSize: { xs: 8, sm: 11, md: 11, lg: 16, }, }} >
            身体的発達に関する視点「社会的発達に関する視点 精神的発達に関する視点
          </Typography>
        </Grid>

        <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-10 pl-24">
          <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, }} >
            健康
          </Typography>
          <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, },marginLeft: { xs: 1, sm: 15, md: 33, lg: 48, } }} >
            人間関係
          </Typography>
        </Grid>
        {/* start grid  健康*/}
        <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-3 pl-20">
          <Grid item xs={4} sm={4} md={5} lg={4} className="" sx={{ marginLeft: { xs: 1, sm: 1, md: 2, lg: 1, } }}>
            <TextareaAutosize id="healthy" name="healthy" minRows={3.5} maxRows={100} className="w-full " style={{ border: '1px solid gray', borderRadius: '4px' }}/>
          </Grid>
          <Grid item xs={4} sm={4} md={5} lg={4} className="" sx={{ marginLeft: { xs: 1, sm: 1, md: 2, lg: 7, } }}>
            <TextareaAutosize id="relationships" name="relationships" minRows={3.5} maxRows={100} className="w-full " style={{ border: '1px solid gray', borderRadius: '4px' }}/>
          </Grid>
        </Grid>
        
        <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-10 pl-24">
          <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, }} >
          環境
          </Typography>
          <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, },marginLeft: { xs: 1, sm: 15, md: 33, lg: 48, } }} >
          言葉
          </Typography>
        </Grid>
        {/* start grid  健康*/}
        <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-3 pl-20">
          <Grid item xs={4} sm={4} md={5} lg={4} className="" sx={{ marginLeft: { xs: 1, sm: 1, md: 2, lg: 1, } }}>
            <TextareaAutosize id="healthy" name="healthy" minRows={3.5} maxRows={100} className="w-full " style={{ border: '1px solid gray', borderRadius: '4px' }}/>
          </Grid>
          <Grid item xs={4} sm={4} md={5} lg={4} className="" sx={{ marginLeft: { xs: 1, sm: 1, md: 2, lg: 7, } }}>
            <TextareaAutosize id="relationships" name="relationships" minRows={3.5} maxRows={100} className="w-full " style={{ border: '1px solid gray', borderRadius: '4px' }}/>
          </Grid>
        </Grid>
        {/* End grid  健康*/}

        <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-10 pl-24">
          <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, }} >
          表現
          </Typography>
          <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, },marginLeft: { xs: 1, sm: 15, md: 33, lg: 48, } }} >
          食育
          </Typography>
        </Grid>
        {/* start grid  健康*/}
        <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-3 pl-20">
          <Grid item xs={4} sm={4} md={5} lg={4} className="" sx={{ marginLeft: { xs: 1, sm: 1, md: 2, lg: 1, } }}>
            <TextareaAutosize id="healthy" name="healthy" minRows={3.5} maxRows={100} className="w-full " style={{ border: '1px solid gray', borderRadius: '4px' }}/>
          </Grid>
          <Grid item xs={4} sm={4} md={5} lg={4} className="" sx={{ marginLeft: { xs: 1, sm: 1, md: 2, lg: 7, } }}>
            <TextareaAutosize id="relationships" name="relationships" minRows={3.5} maxRows={100} className="w-full " style={{ border: '1px solid gray', borderRadius: '4px' }}/>
          </Grid>
        </Grid>
        {/* End grid  健康*/}



       
        

        <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-8 ">
          <Grid item xs={4} sm={3} md={3} lg={3} className="" sx={{ marginLeft: { xs: 1.5, sm: 4, md: 2, lg: -4.5, } }}>
            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, }} >
              安全 健康及び
            </Typography>
          </Grid>
          <Grid item xs={4} sm={3} md={3} lg={3} className="" sx={{ marginLeft: { xs: -3, sm: -1, md: 2, lg: -2, } }}>
            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, marginLeft: { xs: 1, sm: 1, md: 2, lg: 1, } }} >
              子育て支援
            </Typography>
          </Grid>
          <Grid item xs={4} sm={3} md={3} lg={3} className="" sx={{ marginLeft: { xs: -1, sm: 1, md: 2, lg: 1.5, } }}>
            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, marginLeft: { xs: 1, sm: 1, md: 2, lg: 1, } }} >
              速携小学校との
            </Typography>
          </Grid>

        </Grid>
        {/* start grid   安全 健康及び/子育て支援/速携小学校との*/}
        <Grid container spacing={3} justifyContent='start' alignItems='center' className="pt-3 pl-10">
          <Grid item xs={4} sm={3} md={3} lg={3} className="" sx={{ marginLeft: { xs: -1, sm: 1, md: 2, lg: 1, } }}>
            <TextField className='w-full ' id="safetyandhealth" name="safetyandhealth" label="" type="text" size='small' style={{ backgroundColor: "white", }} />
          </Grid>
          <Grid item xs={4} sm={3} md={3} lg={3} className="" sx={{ marginLeft: { xs: -1, sm: 1, md: 2, lg: 1, } }}>
            <TextField className='w-full ' id="childcaresupport" name="childcaresupport" label="" type="text" size='small' style={{ backgroundColor: "white", }} />
          </Grid>
          <Grid item xs={4} sm={3} md={3} lg={3} className="" sx={{ marginLeft: { xs: -1, sm: 1, md: 2, lg: 1, } }}>
            <TextField className='w-full ' id="hayakawaelementaryschool" name="hayakawaelementaryschool" label="" type="text" size='small' style={{ backgroundColor: "white", }} />
          </Grid>
        </Grid>
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

      </ContentMain >
    </>
  );
};
