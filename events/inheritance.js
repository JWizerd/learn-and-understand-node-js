'use strict';

let EventEmitter = require('events');

class AnotherEmitter extends EventEmitter {
    constructor() {
        super();
        this.greeting = 'hello';

        // private function
        this.sum = (num1, num2) => {
            console.log(num1 + num2)
        }
    }

    greet(data) {
        this.emit('greet', data);
        this.sum(1,2);
    }
}

module.exports = AnotherEmitter;