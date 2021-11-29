import React from "react";

const PortfolioHeader = () => {
  return (
    <>
      <section className="wrapper bg-soft-blue">
        <div className="container pt-10 pb-12 pt-md-14 pb-md-16 text-center">
          <div className="row">
            <div className="col-md-9 col-lg-7 col-xl-5 mx-auto">
              <h1 className="display-1 mb-3">My Porfolio</h1>
              <p className="lead px-xxl-3">
              These are all my projects that I carry out throughout my career in the world of web development, enjoy it and I hope you like it
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioHeader;
