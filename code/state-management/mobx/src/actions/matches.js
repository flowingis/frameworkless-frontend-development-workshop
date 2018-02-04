
  const add = (state, teamA, teamB) => {
    state.matches.push({
      teamA,
      teamB,
      teamAScore: 0,
      teamBScore: 0,
      started: false
    })
  }

  const start = (state, matchId, when) => {
    state.matches[matchId].started = true
    state.matches[matchId].startTime = when
  }

  const stop = (state, matchId, when) => {
    state.matches[matchId].started = false
    state.matches[matchId].stopTime = when
  }

  const score = (state, matchId, teamId) => {
    const match = state.matches[matchId]
    if (match.teamA === teamId) {
      match.teamAScore++
    }
    if (match.teamB === teamId) {
      match.teamBScore++
    }
  }

  export default {
    add,
    start,
    stop,
    score
  }
