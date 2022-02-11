import http from 'http'

import cors from 'cors'
import express from 'express'
import { Server } from 'socket.io'

const HTTP_SERVER_PORT = 3333

const app = express()
app.use(cors())
const httpServer = http.createServer(app)
const io = new Server(httpServer, {
  cors: {
    origin: '*',
  },
})

io.on('connection', (connection) => {
  console.log(`User just connected with id: ${connection.id}`)
})

httpServer.listen(HTTP_SERVER_PORT, () => {
  console.log(`httpServer listening on *:${HTTP_SERVER_PORT}`)
})
