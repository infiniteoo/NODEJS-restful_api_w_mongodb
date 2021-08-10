const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connectDB = require("./config/db");

app.use(express.json({ extended: false }));

//connect to mongoose
connectDB();

app.get("/", (req, res) => {
  res.send("please use /api/books or /api/genres");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
