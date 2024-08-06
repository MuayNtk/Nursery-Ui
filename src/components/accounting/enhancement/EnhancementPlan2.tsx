import { Grid, Typography, Divider, Checkbox, TextareaAutosize } from "@mui/material";


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function ImplementationPlan2() {

  return (
    <>

      {/* Start 様式第1号 別添1-2(保育所、幼保連携型定ことも園のみ) Grid */}
      <Grid container className='pt-3' justifyContent="start">
        <Grid item xs={12} sm={11} md={8} lg={5}>
          <Typography fontWeight="bold" sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-center'>
            様式第 1 号 別添 1 - 2 (保育所、幼保連携型定ことも園のみ)
          </Typography>
        </Grid>
      </Grid>
      {/* End 様式第1号 別添1-2(保育所、幼保連携型定ことも園のみ) Grid */}

      {/* Start 園番号 Grid */}
      <Grid container className='pt-5' justifyContent="end">
        <Grid item xs={4.65} sm={2.5} md={2} lg={1}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 pr-3 text-end'>
            園番号 :
          </Typography>
        </Grid>
        <Grid item xs={5} sm={4} md={3} lg={2}>
          <Typography fontWeight="bold" sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-start'>
            いちざきみんなの家 
          </Typography>
        </Grid>
      </Grid>
      {/* End 園番号 Grid */}

      {/* Start 実施計画書➁ (雇用管理及び勤務環境の改善) Grid */}
      <Grid container className='pt-3 pl-3' justifyContent="center">
        <Grid item xs={12}>
          <Divider textAlign="center">
            実施計画書➁ (雇用管理及び勤務環境の改善)
          </Divider>
        </Grid>
      </Grid>
      {/* End 実施計画書➁ (雇用管理及び勤務環境の改善) Grid */}

      {/* Start 1職員の雇用管理について Grid */}
      <Grid container spacing={1} justifyContent='start' className="pt-7">
        <Grid item xs={6} sm={6} md={4.5} lg={4} >
          <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16 } }} >
            1 職員の雇用管理について
          </Typography>
        </Grid>
      </Grid>
      {/* End 1職員の雇用管理について Grid */}

      {/* Start Textarea-regarding-employment Grid */}
      <Grid container rowSpacing={2} justifyContent='start' alignItems='start' className='pt-2'>
        <Grid item xs={9} sm={9} md={8.5} lg={6}>
          <TextareaAutosize
            id="regarding-employment"
            name="regarding-employment"
            minRows={3}
            maxRows={100}
            className="w-56 sm:w-60 lg:w-80"
            style={{ border: '1px solid gray', borderRadius: '4px' }}
          />
        </Grid>
      </Grid>
      {/* End Textarea-regarding-employment Grid */}

      {/* Start 2 勤務環境改善を行う項目 Grid */}
      <Grid container spacing={1} justifyContent='start' className="pt-10">
        <Grid item xs={6} sm={6} md={4.5} lg={4} >
          <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16, } }} >
            2 勤務環境改善を行う項目
          </Typography>
        </Grid>
      </Grid>
      {/* End 2 勤務環境改善を行う項目 Grid */}

      {/* Start (1)保育士の勤務環境改善を行う項目にチェックをしてください(複数選択可) Grid */}
      <Grid container spacing={1} justifyContent='start' className="pt-4">
        <Grid item xs={12} sm={12} md={9.5} lg={8} >
          <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14, } }} >
            (1) 保育士の勤務環境改善を行う項目にチェックをしてください(複数選択可)
          </Typography>
        </Grid>
      </Grid>
      {/* End (1)保育士の勤務環境改善を行う項目にチェックをしてください(複数選択可) Grid */}

      {/* Start ※その他の場合、具体的な内容を記載して下さい。 Grid */}
      <Grid container className='pt-3' justifyContent="start">
        <Grid item xs={11} sm={11} md={9} lg={7}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' }, color: '#FF9900' }} className='pt-2'>
            ※その他の場合、具体的な内容を記載して下さい。
          </Typography>
        </Grid>
      </Grid>
      {/* End ※その他の場合、具体的な内容を記載して下さい。 Grid */}


      {/* Start 時間外勤務の縮減 Grid */}
      <Grid container justifyContent="start" sx={{ ml: { xs: 3, sm: 5, md: 13, lg: 15 } }}>
  
        <Grid item xs={5} sm={5.5} md={4.5} lg={3}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-1 text-start'>
            <Checkbox {...label} />
            時間外勤務の縮減
          </Typography>
        </Grid>
      </Grid>
      {/* End 時間外勤務の縮減 Grid */}

      {/* Start 休暇取得の促進 Grid */}
      <Grid container justifyContent="start" sx={{ ml: { xs: 3, sm: 5, md: 13, lg: 15 } }}>
  
        <Grid item xs={5} sm={5.5} md={4.5} lg={4}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className="text-start">
            <Checkbox {...label} />
            休暇取得の促進
          </Typography>
        </Grid>
      </Grid>
      {/* End 休暇取得の促進 Grid */}

      {/* Start 業務の軽減 Grid */}
      <Grid container justifyContent="start" sx={{ ml: { xs: 3, sm: 5, md: 13, lg: 15 } }}>
  
        <Grid item xs={5} sm={5.5} md={4.5} lg={4}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className="text-start">
            <Checkbox {...label} />
            業務の軽減
          </Typography>
        </Grid>
      </Grid>
      {/* End 業務の軽減 Grid */}

      {/* Start その他具体的内容 Grid */}
      <Grid container justifyContent="start" sx={{ ml: { xs: 3, sm: 5, md: 13, lg: 15 } }}>
  
        <Grid item xs={5} sm={5.5} md={4.5} lg={4}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className="text-start">
            <Checkbox {...label} />
            その他具体的内容
          </Typography>
        </Grid>
      </Grid>
      {/* End その他具体的内容 Grid */}

      {/* Start Textarea-items-for-improving */}
      <Grid container rowSpacing={2} justifyContent='start' alignItems='start' className='pt-2'>
        <Grid item xs={9} sm={9} md={8.5} lg={7}>
          <TextareaAutosize
            id="items-for-improving"
            name="items-for-improving"
            minRows={3}
            maxRows={100}
            className="w-56 sm:w-60 lg:w-80"
            style={{ border: '1px solid gray', borderRadius: '4px' }}
          />
        </Grid>
      </Grid>
      {/* End Textarea-items-for-improving */}

      {/* Start (2)保育士の勤務改善を行う項目の具体的な改善内容及び方法について以下の欄に記載してください。 Grid */}
      <Grid container spacing={1} justifyContent='start' className="pt-7">
        <Grid item xs={12} sm={12} md={11} lg={10} >
          <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14, } }} >
            (2) 保育士の勤務改善を行う項目の具体的な改善内容及び方法について以下の欄に記載してください。
          </Typography>
        </Grid>
      </Grid>
      {/* End (2)保育士の勤務改善を行う項目の具体的な改善内容及び方法について以下の欄に記載してください。 Grid */}

      {/* Start 改善前 Grid */}
      <Grid container spacing={1} justifyContent='start' className="pt-5">
        <Grid item xs={3} sm={4} md={3} lg={2} >
          <Typography fontWeight='bold' component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16, } }} className="pt-5 text-end">
            改善前 :
          </Typography>
        </Grid>
        <Grid item xs={9} sm={9} md={8.5} lg={3}>
          <TextareaAutosize
            id="before-improvement"
            name="before-improvement"
            minRows={3}
            maxRows={100}
            className="w-56 sm:w-60 lg:w-80"
            style={{ border: '1px solid gray', borderRadius: '4px' }}
          />
        </Grid>
      </Grid>
      {/* End 改善前 Grid */}

      {/* Start 改善後 Grid */}
      <Grid container spacing={1} justifyContent='start' className="pt-5">
        <Grid item xs={3} sm={4} md={3} lg={2} >
          <Typography fontWeight='bold' component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16, } }} className="pt-5 text-end">
            改善後 : 
          </Typography>
        </Grid>
        <Grid item xs={9} sm={9} md={8.5} lg={3}>
          <TextareaAutosize
            id="after-improvement"
            name="after-improvement"
            minRows={3}
            maxRows={100}
            className="w-56 sm:w-60 lg:w-80"
            style={{ border: '1px solid gray', borderRadius: '4px' }}
          />
        </Grid>
      </Grid>
      {/* End 改善後 Grid */}


    </>
  );
}
