let mongoose = require(`mongoose`);
let express = require(`express`);


let Schema = mongoose.Schema;

let usersSchema = new Schema(
  {
    name: { type: String, lowercase: true },
    email: String,
    age: (Number = 0),
  },
  { timestamps: true }
);


