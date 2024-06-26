
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Button, Radio, RadioGroup, TextareaAutosize } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';


export default function HealthCheckForm() {
  return (

    <>
      
        <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-5 pl-10">
          <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, }} className=''>
            健康管理台帳
          </Typography>
          {/* grid 1-1 */}
          <Grid item xs={8} sm={3} md={3} lg={2} >
            <FormControl sx={{ m: 1, minWidth: 120, marginRight: '50px' }} size='small' className="w-full">
              <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>ありません</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, }} className='md:pl-16'>
            健康管理台帳
          </Typography>
          {/* grid 1-2 */}
          <Grid item xs={8} sm={3} md={3} lg={2} >
            <FormControl sx={{ m: 1, minWidth: 120, marginRight: '50px' }} size='small' className="w-full " >
              <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>ありません</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-3 pl-10">
          <Typography component="div" fontWeight={500} sx={{ color: 'black', fontSize: { xs: 12, sm: 11, md: 11, lg: 16, }, paddingRight: { xs: 5.5, sm: 5.5, md: 5.5, lg: 8, } }} >
            性別
          </Typography>
          <Grid item xs={1} sm={1} md={1} lg={1} className="">
            <FormControl sx={{ m: 1, minWidth: 120, marginRight: '50px', }} size='small' className="w-full " >
              <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>女</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-1 pl-10">
          <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, paddingRight: { xs: 3, sm: 2.5, md: 2.5, lg: 4, } }} >
            生年月日
          </Typography>
          <Grid item xs={8} sm={1.5} md={1.5} lg={1.5} className="">
            <FormControl sx={{ m: 1, minWidth: 120, marginRight: '50px', marginLeft: { xs: 1, sm: 1, md: 1, lg: 1, } }} size='small' className="w-full " >
              <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>平成</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={8} sm={6} md={2} lg={1.5} className=" ">
            <TextField className='w-full ' id="Facility-input" label="年" type="text" size='small' sx={{ backgroundColor: "white", marginLeft: { xs: 9.5, sm: 13, md: 8, lg: 3, } }} />
          </Grid>
          <Grid item xs={5} sm={4} md={1} lg={1.5} className="">
            <FormControl sx={{ m: 1, minWidth: 120, marginRight: '50px', marginLeft: { xs: 9.5, sm: 9, md: 10, lg: 4, } }} size='small' className="w-full " >
              <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, marginLeft: { xs: 12, sm: 10, md: 20, lg: 6, } }} >
            月
          </Typography>
          <Grid item xs={4} sm={4} md={1} lg={1} className="flex ">
            <FormControl sx={{ m: 1, minWidth: 120, marginLeft: { xs: 9.5, sm: 1, md: 1, lg: 2, } }} size='small' className="w-full " >
              <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>10</MenuItem>
                <MenuItem value={2}>20</MenuItem>
                <MenuItem value={3}>30</MenuItem>
                <MenuItem value={4}>40</MenuItem>
              </Select>
            </FormControl>
            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, marginRight: { xs: 15, sm: 2, md: 10, lg: 8, } }} className="pt-5">
              日
            </Typography>
          </Grid>

        </Grid>
        <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-1 pl-10">
          <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, paddingRight: { xs: 5.5, sm: 5, md: 5.5, lg: 8, } }} >
            入所
          </Typography>
          <Grid item xs={8} sm={1.5} md={1.5} lg={1.5} className="">
            <FormControl sx={{ m: 1, minWidth: 120, marginRight: '50px', marginLeft: { xs: 1, sm: 1, md: 1, lg: 1, } }} size='small' className="w-full " >
              <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>平成</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={8} sm={6} md={2} lg={1.5} className=" ">
            <TextField className='w-full ' id="Facility-input" label="年" type="text" size='small' sx={{ backgroundColor: "white", marginLeft: { xs: 9.5, sm: 13, md: 8, lg: 3, } }} />
          </Grid>
          <Grid item xs={5} sm={4} md={1} lg={1.5} className="">
            <FormControl sx={{ m: 1, minWidth: 120, marginRight: '50px', marginLeft: { xs: 9.5, sm: 9, md: 10, lg: 4, } }} size='small' className="w-full " >
              <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, marginLeft: { xs: 12, sm: 10, md: 20, lg: 6, } }} >
            月
          </Typography>
          <Grid item xs={4} sm={4} md={1} lg={1} className="flex ">
            <FormControl sx={{ m: 1, minWidth: 120, marginLeft: { xs: 9.5, sm: 1, md: 1, lg: 2, } }} size='small' className="w-full " >
              <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>10</MenuItem>
                <MenuItem value={2}>20</MenuItem>
                <MenuItem value={3}>30</MenuItem>
                <MenuItem value={4}>40</MenuItem>
              </Select>
            </FormControl>
            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, marginRight: { xs: 15, sm: 2, md: 10, lg: 8, } }} className="pt-5">
              日
            </Typography>
          </Grid>

        </Grid>
        <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-1 pl-10">
          <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, paddingRight: { xs: 5.5, sm: 5, md: 5.5, lg: 8, } }} >
            退所
          </Typography>
          <Grid item xs={8} sm={1.5} md={1.5} lg={1.5} className="">
            <FormControl sx={{ m: 1, minWidth: 120, marginRight: '50px', marginLeft: { xs: 1, sm: 1, md: 1, lg: 1, } }} size='small' className="w-full " >
              <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>平成</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={8} sm={6} md={2} lg={1.5} className=" ">
            <TextField className='w-full ' id="Facility-input" label="年" type="text" size='small' sx={{ backgroundColor: "white", marginLeft: { xs: 9.5, sm: 13, md: 8, lg: 3, } }} />
          </Grid>
          <Grid item xs={5} sm={4} md={1} lg={1.5} className="">
            <FormControl sx={{ m: 1, minWidth: 120, marginRight: '50px', marginLeft: { xs: 9.5, sm: 9, md: 10, lg: 4, } }} size='small' className="w-full " >
              <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, marginLeft: { xs: 12, sm: 10, md: 20, lg: 6, } }} >
            月
          </Typography>
          <Grid item xs={4} sm={4} md={1} lg={1} className="flex ">
            <FormControl sx={{ m: 1, minWidth: 120, marginLeft: { xs: 9.5, sm: 1, md: 1, lg: 2, } }} size='small' className="w-full " >
              <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>10</MenuItem>
                <MenuItem value={2}>20</MenuItem>
                <MenuItem value={3}>30</MenuItem>
                <MenuItem value={4}>40</MenuItem>
              </Select>
            </FormControl>
            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, marginRight: { xs: 15, sm: 2, md: 10, lg: 8, } }} className="pt-5">
              日
            </Typography>
          </Grid>
        </Grid >
        <Grid container  style={{ paddingTop: '20px', }} className=''>
          <Button variant="contained" href="#contained-buttons" className='scale-90' size="medium" sx={{ marginLeft: { xs: 1, sm: 1, md: 70, lg: 80, } }}>
          <AddIcon />
          </Button>
        </Grid>

        <Box width={700} sx={{ border: '2px solid grey', marginTop: { xs: 2, sm: 1, md: 1, lg: 2, } }}>
          <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-2 pl-10">
            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, }} className=''>
              年度
            </Typography>
            <Grid item xs={2.5} sm={3} md={3} lg={2} >
              <FormControl sx={{ m: 1, minWidth: 120, marginRight: '50px' }} size='small' className="w-full">
                <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={1}>0歳児</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-2 pl-8">
            <Grid item xs={12} sm={12} md={6} lg={5} className="flex">
              <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 10, lg: 16, }, }} className='pr-2 pt-2'>
                頭囲
              </Typography>
              <TextField className='w-40 ' id="Facility-input" label="CM" type="text" size='small' sx={{ backgroundColor: "white", marginLeft: { xs: 1, sm: 1, md: 1, lg: 1, } }} />
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={5} className="flex pt-3">
            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, marginLeft: { xs: 4, sm: 4, md: 4, lg: 4, } }} className='pt-3'>
              胸囲
            </Typography>
            <TextField className='w-40 ' id="Facility-input" label="CM" type="text" size='small' sx={{ backgroundColor: "white", marginLeft: { xs: 2, sm: 2, md: 2, lg: 2, } }} />
          </Grid>

          <RadioGroup
            defaultValue=""
            aria-labelledby="demo-customized-radios"
            name="customized-radios"
          >
            <Grid container spacing={2} className='pt-2 pl-3' >
              <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, marginLeft: { xs: 4, sm: 4, md: 4, lg: 4.5, } }} className='pt-6'>
                栄養状態
              </Typography>
              <Grid item xs={1.5} sm={1.5} md={1.5} sx={{ marginLeft: { md: '10px' } }}>
                <FormControlLabel value="良" control={<Radio />} label="良 " />
              </Grid>
              <Grid item xs={1.5} sm={1.5} md={1.5}>
                <FormControlLabel value="昔 " control={<Radio />} label="昔 " />
              </Grid>
              <Grid item xs={2} sm={2} md={2}>
                <FormControlLabel value="不良" control={<Radio />} label="不良 " />
              </Grid>
            </Grid>
          </RadioGroup>

          <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-1 pl-10">
            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, paddingRight: { xs: 5.5, sm: 4, md: 5.5, lg: 1, } }} >
              脊桂
            </Typography>
            <Grid item xs={2} sm={1.5} md={1.5} lg={1.5} className="">
              <FormControl sx={{ m: 1, minWidth: 120, marginRight: '50px', marginLeft: { xs: 1, sm: 1, md: 1, lg: 1.5, } }} size='small' className="w-full " >
                <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={1}>平成</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={2} sm={2} md={2} lg={2} className=" ">
              <TextField className='w-full ' id="Facility-input" label="" type="text" size='small' sx={{ backgroundColor: "white", marginLeft: { xs: 4, sm: 7, md: 7, lg: 7.5, } }} />
            </Grid>

            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, marginLeft: { xs: 7.5, sm: 13, md: 13, lg: 13, } }} className="">
              胸郭
            </Typography>
            <Grid item xs={2} sm={1.5} md={1.5} lg={2} className="">
              <FormControl sx={{ m: 1, minWidth: 120, marginRight: '50px', marginLeft: { xs: 1, sm: 1, md: 1, lg: 1, } }} size='small' className="w-full " >
                <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={1}>平成</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={2} sm={2} md={2} lg={2} className=" ">
              <TextField className='w-full ' id="Facility-input" label="" type="text" size='small' sx={{ backgroundColor: "white", marginLeft: { xs: 4, sm: 7, md: 7, lg: 4, } }} />
            </Grid>
          </Grid >
          <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-1 pl-9">
            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, paddingRight: { xs: 5.5, sm: 4, md: 5.5, lg: 1, } }} >
              四 肢
            </Typography>
            <Grid item xs={2} sm={1.5} md={1.5} lg={1.5} className="">
              <FormControl sx={{ m: 1, minWidth: 120, marginRight: '50px', marginLeft: { xs: 1, sm: 1, md: 1, lg: 1.5, } }} size='small' className="w-full " >
                <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={1}>平成</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={2} sm={2} md={2} lg={2} className=" ">
              <TextField className='w-full ' id="Facility-input" label="" type="text" size='small' sx={{ backgroundColor: "white", marginLeft: { xs: 4, sm: 7, md: 7, lg: 7.5, } }} />
            </Grid>

            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, marginLeft: { xs:7.5, sm: 13, md: 13, lg: 13, } }} className="">
              皮膚
            </Typography>
            <Grid item xs={2} sm={1.5} md={1.5} lg={2} className="">
              <FormControl sx={{ m: 1, minWidth: 120, marginRight: '50px', marginLeft: { xs: 1, sm: 1, md: 1, lg: 1, } }} size='small' className="w-full " >
                <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={1}>平成</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={2} sm={2} md={2} lg={2} className=" ">
              <TextField className='w-full ' id="Facility-input" label="" type="text" size='small' sx={{ backgroundColor: "white", marginLeft: { xs: 4, sm: 7, md: 7, lg: 4, } }} />
            </Grid>
          </Grid >
          <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-1 pl-9">
            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 14, }, paddingRight: { xs: 4.5, sm: 3, md: 4.5, lg: 1, } }} >
              心雑音
            </Typography>
            <Grid item xs={2} sm={1.5} md={1.5} lg={1.5} className="">
              <FormControl sx={{ m: 1, minWidth: 120, marginRight: '50px', marginLeft: { xs: 1, sm: 1, md: 1,  } }} size='small' className="w-full " >
                <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={1}>平成</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={2} sm={2} md={2} lg={2} className=" ">
              <TextField className='w-full ' id="Facility-input" label="" type="text" size='small' sx={{ backgroundColor: "white", marginLeft: { xs: 4, sm: 7, md: 7, lg: 7, } }} />
            </Grid>

            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, marginLeft: { xs: 7, sm: 13, md: 13, lg: 12.5, } }} className="">
              腹部
            </Typography>
            <Grid item xs={2} sm={1.5} md={1.5} lg={2} className="">
              <FormControl sx={{ m: 1, minWidth: 120, marginRight: '50px', marginLeft: { xs: 1, sm: 1, md: 1, lg: 1, } }} size='small' className="w-full " >
                <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={1}>平成</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={2} sm={2} md={2} lg={2} className=" ">
              <TextField className='w-full ' id="Facility-input" label="" type="text" size='small' sx={{ backgroundColor: "white", marginLeft: { xs: 4, sm: 7, md: 7, lg: 4, } }} />
            </Grid>
          </Grid >


          <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-1 pl-10">
            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, paddingRight: { xs: 5.5, sm: 4, md: 5.5, lg: 1, } }} >
              口 腔
            </Typography>
            <Grid item xs={2} sm={1.5} md={1.5} lg={1.5} className="">
              <FormControl sx={{ m: 1, minWidth: 120, marginRight: '50px', marginLeft: { xs: 1, sm: 1, md: 1, lg: 1, } }} size='small' className="w-full " >
                <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={1}>平成</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={2} sm={2} md={2} lg={2} className=" ">
              <TextField className='w-full ' id="Facility-input" label="" type="text" size='small' sx={{ backgroundColor: "white", marginLeft: { xs: 4, sm: 7, md: 7, lg: 7, } }} />
            </Grid>
          </Grid >

          <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-5 pl-11">
            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, paddingRight: { xs: 5.5, sm: 4, md: 5.5, lg: 1, } }} >
              医師所見
            </Typography>
            <Grid item xs={2} sm={1.5} md={1.5} lg={1.5} className="" >
              <TextareaAutosize className="w-96 h-56 border-2" />
            </Grid>
          </Grid >

          <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-1 pl-10">
            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, paddingRight: { xs: 1, sm: 3, md: 1, lg: 1, } }} >
              (健診日)
            </Typography>
            <Grid item xs={1} sm={1} md={1} lg={1.5} className="">
              <FormControl sx={{ m: 1, minWidth: 120, marginRight: '50px', marginLeft: { xs: 5, sm: 2.5, md: 4.5, lg: 4, } }} size='small' className="w-full " >
                <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, marginLeft: { xs: 12, sm: 10, md: 11, lg: 6, } }} >
              月
            </Typography>
            <Grid item xs={1} sm={1} md={1} lg={1} className="flex ">
              <FormControl sx={{ m: 1, minWidth: 120, marginLeft: { xs: 5, sm: 1, md: 3, lg: 2, } }} size='small' className="w-full " >
                <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={1}>10</MenuItem>
                  <MenuItem value={2}>20</MenuItem>
                  <MenuItem value={3}>30</MenuItem>
                  <MenuItem value={4}>40</MenuItem>
                </Select>
              </FormControl>
              <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, marginRight: { xs: 15, sm: 2, md: 16, lg: 1, } }} className="pt-4">
                日
              </Typography>
            </Grid>
            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 16, lg: 16, }, paddingLeft: { xs: 20, sm: 17, md: 17, lg: 17, } }} className="pt-1">
              う歯の状況
            </Typography>
            <Grid item xs={1} sm={1.5} md={2} lg={1} className=" ">
              <FormControl sx={{ m: 1, minWidth: 120, marginLeft: { xs: 2, sm: 1, md: 1, lg: 2, } }} size='small' className="w-full " >
                <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={1}>10</MenuItem>
                  <MenuItem value={2}>20</MenuItem>
                  <MenuItem value={3}>30</MenuItem>
                  <MenuItem value={4}>40</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid >

          <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-1 pl-10">
            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, paddingRight: { xs: 1, sm: 3, md: 1, lg: 1, } }} >
              (健診日)
            </Typography>
            <Grid item xs={1} sm={1} md={1} lg={1.5} className="">
              <FormControl sx={{ m: 1, minWidth: 120, marginRight: '50px', marginLeft: { xs: 5, sm: 2.5, md: 4.5, lg: 4, } }} size='small' className="w-full " >
                <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, marginLeft: { xs: 12, sm: 10, md: 11, lg: 6, } }} >
              月
            </Typography>
            <Grid item xs={1} sm={1} md={1} lg={1} className="flex ">
              <FormControl sx={{ m: 1, minWidth: 120, marginLeft: { xs: 5, sm: 1, md: 3, lg: 2, } }} size='small' className="w-full " >
                <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={1}>10</MenuItem>
                  <MenuItem value={2}>20</MenuItem>
                  <MenuItem value={3}>30</MenuItem>
                  <MenuItem value={4}>40</MenuItem>
                </Select>
              </FormControl>
              <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, marginRight: { xs: 15, sm: 2, md: 16, lg: 1, } }} className="pt-4">
                日
              </Typography>
            </Grid>
          </Grid >
          <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, paddingRight: { xs: 1, sm: 3, md: 1, lg: 1, } }} className="flex justify-start pl-9 pt-5">
            検尿
          </Typography>
          <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-1 pl-10">
            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, paddingRight: { xs: 1, sm: 1, md: 1, lg: 1, } }} className="flex justify-start pl-9 ">
              蛋白
            </Typography>
            <Grid item xs={1} sm={1} md={1} lg={1} className="">
              <FormControl sx={{ m: 1, minWidth: 120, marginRight: '50px', marginLeft: { xs: 3, sm: 2.5, md: 3, lg: 4, } }} size='small' className="w-full " >
                <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, marginLeft: { xs: 15, sm: 15, md: 15, lg: 15, } }} >
              他
            </Typography>
            <Grid item xs={2} sm={1.5} md={2} lg={3} className=" ">
              <TextField className='w-full ' id="Facility-input" label="" type="text" size='small' sx={{ backgroundColor: "white", marginLeft: { xs: 1, sm: 2, md: 2, lg: 2, } }} />
            </Grid>
          </Grid >
          <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-1 pl-10">
            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, paddingRight: { xs: 1, sm: 1, md: 1, lg: 1, } }} className="flex justify-start pl-9 ">
              蛋白
            </Typography>
            <Grid item xs={1} sm={1} md={1} lg={1} className="">
              <FormControl sx={{ m: 1, minWidth: 120, marginRight: '50px', marginLeft: { xs: 3, sm: 2.5, md: 3, lg: 4, } }} size='small' className="w-full " >
                <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, marginLeft: { xs: 15, sm: 15, md: 15, lg: 15, } }} >
              他
            </Typography>
            <Grid item xs={2} sm={1.5} md={2} lg={3} className=" ">
              <TextField className='w-full ' id="Facility-input" label="" type="text" size='small' sx={{ backgroundColor: "white", marginLeft: { xs: 1, sm: 2, md: 2, lg: 2, } }} />
            </Grid>
          </Grid >

          <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, paddingRight: { xs: 1, sm: 3, md: 1, lg: 1, } }} className="flex justify-start pl-9 pt-5">
            発育測定表
          </Typography>

          <Grid container spacing={1} alignItems='center' className="pt-5 ">
            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, paddingRight: { xs: 1, sm: 1, md: 1, lg: 1, } }} className="flex justify-start pl-96 ">
              身長(cm)
            </Typography>
            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, paddingRight: { xs: 1, sm: 1, md: 1, lg: 1, } }} className="flex justify-start pl-14 ">
              体重(kg)
            </Typography>
          </Grid >

          <Grid container spacing={1} alignItems='center' className="pt-5 ">
            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, paddingRight: { xs: 1, sm: 1, md: 1, lg: 1, } }} className="flex justify-start pl-28 ">
              月
            </Typography>
            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, paddingRight: { xs: 1, sm: 1, md: 1, lg: 1, } }} className="flex justify-start pl-20 ">
              4月
            </Typography>
            <Grid item xs={1.5} sm={1.5} md={1.5} lg={1.5} className=" ">
              <TextField className='w-full ' id="Facility-input" label="" type="text" size='small' sx={{ backgroundColor: "white", marginLeft: { xs: 15, sm: 15, md: 15, lg: 15, } }} />
            </Grid>
            <Grid item xs={1.5} sm={1.5} md={1.5} lg={1.5} className=" ">
              <TextField className='w-full ' id="Facility-input" label="" type="text" size='small' sx={{ backgroundColor: "white", marginLeft: { xs: 18, sm: 18, md: 18, lg: 20, } }} />
            </Grid>
          </Grid >

          <Grid container spacing={1} alignItems='center' className="pt-4 ">
            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, paddingRight: { xs: 1, sm: 1, md: 1, lg: 1, } }} className="flex justify-start pl-28 ">
              月
            </Typography>
            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, paddingRight: { xs: 1, sm: 1, md: 1, lg: 1, } }} className="flex justify-start pl-20 ">
              5月
            </Typography>
            <Grid item xs={1.5} sm={1.5} md={1.5} lg={1.5} className=" ">
              <TextField className='w-full ' id="Facility-input" label="" type="text" size='small' sx={{ backgroundColor: "white", marginLeft: { xs: 15, sm: 15, md: 15, lg: 15, } }} />
            </Grid>
            <Grid item xs={1.5} sm={1.5} md={1.5} lg={1.5} className=" ">
              <TextField className='w-full ' id="Facility-input" label="" type="text" size='small' sx={{ backgroundColor: "white", marginLeft: { xs: 18, sm: 18, md: 18, lg: 20, } }} />
            </Grid>
          </Grid >

          <Grid container spacing={1} alignItems='center' className="pt-4 ">
            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, paddingRight: { xs: 1, sm: 1, md: 1, lg: 1, } }} className="flex justify-start pl-28 ">
              月
            </Typography>
            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, paddingRight: { xs: 1, sm: 1, md: 1, lg: 1, } }} className="flex justify-start pl-20 ">
              6月
            </Typography>
            <Grid item xs={1.5} sm={1.5} md={1.5} lg={1.5} className=" ">
              <TextField className='w-full ' id="Facility-input" label="" type="text" size='small' sx={{ backgroundColor: "white", marginLeft: {xs: 15, sm: 15, md: 15, lg: 15,} }} />
            </Grid>
            <Grid item xs={1.5} sm={1.5} md={1.5} lg={1.5} className=" ">
              <TextField className='w-full ' id="Facility-input" label="" type="text" size='small' sx={{ backgroundColor: "white", marginLeft: { xs: 18, sm: 18, md: 18, lg: 20, } }} />
            </Grid>
          </Grid >

          <Grid container spacing={1} alignItems='center' className="pt-4 ">
            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, paddingRight: { xs: 1, sm: 1, md: 1, lg: 1, } }} className="flex justify-start pl-28 ">
              月
            </Typography>
            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, paddingRight: { xs: 1, sm: 1, md: 1, lg: 1, } }} className="flex justify-start pl-20 ">
              7月
            </Typography>
            <Grid item xs={1.5} sm={1.5} md={1.5} lg={1.5} className=" ">
              <TextField className='w-full ' id="Facility-input" label="" type="text" size='small' sx={{ backgroundColor: "white", marginLeft: { xs: 15, sm: 15, md: 15, lg: 15, } }} />
            </Grid>
            <Grid item xs={1.5} sm={1.5} md={1.5} lg={1.5} className=" ">
              <TextField className='w-full ' id="Facility-input" label="" type="text" size='small' sx={{ backgroundColor: "white", marginLeft: { xs: 18, sm: 18, md: 18, lg: 20, } }} />
            </Grid>
          </Grid >

          <Grid container spacing={1} alignItems='center' className="pt-4 ">
            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, paddingRight: { xs: 1, sm: 1, md: 1, lg: 1, } }} className="flex justify-start pl-28 ">
              月
            </Typography>
            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, paddingRight: { xs: 1, sm: 1, md: 1, lg: 1, } }} className="flex justify-start pl-20 ">
              8月
            </Typography>
            <Grid item xs={1.5} sm={1.5} md={1.5} lg={1.5} className=" ">
              <TextField className='w-full ' id="Facility-input" label="" type="text" size='small' sx={{ backgroundColor: "white", marginLeft: { xs: 15, sm: 15, md: 15, lg: 15, } }} />
            </Grid>
            <Grid item xs={1.5} sm={1.5} md={1.5} lg={1.5} className=" ">
              <TextField className='w-full ' id="Facility-input" label="" type="text" size='small' sx={{ backgroundColor: "white", marginLeft: { xs: 18, sm: 18, md: 18, lg: 20, } }} />
            </Grid>
          </Grid >

          <Grid container spacing={1} alignItems='center' className="pt-4 ">
            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, paddingRight: { xs: 1, sm: 1, md: 1, lg: 1, } }} className="flex justify-start pl-28 ">
              月
            </Typography>
            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, paddingRight: { xs: 1, sm: 1, md: 1, lg: 1, } }} className="flex justify-start pl-20 ">
              9月
            </Typography>
            <Grid item xs={1.5} sm={1.5} md={1.5} lg={1.5} className=" ">
              <TextField className='w-full ' id="Facility-input" label="" type="text" size='small' sx={{ backgroundColor: "white", marginLeft: {xs: 15, sm: 15, md: 15, lg: 15, } }} />
            </Grid>
            <Grid item xs={1.5} sm={1.5} md={1.5} lg={1.5} className=" ">
              <TextField className='w-full ' id="Facility-input" label="" type="text" size='small' sx={{ backgroundColor: "white", marginLeft: { xs: 18, sm: 18, md: 18, lg: 20, } }} />
            </Grid>
          </Grid >

          <Grid container spacing={1} alignItems='center' className="pt-4 ">
            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, paddingRight: { xs: 1, sm: 1, md: 1, lg: 1, } }} className="flex justify-start pl-28 ">
              月
            </Typography>
            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, paddingRight: { xs: 1, sm: 1, md: 1, lg: 1, } }} className="flex justify-start pl-20 ">
              10月
            </Typography>
            <Grid item xs={1.5} sm={1.5} md={1.5} lg={1.5} className=" ">
              <TextField className='w-full ' id="Facility-input" label="" type="text" size='small' sx={{ backgroundColor: "white", marginLeft: {xs: 14, sm: 14, md: 14, lg: 14,} }} />
            </Grid>
            <Grid item xs={1.5} sm={1.5} md={1.5} lg={1.5} className=" ">
              <TextField className='w-full ' id="Facility-input" label="" type="text" size='small' sx={{ backgroundColor: "white", marginLeft: { xs: 17, sm: 17, md: 17, lg: 19, } }} />
            </Grid>
          </Grid >

          <Grid container spacing={1} alignItems='center' className="pt-4 ">
            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, paddingRight: { xs: 1, sm: 1, md: 1, lg: 1, } }} className="flex justify-start pl-28 ">
              月
            </Typography>
            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, paddingRight: { xs: 1, sm: 1, md: 1, lg: 1, } }} className="flex justify-start pl-20 ">
              11月
            </Typography>
            <Grid item xs={1.5} sm={1.5} md={1.5} lg={1.5} className=" ">
              <TextField className='w-full ' id="Facility-input" label="" type="text" size='small' sx={{ backgroundColor: "white", marginLeft: {xs: 14, sm: 14, md: 14, lg: 14,} }} />
            </Grid>
            <Grid item xs={1.5} sm={1.5} md={1.5} lg={1.5} className=" ">
              <TextField className='w-full ' id="Facility-input" label="" type="text" size='small' sx={{ backgroundColor: "white", marginLeft: { xs: 17, sm: 17, md: 17, lg: 19, } }} />
            </Grid>
          </Grid >

          <Grid container spacing={1} alignItems='center' className="pt-4">
            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, paddingRight: { xs: 1, sm: 1, md: 1, lg: 1, } }} className="flex justify-start pl-28 ">
              月
            </Typography>
            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, paddingRight: { xs: 1, sm: 1, md: 1, lg: 1, } }} className="flex justify-start pl-20 ">
              12月
            </Typography>
            <Grid item xs={1.5} sm={1.5} md={1.5} lg={1.5} className=" ">
              <TextField className='w-full ' id="Facility-input" label="" type="text" size='small' sx={{ backgroundColor: "white", marginLeft: { xs: 14, sm: 14, md: 14, lg: 14, } }} />
            </Grid>
            <Grid item xs={1.5} sm={1.5} md={1.5} lg={1.5} className=" ">
              <TextField className='w-full ' id="Facility-input" label="" type="text" size='small' sx={{ backgroundColor: "white", marginLeft: { xs: 17, sm: 17, md: 17, lg: 19, } }} />
            </Grid>
          </Grid >

          <Grid container spacing={1} alignItems='center' className="pt-4 ">
            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, paddingRight: { xs: 1, sm: 1, md: 1, lg: 1, } }} className="flex justify-start pl-28 ">
              月
            </Typography>
            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, paddingRight: { xs: 1, sm: 1, md: 1, lg: 1, } }} className="flex justify-start pl-20 ">
              1月
            </Typography>
            <Grid item xs={1.5} sm={1.5} md={1.5} lg={1.5} className=" ">
              <TextField className='w-full ' id="Facility-input" label="" type="text" size='small' sx={{ backgroundColor: "white", marginLeft: { xs: 15, sm: 15, md: 15, lg: 15, } }} />
            </Grid>
            <Grid item xs={1.5} sm={1.5} md={1.5} lg={1.5} className=" ">
              <TextField className='w-full ' id="Facility-input" label="" type="text" size='small' sx={{ backgroundColor: "white", marginLeft: { xs: 18, sm: 18, md: 18, lg: 20, } }} />
            </Grid>
          </Grid >

          <Grid container spacing={1} alignItems='center' className="pt-4 ">
            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, paddingRight: { xs: 1, sm: 1, md: 1, lg: 1, } }} className="flex justify-start pl-28 ">
              月
            </Typography>
            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, paddingRight: { xs: 1, sm: 1, md: 1, lg: 1, } }} className="flex justify-start pl-20 ">
              2月
            </Typography>
            <Grid item xs={1.5} sm={1.5} md={1.5} lg={1.5} className=" ">
              <TextField className='w-full ' id="Facility-input" label="" type="text" size='small' sx={{ backgroundColor: "white", marginLeft: { xs: 15, sm: 15, md: 15, lg: 15,} }} />
            </Grid>
            <Grid item xs={1.5} sm={1.5} md={1.5} lg={1.5} className=" ">
              <TextField className='w-full ' id="Facility-input" label="" type="text" size='small' sx={{ backgroundColor: "white", marginLeft: { xs: 18, sm: 18, md: 18, lg: 20, } }} />
            </Grid>
          </Grid >

          <Grid container spacing={1} alignItems='center' className="pt-4 ">
            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, paddingRight: { xs: 1, sm: 1, md: 1, lg: 1, } }} className="flex justify-start pl-28 ">
              月
            </Typography>
            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, paddingRight: { xs: 1, sm: 1, md: 1, lg: 1, } }} className="flex justify-start pl-20 ">
              3月
            </Typography>
            <Grid item xs={1.5} sm={1.5} md={1.5} lg={1.5} className=" ">
              <TextField className='w-full ' id="Facility-input" label="" type="text" size='small' sx={{ backgroundColor: "white", marginLeft: { xs: 15, sm: 15, md: 15, lg: 15, } }} />
            </Grid>
            <Grid item xs={1.5} sm={1.5} md={1.5} lg={1.5} className=" ">
              <TextField className='w-full ' id="Facility-input" label="" type="text" size='small' sx={{ backgroundColor: "white", marginLeft: { xs: 18, sm: 18, md: 18, lg: 20, } }} />
            </Grid>
          </Grid >

          <Grid container spacing={1} alignItems='center' className="pt-8 ">
           
          </Grid >
        </Box>

    </>
  );
};
