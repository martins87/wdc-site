import Container from "./components/Container";
import Hero from "./components/Hero";
// import SectionTitle from "./components/SectionTitle";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <Container>
      <Hero />
      {/* <SectionTitle
        inWhite="About"
        inRed="Us"
        description="A team of experts dedicated to delivering innovative web design and development solutions that elevate your brand."
      />
      <SectionTitle
        inWhite="Our"
        inRed="Services"
        description="We are your go-to web design firm, creating stunning websites to elevate your business."
      />
      <SectionTitle
        inWhite="Our"
        inRed="Projects"
        description="We create impactful digital experiences by aligning user goals with cutting-edge design and development solutions."
      />
      <SectionTitle
        inWhite="Clients"
        inRed="Say"
        description="Our passion for results is reflected in the experiences of those we work with."
      /> */}
      <Footer />
    </Container>
  );
}
