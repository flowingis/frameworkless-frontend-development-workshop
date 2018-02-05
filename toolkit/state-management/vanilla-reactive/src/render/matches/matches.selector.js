const getTeamName = (state, teamId) => state.teams.list[teamId].name

export default state => state.matches.list.map((match, index) => {
  return {
    ...match,
    id: index,
    teamAName: getTeamName(state, match.teamA),
    teamBName: getTeamName(state, match.teamB)
  }
})
