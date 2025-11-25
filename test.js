const assert = require('assert');
const { greet } = require('./server');

assert.strictEqual(greet('Student'), 'Hello, Student!');
console.log('All tests passed!');
