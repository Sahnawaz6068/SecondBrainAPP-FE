import { useRef, useState } from "react";
import CloseIcon from "../../icons/CloseIcon";
import { Button } from "./Button";
import Input from "./Input";
import { BACKEND_URL } from "../../config";
import axios from "axios";

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
  async function ModelInput() {
    try {
      const title = Title.current?.value;
      const link = Url.current?.value;

      console.log(title, link); //just logging and checking
      const response = await axios.post(BACKEND_URL + "/content", {
        title,
        link,
        type,
        
      });
      console.log(response); //Promise pending 
      alert("New content added to Brain");
    } catch (err: any) {
      console.log(err.message);
    }
  }

  return (
    <>
      {open && (
        <div className="fixed inset-0 flex justify-center items-center bg-black opacity-85 z-50">
          <div className="bg-white shadow-2xl h-80 w-96 p-4 rounded-md  z-60">
            <div className="flex">
              <div className="font-bold px-24">Add new Content </div>
              <div
                className="hover:bg-slate-300 rounded-sm"
                onClick={() => onClose()}
              >
                <CloseIcon />
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
