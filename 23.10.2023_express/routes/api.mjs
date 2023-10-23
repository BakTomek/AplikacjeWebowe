import express from 'express';

const router = express.Router();

const students = [
    { id: 1, name: 'Thomas', surname: 'Bumblebee', email: 'abudhabi@gmail.com' },
    { id: 2, name: 'Anthony', surname: 'Borderro', email: 'dangthatshot@gmail.com' },
    { id: 3, name: 'Andrew', surname: 'Wellson', email: 'omamale@gmail.com' },
    { id: 4, name: 'Elon', surname: 'Musk', email: 'ihaverocket@gmail.com' },
    { id: 5, name: 'Jackson', surname: 'Michael', email: 'heeeheeee@gmail.com' },
    { id: 6, name: 'Matthew', surname: 'DonCarbon', email: 'lemmedoitforyou@gmail.com' },
    { id: 7, name: 'Daniel', surname: 'Stetson', email: 'nomadcurrencies@gmail.com' },
    { id: 8, name: 'Montagem', surname: 'Touma', email: 'overwall@gmail.com' },
    { id: 9, name: 'Doaenel', surname: 'Dantes', email: 'ilistentohardstyleonly@gmail.com' },
    { id: 10, name: 'Bauffs', surname: 'Melon', email: 'eatmacrackers@gmail.com' }
]

const subjects = [
    { id: 1, name: 'j.Polski', hoursAWeek: 4 },
    { id: 2, name: 'j.Angielski', hoursAWeek: 3 },
    { id: 3, name: 'Chemia', hoursAWeek: 1 },
    { id: 4, name: 'Geografia', hoursAWeek: 1 },
    { id: 5, name: 'Matematyka', hoursAWeek: 5 },
    { id: 6, name: 'Programowanie aplikacji webowych', hoursAWeek: 3 },
    { id: 7, name: 'Programowanie aplikacji desktopowych', hoursAWeek: 3 },
    { id: 8, name: 'Testowanie i dokumentowanie aplikacji', hoursAWeek: 3 },
    { id: 9, name: 'Biologia', hoursAWeek: 1 },
    { id: 10, name: 'j.Angielski zawodowy', hoursAWeek: 1 }
]

router.use((req,res,next) => {
    console.log('Time:', Date.now());
    next();
})

router.get('/', (req, res) => {
    const info = {
        "/api": "Informacje o API",
        "/api/students": "Informacje o 10 studentach",
        "/api/subjects": "Informacje o 10 przedmiotach",
        "/api/students/:id": "Informacje o studencie o danym id",
        "/api/subjects/:id": "Informacje o przedmiocie o danym id"
    }
    res.json(info);
})

router.get('/students', (req, res) => {
    res.json(students);
})

router.get('/subjects', (req, res) => {
    res.json(subjects);
})

router.get('/students/:id', (req, res) => {
    const chosenId = req.params.id;
    const chosenStudent = students.find(students => students.id == chosenId);
    if (chosenStudent){
        res.json(chosenStudent);
    }
    else {
        res.status(404);
        res.send("Error 404: Page not found");
    }
})

router.get('/subjects/:id', (req, res) => {
    const chosenId = req.params.id;
    const chosenSubject = subjects.find(subjects => subjects.id == chosenId);
    if (chosenSubject){
        res.json(chosenSubject);
    }
    else {
        res.status(404);
        res.send("Error 404: Page not found");
    }
})

export {router as apiRouter};
