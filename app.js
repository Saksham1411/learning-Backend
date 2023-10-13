const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/'){
      res.end('hello world');
    }
    else if(req.url === '/about'){
      res.end('this is about page');
    }
    else{
      res.end('this is error page');
    }
    res.end();
})

server.listen(5000, () => {
  console.log('Server listening on port : 5000....')
})
