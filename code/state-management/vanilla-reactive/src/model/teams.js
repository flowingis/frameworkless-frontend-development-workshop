export default (state) => {
  if (!state) {
    throw new Error('state container is required')
  }

  if (!state.list) {
    state.list = []
  }

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

  return {
    add,
    addPlayer,
    removePlayer
  }
}
