// server/routes/propertyRoutes.js
import express from "express";
import Property from "../models/Property.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// Route to create a new property with authentication middleware
router.post("/create", authMiddleware, async (req, res) => {
  try {
    const property = new Property({
      ...req.body,
      owner: req.user.id, // Set the owner from the authenticated user's ID
    });
    await property.save();
    res.status(201).json(property);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Route to get all properties
router.get("/", async (req, res) => {
  try {
    const properties = await Property.find().populate("owner", "name email");
    res.status(200).json(properties);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
