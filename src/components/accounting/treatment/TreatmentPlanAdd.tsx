import ContentMain from '../../content/Content';
import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { styled } from '@mui/material';
import WageImprovementOne from './WageImprovementOne';
import WageAdjustmentsOne from './WageAdjustmentsOne';
import ResultsEarningsListOne from './ResultsEarningsListOne';
import WageImprovementTwo from './WageImprovementTwo';
import ResultsEarningsListTwo from './ResultsEarningsListTwo';
import DetailedStatement from './DetailedStatement';
import ImprovementStaff from './ImprovementStaff';
import WageImprovementThree from './WageImprovementThree';
import WageAdjustmentsThree from './WageAdjustmentsThree';
import ResultsEarningsListThree from './ResultsEarningsListThree';

const steps = [
  '①【様式５】計画書Ⅰ',
  '②【様式５別添１】賃金改善明細書',
  '③【様式５別添２】一覧表',
  '④【様式７】計画書Ⅱ',
  '⑤【様式７別添１】内訳書',
  '⑥【様式７別添２】一覧表',
  '⑦ 処遇Ⅱ加算対象職員名簿',
  '⑧【様式９】計画書Ⅲ',
  '⑨【様式９別添１】賃金改善明細書（職員別）',
  '⑩【様式９別添２】一覧表',
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

export default function TreatmentPlanAdd() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completedSteps, setCompletedSteps] = React.useState<number[]>([]);
  const navigate = useNavigate();

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      navigate('/accounting/treatmentplan');
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
      <StepLabel StepIconProps={{ style: stepIconStyle }}/>
    );
  };

  const getStepContent = (step: number) => {
    switch (step) {
      case 0:
        return <WageImprovementOne />;
      case 1:
        return <WageAdjustmentsOne />;
      case 2:
        return <ResultsEarningsListOne />;
      case 3:
        return <WageImprovementTwo />;
      case 4:
        return <DetailedStatement />;
      case 5:
        return <ResultsEarningsListTwo />;
      case 6:
        return <ImprovementStaff />;
      case 7:
        return <WageImprovementThree />;
      case 8:
        return <WageAdjustmentsThree />;
      case 9:
        return <ResultsEarningsListThree />;

      default:
        return 'Unknown step';
    }
  };

  return (
    <>
      <ContentMain  className="flex flex-col min-h-screen">
      
          <Stepper activeStep={activeStep} connector={<ColorlibConnector />}>
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
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{ mr: 1 , backgroundColor: '#1976d2',color: 'white',}}
                  >
                    戻る
                  </Button>
                  <Button
                    variant="contained"
                    onClick={handleNext}
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
