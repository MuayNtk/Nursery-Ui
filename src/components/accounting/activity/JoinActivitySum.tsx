import React from 'react';
import { Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";

interface ActivityData {
  id: number;
  name: string;
  limit1: string;
  limit2: string;
}

interface JoinActivitySumProps {
  formData: Record<string, number>;
  activityData: ActivityData[];
}

const JoinActivitySum: React.FC<JoinActivitySumProps> = ({ formData, activityData }) => {
  const totalSum = Object.values(formData).reduce((sum, value) => sum + value, 0);
  const activityCount = activityData.length;
  const activityIds = activityData.map(data => data.id);
  const circledNumbers: { [key: number]: string } = {
    1: '①',
    2: '②',
    3: '③',
    4: '④',
  };

  const cellCount = 4;


  return (
    <>
      {/* Display activity data */}
      {activityData.map(data => (
        <div key={data.id} className='mt-7'>
          (ID: {data.id}, {data.name} {data.limit1} - {data.limit2})
        </div>

 
      ))}

      {/* Display formData */}
      <div className="mt-7">
        <Typography variant="h6">Form Data:</Typography>
        <TableContainer component={Paper} className="mt-5">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Key</TableCell>
                <TableCell>Value</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Object.entries(formData).map(([key, value]) => (
                <TableRow key={key}>
                  <TableCell>{key}</TableCell>
                  <TableCell>{value.toLocaleString()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      {/* Start Table */}
      <Grid container className='pt-3' justifyContent="center">
        <TableContainer component={Paper} className="mt-5" sx={{ width: { xs: 'auto', sm: 'auto', md: 'auto', lg: 700 } }}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell style={{ width: 250 }}>実施事業番号及び合計事業数</TableCell>
                {activityIds.slice(0, cellCount).map(id => (
                  <TableCell key={id} align="left">{circledNumbers[id] || id}</TableCell>
                ))}
                {Array.from({ length: cellCount - activityIds.length }).map((_, index) => (
                  <TableCell key={`empty-${index}`} align="left"></TableCell>
                ))}
                <TableCell align="left">合計</TableCell>
                <TableCell align="center">{activityCount}</TableCell>
                <TableCell align="left">事業</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>各事業の執行予定額の合計</TableCell>
                <TableCell align="left"></TableCell>
                <TableCell align="left"></TableCell>
                <TableCell align="left"></TableCell>
                <TableCell align="left"></TableCell>
                <TableCell align="left"></TableCell>
                <TableCell align="right">{totalSum.toLocaleString()}</TableCell>
                <TableCell align="center">円</TableCell>
              </TableRow>
            </TableHead>
          </Table>
        </TableContainer>
      </Grid>
      {/* End Table */}
    </>
  );
};

export default JoinActivitySum;
