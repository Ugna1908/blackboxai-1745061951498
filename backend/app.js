require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/dbConfig');
const errorHandler = require('./utils/errorHandler');
const logger = require('./utils/logger');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Simple logger middleware
app.use((req, res, next) => {
  logger.info(`${req.method} ${req.url}`);
  next();
});

// Routes placeholder
app.get('/', (req, res) => {
  res.json({ message: 'Resume Builder Backend API is running' });
});

const userRoutes = require('./routes/userRoutes');
const resumeRoutes = require('./routes/resumeRoutes');
const instituteRoutes = require('./routes/instituteRoutes');
const consultancyRoutes = require('./routes/consultancyRoutes');
const adminRoutes = require('./routes/adminRoutes');

app.use('/api/users', userRoutes);
app.use('/api/resumes', resumeRoutes);
app.use('/api/institute', instituteRoutes);
app.use('/api/consultancy', consultancyRoutes);
app.use('/api/admin', adminRoutes);

// Error handling middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`);
});
