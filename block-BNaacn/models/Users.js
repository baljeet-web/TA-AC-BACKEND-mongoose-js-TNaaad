let mongoose = require(`mongoose`);
let express = require(`express`);
let Schema = mongoose.Schema;

let usersSchema = new Schema(
  {
    name: String,
    email: { type: String, lowercase: true },
    age: { type: Number, default: 0 },
  },
  { timestamps: true }
);

let User = mongoose.model(`User`, usersSchema);
module.exports = User;