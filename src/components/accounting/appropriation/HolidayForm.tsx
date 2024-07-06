import { Button, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";

export default function HolidayForm() {

  return (
    <>
      <Grid container className='h-14 pt-5' justifyContent="center" >
        <Grid item xs={12} sm={12} md={12} lg={12} className='pt-2 ' >
          <Typography
            component="div"
            sx={{ color: 'red', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, fontWeight: 'bold' }}
            className='flex justify-start'>
            個票6
          </Typography>
        </Grid>
      </Grid>


      <Grid container className=' pt-2' justifyContent="center" >
        <Grid item xs={12} sm={12} md={12} lg={12} className='pt-2 ' >
          <Typography
            component="div"
            sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, fontWeight: 'bold' }}
            className='flex justify-start'>
            10　土曜日に閉所する場合
          </Typography>
        </Grid>
      </Grid>
      <Grid container className='pt-4 ' justifyContent="start" sx={{ ml: { xs: 1, sm: 4, md: 4, lg: 3 } }}>
        <Grid item xs={12} sm={12} md={12} lg={7.5}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className=' text-justify'>
            (土曜日閉所とは)
          </Typography>
        </Grid>
      </Grid>
      <Grid container className='pt-4 ' justifyContent="start" sx={{ ml: { xs: 1, sm: 4, md: 4, lg: 3 } }}>
        <Grid item xs={12} sm={10} md={10} lg={10}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className=' text-justify'>
            土曜における保育の利用希望がないなどの理由により、施設として保育を提供していない場合(開所していても、保育を提供していない場合を含む。)を指します。ただし、他の保育施設等と共同保育を実施することにより、事業所を利用する児童の土曜日における保育が確保されている場合は、「土曜日閉所」には該当せず、リストに「×」を記載する必要はありません。
          </Typography>
        </Grid>
      </Grid>

      <Grid container className='pt-4 ' justifyContent="start" sx={{ ml: { xs: 1, sm: 4, md: 4, lg: 3 } }}>
        <Grid item xs={12} sm={12} md={12} lg={7.5}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className=' text-justify'>
            (土曜日閉所に該当しない場合の例)= リストに「×」を記載する必要のない場合の例
          </Typography>
        </Grid>
      </Grid>
      <Grid container className='pt-1 ' justifyContent="start" sx={{ ml: { xs: 1, sm: 4, md: 4, lg: 3 } }}>
        <Grid item xs={12} sm={10} md={10} lg={10}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className=' text-justify'>
            (例1)新型コロナウィルス感染症の影響により、臨時休園(自宅待機要請を含む)とした場合
          </Typography>
        </Grid>
      </Grid>
      <Grid container className='pt-1 ' justifyContent="start" sx={{ ml: { xs: 1, sm: 4, md: 4, lg: 3 } }}>
        <Grid item xs={12} sm={10} md={10} lg={10}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className=' text-justify'>
            (例2)土曜保育の希望があったものの、当日、子どもの体調不良等で、結果的に受け入れ利用がなかった場合
          </Typography>
        </Grid>
      </Grid>
      <Grid container className='pt-1 ' justifyContent="start" sx={{ ml: { xs: 1, sm: 4, md: 4, lg: 3 } }}>
        <Grid item xs={12} sm={10} md={10} lg={10}>
          <Typography sx={{ color: '#38C7FF', fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className=' text-justify'>
            ※(例2)については、土曜日に登園予定であったこと、土曜日に開園していたことが分かる資料とともに、「当日」キャンセルになった児童名及び連絡日時の記録 の提出を求める場合があります。
          </Typography>
        </Grid>
      </Grid>

      <Grid container className=' pt-2' justifyContent="center" >
        <Grid item xs={12} sm={12} md={12} lg={12} className='pt-2 ' >
          <Typography
            component="div"
            sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, fontWeight: 'bold' }}
            className='flex justify-start'>
            リストの記入方法
          </Typography>
        </Grid>
      </Grid>
      <Grid container className='pt-4 ' justifyContent="start" sx={{ ml: { xs: 1, sm: 4, md: 4, lg: 3 } }}>
        <Grid item xs={10} sm={10} md={10} lg={10}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className=' text-justify'>
            ※土曜日に閉所した場合でも、上記「土曜日閉所に該当しない場合」については、「×」の記載不要です。
          </Typography>
        </Grid>
      </Grid>
      <Grid container className='pt-1 ' justifyContent="start" sx={{ ml: { xs: 1, sm: 4, md: 4, lg: 3 } }}>
        <Grid item xs={10} sm={10} md={10} lg={10}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className=' text-justify'>
            1. 閉所した土曜日に×を記入(プルダウンで選択)してください。
          </Typography>
        </Grid>
      </Grid>
      <Grid container className='pt-1 ' justifyContent="start" sx={{ ml: { xs: 1, sm: 4, md: 4, lg: 3 } }}>
        <Grid item xs={10} sm={10} md={10} lg={10}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className=' text-justify'>
            2.「理由」欄に、土曜日に閉所する理由を下記A〜Cから選択し、記入(プルダウンで選択)してください。
          </Typography>
        </Grid>
      </Grid>

      <Grid container className='pt-4 ' justifyContent="start" sx={{ ml: { xs: 1, sm: 4, md: 4, lg: 3 } }}>
        <Grid item xs={10} sm={10} md={10} lg={10}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px', fontWeight: 'bold'  } }} className=' text-justify'>
          (理由)
          </Typography>
        </Grid>
      </Grid>
      <Grid container className='pt-1 ' justifyContent="start" sx={{ ml: { xs: 1, sm: 4, md: 4, lg: 3 } }}>
        <Grid item xs={10} sm={10} md={10} lg={10}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className=' text-justify'>
          A　土曜日に係る保育の利用希望がないなどの理由により閉所している場合。
          </Typography>
        </Grid>
      </Grid>
      <Grid container className='pt-1 ' justifyContent="start" sx={{ ml: { xs: 1, sm: 4, md: 4, lg: 3 } }}>
        <Grid item xs={10} sm={10} md={10} lg={10}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className=' text-justify'>
          B　その他(枠内に理由を記入してください。)
          </Typography>
        </Grid>
      </Grid>

      <Grid container className='pt-3' justifyContent="center">
        <TableContainer component={Paper} className="" sx={{ width: { xs: 'auto', sm: 'auto', md: 'auto', lg: 'auto' } }}>
          <Table sx={{ minWidth: 1500 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell style={{ fontWeight: "bold", background: '#D3DCF1', }} colSpan={2} align="center">対象月</TableCell>
                <TableCell style={{ fontWeight: "bold", background: '#D3DCF1', }} colSpan={6} align="center">土曜日の閉所日数</TableCell>
                <TableCell style={{ fontWeight: "bold", background: '#D3DCF1', }} colSpan={2} align="center">土曜日に閉所する理由</TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{ fontWeight: "bold", background: '#D3DCF1', }} align="center"></TableCell>
                <TableCell style={{ fontWeight: "bold", background: '#D3DCF1', }} align="center"></TableCell>
                <TableCell style={{ fontWeight: "bold", background: '#D3DCF1', }} align="center">第1</TableCell>
                <TableCell style={{ fontWeight: "bold", background: '#D3DCF1', }} align="center">第2</TableCell>
                <TableCell style={{ fontWeight: "bold", background: '#D3DCF1', }} align="center">第3</TableCell>
                <TableCell style={{ fontWeight: "bold", background: '#D3DCF1', }} align="center">第4</TableCell>
                <TableCell style={{ fontWeight: "bold", background: '#D3DCF1', }} align="center">第5</TableCell>
                <TableCell style={{ fontWeight: "bold", background: '#D3DCF1', }} align="center">合計</TableCell>
                <TableCell style={{ fontWeight: "bold", background: '#D3DCF1', }} align="center">ABから選 択</TableCell>
                <TableCell style={{ fontWeight: "bold", background: '#D3DCF1', }} align="center">Bを選択した場合の理由を記入</TableCell>

              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell style={{ width: 100, }} align="center">1</TableCell>
                <TableCell style={{ width: 90, }} align="left">4月</TableCell>
                <TableCell style={{ width: 90, }} align="center">0</TableCell>
                <TableCell style={{ width: 90, }} align="center">0</TableCell>
                <TableCell style={{ width: 90, }} align="center">0</TableCell>
                <TableCell style={{ width: 90, }} align="center">0</TableCell>
                <TableCell style={{ width: 90, }} align="center">0</TableCell>
                <TableCell style={{ width: 90, }} align="center">0</TableCell>
                <TableCell style={{ width: 90, }} align="center"></TableCell>
                <TableCell style={{ width: 90, }} align="center"></TableCell>
              </TableRow>

              <TableRow>
                <TableCell style={{ width: 100, }} align="center">2</TableCell>
                <TableCell style={{ width: 90, }} align="left">5月</TableCell>
                <TableCell style={{ width: 90, }} align="center">0</TableCell>
                <TableCell style={{ width: 90, }} align="center">0</TableCell>
                <TableCell style={{ width: 90, }} align="center">0</TableCell>
                <TableCell style={{ width: 90, }} align="center">0</TableCell>
                <TableCell style={{ width: 90, }} align="center">0</TableCell>
                <TableCell style={{ width: 90, }} align="center">0</TableCell>
                <TableCell style={{ width: 90, }} align="center"></TableCell>
                <TableCell style={{ width: 90, }} align="center"></TableCell>
              </TableRow>

              <TableRow>
                <TableCell style={{ width: 100, }} align="center">3</TableCell>
                <TableCell style={{ width: 90, }} align="left">6月</TableCell>
                <TableCell style={{ width: 90, }} align="center">0</TableCell>
                <TableCell style={{ width: 90, }} align="center">0</TableCell>
                <TableCell style={{ width: 90, }} align="center">0</TableCell>
                <TableCell style={{ width: 90, }} align="center">0</TableCell>
                <TableCell style={{ width: 90, }} align="center">0</TableCell>
                <TableCell style={{ width: 90, }} align="center">0</TableCell>
                <TableCell style={{ width: 90, }} align="center"></TableCell>
                <TableCell style={{ width: 90, }} align="center"></TableCell>
              </TableRow>

              <TableRow>
                <TableCell style={{ width: 100, }} align="center">4</TableCell>
                <TableCell style={{ width: 90, }} align="left">7月</TableCell>
                <TableCell style={{ width: 90, }} align="center">0</TableCell>
                <TableCell style={{ width: 90, }} align="center">0</TableCell>
                <TableCell style={{ width: 90, }} align="center">0</TableCell>
                <TableCell style={{ width: 90, }} align="center">0</TableCell>
                <TableCell style={{ width: 90, }} align="center">0</TableCell>
                <TableCell style={{ width: 90, }} align="center">0</TableCell>
                <TableCell style={{ width: 90, }} align="center"></TableCell>
                <TableCell style={{ width: 90, }} align="center"></TableCell>
              </TableRow>

              <TableRow>
                <TableCell style={{ width: 100, }} align="center">5</TableCell>
                <TableCell style={{ width: 90, }} align="left">8月</TableCell>
                <TableCell style={{ width: 90, }} align="center">0</TableCell>
                <TableCell style={{ width: 90, }} align="center">0</TableCell>
                <TableCell style={{ width: 90, }} align="center">0</TableCell>
                <TableCell style={{ width: 90, }} align="center">0</TableCell>
                <TableCell style={{ width: 90, }} align="center">0</TableCell>
                <TableCell style={{ width: 90, }} align="center">0</TableCell>
                <TableCell style={{ width: 90, }} align="center"></TableCell>
                <TableCell style={{ width: 90, }} align="center"></TableCell>
              </TableRow>

              <TableRow>
                <TableCell style={{ width: 100, }} align="center">6</TableCell>
                <TableCell style={{ width: 90, }} align="left">9月</TableCell>
                <TableCell style={{ width: 90, }} align="center">0</TableCell>
                <TableCell style={{ width: 90, }} align="center">0</TableCell>
                <TableCell style={{ width: 90, }} align="center">0</TableCell>
                <TableCell style={{ width: 90, }} align="center">0</TableCell>
                <TableCell style={{ width: 90, }} align="center">0</TableCell>
                <TableCell style={{ width: 90, }} align="center">0</TableCell>
                <TableCell style={{ width: 90, }} align="center"></TableCell>
                <TableCell style={{ width: 90, }} align="center"></TableCell>
              </TableRow>

              <TableRow>
                <TableCell style={{ width: 100, }} align="center">7</TableCell>
                <TableCell style={{ width: 90, }} align="left">10月</TableCell>
                <TableCell style={{ width: 90, }} align="center">0</TableCell>
                <TableCell style={{ width: 90, }} align="center">0</TableCell>
                <TableCell style={{ width: 90, }} align="center">0</TableCell>
                <TableCell style={{ width: 90, }} align="center">0</TableCell>
                <TableCell style={{ width: 90, }} align="center">0</TableCell>
                <TableCell style={{ width: 90, }} align="center">0</TableCell>
                <TableCell style={{ width: 90, }} align="center"></TableCell>
                <TableCell style={{ width: 90, }} align="center"></TableCell>
              </TableRow>

              <TableRow>
                <TableCell style={{ width: 100, }} align="center">8</TableCell>
                <TableCell style={{ width: 90, }} align="left">11月</TableCell>
                <TableCell style={{ width: 90, }} align="center">0</TableCell>
                <TableCell style={{ width: 90, }} align="center">0</TableCell>
                <TableCell style={{ width: 90, }} align="center">0</TableCell>
                <TableCell style={{ width: 90, }} align="center">0</TableCell>
                <TableCell style={{ width: 90, }} align="center">0</TableCell>
                <TableCell style={{ width: 90, }} align="center">0</TableCell>
                <TableCell style={{ width: 90, }} align="center"></TableCell>
                <TableCell style={{ width: 90, }} align="center"></TableCell>
              </TableRow>

              <TableRow>
                <TableCell style={{ width: 100, }} align="center">9</TableCell>
                <TableCell style={{ width: 90, }} align="left">12月</TableCell>
                <TableCell style={{ width: 90, }} align="center">0</TableCell>
                <TableCell style={{ width: 90, }} align="center">0</TableCell>
                <TableCell style={{ width: 90, }} align="center">0</TableCell>
                <TableCell style={{ width: 90, }} align="center">0</TableCell>
                <TableCell style={{ width: 90, }} align="center">0</TableCell>
                <TableCell style={{ width: 90, }} align="center">0</TableCell>
                <TableCell style={{ width: 90, }} align="center"></TableCell>
                <TableCell style={{ width: 90, }} align="center"></TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{ width: 100, }} align="center">10</TableCell>
                <TableCell style={{ width: 90, }} align="left">1月</TableCell>
                <TableCell style={{ width: 90, }} align="center">0</TableCell>
                <TableCell style={{ width: 90, }} align="center">0</TableCell>
                <TableCell style={{ width: 90, }} align="center">0</TableCell>
                <TableCell style={{ width: 90, }} align="center">0</TableCell>
                <TableCell style={{ width: 90, }} align="center">0</TableCell>
                <TableCell style={{ width: 90, }} align="center">0</TableCell>
                <TableCell style={{ width: 90, }} align="center"></TableCell>
                <TableCell style={{ width: 90, }} align="center"></TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{ width: 100, }} align="center">11</TableCell>
                <TableCell style={{ width: 90, }} align="left">2月</TableCell>
                <TableCell style={{ width: 90, }} align="center">0</TableCell>
                <TableCell style={{ width: 90, }} align="center">0</TableCell>
                <TableCell style={{ width: 90, }} align="center">0</TableCell>
                <TableCell style={{ width: 90, }} align="center">0</TableCell>
                <TableCell style={{ width: 90, }} align="center">0</TableCell>
                <TableCell style={{ width: 90, }} align="center">0</TableCell>
                <TableCell style={{ width: 90, }} align="center"></TableCell>
                <TableCell style={{ width: 90, }} align="center"></TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{ width: 100, }} align="center">12</TableCell>
                <TableCell style={{ width: 90, }} align="left">3月</TableCell>
                <TableCell style={{ width: 90, }} align="center">0</TableCell>
                <TableCell style={{ width: 90, }} align="center">0</TableCell>
                <TableCell style={{ width: 90, }} align="center">0</TableCell>
                <TableCell style={{ width: 90, }} align="center">0</TableCell>
                <TableCell style={{ width: 90, }} align="center">0</TableCell>
                <TableCell style={{ width: 90, }} align="center">0</TableCell>
                <TableCell style={{ width: 90, }} align="center"></TableCell>
                <TableCell style={{ width: 90, }} align="center"></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid >
      {/* End Table */}
       {/* Start Grid Save Button */}
       <Grid container className='pt-16' justifyContent="end">
        <Grid item xs={6} sm={3} md={3} lg={1} className=' '>
          <Button variant="contained" href="" size='small' sx={{ backgroundColor: "blue" }}>
            <Typography style={{ color: 'white' }} className=''>
              Submit
            </Typography>
          </Button>
        </Grid>
        <Grid item xs={6} sm={3} md={3} lg={1} className=' '>
          <Button variant="contained" href="" size='small' sx={{ backgroundColor: "red" }}>
            <Typography style={{ color: 'white' }}>
              Cancel
            </Typography>
          </Button>
        </Grid>
      </Grid>
      {/* End Grid Save Button */}


    </>
  );
}
