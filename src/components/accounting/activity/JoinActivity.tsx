import { SetStateAction, useState } from "react";
import { FormControl, Grid, InputLabel, MenuItem, Select, Typography, Box } from "@mui/material";
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

const columns: readonly GridColDef[] = [
  {
    field: 'Applicable',
    headerName: '該当に',
    width: 600,
    editable: false,
  },
  {
    field: 'expense1',
    headerName: '',
    width: 150,
    editable: false,
  },
  {
    field: 'expenseHead',
    headerName: '事業費',
    width: 120,
    editable: false,
  },
  {
    field: 'expense2',
    headerName: '',
    width: 150,
    editable: false,
  },
];

const rows = [
  { id: 1, Applicable: '世代間交流等事業', expense1: '250千円以內', expense2: "100千円以內" },
  { id: 2, Applicable: '異年齡児交流等事業', expense1: '250千円以內', expense2: "100千円以內" },
  { id: 3, Applicable: '育児講座・育児と仕事両立支援', expense1: '250千円以內', expense2: "100千円以內" },
  { id: 4, Applicable: '地域の特性に応じた保育需要への対応', expense1: '250千円以內', expense2: "100千円以內" },
];

export default function JoinActivity() {
  const [era, setEra] = useState('');

  const handleEraChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setEra(event.target.value);
  };

  return (
    <>
      {/* Start あて先 Grid */}
      <Grid container spacing={2} className='pt-5'>
        <Grid item xs={3} sm={2.5} md={3} lg={3}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
            あて先 :
          </Typography>
        </Grid>
        <Grid item xs={2} sm={2} md={1.3} lg={1.5}>
          <Typography fontWeight="bold" sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-start'>
            福岡市
          </Typography>
        </Grid>
        <Grid item xs={6} sm={1} md={3} lg={1} sx={{ ml: { xs: 0, sm: 0, md: 0, lg: -9 } }}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-start'>
            長
          </Typography>
        </Grid>
      </Grid>
      {/* End あて先 Grid */}

      {/* Start 日時 Grid */}
      <Grid container spacing={2} className='pt-5'>
        <Grid item xs={3} sm={2.5} md={3} lg={3}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
            日時 :
          </Typography>
        </Grid>
        <Grid item xs={3.5} sm={2.5} md={2} lg={1.3}>
          <FormControl size="small" fullWidth>
            <InputLabel id="era-select-label">平成</InputLabel>
            <Select
              id="era-select"
              labelId="era-select-label"
              label="平成"
              value={era}
              onChange={handleEraChange}
              sx={{ backgroundColor: "white" }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={1}>昭和</MenuItem>
              <MenuItem value={2}>平成</MenuItem>
              <MenuItem value={3}>令和</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6} sm={6} md={5} lg={5} sx={{ ml: { xs: 9.5, sm: -1.5, md: -3, lg:-3 },mt: { xs: -3, sm: -2, md: -2, lg:-2 } }}>
        <LocalizationProvider dateAdapter={AdapterDayjs} >
              <DemoContainer components={['DatePicker']}>
                <DatePicker label="Select date" sx={{ backgroundColor: "white" }} className="scale-75"/>
              </DemoContainer>
            </LocalizationProvider>
        </Grid>
        
      </Grid>
      {/* End 日時 Grid */}

      {/* Start 保育所(園)名 Grid */}
      <Grid container spacing={2} className='pt-4'>
        <Grid item xs={3.2} sm={3} md={3} lg={3} sx={{ ml: { xs: -0.5, sm: -2.5, md: 0, lg: 0 } }}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
            保育所(園)名 :
          </Typography>
        </Grid>
        <Grid item xs={2} sm={1.5} md={1} lg={1.5}>
          <Typography fontWeight="bold" sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-start'>
            渡部
          </Typography>
        </Grid>
        <Grid item xs={2} sm={2} md={2} lg={1} sx={{ ml: { xs: -1.5, sm: -1, md: -1, lg: -12 } }}>
          <Typography fontWeight="bold" sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-start'>
            封子
          </Typography>
        </Grid>
      </Grid>
      {/* End 保育所(園)名 Grid */}

      {/* Start 法人名代表者氏名名 Grid */}
      <Grid container spacing={2} className='pt-4'>
        <Grid item xs={3.2} sm={3} md={3} lg={3} sx={{ ml: { xs: -0.5, sm: -2.5, md: 0, lg: 0 } }}>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-end'>
            法人名代表者氏名 :
          </Typography>
        </Grid>
        <Grid item xs={2} sm={1.5} md={1} lg={1.5}>
          <Typography fontWeight="bold" sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-start'>
            中川
          </Typography>
        </Grid>
        <Grid item xs={2} sm={2} md={2} lg={1} sx={{ ml: { xs: -1.5, sm: -1, md: -1, lg: -12 } }}>
          <Typography fontWeight="bold" sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '15px' } }} className='pt-2 text-start'>
            康嘉
          </Typography>
        </Grid>
      </Grid>
      {/* End 法人名代表者氏名名 Grid */}

      {/* Start Data Table */}
      <Box sx={{ height: 400, width: '100%', pt: 5 }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
      {/* End Data Table */}
    </>
  );
}
