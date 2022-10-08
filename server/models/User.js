const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    username: {
      unique: true,
      require: true,
      type: String,
      min: 3,
      max: 20
    },
    email: {
      unique: true,
      required: true,
      type: String,
      max: 50,
    },
    password: {
      required: true,
      type: String,
      min: 8
    },
    avatar: {
      type: String,
      default: "",
    }
  },
  {timestamps: true}
);

module.exports = mongoose.model("User", UserSchema);