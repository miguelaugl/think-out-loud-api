import http from 'http'

import express from 'express'
import { Server } from 'socket.io'

const app = express()
const httpServer = http.createServer(app)
const io = new Server(httpServer)

io.on('connection', (connection) => {
  console.log(`User just connected with id: ${connection.id}`)
})

const HTTP_SERVER_PORT = 3333
httpServer.listen(HTTP_SERVER_PORT, () => {
  console.log(`httpServer listening on *:${HTTP_SERVER_PORT}`)
})
