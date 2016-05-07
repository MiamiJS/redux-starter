import {expect} from 'chai'
import {Map, fromJS} from 'immutable';
import reducer from '../src/reducer'

describe('Reducer', () => {


  let state
  beforeEach(() => {

    state = Map({currentNumber:0})

  })


  it('Handles SET_STATE', ()=>{
    const action = {type: 'SET_STATE', currentNumber:32}
    const nextState = reducer(state, action);
    expect(nextState).to.equal(fromJS({currentNumber:32}))
  })

  it('Handles INCREMENT', ()=>{
    const action = {type: 'INCREMENT'}
    const nextState = reducer(state, action);
    expect(nextState).to.equal(fromJS({currentNumber:1}))
  })

  it('Handles DECREMENT', ()=>{
    const action = {type: 'DECREMENT'}
    const nextState = reducer(state, action);
    expect(nextState).to.equal(fromJS({currentNumber:-1}))
  })

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

})
