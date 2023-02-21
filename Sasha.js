const net = require('net')

const Sasha = new net.Socket()

const Zhenya = { host: '127.0.0.1', port: 2000 }

Sasha.connect(Zhenya, (socket) => {
    const greetings = 'Стас: Привет, Ты веришь в любовь с первого взгляда, или мне пройти мимо тебя еще раз?'

    Sasha.write(greetings)
    console.log(greetings)
})

Sasha.on('data', (data) => {
    console.log(data)
})
