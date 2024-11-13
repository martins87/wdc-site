import { FC } from "react";
import Image from "next/image";

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

export default AboutUsImage;
