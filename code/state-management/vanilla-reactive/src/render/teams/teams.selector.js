const getPlayerName = (state, playerId) => state.players.list[playerId].name

export default state => state.teams.list.map((team, index) => {
  return {
    name: team.name,
    id: index,
    players: team.players.map(playerId => ({
      name: getPlayerName(state, playerId),
      id: playerId
    }))
  }
})
