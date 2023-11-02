const express = require('express');
const app = express();


app.get('/',(req,res)=>{
    res.status(200).send('Home page'); // we can chain status code and send
})

app.get('/about',(req,res)=>{
    res.status(200).send('about page');
})

app.all('*',(req,res)=>{
    res.status(404).send('<h1>resource not found</h1>')
})

app.listen(5000,()=>{
    console.log('server is listening on port 5000');
})


// app.get      Read data
// app.post     Insert data
// app.put      Updata data
// app.delete   delete data
// app.all      response to all page (abhi tk use)
// app.use      setup static and middleware
// app.listen  same as http module give port no to start a server and pass a callback function to print any kind of msgg
