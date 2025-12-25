import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/student",
});

// REGISTER
export const registerStudent = async (data) => {
  const res = await API.post("/register", data);
  return res.data;
};

// LOGIN
export const loginStudent = async (data) => {
  const res = await API.post("/login", data);
  return res.data;
};

// APPLY LEAVE
export const applyLeave = async (data) => {
  const res = await API.post("/apply", data);
  return res.data;
};

// GET LEAVES (for status page)
export const getMyLeaves = async (studentId) => {
  const res = await API.get(`/leaves/${studentId}`);
  return res.data;
};
