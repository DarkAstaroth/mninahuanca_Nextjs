import React from "react";
import Link from "next/dist/client/link";
import TableProject from "./tableProject";

const DashboardContent = () => {
  return (
    <>
      <section className="wrapper bg-soft-blue bg-auto">
        <div className="container py-10 py-md-10 col-12  bg-soft-blue">
          <h1>Dashboard</h1>
          <Link href="/dashboard/register-project">
            <a className="btn btn-navy rounded-pill">
              <i className="uil uil-plus"></i> Create new
            </a>
          </Link>
          <TableProject />
        </div>
      </section>
    </>
  );
};

export default DashboardContent;
