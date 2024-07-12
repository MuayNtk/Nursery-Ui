import ContentMain from '../../content/Content';
import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import EnhancementForm from './EnhancementForm';
import AttachmentCertification from './EnhancementAttachment';
import ImplementationPlan1 from './EnhancementPlan1';
import ImplementationPlan2 from './EnhancementPlan2';
import FundingPlan from './EnhancementFundingPlan';
import OfficerList from '../../componentsform/OfficerList';
import InvoiceEnhancement from './EnhancementInvoice';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { styled } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SaveIcon from '@mui/icons-material/Save';

const steps = [
  'Select campaign settings',
  'Create an ad group',
  'Create an ad',
  'Step 4',
  'Step 5',
  'Step 6',
  'Step 7'
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

export default function EnhancementAdd() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completedSteps, setCompletedSteps] = React.useState<number[]>([]);
  const navigate = useNavigate();

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      navigate('/accounting/enhancement');
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
      
      </StepLabel>
    );
  };

  const getStepContent = (step: number) => {
    switch (step) {
      case 0:
        return <EnhancementForm />;
      case 1:
        return <AttachmentCertification />;
      case 2:
        return <ImplementationPlan1 />;
      case 3:
        return <ImplementationPlan2 />;
      case 4:
        return <FundingPlan />;
      case 5:
        return <OfficerList />;
      case 6:
        return <InvoiceEnhancement />;
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
