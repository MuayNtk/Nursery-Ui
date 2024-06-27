import { FormControl, Grid, InputLabel, MenuItem, Select, SelectChangeEvent, Typography } from "@mui/material";
import ContentMain from "../../content/Content";
import { useState } from "react";

export default function MonthlyplanAdd() {
      const [selectedOption, setSelectedOption] = useState('');
      const handleDropdownChange = (event: SelectChangeEvent) => {
        setSelectedOption(event.target.value);
      };

  return (

    <>
        MonthlyZero
    </>
  );
};
