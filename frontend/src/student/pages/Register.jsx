import { useState } from "react";
import { registerStudent } from "../services/studentApi";
import { useNavigate } from "react-router-dom";
import "../styles/student.css";

export default function Register() {
  const [data, setData] = useState({});
  const navigate = useNavigate();

  const submit = async () => {
    try {
      await registerStudent(data);
      alert("Registered successfully");
      navigate("/student/login");
    } catch {
      alert("Registration failed");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Student Registration</h2>

        <input placeholder="Name" onChange={e => setData({ ...data, name: e.target.value })} />
        <input placeholder="Roll Number" onChange={e => setData({ ...data, roll: e.target.value })} />
        <input placeholder="College Email" onChange={e => setData({ ...data, email: e.target.value })} />
        <input placeholder="Hostel Block" onChange={e => setData({ ...data, hostelBlock: e.target.value })} />
        <input placeholder="Room Number" onChange={e => setData({ ...data, room: e.target.value })} />
        <input placeholder="Phone" onChange={e => setData({ ...data, phone: e.target.value })} />
        <input type="password" placeholder="Password" onChange={e => setData({ ...data, password: e.target.value })} />

        <button onClick={submit}>Register</button>
      </div>
    </div>
  );
}
