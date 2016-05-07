import Server from 'socket.io'

export default function startServer(store) {
  const io = new Server().attach(8090)
  console.log('Hello from your websocket redux server!')
}
