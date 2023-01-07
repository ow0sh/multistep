import { Provider } from 'react-redux';
import store from '../redux/store';

import { useState } from 'react';

import Step1 from '../components/steps/step1';
import Step2 from '../components/steps/step2';
import Step3 from '../components/steps/step3';
import Step4 from '../components/steps/step4';
import Final from '../components/steps/final';

export default function Home() {
  const steps = [
    <Step1 changeStep={changeStep} key={'step1'} />,
    <Step2 changeStep={changeStep} key={'step2'} />,
    <Step3 changeStep={changeStep} key={'step3'} />,
    <Step4 changeStep={changeStep} key={'step4'} />,
    <Final key={'final'} />,
  ];
  const [currentStep, setCurrentStep] = useState(0);

  function changeStep(value: number) {
    setCurrentStep((currentStep) => currentStep + value);
  }

  return <Provider store={store}>{steps[currentStep]}</Provider>;
}
