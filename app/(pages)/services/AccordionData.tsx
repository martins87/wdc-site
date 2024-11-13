import { FC } from "react";
import Image, { StaticImageData } from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { twMerge } from "tailwind-merge";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import WebsiteDesignIcon from "../../assets/icons/website-design-icon.svg";
import AppDesignIcon from "../../assets/icons/app-design-icon.svg";
import DevelopmentIcon from "../../assets/icons/development.svg";
import WebDevelopment from "../../assets/images/website-design.png";
import AppDesign from "../../assets/images/app-design.png";
import Development from "../../assets/images/web-development.avif";

type AccordionItem = {
  itemId: string;
  title: string;
  icon: StaticImport;
  description: string;
  image: StaticImageData;
};

const accordionData: AccordionItem[] = [
  {
    itemId: "item-0",
    title: "Website Design",
    icon: WebsiteDesignIcon,
    description:
      "We create responsive websites that leave a lasting impression, whether it’s a new build or a redesign.",
    image: WebDevelopment,
  },
  {
    itemId: "item-1",
    title: "App Design",
    icon: AppDesignIcon,
    description:
      "Our app designs focus on seamless user experiences, whether building new or refreshing existing apps.",
    image: AppDesign,
  },
  {
    itemId: "item-2",
    title: "Development",
    icon: DevelopmentIcon,
    description:
      "Our development ensures high performance, whether it’s a new build or redevelopment.",
    image: Development,
  },
];

type AccordionDataProps = {
  openedItem: number;
  setOpenedItem: (item: number) => void;
};

const AccordionData: FC<AccordionDataProps> = ({
  openedItem,
  setOpenedItem,
}) => {
  const handleClick = (item: number) => setOpenedItem(item);

  return (
    <Accordion
      className="w-full flex flex-col gap-y-2"
      type="single"
      collapsible
      defaultValue="item-0"
    >
      {accordionData.map((item: AccordionItem, index: number) => (
        <AccordionItem key={item.title} value={item.itemId}>
          <AccordionTrigger
            className={twMerge(
              "flex gap-x-10",
              index === openedItem ? "text-white" : "text-custom_gray"
            )}
            onClick={() => handleClick(index)}
          >
            <div className="flex flex-1 items-center gap-x-4">
              <Image width={32} src={item.icon} alt="icon" />
              {item.title}
            </div>
            {index === openedItem && (
              <span className="hidden md:flex md:w-3/5 lg:2/3 font-normal text-lg text-left">
                {item.description}
              </span>
            )}
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-y-4">
            <span className="flex md:hidden md:w-2/3 font-normal text-sm text-left">
              {item.description}
            </span>
            <Image
              className="w-full max-h-[65vh] rounded-2xl object-cover object-center"
              src={item.image}
              alt="services image"
            />
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default AccordionData;
