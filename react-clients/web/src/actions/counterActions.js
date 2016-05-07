export const mergeState= (serverState) => ({
  local: true,
  type: 'MERGE_STATE', serverState
})

export const onIncrement= () => ({type: 'INCREMENT'})
export const onDecrement= () => ({type: 'DECREMENT'})
