const express = require('express');
const app = express();
const todos = require('./todos.json');
const fs = require('fs');

app.use(express.json());

app.get('/todos',(req,res)=>{
    res.send(todos);
})
app.post('/todos',(req,res)=>{
    let task = req.body;
    todos.push(task);
    fs.writeFileSync('./todos.json',JSON.stringify(todos));
    res.send("todo added succesfully");
})

app.listen(3000,()=>console.log('localhost:3000'));