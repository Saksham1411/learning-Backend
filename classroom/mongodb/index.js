const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/students");

const studentSchema = new mongoose.Schema({
    name:{
        type:String,
    },
    rollno:{
        type:Number,
    }
})

const Student = mongoose.model("Student",studentSchema);

async function main(){
    const sam = new Student({
        name:"sam",
        rollno:1236,
    });
    await sam.save();

}
main();