import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import React from 'react';

export default function DateForm() {
  const [day, setYear] = React.useState('');

  const handleDayChange = (event: SelectChangeEvent) => {
    setYear(event.target.value as string);
  };

  return (
          <FormControl sx={{ minWidth: 90 }} size="small">
            <InputLabel id="day-select-label">日</InputLabel>
              <Select
                labelId="day-select-label"
                id="day-select"
                value={day}
                label="日"
                onChange={handleDayChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {Array.from({ length: 31 }, (_, i) => (
                  <MenuItem key={i + 1} value={i + 1}>
                    {i + 1} 日
                  </MenuItem>
                ))}
              </Select>
          </FormControl>
  
  );
}
