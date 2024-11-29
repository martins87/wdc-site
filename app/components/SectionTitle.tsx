import { FC } from "react";

import Typography from "./Typography";
import { SectionTitleProps } from "../types/SectionTitle";

const SectionTitle: FC<SectionTitleProps> = ({
  inWhite,
  inRed,
  description,
}) => {
  return (
    <div className="w-full flex flex-col gap-y-4 items-start justify-start mb-10 text-primary_text">
      <Typography
        className="min-w-fit flex items-start mobile:items-center gap-2 text-3xl tablet:text-4xl"
        font="montserrat"
        weight="extrabold"
      >
        <Typography className="min-w-fit">{inWhite}</Typography>
        <Typography className="min-w-fit text-main_color" font="montserrat">
          {inRed}
        </Typography>
      </Typography>
      <Typography
        className="w-full flex flex-1 text-base tablet:text-xl text-custom_gray_2/80"
        font="poppins"
      >
        {description}
      </Typography>
    </div>
  );
};

export default SectionTitle;
