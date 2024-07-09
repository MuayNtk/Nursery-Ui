import { Button, Card, Checkbox, FormControl, Box, FormControlLabel, Grid, MenuItem, Select, TextField, Typography, InputAdornment } from "@mui/material";
import ContentMain from "../../content/Content";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import HealthCheckForm from "./HealthCheckForm";
import Loading from '../../Loading';
import { useEffect, useState } from 'react';
import Numpad from "../../content/Numpad";


export default function StudentHistory() {

  const [loading, setLoading] = useState(true);
  const [numpadOpen, setNumpadOpen] = useState(false);
  const [currentInputId, setCurrentInputId] = useState('');

  const handleInputClick = (id: string) => {
    setCurrentInputId(id);
    setNumpadOpen(true);
  };

  const handleNumpadInput = (value: string) => {
    const input = document.getElementById(currentInputId) as HTMLInputElement;
    if (input) {
      input.value = value;
    }
    setNumpadOpen(false);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false); // Set loading to false after simulated data fetch
    }, 1000); // Simulate 2 seconds loading time
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (

    <>
      <ContentMain className="flex flex-col min-h-screen ">

        {/* Start Radiogroup Box */}
        <RadioGroup
          defaultValue=""
          aria-labelledby="demo-customized-radios"
          name="customized-radios"
        >
          <Grid container spacing={2} className='pt-7 pl-3' >
            <Grid item xs={4} sm={4} md={2} sx={{ marginLeft: { xs: 0, sm: 0, md: 0, lg: 5 } }}>
              <FormControlLabel value="0歲児" control={<Radio />} label="0歲児 " />
            </Grid>
            <Grid item xs={4} sm={4} md={2} sx={{ marginLeft: { xs: 0, sm: 0, md: 0, lg: -8 } }}>
              <FormControlLabel value="1歲児 " control={<Radio />} label="1歲児 " />
            </Grid>
            <Grid item xs={4} sm={4} md={2} sx={{ marginLeft: { xs: 0, sm: 0, md: 0, lg: -8 } }}>
              <FormControlLabel value="2歲児" control={<Radio />} label="2歲児 " />
            </Grid>
            <Grid item xs={4} sm={4} md={2} sx={{ marginLeft: { xs: 0, sm: 0, md: 0, lg: -8 } }}>
              <FormControlLabel value="3歲児" control={<Radio />} label="3歲児 " />
            </Grid>
            <Grid item xs={4} sm={4} md={2} sx={{ marginLeft: { xs: 0, sm: 0, md: 0, lg: -8 } }}>
              <FormControlLabel value="4歲児" control={<Radio />} label="4歲児 " />
            </Grid>
            <Grid item xs={4} sm={4} md={2} sx={{ marginLeft: { xs: 0, sm: 0, md: 0, lg: -8 } }}>
              <FormControlLabel value="5歲児" control={<Radio />} label="5歲児 " />
            </Grid>
          </Grid>
        </RadioGroup>
        {/* End Radiogroup Box */}

        {/* Start furigana Grid */}
        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-3 pl-3' >
          <Typography component='div' fontWeight={500} className="pl-5 lg:pl-24 pt-6">
            ふりがな
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
              }}
            />
          </Grid>
        </Grid>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-3 pl-3' >
          <Typography component='div' className="pl-[51px] lg:pl-32 pt-6">
            氏名
          </Typography>
          <Grid item xs={7.5} sm={7} md={3}>
            <TextField
              className='w-full'
              id="fullname-input"
              label=""
              type="text"
              size='small'
              sx={{
                backgroundColor: "white",
              }}
            />
          </Grid>
        </Grid>
        {/* End fullname Grid */}

        {/* Start gender Grid */}
        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-3 pl-3' >
          <Typography component='div' className="pl-[51px] lg:pl-32 pt-6">
            性別
          </Typography>
          <Grid item xs={3.5} sm={3} md={1.5}>
            <FormControl size="small" fullWidth>
              <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        {/* End gender Grid */}

        {/* Start birthday Grid */}
        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-3 pl-3' >
          <Typography component='div' className="pl-5 lg:pl-24 pt-6">
            生年月日
          </Typography>
          <Grid item xs={3.5} sm={3} md={1.5}>
            <FormControl size="small" fullWidth>
              <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Typography component='div' className="pl-5 pt-6 md:pl-7 md:pr-0 lg:pl-0"></Typography>
          <Grid item xs={3.3} sm={4} md={1.2}>
            <TextField
              className='w-full'
              id="input"
              label=""
              type="text"
              size='small'
              sx={{
                backgroundColor: "white",
              }}
            />
          </Grid>

          <Typography component='div' className="pl-2 pt-6 lg:pl-1 lg:pr-4 ">
            年
          </Typography>
          <Typography component='div' className="pl-[85px] pt-6 md:pl-[85px] lg:pl-0 "></Typography>

          <Grid item xs={3.5} sm={3} md={1.1}>
            <FormControl size="small" fullWidth>
              <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Typography component='div' className="pl-1 md:pl-1 md:pr-2 pt-6">
            月
          </Typography>

          <Grid item xs={3.3} sm={4} md={1.1}>
            <FormControl size="small" fullWidth>
              <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Typography component='div' className="pl-2 md:pl-1 pt-6">
            日
          </Typography>

        </Grid>
        {/* End birthday Grid */}

        {/* Start admission Grid */}
        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-3 pl-3' >
          <Typography component='div' className="pl-[53px] lg:pl-32 pt-6">
            入所
          </Typography>
          <Grid item xs={3.5} sm={3} md={1.5}>
            <FormControl size="small" fullWidth>
              <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Typography component='div' className="pl-5 pt-6 md:pl-7 md:pr-0 lg:pl-0 "></Typography>
          <Grid item xs={3.3} sm={4} md={1.2}>
            <TextField
              className='w-full'
              id="input"
              label=""
              type="text"
              size='small'
              sx={{
                backgroundColor: "white",
              }}
            />
          </Grid>

          <Typography component='div' className="pl-2 md:pl-1 md:pr-4 pt-6">
            年
          </Typography>
          <Typography component='div' className="pl-[85px] pt-6 md:pl-[85px] lg:pl-0 "></Typography>

          <Grid item xs={3.5} sm={3} md={1.1}>
            <FormControl size="small" fullWidth>
              <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Typography component='div' className="pl-1 md:pl-1 md:pr-2 pt-6">
            月
          </Typography>

          <Grid item xs={3.3} sm={4} md={1.1}>
            <FormControl size="small" fullWidth>
              <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Typography component='div' className="pl-2 md:pl-1 pt-6">
            日
          </Typography>

        </Grid>
        {/* End admission Grid */}

        {/* Start dismissal Grid */}
        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-3 pl-3' >
          <Typography component='div' className="pl-[53px] pt-6 lg:pl-32">
            退所
          </Typography>
          <Grid item xs={3.5} sm={3} md={1.5}>
            <FormControl size="small" fullWidth>
              <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Typography component='div' className="pl-5 pt-6 md:pl-7 lg:pl-0 lg:pr-0"></Typography>
          <Grid item xs={3.3} sm={4} md={1.2}>
            <TextField
              className='w-full'
              id="input"
              label=""
              type="text"
              size='small'
              sx={{
                backgroundColor: "white",
              }}
            />
          </Grid>

          <Typography component='div' className="pl-2 md:pl-1 md:pr-4 pt-6">
            年
          </Typography>
          <Typography component='div' className="pl-[85px] pt-6 md:pl-[85px] lg:pl-0 "></Typography>

          <Grid item xs={3.5} sm={3} md={1.1}>
            <FormControl size="small" fullWidth>
              <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Typography component='div' className="pl-1 md:pl-1 md:pr-2 pt-6">
            月
          </Typography>

          <Grid item xs={3.3} sm={4} md={1.1}>
            <FormControl size="small" fullWidth>
              <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Typography component='div' className="pl-2 md:pl-1 pt-6">
            日
          </Typography>

        </Grid>
        {/* End dismissal Grid */}

        {/* Start Address Card */}
        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-10 pl-20' >
          <Card sx={{ bgcolor: "pink", width: 90, height: 40 }}>
            <Typography component='div' className="pt-2">
              現住所
            </Typography>
          </Card>
        </Grid>
        {/* End Address Card */}

        {/* Start Address Grid */}
        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-4 pl-10 md:pl-16 lg:pl-24' >
          <Grid item xs={10} sm={5} md={2}>
            <TextField
              className='w-full'
              id="Postcode-input"
              label="〒"
              type="text"
              size='small'
              style={{
                backgroundColor: "white",
              }}
            />
          </Grid>
          <Grid item xs={10} sm={5} md={3}>
            <TextField
              className='w-full'
              id="Address-input"
              label=""
              type="text"
              size='small'
              sx={{
                backgroundColor: "white",
              }}
            />
          </Grid>
          <Grid item xs={10} sm={5} md={2.5}>
            <TextField
              className='w-full'
              id="tel"
              name="tel"
              type="tel"
              size='small'
              sx={{
                backgroundColor: "white",
              }}
              onClick={() => handleInputClick('tel')}
              InputLabelProps={{ shrink: true }} 
              InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      Tel:
                    </InputAdornment>
                  ),
                  readOnly: true 
                }}
            />
            <Numpad open={numpadOpen && currentInputId === 'tel'} onClose={() => setNumpadOpen(false)} onInput={handleNumpadInput} />
          </Grid>
          <Grid item xs={10} sm={5} md={3}>
            <TextField
              className='w-full'
              id="School-district-input"
              label="校区"
              type="text"
              size='small'
              sx={{
                backgroundColor: "white",
              }}
            />
          </Grid>
          <Grid item>
            <Button variant="contained" sx={{ width: 30, marginLeft: { xs: 13, sm: 15, md: 0 } }}>+</Button>
          </Grid>
        </Grid>
        {/* End Address Grid */}

        {/* Start Address Card */}
        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-10 pl-20' >
          <Card sx={{ bgcolor: "pink", width: 90, height: 40 }}>
            <Typography component='div' className="pt-2">
              家族の状況
            </Typography>
          </Card>
        </Grid>
        {/* End Address Card */}

        {/* Start Grid */}
        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-4 pl-3' >
          <Typography component='div' fontWeight={500} className="pl-5 pr-[32px] md:pr-[32px] lg:pr-0 lg:pl-24 pt-6">
            氏名
          </Typography>
          <Grid item xs={7.5} sm={8.1} md={3}>
            <TextField
              className='w-full'
              id="furigana-input"
              label=""
              type="text"
              size='small'
              sx={{
                backgroundColor: "white",
              }}
            />
          </Grid>
          <Typography component='div' className="pl-[20px] pt-6 md:pl-5 lg:pl-[70px]">
            生年月日
          </Typography>
          <Grid item xs={3.5} sm={3.5} md={1.3}>
            <FormControl size="small" fullWidth>
              <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Typography component='div' className="pl-5 pt-6 md:pl-7 lg:pl-0 lg:pr-0"></Typography>
          <Grid item xs={3.3} sm={3.8} md={1.2}>
            <TextField
              className='w-full'
              id="input"
              label=""
              type="text"
              size='small'
              sx={{
                backgroundColor: "white",
              }}
            />
          </Grid>

          <Typography component='div' className="pl-2 md:pl-1 md:pr-1 pt-6">
            年
          </Typography>
          <Typography component='div' className="pl-[85px] pt-6 md:pl-[85px] lg:pl-0 "></Typography>

          <Grid item xs={3.5} sm={3.5} md={1.1}>
            <FormControl size="small" fullWidth>
              <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Typography component='div' className="pl-1 md:pl-1 md:pr-2 pt-6">
            月
          </Typography>

          <Grid item xs={3.3} sm={3.8} md={1.1}>
            <FormControl size="small" fullWidth>
              <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Typography component='div' className="pl-2 md:pl-1 pt-6">
            日
          </Typography>

        </Grid>
        {/* End Grid */}

        {/* Start Grid */}
        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-4 pl-3' >
          <Typography component='div' fontWeight={500} className="pl-5 md:pr-[75px] pr-[32px] lg:pr-0 lg:pl-24 pt-6">
            続柄
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
              }}
            />
          </Grid>
          <Typography component='div' fontWeight={500} className="pl-5 md:pr-0 lg:pl-[25px] pt-6">
            職業(具体的に)
          </Typography>
          <Grid item xs={6.1} sm={7} md={4}>
            <TextField
              className='w-full'
              id="furigana-input"
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

        {/* Start Grid */}
        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-4 pl-3' >
          <Typography component='div' fontWeight={500} className="pl-5 pr-4 md:pr-[58px] lg:pr-0 lg:pl-20 pt-6">
            勤務先
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
              }}
            />
          </Grid>
          <Typography component='div' fontWeight={500} className="pl-5 pr-[45px] md:pr-[85px] lg:pr-0 lg:pl-[110px] pt-6">
            Tel
          </Typography>
          <Grid item xs={7.5} sm={7} md={4}>
            <TextField
              className='w-full'
              id="tel1"
              label=""
              type="text"
              size='small'
              sx={{
                backgroundColor: "white",
              }}
              onClick={() => handleInputClick('tel1')}
              InputLabelProps={{ shrink: true }} 
              InputProps={{
                  readOnly: true 
                }}
            />
            <Numpad open={numpadOpen && currentInputId === 'tel1'} onClose={() => setNumpadOpen(false)} onInput={handleNumpadInput} />
          </Grid>

        </Grid>
        {/* End Grid */}

        {/* Start 通所(園)方法 Card */}
        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-10 pl-20' >
          <Card sx={{ bgcolor: "pink", width: 130, height: 40 }}>
            <Typography component='div' className="pt-2">
              通所(園)方法
            </Typography>
          </Card>
        </Grid>
        {/* End Card */}

        {/* Start Address Grid */}
        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-3 pl-10 md:pl-16 lg:pl-24' >
          <Grid item xs={8} sm={7} md={3}>
            <Typography component='div' className=" pb-5">
              自宅
            </Typography>
            <TextField
              className='w-full'
              id="School-district-input"
              label=""
              type="text"
              size='small'
              sx={{
                backgroundColor: "white",
              }}
            />
            <Typography component='div' className="pt-3">
              保育所(園)
            </Typography>
          </Grid>
          <Grid item >
            <Button variant="contained" sx={{ width: 30, marginTop: 6.5 }}>+</Button>
          </Grid>
        </Grid>
        {/* End Address Grid */}

        {/* Start かかりつけの病院 Card */}
        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-10 pl-20' >
          <Card sx={{ bgcolor: "pink", width: 160, height: 40 }}>
            <Typography component='div' className="pt-2">
              かかりつけの病院
            </Typography>
          </Card>
        </Grid>
        {/* End Card */}

        {/* Start 小児科 Grid */}
        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-4 pl-3' >
          <Typography component='div' fontWeight={500} className="pl-5 md:pr-3 lg:pl-24 pt-6">
            小児科
          </Typography>
          <Grid item xs={8} sm={8} md={3}>
            <TextField
              className='w-full'
              id="furigana-input"
              label=""
              type="text"
              size='small'
              sx={{
                backgroundColor: "white",
              }}
            />
          </Grid>
          <Typography component='div' fontWeight={500} className="pl-5 pr-[28px] md:pr-[40px] lg:pr-0 lg:pl-[25px] pt-6">
            Tel
          </Typography>
          <Grid item xs={8} sm={8} md={3}>
            <TextField
              className='w-full'
              id="tel2"
              label=""
              type="text"
              size='small'
              sx={{
                backgroundColor: "white",
              }}
              onClick={() => handleInputClick('tel2')}
              InputLabelProps={{ shrink: true }} 
              InputProps={{
                  readOnly: true 
                }}
            />
            <Numpad open={numpadOpen && currentInputId === 'tel2'} onClose={() => setNumpadOpen(false)} onInput={handleNumpadInput} />
          </Grid>

        </Grid>
        {/* End Grid */}

        {/* Start 内科 Grid */}
        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-4 pl-3' >
          <Typography component='div' fontWeight={500} className="pl-5 pr-4 md:pr-7 lg:pl-24 pt-6">
            内科
          </Typography>
          <Grid item xs={8} sm={8} md={3}>
            <TextField
              className='w-full'
              id="furigana-input"
              label=""
              type="text"
              size='small'
              sx={{
                backgroundColor: "white",
              }}
            />
          </Grid>
          <Typography component='div' fontWeight={500} className="pl-5 pr-[28px] md:pr-[40px] lg:pr-0 lg:pl-[25px] pt-6">
            Tel
          </Typography>
          <Grid item xs={8} sm={8} md={3}>
            <TextField
              className='w-full'
              id="tel3"
              name="tel3"
              label=""
              type="text"
              size='small'
              sx={{
                backgroundColor: "white",
              }}
              onClick={() => handleInputClick('tel3')}
              InputLabelProps={{ shrink: true }} 
              InputProps={{
                  readOnly: true 
                }}
            />
            <Numpad open={numpadOpen && currentInputId === 'tel3'} onClose={() => setNumpadOpen(false)} onInput={handleNumpadInput} />
          </Grid>

        </Grid>
        {/* End Grid */}

        {/* Start 外科 Grid */}
        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-4 pl-3' >
          <Typography component='div' fontWeight={500} className="pl-5 pr-4 md:pr-7 lg:pl-24 pt-6">
            外科
          </Typography>
          <Grid item xs={8} sm={8} md={3}>
            <TextField
              className='w-full'
              id="furigana-input"
              label=""
              type="text"
              size='small'
              sx={{
                backgroundColor: "white",
              }}
            />
          </Grid>
          <Typography component='div' fontWeight={500} className="pl-5 pr-[28px] md:pr-[40px] lg:pr-0 lg:pl-[25px] pt-6">
            Tel
          </Typography>
          <Grid item xs={8} sm={8} md={3}>
            <TextField
              className='w-full'
              id="tel4"
              name=""
              label=""
              type="text"
              size='small'
              sx={{
                backgroundColor: "white",
              }}
              onClick={() => handleInputClick('tel4')}
              InputLabelProps={{ shrink: true }} 
              InputProps={{
                  readOnly: true 
                }}
            />
            <Numpad open={numpadOpen && currentInputId === 'tel4'} onClose={() => setNumpadOpen(false)} onInput={handleNumpadInput} />
          </Grid>

        </Grid>
        {/* End Grid */}

        {/* Start 歯科 Grid */}
        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-4 pl-3' >
          <Typography component='div' fontWeight={500} className="pl-5 pr-4 md:pr-7 lg:pl-24 pt-6">
            歯科
          </Typography>
          <Grid item xs={8} sm={8} md={3}>
            <TextField
              className='w-full'
              id="furigana-input"
              label=""
              type="text"
              size='small'
              sx={{
                backgroundColor: "white",
              }}
            />
          </Grid>
          <Typography component='div' fontWeight={500} className="pl-5 pr-[28px] md:pr-[40px] lg:pr-0 lg:pl-[25px] pt-6">
            Tel
          </Typography>
          <Grid item xs={8} sm={8} md={3}>
            <TextField
              className='w-full'
              id="furigana-input"
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

        {/* Start 科 Grid */}
        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-4 pl-3' >
          <Typography component='div' fontWeight={500} className="pl-5 pr-8 md:pr-11 lg:pr-7 lg:pl-28 pt-6">
            科
          </Typography>
          <Grid item xs={8} sm={8} md={3}>
            <TextField
              className='w-full'
              id="furigana-input"
              label=""
              type="text"
              size='small'
              sx={{
                backgroundColor: "white",
              }}
            />
          </Grid>
          <Typography component='div' fontWeight={500} className="pl-5 pr-[28px] md:pr-[40px] lg:pr-0 lg:pl-[25px] pt-6">
            Tel
          </Typography>
          <Grid item xs={8} sm={8} md={3}>
            <TextField
              className='w-full'
              id="furigana-input"
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

        {/* Start 科 Grid */}
        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-4 pl-3' >
          <Typography component='div' fontWeight={500} className="pl-5 pr-8 md:pr-11 lg:pr-7 lg:pl-28 pt-6">
            科
          </Typography>
          <Grid item xs={8} sm={8} md={3}>
            <TextField
              className='w-full'
              id="furigana-input"
              label=""
              type="text"
              size='small'
              sx={{
                backgroundColor: "white",
              }}
            />
          </Grid>
          <Typography component='div' fontWeight={500} className="pl-5 pr-[28px] md:pr-[40px] lg:pr-0 lg:pl-[25px] pt-6">
            Tel
          </Typography>
          <Grid item xs={8} sm={8} md={3}>
            <TextField
              className='w-full'
              id="furigana-input"
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

        {/* Start 血液型 Grid */}
        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-4 pl-3' >
          <Typography component='div' fontWeight={500} className="pl-5 md:pr-3 lg:pr-7 lg:pl-20 pt-6">
            血液型
          </Typography>
          <Grid item xs={6} sm={5} md={2}>
            <TextField
              className='w-full'
              id="furigana-input"
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

        {/* Start 妊娠中の状況 Grid */}
        <RadioGroup
          defaultValue=""
          aria-labelledby="demo-customized-radios"
          name="customized-radios"
        >
          <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-4 pl-3' >
            <Typography component='div' fontWeight={500} className="pl-5 md:pr-3 lg:pr-7 lg:pl-20 pt-6">
              妊娠中の状況
            </Typography>
            <Grid item xs={4.5} sm={3.5} md={1.7}>
              <FormControlLabel value="胃常なし" control={<Radio />} label="胃常なし" />
            </Grid>
            <Grid item xs={3.5} sm={3.5} md={1.3}>
              <FormControlLabel value="あり" control={<Radio />} label="あり" />
            </Grid>
            <Grid item xs={10.5} sm={10} md={2}>
              <TextField
                className='w-full'
                id="furigana-input"
                label=""
                type="text"
                size='small'
                sx={{
                  backgroundColor: "white",
                }}
              />
            </Grid>
            <Typography component='div' fontWeight={500} className="pl-5 md:pr-3 lg:pr-4 lg:pl-10 pt-6">
              妊娠期間
            </Typography>
            <Grid item xs={7.7} sm={7.4} md={1.5}>
              <TextField
                className='w-full'
                id="furigana-input"
                label=""
                type="text"
                size='small'
                sx={{
                  backgroundColor: "white",
                }}
              />
            </Grid>
            <Typography component='div' fontWeight={500} className="pl-5 md:pr-3 lg:pr-0 lg:pl-1 pt-6">
              週
            </Typography>
          </Grid>
        </RadioGroup>
        {/* End Grid */}

        {/* Start 分娩時の状況 Grid */}
        <RadioGroup
          defaultValue=""
          aria-labelledby="demo-customized-radios"
          name="customized-radios"
        >
          <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-3 pl-3' >
            <Typography component='div' fontWeight={500} className="pl-5 md:pr-3 lg:pr-7 lg:pl-20 pt-6">
              分娩時の状況
            </Typography>
            <Grid item xs={4.5} sm={3.5} md={1.7}>
              <FormControlLabel value="胃常なし" control={<Radio />} label="胃常なし" />
            </Grid>
            <Grid item xs={3.5} sm={3.5} md={1.3}>
              <FormControlLabel value="あり" control={<Radio />} label="あり" />
            </Grid>
            <Grid item xs={10.5} sm={10} md={2}>
              <TextField
                className='w-full'
                id="furigana-input"
                label=""
                type="text"
                size='small'
                sx={{
                  backgroundColor: "white",
                }}
              />
            </Grid>
            <Typography component='div' fontWeight={500} className="pl-5 md:pr-3 lg:pr-0 lg:pl-10 pt-6">
              出生時体重
            </Typography>
            <Grid item xs={7.2} sm={7} md={1.5}>
              <TextField
                className='w-full'
                id="furigana-input"
                label=""
                type="text"
                size='small'
                sx={{
                  backgroundColor: "white",
                }}
              />
            </Grid>
            <Typography component='div' fontWeight={500} className="pl-5 md:pr-3 lg:pr-0 lg:pl-1 pt-6">
              g
            </Typography>
          </Grid>
        </RadioGroup>
        {/* End Grid */}


        {/* Start 出生時の状況 Grid */}
        <RadioGroup
          defaultValue=""
          aria-labelledby="demo-customized-radios"
          name="customized-radios"
        >
          <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-3 pl-3' >
            <Typography component='div' fontWeight={500} className="pl-5 md:pr-3 lg:pr-7 lg:pl-20 pt-6">
              出生時の状況
            </Typography>
            <Grid item xs={4.5} sm={3.5} md={1.7}>
              <FormControlLabel value="胃常なし" control={<Radio />} label="胃常なし" />
            </Grid>
            <Grid item xs={3.5} sm={3.5} md={1.3}>
              <FormControlLabel value="あり" control={<Radio />} label="あり" />
            </Grid>
            <Grid item xs={10.5} sm={10} md={2}>
              <TextField
                className='w-full'
                id="furigana-input"
                label=""
                type="text"
                size='small'
                sx={{
                  backgroundColor: "white",
                }}
              />
            </Grid>
          </Grid>
        </RadioGroup>
        {/* End Grid */}

        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-3 pl-3' >
          <Typography component='div' fontWeight={500} className="pl-5 md:pr-3 lg:pr-7 lg:pl-20 pt-6">
            乳児期の様子
          </Typography>
        </Grid>

        {/* Start Grid */}
        <RadioGroup
          defaultValue=""
          aria-labelledby="demo-customized-radios"
          name="customized-radios"
        >
          <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-3 pl-3' >
            <Typography component='div' fontWeight={500} className="pl-14 pr-36 md:pr-64 lg:pr-7 lg:pl-32 pt-6">
              栄養方法
            </Typography>
            <Grid item xs={3.5} sm={3} md={1.4}>
              <FormControlLabel value="母乳" control={<Radio />} label="母乳" />
            </Grid>
            <Grid item xs={4.6} sm={3} md={1.4}>
              <FormControlLabel value="混合" control={<Radio />} label="混合" />
            </Grid>
            <Grid item xs={3.7} sm={3.5} md={1.6}>
              <FormControlLabel value="人工乳" control={<Radio />} label="人工乳" />
            </Grid>
          </Grid>
        </RadioGroup>
        {/* End Grid */}

        {/* Start Grid */}
        <RadioGroup
          defaultValue=""
          aria-labelledby="demo-customized-radios"
          name="customized-radios"
        >
          <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-2 pl-3' >
            <Typography component='div' fontWeight={500} className="pl-14 pr-40 md:pr-[300px] lg:pr-[69px] lg:pl-32 pt-6">
              離乳
            </Typography>
            <Grid item xs={4.1} sm={3.2} md={1.5} sx={{ marginLeft: { xs: 0, sm: 0, md: 0, lg: -0.5 } }}>
              <FormControlLabel value="末開始" control={<Radio />} label="末開始" />
            </Grid>
            <Grid item xs={3.5} sm={3} md={1.3} sx={{ marginLeft: { xs: 0, sm: 0, md: 0, lg: -1 } }}>
              <FormControlLabel value="か月" control={<Radio />} label="か月" />
            </Grid>
            <Grid item xs={4.3} sm={3} md={1.4} sx={{ marginLeft: { xs: 0, sm: 0, md: 0, lg: 0.5 } }}>
              <FormControlLabel value="完了" control={<Radio />} label="完了" />
            </Grid>
          </Grid>
        </RadioGroup>
        {/* End Grid */}

        {/* Start Grid */}
        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-3 pl-3' >
          <Typography component='div' fontWeight={500} className="md:pl-5 md:pr-0 lg:pr-0 lg:pl-28 pt-6">
            首のすわり
          </Typography>
          <Grid item xs={7.3} sm={6} md={2}>
            <TextField
              className='w-full'
              id="furigana-input"
              label=""
              type="text"
              size='small'
              sx={{
                backgroundColor: "white",
              }}
            />
          </Grid>
          <Typography component='div' fontWeight={500} className="pl-2 md:pl-2 md:pr-[40px] lg:pr-16 lg:pl-[5px] pt-6">
            か月
          </Typography>

          <Typography component='div' fontWeight={500} className="pl-4 md:pl-9 md:pr-[0px] lg:pr-0 lg:pl-[100px] pt-6">
            はいはい
          </Typography>
          <Grid item xs={7.3} sm={6} md={2}>
            <TextField
              className='w-full'
              id="furigana-input"
              label=""
              type="text"
              size='small'
              sx={{
                backgroundColor: "white",
              }}
            />
          </Grid>
          <Typography component='div' fontWeight={500} className="pl-2 md:pl-2 md:pr-[40px] lg:pr-16 lg:pl-[5px] pt-6">
            か月
          </Typography>
        </Grid>
        {/* End Grid */}

        {/* Start Grid */}
        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-5 pl-3' >
          <Typography component='div' fontWeight={500} className="md:pl-5 md:pr-0 lg:pr-0 lg:pl-28 pt-6">
            ひとり歩き
          </Typography>
          <Grid item xs={7.3} sm={6} md={2}>
            <TextField
              className='w-full'
              id="furigana-input"
              label=""
              type="text"
              size='small'
              sx={{
                backgroundColor: "white",
              }}
            />
          </Grid>
          <Typography component='div' fontWeight={500} className="pl-2 md:pl-2 md:pr-[40px] lg:pr-16 lg:pl-[5px] pt-6">
            か月
          </Typography>

          <Typography component='div' fontWeight={500} className="md:pl-0 md:pr-[0px] lg:pr-0 lg:pl-[25px] pt-6">
            "マンマ"などの言葉
          </Typography>
          <Grid item xs={5.3} sm={4.9} md={2}>
            <TextField
              className='w-full'
              id="furigana-input"
              label=""
              type="text"
              size='small'
              sx={{
                backgroundColor: "white",
              }}
            />
          </Grid>
          <Typography component='div' fontWeight={500} className="pl-2 md:pl-2 md:pr-[40px] lg:pr-16 lg:pl-[5px] pt-6">
            か月
          </Typography>
        </Grid>
        {/* End Grid */}

        {/* Start Card */}
        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-10 pl-20' >
          <Card sx={{ bgcolor: "pink", width: 150, height: 40 }}>
            <Typography component='div' className="pt-2">
              予防接種状況
            </Typography>
          </Card>
        </Grid>
        {/* End Card */}

        {/* Start Grid */}
        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 0 }} className='pt-3 pl-3' >
          <Typography component='div' fontWeight={300} className="pl-3 md:pl-[10px] md:pr-[0px] lg:pr-0 lg:pl-[40px] pt-9">
            B型肝炎
          </Typography>
          <Grid item xs={9} sm={5.8} md={2.5} lg={2.7} sx={{ marginLeft: { xs: 0, sm: -0.5, md: 0, lg: -1 } }} className='scale-75' >
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['DatePicker']}>
                <DatePicker label="Start date" sx={{ backgroundColor: "white" }} />
              </DemoContainer>
            </LocalizationProvider>
          </Grid>
          <Grid item xs={9} sm={5.8} md={2.5} lg={2.7} sx={{ marginLeft: { xs: 9, sm: -7.5, md: 0, lg: -6 }, marginTop: { xs: -4, sm: 0, md: 0 } }} className='scale-75' >
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['DatePicker']}>
                <DatePicker label="End date" sx={{ backgroundColor: "white" }} />
              </DemoContainer>
            </LocalizationProvider>
          </Grid>

          <Typography component='div' fontWeight={300} className="pl-3 md:pl-9 md:pr-[0px] lg:pr-0 lg:pl-[60px] pt-9">
            BCG
          </Typography>
          <Grid item xs={9} sm={5.8} md={2.7} sx={{ marginLeft: { xs: 3, sm: -0.5, md: 0, lg: -1 }, marginTop: { xs: -1.5, sm: 0, md: 0 } }} className='scale-75' >
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['DatePicker']}>
                <DatePicker label="Start date" sx={{ backgroundColor: "white" }} />
              </DemoContainer>
            </LocalizationProvider>
          </Grid>
          <Grid item xs={9} sm={5.8} md={2.7} sx={{ marginLeft: { xs: 9, sm: -7.5, md: 0, lg: -6 }, marginTop: { xs: -4, sm: 0, md: 0 } }} className='scale-75' >
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['DatePicker']}>
                <DatePicker label="End date" sx={{ backgroundColor: "white" }} />
              </DemoContainer>
            </LocalizationProvider>
          </Grid>
        </Grid>
        {/* End Grid */}

        {/* Start Grid */}
        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 0 }} className='pt-1 pl-3' >
          <Typography component='div' fontWeight={300} className="pl-3 md:pl-[15px] md:pr-[0px] lg:pr-0 lg:pl-[40px] pt-9">
            4種混合
          </Typography>
          <Grid item xs={9} sm={5.8} md={2.5} lg={2.7} sx={{ marginLeft: { xs: 0, sm: -0.5, md: 0, lg: -1 } }} className='scale-75' >
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['DatePicker']}>
                <DatePicker label="Start date" sx={{ backgroundColor: "white" }} />
              </DemoContainer>
            </LocalizationProvider>
          </Grid>
          <Grid item xs={9} sm={5.8} md={2.5} lg={2.7} sx={{ marginLeft: { xs: 8.7, sm: -7.5, md: 0, lg: -6 }, marginTop: { xs: -4, sm: 0, md: 0 } }} className='scale-75' >
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['DatePicker']}>
                <DatePicker label="End date" sx={{ backgroundColor: "white" }} />
              </DemoContainer>
            </LocalizationProvider>
          </Grid>

          <Typography component='div' fontWeight={500} className="md:pr-[0px] lg:pr-0 lg:pl-[0px] pt-9">
            ロタウイルス
          </Typography>
          <Grid item xs={9} sm={5.8} md={2.7} lg={2.7} sx={{ marginLeft: { xs: -3, sm: -3.5, md: 0, lg: -1 }, marginTop: { xs: -1.5, sm: 0, md: 0 } }} className='scale-75' >
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['DatePicker']}>
                <DatePicker label="Start date" sx={{ backgroundColor: "white" }} />
              </DemoContainer>
            </LocalizationProvider>
          </Grid>
          <Grid item xs={9} sm={5.8} md={2.7} lg={2.7} sx={{ marginLeft: { xs: 9, sm: -7.5, md: 0, lg: -6 }, marginTop: { xs: -4, sm: 0, md: 0 } }} className='scale-75' >
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['DatePicker']}>
                <DatePicker label="End date" sx={{ backgroundColor: "white" }} />
              </DemoContainer>
            </LocalizationProvider>
          </Grid>
        </Grid>
        {/* End Grid */}

        {/* Start Grid */}
        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 0 }} className='pt-1' >
          <Typography component='div' fontWeight={300} className="pl-3 md:pl-[7px] md:pr-[0px] lg:pr-0 lg:pl-[0px] pt-9">
            麻しん(はしか)<br />風しん
          </Typography>
          <Grid item xs={9} sm={5.8} md={2.5} lg={2.7} sx={{ marginLeft: { xs: -4.5, sm: -4.7, md: 0, lg: -1 } }} className='scale-75' >
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['DatePicker']}>
                <DatePicker label="Start date" sx={{ backgroundColor: "white" }} />
              </DemoContainer>
            </LocalizationProvider>
          </Grid>
          <Grid item xs={9} sm={5.8} md={2.5} lg={2.7} sx={{ marginLeft: { xs: 10.5, sm: -7.8, md: 0, lg: -6 }, marginTop: { xs: -4, sm: 0, md: 0 } }} className='scale-75' >
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['DatePicker']}>
                <DatePicker label="End date" sx={{ backgroundColor: "white" }} />
              </DemoContainer>
            </LocalizationProvider>
          </Grid>

          <Typography component='div' fontWeight={500} className="pl-3 md:pl-9 md:pr-[0px] lg:pr-0 lg:pl-[25px] pt-9">
            日本脳炎
          </Typography>
          <Grid item xs={9} sm={5.8} md={2.7} lg={2.7} sx={{ marginLeft: { xs: 1, sm: -3, md: 0, lg: -0.5 }, marginTop: { xs: -1.5, sm: 0, md: 0 } }} className='scale-75' >
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['DatePicker']}>
                <DatePicker label="Start date" sx={{ backgroundColor: "white" }} />
              </DemoContainer>
            </LocalizationProvider>
          </Grid>
          <Grid item xs={9} sm={5.8} md={2.7} lg={2.7} sx={{ marginLeft: { xs: 10.5, sm: -7.8, md: 0, lg: -6 }, marginTop: { xs: -4, sm: 0, md: 0 } }} className='scale-75' >
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['DatePicker']}>
                <DatePicker label="End date" sx={{ backgroundColor: "white" }} />
              </DemoContainer>
            </LocalizationProvider>
          </Grid>
        </Grid>
        {/* End Grid */}

        {/* Start Grid */}
        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 0 }} className='pt-1' >
          <Typography component='div' fontWeight={300} sx={{ marginLeft: { xs: 0, sm: 0, md: 0, lg: -1 } }} className="pl-1 md:pl-[10px] md:pr-[0px] lg:pr-0 lg:pl-[0px] pt-9">
            水痘(水ぼうそう)
          </Typography>
          <Grid item xs={9} sm={5.5} md={2.5} lg={2.7} sx={{ marginLeft: { xs: -5.5, sm: -4, md: 0, lg: -2 } }} className='scale-75' >
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['DatePicker']}>
                <DatePicker label="Start date" sx={{ backgroundColor: "white" }} />
              </DemoContainer>
            </LocalizationProvider>
          </Grid>
          <Grid item xs={9} sm={5.6} md={2.5} lg={2.7} sx={{ marginLeft: { xs: 10.5, sm: -9.1, md: 0, lg: -6 }, marginTop: { xs: -4, sm: 0, md: 0 } }} className='scale-75' >
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['DatePicker']}>
                <DatePicker label="End date" sx={{ backgroundColor: "white" }} />
              </DemoContainer>
            </LocalizationProvider>
          </Grid>
        </Grid>
        {/* End Grid */}

        {/* Start Card */}
        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-7 pl-20' >
          <Card sx={{ bgcolor: "pink", width: 120, height: 40 }}>
            <Typography component='div' className="pt-2">
              乳,幼児健診
            </Typography>
          </Card>
        </Grid>
        {/* End Card */}

        {/* Start Grid */}
        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-4 pl-3' >
          <Typography component='div' className="pl-[45px] md:pl-[60px] lg:pl-28 pt-6">
            4か月
          </Typography>
          <Grid item xs={3.5} sm={3} md={1.5}>
            <FormControl size="small" fullWidth>
              <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Typography component='div' className="pl-5 pt-6 md:pl-7 md:pr-0 lg:pl-0"></Typography>
          <Grid item xs={3.3} sm={4} md={1.2}>
            <TextField
              className='w-full'
              id="-input"
              label=""
              type="text"
              size='small'
              sx={{
                backgroundColor: "white",
              }}
            />
          </Grid>

          <Typography component='div' className="pl-2 pt-6 lg:pl-1 lg:pr-4 ">
            年
          </Typography>
          <Typography component='div' className="pl-[85px] pt-6 md:pl-[100px] lg:pl-0 "></Typography>

          <Grid item xs={3.5} sm={3} md={1.1}>
            <FormControl size="small" fullWidth>
              <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Typography component='div' className="pl-1 md:pl-1 md:pr-2 pt-6">
            月
          </Typography>

          <Grid item xs={3.3} sm={4} md={1.1}>
            <FormControl size="small" fullWidth>
              <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Typography component='div' className="pl-2 md:pl-1 pt-6">
            日
          </Typography>

        </Grid>
        {/* End Grid */}

        {/* Start Grid */}
        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-4 pl-3' >
          <Typography component='div' className="pl-[35px] md:pl-[50px] lg:pl-[105px] pt-6">
            10か月
          </Typography>
          <Grid item xs={3.5} sm={3} md={1.5}>
            <FormControl size="small" fullWidth>
              <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Typography component='div' className="pl-5 pt-6 md:pl-7 md:pr-0 lg:pl-0"></Typography>
          <Grid item xs={3.3} sm={4} md={1.2}>
            <TextField
              className='w-full'
              id="-input"
              label=""
              type="text"
              size='small'
              sx={{
                backgroundColor: "white",
              }}
            />
          </Grid>

          <Typography component='div' className="pl-2 pt-6 lg:pl-1 lg:pr-4 ">
            年
          </Typography>
          <Typography component='div' className="pl-[85px] pt-6 md:pl-[100px] lg:pl-0 "></Typography>

          <Grid item xs={3.5} sm={3} md={1.1}>
            <FormControl size="small" fullWidth>
              <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Typography component='div' className="pl-1 md:pl-1 md:pr-2 pt-6">
            月
          </Typography>

          <Grid item xs={3.3} sm={4} md={1.1}>
            <FormControl size="small" fullWidth>
              <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Typography component='div' className="pl-2 md:pl-1 pt-6">
            日
          </Typography>

        </Grid>
        {/* End Grid */}

        {/* Start Grid */}
        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-4 pl-3' >
          <Typography component='div' className="md:pl-0 lg:pl-[50px] pt-6">
            1歳6か月 平成
          </Typography>
          <Grid item xs={3} sm={3} md={1.5}>
            <FormControl size="small" fullWidth>
              <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Typography component='div' className="pl-4 pt-6 md:pl-7 md:pr-0 lg:pl-0"></Typography>
          <Grid item xs={3.3} sm={4} md={1.2}>
            <TextField
              className='w-full'
              id="-input"
              label=""
              type="text"
              size='small'
              sx={{
                backgroundColor: "white",
              }}
            />
          </Grid>

          <Typography component='div' className="pl-2 pt-6 lg:pl-1 lg:pr-4 ">
            年
          </Typography>
          <Typography component='div' className="pl-[85px] pt-6 md:pl-[100px] lg:pl-0 "></Typography>

          <Grid item xs={3.5} sm={3} md={1.1}>
            <FormControl size="small" fullWidth>
              <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Typography component='div' className="pl-1 md:pl-1 md:pr-2 pt-6">
            月
          </Typography>

          <Grid item xs={3.3} sm={4} md={1.1}>
            <FormControl size="small" fullWidth>
              <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Typography component='div' className="pl-2 md:pl-1 pt-6">
            日
          </Typography>

        </Grid>
        {/* End Grid */}

        {/* Start Grid */}
        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-3 pl-3' >
          <Typography component='div' className="pl-[60px] md:pl-[75px] lg:pl-[127px] pt-6">
            3歲
          </Typography>
          <Grid item xs={3.5} sm={3} md={1.5}>
            <FormControl size="small" fullWidth>
              <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Typography component='div' className="pl-5 pt-6 md:pl-7 md:pr-0 lg:pl-0"></Typography>
          <Grid item xs={3.3} sm={4} md={1.2}>
            <TextField
              className='w-full'
              id="-input"
              label=""
              type="text"
              size='small'
              sx={{
                backgroundColor: "white",
              }}
            />
          </Grid>

          <Typography component='div' className="pl-2 pt-6 lg:pl-1 lg:pr-4 ">
            年
          </Typography>
          <Typography component='div' className="pl-[85px] pt-6 md:pl-[100px] lg:pl-0 "></Typography>

          <Grid item xs={3.5} sm={3} md={1.1}>
            <FormControl size="small" fullWidth>
              <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Typography component='div' className="pl-1 md:pl-1 md:pr-2 pt-6">
            月
          </Typography>

          <Grid item xs={3.3} sm={4} md={1.1}>
            <FormControl size="small" fullWidth>
              <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Typography component='div' className="pl-2 md:pl-1 pt-6">
            日
          </Typography>

        </Grid>
        {/* End Grid */}

        {/* Start Grid */}
        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-4 pl-3' >
          <Typography component='div' fontWeight={500} className="pl-5 md:pr-3 lg:pr-0 lg:pl-[85px] pt-6">
            特記事項
          </Typography>
          <Grid item xs={6} sm={5} md={2}>
            <TextField
              className='w-full'
              id="Notices-input"
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

        {/* Start Card */}
        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-10 pl-20' >
          <Card sx={{ bgcolor: "pink", width: 120, height: 40 }}>
            <Typography component='div' className="pt-2">
              既往症
            </Typography>
          </Card>
        </Grid>
        {/* End Card */}

        {/* Start Grid */}
        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-4 pl-3' >
          <Typography component='div' fontWeight={500} className="pl-8 md:pr-3 md:pl-[52px] lg:pr-0 lg:pl-[100px] pt-6">
            川崎病
          </Typography>
          <Grid item xs={3.5} sm={3} md={1.1}>
            <FormControl size="small" fullWidth>
              <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Typography component='div' className="pl-1 md:pl-1 md:pr-2 pt-6">
            歲
          </Typography>

          <Grid item xs={3.5} sm={3} md={1.1}>
            <FormControl size="small" fullWidth>
              <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Typography component='div' className="pl-2 md:pl-1 pt-6">
            か月
          </Typography>

          <Typography component='div' fontWeight={500} sx={{ marginLeft: { xs: 0, sm: -1 }, fontSize: { xs: "13px", sm: "15px" } }} className="pl-0 md:pr-3 md:pl-[0px] lg:pr-0 lg:pl-[50px] pt-6">
            先天性股関節脱臼
          </Typography>
          <Grid item xs={3} sm={3} md={1.1} sx={{ marginLeft: { xs: -1, sm: -1.5, md: 0 } }}>
            <FormControl size="small" fullWidth>
              <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Typography component='div' className="pl-[2px] md:pl-1 md:pr-2 pt-6">
            歲
          </Typography>

          <Grid item xs={3.5} sm={3} md={1.1}>
            <FormControl size="small" fullWidth>
              <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Typography component='div' className="pl-2 md:pl-1 pt-6">
            か月
          </Typography>
        </Grid>
        {/* End Grid */}

        {/* Start Grid */}
        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-3 pl-3' >
          <Typography component='div' fontWeight={500} className="pl-8 md:pr-3 md:pl-[52px] lg:pr-0 lg:pl-[100px] pt-6">
            心臓病
          </Typography>
          <Grid item xs={3.5} sm={3} md={1.1}>
            <FormControl size="small" fullWidth>
              <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Typography component='div' className="pl-1 md:pl-1 md:pr-2 pt-6">
            歲
          </Typography>

          <Grid item xs={3.5} sm={3} md={1.1}>
            <FormControl size="small" fullWidth>
              <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Typography component='div' className="pl-2 md:pl-1 pt-6">
            か月
          </Typography>

          <Typography component='div' fontWeight={500} sx={{ marginLeft: { xs: 0, sm: -1 }, fontSize: { xs: "13px", sm: "15px" } }} className="pl-[36px] md:pr-3 md:pl-[60px] lg:pr-0 lg:pl-[110px] pt-6">
            ヘルニア
          </Typography>
          <Grid item xs={3.5} sm={3} md={1.1} sx={{ marginLeft: { xs: -1, sm: -1.5, md: 0 } }}>
            <FormControl size="small" fullWidth>
              <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Typography component='div' className="pl-[2px] md:pl-1 md:pr-2 pt-6">
            歲
          </Typography>

          <Grid item xs={3.5} sm={3} md={1.1}>
            <FormControl size="small" fullWidth>
              <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Typography component='div' className="pl-2 md:pl-1 pt-6">
            か月
          </Typography>
        </Grid>
        {/* End Grid */}

        {/* Start Grid */}
        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-3 pl-3' >
          <Typography component='div' fontWeight={500} className="pl-8 md:pr-3 md:pl-[52px] lg:pr-0 lg:pl-[100px] pt-6">
            腎藏病
          </Typography>
          <Grid item xs={3.5} sm={3} md={1.1}>
            <FormControl size="small" fullWidth>
              <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Typography component='div' className="pl-1 md:pl-1 md:pr-2 pt-6">
            歲
          </Typography>

          <Grid item xs={3.5} sm={3} md={1.1}>
            <FormControl size="small" fullWidth>
              <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Typography component='div' className="pl-2 md:pl-1 pt-6">
            か月
          </Typography>

          <Typography component='div' fontWeight={500} sx={{ marginLeft: { xs: 0, sm: -1 }, fontSize: { xs: "13px", sm: "15px" } }} className="pl-[62px] md:pr-3 md:pl-[90px] lg:pr-0 lg:pl-[140px] pt-6">
            肺炎
          </Typography>
          <Grid item xs={3.5} sm={3} md={1.1} sx={{ marginLeft: { xs: -1, sm: -1.5, md: 0 } }}>
            <FormControl size="small" fullWidth>
              <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Typography component='div' className="pl-[2px] md:pl-1 md:pr-2 pt-6">
            歲
          </Typography>

          <Grid item xs={3.5} sm={3} md={1.1}>
            <FormControl size="small" fullWidth>
              <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Typography component='div' className="pl-2 md:pl-1 pt-6">
            か月
          </Typography>
        </Grid>
        {/* End Grid */}

        {/* Start Grid */}
        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-3 pl-3' >
          <Typography component='div' fontWeight={500} className="pl-8 md:pr-3 md:pl-[52px] lg:pr-0 lg:pl-[100px] pt-6">
            肝臓病
          </Typography>
          <Grid item xs={3.5} sm={3} md={1.1}>
            <FormControl size="small" fullWidth>
              <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Typography component='div' className="pl-1 md:pl-1 md:pr-2 pt-6">
            歲
          </Typography>

          <Grid item xs={3.5} sm={3} md={1.1}>
            <FormControl size="small" fullWidth>
              <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Typography component='div' className="pl-2 md:pl-1 pt-6">
            か月
          </Typography>

          <Typography component='div' fontWeight={500} sx={{ marginLeft: { xs: 0, sm: -1 }, fontSize: { xs: "13px", sm: "15px" } }} className="pl-[36px] md:pr-3 md:pl-[60px] lg:pr-0 lg:pl-[110px] pt-6">
            自家中毒
          </Typography>
          <Grid item xs={3.5} sm={3} md={1.1} sx={{ marginLeft: { xs: -1, sm: -1.5, md: 0 } }}>
            <FormControl size="small" fullWidth>
              <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Typography component='div' className="pl-[2px] md:pl-1 md:pr-2 pt-6">
            歲
          </Typography>

          <Grid item xs={3.5} sm={3} md={1.1}>
            <FormControl size="small" fullWidth>
              <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Typography component='div' className="pl-2 md:pl-1 pt-6">
            か月
          </Typography>
        </Grid>
        {/* End Grid */}

        {/* Start Grid */}
        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-3 pl-3' >
          <Typography component='div' fontWeight={500} className="pl-5 md:pl-0 md:pr-0 lg:pr-0 lg:pl-[20px] pt-6">
            大きな外傷や手術
          </Typography>
          <Grid item xs={5.4} sm={6.3} md={2}>
            <TextField
              className='w-full'
              id="Notices-input"
              label=""
              type="text"
              size='small'
              sx={{
                backgroundColor: "white",
              }}
            />
          </Grid>
          <Grid item xs={3.5} sm={2.7} md={1.1} sx={{ marginLeft: { xs: 10, sm: 16, md: 0 } }}>
            <FormControl size="small" fullWidth>
              <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Typography component='div' className="pl-[2px] md:pl-1 md:pr-2 pt-6">
            歲
          </Typography>

          <Grid item xs={3.5} sm={2.8} md={1.1}>
            <FormControl size="small" fullWidth>
              <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Typography component='div' className="pl-2 md:pl-1 pt-6">
            か月
          </Typography>

        </Grid>
        {/* End Grid */}

        {/* Start Grid */}
        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-3 pl-3' >
          <Typography component='div' fontWeight={500} className="pl-5 md:pl-0 md:pr-0 lg:pr-0 lg:pl-[20px] pt-6">
            その他の重い病気
          </Typography>
          <Grid item xs={5.4} sm={6.3} md={2}>
            <TextField
              className='w-full'
              id="Notices-input"
              label=""
              type="text"
              size='small'
              sx={{
                backgroundColor: "white",
              }}
            />
          </Grid>
          <Grid item xs={3.5} sm={2.7} md={1.1} sx={{ marginLeft: { xs: 10, sm: 16, md: 0 } }}>
            <FormControl size="small" fullWidth>
              <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Typography component='div' className="pl-[2px] md:pl-1 md:pr-2 pt-6">
            歲
          </Typography>

          <Grid item xs={3.5} sm={2.8} md={1.1}>
            <FormControl size="small" fullWidth>
              <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Typography component='div' className="pl-2 md:pl-1 pt-6">
            か月
          </Typography>

        </Grid>
        {/* End Grid */}

        {/* Start Grid */}
        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-3 pl-3' >
          <Typography component='div' fontWeight={500} className="pl-8 md:pr-0 md:pl-[52px] lg:pr-0 lg:pl-[100px] pt-6">
            麻しん
          </Typography>
          <Grid item xs={3.5} sm={3} md={1.1}>
            <FormControl size="small" fullWidth>
              <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Typography component='div' className="pl-1 md:pl-1 md:pr-2 pt-6">
            歲
          </Typography>

          <Grid item xs={3.5} sm={3} md={1.1}>
            <FormControl size="small" fullWidth>
              <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Typography component='div' className="pl-2 md:pl-1 pt-6">
            か月
          </Typography>

          <Typography component='div' fontWeight={500} sx={{ marginLeft: { xs: 0, sm: -1 } }} className="pl-[40px] md:pr-3 md:pl-[60px] lg:pr-0 lg:pl-[105px] pt-6">
            麻しん
          </Typography>
          <Grid item xs={3.5} sm={3} md={1.1} sx={{ marginLeft: { xs: -1, sm: -1.5, md: 0 } }}>
            <FormControl size="small" fullWidth>
              <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Typography component='div' className="pl-[2px] md:pl-1 md:pr-2 pt-6">
            歲
          </Typography>

          <Grid item xs={3.5} sm={3} md={1.1}>
            <FormControl size="small" fullWidth>
              <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Typography component='div' className="pl-2 md:pl-1 pt-6">
            か月
          </Typography>
        </Grid>
        {/* End Grid */}

        {/* Start Grid */}
        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-3 pl-3' >
          <Typography component='div' fontWeight={500} className="pl-[47px] md:pr-3 md:pl-[55px] lg:pr-0 lg:pl-[115px] pt-6">
            水痘
          </Typography>
          <Grid item xs={3.5} sm={3} md={1.1}>
            <FormControl size="small" fullWidth>
              <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Typography component='div' className="pl-1 md:pl-1 md:pr-2 pt-6">
            歲
          </Typography>

          <Grid item xs={3.5} sm={3} md={1.1}>
            <FormControl size="small" fullWidth>
              <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Typography component='div' className="pl-2 md:pl-1 pt-6">
            か月
          </Typography>

          <Typography component='div' fontWeight={500} sx={{ marginLeft: { xs: 0, sm: -1 } }} className="pl-[38px] md:pr-3 md:pl-[60px] lg:pr-0 lg:pl-[105px] pt-6">
            百日咳
          </Typography>
          <Grid item xs={3.5} sm={3} md={1.1} sx={{ marginLeft: { xs: -1, sm: -1.5, md: 0 } }}>
            <FormControl size="small" fullWidth>
              <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Typography component='div' className="pl-[2px] md:pl-1 md:pr-2 pt-6">
            歲
          </Typography>

          <Grid item xs={3.5} sm={3} md={1.1}>
            <FormControl size="small" fullWidth>
              <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Typography component='div' className="pl-2 md:pl-1 pt-6">
            か月
          </Typography>
        </Grid>
        {/* End Grid */}

        {/* Start Grid */}
        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-3 pl-3' >
          <Typography component='div' sx={{ fontSize: { xs: "13px", sm: "15px", }, marginLeft: { xs: "-50px", sm: "-5px", md: 0 } }} fontWeight={500} className="pl-[47px] md:pr-0 md:pl-[0px] lg:pr-0 lg:pl-[40px] pt-6">
            流行性耳下腺炎
          </Typography>
          <Grid item xs={3.5} sm={3} md={1.1} sx={{ marginLeft: { xs: "-11px", sm: "0" } }}>
            <FormControl size="small" fullWidth>
              <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Typography component='div' className="pl-1 md:pl-1 md:pr-2 pt-6">
            歲
          </Typography>

          <Grid item xs={3.5} sm={3} md={1.1}>
            <FormControl size="small" fullWidth>
              <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Typography component='div' className="pl-2 md:pl-1 pt-6">
            か月
          </Typography>

        </Grid>
        {/* End Grid */}

        {/* Start 出生時の状況 Grid */}
        <RadioGroup
          defaultValue=""
          aria-labelledby="demo-customized-radios"
          name="customized-radios"
        >
          <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-4 pl-3' >
            <Typography component='div' fontWeight={500} className="pl-5 lg:pl-20 pt-6">
              脱臼の経験
            </Typography>
            <Grid item xs={4.5} sm={6} md={1} sx={{ marginLeft: { xs: 5, sm: 1.5, md: 0 } }}>
              <FormControlLabel value="有" control={<Radio />} label="有" />
            </Grid>
            <Grid item xs={3.5} sm={1} md={1} sx={{ marginLeft: { xs: -4, sm: -5, md: 0 } }}>
              <FormControlLabel value="無" control={<Radio />} label="無" />
            </Grid>
            <Typography component='div' fontWeight={500} sx={{ marginLeft: { xs: 0, sm: 0, md: 5 } }} className="pl-5 pt-6">
              けいれん(ひきつけ)
            </Typography>
            <Grid item xs={4.5} sm={3.5} md={1} sx={{ marginLeft: { xs: -2.2, sm: 0, md: 0 } }}>
              <FormControlLabel value="有" control={<Radio />} label="有" />
            </Grid>
            <Grid item xs={3.5} sm={3.5} md={1} sx={{ marginLeft: { xs: -4, sm: -2.5, md: 0 } }}>
              <FormControlLabel value="無" control={<Radio />} label="無" />
            </Grid>
          </Grid>
        </RadioGroup>
        {/* End Grid */}

        {/* Start Grid */}
        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-3 pl-3' >
          <Typography component='div' className="pl-[30px] md:pl-[60px] lg:pl-[103px] pt-6">
            有熱
          </Typography>
          <Grid item xs={8} sm={6} md={2}>
            <TextField
              className='w-full'
              id="-input"
              label=""
              type="text"
              size='small'
              sx={{
                backgroundColor: "white",
              }}
              InputProps={{
                endAdornment: <InputAdornment position="end">回</InputAdornment>,
              }}
            />
          </Grid>

          <Typography component='div' className="pl-[30px] md:pl-[60px] lg:pl-20 pt-6">
            無熱
          </Typography>
          <Grid item xs={8} sm={6} md={2}>
            <TextField
              className='w-full'
              id="-input"
              label=""
              type="text"
              size='small'
              sx={{
                backgroundColor: "white",
              }}
              InputProps={{
                endAdornment: <InputAdornment position="end">回</InputAdornment>,
              }}
            />
          </Grid>
          <Typography component='div' className="pl-[85px] pt-6 md:pl-[100px] lg:pl-0 "></Typography>

        </Grid>
        {/* End Grid */}

        {/* Start Grid */}
        <RadioGroup
          defaultValue=""
          aria-labelledby="demo-customized-radios"
          name="customized-radios"
        >
          <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-4 pl-3' >
            <Typography component='div' sx={{ fontSize: { xs: "13px", sm: "15px", }, marginLeft: { xs: "-50px", sm: "50px", md: "-30px" } }} fontWeight={500} className="pl-[100px] pr-10 md:pr-[100px] md:pl-[0px] lg:pr-0 lg:pl-[40px] pt-6">
              初めてけいれんを起こした月齢
            </Typography>
            <Grid item xs={3.5} sm={3} md={1.1} sx={{ marginLeft: { xs: "30px", sm: "40px", md: 0 } }}>
              <FormControl size="small" fullWidth>
                <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Typography component='div' className="pl-1 md:pl-1 md:pr-2 pt-6">
              歲
            </Typography>

            <Grid item xs={3.5} sm={3} md={1.1}>
              <FormControl size="small" fullWidth>
                <Select defaultValue="" id="grouped-select" sx={{ backgroundColor: "white" }}>
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Typography component='div' className="pl-2 md:pl-1 pt-6">
              か月
            </Typography>

            <Typography component='div' fontWeight={500} className="pl-10 md:pl-12 lg:pl-20 pt-6">
              喘息の診断
            </Typography>

            <Grid item xs={4.5} sm={3} md={1} sx={{ marginLeft: { xs: 0, sm: 0, md: 0 } }}>
              <FormControlLabel value="有" control={<Radio />} label="有" />
            </Grid>
            <Grid item xs={3.5} sm={1} md={1} sx={{ marginLeft: { xs: -4, sm: 0, md: 0 } }}>
              <FormControlLabel value="無" control={<Radio />} label="無" />
            </Grid>
          </Grid>
        </RadioGroup>
        {/* End Grid */}

        {/* Start Grid */}
        <RadioGroup
          defaultValue=""
          aria-labelledby="demo-customized-radios"
          name="customized-radios"
        >
          <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-4 pl-3' >
            <Typography component='div' fontWeight={500} className="pl-0 md:pl-0 lg:pl-20 pt-6">
              アレルギーの診断
            </Typography>
            <Grid item xs={4.5} sm={3} md={1} sx={{ marginLeft: { xs: -1, sm: 0, md: 0 } }}>
              <FormControlLabel value="有" control={<Radio />} label="有" />
            </Grid>
            <Grid item xs={4.5} sm={1} md={1} sx={{ marginLeft: { xs: -5.8, sm: 0, md: 0 }, paddingRight: { xs: 0, sm: 20, md: 0 } }}>
              <FormControlLabel value="無" control={<Radio />} label="無" />
            </Grid>

            <Typography component='div' className="pl-[35px] md:pl-[50px] lg:pl-[20px] pt-6">
              有の場合
            </Typography>

            <Grid item xs={7} sm={5} md={2}>
              <TextField
                className='w-full'
                id="input"
                label=""
                type="text"
                size='small'
                sx={{
                  backgroundColor: "white",
                }}
              />
            </Grid>
          </Grid>
        </RadioGroup>
        {/* End Grid */}

        {/* Start Card */}
        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-10 pl-20 pb-5' >
          <Card sx={{ bgcolor: "pink", width: 120, height: 40 }}>
            <Typography component='div' className="pt-2">
              現在の体質
            </Typography>
          </Card>
        </Grid>
        {/* End Card */}

        {/* Start Box */}
        <Box sx={{  width: { xs: 800, sm: 800, md: 1111 } }}>

          {/* Start Grid */}
          <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 8 }} className='pt-3 pl-3' >
            <Grid item xs={2.3} sm={2.5} md={2.1}>
              <Typography component='div'>
                かぜをひきやすい
              </Typography>
            </Grid>
            <Grid item xs={1.3} sm={1.3} md={1.3} sx={{ marginLeft: { xs: 1, sm: 0, md: 0 } }}>
              <Typography component='div'>
                入所時
              </Typography>
            </Grid>
            <Grid item xs={1.3} sm={1.3} md={1.3}>
              <Typography component='div'>
                2025年
              </Typography>
            </Grid>
            <Grid item xs={1.3} sm={1.3} md={1.3}>
              <Typography component='div'>
                2026年
              </Typography>
            </Grid>
            <Grid item xs={1.3} sm={1.3} md={1.3}>
              <Typography component='div'>
                2027年
              </Typography>
            </Grid>
            <Grid item xs={1.3} sm={1.3} md={1.3}>
              <Typography component='div'>
                2028年
              </Typography>
            </Grid>
            <Grid item xs={1.3} sm={1.3} md={1.3}>
              <Typography component='div'>
                2029年
              </Typography>
            </Grid>
            <Grid item xs={1.3} sm={1.3} md={1.3}>
              <Typography component='div'>
                2030年
              </Typography>
            </Grid>
          </Grid>
          {/* End Grid */}

          {/* Start Grid */}
          <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 8 }} className='pt-1 pl-3' >
            <Grid item xs={2} sm={2.8} md={2.1}>
              <Typography component='div' className="pt-2">
                発熱しやすい
              </Typography>
            </Grid>
            <Grid item xs={1.3} sm={1.3} md={1.4} sx={{ marginLeft: { xs: 5, sm: 0, md: 0 } }}>
              <FormControlLabel control={<Checkbox />} label="" />
            </Grid>
            <Grid item xs={1.3} sm={1.3} md={1.3}>
              <FormControlLabel control={<Checkbox />} label="" />
            </Grid>
            <Grid item xs={1.3} sm={1.3} md={1.3}>
              <FormControlLabel control={<Checkbox />} label="" />
            </Grid>
            <Grid item xs={1.3} sm={1.3} md={1.3}>
              <FormControlLabel control={<Checkbox />} label="" />
            </Grid>
            <Grid item xs={1.3} sm={1.3} md={1.3}>
              <FormControlLabel control={<Checkbox />} label="" />
            </Grid>
            <Grid item xs={1.3} sm={1.3} md={1.3}>
              <FormControlLabel control={<Checkbox />} label="" />
            </Grid>
            <Grid item xs={1.3} sm={1.3} md={1.3}>
              <FormControlLabel control={<Checkbox />} label="" />
            </Grid>
          </Grid>
          {/* End Grid */}

          {/* Start Grid */}
          <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 8 }} className='pt-1 pl-3' >
            <Grid item xs={2.2} sm={2.8} md={2.1}>
              <Typography component='div' className="pt-2">
                時々腹痛を訴える
              </Typography>
            </Grid>
            <Grid item xs={1.3} sm={1.3} md={1.4} sx={{ marginLeft: { xs: 3.5, sm: 0, md: 0 } }}>
              <FormControlLabel control={<Checkbox />} label="" />
            </Grid>
            <Grid item xs={1.3} sm={1.3} md={1.3}>
              <FormControlLabel control={<Checkbox />} label="" />
            </Grid>
            <Grid item xs={1.3} sm={1.3} md={1.3}>
              <FormControlLabel control={<Checkbox />} label="" />
            </Grid>
            <Grid item xs={1.3} sm={1.3} md={1.3}>
              <FormControlLabel control={<Checkbox />} label="" />
            </Grid>
            <Grid item xs={1.3} sm={1.3} md={1.3}>
              <FormControlLabel control={<Checkbox />} label="" />
            </Grid>
            <Grid item xs={1.3} sm={1.3} md={1.3}>
              <FormControlLabel control={<Checkbox />} label="" />
            </Grid>
            <Grid item xs={1.3} sm={1.3} md={1.3}>
              <FormControlLabel control={<Checkbox />} label="" />
            </Grid>
          </Grid>
          {/* End Grid */}

          {/* Start Grid */}
          <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 8 }} className='pt-1 pl-3' >
            <Grid item xs={2.2} sm={2.8} md={2.1}>
              <Typography component='div' className="pt-2">
                ゼイゼイがある
              </Typography>
            </Grid>
            <Grid item xs={1.3} sm={1.3} md={1.4} sx={{ marginLeft: { xs: 3.5, sm: 0, md: 0 } }}>
              <FormControlLabel control={<Checkbox />} label="" />
            </Grid>
            <Grid item xs={1.3} sm={1.3} md={1.3}>
              <FormControlLabel control={<Checkbox />} label="" />
            </Grid>
            <Grid item xs={1.3} sm={1.3} md={1.3}>
              <FormControlLabel control={<Checkbox />} label="" />
            </Grid>
            <Grid item xs={1.3} sm={1.3} md={1.3}>
              <FormControlLabel control={<Checkbox />} label="" />
            </Grid>
            <Grid item xs={1.3} sm={1.3} md={1.3}>
              <FormControlLabel control={<Checkbox />} label="" />
            </Grid>
            <Grid item xs={1.3} sm={1.3} md={1.3}>
              <FormControlLabel control={<Checkbox />} label="" />
            </Grid>
            <Grid item xs={1.3} sm={1.3} md={1.3}>
              <FormControlLabel control={<Checkbox />} label="" />
            </Grid>
          </Grid>
          {/* End Grid */}

          {/* Start Grid */}
          <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 8 }} className='pt-1 pl-3' >
            <Grid item xs={2.2} sm={2.8} md={2.1}>
              <Typography component='div' className="pt-2">
                湿疹がでやすい
              </Typography>
            </Grid>
            <Grid item xs={1.3} sm={1.3} md={1.4} sx={{ marginLeft: { xs: 3.5, sm: 0, md: 0 } }}>
              <FormControlLabel control={<Checkbox />} label="" />
            </Grid>
            <Grid item xs={1.3} sm={1.3} md={1.3}>
              <FormControlLabel control={<Checkbox />} label="" />
            </Grid>
            <Grid item xs={1.3} sm={1.3} md={1.3}>
              <FormControlLabel control={<Checkbox />} label="" />
            </Grid>
            <Grid item xs={1.3} sm={1.3} md={1.3}>
              <FormControlLabel control={<Checkbox />} label="" />
            </Grid>
            <Grid item xs={1.3} sm={1.3} md={1.3}>
              <FormControlLabel control={<Checkbox />} label="" />
            </Grid>
            <Grid item xs={1.3} sm={1.3} md={1.3}>
              <FormControlLabel control={<Checkbox />} label="" />
            </Grid>
            <Grid item xs={1.3} sm={1.3} md={1.3}>
              <FormControlLabel control={<Checkbox />} label="" />
            </Grid>
          </Grid>
          {/* End Grid */}

          {/* Start Grid */}
          <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 8 }} className='pt-1 pl-3' >
            <Grid item xs={2.2} sm={2.8} md={2.1}>
              <Typography component='div' className="pt-2">
                鼻血がでやすい
              </Typography>
            </Grid>
            <Grid item xs={1.3} sm={1.3} md={1.4} sx={{ marginLeft: { xs: 3.5, sm: 0, md: 0 } }}>
              <FormControlLabel control={<Checkbox />} label="" />
            </Grid>
            <Grid item xs={1.3} sm={1.3} md={1.3}>
              <FormControlLabel control={<Checkbox />} label="" />
            </Grid>
            <Grid item xs={1.3} sm={1.3} md={1.3}>
              <FormControlLabel control={<Checkbox />} label="" />
            </Grid>
            <Grid item xs={1.3} sm={1.3} md={1.3}>
              <FormControlLabel control={<Checkbox />} label="" />
            </Grid>
            <Grid item xs={1.3} sm={1.3} md={1.3}>
              <FormControlLabel control={<Checkbox />} label="" />
            </Grid>
            <Grid item xs={1.3} sm={1.3} md={1.3}>
              <FormControlLabel control={<Checkbox />} label="" />
            </Grid>
            <Grid item xs={1.3} sm={1.3} md={1.3}>
              <FormControlLabel control={<Checkbox />} label="" />
            </Grid>
          </Grid>
          {/* End Grid */}

          {/* Start Grid */}
          <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 8 }} className='pt-1 pl-3' >
            <Grid item xs={2.5} sm={2.8} md={2.3}>
              <Typography component='div' className="pt-2">
                中耳炎になりやすい
              </Typography>
            </Grid>
            <Grid item xs={1.3} sm={1.3} md={1.4} sx={{ marginLeft: { xs: 1.1, sm: 0, md: -2.5 } }}>
              <FormControlLabel control={<Checkbox />} label="" />
            </Grid>
            <Grid item xs={1.3} sm={1.3} md={1.3}>
              <FormControlLabel control={<Checkbox />} label="" />
            </Grid>
            <Grid item xs={1.3} sm={1.3} md={1.3}>
              <FormControlLabel control={<Checkbox />} label="" />
            </Grid>
            <Grid item xs={1.3} sm={1.3} md={1.3}>
              <FormControlLabel control={<Checkbox />} label="" />
            </Grid>
            <Grid item xs={1.3} sm={1.3} md={1.3}>
              <FormControlLabel control={<Checkbox />} label="" />
            </Grid>
            <Grid item xs={1.3} sm={1.3} md={1.3}>
              <FormControlLabel control={<Checkbox />} label="" />
            </Grid>
            <Grid item xs={1.3} sm={1.3} md={1.3}>
              <FormControlLabel control={<Checkbox />} label="" />
            </Grid>
          </Grid>
          {/* End Grid */}

          {/* Start Grid */}
          <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 8 }} className='pt-1 pl-3' >
            <Grid item xs={2} sm={2.8} md={2.3}>
              <Typography component='div' className="pt-2">
                平熱
              </Typography>
            </Grid>
            <Grid item xs={1.3} sm={1.5} md={1.5} sx={{ marginLeft: { xs: 3, sm: -2, md: -5 } }}>
              <TextField
                className='w-full'
                id="input"
                type="text"
                size='small'
                sx={{
                  backgroundColor: "white",
                }}
                InputProps={{
                  endAdornment: <InputAdornment position="end">°c</InputAdornment>,
                }}
              />
            </Grid>
            <Grid item xs={1.3} sm={1.5} md={1.5} sx={{ marginLeft: { xs: 0, sm: -2, md: -2 } }}>
              <TextField
                className='w-full'
                id="input"
                type="text"
                size='small'
                sx={{
                  backgroundColor: "white",
                }}
                InputProps={{
                  endAdornment: <InputAdornment position="end">°c</InputAdornment>,
                }}
              />
            </Grid>
            <Grid item xs={1.3} sm={1.5} md={1.5} sx={{ marginLeft: { xs: 0, sm: -2, md: -2 } }}>
              <TextField
                className='w-full'
                id="input"
                type="text"
                size='small'
                sx={{
                  backgroundColor: "white",
                }}
                InputProps={{
                  endAdornment: <InputAdornment position="end">°c</InputAdornment>,
                }}
              />
            </Grid>
            <Grid item xs={1.3} sm={1.5} md={1.5} sx={{ marginLeft: { xs: 0, sm: -2, md: -2 } }}>
              <TextField
                className='w-full'
                id="input"
                type="text"
                size='small'
                sx={{
                  backgroundColor: "white",
                }}
                InputProps={{
                  endAdornment: <InputAdornment position="end">°c</InputAdornment>,
                }}
              />
            </Grid>
            <Grid item xs={1.3} sm={1.5} md={1.5} sx={{ marginLeft: { xs: 0, sm: -2, md: -2 } }}>
              <TextField
                className='w-full'
                id="input"
                type="text"
                size='small'
                sx={{
                  backgroundColor: "white",
                }}
                InputProps={{
                  endAdornment: <InputAdornment position="end">°c</InputAdornment>,
                }}
              />
            </Grid>
            <Grid item xs={1.3} sm={1.5} md={1.5} sx={{ marginLeft: { xs: 0, sm: -2, md: -2 } }}>
              <TextField
                className='w-full'
                id="input"
                type="text"
                size='small'
                sx={{
                  backgroundColor: "white",
                }}
                InputProps={{
                  endAdornment: <InputAdornment position="end">°c</InputAdornment>,
                }}
              />
            </Grid>
            <Grid item xs={1.3} sm={1.5} md={1.5} sx={{ marginLeft: { xs: 0, sm: -2, md: -2 } }} className="pb-5">
              <TextField
                className='w-full'
                id="input"
                type="text"
                size='small'
                sx={{
                  backgroundColor: "white",
                }}
                InputProps={{
                  endAdornment: <InputAdornment position="end">°c</InputAdornment>,
                }}
              />
            </Grid>
          </Grid>
          {/* End Grid */}

          {/* Start Grid */}
          <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 8 }} className='pl-3' >
            <Grid item xs={2} sm={2.8} md={2.3}>
              <Typography component='div' sx={{ fontSize: { xs: "12px", sm: "13px", md: "14px" } }} className="pt-2">
                保育園で気をつけてほしいことその他特記事項
              </Typography>
            </Grid>
            <Grid item xs={1.3} sm={1.5} md={1.5} sx={{ marginLeft: { xs: 3, sm: -2, md: -5 } }}>
              <TextField
                className='w-full'
                id="input"
                type="text"
                size='small'
                sx={{
                  backgroundColor: "white",
                }}
              />
            </Grid>
            <Grid item xs={1.3} sm={1.5} md={1.5} sx={{ marginLeft: { xs: 0, sm: -2, md: -2 } }}>
              <TextField
                className='w-full'
                id="input"
                type="text"
                size='small'
                sx={{
                  backgroundColor: "white",
                }}
              />
            </Grid>
            <Grid item xs={1.3} sm={1.5} md={1.5} sx={{ marginLeft: { xs: 0, sm: -2, md: -2 } }}>
              <TextField
                className='w-full'
                id="input"
                type="text"
                size='small'
                sx={{
                  backgroundColor: "white",
                }}
              />
            </Grid>
            <Grid item xs={1.3} sm={1.5} md={1.5} sx={{ marginLeft: { xs: 0, sm: -2, md: -2 } }}>
              <TextField
                className='w-full'
                id="input"
                type="text"
                size='small'
                sx={{
                  backgroundColor: "white",
                }}
              />
            </Grid>
            <Grid item xs={1.3} sm={1.5} md={1.5} sx={{ marginLeft: { xs: 0, sm: -2, md: -2 } }}>
              <TextField
                className='w-full'
                id="input"
                type="text"
                size='small'
                sx={{
                  backgroundColor: "white",
                }}
              />
            </Grid>
            <Grid item xs={1.3} sm={1.5} md={1.5} sx={{ marginLeft: { xs: 0, sm: -2, md: -2 } }}>
              <TextField
                className='w-full'
                id="input"
                type="text"
                size='small'
                sx={{
                  backgroundColor: "white",
                }}
              />
            </Grid>
            <Grid item xs={1.3} sm={1.5} md={1.5} sx={{ marginLeft: { xs: 0, sm: -2, md: -2 } }} className="pb-5">
              <TextField
                className='w-full'
                id="input"
                type="text"
                size='small'
                sx={{
                  backgroundColor: "white",
                }}
              />
            </Grid>
          </Grid>
          {/* End Grid */}

          {/* Start Grid */}
          <Grid container rowSpacing={2} columnSpacing={{ xs: 4, sm: 2, md: 8 }} className='pt-5 pl-3' >
            <Grid item xs={1.5} sm={1.5} md={1.3} sx={{ marginLeft: { xs: 5, sm: 7, md: 11 } }}>
              <Typography component='div'>
                (0歲児)
              </Typography>
            </Grid>
            <Grid item xs={1.5} sm={1.5} md={1.3} sx={{ marginLeft: { xs: 0.5, sm: 0, md: 2 } }}>
              <Typography component='div'>
                (0歲児)
              </Typography>
            </Grid>
            <Grid item xs={1.5} sm={1.5} md={1.3} sx={{ marginLeft: { xs: 0.5, sm: 0, md: 2 } }}>
              <Typography component='div'>
                (1歲児)
              </Typography>
            </Grid>
            <Grid item xs={1.5} sm={1.5} md={1.3} sx={{ marginLeft: { xs: 0.5, sm: 0, md: 2 } }}>
              <Typography component='div'>
                (2歲児)
              </Typography>
            </Grid>
            <Grid item xs={1.5} sm={1.5} md={1.3} sx={{ marginLeft: { xs: 0.5, sm: 0, md: 2 } }}>
              <Typography component='div'>
                (3歲児)
              </Typography>
            </Grid>
            <Grid item xs={1.5} sm={1.5} md={1.3} sx={{ marginLeft: { xs: 0.5, sm: 0, md: 2 } }}>
              <Typography component='div'>
                (4歲児)
              </Typography>
            </Grid>
            <Grid item xs={1.5} sm={1.5} md={1.3} sx={{ marginLeft: { xs: 0.5, sm: 0, md: 2 } }}>
              <Typography component='div'>
                (5歲児)
              </Typography>
            </Grid>
          </Grid>
          {/* End Grid */}

          {/* Start Grid */}
          <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 1, md: 1 }} className='pt-5 pl-3' >
            <Grid item xs={1.5} sm={1.5} md={1.5} sx={{ marginLeft: { xs: 5, sm: 5, md: 5 } }}>
              <TextField
                className='w-full'
                id="input"
                type="text"
                size='small'
                sx={{
                  backgroundColor: "white",
                }}
                InputProps={{
                  endAdornment: <InputAdornment position="end">年度</InputAdornment>,
                }}
              />
            </Grid>
            <Grid item xs={1.5} sm={1.5} md={1.5} sx={{ marginLeft: { xs: 1, sm: 0.5, md: 1 } }}>
              <TextField
                className='w-full'
                id="input"
                type="text"
                size='small'
                sx={{
                  backgroundColor: "white",
                }}
                InputProps={{
                  endAdornment: <InputAdornment position="end">年度</InputAdornment>,
                }}
              />
            </Grid>
            <Grid item xs={1.5} sm={1.5} md={1.5} sx={{ marginLeft: { xs: 1, sm: 0.5, md: 1 } }}>
              <TextField
                className='w-full'
                id="input"
                type="text"
                size='small'
                sx={{
                  backgroundColor: "white",
                }}
                InputProps={{
                  endAdornment: <InputAdornment position="end">年度</InputAdornment>,
                }}
              />
            </Grid>
            <Grid item xs={1.5} sm={1.5} md={1.5} sx={{ marginLeft: { xs: 1, sm: 0.5, md: 1 } }}>
              <TextField
                className='w-full'
                id="input"
                type="text"
                size='small'
                sx={{
                  backgroundColor: "white",
                }}
                InputProps={{
                  endAdornment: <InputAdornment position="end">年度</InputAdornment>,
                }}
              />
            </Grid>
            <Grid item xs={1.5} sm={1.5} md={1.5} sx={{ marginLeft: { xs: 1, sm: 0.5, md: 1 } }}>
              <TextField
                className='w-full'
                id="input"
                type="text"
                size='small'
                sx={{
                  backgroundColor: "white",
                }}
                InputProps={{
                  endAdornment: <InputAdornment position="end">年度</InputAdornment>,
                }}
              />
            </Grid>
            <Grid item xs={1.5} sm={1.5} md={1.5} sx={{ marginLeft: { xs: 1, sm: 0.5, md: 1 } }}>
              <TextField
                className='w-full'
                id="input"
                type="text"
                size='small'
                sx={{
                  backgroundColor: "white",
                }}
                InputProps={{
                  endAdornment: <InputAdornment position="end">年度</InputAdornment>,
                }}
              />
            </Grid>
            <Grid item xs={1.5} sm={1.5} md={1.5} sx={{ marginLeft: { xs: 1, sm: 0.5, md: 1 } }} className="pb-5">
              <TextField
                className='w-full'
                id="input"
                type="text"
                size='small'
                sx={{
                  backgroundColor: "white",
                }}
                InputProps={{
                  endAdornment: <InputAdornment position="end">年度</InputAdornment>,
                }}
              />
            </Grid>
          </Grid>
          {/* End Grid */}

          {/* Start Grid */}
          <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 1, md: 1 }} className='pl-3' >
            <Grid item xs={2} sm={2.8} md={2} sx={{ marginLeft: { xs: -6.5, sm: -9.5, md: -9 } }}>
              <Typography component='div' className="pt-2">
                主任
              </Typography>
            </Grid>
            <Grid item xs={1.5} sm={1.5} md={1.5} sx={{ marginLeft: { xs: -5, sm: -8.5, md: -9 } }}>
              <TextField
                className='w-full'
                id="input"
                type="text"
                size='small'
                sx={{
                  backgroundColor: "white",
                }}
              />
            </Grid>
            <Grid item xs={1.5} sm={1.5} md={1.5} sx={{ marginLeft: { xs: 1, sm: 0.5, md: 1 } }}>
              <TextField
                className='w-full'
                id="input"
                type="text"
                size='small'
                sx={{
                  backgroundColor: "white",
                }}
              />
            </Grid>
            <Grid item xs={1.5} sm={1.5} md={1.5} sx={{ marginLeft: { xs: 1, sm: 0.5, md: 1 } }}>
              <TextField
                className='w-full'
                id="input"
                type="text"
                size='small'
                sx={{
                  backgroundColor: "white",
                }}
              />
            </Grid>
            <Grid item xs={1.5} sm={1.5} md={1.5} sx={{ marginLeft: { xs: 1, sm: 0.5, md: 1 } }}>
              <TextField
                className='w-full'
                id="input"
                type="text"
                size='small'
                sx={{
                  backgroundColor: "white",
                }}
              />
            </Grid>
            <Grid item xs={1.5} sm={1.5} md={1.5} sx={{ marginLeft: { xs: 1, sm: 0.5, md: 1 } }}>
              <TextField
                className='w-full'
                id="input"
                type="text"
                size='small'
                sx={{
                  backgroundColor: "white",
                }}
              />
            </Grid>
            <Grid item xs={1.5} sm={1.5} md={1.5} sx={{ marginLeft: { xs: 1, sm: 0.5, md: 1 } }}>
              <TextField
                className='w-full'
                id="input"
                type="text"
                size='small'
                sx={{
                  backgroundColor: "white",
                }}
              />
            </Grid>
            <Grid item xs={1.5} sm={1.5} md={1.5} sx={{ marginLeft: { xs: 1, sm: 0.5, md: 1 } }} className="pb-5">
              <TextField
                className='w-full'
                id="input"
                type="text"
                size='small'
                sx={{
                  backgroundColor: "white",
                }}

              />
            </Grid>
          </Grid>
          {/* End Grid */}

          {/* Start Grid */}
          <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 1, md: 1 }} className='pl-3' >
            <Grid item xs={2} sm={2.8} md={2} sx={{ marginLeft: { xs: -6.5, sm: -9.5, md: -9 } }}>
              <Typography component='div' className="pt-2">
                担任
              </Typography>
            </Grid>
            <Grid item xs={1.5} sm={1.5} md={1.5} sx={{ marginLeft: { xs: -5, sm: -8.5, md: -9 } }}>
              <TextField
                className='w-full'
                id="input"
                type="text"
                size='small'
                sx={{
                  backgroundColor: "white",
                }}
              />
            </Grid>
            <Grid item xs={1.5} sm={1.5} md={1.5} sx={{ marginLeft: { xs: 1, sm: 0.5, md: 1 } }}>
              <TextField
                className='w-full'
                id="input"
                type="text"
                size='small'
                sx={{
                  backgroundColor: "white",
                }}
              />
            </Grid>
            <Grid item xs={1.5} sm={1.5} md={1.5} sx={{ marginLeft: { xs: 1, sm: 0.5, md: 1 } }}>
              <TextField
                className='w-full'
                id="input"
                type="text"
                size='small'
                sx={{
                  backgroundColor: "white",
                }}
              />
            </Grid>
            <Grid item xs={1.5} sm={1.5} md={1.5} sx={{ marginLeft: { xs: 1, sm: 0.5, md: 1 } }}>
              <TextField
                className='w-full'
                id="input"
                type="text"
                size='small'
                sx={{
                  backgroundColor: "white",
                }}
              />
            </Grid>
            <Grid item xs={1.5} sm={1.5} md={1.5} sx={{ marginLeft: { xs: 1, sm: 0.5, md: 1 } }}>
              <TextField
                className='w-full'
                id="input"
                type="text"
                size='small'
                sx={{
                  backgroundColor: "white",
                }}
              />
            </Grid>
            <Grid item xs={1.5} sm={1.5} md={1.5} sx={{ marginLeft: { xs: 1, sm: 0.5, md: 1 } }}>
              <TextField
                className='w-full'
                id="input"
                type="text"
                size='small'
                sx={{
                  backgroundColor: "white",
                }}
              />
            </Grid>
            <Grid item xs={1.5} sm={1.5} md={1.5} sx={{ marginLeft: { xs: 1, sm: 0.5, md: 1 } }} className="pb-5">
              <TextField
                className='w-full'
                id="input"
                type="text"
                size='small'
                sx={{
                  backgroundColor: "white",
                }}

              />
            </Grid>
          </Grid>
        </Box>
        <HealthCheckForm/>

        <div className="mt-auto">
          <Grid container justifyContent="center" spacing={2} className='pt-5' sx={{ bottom: 0, width: '100%', backgroundColor: 'inherit', paddingBottom: '10px' }}>
                <Grid item>
                      <Button variant="contained" href="#" size='small' className='text-center'>
                        <Typography component="div" style={{ color: 'white', alignItems: 'center' }}>
                        戻る
                        </Typography>
                      </Button>
                </Grid>
                <Grid item>
                      <Button variant="contained" href="#" size='small' className='text-center'>
                        <Typography component="div" style={{ color: 'white', alignItems: 'center' }}>
                        修正
                        </Typography>
                      </Button>
                </Grid>
          </Grid>
        </div>
      </ContentMain>
    </>
  );
};
