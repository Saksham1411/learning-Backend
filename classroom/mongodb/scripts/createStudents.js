const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/students");

async function main(){
    const sam = new Student({
        name:"sam",
        rollno:1236,
    });
    const saksham = new Student({
        name:"saksham",
        rollno:1238,
    });
    const vika = new Student({
        name:"vika",
        rollno:1000,
    });
    await sam.save();
    await saksham.save();
    await vika.save();
    const allStudents = await Student.find();
    console.log(allStudents);

}
main();