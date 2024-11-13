"use client";

import SectionTitle from "@/app/components/SectionTitle";
import AccordionData from "./AccordionData";
import { useState } from "react";

const Services = () => {
  const [openedItem, setOpenedItem] = useState<number>(0);

  return (
    <div className="w-full my-20">
      <SectionTitle
        inWhite="Our"
        inRed="Services"
        description="We are your go-to web design firm, creating stunning websites to elevate your business."
      />
      <AccordionData openedItem={openedItem} setOpenedItem={setOpenedItem} />
    </div>
  );
};

export default Services;
