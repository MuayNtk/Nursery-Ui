import { Button,  Divider, Grid, InputAdornment, TextField, TextareaAutosize, Typography } from "@mui/material";
import MonthForm from "../../componentsform/MonthForm"
import DayForm from "../../componentsform/DayForm"
import SaveIcon from '@mui/icons-material/Save';

export default function WeeklyplanOverOne() {


  return (

    <>
      {/* Start Grid */}
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 1, md: 1 }} className='pl-3 pt-1' >
        <Grid item xs={2} sm={1.5} md={1} lg={1} sx={{ ml: { xs: -3, sm: -2, md: -9, lg: 10 }, marginLeft: { xs: -1.5, sm: 1, md: 4, lg: 12, } }}>
          <MonthForm />
        </Grid>
        <Grid item xs={3} sm={2} md={2} lg={1.5} >
          <TextField
            className='w-full'
            id="Notices-input"
            label=""
            type="text"
            size='small'
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
            id="Notices-input"
            label=""
            type="text"
            size='small'
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
            id="Notices-input"
            label=""
            type="text"
            size='small'
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
          週のねらいと配慮
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
          家庭連絡
          </Typography>
        </Grid>
        <Grid item xs={6} sm={6} md={6} lg={6} >
          <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, ml: { xs: 1, sm: 5, md: -1, lg: -10 } }} >
          活動予定
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

      


      

      <br />
      <Divider className='bg-gray' />
      
       {/* Start Grid */}
       <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 1, md: 1 }} className='pl-3 pt-7' >
        <Grid item xs={2} sm={1.5} md={1} lg={1} sx={{ ml: { xs: -3, sm: -2, md: -9, lg: 10 }, marginLeft: { xs: 3, sm: 7, md: 10, lg: 9, } }}>
          <DayForm />
        </Grid>
        <Grid item xs={3} sm={2} md={2} lg={1.5} >
        <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, marginLeft: { xs: 5, sm: 6, md: 6, lg: 2, }}} className="pt-2">
        (月)
        </Typography>
        </Grid>
        <Grid item xs={3} sm={2} md={2} lg={1.5} >
        <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, marginLeft: { xs: 2, sm: 2, md: 1, lg: -5, } }} className="pt-2">
        天候
        </Typography>
        </Grid>
        <Grid item xs={3} sm={3} md={3} lg={1.5} >
          <TextField
            className='w-full'
            id="Notices-input"
            label=""
            type="text"
            size='small'
            sx={{
              backgroundColor: "white",
              fontSize: { xs: 11, sm: 11, md: 11, lg: 16, },
              marginLeft: { xs: -5, sm: -3, md: -8, lg: -15, }
            }}
            InputProps={{
              endAdornment: <InputAdornment position="end">°C</InputAdornment>,
            }}
          />
        </Grid>
      </Grid>
      {/* End Grid */}


 {/* Start 健康·安全 Grid */}
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
     

      <br />
      <Divider className='bg-gray' />
      
       {/* Start Grid */}
       <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 1, md: 1 }} className='pl-3 pt-7' >
        <Grid item xs={2} sm={1.5} md={1} lg={1} sx={{ ml: { xs: -3, sm: -2, md: -9, lg: 10 }, marginLeft: { xs: 3, sm: 7, md: 10, lg: 9, } }}>
          <DayForm />
        </Grid>
        <Grid item xs={3} sm={2} md={2} lg={1.5} >
        <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, marginLeft: { xs: 5, sm: 6, md: 6, lg: 2, }}} className="pt-2">
        (火)
        </Typography>
        </Grid>
        <Grid item xs={3} sm={2} md={2} lg={1.5} >
        <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, marginLeft: { xs: 2, sm: 2, md: 1, lg: -5, } }} className="pt-2">
        天候
        </Typography>
        </Grid>
        <Grid item xs={3} sm={3} md={3} lg={1.5} >
          <TextField
            className='w-full'
            id="Notices-input"
            label=""
            type="text"
            size='small'
            sx={{
              backgroundColor: "white",
              fontSize: { xs: 11, sm: 11, md: 11, lg: 16, },
              marginLeft: { xs: -5, sm: -3, md: -8, lg: -15, }
            }}
            InputProps={{
              endAdornment: <InputAdornment position="end">°C</InputAdornment>,
            }}
          />
        </Grid>
      </Grid>
      {/* End Grid */}



     {/* Start 健康·安全 Grid */}
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

      <br />
      <Divider className='bg-gray' />
      
       {/* Start Grid */}
       <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 1, md: 1 }} className='pl-3 pt-7' >
        <Grid item xs={2} sm={1.5} md={1} lg={1} sx={{ ml: { xs: -3, sm: -2, md: -9, lg: 10 }, marginLeft: { xs: 3, sm: 7, md: 10, lg: 9, } }}>
          <DayForm />
        </Grid>
        <Grid item xs={3} sm={2} md={2} lg={1.5} >
        <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, marginLeft: { xs: 5, sm: 6, md: 6, lg: 2, }}} className="pt-2">
        (水)
        </Typography>
        </Grid>
        <Grid item xs={3} sm={2} md={2} lg={1.5} >
        <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, marginLeft: { xs: 2, sm: 2, md: 1, lg: -5, } }} className="pt-2">
        天候
        </Typography>
        </Grid>
        <Grid item xs={3} sm={3} md={3} lg={1.5} >
          <TextField
            className='w-full'
            id="Notices-input"
            label=""
            type="text"
            size='small'
            sx={{
              backgroundColor: "white",
              fontSize: { xs: 11, sm: 11, md: 11, lg: 16, },
              marginLeft: { xs: -5, sm: -3, md: -8, lg: -15, }
            }}
            InputProps={{
              endAdornment: <InputAdornment position="end">°C</InputAdornment>,
            }}
          />
        </Grid>
      </Grid>
      {/* End Grid */}

     {/* Start 健康·安全 Grid */}
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

      <br />
      <Divider className='bg-gray' />
      
       {/* Start Grid */}
       <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 1, md: 1 }} className='pl-3 pt-7' >
        <Grid item xs={2} sm={1.5} md={1} lg={1} sx={{ ml: { xs: -3, sm: -2, md: -9, lg: 10 }, marginLeft: { xs: 3, sm: 7, md: 10, lg: 9, } }}>
          <DayForm />
        </Grid>
        <Grid item xs={3} sm={2} md={2} lg={1.5} >
        <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, marginLeft: { xs: 5, sm: 6, md: 6, lg: 2, }}} className="pt-2">
        (木)
        </Typography>
        </Grid>
        <Grid item xs={3} sm={2} md={2} lg={1.5} >
        <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, marginLeft: { xs: 2, sm: 2, md: 1, lg: -5, } }} className="pt-2">
        天候
        </Typography>
        </Grid>
        <Grid item xs={3} sm={3} md={3} lg={1.5} >
          <TextField
            className='w-full'
            id="Notices-input"
            label=""
            type="text"
            size='small'
            sx={{
              backgroundColor: "white",
              fontSize: { xs: 11, sm: 11, md: 11, lg: 16, },
              marginLeft: { xs: -5, sm: -3, md: -8, lg: -15, }
            }}
            InputProps={{
              endAdornment: <InputAdornment position="end">°C</InputAdornment>,
            }}
          />
        </Grid>
      </Grid>
      {/* End Grid */}

     {/* Start 健康·安全 Grid */}
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

      <br />
      <Divider className='bg-gray' />
      
       {/* Start Grid */}
       <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 1, md: 1 }} className='pl-3 pt-7' >
        <Grid item xs={2} sm={1.5} md={1} lg={1} sx={{ ml: { xs: -3, sm: -2, md: -9, lg: 10 }, marginLeft: { xs: 3, sm: 7, md: 10, lg: 9, } }}>
          <DayForm />
        </Grid>
        <Grid item xs={3} sm={2} md={2} lg={1.5} >
        <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, marginLeft: { xs: 5, sm: 6, md: 6, lg: 2, }}} className="pt-2">
        (金)
        </Typography>
        </Grid>
        <Grid item xs={3} sm={2} md={2} lg={1.5} >
        <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, marginLeft: { xs: 2, sm: 2, md: 1, lg: -5, } }} className="pt-2">
        天候
        </Typography>
        </Grid>
        <Grid item xs={3} sm={3} md={3} lg={1.5} >
          <TextField
            className='w-full'
            id="Notices-input"
            label=""
            type="text"
            size='small'
            sx={{
              backgroundColor: "white",
              fontSize: { xs: 11, sm: 11, md: 11, lg: 16, },
              marginLeft: { xs: -5, sm: -3, md: -8, lg: -15, }
            }}
            InputProps={{
              endAdornment: <InputAdornment position="end">°C</InputAdornment>,
            }}
          />
        </Grid>
      </Grid>
      {/* End Grid */}

      {/* Start 健康·安全 Grid */}
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

      <br />
      <Divider className='bg-gray' />
      
       {/* Start Grid */}
       <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 1, md: 1 }} className='pl-3 pt-7' >
        <Grid item xs={2} sm={1.5} md={1} lg={1} sx={{ ml: { xs: -3, sm: -2, md: -9, lg: 10 }, marginLeft: { xs: 3, sm: 7, md: 10, lg: 9, } }}>
          <DayForm />
        </Grid>
        <Grid item xs={3} sm={2} md={2} lg={1.5} >
        <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, marginLeft: { xs: 5, sm: 6, md: 6, lg: 2, }}} className="pt-2">
        (土)
        </Typography>
        </Grid>
        <Grid item xs={3} sm={2} md={2} lg={1.5} >
        <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, marginLeft: { xs: 2, sm: 2, md: 1, lg: -5, } }} className="pt-2">
        天候
        </Typography>
        </Grid>
        <Grid item xs={3} sm={3} md={3} lg={1.5} >
          <TextField
            className='w-full'
            id="Notices-input"
            label=""
            type="text"
            size='small'
            sx={{
              backgroundColor: "white",
              fontSize: { xs: 11, sm: 11, md: 11, lg: 16, },
              marginLeft: { xs: -5, sm: -3, md: -8, lg: -15, }
            }}
            InputProps={{
              endAdornment: <InputAdornment position="end">°C</InputAdornment>,
            }}
          />
        </Grid>
      </Grid>
      {/* End Grid */}

     {/* Start 健康·安全 Grid */}
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
