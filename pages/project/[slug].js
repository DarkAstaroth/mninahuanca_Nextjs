import { useRouter } from "next/dist/client/router";
import React, { useContext, useEffect, useState } from "react";
import Page404 from "../404";
import ContentProject from "./contentProject";
import HeaderProject from "./headerProject";
import { FirebaseContext } from "../../firebase";
import Loading from "../components/loading";
import HeadPage from "../components/head";

const Project = () => {
  const router = useRouter();
  const {
    query: { slug },
  } = router;

  const [error, setError] = useState(false);
  const [project, setProject] = useState({});
  const [consultarBD, setConsultarBD] = useState(true);

  // context from firebase
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    if (slug && consultarBD) {
      const getProject = async () => {
        const collectionRef = firebase.db.collection("projects");
        const snapshot = await collectionRef.where("slug", "==", slug).get();

        if (!snapshot.empty) {
          snapshot.forEach((doc) => {
          setProject(doc.data());
          });
          setConsultarBD(false);
        } else {
          setError(true);
          setConsultarBD(false);
        }
      };
      getProject();
    }
    // eslint-disable-next-line
  }, [slug]);

  if (Object.keys(project).length === 0 && !error) return <Loading />;

  return (
    <>
      {error ? (
        <Page404 />
      ) : (
        <>
          <HeadPage props={project} />
          <HeaderProject props={project} />
          <ContentProject props={project} />
        </>
      )}
    </>
  );
};

export default Project;
