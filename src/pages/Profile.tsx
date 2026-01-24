import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Button } from "../components/UI/Button";
import { useNavigate } from "react-router-dom";

type User = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
};

const Profile = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  async function getMe() {
    try {
      setLoading(true);

      const req = axios.get("http://localhost:3000/api/v1/me", {
        withCredentials: true,
      });

      toast.promise(req, {
        loading: "Loading profile...",
        success: "Profile loaded",
        error: (err) => err?.response?.data?.msg || "Failed to load profile",
      });

      const res = await req;
      setUser(res.data.user);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  async function logout() {
    try {
      localStorage.removeItem("token");
      toast.success("Logged out");
      navigate("/signin");
    } catch (e) {
      toast.error("Logout failed");
    }
  }

  useEffect(() => {
    getMe();
  }, []);

  return (
    <div className="min-h-screen dark:bg-[#0f0f1a] bg-slate-100 flex">
      <div className="w-full flex justify-center items-center p-6">
        <div className="bg-slate-50 shadow-2xl w-[420px] rounded-lg m-8 p-8 hover:translate-0.5 duration-300 hover:scale-105 dark:bg-slate-900">
          <h1 className="text-2xl font-semibold mb-6 text-slate-900 dark:text-slate-100">
            Profile
          </h1>

          {loading ? (
            <p className="text-gray-500">Loading...</p>
          ) : !user ? (
            <p className="text-red-500">No user found</p>
          ) : (
            <div className="space-y-3 text-slate-900 dark:text-slate-100">
              <div className="flex justify-between">
                <span className="text-gray-400">First Name</span>
                <span className="font-medium">{user.firstName}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-400">Last Name</span>
                <span className="font-medium">{user.lastName}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-400">Email</span>
                <span className="font-medium">{user.email}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-400">User ID</span>
                <span className="font-medium text-xs break-all max-w-[220px] text-right">
                  {user._id}
                </span>
              </div>

              <div className="pt-6 flex justify-center gap-3">
                <Button
                  onClick={getMe}
                  varient={"secondary"}
                  size={"lg"}
                  text={"Refresh"}
                />
                <Button
                  onClick={logout}
                  varient={"secondary"}
                  size={"lg"}
                  text={"Logout"}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
