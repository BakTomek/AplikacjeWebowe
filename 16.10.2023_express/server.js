const express = require('express');
const fs = require('fs/promises');
const path = require('path');

const app = express();
const host = 'localhost';
const port = 3000;

app.use('/static', express.static(path.join(__dirname, 'public/js')));

app.get('/', async (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    const html_index = await fs.readFile('templates/index.html');
    res.end(html_index);
})

app.route('/kontakt')
    .get(async (req, res) => {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        const html_kontakt = await fs.readFile('templates/kontakt.html');
        res.end(html_kontakt);
    })

    .post((req, res) => {
        console.log('Form send');
    })

app.listen(port, () => {
    console.log(`App listening on port ${host}:${port}`);
})