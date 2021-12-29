import React from "react";
import Script from "next/script";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container pb-7">
          <div className="d-md-flex align-items-center justify-content-between">
            <p className="mb-2 mb-lg-0">
              © 2021 mninahuanca. Always made with love{" "}
              <span className="text-danger fs-25"> &#10084;</span>
            </p>
            <nav className="nav social social-muted mb-0 text-md-end">
              <a href="!#">
                <i className="uil uil-twitter"></i>
              </a>
              <a href="!#">
                <i className="uil uil-facebook-f"></i>
              </a>
              <a href="!#">
                <i className="uil uil-behance   "></i>
              </a>
              <a href="!#">
                <i className="uil uil-instagram"></i>
              </a>
              <a href="!#">
                <i className="uil uil-youtube"></i>
              </a>
            </nav>
          </div>
        </div>
      </footer>

      {/* <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ"
        crossorigin="anonymous"
      ></Script> */}
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"
        integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ=="
        crossorigin="anonymous"
        strategy="beforeInteractive"
      ></Script>

      {/* <Script src="/js/headhesive.js" strategy="beforeInteractive"></Script>
      <Script src="/js/isotope.pkgd.min.js" strategy="beforeInteractive"></Script>
      <Script src="/js/imagesloaded.pkgd.min.js" strategy="beforeInteractive"></Script>
      <Script src="/js/owl.carousel.min.js" strategy="beforeInteractive"></Script> */}
      <Script src="/js/plugins.js" strategy="beforeInteractive"></Script>
      <Script src="/js/theme.js"></Script>
    </>
  );
};

export default Footer;
