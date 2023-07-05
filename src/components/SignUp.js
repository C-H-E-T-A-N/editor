import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import '../Styles/Signup.css';
export default function SignUp() {
  let { signinUser } = useContext(AuthContext);

  return (
    <>
      <div
        className="container mx-auto d-flex justify-content-center align-items-center col-xs-4 col-md-6 col-xl-4"
       
      >
        <div style={{ width: "30rem" }}>
          <div className="card">
            <h2 className="card-heading">Sign Up</h2>
            <form onSubmit={signinUser}>
              <div className="mb-1">
                <label htmlFor="user_name" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="user_name"
                  name="user_name"
                  aria-describedby="UserNameHelp"
                  autoComplete="username"
                  
                />
              </div>

              <div className="mb-1">
                <label htmlFor="user_contact" className="form-label">
                  Contact No.
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="user_contact"
                  name="user_contact"
                  aria-describedby="ContactHelp"
                  autoComplete="contact"
                />
              </div>

              <div className="mb-1">
                <label htmlFor="InputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="InputEmail1"
                  aria-describedby="emailHelp"
                  name="email"
                  autoComplete="email"
                />
              </div>

              <div className="mb-1">
                <label htmlFor="InputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="InputPassword1"
                  name="password"
                  autoComplete="password"
                />
              </div>

              <div className="mb-1">
                <label htmlFor="InputConfirmPassword1" className="form-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="InputConfirmPassword1"
                  name="confirm_password"
                  autoComplete="password"
                />
              </div>

              <div className="row mb-3">
                <div className="col d-flex justify-content-center">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="form2Example31"
                      required
                    />
                    <label
                      className="form-check-label"
                      htmlFor="form2Example31"
                    >
                      {/* Add link to Terms and conditions and Privacy policy */}
                      I accept{" "}
                      <a href="/">terms & conditions and Privacy Policy</a>
                    </label>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="btn-signup mb-2"
                >
                  Sign in
                </button>
              </div>
              <div className="text-center">
                <p>
                  Already a member? <Link to="/Login">Login</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
