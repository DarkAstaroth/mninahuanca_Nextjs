import React from "react"

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg fancy navbar-light navbar-bg-light caret-none">
        <div className="container">
          <div className="navbar-collapse-wrapper bg-white d-flex flex-row flex-nowrap w-100 justify-content-between align-items-center">
            <div className="navbar-brand w-100">
              <a href="./index.html">
                {/* <img
                  src="./assets/img/logo.png"
                  srcSet="./assets/img/logo@2x.png 2x"
                  alt=""
                /> */}
              </a>
            </div>
            <div className="navbar-collapse offcanvas-nav">
              <div className="offcanvas-header d-lg-none d-xl-none">
                <a href="./index.html">
                  {/* <img
                    src="./assets/img/logo-light.png"
                    srcSet="./assets/img/logo-light@2x.png 2x"
                    alt=""
                  /> */}
                </a>
                <button
                  type="button"
                  className="btn-close btn-close-white offcanvas-close offcanvas-nav-close"
                  aria-label="Close"
                ></button>
              </div>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="!#">
                    Home
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="!#">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="!#">
                    Skills
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="!#">
                    Portfolio
                  </a>
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
  )
}

export default Header
