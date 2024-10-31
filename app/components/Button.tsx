import { FC } from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = {
  label: string;
  outlined?: boolean;
  size?: "normal" | "big";
};

const Button: FC<ButtonProps> = ({ label, outlined, size = "normal" }) => {
  return (
    <div
      className={twMerge(
        "flex items-center justify-center text-white font-[family-name:var(--font-montserrat)] hover:cursor-pointer",
        outlined
          ? "border-2 border-main_color bg-inherit hover:bg-main_color"
          : "bg-main_color",
        size === "big"
          ? "w-[306px] h-[86px] rounded-[25px] text-[28px]"
          : "w-[200px] h-[51px] rounded-2xl text-[18px]"
      )}
    >
      {label}
    </div>
  );
};

export default Button;
