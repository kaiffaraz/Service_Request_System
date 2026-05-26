const express = require("express");

const cors = require("cors");

const dotenv = require("dotenv");

dotenv.config();

// DATABASE CONNECTION
require("./config/db");

// ROUTES
const authRoutes =
  require("./routes/authRoutes");

const requestRoutes =
  require("./routes/requestRoutes");

const reviewRoutes =
  require("./routes/reviewRoutes");

const app = express();

// =========================
// MIDDLEWARES
// =========================

app.use(cors());

app.use(express.json());

// =========================
// ROUTES
// =========================

// AUTH ROUTES
app.use(
  "/api/auth",
  authRoutes
);

// SERVICE REQUEST ROUTES
app.use(
  "/api/requests",
  requestRoutes
);

// REVIEW ROUTES
app.use(
  "/api/reviews",
  reviewRoutes
);

// =========================
// TEST ROUTE
// =========================

app.get("/", (req, res) => {

  res.send(
    "API Running Successfully"
  );

});

// =========================
// EXPORT
// =========================

module.exports = app;