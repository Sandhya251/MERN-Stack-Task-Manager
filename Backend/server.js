// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');

dotenv.config();
const app = express();


// Middleware
app.use(express.json());
const allowedOrigins = [
  'http://localhost:3000',
  'https://mern-stack-task-manager-nine.vercel.app'
];

app.use(cors({
  origin: allowedOrigins,
  credentials: false
}));


// Routes
app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => console.log(err));
