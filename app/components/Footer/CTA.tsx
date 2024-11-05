import Button from "../Button";

const CTA = () => {
  return (
    <div className="w-full flex flex-col rounded-3xl bg-background font-[family-name:var(--font-manrope)] text-white">
      <div className="h-40 flex items-center justify-center rounded-3xl sm:rounded-tl-3xl sm:rounded-r-3xl sm:rounded-bl-none bg-card_background">
        <span className="text-lg mobile:text-2xl sm:text-3xl tablet:text-4xl xl:text-5xl font-bold">
          Let&apos;s <span className="text-main_color">create</span> something
          truly <span className="text-main_color">cosmic!</span>
        </span>
      </div>
      <div className="relative flex justify-between bg-card_background rounded-bl-3xl">
        <div className="hidden sm:flex flex-1 w-full bg-background rounded-bl-3xl">
          <div className="w-full h-24 flex flex-1 items-center rounded-b-3xl pl-10 bg-card_background">
            <span className="text-lg md:text-xl tablet:text-2xl">
              contact@cosmicweb.design
            </span>
          </div>
        </div>
        <div className="w-[234px] sm:w-[317px] rounded-tl-[32px] bg-background" />
        <div className="absolute bottom-0 right-0 w-full sm:w-[306px] h-[59px] sm:h-[86px]">
          <Button className="w-full" label="START PROJECT" size="big" />
        </div>
      </div>
    </div>
  );
};

export default CTA;
