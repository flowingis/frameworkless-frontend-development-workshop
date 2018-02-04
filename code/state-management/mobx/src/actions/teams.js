const add = (state, name) => {
  state.teams.push({
    name,
    players: []
  })
}

const addPlayer = (state, teamId, playerId) => {
  state.teams[teamId].players.push(playerId)
}

const removePlayer = (state, teamId, playerId) => {
  state.teams[teamId].players = state.teams[teamId].players.filter(player => playerId !== player)
}

export default {
  add,
  addPlayer,
  removePlayer
}
