const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config();

const connectDb = () => {
  return mongoose.connect(process.env.MONGO_URL, 
    { useNewUrlParser: true, useUnifiedTopology: true }, 
  )
  .then(()=>console.log('App is connected to MongoDB Atlas'))
  .catch((err) => console.log(err));
};

module.exports = connectDb;