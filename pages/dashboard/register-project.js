import React from "react";
import HeadPage from "../components/head";
import ProjectTab from "../components/ProjectTab/projectTab";
import Link from "next/link";

const RegisterProject = () => {

  return (
    <>
      <HeadPage title="Register Project" />
      <section className="wrapper bg-soft-blue bg-auto">
        <div className="container py-10 py-md-10 col-12  bg-soft-blue">
          <Link href="/dashboard/">
            <a className="btn btn-navy rounded-pill mb-5">
              <i className="uil uil-arrow-left"></i> Back
            </a>
          </Link>
          <ProjectTab />
        </div>
      </section>
    </>
  );
};

export default RegisterProject;
