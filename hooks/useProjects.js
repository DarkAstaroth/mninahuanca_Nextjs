import React, { useState, useContext, useEffect } from "react";
import { FirebaseContext } from "../firebase";

const useProjects = (orden, type) => {
  const [projects, setProjects] = useState([]);

  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    const getProjects = async () => {
      try {
        firebase.db.collection("projects").onSnapshot(handleSnapchot);
      } catch (error) {
        console.log(error);
      }
    };
    getProjects();
  }, []);

  function handleSnapchot(snapshot) {
    const projects = snapshot.docs.map((doc) => {
      return {
        _id: doc.id,
        ...doc.data(),
      };
    });

    setProjects(projects);
  }

  return { projects };
};

export default useProjects;
