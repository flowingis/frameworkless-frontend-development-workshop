import matchesActions from './matches'
const now = (new Date()).getTime()

test('should add matches', () => {
  const state = {
    matches: []
  }

  const EXPECTATION = [{
    teamA: 12,
    teamB: 34,
    teamAScore: 0,
    teamBScore: 0,
    started: false
  }]

  matchesActions.add(state, 12, 34)

  expect(state.matches).toEqual(EXPECTATION)
})

test('should start a match', () => {
  const state = {
    matches: [{
      teamA: 12,
      teamB: 34,
      teamAScore: 0,
      teamBScore: 0,
      started: false
    }]
  }

  matchesActions.start(state, 0, now)
  expect(state.matches[0].started).toBe(true)
  expect(state.matches[0].startTime).toBe(now)
})

test('should stop a match', () => {
  const state = {
    matches: [{
      teamA: 12,
      teamB: 34,
      teamAScore: 0,
      teamBScore: 0,
      started: true
    }]
  }

  matchesActions.stop(state, 0, now)

  expect(state.matches[0].started).toBe(false)
  expect(state.matches[0].stopTime).toBe(now)
})

test('should add score to the right team', () => {
  const state = {
    matches: [
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

  matchesActions.score(state, 1, 87)
  matchesActions.score(state, 1, 87)
  matchesActions.score(state, 1, 0)
  matchesActions.score(state, 1, 87)
  matchesActions.score(state, 1, 0)

  expect(state.matches[1].teamAScore).toBe(3)
  expect(state.matches[1].teamBScore).toBe(2)
})
