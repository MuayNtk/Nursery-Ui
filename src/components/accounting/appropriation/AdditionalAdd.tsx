import ContentMain from '../../content/Content';
import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import AdditionalForm from './AdditionalForm';
import CalculationStudentAge from './CalculationStudentAge';
import CalculationStaff from './CalculationStaff';


const steps = [
  '【提出用】加算申請書（仮）',
  '（参考）【処遇Ⅱ】加算対象職員数計算表',
  '（参考）【処遇Ⅱ・Ⅲ】平均年齢別児童数計算表',
];

export default function AdditionalAdd() {
  const [activeStep, setActiveStep] = React.useState(0);
  const navigate = useNavigate();

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      navigate('/accounting/appropriation/additional');
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
        return <AdditionalForm />;
      case 1:
        return <CalculationStaff />;
      case 2:
        return <CalculationStudentAge />;
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
