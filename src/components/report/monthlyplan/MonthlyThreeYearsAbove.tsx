import { Button, Card, Grid, TextareaAutosize, Typography } from "@mui/material";
import SaveIcon from '@mui/icons-material/Save';

export default function MonthlyThreeYearsAbove() {


  return (

    <>
      {/* Start 施設長 Grid  */}
      <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-5">
        <Grid item xs={2} sm={1.5} md={1} lg={2} sx={{ ml: { xs: 5, sm: 5, md: 5, lg: 5 } }}>
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
        <Grid item xs={2} sm={1.5} md={1} lg={2} sx={{ ml: { xs: 6.5, sm: 6.5, md: 6.5, lg: 7 } }}>
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
        <Grid item xs={2} sm={1.5} md={1} lg={2} sx={{ ml: { xs: 6.5, sm: 6.5, md: 6.5, lg: 7 } }}>
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

      <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-8 pl-24">
        <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, }} >
          生活する姿子どもの
        </Typography>
      </Grid>
      {/* start grid  生活する姿子どもの*/}
      <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-3 pl-20">
        <Grid item xs={8} sm={3} md={3} lg={2} className="" sx={{ marginLeft: { xs: 1, sm: 1, md: 2, lg: 1, } }}>
          <TextareaAutosize id="livingchildren" name="livingchildren" minRows={3.5} maxRows={100}
            className="lg:w-96 md:w-60 "
            style={{ border: '1px solid gray', borderRadius: '4px' }} />
        </Grid>
      </Grid>
      {/* End grid  生活する姿子どもの*/}

      {/* Start Card ねらい*/}
      <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-14 pl-10 flex '  >
        <Card sx={{ bgcolor: "pink", width: 100, height: 30, }} >
          <Typography component='div' className="pt-2 lg:pt-1" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, fontWeight: 'bold', marginLeft: { xs: 4, sm: 4, md: 4, lg: 3, } }}>
            ねらい
          </Typography>
        </Card>
      </Grid>
      {/* End Card ねらい*/}
 {/* Start 健康·安全 Grid */}
 <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-5">
        <Grid item xs={6} sm={6} md={6} lg={6} >
          <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, ml: { xs: 8, sm: 5, md: 12, lg: 11 } }} >
          養護
          </Typography>
        </Grid>
        <Grid item xs={6} sm={6} md={6} lg={6} >
          <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, ml: { xs: 1, sm: 5, md: -1, lg: 3 } }} >
          教育
          </Typography>
        </Grid>
      </Grid>
      {/* End 健康·安全 Grid */}

      {/* Start health-safety-input Grid */}
      <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-3' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 5 } }}>
        <Grid item xs={4} sm={4} md={4} lg={4} sx={{ ml: { xs: 3, sm: 8, md: 2, lg: 4 } }}>
          <TextareaAutosize
            id="health-safety-input"
            name="health-safety-input"
            minRows={3}
            maxRows={100}
            className="w-full"
            style={{ border: '1px solid gray', borderRadius: '4px' }}
          />
        </Grid>
        <Grid item xs={4} sm={4} md={4} lg={4} sx={{ ml: { xs: 1, sm: 1, md: 2, lg: 2 } }}>
          <TextareaAutosize
            id="cooperation-input"
            name="cooperation-input"
            minRows={3}
            maxRows={100}
            className="w-full"
            style={{ border: '1px solid gray', borderRadius: '4px' }}
          />
        </Grid>
      </Grid>
      {/* End health-safety-input Grid */}

      {/* Start 健康·安全 Grid */}
 <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-5">
        <Grid item xs={6} sm={6} md={6} lg={6} >
          <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, ml: { xs: 8, sm: 13, md: 12, lg: 11 } }} >
          健康安全
          </Typography>
        </Grid>
      </Grid>
      {/* End 健康·安全 Grid */}

      {/* Start health-safety-input Grid */}
      <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-3' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 5 } }}>
        <Grid item xs={4} sm={4} md={4} lg={4} sx={{ ml: { xs: 3, sm: 8, md: 2, lg: 4 } }}>
          <TextareaAutosize
            id="health-safety-input"
            name="health-safety-input"
            minRows={3}
            maxRows={100}
            className="w-full"
            style={{ border: '1px solid gray', borderRadius: '4px' }}
          />
        </Grid>
      </Grid>
      {/* End health-safety-input Grid */}
      

      

      {/* Start Card 指導の内容*/}
      <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-14 pl-10 flex '  >
        <Card sx={{ bgcolor: "pink", width: 130, height: 30, }} >
          <Typography component='div' className="pt-2 lg:pt-1" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, fontWeight: 'bold', marginLeft: { xs: 4, sm: 4, md: 4, lg: 3, } }}>
            環境の構成
          </Typography>
        </Card>
      </Grid>
      {/* End Card 指導の内容*/}

      {/* Start 養護 Grid  */}
      <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-5">
        <Grid item xs={2} sm={1.5} md={1} lg={2} sx={{ ml: { xs: 5, sm: 5, md: 5, lg: 4 } }}>
          <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, fontWeight: 'bold' } }} >
            養護
          </Typography>
        </Grid>
      </Grid >
      {/* End 養護 Grid */}

      <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-5 pl-24">
        <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, }} >
          情緒の安定生命の保持
        </Typography>
      </Grid>
      {/* start grid  情緒の安定生命の保持*/}
      <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-3 pl-20">
        <Grid item xs={8} sm={3} md={3} lg={2} className="" sx={{ marginLeft: { xs: 1, sm: 1, md: 2, lg: 1, } }}>
          <TextareaAutosize id="lifemaintenance" name="lifemaintenance" minRows={3.5} maxRows={100}
            className="lg:w-96 md:w-60 "
            style={{ border: '1px solid gray', borderRadius: '4px' }} />
        </Grid>
      </Grid>
      {/* End grid  情緒の安定生命の保持*/}

      {/* Start 教育 Grid  */}
      <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-5">
        <Grid item xs={2} sm={1.5} md={1} lg={2} sx={{ ml: { xs: 5, sm: 5, md: 5, lg: 4 } }}>
          <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, fontWeight: 'bold' } }} >
            教育
          </Typography>
        </Grid>
      </Grid >
      {/* End 教育 Grid */}

      <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-4 pl-24">
        <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, }} >
          健康人間係環境.言葉表現
        </Typography>
      </Grid>
      {/* start grid   健康人間係環境.言葉表現*/}
      <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-3 pl-20">
        <Grid item xs={8} sm={3} md={3} lg={2} className="" sx={{ marginLeft: { xs: 1, sm: 1, md: 2, lg: 1, } }}>
          <TextareaAutosize id="wordexpression" name="wordexpression" minRows={3.5} maxRows={100}
            className="lg:w-96 md:w-60 "
            style={{ border: '1px solid gray', borderRadius: '4px' }} />
        </Grid>
      </Grid>
      {/* End grid   健康人間係環境.言葉表現*/}

      {/* Start Card 指導の内容*/}
      <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-14 pl-10 flex '  >
        <Card sx={{ bgcolor: "pink", width: 100, height: 30, }} >
          <Typography component='div' className="pt-2 lg:pt-1" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, fontWeight: 'bold', marginLeft: { xs: 2.5, sm: 2.5, md: 2.5, lg: 1.5, } }}>
            指導の内容
          </Typography>
        </Card>
      </Grid>
      {/* End Card 指導の内容*/}

      {/* Start 養護 Grid  */}
      <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-5">
        <Grid item xs={2} sm={1.5} md={1} lg={2} sx={{ ml: { xs: 5, sm: 5, md: 5, lg: 4 } }}>
          <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, fontWeight: 'bold' } }} >
            養護
          </Typography>
        </Grid>
      </Grid >
      {/* End 養護 Grid */}

      <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-5 pl-24">
        <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, }} >
          情緒の安定生命の保持
        </Typography>
      </Grid>
      {/* start grid  情緒の安定生命の保持*/}
      <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-3 pl-20">
        <Grid item xs={8} sm={3} md={3} lg={2} className="" sx={{ marginLeft: { xs: 1, sm: 1, md: 2, lg: 1, } }}>
          <TextareaAutosize id="lifemaintenance" name="lifemaintenance" minRows={3.5} maxRows={100}
            className="lg:w-96 md:w-60 "
            style={{ border: '1px solid gray', borderRadius: '4px' }} />
        </Grid>
      </Grid>
      {/* End grid  情緒の安定生命の保持*/}

      {/* Start 教育 Grid  */}
      <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-5">
        <Grid item xs={2} sm={1.5} md={1} lg={2} sx={{ ml: { xs: 5, sm: 5, md: 5, lg: 4 } }}>
          <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, fontWeight: 'bold' } }} >
            教育
          </Typography>
        </Grid>
      </Grid >
      {/* End 教育 Grid */}

      <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-4 pl-24">
        <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, }} >
          健康人間係環境言葉・表現
        </Typography>
      </Grid>
      {/* start grid  健康人間係環境言葉.表現*/}
      <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-3 pl-20">
        <Grid item xs={8} sm={3} md={3} lg={2} className="" sx={{ marginLeft: { xs: 1, sm: 1, md: 2, lg: 1, } }}>
          <TextareaAutosize id="healthhuman" name="healthhuman" minRows={3.5} maxRows={100}
            className="lg:w-96 md:w-60 "
            style={{ border: '1px solid gray', borderRadius: '4px' }} />
        </Grid>
      </Grid>
      {/* End grid  健康人間係環境言葉.表現*/}

      {/* Start Card 予想される子どもの活動*/}
      <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-14 pl-10 flex '  >
        <Card sx={{ bgcolor: "pink", width: 200, height: 30, }} >
          <Typography component='div' className="pt-2 lg:pt-1" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, fontWeight: 'bold', marginLeft: { xs: 4, sm: 4, md: 4, lg: 1.5, } }}>
            予想される子どもの活動
          </Typography>
        </Card>
      </Grid>
      {/* End Card 予想される子どもの活動*/}

      {/* Start 養護 Grid  */}
      <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-5">
        <Grid item xs={2} sm={1.5} md={1} lg={2} sx={{ ml: { xs: 5, sm: 5, md: 5, lg: 4 } }}>
          <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, fontWeight: 'bold' } }} >
            養護
          </Typography>
        </Grid>
      </Grid >
      {/* End 養護 Grid */}

      <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-5 pl-24">
        <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, }} >
          情緒の安定生命の保持
        </Typography>
      </Grid>
      {/* start grid  情緒の安定生命の保持*/}
      <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-3 pl-20">
        <Grid item xs={8} sm={3} md={3} lg={2} className="" sx={{ marginLeft: { xs: 1, sm: 1, md: 2, lg: 1, } }}>
          <TextareaAutosize id="lifemaintenance" name="lifemaintenance" minRows={3.5} maxRows={100}
            className="lg:w-96 md:w-60 "
            style={{ border: '1px solid gray', borderRadius: '4px' }} />
        </Grid>
      </Grid>
      {/* End grid  情緒の安定生命の保持*/}

      {/* Start 教育 Grid  */}
      <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-5">
        <Grid item xs={2} sm={1.5} md={1} lg={2} sx={{ ml: { xs: 5, sm: 5, md: 5, lg: 4 } }}>
          <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, fontWeight: 'bold' } }} >
            教育
          </Typography>
        </Grid>
      </Grid >
      {/* End 教育 Grid */}

      <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-4 pl-24">
        <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, }} >
          健康人間係環境・言葉・表現
        </Typography>
      </Grid>
      {/* start grid  健康人間係環境・言葉・表現*/}
      <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-3 pl-20">
        <Grid item xs={8} sm={3} md={3} lg={2} className="" sx={{ marginLeft: { xs: 1, sm: 1, md: 2, lg: 1, } }}>
          <TextareaAutosize id="healthyhuman" name="healthyhuman" minRows={3.5} maxRows={100}
            className="lg:w-96 md:w-60 "
            style={{ border: '1px solid gray', borderRadius: '4px' }} />
        </Grid>
      </Grid>
      {/* End grid  健康人間係環境・言葉・表現*/}

      

      {/* Start Card 保育士等の園助と配慮*/}
      <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-14 pl-10 flex '  >
        <Card sx={{ bgcolor: "pink", width: 200, height: 30, }} >
          <Typography component='div' className="pt-2 lg:pt-1" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, fontWeight: 'bold', marginLeft: { xs: 4, sm: 4, md: 4, lg: 1.5, } }}>
            保育士等の園助と配慮
          </Typography>
        </Card>
      </Grid>
      {/* End Card 保育士等の園助と配慮*/}
      {/* Start 養護 Grid  */}
      <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-5">
        <Grid item xs={2} sm={1.5} md={1} lg={2} sx={{ ml: { xs: 5, sm: 5, md: 5, lg: 4 } }}>
          <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, fontWeight: 'bold' } }} >
          養護
          </Typography>
        </Grid>
      </Grid >
      {/* End 養護 Grid */}
      <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-4 pl-24">
        <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, }} >
        情緒の安定生命の保持
        </Typography>
      </Grid>
      {/* start grid  情緒の安定生命の保持*/}
      <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-3 pl-20">
        <Grid item xs={8} sm={3} md={3} lg={2} className="" sx={{ marginLeft: { xs: 1, sm: 1, md: 2, lg: 1, } }}>
          <TextareaAutosize id="lifemaintenance" name="lifemaintenance" minRows={3.5} maxRows={100}
            className="lg:w-96 md:w-60 "
            style={{ border: '1px solid gray', borderRadius: '4px' }} />
        </Grid>
      </Grid>
      {/* End grid  情緒の安定生命の保持*/}
      {/* Start 教育 Grid  */}
      <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-5">
        <Grid item xs={2} sm={1.5} md={1} lg={2} sx={{ ml: { xs: 5, sm: 5, md: 5, lg: 4 } }}>
          <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, fontWeight: 'bold' } }} >
          教育
          </Typography>
        </Grid>
      </Grid >
      {/* End 教育 Grid */}


