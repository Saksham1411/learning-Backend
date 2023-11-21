const express = require('express');
const app = express();
const todos = require('./todos.json');
const fs = require('fs');

app.use(express.json());


app.set('view engine', 'hbs'); 
app.set('views', './views'); 

app.get('/todos',(req,res)=>{
    res.send(todos);
})
app.post('/todos',(req,res)=>{
    let task = req.body;
    todos.push(task);
    fs.writeFileSync('./todos.json',JSON.stringify(todos));
    res.send("todo added succesfully");
})

app.get('/', (req, res) => {
    res.render('index', {
        todos
    })
})

app.listen(3000,()=>console.log('localhost:3000'));