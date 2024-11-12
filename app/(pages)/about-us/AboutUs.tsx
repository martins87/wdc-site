"use client";

import { FC, useState } from "react";
import Image from "next/image";

import AccordionData from "@/app/components/AboutUs/AccordionData";
import SectionTitle from "@/app/components/SectionTitle";
// import OurHistory from "../../assets/images/our-history.png";
import OurHistory1 from "../../assets/images/our-history-0.avif";
import OurTechnology from "../../assets/images/our-technology.png";
import OurProcess from "../../assets/images/our-process.png";
import OurSkills from "../../assets/images/our-skills.png";

type AboutUsImageProps = {
  openedItem: number;
};

const AboutUsImage: FC<AboutUsImageProps> = ({ openedItem }) => {
  const imageArr = [OurHistory1, OurTechnology, OurProcess, OurSkills];

  return (
    <Image
      className="w-full md:w-2/3 h-80 md:h-auto rounded-2xl"
      src={imageArr[openedItem]}
      alt="image"
    />
  );
};

const AboutUs = () => {
  const [openedItem, setOpenedItem] = useState<number>(0);

  return (
    <div className="my-24">
      <SectionTitle
        inWhite="About"
        inRed="Us"
        description="A team of experts dedicated to delivering innovative web design and development solutions that elevate your brand."
      />
      <div className="w-full max-h-[72vh] flex flex-col md:flex-row gap-2 object-cover object-center">
        <AboutUsImage openedItem={openedItem} />
        <AccordionData openedItem={openedItem} setOpenedItem={setOpenedItem} />
      </div>
    </div>
  );
};

export default AboutUs;