{/* Start 健康·安全 Grid */}
<Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-5">
        <Grid item xs={6} sm={6} md={6} lg={6} >
          <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, ml: { xs: 8, sm: 5, md: 12, lg: 11 } }} >
          健康人間係環境・言葉表現
          </Typography>
        </Grid>
        <Grid item xs={6} sm={6} md={6} lg={6} >
          <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, ml: { xs: 1, sm: 5, md: -1, lg: 3 } }} >
          组運営·個別刘応
          </Typography>
        </Grid>
      </Grid>
      {/* End 健康·安全 Grid */}

      {/* Start health-safety-input Grid */}
      <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-3' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 5 } }}>
        <Grid item xs={4} sm={4} md={4} lg={4} sx={{ ml: { xs: 3, sm: 8, md: 2, lg: 4 } }}>
          <TextareaAutosize
            id="health-safety-input"
            name="health-safety-input"
            minRows={3}
            maxRows={100}
            className="w-full"
            style={{ border: '1px solid gray', borderRadius: '4px' }}
          />
        </Grid>
        <Grid item xs={4} sm={4} md={4} lg={4} sx={{ ml: { xs: 1, sm: 1, md: 2, lg: 2 } }}>
          <TextareaAutosize
            id="cooperation-input"
            name="cooperation-input"
            minRows={3}
            maxRows={100}
            className="w-full"
            style={{ border: '1px solid gray', borderRadius: '4px' }}
          />
        </Grid>
      </Grid>
      {/* End health-safety-input Grid */}

      {/* Start 健康·安全 Grid */}
<Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-5">
        <Grid item xs={6} sm={6} md={6} lg={6} >
          <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, ml: { xs: 8, sm: 5, md: 12, lg: 11 } }} >
          連携家庭・地域との
          </Typography>
        </Grid>
        <Grid item xs={6} sm={6} md={6} lg={6} >
          <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, ml: { xs: 1, sm: 5, md: -1, lg: 3 } }} >
          行事
          </Typography>
        </Grid>
      </Grid>
      {/* End 健康·安全 Grid */}

      {/* Start health-safety-input Grid */}
      <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-3' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 5 } }}>
        <Grid item xs={4} sm={4} md={4} lg={4} sx={{ ml: { xs: 3, sm: 8, md: 2, lg: 4 } }}>
          <TextareaAutosize
            id="health-safety-input"
            name="health-safety-input"
            minRows={3}
            maxRows={100}
            className="w-full"
            style={{ border: '1px solid gray', borderRadius: '4px' }}
          />
        </Grid>
        <Grid item xs={4} sm={4} md={4} lg={4} sx={{ ml: { xs: 1, sm: 1, md: 2, lg: 2 } }}>
          <TextareaAutosize
            id="cooperation-input"
            name="cooperation-input"
            minRows={3}
            maxRows={100}
            className="w-full"
            style={{ border: '1px solid gray', borderRadius: '4px' }}
          />
        </Grid>
      </Grid>
      {/* End health-safety-input Grid */}

     
      

      <Grid container className='pt-7' justifyContent="start">
        <Grid>
          <Button variant="contained" href="/report/annualplan/add" size='small' startIcon={<SaveIcon />} sx={{ backgroundColor: "green" }}>
            <Typography style={{ color: 'white' }}>
              Save
            </Typography>
          </Button>
        </Grid>
      </Grid>




    </>
  );
};
