import playersFactory from './players'
let players

beforeEach(() => {
  players = playersFactory()
})

test('listeners should be invoked immediatly', () => {
  let counter = 0
  players.addChangeListener(data => {
    counter++
  })
  expect(counter).toBe(1)
})

test('listeners should be invoked when changing data', () => {
  let counter = 0
  players.addChangeListener(data => {
    counter++
  })
  players.add('Solid Snake')
  expect(counter).toBe(2)
})

test('listeners should be removed when unsubscribing', () => {
  let counter = 0
  const unsubscribe = players.addChangeListener(data => {
    counter++
  })
  unsubscribe()
  players.add('Solid Snake')
  expect(counter).toBe(1)
})

test('state should be immutable', () => {
  players.addChangeListener(data => {
    expect(() => {
      data.list = 1
    }).toThrow()
  })
})

test('should add players', () => {
  let list
  const EXPECTATION = [{
    name: 'Solid Snake'
  }]

  players.addChangeListener(data => {
    list = data.list
  })
  players.add('Solid Snake')
  expect(list).toEqual(EXPECTATION)
})
