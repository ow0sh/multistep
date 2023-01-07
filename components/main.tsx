import { FC } from 'react';

interface Props {
  children: JSX.Element;
}

const Main: FC<Props> = ({ children }) => {
  return (
    <main className="w-[1000px] h-[600px] shadow-xl bg-white rounded-2xl flex">
      {children}
    </main>
  );
};

export default Main;
