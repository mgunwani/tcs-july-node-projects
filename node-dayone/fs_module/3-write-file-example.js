var fs = require('fs');

// Write File Asynchronously
/*
fs.writeFile('test1.txt', "Hello Everyone", (err) => {
    if (err) throw err;
    console.log('Content written to the file successfully.');
})
*/

// Append File Asynchronously
fs.appendFile('test1.txt', "\nHello World", (err) => {
    if (err) throw err;
    console.log('Content written to the file successfully.');
})