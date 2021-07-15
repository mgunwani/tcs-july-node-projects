var express = require('express');
var app = express();
var userRouter = require('./routes/userRoutes');
var employeeRouter = require('./routes/employeeRoutes');

app.use('/users', userRouter);
app.use('/employees', employeeRouter);

app.get('/', (req, res) => {
    res.send('hello from simple server :)')
})

app.listen(3000, () => {
    console.log('Server is running at port 3000!!')
})