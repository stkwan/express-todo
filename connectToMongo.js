const mongoose = require('mongoose');

// Set strictQuery to false
mongoose.set('strictQuery', false);

// Async function to connect to MongoDB database
const connectToMongo = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB database!')
  } catch (err) {
    console.log(err)
  }
};

module.exports = connectToMongo;
