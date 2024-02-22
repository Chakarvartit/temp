const http = require('http');
const server = http.createServer((req, res) => {
  if(req.url==='/') {
    res.end('welcome to home page');

  }
  if(req.url==='/about')
  {
    const person={
      name:'karandeep singh',
      class:'2nd year',
      Roolno:21,

    }
    res.end(JSON.stringify(person));

  }
})
server.listen(5000)