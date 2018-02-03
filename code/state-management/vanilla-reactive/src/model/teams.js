import observableFactory from '../observableFactory'

const createInitialState = () => ({
  list: []
})

export default (initialState) => {
  const state = initialState || createInitialState()

  const add = name => {
    state.list.push({
      name,
      players: []
    })
  }

  const addPlayer = (teamId, playerId) => {
    state.list[teamId].players.push(playerId)
  }

  const removePlayer = (teamId, playerId) => {
    state.list[teamId].players = state.list[teamId].players.filter(player => playerId !== player)
  }

  const base = {
    add,
    addPlayer,
    removePlayer
  }

  return observableFactory(base, () => state)
}
