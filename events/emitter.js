function Emitter() {
    this.events = {}
}

Emitter.prototype.on = function(type,listener) {
    this.events[type] = this.events[type] || []
    this.events[type].push(listener)
}

Emitter.prototype.emit = function(type) {
    if (this.events[type]) {
        for (listener of this.events[type]) {
            listener()
        }
    }
}

module.exports = Emitter;

