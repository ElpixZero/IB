import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import PersonalSpaceSliderIcon1 from '../../img/PersonalSpaceSliderIcon1.svg';
import PersonalSpaceSliderIcon2 from '../../img/PersonalSpaceSliderIcon2.svg';
import PersonalSpaceSliderIcon3 from '../../img/PersonalSpaceSliderIcon3.svg';
import PersonalSpaceSliderIcon4 from '../../img/PersonalSpaceSliderIcon4.svg';
import SwipeableViews from 'react-swipeable-views';

function ProgressMobileStepper(activeProgressStep) {
  const useStyles = makeStyles(theme => ({
    root: {
      marginBottom: 50,
    },
    progress: {
      width: '100%',
      height: 10,
      borderRadius: 10,
    },
    bar: {
      backgroundColor: '#EFEFEF',
    },
    colorPrimary: {
      backgroundColor: '#9E9E9E',
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.root}>
       <MobileStepper
        variant="progress"
        steps={4}
        position="static"
        activeStep={activeProgressStep}
        classes={classes}
      />
    </div>
  );
}

const tutorialSteps = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    title: 'Расскажите о себе',
    title2: 'Оставьте отзыв',
    title3: 'Следите за новостями',
    text: 'Заполните профиль дополнительной информацией, необходимой для дальнейшего сотрудничества',
    text2: 'Делитесь мнением, ставьте оценки, нам важно знать ваше мнение',
    text3: 'Узнайте о выходе наших продуктов, а также о передовых исследованиях в области информационной безопасности ',
    imgPath: PersonalSpaceSliderIcon1,
    imgPath2: PersonalSpaceSliderIcon2,
    imgPath3: PersonalSpaceSliderIcon3,
    },
  {
    label: 'Bird',
    title: 'Оставьте отзыв',
    title2: 'Следите за новостями',
    title3: 'Консультация',
    text: 'Делитесь мнением, ставьте оценки, нам важно знать ваше мнение',
    text2: 'Узнайте о выходе наших продуктов, а также о передовых исследованиях в области информационной безопасности ',
    text3: 'Мы готовы подобрать для вас наиболее оптимальное решение, исходя из ваших интересов',
    imgPath: PersonalSpaceSliderIcon2,
    imgPath2: PersonalSpaceSliderIcon3,
    imgPath3: PersonalSpaceSliderIcon4,
    },
];

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: '100%',
    flexGrow: 1,
    marginBottom: 30,
  },

  progress: {
    width: '100%',
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
    justifyContent: 'center',
    marginBottom: 15,
  },
  sliderCard: {
    padding: 20,
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

function SwipeableTextMobileStepper() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const [activeProgressStep, setActiveProgressStep] = React.useState(2);
  const maxSteps = tutorialSteps.length;

  return (
    <>
      <div className={classes.root}>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          enableMouseEvents
          onChangeIndex={(current, last) => {
            if (current > last) {
              setActiveProgressStep(3);
              setActiveStep(1);
            } else {
              setActiveProgressStep(2);
              setActiveStep(0);
            }
          }}
        >
          {tutorialSteps.map(step => (
            <div key={step.label}>
              <div className={classes.cont}>
                <div className={classes.sliderCard}>
                    <img
                      className={classes.img}
                      src={tutorialSteps[activeStep].imgPath}
                      alt={tutorialSteps[activeStep].label}
                    />
                    <span className={classes.sliderTitle}>{tutorialSteps[activeStep].title}</span>
                    <p className={classes.sliderDesc}>{tutorialSteps[activeStep].text}</p>
                </div>
                <div className={classes.sliderCard}>
                  <img
                    className={classes.img}
                    src={tutorialSteps[activeStep].imgPath2}
                    alt={tutorialSteps[activeStep].label}
                  />
                  <span className={classes.sliderTitle}>{tutorialSteps[activeStep].title2}</span>
                  <p className={classes.sliderDesc}>{tutorialSteps[activeStep].text2}</p>
                </div>
                <div className={classes.sliderCard}>
                  <img
                    className={classes.img}
                    src={tutorialSteps[activeStep].imgPath3}
                    alt={tutorialSteps[activeStep].label}
                  />
                  <span className={classes.sliderTitle}>{tutorialSteps[activeStep].title3}</span>
                  <p className={classes.sliderDesc}>{tutorialSteps[activeStep].text3}</p>
                </div>
              </div>
            </div>
          ))}
        </SwipeableViews>
        <MobileStepper
          steps={maxSteps}
          variant="text"
          activeStep={activeStep}
        />
      </div>
      {ProgressMobileStepper(activeProgressStep)}
    </>
  );
}

export default SwipeableTextMobileStepper;