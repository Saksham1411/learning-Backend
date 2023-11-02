const express = require('express');

const app = express();

const tasks = require('./routes/tasks');

// middleware

app.use(express.json());


// routes
app.get('/hello',(req,res)=>{
    res.send('Working!!!');
})


app.use('/api/v1/tasks',tasks)

const port = 3000;

app.listen(port, console.log('server is running...'))



// 24.00
// last work made a function in controllers tasks getAllTasks