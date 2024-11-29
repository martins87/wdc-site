import Link from "next/link";
import Image from "next/image";

import Button from "../Button";
import HeroImg from "../../assets/images/HeroImg.png";

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
      <div className="relative w-full tablet:w-[40%] flex items-center justify-center">
        <Image src={HeroImg} alt="hero image" />
      </div>
    </div>
  );
};

export default Hero;
