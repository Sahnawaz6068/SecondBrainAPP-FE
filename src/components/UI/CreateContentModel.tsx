import { useRef, useState } from "react";
import CloseIcon from "../../icons/CloseIcon";
import { Button } from "./Button";
import Input from "./Input";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import toast from "react-hot-toast";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

//@ts-ignore
enum ContentType {
  YouTube = "youtube",
  Twitter = "twitter",
  LinkedIn = "linkedin",
  Docs = "docs",
}
//@ts-ignore
const CreateContentModel = ({ open, onClose }) => {
  const Title = useRef<HTMLInputElement>(null);
  const Url = useRef<HTMLInputElement>(null);
  const [type, setType] = useState(ContentType.YouTube);
  // const [type,setType]=useState(ContentType.YouTube);
  console.log(CreateContentModel);
  console.log(type);

  //cookies                      TOKEN AND ALL THE THING

  async function ModelInput() {
    const title = Title.current?.value?.trim();
    const link = Url.current?.value?.trim();

    if (!title || !link) {
      toast.error("Title and URL are required");
      return;
    }

    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("Login required");
      return;
    }

    const req = axios.post(
      `${API_BASE_URL}/content`,
      { title, link, type },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    toast.promise(req, {
      loading: "Creating content...",
      success: "Content created",
      error: (err) =>
        err?.response?.data?.message || "Failed to create content",
    });

    try {
      await req;
      onClose();
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      {open && (
        <div className="fixed inset-0 flex justify-center items-center bg-black opacity-85 z-50">
          <div className="bg-white shadow-2xl h-80 w-96 p-4 rounded-md  z-60 dark:bg-slate-950">
            <div className="flex">
              <div className="font-bold px-24">Add new Content </div>
              <div
                className="hover:bg-slate-300 rounded-sm"
                onClick={() => onClose()}
              >
                <div className="text-gray-600">
                  <CloseIcon />
                </div>
              </div>
            </div>
            <div className="mb-2">
              <div className="font-semibold">Title:</div>
              <Input referance={Title} placeholder={"Title"} />
            </div>
            <div className="mb-4">
              <div className="font-semibold">URL:</div>
              <Input referance={Url} placeholder={"Url"} />
            </div>
            <div className="flex">
              <Button
                onClick={() => {
                  setType(ContentType.YouTube);
                }}
                text={"YouTube"}
                varient={type === ContentType.YouTube ? "secondary" : "primary"}
                size="md"
              ></Button>
              <Button
                onClick={() => {
                  setType(ContentType.Twitter);
                }}
                text={"Twitter"}
                varient={type === ContentType.Twitter ? "secondary" : "primary"}
                size="md"
              ></Button>
              <Button
                onClick={() => {
                  setType(ContentType.Docs);
                }}
                text={"docs"}
                varient={type === ContentType.Docs ? "secondary" : "primary"}
                size="md"
              ></Button>
            </div>
            {/* <Button text={"YouTube"} varient={type===ContentType.YouTube?"primary":"secondary"} size="md"/> */}
            <div className="flex justify-end">
              <Button
                onClick={ModelInput}
                text={"Create"}
                varient={"secondary"}
                size={"md"}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CreateContentModel;
