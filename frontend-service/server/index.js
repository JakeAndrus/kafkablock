const express = require('express')
const path = require('path')
const kafka = require('kafka-node')
const WebSocketServer = require('websocket').server
const app = express()

const {
    NODE_ENV
} = process.env

app.use(require('body-parser').json())

const client = new kafka.KafkaClient('localhost:2181')
const Consumer = kafka.Consumer
const consumer = new Consumer(
    client,
    [{ topic: 'quickstart-events', partition: 0 }],
    { autoCommit: false}
)

consumer.on('message', function (message) {
    console.log('message recv')
    console.log(message)
})

let appHtmlDir;
if (NODE_ENV === 'dev') {
    appHtmlDir = 'public'
} else {
    appHtmlDir = 'build'
}
console.log(`Serving from ${appHtmlDir}`)
app.use(express.static(path.join(__dirname, '..', appHtmlDir)))

app.listen(3000, () => console.log('Listening on port 3000'))

const gracefulShutdown = () => {
    process.exit()
}

process.on('SIGINT', gracefulShutdown)
process.on('SIGTERM', gracefulShutdown)
process.on('SIGUSR2', gracefulShutdown) // Sent by nodemon
