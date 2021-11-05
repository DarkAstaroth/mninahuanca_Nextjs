import React from "react";

const Loading = () => {
  return (
    <>
      <section
        className=" wrapper image-wrapper bg-auto no-overlay bg-image text-center py-14 py-md-16 bg-map"
        data-image-src="./assets/img/map.png"
      >
        <div className="container py-0 py-md-18">
          <div className="row">
            <div className="col-lg-6 col-xl-5 mx-auto">
              <img src="/img/load-app.gif" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Loading;
