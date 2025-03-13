const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

const app = express();
app.use(express.json());
app.use(cors());

// Load biến môi trường trước khi kết nối
dotenv.config();

const PORT = process.env.PORT || 3000;

// Kết nối đến MongoDB
connectDB();

app.get("/", (req, res) => {
  res.json({ message: "xin chao" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});