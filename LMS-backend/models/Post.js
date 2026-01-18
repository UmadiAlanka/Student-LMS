const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  StudentID: String,
  Name: String,
  Email: String,
  course: String,
  Year: String
}, { timestamps: true });

module.exports = mongoose.model("Post", postSchema);
