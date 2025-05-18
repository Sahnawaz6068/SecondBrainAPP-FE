import { Button } from "../components/UI/Button";
import { PlusIcon } from "../icons/PlusIcon";
import { Share } from "../icons/Share";
import Card from "../components/UI/Card";
import CreateContentModel from "../components/UI/CreateContentModel";
import { useState } from "react";
import Sidebar from "../components/UI/Sidebar";
import { Link } from "react-router-dom";
function Dashbord() {
  const [modelOpen, setModelOpen] = useState(false);
  return (
    <>
      <Sidebar />
      <div className="flex justify-end  mr-5 mt-5 ">
        <Button
          varient="primary"
          size="lg"
          startIcon={<Share size="lg" />}
          endIcon="lala2"
          text="Share Brain"
          onClick={() => {}}
        />

        <Button
          varient="secondary"
          size="sm"
          startIcon={<PlusIcon size="md" />}
          endIcon="lala2"
          text="Add Content"
          onClick={() => {
            setModelOpen(true);
          }}
        />
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
      <div className="flex flex-wrap pt-8 ml-80">
        <Card
          title={"Ind vs Pak"}
          link={"https://x.com/mihir___dev/status/1921316447067787661"}
          type={"twitter"}
        />
        <Card
          title={"Ind vs Pak"}
          link={"https://x.com/sierraoperator/status/1921432180821045437"}
          type={"twitter"}
        />
        <Card
          title={"Dev vs DSA"}
          link={"https://www.youtube.com/watch?v=-RVMgPK8hAk"}
          type={"youtube"}
        ></Card>
        <Card
          title={"Dev vs DSA"}
          link={"https://www.youtube.com/watch?v=-RVMgPK8hAk"}
          type={"youtube"}
        ></Card>
        <Card
          title={"WebSocket"}
          link={
            "https://www.notion.so/WEEK-15-WEBSOCKETS-1efaca5febfa809db5eccf96b48d931b"
          }
          type={"docs"}
        />
      </div>
      <CreateContentModel
        open={modelOpen}
        onClose={() => setModelOpen(false)}
      />
    </>
  );
}

export default Dashbord;
