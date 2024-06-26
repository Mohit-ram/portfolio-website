import React from "react";


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg  bg-transparent">
      <div className="container">
        <a className="navbar-brand" href="#">
          Mohit
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/portfolio/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#About">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" target='_blank' href="https://mohit-ram.github.io/my-blog/">
                Blog <i className="bi bi-box-arrow-up-right"></i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
