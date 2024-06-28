import { Button, Card, FormControl, Grid, InputAdornment, MenuItem, Select, TextField, Typography } from '@mui/material';
import ContentMain from "../../content/Content";
import TableFulllist from "../addperf/componentstable/TableFulllist"
import TableIndividualvote from "../addperf/componentstable/TableIndividualvote"
import TableEmployeesBonus from "../addperf/componentstable/TableEmployeesBonus"
import Tableresults from "../addperf/componentstable/Tableresults"
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});





export default function AddPerf() {


  return (

    <>
      <ContentMain >
        {/* Start Grid */}
        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-4 pl-3' >
          <Typography component='div' className="pl-[45px] md:pl-[60px] lg:pl-28 pt-6" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, }}>
            日付:
          </Typography>
          <Grid item xs={3.5} sm={3} md={1.5}>
            <FormControl size="small" fullWidth>
              <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white", }}>
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

          <Grid item xs={3.3} sm={4} md={2}>
            <TextField
              className='w-full '
              id="-input"
              label=""
              type="text"
              size='small'
              sx={{
                backgroundColor: "white",
              }}
            />
          </Grid>

          <Typography component='div' className="pl-2 pt-6 lg:pl-1 lg:pr-4 " sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, }}>
            年
          </Typography>
          <Typography component='div' className="pl-[85px] pt-6 md:pl-[100px] lg:pl-0 "></Typography>

          <Grid item xs={3.5} sm={3} md={1.1}>
            <FormControl size="small" fullWidth>
              <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white", }}>
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

          <Typography component='div' className="pl-1 md:pl-1 md:pr-2 pt-6" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, }}>
            月
          </Typography>

          <Grid item xs={3.3} sm={4} md={1.1}>
            <FormControl size="small" fullWidth>
              <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white", }}>
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

          <Typography component='div' className="pl-2 md:pl-1 pt-6" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, }}>
            日
          </Typography>

        </Grid>
        {/* End Grid */}

        {/* Start Facility Director  */}
        <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-7  ">
          <Grid item xs={4} sm={3} md={3} lg={2} >
            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, marginLeft: { xs: -5, sm: 4.5, md: -1, lg: -1 } }} >
              事業者名:
            </Typography>
          </Grid>
          <Grid item xs={3} sm={2} md={2} lg={2} >
            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, fontWeight: 'bold', marginLeft: { xs: -8, sm: -1.5, md: -18, lg: -23 } }} >
              社会福祉法人
            </Typography>
          </Grid>
          <Grid item xs={3} sm={2} md={2} lg={2} >
            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, fontWeight: 'bold', marginLeft: { xs: -5, sm: -1.5, md: -20, lg: -35 } }} >
              つばさ福祉会
            </Typography>
          </Grid>
        </Grid >
        {/* End Facility Director  */}

        {/* Start Facility Director  */}
        <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-7  ">
          <Grid item xs={3} sm={3} md={2} lg={2} >
            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, marginLeft: { xs: -1, sm: 5, md: 6, lg: -0.5 } }} >
              代表者名:
            </Typography>
          </Grid>
          <Grid item xs={2} sm={2} md={2} lg={2} >
            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, fontWeight: 'bold', marginLeft: { xs: -1, sm: -2, md: -7, lg: -28 } }} >
              理事長
            </Typography>
          </Grid>
          <Grid item xs={2} sm={2} md={2} lg={2} >
            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, fontWeight: 'bold', marginLeft: { xs: -1, sm: -5, md: -20, lg: -55 } }} >
              渡部
            </Typography>
          </Grid>
          <Grid item xs={3} sm={3} md={2} lg={2} >
            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, fontWeight: 'bold', marginLeft: { xs: -1, sm: -10, md: -33, lg: -80 } }} >
              封子
            </Typography>
          </Grid>
        </Grid >
        {/* End Facility Director  */}

        <Grid item xs={12} sm={12} md={12} lg={12} className='pt-5' >
          <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, backgroundColor: '#CCF0FD', fontWeight: 'bold' }} className='flex justify-start h-10 pt-2 pl-5' >
            I 総插表
          </Typography>
        </Grid>

        {/* Start Facility Director  */}
        <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-7  ">
          <Grid item xs={3} sm={3} md={2} lg={2} >
            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, marginLeft: { xs: -1, sm: 5, md: 6, lg: -0.5 } }} >
              施設名:
            </Typography>
          </Grid>
          <Grid item xs={6} sm={4} md={4} lg={2} >
            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, fontWeight: 'bold', marginLeft: { xs: -7, sm: -3, md: -15, lg: -18 } }} >
              いちざきみんなの家
            </Typography>
          </Grid>
        </Grid >
        {/* End Facility Director  */}

        {/* Start Facility Director  */}
        <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-4  ">
          <Grid item xs={3} sm={3} md={2} lg={2} >
            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, marginLeft: { xs: -1, sm: 5, md: 6, lg: -0.5 } }} >
              所在地:
            </Typography>
          </Grid>
          <Grid item xs={6} sm={5} md={4} lg={2} >
            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, fontWeight: 'bold', marginLeft: { xs: -1, sm: -1, md: -8, lg: -8 } }} >
              福岡市南区市崎1丁目15番11号
            </Typography>
          </Grid>
        </Grid >
        {/* End Facility Director  */}

        {/* start table excretion */}
        <Grid item xs={12} sm={12} md={12} lg={12} className='pt-6' >
          <TableFulllist />
        </Grid>
        {/* end table excretion */}

        <Grid item xs={12} sm={12} md={12} lg={12} className='pt-4 pl-1 lg:pl-8' >
          <Typography component="div" sx={{ color: 'red', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, }} className='flex justify-start h-10 pt-2 pl-5' >
            ※加算・調整項目のうち申請した項目について、「申語の有無」欄に〇印を記載すること。
          </Typography>
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={12} className='pt-4' >
          <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, backgroundColor: '#CCF0FD', fontWeight: 'bold' }} className='flex justify-start h-10 pt-2 pl-5' >
            II 個票
          </Typography>
        </Grid>
        {/* Start Card */}
        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-10 pl-10' >
          <Card sx={{ bgcolor: "pink", width: 120, height: 40 }}>
            <Typography component='div' className="pt-2">
              1休日保育加算
            </Typography>
          </Card>
        </Grid>
        {/* End Card */}

        <Grid item xs={12} sm={12} md={12} lg={12} className='pl-10 pt-5' >
          <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, }} className='flex justify-start h-10 pt-2 pl-5' >
            【実績報告書】
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} className='pt-8' >
          <TableIndividualvote />
        </Grid>

        <Grid container spacing={1} className="pt-4  pl-18 lg:pl-10">
          <Grid item xs={12} sm={12} md={12} lg={12} className='pt-8 ' >
            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 14, }, }} className='flex justify-start  pt-2 pl-5 text-justify' >
              ※1認定を受けた年間延べ利用子ども数(見込)を記入すること。延べ利用子ども数は1人の子どもが年に30日利用した場合は30人と計算すること。
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} className='pt-1  ' >
            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 14, }, }} className='flex justify-start  pt-2 pl-5 text-justify' >
              ※2実際の年間延べ利用子ども数の実績を記入すること。
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} className='pt-1  ' >
            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 14, }, }} className='flex justify-start pt-2 pl-5 text-justify' >
              ※3年度中に休日保育を利用した実利用子ども数を記入すること。毎週利用している子どもも、年に1度しか利用しない子どももそれぞれ1人と記入する。
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} className='pt-1' >
            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 14, }, }} className='flex justify-start  pt-2 pl-5 text-justify' >
              ※4※3のうち、平日は他の施設・事業所を利用する子どもの数を記入すること。
            </Typography>
          </Grid>
        </Grid>

        {/* Start Card */}
        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-10 pl-10' >
          <Card sx={{ bgcolor: "pink", width: 200, height: 40 }}>
            <Typography component='div' className="pt-2">
              2チーム保育推進加算
            </Typography>
          </Card>
        </Grid>
        {/* End Card */}

        {/* Start Grid */}
        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-4 pl-3' >
          <Typography component='div' className="pl-[45px] md:pl-[60px] lg:pl-28 pt-6" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, marginLeft: { xs: -3, sm: -5, md: 2, lg: 3.5, } }}>
            加算額(実績)A:
          </Typography>
          <Grid item xs={3} sm={3} md={2}>
            <TextField
              className='w-full '
              id="-input"
              label=""
              type="text"
              size='small'
              sx={{
                backgroundColor: "white",
                fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }
              }}
              InputProps={{
                endAdornment: <InputAdornment position="end">円</InputAdornment>,
              }}
            />
          </Grid>
          <Typography component='div' className="pl-2 pt-6 lg:pl-1 lg:pr-4 " sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, marginLeft: { xs: 1, sm: 1, md: 5.5, lg: 4, } }}>
            実支出額B:
          </Typography>
          <Grid item xs={3.} sm={3} md={2}>
            <TextField
              className='w-full '
              id="-input"
              label=""
              type="text"
              size='small'
              sx={{
                backgroundColor: "white",
                fontSize: { xs: 11, sm: 11, md: 11, lg: 16, },
                marginLeft: { xs: -2, sm: -1, md: 1, lg: -4, }
              }}
              InputProps={{
                endAdornment: <InputAdornment position="end">円</InputAdornment>,
              }}
            />
          </Grid>
        </Grid>
        {/* End Grid */}

        {/* Start Grid */}
        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-4 pl-3' >
          <Typography component='div' className="pl-[45px] md:pl-[60px] lg:pl-28 pt-6" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, marginLeft: { xs: -3, sm: -5, md: 5.5, lg: 4, } }}>
            加算額の残額(A-B)
          </Typography>
          <Grid item xs={6} sm={7} md={2}>
            <TextField
              className='w-full '
              id="-input"
              label=""
              type="text"
              size='small'
              sx={{
                backgroundColor: "white",
                fontSize: { xs: 11, sm: 11, md: 11, lg: 16, },
                marginLeft: { xs: -1, sm: 1, md: 1, lg: -2, }
              }}
              InputProps={{
                endAdornment: <InputAdornment position="end">円</InputAdornment>,
              }}
            />
          </Grid>
          <Typography component='div' className="pl-2 pt-6 lg:pl-1 lg:pr-4 " sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, marginLeft: { xs: 1, sm: 1.5, md: 5.5, lg: 4, } }}>
            (残額が生じた理由):
          </Typography>
          <Typography component='div' className="pl-[85px] pt-6 md:pl-[100px] lg:pl-0 "></Typography>
          <Grid item xs={5} sm={6} md={2}>
            <TextField
              className='w-full '
              id="-input"
              label=""
              type="text"
              size='small'
              sx={{
                backgroundColor: "white",
                fontSize: { xs: 11, sm: 11, md: 11, lg: 16, },
                marginLeft: { xs: -22.5, sm: -25, md: -1, lg: -4, }
              }}
            />
          </Grid>
        </Grid>
        {/* End Grid */}

        {/* Start Grid */}
        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-1 pl-3' >
          <Grid item xs={6} sm={4} md={4}>
            <Typography component='div' className="pl-[45px] md:pl-[60px] lg:pl-28 pt-6" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, marginLeft: { xs: -16, sm: -15, md: -2, lg: -15, } }}>
              (残額の使途)
            </Typography>
          </Grid>
          <Grid item xs={6} sm={8} md={8}>
            <Typography component='div' className="pl-[45px] md:pl-[60px] lg:pl-28 pt-6" sx={{ color: 'red', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, marginLeft: { xs: -18, sm: -25, md: -33, lg: -80, } }}>
              (記載例)・〇年〇月に全ての職員に対し、一時金として支給など
            </Typography>
          </Grid>
        </Grid>
        {/* End Grid */}

        {/* Start Grid */}
        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-1 pl-3' >
          <Grid item xs={9} sm={8} md={4}>
            <TextField
              className='w-full '
              id="-input"
              label=""
              type="text"
              size='small'
              sx={{
                backgroundColor: "white",
                fontSize: { xs: 11, sm: 11, md: 11, lg: 16, },
                marginLeft: { xs: 10, sm: 12, md: 27, lg: 31, }
              }}
            />
          </Grid>
        </Grid>
        {/* End Grid */}

        {/* Start Card */}
        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-14 pl-10' >
          <Card sx={{ bgcolor: "pink", width: 200, height: 40 }}>
            <Typography component='div' className="pt-2">
              3高者等活躍促進加算
            </Typography>
          </Card>
        </Grid>
        {/* End Card */}

        <Grid item xs={12} sm={12} md={12} lg={12} className='pl-10 pt-5' >
          <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, }} className='flex justify-start h-10 pt-2 pl-5' >
            【高齡者等活躍促進加算職員】
          </Typography>
        </Grid>
        {/* start table excretion */}
        <Grid item xs={12} sm={12} md={12} lg={12} className='pt-8' >
          <TableEmployeesBonus />
        </Grid>
        {/* end table excretion */}

        {/* Start Card */}
        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-14 pl-10' >
          <Card sx={{ bgcolor: "pink", width: 200, height: 40 }}>
            <Typography component='div' className="pt-2">
              4施設機能強化推進費加算
            </Typography>
          </Card>
        </Grid>
        {/* End Card */}

        <Grid item xs={12} sm={12} md={12} lg={12} className='pl-10 pt-5' >
          <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, }} className='flex justify-start h-10 pt-2 pl-5' >
            【事業実施実績額】 (円)
          </Typography>
        </Grid>

        {/* start table excretion */}
        <Grid item xs={12} sm={12} md={12} lg={12} className='pt-8' >
          <Tableresults />
        </Grid>
        {/* end table excretion */}

        <Grid item xs={12} sm={12} md={12} lg={12} className='pl-1 pt-9 flex justify-start' >
          <Button
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            startIcon={<CloudUploadIcon />}
          >
            <Typography component="div" sx={{ color: 'white', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, }} className='' >
            Upload file 
          </Typography>
            
            <VisuallyHiddenInput type="file" />
          </Button>
        </Grid>







      </ContentMain>
    </>
  );
};
