import { FC } from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = {
  label: string;
  outlined?: boolean;
  size?: "normal" | "big";
  className?: string;
  onClick?: () => void;
};

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
        "flex items-center justify-center text-primary_text font-[family-name:var(--font-montserrat)] font-extrabold hover:cursor-pointer",
        outlined
          ? "border-2 border-main_color bg-inherit hover:bg-main_color hover:text-white transition-all duration-300"
          : "bg-main_color text-white",
        size === "big"
          ? "w-[232px] sm:w-[306px] h-[59px] sm:h-[86px] rounded-[10px] sm:rounded-[25px] text-[22px] sm:text-[28px]"
          : "w-[137px] sm:w-[200px] h-[36px] sm:h-[51px] rounded-[10px] sm:rounded-2xl text-[14px] sm:text-[18px]",
        className
      )}
      onClick={onClick}
    >
      {label}
    </div>
  );
};

export default Button;
