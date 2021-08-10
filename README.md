# NODE.JS - Full RESTful API w/Express & MongoDB

### About

This project covers the creation of a fully operation CRUD RESTful API connected to a MongoDB database. The database contains two collections: genres and books. Through HTTP requests to our api, users can create, read, update and delete items from both of these collections.

### Usage

```
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

// delete a genre
app.delete("/api/genres/:_id", (req, res) => {
  var id = req.params._id;
  Genre.removeGenre(id, (err, genre) => {
    if (err) {
      throw err;
    }
    res.json(genre);
  });
});

// update a genre
app.put("/api/genres/:_id", (req, res) => {
  var id = req.params._id;
  var genre = req.body;
  Genre.updateGenre(id, genre, {}, (err, genre) => {
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

// update a book in the db
app.put("/api/books/:_id", (req, res) => {
  let id = req.params._id;
  let book = req.body;
  Book.updateBook(id, book, {}, (err, book) => {
    if (err) {
      throw err;
    }

    res.json(book);
  });
});

// delete a book from the db
app.delete("/api/books/:_id", (req, res) => {
  let id = req.params._id;
  Book.removeBook(id, (err, book) => {
    if (err) {
      throw err;
    }

    res.json(book);
  });
});
```
