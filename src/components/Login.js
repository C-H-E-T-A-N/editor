import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from '../context/AuthContext'


export default function Login() {
    let {loginUser} = useContext(AuthContext)


  return (
    <>
      <div className="container mx-auto d-flex justify-content-center align-items-center col-xs-4 col-md-6 col-xl-4" style={{ height: "89vh"}}>
        <div style={{ width: "22rem"}}>
          <div className="card-body">
          <h4 className="card-title text-center mb-4">Login</h4>
            <form onSubmit={loginUser}>
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form2Example1">
                  Email address
                </label>
                <input
                  type="email"
                  name="user_email"
                  id="form2Example1"
                  className="form-control"
                  autoComplete="email"
                />
              </div>

              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form2Example2">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="form2Example2"
                  className="form-control"
                  autoComplete="current-password"
                />
              </div>

              <div className="row mb-4">
                <div className="col d-flex justify-content-center">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="form2Example31"
                      defaultChecked
                    />
                    <label className="form-check-label" htmlFor="form2Example31">
                      Remember me
                    </label>
                  </div>
                </div>

                <div className="col">
                  <a href="#">Forgot password?</a>
                </div>
              </div>

                <div className="text-center">
              <button type="submit" className="btn btn-primary btn-block mb-4">
                Log in
              </button>
                </div>

               <div className="text-center">
                <p>
                  Not a member? <Link to="/Signup">Register</Link>
                </p>
               {/* <p>or sign up with:</p>
                <button
                  type="button"
                  className="btn btn-link btn-floating mx-1"
                >
                  <i className="fab fa-facebook-f"></i>
                </button>

                <button
                  type="button"
                  className="btn btn-link btn-floating mx-1"
                >
                  <i className="fab fa-google"></i>
                </button>

                <button
                  type="button"
                  className="btn btn-link btn-floating mx-1"
                >
                  <i className="fab fa-twitter"></i>
                </button>

                <button
                  type="button"
                  className="btn btn-link btn-floating mx-1"
                >
                  <i className="fab fa-github"></i>
                </button>*/}
              </div> 
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
