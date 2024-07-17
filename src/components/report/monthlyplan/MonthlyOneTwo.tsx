import { Button, Card, Grid, TextareaAutosize, Typography } from "@mui/material";
import SaveIcon from '@mui/icons-material/Save';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function MonthlyOneTwo() {


  return (

    <>
      {/* Start 施設長 Grid  */}
      <Grid container spacing={1} justifyContent='start'className="pt-4">
        <Grid item xs={3} sm={2} md={2} lg={2}>
          <Typography component="div" sx={{  fontSize: { xs: 11, sm: 11, md: 11, lg: 14, } }} className="text-end">
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
      <Grid container spacing={1} justifyContent='start'  className="pt-4  ">
        <Grid item xs={3} sm={2} md={1} lg={2} >
          <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14, }, }} className="text-end" >
            主任 :
          </Typography>
        </Grid>
        <Grid item xs={3} sm={2} md={1} lg={2} >
          <Typography component="div" sx={{  fontSize: { xs: 11, sm: 11, md: 11, lg: 14, }, fontWeight: 'bold', }} >
            渡部　史朗
          </Typography>
        </Grid>
       
      </Grid >
      {/* End 主任 Grid */}

      {/* Start 担任 Grid */}
      <Grid container spacing={1} justifyContent='start'  className="pt-4  ">
        <Grid item xs={3} sm={2} md={1} lg={2}>
          <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14, }, }}  className="text-end ">
            担任 :
          </Typography>
        </Grid>
        <Grid item xs={3} sm={2} md={1} lg={2} >
          <Typography component="div" sx={{fontSize: { xs: 11, sm: 11, md: 11, lg: 14, }, fontWeight: 'bold', }} >
            中川　康嘉
          </Typography>
        </Grid>
      </Grid >
      {/* End 担任 Grid */}


      {/* start grid  指導計画は食育の内容を含むこと*/}
      <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-5 ">
        <Grid item xs={12} sm={12} md={12} lg={12} className="" >
          <Typography
            component="div"
            sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, fontWeight: 'bold', }}
            className='flex justify-start h-11 pt-3 pl-5'
            bgcolor={"#CCF0FD"}
          >
            指導計画は食育の内容を含むこと
          </Typography>
        </Grid>
      </Grid>
      {/* End grid  指導計画は食育の内容を含むこと*/}

      <Grid container spacing={2} className="pt-2">
        <Grid item xs={12} md={6} >
          <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-2'  sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 7 } }}>
            <Grid item xs={7.5} sm={3} md={8.5} lg={12}>
              <Typography  gutterBottom sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14 } }}>
              生活する姿子どもの
              </Typography>
              <TextareaAutosize
                id="health-safety-input"
                name="health-safety-input"
                minRows={3}
                maxRows={100}
                className="w-56 sm:w-60 lg:w-96"
                style={{ border: '1px solid gray', borderRadius: '4px' }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-2 '  sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: -3} }}>
            <Grid item xs={7.5} sm={7} md={8.5} lg={12}>
              <Typography  gutterBottom sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14 } }}>
              健康・安全
              </Typography>
              <TextareaAutosize
                id="cooperation-input"
                name="cooperation-input"
                minRows={3}
                maxRows={100}
                className="w-56 sm:w-60 lg:w-96"
                style={{ border: '1px solid gray', borderRadius: '4px' }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid container spacing={2} className="pt-2">
        <Grid item xs={12} md={6} >
          <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-2'  sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 7 } }}>
            <Grid item xs={7.5} sm={3} md={8.5} lg={12}>
              <Typography  gutterBottom sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14 } }}>
              連携家庭・地域との
              </Typography>
              <TextareaAutosize
                id="health-safety-input"
                name="health-safety-input"
                minRows={3}
                maxRows={100}
                className="w-56 sm:w-60 lg:w-96"
                style={{ border: '1px solid gray', borderRadius: '4px' }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-2 '  sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: -3} }}>
            <Grid item xs={7.5} sm={7} md={8.5} lg={12}>
              <Typography  gutterBottom sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14 } }}>
              行事
              </Typography>
              <TextareaAutosize
                id="cooperation-input"
                name="cooperation-input"
                minRows={3}
                maxRows={100}
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
          <Grid container spacing={1}  alignItems='center' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 5 } }}>
            <Grid item xs={1} sm={4} md={3} lg={1} className="text-end">
              <Typography component="div" fontWeight="bold" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16 } }}>
                義護
              </Typography>
            </Grid>
          </Grid>
          <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-2'  sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 7 } }}>
            <Grid item xs={7.5} sm={3} md={8.5} lg={12}>
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
        <Grid item xs={12} md={6}>
          <Grid container spacing={1} justifyContent='start' alignItems='center' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: -3 } }}>
            <Grid item xs={1} sm={4} md={3} lg={1} className="text-end">
              <Typography component="div" fontWeight="bold" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16 } }}>
                教育
              </Typography>
            </Grid>
          </Grid>
          <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-2 '  sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: -3} }}>
            <Grid item xs={7.5} sm={7} md={8.5} lg={12}>
              <Typography  gutterBottom sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14 } }}>
              健康・人間開係・環境・言・表現
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

      {/* start grid  子どもとの関わり方(保育士等の育みたい内容)*/}
      <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-5 ">
        <Grid item xs={12} sm={12} md={12} lg={12} className="" >
          <Typography
            component="div"
            sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, fontWeight: 'bold', }}
            className='flex justify-start h-11 pt-3 pl-5'
            bgcolor={"#CCF0FD"}>
            子どもとの関わり方(保育士等の育みたい内容)
          </Typography>
        </Grid>
      </Grid>
      {/* End grid  子どもとの関わり方(保育士等の育みたい内容)*/}

      <Grid container spacing={2} className="pt-5" justifyContent='center'>

        <Grid item xs={12} md={6} >
          <Grid container spacing={1}  alignItems='center' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 5 } }}>
            <Grid item xs={1} sm={4} md={3} lg={1} className="text-end">
              <Typography component="div" fontWeight="bold" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16 } }}>
                義護
              </Typography>
            </Grid>
          </Grid>
          <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-2'  sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 7 } }}>
            <Grid item xs={7.5} sm={3} md={8.5} lg={12}>
              <Typography  gutterBottom sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14 } }}>
              生命の保持情緒の安
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
        <Grid item xs={12} md={6}>
          <Grid container spacing={1} justifyContent='start' alignItems='center' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: -3 } }}>
            <Grid item xs={1} sm={4} md={3} lg={1} className="text-end">
              <Typography component="div" fontWeight="bold" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16 } }}>
                教育
              </Typography>
            </Grid>
          </Grid>
          <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-2 '  sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: -3} }}>
            <Grid item xs={7.5} sm={7} md={8.5} lg={12}>
              <Typography  gutterBottom sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14 } }}>
              健康・人間閱係・環境・言葉・表現
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
     

      {/* start grid  環境づくり予想される子どもの活動配慮・援助*/}
      <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-5 ">
        <Grid item xs={12} sm={12} md={12} lg={12} className="" >
          <Typography
            component="div"
            sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, fontWeight: 'bold', }}
            className='flex justify-start h-11 pt-3 pl-5'
            bgcolor={"#CCF0FD"}>
            環境づくり予想される子どもの活動配慮・援助
          </Typography>
        </Grid>
      </Grid>
      {/* End grid  環境づくり予想される子どもの活動配慮・援助*/}

      <Grid container spacing={2} className="pt-5" justifyContent='start'>

        <Grid item xs={12} md={6} >
          <Grid container spacing={1}  alignItems='center' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 5 } }}>
            <Grid item xs={1} sm={4} md={3} lg={1} className="text-end">
              <Typography component="div" fontWeight="bold" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16 } }}>
                義護
              </Typography>
            </Grid>
          </Grid>
          <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-2'  sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 7 } }}>
            <Grid item xs={7.5} sm={3} md={8.5} lg={12}>
              <Typography  gutterBottom sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14 } }}>
              生命の保持情緒の安
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
      
      {/* Start 教育 Grid  */}
      <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-5">
        <Grid item xs={2} sm={1.5} md={1} lg={2} sx={{ ml: { xs: 5, sm: 5, md: 5, lg: 4 } }}>
          <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, fontWeight: 'bold' } }} >
            教育
          </Typography>
        </Grid>
      </Grid >
      {/* End 教育 Grid */}
      <Grid container spacing={2} className="pt-2">
        <Grid item xs={12} md={6} >
          <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-2'  sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 7 } }}>
            <Grid item xs={7.5} sm={3} md={8.5} lg={12}>
              <Typography  gutterBottom sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14 } }}>
              健康・人間閱係・環境・言葉・表現
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
        <Grid item xs={12} md={6}>
          <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-2 '  sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: -3} }}>
            <Grid item xs={7.5} sm={7} md={8.5} lg={12}>
              <Typography  gutterBottom sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14 } }}>
              個別対応
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
      <Grid container spacing={2} className="pt-2">
        <Grid item xs={12} md={6} >
          <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-2'  sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 7 } }}>
            <Grid item xs={7.5} sm={3} md={8.5} lg={12}>
              <Typography  gutterBottom sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14 } }}>
              組運営
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
        <Grid item xs={12} md={6}>
          <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-2 '  sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: -3} }}>
            <Grid item xs={7.5} sm={7} md={8.5} lg={12}>
              <Typography  gutterBottom sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14 } }}>
              評価・反省
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
    </>
  );
};
