import matches, { EVENTS } from './matches'

describe('matches', () => {
  test('should initialize state with an empty array', () => {
    const newState = matches()
    expect(newState).toEqual({list: []})
  })
  test('should add player with an ADD event', () => {
    let newState = matches({list: []}, EVENTS.ADD, {teamA: 24, teamB: 47})
    newState = matches(newState, EVENTS.ADD, {teamA: 87, teamB: 0})
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
  test('should return the same state on any other event', () => {
    const state = {
      list: [
        {
          teamA: 24,
          teamB: 47,
          teamAScore: 0,
          teamBScore: 0,
          started: false
        }
      ]
    }
    const newState = matches(state, 'DUMMY_EVENT')
    expect(newState).toBe(state)
  })
  test('should start a match with a START event', () => {
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
    const newState = matches(INITIAL_STATE, EVENTS.START, {matchId: 0, when: now})
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
    const newState = matches(INITIAL_STATE, EVENTS.STOP, {matchId: 1, when: now})
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
    const now = (new Date()).getTime()
    let newState = matches(INITIAL_STATE, EVENTS.SCORE, {matchId: 1, teamId: 87})
    newState = matches(newState, EVENTS.SCORE, {matchId: 1, teamId: 87})
    newState = matches(newState, EVENTS.SCORE, {matchId: 1, teamId: 0})
    newState = matches(newState, EVENTS.SCORE, {matchId: 1, teamId: 87})
    newState = matches(newState, EVENTS.SCORE, {matchId: 1, teamId: 0})
    expect(newState.list[1].teamAScore).toBe(3)
    expect(newState.list[1].teamBScore).toBe(2)
  })
})
