import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { TextField, Button, Typography } from '@mui/material';
import ContentMain from '../content/Content';
import SaveIcon from '@mui/icons-material/Save';

const EditForm: React.FC = () => {
    const { schoolNumber } = useParams<{ schoolNumber: string }>();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ city: '', schoolNumber: '', facilityName: '' , corporationName: '' });

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
            <TextField
                label="市町村名"
                name="city"
                value={formData.city}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />
            <TextField
                label="園番号"
                name="schoolNumber"
                value={formData.schoolNumber}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />
            <TextField
                label="施設・事業所名"
                name="facilityName"
                value={formData.facilityName}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />
            <Button variant="contained" onClick={handleSave} size='medium' className='text-center' startIcon={<SaveIcon />} color="success">
                <Typography component="div" style={{ color: 'white', alignItems: 'center' }}>
                    修正
                </Typography>
            </Button>
        </ContentMain>
    );
};

export default EditForm;
