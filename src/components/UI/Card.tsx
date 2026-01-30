import axios from "axios";
import { Delete } from "../../icons/Delete";
import { Share } from "../../icons/Share";
import { useEffect } from "react";
import toast from "react-hot-toast";

interface CardProp {
  title: string;
  link: string;
  type: string;
  id: string;
}

async function handleDelete(contentId: string) {
  if (!contentId) return;

  const ok = window.confirm("Delete this content?");
  if (!ok) return;

  try {
    await axios.delete(`http://localhost:3000/api/v1/content/${contentId}`, {
      withCredentials: true,
    });

    toast.success("Content deleted");
  } catch (err: any) {
    console.log(err?.response?.data || err?.message);
    toast.error(err?.response?.data?.msg || "Failed to delete");
  }
}

function getYoutubeEmbed(link:any) {
  if (link.includes("watch?v=")) {
    const videoId = link.split("watch?v=")[1].split("&")[0];
    return `https://www.youtube.com/embed/${videoId}`;
  }

  return "";
}


const Card = ({ title, link, type, id }: CardProp) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.setAttribute("src", "https://platform.twitter.com/widgets.js");
    script.setAttribute("async", "true");
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <div className="px-2 pt-2 ml-8 mt-2 hover:cursor-pointer  hover:transition  duration-400 ease-in-out hover:-translate-y-0.5 hover:scale-105 hover:bg-indigo-100 dark:hover:bg-slate-700 ">
      <div className="bg-white py-4 px-4 rounded-md shadow-md border-slate-100 border max-w-72 min-h-52 min-w-72 dark:bg-slate-900 dark:border-slate-600 ">
        <div className="flex justify-between">
          <div className="flex justify-center items-ce4nter ">
            <div className="font-semibold dark:text-purple-600">{title}</div>
          </div>
          <div className="flex justify-center items-center">
            <div
              onClick={() => handleDelete(id)}
              className="text-gray-500 pr-2"
            >
              <Delete size="lg" />
            </div>

            <div className="text-gray-500 pr-2">
              <Share size="lg" />
            </div>
          </div>
        </div>

        <div className="pt-4">
          {type === "youtube" && (
            <iframe
              className="w-full"
              src={getYoutubeEmbed(link)}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          )}

          {type === "twitter" && (
            <blockquote className="twitter-tweet">
              <a href={link.replace("x.com", "twitter.com")}></a>
            </blockquote>
          )}
          {type === "docs" && (
            <iframe
              src={link
                
                .replace("notion.site/", "notion.site/ebd/")}
              width="100%"
              height="400"
              allowFullScreen
            />
          )}

        </div>
      </div>
    </div>
  );
};

export default Card;
