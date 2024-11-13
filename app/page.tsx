import Container from "./components/Container";
import Hero from "./components/Hero";
import Clients from "./components/Clients";
import AboutUs from "./(pages)/about-us/AboutUs";
import Services from "./(pages)/services/Services";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <Container>
      <Hero />
      <Clients />
      <AboutUs />
      <Services />
      <Projects />
    </Container>
  );
}
