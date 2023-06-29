import React, { useState, useContext }  from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AuthContext from '../context/AuthContext'

export default function SignUp() {

//   const [user_name, setUsername] = useState("");
//   const [user_contact, setUserContact] = useState("");
//   const [user_email, setUserEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
  let {signinUser} = useContext(AuthContext)

  const navigate = useNavigate();

//   const handleSubmit = (event) => {
//     event.preventDefault();
  
//     if (password === confirmPassword) {
//       const data = {
//         user_name: user_name,
//         user_contact: user_contact,
//         user_email: user_email,
//         password: password,
//       };
  
//       fetch("http://127.0.0.1:8000/accounts/signup/", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//       })
//         .then((response) => response.json())
//         .then((data) => {
//           if (data.message === "Email already exists") {
//             alert("Email already exists");
//           } else {
//             navigate('/'); // Redirect to the desired page after successful signup
//           }
//         })
//         .catch((error) => {
//           console.error("Error:", error);
//         });
//     } else {
//       alert("Enter Password Again");
//     }
//   };
  

  return (
<>
<div className="container mx-auto d-flex justify-content-center align-items-center col-xs-4 col-md-6 col-xl-4" style={{ height: "93vh"}}>
  <div style={{ width: "22rem"}}>
    <div className="card-body">
    <h4 className="card-title text-center mb-4">Signup</h4>
      <form onSubmit={signinUser}>
           <div className="mb-3">
             <label htmlFor="user_name" className="form-label">
               Username
             </label>
             <input
              type="text"
              className="form-control"
              id="user_name"
              name="user_name"
              aria-describedby="UserNameHelp"
              autoComplete='username'
            //   onChange={(e) => setUsername(e.target.value)}
            />
          </div>

           <div className="mb-3">
            <label htmlFor="user_contact" className="form-label">
              Contact No.
            </label>
             <input
              type="tel"
              className="form-control"
              id="user_contact"
              name="user_contact"
              aria-describedby="ContactHelp"
              autoComplete='contact'
            //   onChange={(e) => setUserContact(e.target.value)}
            />
          </div>

           <div className="mb-3">
             <label htmlFor="InputEmail1" className="form-label">
               Email address
             </label>
             <input
              type="email"
              className="form-control"
              id="InputEmail1"
              aria-describedby="emailHelp"
              name="user_email"
              autoComplete="email"
            //   onChange={(e) => setUserEmail(e.target.value)}
            />
          </div>
    
              <div className="mb-3">
            <label htmlFor="InputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="InputPassword1"
              name="password"
              autoComplete="password"
            //   onChange={(e) => setPassword(e.target.value)}
            />
          </div>
    
           <div className="mb-3">
             <label htmlFor="InputConfirmPassword1" className="form-label">
               Confirm Password
             </label>
             <input
              type="password"
              className="form-control"
              id="InputConfirmPassword1"
              name="confirm_password"
              autoComplete='password'
            //   onChange={(e) => setConfirmPassword(e.target.value)}
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
                required
              />
              <label className="form-check-label" htmlFor="form2Example31">
                I accept <a href="#">terms & conditions</a>
              </label>
            </div>
          </div>
        </div>

          <div className="text-center">
        <button type="submit" className="btn btn-primary btn-block mb-3">
          Sign in
        </button>
          </div>

         <div className="text-center">
          <p>
            Already a member? <Link to="/Login">Login</Link>
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