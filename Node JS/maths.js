const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a*b;
const divide = (a, b) => a/b;

module.exports = { add, subtract, multiply, divide};

/* If you want to use the exports object directly:

exports.add = (a, b) => a + b;
exports.subtract = (a, b) => a - b;
exports.multiply = (a, b) => a*b;
exports.divide = (a, b) => a/b; */