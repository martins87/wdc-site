import Image from "next/image";

import Container from "@/app/components/Container";
import Design from "../../assets/images/Cinesercla/Design.png";
import Logo from "../../assets/images/Cinesercla/Logo-Bordeaux.svg";
import Cinema from "../../assets/images/Cinesercla/Cinema.png";
import Pages from "../../assets/images/Cinesercla/Pages.png";
import ArrowRight from "../../assets/icons/ArrowRight.svg";
import SectionTitle from "@/app/components/SectionTitle";

const page = () => {
  return (
    <Container className="mt-16">
      <div className="w-full flex flex-col gap-y-10 font-[family-name:var(--font-manrope)] text-primary_text">
        <SectionTitle inWhite="Our" inRed="Projects" />
        <div className="w-full flex justify-between gap-8">
          <div className="flex gap-x-10">
            <Image
              className="w-24 mobile:w-32 tablet:w-48"
              src={Logo}
              alt="Cinesercla logo in gray"
            />
            <div className="hidden w-0.5 tablet:w-[3px] h-auto sm:flex bg-main_color rounded-lg" />
            <span className="hidden sm:flex items-center">
              Cinema Experience by Leading Entertainment Group
            </span>
          </div>

          <div className="w-1/2 mobile:w-[40%] lg:w-[30%] flex items-center justify-end gap-2">
            <span className="text-base sm:text-lg tablet:text-xl">
              Visit Website
            </span>
            <Image src={ArrowRight} alt="arrow right icon" />
          </div>
        </div>
        <span className="flex items-center sm:hidden -mt-4">
          Cinema Experience by Leading Entertainment Group
        </span>
        <div className="bg-card_background rounded-[10px] sm:rounded-3xl p-3 md:p-4">
          <Image
            className="w-full h-[400px] sm:h-max object-cover object-right-top"
            src={Design}
            alt="Cinesercla design"
          />
        </div>
        <div className="w-full flex flex-col sm:flex-row gap-8 text-xl">
          <div className="w-full sm:w-1/2 flex flex-col gap-8 sm:flex-row">
            <div className="w-full sm:w-1/2 flex flex-col">
              <span className="text-primary_text font-bold">Client</span>
              <span className="text-sm sm:text-base">Cinesercla</span>
            </div>
            <div className="w-full sm:w-1/2 flex flex-col">
              <span className="text-primary_text font-bold">Services</span>
              <span className="text-sm sm:text-base">
                Website Design & Development
              </span>
            </div>
          </div>
          <div className="w-full sm:w-1/2 flex flex-col">
            <span className="text-primary_text font-bold">Project Info</span>
            <span className="text-sm sm:text-base">
              Cinesercla, established in 1980, is one of Brazil&apos;s top
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
            <div className="w-1/2 h-auto flex items-center justify-center border border-card_background rounded-lg sm:rounded-3xl bg-card_background">
              <Image
                className="w-24 mobile:w-32 sm:w-44 md:w-52"
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
