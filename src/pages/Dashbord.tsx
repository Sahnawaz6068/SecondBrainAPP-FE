import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { Button } from "../components/UI/Button";
import Card from "../components/UI/Card";
import CreateContentModel from "../components/UI/CreateContentModel";
import Sidebar from "../components/UI/Sidebar";
import { PlusIcon } from "../icons/PlusIcon";
import { Share } from "../icons/Share";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

type ContentItem = {
  _id: string;
  title: string;
  link: string;
  type: string;
  totalPages : number
};

function Dashbord() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState<number | "all">(5);
  const [totalPages, setTotalPages] = useState(1);

  const [modelOpen, setModelOpen] = useState(false);
  const [content, setContent] = useState<ContentItem[]>([]);
  const [allContent, setAllContent] = useState<ContentItem[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, [page, limit]);

  // const fetchData = async () => {
  //   try {
  //     const response = await axios.get<{ content: ContentItem[] }>(
  //       `${API_BASE_URL}content/paginated?page=3&limit=5`,
  //       { withCredentials: true },
  //     );
  //     console.log("...............................................");
  //     console.log(response);
  //     const items = response.data?.content ?? [];
  //     setContent(items);
  //     setAllContent(items);
  //   } catch (err: any) {
  //     console.log(err?.message);
  //     // navigate("/signin");
  //   }
  // };
console.log("page...........................................")
  console.log(page);
  const fetchData = async () => {
    try {
      const response = await axios.get<{ content: ContentItem[] }>(
        `${API_BASE_URL}/content/paginated`,
        {
          params: {
            page,
            limit,
          },

          withCredentials: true,
        },
      );
      console.log(".........................................");
      console.log(response);
      console.log(response.data.totalPages)
      // response.data?.content??[];
      const items = response.data?.content ?? [];
      setContent(items);
      setAllContent(items);

      setTotalPages(response.data.totalPages)
    } catch (err: any) {
      console.log(err?.message);
      // navigate("/signin");
    }
  };

  const handleShareBrain = async () => {
    try {
      const res = await axios.post(
        `${API_BASE_URL}/brain/share`,
        { share: true },
        { withCredentials: true },
      );

      const hash = res.data?.hash;
      if (!hash) {
        toast.error("No hash got");
        return;
      }

      const shareUrl = `${window.location.origin}/share/${hash}`;
      await navigator.clipboard.writeText(shareUrl);

      toast.success("Link copied!", { duration: 2500 });
    } catch (err: any) {
      console.log(err?.response?.data || err?.message);
      toast.error("Failed to generate");
    }
  };

  return (
    <div className="h-full pb-96 dark:bg-[#0f0f1a]">
      <div className="dark:bg-[#0f0f1a]">
        <Sidebar allContent={allContent} setContent={setContent} />

        <div className="flex justify-end mr-5 pt-5">
          <div className="mt-6 flex gap-4">
            <Button
              varient="secondary"
              size="sm"
              text="Previous"
              // disabled ={page==1}
              onClick={() => setPage((p) => Math.max(p - 1, 1))}
            />

            <Button
              varient="secondary"
              size="sm"
              text="Next"
              onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
            />
          </div>
          {/* //Drop down */}
          <div className="bg-white">
            <select
              value={limit}
              onChange={(e) => {
                const value = e.target.value;
                setPage(1);
                setLimit(value == "all" ? "all" : Number(value));
              }}
            >
              console.log(value);
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="all">All</option>
            </select>
          </div>
          <Button
            varient="primary"
            size="lg"
            startIcon={<Share size="lg" />}
            endIcon="lala2"
            text="Share Brain"
            onClick={handleShareBrain}
          />

          <Button
            varient="secondary"
            size="sm"
            startIcon={<PlusIcon size="md" />}
            endIcon="lala2"
            text="Add Content"
            onClick={() => setModelOpen(true)}
          />

          <div className="rounded-full self-center">
            <Link to="/profile">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-11"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </Link>
          </div>
        </div>

        <div className="flex w-fit flex-wrap pt-8 ml-80">
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

        {/* //Pagination thing */}

        <CreateContentModel
          open={modelOpen}
          onClose={() => setModelOpen(false)}
        />
      </div>
    </div>
  );
}

export default Dashbord;
