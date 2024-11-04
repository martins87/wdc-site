import { FC } from "react";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

import ArrowUp from "../../assets/icons/ArrowUp.svg";
import { twMerge } from "tailwind-merge";

type ProjectCardProps = {
  title: string;
  description: string;
  image: string | StaticImport;
  orientation: "left" | "right";
};

const ProjectCard: FC<ProjectCardProps> = ({
  title,
  description,
  image,
  orientation,
}) => {
  return (
    <div className="w-full h-[402px] flex rounded-3xl bg-card_background overflow-hidden">
      <div
        className={twMerge(
          "w-1/2 flex items-center justify-center bg-gray-500",
          orientation === "left" ? "order-first" : "order-last"
        )}
      >
        <Image
          className="min-w-full min-h-full object-cover"
          src={image}
          alt="cinesercla project"
        />
      </div>
      <div className="relative w-1/2 flex flex-col items-start justify-center gap-2 p-10 font-[family-name:var(--font-manrope)] text-white">
        <div className="absolute top-10 right-10">
          <Image src={ArrowUp} alt="Arrow up" />
        </div>
        <span className="text-4xl font-extrabold">{title}</span>
        <span className="text-[22px]">{description}</span>
      </div>
    </div>
  );
};

export default ProjectCard;
