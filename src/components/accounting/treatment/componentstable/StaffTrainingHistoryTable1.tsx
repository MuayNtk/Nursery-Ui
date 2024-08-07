import { FormControl, InputLabel, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material";


function StaffTrainingHistoryTable1() {
    return (
        <>
            <TableContainer component={Paper} className="mt-2" sx={{ width: { xs: 'auto', sm: 'auto', md: 'auto', lg: 'auto' } }}>
                <Table sx={{ minWidth: 2000 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell style={{ width: 90, fontWeight: "bold" }} align="left">No.</TableCell>
                            <TableCell style={{ width: 100, fontWeight: "bold" }} align="left">受講年度</TableCell>
                            <TableCell style={{ width: 100, fontWeight: "bold" }} align="left">実施機関</TableCell>
                            <TableCell style={{ width: 100, fontWeight: "bold" }} align="left">研修分野</TableCell>
                            <TableCell style={{ width: 100, fontWeight: "bold" }} align="left">時間数</TableCell>
                            <TableCell style={{ width: 130, fontWeight: "bold" }} align="left">左記のうちマネジメント分野時間数</TableCell>
                            <TableCell style={{ width: 100, fontWeight: "bold" }} align="left">終了年朋日</TableCell>
                            <TableCell style={{ width: 100, fontWeight: "bold" }} align="left">実施機関</TableCell>
                            <TableCell style={{ width: 100, fontWeight: "bold" }} align="left">研修分野</TableCell>
                            <TableCell style={{ width: 100, fontWeight: "bold" }} align="left">時間数</TableCell>
                            <TableCell style={{ width: 130, fontWeight: "bold" }} align="left">左記のうちマネジメント分野時間数</TableCell>
                            <TableCell style={{ width: 100, fontWeight: "bold" }} align="left">終了年朋日</TableCell>
                            <TableCell style={{ width: 120, fontWeight: "bold" }} align="left">前回申請時に提出済</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>

                        {/* Start Rows 1 */}
                        <TableRow hover role="checkbox" tabIndex={-1}>
                            <TableCell align="left">String</TableCell>
                            <TableCell align="left">String</TableCell>
                            <TableCell align="left">String</TableCell>
                            <TableCell align="left">
                                <FormControl size="small" fullWidth>
                                    <InputLabel id="training-field-label">研修分野</InputLabel>
                                    <Select
                                        labelId="training-field-label"
                                        id="date-select"
                                        label="研修分野"
                                        sx={{ backgroundColor: "white" }}
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={1}>① 乳児保育</MenuItem>
                                        <MenuItem value={2}>② 幼児教育</MenuItem>
                                        <MenuItem value={3}>③ 障害児保育</MenuItem>
                                        <MenuItem value={4}>④ 食育・アレルギー対応</MenuItem>
                                        <MenuItem value={4}>⑤ 保健衛生.安全対策</MenuItem>
                                        <MenuItem value={4}>⑥ 保護者支援・子育て支援</MenuItem>
                                        <MenuItem value={4}>⑦ マネジメント</MenuItem>
                                        <MenuItem value={4}>⑧ 保育実践</MenuItem>
                                    </Select>
                                </FormControl>
                            </TableCell>
                            <TableCell align="left">String</TableCell>
                            <TableCell align="left">String</TableCell>
                            <TableCell align="left">String</TableCell>
                            <TableCell align="left">String</TableCell>
                            <TableCell align="left">
                                <FormControl size="small" fullWidth>
                                    <InputLabel id="training-field-label">研修分野</InputLabel>
                                    <Select
                                        labelId="training-field-label"
                                        id="training-field-select"
                                        label="研修分野"
                                        sx={{ backgroundColor: "white" }}
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={1}>① 乳児保育</MenuItem>
                                        <MenuItem value={2}>② 幼児教育</MenuItem>
                                        <MenuItem value={3}>③ 障害児保育</MenuItem>
                                        <MenuItem value={4}>④ 食育・アレルギー対応</MenuItem>
                                        <MenuItem value={4}>⑤ 保健衛生.安全対策</MenuItem>
                                        <MenuItem value={4}>⑥ 保護者支援・子育て支援</MenuItem>
                                        <MenuItem value={4}>⑦ マネジメント</MenuItem>
                                        <MenuItem value={4}>⑧ 保育実践</MenuItem>
                                    </Select>
                                </FormControl>
                            </TableCell>
                            <TableCell align="left">String</TableCell>
                            <TableCell align="left">String</TableCell>
                            <TableCell align="left">String</TableCell>
                            <TableCell align="left">String</TableCell>
                        </TableRow>
                        {/* End Rows 1 */}

                        {/* Start Rows 2 */}
                        <TableRow hover role="checkbox" tabIndex={-1}>
                            <TableCell align="left">String</TableCell>
                            <TableCell align="left">String</TableCell>
                            <TableCell align="left">String</TableCell>
                            <TableCell align="left">
                                <FormControl size="small" fullWidth>
                                    <InputLabel id="training-field-label">研修分野</InputLabel>
                                    <Select
                                        labelId="training-field-label"
                                        id="date-select"
                                        label="研修分野"
                                        sx={{ backgroundColor: "white" }}
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={1}>① 乳児保育</MenuItem>
                                        <MenuItem value={2}>② 幼児教育</MenuItem>
                                        <MenuItem value={3}>③ 障害児保育</MenuItem>
                                        <MenuItem value={4}>④ 食育・アレルギー対応</MenuItem>
                                        <MenuItem value={4}>⑤ 保健衛生.安全対策</MenuItem>
                                        <MenuItem value={4}>⑥ 保護者支援・子育て支援</MenuItem>
                                        <MenuItem value={4}>⑦ マネジメント</MenuItem>
                                        <MenuItem value={4}>⑧ 保育実践</MenuItem>
                                    </Select>
                                </FormControl>
                            </TableCell>
                            <TableCell align="left">String</TableCell>
                            <TableCell align="left">String</TableCell>
                            <TableCell align="left">String</TableCell>
                            <TableCell align="left">String</TableCell>
                            <TableCell align="left">
                                <FormControl size="small" fullWidth>
                                    <InputLabel id="training-field-label">研修分野</InputLabel>
                                    <Select
                                        labelId="training-field-label"
                                        id="date-select"
                                        label="研修分野"
                                        sx={{ backgroundColor: "white" }}
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={1}>① 乳児保育</MenuItem>
                                        <MenuItem value={2}>② 幼児教育</MenuItem>
                                        <MenuItem value={3}>③ 障害児保育</MenuItem>
                                        <MenuItem value={4}>④ 食育・アレルギー対応</MenuItem>
                                        <MenuItem value={4}>⑤ 保健衛生.安全対策</MenuItem>
                                        <MenuItem value={4}>⑥ 保護者支援・子育て支援</MenuItem>
                                        <MenuItem value={4}>⑦ マネジメント</MenuItem>
                                        <MenuItem value={4}>⑧ 保育実践</MenuItem>
                                    </Select>
                                </FormControl>
                            </TableCell>
                            <TableCell align="left">String</TableCell>
                            <TableCell align="left">String</TableCell>
                            <TableCell align="left">String</TableCell>
                            <TableCell align="left">String</TableCell>
                        </TableRow>
                        {/* End Rows 2 */}

                        {/* Start Rows 3 */}
                        <TableRow hover role="checkbox" tabIndex={-1}>
                            <TableCell align="left">String</TableCell>
                            <TableCell align="left">String</TableCell>
                            <TableCell align="left">String</TableCell>
                            <TableCell align="left">
                                <FormControl size="small" fullWidth>
                                    <InputLabel id="training-field-label">研修分野</InputLabel>
                                    <Select
                                        labelId="training-field-label"
                                        id="date-select"
                                        label="研修分野"
                                        sx={{ backgroundColor: "white" }}
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={1}>① 乳児保育</MenuItem>
                                        <MenuItem value={2}>② 幼児教育</MenuItem>
                                        <MenuItem value={3}>③ 障害児保育</MenuItem>
                                        <MenuItem value={4}>④ 食育・アレルギー対応</MenuItem>
                                        <MenuItem value={4}>⑤ 保健衛生.安全対策</MenuItem>
                                        <MenuItem value={4}>⑥ 保護者支援・子育て支援</MenuItem>
                                        <MenuItem value={4}>⑦ マネジメント</MenuItem>
                                        <MenuItem value={4}>⑧ 保育実践</MenuItem>
                                    </Select>
                                </FormControl>
                            </TableCell>
                            <TableCell align="left">String</TableCell>
                            <TableCell align="left">String</TableCell>
                            <TableCell align="left">String</TableCell>
                            <TableCell align="left">String</TableCell>
                            <TableCell align="left">
                                <FormControl size="small" fullWidth>
                                    <InputLabel id="training-field-label">研修分野</InputLabel>
                                    <Select
                                        labelId="training-field-label"
                                        id="date-select"
                                        label="研修分野"
                                        sx={{ backgroundColor: "white" }}
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={1}>① 乳児保育</MenuItem>
                                        <MenuItem value={2}>② 幼児教育</MenuItem>
                                        <MenuItem value={3}>③ 障害児保育</MenuItem>
                                        <MenuItem value={4}>④ 食育・アレルギー対応</MenuItem>
                                        <MenuItem value={4}>⑤ 保健衛生.安全対策</MenuItem>
                                        <MenuItem value={4}>⑥ 保護者支援・子育て支援</MenuItem>
                                        <MenuItem value={4}>⑦ マネジメント</MenuItem>
                                        <MenuItem value={4}>⑧ 保育実践</MenuItem>
                                    </Select>
                                </FormControl>
                            </TableCell>
                            <TableCell align="left">String</TableCell>
                            <TableCell align="left">String</TableCell>
                            <TableCell align="left">String</TableCell>
                            <TableCell align="left">String</TableCell>
                        </TableRow>
                        {/* End Rows 3 */}

                        {/* Start Rows 4 */}
                        <TableRow hover role="checkbox" tabIndex={-1}>
                            <TableCell align="left">String</TableCell>
                            <TableCell align="left">String</TableCell>
                            <TableCell align="left">String</TableCell>
                            <TableCell align="left">
                                <FormControl size="small" fullWidth>
                                    <InputLabel id="training-field-label">研修分野</InputLabel>
                                    <Select
                                        labelId="training-field-label"
                                        id="date-select"
                                        label="研修分野"
                                        sx={{ backgroundColor: "white" }}
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={1}>① 乳児保育</MenuItem>
                                        <MenuItem value={2}>② 幼児教育</MenuItem>
                                        <MenuItem value={3}>③ 障害児保育</MenuItem>
                                        <MenuItem value={4}>④ 食育・アレルギー対応</MenuItem>
                                        <MenuItem value={4}>⑤ 保健衛生.安全対策</MenuItem>
                                        <MenuItem value={4}>⑥ 保護者支援・子育て支援</MenuItem>
                                        <MenuItem value={4}>⑦ マネジメント</MenuItem>
                                        <MenuItem value={4}>⑧ 保育実践</MenuItem>
                                    </Select>
                                </FormControl>
                            </TableCell>
                            <TableCell align="left">String</TableCell>
                            <TableCell align="left">String</TableCell>
                            <TableCell align="left">String</TableCell>
                            <TableCell align="left">String</TableCell>
                            <TableCell align="left">
                                <FormControl size="small" fullWidth>
                                    <InputLabel id="training-field-label">研修分野</InputLabel>
                                    <Select
                                        labelId="training-field-label"
                                        id="date-select"
                                        label="研修分野"
                                        sx={{ backgroundColor: "white" }}
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={1}>① 乳児保育</MenuItem>
                                        <MenuItem value={2}>② 幼児教育</MenuItem>
                                        <MenuItem value={3}>③ 障害児保育</MenuItem>
                                        <MenuItem value={4}>④ 食育・アレルギー対応</MenuItem>
                                        <MenuItem value={4}>⑤ 保健衛生.安全対策</MenuItem>
                                        <MenuItem value={4}>⑥ 保護者支援・子育て支援</MenuItem>
                                        <MenuItem value={4}>⑦ マネジメント</MenuItem>
                                        <MenuItem value={4}>⑧ 保育実践</MenuItem>
                                    </Select>
                                </FormControl>
                            </TableCell>
                            <TableCell align="left">String</TableCell>
                            <TableCell align="left">String</TableCell>
                            <TableCell align="left">String</TableCell>
                            <TableCell align="left">String</TableCell>
                        </TableRow>
                        {/* End Rows 4 */}

                        {/* Start Rows 5 */}
                        <TableRow hover role="checkbox" tabIndex={-1}>
                            <TableCell align="left">String</TableCell>
                            <TableCell align="left">String</TableCell>
                            <TableCell align="left">String</TableCell>
                            <TableCell align="left">
                                <FormControl size="small" fullWidth>
                                    <InputLabel id="training-field-label">研修分野</InputLabel>
                                    <Select
                                        labelId="training-field-label"
                                        id="date-select"
                                        label="研修分野"
                                        sx={{ backgroundColor: "white" }}
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={1}>① 乳児保育</MenuItem>
                                        <MenuItem value={2}>② 幼児教育</MenuItem>
                                        <MenuItem value={3}>③ 障害児保育</MenuItem>
                                        <MenuItem value={4}>④ 食育・アレルギー対応</MenuItem>
                                        <MenuItem value={4}>⑤ 保健衛生.安全対策</MenuItem>
                                        <MenuItem value={4}>⑥ 保護者支援・子育て支援</MenuItem>
                                        <MenuItem value={4}>⑦ マネジメント</MenuItem>
                                        <MenuItem value={4}>⑧ 保育実践</MenuItem>
                                    </Select>
                                </FormControl>
                            </TableCell>
                            <TableCell align="left">String</TableCell>
                            <TableCell align="left">String</TableCell>
                            <TableCell align="left">String</TableCell>
                            <TableCell align="left">String</TableCell>
                            <TableCell align="left">
                                <FormControl size="small" fullWidth>
                                    <InputLabel id="training-field-label">研修分野</InputLabel>
                                    <Select
                                        labelId="training-field-label"
                                        id="date-select"
                                        label="研修分野"
                                        sx={{ backgroundColor: "white" }}
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={1}>① 乳児保育</MenuItem>
                                        <MenuItem value={2}>② 幼児教育</MenuItem>
                                        <MenuItem value={3}>③ 障害児保育</MenuItem>
                                        <MenuItem value={4}>④ 食育・アレルギー対応</MenuItem>
                                        <MenuItem value={4}>⑤ 保健衛生.安全対策</MenuItem>
                                        <MenuItem value={4}>⑥ 保護者支援・子育て支援</MenuItem>
                                        <MenuItem value={4}>⑦ マネジメント</MenuItem>
                                        <MenuItem value={4}>⑧ 保育実践</MenuItem>
                                    </Select>
                                </FormControl>
                            </TableCell>
                            <TableCell align="left">String</TableCell>
                            <TableCell align="left">String</TableCell>
                            <TableCell align="left">String</TableCell>
                            <TableCell align="left">String</TableCell>
                        </TableRow>
                        {/* End Rows 5 */}

                        {/* Start Rows 6 */}
                        <TableRow hover role="checkbox" tabIndex={-1}>
                            <TableCell align="left" colSpan={5}>小計</TableCell>
                            <TableCell align="left">
                                <TextField
                                    className='w-full'
                                    id="subtotal"
                                    name="subtotal"
                                    label=""
                                    type="text"
                                    size='small'
                                    sx={{
                                        backgroundColor: "white",
                                    }}
                                />
                            </TableCell>
                            <TableCell align="left">
                                <TextField
                                    className='w-full'
                                    id="subtotal"
                                    name="subtotal"
                                    label=""
                                    type="text"
                                    size='small'
                                    sx={{
                                        backgroundColor: "white",
                                    }}
                                />
                            </TableCell>
                            <TableCell align="left" colSpan={3}></TableCell>
                            <TableCell align="left">
                                <TextField
                                    className='w-full'
                                    id="subtotal"
                                    name="subtotal"
                                    label=""
                                    type="text"
                                    size='small'
                                    sx={{
                                        backgroundColor: "white",
                                    }}
                                />
                            </TableCell>
                            <TableCell align="left">
                                <TextField
                                    className='w-full'
                                    id="subtotal"
                                    name="subtotal"
                                    label=""
                                    type="text"
                                    size='small'
                                    sx={{
                                        backgroundColor: "white",
                                    }}
                                />
                            </TableCell>
                        </TableRow>
                        {/* End Rows 6 */}

                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default StaffTrainingHistoryTable1
