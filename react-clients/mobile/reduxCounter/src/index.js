import React, {View, Text} from 'react-native'
import { Provider } from 'react-redux'
import io from 'socket.io-client/socket.io'
import {applyMiddleware, createStore} from 'redux'
import './UserAgent'
import AppContainer from './views/AppContainer'
import serverMiddleware from './middleware'
import rootReducer from './reducers'
import {mergeState} from './actions/counterActions'



const socket = io(`http://localhost:8090/`, {jsonp: false, transports: ['websocket'] })
socket.on('state', serverState =>
  store.dispatch(mergeState(serverState))
)

const createStoreWithMiddleware = applyMiddleware(serverMiddleware(socket))(createStore)
const store = createStoreWithMiddleware(rootReducer)

console.log(store.getState())

export default React.createClass({
  render (){
    return <Provider store={store}><AppContainer/></Provider>
  }
})
