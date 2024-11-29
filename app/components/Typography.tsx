import { FC } from "react";
import { twMerge } from "tailwind-merge";

import { TypographyProps } from "../types/Typography";

const Typography: FC<TypographyProps> = ({
  font,
  weight,
  children,
  className,
  onClick,
}) => {
  return (
    <span
      className={twMerge(
        className,
        font ? `font-[family-name:var(--font-${font})]` : "",
        weight ? `font-${weight}` : ""
      )}
      onClick={onClick}
    >
      {children}
    </span>
  );
};

export default Typography;
