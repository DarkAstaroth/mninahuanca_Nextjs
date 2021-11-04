import React from "react";

const ContentProject = (props) => {
  return (
    <>
      <section className="wrapper bg-light wrapper-border">
        <div className="container pb-14 pb-md-16">
          <div className="row">
            <div className="col-12">
              <article className="mt-n21">
                <figure className="rounded mb-8 mb-md-12">
                  <img src="./assets/img/photos/pp1.jpg" alt="" />
                </figure>
                <div className="row">
                  <div className="col-lg-10 offset-lg-1">
                    <h2 className="display-6 mb-4">About the Project</h2>
                    <div className="row gx-0">
                      <div className="col-md-9 text-justify">
                        <p>
                          Cras mattis consectetur purus sit amet fermentum.
                          Fusce dapibus, tellus ac cursus commodo, tortor mauris
                          condimentum nibh, ut fermentum massa justo sit amet
                          risus. Integer posuere erat a ante venenatis. Etiam
                          porta sem malesuada magna mollis euismod. Aenean
                          lacinia bibendum.
                        </p>
                        <p>
                          Donec id elit non mi porta gravida at eget metus. Cras
                          mattis consectetur purus sit amet fermentum. Praesent
                          commodo cursus magna, vel scelerisque nisl consectetur
                          et. Donec sed odio dui. Aenean eu leo quam.
                          Pellentesque ornare sem lacinia quam venenatis
                          vestibulum. Sed posuere consectetur est at lobortis.
                          Vivamus sagittis lacus vel augue laoreet rutrum
                          faucibus dolor auctor.
                        </p>
                      </div>

                      <div className="col-md-2 ms-auto">
                        <ul className="list-unstyled">
                          <li>
                            <h5 className="mb-1">Date</h5>
                            <p>17 May 2018</p>
                          </li>
                          <li>
                            <h5 className="mb-1">Client Name</h5>
                            <p>Cool House</p>
                          </li>
                        </ul>
                        <a href="#" className="more hover">
                          See Project
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row mt-5 gx-md-6 gy-6">
                  <div className="item col-md-6">
                    <figure className="rounded">
                      <img src="./assets/img/photos/pp2.jpg" alt="" />
                    </figure>
                  </div>

                  <div className="item col-md-6">
                    <figure className="rounded">
                      <img src="./assets/img/photos/pp3.jpg" alt="" />
                    </figure>
                  </div>

                  <div className="item col-md-6">
                    <figure className="rounded">
                      <img src="./assets/img/photos/pp4.jpg" alt="" />
                    </figure>
                  </div>

                  <div className="item col-md-6">
                    <figure className="rounded">
                      <img src="./assets/img/photos/pp5.jpg" alt="" />
                    </figure>
                  </div>
                </div>

                <div className="row mt-8 mt-md-12">
                  <div className="col-md-10 offset-md-1 text-justify">
                    <h2 className="mb-4">Quam Mollis Bibendum</h2>
                    <p>
                      Maecenas sed diam eget risus varius blandit sit amet non
                      magna. Donec ullamcorper nulla non metus auctor fringilla.
                      Cras mattis consectetur purus sit amet fermentum. Aenean
                      lacinia bibendum nulla sed consectetur. Curabitur blandit
                      tempus porttitor. Praesent commodo cursus magna, vel
                      scelerisque nisl consectetur et. Donec id elit non mi
                      porta gravida at eget metus. Donec id elit non mi porta
                      gravida at eget metus. Cras mattis consectetur purus sit
                      amet fermentum.
                    </p>
                    <p>
                      Aenean lacinia bibendum nulla sed consectetur. Duis
                      mollis, est non commodo luctus, nisi erat porttitor
                      ligula, eget lacinia odio sem nec elit. Maecenas faucibus
                      mollis interdum. Maecenas sed diam eget risus varius
                      blandit sit amet non magna. Morbi leo risus, porta ac
                      consectetur ac, vestibulum at eros. Nulla vitae elit
                      libero, a pharetra augue. Maecenas faucibus mollis
                      interdum etiam porta.
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContentProject;
