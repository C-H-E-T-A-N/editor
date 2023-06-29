
import NavBar from "./components/NavBar";
import { AuthProvider } from './context/AuthContext'
import SignUp from "./components/SignUp";
import Profile from "./components/Profile";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import WebBuilder from "./components/WebBuilder";


function App() {
  return (
<>
<BrowserRouter>
      <AuthProvider>
    <NavBar/>
      <Routes>

        <Route path="/Signup" element={<SignUp />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Editor" element={<WebBuilder />} />
      </Routes>
      </AuthProvider>
    </BrowserRouter>
</>
  );
}

export default App;
