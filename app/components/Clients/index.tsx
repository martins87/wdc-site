import Image from "next/image";
import Cinesercla from "../../assets/icons/Cinesercla.png";
import MarraFit from "../../assets/icons/MarraFit.png";
import LibertyPay from "../../assets/icons/LibertyPay.png";

const Clients = () => {
  return (
    <div className="w-full h-[60vh] sm:h-[40vh] flex flex-col items-center justify-center sm:justify-start gap-y-6 text-custom_gray">
      <span className="w-4/5 sm:w-full font-[family-name:var(--font-manrope)] text-base text-center">
        Creating impactful experiences for amazing companies like yours:
      </span>
      <div className="flex flex-col sm:flex-row items-center gap-16 gap-y-10 mt-3">
        <Image className="w-32 tablet:w-44" src={Cinesercla} alt="Cinesercla" />
        <Image className="w-32 tablet:w-44" src={MarraFit} alt="Marrafit" />
        <Image
          className="w-32 tablet:w-44 opacity-75"
          src={LibertyPay}
          alt="LibertyPay"
        />
      </div>
    </div>
  );
};

export default Clients;
