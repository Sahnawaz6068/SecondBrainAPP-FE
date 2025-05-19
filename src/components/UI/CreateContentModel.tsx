import { useRef, useState } from "react";
import CloseIcon from "../../icons/CloseIcon";
import { Button } from "./Button";
import Input from "./Input";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

//@ts-ignore
enum ContentType {
  YouTube = "youtube",
  Twitter = "twitter",
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
    try {
      const title = Title.current?.value;
      const link = Url.current?.value;

      const token = localStorage.getItem("token"); //find token form the local storage
      console.log("Token de de bahai");
      console.log(token);
      if (token) {
        const decoded = jwtDecode(token);          //decode data from token
        console.log(decoded);
        //@ts-ignore
        const userId = decoded.id;                 //Ectract userId from token
        console.log(title, link);
        const response = await axios.post(
          "http://localhost:3000/api/v1/content",
          {
            title,
            link,
            type,
            userId,
          },
          {withCredentials: true}
        );
        console.log("response hai ye:")
        console.log(response); //Promise pending
        alert("New content added to Brain");
      } else {
        console.log("Dekhiye aap Token Le ke aaye");
      }
      onClose();
    } catch (err: any) {
      console.log("Locha ho gay in creatinf ne content")
      console.log(err.message);
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
