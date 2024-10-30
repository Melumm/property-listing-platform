// server/index.js
import 'dotenv/config'; // Loads environment variables from .env
import express from 'express';
import connectDB from './db.js';

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

app.get('/', (req, res) => {
  res.send('Server is running');
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

