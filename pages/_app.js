import "../styles/globals.css";
import "../styles/css/plugins.css";
import "../styles/css/style.css";
import Layout from "./components/layout";
import firebase, { FirebaseContext } from "../firebase";

function MyApp({ Component, pageProps }) {
  return (
    <FirebaseContext.Provider
      value={{
        firebase
      }}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </FirebaseContext.Provider>
  );
}

export default MyApp;
