import { useEffect } from 'react';

interface LiProps {
  stepNum: number;
  content: string;
}

const Li = ({ stepNum, content }: LiProps) => {
  return (
    <li className="flex content-center mb-[30px]">
      <div
        id={`nav${stepNum}`}
        className="flex font-default hover:text-black hover:bg-light-blue my-auto text-white font-semibold flex-col justify-center content-center flex-wrap w-[40px] h-[40px] border-white border-[1px] rounded-full"
      >
        {stepNum}
      </div>
      <section className="flex flex-col ml-[10px]">
        <span className="text-sm text-light-gray font-default">
          STEP {stepNum}
        </span>
        <h1 className="text-white font-bold font-default">{content}</h1>
      </section>
    </li>
  );
};

interface Props {
  active: number;
}

const Nav = ({ active }: Props) => {
  useEffect(() => {
    document
      .getElementById(`nav${active}`)
      ?.classList.add('bg-light-blue', 'text-black');
  }, []);

  return (
    <nav className="w-[270px] h-[560px] rounded-lg mt-[20px] ml-[20px] bg-sidebar-desktop">
      <ul className="pl-[35px] pt-[35px]">
        <Li stepNum={1} content={'YOUR INFO'} />
        <Li stepNum={2} content={'SELECT PLAN'} />
        <Li stepNum={3} content={'ADD-ONS'} />
        <Li stepNum={4} content={'SUMMARY'} />
      </ul>
    </nav>
  );
};

export default Nav;
