import React, { useEffect, useState } from "react";
import firebase from "../firebase";

function useAutentication() {
  const [userAutenticaded, setUserAutenticated] = useState(null);
  useEffect(() => {
    const unsuscribe = firebase.auth.onAuthStateChanged((user) => {
      if (user) {
        setUserAutenticated(user);
      } else {
        setUserAutenticated(null);
      }

      return () => unsuscribe();
    });
  }, []);

  return userAutenticaded;
}

export default useAutentication;
