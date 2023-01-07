import Header from '../header';
import Main from '../main';
import Nav from '../nav';

import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { useEffect, useState } from 'react';

interface Props {
  changeStep: (params: any) => void;
}

const Step4 = ({ changeStep }: Props) => {
  const { price } = useAppSelector((state) => state.price);
  const { isYearly } = useAppSelector((state) => state.isYearly);
  const { currentCard } = useAppSelector((state) => state.currentCard);
  const { addons } = useAppSelector((state) => state.addons);

  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [type, setType] = useState<string>('');

  let typePrice: number = 0;
  let addonPrice: number = 0;

  useEffect(() => {
    typePrice = 0;
    addonPrice = 0;

    addons.forEach((addon) => {
      if (addon === 'Online service') {
        addonPrice += 1;
      } else {
        addonPrice += 2;
      }
    });

    switch (currentCard) {
      case 'card1':
        setType('Arcade');
        typePrice = 9;
        break;
      case 'card2':
        setType('Advanced');
        typePrice = 12;
        break;
      case 'card3':
        setType('Pro');
        typePrice = 15;
        break;
    }

    isYearly
      ? setTotalPrice((typePrice + addonPrice) * 10)
      : setTotalPrice(typePrice + addonPrice);
  }, []);

  function nextStep(value: number) {
    changeStep(value);
  }

  return (
    <Main>
      <>
        <section className="mr-[100px]">
          <Nav active={4} />
        </section>
        <section className="flex flex-col w-full mr-[100px] mb-[15px]">
          <Header
            heading="Finishing up"
            content="Double-check everything looks OK before confirming."
          />
          <main className="h-full">
            <div className="bg-gray-50 p-[20px] rounded-lg min-h-[70px] mt-[30px] ">
              <header className="flex justify-between border-b-[1px] pb-[20px] mb-[20px]">
                <section>
                  <h1 className="text-marine-blue font-bold font-default ">
                    {type} ({isYearly ? 'Yearly' : 'Monthly'})
                  </h1>
                  <button
                    className="underline text-cool-gray"
                    onClick={() => nextStep(-2)}
                  >
                    Change
                  </button>
                </section>
                <span className="flex flex-col justify-center text-marine-blue font-default font-bold">
                  {isYearly ? `$${price * 10}/yr` : `$${price}/mo`}
                </span>
              </header>
              <ul>
                {addons.map((addon) => {
                  let price = 2;
                  if (addon === 'Online service') price = 1;
                  return (
                    <li
                      key={addon}
                      className="flex justify-between font-default mt-[10px]"
                    >
                      <span className="text-md text-cool-gray">{addon}</span>
                      <span className="text-marine-blue">
                        {isYearly ? `+$${price * 10}/yr` : `+$${price}/mo`}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="flex justify-between mt-[15px] px-[30px] font-default">
              <span className="text-cool-gray">
                Total ({isYearly ? 'per year' : 'per month'})
              </span>
              <span className="text-purplish-blue font-bold text-xl">
                {isYearly ? `$${totalPrice}/yr` : `$${totalPrice}/mo`}
              </span>
            </div>
          </main>
          <footer className="flex flex-[0_0_auto] justify-between">
            <button onClick={() => nextStep(-1)} className="text-cool-gray">
              Go back
            </button>

            <button
              id="footerbutton"
              onClick={() => nextStep(1)}
              className="bg-purplish-blue w-[120px] h-[50px] text-white rounded-lg font-default font-bold"
            >
              Confirm
            </button>
          </footer>
        </section>
      </>
    </Main>
  );
};

export default Step4;
