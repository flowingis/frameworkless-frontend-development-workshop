const EVENTS_NAMESPACE = 'TEAMS'

export const EVENTS = {
  ADD: `${EVENTS_NAMESPACE}/ADD`,
  ADD_PLAYER: `${EVENTS_NAMESPACE}/ADD_PLAYER`,
  REMOVE_PLAYER: `${EVENTS_NAMESPACE}/REMOVE_PLAYER`
}

const onAdd = (state, payload) => {
  return {
    list: [...state.list, {
      name: payload,
      players: []
    }]
  }
}

const onAddPlayer = (state, payload) => {
  const { teamId, playerId } = payload
  const newList = state.list.map((team, index) => {
    if (index !== teamId) {
      return team
    }

    return {
      ...team,
      players: [
        ...team.players,
        playerId
      ]
    }
  })

  return {
    list: newList
  }
}

const onRemovePlayer = (state, payload) => {
  const { teamId, playerId } = payload
  const newList = state.list.map((team, index) => {
    if (index !== teamId) {
      return team
    }

    return {
      ...team,
      players: team.players.filter(player => player !== playerId)
    }
  })

  return {
    list: newList
  }
}

const INITIAL_STATE = {
  list: []
}

const callbacks = {
  [EVENTS.ADD]: onAdd,
  [EVENTS.ADD_PLAYER]: onAddPlayer,
  [EVENTS.REMOVE_PLAYER]: onRemovePlayer
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
