const EVENTS_NAMESPACE = 'PLAYERS'

const ACTION_TYPES = {
  ADD: `${EVENTS_NAMESPACE}/ADD`
}

export const actions = {
  add: name => ({type: ACTION_TYPES.ADD, payload: name})
}

const onAdd = (state, action) => {
  return {
    list: [...state.list, {
      name: action.payload
    }]
  }
}

const INITIAL_STATE = {
  list: []
}

const callbacks = {
  [ACTION_TYPES.ADD]: onAdd
}

export default (state = INITIAL_STATE, action) => {
  const callback = callbacks[action.type]
  if (callback) {
    return callback(state, action)
  }

  return state
}
