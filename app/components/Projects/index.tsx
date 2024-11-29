import SectionTitle from "../SectionTitle";
import ProjectCard from "./ProjectCard";
import CineserclaProject from "../../assets/images/Projects-Cinesercla.png";
import MarrafitProject from "../../assets/images/Projects-Marrafit.png";

const Projects = () => {
  return (
    <div className="w-full flex flex-col gap-y-2">
      <SectionTitle
        inWhite="Our"
        inRed="Projects"
        description="We focus on user goals to craft meaningful digital solutions for every need."
      />
      <div className="flex flex-col tablet:flex-row tablet:gap-x-4 xl:gap-x-10 gap-y-14">
        <ProjectCard
          service="Website Redesign"
          title="Transforming cinema websites for optimal engagement"
          image={CineserclaProject}
          src="/cinesercla"
        />
        <ProjectCard
          service="Website Redesign"
          title="Enhanced landing page for gym website"
          image={MarrafitProject}
          src="/marrafit"
        />
      </div>
    </div>
  );
};

export default Projects;
