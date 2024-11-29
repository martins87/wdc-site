import { FC } from "react";
import { twMerge } from "tailwind-merge";

import { TypographyProps } from "../types/Typography";

const Typography: FC<TypographyProps> = ({
  font,
  weight = "normal",
  children,
  className,
  onClick,
}) => {
  return (
    <span
      className={twMerge(
        `font-[family-name:var(--font-${font})] font-${weight}`,
        className
      )}
      onClick={onClick}
    >
      {children}
    </span>
  );
};

export default Typography;
