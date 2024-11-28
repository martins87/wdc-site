import { FC } from "react";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

type ServiceCardProps = {
  icon: StaticImport;
  label: string;
  description: string;
};

const ServiceCard: FC<ServiceCardProps> = ({ icon, label, description }) => {
  return (
    <div className="w-full flex flex-col gap-y-8 items-center justify center p-10 rounded-3xl border-2 border-main_color">
      <div className="w-full flex items-center justify-start gap-x-4">
        <Image src={icon} alt="service icon" />
        <h3 className="font-[family-name:var(--font-poppins)] text-xl font-semibold">
          {label}
        </h3>
      </div>
      <span className="font-[family-name:var(--font-poppins)] text-base font-normal text-custom_gray_2">
        {description}
      </span>
    </div>
  );
};

export default ServiceCard;
