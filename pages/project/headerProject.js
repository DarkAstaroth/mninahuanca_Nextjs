import React from "react";

const HeaderProject = ({ props }) => {
  return (
    <>
      {props ? (
        <section className="wrapper bg-soft-primary">
          <div className="container pt-10 pb-19 pt-md-14 pb-md-22 text-center">
            <div className="row">
              <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
                <div className="post-header">
                  <div className="post-category text-line">
                    <a href="#" className="hover" rel="category">
                      {props.projectType}
                    </a>
                  </div>

                  <h1 className="display-1 mb-3">{props.title}</h1>
                  <p className="lead px-md-12 px-lg-12 px-xl-15 px-xxl-18">
                    {props.shortDesc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
};

export default HeaderProject;
