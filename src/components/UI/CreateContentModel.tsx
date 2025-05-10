import CloseIcon from "../../icons/CloseIcon";
import { Button } from "./Button";

//@ts-ignore
const CreateContentModel = ({ open, onClose }) => {
  return (
    <>
      {open && (
        <div className="fixed inset-0 flex justify-center items-center bg-black opacity-85 z-50">
          <div className="bg-white h-72 w-96 p-4 rounded-md shadow-lg z-60">
            <div className="flex">
              <div className="font-bold px-24">Add new Content  </div>
            <div className="hover:bg-slate-300 rounded-sm" onClick={()=>onClose()}><CloseIcon/></div>
            </div>
            <div className="mb-2">
              <div className="font-semibold">Title:</div>
              <input
                className="bg-gray-200 p-2 rounded-md m-2 w-full"
                type="text"
                placeholder="Title"
              />
            </div>
            <div className="mb-4">
              <div className="font-semibold">URL:</div>
              <input
                className="bg-gray-200 p-2 rounded-md m-2 w-full"
                type="text"
                placeholder="Link"
              />
            </div>
            <div className="flex justify-end">
              <Button text={"Create"} varient={"secondary"} size={"md"} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CreateContentModel;
