import { Grid, Paper, Table, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";


export default function JoinActivitySum() {

  return (
    <>
      {/* Start Table */}
      <Grid container className='pt-3' justifyContent="center">
        <TableContainer component={Paper} className="mt-5" sx={{ width: { xs: 'auto', sm: 'auto', md: 'auto', lg: 700 } }}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell style={{width: 250}}>実施事業番号及び合計事業数</TableCell>
                <TableCell align="left">➀</TableCell>
                <TableCell align="left">➁</TableCell>
                <TableCell align="left">➂ </TableCell>
                <TableCell align="left">　</TableCell>
                <TableCell align="left">合計</TableCell>
                <TableCell align="center">3</TableCell>
                <TableCell align="left">事業</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>各事業の執行予定額の合計</TableCell>
                <TableCell align="left">　　</TableCell>
                <TableCell align="left">　　</TableCell>
                <TableCell align="left"></TableCell>
                <TableCell align="left">　　</TableCell>
                <TableCell align="left">　　</TableCell>
                <TableCell align="right">600,000</TableCell>
                <TableCell align="center">円</TableCell>
              </TableRow>
            </TableHead>
          </Table>
        </TableContainer>
      </Grid>
      {/* End Table */}
    </>
  );
}
