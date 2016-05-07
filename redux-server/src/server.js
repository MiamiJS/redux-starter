import Server from 'socket.io'

export default function startServer(store) {
  const io = new Server().attach(8090)
  console.log('Hello from your websocket redux server!')


  store.subscribe(
    ()=> io.emit('state', store.getState().toJS())
  )

  io.on('connection', (socket) => {
    socket.emit('state', store.getState().toJS()) //immediately syncs server state for new client
    socket.on('action', store.dispatch.bind(store)) // the SOCKET aka the CLIENT is emiting the STATE to the Server
  })

}
