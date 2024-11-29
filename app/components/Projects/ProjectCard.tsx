import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

import Typography from "../Typography";
import { ProjectCardProps } from "@/app/types/ProjectCard";

const ProjectCard: FC<ProjectCardProps> = ({ title, service, image, src }) => {
  return (
    <Link
      className="w-full flex flex-col gap-y-4 overflow-hidden hover:cursor-pointer"
      href={src}
    >
      <div
        className={twMerge(
          "w-full flex items-center justify-center overflow-hidden rounded-3xl"
        )}
      >
        <Image
          className="sm:h-[440px] md:h-[512px] tablet:h-[400px]"
          src={image}
          alt="project"
        />
      </div>
      <Typography
        className="relative w-full flex flex-col items-start justify-center gap-2"
        font="poppins"
        weight="normal"
      >
        <span className="font-normal text-sm sm:text-base text-custom_gray_2/80">
          {service}
        </span>
        <span className="font-bold text-xl sm:text-2xl text-primary_text">
          {title}
        </span>
      </Typography>
    </Link>
  );
};

export default ProjectCard;
