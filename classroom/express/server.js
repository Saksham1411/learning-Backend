const express = require('express');

const app = express();

const users = [
    {name:'saksham',age:19},
    {name:'sam',age:19},
]
const products = [
    {name:"eraser",price:20},
    {name:"pencil",price:10},
]

app.use(express.static('public'));

app.get('/users',(req,res)=>{
    res.json(users);
})
app.get('/products',(req,res)=>{
    res.json(products);
})
app.post('/',(req,res)=>{
    res.send('posting a request')
})
// app.all('*', (req, res) => {
//     res.status(404).send('resource not found')
//   })
app.get('/',(req,res)=>{
    res.send('hii')
})

app.listen(5000,()=> console.log('working....'))