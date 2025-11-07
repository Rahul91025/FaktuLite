const express = require('express');
const cors = require('cors');
const path = require('path');
const authRoutes = require('./routes/auth');
const textRoutes = require('./routes/texts');
const pricelistRoutes = require('./routes/pricelist');

const app = express();
const PORT = parseInt(process.env.PORT) || 5000;

app.use(cors());
app.use(express.json());

// API routes
app.use('/api/auth', authRoutes);
app.use('/api/texts', textRoutes);
app.use('/api/pricelist', pricelistRoutes);

// Serve static files from the React app build directory
app.use(express.static(path.join(__dirname, '../frontend/dist')));

// Catch all handler: send back React's index.html file for any non-API routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'Server is running' });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
