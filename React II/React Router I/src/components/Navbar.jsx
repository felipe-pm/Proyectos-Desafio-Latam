import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-info">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav me-auto">
              <Link className="nav-link" aria-current="page" to="/">
                <span className="display-6">🏠</span> Home
              </Link>
              <Link className="nav-link" to="contact">
                <span className="display-6">📙</span>Contacto
              </Link>
            </div>
            <div className="navbar-nav ms-auto">
              <Link className="nav-link active" to="*">
                Dogs House <span className="display-6">🐶</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
