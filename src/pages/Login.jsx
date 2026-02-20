import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const nav = useNavigate();

  const submit = async () => {
    const res = await axios.post("http://localhost:5000/auth/login", form);
    if (res.data.token) {
      localStorage.setItem("token", res.data.token);
      nav("/dashboard");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input placeholder="Email" onChange={(e)=>setForm({...form,email:e.target.value})}/>
      <input placeholder="Password" onChange={(e)=>setForm({...form,password:e.target.value})}/>
      <button onClick={submit}>Login</button>
    </div>
  );
}