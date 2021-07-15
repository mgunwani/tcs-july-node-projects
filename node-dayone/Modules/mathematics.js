
// 1st Approach

// var maxTime = 1000;
// function addition() {
//     console.log('Addition Performed');
// }
// function subtraction() {
//     console.log('Subtraction Performed');
// }
// module.exports.mTime = maxTime;
// module.exports.addition = addition;
// module.exports.subtract = subtraction;

// 2nd Approach

module.exports = {
    mTime: 1000,
    addition: function () {
        console.log('Addition Performed');
    },
    subtract: function () {
        console.log('Subtraction Performed');
    },
    product: (num1, num2) => {
        console.log('Product of Two Numbers : ' + (num1 * num2));
    }
}