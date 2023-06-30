import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

export default function NavBar() {
  const navigate = useNavigate();
  let { user, logoutUser } = useContext(AuthContext);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            DarkTech
          </Link>
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
                <Link className="nav-link active" to="/">
                  Create
                </Link>
              </li>

              {user ? (
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    aria-current="page"
                    to="/Dashboard"
                  >
                    DashBoard
                  </Link>
                </li>
              ) : (
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/Login">
                    DashBoard
                  </Link>
                </li>
              )}
            </ul>
            <ul className="navbar-nav mb-2 mb-lg-0 float-end text-light">
              <li>
                <Link className="nav-link" to="/About">
                  About
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/Contact">
                  Contact Us
                </Link>
              </li>
            </ul>
            <div>
              {user ? (
                // Add profile component to the link
                <>
                  <Link className="mx-1" to="/Profile">
                    Hello {user.username}!
                  </Link>
                  <button
                    className="btn btn-outline-primary mx-1"
                    onClick={logoutUser}
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <button
                    className="btn btn-outline-primary mx-1 "
                    onClick={() => {
                      navigate("/Login");
                    }}
                  >
                    Login
                  </button>
                  <button
                    className="btn btn-outline-primary mx-1 "
                    onClick={() => {
                      navigate("/Signup");
                    }}
                  >
                    Signup
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
