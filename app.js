const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const connectToMongo = require('./connectToMongo');
const todoRouter = require('./routes/api/todos.js');

// Parse request body from json string to JS object,
// without `app.use(express.json())`, req.body is undefined
app.use(express.json());

// Connect to MongoDB database
connectToMongo();

// Define paths and middleware functions
app.use('/api/todos', todoRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
