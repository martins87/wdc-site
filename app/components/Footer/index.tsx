import Image from "next/image";

import Container from "../Container";
import Logo from "../Navbar/Logo";
import X from "../../assets/icons/X.svg";
import Facebook from "../../assets/icons/Facebook.svg";
import Github from "../../assets/icons/Github.svg";
import Instagram from "../../assets/icons/Instagram.svg";
import SectionsLinks from "../SectionsLinks";

const Footer = () => {
  return (
    <footer className="w-full mt-40 py-10 bg-card_background">
      <Container className="flex flex-col gap-y-10 text-white">
        <div className="w-full flex items-center justify-between">
          <Logo noText />
          <div className="flex items-center justify-between gap-x-3">
            <Image src={X} alt="footer social media icon" />
            <Image src={Facebook} alt="footer social media icon" />
            <Image src={Github} alt="footer social media icon" />
            <Image src={Instagram} alt="footer social media icon" />
          </div>
        </div>
        <div className="w-full h-[0.5px] bg-custom_gray_3/15" />
        <div className="w-full flex flex-col md:flex-row gap-y-8 items-center justify-between">
          <SectionsLinks footer />
          <span className="font-[family-name:var(--font-poppins)] text-xl font-medium">
            contact@noblecraft.design
          </span>
        </div>
        <span className="font-[family-name:var(--font-manrope)] font-normal text-sm opacity-50">
          All Rights Reserved. Noble Craft Web Design®
        </span>
      </Container>
    </footer>
  );
};

export default Footer;
