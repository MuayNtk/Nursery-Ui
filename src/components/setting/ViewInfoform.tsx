import React from 'react';
import { useParams } from 'react-router-dom';
import { TextField, Grid, Typography, Button } from '@mui/material';
import ContentMain from '../content/Content';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const ViewInfo: React.FC = () => {
    const { pid } = useParams<{ pid: string }>();
    const storedData = JSON.parse(sessionStorage.getItem('data') || '[]');
    const item = storedData.find((data: any) => data.pid === pid);

    if (!item) {
        return <Typography variant="h6">No data found</Typography>;
    }

    return (
        <ContentMain>
            <Grid container spacing={2} className='pt-7'>
                <Grid item xs={12} sm={4} md={3}>
                    <TextField
                        label="市町村名"
                        value={item.city}
                        InputProps={{ readOnly: true }}
                        fullWidth
                        size='small'
                        sx={{ bgcolor: '#F5F5F5' }}
                    />
                </Grid>
                <Grid item xs={12} sm={4} md={3}>
                    <TextField
                        label="園番号"
                        value={item.schoolNumber}
                        InputProps={{ readOnly: true }}
                        fullWidth
                        size='small'
                        sx={{ bgcolor: '#F5F5F5' }}
                    />
                </Grid>
                <Grid item xs={12} sm={4} md={6}>
                    <TextField
                        label="施設・事業所名"
                        value={item.facilityName}
                        InputProps={{ readOnly: true }}
                        fullWidth
                        size='small'
                        sx={{ bgcolor: '#F5F5F5' }}
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                    <Typography className='text-start'>
                        法人名
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={4} md={6}>
                    <TextField
                        label="法人名"
                        value={item.corporationName}
                        InputProps={{ readOnly: true }}
                        fullWidth
                        size='small'
                        sx={{ bgcolor: '#F5F5F5' }}
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                    <Typography className='text-start'>
                        法人住所
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={4} md={3}>
                    <TextField
                        label="〒"
                        value={item.corporationAddress1}
                        InputProps={{ readOnly: true }}
                        fullWidth
                        size='small'
                        sx={{ bgcolor: '#F5F5F5' }}
                    />
                </Grid>
                <Grid item xs={12} sm={4} md={3}>
                    <TextField
                        label=""
                        value={item.corporationAddress2}
                        InputProps={{ readOnly: true }}
                        fullWidth
                        size='small'
                        sx={{ bgcolor: '#F5F5F5' }}
                    />
                </Grid>
                <Grid item xs={12} sm={4} md={6}>
                    <TextField
                        label=""
                        value={item.corporationAddress3}
                        InputProps={{ readOnly: true }}
                        fullWidth
                        size='small'
                        sx={{ bgcolor: '#F5F5F5' }}
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                    <Typography className='text-start'>
                        保育園住所
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={4} md={3}>
                    <TextField
                        label="〒"
                        value={item.nurseryAddress1}
                        InputProps={{ readOnly: true }}
                        fullWidth
                        size='small'
                        sx={{ bgcolor: '#F5F5F5' }}
                    />
                </Grid>
                <Grid item xs={12} sm={4} md={3}>
                    <TextField
                        label=""
                        value={item.nurseryAddress2}
                        InputProps={{ readOnly: true }}
                        fullWidth
                        size='small'
                        sx={{ bgcolor: '#F5F5F5' }}
                    />
                </Grid>
                <Grid item xs={12} sm={4} md={6}>
                    <TextField
                        label=""
                        value={item.nurseryAddress3}
                        InputProps={{ readOnly: true }}
                        fullWidth
                        size='small'
                        sx={{ bgcolor: '#F5F5F5' }}
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                    <Typography className='text-start'>
                        連絡先
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={4} md={6}>
                    <TextField
                        label="電話番号"
                        value={item.contactPhone}
                        InputProps={{ readOnly: true }}
                        fullWidth
                        size='small'
                        sx={{ bgcolor: '#F5F5F5' }}
                    />
                </Grid>
                <Grid item xs={12} sm={4} md={6}>
                    <TextField
                        label="メールアドレス"
                        value={item.contactEmail}
                        InputProps={{ readOnly: true }}
                        fullWidth
                        size='small'
                        sx={{ bgcolor: '#F5F5F5' }}
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
                </Grid>
            </div>
        </ContentMain>
    );
};

export default ViewInfo;
