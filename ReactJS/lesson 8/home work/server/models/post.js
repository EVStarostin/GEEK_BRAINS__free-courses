const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: { type: String, required: true },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  paragraphs: { type: [String], required: true }
});

module.exports = mongoose.model('Post', postSchema);
