import React from "react";
import Image from "next/image";

const Skills = () => {
  return (
    <>
      <section className="wrapper bg-light" id="skills">
        <div className="container py-14 py-md-16">
          <div className="row gx-lg-8 gx-xl-12 gy-10 gy-lg-0">
            <div className="col-lg-4 mt-lg-2">
              <h2 className="fs-15 text-uppercase text-muted mb-3">Skills</h2>
              <h3 className="display-4 mb-3 pe-xxl-5">
                These are the technologies that I use the most for my projects{" "}
              </h3>
              <p className="lead fs-lg mb-0 pe-xxl-5">
                I like to be updated with the most modern and functional
                technologies on the market
              </p>
            </div>

            <div className="col-lg-8">
              <div className="row row-cols-2 row-cols-md-4 gx-0 gx-md-8 gx-xl-12 gy-12">
                <div className="col text-center">
                  <figure className="px-3 px-md-0 px-xxl-2">
                    <Image
                      src="/img/devIcons/react.svg"
                      alt="react"
                      width="127.5"
                      height="85.3"
                    />
                  </figure>
                  <span className="text-center">React</span>
                </div>

                <div className="col text-center">
                  <figure className="px-3 px-md-0 px-xxl-2">
                    <Image
                      src="/img/devIcons/redux.svg"
                      alt=""
                      width="127.5"
                      height="85.3"
                    />
                  </figure>
                  <span className="text-center">Redux</span>
                </div>

                <div className="col text-center">
                  <figure className="px-3 px-md-0 px-xxl-2">
                    <Image
                      src="/img/devIcons/gatsby.svg"
                      alt=""
                      width="127.5"
                      height="85.3"
                    />
                  </figure>
                  <span className="text-center">Gatsby</span>
                </div>

                <div className="col text-center">
                  <figure className="px-3 px-md-0 px-xxl-2">
                    <Image
                      src="/img/devIcons/html5.svg"
                      alt=""
                      width="127.5"
                      height="85.3"
                    />
                  </figure>
                  <span className="text-center">HTML 5</span>
                </div>

                <div className="col text-center">
                  <figure className="px-3 px-md-0 px-xxl-2">
                    <Image
                      src="/img/devIcons/css3.svg"
                      alt=""
                      width="127.5"
                      height="85.3"
                    />
                  </figure>
                  <span className="text-center">CSS 3</span>
                </div>

                <div className="col text-center">
                  <figure className="px-3 px-md-0 px-xxl-2">
                    <Image
                      src="/img/devIcons/javascript.svg"
                      alt=""
                      width="127.5"
                      height="85.3"
                    />
                  </figure>
                  <span className="text-center">Javascript</span>
                </div>

                <div className="col text-center">
                  <figure className="px-3 px-md-0 px-xxl-2">
                    <Image
                      src="/img/devIcons/sass.svg"
                      alt=""
                      width="127.5"
                      height="85.3"
                    />
                  </figure>
                  <span className="text-center">Sass</span>
                </div>
                <div className="col text-center">
                  <figure className="px-3 px-md-0 px-xxl-2">
                    <Image
                      src="/img/devIcons/bootstrap.svg"
                      alt=""
                      width="127.5"
                      height="85.3"
                    />
                  </figure>
                  <span className="text-center">Bootstrap</span>
                </div>
                <div className="col text-center">
                  <figure className="px-3 px-md-0 px-xxl-2">
                    <Image
                      src="/img/devIcons/flutter.svg"
                      alt=""
                      width="127.5"
                      height="85.3"
                    />
                  </figure>
                  <span className="text-center">Flutter</span>
                </div>
                <div className="col text-center">
                  <figure className="px-3 px-md-0 px-xxl-2">
                    <Image
                      src="/img/devIcons/mongodb.svg"
                      alt=""
                      width="127.5"
                      height="85.3"
                    />
                  </figure>
                  <span className="text-center">Mongo DB</span>
                </div>
                <div className="col text-center">
                  <figure className="px-3 px-md-0 px-xxl-2">
                    <Image
                      src="/img/devIcons/nodejs.svg"
                      alt=""
                      width="127.5"
                      height="85.3"
                    />
                  </figure>
                  <span className="text-center">Node js</span>
                </div>
                <div className="col text-center">
                  <figure className="px-3 px-md-0 px-xxl-2">
                    <Image
                      src="/img/devIcons/github.svg"
                      alt=""
                      width="127.5"
                      height="85.3"
                    />
                  </figure>
                  <span className="text-center">Github</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
