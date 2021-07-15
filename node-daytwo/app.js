var express = require('express');
var app = express();

app.use(express.json());
app.use(express.urlencoded({ "extended": true }));

const courses = [
    { id: 101, name: 'JavaScript', price: 230 },
    { id: 102, name: 'TypeScript', price: 250 },
    { id: 103, name: 'Core Java', price: 300 },
    { id: 104, name: 'Angular', price: 350 },
    { id: 105, name: 'Knockout', price: 400 }
]

// GET Request: http://localhost:5000
app.get('/', (req, res) => {
    res.send('Hello Everyone!!!!');
})

// GET Request: http://localhost:5000/courses
app.get('/courses', (req, res) => {
    res.send(courses);
})

// GET Request: http://localhost:5000/courses/101
app.get('/courses/:id', (req, res) => {
    const course = courses.find(c => c.id == parseInt(req.params.id));
    if (!course)
        return res.status(404).send('The course with the given Id was not found.');
    res.send(course);
})

// POST Request: http://localhost:5000/courses
app.post('/courses', (req, res) => {
    const course = {
        id: req.body.id,
        name: req.body.name,
        price: req.body.price
    };
    courses.push(course);
    res.send(course);
})

// PUT Request: http://localhost:5000/courses/101
app.put('/courses/:id', (req, res) => {
    const course = courses.find(c => c.id == parseInt(req.params.id));
    if (!course)
        return res.status(404).send('The course with the given Id was not found.');
    course.name = req.body.name;
    course.price = req.body.price;
    res.send(course);

})

// DELETE Request: http://localhost:5000/courses/101
app.delete('/courses/:id', (req, res) => {
    const course = courses.find(c => c.id == parseInt(req.params.id));
    if (!course)
        return res.status(404).send('The course with the given Id was not found.');
    const index = courses.indexOf(course);
    courses.splice(index, 1);
    res.send(course);
})

app.listen(5000, () => {
    console.log('The server is running at port 5000!!');
})