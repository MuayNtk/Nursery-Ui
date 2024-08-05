import { useEffect, useState } from 'react';
import ContentMain from '../../content/Content';
import { useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Stepper, Step, StepLabel, Button } from '@mui/material';
import ViewJoinActivity from './ViewJoinActivity'; // นำเข้าคอมโพเนนต์

const steps = ['Join Activity', 'Join Activity Form', 'Join Activity Summary'];

export default function ViewActivity() {
  const { id } = useParams<{ id: string }>();
  const [activeStep, setActiveStep] = useState(0);
  const [activityData, setActivityData] = useState<any>(null);

  useEffect(() => {
    const storedData = JSON.parse(sessionStorage.getItem('activityData') || '[]');
    const activity = storedData.find((item: any) => item.id === parseInt(id || '', 10));
    setActivityData(activity || null);
  }, [id]);

  const handleNext = () => {
    setActiveStep(prevStep => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevStep => prevStep - 1);
  };

  const handleActivityDataChange = (data: { id: number; name: string; limit1: string; limit2: string }[], era: string, year: string, month: number, day: number) => {
    // การจัดการข้อมูลกิจกรรมที่ส่งจาก ViewJoinActivity
    console.log('Activity Data Changed:', data, era, year, month, day);
  };

  if (!activityData) return <Typography>No data found</Typography>;

  return (
    <ContentMain className="flex flex-col min-h-screen">
      <Box sx={{ width: '100%' }}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <Box sx={{ p: 3 }}>
          {activeStep === 0 && (
            <ViewJoinActivity
              data={{
                era: activityData.era,
                year: activityData.year,
                month: activityData.month,
                day: activityData.day,
                selectedRows: activityData.selectedRows || []
              }}
              onCheckboxChange={(_id: any) => {
                // handle checkbox change
              }}
              onSelectAllChange={() => {
                // handle select all
              }}
              onActivityDataChange={handleActivityDataChange}
            />
          )}
          {activeStep === 1 && (
            <Typography>Step 2: Join Activity Form Content</Typography>
            // ใส่เนื้อหาสำหรับ Step 2 ที่นี่
          )}
          {activeStep === 2 && (
            <Typography>Step 3: Join Activity Summary Content</Typography>
            // ใส่เนื้อหาสำหรับ Step 3 ที่นี่
          )}
          <Box sx={{ mt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Button
              variant="contained"
              onClick={handleNext}
            >
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
        </Box>
      </Box>
    </ContentMain>
  );
}
