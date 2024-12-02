import { FC } from "react";
import Image from "next/image";

import { ServiceCardProps } from "@/app/types/ServiceCard";

const ServiceCard: FC<ServiceCardProps> = ({ icon, label, description }) => {
  return (
    <div className="w-full flex flex-col gap-y-8 items-center justify center p-10 rounded-3xl border-2 border-main_color font-[family-name:var(--font-poppins)]">
      <div className="w-full flex items-center justify-start gap-x-4">
        <Image src={icon} alt="service icon" />
        <span className="text-xl font-semibold text-secondary_text">
          {label}
        </span>
      </div>
      <span className="text-base text-custom_gray_2 font-normal">
        {description}
      </span>
    </div>
  );
};

export default ServiceCard;
