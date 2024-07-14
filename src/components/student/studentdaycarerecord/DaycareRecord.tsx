import { Button, Checkbox, FormControlLabel, FormGroup, Grid, Radio, RadioGroup, TextField, Typography } from "@mui/material";
import ContentMain from "../../content/Content";
import EraForm from "../../componentsform/EraForm";
import YearForm from "../../componentsform/YearForm";
import MonthForm from "../../componentsform/MonthForm";
import DayForm from "../../componentsform/DayForm";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SaveIcon from '@mui/icons-material/Save';

export default function DaycareRecord() {


      return (

            <ContentMain className="flex flex-col min-h-screen">
                  <Grid container spacing={3}>
                        {/* Header */}
                        <Grid item xs={12} sx={{ mt: { xs: 2, sm: 0, md: 0, lg: 0 } }}>
                              <Typography variant="h6" gutterBottom className=" text-center">
                                    保育所児童保育要録
                              </Typography>
                        </Grid>
                        {/* 所属, 役職 Fields */}
                        <Grid container spacing={2} className='pt-4'>
                              <Grid item xs={4} sm={3} md={2}>
                                    <Typography sx={{ fontSize: '14px' }} className='pt-2 text-end'>
                                          ふりがな
                                    </Typography>
                              </Grid>
                              <Grid item xs={6} sm={5} md={3}>
                                    <TextField id="futikana" name="futikana" type="text" size="small" fullWidth sx={{ backgroundColor: 'white' }} />
                              </Grid>
                        </Grid>

                        <Grid container spacing={2} className='pt-4' >
                              <Grid item xs={4} sm={3} md={2}>
                                    <Typography style={{ fontSize: '14px' }} className='pt-2 text-end'>
                                          氏名
                                    </Typography>
                              </Grid>
                              <Grid item xs={6} sm={5} md={3}>
                                    <TextField id="outlined-search" type="text" size="small" fullWidth sx={{ backgroundColor: 'white' }} />
                              </Grid>
                        </Grid>

                        {/* 性別 Radio Group */}
                        <Grid container spacing={2} className='pt-4'>
                              <Grid item xs={4} sm={3} md={2}>
                                    <Typography style={{ fontSize: '16px' }} className='pt-2 text-end'>
                                          性別
                                    </Typography>
                              </Grid>
                              <Grid item xs={6} sm={6} md={8}>
                                    <RadioGroup
                                          aria-labelledby="demo-radio-buttons-group-label"
                                          defaultValue="paidleave"
                                          name="radio-buttons-group"
                                          row
                                    >
                                          <FormControlLabel value="M" control={<Radio />} label="男" />
                                          <FormControlLabel value="F" control={<Radio />} label="女" />
                                    </RadioGroup>
                              </Grid>
                        </Grid>

                        {/* 生年月日 Fields */}
                        <Grid container spacing={2} className='pt-4'>
                              <Grid item xs={4} sm={3} md={2} lg={2}>
                                    <Typography sx={{ fontSize: '14px' }} className='pt-2 text-end'>
                                          生年月日
                                    </Typography>
                              </Grid>
                              <Grid item xs={6} sm={2.3} md={2} lg={1}>
                                    <EraForm />
                              </Grid>
                              <Grid item xs={6} sm={2.3} md={2} lg={1} sx={{ ml: { xs: 16, sm: -1, md: -1, lg: 0 } }}>
                                    <YearForm />
                              </Grid>
                              <Grid item xs={6} sm={4.7} md={3} sx={{ ml: { xs: 16, sm: -1.5, md: -1, lg: 0 } }}>
                                    <Grid container spacing={10}>
                                          <Grid item xs={4.5} md={4.5} lg={3.2}>
                                                <MonthForm />
                                          </Grid>
                                          <Grid item xs={5} md={6}>
                                                <DayForm />
                                          </Grid>
                                    </Grid>
                              </Grid>
                        </Grid>

                        <Grid container spacing={2} className='pt-4' >
                              <Grid item xs={4} sm={3} md={2}>
                                    <Typography sx={{ fontSize: '14px' }} className='pt-2 text-end'>
                                          就学先
                                    </Typography>
                              </Grid>
                              <Grid item xs={6} sm={5} md={3}>
                                    <TextField id="outlined-search" type="text" size="small" fullWidth sx={{ backgroundColor: 'white' }} />
                              </Grid>
                        </Grid>

                        {/* Text Area */}
                        <Grid container spacing={2} className='pt-6'>

                              <Grid item xs={6} sm={3} md={2}>
                                    <Typography style={{ fontSize: '14px' }} className='pt-2 text-end'>
                                          保育所名及び所在地
                                    </Typography>
                              </Grid>
                              <Grid item xs={8} sm={5} md={3} sx={{ ml: { xs: 8, sm: 0, md: 0, lg: 0 } }}>
                                    <textarea
                                          id="message"
                                          className="block p-2.5 w-full text-sm min-h-20 border border-gray-300"
                                          placeholder="備考">
                                    </textarea>
                              </Grid>
                        </Grid>
                        {/* Text Area */}
                        <Grid container spacing={2} className='pt-4'>
                              <Grid item xs={4} sm={3} md={2}>
                                    <Typography style={{ fontSize: '14px' }} className='pt-2 text-end'>
                                          所在地
                                    </Typography>
                              </Grid>
                              <Grid item xs={8} sm={5} md={3} sx={{ ml: { xs: 8, sm: 0, md: 0, lg: 0 } }}>
                                    <textarea
                                          id="message"
                                          className="block p-2.5 w-full text-sm min-h-20 border border-gray-300"
                                          placeholder="備考">
                                    </textarea>
                              </Grid>
                        </Grid>
                  </Grid>
                  <Grid className="mt-3">
                        <Typography
                              component="div"
                              sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, backgroundColor: '#CCF0FD', fontWeight: 'bold', pt: { xs: 1.5, sm: 1.5, md: 1.5, lg: 1 } }}
                              className='flex justify-start h-10 pt-2 pl-5' >
                              当該保育所における保育期間
                        </Typography>
                  </Grid>

                  <Grid container spacing={3} className='pt-5'>
                        {/* 生年月日 Fields */}
                        <Grid container spacing={2} className='pt-4'>
                              <Grid item xs={6} sm={12} md={2} lg={1.5} className="text-start lg:text-end" sx={{ ml: { xs: 4, sm: 3, md: 5, lg: 0 } }}>
                                    <Typography style={{ fontSize: '14px' }} className='pt-2'>
                                          生年月日
                                    </Typography>
                              </Grid>
                              <Grid item xs={12} sm={2.5} md={1.5} lg={1} sx={{ ml: { xs: 0, sm: 4, md: 0, lg: 0 } }}>
                                    <EraForm />
                              </Grid>
                              <Grid item xs={12} sm={2.5} md={1.5} lg={1} sx={{ ml: { xs: 0, sm: -1.5, md: 0, lg: 0 } }}>
                                    <YearForm />
                              </Grid>
                              <Grid item>
                                    <Grid container spacing={3}>
                                          <Grid item xs={6} sm={6} md={6} lg={6} sx={{ ml: { xs: 9.5, sm: -1.5, md: 0, lg: 0 } }}>
                                                <MonthForm />
                                          </Grid>
                                          <Grid item xs={1} sm={1} md={1.5} lg={1} sx={{ ml: { xs: -3, sm: -1.2, md: -0.2, lg: 0 } }}>
                                                <DayForm />
                                          </Grid>
                                    </Grid>
                              </Grid>
                              <Grid item xs={12} sm={2} md={1} className="text-center" sx={{ ml: { xs: 0, sm: -3, md: 0, lg: 0 } }}>
                                    <Typography style={{ fontSize: '14px' }} className='pt-2'>
                                          ～
                                    </Typography>
                              </Grid>
                              <Grid item xs={12} sm={2.5} md={1.5} lg={1} sx={{ ml: { xs: 0, sm: 4, md: 20, lg: 0 } }}>
                                    <EraForm />
                              </Grid>
                              <Grid item xs={12} sm={2.5} md={1.5} lg={1} sx={{ ml: { xs: 0, sm: -1.5, md: 0, lg: 0 } }}>
                                    <YearForm />
                              </Grid>
                              <Grid item>
                                    <Grid container spacing={3}>
                                          <Grid item xs={6} sx={{ ml: { xs: 9.5, sm: -1.5, md: 0, lg: 0 } }}>
                                                <MonthForm />
                                          </Grid>
                                          <Grid item xs={1} sx={{ ml: { xs: -3, sm: -1.2, md: 0, lg: 0 } }}>
                                                <DayForm />
                                          </Grid>
                                    </Grid>
                              </Grid>
                        </Grid>
                  </Grid>

                  <Grid container spacing={3} className='pt-5'>
                        {/* 生年月日 Fields */}
                        <Grid container spacing={2} className='pt-4'>
                              <Grid item xs={6} sm={12} md={2} lg={1.5} className="text-start lg:text-end" sx={{ ml: { xs: 4, sm: 3, md: 5, lg: 0 } }}>
                                    <Typography style={{ fontSize: '14px' }} className='pt-2'>
                                          生年月日
                                    </Typography>
                              </Grid>
                              <Grid item xs={12} sm={2.5} md={1.5} lg={1} sx={{ ml: { xs: 0, sm: 4, md: 0, lg: 0 } }}>
                                    <EraForm />
                              </Grid>
                              <Grid item xs={12} sm={2.5} md={1.5} lg={1} sx={{ ml: { xs: 0, sm: -1.5, md: 0, lg: 0 } }}>
                                    <YearForm />
                              </Grid>
                              <Grid item>
                                    <Grid container spacing={3}>
                                          <Grid item xs={6} sm={6} md={6} lg={6} sx={{ ml: { xs: 9.5, sm: -1.5, md: 0, lg: 0 } }}>
                                                <MonthForm />
                                          </Grid>
                                          <Grid item xs={1} sm={1} md={1.5} lg={1} sx={{ ml: { xs: -3, sm: -1.2, md: -0.2, lg: 0 } }}>
                                                <DayForm />
                                          </Grid>
                                    </Grid>
                              </Grid>
                              <Grid item xs={12} sm={2} md={1} className="text-center" sx={{ ml: { xs: 0, sm: -3, md: 0, lg: 0 } }}>
                                    <Typography style={{ fontSize: '14px' }} className='pt-2'>
                                          ～
                                    </Typography>
                              </Grid>
                              <Grid item xs={12} sm={2.5} md={1.5} lg={1} sx={{ ml: { xs: 0, sm: 4, md: 20, lg: 0 } }}>
                                    <EraForm />
                              </Grid>
                              <Grid item xs={12} sm={2.5} md={1.5} lg={1} sx={{ ml: { xs: 0, sm: -1.5, md: 0, lg: 0 } }}>
                                    <YearForm />
                              </Grid>
                              <Grid item>
                                    <Grid container spacing={3}>
                                          <Grid item xs={6} sx={{ ml: { xs: 9.5, sm: -1.5, md: 0, lg: 0 } }}>
                                                <MonthForm />
                                          </Grid>
                                          <Grid item xs={1} sx={{ ml: { xs: -3, sm: -1.2, md: 0, lg: 0 } }}>
                                                <DayForm />
                                          </Grid>
                                    </Grid>
                              </Grid>
                        </Grid>
                  </Grid>

                  <Grid container spacing={3} className='pt-5'>
                        {/* 生年月日 Fields */}
                        <Grid container spacing={2} className='pt-4'>
                              <Grid item xs={6} sm={12} md={2} lg={1.5} className="text-start lg:text-end" sx={{ ml: { xs: 4, sm: 3, md: 5, lg: 0 } }}>
                                    <Typography style={{ fontSize: '14px' }} className='pt-2'>
                                          生年月日
                                    </Typography>
                              </Grid>
                              <Grid item xs={12} sm={2.5} md={1.5} lg={1} sx={{ ml: { xs: 0, sm: 4, md: 0, lg: 0 } }}>
                                    <EraForm />
                              </Grid>
                              <Grid item xs={12} sm={2.5} md={1.5} lg={1} sx={{ ml: { xs: 0, sm: -1.5, md: 0, lg: 0 } }}>
                                    <YearForm />
                              </Grid>
                              <Grid item>
                                    <Grid container spacing={3}>
                                          <Grid item xs={6} sm={6} md={6} lg={6} sx={{ ml: { xs: 9.5, sm: -1.5, md: 0, lg: 0 } }}>
                                                <MonthForm />
                                          </Grid>
                                          <Grid item xs={1} sm={1} md={1.5} lg={1} sx={{ ml: { xs: -3, sm: -1.2, md: -0.2, lg: 0 } }}>
                                                <DayForm />
                                          </Grid>
                                    </Grid>
                              </Grid>
                              <Grid item xs={12} sm={2} md={1} className="text-center" sx={{ ml: { xs: 0, sm: -3, md: 0, lg: 0 } }}>
                                    <Typography style={{ fontSize: '14px' }} className='pt-2'>
                                          ～
                                    </Typography>
                              </Grid>
                              <Grid item xs={12} sm={2.5} md={1.5} lg={1} sx={{ ml: { xs: 0, sm: 4, md: 20, lg: 0 } }}>
                                    <EraForm />
                              </Grid>
                              <Grid item xs={12} sm={2.5} md={1.5} lg={1} sx={{ ml: { xs: 0, sm: -1.5, md: 0, lg: 0 } }}>
                                    <YearForm />
                              </Grid>
                              <Grid item>
                                    <Grid container spacing={3}>
                                          <Grid item xs={6} sx={{ ml: { xs: 9.5, sm: -1.5, md: 0, lg: 0 } }}>
                                                <MonthForm />
                                          </Grid>
                                          <Grid item xs={1} sx={{ ml: { xs: -3, sm: -1.2, md: 0, lg: 0 } }}>
                                                <DayForm />
                                          </Grid>
                                    </Grid>
                              </Grid>
                        </Grid>
                  </Grid>

                  <Grid container spacing={3} className='pt-5'>
                        {/* 生年月日 Fields */}
                        <Grid container spacing={2} className='pt-4'>
                              <Grid item xs={2.3} sm={2} md={2.6} lg={1.5} className="text-end"> </Grid>
                              <Grid item xs={7.5} sm={2.5} md={1.5} lg={1} sx={{ ml: { xs: 0, sm: -6, md: 0, lg: 0 } }}>
                                    <TextField id="outlined-search" type="text" size="small" fullWidth sx={{ backgroundColor: 'white' }} />
                              </Grid>
                              <Grid item xs={12} sm={2.5} md={1.5} lg={1} sx={{ ml: { xs: 0, sm: -1.5, md: 0, lg: 0 } }}>
                                    <YearForm />
                              </Grid>
                              <Grid item>
                                    <Grid container spacing={3}>
                                          <Grid item xs={6} sx={{ ml: { xs: 9.5, sm: -1.5, md: 0, lg: 0 } }}>
                                                <MonthForm />
                                          </Grid>
                                          <Grid item xs={1} sx={{ ml: { xs: -3, sm: -1.2, md: 0, lg: 0 } }}>
                                                <DayForm />
                                          </Grid>
                                    </Grid>
                              </Grid>
                        </Grid>
                  </Grid>
                  <Grid className=" mt-3">
                        <Typography
                              component="div"
                              sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, backgroundColor: '#CCF0FD', fontWeight: 'bold', pt: { xs: 1.5, sm: 1.5, md: 1.5, lg: 1 } }}
                              className='flex justify-start h-10 pt-2 pl-5' >
                              保育の過程と子どもの育ちに関する事項
                        </Typography>
                  </Grid>
                  <Grid container spacing={3} className='pt-9'>
                        <Grid container spacing={2} >

                              <Grid item xs={5} sm={4} md={3} lg={2.3}>
                                    <Typography style={{ fontSize: '14px' }} className='pt-2 text-end'>
                                          【最終年度の重点】
                                    </Typography>
                              </Grid>
                              <Grid item xs={6} sm={5} md={3}>
                                    <textarea
                                          id="message"
                                          className="block p-2.5 w-full text-sm min-h-16 border border-gray-300"
                                          placeholder="備考">
                                    </textarea>
                              </Grid>
                        </Grid>
                        {/* Text Area */}
                        <Grid container spacing={2} className='pt-4'>
                              <Grid item xs={5} sm={4} md={3} lg={2.3}>
                                    <Typography style={{ fontSize: '14px' }} className='pt-2 text-end'>
                                          【特に配慮すべき事項】
                                    </Typography>
                              </Grid>
                              <Grid item xs={6} sm={5} md={3}>
                                    <textarea
                                          id="message"
                                          className="block p-2.5 w-full text-sm min-h-16 border border-gray-300"
                                          placeholder="備考">
                                    </textarea>
                              </Grid>
                        </Grid>
                        <Grid container spacing={2} className='pt-4'>
                              <Grid item xs={5} sm={4} md={3} lg={2.3}>
                                    <Typography style={{ fontSize: '14px' }} className='pt-2 text-end'>
                                          【個人の重点】
                                    </Typography>
                              </Grid>
                              <Grid item xs={6} sm={5} md={3}>
                                    <textarea
                                          id="message"
                                          className="block p-2.5 w-full text-sm min-h-16 border border-gray-300"
                                          placeholder="備考">
                                    </textarea>
                              </Grid>
                        </Grid>
                  </Grid>
                  <Grid className=" mt-3">
                        <Typography
                              component="div"
                              sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, fontWeight: 'bold', pt: { xs: 1.5, sm: 1.5, md: 1.5, lg: 1 } }}
                              className='flex justify-start h-10 pt-2 pl-5' bgcolor={"#CCF0FD"} >
                              ね　ら　い（発達を捉える視点）
                        </Typography>
                  </Grid>
                  <Grid container spacing={3} className='pt-4' sx={{ '& .MuiTypography-root': { fontSize: '14px' },
  '& .MuiFormControlLabel-root': { marginBottom: '-10px' } }} >
                        <Grid item xs={12}>
                              <Typography className=" text-start ">
                                    健康
                              </Typography>
                        </Grid>
                        <Grid container spacing={2} >
                              <Grid item xs={0.5} sm={1} md={0.5}></Grid>
                              <Grid item xs={11} sm={11} md={11}>
                                    <FormGroup className="text-start" >
                                          <FormControlLabel control={<Checkbox />} label="明るく伸び伸びと行動し、充実感を味わう。" />
                                          <FormControlLabel control={<Checkbox />} label="自分の体を十分に動かし、進んで運動しようとする。" />
                                          <FormControlLabel control={<Checkbox />} label="健康、安全な生活に必要な習慣や態度を身に付け、見通しをもって行動する。" />
                                    </FormGroup>
                              </Grid>
                        </Grid>

                        <Grid item xs={12}>
                              <Typography className=" text-start ">
                                    人間関係
                              </Typography>
                        </Grid>
                        <Grid container spacing={2} >
                              <Grid item xs={0.5} sm={1} md={0.5}></Grid>
                              <Grid item xs={11} sm={11} md={11}>
                                    <FormGroup className="text-start" >
                                          <FormControlLabel control={<Checkbox />} label="保育所生活を楽しみ、自分の力で行動することの充実感を味わう。" />
                                          <FormControlLabel control={<Checkbox />} label="身近な人と親しみ、関わりを深め、工夫したり、協力したりして一緒に活動する楽しさを味わい、愛情や信頼感をもつ。" />
                                          <FormControlLabel control={<Checkbox />} label="社会生活における望ましい習慣や態度を身に付ける" />
                                    </FormGroup>
                              </Grid>
                        </Grid>

                        <Grid item xs={12}>
                              <Typography className=" text-start ">
                                    環境
                              </Typography>
                        </Grid>
                        <Grid container spacing={2} >
                              <Grid item xs={0.5} sm={1} md={0.5}></Grid>
                              <Grid item xs={11} sm={11} md={11}>
                                    <FormGroup className="text-start" >
                                          <FormControlLabel control={<Checkbox />} label="身近な環境に親しみ、自然と触れ合う中で様々な事象に興味や関心を持つ。" />
                                          <FormControlLabel control={<Checkbox />} label="身近な環境に自分から関わり、発見を楽しんだり、考えたりし、それを生活に取り入れようとする。" />
                                          <FormControlLabel control={<Checkbox />} label="身近な事象を見たり、考えたり、扱ったりする中で、物の性質や数量、文字などに対する感覚を豊かにする。" />
                                    </FormGroup>
                              </Grid>
                        </Grid>

                        <Grid item xs={12}>
                              <Typography className=" text-start ">
                                    言葉
                              </Typography>
                        </Grid>
                        <Grid container spacing={2} >
                              <Grid item xs={0.5} sm={1} md={0.5}></Grid>
                              <Grid item xs={11} sm={11} md={11}>
                                    <FormGroup className="text-start">
                                          <FormControlLabel control={<Checkbox />} label="自分の気持ちを言葉で表現する楽しさを味わう。" />
                                          <FormControlLabel control={<Checkbox />} label="人の言葉や話などをよく聞き、自分の経験したことや考えたことを話し、伝え合う喜びを味わう。" />
                                          <FormControlLabel control={<Checkbox />} label="日常生活に必要な言葉が分かるようになるとともに、絵本や物語などに親しみ、言葉に対する感覚を豊かにし，保育士等や友達と心を通わせる。" />
                                    </FormGroup>
                              </Grid>
                        </Grid>
                        <Grid item xs={12}>
                              <Typography className=" text-start ">
                                    表現
                              </Typography>
                        </Grid>
                        <Grid container spacing={2} >
                              <Grid item xs={0.5} sm={1} md={0.5}></Grid>
                              <Grid item xs={11} sm={11} md={11}>
                                    <FormGroup className="text-start">
                                          <FormControlLabel control={<Checkbox />} label="いろいろな物の美しさなどに対する豊かな感性をもつ。" />
                                          <FormControlLabel control={<Checkbox />} label="感じたことや考えたことを自分なりに表現して楽しむ。" />
                                          <FormControlLabel control={<Checkbox />} label="生活の中でイメージを豊かにし、様々な表現を楽しむ。" />
                                    </FormGroup>
                              </Grid>
                        </Grid>

                  </Grid>

                  <Grid container spacing={2} className='pt-4' sx={{ ml: { xs: 3, sm: 1, md: 0, lg: 0 } }}>
                        <Grid item xs={12} sm={12} md={4}>
                              <Typography sx={{ fontSize: '14px' }} className='pt-2 text-start'>
                                    保育の展開と子どもの育ち
                              </Typography>
                        </Grid>
                  </Grid>
                  <Grid container spacing={2} className='pt-1' sx={{ ml: { xs: 3, sm: 1, md: 0, lg: 0 } }}>
                        <Grid item xs={8} sm={6} md={4}>
                              <textarea
                                    id="message"
                                    className="block p-2.5 w-full text-sm min-h-16 border border-gray-300"
                                    placeholder="備考">
                              </textarea>
                        </Grid>
                  </Grid>
                  <Grid container spacing={2} className='pt-4' sx={{ ml: { xs: 3, sm: 1, md: 0, lg: 0 } }}>
                        <Grid item xs={12} sm={12} md={4}>
                              <Typography style={{ fontSize: '14px' }} className='pt-2 text-start'>
                                    最終年度に至るまでの育ちに関する事項
                              </Typography>
                        </Grid>
                  </Grid>
                  <Grid container spacing={2} className='pt-1' sx={{ ml: { xs: 3, sm: 1, md: 0, lg: 0 } }}>
                        <Grid item xs={8} sm={6} md={4}>
                              <textarea
                                    id="message"
                                    className="block p-2.5 w-full text-sm min-h-16 border border-gray-300"
                                    placeholder="備考">
                              </textarea>
                        </Grid>
                  </Grid>
                  <Grid container spacing={2} className='pt-4' sx={{ ml: { xs: 3, sm: 1, md: 0, lg: 0 } }}>
                        <Grid item xs={12} sm={12} md={4}>
                              <Typography style={{ fontSize: '14px' }} className='pt-2 text-start'>
                                    最終年度に至るまでの育ちに関する事項
                              </Typography>
                        </Grid>
                  </Grid>
                  <Grid container spacing={2} className='pt-1' sx={{ ml: { xs: 3, sm: 1, md: 0, lg: 0 } }}>
                        <Grid item xs={8} sm={6} md={4}>
                              <textarea
                                    id="message"
                                    className="block p-2.5 w-full text-sm min-h-16 border border-gray-300"
                                    placeholder="備考">
                              </textarea>
                        </Grid>
                  </Grid>
                  <Grid container spacing={2} className='pt-6' justifyContent="left">
                        <Grid item xs={6} sm={6} md={2} lg={1.5} sx={{ ml: { xs: -4, sm: -3, md: 0, lg: 0 } }}>
                              <Typography style={{ fontSize: '14px' }} className='pt-3'>
                                    担当保育士名 :
                              </Typography>
                        </Grid>
                        <Grid item xs={6} sm={4} md={3} sx={{ ml: { xs: -4, sm: -7, md: 0, lg: 0 } }}>
                              <TextField id="outlined-search" type="text" size="small" fullWidth sx={{ backgroundColor: 'white' }} />
                        </Grid>
                        <Grid item xs={6} sm={6} md={2} lg={1.5} sx={{ ml: { xs: -2, sm: -1.5, md: 0, lg: 0 } }}>
                              <Typography style={{ fontSize: '14px' }} className='pt-3'>
                                    施設長名 :
                              </Typography>
                        </Grid>
                        <Grid item xs={6} sm={4} md={3} sx={{ ml: { xs: -6, sm: -8.5, md: 0, lg: 0 } }}>
                              <TextField id="outlined-search" type="text" size="small" fullWidth sx={{ backgroundColor: 'white' }} />
                        </Grid>
                  </Grid>


                  {/* Buttons at the bottom */}
                  <div className="mt-auto">
                        <Grid container justifyContent="center" spacing={2} className='pt-12' sx={{ bottom: 0, width: '100%', backgroundColor: 'inherit', paddingBottom: '10px' }}>
                              <Grid item>
                                    <Button variant="contained" href="/student" size='medium' className='text-center' startIcon={<ArrowBackIcon />}  color="warning">
                                    <Typography component="div" style={{ color: 'white', alignItems: 'center' }}>
                                    戻る
                                    </Typography>
                                    </Button>
                              </Grid>
                              <Grid item>
                                    <Button variant="contained" href="#" size='medium' className='text-center' startIcon={<SaveIcon />} color="success">
                                    <Typography component="div" style={{ color: 'white', alignItems: 'center' }}>
                                    修正
                                    </Typography>
                                    </Button>
                              </Grid>
                        </Grid>
                  </div>
            </ContentMain>

      );
};
