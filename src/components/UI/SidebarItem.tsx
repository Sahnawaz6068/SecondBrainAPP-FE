import type { ReactElement } from "react"

interface Sidebar {
    text:String,
    icon:ReactElement
}

const SidebarItem = ({text,icon}:Sidebar) => {
  return (
    <div className="flex hover:bg-blue-100 hover:text-blue-400 rounded-md mt-2 bg-white hover:translate-1 duration-300 px-4 py-2 max-w-72 hover:cursor-pointer pt-4">
         <div className="pr-2  ">
            {icon}
         </div>
         <div>
            {text}
         </div>
        </div>
  )
}

export default SidebarItem