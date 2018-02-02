const EVENTS_NAMESPACE = 'TEAMS'

const ACTION_TYPES = {
  ADD: `${EVENTS_NAMESPACE}/ADD`,
  ADD_PLAYER: `${EVENTS_NAMESPACE}/ADD_PLAYER`,
  REMOVE_PLAYER: `${EVENTS_NAMESPACE}/REMOVE_PLAYER`
}

export const actions = {
  add: name => ({type: ACTION_TYPES.ADD, payload: name}),
  addPlayer: (teamId, playerId) => ({type: ACTION_TYPES.ADD_PLAYER, payload: { teamId, playerId }}),
  removePlayer: (teamId, playerId) => ({type: ACTION_TYPES.REMOVE_PLAYER, payload: { teamId, playerId }})
}

const onAdd = (state, action) => {
  return {
    list: [...state.list, {
      name: action.payload,
      players: []
    }]
  }
}

const onAddPlayer = (state, action) => {
  const { teamId, playerId } = action.payload
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

const onRemovePlayer = (state, action) => {
  const { teamId, playerId } = action.payload
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
  [ACTION_TYPES.ADD]: onAdd,
  [ACTION_TYPES.ADD_PLAYER]: onAddPlayer,
  [ACTION_TYPES.REMOVE_PLAYER]: onRemovePlayer
}

export default (state = INITIAL_STATE, action) => {
  const callback = callbacks[action.type]
  if (callback) {
    return callback(state, action)
  }

  return state
}
