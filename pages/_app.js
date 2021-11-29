import "../styles/globals.css";
import "../styles/css/plugins.css";
import "../styles/css/style.css";
import Layout from "./components/layout";
import firebase, { FirebaseContext } from "../firebase";
import useAutentication from "../hooks/useAutentication";

function MyApp({ Component, pageProps }) {
  const user = useAutentication();
  return (
    <FirebaseContext.Provider
      value={{
        firebase,
        user,
      }}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </FirebaseContext.Provider>
  );
}

export default MyApp;
