const mongoose = require('mongoose');
const { Schema } = mongoose;

const MentorSchema = new Schema({
  specializations: [{ type: String, required: true }], // Array of specializations
  experience: { type: String, required: true },       // Years of experience
  createdAt: { type: Date, default: Date.now },       // Date of creation
});

const Mentor = mongoose.model("Mentor", MentorSchema);

module.exports = Mentor;