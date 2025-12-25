import { useParams } from "react-router-dom";
import StudentNavbar from "../components/StudentNavbar";

export default function QRView() {
  const { id } = useParams();

  return (
    <>
      <StudentNavbar />
      <div className="auth-container">
        <div className="auth-card">
          <h2>Leave QR Code</h2>
          <img
            src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${id}`}
            alt="QR"
          />
          <p style={{ marginTop: "10px" }}>
            Valid only during approved time
          </p>
        </div>
      </div>
    </>
  );
}
