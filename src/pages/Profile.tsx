import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Button } from "../components/UI/Button";
import { useNavigate } from "react-router-dom";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

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

      const token = localStorage.getItem("token");
      const req = axios.get(`${API_BASE_URL}/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
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
      navigate("/signin");
    } finally {
      setLoading(false);
    }
  }

  async function logout() {
    try {
      const req = axios.post(
        `${API_BASE_URL}/logout`,
        {},
        { withCredentials: true },
      );

      toast.promise(req, {
        loading: "Logging out...",
        success: "Logged out",
        error: (err) => err?.response?.data?.msg || "Logout failed",
      });

      await req;

      setUser(null);
      navigate("/signin");
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getMe();
  }, []);

  const initials = user
    ? `${user.firstName?.[0] ?? ""}${user.lastName?.[0] ?? ""}`.toUpperCase()
    : "";

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 p-6 dark:bg-[#0f0f1a]">
      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-xl ring-1 ring-slate-200 transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-2xl dark:bg-slate-900 dark:ring-white/10">
        {loading ? (
          <div className="flex flex-col items-center gap-3 py-10">
            <div className="h-10 w-10 animate-spin rounded-full border-2 border-purple-300 border-t-purple-600" />
            <p className="text-sm text-slate-400">Loading profile...</p>
          </div>
        ) : !user ? (
          <div className="flex flex-col items-center gap-2 py-10">
            <p className="text-sm font-medium text-red-500">No user found</p>
          </div>
        ) : (
          <>
            {/* Header */}
            <div className="mb-6 flex flex-col items-center gap-3 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 text-lg font-semibold text-purple-700 dark:bg-purple-900/40 dark:text-purple-300">
                {initials || "?"}
              </div>
              <div>
                <h1 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                  {user.firstName} {user.lastName}
                </h1>
                <p className="text-sm text-slate-400">{user.email}</p>
              </div>
            </div>

            {/* Details */}
            <div className="space-y-1 divide-y divide-slate-100 dark:divide-white/5">
              <div className="flex items-center justify-between py-3">
                <span className="text-sm text-slate-400">First Name</span>
                <span className="text-sm font-medium text-slate-900 dark:text-slate-100">
                  {user.firstName}
                </span>
              </div>

              <div className="flex items-center justify-between py-3">
                <span className="text-sm text-slate-400">Last Name</span>
                <span className="text-sm font-medium text-slate-900 dark:text-slate-100">
                  {user.lastName}
                </span>
              </div>

              <div className="flex items-center justify-between py-3">
                <span className="text-sm text-slate-400">Email</span>
                <span className="text-sm font-medium text-slate-900 dark:text-slate-100">
                  {user.email}
                </span>
              </div>

              <div className="flex items-center justify-between gap-4 py-3">
                <span className="shrink-0 text-sm text-slate-400">User ID</span>
                <span className="max-w-[220px] truncate text-right font-mono text-xs text-slate-500 dark:text-slate-400">
                  {user._id}
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-6 flex justify-center gap-3">
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
          </>
        )}
      </div>
    </div>
  );
};

export default Profile;