const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const User = require('../models/userModel')
const Teacher = require('../models/teacherModel')
const dotenv = require('dotenv')


dotenv.config()





// teacher Registration
const registerTeacher = async (req, res) => {
  const { name, email, password, role, institution, subjects } = req.body;

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create teacher details if the role is Teacher
    const teacher = await Teacher.create({ institution, subjects });
    const teacherDetails = teacher._id;

    // Create the user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role:"Teacher",
      teacherDetails,
    });

    // Generate JWT Token
    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(201).json({ user, token });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Something went wrong", error: error.message });
  }
};

module.exports = { registerTeacher };

