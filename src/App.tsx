import "./App.css";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile"
import "./index.css";
import Dashbord from "./pages/Dashbord";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashbord/>}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
