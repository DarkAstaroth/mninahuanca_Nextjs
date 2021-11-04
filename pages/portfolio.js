import React from "react";
import HeadPage from "./components/head";
import PortfolioHeader from "./components/portfolio/portfolioHeader";
import useProjects from "../hooks/useProjects";

const Portfolio = () => {
  const { projects } = useProjects();
  console.log(projects)
  return (
    <>
      <HeadPage title="mninahuanca | My porfolio!" />
      <PortfolioHeader />
      <div>
        {projects.map((project) => (
          <div key={project.id}>{project.title}</div>
        ))}
      </div>
    </>
  );
};

export default Portfolio;
