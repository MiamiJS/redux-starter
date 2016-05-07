import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import io from 'socket.io-client'
import {applyMiddleware, createStore} from 'redux'
import AppContainer from './views/AppContainer'
import serverMiddleware from './middleware'
import rootReducer from './reducers'
import {mergeState} from './actions/counterActions'


const socket = io(`${location.protocol}//${location.hostname}:8090`)
socket.on('state', serverState =>
  store.dispatch(mergeState(serverState))
)

const createStoreWithMiddleware = applyMiddleware(serverMiddleware(socket))(createStore)
const store = createStoreWithMiddleware(rootReducer)



const Index = React.createClass({
  render (){
    return <Provider store={store}><AppContainer/></Provider>
  }
})


render(<Index /> , document.getElementById('root'))
