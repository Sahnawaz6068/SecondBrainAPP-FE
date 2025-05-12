import "./App.css";
import SignIn from "./components/UI/SignIn";
import SignUp from "./components/UI/SignUp";

import "./index.css";
import Dashbord from "./pages/Dashbord";

function App() {
  return (
    <>
      <Dashbord />
      <SignIn />
      <SignUp />
    </>
  );
}

export default App;
