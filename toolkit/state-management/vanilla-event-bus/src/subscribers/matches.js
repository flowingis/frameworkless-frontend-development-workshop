const EVENTS_NAMESPACE = 'MATCHES'

export const EVENTS = {
  ADD: `${EVENTS_NAMESPACE}/ADD`,
  START: `${EVENTS_NAMESPACE}/START`,
  STOP: `${EVENTS_NAMESPACE}/STOP`,
  SCORE: `${EVENTS_NAMESPACE}/SCORE`
}

const onAdd = (state, payload) => {
  const {teamA, teamB} = payload
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

const onStart = (state, payload) => {
  const { matchId, when } = payload
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

const onStop = (state, payload) => {
  const { matchId, when } = payload
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

const onScore = (state, payload) => {
  const { matchId, teamId } = payload
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
  [EVENTS.ADD]: onAdd,
  [EVENTS.START]: onStart,
  [EVENTS.STOP]: onStop,
  [EVENTS.SCORE]: onScore
}

export default (state, event, payload) => {
  if (!event) {
    return INITIAL_STATE
  }

  const callback = callbacks[event]
  if (callback) {
    return callback(state, payload)
  }

  return state
}
