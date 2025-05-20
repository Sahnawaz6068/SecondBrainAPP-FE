import type { ReactElement } from "react";
import { useEffect } from "react";
interface Sidebar {
  text: string;
  icon: ReactElement;
  allContent: Array<any>; // or a more specific type
  setContent: (value: any[]) => void; // match the type of content
}

const SidebarItem = ({ text, icon, allContent, setContent }: Sidebar) => {
  useEffect(() => {
    // Re-render Twitter
    //@ts-ignore
    if (window.twttr && window.twttr.widgets) {
      //@ts-ignore
      window.twttr.widgets.load();
    }

    // Optionally re-render YouTube embeds (usually not needed)
  }, [allContent]);

  function filter() {
    console.log("Clicked on:", text);

    if (!Array.isArray(allContent)) {
      console.error("Content is not an array:", allContent);
      return;
    }

    const filtered = allContent.filter((item: any) =>
      item?.type?.toLowerCase?.().includes(text.toLowerCase())
    );

    console.log("Filtered content:", filtered);
    setContent(filtered);
  }

  return (
    <div
      onClick={filter}
      className="flex hover:bg-blue-100 hover:text-blue-400 rounded-md mt-2 bg-white hover:translate-1 font-semibold duration-300 px-4 py-2 max-w-72 hover:cursor-pointer pt-4 dark:bg-slate-800 dark:text-purple-600"
    >
      <div className="pr-2">{icon}</div>
      <div>{text}</div>
    </div>
  );
};

export default SidebarItem;
