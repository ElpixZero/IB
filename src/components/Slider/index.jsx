import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import PersonalSpaceSliderIcon1 from '../../img/PersonalSpaceSliderIcon1.svg';
import Button from '@material-ui/core/Button';

const tutorialSteps = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath: PersonalSpaceSliderIcon1,
    imgPath2:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
      imgPath3:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80',
    },
  {
    label: 'Bird',
    imgPath:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
      imgPath2:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80',
      imgPath3:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
    },
];

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: '100%',
    flexGrow: 1,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    height: 166,
    maxWidth: 115,
    overflow: 'hidden',
    display: 'block',
    width: '100%',
    margin: '0 auto',
    marginBottom: 15,
    marginTop: 20,
  },
  cont: {
    display: 'flex',
  },
  sliderCard: {
    height: 325,
    maxWidth: 303,
    width: '100%',
    backgroundColor: '#2B0077',
    borderRadius: 20,
    textAlign: 'center',
    marginRight: 30,
  },
  sliderTitle: {
    fontSize: 20,
    color: '#E13190',
    fontWeight: 700,
  },
  sliderDesc: {
    fontSize: 13,
    color: '#FFF',
    marginTop: 15,
    fontWeight: 600,
    lineHeight: '18px',
  }
}));

export default function TextMobileStepper() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  return (
    <div className={classes.root}>
      <div className={classes.cont}>
        <div className={classes.sliderCard}>
          <img
            className={classes.img}
            src={tutorialSteps[activeStep].imgPath}
            alt={tutorialSteps[activeStep].label}
          />
          <span className={classes.sliderTitle}>Расскажите о себе</span>
          <p className={classes.sliderDesc}>Заполните профиль дополнительной информацией, необходимой для дальнейшего сотрудничества</p>
        </div>
        <div className={classes.sliderCard}>
          <img
            className={classes.img}
            src={tutorialSteps[activeStep].imgPath}
            alt={tutorialSteps[activeStep].label}
          />
          <span className={classes.sliderTitle}>Расскажите о себе</span>
          <p className={classes.sliderDesc}>Заполните профиль дополнительной информацией, необходимой для дальнейшего сотрудничества</p>
        </div>
        <div className={classes.sliderCard}>
          <img
            className={classes.img}
            src={tutorialSteps[activeStep].imgPath}
            alt={tutorialSteps[activeStep].label}
          />
          <span className={classes.sliderTitle}>Расскажите о себе</span>
          <p className={classes.sliderDesc}>Заполните профиль дополнительной информацией, необходимой для дальнейшего сотрудничества</p>
        </div>
      </div>
      
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            Next
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            Back
          </Button>
        }
      />
    </div>
  );
}
