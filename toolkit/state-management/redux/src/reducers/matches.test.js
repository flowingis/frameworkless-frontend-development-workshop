import matches, { actions } from './matches'

describe('matches reducers', () => {
  test('should add player with an ADD action', () => {
    let newState = matches({list: []}, actions.add(24, 47))
    newState = matches(newState, actions.add(87, 0))
    const EXPECTATION = {
      list: [
        {
          teamA: 24,
          teamB: 47,
          teamAScore: 0,
          teamBScore: 0,
          started: false
        },
        {
          teamA: 87,
          teamB: 0,
          teamAScore: 0,
          teamBScore: 0,
          started: false
        }
      ]
    }
    expect(newState).toEqual(EXPECTATION)
  })
  test('should start a match with a START action', () => {
    const INITIAL_STATE = {
      list: [
        {
          teamA: 24,
          teamB: 47,
          teamAScore: 0,
          teamBScore: 0,
          started: false
        },
        {
          teamA: 87,
          teamB: 0,
          teamAScore: 0,
          teamBScore: 0,
          started: false
        }
      ]
    }
    const now = (new Date()).getTime()
    const newState = matches(INITIAL_STATE, actions.start(0, now))
    expect(newState.list[0].started).toBe(true)
    expect(newState.list[0].startTime).toBe(now)
  })
  test('should stop a match with a STOP event', () => {
    const INITIAL_STATE = {
      list: [
        {
          teamA: 24,
          teamB: 47,
          teamAScore: 0,
          teamBScore: 0,
          started: false
        },
        {
          teamA: 87,
          teamB: 0,
          teamAScore: 0,
          teamBScore: 0,
          started: true
        }
      ]
    }
    const now = (new Date()).getTime()
    const newState = matches(INITIAL_STATE, actions.stop(1, now))
    expect(newState.list[1].started).toBe(false)
    expect(newState.list[1].stopTime).toBe(now)
  })
  test('should add score to the right team with a SCORE event', () => {
    const INITIAL_STATE = {
      list: [
        {
          teamA: 24,
          teamB: 47,
          teamAScore: 0,
          teamBScore: 0,
          started: false
        },
        {
          teamA: 87,
          teamB: 0,
          teamAScore: 0,
          teamBScore: 0,
          started: true
        }
      ]
    }

    let newState = matches(INITIAL_STATE, actions.score(1, 87))
    newState = matches(newState, actions.score(1, 87))
    newState = matches(newState, actions.score(1, 0))
    newState = matches(newState, actions.score(1, 87))
    newState = matches(newState, actions.score(1, 0))
    expect(newState.list[1].teamAScore).toBe(3)
    expect(newState.list[1].teamBScore).toBe(2)
  })
})
