import React from "react";
import Script from "next/script";
import Header from "./header";


const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <h1>hola</h1>
      <main>{children}</main>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ"
        crossorigin="anonymous"
      ></Script>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"
        integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ=="
        crossorigin="anonymous"
      ></Script>
      <Script src="/js/plugins.js"></Script>
      <Script src="/js/theme.js"></Script>
    </>
  );
};

export default Layout;
