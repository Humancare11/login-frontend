import axios from "axios";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [user, setUser] = useState(null);

  const load = async () => {
    const res = await axios.get("http://localhost:5000/auth/me", {
      headers: { Authorization: localStorage.getItem("token") }
    });
    setUser(res.data);
  };

  useEffect(() => { load(); }, []);

  return <div>{user ? <>Welcome {user.name}<br/>{user.email}</> : "Loading..."}</div>;
}