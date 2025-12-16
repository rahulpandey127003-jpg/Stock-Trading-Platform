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

// ===== CORS (CRITICAL FIX) =====
const allowedOrigins = [
  "http://localhost:3000",
  "https://main.d3tgxf6k1vjj0g.amplifyapp.com",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }
      return callback(new Error("CORS not allowed"), false);
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  })
);

app.use(express.json());
app.use(cookieParser());

// ===== ROUTES =====
app.use("/auth", authRoute);

app.get("/home", userVerification, (req, res) => {
  res.json({
    success: true,
    user: req.user.username,
  });
});

app.get("/allHoldings", async (req, res) => {
  res.json(await HoldingsModel.find({}));
});

app.get("/allPositions", async (req, res) => {
  res.json(await PositionsModel.find({}));
});

app.post("/newOrder", async (req, res) => {
  await new OrdersModel(req.body).save();
  res.status(201).json({ message: "Order saved!" });
});

// ===== SERVER =====
mongoose
  .connect(uri)
  .then(() => {
    console.log("DB connected");
    app.listen(PORT, () =>
      console.log(`Server running on port ${PORT}`)
    );
  })
  .catch(console.error);
