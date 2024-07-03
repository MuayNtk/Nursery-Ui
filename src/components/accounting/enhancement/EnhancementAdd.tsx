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

const steps = [
  'Select campaign settings',
  'Create an ad group',
  'Create an ad',
  'Step 4',
  'Step 5',
  'Step 6',
  'Step 7'
];

export default function EnhancementAdd() {
  const [activeStep, setActiveStep] = React.useState(0);
  const navigate = useNavigate();

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      navigate('/accounting/enhancement');
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
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
      <ContentMain>
        <Box sx={{ width: '100%' }}>
          <Stepper activeStep={activeStep}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
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
              <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                <Button
                  color="inherit"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mr: 1 }}
                >
                  Back
                </Button>
                <Box sx={{ flex: '1 1 auto' }} />
                <Button onClick={handleNext}>
                  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </Box>
      </ContentMain>
    </>
  );
}
