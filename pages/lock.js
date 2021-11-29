import React from "react";
import HeadPage from "./components/head";
import Link from "next/link";

const LockPage = () => {
  return (
    <>
      <HeadPage title="Uppss!" />
      <section className="bg-soft-blue wrapper image-wrapper bg-auto no-overlay bg-image text-center py-14 py-md-16 bg-map">
        <div className="container py-0 py-md-18">
          <div className="row">
            <div className="col-lg-6 col-xl-5 mx-auto">
              <h2 className="display-4 mb-3 text-center">Uppps!!</h2>
              <p className="lead mb-5 px-md-16 px-lg-3">
                You do not have access to this page
              </p>
              <Link href="/mn-login ">
                <a className="btn btn-primary rounded-pill">Sign In</a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LockPage;
