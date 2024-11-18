import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FC } from "react";

type AccordionItem = {
  itemId: string;
  title: string;
  description: string;
};

type AccordionDataProps = {
  openedItem: number;
  setOpenedItem: (item: number) => void;
};

const accordionData: AccordionItem[] = [
  {
    itemId: "item-0",
    title: "Our History",
    description:
      "A passion for design and development, a UI/UX designer, a software engineer created a company offering impactful digital experiences.",
  },
  {
    itemId: "item-1",
    title: "Our Technology",
    description:
      "Our toolkit includes Next.js, React, Angular, Node.js, TypeScript, Tailwind, REST APIs, and Figma for innovative solutions.",
  },
  {
    itemId: "item-2",
    title: "Our Process",
    description:
      "We start with research, move through innovative design, refine during review, and finish with exceptional delivery.",
  },
  {
    itemId: "item-3",
    title: "Our Skills",
    description:
      "We create stunning interfaces in Figma, ensuring designs are visually captivating and user-friendly for a seamless experience.",
  },
];

const AccordionData: FC<AccordionDataProps> = ({
  openedItem,
  setOpenedItem,
}) => {
  const handleClick = (item: number) => setOpenedItem(item);

  return (
    <Accordion
      className="w-full lg:w-2/5 flex flex-col gap-y-2"
      type="single"
      collapsible
      defaultValue="item-0"
    >
      {accordionData.map((accordionItem: AccordionItem, index: number) => (
        <AccordionItem key={accordionItem.title} value={accordionItem.itemId}>
          <AccordionTrigger
            className={
              index === openedItem ? "text-main_color" : "text-custom_gray"
            }
            onClick={() => handleClick(index)}
          >
            {accordionItem.title}
          </AccordionTrigger>
          <AccordionContent>{accordionItem.description}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default AccordionData;
