import express from "express";
import mongoose from "mongoose";
import fs from "fs";
import cors from "cors";
import productRoutes from "./routes/productRoutes.js";

const app = express();

// ✅ CLEAN CORS (ONLY THIS)
app.use(
  cors({
    origin: [
      "https://ishrat-jewels.vercel.app",
      "http://localhost:5173",
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static("uploads"));

// create uploads folder
if (!fs.existsSync("uploads")) {
  fs.mkdirSync("uploads");
}

// routes
app.use("/", productRoutes);

// DB + server
const startServer = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://samiasiddique34_db_user:autherSamia@cluster0.09hi1r5.mongodb.net/jewelry"
    );

    console.log("Connected to MongoDB");

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log("Server running on", PORT);
    });
  } catch (err) {
    console.log("DB error:", err);
  }
};

startServer();