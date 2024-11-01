import Button from "../Button";

const Main = () => {
  return (
    <div className="flex flex-col gap-y-4 sm:gap-y-10 lg:gap-y-6 text-white">
      <div className="font-[family-name:var(--font-montserrat)] uppercase text-[26px] sm:text-[44px] lg:text-[65px] leading-8 sm:leading-[64px] md:leading-[56px]">
        turning your ideas into cosmic masterpieces
      </div>
      <span className="font-[family-name:var(--font-manrope)] text-base sm:text-[22px] font-normal">
        Your <span className="font-semibold">One-Stop Solution</span> For
        Digital Success
      </span>
      <Button label="START PROJECT" size="big" />
    </div>
  );
};

export default Main;
