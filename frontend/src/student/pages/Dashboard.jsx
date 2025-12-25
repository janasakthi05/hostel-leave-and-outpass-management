import StudentNavbar from "../components/StudentNavbar";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  const student = JSON.parse(localStorage.getItem("student"));

  return (
    <>
      <StudentNavbar />
      <div style={{ padding: "20px" }}>
        <h2>Welcome, {student.name}</h2>

        <div style={{ marginTop: "20px" }}>
          <button onClick={() => navigate("/student/apply")} className="primary-btn">
            Apply Leave
          </button>

          <button
            onClick={() => navigate("/student/status")}
            className="primary-btn"
            style={{ marginTop: "12px", background: "#059669" }}
          >
            View Leave Status
          </button>
        </div>
      </div>
    </>
  );
}
