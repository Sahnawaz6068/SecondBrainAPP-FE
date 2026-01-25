import { Share } from "../../icons/Share";
import { useEffect } from "react";

interface CardProp {
  title: String;
  link: String;
  type: String;
}


function getYoutubeEmbed(link) {

  if (link.includes("watch?v=")) {
    const videoId = link.split("watch?v=")[1].split("&")[0];
    return `https://www.youtube.com/embed/${videoId}`;
  }

  return "";
}

const Card = ({ title, link, type }: CardProp) => {
  useEffect(() => {
  const script = document.createElement("script");
  script.setAttribute("src", "https://platform.twitter.com/widgets.js");
  script.setAttribute("async", "true");
  document.body.appendChild(script);

  return () => {
    document.body.removeChild(script); // Clean up on unmount
  };
}, []);
  return (
    <div className="px-2 pt-2 ml-8 mt-2 hover:cursor-pointer  hover:transition  duration-400 ease-in-out hover:-translate-y-0.5 hover:scale-105 hover:bg-indigo-100 dark:hover:bg-slate-700 ">
      <div className="bg-white py-4 px-4 rounded-md shadow-md border-slate-100 border max-w-72 min-h-52 min-w-72 dark:bg-slate-900 dark:border-slate-600 ">
        {/* CARD Header Section */}
        <div className="flex justify-between">
          <div className="flex justify-center items-ce4nter ">
            
            <div className="font-semibold dark:text-purple-600">{title}</div>
          </div>
          <div className="flex justify-center items-center">
            
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
              frameBorder="0"
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
          {/* Notion Docs */}
          {/* LinkedIn Embade */}
        </div>
      </div>
    </div>
  );
};

export default Card;
