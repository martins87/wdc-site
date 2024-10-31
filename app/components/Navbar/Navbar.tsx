import Image from "next/image";

import Button from "../Button";
import Container from "../Container";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import Hamburger from "../../assets/icons/Hamburger.svg";

const Navbar = () => {
  return (
    <Container>
      <div className="w-full flex items-center justify-between gap-10 lg:gap-2">
        <Logo />
        <NavLinks />
        <Button label="START PROJECT" outlined />
        <Image className="lg:hidden" src={Hamburger} alt="Hamburger icon" />
      </div>
    </Container>
  );
};

export default Navbar;
