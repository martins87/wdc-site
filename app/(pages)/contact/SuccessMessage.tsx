import Image from "next/image";

import Check from "../../assets/icons/Check.svg";

const SuccessMessage = () => {
  return (
    <div className="w-full p-2 flex justify-start gap-x-6 rounded-3xl bg-message_background/40 mb-4">
      <div className="p-4 flex items-center justify-center rounded-full bg-main_color">
        <Image
          className="w-8 flex items-center justify-center"
          src={Check}
          alt="check icon"
        />
      </div>
      <span className="flex items-center text-xl font-[family-name:var(--font-manrope)] text-white">
        Your request was sent successfully! We will be in touch shortly to
        discuss the next steps!
      </span>
    </div>
  );
};

export default SuccessMessage;
