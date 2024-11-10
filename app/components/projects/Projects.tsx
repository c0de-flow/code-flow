import SectionTitle from "../sectionTitle/SectionTitle";
import EllipseBackground from "../ellipse/EllipseBackground";
import ProjectsCardDesktop from "./ProjectsCardDesktop";
import ProjectsCardMobile from "./ProjectsCardMobile";
import projectCard from "@/app/constants/ProjectsCards";

const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col justify-center items-center py-20 relative"
    >
      <div className="relative md:mb-20">
        <SectionTitle title="Our Projects" />
        <EllipseBackground
          width="395px"
          height="395px"
          backgroundColor="rgba(33, 103, 252, 0.1)"
          opacity={1}
          blur="130px"
          top="-300px"
          left="-150px"
        />
      </div>

      {/* Map through projectCard array for desktop screens */}
      <div className="hidden md:flex flex-col items-center justify-center gap-10 text-white w-full overflow-hidden">
        {projectCard.map((card, index) => (
          <ProjectsCardDesktop key={index} card={card} index={index} />
        ))}
      </div>

      {/* Map through projectCard array for mobile and small screens */}
      <div className="flex flex-col gap-8 items-center w-full custom-container md:hidden">
        {projectCard.map((card, index) => (
          <ProjectsCardMobile key={index} card={card} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
