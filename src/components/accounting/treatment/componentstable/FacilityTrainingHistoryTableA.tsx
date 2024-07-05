import { Paper, Table, TableCell, TableContainer, TableHead, TableRow, TableBody, TextField } from "@mui/material";


function FacilityTrainingHistoryTableA() {
    return (
        <>
            <TableContainer component={Paper} className="mt-2" sx={{ width: { xs: 'auto', sm: 'auto', md: 'auto', lg: 'auto' } }}>
                <Table sx={{ minWidth: 1700 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell style={{ width: 90, fontWeight: "bold" }} rowSpan={3} align="left">No.</TableCell>
                            <TableCell style={{ width: 130, fontWeight: "bold" }} rowSpan={3} align="left">氏名</TableCell>
                            <TableCell style={{ width: 130, fontWeight: "bold" }} rowSpan={3} align="left">職種</TableCell>
                            <TableCell style={{ width: 130, fontWeight: "bold" }} rowSpan={3} align="left">役職名</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell style={{ fontWeight: "bold" }} colSpan={2} align="center">前回申請時までの研修終了時間数</TableCell>
                            <TableCell style={{ fontWeight: "bold" }} colSpan={2} align="center">今回申請時までの研修終了時間数</TableCell>
                            <TableCell style={{ fontWeight: "bold" }} colSpan={2} align="center">前回と今回の差(今回追加分)</TableCell>
                            <TableCell style={{ width: 130, fontWeight: "bold" }} rowSpan={2} align="center">備考</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell style={{ width: 130, fontWeight: "bold" }} align="center"></TableCell>
                            <TableCell style={{ width: 130, fontWeight: "bold" }} align="center">うちマネジメント</TableCell>
                            <TableCell style={{ width: 130, fontWeight: "bold" }} align="center"></TableCell>
                            <TableCell style={{ width: 130, fontWeight: "bold" }} align="center">うちマネジメント</TableCell>
                            <TableCell style={{ width: 130, fontWeight: "bold" }} align="center"></TableCell>
                            <TableCell style={{ width: 130, fontWeight: "bold" }} align="center">うちマネジメント</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>

                        {/* Star Rows 1 */}
                        <TableRow hover role="checkbox" tabIndex={-1}>
                            <TableCell align="left">String-1</TableCell>
                            <TableCell align="left">John doe1</TableCell>
                            <TableCell align="left">Occupation-1</TableCell>
                            <TableCell align="left">Job Title-1</TableCell>
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
                            <TableCell align="center">String-1</TableCell>
                        </TableRow>
                        {/* End Rows 1 */}

                        {/* Star Rows 2 */}
                        <TableRow hover role="checkbox" tabIndex={-1}>
                            <TableCell align="left">String-2</TableCell>
                            <TableCell align="left">John doe2</TableCell>
                            <TableCell align="left">Occupation-2</TableCell>
                            <TableCell align="left">Job Title-2</TableCell>
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
                            <TableCell align="center">String-2</TableCell>
                        </TableRow>
                        {/* End Rows 2 */}

                        {/* Star Rows 3 */}
                        <TableRow hover role="checkbox" tabIndex={-1}>
                            <TableCell align="left">String-3</TableCell>
                            <TableCell align="left">John doe3</TableCell>
                            <TableCell align="left">Occupation-3</TableCell>
                            <TableCell align="left">Job Title-3</TableCell>
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
                            <TableCell align="center">String-3</TableCell>
                        </TableRow>
                        {/* End Rows 3 */}

                        {/* Star Rows 4 */}
                        <TableRow hover role="checkbox" tabIndex={-1}>
                            <TableCell align="left">String-4</TableCell>
                            <TableCell align="left">John doe4</TableCell>
                            <TableCell align="left">Occupation-4</TableCell>
                            <TableCell align="left">Job Title-4</TableCell>
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
                            <TableCell align="center">String-4</TableCell>
                        </TableRow>
                        {/* End Rows 4 */}

                        {/* Star Rows 5 */}
                        <TableRow hover role="checkbox" tabIndex={-1}>
                            <TableCell align="left">String-5</TableCell>
                            <TableCell align="left">John doe5</TableCell>
                            <TableCell align="left">Occupation-5</TableCell>
                            <TableCell align="left">Job Title-5</TableCell>
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
                            <TableCell align="center">String-5</TableCell>
                        </TableRow>
                        {/* End Rows 5 */}

                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default FacilityTrainingHistoryTableA
