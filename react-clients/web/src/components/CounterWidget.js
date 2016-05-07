import React from 'react'

const Counter = ({onIncrement, onDecrement, currentNumber})=>(
  <div className='is-flex' style={styles.container}>

    <p style={styles.text}>{currentNumber}</p>

    <p>
      <button className="button is-large is-success" onClick={onIncrement}>+</button> &nbsp;
      <button className="button is-large is-danger" onClick={onDecrement} >-</button>
    </p>
  </div>
)

const styles = {
  container:{
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '80vh',
  },
  text:{
    fontSize: 75,
  },
}


export default Counter
