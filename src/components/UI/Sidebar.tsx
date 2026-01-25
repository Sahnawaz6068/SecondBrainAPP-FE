import Docs2 from "../../icons/Docs2";
import { TwitterIcon } from "../../icons/TwitterIcon";
import YoutubeIcon from "../../icons/YoutubeIcon";
import SidebarItem from "./SidebarItem";
import { useMemo, useState } from "react";

//@ts-ignore
const Sidebar = ({ allContent, setContent }) => {
  const [query, setQuery] = useState(""); 

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return allContent;

    return (allContent || []).filter((c: any) =>
      String(c?.title ?? "")
        .toLowerCase()
        .includes(q),
    );
  }, [allContent, query]); 

  return (
    <div className="h-screen w-72 bg-slate-100 shadow-md fixed left-0 top-0 dark:bg-slate-950 ">
      {/* Logo */}
      <div
        onClick={() => window.location.reload()}
        className="pl-2 pt-2 flex items-center hover:cursor-pointer "
      >
        <img
          className="h-11 w-11 hover:scale-105 duration-200 "
          src="../../public/Brain.png"
          alt="Logo"
        />
        <div className="font-bold text-2xl pl-4 hover:scale-105 duration-200 text-purple-700 ">
          Second Brain
        </div>
      </div>

      <div className="px-3 mt-4">
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
          className="w-full px-3 py-2 rounded-md border border-slate-300 bg-white text-slate-900
                     outline-none focus:ring-2 focus:ring-purple-400
                     dark:bg-slate-900 dark:text-slate-100 dark:border-slate-700"
        />
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
      {/* <SidebarItem
        allContent={allContent}
        setContent={setContent}
        text={"LinkedIn"}
        icon={<YoutubeIcon />}
      /> */}
    </div>
  );
};

export default Sidebar;
