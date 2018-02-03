import playersFactory from './players'

test('should add players', () => {
  const state = {
    list: []
  }

  const players = playersFactory(state)
  const EXPECTATION = [{
    name: 'Solid Snake'
  }]

  players.add('Solid Snake')

  expect(state.list).toEqual(EXPECTATION)
})

test('should throw an error if no state is provided', () => {
  expect(() => {
    playersFactory()
  }).toThrow()
})

test('should format an invalid state', () => {
  const state = {}
  playersFactory(state)
  expect(state.list).toEqual([])
})
