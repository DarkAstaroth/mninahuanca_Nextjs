import React from "react";
import Image from "next/image";

const Skills = () => {
  return (
    <>
      <section className="wrapper bg-light">
        <div className="container py-14 py-md-16">
          <div className="row gx-lg-8 gx-xl-12 gy-10 gy-lg-0">
            <div className="col-lg-4 mt-lg-2">
              <h2 className="fs-15 text-uppercase text-muted mb-3">
                Our Clients
              </h2>
              <h3 className="display-4 mb-3 pe-xxl-5">
                Trusted by over 300+ clients
              </h3>
              <p className="lead fs-lg mb-0 pe-xxl-5">
                We bring solutions to make life easier for our customers.
              </p>
            </div>

            <div className="col-lg-8">
              <div className="row row-cols-2 row-cols-md-4 gx-0 gx-md-8 gx-xl-12 gy-12">
                <div className="col">
                  <figure className="px-3 px-md-0 px-xxl-2">
                    <Image
                      src="/img/brands/z1.png"
                      alt=""
                      width="127.5"
                      height="85.3"
                    />
                  </figure>
                </div>

                <div className="col">
                  <figure className="px-3 px-md-0 px-xxl-2">
                    <Image
                      src="/img/brands/z2.png"
                      alt=""
                      width="127.5"
                      height="85.3"
                    />
                  </figure>
                </div>

                <div className="col">
                  <figure className="px-3 px-md-0 px-xxl-2">
                    <Image
                      src="/img/brands/z3.png"
                      alt=""
                      width="127.5"
                      height="85.3"
                    />
                  </figure>
                </div>

                <div className="col">
                  <figure className="px-3 px-md-0 px-xxl-2">
                    <Image
                      src="/img/brands/z4.png"
                      alt=""
                      width="127.5"
                      height="85.3"
                    />
                  </figure>
                </div>

                <div className="col">
                  <figure className="px-3 px-md-0 px-xxl-2">
                    <Image
                      src="/img/brands/z5.png"
                      alt=""
                      width="127.5"
                      height="85.3"
                    />
                  </figure>
                </div>

                <div className="col">
                  <figure className="px-3 px-md-0 px-xxl-2">
                    <Image
                      src="/img/brands/z6.png"
                      alt=""
                      width="127.5"
                      height="85.3"
                    />
                  </figure>
                </div>

                <div className="col">
                  <figure className="px-3 px-md-0 px-xxl-2">
                    <Image
                      src="/img/brands/z7.png"
                      alt=""
                      width="127.5"
                      height="85.3"
                    />
                  </figure>
                </div>

                <div className="col">
                  <figure className="px-3 px-md-0 px-xxl-2">
                    <Image
                      src="/img/brands/z8.png"
                      alt=""
                      width="127.5"
                      height="85.3"
                    />
                  </figure>
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
