import React from "react";
import Footer from "./footer";
import Header from "./header";

const Layout = ({ children }) => {
  return (
    <>
      <section className="bg-soft-blue">
        <Header />
      </section>

      <main>{children}</main>

      <Footer />
    </>
  );
};

export default Layout;
