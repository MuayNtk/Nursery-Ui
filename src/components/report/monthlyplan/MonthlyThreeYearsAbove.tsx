import { Button, Card, Grid, TextareaAutosize, Typography } from "@mui/material";
import SaveIcon from '@mui/icons-material/Save';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function MonthlyThreeYearsAbove() {


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

      <Grid container spacing={2} className="pt-5" justifyContent='start'>
        <Grid item xs={12} md={6} >
          <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-2'  sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 7 } }}>
            <Grid item xs={7.5} sm={3} md={8.5} lg={12}>
              <Typography  gutterBottom sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14 } }}>
              生活する姿子どもの
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

      <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-10 pl-10 flex '  >
        <Card sx={{ bgcolor: "pink", width: { xs: 100, sm: 280, md: 100, lg: 100 }, height: 30 }}>
          <Typography component='div' className="pt-2 lg:pt-1" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, fontWeight: 'bold', marginLeft: { xs: 4, sm: 4, md: 4, lg: 3, } }}>
          ねらい
          </Typography>
        </Card>
      </Grid>

      <Grid container spacing={2} className="pt-2">
        <Grid item xs={12} md={6} >
          <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-2'  sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 7 } }}>
            <Grid item xs={7.5} sm={3} md={8.5} lg={12}>
              <Typography  gutterBottom sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14 } }}>
              養護
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
              教育
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

      <Grid container spacing={2} className="pt-5" justifyContent='start'>
        <Grid item xs={12} md={6} >
          <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-2'  sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 7 } }}>
            <Grid item xs={7.5} sm={3} md={8.5} lg={12}>
              <Typography  gutterBottom sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14 } }}>
              健康安全
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

      <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-10 pl-10 flex '  >
        <Card sx={{ bgcolor: "pink", width: { xs: 85, sm: 80, md: 100, lg: 130 }, height: 30 }}>
          <Typography component='div' className="pt-2 lg:pt-1" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, fontWeight: 'bold', marginLeft: { xs: 2, sm: 4, md: 4, lg: 3, } }}>
          環境の構成
          </Typography>
        </Card>
      </Grid>

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
              情緒の安定生命の保持
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
              健康人間係環境.言葉表現
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

      <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-10 pl-10 flex '  >
        <Card sx={{ bgcolor: "pink", width: { xs: 85, sm: 80, md: 100, lg: 130 }, height: 30 }}>
          <Typography component='div' className="pt-2 lg:pt-1" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, fontWeight: 'bold', marginLeft: { xs: 2, sm: 4, md: 4, lg: 3, } }}>
          指導の内容
          </Typography>
        </Card>
      </Grid>


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
              情緒の安定生命の保持
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
              健康人間係環境言葉・表現
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


      <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-10 pl-10 flex '  >
        <Card sx={{ bgcolor: "pink", width: { xs: 152, sm: 280, md: 100, lg: 206 }, height: 30 }}>
          <Typography component='div' className="pt-2 lg:pt-1" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, fontWeight: 'bold', marginLeft: { xs: 2, sm: 4, md: 4, lg: 2, } }}>
          予想される子どもの活動
          </Typography>
        </Card>
      </Grid>

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
              情緒の安定生命の保持
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
              健康人間係環境・言葉・表現
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

      <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-10 pl-10 flex '  >
        <Card sx={{ bgcolor: "pink", width: { xs: 145, sm: 145, md: 100, lg: 200 }, height: 30 }}>
          <Typography component='div' className="pt-2 lg:pt-1" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, fontWeight: 'bold', marginLeft: { xs: 2, sm: 4, md: 4, lg: 2, } }}>
          保育士等の園助と配慮
          </Typography>
        </Card>
      </Grid>

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
              情緒の安定生命の保持
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

      <Grid container spacing={2} className="pt-5" justifyContent='center'>
        <Grid item xs={12} md={6} >
          <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-2'  sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 7 } }}>
            <Grid item xs={7.5} sm={3} md={8.5} lg={12}>
              <Typography  gutterBottom sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14 } }}>
              健康人間係環境・言葉表現
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
               组運営·個別刘応
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

      <Grid container spacing={2} className="pt-5" justifyContent='center'>
        <Grid item xs={12} md={6} >
          <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-2'  sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 7 } }}>
            <Grid item xs={7.5} sm={3} md={8.5} lg={12}>
              <Typography  gutterBottom sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14 } }}>
              連携家庭・地域との
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
              行事
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
