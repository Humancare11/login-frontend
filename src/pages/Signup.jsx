import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const nav = useNavigate();

  const submit = async () => {
    const res = await axios.post("http://localhost:5000/auth/signup", form);
    if (res.data.success) nav("/");
  };

  return (
    <div>
      <h2>Signup</h2>
      <input placeholder="Name" onChange={(e)=>setForm({...form,name:e.target.value})}/>
      <input placeholder="Email" onChange={(e)=>setForm({...form,email:e.target.value})}/>
      <input placeholder="Password" onChange={(e)=>setForm({...form,password:e.target.value})}/>
      <button onClick={submit}>Create Account</button>
    </div>
  );
}