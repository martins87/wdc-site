import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

import NobleCraftLogo from "../../assets/icons/Logo.png";

type LogoProps = {
  onClick?: () => void;
  noText?: boolean;
};

const Logo: FC<LogoProps> = ({ onClick, noText }) => {
  return (
    <div
      className="flex  text-primary_text font-[family-name:var(--font-manrope)]"
      onClick={onClick}
    >
      <Link className="flex flex-col items-center" href="/">
        <Image
          className="w-10 sm:w-14 tablet:w-12"
          src={NobleCraftLogo}
          alt="crown icon"
        />
        {!noText && (
          <div className="hidden tablet:flex flex-col items-center justify-start mt-[0.5px] font-[family-name:var(--font-montserrat)] text-sm font-bold tracking-wider">
            <span>NOBLE</span>
            <span className="-mt-[8px]">CRAFT</span>
          </div>
        )}
      </Link>
    </div>
  );
};

export default Logo;
