const mongoose = require('mongoose');
const Student = require('./model/student')
mongoose.connect("mongodb://127.0.0.1:27017/students");

