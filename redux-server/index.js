import store from './src/store'
import startServer from './src/server'
import Firebase from 'firebase'

export const firebaseRef = new Firebase('https://miamijs-redux.firebaseio.com/')

startServer(store)

//set inital state
firebaseRef.child('currentNumber').on("value", function(snapshot) {
  store.dispatch({type: 'SET_STATE', currentNumber: snapshot.val()})
})
