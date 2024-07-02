import { Grid, InputAdornment, Paper, Table, TableCell, TableContainer, TableHead, TableRow, TextField, TextareaAutosize, Typography } from "@mui/material";


export default function JoinActivityForm() {

  return (
    <>
      <Typography
        component="div"
        sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, fontWeight: 'bold', }}
        className='flex justify-start h-11 pt-3 pl-5'
        bgcolor={"#CCF0FD"}>
        
      </Typography>
      {/* Start 毎日 Grid */}
      <Grid container spacing={2} className='pt-5'>
        <Grid item xs={2} sm={2.5} md={2} lg={1}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
            毎日 :
          </Typography>
        </Grid>
        <Grid item xs={4} sm={3} md={2.2} lg={1.3}>
          <TextField id="everyday" name="everyday" type="text" size="small" fullWidth sx={{ backgroundColor: 'white' }} />
        </Grid>
        <Grid item xs={2} sm={2} md={1} lg={1} sx={{ ml: { xs: 0, sm: 0, md: 0, lg: -6 } }}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
            每週 :
          </Typography>
        </Grid>
        <Grid item xs={4} sm={3} md={2.2} lg={1.3}>
          <TextField
            className='w-full'
            id="everyweek"
            name="everyweek"
            type="text"
            size='small'
            sx={{
              backgroundColor: "white",
            }}
            InputProps={{
              endAdornment: <InputAdornment position="end">回</InputAdornment>,
            }}
          />
        </Grid>
        <Grid item xs={2} sm={2.5} md={1} lg={1} sx={{ ml: { xs: 0, sm: 0, md: 0, lg: -5 } }}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
            毎月 :
          </Typography>
        </Grid>
        <Grid item xs={4} sm={3} md={2.2} lg={1.3}>
          <TextField
            className='w-full'
            id="monthly"
            name="monthly"
            type="text"
            size='small'
            sx={{
              backgroundColor: "white",
            }}
            InputProps={{
              endAdornment: <InputAdornment position="end">回</InputAdornment>,
            }}
          />
        </Grid>
        <Grid item xs={2} sm={2} md={2} lg={1} sx={{ ml: { xs: 0, sm: 0, md: 0, lg: -5 } }}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
            年間 :
          </Typography>
        </Grid>
        <Grid item xs={4} sm={3} md={2.2} lg={1.3}>
          <TextField
            className='w-full'
            id="annual"
            name="annual"
            type="text"
            size='small'
            sx={{
              backgroundColor: "white",
            }}
            InputProps={{
              endAdornment: <InputAdornment position="end">回</InputAdornment>,
            }}
          />
        </Grid>
        <Grid item xs={2} sm={2.5} md={1} lg={1} sx={{ ml: { xs: 0, sm: 0, md: 0, lg: -7 } }}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
            他 :
          </Typography>
        </Grid>
        <Grid item xs={4} sm={3} md={2.2} lg={1.3}>
          <TextField
            className='w-full'
            id="other"
            name="other"
            type="text"
            size='small'
            sx={{
              backgroundColor: "white",
            }}
            InputProps={{
              endAdornment: <InputAdornment position="end">回</InputAdornment>,
            }}
          />
        </Grid>
        <Grid item xs={2} sm={2} md={1.5} lg={1} sx={{ ml: { xs: 0, sm: 0, md: 0, lg: -4 } }}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
            延回数 :
          </Typography>
        </Grid>
        <Grid item xs={4} sm={3} md={2} lg={1.3}>
          <TextField
            className='w-full'
            id="other"
            name="other"
            type="text"
            size='small'
            sx={{
              backgroundColor: "white",
            }}
            InputProps={{
              endAdornment: <InputAdornment position="end">回</InputAdornment>,
            }}
          />
        </Grid>
      </Grid>
      {/* End 毎日 Grid */}

      {/* Start 延回数 Grid */}
      <Grid container spacing={2} className='pt-10'>
        <Grid item xs={4} sm={3} md={4} lg={3}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
            延回数 :
          </Typography>
        </Grid>
        <Grid item xs={6} sm={5} md={4} lg={3}>
          <TextField id="extension" name="extension" type="text" size="small" fullWidth sx={{ backgroundColor: 'white' }} />
        </Grid>
      </Grid>
      {/* End 延回数 Grid */}

      {/* Start 場所 Grid */}
      <Grid container spacing={2} className='pt-5'>
        <Grid item xs={4} sm={3} md={4} lg={3}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
            場所 :
          </Typography>
        </Grid>
        <Grid item xs={6} sm={5} md={4} lg={3}>
          <TextField id="place" name="place" type="text" size="small" fullWidth sx={{ backgroundColor: 'white' }} />
        </Grid>
      </Grid>
      {/* End 場所 Grid */}

      {/* Start 日時 Grid */}
      <Grid container spacing={2} className='pt-5'>
        <Grid item xs={4} sm={3} md={4} lg={3}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
            日時 :
          </Typography>
        </Grid>
        <Grid item xs={6} sm={5} md={4} lg={3}>
          <TextField id="date-and-time" name="date-and-time" type="text" size="small" fullWidth sx={{ backgroundColor: 'white' }} />
        </Grid>
      </Grid>
      {/* End 日時 Grid */}

      {/* Start 参加者 Grid */}
      <Grid container spacing={2} className='pt-5'>
        <Grid item xs={4} sm={3} md={4} lg={3}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
            参加者 :
          </Typography>
        </Grid>
        <Grid item xs={6} sm={5} md={4} lg={3}>
          <TextField id="participant" name="participant" type="text" size="small" fullWidth sx={{ backgroundColor: 'white' }} />
        </Grid>
      </Grid>
      {/* End 参加者 Grid */}

      {/* Start 内容 Grid */}
      <Grid container spacing={2} className='pt-5'>
        <Grid item xs={4} sm={3} md={4} lg={3}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
            内容 :
          </Typography>
        </Grid>
        <Grid item xs={6} sm={5} md={4} lg={3}>
          <TextareaAutosize
            id="content"
            name="content"
            minRows={3}
            maxRows={100}
            className="w-48 sm:w-52 lg:w-80"
            style={{ border: '1px solid gray', borderRadius: '4px' }}
          />
        </Grid>
      </Grid>
      {/* End 内容 Grid */}

      {/* Start Table */}
      <Grid container className='pt-3' justifyContent="center">
        <TableContainer component={Paper} className="mt-5" sx={{ width: { xs: 'auto', sm: 'auto', md: 'auto', lg: 800 } }}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell style={{ width: 200 }}>賃 金</TableCell>
                <TableCell align="right">0</TableCell>
                <TableCell align="left">円</TableCell>
                <TableCell style={{ width: 250 }}>備品購入費</TableCell>
                <TableCell align="right">0</TableCell>
                <TableCell align="left">円</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>謝 金</TableCell>
                <TableCell align="right">0</TableCell>
                <TableCell align="left">円</TableCell>
                <TableCell>使用料及び賃借料</TableCell>
                <TableCell align="right">0</TableCell>
                <TableCell align="left">円</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>旅 費</TableCell>
                <TableCell align="right">0</TableCell>
                <TableCell align="left">円</TableCell>
                <TableCell>委託料</TableCell>
                <TableCell align="right">0</TableCell>
                <TableCell align="left">円</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>役務費</TableCell>
                <TableCell align="right">0</TableCell>
                <TableCell align="left">円</TableCell>
                <TableCell>需用費</TableCell>
                <TableCell align="right">0</TableCell>
                <TableCell align="left">円</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>原材料費</TableCell>
                <TableCell align="right">0</TableCell>
                <TableCell align="left">円</TableCell>
                <TableCell>執行予定額の合計</TableCell>
                <TableCell align="right">0</TableCell>
                <TableCell align="left">円</TableCell>
              </TableRow>
            </TableHead>
          </Table>
        </TableContainer>
      </Grid>
      {/* End Table */}


    </>
  );
}
