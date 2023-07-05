import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import '../Styles/Profile.css';
export default function PasswordChange() {
  let { handleModifyPassword } = useContext(AuthContext);

  return (
    <>
      <div className="container">
        <h1 className="text-center profile-heading mb-5"  style={{textAlign:"center", padding:"1rem 0 1rem 0", filter: "brightness(90%)"}}>Change Password</h1>
        <form className="my-2" onSubmit={handleModifyPassword}>
          <div className="container">
            <div className="mb-3">
              <label style={{fontWeight:"bold", color:"black"}} htmlFor="password" className="form-label">
                Old Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                aria-describedby="PasswordHelp"
                autoComplete="password"
              />
            </div>
          </div>

          <div className="container">
            <div className="mb-3">
              <label style={{fontWeight:"bold", color:"black"}} htmlFor="new_password" className="form-label">
                New Password
              </label>
              <input
                type="password"
                className="form-control"
                id="new_password"
                name="new_password"
                aria-describedby="NewPwdHelp"
                autoComplete="new-password"
              />
            </div>
          </div>

          <div className="container">
            <div className="mb-3">
              <label style={{fontWeight:"bold", color:"black"}} htmlFor="confirm_new_password" className="form-label">
                Confirm New Password
              </label>
              <input
                type="password"
                className="form-control"
                id="confirm_new_password"
                name="confirm_new_password"
                aria-describedby="ConfirmNewPwdHelp"
                autoComplete="confirm-new-password"
              />
            </div>
          </div>
          
          <div style={{
            display:"flex",
            justifyContent:"space-between"
          }}>
          <button
            type="submit"
            className="btn btn-dark  mx-auto my-4"
          >
            Submit
          </button>

          <Link className="btn btn-dark mx-auto my-4" to="/Profile">
            Cancel
          </Link>

          </div>
          
        </form>
      </div>
    </>
  );
}
