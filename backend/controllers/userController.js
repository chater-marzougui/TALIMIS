const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const User = require('../models/userModel')
const Teacher = require('../models/teacherModel')
const dotenv = require('dotenv')
const Mentor = require('../models/mentorModel')


dotenv.config();

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check if the password matches
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Fetch additional details based on the user's role
    let teacherDetails = null;
    let mentorDetails = null;

    if (user.role === "Teacher" && user.teacherDetails) {
      teacherDetails = await Teacher.findById(user.teacherDetails);
    }

    if (user.role === "Mentor" && user.mentorDetails) {
      mentorDetails = await Mentor.findById(user.mentorDetails);
    }

    // Generate JWT Token
    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    // Send back user details and role-specific details
    res.status(200).json({
      message: "User logged in successfully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
      teacherDetails, // Include teacher details if the user is a teacher
      mentorDetails,  // Include mentor details if the user is a mentor
      token,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Something went wrong", error: error.message });
  }
};

const getUserProfile = async (req, res) => {
  const { id } = req.params; // Extract user ID from request parameters

  try {
    // Find the user by ID
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Fetch teacher or mentor details if applicable
    let teacherDetails = null;
    let mentorDetails = null;

    if (user.role === "Teacher" && user.teacherDetails) {
      teacherDetails = await Teacher.findById(user.teacherDetails);
    }

    if (user.role === "Mentor" && user.mentorDetails) {
      mentorDetails = await Mentor.findById(user.mentorDetails);
    }

    // Return the user and additional details
    res.status(200).json({
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
      teacherDetails, // Include teacher details if applicable
      mentorDetails,  // Include mentor details if applicable
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Something went wrong", error: error.message });
  }
};

const logoutUser = (req, res) => {
  try {
    // Clear the token or invalidate it (optional if you're using a blacklist mechanism)
    // Since JWT is stateless, a common practice is for the frontend to delete the token from localStorage.

    res.status(200).json({
      message: "User logged out successfully",
    });
  } catch (error) {
    console.error("Error during logout:", error);
    res.status(500).json({
      message: "Something went wrong during logout",
      error: error.message,
    });
  }
};

const getAllUsersExceptOne = async (req, res) => {
  const { id } = req.params; // Extract the ID of the user to exclude

  try {
    // Find all users except the one with the specified ID and populate the teacher details
    const users = await User.find({ _id: { $ne: id } })
      .select("-password") // Exclude the password field
      .populate("teacherDetails"); // Populate the teacherDetails field

    if (!users || users.length === 0) {
      return res.status(404).json({ message: "No users found" });
    }

    res.status(200).json({
      message: "Users retrieved successfully",
      users,
    });
  } catch (error) {
    console.error("Error retrieving users:", error);
    res.status(500).json({
      message: "Something went wrong",
      error: error.message,
    });
  }
};

module.exports = { loginUser, getUserProfile, logoutUser, getAllUsersExceptOne };