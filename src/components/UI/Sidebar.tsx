import Docs2 from "../../icons/Docs2";
import { TwitterIcon } from "../../icons/TwitterIcon";
import YoutubeIcon from "../../icons/YoutubeIcon";
import SidebarItem from "./SidebarItem";

//@ts-ignore
const Sidebar = ({ allContent, setContent }) => {
  return (
    <div className="h-screen w-72 bg-slate-100 shadow-md fixed left-0 top-0 dark:bg-slate-950 ">
      {/* Logo */}
      <div className="pl-2 pt-2 flex items-center hover:cursor-pointer ">
        <img
          className="h-11 w-11 hover:scale-105 duration-200 "
          src="../../public/Brain.png"
          alt="Logo"
        />
        <div className="font-bold text-2xl pl-4 hover:scale-105 duration-200 text-purple-700 ">
          Second Brain
        </div>
      </div>
      <SidebarItem
        allContent={allContent}
        setContent={setContent} 
        text={"Docs"}
        icon={<Docs2 />}
      />
      <SidebarItem
        allContent={allContent}
        setContent={setContent} 
        text={"Twitter"}
        icon={<TwitterIcon />}
      />
      <SidebarItem
        allContent={allContent}
        setContent={setContent} 
        text={"Youtube"}
        icon={<YoutubeIcon />}
      />
    </div>
  );
};

export default Sidebar;
