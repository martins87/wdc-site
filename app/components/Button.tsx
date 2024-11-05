import { FC } from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = {
  label: string;
  outlined?: boolean;
  size?: "normal" | "big";
  className?: string;
};

const Button: FC<ButtonProps> = ({
  label,
  outlined,
  size = "normal",
  className,
}) => {
  return (
    <div
      className={twMerge(
        "flex items-center justify-center text-white font-[family-name:var(--font-montserrat)] hover:cursor-pointer",
        outlined
          ? "border-2 border-main_color bg-inherit hover:bg-main_color"
          : "bg-main_color",
        size === "big"
          ? "w-[232px] sm:w-[306px] h-[59px] sm:h-[86px] rounded-[10px] sm:rounded-[25px] text-[22px] sm:text-[28px]"
          : "w-[137px] sm:w-[200px] h-[36px] sm:h-[51px] rounded-[10px] sm:rounded-2xl text-[14px] sm:text-[18px]",
        className
      )}
    >
      {label}
    </div>
  );
};

export default Button;
