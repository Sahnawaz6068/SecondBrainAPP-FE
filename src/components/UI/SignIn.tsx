import Input from "./Input";
import { Button } from "./Button";
import { useRef } from "react";
import axios from "axios";
import { BACKEND_URL } from "../../config";

const SignIn = () => {
  const Email = useRef<HTMLInputElement>(null);
  const Password = useRef<HTMLInputElement>(null);

  async function signInData() {
    const email = Email.current?.value;
    const password = Password.current?.value;
    try {
      const response = await axios.post(
        BACKEND_URL + "/login",
        { email, password }, // request body
        { withCredentials: true } // axios config
      );
      console.log(response?.data.token);
      const jwt = response.data.token;
      // localStorage.setItem("token", jwt);
      alert("You are LoggedIn");
    } catch (err: any) {
      console.log(err.message);
    }
  }

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="bg-slate-50 shadow-2xl max-h-84 w-96  rounded-lg m-8 p-8 hover:translate-0.5 duration-300 hover:scale-105">
        <Input referance={Email} placeholder={"Email"} />
        <Input referance={Password} placeholder={"Password"} />
        <h1 className="pb-2 text-gray-400">
          You don't have an account.
          <a className="text-blue-500" href="#SignIn">
            {" "}
            Create account
          </a>
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
  );
};

export default SignIn;
