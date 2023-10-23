import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url';
import { apiRouter } from './routes/api.mjs';
import bodyParser from 'body-parser';


const app = express();
const host = 'localhost';
const port = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.use('/api', apiRouter);
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public/js')))
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile('templates/index.html', {root: __dirname });
})


app.get('/kontakt', (req, res) => {
    res.sendFile('templates/kontakt.html', {root: __dirname });
})

app.post('/kontakt', (req, res) => {
    console.log(req.body);
    res.redirect('/');
})

app.listen(port, () => {
    console.log(`App listening on port ${host}:${port}`);
})