import { Box, Button, Card, Grid, TextField, TextareaAutosize, Typography } from "@mui/material";
import SaveIcon from '@mui/icons-material/Save';


export default function MonthlyplanAdd() {

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

      {/* Start 担任 Grid */}
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
      {/* End 担任 Grid */}

      {/* Start 指導計画は食育の内容を含むこと。 Grid */}
      <Grid className="mt-5 lg:mt-7" sx={{ ml: { xs: 0, sm: 0, md: 0, lg: -2 } }}>
        <Typography
          component="div"
          sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, backgroundColor: '#CCF0FD', fontWeight: 'bold', pt: { xs: 1.5, sm: 1.5, md: 1.5, lg: 1 } }}
          className='flex justify-start h-10 pt-2 pl-5' >
          指導計画は食育の内容を含むこと。
        </Typography>
      </Grid>
      {/* End 指導計画は食育の内容を含むこと。 Grid */}

      {/* Start ねらい Card */}
      <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-10' sx={{ ml: { xs: 3, sm: 3, md: 2, lg: 2 } }}>
        <Card sx={{ bgcolor: "pink", width: 120, height: 40 }}>
          <Typography component='div' sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 15 }, mt: { xs: 0.5, sm: 0.5, md: 0.5, lg: 0 } }} fontWeight="bold" className="pt-2 text-center">
            ねらい
          </Typography>
        </Card>
      </Grid>
      {/* End ねらい Card */}

      {/* Start 義護 Grid */}
      <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-4">
        <Grid item xs={3} sm={4} md={3} lg={2} >
          <Typography component="div" fontWeight="bold" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, ml: { xs: 4, sm: 8, md: 4, lg: 15 } }} >
            義護
          </Typography>
        </Grid>
      </Grid>
      {/* End 義護 Grid */}

      {/* Start 生命の保持・情緒の安定 Grid */}
      <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-2 ">
        <Grid item xs={8} sm={8.3} md={7} lg={7} >
          <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, ml: { xs: 8, sm: 13, md: 12, lg: 25 } }} >
            生命の保持・情緒の安定
          </Typography>
        </Grid>
      </Grid>
      {/* End 生命の保持・情緒の安定 Grid */}

      {/* Start emotional-input Grid */}
      <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-2' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 5 } }}>
        <Grid item xs={4} sm={3} md={8.5} lg={1.5} sx={{ ml: { xs: 3, sm: 8, md: 2, lg: 17 } }}>
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
      {/* End emotional-input Grid */}

      {/* Start 教育 Grid */}
      <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-4">
        <Grid item xs={3} sm={4} md={3} lg={2} >
          <Typography component="div" fontWeight="bold" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, ml: { xs: 4, sm: 8, md: 4, lg: 15 } }} >
            教育
          </Typography>
        </Grid>
      </Grid>
      {/* End 教育 Grid */}

      {/* Start 関する視点身体的発達に Grid */}
      <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-2 ">
        <Grid item xs={10} sm={9} md={7} lg={7} >
          <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, ml: { xs: 8, sm: 13, md: 12, lg: 25 } }} >
            関する視点身体的発達に,関する視点社会的発達に,関する視点精神的発達に
          </Typography>
        </Grid>
      </Grid>
      {/* End Grid */}

      {/* Start perspectives-input Grid */}
      <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-2' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 5 } }}>
        <Grid item xs={4} sm={3} md={8.5} lg={1.5} sx={{ ml: { xs: 3, sm: 8, md: 2, lg: 17 } }}>
          <TextareaAutosize
            id="perspectives-input"
            name="perspectives-input"
            minRows={3}
            maxRows={100}
            className="w-56 sm:w-60 lg:w-96"
            style={{ border: '1px solid gray', borderRadius: '4px' }}
          />
        </Grid>
      </Grid>
      {/* End perspectives-input Grid */}

      {/* Start 子どもとの関わり方(保育士等の育みたい内容) Card */}
      <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-10' sx={{ ml: { xs: 3, sm: 3, md: 2, lg: 2 } }}>
        <Card sx={{ bgcolor: "pink", width: { xs: 250, sm: 280, md: 300, lg: 380 }, height: 40 }}>
          <Typography component='div' sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 15 }, mt: { xs: 0.5, sm: 0.5, md: 0.5, lg: 0 } }} fontWeight="bold" className="pt-2 text-center">
            子どもとの関わり方(保育士等の育みたい内容)
          </Typography>
        </Card>
      </Grid>
      {/* End 子どもとの関わり方(保育士等の育みたい内容) Card */}

      {/* Start 義護 Grid */}
      <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-5">
        <Grid item xs={3} sm={4} md={3} lg={2} >
          <Typography component="div" fontWeight="bold" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, ml: { xs: 4, sm: 8, md: 4, lg: 15 } }} >
            義護
          </Typography>
        </Grid>
      </Grid>
      {/* End 義護 Grid */}

      {/* Start 生命の保持/情緒の安定 Grid */}
      <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-2 ">
        <Grid item xs={8} sm={8.3} md={7} lg={7} >
          <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, ml: { xs: 8, sm: 13, md: 12, lg: 25 } }} >
            生命の保持 / 情緒の安定
          </Typography>
        </Grid>
      </Grid>
      {/* End 生命の保持/情緒の安定 Grid */}

      {/* Start emotional-input Grid */}
      <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-2' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 5 } }}>
        <Grid item xs={4} sm={3} md={8.5} lg={1.5} sx={{ ml: { xs: 3, sm: 8, md: 2, lg: 17 } }}>
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
      {/* End emotional-input Grid */}

      {/* Start 教育 Grid */}
      <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-4">
        <Grid item xs={3} sm={4} md={3} lg={2} >
          <Typography component="div" fontWeight="bold" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16 },ml: { xs: 4, sm: 8, md: 4, lg: 15 } }} >
            教育
          </Typography>
        </Grid>
      </Grid>
      {/* End 教育 Grid */}

      {/* Start 関する視点身体的発達に Grid */}
      <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-2 ">
        <Grid item xs={10} sm={9} md={7} lg={7} >
          <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, ml: { xs: 8, sm: 13, md: 12, lg: 25 } }} >
            関する視点身体的発達に,関する視点社会的発達に,関する視点精神的発達に
          </Typography>
        </Grid>
      </Grid>
      {/* End 関する視点身体的発達に Grid */}

      {/* Start perspectives-input Grid */}
      <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-2' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 5 } }}>
        <Grid item xs={4} sm={3} md={8.5} lg={1.5} sx={{ ml: { xs: 3, sm: 8, md: 2, lg: 17 } }}>
          <TextareaAutosize
            id="perspectives-input"
            name="perspectives-input"
            minRows={3}
            maxRows={100}
            className="w-56 sm:w-60 lg:w-96"
            style={{ border: '1px solid gray', borderRadius: '4px' }}
          />
        </Grid>
      </Grid>
      {/* End perspectives-input Grid */}

      {/* Start 環境づくり予される子どもの活動配慮・援助 Card */}
      <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-10' sx={{ ml: { xs: 3, sm: 3, md: 2, lg: 2 } }}>
        <Card sx={{ bgcolor: "pink", width: { xs: 250, sm: 280, md: 300, lg: 360 }, height: 40 }}>
          <Typography component='div' sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 15 }, mt: { xs: 0.5, sm: 0.5, md: 0.5, lg: 0 } }} fontWeight="bold" className="pt-2 text-center">
            環境づくり予される子どもの活動配慮・援助
          </Typography>
        </Card>
      </Grid>
      {/* End 環境づくり予される子どもの活動配慮・援助 Card */}

      {/* Start 健康·安全 Grid */}
      <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-5">
        <Grid item xs={6} sm={6} md={6} lg={6} >
          <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, ml: { xs: 8, sm: 13, md: 12, lg: 25 } }} >
            健康 · 安全
          </Typography>
        </Grid>
        <Grid item xs={6} sm={6} md={6} lg={6} >
          <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, ml: { xs: 1, sm: 5, md: -1, lg: 3 } }} >
            との連携家庭・地域
          </Typography>
        </Grid>
      </Grid>
      {/* End 健康·安全 Grid */}

      {/* Start health-safety-input Grid */}
      <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-3' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 5 } }}>
        <Grid item xs={4} sm={4} md={4} lg={4} sx={{ ml: { xs: 3, sm: 8, md: 2, lg: 17 } }}>
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
          <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, ml: { xs: 8, sm: 13, md: 12, lg: 25 } }} >
          行事
          </Typography>
        </Grid>
        <Grid item xs={6} sm={6} md={6} lg={6} >
          <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, ml: { xs: 1, sm: 5, md: -1, lg: 3 } }} >
          個別対応運
          </Typography>
        </Grid>
      </Grid>
      {/* End 健康·安全 Grid */}

      {/* Start health-safety-input Grid */}
      <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-3' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 5 } }}>
        <Grid item xs={4} sm={4} md={4} lg={4} sx={{ ml: { xs: 3, sm: 8, md: 2, lg: 17 } }}>
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

     

     

      {/* Start 評価・反省 Grid */}
      <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-2">
        <Grid item xs={8} sm={8.3} md={7} lg={4} >
          <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, ml: { xs: 8, sm: 13, md: 12, lg: 25 } }} >
            評価・反省
          </Typography>
        </Grid>
      </Grid>
      {/* End 評価・反省 Grid */}

      {/* Start evaluation-input Grid */}
      <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-3' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 5 } }}>
      <Grid item xs={4} sm={4} md={4} lg={4} sx={{ ml: { xs: 3, sm: 8, md: 2, lg: 17 } }}>
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
      {/* End evaluation-input Grid */}

      {/* Start 身休的発達に関する視点、社会的発達に関する視点、Grid */}
      <Grid className="mt-5 lg:mt-7" sx={{ ml: { xs: 0, sm: 0, md: 0, lg: -2 } }}>
        <Typography
          component="div"
          sx={{ color: 'black', fontSize: { xs: 10, sm: 10, md: 11, lg: 16 }, backgroundColor: '#CCF0FD', fontWeight: 'bold', pt: { xs: 1.5, sm: 1.5, md: 1.5, lg: 1 } }}
          className='flex justify-start h-12 lg:h-10 pt-2 pl-5 pr-5' >
          身休的発達に関する視点、社会的発達に関する視点、精神的発達に関する視点、指導計画は食育の内容を含むこと
        </Typography>
      </Grid>
      {/* End 身休的発達に関する視点、社会的発達に関する視点、Grid */}

      {/* Start ねらい Card */}
      <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-10' sx={{ ml: { xs: 3, sm: 3, md: 2, lg: 2 } }}>
        <Card sx={{ bgcolor: "pink", width: 120, height: 40 }}>
          <Typography component='div' sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 15 }, mt: { xs: 0.5, sm: 0.5, md: 0.5, lg: 0 } }} fontWeight="bold" className="pt-2 text-center">
            ねらい
          </Typography>
        </Card>
      </Grid>
      {/* End ねらい Card */}

      {/* Start 養護 Grid */}
      <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-4">
        <Grid item xs={8} sm={8.3} md={7} lg={7} >
          <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, ml: { xs: 4, sm: 8, md: 4, lg: 15 } }} >
            養護
          </Typography>
        </Grid>
      </Grid>
      {/* End 養護 Grid */}

      {/* Start nursing-care-input Grid */}
      <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-3' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 5 } }}>
        <Grid item xs={4} sm={3} md={8.5} lg={1.5} sx={{ ml: { xs: 3, sm: 8, md: 2, lg: 17 } }}>
          <TextareaAutosize
            id="nursing-care-input"
            name="nursing-care-input"
            minRows={3}
            maxRows={100}
            className="w-56 sm:w-60 lg:w-96"
            style={{ border: '1px solid gray', borderRadius: '4px' }}
          />
        </Grid>
      </Grid>
      {/* End nursing-care-input Grid */}

      {/* Start 教育 Grid */}
      <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-4">
        <Grid item xs={8} sm={8.3} md={7} lg={7} >
          <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, ml: { xs: 4, sm: 8, md: 4, lg: 15 } }} >
            教育
          </Typography>
        </Grid>
      </Grid>
      {/* End 教育 Grid */}

      {/* Start education-input Grid */}
      <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-3' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 5 } }}>
        <Grid item xs={4} sm={3} md={8.5} lg={1.5} sx={{ ml: { xs: 3, sm: 8, md: 2, lg: 17 } }}>
          <TextareaAutosize
            id="education-input"
            name="education-input"
            minRows={3}
            maxRows={100}
            className="w-56 sm:w-60 lg:w-96"
            style={{ border: '1px solid gray', borderRadius: '4px' }}
          />
        </Grid>
      </Grid>
      {/* End education-input Grid */}

      {/* Start 家庭・地域との連携 Grid */}
      <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-4">
        <Grid item xs={8} sm={8.3} md={7} lg={7} >
          <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, ml: { xs: 8, sm: 13, md: 12, lg: 25 } }} >
            家庭・地域との連携
          </Typography>
        </Grid>
      </Grid>
      {/* End 家庭・地域との連携 Grid */}

      {/* Start cooperation2-input Grid */}
      <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-3' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 5 } }}>
        <Grid item xs={4} sm={3} md={8.5} lg={1.5} sx={{ ml: { xs: 3, sm: 8, md: 2, lg: 17 } }}>
          <TextareaAutosize
            id="cooperation2-input"
            name="cooperation2-input"
            minRows={3}
            maxRows={100}
            className="w-56 sm:w-60 lg:w-96"
            style={{ border: '1px solid gray', borderRadius: '4px' }}
          />
        </Grid>
      </Grid>
      {/* End cooperation2-input Grid */}

      {/* Start 行事 Grid */}
      <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-4">
        <Grid item xs={8} sm={8.3} md={7} lg={7} >
          <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, ml: { xs: 8, sm: 13, md: 12, lg: 25 } }} >
            行事
          </Typography>
        </Grid>
      </Grid>
      {/* End 行事 Grid */}

      {/* Start event2-input Grid */}
      <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-3' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 5 } }}>
        <Grid item xs={4} sm={3} md={8.5} lg={1.5} sx={{ ml: { xs: 3, sm: 8, md: 2, lg: 17 } }}>
          <TextareaAutosize
            id="event2-input"
            name="event2-input"
            minRows={3}
            maxRows={100}
            className="w-56 sm:w-60 lg:w-96"
            style={{ border: '1px solid gray', borderRadius: '4px' }}
          />
        </Grid>
      </Grid>
      {/* End event2-input Grid */}

      {/* Start Box */}
      <Box sx={{ border: '2px solid grey', width: { xs: 350, sm: 450, md: 550, lg: 750 }, mt: 3, pb: 2 }}>

        {/* Start 施設長 Grid */}
        <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-4">
          <Grid item xs={3} sm={4} md={3} lg={3} sx={{ ml: { xs: 7, sm: 8, md: 8.5, lg: 15 } }}>
            <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 12, lg: 16, } }} >
              施設長 :
            </Typography>
          </Grid>
          <Grid item xs={5} sm={4.5} md={5} lg={4.5} sx={{ ml: { xs: -4, sm: -13, md: -10, lg: -15 }, }}>
            <TextField
              className='w-full'
              id="nursing-care-input"
              name="nursing-care-input"
              label=""
              type="text"
              size='small'
              sx={{
                backgroundColor: "white",
              }}
            />
          </Grid>
        </Grid>
        {/* End 施設長 Grid */}

        {/* Start 主任 Grid */}
        <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-4">
          <Grid item xs={3} sm={4} md={3} lg={3} sx={{ ml: { xs: 8.5, sm: 9, md: 10, lg: 17 } }}>
            <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 12, lg: 16, } }} >
              主任 :
            </Typography>
          </Grid>
          <Grid item xs={5} sm={4.5} md={5} lg={4.5} sx={{ ml: { xs: -5.5, sm: -14, md: -11.5, lg: -17 }, }}>
            <TextField
              className='w-full'
              id="nursing-care-input"
              name="nursing-care-input"
              label=""
              type="text"
              size='small'
              sx={{
                backgroundColor: "white",
              }}
            />
          </Grid>
        </Grid>
        {/* End 主任 Grid */}

        {/* Start 子どもの生活する姿 Grid */}
        <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-4">
          <Grid item xs={8} sm={8.3} md={7} lg={7} >
            <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, ml: { xs: 8, sm: 13, md: 12, lg: 25 } }} >
              子どもの生活する姿
            </Typography>
          </Grid>
        </Grid>
        {/* End 子どもの生活する姿 Grid */}

        {/* Start children-daily-input Grid */}
        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-3' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 5 } }}>
          <Grid item xs={4} sm={3} md={8.5} lg={1.5} sx={{ ml: { xs: 3, sm: 8, md: 2, lg: 17 } }}>
            <TextareaAutosize
              id="children-daily-input"
              name="children-daily-input"
              minRows={3}
              maxRows={100}
              className="w-56 sm:w-60 lg:w-96"
              style={{ border: '1px solid gray', borderRadius: '4px' }}
            />
          </Grid>
        </Grid>
        {/* End children-daily-input Grid */}

        {/* Start 子どもとの関わり方保育士等の育みたい内容(養護・教育) Grid */}
        <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-4">
          <Grid item xs={10} sm={9} md={9} lg={8.5} >
            <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, ml: { xs: 8, sm: 13, md: 12, lg: 25 } }} >
              子どもとの関わり方保育士等の育みたい内容(養護・教育)
            </Typography>
          </Grid>
        </Grid>
        {/* End 子どもとの関わり方保育士等の育みたい内容(養護・教育) Grid */}

        {/* Start nursing-and-education-input Grid */}
        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-3' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 5 } }}>
          <Grid item xs={4} sm={3} md={8.5} lg={1.5} sx={{ ml: { xs: 3, sm: 8, md: 2, lg: 17 } }}>
            <TextareaAutosize
              id="nursing-and-education-input"
              name="nursing-and-education-input"
              minRows={3}
              maxRows={100}
              className="w-56 sm:w-60 lg:w-96"
              style={{ border: '1px solid gray', borderRadius: '4px' }}
            />
          </Grid>
        </Grid>
        {/* End nursing-and-education-input Grid */}
      </Box>
      {/* End Box */}

      {/* Start Grid Button + */}
      <Grid container spacing={1} justifyContent='center' alignItems='center'>
        <Grid item sx={{ ml: { xs: 20, sm: 35, md: 42, lg: 35 } }}>
          <Button variant="contained" sx={{ width: 30, ml: { xs: 13, sm: 15, md: 0 }, mt: 0.3 }}>+</Button>
        </Grid>
      </Grid>
      {/* End Grid Button + */}

       {/* Start 健康·安全 Grid */}
       <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-5">
        <Grid item xs={6} sm={6} md={6} lg={6} >
          <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, ml: { xs: 8, sm: 13, md: 12, lg: 25 } }} >
          環境づくり
          </Typography>
        </Grid>
        <Grid item xs={6} sm={6} md={6} lg={6} >
          <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, ml: { xs: 1, sm: 5, md: -1, lg: 3 } }} >
          生活と遊び
          </Typography>
        </Grid>
      </Grid>
      {/* End 健康·安全 Grid */}

      {/* Start health-safety-input Grid */}
      <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-3' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 5 } }}>
        <Grid item xs={4} sm={4} md={4} lg={4} sx={{ ml: { xs: 3, sm: 8, md: 2, lg: 17 } }}>
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
          <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, ml: { xs: 8, sm: 13, md: 12, lg: 25 } }} >
          健康 · 安全
          </Typography>
        </Grid>
        <Grid item xs={6} sm={6} md={6} lg={6} >
          <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, ml: { xs: 1, sm: 5, md: -1, lg: 3 } }} >
          相運館
          </Typography>
        </Grid>
      </Grid>
      {/* End 健康·安全 Grid */}

      {/* Start health-safety-input Grid */}
      <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-3' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 5 } }}>
        <Grid item xs={4} sm={4} md={4} lg={4} sx={{ ml: { xs: 3, sm: 8, md: 2, lg: 17 } }}>
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


      {/* Start 評価·反省 Grid */}
      <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-2">
        <Grid item xs={8} sm={8.3} md={7} lg={7} >
          <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, ml: { xs: 8, sm: 13, md: 12, lg: 25 } }} >
            評価 · 反省
          </Typography>
        </Grid>
      </Grid>
      {/* End 評価·反省 Grid */}

      {/* Start evaluation-and-reflection-input Grid */}
      <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-3' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 5 } }}>
        <Grid item xs={4} sm={3} md={8.5} lg={1.5} sx={{ ml: { xs: 3, sm: 8, md: 2, lg: 17 } }}>
          <TextareaAutosize
            id="evaluation-and-reflection-input"
            name="evaluation-and-reflection-input"
            minRows={3}
            maxRows={100}
            className="w-56 sm:w-60 lg:w-96"
            style={{ border: '1px solid gray', borderRadius: '4px' }}
          />
        </Grid>
      </Grid>
      {/* End evaluation-and-reflection-input Grid */}

      {/* Start Grid Save Button */}
      <Grid container className='pt-7' justifyContent="start">
        <Grid>
          <Button variant="contained" href="/report/annualplan/add" size='small' startIcon={<SaveIcon />} sx={{ backgroundColor: "green" }}>
            <Typography style={{ color: 'white' }}>
              Save
            </Typography>
          </Button>
        </Grid>
      </Grid>
      {/* End Grid Save Button */}

    </>
  );
};
