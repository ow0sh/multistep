import Main from '../main';
import Nav from '../nav';

const Final = () => {
  return (
    <Main>
      <>
        <Nav active={4} />
        <main className="flex flex-col justify-center mx-auto">
          <img
            src="icon-thank-you.svg"
            className="w-[80px] h-[80px] mx-auto mb-[30px]"
          />
          <h1 className="font-bold text-marine-blue text-3xl text-center mb-[10px]">
            Thank you!
          </h1>
          <p className="font-default text-cool-gray w-[450px] text-center">
            Thanks for confirming your subscription! We hope you have fun using
            our platform. If you ever need support, please feel free to email us
            at support@loremgaming.com
          </p>
        </main>
      </>
    </Main>
  );
};

export default Final;
