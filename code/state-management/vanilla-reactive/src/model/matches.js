const freeze = state => Object.freeze(Object.assign({}, state))

const createInitialState = () => ({
  list: []
})

export default (initialState) => {
  const state = initialState || createInitialState()
  let changeListeners = []

  const invokeListeners = () => changeListeners.forEach(cb => cb(freeze(state)))

  const addChangeListener = cb => {
    changeListeners.push(cb)
    cb(freeze(state))
    return () => {
      changeListeners = changeListeners.filter(element => element !== cb)
    }
  }

  const add = (teamA, teamB) => {
    state.list.push({
      teamA,
      teamB,
      teamAScore: 0,
      teamBScore: 0,
      started: false
    })
    invokeListeners()
  }

  const start = (matchId, when) => {
    state.list[matchId].started = true
    state.list[matchId].startTime = when
    invokeListeners()
  }

  const stop = (matchId, when) => {
    state.list[matchId].started = false
    state.list[matchId].stopTime = when
    invokeListeners()
  }

  const score = (matchId, teamId) => {
    const match = state.list[matchId]
    if (match.teamA === teamId) {
      match.teamAScore++
    }
    if (match.teamB === teamId) {
      match.teamBScore++
    }
    invokeListeners()
  }

  return {
    addChangeListener,
    add,
    start,
    stop,
    score
  }
}
