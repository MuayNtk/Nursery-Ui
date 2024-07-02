import { FormControl, Grid,  MenuItem, Select,  Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';

function Applicationtable() {
    return (
        <div>
            {/* start table excretion */}
            <Grid container spacing={2} className='' justifyContent="center">
                <Paper sx={{ width: '60%', Height: 2000, overflow: 'hidden' }} className='ms-4'>
                    <TableContainer sx={{ maxHeight: 2000 }}>
                        <Grid container spacing={2} className='' justifyContent="start">
                            <Grid item xs={12} sm={12} md={12} lg={12} className='flex justify-start ' >
                                <Typography component="div" sx={{ color: 'red', fontWeight: 'bold', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, }} className='lg:pl-5  pl-3 pt-2' >
                                    区分 単価該当する区分に「O」 を記入してください。
                                </Typography>
                            </Grid>
                        </Grid>
                        <Table stickyHeader aria-label="sticky table" size="small">

                            <TableBody>
                            <TableRow hover role="checkbox" tabIndex={-1} >
                                    <TableCell>
                                    <Grid container spacing={2} className='' justifyContent="center">
                                            <Grid item xs={12} sm={12} md={12} lg={12} className='' >
                                                <Typography component="div" sx={{ color: 'black',  fontSize: { xs: 11, sm: 11, md: 11, lg: 16, } }} className='pt-3' >
                                                居宅訪問型保育事業以外の場合
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </TableCell>
                                    <TableCell>
                                    </TableCell>
                                    <TableCell>
                                    </TableCell>
                                </TableRow>
                                <TableRow hover role="checkbox" tabIndex={-1} >
                                    <TableCell>
                                        <Grid container spacing={2} className='' justifyContent="center">
                                            <Grid item xs={12} sm={12} md={12} lg={12} className='' >
                                                <FormControl size='small' className="">
                                                    <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white"  }}>
                                                        <MenuItem value="">
                                                            <em>None</em>
                                                        </MenuItem>
                                                        <MenuItem value={1}>o</MenuItem>
                                                        <MenuItem value={2}>／</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </Grid>
                                        </Grid>
                                    </TableCell>
                                    <TableCell>
                                        <Grid container spacing={2} className='' justifyContent="center">
                                            <Grid item xs={12} sm={12} md={12} lg={12} className='' >
                                                <Typography component="div" sx={{ color: 'black',  fontSize: { xs: 11, sm: 11, md: 11, lg: 16, },marginLeft: { xs: 1, sm: -1, md: -5, lg: -20, } }} className='' >
                                                高圧受電施設
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </TableCell>
                                    <TableCell>
                                        <Grid container spacing={2} className='' justifyContent="center">
                                            <Grid item xs={12} sm={12} md={12} lg={12} className='' >
                                                <Typography component="div" sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }  }} className='' >
                                                2,900円
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </TableCell>
                                </TableRow>
                                <TableRow hover role="checkbox" tabIndex={-1} >
                                    <TableCell>
                                        <Grid container spacing={2} className='' justifyContent="center">
                                            <Grid item xs={12} sm={12} md={12} lg={12} className='' >
                                                <FormControl size='small' className="">
                                                    <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
                                                        <MenuItem value="">
                                                            <em>None</em>
                                                        </MenuItem>
                                                        <MenuItem value={1}>o</MenuItem>
                                                        <MenuItem value={2}>／</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </Grid>
                                        </Grid>
                                    </TableCell>
                                    <TableCell>
                                        <Grid container spacing={2} className='' justifyContent="center">
                                            <Grid item xs={12} sm={12} md={12} lg={12} className='' >
                                                <Typography component="div" sx={{ color: 'black',  fontSize: { xs: 11, sm: 11, md: 11, lg: 16, } ,marginLeft: { xs: 1, sm: -1, md: -5, lg: -20, }}} className='' >
                                                都市ガス使用施設
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </TableCell>
                                    <TableCell>
                                        <Grid container spacing={2} className='' justifyContent="center">
                                            <Grid item xs={12} sm={12} md={12} lg={12} className='' >
                                                <Typography component="div" sx={{ color: 'black',  fontSize: { xs: 11, sm: 11, md: 11, lg: 16, } }} className='' >
                                                500円
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </TableCell>
                                </TableRow>
                                <TableRow hover role="checkbox" tabIndex={-1} >
                                    <TableCell>
                                        <Grid container spacing={2} className='' justifyContent="center">
                                            <Grid item xs={12} sm={12} md={12} lg={12} className='' >
                                                <FormControl size='small' className="">
                                                    <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
                                                        <MenuItem value="">
                                                            <em>None</em>
                                                        </MenuItem>
                                                        <MenuItem value={1}>o</MenuItem>
                                                        <MenuItem value={2}>／</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </Grid>
                                        </Grid>
                                    </TableCell>
                                    <TableCell>
                                        <Grid container spacing={2} className='' justifyContent="center">
                                            <Grid item xs={12} sm={12} md={12} lg={12} className='' >
                                                <Typography component="div" sx={{ color: 'black',  fontSize: { xs: 11, sm: 11, md: 11, lg: 16, } ,marginLeft: { xs: 1, sm: -1, md: -5, lg: -20, }}} className='' >
                                                バス送迎実施施設
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </TableCell>
                                    <TableCell>
                                        <Grid container spacing={2} className='' justifyContent="center">
                                            <Grid item xs={12} sm={12} md={12} lg={12} className='' >
                                                <Typography component="div" sx={{ color: 'black',  fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }}} className='' >
                                                400円
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </TableCell>
                                </TableRow>
                                <TableRow hover role="checkbox" tabIndex={-1} >
                                    <TableCell>
                                    <Grid container spacing={2} className='' justifyContent="center">
                                            <Grid item xs={12} sm={12} md={12} lg={12} className='' >
                                                <Typography component="div" sx={{ color: 'black',  fontSize: { xs: 11, sm: 11, md: 11, lg: 16, } }} className='' >
                                                居宅訪問型保育事業の場合
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </TableCell>
                                    <TableCell>
                                    </TableCell>
                                    <TableCell>
                                    </TableCell>
                                </TableRow>
                                <TableRow hover role="checkbox" tabIndex={-1} >
                                    <TableCell>
                                        <Grid container spacing={2} className='' justifyContent="center">
                                            <Grid item xs={12} sm={12} md={12} lg={12} className='' >
                                                <FormControl size='small' className="">
                                                    <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
                                                        <MenuItem value="">
                                                            <em>None</em>
                                                        </MenuItem>
                                                        <MenuItem value={1}>o</MenuItem>
                                                        <MenuItem value={2}>／</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </Grid>
                                        </Grid>
                                    </TableCell>
                                    <TableCell>
                                        <Grid container spacing={2} className='' justifyContent="center">
                                            <Grid item xs={12} sm={12} md={12} lg={12} className='' >
                                                <Typography component="div" sx={{ color: 'black',  fontSize: { xs: 11, sm: 11, md: 11, lg: 16, },marginLeft: { xs: 1, sm: -1, md: -5, lg: -20, } }} className='' >
                                                居宅訪問型保育事業
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </TableCell>
                                    <TableCell>
                                        <Grid container spacing={2} className='' justifyContent="center">
                                            <Grid item xs={12} sm={12} md={12} lg={12} className='' >
                                                <Typography component="div" sx={{ color: 'black',  fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }  }} className='' >
                                                400円
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </TableCell>
                                </TableRow>
                                <TableRow hover role="checkbox" tabIndex={-1} >
                                    <TableCell>
                                    <Grid container spacing={2} className='' justifyContent="center">
                                            <Grid item xs={12} sm={12} md={12} lg={12} className='' >
                                                <Typography component="div" sx={{ color: 'black',  fontSize: { xs: 11, sm: 11, md: 11, lg: 16, } }} className='' >
                                                令和5年7月1日利用定員数
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </TableCell>
                                    <TableCell>
                                        <Grid container spacing={2} className='' justifyContent="center">
                                            <Grid item xs={12} sm={12} md={12} lg={12} className='' >
                                                <Typography component="div" sx={{ color: 'black',  fontSize: { xs: 11, sm: 11, md: 11, lg: 16, } }} className='' >
                                                94人
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </TableCell>
                                    <TableCell>
                                    </TableCell>
                                </TableRow>
                                <TableRow hover role="checkbox" tabIndex={-1} >
                                    <TableCell>
                                    <Grid container spacing={2} className='' justifyContent="center">
                                            <Grid item xs={12} sm={12} md={12} lg={12} className='' >
                                                <Typography component="div" sx={{ color: 'black',  fontSize: { xs: 11, sm: 11, md: 11, lg: 16, } }} className='' >
                                                申請額.請求額
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </TableCell>
                                    <TableCell>
                                        <Grid container spacing={2} className='' justifyContent="center">
                                            <Grid item xs={12} sm={12} md={12} lg={12} className='' >
                                                <Typography component="div" sx={{ color: 'black',  fontSize: { xs: 11, sm: 11, md: 11, lg: 16, } }} className='' >
                                                319,600円
                                                </Typography>
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

export default Applicationtable