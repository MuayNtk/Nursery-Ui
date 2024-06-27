import { FormControl, Grid, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";
import ContentMain from "../../content/Content";
import { useState } from "react";
import MonthlyZero from "./MonthlyZero";
import MonthlyOneTwo from "./MonthlyOneTwo";
import MonthlyThreeYearsAbove from "./MonthlyThreeYearsAbove";

export default function MonthlyplanAdd() {
      const [selectedOption, setSelectedOption] = useState('');
      const handleDropdownChange = (event: SelectChangeEvent) => {
        setSelectedOption(event.target.value);
      };

  return (

    <>
        <ContentMain >
         {/* Start Grid */}
            <Grid container spacing={1} justifyContent='start' alignItems='center' className="pt-10 lg:pt-0">
                  <Grid item xs={9} sm={7} md={5} lg={2.5} sx={{ ml: { xs: 0, sm: 0, md: 0, lg: 2 }, mt: { xs: -1, sm: -2, md: 5, lg: 4 } }}>
                        <div>
                              <FormControl sx={{ minWidth: 100 }} size="small" fullWidth>
                                    <InputLabel id="demo-select-small-label">年間指導計画を選択する</InputLabel>
                                    <Select
                                          labelId="demo-select-small-label"
                                          id="demo-select-small"
                                          label="年間指導計画を選択する"
                                          size="small"
                                          value={selectedOption}
                                          onChange={handleDropdownChange}
                                          className="mb-5"
                                    >
                                          <MenuItem value="">
                                          <em>None</em>
                                          </MenuItem>
                                          <MenuItem value="1">月指導計画 ０ 歳児</MenuItem>
                                          <MenuItem value="2">月指導計画 １・２ 歳児</MenuItem>
                                          <MenuItem value="3">月指導計画 ３・４・５歳児</MenuItem>
                                    </Select>
                              </FormControl>
                              <div>
                              {selectedOption === '1' &&
                                    <>
                                          <MonthlyZero/>
                                    </>
                              
                              }
                              {selectedOption === '2' &&
                                    <>
                                          <MonthlyOneTwo/>
                                    </>
                              }
                              {selectedOption === '3' &&
                                    <>
                                          <MonthlyThreeYearsAbove/>
                                    </>
                              }
                              </div>
                        </div>
                  </Grid>
                 
            </Grid>

        </ContentMain>
    </>
  );
};
