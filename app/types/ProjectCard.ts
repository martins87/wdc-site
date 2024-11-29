import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type ProjectCardProps = {
  service: string;
  title: string;
  image: string | StaticImport;
  src: string;
};