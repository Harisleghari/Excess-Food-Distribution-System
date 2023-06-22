/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Header.css";
export default function Header() {
  // const [mode, setMode] = useState(true);

  // const clickHandler = () => {
  //   setMode(!mode);
  // };
  return (
    <>
      <header>
        {/* <div className="container-fluied navbar-class">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
          <div className="col-md-3 mb-2 mb-md-0">
            <a
              href="/"
              className="d-inline-flex link-body-emphasis text-decoration-none ms-5"
            >
              <img src="F:/BSCS(2019-23)/EFDS/client-efds/src/assets/logo" alt="Website Logo" />
            </a>
          </div>
          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0 ms-5">
            <li>
              <a href="#" className="nav-link px-2 nav-link-class">
                About us
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-2 nav-link-class">
                Get Involve
              </a>
            </li>

            <li>
              <a href="#" className="nav-link px-2 nav-link-class">
                Forum
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-2 nav-link-class">
                Contact us
              </a>
            </li>
          </ul>

          <div className="col-md-3 text-center">
            <button type="button" className="btn btn-outline-primary me-2 login-btn">
              Login
            </button>
            <button type="button" className="btn btn-primary signup-btn">
              Sign-up
            </button>
          </div>
        </div>
      </div> */}
        <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light shadow">
          <a class="navbar-brand" href="#">
            {" "}
            <img
              class="logo-size "
              src={require("./images/website-logo.png")}
              alt="website logo"
            />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  Home <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  About us
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Get Involve
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Forum
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Contact us
                </a>
              </li>
            </ul>
            <button
              type="button"
              className="btn btn-outline-default me-2 login-btn"
            >
              Login
            </button>
            <button
              type="button"
              className="btn btn-outline-default me-2 login-btn"
            >
              Sign up
            </button>
          </div>
        </nav>
      </header>
    </>
  );
}
