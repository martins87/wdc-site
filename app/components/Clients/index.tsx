import Image from "next/image";

import Cinesercla from "../../assets/icons/Cinesercla-new.svg";
import MarraFit from "../../assets/icons/MarraFit-new.svg";
import LibertyPay from "../../assets/icons/LibertyPay.svg";

const Clients = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-y-6 -mt-32 md:-mt-20 pb-10 md:pb-20 ">
      <span className="w-4/5 sm:w-full font-[family-name:var(--font-poppins)] text-xl text-primary_text text-center font-semibold capitalize">
        Trusted by great companies
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
