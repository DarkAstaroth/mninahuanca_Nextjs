import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg fancy navbar-light navbar-bg-light caret-none">
        <div className="container">
          <div className="navbar-collapse-wrapper bg-white d-flex flex-row flex-nowrap w-100 justify-content-between align-items-center">
            <div className="navbar-brand w-100">
              <Link href="/">
                <a>
                  <Image
                    src="/img/mninahuanca-logo.png"
                    alt="Manuel Ninahuanca"
                    width="200 "
                    height="32"
                  />
                </a>
              </Link>
            </div>
            <div className="navbar-collapse offcanvas-nav">
              <div className="offcanvas-header d-lg-none d-xl-none">
                <a href="./index.html">
                  <Image
                    src="/img/mninahuanca-white.png"
                    alt="Manuel Ninahuanca"
                    width="150 "
                    height="24.5"
                  />
                </a>
                <button
                  type="button"
                  className="btn-close btn-close-white offcanvas-close offcanvas-nav-close"
                  aria-label="Close"
                ></button>
              </div>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link href="/">
                    <a className="nav-link">Home</a>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link href="/about">
                    <a className="nav-link">About</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/#skills">
                    <a className="nav-link">Skills</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/portfolio">
                    <a className="nav-link">Portfolio</a>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="navbar-other w-100 d-flex ms-auto">
              <ul
                className="navbar-nav flex-row align-items-center ms-auto"
                data-sm-skip="true"
              >
                <li className="nav-item d-none d-md-block">
                  <a
                    href="./contact.html"
                    className="btn btn-sm btn-primary rounded-pill"
                  >
                    Contact
                  </a>
                </li>
                <li className="nav-item d-lg-none">
                  <div className="navbar-hamburger">
                    <button
                      className="hamburger animate plain"
                      data-toggle="offcanvas-nav"
                    >
                      <span></span>
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
