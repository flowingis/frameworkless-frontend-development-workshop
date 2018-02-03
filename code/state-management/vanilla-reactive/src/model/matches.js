import observableFactory from '../observableFactory'

const createInitialState = () => ({
  list: []
})

export default (initialState) => {
  const state = initialState || createInitialState()

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

  const base = {
    add,
    start,
    stop,
    score
  }

  return observableFactory(base, () => state)
}
