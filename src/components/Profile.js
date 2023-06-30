import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Profile() {
  const [isUpdate, setIsUpdate] = useState(true);

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
            <h2 className="text-center">Profile</h2>
            <div className=" container">
              <h5>Username</h5>
              <p>{user_name}</p>
              <h5>Contact No.</h5>
              <p>{user_contact}</p>
              <h5>Email Address</h5>
              <p>{email}</p>
              <button className="btn btn-dark my-2" onClick={handleUpdate}>
                Update Profile
              </button>
              <Link to="/PwdChange" className="btn btn-dark my-2 mx-2">
                Change Password
              </Link>
              <button
                className="btn btn-dark float-end my-2"
                onClick={handleDelete}
              >
                Delete Profile
              </button>
            </div>
          </div>
        ) : (
          <div>
            <h2 className="text-center">Edit Profile</h2>
            <form className="my-2" onSubmit={handleModify}>
              <div className="container">
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
                    defaultValue={user_name}
                    onChange={(e) => {
                      setNewUsername(e.target.value);
                    }}
                  />
                </div>
              </div>

              <div className="container">
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
                    defaultValue={user_contact}
                    onChange={(e) => {
                      setnewContact(e.target.value);
                    }}
                  />
                </div>
              </div>

              <div className="container">
                <div className="mb-3">
                  <label htmlFor="InputEmail1" className="form-label">
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

              <button
                type="submit"
                className="btn btn-dark d-grid gap-2 col-3 mx-auto my-4"
              >
                Submit
              </button>

              <button className="btn btn-dark" onClick={handleUpdate}>
                Cancel
              </button>
            </form>
          </div>
        )}
      </div>
    </>
  );
}
