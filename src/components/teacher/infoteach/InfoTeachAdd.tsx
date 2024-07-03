import { FormControl, Grid, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";
import ContentMain from "../../content/Content";
import { useState } from "react";
import TeachFull from "./TeachFull";
import TeachPart from "./TeachPart";

export default function InfoTeachAdd() {
      const [selectedOption, setSelectedOption] = useState('');
      const handleDropdownChange = (event: SelectChangeEvent) => {
        setSelectedOption(event.target.value);
      };

  return (

    <>
        <ContentMain >
         {/* Start Grid */}
            <Grid  className="pt-10 lg:pt-0 text-start">
                  <Grid item xs={9} sm={7} md={5} lg={2.5} sx={{ ml: { xs: 0, sm: 0, md: 0, lg: 2 }, mt: { xs: -1, sm: -2, md: 5, lg: 4 } }}>
                        <div>
                              <FormControl  size="small" >
                                    <InputLabel id="demo-select-small-label">履歴書</InputLabel>
                                    <Select
                                          labelId="demo-select-small-label"
                                          id="demo-select-small"
                                          label="履歴書"
                                          value={selectedOption}
                                          onChange={handleDropdownChange}
                                          className="mb-5"
                                          sx={{ minWidth: 250 }}
                                    >
                                          <MenuItem value="">
                                          <em>None</em>
                                          </MenuItem>
                                          <MenuItem value="1">正規職員用</MenuItem>
                                          <MenuItem value="2">賃金職員用</MenuItem>
                                    </Select>
                              </FormControl>
                              <div>
                              {selectedOption === '1' &&
                                          <TeachFull/>
                              
                              }
                              {selectedOption === '2' &&
                                    <>
                                          <TeachPart/>
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
