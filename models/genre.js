const mongoose = require("mongoose");

// Genre Schema
const genreSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  create_date: {
    type: Date,
    default: Date.now,
  },
});

const Genre = (module.exports = mongoose.model("Genre", genreSchema));

// Get Genres
module.exports.getGenres = (cb, limit) => {
  Genre.find(cb).limit(limit);
};

// Add Genre
module.exports.addGenre = (genre, cb) => {
  Genre.create(genre, cb);
};

// update genre
module.exports.updateGenre = (id, genre, options, callback) => {
  var query = { _id: id };
  var update = {
    name: genre.name,
  };
  Genre.findOneAndUpdate(query, update, options, callback);
};

// delete genre
module.exports.removeGenre = (id, cb) => {
  const query = { _id: id };
  Genre.remove(query, cb);
};
