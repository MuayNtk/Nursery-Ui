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

      <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-8 pl-24">
        <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, }} >
          子どもの姿
        </Typography>
      </Grid>
      {/* start grid  子どもの姿*/}
      <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-3 pl-20">
        <Grid item xs={8} sm={3} md={3} lg={2} className="" sx={{ marginLeft: { xs: 1, sm: 1, md: 2, lg: 1, } }}>
          <TextareaAutosize id="children" name="children" minRows={3.5} maxRows={100}
            className="lg:w-96 md:w-60 "
            style={{ border: '1px solid gray', borderRadius: '4px' }} />
        </Grid>
      </Grid>
      {/* End grid  子どもの姿*/}<Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-5 pl-24">
        <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, }} >
          週のねらいと配慮
        </Typography>
      </Grid>
      {/* start grid  週のねらいと配慮*/}
      <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-3 pl-20">
        <Grid item xs={8} sm={3} md={3} lg={2} className="" sx={{ marginLeft: { xs: 1, sm: 1, md: 2, lg: 1, } }}>
          <TextareaAutosize id="weeklyaims" name="weeklyaims" minRows={3.5} maxRows={100}
            className="lg:w-96 md:w-60 "
            style={{ border: '1px solid gray', borderRadius: '4px' }} />
        </Grid>
      </Grid>
      {/* End grid  週のねらいと配慮*/}


      <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-5 pl-24">
        <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, }} >
          家庭連絡
        </Typography>
      </Grid>
      {/* start grid  家庭連絡*/}
      <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-3 pl-20">
        <Grid item xs={8} sm={3} md={3} lg={2} className="" sx={{ marginLeft: { xs: 1, sm: 1, md: 2, lg: 1, } }}>
          <TextareaAutosize id="familycontact" name="familycontact" minRows={3.5} maxRows={100}
            className="lg:w-96 md:w-60 "
            style={{ border: '1px solid gray', borderRadius: '4px' }} />
        </Grid>
      </Grid>
      {/* End grid  家庭連絡*/}
      <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-5 pl-24">
        <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, }} >
          活動予定
        </Typography>
      </Grid>
      {/* start grid  活動予定*/}
      <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-3 pl-20">
        <Grid item xs={8} sm={3} md={3} lg={2} className="" sx={{ marginLeft: { xs: 1, sm: 1, md: 2, lg: 1, } }}>
          <TextareaAutosize id="scheduledactivities" name="scheduledactivities" minRows={3.5} maxRows={100}
            className="lg:w-96 md:w-60 "
            style={{ border: '1px solid gray', borderRadius: '4px' }} />
        </Grid>
      </Grid>
      {/* End grid  活動予定*/}

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

      <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-8 pl-24">
        <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, }} >
        主な活動
        </Typography>
      </Grid>
      {/* start grid  主な活動*/}
      <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-3 pl-20">
        <Grid item xs={8} sm={3} md={3} lg={2} className="" sx={{ marginLeft: { xs: 1, sm: 1, md: 2, lg: 1, } }}>
          <TextareaAutosize id="mainactivities" name="mainactivities" minRows={3.5} maxRows={100}
            className="lg:w-96 md:w-60 "
            style={{ border: '1px solid gray', borderRadius: '4px' }} />
        </Grid>
      </Grid>
      {/* End grid  主な活動*/}
      <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-5 pl-24">
        <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, }} >
        評価及び反省
        </Typography>
      </Grid>
      {/* start grid  評価及び反省*/}
      <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-3 pl-20">
        <Grid item xs={8} sm={3} md={3} lg={2} className="" sx={{ marginLeft: { xs: 1, sm: 1, md: 2, lg: 1, } }}>
          <TextareaAutosize id="evaluatioandreflection" name="evaluatioandreflection" minRows={3.5} maxRows={100}
            className="lg:w-96 md:w-60 "
            style={{ border: '1px solid gray', borderRadius: '4px' }} />
        </Grid>
      </Grid>
      {/* End grid  評価及び反省*/}

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

      <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-8 pl-24">
        <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, }} >
        主な活動
        </Typography>
      </Grid>
      {/* start grid  主な活動*/}
      <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-3 pl-20">
        <Grid item xs={8} sm={3} md={3} lg={2} className="" sx={{ marginLeft: { xs: 1, sm: 1, md: 2, lg: 1, } }}>
          <TextareaAutosize id="mainactivities" name="mainactivities" minRows={3.5} maxRows={100}
            className="lg:w-96 md:w-60 "
            style={{ border: '1px solid gray', borderRadius: '4px' }} />
        </Grid>
      </Grid>
      {/* End grid  主な活動*/}
      <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-5 pl-24">
        <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, }} >
        評価及び反省
        </Typography>
      </Grid>
      {/* start grid  評価及び反省*/}
      <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-3 pl-20">
        <Grid item xs={8} sm={3} md={3} lg={2} className="" sx={{ marginLeft: { xs: 1, sm: 1, md: 2, lg: 1, } }}>
          <TextareaAutosize id="evaluatioandreflection" name="evaluatioandreflection" minRows={3.5} maxRows={100}
            className="lg:w-96 md:w-60 "
            style={{ border: '1px solid gray', borderRadius: '4px' }} />
        </Grid>
      </Grid>
      {/* End grid  評価及び反省*/}

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

      <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-8 pl-24">
        <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, }} >
        主な活動
        </Typography>
      </Grid>
      {/* start grid  主な活動*/}
      <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-3 pl-20">
        <Grid item xs={8} sm={3} md={3} lg={2} className="" sx={{ marginLeft: { xs: 1, sm: 1, md: 2, lg: 1, } }}>
          <TextareaAutosize id="mainactivities" name="mainactivities" minRows={3.5} maxRows={100}
            className="lg:w-96 md:w-60 "
            style={{ border: '1px solid gray', borderRadius: '4px' }} />
        </Grid>
      </Grid>
      {/* End grid  主な活動*/}
      <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-5 pl-24">
        <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, }} >
        評価及び反省
        </Typography>
      </Grid>
      {/* start grid  評価及び反省*/}
      <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-3 pl-20">
        <Grid item xs={8} sm={3} md={3} lg={2} className="" sx={{ marginLeft: { xs: 1, sm: 1, md: 2, lg: 1, } }}>
          <TextareaAutosize id="evaluatioandreflection" name="evaluatioandreflection" minRows={3.5} maxRows={100}
            className="lg:w-96 md:w-60 "
            style={{ border: '1px solid gray', borderRadius: '4px' }} />
        </Grid>
      </Grid>
      {/* End grid  評価及び反省*/}

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

      <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-8 pl-24">
        <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, }} >
        主な活動
        </Typography>
      </Grid>
      {/* start grid  主な活動*/}
      <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-3 pl-20">
        <Grid item xs={8} sm={3} md={3} lg={2} className="" sx={{ marginLeft: { xs: 1, sm: 1, md: 2, lg: 1, } }}>
          <TextareaAutosize id="mainactivities" name="mainactivities" minRows={3.5} maxRows={100}
            className="lg:w-96 md:w-60 "
            style={{ border: '1px solid gray', borderRadius: '4px' }} />
        </Grid>
      </Grid>
      {/* End grid  主な活動*/}
      <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-5 pl-24">
        <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, }} >
        評価及び反省
        </Typography>
      </Grid>
      {/* start grid  評価及び反省*/}
      <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-3 pl-20">
        <Grid item xs={8} sm={3} md={3} lg={2} className="" sx={{ marginLeft: { xs: 1, sm: 1, md: 2, lg: 1, } }}>
          <TextareaAutosize id="evaluatioandreflection" name="evaluatioandreflection" minRows={3.5} maxRows={100}
            className="lg:w-96 md:w-60 "
            style={{ border: '1px solid gray', borderRadius: '4px' }} />
        </Grid>
      </Grid>
      {/* End grid  評価及び反省*/}

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

      <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-8 pl-24">
        <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, }} >
        主な活動
        </Typography>
      </Grid>
      {/* start grid  主な活動*/}
      <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-3 pl-20">
        <Grid item xs={8} sm={3} md={3} lg={2} className="" sx={{ marginLeft: { xs: 1, sm: 1, md: 2, lg: 1, } }}>
          <TextareaAutosize id="mainactivities" name="mainactivities" minRows={3.5} maxRows={100}
            className="lg:w-96 md:w-60 "
            style={{ border: '1px solid gray', borderRadius: '4px' }} />
        </Grid>
      </Grid>
      {/* End grid  主な活動*/}
      <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-5 pl-24">
        <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, }} >
        評価及び反省
        </Typography>
      </Grid>
      {/* start grid  評価及び反省*/}
      <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-3 pl-20">
        <Grid item xs={8} sm={3} md={3} lg={2} className="" sx={{ marginLeft: { xs: 1, sm: 1, md: 2, lg: 1, } }}>
          <TextareaAutosize id="evaluatioandreflection" name="evaluatioandreflection" minRows={3.5} maxRows={100}
            className="lg:w-96 md:w-60 "
            style={{ border: '1px solid gray', borderRadius: '4px' }} />
        </Grid>
      </Grid>
      {/* End grid  評価及び反省*/}

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

      <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-8 pl-24">
        <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, }} >
        主な活動
        </Typography>
      </Grid>
      {/* start grid  主な活動*/}
      <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-3 pl-20">
        <Grid item xs={8} sm={3} md={3} lg={2} className="" sx={{ marginLeft: { xs: 1, sm: 1, md: 2, lg: 1, } }}>
          <TextareaAutosize id="mainactivities" name="mainactivities" minRows={3.5} maxRows={100}
            className="lg:w-96 md:w-60 "
            style={{ border: '1px solid gray', borderRadius: '4px' }} />
        </Grid>
      </Grid>
      {/* End grid  主な活動*/}
      <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-5 pl-24">
        <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, }} >
        評価及び反省
        </Typography>
      </Grid>
      {/* start grid  評価及び反省*/}
      <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-3 pl-20">
        <Grid item xs={8} sm={3} md={3} lg={2} className="" sx={{ marginLeft: { xs: 1, sm: 1, md: 2, lg: 1, } }}>
          <TextareaAutosize id="evaluatioandreflection" name="evaluatioandreflection" minRows={3.5} maxRows={100}
            className="lg:w-96 md:w-60 "
            style={{ border: '1px solid gray', borderRadius: '4px' }} />
        </Grid>
      </Grid>
      {/* End grid  評価及び反省*/}

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
