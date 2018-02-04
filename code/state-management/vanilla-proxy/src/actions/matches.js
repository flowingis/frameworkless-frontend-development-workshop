
  const add = (state, teamA, teamB) => {
    state.matches = [...state.matches, {
      teamA,
      teamB,
      teamAScore: 0,
      teamBScore: 0,
      started: false
    }]
  }

  const start = (state, matchId, when) => {
    state.matches = state.matches.map((match, index) => {
      if (index !== matchId) {
        return match
      }

      return {
        ...match,
        started: true,
        startTime: when
      }
    })
  }

  const stop = (state, matchId, when) => {
    state.matches = state.matches.map((match, index) => {
      if (index !== matchId) {
        return match
      }

      return {
        ...match,
        started: false,
        stopTime: when
      }
    })
  }

  const score = (state, matchId, teamId) => {
    state.matches = state.matches.map((match, index) => {
      if (index !== matchId) {
        return match
      }

      if (match.teamA === teamId) {
        match.teamAScore++
      }
      if (match.teamB === teamId) {
        match.teamBScore++
      }
      return match
    })
  }

  export default {
    add,
    start,
    stop,
    score
  }
