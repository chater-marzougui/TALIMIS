const mongoose = require('mongoose');

const { Schema } = mongoose;

const TeacherSchema = new Schema({
  institution: { type: String, required: true }, // Institution name
  subjects: [{ type: String, required: true }],  // Array of subjects
  createdAt: { type: Date, default: Date.now },  // Date of creation
});

const Teacher = mongoose.model("Teacher", TeacherSchema);

module.exports = Teacher;
