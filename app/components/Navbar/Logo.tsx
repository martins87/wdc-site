import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

import Typography from "../Typography";
import NobleCraftLogo from "../../assets/icons/Logo.png";
import { LogoProps } from "@/app/types/Logo";

const Logo: FC<LogoProps> = ({ onClick, noText }) => {
  return (
    <Typography className="flex  text-primary_text " onClick={onClick}>
      <Link className="flex flex-col items-center" href="/">
        <Image
          className="w-10 sm:w-14 tablet:w-12"
          src={NobleCraftLogo}
          alt="crown icon"
        />
        {!noText && (
          <Typography
            className="hidden tablet:flex flex-col items-center justify-start mt-[0.5px] text-sm tracking-wider"
            font="montserrat"
            weight="bold"
          >
            <span>NOBLE</span>
            <span className="-mt-[8px]">CRAFT</span>
          </Typography>
        )}
      </Link>
    </Typography>
  );
};

export default Logo;
