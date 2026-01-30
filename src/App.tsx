import "./App.css";
import "./index.css";

import { BrowserRouter, Route, Routes} from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { lazy, Suspense } from "react";
import NotFound from "./NotFound";
import FallbackLoader from "./FallbackLoader";

const SignIn = lazy(() => import("./pages/SignIn"));
const SignUp = lazy(() => import("./pages/SignUp"));
const Profile = lazy(() => import("./pages/Profile"));
const Dashboard = lazy(() => import("./pages/Dashbord"));
const SharedBrain = lazy(() => import("./pages/SharedBrain"));


function App() {
  return (
    <>
      <Toaster position="top-center" />

      <BrowserRouter>
        <Suspense fallback={<FallbackLoader/>}>
          <Routes>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/share/:hash" element={<SharedBrain />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;

