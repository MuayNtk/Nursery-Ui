import ContentMain from '../../content/Content';
import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import TrainingHistory from './TrainingHistory';
import FacilityTrainingHistory from './FacilityTrainingHistory';
import StaffTrainingHistory from './StaffTrainingHistory';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { styled } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SaveIcon from '@mui/icons-material/Save';

const steps = [
  '1.研修受講歴一覧表（保育所及び地域型保育事業）',
  '2.施設別研修受講歴一覧表（認定こども園）',
  '3.職員別研修受講歴一覧表（認定こども園）',
];

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage: `linear-gradient(95deg, rgb(247,180,138) 0%, rgb(247,180,138) 25%, rgb(247,180,138) 0%, rgb(247,180,138) 0%, rgb(247,180,138) 0%);`,
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage: `linear-gradient(95deg, rgb(247,180,138) 0%, rgb(247,180,138) 25%, rgb(247,180,138) 0%, rgb(247,180,138) 0%, rgb(247,180,138) 0%);`,
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderRadius: 1,
  },
}));

export default function CareerTrainingAdd() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completedSteps, setCompletedSteps] = React.useState<number[]>([]);
  const navigate = useNavigate();


  const handleNext = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (activeStep === steps.length - 1) {
      navigate('/accounting/careertraining');
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setCompletedSteps([...completedSteps, activeStep]);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    setCompletedSteps(completedSteps.filter(step => step !== activeStep));
  };

  const getStepLabelComponent = (index: number) => {
    const isActive = index === activeStep;
    const isCompleted = completedSteps.includes(index);
    const stepIconStyle = {
      color: isActive ? '#2196F3' : isCompleted ? '#4CAF50' : 'inherit',
    };
  return (
      <StepLabel StepIconProps={{ style: stepIconStyle }}>
           {/* {steps[index]}  */}
      </StepLabel>
    );
  };


  const getStepContent = (step: number) => {
    switch (step) {
      case 0:
        return <TrainingHistory />;
      case 1:
        return <FacilityTrainingHistory />;
      case 2:
        return <StaffTrainingHistory />;
      default:
        return 'Unknown step';
    }
  };

  return (
    <>
       <ContentMain  className="flex flex-col min-h-screen">
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
            <div className="mt-auto" >
              <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2, gap: 2 }} justifyContent="center" >
                <Button
                  variant="contained"
                  size='medium'
                  startIcon={<ArrowBackIcon />}  
                  color="warning"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mr: 1 ,color: 'white',}}
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
    </>
  );
}
