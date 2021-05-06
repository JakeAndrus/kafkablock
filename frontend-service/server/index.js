const express = require('express')
const path = require('path')
const app = express()


app.use(require('body-parser').json())

app.use(express.static(path.join(__dirname, '..', 'public')))

app.listen(3000, () => console.log('Listening on port 3000'))

const gracefulShutdown = () => {
    process.exit()
}

process.on('SIGINT', gracefulShutdown)
process.on('SIGTERM', gracefulShutdown)
process.on('SIGUSR2', gracefulShutdown) // Sent by nodemon
