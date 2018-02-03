import teamsFactory from './teams'

test('should add teams', () => {
  const state = {
    list: []
  }

  const EXPECTATION = [{
    name: 'FOX',
    players: []
  }]

  const teams = teamsFactory(state)

  teams.add('FOX')

  expect(state.list).toEqual(EXPECTATION)
})

test('should add players to teams', () => {
  const state = {
    list: [{
      name: 'FOX',
      players: []
    }]
  }

  const teams = teamsFactory(state)

  teams.addPlayer(0, 0)
  teams.addPlayer(0, 2)

  expect(state.list[0].players).toEqual([0, 2])
})

test('should remove players from teams', () => {
  const state = {
    list: [{
      name: 'FOX',
      players: [0, 2]
    }]
  }

  const teams = teamsFactory(state)

  teams.removePlayer(0, 0)

  expect(state.list[0].players).toEqual([2])
})

test('should throw an error if no state is provided', () => {
  expect(() => {
    teamsFactory()
  }).toThrow()
})

test('should format an invalid state', () => {
  const state = {}
  teamsFactory(state)
  expect(state.list).toEqual([])
})
