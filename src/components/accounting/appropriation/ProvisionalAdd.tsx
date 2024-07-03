import ContentMain from '../../content/Content';
import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom'; 
import ServiceHoliday from './ServiceHoliday';
import SummaryForm from './SummaryForm';
import DepreciationExpenses from './DepreciationExpenses';
import RentAddition from './RentAddition';
import BonusForm from './BonusForm';
import FacilityDirector from './FacilityDirector';
import HolidayForm from './HolidayForm';
import HireExpenses from './HireExpenses';
import NutritionForm from './NutritionForm';
import FacilityExpenses from './FacilityExpenses';
import ElderlyBenefits from './ElderlyBenefits';
import AdditionalFees from './AdditionalFees';


const steps = [
  '【提出用】加算申請書（仮）',
  '（参考）【処遇Ⅱ】加算対象職員数計算表',
  '（参考）【処遇Ⅱ・Ⅲ】平均年齢別児童数計算表',
  'Step 4',
  'Step 5',
  'Step 6',
  'Step 7',
  'Step 8',
  'Step 9',
  'Step 10',
  'Step 11',
  'Step 12',
];

export default function ProvisionalAdd() {
  const [activeStep, setActiveStep] = React.useState(0);
  const navigate = useNavigate();

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      navigate('/accounting/appropriation/provisional');
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
            return <SummaryForm />;
      case 1:
            return <ServiceHoliday />;
      case 2:
            return <DepreciationExpenses />;
      case 3:
            return <RentAddition />;
      case 4:
            return <BonusForm />;  
      case 5:
            return <FacilityDirector />;  
      case 6:
            return <HolidayForm />;  
      case 7:
            return <HireExpenses />;  
      case 8:
            return <NutritionForm />;       
      case 9:
            return <ElderlyBenefits />;  
      case 10:
            return <FacilityExpenses />;  
      case 11:
            return <AdditionalFees />;  
      default:
        return 'Unknown step';
    }
  };

  return (
    <>
      <ContentMain>
        <Box sx={{ width: '100%' }}>
          <Stepper activeStep={activeStep} >
            {steps.map((label) => (
              <Step key={label}>
                {/* <StepLabel>{label}</StepLabel> */}
                <StepLabel></StepLabel>
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
