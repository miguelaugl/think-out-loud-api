import http from 'http'

import cors from 'cors'
import express from 'express'

import { createSocket } from './socket'

const HTTP_SERVER_PORT = 3333

const app = express()
app.use(cors())
app.get('/', (req, res) => {
  return res.json('Welcome to Think Out Loud Api')
})
const httpServer = http.createServer(app)

createSocket(httpServer)

httpServer.listen(HTTP_SERVER_PORT, () => {
  console.log(`httpServer listening on *:${HTTP_SERVER_PORT}`)
})
