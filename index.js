const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connectDB = require("./config/db");

app.use(express.json({ extended: false }));

const Genre = require("./models/genre");
const Book = require("./models/book");

//connect to mongoose
connectDB();

app.get("/", (req, res) => {
  res.send("please use /api/books or /api/genres");
});

app.get("/api/genres", (req, res) => {
  Genre.getGenres((err, genres) => {
    if (err) {
      throw err;
    }

    res.json(genres);
  });
});

app.get("/api/books/:id", (req, res) => {
  Book.getBookById(req.params.id, (err, book) => {
    if (err) {
      throw err;
    }

    res.json(book);
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
