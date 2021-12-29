import React from "react";
import HeadPage from "./components/head";
import PortfolioHeader from "./components/portfolio/portfolioHeader";
import useProjects from "../hooks/useProjects";
import PortfolioContent from "./components/portfolio/portfolioContent";
import Loading from "./components/loading";
import ContactForm from "./components/home/contactForm";

const Portfolio = () => {
  const { projects } = useProjects();

  return (
    <>
      <HeadPage title="My Porfolio!" />
      <PortfolioHeader />
      {projects.length == 0 ? (
        <Loading />
      ) : (
        <div>
          <section className="wrapper bg-light">
            <div className="container py-14 py-md-16">
              <div className="">
                <div className="row gx-md-8 gy-10 gy-md-13 isotope">
                  {projects.map((project) => (
                    <PortfolioContent
                      key={project._id}
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

          <section className="wrapper bg-light">
            <div className="container py-3 py-md-3">
              <div className="card   gradient-7">
                <div className="card-body p-3 p-md-5 text-center text-lg-start">
                  <h3 className="display-6 text-white text-center">
                    Coming Soon More Projects!
                  </h3>
                </div>
              </div>
            </div>
          </section>

          <ContactForm />
        </div>
      )}
    </>
  );
};

export default Portfolio;
