const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Load Todo Model
const Todo = require('../../models/TodoModel.js');

// GET all todos
router.get("/", (req, res, next) => {
  Todo.find()
    .then(todos => {
      res.json(todos)
    })
    .catch(err => res.status(404).json({noTodosFound: 'No todos found'}));
});

// GET a single todo by id
router.get("/:id", (req, res, next) => {
  Todo.findById(req.params.id)
    .then(todo => {
      res.json(todo)
    })
    .catch(err => res.status(404).json({ todoNotFound: 'Todo not found' }));
});

// CREATE a new todo
router.post("/", (req, res, next) => {
  console.log(req.body);
  Todo.create(req.body)
    .then(todo => {
      res.json({ msg: 'Sucessfully added todo!' })
    })
    .catch(err => res.status(400).json({ error: 'Unable to add this book'}));
});

// UPDATE a todo
router.put("/:id", (req, res, next) => {
  Todo.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(todo => res.json(todo))
    .catch(err => res.status(400).json({ error: 'Unable to update this todo'}));
});

// DELETE a todo
router.delete("/:id", (req, res, next) => {
  Todo.findByIdAndDelete(req.params.id)
    .then(todo => {
      res.json({ msg: 'Successfully deleted todo!' });
    })
    .catch(err => res.status(400).json({ error: 'Unable to update this todo' }));
});

module.exports = router;
