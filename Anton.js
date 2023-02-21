const net = require('net')

const Anton = new net.Socket()

const Zhenya = { host: '127.0.0.1', port: 2000 }

Anton.connect(Zhenya, () => {
    const greeting = 'Антон: Привет! Можно, я провожу тебя до дома? Мои родители говорили что надо идти за своей мечтой!'
    Anton.write(greeting)
    console.log(greeting)
})

Anton.on('data', (data) => {
    console.log(data)
})
