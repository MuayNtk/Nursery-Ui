import React, { useEffect, useState } from 'react';
import { Button, TextField, Grid, Typography } from '@mui/material';
import ContentMain from '../content/Content';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SaveIcon from '@mui/icons-material/Save';

interface FormData {
      pid: string;
      city: string;
      schoolNumber: string;
      facilityName: string;
      corporationName: string;
      corporationAddress1: string;
      corporationAddress2: string;
      corporationAddress3: string;
      nurseryAddress1: string;
      nurseryAddress2: string;
      nurseryAddress3: string;
      contactPhone: string;
      contactEmail: string;
}

const InfoForm: React.FC = () => {
      const [formData, setFormData] = useState<FormData>({
            pid: '',
            city: '',
            schoolNumber: '',
            facilityName: '',
            corporationName: '',
            corporationAddress1: '',
            corporationAddress2: '',
            corporationAddress3: '',
            nurseryAddress1: '',
            nurseryAddress2: '',
            nurseryAddress3: '',
            contactPhone: '',
            contactEmail: ''
      });
      const navigate = useNavigate();

      useEffect(() => {
            // Set initial pid from sessionStorage or 1 if not present
            const lastPid = JSON.parse(sessionStorage.getItem('lastPid') || '0');
            const newPid = lastPid + 1;
            setFormData((prevData) => ({
                  ...prevData,
                  pid: newPid.toString() // Ensure pid is a string
            }));
            sessionStorage.setItem('lastPid', JSON.stringify(newPid));
      }, []);

      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            const { id, value } = e.target;
            setFormData((prevData) => ({
                  ...prevData,
                  [id]: value
            }));
      };

      const handleSubmit = (e: React.FormEvent) => {
            e.preventDefault();
            // Save data to sessionStorage
            const currentData = JSON.parse(sessionStorage.getItem('data') || '[]');
            sessionStorage.setItem('data', JSON.stringify([...currentData, formData]));
            // Remove old pid and set new pid
            sessionStorage.setItem('lastPid', JSON.stringify(parseInt(formData.pid, 10) + 1));
            navigate('/setting/info');
      };

      return (
            <ContentMain>
                  <Grid container spacing={2} className='pt-7'>
                        <Grid item xs={12} sm={4} md={3}>
                              <TextField
                                    id="city"
                                    label="市町村名"
                                    type="text"
                                    size='small'
                                    value={formData.city}
                                    onChange={handleChange}
                                    fullWidth
                                    style={{ backgroundColor: "white" }}
                              />
                        </Grid>
                        <Grid item xs={12} sm={4} md={3}>
                              <TextField
                                    id="schoolNumber"
                                    label="園番号"
                                    type="text"
                                    size='small'
                                    value={formData.schoolNumber}
                                    onChange={handleChange}
                                    fullWidth
                                    style={{ backgroundColor: "white" }}
                              />
                        </Grid>
                        <Grid item xs={12} sm={4} md={6}>
                              <TextField
                                    id="facilityName"
                                    label="施設・事業所名"
                                    type="text"
                                    size='small'
                                    value={formData.facilityName}
                                    onChange={handleChange}
                                    fullWidth
                                    style={{ backgroundColor: "white" }}
                              />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12}>
                              <Typography className='text-start'>
                                    法人名
                              </Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                              <TextField
                                    id="corporationName"
                                    label="法人名"
                                    type="text"
                                    size='small'
                                    value={formData.corporationName}
                                    onChange={handleChange}
                                    fullWidth
                                    style={{ backgroundColor: "white" }}
                              />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12}>
                              <Typography className='text-start'>
                                    法人住所
                              </Typography>
                        </Grid>
                        <Grid item xs={12} sm={4} md={3}>
                              <TextField
                                    id="corporationAddress1"
                                    label="〒"
                                    type="text"
                                    size='small'
                                    value={formData.corporationAddress1}
                                    onChange={handleChange}
                                    fullWidth
                                    style={{ backgroundColor: "white" }}
                              />
                        </Grid>
                        <Grid item xs={12} sm={4} md={3}>
                              <TextField
                                    id="corporationAddress2"
                                    label=""
                                    type="text"
                                    size='small'
                                    value={formData.corporationAddress2} // ใช้ได้หลายฟิลด์
                                    onChange={handleChange}
                                    fullWidth
                                    style={{ backgroundColor: "white" }}
                              />
                        </Grid>
                        <Grid item xs={12} sm={4} md={6}>
                              <TextField
                                    id="corporationAddress3"
                                    label=""
                                    type="text"
                                    size='small'
                                    value={formData.corporationAddress3} // ใช้ได้หลายฟิลด์
                                    onChange={handleChange}
                                    fullWidth
                                    style={{ backgroundColor: "white" }}
                              />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12}>
                              <Typography className='text-start'>
                                    保育園住所
                              </Typography>
                        </Grid>
                        <Grid item xs={12} sm={4} md={3}>
                              <TextField
                                    id="nurseryAddress1"
                                    label="〒"
                                    type="text"
                                    size='small'
                                    value={formData.nurseryAddress1}
                                    onChange={handleChange}
                                    fullWidth
                                    style={{ backgroundColor: "white" }}
                              />
                        </Grid>
                        <Grid item xs={12} sm={4} md={3}>
                              <TextField
                                    id="nurseryAddress2"
                                    label=""
                                    type="text"
                                    size='small'
                                    value={formData.nurseryAddress2}
                                    onChange={handleChange}
                                    fullWidth
                                    style={{ backgroundColor: "white" }}
                              />
                        </Grid>
                        <Grid item xs={12} sm={4} md={6}>
                              <TextField
                                    id="nurseryAddress3"
                                    label=""
                                    type="text"
                                    size='small'
                                    value={formData.nurseryAddress3}
                                    onChange={handleChange}
                                    fullWidth
                                    style={{ backgroundColor: "white" }}
                              />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12}>
                              <Typography className='text-start'>
                                    連絡先
                              </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                              <TextField
                                    id="contactPhone"
                                    label="電話番号"
                                    type="text"
                                    size='small'
                                    value={formData.contactPhone}
                                    onChange={handleChange}
                                    fullWidth
                                    style={{ backgroundColor: "white" }}
                              />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                              <TextField
                                    id="contactEmail"
                                    label="メールアドレス"
                                    type="text"
                                    size='small'
                                    value={formData.contactEmail}
                                    onChange={handleChange}
                                    fullWidth
                                    style={{ backgroundColor: "white" }}
                              />
                        </Grid>
                  </Grid>
                  <div className="mt-auto">
                        <Grid container justifyContent="center" spacing={2} className='pt-5' sx={{ bottom: 0, width: '100%', backgroundColor: 'inherit', paddingBottom: '10px' }}>
                              <Grid item>
                                    <Button variant="contained" href="/setting/info" size='medium' className='text-center' startIcon={<ArrowBackIcon />} color="warning">
                                          <Typography component="div" style={{ color: 'white', alignItems: 'center' }}>
                                                戻る
                                          </Typography>
                                    </Button>
                              </Grid>
                              <Grid item>
                                    <Button type="submit" variant="contained" size='medium' className='text-center' startIcon={<SaveIcon />} color="success" onClick={handleSubmit}>
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

export default InfoForm;
