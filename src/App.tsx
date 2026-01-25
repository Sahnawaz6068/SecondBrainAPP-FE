import "./App.css";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import "./index.css";
import Dashbord from "./pages/Dashbord";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import SharedBrain from "./pages/SharedBrain";

function App() {
  return (
    <>
      <Toaster position="top-center" />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashbord />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/profile" element={<Profile />} />
         <Route path="/share/:hash" element={<SharedBrain />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
