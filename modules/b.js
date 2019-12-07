const data = require('./data.json');

function greet() {
    const test = data;
    console.log('coming from B');
}

function test() {
    console.log('test');
}


module.exports = {greet, test};