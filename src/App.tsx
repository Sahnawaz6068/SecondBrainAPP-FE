import "./App.css";
import "./index.css";

import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import Dashbord from "./pages/Dashbord";
import SharedBrain from "./pages/SharedBrain";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster position="top-center" />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashbord />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/share/:hash" element={<SharedBrain />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
