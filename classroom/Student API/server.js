const express = require('express');
const app = express();

app.use(express.json());


let students = [];

// getAll
app.get('/students', (req, res) => {
    res.send(students);
})

// add item
app.post('/students', (req, res) => {
    const data = req.body;
    students.push(data);
    res.send("data added");
})

// getOne
app.get('/students/:id', (req, res) => {
    const { id } = req.params;
    const student = [];
    // const singleStudent = students.find((item)=> item.rollno === Number(id));
    const singleStudent = students.filter((student)=> +student.rollno === +id);
    res.send(singleStudent);
})

// update
app.put('/students/:id' ,(req,res)=>{
    const { id } = req.params;
    const { name } = req.body;
    students.forEach((student)=>{
        if(+student.rollno === +id){
            student.name = name;
        }
    })
    res.send('data updated');
})

// delete
app.delete('/students/:id',(req,res)=>{
    const{id} = req.params;
    students = students.filter((student)=> +student.rollno !== +id);
    res.send('student delete');
})

app.listen(3000, () => console.log('server is running'))