interface FooterParams {
  submit: (params: any) => void;
  isHidden?: boolean;
}

const Footer = ({ submit, isHidden = false }: FooterParams) => {
  return (
    <footer className="flex flex-[0_0_auto] justify-between">
      {isHidden ? (
        <div></div>
      ) : (
        <button onClick={() => submit(-1)} className="text-cool-gray">
          Go back
        </button>
      )}
      <button
        id="footerbutton"
        onClick={() => submit(1)}
        className="bg-marine-blue w-[120px] h-[50px] text-white rounded-lg font-default font-bold opacity-50"
      >
        Next step
      </button>
    </footer>
  );
};

export default Footer;
