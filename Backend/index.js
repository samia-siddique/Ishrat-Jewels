import express from "express";
import cors from "cors";
import productRoutes from "./routes/productRoutes.js";
import mongoose from "mongoose";
import path from "path";
import fs from "fs";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

const startServer = async () => {
  if (!fs.existsSync("uploads")) {
    fs.mkdirSync("uploads");
  }
  try {
    await mongoose.connect(
      "mongodb+srv://samiasiddique34_db_user:autherSamia@cluster0.09hi1r5.mongodb.net/jewelry",
    );

    console.log("Connected to MongoDB");

    app.use("/", productRoutes);

    app.listen(5000, () => {
      console.log("server is running");
    });
  } catch (error) {
    console.log("DB connection error:", error);
  }
};

startServer();
