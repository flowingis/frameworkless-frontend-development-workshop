const getPlayerName = (state, playerId) => state.players[playerId].name

export default state => state.teams.map((team, index) => {
  return {
    name: team.name,
    id: index,
    players: team.players.map(playerId => ({
      name: getPlayerName(state, playerId),
      id: playerId
    }))
  }
})
