const getTeamName = (state, teamId) => state.teams[teamId].name

export default state => state.matches.map((match, index) => {
  return {
    ...match,
    id: index,
    teamAName: getTeamName(state, match.teamA),
    teamBName: getTeamName(state, match.teamB)
  }
})
