const freeze = state => Object.freeze(Object.assign({}, state))

const createInitialState = () => ({
  list: []
})

export default (initialState) => {
  const state = initialState || createInitialState()
  let changeListeners = []

  const invokeListeners = () => changeListeners.forEach(cb => cb(freeze(state)))

  const addChangeListener = cb => {
    changeListeners.push(cb)
    cb(freeze(state))
    return () => {
      changeListeners = changeListeners.filter(element => element !== cb)
    }
  }

  const add = name => {
    state.list.push({
      name,
      players: []
    })
    invokeListeners()
  }

  const addPlayer = (teamId, playerId) => {
    state.list[teamId].players.push(playerId)
    invokeListeners()
  }

  const removePlayer = (teamId, playerId) => {
    state.list[teamId].players = state.list[teamId].players.filter(player => playerId !== player)
    invokeListeners()
  }

  return {
    addChangeListener,
    add,
    addPlayer,
    removePlayer
  }
}
