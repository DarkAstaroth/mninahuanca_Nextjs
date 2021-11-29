import React from "react";
import ProjectTab from "../ProjectTab/projectTab";


const DashboardContent = () => {
  return (
    <>
      <section className="wrapper bg-soft-blue bg-auto">
        <div className="container py-10 py-md-10 col-12  bg-soft-blue">
          <h1>Dashboard</h1>
          <ProjectTab />
        </div>
      </section>
    </>
  );
};

export default DashboardContent;
