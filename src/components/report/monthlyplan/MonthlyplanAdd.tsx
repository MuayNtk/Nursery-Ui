import { FormControl, Grid, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import ContentMain from "../../content/Content";
import { useState } from "react";
import MonthlyZero from "./MonthlyZero";
import MonthlyOneTwo from "./MonthlyOneTwo";
import MonthlyThreeYearsAbove from "./MonthlyThreeYearsAbove";

export default function MonthlyplanAdd() {
  const [selectedOption, setSelectedOption] = useState('月指導計画 0 歳児');

  const handleDropdownChange = (event: SelectChangeEvent) => {
      setSelectedOption(event.target.value);
    };

  return (
    <>
      <ContentMain>
        <Grid className="pt-10 lg:pt-0 text-start">
          <Grid item xs={9} sm={7} md={5} lg={2.5} sx={{ ml: { xs: 0, sm: 0, md: 0, lg: 2 }, mt: { xs: -1, sm: -2, md: 5, lg: 4 } }}>
            <div>
              <FormControl size="small">
                <InputLabel id="demo-select-small-label">年間指導計画を選択する</InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  label="年間指導計画を選択する"
                  value={selectedOption}
                  onChange={handleDropdownChange}
                  className="mb-5"
                  sx={{ minWidth: 250 }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="月指導計画 0 歳児">月指導計画 0 歳児</MenuItem>
                  <MenuItem value="月指導計画 1・2 歳児">月指導計画 1・2 歳児</MenuItem>
                  <MenuItem value="月指導計画 3・4・5 歳児">月指導計画 3・4・5 歳児</MenuItem>
                </Select>
              </FormControl>
              <div>
                {selectedOption === '月指導計画 0 歳児' && <MonthlyZero selectedOption={selectedOption} />}
                {selectedOption === '月指導計画 1・2 歳児' && <MonthlyOneTwo selectedOption={selectedOption} />}
                {selectedOption === '月指導計画 3・4・5 歳児' && <MonthlyThreeYearsAbove selectedOption={selectedOption} />}
              </div>
            </div>
          </Grid>
        </Grid>
      </ContentMain>
    </>
  );
};
