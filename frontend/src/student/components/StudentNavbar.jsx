import { useNavigate } from "react-router-dom";

export default function StudentNavbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("student");
    navigate("/student/login");
  };

  return (
    <div style={{
      display:"flex",
      justifyContent:"space-between",
      padding:"12px",
      background:"#1e40af",
      color:"white"
    }}>
      <b>Hostel Leave System</b>
      <button onClick={logout} style={{
        background:"white",
        color:"#1e40af",
        border:"none",
        padding:"6px 12px",
        borderRadius:"6px"
      }}>
        Logout
      </button>
    </div>
  );
}
