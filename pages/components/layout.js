import React from "react";
import Footer from "./footer";
import Header from "./header";
import Script from "next/script";
import Head from "next/head";

const Layout = ({ children }, props) => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/mn-favicon.png" />
      </Head>
      <section className="bg-soft-blue">
        <Header />
      </section>

      <main>{children}</main>

      <Footer />
    </>
  );
};

export default Layout;
