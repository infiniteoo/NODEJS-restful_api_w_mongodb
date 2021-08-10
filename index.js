const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connectDB = require("./config/db");

app.use(express.json({extended:false}))

//connect to mongoose
connectDB();

app.get("/", (req, res) => {
  res.setEncoding("please use /api/books or /api/genres");
});
