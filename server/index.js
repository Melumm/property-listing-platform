// server/index.js
import 'dotenv/config';
import express from 'express';
import connectDB from './db.js';
import propertyRoutes from './routes/propertyRoutes.js';
import userRoutes from './routes/userRoutes.js';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/properties', propertyRoutes);
app.use('/api/users', userRoutes);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

