const mongoose = require('mongoose'); 
var Schema = mongoose.Schema;
var student = new Schema(
    {
       name :String,
        age: Number
    }
);    
module.exports = mongoose.model('student',student);