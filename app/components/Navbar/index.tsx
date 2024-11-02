import Image from "next/image";

import Button from "../Button";
import Container from "../Container";
import Logo from "./Logo";
import SectionsLinks from "../SectionsLinks";
import Hamburger from "../../assets/icons/Hamburger.svg";

const Navbar = () => {
  return (
    <Container>
      <div className="w-full h-[100px] flex items-center justify-between gap-4 sm:gap-10 lg:gap-2">
        <Logo />
        <SectionsLinks navbar />
        <Button label="START PROJECT" outlined />
        <Image className="lg:hidden" src={Hamburger} alt="Hamburger icon" />
      </div>
    </Container>
  );
};

export default Navbar;
