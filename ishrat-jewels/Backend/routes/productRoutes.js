import express from "express";
import Product from "../models/Product.js";
import upload from "../middleware/upload.js";

const router = express.Router();

// CREATE PRODUCT
router.post("/products", upload.single("image"), async (req, res) => {
  try {
    const { title, price } = req.body;

    const newProduct = await Product.create({
      title,
      price,
      image: req.file ? `/uploads/${req.file.filename}` : "",
    });

    res.json(newProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET PRODUCTS
router.get("/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;