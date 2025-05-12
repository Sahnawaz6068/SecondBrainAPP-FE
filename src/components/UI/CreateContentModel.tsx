import { useRef, useState } from "react";
import CloseIcon from "../../icons/CloseIcon";
import { Button } from "./Button";
import Input from "./Input";
import { BACKEND_URL } from "../../config";
import axios from "axios";

enum ContentType ={
  YouTube="youtube",
  Twitter="twitter"
}
//@ts-ignore
const CreateContentModel = ({ open, onClose }) => {
  const Title=useRef<HTMLInputElement>(null);
  const Url=useRef<HTMLInputElement>(null);
  const [type,setType]=useState(ContentType.YouTube);
   async function ModelInput(){
    try{
      const type=Title.current?.value;
      const link=Url.current?.value;
      axios.post(BACKEND_URL+"/content",{
        type,
        link
      })
      alert("New content added to Brain")
    }catch(err:any){
      console.log(err.message)
    }
   }

  return (
    <>
      {open && (
        <div className="fixed inset-0 flex justify-center items-center bg-black opacity-85 z-50">
          <div className="bg-white shadow-2xl h-72 w-96 p-4 rounded-md  z-60">
            <div className="flex">
              <div className="font-bold px-24">Add new Content  </div>
            <div className="hover:bg-slate-300 rounded-sm" onClick={()=>onClose()}><CloseIcon/></div>
            </div>
            <div className="mb-2">
              <div className="font-semibold">Title:</div>
              <Input referance={Url} placeholder={"Title"}/>
            </div>
            <div className="mb-4">
              <div className="font-semibold">URL:</div>
              <Input referance={Title} placeholder={"Url"}/>
            </div>
            <Button text={"YouTube"} varient={type===ContentType.YouTube?"primary":"secondary"} size="md"/>
            <div className="flex justify-end">
              <Button onClick={ModelInput} text={"Create"} varient={"secondary"} size={"md"} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CreateContentModel;
