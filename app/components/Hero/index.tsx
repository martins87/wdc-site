import Link from "next/link";
import Image from "next/image";

import Button from "../Button";
import HeroImg from "../../assets/images/HeroImg-2.png";
// import Seo from "../../assets/images/seo.png";
// import Vscode from "../../assets/images/vscode.png";
// import Figma from "../../assets/images/figma.png";

const Hero = () => {
  return (
    <div className="w-full flex flex-col tablet:flex-row items-center justify-center gap-y-14 my-20">
      <div className="w-full tablet:w-[60%] mr-auto flex flex-col justify-start tablet:justify-center gap-y-4 sm:gap-y-10 lg:gap-y-6 text-center tablet:text-left text-primary_text">
        <div className="font-[family-name:var(--font-montserrat)] capitalize font-black text-2xl sm:text-5xl lg:text-5xl xl:text-6xl leading-tight sm:leading-normal lg:leading-snug xl:leading-[80px] mb-2">
          we craft elegant and functional{" "}
          <span className="text-main_color">websites</span>
        </div>
        <span className="font-[family-name:var(--font-montserrat)] text-custom_gray_2 text-base sm:text-xl font-normal tablet:mb-4">
          Your One-Stop Solution For Digital Success
        </span>
        <Link className="hidden tablet:flex" href={"/contact"}>
          <Button label="START PROJECT" size="big" />
        </Link>
      </div>
      <div className="relative w-[90%] tablet:w-[40%] flex items-center justify-center">
        <div className="relative">
          <Image
            className="object-contain w-auto h-auto"
            src={HeroImg}
            alt="hero image"
          />
        </div>
        {/* <div className="absolute  top-[0%] left-[0%] w-auto h-auto">
          <Image className="object-contain" src={Seo} alt="seo" />
        </div>
        <div className="absolute top-[10%] left-[12%] w-auto h-auto">
          <Image className="object-contain" src={Vscode} alt="vscode" />
        </div>
        <div className="absolute top-[10%] right-[0%] w-auto h-auto">
          <Image className="object-contain" src={Figma} alt="figma" />
        </div> */}
      </div>
    </div>
  );
};

export default Hero;
