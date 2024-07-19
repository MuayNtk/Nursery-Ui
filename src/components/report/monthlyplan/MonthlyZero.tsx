import { Box, Button, Card, Grid, TextField, TextareaAutosize, Typography ,IconButton} from "@mui/material";
import { useState, ChangeEvent, FormEvent } from 'react';
import SaveIcon from '@mui/icons-material/Save';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Modal from '@mui/material/Modal';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


interface Data {
  FacilityDirector: string;
  Chief: string;
  daily: string;
  education: string;
  detail: JSX.Element;
}

function createData(
  FacilityDirector: string,
  Chief: string,
  daily: string,
  education: string,
  detail: JSX.Element
): Data {
  return { FacilityDirector, Chief, daily, education, detail };
}

const initialRows: Data[] = [
  createData('濃部　圭子', '渡部　史朗', '6.0', '24', 
    <>
      <IconButton aria-label="delete" size="small" >
        <EditIcon fontSize="small" className='text-sky-600' />
      </IconButton>
      <IconButton aria-label="delete" size="small" >
        <DeleteIcon fontSize="small" className='text-red-600' />
      </IconButton>
    </>
  ),
  createData('Ice cream sandwich', '237', '9.0', '37',
    <>
      <IconButton aria-label="edit" size="small" >
        <EditIcon fontSize="small" className='text-sky-600' />
      </IconButton>
      <IconButton aria-label="delete" size="small" >
        <DeleteIcon fontSize="small" className='text-red-600' />
      </IconButton>
    </>
  ),
  createData('Eclair', '262', '16.0', '24', 
    <>
      <IconButton aria-label="edit" size="small" >
        <EditIcon fontSize="small" className='text-sky-600' />
      </IconButton>
      <IconButton aria-label="delete" size="small" >
        <DeleteIcon fontSize="small" className='text-red-600' />
      </IconButton>
    </>
  ),
];

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: '90%', sm: '80%', md: '3 0%', lg: '30%' }, // Adjust width based on screen size
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: 1,
};

