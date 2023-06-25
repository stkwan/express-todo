const express = require('express');
const app = express();
//const port = 3000;
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const connectToMongo = require('./connectToMongo');
const todoRouter = require('./routes/api/todos.js');
const handlePreflight = require('./config/handlePreflight.js');

// Parse the request body from a json string to a JS object;
// Note: without `app.use(express.json())`, req.body is undefined
app.use(express.json());

// Use handlePreflight CORS
app.use(handlePreflight);

// Connect to MongoDB database
connectToMongo();

// App use home
app.get('/', (req, res, next) => {
  res.send('hello world');
})

// Define paths and respective middleware functions
app.use('/api/todos', todoRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
