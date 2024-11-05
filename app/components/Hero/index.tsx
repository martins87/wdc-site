import Button from "../Button";

const Hero = () => {
  return (
    <div className="w-full h-[75vh] flex flex-col items-center justify-center gap-y-32">
      <div className="w-full lg:w-[60%] mr-auto flex flex-col gap-y-4 sm:gap-y-10 lg:gap-y-6 text-white">
        <div className="font-[family-name:var(--font-montserrat)] uppercase text-[26px] sm:text-[44px] lg:text-[65px] leading-8 sm:leading-[64px] md:leading-[56px]">
          we turn your ideas into cosmic masterpieces
        </div>
        <span className="font-[family-name:var(--font-manrope)] text-base sm:text-[22px] font-normal">
          Your <span className="font-semibold">One-Stop Solution</span> For
          Digital Success
        </span>
        <Button label="START PROJECT" size="big" />
      </div>
    </div>
  );
};

export default Hero;
