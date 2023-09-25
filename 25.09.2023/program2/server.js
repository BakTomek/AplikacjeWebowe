const http = require('http');
const fs = require('fs');
 
const hostname = '127.0.0.1';
const port = 3000;
 
const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type' : 'text/html'});
    fs.readFile('index.html', null, function (error, page) {
        if (error){
            res.writeHead(404);
            res.write('Error, file not found.');
        }
        else {
            res.write(page);
        }
        res.end();
    })
});
 
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});