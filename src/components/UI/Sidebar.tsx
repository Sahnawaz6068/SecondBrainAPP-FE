import { useState } from "react";
import Docs2 from "../../icons/Docs2";
import { TwitterIcon } from "../../icons/TwitterIcon";
import YoutubeIcon from "../../icons/YoutubeIcon";
import SidebarItem from "./SidebarItem";

//@ts-ignore
const Sidebar = ({ allContent, setContent }) => {
  const [query, setQuery] = useState("");

  return (
    <div className="fixed left-0 top-0 z-20 hidden h-screen w-64 flex-col border-r border-slate-200 bg-slate-100 shadow-md dark:border-white/10 dark:bg-slate-950 md:flex">
      {/* Logo */}
      <div
        onClick={() => window.location.reload()}
        className="flex items-center gap-3 px-4 py-4 hover:cursor-pointer"
      >
        <img
          className="h-10 w-10 duration-200 hover:scale-105"
          src="../../public/Brain.png"
          alt="Logo"
        />
        <div className="text-xl font-bold text-purple-700 duration-200 hover:scale-105">
          Second Brain
        </div>
      </div>

      {/* Search */}
      <div className="px-3 pb-2">
        <input
          value={query}
          onChange={(e) => {
            const v = e.target.value;
            setQuery(v);
            const q = v.trim().toLowerCase();
            if (!q) setContent(allContent);
            else {
              setContent(
                (allContent || []).filter((c: any) =>
                  String(c?.title ?? "")
                    .toLowerCase()
                    .includes(q),
                ),
              );
            }
          }}
          placeholder="Search by title..."
          className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900
                     outline-none transition-shadow focus:ring-2 focus:ring-purple-400
                     dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
        />
      </div>

      {/* Nav */}
      <nav className="mt-2 flex flex-col gap-1 px-2">
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
        {/* <SidebarItem
          allContent={allContent}
          setContent={setContent}
          text={"LinkedIn"}
          icon={<YoutubeIcon />}
        /> */}
      </nav>
    </div>
  );
};

export default Sidebar;