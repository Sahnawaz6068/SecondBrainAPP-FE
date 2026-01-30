import Input from "../components/UI/Input";
import { Button } from "../components/UI/Button";
import { useRef } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;


const SignUp = () => {
  const FirstName = useRef<HTMLInputElement>(null);
  const LastName = useRef<HTMLInputElement>(null);
  const Email = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  async function signupData() {
    const firstName = FirstName.current?.value;
    const lastName = LastName.current?.value;
    const email = Email.current?.value;
    const password = passwordRef.current?.value;

    try {
      const req = axios.post(
         `${API_BASE_URL}/signup`,
        { firstName, lastName, email, password },
        { withCredentials: true },
      );

      toast.promise(req, {
        loading: "Creating account...",
        success: "Signup successful",
        error: (err) => err?.response?.data?.msg || "Signup failed",
      });

      await req;
      navigate("/signin");
    } catch (err) {
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
      <div className="w-full h-screen flex justify-center items-center ">
        <div className="bg-slate-50 shadow-2xl max-h-96 w-96  rounded-lg m-8 p-8 hover:scale-105  hover:-translate-y-0.5 duration-300 dark:bg-slate-900">
          <Input referance={FirstName} placeholder={"FirstName"} />
          <Input referance={LastName} placeholder={"LastName"} />
          <Input referance={Email} placeholder={"Email"} />
          <Input referance={passwordRef} placeholder={"Password"} />
          <h1 className="pb-2 text-gray-400">
            You have alredy an account.
            <Link className="text-blue-500" to="/signin">
              {" "}
              SignIn
            </Link>
          </h1>
          <div className="ml-28">
            <Button
              onClick={signupData}
              varient={"secondary"}
              size={"lg"}
              text={"Signup"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
