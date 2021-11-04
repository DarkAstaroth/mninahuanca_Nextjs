import { useRouter } from "next/dist/client/router";
import React, { useContext, useEffect, useState } from "react";
import Page404 from "../404";
import ContentProject from "./contentProject";
import HeaderProject from "./heagerProject";
import { FirebaseContext } from "../../firebase";

const Project = () => {
  const projects = [
    { id: "1", title: "Natours" },
    { id: "2", title: "Trillo" },
  ];

  const router = useRouter();
  const {
    query: { id },
  } = router;

  const [error, setError] = useState(false);
  const [project, setProject] = useState({});
  const [consultarBD, setConsultarBD] = useState(true);

  // context from firebase
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    if (id && consultarBD) {
      const getProject = async () => {
        const projectQuery = await firebase.db.collection("projects").doc(id);
        const project = await projectQuery.get();
        if (project.exists) {
          setProject(project.data());
          setConsultarBD(false);
        } else {
          setError(true);
          setConsultarBD(false);
        }
      };
      getProject();
      console.log(error)
    }
  }, [id]);

  if (Object.keys(project).length === 0 && !error) return 'Cargando...';

  return (
    <>
      {error ? (
        <Page404 />
      ) : (
        <>
          {" "}
          <HeaderProject /> <ContentProject />{" "}
        </>
      )}
    </>
  );
};

export default Project;
