import React, { useState } from 'react';
import { Modal, Box, Button, TextField } from '@mui/material';

const Numpad: React.FC<{ open: boolean; onClose: () => void; onInput: (value: string) => void }> = ({ open, onClose, onInput }) => {
  const [inputValue, setInputValue] = useState('');

  const buttons = [
    '1', '2', '3',
    '4', '5', '6',
    '7', '8', '9',
    'Back', '0', 'Clear'
  ];

  const handleButtonClick = (value: string) => {
    if (value !== '' && value !== 'Back' && value !== 'Clear') {
      setInputValue((prev) => prev + value);
    }
  };

  const handleBackspaceClick = () => {
    setInputValue((prev) => prev.slice(0, -1));
  };

  const handleOkClick = () => {
    onInput(inputValue);
    setInputValue('');
  };

  const handleClearClick = () => {
    setInputValue('');
  };

  return (
    <Modal 
      open={open}
      onClose={onClose} 
    >
      <Box 
        className="grid grid-cols-3 gap-4 p-6 bg-white rounded-md" 
        sx={{ 
          position: 'absolute', 
          top: '50%', 
          left: '50%', 
          transform: 'translate(-50%, -50%)', 
          width: '90%', 
          maxWidth: '250px',
          boxShadow: 24, 
          p: 2 ,
          
          
        }}
      >
        <TextField
          value={inputValue}
          fullWidth
          InputProps={{ readOnly: true }} 
          className="col-span-3 mb-4"
          onKeyDown={(e) => e.preventDefault()} // Prevent typing with keyboard
        />
        {buttons.map((button, index) => (
          button !== 'Back' && button !== 'Clear' ? (
            <Button
              key={index}
              variant="contained"
              color="primary"
              onClick={() => handleButtonClick(button)}
              className="m-1"
              fullWidth
            >
              {button}
            </Button>
          ) : button === 'Back' ? (
            <Button
              key={index}
              variant="contained"
              color="secondary"
              onClick={handleBackspaceClick}
              className="m-1"
              fullWidth
            >
              Back
            </Button>
          ) : (
            <Button
              key={index}
              variant="contained"
              color="warning"
              onClick={handleClearClick}
              className="m-1"
              fullWidth
            >
              Clear
            </Button>
          )
        ))}
        <Button
          variant="contained"
          color="success"
          onClick={handleOkClick}
          className="col-span-3 mt-4"
        >
          OK
        </Button>
      </Box>
    </Modal>
  );
};

export default Numpad;


