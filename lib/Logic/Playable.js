"use strict";

var EventEmitter = require('events').EventEmitter;

class Playable extends EventEmitter {

    constructor(user) {
        super();
        this.user = user;
    }

    loadData() {
        this.emit('data-changed');
    }

    getTitle() {
        return "";
    }

    getAdditionalInfo() {
        return null;
    }

    createStream(callback) {
        callback(null);
    }

}

module.exports = Playable;