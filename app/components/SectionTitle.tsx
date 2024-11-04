import { FC } from "react";

import HorizontalLine from "./HorizontalLine";

type SectionTitleProps = {
  inWhite: string;
  inRed: string;
  description: string;
};

const SectionTitle: FC<SectionTitleProps> = ({
  inWhite,
  inRed,
  description,
}) => {
  return (
    <div className="w-full flex flex-col gap-y-4 mobile:flex-row items-start mobile:items-center justify-between mb-10 font-[family-name:var(--font-manrope)] text-white">
      <div className="w-2/5 flex items-start mobile:items-center gap-10 mr-10">
        <span className="flex gap-3 text-4xl tablet:text-[55px] font-extrabold">
          <span>{inWhite}</span>
          <span className="text-main_color">{inRed}</span>
        </span>
        <HorizontalLine />
      </div>
      <span className="flex flex-1 text-base tablet:text-[20px]">
        {description}
      </span>
    </div>
  );
};

export default SectionTitle;
