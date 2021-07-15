var fs = require('fs');

var data1 = fs.readFileSync('./data.txt', "utf-8");
console.log(data1);

var data2 = fs.readFileSync('./sample.txt', "utf-8");
console.log(data2);

console.log('The End..');