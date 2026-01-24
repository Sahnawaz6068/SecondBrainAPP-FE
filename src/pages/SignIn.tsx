import Input from "../components/UI/Input";
import { Button } from "../components/UI/Button";
import { useRef } from "react";
import axios from "axios";
import toast from "react-hot-toast";
// import { BACKEND_URL } from "../config";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  const Email = useRef<HTMLInputElement>(null);
  const Password = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  async function signInData() {
    const email = Email.current?.value?.trim();
    const password = Password.current?.value;

    if (!email || !password) {
      toast.error("Email and password are required");
      return;
    }

    try {
      const req = axios.post(
        "http://localhost:3000/api/v1/login",
        { email, password },
        { withCredentials: true },
      );

      toast.promise(req, {
        loading: "Signing in...",
        success: "Signed in successfully",
        error: (err) => err?.response?.data?.message || "Signin failed",
      });

      const response = await req;

      const jwt = response.data?.token;
      if (jwt) localStorage.setItem("token", jwt); // consider removing (see note below)

      navigate("/");
    } catch (err) {
      // toast already handled by toast.promise, so optional:
      console.error(err);
    }
  }

  return (
    <div className="flex dark:bg-[#0f0f1a] ">
      <div>
        <img
          className="mt-32 ml-10 hidden dark:block rounded-lg hover:scale-105 duration-300 "
          src="../public/LoginImg.png"
          alt=""
        />
        <img
          className="mt-32 ml-10  dark:hidden rounded-lg hover:scale-105 duration-300 "
          src="../public/LoginLightmode.png"
          alt=""
        />
      </div>
      <div className="w-full h-screen flex justify-center items-center">
        <div className="bg-slate-50 shadow-2xl max-h-84 w-96  rounded-lg m-8 p-8 hover:translate-0.5 duration-300 hover:scale-105 dark:bg-slate-900">
          <Input referance={Email} placeholder={"Email"} />
          <Input referance={Password} placeholder={"Password"} />
          <h1 className="pb-2 text-gray-400 ">
            You don't have an account.
            <Link className="text-blue-500" to="/signup">
              {" "}
              Create account
            </Link>
          </h1>
          <div className="ml-28">
            <Button
              onClick={signInData}
              varient={"secondary"}
              size={"lg"}
              text={"SignIn"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
