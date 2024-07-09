import { Grid, Typography,TextField,Box,InputAdornment,Button,Menu,MenuItem} from "@mui/material";
import React from "react";

export default function RateCertification() {

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

return (
          <>
                  {/* start block one */}
        <Box sx={{ borderRadius: '5px' }}>
          <Box sx={{ borderBottom: '2px solid grey', padding: 1 }}>
            <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-3 pl-3'>
              <Typography component='div' fontWeight={500} className="pl-3 pt-3" >
                <b>令和5年度処遇改善等加算に係る加算率認定申請書</b>
              </Typography>
            </Grid>
          </Box>


                              {/* Grid 南品号 */}
          <Box sx={{ padding: 2}}>                       
            <Grid container justifyContent = "center" rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-3 pl-3'> 
              <Typography component='div' fontWeight={500} className="pl-3 pt-6">
                南品号:
              </Typography>
              <Grid item xs={7.5} sm={7} md={3}>
                <TextField
                  className='w-full'
                  id="furigana-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  width:200,
                      }}
                />
              </Grid>
            </Grid>
              {/* End Grid 南品号 */}



          {/* Grid 作成日 */}
            <Grid container justifyContent={'center'}  rowSpacing={1} columnSpacing={1} className='pt-3'>
              <Typography component='div' fontWeight={500} className="pl-7 pt-6">
                作成日:
              </Typography>
              <Grid item xs={7.5} sm={7} md={3}>
                <TextField
                  className='w-full'
                  id="year-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                  backgroundColor: "white",
                  width: 100, 
                      }}
                  InputProps={{
                  endAdornment:<InputAdornment position="end">年</InputAdornment>,
                              }}
                />
              </Grid>
              <Grid item xs={7.5} sm={7} md={3} sx = {{paddingRight: 10 }}>
                <TextField
                  className='w-full'
                  id="month-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white", 
                    width: 100,
                      }}
                  InputProps={{
                    endAdornment:<InputAdornment position="end">月</InputAdornment>,
                      }}
                />
              </Grid>
              <Grid item xs={7.5} sm={7} md={3} >
                <TextField
                  className='w-full'
                  id="date_day-input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                    width: 150,
                      }}
                  InputProps={{
                    endAdornment:<InputAdornment position="end">日</InputAdornment>,
                      }}
                />
              </Grid>
            </Grid>
        {/* End Grid 作成日 */}


        {/* Grid 市町村名 */}
            <Grid container  justifyContent = "center" rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-3 pl-2'>
              <Typography component='div' fontWeight={500} className=" pt-6">
                市町村名:
              </Typography>
            <Grid item xs={7.5} sm={7} md={3}>
              <TextField
                className='w-full'
                id="田市-input"
                label=""
                type="text"
                size='small'
                sx={{
                  backgroundColor: "white",
                  width:150,
                    }}
              />
            </Grid>
          </Grid>
        {/* End Grid 市町村名 */}


        {/* Grid 跑設要菜所名 */}
            <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-3 pl-28'>
              <Typography component='div' fontWeight={500} className="pl-28 pr-2 pt-6">
                跑設要菜所名:
              </Typography>
              <Grid item xs={7.5} sm={7} md={3} >
                <TextField
                  className='w-full'
                  id="Name of the restaurant input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                    width: 150,
                      }}
                />
              </Grid>
            </Grid>
              {/* End Grid 跑設要菜所名 */}


            {/* Grid 施設·事業所類型 */}
            <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-3 pl-1'>
              <Typography component='div' fontWeight={500} className=" pt-6" sx ={{paddingLeft: '207px'}}>
                施設·事業所類型:
              </Typography>
              <Grid item xs={7.5} sm={7} md={3}>
                <TextField
                  className='w-full'
                  id="Factory type input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                    width: 200,
                      }}
                />
              </Grid>
            </Grid>
                      {/* End Grid 施設·事業所類型 */}


                      {/* Grid 法人名·代表者名 */}
            <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-3 pl-3'>
              <Typography component='div' fontWeight={500} className="pt-6" sx ={{paddingLeft: '200px'}}>
                法人名·代表者名:
              </Typography>
              <Grid item xs={7.5} sm={7} md={3}>
                <TextField
                  className='w-full'
                  id="Corporate name input"
                  label=""
                  type="text"
                  size='small'
                  sx={{
                    backgroundColor: "white",
                  width: 200,
                      }}
                />
              </Grid>
            </Grid>
                      {/* End Grid 法人名·代表者名 */}


                          {/* Grid 担当者微名 */}
              <Grid container  rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-3 pl-3'>
                <Typography component='div' fontWeight={500} className="pt-6" sx ={{paddingLeft: '238px'}}>
                  担当者微名:
                </Typography>
                <Grid item xs={7.5} sm={7} md={3}>
                  <TextField
                    className='w-full'
                    id="Name of person in charge input"
                    label=""
                    type="text"
                    size='small'
                    sx={{
                      backgroundColor: "white",
                      width: 200,
                        }}
                  />
                </Grid>
              </Grid>
                          {/* End Grid 担当者微名 */}


                          {/* Grid 微話番号 */}
              <Grid container  rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-3 pl-3'>
                <Typography component='div' fontWeight={500} className="pt-6" sx ={{paddingLeft: '255px'}}>
                  微話番号:
                </Typography>
                <Grid item xs={7.5} sm={7} md={3}>
                  <TextField
                    className='w-full'
                    id="Micro-talk leader input"
                    label=""
                    type="text"
                    size='small'
                    sx={{
                      backgroundColor: "white",
                      width: 200,
                        }}
                  />
                </Grid>
              </Grid>
                        {/* End Grid 微話番号 */}
            </Box>
          </Box>
                        {/* end block 1 */}






                                             {/* start block 2 */}
          <Box borderRadius={'5px'}>
              
                  <Box sx ={{borderBottom: '2px solid grey' ,padding: '1px'}}>
            <Grid container justifyContent ='flex-start' rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-3 pl-3' >
              <Typography component='div' fontWeight={500} className="pl-1 lg:pl-1 pt-3">
                <b>
                【処遇改善等加算の遮用総插表】
                </b>
              </Typography>
            </Grid>
                  </Box>



       <Box sx={{ border: '2px  grey' }}>
       {/* Start Grid 【温礎分質定資料】のCの年数から速用され。る基礎分の値:*/}
       <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-3 pl-3' >
              <Typography component='div' fontWeight={500} className="pl-5 lg:pl-1 pt-6">
              ①【温礎分質定資料】のCの年数から速用され。
              </Typography>
          <Grid item xs={12} justifyContent={'flex-start'}>
              <Typography component='div' className="pl-1 lg:pl-1">
              る基礎分の値
              </Typography>
          </Grid>
            <Grid item xs={7.5} sm={7} md={3}>
              <TextField
                className='w-full'
                id="【温礎分質定資料】 input"
                label=""
                type="text"
                size='small'
                sx={{
                  backgroundColor: "white",
                  width: 200,
                }}
              InputProps={{
                endAdornment:<InputAdornment position="end">%</InputAdornment>,
                          }}
              />
            </Grid>
          </Grid>
            {/* End Grid */}

        {/* Start Grid ©黄金改画要件分の価(@が「百]」の場合は、半 ザリアバス要件分の値き漏しること」ー:*/}
        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-3 pl-3' >
              <Typography component='div' fontWeight={500} className="pl-5 lg:pl-1 pt-6">
              ②黄金改画要件分の価(@が「百]」の場合は、半 ザリアバス要件分の値き漏しること」ー
              </Typography>
            <Grid item xs={7.5} sm={7} md={3}>
            <div>
              <Button
                  id="dropdown-button"
                  aria-controls="dropdown-menu"
                  aria-haspopup="true"
                  onClick={handleClick}
                  variant="contained"
                  
              >
                  ˅
              </Button>
              <Menu
                id="dropdown-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
              <MenuItem onClick={handleClose}>Option 1</MenuItem>
              <MenuItem onClick={handleClose}>Option 2</MenuItem>
              <MenuItem onClick={handleClose}>Option 3</MenuItem>
              </Menu>
            </div>

            </Grid>

            <Grid item xs={7.5} sm={7} md={3}>
              <TextField
                className='w-full'
                id="©黄金改画要件分の価 percent input"
                label=""
                type="text"
                size='small'
                sx={{
                  backgroundColor: "white",
                }}
                InputProps={{
                  endAdornment:<InputAdornment position="end">%</InputAdornment>,
                            }}
              />
            </Grid>
        </Grid>
            {/* End Grid */}

            {/* Start Grid ©キャリアハス要件*/}
       <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-3 pl-3' >
              <Typography component='div' fontWeight={500} className="pl-5 lg:pl-24 pt-6">
              ©キャリアハス要件:
              </Typography>
            <Grid item xs={7.5} sm={7} md={3}>
              <TextField
                className='w-full'
                id="©キャリアハス要件 list"
                label=""
                type="text"
                size='small'
                sx={{
                  backgroundColor: "white",
                }}
              />
            </Grid>
          </Grid>
            {/* End Grid */}


              {/* Start Grid 施設・事端所に適用される加算率(@)*/}
       <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-3 pl-3' >
              <Typography component='div' fontWeight={500} className="pl-5 lg:pl-24 pt-6">
              施設・事端所に適用される加算率(@):
              </Typography>
            <Grid item xs={7.5} sm={7} md={3}>
              <TextField
                className='w-full'
                id="施設・事端所に適用される加算率(@) percent input"
                label=""
                type="text"
                size='small'
                sx={{
                  backgroundColor: "white",
                }}
              />
            </Grid>
          </Grid>
            {/* End Grid */}
        </Box>
      </Box>
     




         <Box sx={{ border: '2px solid grey' }}>
         <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-3 pl-3' >
              <Typography component='div' fontWeight={500} className="pl-5 lg:pl-1 pt-3">
                <b>
              【該当する場合のみ】他施設・他事業所から、新規事由に係る加算見込額の一部を受け入れる場合
                </b>
              </Typography>
         </Grid>
        </Box>        


        <Box sx={{ border: '2px solid grey' }}>
                  {/* Start Grid 部府県名*/}
       <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-3 pl-3' >
              <Typography component='div' fontWeight={500} className="pl-5 lg:pl-24 pt-6">
                  部府県名:
              </Typography>
            <Grid item xs={7.5} sm={7} md={3}>
              <TextField
                className='w-full'
                id="部府県名 input"
                label=""
                type="text"
                size='small'
                sx={{
                  backgroundColor: "white",
                  width: 500,
                }}
              />
            </Grid>
          </Grid>
            {/* End Grid */}


         {/* Start Grid 市町村名*/}
       <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-3 pl-3' >
              <Typography component='div' fontWeight={500} className="pl-5 lg:pl-24 pt-6">
                  市町村名:
              </Typography>
            <Grid item xs={7.5} sm={7} md={3}>
              <TextField
                className='w-full'
                id="市町村名 input"
                label=""
                type="text"
                size='small'
                sx={{
                  backgroundColor: "white",
                  width: 500,
                }}
              />
            </Grid>
          </Grid>
            {/* End Grid */}   


            {/* Start Grid 施設·事業所名*/}
       <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-3 pl-3' >
              <Typography component='div' fontWeight={500} className="pl-3 pt-6" sx={{paddingLeft:'58px'}}>
              施設·事業所名:
              </Typography>
            <Grid item xs={7.5} sm={7} md={3}>
              <TextField
                className='w-full'
                id="施設·事業所名 input"
                label=""
                type="text"
                size='small'
                sx={{
                  backgroundColor: "white",
                  width: 500,
                }}
              />
            </Grid>
          </Grid>
            {/* End Grid */}   
            

             {/* Start Grid 施設·事業所名*/}
       <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-3 pl-3' >
              <Typography component='div' fontWeight={500} className="pl-3 lg:pl-3 pt-6">
              消提政办班股·事茉祈个爱:入れる場合:(流设·等安所名]に#
              [深育聞ぼる・所]と日入んてくだきい
              </Typography>
       </Grid>
       <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-3 pl-3' >
              <Typography component='div' fontWeight={500} className="pl-3 lg:pl-3 pt-1">
              ※今和5年康新設運かる受け入れる場合は、新城事由に描当んiて。
              </Typography>
       </Grid>
      </Box>
  </>
 );
   } 
    





























