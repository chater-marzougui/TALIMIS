const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["Teacher", "Mentor"], required: true },
  teacherDetails: { type: Schema.Types.ObjectId, ref: "Teacher" }, // Reference to Teacher
  mentorDetails: { type: Schema.Types.ObjectId, ref: "Mentor" },   // Reference to Mentor
  createdAt: { type: Date, default: Date.now },
});

const User = mongoose.model("User", UserSchema);


module.exports = User;