// server/middleware/authMiddleware.js
import jwt from 'jsonwebtoken';

// const authMiddleware = (req, res, next) => {
//   const token = req.headers.authorization?.split(' ')[1]; // Get token from headers
//   if (!token) {
//     return res.status(401).json({ message: 'Access denied. No token provided.' });
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = decoded; // Attach user info to request
//     next(); // Proceed to the next middleware or route handler
//   } catch (error) {
//     res.status(400).json({ message: 'Invalid token' });
//   }
// };


const authMiddleware = (req, res, next) => {
    console.log("Request Headers:", req.headers);  // Log headers for debugging
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: 'Access denied. No token provided.' });
    }
    
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;
      next();
    } catch (error) {
      res.status(400).json({ message: 'Invalid token' });
    }
  };
  

export default authMiddleware;
