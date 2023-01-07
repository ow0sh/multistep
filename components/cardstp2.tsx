interface CardProps {
  image: string;
  content: string;
  price: number;
  isYearly: boolean;
  handlerClick: (price: number, id: string) => any;
}

const Card = ({ image, content, price, isYearly, handlerClick }: CardProps) => {
  let id: string = 'card1';

  switch (image) {
    case 'icon-arcade.svg':
      id = 'card1';
      break;
    case 'icon-advanced.svg':
      id = 'card2';
      break;
    case 'icon-pro.svg':
      id = 'card3';
      break;
  }

  return (
    <div
      id={id}
      onClick={() => handlerClick(price, id)}
      className="flex flex-col justify-between p-[10px] w-[140px] min-h-[160px] border-[1px] rounded-lg cursor-pointer"
    >
      <img src={image} className={'w-[40px] h-[40px] mb-[50px]'} />
      <section>
        <h1 className="font-default text-marine-blue font-bold">{content}</h1>
        <span className="font-default text-cool-gray text-sm">
          {isYearly ? `$${price * 10}/yr` : `$${price}/mo`}
        </span>
        {isYearly && (
          <p className="text-marine-blue text-sm font-default">2 months free</p>
        )}
      </section>
    </div>
  );
};

export default Card;
