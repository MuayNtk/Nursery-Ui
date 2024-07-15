import { Button,Card, FormControl, Grid, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import Infotable from "../supportfund/componentTable/Infotable"
import YearForm from "../../componentsform/YearForm";
import MonthForm from "../../componentsform/MonthForm";
import DayForm from "../../componentsform/DayForm";
import Applicationtable from "../supportfund/componentTable/Applicationtable"
import Bankacctable from "../supportfund/componentTable/Bankacctable"
import Highpressure from "../supportfund/componentTable/Highpressure"
import Gastable from "../supportfund/componentTable/Gastable"
import Typetable from "../supportfund/componentTable/Typetable"
import Type2table from "../supportfund/componentTable/Type2table"
import Type3table from "../supportfund/componentTable/Type3table"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SaveIcon from '@mui/icons-material/Save'


export default function SupportFundAdd() {


  return (
    <>
      <div>
        {/* Start Facility Director  */}
        <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-4  ">
          <Grid item xs={3} sm={3} md={2} lg={2} >
            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, marginLeft: { xs: -1, sm: 5, md: 6, lg: -15 } }} >
              令和:
            </Typography>
          </Grid>
          <Grid item xs={6} sm={5} md={4} lg={2} >
            <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, fontWeight: 'bold', marginLeft: { xs: -18, sm: -15, md: -25, lg: -45 } }} >
              566
            </Typography>
          </Grid>
        </Grid >
        {/* End Facility Director  */}
        {/* start grid  履歷*/}
        <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-5 ">
          <Grid item xs={12} sm={12} md={12} lg={12} className="" >
            <Typography
              component="div"
              sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, fontWeight: 'bold', }}
              className='flex justify-start h-11 pt-3 pl-5'
              bgcolor={"#CCF0FD"}
            >
              福岡市保育所等物価高騰対策支援金申請書兼讀求書
            </Typography>
          </Grid>
        </Grid>
        {/* End grid  履歷*/}
        {/* Start 日時 Grid */}
        <Grid container spacing={2} className='pt-5'>
          <Grid item xs={4} sm={3} md={3} lg={3} sx={{ ml: { xs: 0, sm: 0, md: -1, lg: 52 } }}>
            <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
              日時 :
            </Typography>
          </Grid>
          <Grid item xs={3.5} sm={2.5} md={2} lg={1.3}>
            <FormControl size="small" fullWidth>
              <InputLabel id="era-select-label">平成</InputLabel>
              <Select
                id="era-select"
                labelId="era-select-label"
                label="平成"
                sx={{ backgroundColor: "white" }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>昭和</MenuItem>
                <MenuItem value={2}>平成</MenuItem>
                <MenuItem value={3}>令和</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={3.5} sm={2.5} md={2} lg={1.2} sx={{ ml: { xs: -1, sm: -1.5, md: -1, lg: -1 } }}>
            <YearForm />
          </Grid>
          <Grid item xs={3} sm={2} md={2} lg={1} sx={{ ml: { xs: 11, sm: -1.5, md: -2, lg: -1 } }}>
            <MonthForm />
          </Grid>
          <Grid item xs={4} sm={1} md={2} lg={1} sx={{ ml: { xs: 0, sm: 2.5, md: -3, lg: 0 } }}>
            <DayForm />
          </Grid>
        </Grid>
        {/* End 日時 Grid */}


        {/* Start 日時 Grid */}
        <Grid container spacing={2} className='pt-5'>
          <Grid item xs={12} sm={12} md={12} lg={3} >
            <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-start'>
              (あて先)福岡市長
            </Typography>
          </Grid>
        </Grid>
        {/* End 日時 Grid */}
        {/* Start 日時 Grid */}
        <Grid container spacing={2} className=''>
          <Grid item xs={12} sm={12} md={12} lg={12} >
            <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-start'>
              誓約・同意事項に誓約・同意の上、申請します。
            </Typography>
          </Grid>
        </Grid>
        {/* End 日時 Grid */}
        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-10 pl-3' >
          <Card sx={{ bgcolor: "pink", width: 180, height: 40 }}>
            <Typography component='div' className="pt-2 text-center">
              1申請,請求者等情報
            </Typography>
          </Card>
        </Grid>
        {/* start table excretion */}
        <Grid item xs={12} sm={12} md={12} lg={12} className='pt-10' >
          <Infotable />
        </Grid>
        {/* end table excretion */}
        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-10 pl-3' >
          <Card sx={{ bgcolor: "pink", width: 250, height: 40 }}>
            <Typography component='div' className="pt-2 text-center">
              2 申請內容(申請額.請求額)
            </Typography>
          </Card>
        </Grid>
        {/* start table excretion */}
        <Grid item xs={12} sm={12} md={12} lg={12} className='pt-10 ml-20' >
          <Applicationtable />
        </Grid>
        {/* end table excretion */}
        <Grid item xs={12} sm={12} md={12} lg={12} className='pt-1' >
          <Typography component="div" sx={{ color: 'red', fontSize: { xs: 11, sm: 11, md: 11, lg: 14, }, ml: { xs: 6, sm: 8, md: 15, lg: 25 } }} className='flex justify-start  pt-2 pl-5 text-justify' >
            ※4※3のうち、平日は他の施設・事業所を利用する子どもの数を記入すること。
          </Typography>
        </Grid>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-10 pl-3' >
          <Card sx={{ bgcolor: "pink", width: 150, height: 40 }}>
            <Typography component='div' className="pt-2 text-center">
              3振込口座情報
            </Typography>
          </Card>
        </Grid>
        {/* start table excretion */}
        <Grid item xs={12} sm={12} md={12} lg={12} className='pt-10 ml-20' >
          <Bankacctable />
        </Grid>
        {/* end table excretion */}
        <Grid item xs={12} sm={12} md={12} lg={12} className='pt-1' >
          <Typography component="div" sx={{ color: 'red', fontSize: { xs: 11, sm: 11, md: 11, lg: 14, }, ml: { xs: 1, sm: 3, md: 5, lg: 11 } }} className='flex justify-start  pt-2 pl-5 text-justify' >
            ※口座情報を入力した場合は、併せて通帳の写しも提出してください。
          </Typography>
        </Grid>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-10 pl-3' >
          <Card sx={{ bgcolor: "pink", width: 150, height: 40 }}>
            <Typography component='div' className="pt-2 text-center">
              4誓約.同意事項
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} className='pt-3' >
          <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 14, }, ml: { xs: 1, sm: 3, md: 5, lg: 11 } }} className='flex justify-start  pt-2 pl-5 text-justify' >
        ・給付要件を満たしています。 また、 給付要件を確認するため、 関係部署 (福岡県警察、 税務担当課) に照会することに同意します。
          </Typography>
          <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 14, }, ml: { xs: 1, sm: 3, md: 5, lg: 11 } }} className='flex justify-start  pt-2 pl-5 text-justify' >
        ・申請した支援金は、物価高騰により影響を受けた施設等の運営費にあてます。
          </Typography>
          <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 14, }, ml: { xs: 1, sm: 3, md: 5, lg: 11 } }} className='flex justify-start  pt-2 pl-5 text-justify' >
        ・虚偽が判明した場合や支給要件に該当しないことが判明した場合は、支援金の返還に応じます。F
          </Typography>
          <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 14, }, ml: { xs: 1, sm: 3, md: 5, lg: 12 } }} className='flex justify-start  pt-2 pl-3 text-justify' >
        ・ 代表者 役員又は使用人その他の従業員若しくは構成員等が、福岡市暴力団排除条例 (平成 22 年福岡市条例第30号) 第2条第2号に規定する暴力団員又は同条第 1号に規定する暴力団又は暴力団員若しくは暴力団と密接な関係を有する者には該当せず、かつ将来にわたっても該当しないことを誓約します。 また、上記の暴力 団、暴力団員等が経営に事実上参画していないことを誓約します。
          </Typography>
          <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 14, }, ml: { xs: 1, sm: 3, md: 5, lg: 11 } }} className='flex justify-start  pt-2 pl-5 text-justify' >
        ・この申請書は、福岡市において支給決定をした後は、支援金の請求書として取扱います。
          </Typography>
        </Grid>
        {/* start table excretion */}
        <Grid item xs={12} sm={12} md={12} lg={12} className='pt-10 ml-20' >
          <Highpressure />
        </Grid>
        {/* end table excretion */}
         {/* start table excretion */}
         <Grid item xs={12} sm={12} md={12} lg={12} className='pt-10 ml-20' >
          <Gastable />
        </Grid>
        {/* end table excretion */}
         {/* start table excretion */}
         <Grid item xs={12} sm={12} md={12} lg={12} className='pt-10 ml-20' >
          <Typetable />
        </Grid>
        {/* end table excretion */}
         {/* start table excretion */}
         <Grid item xs={12} sm={12} md={12} lg={12} className='pt-10 ml-20' >
          <Type2table />
        </Grid>
        {/* end table excretion */}
         {/* start table excretion */}
         <Grid item xs={12} sm={12} md={12} lg={12} className='pt-10 ml-20' >
          <Type3table />
        </Grid>
        {/* end table excretion */}
      </div>
      <div className="mt-auto">
        <Grid container justifyContent="center" spacing={2} className='pt-10' sx={{ bottom: 0, width: '100%', backgroundColor: 'inherit', paddingBottom: '10px' }}>
          <Grid item>
                <Button variant="contained" href="/accounting/supportfund" size='medium' className='text-center' startIcon={<ArrowBackIcon />}  color="warning">
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
}
