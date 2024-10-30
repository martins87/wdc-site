import Container from "../Container";
import CTA from "./CTA";
import Logo from "./Logo";
import NavLinks from "./NavLinks";

const Navbar = () => {
  return (
    <Container>
      <div className="w-full flex items-center justify-between gap-2">
        <Logo />
        <NavLinks />
        <CTA />
      </div>
    </Container>
  );
};

export default Navbar;
