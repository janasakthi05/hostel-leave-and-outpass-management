const Student = require("../models/Student");

// REGISTER
exports.registerStudent = async (req, res) => {
  try {
    const student = await Student.create(req.body);
    res.status(201).json(student);
  } catch (err) {
    res.status(400).json({ message: "Registration failed" });
  }
};

// LOGIN
exports.loginStudent = async (req, res) => {
  const { email, password } = req.body;

  const student = await Student.findOne({ email, password });

  if (!student) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  res.json(student);
};
