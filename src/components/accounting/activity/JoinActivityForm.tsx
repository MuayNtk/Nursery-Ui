import React, { useEffect, useState } from 'react';
import { FormControl, Grid, InputAdornment, OutlinedInput, Paper, Table, TableCell, TableContainer, TableHead, TableRow, TextField, TextareaAutosize, Typography } from "@mui/material";

interface ActivityData {
  id: number;
  name: string;
  limit1: string;
  limit2: string;
}

interface JoinActivityFormProps {
  era: string;
  year: string;
  month: number;
  day: number;
  activityData: ActivityData[];
  onFormDataChange: (data: Record<string, string | number>) => void;
}


const JoinActivityForm: React.FC<JoinActivityFormProps> = ({ era, year, month, day, activityData , onFormDataChange }) => {
  const [formData, setFormData] = useState<Record<string, string | number>>({});
  

  useEffect(() => {
    onFormDataChange(formData);
  }, [formData, onFormDataChange]);

  const handleInputChange = (id: number, field: string, value: string) => {
    const stringFields = [
      'everyday', 'everyweek', 'monthly', 'annual', 'other', 
      'era-textfield', 'year', 'month', 'day', 'place', 
      'participants', 'content'
    ];
  
    const numericFields = [
      'rent', 'equipment', 'honoraria', 'usagefees', 'travelexpenses',
      'commissionfees', 'servicecosts', 'supplycosts', 'rawmaterialcosts'
    ];
  
    const isStringField = stringFields.some(strField => field.startsWith(strField));
    const isNumericField = numericFields.some(numField => field.startsWith(numField));
  
    setFormData(prev => {
      const updatedData: Record<string, string | number> = {
        ...prev,
        [`${field}-${id}`]: isStringField ? value : parseFloat(value) || 0
      };
  
      if (isNumericField) {
        const total = numericFields.reduce((sum, numField) => {
          const numValue = updatedData[`${numField}-${id}`];
          return sum + (typeof numValue === 'number' ? numValue : 0);
        }, 0);
  
        updatedData[`total-${id}`] = total;
      }
  
      return updatedData;
    });
  };
  
// Correctly handle the numeric value conversion
const calculateTotal = (id: number): number => {
  const fields = [
    'rent', 'equipment', 'honoraria', 'usagefees', 'travelexpenses',
    'commissionfees', 'servicecosts', 'supplycosts', 'rawmaterialcosts'
  ];
  return fields.reduce((total, field) => {
    const value = formData[`${field}-${id}`];
    return total + (typeof value === 'number' ? value : 0);
  }, 0);
};

  
  return (
    <>
      {activityData.map(data => (
        <div key={data.id} className='mt-7'>
          <Typography
            component="div"
            sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, fontWeight: 'bold', }}
            className='flex justify-start h-11 pt-3 pl-5'
            bgcolor={"#CCF0FD"}>
            (ID: {data.id}, {data.name} {data.limit1} - {data.limit2})
          </Typography>

          {/* Start 毎日 Grid */}
          <Grid container spacing={2} className='pt-5'>
            <Grid item xs={2} sm={2.5} md={2} lg={1}>
              <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
                毎日 :
              </Typography>
            </Grid>
            <Grid item xs={4} sm={3} md={2.2} lg={1.3}>
              <TextField 
                id={`everyday-${data.id}`} 
                name={`everyday-${data.id}`} 
                type="text" size="small" 
                fullWidth 
                sx={{ backgroundColor: 'white' }} 
                onChange={(e) => handleInputChange(data.id, 'everyday', e.target.value)}
              />
            </Grid>
            <Grid item xs={2} sm={2} md={1} lg={1} sx={{ ml: { xs: 0, sm: 0, md: 0, lg: -6 } }}>
              <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
                每週 :
              </Typography>
            </Grid>
            <Grid item xs={4} sm={3} md={2.2} lg={1.3}>
              <TextField
                className='w-full'
                id={`everyweek-${data.id}`}
                name={`everyweek-${data.id}`}
                type="text"
                size='small'
                sx={{ backgroundColor: "white" }}
                InputProps={{
                  endAdornment: <InputAdornment position="end">回</InputAdornment>,
                }}
                onChange={(e) => handleInputChange(data.id, 'everyweek', e.target.value)}
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
                id={`monthly-${data.id}`}
                name={`monthly-${data.id}`}
                type="text"
                size='small'
                sx={{ backgroundColor: "white" }}
                InputProps={{
                  endAdornment: <InputAdornment position="end">回</InputAdornment>,
                }}
                onChange={(e) => handleInputChange(data.id, 'monthly', e.target.value)}
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
                id={`annual-${data.id}`}
                name={`annual-${data.id}`}
                type="text"
                size='small'
                sx={{ backgroundColor: "white" }}
                InputProps={{
                  endAdornment: <InputAdornment position="end">回</InputAdornment>,
                }}
                onChange={(e) => handleInputChange(data.id, 'annual', e.target.value)}
              />
            </Grid>
            <Grid item xs={2} sm={2} md={1} lg={1} sx={{ ml: { xs: 0, sm: 0, md: 0, lg: -7 } }}>
              <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
                他 :
              </Typography>
            </Grid>
            <Grid item xs={4} sm={3} md={2.2} lg={1.3}>
              <TextField
                className='w-full'
                id={`other-${data.id}`}
                name={`other-${data.id}`}
                type="text"
                size='small'
                sx={{ backgroundColor: "white" }}
                InputProps={{
                  endAdornment: <InputAdornment position="end">回</InputAdornment>,
                }}
                onChange={(e) => handleInputChange(data.id, 'other', e.target.value)}
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
                id={`extension-${data.id}`}
                name={`extension-${data.id}`}
                type="text"
                size='small'
                sx={{ backgroundColor: "white" }}
                InputProps={{
                  endAdornment: <InputAdornment position="end">回</InputAdornment>,
                }}
                onChange={(e) => handleInputChange(data.id, 'extension', e.target.value)}
              />
            </Grid>
          </Grid>
          {/* End 毎日 Grid */}


          {/* Start 日時 Grid */}
          <Grid container spacing={2} className='pt-10'>
            <Grid item xs={2} sm={2.5} md={3} lg={3}>
              <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
                日時 :
              </Typography>
            </Grid>
            <Grid item xs={2.4} sm={3} md={2} lg={1}>
              <TextField
                id={`era-textfield-${data.id}`}
                label=""
                value={era}
                size='small'
                sx={{ backgroundColor: "white" }}
                onChange={(e) => handleInputChange(data.id, 'era-textfield', e.target.value)}
              />
            </Grid>
            <Grid item xs={2.5} sm={3} md={3} lg={1}>
              <FormControl variant="outlined" size="small">
                <OutlinedInput
                  id={`year-${data.id}`}
                  name={`year-${data.id}`}
                  value={year}
                  endAdornment={<InputAdornment position="end">年</InputAdornment>}
                  aria-describedby="outlined-year-helper-text"
                  sx={{ backgroundColor: "white" }}
                  inputProps={{ 'aria-label': 'year' }}
                  onChange={(e) => handleInputChange(data.id, 'year', e.target.value)}
                />
              </FormControl>
            </Grid>
            <Grid item xs={2.5} sm={3} md={3} lg={1}>
              <FormControl variant="outlined" size="small">
                <OutlinedInput
                  id={`month-${data.id}`}
                  name={`month-${data.id}`}
                  value={month}
                  endAdornment={<InputAdornment position="end">月</InputAdornment>}
                  aria-describedby="outlined-month-helper-text"
                  sx={{ backgroundColor: "white" }}
                  inputProps={{ 'aria-label': 'month' }}
                  onChange={(e) => handleInputChange(data.id, 'month', e.target.value)}
                />
              </FormControl>
            </Grid>
            <Grid item xs={2.5} sm={3} md={3} lg={1}>
              <FormControl variant="outlined" size="small">
                <OutlinedInput
                  id={`day-${data.id}`}
                  name={`day-${data.id}`}
                  value={day}
                  endAdornment={<InputAdornment position="end">日</InputAdornment>}
                  aria-describedby="outlined-day-helper-text"
                  sx={{ backgroundColor: "white" }}
                  inputProps={{ 'aria-label': 'day' }}
                  onChange={(e) => handleInputChange(data.id, 'day', e.target.value)}
                />
              </FormControl>
            </Grid>
          </Grid>
          {/* End 日時 Grid */}

          {/* Start 場所 Grid */}
          <Grid container spacing={2} className='pt-5'>
            <Grid item xs={4} sm={3} md={4} lg={3}>
              <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
                場所 :
              </Typography>
            </Grid>
            <Grid item xs={6} sm={5} md={4} lg={3}>
              <TextField 
                id={`place-${data.id}`}
                name={`place-${data.id}`} 
                type="text" 
                size="small" 
                fullWidth 
                sx={{ backgroundColor: 'white' }} 
                onChange={(e) => handleInputChange(data.id, 'place', e.target.value)}
              />
            </Grid>
          </Grid>
          {/* End 場所 Grid */}

          

          {/* Start 参加者 Grid */}
          <Grid container spacing={2} className='pt-5'>
            <Grid item xs={4} sm={3} md={4} lg={3}>
              <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
                参加者 :
              </Typography>
            </Grid>
            <Grid item xs={6} sm={5} md={4} lg={3}>
              <TextField 
                id={`participants-${data.id}`} 
                name={`participants-${data.id}`} 
                type="text" 
                size="small" 
                fullWidth 
                sx={{ backgroundColor: 'white' }}  
                onChange={(e) => handleInputChange(data.id, 'participants', e.target.value)}
              />
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
                id={`content-${data.id}`}
                name={`content-${data.id}`}
                minRows={3}
                maxRows={100}
                className="w-48 sm:w-52 lg:w-80"
                style={{ border: '1px solid gray', borderRadius: '4px' }}
                onChange={(e) => handleInputChange(data.id, 'content', e.target.value)}
              />
            </Grid>
          </Grid>
          {/* End 内容 Grid */}

          {/* Start Table */}
          <Grid container className='pt-3' justifyContent="center">
            <TableContainer component={Paper} className="mt-5" sx={{ width: { xs: 'auto', sm: 'auto', md: 'auto', lg: 800 } }}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table" size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>賃 金</TableCell>
                    <TableCell align="center">
                      <TextField
                        id={`rent-${data.id}`}
                        name={`rent-${data.id}`}
                        type="number"
                        variant="standard"
                        size="small"
                        sx={{ backgroundColor: '#fcf6c7' }}
                        onChange={(e) => handleInputChange(data.id, 'rent', e.target.value)}
                      />
                    </TableCell>
                    <TableCell align="left">円</TableCell>
                    <TableCell>備品購入費</TableCell>
                    <TableCell align="center">
                      <TextField
                        id={`equipment-${data.id}`}
                        name={`equipment-${data.id}`}
                        type="number"
                        variant="standard"
                        size="small"
                        sx={{ backgroundColor: '#fcf6c7' }}
                        onChange={(e) => handleInputChange(data.id, 'equipment', e.target.value)}
                      />
                    </TableCell>
                    <TableCell align="left">円</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>謝 金</TableCell>
                    <TableCell align="center">
                      <TextField
                        id={`honoraria-${data.id}`}
                        name={`honoraria-${data.id}`}
                        type="number"
                        variant="standard"
                        size="small"
                        sx={{ backgroundColor: '#fcf6c7' }}
                        onChange={(e) => handleInputChange(data.id, 'honoraria', e.target.value)}
                      />
                    </TableCell>
                    <TableCell align="left">円</TableCell>
                    <TableCell>使用料及び賃借料</TableCell>
                    <TableCell align="center">
                      <TextField
                        id={`usagefees-${data.id}`}
                        name={`usagefees-${data.id}`}
                        type="number"
                        variant="standard"
                        size="small"
                        sx={{ backgroundColor: '#fcf6c7' }}
                        onChange={(e) => handleInputChange(data.id, 'usagefees', e.target.value)}
                      />
                    </TableCell>
                    <TableCell align="left">円</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>旅 費</TableCell>
                    <TableCell align="center">
                      <TextField
                        id={`travelexpenses-${data.id}`}
                        name={`travelexpenses-${data.id}`}
                        type="number"
                        variant="standard"
                        size="small"
                        sx={{ backgroundColor: '#fcf6c7' }}
                        onChange={(e) => handleInputChange(data.id, 'travelexpenses', e.target.value)}
                      />
                    </TableCell>
                    <TableCell align="left">円</TableCell>
                    <TableCell>委託料</TableCell>
                    <TableCell align="center">
                      <TextField
                        id={`commissionfees-${data.id}`}
                        name={`commissionfees-${data.id}`}
                        type="number"
                        variant="standard"
                        size="small"
                        sx={{ backgroundColor: '#fcf6c7' }}
                        onChange={(e) => handleInputChange(data.id, 'commissionfees', e.target.value)}
                      />
                    </TableCell>
                    <TableCell align="left">円</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>役務費</TableCell>
                    <TableCell align="center">
                      <TextField
                        id={`servicecosts-${data.id}`}
                        name={`servicecosts-${data.id}`}
                        type="number"
                        variant="standard"
                        size="small"
                        sx={{ backgroundColor: '#fcf6c7' }}
                        onChange={(e) => handleInputChange(data.id, 'servicecosts', e.target.value)}
                      />
                    </TableCell>
                    <TableCell align="left">円</TableCell>
                    <TableCell>需用費</TableCell>
                    <TableCell align="center">
                      <TextField
                        id={`supplycosts-${data.id}`}
                        name={`supplycosts-${data.id}`}
                        type="number"
                        variant="standard"
                        size="small"
                        sx={{ backgroundColor: '#fcf6c7' }}
                        onChange={(e) => handleInputChange(data.id, 'supplycosts', e.target.value)}
                      />
                    </TableCell>
                    <TableCell align="left">円</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>原材料費</TableCell>
                    <TableCell style={{ width: 150 }} align="center">
                      <TextField
                        id={`rawmaterialcosts-${data.id}`}
                        name={`rawmaterialcosts-${data.id}`}
                        type="number"
                        variant="standard"
                        size="small"
                        sx={{ backgroundColor: '#fcf6c7' }}
                        onChange={(e) => handleInputChange(data.id, 'rawmaterialcosts', e.target.value)}
                      />
                    </TableCell>
                    <TableCell align="left">円</TableCell>
                    <TableCell>執行予定額の合計</TableCell>
                    <TableCell style={{ width: 150 }} align="center">
                      <TextField
                        id={`total-${data.id}`}
                        name={`total-${data.id}`}
                        type="number"
                        variant="standard"
                        size="small"
                        sx={{ backgroundColor: '#fcf6c7' }}
                        value={calculateTotal(data.id)}
                        InputProps={{
                          readOnly: true
                        }}
                      />
                    </TableCell>
                    <TableCell align="left">円</TableCell>
                  </TableRow>
                </TableHead>
              </Table>
            </TableContainer>
          </Grid>
          {/* End Table */}
        </div>
      ))}
    </>
  );
}

export default JoinActivityForm;
