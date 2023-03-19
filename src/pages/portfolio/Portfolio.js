import projectData from "./projectsData.json";
import Project from "../../components/project";
import PageHeader from "../../components/PageHeader";

const Portfolio = () => {
  const ProjectList = () =>
    projectData.map((project, i) => (
      <Project
        key={i}
        title={project.title}
        technologies={project.technologies}
        image={project.image}
        color={project.bgcolor}
        github={project.github}
        deployed={project.deployed}
        description={project.description}
      />
    ));

  return (
    <section className="portfolio">
      <PageHeader title="Portfolio" />
      <div className="row">
        <ProjectList />
      </div>
    </section>
  );
};

export default Portfolio;
