import { FC } from "react";

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
    <div className="w-full flex flex-col gap-y-4 items-start justify-start mb-10 font-[family-name:var(--font-montserrat)] text-primary_text">
      <div className="flex items-start mobile:items-center gap-x-12">
        <div className="min-w-fit flex gap-2 text-3xl tablet:text-4xl font-extrabold">
          <span className="min-w-fit">{inWhite}</span>
          <span className="min-w-fit text-main_color">{inRed}</span>
        </div>
      </div>
      <span className="w-full flex flex-1 font-[family-name:var(--font-poppins)] text-base tablet:text-xl text-custom_gray_2/80">
        {description}
      </span>
    </div>
  );
};

export default SectionTitle;
