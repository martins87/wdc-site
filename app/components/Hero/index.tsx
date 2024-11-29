import Link from "next/link";
import Image from "next/image";

import Button from "../Button";
import Typography from "../Typography";
import HeroImg from "../../assets/images/HeroImg.png";

const Hero = () => {
  return (
    <div className="w-full flex flex-col tablet:flex-row items-center justify-center gap-y-14 my-20">
      <div className="w-full tablet:w-[60%] mr-auto flex flex-col justify-start tablet:justify-center gap-y-4 sm:gap-y-10 lg:gap-y-6 text-center tablet:text-left text-primary_text">
        <div className="capitalize text-2xl sm:text-5xl lg:text-5xl xl:text-6xl leading-tight sm:leading-normal lg:leading-snug xl:leading-[80px] mb-2 font-[family-name:var(--font-montserrat)] font-black">
          we craft elegant and functional{" "}
          <span className="text-main_color capitalize">websites</span>
        </div>
        <Typography
          className="text-custom_gray_2/80 text-base sm:text-xl tablet:mb-4"
          font="montserrat"
          weight="normal"
        >
          Your One-Stop Solution For Digital Success
        </Typography>
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
