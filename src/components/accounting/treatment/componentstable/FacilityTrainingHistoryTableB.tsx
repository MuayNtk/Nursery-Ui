import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material";



function FacilityTrainingHistoryTableB() {
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
                                    id="management-1"
                                    name="management-1"
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
                                    id="management-2"
                                    name="management-2"
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
                                    id="management-3"
                                    name="management-3"
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
                                    id="management-4"
                                    name="management-4"
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
                                    id="management-5"
                                    name="management-5"
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
                                    id="management-6"
                                    name="management-6"
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
                                    id="management-7"
                                    name="management-7"
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
                                    id="management-8"
                                    name="management-8"
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
                                    id="management-9"
                                    name="management-9"
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
                                    id="management-10"
                                    name="management-10"
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
                                    id="management-11"
                                    name="management-11"
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
                                    id="management-12"
                                    name="management-12"
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
                                    id="management-14"
                                    name="management-14"
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
                                    id="management-15"
                                    name="management-15"
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
                                    id="management-16"
                                    name="management-16"
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
                                    id="management-17"
                                    name="management-17"
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
                                    id="management-18"
                                    name="management-18"
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
                                    id="management-19"
                                    name="management-19"
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
                                    id="management-20"
                                    name="management-20"
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
                                    id="management-21"
                                    name="management-21"
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
                                    id="management-22"
                                    name="management-22"
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
                                    id="management-23"
                                    name="management-23"
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
                                    id="management-24"
                                    name="management-24"
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
                                    id="management-25"
                                    name="management-25"
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
                                    id="management-26"
                                    name="management-26"
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
                                    id="management-27"
                                    name="management-27"
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
                                    id="management-28"
                                    name="management-28"
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
                                    id="management-29"
                                    name="management-29"
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
                                    id="management-30"
                                    name="management-30"
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
                                    id="management-31"
                                    name="management-31"
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

export default FacilityTrainingHistoryTableB
