const EVENTS_NAMESPACE = 'PLAYERS'

export const EVENTS = {
  ADD: `${EVENTS_NAMESPACE}/ADD`
}

const onAdd = (state, payload) => {
  return {
    list: [...state.list, {
      name: payload
    }]
  }
}

const INITIAL_STATE = {
  list: []
}

const callbacks = {
  [EVENTS.ADD]: onAdd
}

export default (state, event, payload) => {
  if (!event) {
    return INITIAL_STATE
  }

  const callback = callbacks[event]
  if (callback) {
    return callback(state, payload)
  }

  return state
}
