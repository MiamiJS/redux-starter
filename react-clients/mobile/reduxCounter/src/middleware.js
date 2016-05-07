//currying
export default socket => store => next => action => {
  if (!action.local) {   //emits action to server
    socket.emit('action', action)
  }
  return next(action)
}
