import { Grid, Typography, TextField, Box, Button,  IconButton, Modal, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Card } from "@mui/material";
import { ChangeEvent, FormEvent, useState } from "react";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

interface Data {
  school_name: string;
  department: string;
  study_period: string;
  graduation: string;
  Licenses_affiliation: string;
  Licenses_study: string;
  detail: JSX.Element;
}

function createData(
  school_name: string,
  department: string,
  study_period: string,
  graduation: string,
  Licenses_affiliation: string,
  Licenses_study: string,
  detail: JSX.Element,
): Data {
  return { school_name, department, study_period, graduation, Licenses_affiliation, Licenses_study, detail };
}

const initialRows: Data[] = [
  createData('Kanasoot', '渡部　史朗', '渡部　史朗', '6.0', '24', '24',
    <>
      <IconButton aria-label="delete" size="small" >
        <EditIcon fontSize="small" className='text-sky-600' />
      </IconButton>
      <IconButton aria-label="delete" size="small" >
        <DeleteIcon fontSize="small" className='text-red-600' />
      </IconButton>
    </>
  ),
  createData('Ice cream sandwich', '渡部　史朗', '237', '9.0', '37', '24',
    <>
      <IconButton aria-label="edit" size="small" >
        <EditIcon fontSize="small" className='text-sky-600' />
      </IconButton>
      <IconButton aria-label="delete" size="small" >
        <DeleteIcon fontSize="small" className='text-red-600' />
      </IconButton>
    </>
  ),
  createData('Eclair', '渡部　史朗', '262', '16.0', '24', '24',
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
  width: { xs: '90%', sm: '80%', md: '3 0%', lg: '45%' }, // Adjust width based on screen size
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: 1,
};

function EducationTable() {

  const [rows, setRows] = useState<Data[]>(initialRows);
  const [open, setOpen] = useState(false);
  const [newEntry, setNewEntry] = useState<Omit<Data, 'detail'>>({

    school_name: '',
    department: '',
    study_period: '',
    graduation: '',
    Licenses_affiliation: '',
    Licenses_study: '',

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

      school_name: rowData.school_name,
      department: rowData.department,
      study_period: rowData.study_period,
      graduation: rowData.graduation,
      Licenses_affiliation: rowData.Licenses_affiliation,
      Licenses_study: rowData.Licenses_study,


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
      school_name: newEntry.school_name,
      department: newEntry.department,
      study_period: newEntry.study_period,
      graduation: newEntry.graduation,
      Licenses_affiliation: newEntry.Licenses_affiliation,
      Licenses_study: newEntry.Licenses_study,
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
      school_name: '',
      department: '',
      study_period: '',
      graduation: '',
      Licenses_affiliation: '',
      Licenses_study: '',
    });
    handleClose();
  };






  return (
    <div>
      <Grid container spacing={2} className="pt-5 text-right" >
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
        <Grid item xs={12} sm={12} md={11} lg={11}>
          <TableContainer
            component={Paper}
            sx={{ border: '1px solid #ccc', position: 'relative', margin: { xs: '0 8px', sm: '0 16px', md: '0 24px' } }}>
            <Table sx={{ minWidth: { xs: '250%', sm: '170%', md: '150%', lg: '100%' } }} size="small" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell sx={{ border: '1px solid #ccc', width: '5%' }} align="center">学校名</TableCell>
                  <TableCell sx={{ border: '1px solid #ccc', width: '5%' }} align="center">学部・学科名</TableCell>
                  <TableCell sx={{ border: '1px solid #ccc', width: '5%' }} align="center">修学期間</TableCell>
                  <TableCell sx={{ border: '1px solid #ccc', width: '5%' }} align="center">卒業・中退等</TableCell>
                  <TableCell sx={{ border: '1px solid #ccc', width: '5%' }} align="center">所属</TableCell>
                  <TableCell sx={{ border: '1px solid #ccc', width: '5%' }} align="center">修学期間</TableCell>
                  <TableCell sx={{ border: '1px solid #ccc', width: '5%' }} align="center"></TableCell>
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
                      <TableCell align="right" component="th" scope="row" sx={{ border: '1px solid #ccc' }}>
                        {row.school_name}
                      </TableCell>
                      <TableCell align="right" component="th" scope="row" sx={{ border: '1px solid #ccc' }}>
                        {row.department}
                      </TableCell>
                      <TableCell align="center" component="th" scope="row" sx={{ border: '1px solid #ccc' }}>
                        {row.study_period}
                      </TableCell>
                      <TableCell align="right" component="th" scope="row" sx={{ border: '1px solid #ccc' }}>
                        {row.graduation}
                      </TableCell>
                      <TableCell align="right" sx={{ border: '1px solid #ccc' }}>
                        {row.Licenses_affiliation}
                      </TableCell>
                      <TableCell align="center" sx={{ border: '1px solid #ccc' }}>
                        {row.Licenses_study}
                      </TableCell>

                      <TableCell align="right" sx={{ border: '1px solid #ccc' }}>
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
          <Grid container spacing={2} className='pt-6' sx={{ marginLeft: { xs: -3, sm: -0.5, md: 0, lg: -1.5 } }} >
            <Grid item xs={3} sm={2} md={2.4} lg={2}>
              <Typography style={{ fontSize: '16px' }} className='pt-2 text-end'>
                学校名
              </Typography>
            </Grid>
            <Grid item xs={9} sm={3} md={3} lg={3.5}>
              <TextField id="school_name" name="school_name" value={newEntry.school_name} onChange={handleChange} type="text" size="small" fullWidth sx={{ backgroundColor: 'white' }} />
            </Grid>
            <Grid item xs={5} sm={3} md={2.4} lg={3} sx={{ marginLeft: { xs: 0, sm: -2, md: 0, lg: -5 } }}>
              <Typography style={{ fontSize: '16px' }} className='pt-2 text-end'>
                学部・学科名
              </Typography>
            </Grid>
            <Grid item xs={7} sm={3} md={3} lg={3.5}>
              <TextField id="department" name="department" value={newEntry.department} onChange={handleChange} type="text" size="small" fullWidth sx={{ backgroundColor: 'white' }} />
            </Grid>
          </Grid>



          <Grid container spacing={1} className='pt-1' sx={{ marginLeft: { xs: 0, sm: -0.5, md: -2.5, lg: 3 } }}>
            <Grid item xs={3} sm={2} md={2.4} lg={2} sx={{ fontSize: '16px', marginLeft: { xs: 0, sm: -0.5, md: 2.5, lg: -3.5 } }}>
              <Typography className='pt-5 text-end'>
                修学期間
              </Typography>
            </Grid>
            <Grid item xs={9} sm={6} md={4} lg={4.5} sx={{ marginLeft: { xs: -2, sm: -2.3, md: -2.8, lg: -3 } }} className='scale-75'>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DatePicker']}>
                  <DatePicker sx={{ backgroundColor: "white" }} />
                </DemoContainer>
              </LocalizationProvider>
            </Grid>
          </Grid>


          <Grid container spacing={1} className='' sx={{ marginLeft: { xs: -2, sm: -6, md: 1, lg: -20 }, marginTop: { xs: 0, sm: 1.3, md: 0, lg: -1.5 } }}>
            <Grid item xs={5} sm={3} md={2.4} lg={5} sx={{ marginTop: { xs: 0, sm: -0.5, md: 0, lg: 1.9 } }}>
              <Typography style={{ fontSize: '16px' }} className='pt-2 text-end'>
                卒業・中退等
              </Typography>
            </Grid>
            <Grid item xs={7} sm={4.5} md={3} lg={6} sx={{ marginTop: { xs: 0, sm: -1, md: 0, lg: 1.9 }, marginLeft: { xs: 0, sm: 1, md: 0, lg: 1 } }}>
              <TextField id="graduation" name="graduation" value={newEntry.graduation} onChange={handleChange} type="text" size="small" fullWidth sx={{ backgroundColor: 'white' }} />
            </Grid>
          </Grid>


          <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} className='pt-10 ' >
            <Card sx={{ bgcolor: "pink", width: 120, height: 40 }}>
              <Typography component='div' className="pt-2 text-center">
                資格・免許等
              </Typography>
            </Card>
          </Grid>

          <Grid container spacing={2} className='pt-6' sx={{ marginLeft: { xs: -4, sm: -0.5, md: 0, lg: 5 } }} >
            <Grid item xs={3} sm={2} md={2.4} lg={1}>
              <Typography style={{ fontSize: '16px' }} className='pt-2 text-end'>
                所属
              </Typography>
            </Grid>
            <Grid item xs={9} sm={3} md={3} lg={4}>
              <TextField id="Licenses_affiliation" name="Licenses_affiliation" value={newEntry.Licenses_affiliation} onChange={handleChange} type="text" size="small" fullWidth sx={{ backgroundColor: 'white' }} />
            </Grid>
            <Grid item xs={3.5} sm={2} md={2.4} lg={2} sx={{ marginLeft: { xs: 0, sm: -0.5, md: -1, lg: -2 } }}>
              <Typography style={{ fontSize: '16px' }} className='pt-2 text-end'>
                修学期間
              </Typography>
            </Grid>
            <Grid item xs={8.5} sm={5} md={4} lg={5} sx={{ marginLeft: { xs: -3, sm: -2, md: -3, lg: -3 }, marginTop: { xs: -1, sm: -2, md: -1.5, lg: -1.5 }, }} className='scale-75'>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DatePicker']}>
                  <DatePicker  sx={{ backgroundColor: "white" }} />
                </DemoContainer>
              </LocalizationProvider>
            </Grid>
          </Grid>





          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
            <Button onClick={handleClose} sx={{ mr: 2 }}>Cancel</Button>
            <Button type="submit" variant="contained">Save</Button>
          </Box>
        </Box>
      </Modal></div>
  )
}

export default EducationTable