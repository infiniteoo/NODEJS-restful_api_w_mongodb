const express = require("express");
const app = express();

const connectDB = require("./config/db");

app.use(express.json({ extended: false }));

const Genre = require("./models/genre");
const Book = require("./models/book");

//connect to mongoose
connectDB();

app.get("/", (req, res) => {
  res.send("please use /api/books or /api/genres");
});

// get all genres
app.get("/api/genres", (req, res) => {
  Genre.getGenres((err, genres) => {
    if (err) {
      throw err;
    }

    res.json(genres);
  });
});

// add a genre
app.post("/api/genres", (req, res) => {
  let genre = req.body;
  Genre.addGenre(genre, (err, genre) => {
    if (err) {
      throw err;
    }
    res.json(genre);
  });
});

// add a book
app.post("/api/books", (req, res) => {
  var book = req.body;
  Book.addBook(book, (err, book) => {
    if (err) {
      throw err;
    }
    res.json(book);
  });
});

// get all books in db
app.get("/api/books", (req, res) => {
  Book.getBooks((err, books) => {
    if (err) {
      throw err;
    }
    res.json(books);
  });
});

// get a specific book by database id
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
