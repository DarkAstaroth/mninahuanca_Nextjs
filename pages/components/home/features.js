import React from "react";
import Image from "next/image";

const Features = () => {
  return (
    <>
      <section className="wrapper bg-light">
        <div className="container py-14 py-md-16">
          <div className="row gx-lg-0 gy-10 align-items-center">
            <div className="col-lg-6">
              <div className="row g-6 text-center">
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-lg-12">
                      <figure className="rounded mb-6">
                        <Image
                          src="/img/photos/se1.jpg"
                          srcset="/img/photos/se1@2x.jpg 2x"
                          alt=""
                          width='307.5'
                          height='293.94'
                        />
                      </figure>
                    </div>

                    <div className="col-lg-12">
                      <div className="card">
                        <div className="card-body">
                          <div className="icon btn btn-circle btn-lg btn-soft-purple disabled mb-3">
                            {" "}
                            <i className="uil uil-monitor"></i>{" "}
                          </div>
                          <h4>Web Design</h4>
                          <p className="mb-2">
                            Nulla vitae elit libero, a pharetra augue. Donec id
                            elit non mi porta gravida.
                          </p>
                          <a href="#" className="more hover link-purple">
                            Learn More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="row">
                    <div className="col-lg-12 order-md-2">
                      <figure className="rounded mb-6 mb-md-0">
                        <Image
                          src="/img/photos/se2.jpg"
                          srcset="/img/photos/se2@2x.jpg 2x"
                          alt=""
                          width='307.5'
                          height='293.94'
                        />
                      </figure>
                    </div>

                    <div className="col-lg-12">
                      <div className="card mb-md-6 mt-lg-6">
                        <div className="card-body">
                          <div className="icon btn btn-circle btn-lg btn-soft-purple disabled mb-3">
                            {" "}
                            <i className="uil uil-mobile-android"></i>{" "}
                          </div>
                          <h4>Mobile Design</h4>
                          <p className="mb-2">
                            Nulla vitae elit libero, a pharetra augue. Donec id
                            elit non mi porta gravida.
                          </p>
                          <a href="#" className="more hover link-purple">
                            Learn More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-5 offset-lg-1">
              <h2 className="display-4 mb-3">What I Do?</h2>
              <p className="lead fs-lg">
                The full service we are offering is specifically designed to
                meet your business needs.
              </p>
              <p>
                Donec ullamcorper nulla non metus auctor fringilla. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Nullam quis risus
                eget urna mollis ornare vel eu leo. Nullam quis risus eget urna
                mollis ornare vel eu leo. Maecenas faucibus mollis elit
                interdum. Duis mollis, est non commodo luctus, nisi erat ligula.{" "}
              </p>
              <a href="#" className="btn btn-purple rounded-pill mt-3">
                More Details
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
