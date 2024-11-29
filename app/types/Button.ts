export type ButtonProps = {
  label: string;
  outlined?: boolean;
  size?: "normal" | "big";
  className?: string;
  onClick?: () => void;
};