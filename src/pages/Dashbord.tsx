import { Button } from "../components/UI/Button";
import { PlusIcon } from "../icons/PlusIcon";
import { Share } from "../icons/Share";
import Card from "../components/UI/Card";
import CreateContentModel from "../components/UI/CreateContentModel";
import {  useEffect, useState } from "react";
import Sidebar from "../components/UI/Sidebar";
import { Link } from "react-router-dom";
import axios from "axios";
// import UserIdFn from "../util";
function Dashbord() {
  const [modelOpen, setModelOpen] = useState(false);
  let response=[1];
  // const userId=UserIdFn();
  // console.log("__________________"+userId);
  useEffect(() => {
    FetchData();
  }, []);
 async function FetchData() {
    try {
       response = await axios.get("http://localhost:3000/api/v1/content",
        {
          // userId:userId,
        withCredentials:true}
      );
      console.log(response);
    } catch (err: any) {
      console.log(err.message);
    }
  }

  return (
    <div className="h-fit dark:bg-[#0f0f1a]">
      {/* SIDE BAR */}
      <Sidebar />
      <div className="flex justify-end  mr-5 pt-5  ">
        {/* sHARE bRAIN */}
        <Button varient="primary"
          size="lg"
          startIcon={<Share size="lg" />}
          endIcon="lala2"
          text="Share Brain"
          onClick={() => {}}
        />
        {/* ADD  CONTENT BUTTON */}
        <Button varient="secondary"
          size="sm"
          startIcon={<PlusIcon size="md" />}
          endIcon="lala2"
          text="Add Content"
          onClick={() => {
            setModelOpen(true);
          }}
        />
        {/* USER PROFILE */}
        <div className=" rounded-full self-center">
          <Link to="/profile">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-11"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          </Link>
        </div>
      </div>
      <div className="flex w-fit flex-wrap pt-8 ml-80">
        <Card
          title={"response.data.title"}
          link={"https://x.com/mihir___dev/status/1921316447067787661"}
          type={"twitter"}
        />
      </div>
      <CreateContentModel
        open={modelOpen}
        onClose={() => setModelOpen(false)}
      />
    </div>
  );
}

export default Dashbord;
