import teamsActions from './teams'

test('should add teams', () => {
  const state = {
    teams: []
  }

  const EXPECTATION = [{
    name: 'FOX',
    players: []
  }]

  teamsActions.add(state, 'FOX')

  expect(state.teams).toEqual(EXPECTATION)
})

test('should add players to teams', () => {
  const state = {
    teams: [{
      name: 'FOX',
      players: []
    }]
  }

  teamsActions.addPlayer(state, 0, 0)
  teamsActions.addPlayer(state, 0, 2)

  expect(state.teams[0].players).toEqual([0, 2])
})

test('should remove players from teams', () => {
  const state = {
    teams: [{
      name: 'FOX',
      players: [0, 2]
    }]
  }

  teamsActions.removePlayer(state, 0, 0)

  expect(state.teams[0].players).toEqual([2])
})
