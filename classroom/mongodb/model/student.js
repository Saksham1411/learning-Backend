const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name:{
        type:String,
    },
    rollno:{
        type:Number,
    }
})

const Student = mongoose.model("Student",studentSchema);

module.exports = Student;