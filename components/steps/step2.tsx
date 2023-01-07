import Main from '../main';
import Nav from '../nav';
import Header from '../header';
import Footer from '../footer';
import { useEffect } from 'react';
import Card from '../cardstp2';

import { Switch } from '@mui/material';

import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { addPrice } from '../../redux/slices/priceSlice';
import { setIsYearly } from '../../redux/slices/isYearlySlice';
import { setCurrentCard } from '../../redux/slices/currentCard';

interface Props {
  changeStep: (params: any) => void;
}

const Step2 = ({ changeStep }: Props) => {
  const { isYearly } = useAppSelector((state) => state.isYearly);
  const { currentCard } = useAppSelector((state) => state.currentCard);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (currentCard)
      document.getElementById('footerbutton')?.classList.remove('opacity-50');
    else document.getElementById('footerbutton')?.classList.add('opacity-50');
  }, [currentCard]);

  useEffect(() => {
    for (let i = 1; i < 4; i++) {
      document
        .getElementById(`card${i}`)
        ?.classList.remove('border-marine-blue', 'bg-magnolia');
    }

    document
      .getElementById(currentCard)
      ?.classList.add('border-marine-blue', 'bg-magnolia');
  }, [currentCard]);

  function handlerClick(price: number, id: string) {
    dispatch(addPrice({ price: price }));
    dispatch(setCurrentCard({ currentCard: id }));
  }

  function submit(value: number) {
    if (!currentCard) return;
    changeStep(value);
  }

  return (
    <Main>
      <>
        <section className="mr-[100px]">
          <Nav active={2} />
        </section>
        <section className="flex flex-col w-full mr-[100px] mb-[15px]">
          <Header
            heading="Select your plan"
            content="You have the option of monthly or yearly billing"
          />
          <div className="mt-[40px] h-full">
            <ul className="flex justify-between">
              <li>
                <Card
                  handlerClick={handlerClick}
                  image={'icon-arcade.svg'}
                  content={'Arcade'}
                  price={9}
                  isYearly={isYearly ? true : false}
                />
              </li>
              <li>
                <Card
                  handlerClick={handlerClick}
                  image={'icon-advanced.svg'}
                  content={'Advanced'}
                  price={12}
                  isYearly={isYearly ? true : false}
                />
              </li>
              <li>
                <Card
                  handlerClick={handlerClick}
                  image={'icon-pro.svg'}
                  content={'Pro'}
                  price={15}
                  isYearly={isYearly ? true : false}
                />
              </li>
            </ul>

            <div className="flex justify-center content-center flex-col flex-wrap h-[50px] bg-magnolia rounded-lg mt-[40px]">
              <span
                className={
                  isYearly
                    ? 'font-default text-cool-gray'
                    : 'font-default text-marine-blue'
                }
              >
                Monthly
              </span>
              <Switch
                onClick={() => dispatch(setIsYearly())}
                checked={isYearly}
                sx={{
                  '& .MuiSwitch-track': {
                    background: '#02295a',
                    opacity: 1,
                  },
                  '&.MuiSwitch-thumb': {
                    background: 'white',
                  },
                  '& .MuiSwitch-switchBase': {
                    '&.Mui-checked': {
                      '& + .MuiSwitch-track': {
                        backgroundColor: '#02295a',
                        opacity: 1,
                      },
                      '& .MuiSwitch-thumb': {
                        background: 'white',
                      },
                    },
                  },
                }}
              />
              <span
                className={
                  isYearly
                    ? 'font-default text-marine-blue'
                    : 'font-default text-cool-gray'
                }
              >
                Yearly
              </span>
            </div>
          </div>
          <Footer isHidden={false} submit={submit} />
        </section>
      </>
    </Main>
  );
};

export default Step2;
