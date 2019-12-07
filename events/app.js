var emitter = require('./emitter');
var newEvent = new emitter();

newEvent.on('greet', function() {
    console.log('greet');
})

newEvent.on('greet', function() {
    console.log('greet poo');
})

newEvent.emit('greet');