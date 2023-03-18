const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
  title: {
    type: String,
    minLength: 1,
    required: true},
  description: {
    type: String,
    minlength: 1,
    required: true},
  completed: {
    type: Boolean,
    default: false,
    required: false,
  }
});

TodoSchema.virtual("url").get(function() {
  return `/todos/${this._id}`
});

module.exports = mongoose.model('Todo', TodoSchema);