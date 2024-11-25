"use client";

import { useState } from "react";

import SectionTitle from "@/app/components/SectionTitle";
import AccordionData from "@/app/components/AboutUs/AccordionData";
import AboutUsImage from "@/app/components/AboutUs/AboutUsImage";

const AboutUs = () => {
  const [openedItem, setOpenedItem] = useState<number>(0);

  return (
    <div>
      <SectionTitle
        inWhite="About"
        inRed="Us"
        description="A team of experts dedicated to delivering innovative web design and development solutions that elevate your brand."
      />
      <div className="w-full flex flex-col lg:flex-row gap-2 object-cover object-center">
        <AboutUsImage openedItem={openedItem} />
        <AccordionData openedItem={openedItem} setOpenedItem={setOpenedItem} />
      </div>
    </div>
  );
};

export default AboutUs;
