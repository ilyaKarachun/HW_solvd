// const net = require('node:net') // подключаем встроенный в Node.js модуль 'net'
//
// // Создаём Женю!
// const Zhenya = net.createServer((socket) => {
//
//     // Женя будет знакомиться только с одним парнем, а второго отвернет
//     // (задаём для сервера максимальное количество активных соединений)
//     Zhenya.maxConnections = 1
//
//
//     socket.on('data', (data) => {
//         console.log(`${data}`) // Сообщение от парня
//
//         const answer = 'Света: Привет. А ты смешной)' // ответ Светы
//         socket.write(answer) // Света даёт ответ
//         console.log(answer) // выводим в консоль ответ
//     })
// })
//
// // Женя готова к знакомству!
// // (сервер прослушивает порт 2000 для установления соединений)
// Zhenya.listen(2000, () => {
//     console.log(`Женя сидит с подругами в кафе и готова к знакомству!`) // выведем в консоль сообщение о готовности
// })
//
// // Женя отвергает всех остальных парней, она больше не знакомится.
// // Обрабатываем событие 'drop'!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Zhenya.on('drop', (data) => {
//     console.log('Извини, Я уже занята!')
// })

const net = require('node:net')

const Zhenya = net.createServer( (socket) => {
    Zhenya.maxConnections = 2

    socket.on('data', (data) => {
        console.log(data)

        const answer = 'Света: Привет! а ты смешной)'
        socket.write(answer)
        console.log(answer)
    })
})

    Zhenya.listen(2000, () => {
        console.log(`Женя сидит с подругами в кафе и готова к знакомству!`) // выведем в консоль сообщение о готовности
    })

    Zhenya.on('drop', (data) => {
        console.log('Извини, я уже занята')
    })
