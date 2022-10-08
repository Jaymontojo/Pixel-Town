const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config();

const connectDb = () => {
  return mongoose.connect(process.env.MONGOOSE_URL, 
    { useNewUrlParser: true, useUnifiedTopology: true }, 
    () => {
    console.log("Connected to MongoDB")
    }
  );
};

module.exports = connectDb;