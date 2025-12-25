import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import ApplyLeave from "./pages/ApplyLeave";
import LeaveStatus from "./pages/LeaveStatus";
import QRView from "./pages/QRView";
import ProtectedRoute from "./components/ProtectedRoute";

export default function StudentRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/student/login" />} />
      <Route path="/student/login" element={<Login />} />
      <Route path="/student/register" element={<Register />} />

      <Route path="/student/dashboard" element={
        <ProtectedRoute><Dashboard /></ProtectedRoute>
      } />

      <Route path="/student/apply" element={
        <ProtectedRoute><ApplyLeave /></ProtectedRoute>
      } />

      <Route path="/student/status" element={
        <ProtectedRoute><LeaveStatus /></ProtectedRoute>
      } />

      <Route path="/student/qr/:id" element={
        <ProtectedRoute><QRView /></ProtectedRoute>
      } />

      <Route path="*" element={<Navigate to="/student/login" />} />
    </Routes>
  );
}
