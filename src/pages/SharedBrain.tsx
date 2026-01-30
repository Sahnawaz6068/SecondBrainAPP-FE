
import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import Card from "../components/UI/Card";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

type ContentItem = {
  _id: string;
  title: string;
  link: string;
  type: string;
};

function SharedBrain() {
  const { hash } = useParams();
  const navigate = useNavigate();

  const [content, setContent] = useState<ContentItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!hash) return;
    fetchSharedBrain(hash);
  }, [hash]);

  const fetchSharedBrain = async (hashValue: string) => {
    try {
      setLoading(true);
      setError("");
      const res = await axios.get<{ content: ContentItem[] }>(
        `${API_BASE_URL}/brain/${hashValue}`,
        { withCredentials: true } 
      );

      setContent(res.data?.content ?? []);
    } catch (err: any) {
      console.log(err?.response?.data || err?.message);
      setError("Invalid or expired share link");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen dark:bg-[#0f0f1a] p-6">
        <p className="dark:text-white">Loading shared brain...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen dark:bg-[#0f0f1a] p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold dark:text-white">Shared Brain</h1>

        <div className="flex gap-3">
          <button
            className="px-4 py-2 rounded bg-gray-200 dark:bg-white/10 dark:text-white"
            onClick={() => navigate("/signin")}
          >
            Sign in
          </button>

          <Link
            to="/"
            className="px-4 py-2 rounded bg-gray-200 dark:bg-white/10 dark:text-white"
          >
            Go Home
          </Link>
        </div>
      </div>

      {error ? (
        <p className="mt-6 text-red-500">{error}</p>
      ) : (
        <div className="flex w-fit flex-wrap pt-8 gap-4">
          {content.map((item) => (
            <Card
              key={item._id}
              title={item.title}
              link={item.link}
              type={item.type}
              id={item._id}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default SharedBrain;
