import teamsActionsFactory from './teams'

test('should add teams', () => {
  const state = {
    list: []
  }

  const EXPECTATION = [{
    name: 'FOX',
    players: []
  }]

  const teamsActions = teamsActionsFactory(state)

  teamsActions.add('FOX')

  expect(state.list).toEqual(EXPECTATION)
})

test('should add players to teams', () => {
  const state = {
    list: [{
      name: 'FOX',
      players: []
    }]
  }

  const teamsActions = teamsActionsFactory(state)

  teamsActions.addPlayer(0, 0)
  teamsActions.addPlayer(0, 2)

  expect(state.list[0].players).toEqual([0, 2])
})

test('should remove players from teams', () => {
  const state = {
    list: [{
      name: 'FOX',
      players: [0, 2]
    }]
  }

  const teamsActions = teamsActionsFactory(state)

  teamsActions.removePlayer(0, 0)

  expect(state.list[0].players).toEqual([2])
})

test('should throw an error if no state is provided', () => {
  expect(() => {
    teamsActionsFactory()
  }).toThrow()
})

test('should format an invalid state', () => {
  const state = {}
  teamsActionsFactory(state)
  expect(state.list).toEqual([])
})
