import { Grid, Paper, Table, TableCell, TableContainer, TableHead, TableRow, TextField, Typography, TableBody, Divider, Checkbox, TextareaAutosize, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function InvoiceEnhancement() {

  return (
    <>

      {/* Start 請求書 Grid */}
      <Grid container className='pt-3' justifyContent="center">
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-center'>
            <Divider>請求書</Divider>
          </Typography>
        </Grid>
      </Grid>
      {/* End 請求書 Grid */}

      {/* Start 金額 Grid */}
      <Grid container className='pt-3' justifyContent="center">
        <Grid item xs={7} sm={7} md={7} lg={7}>
          <TextField
            className='w-full'
            id="amount-of-money"
            name="amount-of-money"
            label="金額"
            type="text"
            size='small'
            sx={{
              backgroundColor: "white",
            }}
          />
        </Grid>
      </Grid>
      {/* End 金額 Grid */}

      {/* Start ※(金額の記載は、アラピア数字を用いその頭部に「」を記入してください。) Grid */}
      <Grid container className='pt-2' justifyContent="center">
        <Grid item xs={12} sm={12} md={9} lg={7}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' }, color: '#FF9900' }} className='pt-2 text-start'>
            ※(金額の記載は、アラピア数字を用いその頭部に「」を記入してください。)
          </Typography>
        </Grid>
      </Grid>
      {/* End ※(金額の記載は、アラピア数字を用いその頭部に「」を記入してください。) Grid */}

      {/* Start 件名 Grid */}
      <Grid container spacing={1} justifyContent='start' className="pt-7">
        <Grid item xs={7} sm={7} md={6} lg={6} >
          <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16, } }} >
            件名 :
          </Typography>
        </Grid>
      </Grid>
      {/* End 件名 Grid */}

      {/* Start Textarea-subject */}
      <Grid container rowSpacing={2} justifyContent='center' alignItems='center' className='pt-2'>
        <Grid item xs={7} sm={7} md={7} lg={7}>
          <TextareaAutosize
            id="subject"
            name="subject"
            minRows={3.2}
            maxRows={100}
            className="w-full"
            style={{ border: '1px solid gray', borderRadius: '4px' }}
          />
        </Grid>
      </Grid>
      {/* End Textarea-subject */}

      {/* Start ※希望する希望する支払方法を選択してください。 にチェックを入れてください。 Grid */}
      <Grid container className='pt-2' justifyContent="center">
        <Grid item xs={12} sm={12} md={10} lg={7}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' }, color: '#FF9900' }} className='pt-2 text-start'>
            ※希望する希望する支払方法を選択してください。✔ にチェックを入れてください。
          </Typography>
        </Grid>
      </Grid>
      {/* End ※希望する希望する支払方法を選択してください。 にチェックを入れてください。 Grid */}

      {/* Start 口座振込を希望します Grid */}
      <Grid container justifyContent="start" sx={{ ml: { xs: 3, sm: 5, md: 13, lg: 33 } }} className="pt-3">
        <Grid item xs={6} sm={5.5} md={4.5} lg={4}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-1 text-start'>
            <Checkbox {...label} />
            口座振込を希望します
          </Typography>
        </Grid>
      </Grid>
      {/* End 口座振込を希望します Grid */}

      {/* Start ※(本市に2つ以上口座を登録されている方等は、以下に振込を希望する口座をご記入ください。) Grid */}
      <Grid container className='pt-2' justifyContent="center">
        <Grid item xs={12} sm={12} md={10} lg={7}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' }, color: '#3366FF' }} className='pt-2 text-start'>
            ※(本市に2つ以上口座を登録されている方等は、以下に振込を希望する口座をご記入ください。)
          </Typography>
        </Grid>
      </Grid>
      {/* End ※(本市に2つ以上口座を登録されている方等は、以下に振込を希望する口座をご記入ください。) Grid */}

      {/* Start Table 1 */}
      <Grid container className='pt-3' justifyContent="center">
        <TableContainer component={Paper} className="mt-5" sx={{ width: { xs: 'auto', sm: 'auto', md: 'auto', lg: 'auto' } }}>
          <Table sx={{ minWidth: 1000 }} aria-label="simple table" size="small">
            <TableHead>
              <TableRow>
                <TableCell align="center" style={{ width: 150, fontWeight: "bold" }}>金融機関名</TableCell>
                <TableCell align="center" style={{ width: 150, fontWeight: "bold" }}>銀行</TableCell>
                <TableCell align="center" style={{ width: 150, fontWeight: "bold" }}>本店·支店</TableCell>
                <TableCell align="center" style={{ width: 150, fontWeight: "bold" }}>預金種別</TableCell>
                <TableCell align="center" style={{ width: 150, fontWeight: "bold" }}>普通·当座</TableCell>
                <TableCell align="center" style={{ width: 150, fontWeight: "bold" }}>口座番号</TableCell>
                <TableCell align="center" style={{ width: 150, fontWeight: "bold" }}>口座名義(カナ)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow hover role="checkbox" tabIndex={-1}>
                <TableCell align="center">
                  <TextField
                    className='w-full'
                    id="financial-institution-name"
                    name="financial-institution-name"
                    label=""
                    type="text"
                    size='small'
                    sx={{
                      backgroundColor: "white",
                    }}
                  />
                </TableCell>
                <TableCell align="center">
                  <Typography>
                    <Checkbox {...label} /> 本店
                  </Typography>
                  <Typography>
                    <Checkbox {...label} /> 支店
                  </Typography>
                </TableCell>
                <TableCell align="left">
                  <TextField
                    className='w-full'
                    id="branch-office"
                    name="branch-office"
                    label=""
                    type="text"
                    size='small'
                    sx={{
                      backgroundColor: "white",
                    }}
                  />
                </TableCell>
                <TableCell align="left">
                  <TextField
                    className='w-full'
                    id="deposit-type"
                    name="deposit-type"
                    label=""
                    type="text"
                    size='small'
                    sx={{
                      backgroundColor: "white",
                    }}
                  />
                </TableCell>
                <TableCell align="center">
                  <Typography>
                    <Checkbox {...label} /> 本店
                  </Typography>
                  <Typography>
                    <Checkbox {...label} /> 支店
                  </Typography>
                </TableCell>
                <TableCell align="left">
                  <TextField
                    className='w-full'
                    id="account-number"
                    name="account-number"
                    label=""
                    type="text"
                    size='small'
                    sx={{
                      backgroundColor: "white",
                    }}
                  />
                </TableCell>
                <TableCell align="left">
                  <TextField
                    className='w-full'
                    id="account-name-(kana)"
                    name="account-name-(kana)"
                    label=""
                    type="text"
                    size='small'
                    sx={{
                      backgroundColor: "white",
                    }}
                  />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      {/* End Table 1 */}

      {/* Start ※(記入する口座は請求者名義のものに限ります。 Grid */}
      <Grid container className='pt-5' justifyContent="center">
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' }, color: '#FF9900' }} className='pt-2 text-center'>
            ※(記入する口座は請求者名義のものに限ります。また、口座名義等の記入にあたっては、必ず預金通帳を確認のうえ、記載のとおり正確に記入してください。)
          </Typography>
        </Grid>
      </Grid>
      {/* End ※(記入する口座は請求者名義のものに限ります。 Grid */}

      {/* Start 現金受領を希望します Grid */}
      <Grid container justifyContent="start" sx={{ ml: { xs: 3, sm: 5, md: 13, lg: 33 } }} className="pt-3">
        <Grid item xs={6} sm={5.5} md={4.5} lg={4}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-1 text-start'>
            <Checkbox {...label} />
            現金受領を希望します
          </Typography>
        </Grid>
      </Grid>
      {/* End 現金受領を希望します Grid */}

      {/* Start 隔地払(外国送金等)を希望します。 Grid */}
      <Grid container justifyContent="start" sx={{ ml: { xs: 3, sm: 5, md: 13, lg: 33 } }}>
        <Grid item xs={6} sm={5.5} md={4.5} lg={4}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-1 text-start'>
            <Checkbox {...label} />
            隔地払(外国送金等)を希望します。
          </Typography>
        </Grid>
      </Grid>
      {/* End 隔地払(外国送金等)を希望します。 Grid */}

      {/* Start 日時 Grid */}
      <Grid container className='pt-7' justifyContent="center" >
        <Grid item xs={2} sm={1.5} md={1} lg={1}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' }, mr: 2 }} className='pt-2 text-end'>
            日時 :
          </Typography>
        </Grid>
        <Grid item xs={3.2} sm={2.3} md={1.5} lg={1}>
          <FormControl size="small" fullWidth>
            <InputLabel id="date-label">平成</InputLabel>
            <Select
              labelId="date-label"
              id="date-select"
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
        <Grid item xs={7} sm={6} md={5} lg={5} sx={{ ml: { xs: 15, sm: -1.5, md: -3, lg:-3 },mt: { xs: -1, sm: -2, md: -2, lg:-2 } }}>
        <LocalizationProvider dateAdapter={AdapterDayjs} >
              <DemoContainer components={['DatePicker']}>
                <DatePicker label="Select date" sx={{ backgroundColor: "white" }} className="scale-75"/>
              </DemoContainer>
            </LocalizationProvider>
        </Grid>
      </Grid>
      {/* End 日時 Grid */}

      {/* Start 住所 Grid */}
      <Grid container spacing={1} justifyContent='start' className="pt-7">
        <Grid item xs={7} sm={7} md={6} lg={6} >
          <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16, } }} >
            住所 :
          </Typography>
        </Grid>
      </Grid>
      {/* End 住所 Grid */}

      {/* Start Textarea-address */}
      <Grid container rowSpacing={2} justifyContent='center' alignItems='center' className='pt-2'>
        <Grid item xs={7} sm={7} md={7} lg={7}>
          <TextareaAutosize
            id="address"
            name="address"
            minRows={3.2}
            maxRows={100}
            className="w-full"
            style={{ border: '1px solid gray', borderRadius: '4px' }}
          />
        </Grid>
      </Grid>
      {/* End Textarea-address */}

      {/* Start 氏名 Grid */}
      <Grid container spacing={1} justifyContent='start' className="pt-7">
        <Grid item xs={7} sm={7} md={6} lg={6} >
          <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16, } }} >
            氏名 :
          </Typography>
        </Grid>
      </Grid>
      {/* End 氏名 Grid */}

      {/* Start Textarea-full-name */}
      <Grid container rowSpacing={2} justifyContent='center' alignItems='center' className='pt-2'>
        <Grid item xs={7} sm={7} md={7} lg={7}>
          <TextareaAutosize
            id="full-name"
            name="full-name"
            minRows={3.2}
            maxRows={100}
            className="w-full"
            style={{ border: '1px solid gray', borderRadius: '4px' }}
          />
        </Grid>
      </Grid>
      {/* End Textarea-full-name */}

      {/* Start (あて先)福岡市(区)長 Grid */}
      <Grid container spacing={1} justifyContent='start' className="pt-3">
        <Grid item xs={9} sm={8} md={7} lg={7} >
          <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16, } }} >
            (あて先)福岡市(区)長
          </Typography>
        </Grid>
      </Grid>
      {/* End (あて先)福岡市(区)長 Grid */}

      {/* Start ※ご注意 Grid */}
      <Grid container className='pt-2' justifyContent="center">
        <Grid item xs={12} sm={12} md={9} lg={7}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' }, color: '#FF9900' }} className='pt-2 text-start'>
            ※ご注意
          </Typography>
        </Grid>
      </Grid>
      {/* End ※ご注意 Grid */}

      {/* Start 金額と口座番号は、右づめで記入してください。 Grid */}
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={12} md={9} lg={7}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' }, color: '#FF9900' }} className='pt-2 text-start'>
            1 金額と口座番号は、右づめで記入してください。
            なお、ゆうちょ銀行への振込を希望される場合は、振込用の口座番号を記入してください
          </Typography>
        </Grid>
      </Grid>
      {/* End 金額と口座番号は、右づめで記入してください。 Grid */}

      {/* Start 2請求書の金額は、訂正できません。。 Grid */}
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={12} md={9} lg={7}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' }, color: '#FF9900' }} className='pt-2 text-start'>
            2 請求書の金額は、訂正できません。
          </Typography>
        </Grid>
      </Grid>
      {/* End 2請求書の金額は、訂正できません。。 Grid */}

      {/* Start ※法人等の場合 Grid */}
      <Grid container className='pt-2' justifyContent="center">
        <Grid item xs={12} sm={12} md={9} lg={7}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-start'>
            ※法人等の場合
          </Typography>
        </Grid>
      </Grid>
      {/* End ※法人等の場合 Grid */}

      {/* Start 担当者部署・名:事務宅 Grid */}
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={12} md={9} lg={7}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-start'>
            担当者部署・名:事務宅
          </Typography>
        </Grid>
      </Grid>
      {/* End 担当者部署・名:事務宅 Grid */}

      {/* Start 連絡先電話番号:092-406-8215 Grid */}
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={12} md={9} lg={7}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-start'>
            連絡先電話番号 : 092-406-8215
          </Typography>
        </Grid>
      </Grid>
      {/* End 連絡先電話番号:092-406-8215 Grid */}


    </>
  );
}
