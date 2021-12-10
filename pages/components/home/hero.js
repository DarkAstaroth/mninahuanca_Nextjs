import React from "react";

const Hero = (props) => {
  return (
    <>
      <section className="wrapper bg-soft-blue">
        <div className="container pt-12 pt-md-14 pb-14 pb-md-16">
          <div className="row gy-10 gy-md-13 gy-lg-0 align-items-center">
            <div className="col-md-8 col-lg-5 d-flex position-relative mx-auto">
              <div className="img-blob blob1">
                <img
                  src="img/main-photo.png"
                  // srcset="./assets/img/photos/about17@2x.jpg 2x"
                  alt=""
                  width=""
                />
              </div>
              <div
                className="card shadow-lg position-absolute"
                style={{ bottom: 10 },{right:1}}
              >
                <div className="card-body py-4 px-5">
                  <div className="d-flex flex-row align-items-center">
                    <div>
                      {/* <img
                        src="img/icons/check.svg"
                        className="svg-inject icon-svg icon-svg-sm text-primary mx-auto me-3"
                        alt=""
                      /> */}
                    </div>
                    <div>
                      <h3 className="counter mb-0 text-nowrap">250+</h3>
                      <p className="fs-14 lh-sm mb-0 text-nowrap">
                        Projects Done
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 offset-lg-1 col-xxl-5 text-center text-lg-start">
              <h1 className="display-1 mb-5">
                Hi! I&apos;m a FrontEnd & BackEnd Developer
              </h1>
              <p className="lead fs-25 lh-sm mb-7 px-md-10 px-lg-0">
                Hello! I&apos;m Manuel, a freelance developer based in Bolivia.
                I’m very passionate about the work that I do.
              </p>
              <div className="d-flex justify-content-center justify-content-lg-start">
                <span>
                  <a
                    href="#"
                    className="btn btn-lg btn-primary rounded-pill me-2"
                  >
                    See My Works
                  </a>
                </span>
                <span>
                  <a
                    href="#"
                    className="btn btn-lg btn-outline-primary rounded-pill"
                  >
                    Contact Me
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
