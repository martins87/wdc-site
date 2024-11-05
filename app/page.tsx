import Container from "./components/Container";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Clients from "./components/Clients";

export default function Home() {
  return (
    <Container>
      <Hero />
      <Clients />
      <Projects />
      <Footer />
    </Container>
  );
}
