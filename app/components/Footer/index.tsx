import Container from "../Container";
import CTA from "./CTA";
import Links from "./Links";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col gap-y-10 mt-40">
      <Container>
        <CTA />
        <Links />
      </Container>
    </footer>
  );
};

export default Footer;
