import Main from '../main';
import Nav from '../nav';
import Header from '../header';
import Footer from '../footer';

import AddOn from '../add-on';

import { useAppSelector } from '../../redux/hooks';
import { useEffect } from 'react';

interface Props {
  changeStep: (params: any) => void;
}

const Step3 = ({ changeStep }: Props) => {
  const { isYearly } = useAppSelector((state) => state.isYearly);

  useEffect(() => {
    document.getElementById('footerbutton')?.classList.remove('opacity-50');
  }, []);

  function nextStep(value: number) {
    changeStep(value);
  }

  return (
    <Main>
      <>
        <section className="mr-[100px]">
          <Nav active={3} />
        </section>
        <section className="flex flex-col w-full mr-[100px] mb-[15px]">
          <Header
            heading={'Pick add-ons'}
            content={'Add-ons help enchance your gaming experience'}
          />
          <ul className="mt-[20px] h-full">
            <AddOn
              heading="Online service"
              content="Access to multiplayer games"
              price={1}
              isYearly={isYearly}
            />
            <AddOn
              heading="Larger storage"
              content="Extra 1TB of cloud save"
              price={2}
              isYearly={isYearly}
            />
            <AddOn
              heading="Customizable profile"
              content="Custom theme on your profile"
              price={2}
              isYearly={isYearly}
            />
          </ul>
          <Footer submit={nextStep} />
        </section>
      </>
    </Main>
  );
};

export default Step3;
