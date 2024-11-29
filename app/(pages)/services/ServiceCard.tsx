import { FC } from "react";
import Image from "next/image";

import Typography from "@/app/components/Typography";
import { ServiceCardProps } from "@/app/types/ServiceCard";

const ServiceCard: FC<ServiceCardProps> = ({ icon, label, description }) => {
  return (
    <div className="w-full flex flex-col gap-y-8 items-center justify center p-10 rounded-3xl border-2 border-main_color">
      <div className="w-full flex items-center justify-start gap-x-4">
        <Image src={icon} alt="service icon" />
        <Typography className="text-xl" font="poppins" weight="semibold">
          {label}
        </Typography>
      </div>
      <Typography
        className="text-base text-custom_gray_2"
        font="poppins"
        weight="normal"
      >
        {description}
      </Typography>
    </div>
  );
};

export default ServiceCard;
