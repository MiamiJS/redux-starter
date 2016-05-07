import {expect} from 'chai'
import {Map, fromJS} from 'immutable';
import {setState, increment, decrement} from '../src/core'


describe('Business Logic', () => {

  let state
  beforeEach(() => {
    state = Map({currentNumber:0})
  })


  it('Set Initial State', ()=>{
    const currentNumber = 32
    const nextState = setState(state, currentNumber)
    expect(nextState).to.equal(fromJS({currentNumber:32}))

  })

  it('Increment', ()=>{
    const nextState = increment(state)
    expect(nextState).to.equal(fromJS({currentNumber:1}))
  })
  it('Decrement', ()=>{
    const nextState = decrement(state)
    expect(nextState).to.equal(fromJS({currentNumber:-1}))
  })

})
