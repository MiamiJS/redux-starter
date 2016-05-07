import {Map} from 'immutable'
import {setState, increment, decrement} from './core'

export default function reducer(state=Map(), action) {
  switch (action.type) {
  case 'SET_STATE':
    return setState(state, action.currentNumber)
  case 'INCREMENT':
    return increment(state)
  case 'DECREMENT':
    return decrement(state)
  }
  return state
}
