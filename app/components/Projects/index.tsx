import SectionTitle from "../SectionTitle";
import ProjectCard from "./ProjectCard";
import CineserclaProject from "../../assets/images/cinesercla-project.svg";
import MarrafitProject from "../../assets/images/marrafit-project.svg";

const Projects = () => {
  return (
    <div className="w-full flex flex-col gap-y-2">
      <SectionTitle
        inWhite="Our"
        inRed="Projects"
        description="We create impactful digital experiences by aligning user goals with cutting-edge design and development solutions."
      />
      <ProjectCard
        title="Cinesercla"
        description="By revamping the cinema website, we streamlined navigation and added intuitive features that addressed both user and business needs, boosting engagement."
        image={CineserclaProject}
        orientation="left"
      />
      <ProjectCard
        title="Marra Fit"
        description="The redesign of the gym website brought a fresh look and optimized features, making it simple for members to explore schedules and manage their workouts."
        image={MarrafitProject}
        orientation="right"
      />
    </div>
  );
};

export default Projects;