export default function MonthlyZero() {

  const [rows, setRows] = useState<Data[]>(initialRows);
  const [open, setOpen] = useState(false);
  const [newEntry, setNewEntry] = useState<Omit<Data, 'detail'>>({
    FacilityDirector: '',
    Chief: '',
    daily: '',
    education: '',
  });
  const [indexToEdit, setIndexToEdit] = useState<number | null>(null);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setIndexToEdit(null); // Reset indexToEdit when closing modal
  }


  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewEntry((prev) => ({ ...prev, [name]: name === 'protein' ? parseFloat(value) : value }));
  };

   const handleEdit = (index: number) => {
    const rowData = rows[index];
    setNewEntry({
      FacilityDirector: rowData.FacilityDirector,
      Chief: rowData.Chief,
      daily: rowData.daily,
      education: rowData.education,
    });
    setIndexToEdit(index); // Set indexToEdit to the index of the row being edited
    setOpen(true);
  };

  const handleDelete = (index: number) => {
    const updatedRows = rows.filter((_, rowIndex) => rowIndex !== index);
    setRows(updatedRows);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newData: Data = {
      FacilityDirector: newEntry.FacilityDirector,
      Chief: newEntry.Chief,
      daily: newEntry.daily,
      education: newEntry.education,
      detail: (
        <>
          <IconButton aria-label="edit" size="small">
            <EditIcon fontSize="small" className="text-sky-600" />
          </IconButton>
          <IconButton aria-label="delete" size="small">
            <DeleteIcon fontSize="small" className="text-red-600" />
          </IconButton>
        </>
      ),
    };

    if (indexToEdit !== null) {
      // Editing existing row
      const updatedRows = rows.map((row, index) =>
        index === indexToEdit ? { ...newData } : row
      );
      setRows(updatedRows);
    } else {
      // Adding new row
      setRows(prevRows => [...prevRows, newData]);
    }

    // Reset newEntry and close modal
    setNewEntry({
      FacilityDirector: '',
      Chief: '',
      daily: '',
      education: '',
    });
    handleClose();
  };


  return (
    <>
 
      <Grid container spacing={1} justifyContent='start'className="pt-4">
        <Grid item xs={3} sm={2} md={2} lg={2}>
          <Typography component="div" sx={{  fontSize: { xs: 11, sm: 11, md: 11, lg: 14, } }} className="text-end">
            施設長 :  
          </Typography>
        </Grid>
        <Grid item xs={3} sm={2} md={1} lg={2} >
          <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14, }, fontWeight: 'bold', }} >
            濃部　圭子
          </Typography>
        </Grid>
      </Grid >

 
      <Grid container spacing={1} justifyContent='start'  className="pt-4  ">
        <Grid item xs={3} sm={2} md={1} lg={2} >
          <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14, }, }} className="text-end" >
            主任 :
          </Typography>
        </Grid>
        <Grid item xs={3} sm={2} md={1} lg={2} >
          <Typography component="div" sx={{  fontSize: { xs: 11, sm: 11, md: 11, lg: 14, }, fontWeight: 'bold', }} >
            渡部　史朗
          </Typography>
        </Grid>
       
      </Grid >

      <Grid container spacing={1} justifyContent='start'  className="pt-4  ">
        <Grid item xs={3} sm={2} md={1} lg={2}>
          <Typography component="div" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14, }, }}  className="text-end ">
            担任 :
          </Typography>
        </Grid>
        <Grid item xs={3} sm={2} md={1} lg={2} >
          <Typography component="div" sx={{fontSize: { xs: 11, sm: 11, md: 11, lg: 14, }, fontWeight: 'bold', }} >
            中川　康嘉
          </Typography>
        </Grid>
      </Grid >
      
      <Grid className="mt-5 lg:mt-7" sx={{ ml: { xs: 0, sm: 0, md: 0, lg: -2 } }}>
        <Typography
          component="div"
          sx={{ color: 'black', fontSize: { xs: 11, sm: 11, md: 11, lg: 16 }, backgroundColor: '#CCF0FD', fontWeight: 'bold', pt: { xs: 1.5, sm: 1.5, md: 1.5, lg: 1 } }}
          className='flex justify-start h-10 pt-2 pl-5' >
          指導計画は食育の内容を含むこと。
        </Typography>
      </Grid>
 
      <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-14 pl-10 flex '  >
        <Card sx={{ bgcolor: "pink", width: 100, height: 35, }} >
          <Typography component='div' className="pt-2 lg:pt-1" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, fontWeight: 'bold', marginLeft: { xs: 4, sm: 4, md: 4, lg: 3, } }}>
            ねらい
          </Typography>
        </Card>
      </Grid>

      <Grid container spacing={2} className="pt-5" justifyContent='center'>
        <Grid item xs={12} md={6} >
          <Grid container spacing={1}  alignItems='center' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 5 } }}>
            <Grid item xs={1} sm={4} md={3} lg={1} className="text-end">
              <Typography component="div" fontWeight="bold" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16 } }}>
                義護
              </Typography>
            </Grid>
          </Grid>
          <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-2'  sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 7 } }}>
            <Grid item xs={7.5} sm={3} md={8.5} lg={12}>
              <Typography  gutterBottom sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14 } }}>
                生命の保持・情緒の安定
              </Typography>
              <TextareaAutosize
                id="emotional-input"
                name="emotional-input"
                minRows={3}
                maxRows={100}
                className="w-56 sm:w-60 lg:w-96"
                style={{ border: '1px solid gray', borderRadius: '4px' }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid container spacing={1} justifyContent='start' alignItems='center' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: -3 } }}>
            <Grid item xs={1} sm={4} md={3} lg={1} className="text-end">
              <Typography component="div" fontWeight="bold" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16 } }}>
                教育
              </Typography>
            </Grid>
          </Grid>
          <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-2 '  sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: -3} }}>
            <Grid item xs={7.5} sm={7} md={8.5} lg={12}>
              <Typography  gutterBottom sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14 } }}>
                関する視点 身体的発達に , 関する視点 社会的発達に , 関する視点 精神的発達に
              </Typography>
              <TextareaAutosize
                id="emotional-input"
                name="emotional-input"
                minRows={3}
                maxRows={100}
                className="w-56 sm:w-60 lg:w-96"
                style={{ border: '1px solid gray', borderRadius: '4px' }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      
      <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-10 pl-10 flex '  >
        <Card sx={{ bgcolor: "pink", width: { xs: 300, sm: 280, md: 100, lg: 380 }, height: 40 }}>
          <Typography component='div' className="pt-3 lg:pt-2" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, fontWeight: 'bold', marginLeft: { xs: 4, sm: 4, md: 4, lg: 3, } }}>
          子どもとの関わり方(保育士等の育みたい内容)
          </Typography>
        </Card>
      </Grid>
     
      <Grid container spacing={2} className="pt-5">
        <Grid item xs={12} md={6} >
          <Grid container spacing={1} justifyContent='start' alignItems='center' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 5 } }}>
            <Grid item xs={1} sm={4} md={3} lg={1} className="text-end">
              <Typography component="div" fontWeight="bold" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16 } }}>
                義護
              </Typography>
            </Grid>
          </Grid>
          <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-2'  sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 7 } }}>
            <Grid item xs={7.5} sm={3} md={8.5} lg={12}>
              <Typography  gutterBottom sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14 } }}>
                生命の保持・情緒の安定
              </Typography>
              <TextareaAutosize
                id="emotional-input"
                name="emotional-input"
                minRows={3}
                maxRows={100}
                className="w-56 sm:w-60 lg:w-96"
                style={{ border: '1px solid gray', borderRadius: '4px' }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid container spacing={1} justifyContent='start' alignItems='center' sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: -3 } }}>
            <Grid item xs={1} sm={4} md={3} lg={1} className="text-end">
              <Typography component="div" fontWeight="bold" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16 } }}>
                教育
              </Typography>
            </Grid>
          </Grid>
          <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-2 '  sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: -3} }}>
            <Grid item xs={7.5} sm={7} md={8.5} lg={12}>
              <Typography  gutterBottom sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14 } }}>
                関する視点 身体的発達に , 関する視点 社会的発達に , 関する視点 精神的発達に
              </Typography>
              <TextareaAutosize
                id="emotional-input"
                name="emotional-input"
                minRows={3}
                maxRows={100}
                className="w-56 sm:w-60 lg:w-96"
                style={{ border: '1px solid gray', borderRadius: '4px' }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-10 pl-10 flex '  >
        <Card sx={{ bgcolor: "pink", width: { xs: 300, sm: 280, md: 100, lg: 380 }, height: 40 }}>
          <Typography component='div' className="pt-3 lg:pt-2" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, fontWeight: 'bold', marginLeft: { xs: 4, sm: 4, md: 4, lg: 3, } }}>
          環境づくり予される子どもの活動配慮・援助
          </Typography>
        </Card>
      </Grid>
     
      <Grid container spacing={2} className="pt-2">
        <Grid item xs={12} md={6} >
          <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-2'  sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 7 } }}>
            <Grid item xs={7.5} sm={3} md={8.5} lg={12}>
              <Typography  gutterBottom sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14 } }}>
              健康 · 安全
              </Typography>
              <TextareaAutosize
                id="emotional-input"
                name="emotional-input"
                minRows={3}
                maxRows={100}
                className="w-56 sm:w-60 lg:w-96"
                style={{ border: '1px solid gray', borderRadius: '4px' }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-2 '  sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: -3} }}>
            <Grid item xs={7.5} sm={7} md={8.5} lg={12}>
              <Typography  gutterBottom sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14 } }}>
              との連携家庭・地域
              </Typography>
              <TextareaAutosize
                id="emotional-input"
                name="emotional-input"
                minRows={3}
                maxRows={100}
                className="w-56 sm:w-60 lg:w-96"
                style={{ border: '1px solid gray', borderRadius: '4px' }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid container spacing={2} className="pt-2">
        <Grid item xs={12} md={6} >
          <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-2'  sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 7 } }}>
            <Grid item xs={7.5} sm={3} md={8.5} lg={12}>
              <Typography  gutterBottom sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14 } }}>
              行事
              </Typography>
              <TextareaAutosize
                id="health-safety-input"
                name="health-safety-input"
                minRows={3}
                maxRows={100}
                className="w-56 sm:w-60 lg:w-96"
                style={{ border: '1px solid gray', borderRadius: '4px' }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-2 '  sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: -3} }}>
            <Grid item xs={7.5} sm={7} md={8.5} lg={12}>
              <Typography  gutterBottom sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14 } }}>
              個別対応運
              </Typography>
              <TextareaAutosize
                id="cooperation-input"
                name="cooperation-input"
                minRows={3}
                maxRows={100}
                className="w-56 sm:w-60 lg:w-96"
                style={{ border: '1px solid gray', borderRadius: '4px' }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid container spacing={2} className="pt-2">
        <Grid item xs={12} md={6} >
          <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-2'  sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 7 } }}>
            <Grid item xs={7.5} sm={3} md={8.5} lg={12}>
              <Typography  gutterBottom sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14 } }}>
              評価・反省
              </Typography>
              <TextareaAutosize
                id="health-safety-input"
                name="health-safety-input"
                minRows={3}
                maxRows={100}
                className="w-56 sm:w-60 lg:w-96"
                style={{ border: '1px solid gray', borderRadius: '4px' }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid className="mt-5 lg:mt-7" sx={{ ml: { xs: 0, sm: 0, md: 0, lg: -2 } }}>
        <Typography
          component="div"
          sx={{ color: 'black', fontSize: { xs: 10, sm: 10, md: 11, lg: 16 }, backgroundColor: '#CCF0FD', fontWeight: 'bold', pt: { xs: 1.5, sm: 1.5, md: 1.5, lg: 1 } }}
          className='flex justify-start h-12 lg:h-10 pt-2 pl-5 pr-5' >
          身休的発達に関する視点、社会的発達に関する視点、精神的発達に関する視点、指導計画は食育の内容を含むこと
        </Typography>
      </Grid>
   
   
      <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-10 pl-10 flex '  >
        <Card sx={{ bgcolor: "pink", width: { xs: 100, sm: 280, md: 100, lg: 100 }, height: 40 }}>
          <Typography component='div' className="pt-3 lg:pt-2" sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 16, }, fontWeight: 'bold', marginLeft: { xs: 4, sm: 4, md: 4, lg: 3, } }}>
          ねらい
          </Typography>
        </Card>
      </Grid>

      <Grid container spacing={2} className="pt-2">
        <Grid item xs={12} md={6} >
          <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-2'  sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 7 } }}>
            <Grid item xs={7.5} sm={3} md={8.5} lg={12}>
              <Typography  gutterBottom sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14 } }}>
              養護
              </Typography>
              <TextareaAutosize
                id="health-safety-input"
                name="health-safety-input"
                minRows={3}
                maxRows={100}
                className="w-56 sm:w-60 lg:w-96"
                style={{ border: '1px solid gray', borderRadius: '4px' }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-2 '  sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: -3} }}>
            <Grid item xs={7.5} sm={7} md={8.5} lg={12}>
              <Typography  gutterBottom sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14 } }}>
              教育
              </Typography>
              <TextareaAutosize
                id="cooperation-input"
                name="cooperation-input"
                minRows={3}
                maxRows={100}
                className="w-56 sm:w-60 lg:w-96"
                style={{ border: '1px solid gray', borderRadius: '4px' }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid> 

      <Grid container spacing={2} className="pt-2">
        <Grid item xs={12} md={6} >
          <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-2'  sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 7 } }}>
            <Grid item xs={7.5} sm={3} md={8.5} lg={12}>
              <Typography  gutterBottom sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14 } }}>
              家庭・地域との連携
              </Typography>
              <TextareaAutosize
                id="health-safety-input"
                name="health-safety-input"
                minRows={3}
                maxRows={100}
                className="w-56 sm:w-60 lg:w-96"
                style={{ border: '1px solid gray', borderRadius: '4px' }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-2 '  sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: -3} }}>
            <Grid item xs={7.5} sm={7} md={8.5} lg={12}>
              <Typography  gutterBottom sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14 } }}>
              行事
              </Typography>
              <TextareaAutosize
                id="cooperation-input"
                name="cooperation-input"
                minRows={3}
                maxRows={100}
                className="w-56 sm:w-60 lg:w-96"
                style={{ border: '1px solid gray', borderRadius: '4px' }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid> 
      
      <Grid container spacing={2} className="pt-10 text-right" >
        <Grid item xs={12} sm={12} md={12} lg={11.2} >
          <Button
            variant="contained"
            onClick={handleOpen}
            
          >
            Add
          </Button>
        </Grid>
      </Grid>

      <Grid container className="pt-4" justifyContent="start">
      <Grid item xs={12} sm={12} md={8.5} lg={11}>
      <TableContainer
    component={Paper}
    sx={{ border: '1px solid #ccc', position: 'relative', margin: { xs: '0 8px', sm: '0 16px', md: '0 24px' } }}
  >
    <Table sx={{ minWidth: { xs: '250%', sm: '170%', md: 200 } }} size="small" aria-label="a dense table">
      <TableHead>
        <TableRow>
          <TableCell sx={{ border: '1px solid #ccc', width: '13%' }}>施設長</TableCell>
          <TableCell sx={{ border: '1px solid #ccc', width: '13%' }} align="right">主任</TableCell>
          <TableCell sx={{ border: '1px solid #ccc', width: '30%' }} align="right">子どもの生活する姿</TableCell>
          <TableCell sx={{ border: '1px solid #ccc', width: '30%' }} align="right">養護・教育</TableCell>
          <TableCell sx={{ border: '1px solid #ccc', width: '10%' }} align="right"></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.length === 0 ? (
          <TableRow>
            <TableCell colSpan={5} align="center">
              No data
            </TableCell>
          </TableRow>
        ) : (
          rows.map((row, index) => (
            <TableRow
              key={index}
              sx={{
                '&:last-child td, &:last-child th': { border: '1px solid #ccc' },
                border: '1px solid #ccc',
              }}
            >
              <TableCell component="th" scope="row" sx={{ border: '1px solid #ccc' }}>
                {row.FacilityDirector}
              </TableCell>
              <TableCell align="right" sx={{ border: '1px solid #ccc' }}>
                {row.Chief}
              </TableCell>
              <TableCell align="right" sx={{ border: '1px solid #ccc' }}>
                {row.daily}
              </TableCell>
              <TableCell align="right" sx={{ border: '1px solid #ccc' }}>
                {row.education}
              </TableCell>
              <TableCell align="center" sx={{ border: '1px solid #ccc' }}>
                <IconButton
                  aria-label="edit"
                  size="small"
                  onClick={() => handleEdit(index)}
                >
                  <EditIcon fontSize="small" className="text-sky-600" />
                </IconButton>
                <IconButton
                  aria-label="delete"
                  size="small"
                  onClick={() => handleDelete(index)}
                >
                  <DeleteIcon fontSize="small" className="text-red-600" />
                </IconButton>
              </TableCell>
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  </TableContainer>
      </Grid>
    </Grid>
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={modalStyle} component="form" onSubmit={handleSubmit}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Add New Entry
        </Typography>
        <TextField
          id="FacilityDirector"
          name="FacilityDirector"
          label="施設長"
          value={newEntry.FacilityDirector}
          onChange={handleChange}
          fullWidth
          size="small"
          margin="normal"
          required
        />
        <TextField
          id="Chief"
          name="Chief"
          label="主任"
          value={newEntry.Chief}
          onChange={handleChange}
          fullWidth
          size="small"
          margin="normal"
          required
        />
        <Typography gutterBottom sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14 } }} className="pt-4">
          子どもの生活する姿
        </Typography>
        <textarea
          id="daily"
          name="daily"
          value={newEntry.daily}
          onChange={handleChange}
          rows={3}  // Set the number of rows here
          className="w-72 sm:w-72 lg:w-80"
          style={{ border: '1px solid gray', borderRadius: '4px', resize: 'none' , padding:'3px'}}
        />
          <Typography gutterBottom sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14 } }} className="pt-4">
          子どもとの関わり方保育士等の育みたい内容<br/> (養護・教育)
        </Typography>
        <textarea
          id="education"
          name="education"
          value={newEntry.education}
          onChange={handleChange}
          rows={3}  // Set the number of rows here
          className="w-72 sm:w-72 lg:w-80"
          style={{ border: '1px solid gray', borderRadius: '4px', resize: 'none', padding:'3px'}}
        />
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
            <Button onClick={handleClose} sx={{ mr: 2 }}>Cancel</Button>
            <Button type="submit" variant="contained">Save</Button>
          </Box>
        </Box>
      </Modal>

      <Grid container spacing={2} className="pt-7">
        <Grid item xs={12} md={6} >
          <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-2'  sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 7 } }}>
            <Grid item xs={7.5} sm={3} md={8.5} lg={12}>
              <Typography  gutterBottom sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14 } }}>
              環境づくり
              </Typography>
              <TextareaAutosize
                id="health-safety-input"
                name="health-safety-input"
                minRows={3}
                maxRows={100}
                className="w-56 sm:w-60 lg:w-96"
                style={{ border: '1px solid gray', borderRadius: '4px' }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-2 '  sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: -3} }}>
            <Grid item xs={7.5} sm={7} md={8.5} lg={12}>
              <Typography  gutterBottom sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14 } }}>
              生活と遊び
              </Typography>
              <TextareaAutosize
                id="cooperation-input"
                name="cooperation-input"
                minRows={3}
                maxRows={100}
                className="w-56 sm:w-60 lg:w-96"
                style={{ border: '1px solid gray', borderRadius: '4px' }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid container spacing={2} className="pt-7">
        <Grid item xs={12} md={6} >
          <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-2'  sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 7 } }}>
            <Grid item xs={7.5} sm={3} md={8.5} lg={12}>
              <Typography  gutterBottom sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14 } }}>
              健康 · 安全
              </Typography>
              <TextareaAutosize
                id="health-safety-input"
                name="health-safety-input"
                minRows={3}
                maxRows={100}
                className="w-56 sm:w-60 lg:w-96"
                style={{ border: '1px solid gray', borderRadius: '4px' }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-2 '  sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: -3} }}>
            <Grid item xs={7.5} sm={7} md={8.5} lg={12}>
              <Typography  gutterBottom sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14 } }}>
              相運館
              </Typography>
              <TextareaAutosize
                id="cooperation-input"
                name="cooperation-input"
                minRows={3}
                maxRows={100}
                className="w-56 sm:w-60 lg:w-96"
                style={{ border: '1px solid gray', borderRadius: '4px' }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid container spacing={2} className="pt-2">
        <Grid item xs={12} md={6} >
          <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-2'  sx={{ marginLeft: { xs: "20px", sm: "20px", md: "50px", lg: 7} }}>
            <Grid item xs={7.5} sm={3} md={8.5} lg={12}>
              <Typography  gutterBottom sx={{ fontSize: { xs: 11, sm: 11, md: 11, lg: 14 } }}>
              評価 · 反省
              </Typography>
              <TextareaAutosize
                id="cooperation2-input"
                name="cooperation2-input"
                minRows={3}
                maxRows={100}
                className="w-56 sm:w-60 lg:w-96"
                style={{ border: '1px solid gray', borderRadius: '4px' }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      
      <div className="mt-auto">
          <Grid container justifyContent="center" spacing={2} className='pt-12' sx={{ bottom: 0, width: '100%', backgroundColor: 'inherit', paddingBottom: '10px' }}>
            <Grid item>
                  <Button variant="contained" href="/report/overallplan" size='medium' className='text-center' startIcon={<ArrowBackIcon />}  color="warning">
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
    </>
  );
};
