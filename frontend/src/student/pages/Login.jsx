import { useState } from "react";
import { loginStudent } from "../services/studentApi";
import { useNavigate } from "react-router-dom";
import "../styles/student.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = async () => {
    try {
      const res = await loginStudent({ email, password });
      localStorage.setItem("student", JSON.stringify(res));
      navigate("/student/dashboard");
    } catch {
      alert("Login failed");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Student Login</h2>

        <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />

        <button onClick={login}>Login</button>
      </div>
    </div>
  );
}
