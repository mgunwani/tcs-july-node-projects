var fs = require('fs');

// Reading File Asynchronously
fs.readFile('./data.txt', (err, data) => {
    if (err) throw err;
    console.log(data.toString());
})

// Reading File Asynchronously
fs.readFile('./sample.txt', (err, data) => {
    if (err) throw err;
    console.log(data.toString());
})