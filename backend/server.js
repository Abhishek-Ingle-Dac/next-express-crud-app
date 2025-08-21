import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";          
import userRoutes from "./routes/userRoutes.js";

dotenv.config();

const app = express();

// Enable CORS for frontend
app.use(cors({ origin: "http://localhost:3000" }));

// Parse incoming JSON
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => console.log(` Server running on port ${PORT}`));
  })
  .catch((err) => console.error(" MongoDB connection error:", err));
