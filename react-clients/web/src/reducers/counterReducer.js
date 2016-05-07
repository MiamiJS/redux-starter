import {Map} from 'immutable'

export default function(state = Map({}), action) {
  switch (action.type) {
    case 'MERGE_STATE':
      return state.merge(action.serverState)
  }
  return state
}
