import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url';
import { apiRouter } from './routes/api.mjs';
import bodyParser from 'body-parser';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

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
    async function main() {
        await prisma.form.create({
            data: {
                name: req.body.imie,
                email: req.body.email,
                subject: req.body.temat,
                message: req.body.tresc
            },
        })
    }

    main()
    .then(async () => {
        await prisma.$disconnect();
    })
    

    res.redirect('/');
})

app.listen(port, () => {
    console.log(`App listening on port ${host}:${port}`);
})