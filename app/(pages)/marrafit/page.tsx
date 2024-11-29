import Image from "next/image";

import Container from "@/app/components/Container";
import Design from "../../assets/images/Marrafit/Design.png";
import Logo from "../../assets/images/Marrafit/Logo-Colorido.svg";
import MarrafitLogo from "../../assets/icons/MarraFit-new.svg";
import Gym from "../../assets/images/Marrafit/Gym.png";
import Pages from "../../assets/images/Marrafit/Pages.png";
import ArrowRight from "../../assets/icons/ArrowRight.svg";
import SectionTitle from "@/app/components/SectionTitle";
import Typography from "@/app/components/Typography";

const page = () => {
  return (
    <Container className="mt-16">
      <Typography
        className="w-full flex flex-col gap-y-10 text-primary_text"
        font="manrope"
      >
        <SectionTitle inWhite="Our" inRed="Projects" />
        <div className="w-full flex justify-between gap-8">
          <div className="flex gap-x-10">
            <Image
              className="w-24 mobile:w-32 tablet:w-48"
              src={MarrafitLogo}
              alt="Cinesercla logo in gray"
            />
            <div className="hidden w-0.5 tablet:w-[3px] h-auto sm:flex bg-main_color rounded-lg" />
            <Typography className="hidden sm:flex items-center">
              Transformative Training from Elite Fitness Leaders
            </Typography>
          </div>

          <div className="w-1/2 mobile:w-[40%] lg:w-[30%] flex items-center justify-end gap-2">
            <Typography className="text-base sm:text-lg tablet:text-xl">
              Visit Website
            </Typography>
            <Image src={ArrowRight} alt="arrow right icon" />
          </div>
        </div>
        <Typography className="flex items-center sm:hidden -mt-4">
          Cinema Experience by Leading Entertainment Group
        </Typography>
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
              <Typography className="text-custom_gray">Client</Typography>
              <Typography className="text-sm sm:text-base">
                Marra Fit
              </Typography>
            </div>
            <div className="w-full sm:w-1/2 flex flex-col">
              <Typography className="text-custom_gray">Services</Typography>
              <Typography className="text-sm sm:text-base">
                Website Design & Development
              </Typography>
            </div>
          </div>
          <div className="w-full sm:w-1/2 flex flex-col">
            <Typography className="text-custom_gray">Project Info</Typography>
            <Typography className="text-sm sm:text-base">
              Located in the heart of São Paulo and Guarulhos, Marra Fit
              combines cutting-edge fitness technology with a welcoming
              environment. The gym offers tailored services, including
              personalized training plans and high-tech equipment, making it a
              top destination for fitness enthusiasts in the region.
            </Typography>
          </div>
        </div>
        <div className="w-full flex flex-col gap-2">
          <div className="w-full flex gap-2">
            <div className="w-1/2 h-auto flex items-center justify-center border border-card_background rounded-lg sm:rounded-3xl bg-card_background">
              <Image
                className="w-24 mobile:w-32 sm:w-44 md:w-52"
                src={Logo}
                alt="Logo Marrafit"
              />
            </div>
            <div className="w-1/2">
              <Image className="w-full" src={Gym} alt="Gym" />
            </div>
          </div>
          <div>
            <Image className="w-full" src={Pages} alt="Marrafit pages" />
          </div>
        </div>
      </Typography>
    </Container>
  );
};

export default page;
