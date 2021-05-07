const express = require('express')
const path = require('path')
const app = express()

const {
    NODE_ENV
} = process.env

app.use(require('body-parser').json())

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
