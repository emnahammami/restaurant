const express = require("express");
const logger = require("morgan");
const mongoose=require("mongoose")
const createError = require("http-errors");
const stdRouter = require('./routes/student');
const studentRoutes = require("./routes/student");
const app = express();
app.use(express.json());
const dbconfig=require("./database/mongodb.json")
//app.use('/student',stdRouter);

app.use(logger('dev'));

app.use(express.urlencoded({extended : false}));




mongoose.connect(
   dbconfig.mongo.uri ,
    { useNewUrlParser:
    true ,
    useUnifiedTopology: true
    },
    ()=> console.log("Connected to DB") );
    app.use("/students", studentRoutes);
module.exports = app;



