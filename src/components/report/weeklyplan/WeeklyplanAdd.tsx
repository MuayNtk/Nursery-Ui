import { FormControl, Grid, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import ContentMain from "../../content/Content";
import { useState } from "react";
import WeeklyplanUnderTen from "./WeeklyplanUnderTen";
import WeeklyplanOverOne from "./WeeklyplanOverOne";

export default function WeeklyplanAdd() {
      const [selectedOption, setSelectedOption] = useState('');

      const handleDropdownChange = (event: SelectChangeEvent) => {
            setSelectedOption(event.target.value);
      };

      return (
            <>
                  <ContentMain >
                        {/* Start Grid */}
                        <Grid className="pt-10 lg:pt-0 text-start">
                              <Grid item xs={9} sm={7} md={5} lg={2.5} sx={{ ml: { xs: 0, sm: 0, md: 0, lg: 2 }, mt: { xs: -1, sm: -2, md: 5, lg: 4 } }}>
                                    <div>
                                          <FormControl size="small" >
                                                <InputLabel id="demo-select-small-label">週 案 と 保 育 日 誌</InputLabel>
                                                <Select
                                                      labelId="demo-select-small-label"
                                                      id="demo-select-small"
                                                      label="週 案 と 保 育 日 誌"
                                                      value={selectedOption}
                                                      onChange={handleDropdownChange}
                                                      className="mb-5"
                                                      sx={{ minWidth: 250 }}
                                                >
                                                      <MenuItem value="">
                                                            <em>None</em>
                                                      </MenuItem>
                                                      <MenuItem value="週 案 と 保 育 日 誌（未満児)">週 案 と 保 育 日 誌（未満児）</MenuItem>
                                                      <MenuItem value="週 案 と 保 育 日 誌（以上児)">週 案 と 保 育 日 誌（以上児）</MenuItem>
                                                </Select>
                                          </FormControl>
                                          <div>
                                          {selectedOption === '週 案 と 保 育 日 誌（未満児)' && <WeeklyplanUnderTen selectedOption={selectedOption} />}
                                          {selectedOption === '週 案 と 保 育 日 誌（以上児)' && <WeeklyplanOverOne selectedOption={selectedOption} />}
                                          </div>
                                    </div>
                              </Grid>

                        </Grid>

                  </ContentMain>
            </>
      );
};
