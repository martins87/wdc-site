import { FC } from "react";
import { twMerge } from "tailwind-merge";

import { ButtonProps } from "../types/Button";

const Button: FC<ButtonProps> = ({
  label,
  outlined,
  size = "normal",
  className,
  onClick,
}) => {
  return (
    <div
      className={twMerge(
        "flex items-center justify-center hover:cursor-pointer",
        outlined
          ? "tablet:border-2 tablet:border-main_color bg-main_color tablet:bg-inherit tablet:hover:bg-main_color text-white tablet:text-primary_text tablet:hover:text-white transition-all duration-300"
          : "bg-main_color text-white",
        size === "big"
          ? "w-[232px] sm:w-[306px] h-[59px] sm:h-[86px] rounded-2xl text-[22px] sm:text-[28px]"
          : "w-[137px] sm:w-[200px] h-[36px] sm:h-[51px] rounded-[10px] sm:rounded-2xl text-[14px] sm:text-[18px]",
        className
      )}
      onClick={onClick}
    >
      <span className="font-[family-name:var(--font-montserrat)] font-semibold">
        {label}
      </span>
    </div>
  );
};

export default Button;
