const express = require('express');
const app = express();
const port = 3000;
const birdsRoutes = require('./birds.js');

/*
const myLogger = (req, res, next) => {
  console.log('LOGGER!!!');
  next();  // calling next passes on the request to the next middleware function 
};

app.use(myLogger);
*/

const requestTime = (req, res, next) => {
  req.requestTime = Date.now();
  next();
};

app.use(requestTime);

app.get("/", (req, res) => {
  let responseText = 'Hello World!<br>'
  responseText += `<small>Requested at: ${req.requestTime}</small>`
  res.send(responseText)
});

app.post("/", (req, res) => {
  res.send("Got a Post Request");
});

app.use("/birds", birdsRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});