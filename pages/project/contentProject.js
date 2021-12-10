import React, { useState } from "react";

const ContentProject = ({ props }) => {
  return (
    <>
      {props ? (
        <section className="wrapper bg-light wrapper-border">
          <div className="container pb-14 pb-md-16">
            <div className="row">
              <div className="col-12">
                <article className="mt-n18">
                  <figure className="rounded mb-8 mb-md-12">
                    <img src={props.urlImage} alt="image" />
                  </figure>
                  <div className="row">
                    <div className="col-lg-10 offset-lg-1">
                      <h2 className="display-6 mb-4">About the Project</h2>
                      <div className="row gx-0">
                        <div className="col-md-9 text-justify">
                          <p>{props.largeDesc}</p>
                        </div>

                        <div className="col-md-2 ms-auto">
                          <ul className="list-unstyled">
                            <li>
                              <h5 className="mb-1">Frameworks</h5>
                              {props.langs.map((e, index) => (
                                <img
                                  key={index}
                                  className="me-4 mb-3 mt-2"
                                  src={`/img/devIcons/${e}.svg`}
                                  alt="Frameworks"
                                  width={50}
                                />
                              ))}
                            </li>
                            <li>
                              <a href="#" className="more hover">
                                See Project
                              </a>
                            </li>
                            <li>
                              <a className="btn btn-navy rounded-pill mt-4">
                                <i className="uil uil-github"></i> GitHub
                                Project
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row mt-5 gx-md-6 gy-6">
                    <div className="item col-md-6">
                      <figure className="rounded">
                        <img src={props.urlImage} alt="image" />
                      </figure>
                    </div>

                    <div className="item col-md-6">
                      <figure className="rounded">
                        <img src={props.urlImage} alt="image" />
                      </figure>
                    </div>

                    <div className="item col-md-6">
                      <figure className="rounded">
                        <img src={props.urlImage} alt="image" />
                      </figure>
                    </div>

                    <div className="item col-md-6">
                      <figure className="rounded">
                        <img src={props.urlImage} alt="image" />
                      </figure>
                    </div>
                  </div>

                  <div className="row mt-8 mt-md-12">
                    <div className="col-md-10 offset-md-1 text-justify">
                      <h2 className="mb-4">Quam Mollis Bibendum</h2>
                      <p>{props.largeDesc}</p>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
};

export default ContentProject;
