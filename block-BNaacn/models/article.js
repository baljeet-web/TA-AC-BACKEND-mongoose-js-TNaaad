let mongoose = require(`mongoose`);
let express = require(`express`);
let Schema = mongoose.Schema;

let articleSchema = new Schema({
    title : String,
    description : String, 
    tags : String,
    createdAt : {type : Date, default : Date.now()},
    likes : { type : Number , default : 0}
})