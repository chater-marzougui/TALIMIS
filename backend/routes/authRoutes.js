const express = require("express");
const { registerTeacher } = require("../controllers/teacherController");
const { registerMentor } = require("../controllers/mentorController");
const { loginUser, logoutUser, getUserProfile, getAllUsersExceptOne } = require("../controllers/userController");

const router = express.Router();

router.post("/register_teacher", registerTeacher); // Registration route for teachers
router.post("/register_mentor", registerMentor); // Registration route for mentors
router.post("/login", loginUser);       // Login route
router.post("/logout", logoutUser); // Logout route
router.get("/profile/:id", getUserProfile);
router.get("/users/except/:id", getAllUsersExceptOne);

module.exports = router;