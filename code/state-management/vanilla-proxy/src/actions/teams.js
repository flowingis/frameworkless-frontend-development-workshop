const add = (state, name) => {
  state.teams = [...state.teams, {
    name,
    players: []
  }]
}

const addPlayer = (state, teamId, playerId) => {
  state.teams = state.teams.map((team, index) => {
    if (index !== teamId) {
      return team
    }

    team.players = [...team.players, playerId]

    return team
  })
}

const removePlayer = (state, teamId, playerId) => {
  state.teams = state.teams.map((team, index) => {
    if (index !== teamId) {
      return team
    }

    team.players = team.players.filter(player => playerId !== player)
    return team
  })
}

export default {
  add,
  addPlayer,
  removePlayer
}
