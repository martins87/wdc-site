import Image from "next/image";
// import Cinesercla from "../../assets/icons/Cinesercla.svg";
// import MarraFit from "../../assets/icons/MarraFit.svg";
import Cinesercla from "../../assets/icons/Cinesercla.png";
import MarraFit from "../../assets/icons/MarraFit.png";
import LibertyPay from "../../assets/icons/LibertyPay.png";

const Clients = () => {
  return (
    <div className="flex flex-col gap-y-6 text-custom_gray">
      <span className="font-[family-name:var(--font-manrope)] text-base">
        Creating impactful experiences for amazing companies like yours:
      </span>
      <div className="flex gap-16">
        <Image src={Cinesercla} alt="Cinesercla" />
        <Image src={MarraFit} alt="Marrafit" />
        <Image className="opacity-75" src={LibertyPay} alt="LibertyPay" />
      </div>
    </div>
  );
};

export default Clients;
