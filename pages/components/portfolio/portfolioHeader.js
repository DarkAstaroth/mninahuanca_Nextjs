import React from "react";

const PortfolioHeader = () => {
  return (
    <>
      <section className="wrapper bg-soft-blue">
        <div className="container pt-10 pb-12 pt-md-14 pb-md-16 text-center">
          <div className="row">
            <div className="col-md-9 col-lg-7 col-xl-5 mx-auto">
              <h1 className="display-1 mb-3">My Porfolio</h1>
              <p className="lead px-xxl-10">
                Copy any custom block snippet below and paste it on your page to
                build your website easily.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioHeader;
