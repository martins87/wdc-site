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
    <div className="w-full h-[402px] flex flex-col tablet:flex-row rounded-3xl bg-card_background overflow-hidden">
      <div
        className={twMerge(
          "w-full tablet:w-1/2 h-1/2 tablet:h-full flex items-center justify-center overflow-hidden",
          orientation === "left" ? "order-first" : "order-last"
        )}
      >
        <Image
          className="min-w-full min-h-full object-cover"
          src={image}
          alt="cinesercla project"
        />
      </div>
      <div className="relative w-full tablet:w-1/2 h-1/2 tablet:h-full flex flex-col items-start justify-center gap-2 p-10 font-[family-name:var(--font-manrope)] text-white">
        <div className="absolute top-8 tablet:top-10 right-8 tablet:right-10 w-4 sm:w-6 tablet:w-8">
          <Image src={ArrowUp} alt="Arrow up" />
        </div>
        <span className="text-2xl sm:text-3xl tablet:text-4xl font-extrabold">
          {title}
        </span>
        <span className="text-sm sm:text-base tablet:text-xl">
          {description}
        </span>
      </div>
    </div>
  );
};

export default ProjectCard;
