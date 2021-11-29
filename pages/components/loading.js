import React from "react";
import Image from "next/image";
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
              <Image
                src="/img/load-app.gif"
                alt="Loading"
                width="100"
                height="100"  
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Loading;
