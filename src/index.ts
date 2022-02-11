import http from 'http'

import cors from 'cors'
import express from 'express'

import settings from './settings'
import { createSocket } from './socket'

const app = express()
app.use(cors())
app.get('/', (req, res) => {
  return res.json('Welcome to Think Out Loud Api')
})
const httpServer = http.createServer(app)

createSocket(httpServer)

httpServer.listen(settings.port, () => {
  console.log(`httpServer listening on *:${settings.port}`)
})
