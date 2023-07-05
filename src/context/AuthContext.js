import { createContext, useState, useEffect } from "react";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const [pages, setPages] = useState([]);
  let [user, setUser] = useState(() =>
    localStorage.getItem("authTokens")
      ? jwtDecode(localStorage.getItem("authTokens"))
      : null
  );
  let [authTokens, setAuthTokens] = useState(() =>
    localStorage.getItem("authTokens")
      ? JSON.parse(localStorage.getItem("authTokens"))
      : null
  );
  let [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  let loginUser = async (e) => {
    e.preventDefault();
    const response = await fetch("http://127.0.0.1:8000/accounts/token/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: e.target.email.value,
        password: e.target.password.value,
      }),
    });

    let data = await response.json();

    if (data.detail === "No active account found with the given credentials") {
      alert("Enter Correct Credentials");
    } else {
      localStorage.setItem("authTokens", JSON.stringify(data));
      setAuthTokens(data);
      setUser(jwtDecode(data.access));
      const userEmail = jwtDecode(data.access).email;
      localStorage.setItem("email", userEmail);
      navigate("/");
    }
  };

  let signinUser = async (e) => {
    e.preventDefault();
    if (e.target.password.value === e.target.confirm_password.value) {
      const data = {
        user_name: e.target.user_name.value,
        user_contact: e.target.user_contact.value,
        email: e.target.email.value,
        password: e.target.password.value,
      };

      fetch("http://127.0.0.1:8000/accounts/signup/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.message === "Email already exists") {
            alert("Email already exists");
          } else {
            loginUser(e); // Redirect to the desired page after successful signup
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } else {
      alert("Enter Password Again");
    }
  };

  const handleModifyPassword = (e) => {
    e.preventDefault();
    if (e.target.new_password.value === e.target.confirm_new_password.value) {
      const data = {
        password: e.target.password.value,
        new_password: e.target.new_password.value,
      };
      fetch(
        `http://127.0.0.1:8000/accounts/passchange/${localStorage.getItem(
          "email"
        )}/`,
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
          if (data.detail === "Password Changed Successfully") {
            logoutUser(e);
            alert("Password Changed Succesfully. Please Login Again");
          } else {
            alert("Enter Old Password Again");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } else {
      alert("Enter New Password Again");
    }
  };

  let logoutUser = (e) => {
    e.preventDefault();
    localStorage.removeItem("authTokens");
    localStorage.removeItem("email");
    setAuthTokens(null);
    setUser(null);
    navigate("/Login");
  };

  const updateToken = async () => {
    const response = await fetch(
      "http://127.0.0.1:8000/accounts/token/refresh/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ refresh: authTokens?.refresh }),
      }
    );

    const data = await response.json();
    if (response.status === 200) {
      setAuthTokens(data);
      setUser(jwtDecode(data.access));
      localStorage.setItem("authTokens", JSON.stringify(data));
    } else {
      logoutUser();
    }

    if (loading) {
      setLoading(false);
    }
  };

  const getAllPages = async () => {
    const url = `http://127.0.0.1:8000/webpages/viewallpages/${localStorage.getItem(
      "email"
    )}/`;

    const response = await fetch(url);
    const data = await response.json();
    setPages(data.pages);
  };

  let contextData = {
    user: user,
    authTokens: authTokens,
    loginUser: loginUser,
    logoutUser: logoutUser,
    signinUser: signinUser,
    handleModifyPassword: handleModifyPassword,
    getAllPages: getAllPages,
    pages: pages,
  };

  useEffect(() => {
    const REFRESH_INTERVAL = 1000 * 60 * 4; // 4 minutes
    let interval = setInterval(() => {
      if (authTokens) {
        updateToken();
      }
    }, REFRESH_INTERVAL);
    return () => clearInterval(interval);
  }, [authTokens, updateToken]);

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
