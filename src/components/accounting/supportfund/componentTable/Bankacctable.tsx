import { FormControl, Grid, InputLabel, MenuItem, Select,  TextField, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';

function Bankacctable() {
    return (
        <div>
            {/* start table excretion */}
            <Grid container spacing={2} className='' justifyContent="center">
                <Paper sx={{ width: '80%', Height: 2000, overflow: 'hidden' }} className='ms-4'>
                    <TableContainer sx={{ maxHeight: 2000 }}>
                        <Table stickyHeader aria-label="sticky table" size="small">
                            <TableBody>
                                <TableRow hover role="checkbox" tabIndex={-1} >
                                    <TableCell>
                                        <Grid container spacing={2} className='' justifyContent="center">
                                            <Grid item xs={12} sm={12} md={12} lg={12} className='' >
                                                <Typography component="div" sx={{ color: 'black', fontWeight: 'bold', fontSize: { xs: 11, sm: 11, md: 11, lg: 14, } }} className='' >
                                                    福岡市から支給する教育・保育給付費の口座情報を使用する場合は、右欄に「はい」を記入してください。
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </TableCell>
                                    <TableCell>
                                        <Grid container spacing={2} className='' justifyContent="end">
                                            <Grid item xs={12} sm={12} md={12} lg={12} >
                                                <FormControl size="small" fullWidth >
                                                    <InputLabel id="era-select-label" ></InputLabel>
                                                    <Select
                                                        id="era-select"
                                                        labelId="era-select-label"
                                                        sx={{ backgroundColor: "white" }}
                                                    >
                                                        <MenuItem value="">
                                                            <em>None</em>
                                                        </MenuItem>
                                                        <MenuItem value={1}>はい</MenuItem>
                                                        <MenuItem value={2}>2</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </Grid>
                                        </Grid>
                                    </TableCell>
                                </TableRow>

                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
            </Grid>
            {/* end table excretion */}
            <Grid container spacing={2} className='pt-2' justifyContent="start">
                <Grid item xs={12} sm={12} md={12} lg={12} className='' >
                    <Typography component="div" sx={{ color: 'black', fontSize: { xs: 8, sm: 8, md: 8, lg: 11, }, marginLeft: { xs: 4, sm: 5, md: 8, lg: 13, } }} className='flex justify-start' >
                        「いいえ」の場合は、振込口座を下記に記入してください。
                    </Typography>
                </Grid>
            </Grid>


            {/* start table excretion */}
            <Grid container spacing={2} className='pt-7' justifyContent="center">
                <Paper sx={{ width: '80%', Height: 2000, overflow: 'hidden' }} className='ms-4'>
                    <TableContainer sx={{ maxHeight: 2000 }}>
                        <Table stickyHeader aria-label="sticky table" size="small">
                            <TableBody>
                                <TableRow hover role="checkbox" tabIndex={-1} >
                                    <TableCell>
                                        <Grid container spacing={2} className='' justifyContent="start">
                                            <Grid item xs={12} sm={12} md={12} lg={12} className='' >
                                                <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, } }} className='' >
                                                    金融機関名
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </TableCell>
                                    <TableCell >
                                        <Grid container spacing={2} className='' justifyContent="start">
                                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                                <TextField id="outlined-search" type="text" size="small" fullWidth sx={{ backgroundColor: 'white', }} />
                                            </Grid>
                                        </Grid>
                                    </TableCell>
                                    <TableCell sx={{ marginLeft: { xs: 4, sm: 5, md: 8, lg: -15, } }}>
                                        <Grid container spacing={2} className='' justifyContent="center">
                                            <Grid item xs={6} sm={12} md={12} lg={12} className='' >
                                                <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, } }} className='' >
                                                    金融機関コード
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </TableCell>
                                    <TableCell>
                                        <Grid container spacing={2} className='' justifyContent="start">
                                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                                <TextField id="outlined-search" type="text" size="small" fullWidth sx={{ backgroundColor: 'white' }} />
                                            </Grid>
                                        </Grid>
                                    </TableCell>
                                </TableRow>
                                <TableRow hover role="checkbox" tabIndex={-1} >
                                    <TableCell>
                                        <Grid container spacing={2} className='' justifyContent="start">
                                            <Grid item xs={12} sm={12} md={12} lg={12} className='' >
                                                <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, } }} className='' >
                                                支店名
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </TableCell>
                                    <TableCell >
                                        <Grid container spacing={2} className='' justifyContent="start">
                                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                                <TextField id="outlined-search" type="text" size="small" fullWidth sx={{ backgroundColor: 'white', }} />
                                            </Grid>
                                        </Grid>
                                    </TableCell>
                                    <TableCell sx={{ marginLeft: { xs: 4, sm: 5, md: 8, lg: -15, } }}>
                                        <Grid container spacing={2} className='' justifyContent="center">
                                            <Grid item xs={6} sm={12} md={12} lg={12} className='' >
                                                <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, } }} className='' >
                                                支店コード
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </TableCell>
                                    <TableCell>
                                        <Grid container spacing={2} className='' justifyContent="start">
                                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                                <TextField id="outlined-search" type="text" size="small" fullWidth sx={{ backgroundColor: 'white' }} />
                                            </Grid>
                                        </Grid>
                                    </TableCell>
                                </TableRow>
                                <TableRow hover role="checkbox" tabIndex={-1} >
                                    <TableCell>
                                        <Grid container spacing={2} className='' justifyContent="start">
                                            <Grid item xs={12} sm={12} md={12} lg={12} className='' >
                                                <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, } }} className='' >
                                                預金種別
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </TableCell>
                                    <TableCell >
                                        <Grid container spacing={2} className='' justifyContent="start">
                                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                                <TextField id="outlined-search" type="text" size="small" fullWidth sx={{ backgroundColor: 'white', }} />
                                            </Grid>
                                        </Grid>
                                    </TableCell>
                                    <TableCell sx={{ marginLeft: { xs: 4, sm: 5, md: 8, lg: -15, } }}>
                                        <Grid container spacing={2} className='' justifyContent="center">
                                            <Grid item xs={6} sm={12} md={12} lg={12} className='' >
                                                <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, } }} className='' >
                                                口座番号(右詰め)
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </TableCell>
                                    <TableCell>
                                        <Grid container spacing={2} className='' justifyContent="start">
                                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                                <TextField id="outlined-search" type="text" size="small" fullWidth sx={{ backgroundColor: 'white' }} />
                                            </Grid>
                                        </Grid>
                                    </TableCell>
                                </TableRow>
                                <TableRow hover role="checkbox" tabIndex={-1} >
                                    <TableCell>
                                        <Grid container spacing={2} className='' justifyContent="start">
                                            <Grid item xs={12} sm={12} md={12} lg={12} className='' >
                                                <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, } }} className='' >
                                                口座名義人(カタカナ)
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </TableCell>
                                    <TableCell sx={{ marginLeft: { xs: 4, sm: 5, md: 8, lg: -15, } }}>
                                        <Grid container spacing={2} className='' justifyContent="center">
                                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                                <TextField id="outlined-search" type="text" size="small" fullWidth sx={{ backgroundColor: 'white' }} />
                                            </Grid>
                                        </Grid>
                                    </TableCell>
                                </TableRow>



                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
            </Grid>
            {/* end table excretion */}


        </div>
    )
}

export default Bankacctable