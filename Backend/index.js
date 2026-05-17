import express from "express";
import productRoutes from "./routes/productRoutes.js";
import mongoose from "mongoose";
import path from "path";
import fs from "fs";
import cors from "cors";

app.use(express.json());
app.use("/uploads", express.static("uploads"));
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: ["https://ishrat-jewels.vercel.app", "http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }),
);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept",
  );
  next();
});

const startServer = async () => {
  const PORT = process.env.PORT || 5000;
  if (!fs.existsSync("uploads")) {
    fs.mkdirSync("uploads");
  }
  try {
    await mongoose.connect(
      "mongodb+srv://samiasiddique34_db_user:autherSamia@cluster0.09hi1r5.mongodb.net/jewelry",
    );

    console.log("Connected to MongoDB");

    app.use("/", productRoutes);

    app.listen(PORT, () => {
      console.log(`Server running on ${PORT}`);
    });
  } catch (error) {
    console.log("DB connection error:", error);
  }
};

startServer();
