import Image from "next/image";
import Link from "next/link";

import NobleCraftLogo from "../../assets/icons/Logo.png";

const Logo = () => {
  return (
    <div className="flex flex-1 text-white font-[family-name:var(--font-manrope)]">
      <Link className="flex flex-col items-center" href="/">
        <Image
          className="w-10 sm:w-14 tablet:w-12"
          src={NobleCraftLogo}
          alt="crown icon"
        />
        <div className="hidden tablet:flex flex-col items-center justify-start mt-0.5 text-white font-[family-name:var(--font-montserrat)] text-sm font-bold tracking-wider">
          <span>NOBLE</span>
          <span className="-mt-[6px]">CRAFT</span>
        </div>
      </Link>
    </div>
  );
};

export default Logo;
