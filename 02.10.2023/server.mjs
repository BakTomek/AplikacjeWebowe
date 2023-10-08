import * as http from 'http'
import { readFile } from 'fs/promises'
import { writeFile } from 'fs/promises'


const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer(async (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.writeHead(200, { 'content-type': 'text/html' });
        const htmlHome = await readFile('index.html');
        res.write(htmlHome);
        res.end();
    }

    else if (url === '/dziekujemy') {
        res.writeHead(200, { 'content-type': 'text/html' });
        const htmlThanks = await readFile('dziekujemy.html');
        res.write(htmlThanks);
        res.end();
    }

    else if (url === '/api') {
        const cars = [
            { brand: 'Ferrari', model: '458' },
            { brand: 'Porsche', model: 'gt3rs' },
            { brand: 'Honda', model: 'Civic' }
        ];

        res.writeHead(200, { 'content-type': 'application/json' });
        res.write(JSON.stringify(cars));
        res.end();
    }

    else if (url === '/kontakt' && method === 'POST'){
        const body = []
        req.on('data', (chunk) => {
            body.push(chunk);
        })

        req.on('end', async () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            await writeFile(`contact/message - ${ Date.now().toString() }.txt`, message);
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
        })
    }

    else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.write('Error 404, page does not exist');
        res.end();
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});