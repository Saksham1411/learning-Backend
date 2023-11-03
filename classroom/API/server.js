const http = require('http');

const users = [
    {name:'saksham',age:19},
    {name:'sam',age:19},
]

const products = [
    {name:"eraser",price:20},
    {name:"pencil",price:10},
]

const server = http.createServer((req,res)=>{
    // console.log(req.url);
    res.setHeader("Content-Type","application/json")
    if(req.url === '/users'){
        res.end(JSON.stringify(users));
    }else if(req.url==='/products'){
        res.end(JSON.stringify(products))
    }
    else{
        res.end(`<h1>ERROR 404</h1>`);
    }
    res.end();
})
.listen(5000,()=> console.log("working..."));