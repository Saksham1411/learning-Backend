const http = require('http');

const server = http.createServer((req, res) => { //request ans response
    // // console.log(req);
    if (req.url == '/') {
        // res.write();
        res.end('welcome to my home page')
    }
    else if (req.url == '/about') {
        // res.write();
        res.end('here is our short history')
    } else {
        res.end(`
    <h1>OOPS</h2>
    <p>page is not found</p>
    <a href="/">back home</a>
    `);
        // res.end()
    }
    res.end();

})

server.listen(5000);