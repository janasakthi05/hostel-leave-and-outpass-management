import { useState } from "react";
import { applyLeave } from "../services/studentApi";
import { useNavigate } from "react-router-dom";

export default function ApplyLeave() {
  const [leave, setLeave] = useState({});
  const navigate = useNavigate();
  const student = JSON.parse(localStorage.getItem("student"));

  const submit = async () => {
    try {
      await applyLeave({ ...leave, studentId: student._id });
      alert("Leave applied");
      navigate("/student/status");
    } catch {
      alert("Apply leave failed (backend not ready yet)");
    }
  };

  return (
    <div>
      <h2>Apply Leave</h2>

      <select onChange={e => setLeave({ ...leave, type: e.target.value })}>
        <option value="">Select Leave Type</option>
        <option>Outpass</option>
        <option>Overnight</option>
      </select>

      <input
        type="datetime-local"
        onChange={e => setLeave({ ...leave, from: e.target.value })}
      />

      <input
        type="datetime-local"
        onChange={e => setLeave({ ...leave, to: e.target.value })}
      />

      <input
        placeholder="Destination"
        onChange={e => setLeave({ ...leave, destination: e.target.value })}
      />

      <textarea
        placeholder="Purpose"
        onChange={e => setLeave({ ...leave, purpose: e.target.value })}
      />

      <button onClick={submit}>Submit Leave</button>
    </div>
  );
}
