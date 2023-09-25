const http = require('http');
 
const hostname = '127.0.0.1';
const port = 3000;
 
const server = http.createServer((req, res) => {
  //res.statusCode = 200;
  /*if (error){
    res.writeHead(500, {'Content-Type': 'text/plain'});
    res.end('Error');
  }*/
  //else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<p style="color: red; font-size: 5em;">Hello world! :)</p>');
    res.end();
  //} 
});
 
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});