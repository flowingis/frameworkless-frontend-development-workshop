const EVENTS_NAMESPACE = 'MATCHES'

const ACTION_TYPES = {
  ADD: `${EVENTS_NAMESPACE}/ADD`,
  START: `${EVENTS_NAMESPACE}/START`,
  STOP: `${EVENTS_NAMESPACE}/STOP`,
  SCORE: `${EVENTS_NAMESPACE}/SCORE`
}

export const actions = {
  add: (teamA, teamB) => ({type: ACTION_TYPES.ADD, payload: {teamA, teamB}}),
  start: (matchId, when) => ({type: ACTION_TYPES.START, payload: { matchId, when }}),
  stop: (matchId, when) => ({type: ACTION_TYPES.STOP, payload: { matchId, when }}),
  score: (matchId, teamId) => ({type: ACTION_TYPES.SCORE, payload: { matchId, teamId }})
}

const onAdd = (state, action) => {
  const {teamA, teamB} = action.payload
  return {
    list: [...state.list, {
      teamA,
      teamB,
      teamAScore: 0,
      teamBScore: 0,
      started: false
    }]
  }
}

const onStart = (state, action) => {
  const { matchId, when } = action.payload
  return {
    list: state.list.map((match, index) => {
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
}

const onStop = (state, action) => {
  const { matchId, when } = action.payload
  return {
    list: state.list.map((match, index) => {
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
}

const onScore = (state, action) => {
  const { matchId, teamId } = action.payload
  return {
    list: state.list.map((match, index) => {
      if (index !== matchId) {
        return match
      }

      const newMatch = {
        ...match
      }

      if (teamId === newMatch.teamA) {
        newMatch.teamAScore++
      }

      if (teamId === newMatch.teamB) {
        newMatch.teamBScore++
      }

      return newMatch
    })
  }
}

const INITIAL_STATE = {
  list: []
}

const callbacks = {
  [ACTION_TYPES.ADD]: onAdd,
  [ACTION_TYPES.START]: onStart,
  [ACTION_TYPES.STOP]: onStop,
  [ACTION_TYPES.SCORE]: onScore
}

export default (state = INITIAL_STATE, action) => {
  const callback = callbacks[action.type]
  if (callback) {
    return callback(state, action)
  }

  return state
}
