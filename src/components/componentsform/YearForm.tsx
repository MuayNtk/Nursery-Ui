import { useState } from 'react';
import { InputAdornment, TextField } from '@mui/material';
import Numpad from '../content/Numpad'; // Adjust the path if needed

export default function YearForm() {
  const [numpadOpen, setNumpadOpen] = useState(false);
  const [currentInputId, setCurrentInputId] = useState('');

  const handleInputClick = (id: string) => {
    setCurrentInputId(id);
    setNumpadOpen(true);
  };

  const handleNumpadInput = (value: string) => {
    const input = document.getElementById(currentInputId) as HTMLInputElement;
    if (input) {
      input.value = value;
    }
    setNumpadOpen(false);
  };

  return (
    <>
      <TextField
        id="year"
        name='year'
        type="text"
        style={{ backgroundColor: 'white', marginBottom: '10px' }} 
        size="small"
        onClick={() => handleInputClick('year')}
        InputLabelProps={{ shrink: true }} 
        InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                年
              </InputAdornment>
            ),
            readOnly: true 
          }}
      />
      <Numpad open={numpadOpen} onClose={() => setNumpadOpen(false)} onInput={handleNumpadInput} />
    </>
  );
}
