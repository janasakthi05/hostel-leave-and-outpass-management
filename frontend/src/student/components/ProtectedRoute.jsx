import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const student = localStorage.getItem("student");
  return student ? children : <Navigate to="/student/login" />;
}
