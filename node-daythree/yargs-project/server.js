var yargs = require('yargs');

// node app.js drive --speed=30 --car=nisaan
// Output: [ 'C:\\Program Files\\nodejs\\node.exe', 'E:\\tcs-node-projects\\node-daythree\\yargs-project\\app.js', 'drive', '--speed=30', '--car=nisaan']
// console.log(process.argv)

// node app.js drive --speed=30 --car=nisaan
// Output: { _: [ 'drive' ], speed: 30, car: 'nisaan', '$0': 'server.js' }
// console.log(yargs.argv);

// execute: node app.js fly
// Output: Flying!!
// console.log(yargs.argv);
// let command = yargs.argv._[0];
// if (command == 'fly') {
//     console.log('Flying!!');
// } else if (command == 'drive') {
//     console.log('Driving!!');
// } else {
//     console.log('Neither Flying Nor Driving!!');
// }

// node server.js drive --speed=30 --car=nisaan
let command = yargs.argv._[0];
let params = yargs.argv;
if (command == 'fly') {
    console.log('Flying!!');
} else if (command == 'drive') {
    if (params.speed && params.car) {
        console.log(`You are driving ${params.car} at the speed of ${params.speed}`);
    } else {
        console.log('Driving!!');
    }
} else {
    console.log('Neither Driving Nor Flying!!');
}






