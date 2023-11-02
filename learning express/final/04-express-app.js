const express = require('express');
const path = require('path');
const app = express();

// setup static and middleware
app.use(express.static('./public')); //This is a built-in middleware function in Express. It serves static files and is based on serve-static.

app.get('/',(req,res)=>{
    res.status(200).sendFile(path.resolve(__dirname,'./navbar-app/index.html'));
})

app.all('*',(req,res)=>{
    res.status(404).send('resource not found');
})

app.listen(5000,()=>{
    console.log('server is listening on port 5000');
})
