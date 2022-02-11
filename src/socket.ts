import http from 'http'

import { Server } from 'socket.io'

enum SocketEvents {
  MESSAGE_SENT = 'message_sent'
}

export function createSocket (httpServer: http.Server): void {
  const io = new Server(httpServer, {
    cors: {
      origin: '*',
    },
  })

  io.on('connection', (socket) => {
    console.log(`User just connected with id: ${socket.id}`)

    socket.on(SocketEvents.MESSAGE_SENT, (message: string) => {
      console.log(`User ${socket.id} sent message: ${message}`)
      io.emit(SocketEvents.MESSAGE_SENT, message)
    })
  })
}
