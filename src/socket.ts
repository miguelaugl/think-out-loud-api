import http from 'http'

import { Server } from 'socket.io'

enum SocketEvents {
  USER_CONNECTED = 'user_connected',
  MESSAGE_SENT = 'message_sent'
}

type Message = {
  user: string
  text: string
  date: Date
}

export function createSocket (httpServer: http.Server): void {
  const io = new Server(httpServer, {
    cors: {
      origin: '*',
    },
  })

  io.on('connection', (socket) => {
    console.log(`User just connected with id: ${socket.id}`)

    socket.on(SocketEvents.USER_CONNECTED, (user: string) => {
      console.log(`User ${user} connected`)
      io.emit(SocketEvents.USER_CONNECTED, user)
    })

    socket.on(SocketEvents.MESSAGE_SENT, (message: Message) => {
      console.log(`User ${message.user} sent message: ${message.text}`)
      io.emit(SocketEvents.MESSAGE_SENT, message)
    })
  })
}
