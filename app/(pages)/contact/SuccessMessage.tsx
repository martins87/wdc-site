import Image from "next/image";

import Check from "../../assets/icons/Check.svg";
import Typography from "@/app/components/Typography";

const SuccessMessage = () => {
  return (
    <div className="w-full p-2 flex justify-start gap-x-3 md:gap-x-6 rounded-3xl bg-main_color/30 mb-4">
      <div className="p-2 md:p-3 tablet:p-4 flex items-center justify-center rounded-full bg-main_color">
        <Image
          className="w-6 md:w-7 tablet:w-8 flex items-center justify-center"
          src={Check}
          alt="check icon"
        />
      </div>
      <Typography
        className="w-[85%] flex items-center text-sm md:text-base tablet:text-xl text-primary_text"
        font="manrope"
        weight="bold"
      >
        Your request was sent successfully! We will be in touch shortly to
        discuss the next steps.
      </Typography>
    </div>
  );
};

export default SuccessMessage;
