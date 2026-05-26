import express from "express";
import cors from "cors";

import "./config/db.js";

import authRoutes from "./routes/authRoutes.js";
import requestRoutes from "./routes/requestRoutes.js";
import reviewRoutes from "./routes/reviewRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend Running");
});

app.use("/api/auth", authRoutes);

app.use("/api/requests", requestRoutes);

app.use("/api/reviews", reviewRoutes);

export default app;