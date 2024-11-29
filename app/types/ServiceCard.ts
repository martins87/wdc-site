import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type ServiceCardProps = {
  icon: StaticImport;
  label: string;
  description: string;
};