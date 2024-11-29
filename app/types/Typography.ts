import { ReactNode } from "react";

export type Font = "poppins" | "montserrat" | "manrope";

export type Weight =
  | "extralight"
  | "light"
  | "normal"
  | "medium"
  | "semibold"
  | "bold"
  | "extrabold"
  | "black";

export type TypographyProps = {
  font?: Font;
  weight?: Weight;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
};