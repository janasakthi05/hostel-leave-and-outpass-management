const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema(
  {
    name: String,
    roll: String,
    email: { type: String, unique: true },
    hostelBlock: String,
    room: String,
    phone: String,
    password: String,
    role: { type: String, default: "STUDENT" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Student", StudentSchema);
