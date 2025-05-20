import { useEffect } from "react";

interface TweetEmbedProps {
  link: string;
}

const TweetEmbed: React.FC<TweetEmbedProps> = ({ link }) => {
  useEffect(() => {
    //@ts-ignore
    if (window?.twttr?.widgets?.load) {
        //@ts-ignore
      window.twttr.widgets.load();
    }
  }, [link]);

  return (
    <blockquote className="twitter-tweet">
      <a href={link.replace("x.com", "twitter.com")}></a>
    </blockquote>
  );
};

export default TweetEmbed;
