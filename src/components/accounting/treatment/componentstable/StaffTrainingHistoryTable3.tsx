import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material";


function StaffTrainingHistoryTable3() {
    return (
        <>
            <TableContainer component={Paper} className="mt-2" sx={{ width: { xs: 'auto', sm: 'auto', md: 'auto', lg: 'auto' } }}>
                <Table sx={{ minWidth: 2000 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell style={{ width: 90, fontWeight: "bold" }} align="left">No.</TableCell>
                            <TableCell style={{ width: 100, fontWeight: "bold" }} align="left">受講年度</TableCell>
                            <TableCell style={{ width: 100, fontWeight: "bold" }} align="left">実施機関</TableCell>
                            <TableCell style={{ width: 100, fontWeight: "bold" }} align="left">研修名または内容</TableCell>
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
                            <TableCell align="left">String</TableCell>
                            <TableCell align="left">String</TableCell>
                            <TableCell align="left">String</TableCell>
                            <TableCell align="left">String</TableCell>
                            <TableCell align="left">String</TableCell>
                            <TableCell align="left">String</TableCell>
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
                            <TableCell align="left">String</TableCell>
                            <TableCell align="left">String</TableCell>
                            <TableCell align="left">String</TableCell>
                            <TableCell align="left">String</TableCell>
                            <TableCell align="left">String</TableCell>
                            <TableCell align="left">String</TableCell>
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
                            <TableCell align="left">String</TableCell>
                            <TableCell align="left">String</TableCell>
                            <TableCell align="left">String</TableCell>
                            <TableCell align="left">String</TableCell>
                            <TableCell align="left">String</TableCell>
                            <TableCell align="left">String</TableCell>
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
                            <TableCell align="left">String</TableCell>
                            <TableCell align="left">String</TableCell>
                            <TableCell align="left">String</TableCell>
                            <TableCell align="left">String</TableCell>
                            <TableCell align="left">String</TableCell>
                            <TableCell align="left">String</TableCell>
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
                            <TableCell align="left">String</TableCell>
                            <TableCell align="left">String</TableCell>
                            <TableCell align="left">String</TableCell>
                            <TableCell align="left">String</TableCell>
                            <TableCell align="left">String</TableCell>
                            <TableCell align="left">String</TableCell>
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
                                    id="branch-office"
                                    name="branch-office"
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
                                    id="branch-office"
                                    name="branch-office"
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
                                    id="branch-office"
                                    name="branch-office"
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
                                    id="branch-office"
                                    name="branch-office"
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

export default StaffTrainingHistoryTable3
