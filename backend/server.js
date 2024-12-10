const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./db.js');
const courseRoutes = require('./routes/courseRoutes.js');
const teacherRoutes = require('./routes/teacherRoutes.js');
const authRoutes = require('./routes/authRoutes.js');
const conversationRoutes = require('./routes/conversationRoutes.js');

dotenv.config()





const app = express()
const port = process.env.PORT ;

connectDB();

// Enable CORS for all routes
app.use(cors());

// Middleware to parse incoming JSON requests
app.use(express.json()); // This line allows req.body to be parsed

// Route to fetch all courses
app.use('/api/courses' ,courseRoutes)

// Route to register teachers
app.use("/api/teachers", teacherRoutes);

// auth routes
app.use("/api/auth", authRoutes);

app.use("/api/convo",conversationRoutes);

app.listen(port , ()=> console.log(`server is running on port ${port}`))

