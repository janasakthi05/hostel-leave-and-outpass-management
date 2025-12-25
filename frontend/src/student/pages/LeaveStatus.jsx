import { useEffect, useState } from "react";
import { getMyLeaves } from "../services/studentApi";

export default function LeaveStatus() {
  const [leaves, setLeaves] = useState([]);
  const student = JSON.parse(localStorage.getItem("student"));

  useEffect(() => {
    getMyLeaves(student._id)
      .then(setLeaves)
      .catch(() => {
        // backend not ready yet
        setLeaves([]);
      });
  }, []);

  return (
    <div>
      <h2>Leave Status</h2>

      {leaves.length === 0 && <p>No leaves yet</p>}

      {leaves.map(l => (
        <div key={l._id}>
          <p>Status: {l.status}</p>
        </div>
      ))}
    </div>
  );
}
