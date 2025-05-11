import { Share } from "../../icons/Share";

interface CardProp {
    title:String,
    link:String,
    type:String
}

const Card = ({title,link,type}:CardProp) => {
  return (
    <div className="px-2 pt-2 hover:cursor-pointer  hover:transition  duration-300 ease-in-out hover:-translate-y-0.5 hover:scale-105 hover:bg-indigo-100 ">
      <div className="bg-white py-4 px-4 rounded-md shadow-md border-slate-100 border max-w-72 min-h-52 min-w-72 ">
        {/* CARD Header Section */}
        <div className="flex justify-between">
          <div className="flex justify-center items-ce4nter ">
            <div className="text-gray-500 pr-4">
              <Share size="lg" />
            </div>
            <div className="font-semibold">{title}</div>
          </div>
          <div className="flex justify-center items-center">
            <div className="text-gray-500 px-4">
              <Share size="lg" />
            </div>
            <div className="text-gray-500 pr-2">
              <Share size="lg" />
            </div>
          </div>
        </div>
        {/* CARD CONTENT RENDERING SECTION */}
        <div className="pt-4">
            {/* Youtube rendering */}
            {type==="youtube" && 
            <iframe className="w-full"  src={link.replace("watch","embed")}
            title="YouTube video player" frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin" allowFullScreen
          ></iframe> }
            {/* Twitter Rendering Section */}
          {type==="twitter" && 
          <blockquote className="twitter-tweet">
            <a href={link.replace("x","twitter")}></a>
          </blockquote>}
        </div>
      </div>
    </div>
  );
};

export default Card;
