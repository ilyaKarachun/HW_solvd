class EventEmitter {
    constructor() {
        this.listeners = {};
    }

    on(eventName, listener) {
        if (!this.listeners[eventName]) {
            this.listeners[eventName] = [];
        }
        //No checks are made to see if the listener has already been added.
        // Multiple calls passing the same combination of eventName and listener
        // will result in the listener being added, and called, multiple times.
        this.listeners[eventName].push(listener);
    }

    prependListener(eventName, listener) {
        if (!this.listeners[eventName]) {
            this.listeners[eventName] = [];
        }
        //No checks are made to see if the listener has already been added.
        // Multiple calls passing the same combination of eventName and listener
        // will result in the listener being added, and called, multiple times.
        this.listeners[eventName].unshift(listener);
    }

    emit(eventName, ...args) {
        const listeners = this.listeners[eventName];
        if (listeners) {
            listeners.forEach(listener => listener(...args));
        } else {
            console.log(`we dont have this event in our Array ${eventName}`)
        }
    }

    removeListener(eventName, listener) {
        const listeners = this.listeners[eventName];
        if (listeners) {
            const index = listeners.indexOf(listener);
            if (index !== -1) {
                listeners.splice(index, 1);
            }
        } else {
            console.log(`we dont have this event in our Array ${eventName}`)
        }
    }
}

const emitter = new EventEmitter()

emitter.on('click', (data) => console.log(`we have after click: ${data}`))
emitter.prependListener('mouseDown', (data) => console.log(`prependListener 1: ${data}`))
emitter.prependListener('click', (data) => console.log(`prependListener 2: ${data}`))
emitter.prependListener('click', (data) => console.log(`prependListener 2: ${data}`))
emitter.prependListener('click', (data) => console.log(`prependListener 2: ${data}`))
emitter.prependListener('mouseOver', (data) => console.log(`prependListener 3: ${data}`))

emitter.on('click', 'new data')
// console.log(emitter)

emitter.removeListener('click', 'new data')
emitter.emit('click', 'coffee')
emitter.emit('mouseOver', 'need less eat')
emitter.emit('clicke', 'coffee')
console.log(emitter)
