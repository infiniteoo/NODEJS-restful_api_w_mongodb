const mongoose = require("mongoose");

// Book Schema
const bookSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  author: {
    type: String,
    required: true,
  },
  publisher: {
    type: String,
  },
  pages: {
    type: String,
  },
  image_url: {
    type: String,
  },
  buy_url: {
    type: String,
  },
  create_date: {
    type: Date,
    default: Date.now,
  },
});

const Book = (module.exports = mongoose.model("Book", bookSchema));

// get books
module.exports.getBooks = (cb, limit) => {
  Book.find(cb).limit(limit);
};

// get single book
module.exports.getBookById = (id, cb) => {
  Book.findById(id, cb);
};
