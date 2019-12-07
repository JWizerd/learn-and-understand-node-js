var Emitter = require('events');
var Config = require('./config');

var newEvent = new Emitter();

newEvent.on(Config.events.GREET, function() {
    console.log('greet');
})

newEvent.on(Config.events.GREET, function() {
    console.log('greet poo');
})

newEvent.emit(Config.events.GREET);
