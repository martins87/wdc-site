import Button from "../Button";

const Hero = () => {
  return (
    <div className="w-[48%] flex flex-col gap-y-6 text-white mt-96 mr-auto">
      <div className="font-[family-name:var(--font-montserrat)] uppercase text-[65px] leading-[64px]">
        turning your ideas into cosmic masterpieces
      </div>
      <span className="font-[family-name:var(--font-manrope)] text-[22px] font-normal">
        Your <span className="font-semibold">One-Stop Solution</span> For
        Digital Success
      </span>
      <Button label="START PROJECT" size="big" />
    </div>
  );
};

export default Hero;
