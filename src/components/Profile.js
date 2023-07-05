import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import '../Styles/Profile.css';

export default function Profile() {
  const { logoutUser } = useContext(AuthContext);
  const [isUpdate, setIsUpdate] = useState(true);
  const {logoutUser} = useContext(AuthContext);
  // States to display details in the profile
  const [user_name, setUsername] = useState("");
  const [user_contact, setContact] = useState("");
  const [email, setEmail] = useState("");

  // State to update the details in the profile
  const [newUsername, setNewUsername] = useState("");
  const [newcontact, setnewContact] = useState("");
  const navigate = useNavigate();

  const getProfile = async () => {
    const url = `http://127.0.0.1:8000/accounts/profile/${localStorage.getItem(
      "email"
    )}/`;

    const response = await fetch(url);
    const data = await response.json();

    setUsername(data.user_name);
    setContact(data.user_contact);
    setEmail(data.email);
  };

  useEffect(() => {
    getProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleUpdate = () => {
    if (isUpdate === false) {
      setIsUpdate(true);
    } else {
      setIsUpdate(false);
    }
  };

  const handleModify = (event) => {
    event.preventDefault();

    const data = {
      user_name: newUsername ? newUsername : user_name,
      user_contact: newcontact ? newcontact : user_contact,
      email: email,
    };

    fetch(
      `http://127.0.0.1:8000/accounts/modify/${localStorage.getItem("email")}/`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleDelete = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this record?"
    );
    if (confirmDelete) {
      fetch(
        `http://127.0.0.1:8000/accounts/modify/${localStorage.getItem(
          "email"
        )}/`,
        {
          method: "DELETE",
        }
      )
        .then((response) => response.json())
        .then((data) => {
          navigate("/Login");
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };

  return (
    <>
      <div className="container">
        {isUpdate ? (
          <div className=" container">
            <h1 className="mb-5 profile-heading" style={{textAlign:"center", padding:"1rem 0 1rem 0", filter: "brightness(90%)"}}>Profile</h1>
            <div className=" card container">

              <h5>Username-</h5>
              <h4  className="mb-4" style={{color: "#004d40", filter: "brightness(90%)"}}>{user_name}</h4>


              <h5>Contact No.-</h5>
              <h4  className="mb-4" style={{color: "#004d40", filter: "brightness(90%)"}}>{user_contact}</h4>


              <h5>Email Address-</h5>
              <h4  className="mb-4" style={{color: "#004d40", filter: "brightness(90%)"}}>{email}</h4>


              <div className="btns-utils">
              <div className="btn-1">
               <button className="btn   my-2 "  onClick={handleUpdate}>
                Update Profile
              </button>
              <Link to="/PwdChange"  className="btn  my-2">
                Change Password
              </Link>
               </div>
             


              <div className="btn-2" >
              <button 
                className="btn   my-2"
                onClick={handleDelete}
              >
                Delete Profile
              </button>
              <button 
                className="btn  my-2 "
                onClick={logoutUser}
              >
                Log Out
              </button>
              </div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <h1 className="text-center profile-heading mb-5" style={{ padding:"1rem 0 1rem 0", filter: "brightness(90%)"}}>Edit Profile</h1>
            <form className="my-2" onSubmit={handleModify}>
              <div className="container">
                <div className="mb-3 heading-edit">
                  <label style={{fontWeight:"bold"}} htmlFor="user_name" className="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="user_name"
                    name="user_name"
                    aria-describedby="UserNameHelp"
                    defaultValue={user_name}
                    onChange={(e) => {
                      setNewUsername(e.target.value);
                    }}
                  />
                </div>
              </div>

              <div className="container">
                <div className="mb-3 heading-edit">
                  <label style={{fontWeight:"bold"}} htmlFor="user_contact " className="form-label">
                    Contact No.
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="user_contact"
                    name="user_contact"
                    aria-describedby="ContactHelp"
                    defaultValue={user_contact}
                    onChange={(e) => {
                      setnewContact(e.target.value);
                    }}
                  />
                </div>
              </div>

              <div className="container">
                <div className="mb-3 heading-edit">
                  <label style={{fontWeight:"bold"}} htmlFor="InputEmail1" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="InputEmail1"
                    aria-describedby="emailHelp"
                    name="patient_email"
                    autoComplete="email"
                    value={email}
                    readOnly
                    disabled
                  />
                </div>
              </div>

                <div className="btn-profile">
                <button
                type="submit"
                className="btn btn-dark  mx-auto my-4"
              >
                Submit
              </button>

              <button className="btn btn-dark  mx-auto my-4" onClick={handleUpdate}>
                Cancel
              </button>
                </div>
            </form>
          </div>
        )}
      </div>
    </>
  );
}
