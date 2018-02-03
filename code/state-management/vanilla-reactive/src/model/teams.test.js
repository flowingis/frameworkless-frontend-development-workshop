import teamsFactory from './teams'
let teams

beforeEach(() => {
  teams = teamsFactory()
})

test('listeners should be invoked immediatly', () => {
  let counter = 0
  teams.addChangeListener(data => {
    counter++
  })
  expect(counter).toBe(1)
})

test('listeners should be invoked when changing data', () => {
  let counter = 0
  teams.addChangeListener(data => {
    counter++
  })
  teams.add('FOX')
  expect(counter).toBe(2)
})

test('listeners should be removed when unsubscribing', () => {
  let counter = 0
  const unsubscribe = teams.addChangeListener(data => {
    counter++
  })
  unsubscribe()
  teams.add('FOX')
  expect(counter).toBe(1)
})

test('state should be immutable', () => {
  teams.addChangeListener(data => {
    expect(() => {
      data.list = 1
    }).toThrow()
  })
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
