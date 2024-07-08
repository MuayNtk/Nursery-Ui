import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";


function TrainingHistoryTableB() {
    return (
        <>
            <TableContainer component={Paper} className="mt-2" sx={{ width: { xs: 'auto', sm: 'auto', md: 'auto', lg: 'auto' } }}>
                <Table sx={{ minWidth: 2000 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell style={{ width: 90, fontWeight: "bold" }} rowSpan={4} align="left">No.</TableCell>
                            <TableCell style={{ width: 130, fontWeight: "bold" }} rowSpan={4} align="left">氏名</TableCell>
                            <TableCell style={{ width: 130, fontWeight: "bold" }} rowSpan={4} align="left">職種</TableCell>
                            <TableCell style={{ width: 130, fontWeight: "bold" }} rowSpan={4} align="left">役職名</TableCell>
                            <TableCell style={{ width: 170, fontWeight: "bold" }} rowSpan={4} align="left">修了した専門分野別研修数</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell style={{ fontWeight: "bold" }} colSpan={8} align="center">保育士等キャリアアップ研修又は免許状更新講習</TableCell>
                            <TableCell style={{ width: 130, fontWeight: "bold" }} rowSpan={3} align="center">備考</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell style={{ fontWeight: "bold" }} colSpan={6} align="center">(専門分野別研修)</TableCell>
                            <TableCell style={{ width: 200, fontWeight: "bold" }} rowSpan={2} align="center">⑦ マネジメント研修(副主任保育士は必須)※令和元年度まで有効</TableCell>
                            <TableCell style={{ width: 200, fontWeight: "bold" }} rowSpan={2} align="center">⑧ 保育実践研修※令和元年度まで有効</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell style={{ width: 130, fontWeight: "bold" }} align="center">① 乳児保育</TableCell>
                            <TableCell style={{ width: 130, fontWeight: "bold" }} align="center">② 幼児教育</TableCell>
                            <TableCell style={{ width: 140, fontWeight: "bold" }} align="center">③ 障がい児保育</TableCell>
                            <TableCell style={{ width: 130, fontWeight: "bold" }} align="center">④ 食育・アレルギ一対応</TableCell>
                            <TableCell style={{ width: 130, fontWeight: "bold" }} align="center">⑤ 保育衛生・安全刘策</TableCell>
                            <TableCell style={{ width: 150, fontWeight: "bold" }} align="center">⑥ 保護者支援・子育て支援</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>

                        {/* Start Rows 1 */}
                        <TableRow hover role="checkbox" tabIndex={-1}>
                            <TableCell align="left">1</TableCell>
                            <TableCell align="left">John doe1</TableCell>
                            <TableCell align="left">Occupation-1</TableCell>
                            <TableCell align="left">Job Title-1</TableCell>
                            <TableCell align="left">String-1</TableCell>
                            <TableCell align="left">String-1</TableCell>
                            <TableCell align="left">String-1</TableCell>
                            <TableCell align="left">String-1</TableCell>
                            <TableCell align="left">String-1</TableCell>
                            <TableCell align="left">String-1</TableCell>
                            <TableCell align="left">String-1</TableCell>
                            <TableCell align="left">String-1</TableCell>
                            <TableCell align="left">String-1</TableCell>
                            <TableCell align="left">Remark-1</TableCell>
                        </TableRow>
                        {/* End Rows 1 */}

                        {/* Start Rows 2 */}
                        <TableRow hover role="checkbox" tabIndex={-1}>
                            <TableCell align="left">2</TableCell>
                            <TableCell align="left">John doe2</TableCell>
                            <TableCell align="left">Occupation-2</TableCell>
                            <TableCell align="left">Job Title-2</TableCell>
                            <TableCell align="left">String-2</TableCell>
                            <TableCell align="left">String-2</TableCell>
                            <TableCell align="left">String-2</TableCell>
                            <TableCell align="left">String-2</TableCell>
                            <TableCell align="left">String-2</TableCell>
                            <TableCell align="left">String-2</TableCell>
                            <TableCell align="left">String-2</TableCell>
                            <TableCell align="left">String-2</TableCell>
                            <TableCell align="left">String-2</TableCell>
                            <TableCell align="left">Remark-2</TableCell>
                        </TableRow>
                        {/* End Rows 2 */}

                        {/* Start Rows 3 */}
                        <TableRow hover role="checkbox" tabIndex={-1}>
                            <TableCell align="left">3</TableCell>
                            <TableCell align="left">John doe3</TableCell>
                            <TableCell align="left">Occupation-3</TableCell>
                            <TableCell align="left">Job Title-3</TableCell>
                            <TableCell align="left">String-3</TableCell>
                            <TableCell align="left">String-3</TableCell>
                            <TableCell align="left">String-3</TableCell>
                            <TableCell align="left">String-3</TableCell>
                            <TableCell align="left">String-3</TableCell>
                            <TableCell align="left">String-3</TableCell>
                            <TableCell align="left">String-3</TableCell>
                            <TableCell align="left">String-3</TableCell>
                            <TableCell align="left">String-3</TableCell>
                            <TableCell align="left">Remark-3</TableCell>
                        </TableRow>
                        {/* End Rows 3 */}

                        {/* Start Rows 4 */}
                        <TableRow hover role="checkbox" tabIndex={-1}>
                            <TableCell align="left">4</TableCell>
                            <TableCell align="left">John doe4</TableCell>
                            <TableCell align="left">Occupation-4</TableCell>
                            <TableCell align="left">Job Title-4</TableCell>
                            <TableCell align="left">String-4</TableCell>
                            <TableCell align="left">String-4</TableCell>
                            <TableCell align="left">String-4</TableCell>
                            <TableCell align="left">String-4</TableCell>
                            <TableCell align="left">String-4</TableCell>
                            <TableCell align="left">String-4</TableCell>
                            <TableCell align="left">String-4</TableCell>
                            <TableCell align="left">String-4</TableCell>
                            <TableCell align="left">String-4</TableCell>
                            <TableCell align="left">Remark-4</TableCell>
                        </TableRow>
                        {/* End Rows 4 */}

                        {/* Start Rows 5 */}
                        <TableRow hover role="checkbox" tabIndex={-1}>
                            <TableCell align="left">5</TableCell>
                            <TableCell align="left">John doe5</TableCell>
                            <TableCell align="left">Occupation-5</TableCell>
                            <TableCell align="left">Job Title-5</TableCell>
                            <TableCell align="left">String-5</TableCell>
                            <TableCell align="left">String-5</TableCell>
                            <TableCell align="left">String-5</TableCell>
                            <TableCell align="left">String-5</TableCell>
                            <TableCell align="left">String-5</TableCell>
                            <TableCell align="left">String-5</TableCell>
                            <TableCell align="left">String-5</TableCell>
                            <TableCell align="left">String-5</TableCell>
                            <TableCell align="left">String-5</TableCell>
                            <TableCell align="left">Remark-5</TableCell>
                        </TableRow>
                        {/* End Rows 5 */}

                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default TrainingHistoryTableB
