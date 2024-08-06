import ContentMain from '../../content/Content';
import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import JoinActivity from './JoinActivity';
import JoinActivityForm from './JoinActivityForm';
import JoinActivitySum from './JoinActivitySum';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { styled } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SaveIcon from '@mui/icons-material/Save';

const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad'];

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage: `linear-gradient(95deg, rgb(247,180,138) 0%, rgb(247,180,138) 25%, rgb(247,180,138) 0%, rgb(247,180,138) 0%);`,
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage: `linear-gradient(95deg, rgb(247,180,138) 0%, rgb(247,180,138) 25%, rgb(247,180,138) 0%, rgb(247,180,138) 0%);`,
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderRadius: 1,
  },
}));

interface ActivityData {
  id: number;
  name: string;
  limit1: string;
  limit2: string;
  everyday?: string;
  place?: string;
  participants?: string;
  content?: string;
  [key: string]: any;
}

export default function ActivityAdd() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completedSteps, setCompletedSteps] = React.useState<number[]>([]);
  const [activityData, setActivityData] = React.useState<ActivityData[]>([]);
  const [era, setEra] = React.useState<string>('');
  const [year, setYear] = React.useState<string>('');
  const [month, setMonth] = React.useState<number>(0);
  const [day, setDay] = React.useState<number>(0);
  const [formData, setFormData] = React.useState<Record<string, string | number>>({});
  const [activityCount, setActivityCount] = React.useState<number>(0);
  const [totalSum, setTotalSum] = React.useState<number>(0);
  const navigate = useNavigate();

  const handleFormDataChange = (newData: Record<string, string | number>) => {
    setFormData(newData);
  };

  const handleActivityDataChange = (data: ActivityData[], era: string, year: string, month: number, day: number) => {
    setEra(era);
    setYear(year);
    setMonth(month);
    setDay(day);
    setActivityData(data);
  };

  const handleNext = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  
    if (activeStep === steps.length - 1) {
      const existingData = JSON.parse(sessionStorage.getItem('activityData') || '[]');
      const selectedRows = JSON.parse(sessionStorage.getItem('selectedRows') || '[]');
  
      const newId = existingData.length > 0 ? Math.max(...existingData.map((data: { id: number }) => data.id)) + 1 : 1;
  
      const formattedDate = `${year}${month.toString().padStart(2, '0')}${day.toString().padStart(2, '0')}`;
  
      const newActivity = {
        id: newId,
        schoolnumber: formData['schoolnumber'] || '',
        date: parseInt(formattedDate, 10),
        totalprojects: activityCount,
        totalamount: totalSum,
        everyday: formData[`everyday-1`] || '',
        place: formData[`place-1`] || '',
        participants: formData[`participants-1`] || '',
        content: formData[`content-1`] || '',
        annual: formData[`annual-1`] || '',
        everyweek: formData[`everyweek-1`] || '',
        monthly: formData[`monthly-1`] || '',
        other: formData[`other-1`] || '',
        extension: parseFloat(formData[`extension-1`] as string) || 0,
        rent: parseFloat(formData[`rent-1`] as string) || 0,
        everyday2: formData[`everyday-2`] || '',
        place2: formData[`place-2`] || '',
        participants2: formData[`participants-2`] || '',
        content2: formData[`content-2`] || '',
        annual2: formData[`annual-2`] || '',
        everyweek2: formData[`everyweek-2`] || '',
        monthly2: formData[`monthly-2`] || '',
        other2: formData[`other-2`] || '',
        extension2: parseFloat(formData[`extension-2`] as string) || 0,
        rent2: parseFloat(formData[`rent-2`] as string) || 0,
        everyday3: formData[`everyday-3`] || '',
        place3: formData[`place-3`] || '',
        participants3: formData[`participants-3`] || '',
        content3: formData[`content-3`] || '',
        annual3: formData[`annual-3`] || '',
        everyweek3: formData[`everyweek-3`] || '',
        monthly3: formData[`monthly-3`] || '',
        other3: formData[`other-3`] || '',
        extension3: parseFloat(formData[`extension-3`] as string) || 0,
        rent3: parseFloat(formData[`rent-3`] as string) || 0,
        everyday4: formData[`everyday-4`] || '',
        place4: formData[`place-4`] || '',
        participants4: formData[`participants-4`] || '',
        content4: formData[`content-4`] || '',
        annual4: formData[`annual-4`] || '',
        everyweek4: formData[`everyweek-4`] || '',
        monthly4: formData[`monthly-4`] || '',
        other4: formData[`other-4`] || '',
        extension4: parseFloat(formData[`extension-4`] as string) || 0,
        rent4: parseFloat(formData[`rent-4`] as string) || 0,
        selectedRows: selectedRows 
      };
  
      const updatedData = [...existingData, newActivity];
      sessionStorage.setItem('activityData', JSON.stringify(updatedData));
  
      console.log('Data saved to sessionStorage:', updatedData); // Debug line
  
      navigate('/accounting/activity');
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setCompletedSteps((prevCompletedSteps) => [...prevCompletedSteps, activeStep]);
    }
  };
  
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    setCompletedSteps((prevCompletedSteps) => prevCompletedSteps.filter(step => step !== activeStep));
  };

  const getStepLabelComponent = (index: number) => {
    const isActive = index === activeStep;
    const isCompleted = completedSteps.includes(index);
    const stepIconStyle = {
      color: isActive ? '#2196F3' : isCompleted ? '#4CAF50' : 'inherit',
    };
    return (
      <StepLabel StepIconProps={{ style: stepIconStyle }}></StepLabel>
    );
  };

  const getStepContent = (step: number) => {
    switch (step) {
      case 0:
        return <JoinActivity onActivityDataChange={handleActivityDataChange} />;
      case 1:
        return (
          <JoinActivityForm
            era={era}
            year={year}
            month={month}
            day={day}
            activityData={activityData}
            onFormDataChange={handleFormDataChange}
          />
        );
      case 2:
        return (
          <JoinActivitySum
            formData={formData}
            activityData={activityData}
            onTotalsCalculated={(count, sum) => {
              setActivityCount(count);
              setTotalSum(sum);
            }}
          />
        );
      default:
        return 'Unknown step';
    }
  };

  return (
    <ContentMain className="flex flex-col min-h-screen">
      <Stepper activeStep={activeStep} connector={<ColorlibConnector />} className='mt-7'>
        {steps.map((label, index) => (
          <Step key={label}>
            {getStepLabelComponent(index)}
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length ? (
        <Typography sx={{ mt: 2, mb: 1 }}>
          All steps completed - you&apos;re finished
        </Typography>
      ) : (
        <React.Fragment>
          <Box sx={{ mt: 2, mb: 1 }}>
            {getStepContent(activeStep)}
          </Box>
          <div className="mt-auto">
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2, gap: 2 }} justifyContent="center">
              <Button
                variant="contained"
                size='medium'
                startIcon={<ArrowBackIcon />}
                color="warning"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1, color: 'white' }}
              >
                戻る
              </Button>
              <Button
                variant="contained"
                onClick={handleNext}
                size='medium'
                startIcon={<SaveIcon />}
                color="success"
                sx={{
                  backgroundColor: activeStep === steps.length - 1 ? '#41b146' : '#f7b941',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: activeStep === steps.length - 1 ? '#388E3C' : '#f7b941',
                  },
                }}
              >
                {activeStep === steps.length - 1 ? '修正' : '次へ'}
              </Button>
            </Box>
          </div>
        </React.Fragment>
      )}
    </ContentMain>
  );
}
