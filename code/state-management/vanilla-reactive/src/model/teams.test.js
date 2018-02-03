import teamsFactory from './teams'
let teams

beforeEach(() => {
  teams = teamsFactory()
})

test('should add teams', () => {
  let list
  const EXPECTATION = [{
    name: 'FOX',
    players: []
  }]

  teams.addChangeListener(data => {
    list = data.list
  })
  teams.add('FOX')
  expect(list).toEqual(EXPECTATION)
})

test('should add players to teams', () => {
  let list
  const INITIAL_STATE = {
    list: [{
      name: 'FOX',
      players: []
    }]
  }
  const teams = teamsFactory(INITIAL_STATE)

  teams.addChangeListener(data => {
    list = data.list
  })
  teams.addPlayer(0, 0)
  teams.addPlayer(0, 2)
  expect(list[0].players).toEqual([0, 2])
})

test('should remove players from teams', () => {
  let list
  const INITIAL_STATE = {
    list: [{
      name: 'FOX',
      players: [0, 2]
    }]
  }

  const teams = teamsFactory(INITIAL_STATE)

  teams.addChangeListener(data => {
    list = data.list
  })
  teams.removePlayer(0, 0)
  expect(list[0].players).toEqual([2])
})
