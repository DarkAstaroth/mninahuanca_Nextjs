import React from "react";
import Link from "next/link";
import HeadPage from "./components/head";

export default function Page404() {
  return (
    <>
      <HeadPage title="Uppss!" />
      <section
        className="bg-soft-blue wrapper image-wrapper bg-auto no-overlay bg-image text-center py-14 py-md-16 bg-map"
        data-image-src="./assets/img/map.png"
      >
        <div className="container py-0 py-md-18">
          <div className="row">
            <div className="col-lg-6 col-xl-5 mx-auto">
              <h1 className="display-1 mb-3 text-center">404</h1>
              <h2 className="display-4 mb-3 text-center">Page not found</h2>
              <p className="lead mb-5 px-md-16 px-lg-3">
                We can&apos;t seem to find the page you&apos;re looking for
              </p>
              <Link href="/">
                <a className="btn btn-primary rounded-pill">Go Home</a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
