import React from 'react';
import { useParams } from 'react-router-dom';
import { TextField, Grid, Typography, Button } from '@mui/material';
import ContentMain from '../content/Content';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const ViewInfo: React.FC = () => {
    const { schoolNumber } = useParams<{ schoolNumber: string }>();
    const storedData = JSON.parse(sessionStorage.getItem('data') || '[]');
    const item = storedData.find((data: any) => data.schoolNumber === schoolNumber);

    if (!item) {
        return <Typography variant="h6">No data found</Typography>;
    }

    return (
        <ContentMain>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        label="市町村名"
                        value={item.city}
                        InputProps={{ readOnly: true }}
                        fullWidth
                        sx={{ bgcolor: '#F5F5F5' }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        label="園番号"
                        value={item.schoolNumber}
                        InputProps={{ readOnly: true }}
                        fullWidth
                        sx={{ bgcolor: '#F5F5F5' }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        label="施設・事業所名"
                        value={item.facilityName}
                        InputProps={{ readOnly: true }}
                        fullWidth
                        sx={{ bgcolor: '#F5F5F5' }}
                    />
                </Grid>
                {/* Add other fields as needed */}
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
                </Grid>
            </div>
        </ContentMain>
    );
};

export default ViewInfo;
