import React from "react";
import useProjects from "../../../hooks/useProjects";
import Project from "../../project/[slug]";

const TableProject = () => {
  const { projects } = useProjects();

  return (
    <>
      <div className="card mt-5">
        <div className="card-body">
          <table className="table table-striped">
            <tr>
              <th>N°</th>
              <th>Project Name</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
            {projects.map((item,index) => (
              <tr key={item.id}>
                <td>{index+1}</td>
                <td>{item.title}</td>
                <td>{item.shortDesc}</td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </>
  );
};

export default TableProject;
