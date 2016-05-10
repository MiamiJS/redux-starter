##### KickStart
```js
it('Set Initial State', ()=>{
  const currentNumber = 32
  const nextState = setState(state, currentNumber)
  expect(nextState).to.equal(fromJS({currentNumber:currentNumber}))
})
```

```js
export const setState = (state, currentNumber) => state.set('currentNumber', currentNumber)

```

##### Reducing the Reducer
```js
it('go forward and backward', ()=>{
  const actions = [
    {type: 'SET_STATE', currentNumber:5},
    {type: 'INCREMENT'},  //+1
    {type: 'INCREMENT'},  //+1
    {type: 'DECREMENT'},  //-1
  ]
  const finalState = actions.reduce(reducer, Map({}))
  expect(finalState).to.equal(fromJS({currentNumber:6}))
})
```

##### Configuring the socket
```js
store.subscribe(
  ()=> io.emit('state', store.getState().toJS())  //emits a snapshot when the state changes internally
)
```

```js
io.on('connection', (socket) => {
  socket.emit('state', store.getState().toJS())  //listens for external client connections and emits the state
  socket.on('action', store.dispatch.bind(store))
})
```


##### Logger
```js
const logger = store => next => action => {
  const result = next(action)
  console.log(action.type, store.getState())
}

```
##### FB Middleware

```js
//set inital state
firebaseRef.child('currentNumber').on("value", function(snapshot) {
  store.dispatch({type: 'SET_STATE', currentNumber: snapshot.val()})
})
```

```js
const fbMiddleware = store => next => action => {
	const result = next(action)
	if(action.type!=='SET_STATE'){
		console.log(action.type, store.getState())
		firebaseRef.update(store.getState().toJS())}}
```
