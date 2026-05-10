const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const routes = require("./routes/routes");

dotenv.config();

const connectDB = require("./config/db");

const app = express();

/* Middleware */
app.use(cors());

app.use(express.json());

/* Database */
connectDB();

app.use("/api", routes);

/* Test Route */
app.get("/", (req, res) => {
  res.send("API Running...");
});

/* Server */

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
