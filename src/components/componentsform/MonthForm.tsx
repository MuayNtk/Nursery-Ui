import { FormControl,InputLabel,MenuItem,Select,SelectChangeEvent, } from '@mui/material';
import React from 'react';
    
export default function MonthForm() {
      const [month, setMonth] = React.useState('');

      const handleMonthChange = (event: SelectChangeEvent) => {
        setMonth(event.target.value as string);
      };
    
  
      return (
            <FormControl sx={{ minWidth: 90 }} size="small">
                  <InputLabel id="month-select-label">月</InputLabel>
                        <Select
                              labelId="month-select-label"
                              id="month-select"
                              value={month}
                              label="月"
                              onChange={handleMonthChange}
                        >
                              <MenuItem value="">
                              <em>None</em>
                              </MenuItem>
                              {Array.from({ length: 12 }, (_, i) => (
                              <MenuItem key={i + 1} value={i + 1}>
                                    {i + 1} 月
                              </MenuItem>
                        ))}
                        </Select>
            </FormControl>
      );
    }
    