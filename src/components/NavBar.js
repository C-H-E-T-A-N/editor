import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { ReactComponent as Icon } from '../assets/2400506_account_avatar_contact_people_profile_icon.svg';
import '../Styles/Navbar.css'
export default function NavBar() {
  const navigate = useNavigate();
  let { user } = useContext(AuthContext);

  return (
    <>
   
      <nav className="navbar  navbar-expand-lg  navbar-dark" style={{position:"fixed",    backgroundColor: "darkslategray", boxShadow: "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset", zIndex:"999999", width:"100%", top:"0", left:"0"}}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/NewPage">
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
                <Link className="nav-link" to="/NewPage">
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
            <div>
              {user ? (
                // Add profile component to the link
                <>
                  <Link className="mx-1" to="/Profile" style={{textDecoration:"none", color:"#fff",fontSize:"1.3rem"}}>
                  <Icon style={{width:"30px",}}/> {user.username}
                  </Link>
                  {/* <button
                    className="logout"
                    onClick={logoutUser}
                  >
                    Log out
                  </button> */}
                </>
              ) : (
                <>
                  <button
                    className="btn-nav mx-2"
                    onClick={() => {
                      navigate("/Login");
                    }}
                  >
                    LogIn
                  </button>
                  <button
                    className="btn-nav "
                    onClick={() => {
                      navigate("/Signup");
                    }}
                  >
                    Sign Up
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
