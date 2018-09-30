const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: { type: String, required: true },
  userId: { type: String, required: true },
  paragraphs: { type: [String], required: true }
});

module.exports = mongoose.model('Post', postSchema);