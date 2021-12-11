import React from "react";
import HeadPage from "./components/head";
import PortfolioHeader from "./components/portfolio/portfolioHeader";
import useProjects from "../hooks/useProjects";
import PortfolioContent from "./components/portfolio/portfolioContent";
import Loading from "./components/loading";

const Portfolio = () => {
  const { projects } = useProjects();

  return (
    <>
      <HeadPage title="My Porfolio!" />
      <PortfolioHeader />
      {projects.length == 0 ? (
        <Loading />
      ) : (
        <section className="wrapper bg-light">
          <div className="container py-14 py-md-16">
            <div className="">
              <div className="row gx-md-8 gy-10 gy-md-13 isotope">
                {projects.map((project) => (
                  <PortfolioContent
                    key={project.id}
                    id={project._id}
                    title={project.title}
                    urlImage={project.urlImage}
                    slug={project.slug}
                    type={project.projectType}
                  />
                ))}
              </div>
              
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Portfolio;
