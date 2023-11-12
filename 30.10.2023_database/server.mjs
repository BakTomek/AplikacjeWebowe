import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url';
import { apiRouter } from './routes/api.mjs';
import bodyParser from 'body-parser';
import { createConnection } from 'mysql';


const connection = createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodedatabase'
})

connection.connect((err)=>{
    if (err) {
        throw err;
    }
    console.log('Connected');
})

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

    const formData = req.body;
    const values = Object.values(formData);

    connection.query(`INSERT INTO formularz (imie, email, temat, tresc) VALUES ('${values[0]}', '${values[1]}', '${values[2]}', '${values[3]}')`, (err)=>{
        if (err){
            throw err;
        }
        res.redirect('/');
    })
})

app.listen(port, () => {
    console.log(`App listening on port ${host}:${port}`);
})