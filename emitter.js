// emitter Object
function Emitter() {
    this.events = {};
}


Emitter.prototype.on = function(type, listener) {
    // property will be an array or create one
    this.events[type] = this.events[type] || [];

    this.events[type].push(listener);
}


// emitter
Emitter.prototype.emit = function(type) {
    if (this.events[type]) {
        this.events[type].forEach(function(listener) {
            listener();
        });
    }
}

module.exports = Emitter;
