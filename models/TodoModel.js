const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
  title: {
    type: String,
    minLength: 1,
    required: true
  },
  description: {
    type: String,
    required: false,
    default: ''
  },
  completed: {
    type: Boolean,
    required: false,
    default: false,
  }
});

TodoSchema.virtual("url").get(function() {
  return `/todos/${this._id}`
});

module.exports = mongoose.model('Todo', TodoSchema);