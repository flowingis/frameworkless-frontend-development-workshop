import matchesActionsFactory from './matches'
const now = (new Date()).getTime()

test('should add matches', () => {
  const state = {
    list: []
  }

  const matchesActions = matchesActionsFactory(state)

  const EXPECTATION = [{
    teamA: 12,
    teamB: 34,
    teamAScore: 0,
    teamBScore: 0,
    started: false
  }]

  matchesActions.add(12, 34)

  expect(state.list).toEqual(EXPECTATION)
})

test('should start a match', () => {
  const state = {
    list: [{
      teamA: 12,
      teamB: 34,
      teamAScore: 0,
      teamBScore: 0,
      started: false
    }]
  }
  const matchesActions = matchesActionsFactory(state)

  matchesActions.start(0, now)
  expect(state.list[0].started).toBe(true)
  expect(state.list[0].startTime).toBe(now)
})

test('should stop a match', () => {
  const state = {
    list: [{
      teamA: 12,
      teamB: 34,
      teamAScore: 0,
      teamBScore: 0,
      started: true
    }]
  }

  const matchesActions = matchesActionsFactory(state)

  matchesActions.stop(0, now)

  expect(state.list[0].started).toBe(false)
  expect(state.list[0].stopTime).toBe(now)
})

test('should add score to the right team', () => {
  const state = {
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

  const matchesActions = matchesActionsFactory(state)

  matchesActions.score(1, 87)
  matchesActions.score(1, 87)
  matchesActions.score(1, 0)
  matchesActions.score(1, 87)
  matchesActions.score(1, 0)

  expect(state.list[1].teamAScore).toBe(3)
  expect(state.list[1].teamBScore).toBe(2)
})

test('should throw an error if no state is provided', () => {
  expect(() => {
    matchesActionsFactory()
  }).toThrow()
})

test('should format an invalid state', () => {
  const state = {}
  matchesActionsFactory(state)
  expect(state.list).toEqual([])
})
