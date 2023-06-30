import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";

export default function PasswordChange() {
  let { handleModifyPassword } = useContext(AuthContext);

  return (
    <>
      <div className="container">
        <h2 className="text-center">Change Password</h2>
        <form className="my-2" onSubmit={handleModifyPassword}>
          <div className="container">
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
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
              <label htmlFor="new_password" className="form-label">
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
              <label htmlFor="confirm_new_password" className="form-label">
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

          <button
            type="submit"
            className="btn btn-dark d-grid gap-2 col-3 mx-auto my-4"
          >
            Submit
          </button>

          <Link className="btn btn-dark" to="/Profile">
            Cancel
          </Link>
        </form>
      </div>
    </>
  );
}
