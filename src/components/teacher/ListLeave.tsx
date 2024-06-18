import { Button, FormControl, Grid, InputLabel, MenuItem, Select, SelectChangeEvent, TextField, Typography } from '@mui/material';
import ContentMain from '../content/Content';
import React from 'react';

export default function ListLeave() {
  const [classroom, setcClass] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setcClass(event.target.value as string);
  };

  return (
    <ContentMain>
      <Grid container spacing={2} className='pt-7' justifyContent="center">
        <Grid item xs={4} sm={4} md={2}>
          <TextField id="outlined-search" label="氏名" type="search" size="small" />
        </Grid>
        <Grid item xs={4} sm={4} md={2} style={{ textAlign: 'center' }}>
          <FormControl sx={{ minWidth: 125 }} size="small" fullWidth>
            <InputLabel id="demo-select-small-label">クラス名</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={classroom}
              label="クラス名"
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>うさぎ</MenuItem>
              <MenuItem value={20}>くま</MenuItem>
              <MenuItem value={30}>ぱんだ</MenuItem>
              <MenuItem value={30}>ぱんだ</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={4} sm={4} md={2}>
          <Button variant="contained" href="#contained-buttons"  className='w-full'>
            <Typography component="div" style={{ color: 'white' }}>
              検索する
            </Typography>
          </Button>
        </Grid>
      </Grid>
      <Grid container spacing={2} className='pt-7' justifyContent="center">
        
      </Grid>
    </ContentMain>
  );
}
