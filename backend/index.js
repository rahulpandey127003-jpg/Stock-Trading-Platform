require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const authRoute = require("./Routes/AuthRoute");
const { userVerification } = require("./Middleware/AuthMiddleware");

const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();

/* =========================
   CORS CONFIG (FINAL & CORRECT)
========================= */

const allowedOrigins = [
  "http://localhost:3000",
  "https://main.d3tgxf6k1vjj0g.amplifyapp.com",
  "https://stocktrade-demo.xyz"
];


app.use(
  cors({
    origin: (origin, callback) => {
      // allow requests without origin (Postman, curl)
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(null, false);
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// 🔴 REQUIRED FOR PREFLIGHT (OPTIONS)
app.options("*", cors());

/* =========================
   MIDDLEWARE
========================= */

app.use(express.json());
app.use(cookieParser());

/* =========================
   ROUTES
========================= */

app.use("/auth", authRoute);

// Protected route test
app.get("/home", userVerification, (req, res) => {
  res.status(200).json({
    success: true,
    user: req.user.username,
  });
});

// Data routes
app.get("/allHoldings", async (req, res) => {
  const data = await HoldingsModel.find({});
  res.json(data);
});

app.get("/allPositions", async (req, res) => {
  const data = await PositionsModel.find({});
  res.json(data);
});

app.post("/newOrder", async (req, res) => {
  await new OrdersModel(req.body).save();
  res.status(201).json({ message: "Order saved!" });
});

/* =========================
   SERVER + DB
========================= */

mongoose
  .connect(uri)
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(PORT, () =>
      console.log(`🚀 Server running on port ${PORT}`)
    );
  })
  .catch((err) => {
    console.error("❌ DB connection error:", err);
  });
