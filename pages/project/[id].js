import { useRouter } from "next/dist/client/router";
import React, { useContext, useEffect, useState } from "react";
import Page404 from "../404";
import ContentProject from "./contentProject";
import HeaderProject from "./heagerProject";
import { FirebaseContext } from "../../firebase";
import Loading from "../components/loading";

import HeadPage from "../components/head";

const Project = () => {
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
        console.log(project.data);
        if (project.exists) {
          setProject(project.data());
          setConsultarBD(false);
        } else {
          setError(true);
          setConsultarBD(false);
        }
      };
      getProject();
      console.log(error);
    }
    // eslint-disable-next-line
  }, [id]);

  if (Object.keys(project).length === 0 && !error) return <Loading />;

  return (
    <>
      {error ? (
        <Page404 />
      ) : (
        <>
          <HeadPage title={project.title}></HeadPage>
          <HeaderProject props={project} /> <ContentProject props={project} />
        </>
      )}
    </>
  );
};

export default Project;
