import { useAppSelector, useAppDispatch } from '../redux/hooks';
import { addAddOn, removeAddOn } from '../redux/slices/addonSlice';
import { useEffect, useRef, useState } from 'react';

import { Checkbox } from '@mui/material';

interface Props {
  heading: string;
  content: string;
  price: number;
  isYearly: boolean;
}

const AddOn = ({ heading, content, price, isYearly }: Props) => {
  const [active, setActive] = useState<boolean>(false);
  const { addons } = useAppSelector((state) => state.addons);
  const dispatch = useAppDispatch();

  const li = useRef<HTMLLIElement>(null);

  useEffect(() => {
    addons.includes(heading) ? setActive(true) : setActive(false);
  }, [addons]);

  useEffect(() => {
    active
      ? li.current?.classList.add('border-purplish-blue', 'bg-magnolia')
      : li.current?.classList.remove('border-purplish-blue', 'bg-magnolia');
  }, [active]);

  function handlerClick() {
    active ? dispatch(removeAddOn(heading)) : dispatch(addAddOn(heading));
  }

  return (
    <li
      ref={li}
      onClick={handlerClick}
      className="flex h-[84px] border-[1px] rounded-lg hover:border-purplish-blue my-[15px] cursor-pointer"
    >
      <div className="mx-[15px] my-auto ">
        <Checkbox
          checked={active}
          onChange={() => {
            return;
          }}
        />
      </div>
      <section className="flex justify-between w-full h-full">
        <div className="flex flex-col my-auto">
          <h1 className="font-default text-marine-blue text-lg">{heading}</h1>
          <span className="font-default text-cool-gray">{content}</span>
        </div>
        <span className="font-default text-purplish-blue mr-[15px] my-auto">
          {isYearly ? `+$${price * 10}/yr` : `+$${price}/mo`}
        </span>
      </section>
    </li>
  );
};

export default AddOn;
