import { Docs } from "../../icons/Docs"
import Docs2 from "../../icons/Docs2"
import { TwitterIcon } from "../../icons/TwitterIcon"
import YoutubeIcon from "../../icons/YoutubeIcon"
import SidebarItem from "./SidebarItem"


const Sidebar = () => {
  return (
    <div className="h-screen w-72 bg-slate-50 shadow-md fixed left-0 top-0 ">
      {/* Logo */}
      <div className="pl-2 pt-2 flex items-center hover:cursor-pointer ">
          <img className="h-11 w-11" src="../../public/Brain.png" alt="Logo" />
          <div className="font-semibold text-xl pl-4">Second Brain</div>
      </div>
      <SidebarItem text={"Docs"} icon={<Docs2/>}/>
      <SidebarItem text={"Twitter"} icon={<TwitterIcon/>}/>
      <SidebarItem text={"Youtube"} icon={<YoutubeIcon/>}/>
      
    </div>
  )
}

export default Sidebar