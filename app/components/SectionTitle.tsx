import { FC } from "react";

import { SectionTitleProps } from "../types/SectionTitle";

const SectionTitle: FC<SectionTitleProps> = ({
  inWhite,
  inRed,
  description,
}) => {
  return (
    <div className="w-full flex flex-col gap-y-4 items-start justify-start mb-10 text-primary_text">
      <span className="min-w-fit flex items-start mobile:items-center gap-2 text-3xl tablet:text-4xl font-[family-name:var(--font-montserrat)] font-extrabold">
        <span className="min-w-fit">{inWhite}</span>
        <span className="min-w-fit text-main_color">{inRed}</span>
      </span>
      <span className="w-full flex flex-1 font-[family-name:var(--font-poppins)] text-base tablet:text-xl text-custom_gray_2/80">
        {description}
      </span>
    </div>
  );
};

export default SectionTitle;
