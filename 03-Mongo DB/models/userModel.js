// A model defines a collection schema inside a MongoDB database

const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    maxlength: 50,
  },
  age: {
    type: Number,
    required: true,
  },
  weight: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const UserModel = model("User", userSchema);
module.exports = UserModel;
