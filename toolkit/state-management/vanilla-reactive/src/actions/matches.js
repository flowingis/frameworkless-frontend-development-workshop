export default (state) => {
  if (!state) {
    throw new Error('state container is required')
  }

  if (!state.list) {
    state.list = []
  }

  const add = (teamA, teamB) => {
    state.list.push({
      teamA,
      teamB,
      teamAScore: 0,
      teamBScore: 0,
      started: false
    })
  }

  const start = (matchId, when) => {
    state.list[matchId].started = true
    state.list[matchId].startTime = when
  }

  const stop = (matchId, when) => {
    state.list[matchId].started = false
    state.list[matchId].stopTime = when
  }

  const score = (matchId, teamId) => {
    const match = state.list[matchId]
    if (match.teamA === teamId) {
      match.teamAScore++
    }
    if (match.teamB === teamId) {
      match.teamBScore++
    }
  }

  return {
    add,
    start,
    stop,
    score
  }
}
