import HomePage from "./components/HomePage";
import Login from "./components/Login";
import PrivateRoute from "./utils/PrivateRoute";
import NavBar from "./components/NavBar";
import { AuthProvider } from "./context/AuthContext";
import SignUp from "./components/SignUp";
import Profile from "./components/Profile";
import WebBuilder from "./components/WebBuilder";
import PasswordChange from "./components/PasswordChange";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <NavBar />
          <Routes>
            <Route
              path="/Dashboard"
              element={
                <PrivateRoute>
                  <HomePage />
                </PrivateRoute>
              }
            />
            <Route path="/Login" element={<Login />} />
            <Route path="/Signup" element={<SignUp />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/PwdChange" element={<PasswordChange />} />
            <Route path="/" element={<WebBuilder />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
