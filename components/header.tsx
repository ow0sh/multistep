import { useAppSelector } from '../redux/hooks';

interface HeaderProps {
  heading: string;
  content: string;
}

const Header = ({ heading, content }: HeaderProps) => {
  const userData = useAppSelector((state) => state.userData);
  const { price } = useAppSelector((state) => state.price);
  const { isYearly } = useAppSelector((state) => state.isYearly);
  const { currentCard } = useAppSelector((state) => state.currentCard);
  const { addons } = useAppSelector((state) => state.addons);

  function handler() {
    console.log(userData);
    console.log('price: ' + price);
    console.log('isYearly: ' + isYearly);
    console.log('currentCard: ' + currentCard);
    console.log('addons: ' + addons);
  }

  return (
    <header className="mt-[50px]" onClick={handler}>
      <h1 className="font-bold text-3xl text-marine-blue font-default mb-[10px]">
        {heading}
      </h1>
      <span className="font-default text-cool-gray">{content}</span>
    </header>
  );
};

export default Header;
