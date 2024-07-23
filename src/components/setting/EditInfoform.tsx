import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { TextField, Button, Typography, Grid } from '@mui/material';
import ContentMain from '../content/Content';
import SaveIcon from '@mui/icons-material/Save';

const EditForm: React.FC = () => {
    const { schoolNumber } = useParams<{ schoolNumber: string }>();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
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

    useEffect(() => {
        const storedData = JSON.parse(sessionStorage.getItem('data') || '[]');
        const item = storedData.find((item: any) => item.schoolNumber === schoolNumber);
        if (item) {
            setFormData(item);
        }
    }, [schoolNumber]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSave = () => {
        const storedData = JSON.parse(sessionStorage.getItem('data') || '[]');
        const updatedData = storedData.map((item: any) =>
            item.schoolNumber === schoolNumber ? formData : item
        );
        sessionStorage.setItem('data', JSON.stringify(updatedData));
        navigate('/setting/info');
    };

    return (
        <ContentMain>
            <Grid container spacing={2} className='pt-7'>
                <Grid item xs={12} sm={4} md={3}>
                    <TextField
                        id="city"
                        name="city"
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
                        name="schoolNumber"
                        label="園番号"
                        type="text"
                        size='small'
                        value={formData.schoolNumber}
                        onChange={handleChange}
                        fullWidth
                        style={{ backgroundColor: "white" }}
                        disabled
                    />
                </Grid>
                <Grid item xs={12} sm={4} md={6}>
                    <TextField
                        id="facilityName"
                        name="facilityName"
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
                        name="corporationName"
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
                        name="corporationAddress1"
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
                        name="corporationAddress2"
                        label=""
                        type="text"
                        size='small'
                        value={formData.corporationAddress2}
                        onChange={handleChange}
                        fullWidth
                        style={{ backgroundColor: "white" }}
                    />
                </Grid>
                <Grid item xs={12} sm={4} md={6}>
                    <TextField
                        id="corporationAddress3"
                        name="corporationAddress3"
                        label=""
                        type="text"
                        size='small'
                        value={formData.corporationAddress3}
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
                        name="nurseryAddress1"
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
                        name="nurseryAddress2"
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
                        name="nurseryAddress3"
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
                        name="contactPhone"
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
                        name="contactEmail"
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
            <Button variant="contained" onClick={handleSave} size='medium' className='text-center' startIcon={<SaveIcon />} color="success" sx={{mt: 3}}>
                <Typography component="div" style={{ color: 'white', alignItems: 'center' }}>
                    修正
                </Typography>
            </Button>
        </ContentMain>
    );
};

export default EditForm;
