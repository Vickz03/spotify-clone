const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

// Load env vars
dotenv.config();

const { PORT, NODE_ENV } = require('./config/config');
const { logger, errorHandler } = require('./middleware/middleware');

const authRoutes = require('./routes/authRoutes');
const songRoutes = require('./routes/songRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(logger);

// Serve static files (album covers)
app.use('/covers', express.static(path.join(__dirname, 'public/covers')));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/songs', songRoutes);

// Root endpoint
app.get('/', (req, res) => {
    res.send('Spotify Clone API is running...');
});

// Error Handler
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server running in ${NODE_ENV} mode on port ${PORT}`);
});
