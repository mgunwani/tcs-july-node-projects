// execute: node app.js
// Output: ['C:\\Program Files\\nodejs\\node.exe','E:\\tcs-node-projects\\node-daythree\\yargs-project\\app.js']
console.log(process.argv);

// --------------------------------------------- //

// execute: node app.js fly
// Output: ['C:\\Program Files\\nodejs\\node.exe','E:\\tcs-node-projects\\node-daythree\\yargs-project\\app.js', 'fly']
console.log(process.argv);

// --------------------------------------------- //

// execute: node app.js fly
// Output: Flying!!
let command = process.argv[2];
if (command == 'fly') {
    console.log('Flying!!');
} else if (command == 'drive') {
    console.log('Driving!!');
} else {
    console.log('Neither Flying Nor Driving!!');
}

// --------------------------------------------- //

// execute: node app.js drive --speed=30 --car=nisaan
// Output: [ 'C:\\Program Files\\nodejs\\node.exe', 'E:\\tcs-node-projects\\node-daythree\\yargs-project\\app.js', 'drive', '--speed=30', '--car=nisaan']
console.log(process.argv);
