import { jwtDecode } from "jwt-decode";

export default function UserIdFn() {
  const token = localStorage.getItem("token");
  let userId = null;

  if (token) {
    try {
      const decode = jwtDecode(token);
      //@ts-ignore
      userId = decode.id;
    } catch (err) {
      console.error("Invalid token:", err);
    }
  }

  return userId;
}
