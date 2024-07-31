import React from 'react';
import { Grid, Paper, Table, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

interface ActivityData {
  id: number;
  name: string;
  limit1: string;
  limit2: string;
}

interface JoinActivitySumProps {
  formData: Record<string, string | number>;
  activityData: ActivityData[];
}

const JoinActivitySum: React.FC<JoinActivitySumProps> = ({ formData, activityData }) => {
  // Define fields to sum
  const fieldsToSum = [
    'rent', 'equipment', 'honoraria', 'usagefees', 'travelexpenses',
    'commissionfees', 'servicecosts', 'supplycosts', 'rawmaterialcosts'
  ];

  // Calculate total for each activity
  const activityTotals = activityData.reduce((totals, data) => {
    totals[data.id] = fieldsToSum.reduce((total, field) => {
      const value = formData[`${field}-${data.id}`];
      return total + (typeof value === 'number' ? value : Number(value) || 0);
    }, 0);
    return totals;
  }, {} as Record<number, number>);

  // Calculate grand total
  const totalSum = Object.values(activityTotals).reduce((sum, value) => sum + value, 0);
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
      {/* {activityData.map(data => (
        <div key={data.id} className='mt-7'>
          (ID: {data.id}, {data.name} {data.limit1} - {data.limit2})
        </div>
      ))}

      {Object.entries(formData).map(([key, value]) => (
        <div key={key} className='mt-7'>
         {key}: {value}
        </div>
      ))} */}

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
