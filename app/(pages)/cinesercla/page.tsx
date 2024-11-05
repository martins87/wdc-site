import Image from "next/image";

import Container from "@/app/components/Container";
import Design from "../../assets/images/Cinesercla/Design.svg";
import Logo from "../../assets/images/Cinesercla/Logo-Bordeaux.svg";
import Cinema from "../../assets/images/Cinesercla/Cinema.svg";
import Pages from "../../assets/images/Cinesercla/Pages.svg";

const page = () => {
  return (
    <Container>
      <div className="w-full flex flex-col gap-y-10 font-[family-name:var(--font-manrope)] text-white">
        <span className="flex gap-1 tablet:gap-2 text-xl tablet:text-2xl">
          <span>Our</span>
          <span className="text-main_color">Projects</span>
        </span>
        <div className="w-full flex  gap-8">
          <Image
            className="w-24 mobile:w-32 sm:w-48"
            src={Logo}
            alt="Cinesercla logo in gray"
          />
          <div className="w-0.5 tablet:w-[3px] h-auto flex bg-main_color" />
          <span className="">
            Cinema Experience by Leading Entertainment Group
          </span>
          <div className="flex flex-1">Visit Website</div>
        </div>
        <div className="bg-card_background rounded-3xl p-4">
          <Image className="w-full" src={Design} alt="Cinesercla design" />
        </div>
        <div className="w-full flex flex-col sm:flex-row gap-8 text-xl">
          <div className="w-full sm:w-1/2 flex flex-col gap-8 sm:flex-row">
            <div className="w-full sm:w-1/2 flex flex-col">
              <span className="text-custom_gray">Client</span>
              <span className="text-base sm:text-lg">Cinesercla</span>
            </div>
            <div className="w-full sm:w-1/2 flex flex-col">
              <span className="text-custom_gray">Services</span>
              <span className="text-base sm:text-lg">
                Website Design & Development
              </span>
            </div>
          </div>
          <div className="w-full sm:w-1/2 flex flex-col">
            <span className="text-custom_gray">Project Info</span>
            <span className="text-base sm:text-lg">
              Cinesercla, established in 1980, is one of Brazil$apos;s top
              cinema groups, with nearly 80 theaters across 7 states. Since
              1997, the brand has focused on Shopping Centers, forming strong
              partnerships with developers to grow its presence. Combining
              efficiency with modern appeal, Cinesercla remains committed to
              delivering a top-tier movie-going experience.
            </span>
          </div>
        </div>
        <div className="w-full flex flex-col gap-2">
          <div className="w-full flex gap-2">
            <div className="w-1/2 h-auto flex items-center justify-center border border-card_background rounded-3xl bg-card_background">
              <Image
                className="w-24 mobile:w-32 sm:w-48"
                src={Logo}
                alt="Logo Cinesercla"
              />
            </div>
            <div className="w-1/2">
              <Image className="w-full" src={Cinema} alt="Cinema" />
            </div>
          </div>
          <div>
            <Image className="w-full" src={Pages} alt="Cinesercla pages" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default page;
